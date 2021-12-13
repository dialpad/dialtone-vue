// NOTE: RippleDuration controls how long the delay is for the animation
// of a skeleton 1000 pixels from the top of the page. Each skeleton
// from the top down will have a delay duration from 0 to this offset.
// The delay of each skeleton animation is based on how far down the page
// the skeleton is rendered. This is a linear relationship. The unit
// is miliseconds.
export const SKELETON_RIPPLE_DURATION = 3000000;

export const SKELETON_SHAPES = {
  circle: 'd-bar-circle',
  square: 'd-bar4',
};

export const SKELETON_TEXT_TYPES = [
  'label',
  'heading',
];

export const SKELETON_WIDTHS = {
  sm: 'd-w24',
  md: 'd-w32',
  lg: 'd-w48',
};

export const SKELETON_HEIGHTS = {
  sm: 'd-h24',
  md: 'd-h32',
  lg: 'd-h48',
};

export const SKELETON_HEADING_HEIGHTS = {
  sm: 'd-h16',
  md: 'd-h24',
  lg: 'd-h32',
};

export default {
  SKELETON_RIPPLE_DURATION,
  SKELETON_SHAPES,
  SKELETON_TEXT_TYPES,
  SKELETON_WIDTHS,
  SKELETON_HEIGHTS,
  SKELETON_HEADING_HEIGHTS,
};
