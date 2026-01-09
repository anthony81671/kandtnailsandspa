// K&T Nails and Spa Chat - TEST VERSION
// This version works WITHOUT AI binding (for testing deployment)

export default {
  async fetch(request) {
    // Handle CORS
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
      return new Response(JSON.stringify({ 
        reply: 'Please use POST method' 
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      const { message } = await request.json();

      // Simple test responses (no AI yet)
      let reply = "Thanks for your message! ";

      if (message.toLowerCase().includes('waxing')) {
        reply = "Yes, we offer facial and body waxing services! Call us at 714-820-6172 for pricing and appointments.";
      } else if (message.toLowerCase().includes('hours')) {
        reply = "We're open Mon-Fri 9AM-7PM, Saturday 9AM-6PM, and closed Sunday. Walk-ins welcome!";
      } else if (message.toLowerCase().includes('location') || message.toLowerCase().includes('where')) {
        reply = "We're located at 5353 Katella Ave., Unit A, Cypress, CA 90720 - right next to Costco!";
      } else if (message.toLowerCase().includes('phone') || message.toLowerCase().includes('call')) {
        reply = "You can reach us at 714-820-6172. We'd love to hear from you!";
      } else {
        reply = "Thanks for reaching out! We offer manicures, pedicures, waxing, and spa packages. Call us at 714-820-6172 for more info!";
      }

      return new Response(JSON.stringify({ reply }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      return new Response(JSON.stringify({ 
        reply: "Please call us at 714-820-6172 for assistance!" 
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
