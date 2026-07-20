(function (global) {
  function apiUrl() {
    return (global.PlaybookConfig && global.PlaybookConfig.API_URL) || '';
  }

  function apiConfigured() {
    return Boolean(apiUrl());
  }

  function callApi(payload) {
    var url = apiUrl();
    if (!url) {
      return Promise.resolve({ ok: false, error: 'API_URL is not configured in config.js' });
    }
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    }).then(function (response) {
      return response.json();
    }).catch(function (err) {
      return { ok: false, error: String(err.message || err) };
    });
  }

  global.PlaybookApi = {
    configured: apiConfigured,
    login: function (username, password) {
      return callApi({ action: 'login', username: username, password: password });
    },
    permissions: function (token) {
      return callApi({ action: 'permissions', token: token });
    },
    requestAccess: function (token, sectionId, notes) {
      return callApi({ action: 'requestAccess', token: token, section_id: sectionId, notes: notes });
    },
    adminGetData: function (token) {
      return callApi({ action: 'adminGetData', token: token });
    },
    adminSetPolicy: function (token, sectionId, isRestricted, defaultExpiryDays) {
      return callApi({
        action: 'adminSetPolicy',
        token: token,
        section_id: sectionId,
        is_restricted: isRestricted,
        default_expiry_days: defaultExpiryDays
      });
    },
    adminReviewRequest: function (token, grantId, decision, expiresAt, adminNotes) {
      return callApi({
        action: 'adminReviewRequest',
        token: token,
        grant_id: grantId,
        decision: decision,
        expires_at: expiresAt || '',
        admin_notes: adminNotes || ''
      });
    },
    adminGrant: function (token, username, sectionId, expiresAt, adminNotes) {
      return callApi({
        action: 'adminGrant',
        token: token,
        username: username,
        section_id: sectionId,
        expires_at: expiresAt || '',
        admin_notes: adminNotes || ''
      });
    },
    adminRevoke: function (token, grantId) {
      return callApi({ action: 'adminRevoke', token: token, grant_id: grantId });
    },
    adminExtend: function (token, grantId, expiresAt) {
      return callApi({ action: 'adminExtend', token: token, grant_id: grantId, expires_at: expiresAt });
    }
  };
})(window);
