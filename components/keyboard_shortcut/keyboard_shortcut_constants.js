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
  '{arrow-right}': 'IconArrowForward',
  '{arrow-left}': 'IconArrowBackward',
  '{arrow-up}': 'IconArrowUpward',
  '{arrow-down}': 'IconArrowDownward',
};

export const SHORTCUTS_ICON_SEPARATOR = {
  '{plus}': 'IconAdd',
};

export const SHORTCUTS_ALIASES_LIST = Object
  .keys(SHORTCUTS_ALIASES).map(key => `{${key}}`)
  .concat(Object.keys(SHORTCUTS_ICON_ALIASES));
