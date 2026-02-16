import {AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, spring, interpolate, Audio, Img, staticFile} from 'remotion';
import {Features} from './scenes/Features';
import {Stats} from './scenes/Stats';
import {Outro} from './scenes/Outro';

// Intro Scene Component
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {damping: 100, stiffness: 200}
  });

  const opacity = interpolate(frame, [0, 30], [0, 1]);

  // Fade out animasyonu ekle (son 30 frame)
  const fadeOut = interpolate(
    frame,
    [270, 300],  // Son 1 saniye
    [1, 0]
  );

  const logoRotate = interpolate(
    frame,
    [0, 80],
    [0, 360],
    {extrapolateRight: 'clamp'}
  );

  const subtitleY = interpolate(
    frame,
    [20, 60],
    [50, 0],
    {extrapolateRight: 'clamp'}
  );

  const subtitleOpacity = interpolate(
    frame,
    [20, 50],
    [0, 1],
    {extrapolateRight: 'clamp'}
  );

  // Her iki opacity'yi birleştir
  const finalOpacity = Math.min(opacity, fadeOut);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: finalOpacity  // ✅ Fade out ekle
      }}
    >
      <div style={{
        opacity,
        transform: `rotate(${logoRotate}deg) scale(${scale})`,
        marginBottom: 40
      }}>
        <Img 
          src={staticFile('assets/logo.png')}
          style={{
            width: 200,
            height: 200,
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4))'
          }}
        />
      </div>

      <div style={{
        transform: `scale(${scale})`,
        opacity,
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 120,
          fontWeight: 900,
          color: 'white',
          margin: 0,
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-2px',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          DesignFlow AI
        </h1>
        
        <p style={{
          fontSize: 36,
          color: 'rgba(255,255,255,0.9)',
          marginTop: 20,
          fontFamily: 'Inter, sans-serif',
          transform: `translateY(${subtitleY}px)`,
          opacity: subtitleOpacity
        }}>
          Design Faster. Create Smarter.
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Main Video Component
export const ProductLaunch: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {/* Voiceover - 23 saniye */}
      <Audio src={staticFile('assets/voiceover.mp3')} volume={0.8} />
      
      {/* Intro: 0-6s (0-180 frames) */}
      <Sequence from={0} durationInFrames={180}>
        <Intro />
      </Sequence>
      
      {/* Features: 5.5-15s (165-450 frames) - overlap 15 frame */}
      <Sequence from={165} durationInFrames={285}>
        <Features />
      </Sequence>

      {/* Stats: 14.5-20s (435-600 frames) - overlap 15 frame */}
      <Sequence from={435} durationInFrames={165}>
        <Stats />
      </Sequence>
      
      {/* Outro/CTA: 19.5-27s (585-810 frames) - overlap 15 frame */}
      <Sequence from={585} durationInFrames={225}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

