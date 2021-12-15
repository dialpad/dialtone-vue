<template>
  <div>
    <div class="d-p8 d-bgc-black-900">
      <p class="d-fc-black-075">
        Inverted style
      </p>
      <dt-keyboard-shortcut
        shortcut="{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}+E+B"
        inverted
      />
    </div>
    <div class="d-p8">
      <p>Default shortcut</p>
      <dt-keyboard-shortcut
        shortcut="{opt}+{cmd}+{win}+{ctrl}+Shift+{arrow-up}"
      />
    </div>

    <div class="d-p8">
      <p>Shortcut size variation</p>
      <dt-keyboard-shortcut
        class="d-fs16"
        shortcut="{cmd}+Y"
      />
    </div>

    <div class="d-p8">
      <p>All available shortcut aliases</p>
      <dt-keyboard-shortcut :shortcut="availableVariants" />
    </div>
  </div>
</template>

<script>
import DtKeyboardShortcut from './keyboard_shortcut.vue';
import { SHORTCUTS_ALIASES_LIST } from './keyboard_shortcut_constants';

export default {
  name: 'DtKeyboardShortcutVariants',
  components: { DtKeyboardShortcut },
  data: () => ({
    availableVariants: SHORTCUTS_ALIASES_LIST.join('+').trim(),
  }),
};
</script>
