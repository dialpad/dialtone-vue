// NOTE: RippleDuration controls how long the delay is for the animation
// of a skeleton 1000 pixels from the top of the page. Each skeleton
// from the top down will have a delay duration from 0 to this offset.
// The delay of each skeleton animation is based on how far down the page
// the skeleton is rendered. This is a linear relationship. The unit
// is miliseconds.
export const SKELETON_RIPPLE_DURATION = 3000;

export const SKELETON_SHAPES = {
  circle: 'd-bar-circle',
  square: 'd-bar4',
  rectangle: 'd-bar4',
  pill: 'd-bar-pill',
};

export const SKELETON_TEXT_TYPES = [
  'label',
  'paragraphs',
  'heading',
];

export const SKELETON_WIDTHS = {
  xs: 'd-w16',
  sm: 'd-w24',
  md: 'd-w32',
  lg: 'd-w48',
  xl: 'd-w64',
  '2xl': 'd-w96',
};
export const SKELETON_HEIGHTS = {
  xs: 'd-h16',
  sm: 'd-h24',
  md: 'd-h32',
  lg: 'd-h48',
  xl: 'd-h64',
  '2xl': 'd-h96',
};

export const SKELETON_RECTANGLE_WIDTH = {
  xs: 'd-w32',
  sm: 'd-w48',
  md: 'd-w64',
  lg: 'd-w96',
  xl: 'd-w128',
  '2xl': 'd-w216',
};

export const SKELETON_HEADING_HEIGHTS = {
  sm: 'd-h16',
  md: 'd-h24',
  lg: 'd-h32',
  xl: 'd-h42',
};

export default {
  SKELETON_RIPPLE_DURATION,
  SKELETON_SHAPES,
  SKELETON_TEXT_TYPES,
  SKELETON_WIDTHS,
  SKELETON_HEIGHTS,
  SKELETON_RECTANGLE_WIDTH,
  SKELETON_HEADING_HEIGHTS,
};
