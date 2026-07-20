/**
 * AI Tools Playbook — access control API (Google Sheet + Apps Script).
 * Deploy as Web App: Execute as Me, Who has access: Anyone.
 * Set Script property MANIFEST_URL to the published content-manifest.json URL.
 */

var SHEETS = {
  USERS: 'Users',
  POLICIES: 'SectionPolicies',
  GRANTS: 'AccessGrants',
  SESSIONS: 'Sessions'
};

var HEADERS = {
  USERS: ['username', 'password', 'role', 'is_active'],
  POLICIES: ['section_id', 'is_restricted', 'default_expiry_days', 'updated_by', 'updated_at'],
  GRANTS: ['id', 'username', 'section_id', 'status', 'expires_at', 'request_notes', 'admin_notes', 'granted_by', 'created_at', 'updated_at', 'reviewed_at'],
  SESSIONS: ['token', 'username', 'role', 'expires_at']
};

var SEED_USERS = [
  ['demo', 'demo123', 'learner', 'TRUE'],
  ['learner1', 'learn2026', 'learner', 'TRUE'],
  ['learner2', 'practice1', 'learner', 'TRUE'],
  ['trainer', 'train@123', 'learner', 'TRUE'],
  ['guest', 'guestpass', 'learner', 'TRUE'],
  ['student1', 'study@ai', 'learner', 'TRUE'],
  ['student2', 'tools2026', 'learner', 'TRUE'],
  ['admin', 'admin@123', 'admin', 'TRUE'],
  ['webisdom', 'webisdom26', 'learner', 'TRUE'],
  ['traininglobe', 'lobe@2026', 'learner', 'TRUE']
];

function doGet() {
  return jsonOutput({ ok: true, service: 'playbook-access-api' });
}

function doPost(e) {
  try {
    var body = e && e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    return jsonOutput(routeAction(body));
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err.message || err) });
  }
}

