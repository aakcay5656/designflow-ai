const gtts = require('gtts');
const fs = require('fs');

const text = `
  Introducing DesignFlow AI. The smartest way to design.
  Create stunning visuals in seconds with AI powered tools.
  Real-time collaboration. Smart export to over twenty formats.
  Enterprise-grade security.
  Trusted by fifty thousand designers worldwide.
  Start creating today. Get started free.
`;

const speech = new gtts(text, 'en');
speech.save('public/assets/voiceover.mp3', (err) => {
  if (err) {
    console.error('❌ Error:', err);
  } else {
    console.log('✅ Voiceover generated!');
  }
});
