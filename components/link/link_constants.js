export const DANGER = 'danger';
export const WARNING = 'warning';
export const SUCCESS = 'success';
export const MUTED = 'muted';
export const DISABLED = 'disabled';
export const INVERTED = 'inverted';
export const LINK_CLASS = 'd-link';
export const LINK_KINDS = ['', DANGER, WARNING, SUCCESS, MUTED];
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const LINK_MODIFIERS = {
  [DISABLED]: `${LINK_CLASS}--${DISABLED}`,
  [INVERTED]: `${LINK_CLASS}--${INVERTED}`,
  [`${INVERTED}${capitalize(DANGER)}`]: `${LINK_CLASS}--${INVERTED}-${DANGER}`,
  [`${INVERTED}${capitalize(DISABLED)}`]: `${LINK_CLASS}--${INVERTED}-${DISABLED}`,
};
