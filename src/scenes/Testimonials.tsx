import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const Testimonials: React.FC = () => {
  const frame = useCurrentFrame();
  
  const fadeIn = interpolate(frame, [0, 30], [0, 1]);
  const fadeOut = interpolate(frame, [150, 180], [1, 0]);
  const finalOpacity = Math.min(fadeIn, fadeOut);

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #581c87 0%, #be123c 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 200px',
      opacity: finalOpacity
    }}>
      <div style={{
        fontSize: 56,
        fontWeight: 700,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1.5,
        fontStyle: 'italic',
        marginBottom: 40
      }}>
        "DesignFlow AI saved us 10 hours per week.<br/>
        It's a game changer for our team."
      </div>
      
      <div style={{
        fontSize: 32,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Inter, sans-serif'
      }}>
        — Sarah Chen, Creative Director
      </div>
    </AbsoluteFill>
  );
};
