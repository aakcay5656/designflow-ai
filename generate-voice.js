const fs = require('fs');
const axios = require('axios');

const ELEVENLABS_API_KEY = 'epikey';
const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Sarah - professional female

async function generateVoice() {
  const text = `
    Introducing DesignFlow AI. The smartest way to design.
    Create stunning visuals in seconds with AI-powered tools.
    Real-time collaboration. Smart export to over 20 formats.
    Enterprise-grade security.
    Trusted by 50,000 designers worldwide.
    Start creating today. Get started free.
  `;

  const response = await axios({
    method: 'post',
    url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    headers: {
      'Accept': 'audio/mpeg',
      'xi-api-key': ELEVENLABS_API_KEY,
      'Content-Type': 'application/json',
    },
    data: {
      text,
      model_id: 'eleven_turbo_v2_5',  // ✅ FREE tier model
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true
      }
    },
    responseType: 'arraybuffer'
  });

  fs.writeFileSync('public/assets/voiceover.mp3', response.data);
  console.log('✅ Voiceover generated!');
}

generateVoice()
