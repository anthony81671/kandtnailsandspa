# GitHub Pages Setup Guide for K&T Nails and Spa

## Overview
This guide will walk you through deploying your K&T Nails and Spa website to GitHub Pages (100% free) and connecting it to your GoDaddy domain.

---

## 📋 Prerequisites

- [ ] GitHub account (create one at https://github.com if you don't have one)
- [ ] GoDaddy domain name
- [ ] Git installed on your computer (download from https://git-scm.com)
- [ ] All website files ready to upload

---

## Step 1: Create GitHub Repository

### 1.1 Create New Repository

1. Go to https://github.com
2. Click the **+** icon in the top right
3. Select **New repository**
4. Repository name: Choose one of these options:
   - **Option A (Recommended)**: `[username].github.io` (e.g., `anthony81671.github.io`)
     - This creates your primary GitHub Pages site
     - URL will be: https://[username].github.io
   - **Option B**: `knt-nails-spa` (any name you want)
     - URL will be: https://[username].github.io/knt-nails-spa

5. Set to **Public** (required for free GitHub Pages)
6. ✅ Check "Add a README file"
7. Click **Create repository**

---

## Step 2: Upload Your Website Files

### Method A: Using GitHub Website (Easiest)

1. Go to your repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop ALL your files:
   - `index.html`
   - `KNTLogonb.png`
   - `hero.png`
   - `.htaccess` (Note: GitHub Pages doesn't use .htaccess, but keep for reference)
   - `robots.txt`
   - `sitemap.xml`
   - `PROFESSIONAL-ENHANCEMENTS.md`
   - Any other images or files

4. Scroll down and click **Commit changes**

### Method B: Using Git Command Line (Advanced)

```bash
# Navigate to your website folder
cd "c:\Users\TTran\Nail Salon\KNTWebsite"

# Initialize git (if not already)
git init

# Add remote repository (replace [username] and [repo-name])
git remote add origin https://github.com/[username]/[repo-name].git

# Add all files
git add .

# Commit files
git commit -m "Initial commit - K&T Nails and Spa website"

# Push to GitHub
git push -u origin main
```

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source":
   - Select **Deploy from a branch**
   - Choose **main** branch
   - Select **/ (root)** folder
5. Click **Save**

⏱️ Wait 1-2 minutes, then refresh the page. You'll see:
```
Your site is live at https://[username].github.io
```

**Test your site** by clicking that link!

---

## Step 4: Connect Your GoDaddy Domain

### 4.1 Add Custom Domain in GitHub

1. Still in **Settings → Pages**
2. Under **Custom domain**, enter your domain:
   - If you want `www.kntnailsandspa.com`, enter: `www.kntnailsandspa.com`
   - If you want just `kntnailsandspa.com`, enter: `kntnailsandspa.com`
   - **Recommended**: Use `www.kntnailsandspa.com` for easier setup

3. Click **Save**
4. GitHub will check DNS configuration (will fail initially - that's okay!)

### 4.2 Configure DNS in GoDaddy

1. Log into https://www.godaddy.com
2. Go to **My Products**
3. Find your domain and click **DNS** or **Manage DNS**

#### For www.kntnailsandspa.com (Recommended):

**Add CNAME Record:**
```
Type:  CNAME
Name:  www
Value: [your-github-username].github.io
TTL:   600 seconds (or default)
```

**Modify @ Record:**
- If you have an **A record** with name `@`, delete it
- Add this **CNAME record**:
```
Type:  CNAME
Name:  @
Value: [your-github-username].github.io
TTL:   600 seconds
```

**OR use GitHub's IP Addresses (Alternative Method):**

Delete existing A records for `@`, then add these 4 A records:

```
Type: A, Name: @, Value: 185.199.108.153, TTL: 600
Type: A, Name: @, Value: 185.199.109.153, TTL: 600
Type: A, Name: @, Value: 185.199.110.153, TTL: 600
Type: A, Name: @, Value: 185.199.111.153, TTL: 600
```

And add the CNAME for www:
```
Type: CNAME, Name: www, Value: [username].github.io, TTL: 600
```

### 4.3 Wait for DNS Propagation

- DNS changes can take **24-48 hours** to fully propagate
- Usually works within **1-4 hours**
- Check status at: https://dnschecker.org

### 4.4 Enable HTTPS (After DNS Propagates)

1. Go back to **GitHub → Settings → Pages**
2. After DNS is verified (green checkmark appears)
3. ✅ Check **Enforce HTTPS**
4. Wait a few minutes for SSL certificate to provision

---

## Step 5: Update Your Website Files

### Important Changes Needed:

1. **Remove .htaccess** or add note
   - GitHub Pages doesn't use Apache
   - Security headers are handled differently
   - Keep the file for reference only

2. **Update Domain References** in `index.html`:
   - Replace `https://www.kntnailsandspa.com` with your actual domain
   - Update in meta tags (lines 19, 20, 32)
   - Update in Schema.org JSON (lines 203, 205, 206)

3. **Update sitemap.xml**:
   - Replace domain with your actual domain

4. **Add Google Analytics ID** (line 177, 182):
   - Replace `G-XXXXXXXXXX` with your actual GA4 ID

5. **Add Gemini API Key** (line 857):
   - Add your API key for AI Style Match feature
   - **Important**: Consider security implications

---

## Step 6: Create CNAME File (Important!)

Create a file named `CNAME` (no extension) in your repository root with just your domain:

```
www.kntnailsandspa.com
```

or

```
kntnailsandspa.com
```

**To create this file:**
- Go to your GitHub repository
- Click **Add file** → **Create new file**
- Name it: `CNAME`
- Content: `www.kntnailsandspa.com`
- Commit the file

---

## Step 7: Testing Checklist

After everything is set up, test these:

- [ ] Website loads at your GitHub Pages URL
- [ ] Website loads at your custom domain
- [ ] HTTPS works (green padlock in browser)
- [ ] All images load correctly
- [ ] Navigation works properly
- [ ] Mobile responsive design works
- [ ] Contact phone number is clickable on mobile
- [ ] Social media links work
- [ ] AI Style Match works (if API key added)
- [ ] Forms work (if any)

---

## 🔒 Security Considerations for GitHub Pages

### What GitHub Pages DOES provide:
- ✅ Free SSL/HTTPS certificate
- ✅ DDoS protection
- ✅ Fast global CDN
- ✅ Automatic deployments

### What GitHub Pages DOES NOT support:
- ❌ .htaccess files (Apache-specific)
- ❌ Server-side code (PHP, Python, etc.)
- ❌ Custom HTTP headers (like we set in .htaccess)
- ❌ Backend databases

### Security Headers Alternative:

Since GitHub Pages doesn't support `.htaccess`, add security via meta tags (already included in your HTML):

```html
<!-- These are already in your index.html -->
<meta http-equiv="Content-Security-Policy" content="...">
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```

For better security headers, consider using **Cloudflare** (free):
1. Sign up at https://cloudflare.com
2. Add your domain
3. Update GoDaddy nameservers to Cloudflare's
4. Enable security features in Cloudflare dashboard

---

## 🎨 Updating Your Website

### To make changes to your live site:

**Method 1: GitHub Website**
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click **Commit changes**
6. Changes go live in 1-2 minutes!

**Method 2: Git Command Line**
```bash
# Make changes to your files locally
# Then:
git add .
git commit -m "Updated testimonials"
git push origin main
```

---

## 📊 Connect Google Services

### Google Analytics Setup

1. Go to https://analytics.google.com
2. Create account and property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Update `index.html` lines 177 and 182
5. Commit and push changes

### Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property: `https://www.kntnailsandspa.com`
3. Verify ownership (use HTML tag method)
4. Submit `sitemap.xml`:
   - URL: `https://www.kntnailsandspa.com/sitemap.xml`
5. Monitor search performance!

### Google Business Profile

1. Go to https://business.google.com
2. Create or claim your business listing
3. Verify your business (phone/mail)
4. Add photos, hours, services
5. Link to your website

---

## 🚀 Performance Tips

### Image Optimization

Before uploading images:
1. Use https://tinypng.com to compress
2. Recommended sizes:
   - Hero image: 1920x1080px, under 500KB
   - Gallery images: 800x800px, under 200KB
   - Logo: 300x300px, under 50KB

### Loading Speed

Test your site speed:
- https://pagespeed.web.dev
- https://gtmetrix.com

Target scores:
- Mobile: 90+
- Desktop: 95+

---

## 💰 Cost Breakdown

- GitHub Pages: **FREE** ✅
- GoDaddy Domain: ~$12-15/year 💵
- SSL Certificate: **FREE** (via GitHub) ✅
- Hosting: **FREE** ✅
- Bandwidth: **FREE** (unlimited) ✅

**Total: ~$12-15/year for domain only!**

---

## 🔧 Troubleshooting

### "404 Page Not Found"
- Check that `index.html` is in the root of your repository
- Verify GitHub Pages is enabled in Settings
- Make sure branch is set to `main`

### "DNS_PROBE_FINISHED_NXDOMAIN"
- DNS hasn't propagated yet (wait 24-48 hours)
- Check DNS records in GoDaddy are correct
- Verify CNAME file exists in repository

### "Your connection is not private"
- HTTPS isn't enabled yet
- DNS needs to fully propagate first
- After DNS works, enable "Enforce HTTPS" in GitHub Pages settings

### Images not loading
- Check file names are correct (case-sensitive!)
- Ensure images are uploaded to repository
- Verify image paths in HTML are correct

### Changes not showing up
- Wait 1-2 minutes after commit
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Try incognito/private browsing mode

---

## 📞 Support Resources

- **GitHub Pages Docs**: https://docs.github.com/pages
- **GoDaddy Support**: https://www.godaddy.com/help
- **Git Tutorial**: https://try.github.io
- **GitHub Community**: https://github.community

---

## ✅ Quick Start Checklist

1. [ ] Create GitHub account
2. [ ] Create repository
3. [ ] Upload all website files
4. [ ] Enable GitHub Pages
5. [ ] Test at GitHub Pages URL
6. [ ] Add custom domain in GitHub
7. [ ] Create CNAME file
8. [ ] Update DNS in GoDaddy
9. [ ] Wait for DNS propagation (24-48 hours)
10. [ ] Enable HTTPS in GitHub
11. [ ] Update Google Analytics ID
12. [ ] Test custom domain
13. [ ] Submit to Google Search Console
14. [ ] Set up Google Business Profile
15. [ ] Share your website! 🎉

---

## 🎉 You're Done!

Your professional nail salon website is now live on the internet with:
- ✅ Free hosting
- ✅ Free SSL certificate
- ✅ Custom domain
- ✅ Automatic deployments
- ✅ Professional design
- ✅ SEO optimized
- ✅ Mobile responsive

Share your website:
- 📱 Add to Instagram bio
- 📘 Post on Facebook
- ⭐ Update Yelp listing
- 📧 Include in email signature
- 📄 Add to business cards

---

**Need Help?**

If you get stuck at any step, you can:
1. Check the troubleshooting section above
2. Search GitHub Community forums
3. Watch YouTube tutorials on "GitHub Pages custom domain"
4. Contact GoDaddy support for DNS help

**Last Updated:** January 8, 2026
