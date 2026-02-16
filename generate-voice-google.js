const gtts = require('gtts');
const fs = require('fs');

const text = `
  Are you tired of spending hours on design tasks?
  
  Introducing DesignFlow AI. The smartest way to design.
  
  Create stunning visuals in seconds with powerful AI tools.
  Our advanced capabilities transform your ideas into reality instantly.
  
  Experience real-time collaboration. 
  Work together seamlessly with your team, anywhere in the world.
  
  Smart export to over twenty formats. 
  One click optimization for any platform you need.
  
  Enterprise-grade security with SOC 2 Type II compliance.
  Your data is protected with end-to-end encryption.
  
  Trusted by fifty thousand designers worldwide. 
  Our users save 240 hours every day.
  With a 98 percent satisfaction rate.
  Available in over 150 countries.
  
  Ready to transform your workflow?
  
  Start creating today. Get started free.
  No credit card required. Fourteen day free trial.
  
  Join DesignFlow AI today.
`;


const speech = new gtts(text, 'en', 1.05); 
speech.save('public/assets/voiceover-extended.mp3', (err) => {
  if (err) {
    console.error('❌ Error:', err);
  } else {
    console.log('✅ Extended voiceover generated!');
  }
});
