<template>
  <div>
    <div class="d-p8 d-bgc-black-900">
      <dt-keyboard-shortcut
        shortcut="{win} + {arrow-right} + {arrow-left} + {arrow-up} + {arrow-down} + E + B"
        inverted
      />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut
        shortcut="{opt} + {cmd} + {win} + {ctrl} + Shift + {arrow-up}"
      />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut shortcut="{opt} + U + E + B" />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut shortcut="{cmd} + 1 + 2 + {del}" />
    </div>
    <div class="d-p8">
      <dt-keyboard-shortcut shortcut="{del}" />
    </div>

    <div class="d-p8">
      <p>Available variants</p>
      <dt-keyboard-shortcut :shortcut="availableVariants" />
    </div>

    <div class="d-p8">
      <p>Available variants svg</p>
      <dt-keyboard-shortcut
        separator="IconAdd"
        :shortcut="availableVariants.split(' + ').join(' ')"
      />
    </div>

    <div class="d-p8">
      <div class="d-d-inline-flex d-ai-center d-jc-center  d-box-border d-py2 d-px6 d-ba d-bar4 d-bc-black-100">
        <span class="d-lh0">+</span>
        <p>variant plus</p>
        <icon-add class="d-svg--size14" />
      </div>
    </div>
  </div>
</template>

<script>
import DtKeyboardShortcut from './keyboard_shortcut.vue';
import { SHORTCUTS_ALIASES_LIST } from './keyboard_shortcut_constants';
import IconAdd from '@dialpad/dialtone/lib/dist/vue/icons/IconAdd';

export default {
  name: 'DtKeyboardShortcutVariants',
  components: { DtKeyboardShortcut, IconAdd },
  data: () => ({
    availableVariants: SHORTCUTS_ALIASES_LIST.join(' + '),
  }),
};
</script>
