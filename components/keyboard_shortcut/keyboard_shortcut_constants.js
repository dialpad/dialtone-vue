export const SHORTCUTS_ALIASES = {
  cmd: '&#8984;', // ⌘ Command
  opt: 'Option',
  ctrl: 'Control',
  del: 'Delete',
  // opt: '&#8997;', // ⌥ Option
  // shift: '&#8679;', // ⇧ Shift
  // ctrl: '&#8963;', // ⌃ Control
  // delete: '&#9003;', // ⌫ Delete
  // arrowLeft: '&#8592;', // ← Arrow keys
  // arrowUp: '&#8593;', // ↑
  // arrowRight: '&#8594;', // → <IconArrowRightAlt />
  // arrowDown: '&#8595;', // ↓
  // pageUp: '&#8670;', // ⇞ Page up
  // pageDown: '&#8671;', // ⇟ Page down
};

export const SHORTCUTS_ICON_ALIASES = {
  '{win}': 'IconGrid',
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
