<template>
  <div>
    <div class="d-p8 d-bgc-black-900">
      <dt-keyboard-shortcut
        shortcut="{opt} + U + E + B"
        inverted
      />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut
        shortcut="{opt} + {ctrl} + {ctrl} + {shift} + {ArrowUp}"
      />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut shortcut="{opt} + U + E + B" />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut shortcut="{cmd} + 1 + 2 + {delete}" />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut shortcut="{delete}" />
    </div>

    <div class="d-p8">
      <p>Available variants</p>
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
    availableVariants: SHORTCUTS_ALIASES_LIST.join(' + '),
  }),
};
</script>
