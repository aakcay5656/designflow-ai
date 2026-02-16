import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {AnimatedCounter} from '../components/AnimatedCounter';
import {fadeIn, staggerDelay} from '../utils/animations';

const stats = [
  {value: 50000, suffix: '+', label: 'Active Users'},
  {value: 98, suffix: '%', label: 'Satisfaction Rate'},
  {value: 240, suffix: 'hrs', label: 'Time Saved Daily'},
  {value: 150, suffix: '+', label: 'Countries'}
];

export const Stats: React.FC = () => {
  const frame = useCurrentFrame();
  
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);

const fadeInScene = interpolate(frame, [0, 30], [0, 1]);

// Fade out: SON 30 frame (570-600)
const fadeOutScene = interpolate(frame, [570, 600], [1, 0], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});

const finalOpacity = Math.min(fadeInScene, fadeOutScene);


  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 150px',
      opacity: finalOpacity  // ✅ Smooth fade
    }}>
      <h2 style={{
        fontSize: 64,
        fontWeight: 900,
        color: 'white',
        textAlign: 'center',
        marginBottom: 100,
        fontFamily: 'Inter, sans-serif',
        opacity: titleOpacity
      }}>
        Trusted by Thousands
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 80,
        width: '100%'
      }}>
        {stats.map((stat, index) => {
          const delay = staggerDelay(index, 10);
          const opacity = fadeIn(frame, delay);
          
          return (
            <div
              key={index}
              style={{
                textAlign: 'center',
                opacity
              }}
            >
              <div style={{
                fontSize: 72,
                fontWeight: 900,
                color: '#ec4899',
                fontFamily: 'Inter, sans-serif',
                marginBottom: 16
              }}>
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  delay={delay}
                />
              </div>
              <div style={{
                fontSize: 24,
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Inter, sans-serif'
              }}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
