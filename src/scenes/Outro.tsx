import {AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate} from 'remotion';

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Scene fade transitions

const fadeInScene = interpolate(frame, [0, 30], [0, 1]);

// Fade out: SON 30 frame (435-465)
const fadeOutScene = interpolate(frame, [435, 465], [1, 0], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});

const sceneOpacity = Math.min(fadeInScene, fadeOutScene);


  const scale = spring({
    frame,
    fps,
    config: {damping: 100}
  });

  const buttonScale = spring({
    frame: frame - 40,
    fps,
    config: {damping: 80, stiffness: 200}
  });

  const shine = interpolate(
    frame,
    [0, 90],
    [-200, 2000],
    {extrapolateRight: 'clamp'}
  );

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        opacity: sceneOpacity  // ✅ Smooth fade
      }}
    >
      {/* Animated background circle */}
      <div style={{
        position: 'absolute',
        width: 800,
        height: 800,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
        transform: `scale(${scale})`
      }} />

      <div style={{textAlign: 'center', zIndex: 10}}>
        <h2 style={{
          fontSize: 80,
          fontWeight: 900,
          color: 'white',
          marginBottom: 24,
          fontFamily: 'Inter, sans-serif'
        }}>
          Start Creating Today
        </h2>

        <p style={{
          fontSize: 32,
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: 60,
          fontFamily: 'Inter, sans-serif'
        }}>
          Join 50,000+ designers already using DesignFlow AI
        </p>

        {/* CTA Button */}
        <div style={{
          display: 'inline-block',
          transform: `scale(${buttonScale})`
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #ec4899 0%, #f59e0b 100%)',
            padding: '24px 80px',
            borderRadius: 16,
            fontSize: 36,
            fontWeight: 700,
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(236, 72, 153, 0.4)'
          }}>
            Get Started Free
            
            {/* Shine effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: shine,
              width: 100,
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              transform: 'skewX(-20deg)'
            }} />
          </div>
        </div>

        {/* Pricing info */}
        <p style={{
          fontSize: 20,
          color: 'rgba(255, 255, 255, 0.6)',
          marginTop: 32,
          fontFamily: 'Inter, sans-serif'
        }}>
          No credit card required • 14-day free trial
        </p>
      </div>
    </AbsoluteFill>
  );
};
