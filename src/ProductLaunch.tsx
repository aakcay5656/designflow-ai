import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Audio,
  Img,
  staticFile,
} from 'remotion';
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
    config: {damping: 100, stiffness: 200},
  });

  const fadeIn = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 10s = 300 frame → son 30 frame: 270–300
  const fadeOut = interpolate(frame, [270, 300], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const finalOpacity = Math.min(fadeIn, fadeOut);

  const logoRotate = interpolate(
    frame,
    [0, 80],
    [0, 360],
    {extrapolateRight: 'clamp'},
  );

  const subtitleY = interpolate(
    frame,
    [20, 60],
    [50, 0],
    {extrapolateRight: 'clamp'},
  );

  const subtitleOpacity = interpolate(
    frame,
    [20, 50],
    [0, 1],
    {extrapolateRight: 'clamp'},
  );

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: finalOpacity,
      }}
    >
      <div
        style={{
          opacity: fadeIn,
          transform: `rotate(${logoRotate}deg) scale(${scale})`,
          marginBottom: 40,
        }}
      >
        <Img
          src={staticFile('assets/logo.png')}
          style={{
            width: 200,
            height: 200,
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4))',
          }}
        />
      </div>

      <div
        style={{
          transform: `scale(${scale})`,
          opacity: fadeIn,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: 'white',
            margin: 0,
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-2px',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          DesignFlow AI
        </h1>

        <p
          style={{
            fontSize: 36,
            color: 'rgba(255,255,255,0.9)',
            marginTop: 20,
            fontFamily: 'Inter, sans-serif',
            transform: `translateY(${subtitleY}px)`,
            opacity: subtitleOpacity,
          }}
        >
          Design Faster. Create Smarter.
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Main Video Component
// Main Video Component
export const ProductLaunch: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
    {/* Voiceover (≈65s) */}
    <Audio src={staticFile('assets/voiceover-extended.mp3')} volume={0.8} />
    
    {/* Intro: 0 - 10s  (0 - 300) */}
    <Sequence from={0} durationInFrames={300}>
      <Intro />
    </Sequence>
    
    {/* Features: 9.5s - 30.5s  (285 - 915) */}
    <Sequence from={285} durationInFrames={630}>
      <Features />
    </Sequence>

    {/* Stats: 30.5s - 50.5s  (915 - 1515) → 20 saniye */}
    <Sequence from={915} durationInFrames={600}>
      <Stats />
    </Sequence>
    
    {/* Outro: 50.5s - 66s  (1515 - 1980) → 15.5 saniye (en kısa) */}
    <Sequence from={1515} durationInFrames={465}>
      <Outro />
    </Sequence>
  </AbsoluteFill>
  );
};

