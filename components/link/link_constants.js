const LINK_CLASS = 'd-link';

export const DANGER = 'danger';
export const WARNING = 'warning';
export const SUCCESS = 'success';
export const MUTED = 'muted';
export const DISABLED = 'disabled';
export const INVERTED = 'inverted';
export const LINK_VARIANTS = ['', DANGER, WARNING, SUCCESS, MUTED, INVERTED];

export const LINK_VARIANT_CLASSES = {
  [DANGER]: `${LINK_CLASS}--${DANGER}`,
  [WARNING]: `${LINK_CLASS}--${WARNING}`,
  [SUCCESS]: `${LINK_CLASS}--${SUCCESS}`,
  [MUTED]: `${LINK_CLASS}--${MUTED}`,
  [INVERTED]: `${LINK_CLASS}--${INVERTED}`,
};

export const LINK_MODIFIER_CLASSES = {
  [DISABLED]: `${LINK_CLASS}--${DISABLED}`,
};
