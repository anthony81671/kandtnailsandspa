// K&T Nails and Spa AI Chat Assistant
// Using Cloudflare Workers AI (FREE - No API Key Needed!)

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only accept POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ reply: 'Method not allowed' }), {
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
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      // Business context
      const systemPrompt = `You are an AI assistant for K&T Nails and Spa in Cypress, CA.

Location: 5353 Katella Ave., Unit A, Cypress, CA 90720 (next to Costco)
Phone: 714-820-6172
Hours: Mon-Fri 9AM-7PM, Sat 9AM-6PM, Sun Closed

Services: Manicures (Classic, Gel, Acrylic, Gel-X, Dipping Powder, Nail Art), Pedicures (Classic, Gel, Spa, Deluxe), Waxing (facial and body), Spa Packages (Refresh, Relax, Rejuvenate, Couples)

Be friendly and helpful. Keep responses 2-4 sentences. For pricing, suggest calling 714-820-6172.`;

      // Call Cloudflare Workers AI
      const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 256,
        temperature: 0.7,
      });

      // Extract the AI response - Workers AI returns different formats
      let reply = "I'm here to help! Call us at 714-820-6172.";
      
      if (aiResponse.response) {
        reply = aiResponse.response;
      } else if (aiResponse.result && aiResponse.result.response) {
        reply = aiResponse.result.response;
      } else if (aiResponse.choices && aiResponse.choices[0]) {
        reply = aiResponse.choices[0].message?.content || aiResponse.choices[0].text;
      }
      
      console.log('AI Response:', JSON.stringify(aiResponse));

      return new Response(JSON.stringify({ reply }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ 
        reply: "I'm having trouble right now. Please call us at 714-820-6172!" 
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
