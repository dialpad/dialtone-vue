export const INVERTED = 'inverted';
const TOOLTIP_CLASS = 'd-tooltip';

export const TOOLTIP_DIRECTION_MODIFIERS = [
  'top-left', 'top-center', 'top-right',
  'right-top', 'right-center', 'right-bottom',
  'bottom-left', 'bottom-center', 'bottom-right',
  'left-top', 'left-center', 'left-bottom',
];

export const TOOLTIP_STATE_MODIFIERS = {
  show: 'show',
  hide: 'hide',
};

export const TOOLTIP_KIND_MODIFIERS = {
  [INVERTED]: `${TOOLTIP_CLASS}--${INVERTED}`,
  [TOOLTIP_STATE_MODIFIERS.show]: `${TOOLTIP_CLASS}--${TOOLTIP_STATE_MODIFIERS.show}`,
  [TOOLTIP_STATE_MODIFIERS.hide]: `${TOOLTIP_CLASS}--${TOOLTIP_STATE_MODIFIERS.hide}`,
};
