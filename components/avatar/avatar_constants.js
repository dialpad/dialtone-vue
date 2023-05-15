export const AVATAR_SIZE_MODIFIERS = {
  xs: 'd-avatar--xs',
  sm: 'd-avatar--sm',
  md: 'd-avatar--md',
  lg: 'd-avatar--lg',
  xl: 'd-avatar--xl',
};

export const AVATAR_KIND_MODIFIERS = {
  default: '',
  icon: 'd-avatar__icon',
  initials: 'd-avatar__initials',
};

export const AVATAR_PRESENCE_SIZE_MODIFIERS = {
  md: 'd-avatar__presence--md',
  lg: 'd-avatar__presence--lg',
};

export const AVATAR_PRESENCE_STATES = {
  NONE: '',
  BUSY: 'busy',
  AWAY: 'away',
  OFFLINE: 'offline',
  ACTIVE: 'active',
};

export const AVATAR_ICON_SIZES = {
  xs: '100',
  sm: '200',
  md: '400',
  lg: '500',
  xl: '600',
};

export const AVATAR_ANGLES = [45, -45, 90, -90, 135, -135, 180, -180];

export const GRADIENT_COLORS = {
  with100: ['dt-color-purple-100', 'dt-color-magenta-100', 'dt-color-gold-100', 'dt-color-blue-100'],
  with200: ['dt-color-purple-200', 'dt-color-magenta-200', 'dt-color-gold-200', 'dt-color-blue-200'],
};

export const MAX_GRADIENT_COLORS = 3;
export const MAX_GRADIENT_COLORS_100 = 2;

export const AVATAR_GROUP_VALIDATOR = (group) => group > 1;

export default {
  AVATAR_KIND_MODIFIERS,
  AVATAR_SIZE_MODIFIERS,
  AVATAR_ICON_SIZES,
  AVATAR_ANGLES,
  AVATAR_GROUP_VALIDATOR,
};
