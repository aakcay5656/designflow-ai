import {useCurrentFrame, interpolate} from 'remotion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  delay?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  delay = 0
}) => {
  const frame = useCurrentFrame();
  
  const count = Math.floor(
    interpolate(
      frame - delay,
      [0, 60],
      [0, value],
      {extrapolateRight: 'clamp'}
    )
  );

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};
