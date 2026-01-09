# 🚀 K&T Nails and Spa - Deployment Checklist

Use this checklist to deploy your website to GitHub Pages with your GoDaddy domain.

---

## Phase 1: Pre-Deployment Setup ⚙️

### GitHub Account
- [ ] Create GitHub account at https://github.com
- [ ] Verify email address
- [ ] Set up two-factor authentication (recommended)

### Local Files Ready
- [ ] All files are in `c:\Users\TTran\Nail Salon\KNTWebsite\`
- [ ] index.html is present
- [ ] Images are optimized (use https://tinypng.com)
- [ ] Logo file (KNTLogonb.png) is included
- [ ] Hero image (hero.png) is included

---

## Phase 2: Update Configuration Files 📝

### index.html Updates

- [ ] **Line 19, 20, 32**: Replace `https://www.kntnailsandspa.com` with your actual domain
- [ ] **Line 177, 182**: Replace `G-XXXXXXXXXX` with Google Analytics ID
  - Get from: https://analytics.google.com
  - Leave as `G-XXXXXXXXXX` if not ready yet
- [ ] **Line 203, 205, 206**: Update domain in Schema.org JSON
- [ ] **Line 857**: Add Gemini API key (or leave empty for now)
  - Get from: https://aistudio.google.com/app/apikey

### sitemap.xml Updates

- [ ] Replace all instances of `https://www.kntnailsandspa.com` with your domain
- [ ] Update `<lastmod>` dates to today's date

### Content Updates

- [ ] Replace placeholder testimonials with real reviews (or leave for now)
- [ ] Review FAQ answers and customize if needed
- [ ] Verify all business information is correct:
  - [ ] Phone number: 714-820-6172
  - [ ] Address: 5353 Katella Ave., Unit A, Cypress, CA 90720
  - [ ] Hours: Mon-Fri 9-7, Sat 9-6, Sun Closed
  - [ ] Social media links are correct

---

## Phase 3: Create GitHub Repository 📦

### Repository Creation
- [ ] Go to https://github.com/new
- [ ] Choose repository name:
  - **Recommended**: `[username].github.io`
  - **Alternative**: `knt-nails-spa`
- [ ] Set to **Public**
- [ ] ✅ Check "Add a README file"
- [ ] Click "Create repository"
- [ ] Note your repository URL: _______________________________

### Upload Files

**Option A: Web Upload (Easiest)**
- [ ] Click "Add file" → "Upload files"
- [ ] Drag all files from `KNTWebsite` folder
- [ ] Click "Commit changes"

