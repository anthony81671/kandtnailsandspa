# K&T Nails and Spa - AI Chat Widget Setup Guide

## ✅ What's Been Done

1. **AI Chat Widget Added** - A beautiful floating chat widget has been added to your website
2. **Cloudflare Worker Code Created** - The backend code is ready to deploy

## 🚀 Deployment Steps

### Step 1: Get a Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click **"Get API Key"** or **"Create API Key"**
3. Select **"Create API key in new project"** (or use existing project)
4. Copy the API key (starts with `AIza...`)
5. **Keep this key secure!** Don't share it publicly

### Step 2: Deploy the Cloudflare Worker

1. **Go to Cloudflare Dashboard**

   - Visit: https://dash.cloudflare.com/
   - Sign in (or create a free account if you don't have one)

2. **Create a New Worker**

   - Click **"Workers & Pages"** in the left sidebar
   - Click **"Create Application"**
   - Click **"Create Worker"**
   - Name it: `knt-ai-chat` (or any name you prefer)
   - Click **"Deploy"**

3. **Edit the Worker Code**

   - After deployment, click **"Edit Code"**
   - Delete all the default code
   - Open the file: `cloudflare-worker.js` (in your project folder)
   - Copy ALL the code from that file
   - Paste it into the Cloudflare editor
   - Click **"Save and Deploy"**

4. **Add Your API Key as Environment Variable**

   - In the worker dashboard, click **"Settings"**
   - Scroll to **"Variables and Secrets"**
   - Under **"Environment Variables"**, click **"Add variable"**
   - Variable name: `GEMINI_API_KEY`
   - Value: Paste your Gemini API key from Step 1
   - Click **"Save and Deploy"**

5. **Copy Your Worker URL**
   - Go back to the worker overview
   - Copy the worker URL (looks like: `https://knt-ai-chat.YOUR-SUBDOMAIN.workers.dev`)

### Step 3: Update Your Website

1. **Open `index.html`**
2. Find this line (near the bottom of the file):
   ```javascript
   const WORKER_URL = "https://icy-glade-3783.anthony81671.workers.dev/";
   ```
3. Replace it with YOUR worker URL from Step 2.5:
   ```javascript
   const WORKER_URL = "https://knt-ai-chat.YOUR-SUBDOMAIN.workers.dev/";
   ```
4. Save the file

### Step 4: Test Your Chat Widget

1. Open your website in a browser
2. Look for the pink chat bubble in the bottom-right corner 💬
3. Click it to open the chat
4. Try asking questions like:
   - "What are your hours?"
   - "Do you do gel nails?"
   - "I'm going to a wedding, what should I get?"
   - "How much is a pedicure?"

## 🎨 Chat Widget Features

- **Beautiful Design** - Matches your website's pink theme
- **Smart AI** - Knows all about your services, hours, and location
- **Style Recommendations** - Can suggest nail styles based on occasions
- **Mobile Friendly** - Works great on phones and tablets
- **Fast Responses** - Powered by Google's Gemini AI

## 🔧 Customization Options

### Change Chat Widget Position

In `index.html`, find the `#ai-widget-container` div and modify:

```html
style="position: fixed; bottom: 20px; right: 20px; ..."
```

- Change `bottom: 20px` to move it up/down
- Change `right: 20px` to `left: 20px` to move to left side

### Change Chat Widget Colors

The widget uses your brand colors (#ec4899 pink). To change:

1. Search for `#ec4899` in the chat widget code
2. Replace with your preferred color code

### Modify AI Personality

In `cloudflare-worker.js`, edit the `BUSINESS_INFO` section to:

- Add more services
- Update pricing information
- Change the tone/personality
- Add seasonal promotions

## 💰 Costs

- **Gemini API**: FREE tier includes 1,500 requests/day (more than enough for most sites)
- **Cloudflare Workers**: FREE tier includes 100,000 requests/day
- **Total Cost**: $0 for typical usage! 🎉

## 🆘 Troubleshooting

### Chat widget doesn't appear

- Check browser console for errors (F12)
- Make sure you saved `index.html` after adding the widget

### "Error connecting to AI" message

- Verify your worker URL is correct in `index.html`
- Check that the Cloudflare Worker is deployed
- Verify the API key is set correctly in Cloudflare

### AI gives generic responses

- Make sure you updated the `BUSINESS_INFO` in `cloudflare-worker.js`
- Redeploy the worker after making changes

### CORS errors

- The worker code includes CORS headers
- If issues persist, check Cloudflare Worker logs

## 📞 Support

If you need help:

1. Check the Cloudflare Worker logs (in the dashboard)
2. Test the worker directly using the Cloudflare preview
3. Verify your Gemini API key is valid

## 🔐 Security Notes

- ✅ API key is stored securely in Cloudflare (not in your website code)
- ✅ CORS is configured to allow requests from any domain
- ✅ Worker validates all incoming requests
- ✅ Rate limiting is handled by Cloudflare automatically

## 🎯 Next Steps

1. Deploy the worker (follow steps above)
2. Test thoroughly with different questions
3. Monitor usage in Cloudflare dashboard
4. Customize the AI responses to match your brand voice
5. Consider adding conversation history (requires more advanced setup)

---

**Need Help?** The chat widget is ready to go - just follow the deployment steps above!
