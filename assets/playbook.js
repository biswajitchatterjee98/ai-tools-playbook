
(function () {
  function showTopic(topicId, scrollToId) {
    document.querySelectorAll('.topic-panel').forEach(function (panel) {
      var match = panel.getAttribute('data-topic-id') === topicId;
      panel.hidden = !match;
      panel.classList.toggle('is-active', match);
      if (match) {
        panel.style.animation = 'none';
        void panel.offsetWidth;
        panel.style.animation = '';
        var heading = panel.querySelector('h1');
        if (heading && !panel.querySelector('.topic-eyebrow')) {
          var eyebrow = document.createElement('p');
          eyebrow.className = 'topic-eyebrow';
          eyebrow.textContent = 'Now reading';
          heading.parentNode.insertBefore(eyebrow, heading);
        }
      }
    });

    document.querySelectorAll('.toc-topic').forEach(function (topic) {
      var btn = topic.querySelector('.toc-toggle');
      var topLink = null;
      topic.querySelectorAll(':scope > .toc-link').forEach(function (a) { topLink = a; });
      var target = btn ? btn.getAttribute('data-target') : (topLink ? topLink.getAttribute('href') : null);
      var id = target ? target.replace(/^#/, '') : '';
      var active = id === topicId;
      topic.classList.toggle('is-active', active);
      if (btn) {
        btn.setAttribute('aria-expanded', active ? 'true' : 'false');
        var subs = topic.querySelector('.toc-subs');
        if (subs) subs.hidden = !active;
      }
    });

    if (scrollToId) {
      var targetEl = document.getElementById(scrollToId);
      var isTopicRoot = scrollToId === topicId;
      setTimeout(function () {
        if (isTopicRoot) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 30);
    }
  }

  function topicIdFromHash(hash) {
    var id = (hash || '').replace(/^#/, '');
    if (!id) return null;
    var el = document.getElementById(id);
    if (!el) return null;
    var panel = el.closest('.topic-panel');
    return panel ? panel.getAttribute('data-topic-id') : null;
  }

  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('.toc-toggle');
    if (toggle) {
      e.preventDefault();
      var topicId = (toggle.getAttribute('data-target') || '').replace(/^#/, '');
      if (toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        var openTopic = toggle.closest('.toc-topic');
        if (openTopic) openTopic.classList.remove('is-active');
        var openSubs = toggle.parentElement.querySelector('.toc-subs');
        if (openSubs) openSubs.hidden = true;
        return;
      }
      showTopic(topicId, topicId);
      history.replaceState(null, '', '#' + topicId);
      return;
    }

    var subLink = e.target.closest('a');
    if (subLink && subLink.getAttribute('href') && subLink.getAttribute('href').charAt(0) === '#') {
      var inToc = subLink.closest('.toc');
      if (inToc) {
        e.preventDefault();
        var href = subLink.getAttribute('href');
        var targetId = href.slice(1);
        var topicId = topicIdFromHash(href);
        if (topicId) {
          showTopic(topicId, targetId);
          history.replaceState(null, '', href);
        }
        return;
      }
    }

    var btn = e.target.closest('.yt-poster');
    if (!btn) return;
    e.preventDefault();
    var card = btn.closest('.yt-card');
    var id = btn.getAttribute('data-ytid');
    var url = btn.getAttribute('data-yturl');
    if (location.protocol === 'file:') {
      window.open(url, '_blank', 'noopener');
      return;
    }
    var frame = card.querySelector('.yt-frame');
    var src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
    frame.hidden = false;
    frame.innerHTML = '<iframe src="' + src + '" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
    card.classList.add('is-playing');
  });


  var logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      PlaybookAuth.logout();
      location.replace('login.html');
    });
  }

  var initialTopic = topicIdFromHash(location.hash);
  if (initialTopic) {
    showTopic(initialTopic, location.hash.replace(/^#/, ''));
  } else {
    var first = document.querySelector('.topic-panel');
    if (first) showTopic(first.getAttribute('data-topic-id'), null);
  }
})();
