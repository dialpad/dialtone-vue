export const SHORTCUTS_ALIASES = {
  cmd: '&#8984;', // ⌘ Command
  opt: 'Option',
  alt: 'Alt',
  shift: 'Shift',
  ctrl: 'Ctrl',
  del: 'Delete',
  pageUp: 'Page up',
  pageDown: 'Page down',
};

export const SHORTCUTS_ICON_ALIASES = {
  '{win}': 'IconWindows',
  '{arrow-right}': 'IconArrowRightAlt',
  '{arrow-left}': 'IconArrowRightAlt',
  '{arrow-up}': 'IconArrowRightAlt',
  '{arrow-down}': 'IconArrowRightAlt',
};

export const ARROW_DIRECTIONS = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
};

export const SHORTCUTS_ALIASES_LIST = Object
  .keys(SHORTCUTS_ALIASES).map(key => `{${key}}`)
  .concat(Object.keys(SHORTCUTS_ICON_ALIASES));
