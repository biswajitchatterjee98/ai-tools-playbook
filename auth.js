/* Client-side gate for demo access only — not real security. */
(function (global) {
  var STORAGE_KEY = 'traininglobe_playbook_session';

  var USERS = [
    { username: 'demo', password: 'demo123' },
    { username: 'learner1', password: 'learn2026' },
    { username: 'learner2', password: 'practice1' },
    { username: 'trainer', password: 'train@123' },
    { username: 'guest', password: 'guestpass' },
    { username: 'student1', password: 'study@ai' },
    { username: 'student2', password: 'tools2026' },
    { username: 'admin', password: 'playbook1' },
    { username: 'webisdom', password: 'webisdom26' },
    { username: 'traininglobe', password: 'lobe@2026' }
  ];

  function normalize(value) {
    return String(value || '').trim();
  }

  function readSession() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function writeSession(username) {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ username: username, at: Date.now() })
    );
  }

  function clearSession() {
    sessionStorage.removeItem(STORAGE_KEY);
  }

  function findUser(username, password) {
    var u = normalize(username);
    var p = normalize(password);
    for (var i = 0; i < USERS.length; i += 1) {
      if (USERS[i].username === u && USERS[i].password === p) {
        return USERS[i];
      }
    }
    return null;
  }

  function currentUser() {
    var session = readSession();
    return session && session.username ? session.username : null;
  }

  function isLoggedIn() {
    return Boolean(currentUser());
  }

  function login(username, password) {
    var user = findUser(username, password);
    if (!user) return false;
    writeSession(user.username);
    return true;
  }

  function logout() {
    clearSession();
  }

  function requireAuth(loginPage) {
    if (isLoggedIn()) return;
    var next = location.pathname.split('/').pop() || 'index.html';
    if (location.search) next += location.search;
    if (location.hash) next += location.hash;
    var target = (loginPage || 'login.html') + '?next=' + encodeURIComponent(next);
    location.replace(target);
  }

  global.PlaybookAuth = {
    USERS: USERS,
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
    currentUser: currentUser,
    requireAuth: requireAuth
  };
})(window);
