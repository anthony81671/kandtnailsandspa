# K&T Nails and Spa - Official Website

[![License](https://img.shields.io/badge/license-Private-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-success.svg)](https://pages.github.com/)

Professional website for K&T Nails and Spa, located in Cypress, CA.

## 🌐 Live Website

**Coming Soon:** https://www.kntnailsandspa.com

Currently accessible at: https://[username].github.io

## 📍 Business Information

**K&T Nails and Spa**
5353 Katella Ave., Unit A
Cypress, CA 90720

📞 Phone: [(714) 820-6172](tel:7148206172)
📧 Social Media:
- [Facebook](https://www.facebook.com/kandtnailsandspa)
- [Instagram](https://www.instagram.com/kntnailsandspa)
- [Yelp](https://yelp.to/QXoz5-TAWd)

**Hours:**
- Monday - Friday: 9:00 AM - 7:00 PM
- Saturday: 9:00 AM - 6:00 PM
- Sunday: Closed

## ✨ Features

This website includes:

- 🎨 **Modern Design**: Clean, professional layout with brand colors
- 📱 **Mobile Responsive**: Perfect display on all devices
- 🤖 **AI Style Consultant**: Powered by Google Gemini AI
- 📸 **Instagram Feed**: Live feed from @kntnailsandspa
- ⭐ **Customer Testimonials**: Real reviews from satisfied clients
- ❓ **FAQ Section**: Answers to common questions
- 🖼️ **Before & After Gallery**: Showcase of transformations
- 🔍 **SEO Optimized**: Enhanced for search engines
- 🔒 **Security Features**: Modern security headers
- ⚡ **Performance Optimized**: Fast loading with caching
- ♿ **Accessible**: WCAG compliant for all users

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with Tailwind CSS
- **JavaScript**: Vanilla JS for interactivity
- **Tailwind CSS**: Utility-first CSS framework
- **AOS**: Scroll animations
- **Lucide Icons**: Modern icon library
- **Google Gemini AI**: AI-powered style recommendations
- **Google Analytics**: Visitor tracking
- **Schema.org**: Structured data for SEO

## 📁 Project Structure

```
KNTWebsite/
├── index.html                      # Main website file
├── KNTLogonb.png                   # Logo
├── hero.png                        # Hero section background
├── robots.txt                      # Search engine instructions
├── sitemap.xml                     # Site structure for SEO
├── .htaccess                       # Apache config (reference only)
├── .gitignore                      # Git ignore rules
├── CNAME                           # Custom domain configuration
├── README.md                       # This file
├── PROFESSIONAL-ENHANCEMENTS.md    # Enhancement documentation
└── GITHUB-PAGES-SETUP.md           # Deployment guide
```

## 🚀 Deployment

This website is deployed on **GitHub Pages** (free hosting) and connected to a custom GoDaddy domain.

For detailed deployment instructions, see [GITHUB-PAGES-SETUP.md](GITHUB-PAGES-SETUP.md)

### Quick Deploy Steps:

1. Fork or clone this repository
2. Enable GitHub Pages in repository settings
3. Configure custom domain in GitHub Pages
4. Update DNS records in GoDaddy
5. Enable HTTPS enforcement

## 🔧 Configuration

### Required Updates Before Deployment:

1. **Google Analytics** (line 177, 182 in index.html):
   - Replace `G-XXXXXXXXXX` with your GA4 Measurement ID

2. **Gemini API Key** (line 857 in index.html):
   - Add your API key for AI Style Match feature
   - **Security Note**: Consider using a backend proxy

3. **Domain Name**:
   - Update all instances of `https://www.kntnailsandspa.com` with your actual domain
   - Update in meta tags, Schema.org JSON, and sitemap.xml

4. **CNAME File**:
   - Create `CNAME` file with your custom domain

## 📝 Customization Guide

### Updating Content:

- **Services**: Edit service sections in index.html
- **Testimonials**: Replace placeholder reviews with real ones
- **Gallery**: Add actual before/after photos
- **FAQ**: Modify questions and answers as needed

### Changing Colors:

Edit the Tailwind configuration (line 162-171):
```javascript
brand: {
    pink: '#ec4899',    // Primary brand color
    dark: '#1f2937',    // Dark accents
    gold: '#d4af37',    // Gold highlights
    teal: '#14b8a6'     // Secondary color
}
```

### Adding Images:

1. Optimize images first (use [TinyPNG](https://tinypng.com))
2. Upload to repository
3. Reference in HTML: `<img src="filename.jpg" alt="Description">`

## 🔒 Security

- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ XSS protection enabled
- ✅ Content Security Policy implemented
- ✅ WCAG accessibility compliant
- ⚠️ API keys should be secured (use environment variables or backend proxy)

## 📊 SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (social media)
- ✅ Twitter Card tags
- ✅ Schema.org structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Mobile-friendly design
- ✅ Fast loading speed

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

Target metrics:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.8s
- Speed Index: < 3.4s
- Time to Interactive: < 3.8s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

## 📈 Analytics & Tracking

Once deployed, track:
- Visitor traffic
- Popular pages
- Device types (mobile vs desktop)
- Geographic location
- Conversion goals (phone clicks, form submissions)

## 🤝 Contributing

This is a private business website. For suggestions or bug reports:
1. Contact the business directly
2. Or create an issue in this repository (if public)

## 📄 License

© 2025 K&T Nails and Spa. All rights reserved.

This is proprietary software for K&T Nails and Spa business use only.

## 👨‍💻 Development

**Built with ❤️ for K&T Nails and Spa**

For technical documentation, see:
- [Professional Enhancements Guide](PROFESSIONAL-ENHANCEMENTS.md)
- [GitHub Pages Setup](GITHUB-PAGES-SETUP.md)

## 📞 Support

For website issues or updates:
- Business Owner: Contact through salon phone
- Technical Issues: Create an issue in this repository

---

**Version:** 2.0
**Last Updated:** January 8, 2026
**Status:** Ready for Deployment 🚀
