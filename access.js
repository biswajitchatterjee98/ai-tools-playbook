(function (global) {
  var manifest = null;
  var permissions = null;
  var titleById = {};

  function isOfflineToken() {
    var token = global.PlaybookAuth.currentToken();
    if (!token) return false;
    var t = String(token);
    return t.indexOf('local-') === 0 || t.indexOf('hub-') === 0;
  }

  function loadManifest() {
    return fetch('content-manifest.json').then(function (r) { return r.json(); }).then(function (data) {
      manifest = data;
      (data.sections || []).forEach(function (sec) {
        titleById[sec.id] = sec.title;
      });
      return data;
    }).catch(function () {
      manifest = { sections: [] };
      return manifest;
    });
  }

  function loadPermissions() {
    if (!global.PlaybookApi || !global.PlaybookApi.configured() || isOfflineToken()) {
      permissions = {
        restricted_sections: [],
        granted_sections: [],
        pending_sections: []
      };
      return Promise.resolve(permissions);
    }
    return global.PlaybookApi.permissions(global.PlaybookAuth.currentToken()).then(function (result) {
      if (!result.ok) {
        permissions = { restricted_sections: [], granted_sections: [], pending_sections: [] };
        return permissions;
      }
      permissions = result;
      return permissions;
    });
  }

  function sectionTitle(sectionId) {
    if (titleById[sectionId]) return titleById[sectionId];
    var el = document.querySelector('[data-section-id="' + sectionId + '"] h2, #' + sectionId);
    return el ? el.textContent.trim() : sectionId;
  }

  function isRestricted(sectionId) {
    return permissions.restricted_sections.indexOf(sectionId) !== -1;
  }

  function isGranted(sectionId) {
    return permissions.granted_sections.indexOf(sectionId) !== -1;
  }

  function isPending(sectionId) {
    return permissions.pending_sections.indexOf(sectionId) !== -1;
  }

  function ensureGate(block, type) {
    var existing = block.querySelector('.access-gate, .access-gate-pending');
    if (existing) existing.remove();

    var gate = document.createElement('div');
    gate.className = type === 'pending' ? 'access-gate-pending' : 'access-gate';
    var title = sectionTitle(block.getAttribute('data-section-id'));
    if (type === 'pending') {
      gate.innerHTML =
        '<h4>Access request pending</h4>' +
        '<p>Your request for <strong>' + title + '</strong> is waiting for admin approval.</p>';
    } else {
      gate.innerHTML =
        '<h4>Get access</h4>' +
        '<p><strong>' + title + '</strong> is restricted for your account.</p>' +
        '<button type="button" class="btn-primary access-request-btn">Get access</button>';
    }
    block.insertBefore(gate, block.firstChild);
    return gate;
  }

  function applyGates() {
    document.querySelectorAll('.content-block[data-section-id]').forEach(function (block) {
      var sectionId = block.getAttribute('data-section-id');
      block.classList.remove('is-gated', 'is-pending', 'is-open');

      if (!isRestricted(sectionId)) {
        block.querySelectorAll('.access-gate, .access-gate-pending').forEach(function (n) { n.remove(); });
        return;
      }

      if (isGranted(sectionId)) {
        block.classList.add('is-open');
        block.querySelectorAll('.access-gate, .access-gate-pending').forEach(function (n) { n.remove(); });
        return;
      }

      block.classList.add('is-gated');
      if (isPending(sectionId)) {
        block.classList.add('is-pending');
        ensureGate(block, 'pending');
      } else {
        ensureGate(block, 'request');
      }
    });

    document.querySelectorAll('.toc-subs a[data-section-id]').forEach(function (link) {
      var sid = link.getAttribute('data-section-id');
      link.classList.toggle('is-locked', isRestricted(sid) && !isGranted(sid));
    });
  }

  function openModal(sectionId) {
    var modal = document.getElementById('access-modal');
    if (!modal) return;
    document.getElementById('access-section-id').value = sectionId;
    document.getElementById('access-section-title').textContent = sectionTitle(sectionId);
    document.getElementById('access-notes').value = '';
    document.getElementById('access-form-error').hidden = true;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    var modal = document.getElementById('access-modal');
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
  }

  function wireModal() {
    var modal = document.getElementById('access-modal');
    if (!modal) return;

    modal.querySelectorAll('[data-close-modal]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.access-request-btn');
      if (!btn) return;
      var block = btn.closest('.content-block');
      if (!block) return;
      openModal(block.getAttribute('data-section-id'));
    });

    document.getElementById('access-request-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var sectionId = document.getElementById('access-section-id').value;
      var notes = document.getElementById('access-notes').value;
      var err = document.getElementById('access-form-error');

      if (!global.PlaybookApi.configured() || isOfflineToken()) {
        err.textContent = 'Access requests require the Google Sheet API. Configure API_URL in config.js.';
        err.hidden = false;
        return;
      }

      global.PlaybookApi.requestAccess(global.PlaybookAuth.currentToken(), sectionId, notes).then(function (result) {
        if (!result.ok) {
          err.textContent = result.error || 'Could not submit request.';
          err.hidden = false;
          return;
        }
        closeModal();
        if (permissions.pending_sections.indexOf(sectionId) === -1) {
          permissions.pending_sections.push(sectionId);
        }
        applyGates();
      });
    });
  }

  function showAdminLink() {
    var adminLink = document.querySelector('.toc-admin');
    if (adminLink && global.PlaybookAuth.isAdmin()) adminLink.classList.add('is-visible');
    var userEl = document.querySelector('.toc-user');
    var user = global.PlaybookAuth.currentUser();
    if (userEl && user) userEl.innerHTML = 'Signed in as <strong>' + user + '</strong>';
  }

  function init() {
    showAdminLink();
    Promise.all([loadManifest(), loadPermissions()])
      .then(function () {
        applyGates();
        wireModal();
      })
      .catch(function () {
        applyGates();
      })
      .finally(showAdminLink);
  }

  global.PlaybookAccess = {
    init: init,
    refresh: function () {
      return loadPermissions().then(applyGates);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
