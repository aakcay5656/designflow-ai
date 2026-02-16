import {AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig} from 'remotion';

export const Demo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  
  const fadeIn = interpolate(frame, [0, 30], [0, 1]);
  const fadeOut = interpolate(frame, [210, 240], [1, 0]);
  const finalOpacity = Math.min(fadeIn, fadeOut);

  const scale = spring({
    frame: frame - 20,
    fps,
    config: {damping: 100}
  });

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: finalOpacity
    }}>
      <div style={{
        transform: `scale(${scale})`,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: 32,
        padding: 80,
        border: '3px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 72,
          fontWeight: 900,
          color: 'white',
          marginBottom: 40,
          fontFamily: 'Inter, sans-serif'
        }}>
          AI-Powered Design
        </h2>
        
        <p style={{
          fontSize: 36,
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1.6
        }}>
          Transform ideas into reality<br/>
          in seconds, not hours
        </p>
      </div>
    </AbsoluteFill>
  );
};