**Option B: Git Command Line**
- [ ] Install Git from https://git-scm.com
- [ ] Open command prompt in website folder
- [ ] Run these commands:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin [your-repo-url]
  git push -u origin main
  ```

### Verify Upload
- [ ] All files appear in repository
- [ ] index.html is in the root (not in a subfolder)
- [ ] Images are uploaded

---

## Phase 4: Enable GitHub Pages 🌐

### GitHub Pages Settings
- [ ] Go to repository Settings
- [ ] Click "Pages" in left sidebar
- [ ] Under "Source":
  - [ ] Select "Deploy from a branch"
  - [ ] Choose "main" branch
  - [ ] Select "/ (root)" folder
- [ ] Click "Save"
- [ ] Wait 1-2 minutes
- [ ] Refresh page to see: "Your site is live at..."

### Test GitHub Pages URL
- [ ] Copy the GitHub Pages URL (e.g., https://[username].github.io)
- [ ] Open in browser
- [ ] Verify website loads correctly
- [ ] Check on mobile device or using Chrome DevTools
- [ ] Test all navigation links
- [ ] Verify images load

**If website doesn't load:**
- Wait another 2-5 minutes
- Check that index.html is in repository root
- Verify GitHub Pages is enabled in Settings

---

## Phase 5: Connect Custom Domain 🔗

### Create CNAME File
- [ ] Go to repository on GitHub
- [ ] Click "Add file" → "Create new file"
- [ ] Name it: `CNAME` (all caps, no extension)
- [ ] Content (choose one):
  - [ ] `www.kntnailsandspa.com` (recommended)
  - [ ] `kntnailsandspa.com`
- [ ] Click "Commit new file"

### GitHub Domain Settings
- [ ] Go to Settings → Pages
- [ ] Under "Custom domain", enter: `www.kntnailsandspa.com`
- [ ] Click "Save"
- [ ] Note: DNS check will fail (expected - we'll fix next)

---

## Phase 6: Configure GoDaddy DNS ⚙️

### Log into GoDaddy
- [ ] Go to https://www.godaddy.com
- [ ] Log in to your account
- [ ] Go to "My Products"
- [ ] Find your domain
- [ ] Click "DNS" or "Manage DNS"

### Update DNS Records

**Delete Old Records (Important!)**
- [ ] Find any **A records** with name `@` pointing to parking page
- [ ] Delete them (click trash icon)

**Add New A Records**

Add these 4 A records (for apex domain):

Record 1:
- [ ] Type: **A**
- [ ] Name: **@**
- [ ] Value: **185.199.108.153**
- [ ] TTL: **600** (or default)

Record 2:
- [ ] Type: **A**
- [ ] Name: **@**
- [ ] Value: **185.199.109.153**
- [ ] TTL: **600**

Record 3:
- [ ] Type: **A**
- [ ] Name: **@**
- [ ] Value: **185.199.110.153**
- [ ] TTL: **600**

Record 4:
- [ ] Type: **A**
- [ ] Name: **@**
- [ ] Value: **185.199.111.153**
- [ ] TTL: **600**

**Add CNAME Record (for www)**

- [ ] Type: **CNAME**
- [ ] Name: **www**
- [ ] Value: **[your-username].github.io**
- [ ] TTL: **600**

**Save Changes**
- [ ] Click "Save" or "Save Changes"
- [ ] Confirm all changes

---

## Phase 7: Wait for DNS Propagation ⏰

### DNS Propagation Timeline
- Typical time: 1-4 hours
- Maximum time: 24-48 hours
- Nothing to do but wait!

### Check DNS Status
- [ ] Wait at least 1 hour
- [ ] Check at: https://dnschecker.org
  - [ ] Enter your domain
  - [ ] Select "A" record type
  - [ ] Should show GitHub's IP addresses
- [ ] Try accessing your domain in browser

**While waiting, you can:**
- ✅ Set up Google Analytics
- ✅ Set up Google Search Console
- ✅ Prepare social media posts
- ✅ Take before/after photos for gallery

---

## Phase 8: Enable HTTPS 🔒

### After DNS Propagates (24-48 hours)

- [ ] DNS is fully propagated (green checkmarks on dnschecker.org)
- [ ] Go to GitHub → Settings → Pages
- [ ] Under "Custom domain", you should see green checkmark ✅
- [ ] ✅ Check "Enforce HTTPS"
- [ ] Wait 5-10 minutes for SSL certificate to provision

### Test HTTPS
- [ ] Visit https://www.kntnailsandspa.com
- [ ] Green padlock appears in browser
- [ ] Certificate is valid (click padlock to check)
- [ ] No security warnings

**If HTTPS doesn't work:**
- Wait another hour
- Clear browser cache (Ctrl+F5)
- Try incognito/private browsing mode
- Check that DNS is fully propagated

---

## Phase 9: Connect Google Services 📊

### Google Analytics (Optional but Recommended)

- [ ] Go to https://analytics.google.com
- [ ] Sign in with Google account
- [ ] Click "Start measuring"
- [ ] Create account and property
  - [ ] Account name: K&T Nails and Spa
  - [ ] Property name: K&T Website
  - [ ] Time zone: Pacific Time
  - [ ] Currency: USD
- [ ] Copy Measurement ID (format: G-XXXXXXXXXX)
- [ ] Update index.html lines 177 and 182
- [ ] Commit and push changes
- [ ] Test: Visit your site, check Real-Time reports in GA

### Google Search Console

- [ ] Go to https://search.google.com/search-console
- [ ] Click "Add property"
- [ ] Enter: https://www.kntnailsandspa.com
- [ ] Choose verification method: "HTML tag"
- [ ] Copy meta tag
- [ ] Add to index.html in `<head>` section
- [ ] Commit and push changes
- [ ] Click "Verify" in Search Console
- [ ] Submit sitemap:
  - [ ] Go to Sitemaps section
  - [ ] Enter: `sitemap.xml`
  - [ ] Click "Submit"

### Google Business Profile

- [ ] Go to https://business.google.com
- [ ] Search for your business
- [ ] Claim or create listing
- [ ] Verify business (phone/postcard)
- [ ] Complete profile:
  - [ ] Add photos
  - [ ] Add services
  - [ ] Add hours
  - [ ] Add website URL
  - [ ] Add description

---

## Phase 10: Final Testing ✅

### Desktop Testing

- [ ] Open in Chrome
- [ ] Open in Firefox
- [ ] Open in Safari (if Mac)
- [ ] Open in Edge

**Test these features:**
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Images load properly
- [ ] Hero section displays correctly
- [ ] AI Style Match section works (if API key added)
- [ ] FAQ accordions open/close
- [ ] Services accordions work
- [ ] Instagram feed loads (may take time)
- [ ] Footer social links work
- [ ] Contact modal opens
- [ ] Phone number is clickable

### Mobile Testing

- [ ] Open on iPhone/Android
- [ ] Or use Chrome DevTools (F12 → Toggle device toolbar)

**Test these features:**
- [ ] Mobile menu opens/closes
- [ ] Navigation works
- [ ] Images resize properly
- [ ] Text is readable (not too small)
- [ ] Buttons are easy to tap
- [ ] Phone number is clickable
- [ ] All sections look good

### Performance Testing

- [ ] Test at https://pagespeed.web.dev
  - [ ] Mobile score above 80
  - [ ] Desktop score above 90
- [ ] Test at https://gtmetrix.com
  - [ ] Grade B or better

### SEO Testing

- [ ] Google "site:yourwebsite.com"
- [ ] Your site appears in results (may take 1-2 weeks for new sites)
- [ ] Title and description look good
- [ ] Test rich results: https://search.google.com/test/rich-results
- [ ] Schema.org markup is valid

---

## Phase 11: Launch Announcement 🎉

### Update Business Listings

- [ ] Update Yelp with website URL
- [ ] Update Facebook page with website URL
- [ ] Update Instagram bio with website URL
- [ ] Update Google Business Profile

### Social Media Posts

- [ ] Create launch announcement post
- [ ] Share website link
- [ ] Encourage customers to visit
- [ ] Ask for reviews

### Print Materials

- [ ] Update business cards with website
- [ ] Update flyers/brochures
- [ ] Update signage if applicable
- [ ] Update email signature

---

## Phase 12: Ongoing Maintenance 🔧

### Weekly Tasks

- [ ] Check Google Analytics
- [ ] Respond to reviews
- [ ] Post to social media
- [ ] Update Instagram (feed will auto-update on site)

### Monthly Tasks

- [ ] Review and update testimonials
- [ ] Add new before/after photos
- [ ] Check for broken links
- [ ] Review FAQ and update if needed
- [ ] Check Google Search Console for issues

### Quarterly Tasks

- [ ] Review and optimize content
- [ ] Check page speed
- [ ] Update services/pricing if changed
- [ ] Refresh photos
- [ ] Review analytics and adjust strategy

---

## 🆘 Troubleshooting

### Common Issues

**"404 Page Not Found"**
- [ ] Check index.html is in repository root
- [ ] Verify GitHub Pages is enabled
- [ ] Clear browser cache

**"DNS_PROBE_FINISHED_NXDOMAIN"**
- [ ] DNS hasn't propagated (wait 24-48 hours)
- [ ] Check DNS records in GoDaddy
- [ ] Verify CNAME file exists

**"Your connection is not private"**
- [ ] DNS hasn't fully propagated
- [ ] Wait for SSL certificate provisioning
- [ ] Enable "Enforce HTTPS" after DNS works

**Images not loading**
- [ ] Check file names (case-sensitive!)
- [ ] Verify images are in repository
- [ ] Check image paths in HTML

**AI Style Match not working**
- [ ] Verify API key is added
- [ ] Check browser console for errors (F12)
- [ ] Ensure API key has correct permissions

---

## 📞 Need Help?

**Resources:**
- GitHub Pages Docs: https://docs.github.com/pages
- GoDaddy Support: https://www.godaddy.com/help
- Google Analytics Help: https://support.google.com/analytics
- Search Console Help: https://support.google.com/webmasters

**Quick Reference Files:**
- [GitHub Pages Setup Guide](GITHUB-PAGES-SETUP.md) - Detailed deployment instructions
- [Professional Enhancements Guide](PROFESSIONAL-ENHANCEMENTS.md) - Feature documentation
- [README.md](README.md) - Project overview

---

## ✅ Final Checklist

Before marking as complete, ensure:

- [ ] Website loads at custom domain
- [ ] HTTPS is working (green padlock)
- [ ] All images load
- [ ] All links work
- [ ] Mobile responsive
- [ ] Google Analytics tracking
- [ ] Submitted to Google Search Console
- [ ] Google Business Profile updated
- [ ] Social media profiles updated
- [ ] Business cards/materials updated

---

## 🎊 Congratulations!

Your K&T Nails and Spa website is now live on the internet!

**Your website:** https://www.kntnailsandspa.com

**Total cost:** ~$12-15/year (domain only)
**Hosting cost:** $0 (FREE via GitHub Pages!)

Share it with the world! 🌟

---

**Deployment Date:** _______________
**Deployed By:** ___________________
**Version:** 2.0
