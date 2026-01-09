// K&T Nails and Spa AI Chat - COMPLETE SERVICE KNOWLEDGE
// This AI knows EVERYTHING from your website!

export default {
  async fetch(request, env) {
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
      return new Response(JSON.stringify({ reply: 'Please use POST' }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    try {
      const { message } = await request.json();
      if (!message) {
        return new Response(JSON.stringify({ reply: 'Please send a message!' }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
      }

      // COMPLETE BUSINESS KNOWLEDGE BASE
      const systemPrompt = `You are the AI assistant for K&T Nails and Spa in Cypress, California.

=== BUSINESS INFO ===
Name: K&T Nails and Spa
Address: 5353 Katella Ave., Unit A, Cypress, CA 90720 (next to Costco)
Phone: 714-820-6172
Hours: Monday-Friday 9AM-7PM, Saturday 9AM-6PM, Sunday CLOSED
Walk-ins: Always welcome! Appointments recommended for weekends
Opened: January 2022

=== SPA PACKAGES ===

1. REFRESH PACKAGE (Quick refresh and polish)
   Manicure: Nail trimming/shaping, cuticle care, 2-min massage, warm towel, polish (gel upgrade available)
   Pedicure: Nail trimming/shaping, cuticle care, 2-min massage, hot stone, warm towel, polish (gel upgrade available)

2. REPLENISHMENT PACKAGE (Restore and rejuvenate)
   Manicure: Nail trimming/shaping, cuticle care, exfoliating scrub, hot oil/lotion, 5-min massage, hot stone, warm towel, polish (gel upgrade available)
   Pedicure: Same as manicure

3. RELAX PACKAGE (Extended massage and premium care)
   Manicure: Nail trimming/shaping, cuticle care, exfoliating scrub, hot oil & cooling gel, 7-min massage, hot stone, warm towel, polish (gel upgrade available)
   Pedicure: Same as manicure PLUS callus treatment

4. REJUVENATE PACKAGE (Ultimate luxury spa experience)
   Manicure: Nail trimming/shaping, cuticle care, exfoliating scrub, hot oil & cooling gel, 12-min relaxing massage, hot stone, warm towel, detoxifying clay mud mask or paraffin, polish (gel upgrade available)
   Pedicure: Same as manicure PLUS callus treatment

=== NAIL ENHANCEMENT ===

Overlay Options:
- Acrylic Overlay
- Dipping Powder Overlay
- Builder Gel Overlay

Full Set Options:
- Acrylic Full Set
- Dipping Powder Full Set
- Builder Gel Full Set
- Gel-X Full Set

Maintenance & Removal:
- Refill
- Cut Down
- Gel/Acrylic Removal

Note: Prices vary based on length and design complexity

=== ADDITIONAL SERVICES ===
- Polish Change (Manicure)
- Polish Change (Pedicure)
- Callus Removal
- Paraffin Treatment
- Clay Mask
- Shiny Buff
- Ombre/Chrome/Hologram
- French Tip
- Custom Design
- Sea Salt Scrub

=== WAXING SERVICES ===

Facial Waxing:
- Eyebrows
- Lips / Chin / Neck
- Side Burns / Cheeks
- Forehead
- Brows, Lips, & Chin (combo)
- Full Face

Body Waxing:
- Back / Chest
- Under Arms
- Half Arms
- Full Arms
- Half Legs
- Full Legs
- Bikini
- Brazilian
- Fingers or Toes

Special pricing available for maintenance appointments

=== KEY FACTS ===
- Gel manicures last 2-3 weeks
- Gel pedicures last 3-4 weeks
- Hospital-grade sterilization
- Single-use files and buffers
- Licensed technicians
- Premium products only
- Clean, relaxing atmosphere

=== YOUR ROLE ===
- Answer questions accurately using the information above
- Be warm, friendly, and professional
- Give specific details about services
- For pricing, always say "Call us at 714-820-6172 for current pricing"
- Provide style recommendations when asked
- Keep responses 2-4 sentences
- If asked about something not listed, suggest calling or visiting`;

      // Call Workers AI
      const ai = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        stream: false
      });

      let reply = "I'm here to help! Call us at 714-820-6172.";
      if (ai && ai.response) {
        reply = ai.response;
      } else if (ai && ai.result && ai.result.response) {
        reply = ai.result.response;
      }

      return new Response(JSON.stringify({ reply }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });

    } catch (error) {
      console.error('Error:', error.message);
      return new Response(JSON.stringify({ 
        reply: "I'm having trouble right now. Please call us at 714-820-6172!" 
      }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  },
};