function routeAction(body) {
  var action = body.action || '';
  switch (action) {
    case 'login':
      return login(body.username, body.password);
    case 'permissions':
      return getPermissions(requireSession(body.token));
    case 'requestAccess':
      return requestAccess(requireSession(body.token), body.section_id, body.notes);
    case 'adminGetData':
      return adminGetData(requireAdmin(body.token));
    case 'adminSetPolicy':
      return adminSetPolicy(requireAdmin(body.token), body.section_id, body.is_restricted, body.default_expiry_days);
    case 'adminReviewRequest':
      return adminReviewRequest(requireAdmin(body.token), body.grant_id, body.decision, body.expires_at, body.admin_notes);
    case 'adminGrant':
      return adminGrant(requireAdmin(body.token), body.username, body.section_id, body.expires_at, body.admin_notes);
    case 'adminRevoke':
      return adminRevoke(requireAdmin(body.token), body.grant_id);
    case 'adminExtend':
      return adminExtend(requireAdmin(body.token), body.grant_id, body.expires_at);
    default:
      return { ok: false, error: 'Unknown action: ' + action };
  }
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function ss() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function sheet(name) {
  return ss().getSheetByName(name);
}

function setupSheets() {
  Object.keys(SHEETS).forEach(function (key) {
    var name = SHEETS[key];
    var sh = sheet(name);
    if (!sh) sh = ss().insertSheet(name);
    var headers = HEADERS[key];
    sh.clear();
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    sh.setFrozenRows(1);
  });

  var users = sheet(SHEETS.USERS);
  if (users.getLastRow() === 1) {
    users.getRange(2, 1, SEED_USERS.length, SEED_USERS[0].length).setValues(SEED_USERS);
  }

  PropertiesService.getScriptProperties().setProperty(
    'MANIFEST_URL',
    PropertiesService.getScriptProperties().getProperty('MANIFEST_URL') ||
      'https://biswajitchatterjee98.github.io/ai-tools-playbook/content-manifest.json'
  );
}

function rows(name) {
  var sh = sheet(name);
  var values = sh.getDataRange().getValues();
  if (values.length < 2) return [];
  var headers = values[0];
  return values.slice(1).map(function (row) {
    var obj = {};
    headers.forEach(function (h, i) { obj[h] = row[i]; });
    return obj;
  });
}

function appendRow(name, obj) {
  var sh = sheet(name);
  var headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  var row = headers.map(function (h) { return obj[h] !== undefined ? obj[h] : ''; });
  sh.appendRow(row);
}

function updateGrantRow(id, patch) {
  var sh = sheet(SHEETS.GRANTS);
  var data = sh.getDataRange().getValues();
  var headers = data[0];
  var idCol = headers.indexOf('id');
  for (var r = 1; r < data.length; r++) {
    if (String(data[r][idCol]) === String(id)) {
      headers.forEach(function (h, c) {
        if (patch[h] !== undefined) data[r][c] = patch[h];
      });
      sh.getRange(r + 1, 1, 1, headers.length).setValues([data[r]]);
      return true;
    }
  }
  return false;
}

function nowIso() {
  return new Date().toISOString();
}

function parseDate(value) {
  if (!value) return null;
  var d = value instanceof Date ? value : new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

function isExpired(expiresAt) {
  var d = parseDate(expiresAt);
  return d ? d.getTime() <= Date.now() : false;
}

function login(username, password) {
  var u = String(username || '').trim();
  var p = String(password || '').trim();
  if (!u || !p) return { ok: false, error: 'Username and password required.' };

  var match = rows(SHEETS.USERS).filter(function (row) {
    return String(row.username) === u &&
      String(row.password) === p &&
      String(row.is_active).toUpperCase() !== 'FALSE';
  })[0];

  if (!match) return { ok: false, error: 'Invalid credentials.' };

  var token = Utilities.getUuid();
  var expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  appendRow(SHEETS.SESSIONS, {
    token: token,
    username: match.username,
    role: match.role || 'learner',
    expires_at: expires.toISOString()
  });

  return {
    ok: true,
    token: token,
    username: match.username,
    role: match.role || 'learner',
    expires_at: expires.toISOString()
  };
}

function requireSession(token) {
  var t = String(token || '').trim();
  if (!t) throw new Error('Missing session token.');
  var session = rows(SHEETS.SESSIONS).filter(function (row) {
    return String(row.token) === t;
  })[0];
  if (!session) throw new Error('Invalid session.');
  if (isExpired(session.expires_at)) throw new Error('Session expired.');
  return session;
}

function requireAdmin(token) {
  var session = requireSession(token);
  if (String(session.role) !== 'admin') throw new Error('Admin access required.');
  return session;
}

function getManifest() {
  var cache = CacheService.getScriptCache();
  var cached = cache.get('manifest');
  if (cached) return JSON.parse(cached);
  var url = PropertiesService.getScriptProperties().getProperty('MANIFEST_URL');
  if (!url) throw new Error('MANIFEST_URL script property is not set.');
  var resp = UrlFetchApp.fetch(url);
  var data = JSON.parse(resp.getContentText());
  cache.put('manifest', resp.getContentText(), 600);
  return data;
}

function buildParentMap(manifest) {
  var map = {};
  (manifest.sections || []).forEach(function (sec) {
    map[sec.id] = sec.parent_id || null;
  });
  return map;
}

function ancestors(sectionId, parentMap) {
  var list = [];
  var current = sectionId;
  while (current) {
    list.push(current);
    current = parentMap[current] || null;
  }
  return list;
}

function descendants(sectionId, manifest) {
  var all = [sectionId];
  (manifest.sections || []).forEach(function (sec) {
    if (ancestors(sec.id, buildParentMap(manifest)).indexOf(sectionId) !== -1) {
      all.push(sec.id);
    }
  });
  return all;
}

function activePolicies() {
  var map = {};
  rows(SHEETS.POLICIES).forEach(function (row) {
    if (String(row.is_restricted).toUpperCase() === 'TRUE') {
      map[String(row.section_id)] = {
        section_id: String(row.section_id),
        default_expiry_days: Number(row.default_expiry_days) || 30
      };
    }
  });
  return map;
}

function isEffectivelyRestricted(sectionId, policyMap, parentMap) {
  return ancestors(sectionId, parentMap).some(function (id) {
    return Boolean(policyMap[id]);
  });
}

function activeGrantsForUser(username) {
  expireOldGrants();
  return rows(SHEETS.GRANTS).filter(function (row) {
    return String(row.username) === String(username) &&
      String(row.status) === 'granted' &&
      !isExpired(row.expires_at);
  });
}

function expireOldGrants() {
  rows(SHEETS.GRANTS).forEach(function (row) {
    if (String(row.status) === 'granted' && isExpired(row.expires_at)) {
      updateGrantRow(row.id, { status: 'expired', updated_at: nowIso() });
    }
  });
}

function hasAccess(username, sectionId, policyMap, parentMap, grants) {
  if (!isEffectivelyRestricted(sectionId, policyMap, parentMap)) return true;
  var chain = ancestors(sectionId, parentMap);
  return grants.some(function (grant) {
    return chain.indexOf(String(grant.section_id)) !== -1;
  });
}

function getPermissions(session) {
  var manifest = getManifest();
  var parentMap = buildParentMap(manifest);
  var policyMap = activePolicies();
  var grants = activeGrantsForUser(session.username);
  var pending = rows(SHEETS.GRANTS).filter(function (row) {
    return String(row.username) === String(session.username) &&
      String(row.status) === 'pending';
  });

  var restricted = [];
  var granted = [];
  var pendingIds = pending.map(function (p) { return String(p.section_id); });

  (manifest.sections || []).forEach(function (sec) {
    if (isEffectivelyRestricted(sec.id, policyMap, parentMap)) {
      restricted.push(sec.id);
      if (hasAccess(session.username, sec.id, policyMap, parentMap, grants)) {
        granted.push(sec.id);
      }
    }
  });

  return {
    ok: true,
    username: session.username,
    role: session.role,
    restricted_sections: restricted,
    granted_sections: granted,
    pending_sections: pendingIds
  };
}

function nextGrantId() {
  var ids = rows(SHEETS.GRANTS).map(function (r) { return Number(r.id) || 0; });
  return String((ids.length ? Math.max.apply(null, ids) : 0) + 1);
}

function requestAccess(session, sectionId, notes) {
  var sid = String(sectionId || '').trim();
  if (!sid) return { ok: false, error: 'section_id required.' };

  var manifest = getManifest();
  var exists = (manifest.sections || []).some(function (s) { return s.id === sid; });
  if (!exists) return { ok: false, error: 'Unknown section.' };

  var existing = rows(SHEETS.GRANTS).filter(function (row) {
    return String(row.username) === String(session.username) &&
      String(row.section_id) === sid &&
      (String(row.status) === 'pending' || String(row.status) === 'granted');
  })[0];

  if (existing) {
    if (String(existing.status) === 'granted' && !isExpired(existing.expires_at)) {
      return { ok: false, error: 'You already have access to this section.' };
    }
    if (String(existing.status) === 'pending') {
      return { ok: false, error: 'Request already pending.' };
    }
  }

  var id = nextGrantId();
  appendRow(SHEETS.GRANTS, {
    id: id,
    username: session.username,
    section_id: sid,
    status: 'pending',
    expires_at: '',
    request_notes: String(notes || '').trim(),
    admin_notes: '',
    granted_by: '',
    created_at: nowIso(),
    updated_at: nowIso(),
    reviewed_at: ''
  });

  return { ok: true, grant_id: id };
}

function adminGetData(session) {
  expireOldGrants();
  return {
    ok: true,
    manifest: getManifest(),
    policies: rows(SHEETS.POLICIES),
    grants: rows(SHEETS.GRANTS),
    pending: rows(SHEETS.GRANTS).filter(function (r) { return String(r.status) === 'pending'; }),
    users: rows(SHEETS.USERS).map(function (u) {
      return { username: u.username, role: u.role, is_active: u.is_active };
    })
  };
}

function upsertPolicy(sectionId, isRestricted, defaultExpiryDays, adminUser) {
  var sh = sheet(SHEETS.POLICIES);
  var data = sh.getDataRange().getValues();
  var headers = data[0];
  var sidCol = headers.indexOf('section_id');
  var rowIndex = -1;
  for (var r = 1; r < data.length; r++) {
    if (String(data[r][sidCol]) === String(sectionId)) {
      rowIndex = r + 1;
      break;
    }
  }
  var values = [
    String(sectionId),
    isRestricted ? 'TRUE' : 'FALSE',
    defaultExpiryDays || 30,
    adminUser,
    nowIso()
  ];
  if (rowIndex > 0) sh.getRange(rowIndex, 1, 1, values.length).setValues([values]);
  else sh.appendRow(values);
}

function adminSetPolicy(session, sectionId, isRestricted, defaultExpiryDays) {
  var sid = String(sectionId || '').trim();
  if (!sid) return { ok: false, error: 'section_id required.' };
  upsertPolicy(sid, Boolean(isRestricted), Number(defaultExpiryDays) || 30, session.username);
  return { ok: true };
}

function adminReviewRequest(session, grantId, decision, expiresAt, adminNotes) {
  var row = rows(SHEETS.GRANTS).filter(function (r) { return String(r.id) === String(grantId); })[0];
  if (!row) return { ok: false, error: 'Request not found.' };
  if (String(row.status) !== 'pending') return { ok: false, error: 'Request is not pending.' };

  if (decision === 'reject') {
    updateGrantRow(grantId, {
      status: 'rejected',
      admin_notes: String(adminNotes || ''),
      granted_by: session.username,
      reviewed_at: nowIso(),
      updated_at: nowIso()
    });
    return { ok: true };
  }

  var policy = rows(SHEETS.POLICIES).filter(function (p) {
    return String(p.section_id) === String(row.section_id);
  })[0];
  var days = policy ? Number(policy.default_expiry_days) || 30 : 30;
  var expiry = expiresAt ? parseDate(expiresAt) : new Date(Date.now() + days * 86400000);

  updateGrantRow(grantId, {
    status: 'granted',
    expires_at: expiry.toISOString(),
    admin_notes: String(adminNotes || ''),
    granted_by: session.username,
    reviewed_at: nowIso(),
    updated_at: nowIso()
  });
  return { ok: true };
}

function adminGrant(session, username, sectionId, expiresAt, adminNotes) {
  var u = String(username || '').trim();
  var sid = String(sectionId || '').trim();
  if (!u || !sid) return { ok: false, error: 'username and section_id required.' };

  var expiry = expiresAt ? parseDate(expiresAt) : new Date(Date.now() + 30 * 86400000);
  var id = nextGrantId();
  appendRow(SHEETS.GRANTS, {
    id: id,
    username: u,
    section_id: sid,
    status: 'granted',
    expires_at: expiry.toISOString(),
    request_notes: '',
    admin_notes: String(adminNotes || ''),
    granted_by: session.username,
    created_at: nowIso(),
    updated_at: nowIso(),
    reviewed_at: nowIso()
  });
  return { ok: true, grant_id: id };
}

function adminRevoke(session, grantId) {
  if (!updateGrantRow(grantId, { status: 'revoked', updated_at: nowIso(), granted_by: session.username })) {
    return { ok: false, error: 'Grant not found.' };
  }
  return { ok: true };
}

function adminExtend(session, grantId, expiresAt) {
  var expiry = parseDate(expiresAt);
  if (!expiry) return { ok: false, error: 'Valid expires_at required.' };
  if (!updateGrantRow(grantId, { expires_at: expiry.toISOString(), updated_at: nowIso() })) {
    return { ok: false, error: 'Grant not found.' };
  }
  return { ok: true };
}
