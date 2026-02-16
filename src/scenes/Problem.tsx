import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

export const Problem: React.FC = () => {
  const frame = useCurrentFrame();
  
  const fadeIn = interpolate(frame, [0, 30], [0, 1]);
  const fadeOut = interpolate(frame, [120, 150], [1, 0]);
  const finalOpacity = Math.min(fadeIn, fadeOut);

  const problems = [
    '⏰ Hours wasted on repetitive tasks',
    '😫 Complex design tools',
    '💸 Expensive software licenses'
  ];

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #7f1d1d 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: finalOpacity
    }}>
      <h2 style={{
        fontSize: 64,
        fontWeight: 900,
        color: 'white',
        textAlign: 'center',
        marginBottom: 60,
        fontFamily: 'Inter, sans-serif'
      }}>
        The Problem
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }}>
        {problems.map((problem, index) => {
          const delay = index * 20;
          const itemOpacity = interpolate(
            frame - delay,
            [0, 30],
            [0, 1],
            {extrapolateRight: 'clamp'}
          );

          return (
            <div
              key={index}
              style={{
                fontSize: 48,
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: 'Inter, sans-serif',
                opacity: itemOpacity,
                textAlign: 'center'
              }}
            >
              {problem}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
