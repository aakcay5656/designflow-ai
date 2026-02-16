import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {FeatureCard} from '../components/FeatureCard';

const features = [
  {
    iconPath: 'icon-ai.png',
    title: 'AI Generation',
    description: 'Create stunning designs in seconds with powerful AI models'
  },
  {
    iconPath: 'icon-collab.png',
    title: 'Real-time Collab',
    description: 'Work together seamlessly with your team anywhere'
  },
  {
    iconPath: 'icon-export.png',
    title: 'Smart Export',
    description: 'Export to 20+ formats with one-click optimization'
  },
  {
    iconPath: 'icon-security.png',
    title: 'Enterprise Ready',
    description: 'Bank-level security with SOC 2 Type II compliance'
  }
];

export const Features: React.FC = () => {
  const frame = useCurrentFrame();
  
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  
  // Fade in
  const fadeIn = interpolate(frame, [0, 30], [0, 1]);
  
  // Fade out (son 30 frame)
  const fadeOut = interpolate(frame, [435, 465], [1, 0]);
  
  const finalOpacity = Math.min(fadeIn, fadeOut);
  
  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1e1b4b 0%, #7c3aed 50%, #ec4899 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 100px',
      opacity: finalOpacity  // ✅ Smooth fade
    }}>
      <h2 style={{
        fontSize: 72,
        fontWeight: 900,
        color: 'white',
        textAlign: 'center',
        marginBottom: 80,
        fontFamily: 'Inter, sans-serif',
        opacity: titleOpacity
      }}>
        Powerful Features
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 40,
        maxWidth: 1600
      }}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            index={index}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
