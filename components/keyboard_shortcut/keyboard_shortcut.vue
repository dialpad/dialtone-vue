<template>
  <div
    :class="[
      'd-d-inline-flex',
      'd-ai-center',
      'd-jc-center',
      'd-box-border',
      'd-py2',
      'd-px6',
      'd-ba',
      'd-bar4',
      inverted ? 'd-bc-black-400' : 'd-bc-black-100',
    ]"
  >
    <span
      :class="[
        inverted ? 'd-fc-black-075' : 'd-fc-black-500',
      ]"
      v-html="formattedShortcut"
    />
  </div>
</template>

<script>
import { SHORTCUTS_ALIASES } from './keyboard_shortcut_constants';

export default {
  name: 'DtKeyboardShortcut',

  props: {
    inverted: {
      type: Boolean,
      default: false,
    },

    shortcut: {
      type: String,
      required: true,
    },
  },

  computed: {
    formattedShortcut () {
      return Object.keys(SHORTCUTS_ALIASES).reduce((result, key) => {
        return result.replace(new RegExp('{' + key + '}', 'gi'), SHORTCUTS_ALIASES[key]);
      }, this.shortcut);
    },
  },
};
</script>
