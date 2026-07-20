# Deploy the Playbook Access API

## 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a blank spreadsheet named **AI Tools Playbook Access**.
2. Open **Extensions → Apps Script**.
3. Delete any default code and paste the contents of `Code.gs` from this folder.
4. Save the project (e.g. **Playbook Access API**).

## 2. Initialize sheets

1. In Apps Script, select **`setupSheets`** from the function dropdown.
2. Click **Run** and approve permissions.
3. Your spreadsheet will get tabs: **Users**, **SectionPolicies**, **AccessGrants**, **Sessions**, with 10 seed users (including `admin` / `playbook1`).

## 3. Set the manifest URL

1. In Apps Script: **Project Settings → Script properties**.
2. Add property:
   - **Property:** `MANIFEST_URL`
   - **Value:** `https://biswajitchatterjee98.github.io/ai-tools-playbook/content-manifest.json`

(Use your actual GitHub Pages URL after deploy.)

## 4. Deploy as Web App

1. **Deploy → New deployment → Web app**
2. **Execute as:** Me
3. **Who has access:** Anyone
4. Copy the **Web app URL** (ends in `/exec`).

## 5. Connect the frontend

Edit `config.js` in the playbook repo:

```javascript
var PlaybookConfig = {
  API_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
};
```

Commit and push. The login page, access gates, and admin panel will call this URL.

## Sheet reference

| Tab | Purpose |
|-----|---------|
| Users | username, password, role (`admin` or `learner`), is_active |
| SectionPolicies | section_id, is_restricted, default_expiry_days |
| AccessGrants | requests and grants with expiry |
| Sessions | login tokens (24h) |

## Notes

- ponytail: UI gating only — content remains in public HTML; honest-user access control.
- Restricting a topic cascades to all subsections (server reads `content-manifest.json`).
- Expired grants are marked on the next permissions read (lazy expiry).
