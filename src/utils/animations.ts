import {interpolate, spring} from 'remotion';

export const fadeIn = (frame: number, delay = 0) => {
  return interpolate(
    frame - delay,
    [0, 30],
    [0, 1],
    {extrapolateRight: 'clamp'}
  );
};

export const slideUp = (frame: number, delay = 0) => {
  return interpolate(
    frame - delay,
    [0, 40],
    [100, 0],
    {extrapolateRight: 'clamp'}
  );
};

export const staggerDelay = (index: number, baseDelay = 15) => {
  return index * baseDelay;
};
