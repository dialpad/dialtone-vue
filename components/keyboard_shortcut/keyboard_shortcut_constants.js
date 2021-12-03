export const SHORTCUTS_ALIASES = {
  cmd: '&#8984;', // ⌘ Command
  opt: '&#8997;', // ⌥ Option
  shift: '&#8679;', // ⇧ Shift
  ctrl: '&#8963;', // ⌃ Control
  delete: '&#9003;', // ⌫ Delete
  arrowLeft: '&#8592;', // ← Arrow keys
  arrowUp: '&#8593;', // ↑
  arrowRight: '&#8594;', // →
  arrowDown: '&#8595;', // ↓
  pageUp: '&#8670;', // ⇞ Page up
  pageDown: '&#8671;', // ⇟ Page down
};

export const SHORTCUTS_ALIASES_LIST = Object.keys(SHORTCUTS_ALIASES).map(key => `{${key}}`);
