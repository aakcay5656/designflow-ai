import {useCurrentFrame, Img, staticFile, interpolate} from 'remotion';
import {fadeIn, slideUp, staggerDelay} from '../utils/animations';

import {COLORS} from '../utils/colors';


interface FeatureCardProps {
  title: string;
  description: string;
  iconPath: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconPath,
  index
}) => {
  const frame = useCurrentFrame();
  const delay = staggerDelay(index);
  
  const opacity = fadeIn(frame, delay);
  const translateY = slideUp(frame, delay);

  const iconRotate = interpolate(
    frame - delay,
    [0, 40],
    [0, 360],
    {extrapolateRight: 'clamp'}
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 24,
        padding: 48,
        border: '2px solid rgba(255, 255, 255, 0.2)',
        width: 420,
        height: 280,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div style={{
        marginBottom: 20,
        transform: `rotate(/${iconRotate}deg)`
      }}>
        <Img 
           src={staticFile(`assets/${iconPath}`)} 
          style={{
            width: 80,
            height: 80,
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 12px rgba(236, 72, 153, 0.5))'
          }}
        />
      </div>
      
      <h3 style={{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16,
        fontFamily: 'Inter, sans-serif'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1.5,
        fontFamily: 'Inter, sans-serif'
      }}>
        {description}
      </p>
    </div>
  );
};
