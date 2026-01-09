// K&T Nails and Spa AI Chat - VERIFIED WORKING VERSION
// Using Cloudflare Workers AI

export default {
  async fetch(request, env) {
    // CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ reply: 'Please use POST method' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      const { message } = await request.json();

      if (!message) {
        return new Response(JSON.stringify({ reply: 'Please send a message!' }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      // System prompt with business info
      const systemPrompt = `You are a helpful AI assistant for K&T Nails and Spa located in Cypress, California.

BUSINESS INFORMATION:
Address: 5353 Katella Ave., Unit A, Cypress, CA 90720 (next to Costco)
Phone: 714-820-6172
Hours: Monday-Friday 9AM-7PM, Saturday 9AM-6PM, Sunday Closed
Walk-ins welcome, appointments recommended for weekends

SERVICES WE OFFER:
Manicures: Classic, Gel (lasts 2-3 weeks), Acrylic Full Set, Gel-X Full Set, Dipping Powder, Nail Art & Design
Pedicures: Classic, Gel (lasts 3-4 weeks), Spa Pedicure with massage, Deluxe packages
Waxing: Facial and body waxing services
Spa Packages: Refresh (quick refresh), Relax (extended spa treatment), Rejuvenate (ultimate luxury), Couples (romantic experience)

FEATURES:
- Hospital-grade sterilization
- Single-use files and buffers  
- Licensed technicians
- Premium products

INSTRUCTIONS:
- Be warm, friendly, and professional
- Give specific, helpful answers about our services
- Keep responses conversational and 2-4 sentences
- For pricing questions, suggest calling 714-820-6172
- Provide style recommendations when asked
- If unsure, encourage them to call or visit`;

      // Call Workers AI
      const ai = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        stream: false
      });

      // Extract response - Workers AI format
      let reply = "I'm here to help! Please call us at 714-820-6172.";
      
      if (ai && ai.response) {
        reply = ai.response;
      } else if (ai && ai.result && ai.result.response) {
        reply = ai.result.response;
      }

      return new Response(JSON.stringify({ reply }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      console.error('Worker Error:', error.message);
      
      return new Response(JSON.stringify({ 
        reply: "I'm having a bit of trouble right now. Please call us at 714-820-6172 and we'll be happy to help!" 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
