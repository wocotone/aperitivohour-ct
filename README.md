# Aperitivo Hour CT

Live happy hour tracker for Connecticut, provided by Woco.

---

## Deploy to Vercel (5 minutes)

### Step 1 — Upload to GitHub
1. Go to github.com and create a free account if you don't have one
2. Click **New repository**, name it `aperitivo-ct`, click **Create**
3. Click **uploading an existing file**
4. Drag the entire `aperitivo-ct` folder contents in
5. Click **Commit changes**

### Step 2 — Deploy on Vercel
1. Go to vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `aperitivo-ct` repository
4. Leave all settings as default
5. Click **Deploy**
6. Wait ~2 minutes — Vercel gives you a live URL like `aperitivo-ct.vercel.app`

### Step 3 — Add to Shopify
1. Go to your Shopify admin
2. Online Store → Pages → Add page (or edit existing)
3. Click the `<>` HTML icon in the editor toolbar
4. Paste this, replacing the URL with your Vercel URL:

```html
<iframe 
  src="https://aperitivo-ct.vercel.app" 
  width="100%" 
  height="900px" 
  frameborder="0"
  style="border:none; display:block;"
></iframe>
```

5. Save. Done. ✓

---

## Updating bars in the future

Open `src/App.jsx`, find the `CT_BARS` array near the top, add a new entry following the same format, save the file, push to GitHub — Vercel auto-redeploys in ~2 minutes.
