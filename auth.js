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

  function b64urlDecode(str) {
    var b64 = String(str || '').replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    return decodeURIComponent(escape(atob(b64)));
  }

  function softSign(message, secret) {
    var s = String(secret || '') + '|' + String(message || '');
    var h = 2166136261;
    for (var i = 0; i < s.length; i += 1) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(16);
  }

  function verifyHubToken(token, secret) {
    var parts = String(token || '').split('.');
    if (parts.length !== 2) return null;
    if (softSign(parts[0], secret) !== parts[1]) return null;
    try {
      var payload = JSON.parse(b64urlDecode(parts[0]));
      if (!payload || !payload.u || !payload.exp) return null;
      if (Number(payload.exp) <= Date.now()) return null;
      return { username: String(payload.u), role: String(payload.role || 'learner'), exp: Number(payload.exp) };
    } catch (err) {
      return null;
    }
  }

  function consumeHubTokenFromUrl() {
    // ponytail: soft cohort SSO from traininglobe-hub — secret lives in static config.js.
    var params = new URLSearchParams(location.search);
    var token = params.get('hub_token');
    if (!token) return false;
    var secret = (global.PlaybookConfig && global.PlaybookConfig.HUB_SSO_SECRET) || '';
    var payload = verifyHubToken(token, secret);
    if (!payload) return false;
    writeSession({
      username: payload.username,
      role: payload.role === 'admin' ? 'learner' : payload.role,
      token: 'hub-' + payload.username,
      expires_at: new Date(payload.exp).toISOString()
    });
    params.delete('hub_token');
    var qs = params.toString();
    var clean = location.pathname + (qs ? '?' + qs : '') + location.hash;
    if (global.history && history.replaceState) history.replaceState(null, '', clean);
    return true;
  }

  function requireAuth(loginPage) {
    // ponytail: hub owns login — handbooks are open after cohort entry.
    consumeHubTokenFromUrl();
    return true;
  }

  function requireAdmin(loginPage) {
    // Admin UI still needs a local session; without one, bounce to index (open content).
    consumeHubTokenFromUrl();
    if (!isAdmin()) location.replace('index.html');
  }

  // Consume hub SSO as soon as auth.js loads (pages no longer gate via requireAuth).
  consumeHubTokenFromUrl();

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
