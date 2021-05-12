import { capitalize } from '../utils';

export const DANGER = 'danger';
export const WARNING = 'warning';
export const SUCCESS = 'success';
export const MUTED = 'muted';
export const DISABLED = 'disabled';
export const INVERTED = 'inverted';
export const LINK_CLASS = 'd-link';
export const LINK_KINDS = ['', DANGER, WARNING, SUCCESS, MUTED];

export const LINK_VALIDATION_CLASSES = {
  [DANGER]: `${LINK_CLASS}--${DANGER}`,
  [WARNING]: `${LINK_CLASS}--${WARNING}`,
  [SUCCESS]: `${LINK_CLASS}--${SUCCESS}`,
  [MUTED]: `${LINK_CLASS}--${MUTED}`,
};

export const LINK_MODIFIERS_CLASSES = {
  [DISABLED]: `${LINK_CLASS}--${DISABLED}`,
  [INVERTED]: `${LINK_CLASS}--${INVERTED}`,
  [`${INVERTED}${capitalize(DANGER)}`]: `${LINK_CLASS}--${INVERTED}-${DANGER}`,
  [`${INVERTED}${capitalize(DISABLED)}`]: `${LINK_CLASS}--${INVERTED}-${DISABLED}`,
};
