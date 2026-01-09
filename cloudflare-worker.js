/**
 * Cloudflare Worker for K&T Nails and Spa AI Chat Assistant
 * Using Cloudflare Workers AI (FREE - No API Key Needed!)
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Go to https://dash.cloudflare.com/
 * 2. Navigate to Workers & Pages > Overview
 * 3. Find your worker: "icy-glade-3783"
 * 4. Click "Edit Code"
 * 5. Replace ALL code with this file's contents
 * 6. Click "Save and Deploy"
 * 7. That's it! No API keys needed!
 */

// Business information for the AI assistant
const BUSINESS_INFO = `You are an AI assistant for K&T Nails and Spa, a premium nail salon in Cypress, CA.

BUSINESS DETAILS:
- Name: K&T Nails and Spa
- Location: 5353 Katella Ave., Unit A, Cypress, CA 90720 (next to Costco)
- Phone: 714-820-6172
- Hours: 
  * Monday-Friday: 9:00 AM - 7:00 PM
  * Saturday: 9:00 AM - 6:00 PM
  * Sunday: Closed
- Walk-ins welcome, but appointments recommended for weekends

SERVICES OFFERED:
1. Spa Packages:
   - Refresh Package: Quick refresh and polish
   - Relax Package: Extended spa treatment with massage
   - Rejuvenate Package: Ultimate luxury experience
   - Couples Package: Romantic spa experience for two

2. Manicure Services:
   - Classic Manicure
   - Gel Manicure (lasts 2-3 weeks)
   - Acrylic Full Set
   - Gel-X Full Set
   - Dipping Powder
   - Nail Art & Design

3. Pedicure Services:
   - Classic Pedicure
   - Gel Pedicure (lasts 3-4 weeks)
   - Spa Pedicure with massage
   - Deluxe Pedicure packages

4. Additional Services:
   - Waxing (facial and body)
   - Nail repairs
   - Polish changes

PRICING: Call 714-820-6172 for current pricing

SPECIAL FEATURES:
- Hospital-grade sterilization
- Single-use files and buffers
- Licensed technicians
- Premium products
- Clean, relaxing atmosphere

YOUR ROLE:
- Answer questions about services, hours, location, and policies
- Provide style recommendations based on occasions or preferences
- Be friendly, helpful, and professional
- Encourage booking by phone: 714-820-6172
- If you don't know something specific, suggest calling the salon
- Keep responses concise (2-4 sentences typically)
- Always be warm and welcoming
`;

export default {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only accept POST requests
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      // Parse the incoming request
      const { message } = await request.json();

      if (!message || typeof message !== 'string') {
        return new Response(JSON.stringify({ error: 'Invalid message' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      // Use Cloudflare Workers AI (FREE!)
      // Using @cf/meta/llama-3.1-8b-instruct model
      const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages: [
          {
            role: 'system',
            content: BUSINESS_INFO
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 256,
        temperature: 0.7,
      });

      // Extract the response
      const reply = aiResponse.response || 
                   "I'm here to help! Please call us at 714-820-6172 for assistance.";

      // Return the AI response
      return new Response(JSON.stringify({ reply }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      console.error('Worker error:', error);
      
      // Friendly error message
      return new Response(JSON.stringify({ 
        reply: "I'm having trouble right now. Please call us at 714-820-6172 and we'll be happy to help!" 
      }), {
        status: 200, // Return 200 so the chat shows the message
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
