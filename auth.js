(function (global) {
  var SESSION_KEY = 'traininglobe_playbook_session';

  function readSession() {
    try {
      var raw = sessionStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function writeSession(data) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  }

  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function currentUser() {
    var session = readSession();
    return session && session.username ? session.username : null;
  }

  function currentRole() {
    var session = readSession();
    if (session && session.role) return session.role;
    if (session && session.username === 'admin') return 'admin';
    return 'learner';
  }

  function currentToken() {
    var session = readSession();
    return session && session.token ? session.token : null;
  }

  function isLoggedIn() {
    return Boolean(currentToken() && currentUser());
  }

  function isAdmin() {
    return currentUser() === 'admin' && currentRole() === 'admin';
  }

  function loginLocalFallback(username, password) {
    // ponytail: offline/demo fallback when API_URL is not set yet.
    var users = [
      { username: 'demo', password: 'demo123', role: 'learner' },
      { username: 'learner1', password: 'learn2026', role: 'learner' },
      { username: 'learner2', password: 'practice1', role: 'learner' },
      { username: 'trainer', password: 'train@123', role: 'learner' },
      { username: 'guest', password: 'guestpass', role: 'learner' },
      { username: 'student1', password: 'study@ai', role: 'learner' },
      { username: 'student2', password: 'tools2026', role: 'learner' },
      { username: 'admin', password: 'admin@123', role: 'admin' },
      { username: 'webisdom', password: 'webisdom26', role: 'learner' },
      { username: 'traininglobe', password: 'lobe@2026', role: 'learner' }
    ];
    var u = String(username || '').trim();
    var p = String(password || '').trim();
    for (var i = 0; i < users.length; i += 1) {
      if (users[i].username === u && users[i].password === p) {
        writeSession({
          username: users[i].username,
          role: users[i].role,
          token: 'local-' + users[i].username,
          expires_at: new Date(Date.now() + 86400000).toISOString()
        });
        return Promise.resolve({ ok: true, username: users[i].username, role: users[i].role });
      }
    }
    return Promise.resolve({ ok: false, error: 'Invalid credentials.' });
  }

  function login(username, password) {
    if (!global.PlaybookApi || !global.PlaybookApi.configured()) {
      return loginLocalFallback(username, password);
    }
    return global.PlaybookApi.login(username, password).then(function (result) {
      if (!result.ok) return result;
      writeSession({
        username: result.username,
        role: result.role,
        token: result.token,
        expires_at: result.expires_at
      });
      return result;
    });
  }

  function logout() {
    clearSession();
  }

  function requireAuth(loginPage) {
    if (isLoggedIn()) return;
    var next = location.pathname.split('/').pop() || 'index.html';
    if (location.search) next += location.search;
    if (location.hash) next += location.hash;
    location.replace((loginPage || 'login.html') + '?next=' + encodeURIComponent(next));
  }

  function requireAdmin(loginPage) {
    requireAuth(loginPage);
    if (!isAdmin()) location.replace('index.html');
  }

  global.PlaybookAuth = {
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
    isAdmin: isAdmin,
    currentUser: currentUser,
    currentRole: currentRole,
    currentToken: currentToken,
    requireAuth: requireAuth,
    requireAdmin: requireAdmin
  };
})(window);
