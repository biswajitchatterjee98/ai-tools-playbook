(function () {
  var LEARNER_USERS = [
    'demo', 'learner1', 'learner2', 'trainer', 'guest', 'student1', 'student2', 'webisdom', 'traininglobe'
  ];

  var state = { manifest: null, policies: {}, grants: [], users: [], selectedSection: null };

  function msg(text, isError) {
    var el = document.getElementById('admin-msg');
    el.textContent = text;
    el.classList.toggle('error', Boolean(isError));
    el.hidden = !text;
  }

  function sectionTitle(id) {
    if (!state.manifest) return id;
    var match = state.manifest.sections.filter(function (s) { return s.id === id; })[0];
    return match ? match.title : id;
  }

  function policyFor(sectionId) {
    return state.policies[sectionId] || { is_restricted: false, default_expiry_days: 30 };
  }

  function timeLeft(expiresAt) {
    if (!expiresAt) return 'No expiry';
    var ms = new Date(expiresAt).getTime() - Date.now();
    if (ms <= 0) return 'Expired';
    var days = Math.floor(ms / 86400000);
    var hours = Math.floor((ms % 86400000) / 3600000);
    return days + 'd ' + hours + 'h';
  }

  function loadManifestLocal() {
    return fetch('content-manifest.json').then(function (r) { return r.json(); }).catch(function () {
      return { sections: [] };
    });
  }

  function loadLocalUsers() {
    state.users = LEARNER_USERS.map(function (name) {
      return { username: name, role: 'learner', is_active: 'TRUE' };
    });
  }

  function loadData() {
    return loadManifestLocal().then(function (manifest) {
      state.manifest = manifest;
      if (!PlaybookApi.configured()) {
        loadLocalUsers();
        renderAll();
        msg('Section list loaded. Set API_URL in config.js and deploy Google Apps Script to save policies and grants.', true);
        return;
      }
      return PlaybookApi.adminGetData(PlaybookAuth.currentToken()).then(function (result) {
        if (!result.ok) {
          loadLocalUsers();
          renderAll();
          msg(result.error || 'Could not load admin data from API. Showing local section list only.', true);
          return;
        }
        if (result.manifest && result.manifest.sections) state.manifest = result.manifest;
        state.grants = result.grants || [];
        state.users = result.users || [];
        state.policies = {};
        (result.policies || []).forEach(function (p) {
          state.policies[String(p.section_id)] = p;
        });
        renderAll();
        msg('');
      });
    });
  }

  function renderTree() {
    var root = document.getElementById('section-tree');
    root.innerHTML = '';
    if (!state.manifest || !state.manifest.sections) return;

    state.manifest.sections.forEach(function (sec) {
      var item = document.createElement('div');
      item.className = 'tree-item' + (state.selectedSection === sec.id ? ' is-selected' : '');
      var restricted = String(policyFor(sec.id).is_restricted).toUpperCase() === 'TRUE';
      item.innerHTML =
        '<div><div class="tree-title">' + sec.title + '</div>' +
        '<div class="tree-meta">' + sec.id + '</div></div>' +
        (restricted ? '<span class="badge">Restricted</span>' : '');
      item.addEventListener('click', function () {
        state.selectedSection = sec.id;
        document.getElementById('policy-section-id').value = sec.id;
        document.getElementById('selected-section-label').textContent = sec.title + ' (' + sec.id + ')';
        document.getElementById('policy-restricted').checked = restricted;
        document.getElementById('policy-expiry-days').value = policyFor(sec.id).default_expiry_days || 30;
        renderTree();
      });
      root.appendChild(item);
    });
  }

  function renderUsers() {
    var select = document.getElementById('grant-username');
    select.innerHTML = '';
    state.users.filter(function (u) { return String(u.role) !== 'admin'; }).forEach(function (u) {
      var opt = document.createElement('option');
      opt.value = u.username;
      opt.textContent = u.username;
      select.appendChild(opt);
    });
  }

  function renderPending() {
    var body = document.getElementById('pending-body');
    body.innerHTML = '';
    state.grants.filter(function (g) { return String(g.status) === 'pending'; }).forEach(function (g) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + g.username + '</td>' +
        '<td>' + sectionTitle(g.section_id) + '</td>' +
        '<td>' + (g.request_notes || '') + '</td>' +
        '<td>' + (g.created_at || '') + '</td>' +
        '<td><button class="btn btn-primary" data-approve="' + g.id + '">Approve</button> ' +
        '<button class="btn btn-secondary" data-reject="' + g.id + '">Reject</button></td>';
      body.appendChild(tr);
    });
  }

  function renderGrants() {
    var body = document.getElementById('grants-body');
    body.innerHTML = '';
    var now = Date.now();
    state.grants.filter(function (g) {
      return String(g.status) === 'granted' && (!g.expires_at || new Date(g.expires_at).getTime() > now);
    }).forEach(function (g) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + g.username + '</td>' +
        '<td>' + sectionTitle(g.section_id) + '</td>' +
        '<td>' + (g.expires_at || '—') + '</td>' +
        '<td>' + timeLeft(g.expires_at) + '</td>' +
        '<td>' + (g.granted_by || '—') + '</td>' +
        '<td><button class="btn btn-secondary" data-revoke="' + g.id + '">Revoke</button> ' +
        '<button class="btn btn-secondary" data-extend="' + g.id + '">Extend</button></td>';
      body.appendChild(tr);
    });
  }

  function renderAll() {
    renderTree();
    renderUsers();
    renderPending();
    renderGrants();
  }

  function needsApi(action) {
    if (PlaybookApi.configured()) return false;
    msg('Connect API_URL in config.js before you can ' + action + '.', true);
    return true;
  }

  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var name = tab.getAttribute('data-tab');
      document.querySelectorAll('.panel').forEach(function (p) {
        p.hidden = p.getAttribute('data-panel') !== name;
      });
    });
  });

  document.getElementById('policy-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (needsApi('save policies')) return;
    var sectionId = document.getElementById('policy-section-id').value;
    if (!sectionId) return msg('Select a section first.', true);
    PlaybookApi.adminSetPolicy(
      PlaybookAuth.currentToken(),
      sectionId,
      document.getElementById('policy-restricted').checked,
      Number(document.getElementById('policy-expiry-days').value) || 30
    ).then(function (result) {
      if (!result.ok) return msg(result.error || 'Save failed.', true);
      msg('Policy saved.');
      loadData();
    });
  });

  document.getElementById('manual-grant-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (needsApi('grant access')) return;
    var sectionId = document.getElementById('policy-section-id').value;
    if (!sectionId) return msg('Select a section first.', true);
    var expires = document.getElementById('grant-expires').value;
    PlaybookApi.adminGrant(
      PlaybookAuth.currentToken(),
      document.getElementById('grant-username').value,
      sectionId,
      expires ? new Date(expires).toISOString() : '',
      document.getElementById('grant-notes').value
    ).then(function (result) {
      if (!result.ok) return msg(result.error || 'Grant failed.', true);
      msg('Access granted.');
      loadData();
    });
  });

  document.addEventListener('click', function (e) {
    var approve = e.target.getAttribute('data-approve');
    var reject = e.target.getAttribute('data-reject');
    var revoke = e.target.getAttribute('data-revoke');
    var extend = e.target.getAttribute('data-extend');
    if (approve) {
      if (needsApi('approve requests')) return;
      PlaybookApi.adminReviewRequest(PlaybookAuth.currentToken(), approve, 'approve', '', '').then(function (result) {
        if (!result.ok) return msg(result.error || 'Approve failed.', true);
        msg('Request approved.');
        loadData();
      });
    }
    if (reject) {
      if (needsApi('reject requests')) return;
      PlaybookApi.adminReviewRequest(PlaybookAuth.currentToken(), reject, 'reject', '', 'Rejected by admin').then(function (result) {
        if (!result.ok) return msg(result.error || 'Reject failed.', true);
        msg('Request rejected.');
        loadData();
      });
    }
    if (revoke) {
      if (needsApi('revoke grants')) return;
      PlaybookApi.adminRevoke(PlaybookAuth.currentToken(), revoke).then(function (result) {
        if (!result.ok) return msg(result.error || 'Revoke failed.', true);
        msg('Grant revoked.');
        loadData();
      });
    }
    if (extend) {
      if (needsApi('extend grants')) return;
      var days = prompt('Extend by how many days?', '30');
      if (!days) return;
      var expiry = new Date(Date.now() + Number(days) * 86400000).toISOString();
      PlaybookApi.adminExtend(PlaybookAuth.currentToken(), extend, expiry).then(function (result) {
        if (!result.ok) return msg(result.error || 'Extend failed.', true);
        msg('Grant extended.');
        loadData();
      });
    }
  });

  loadData();
})();
