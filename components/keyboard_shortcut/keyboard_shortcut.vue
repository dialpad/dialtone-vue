<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    :class="[
      'd-d-inline-flex',
      'd-ai-center',
      'd-jc-center',
      'd-box-border',
      'd-pl6',
      'd-pr4',
      'd-ba',
      'd-bar4',
      'd-fs12',
      inverted ? 'd-bc-black-400' : 'd-bc-black-100',
    ]"
  >
    <template
      v-for="(item, i) in formattedShortcutSplit"
    >
      <component
        :is="icons[item]"
        v-if="icons[item]"
        :key="`${i}-${item}`"
        :class="[
          'dt-keyboard-shortcut__svg',
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
          'd-mr2',
        ]"
      />
      <span
        v-else
        :key="`${i}-${item}`"
        :class="[
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
          'd-mr2',
        ]"
        v-html="item"
      />
    </template>
  </div>
</template>

<script>
import IconWindows from '@dialpad/dialtone/lib/dist/vue/icons/IconWindows';
import IconAdd from '@dialpad/dialtone/lib/dist/vue/icons/IconAdd';
import IconArrowDownward from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowDownward';
import IconArrowUpward from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowUpward';
import IconArrowForward from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowForward';
import IconArrowBackward from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowBackwards';
import {
  SHORTCUTS_ALIASES,
  SHORTCUTS_ICON_ALIASES,
  SHORTCUTS_ICON_SEPARATOR,
} from './keyboard_shortcut_constants';

export default {
  name: 'DtKeyboardShortcut',

  components: {
    IconWindows,
    IconArrowBackward,
    IconArrowDownward,
    IconArrowForward,
    IconArrowUpward,
    IconAdd,
  },

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

  data () {
    return {
      SHORTCUTS_ICON_ALIASES,
      separator: ' ',
    };
  },

  computed: {
    icons () {
      return { ...SHORTCUTS_ICON_ALIASES, ...SHORTCUTS_ICON_SEPARATOR };
    },

    shortcutWithSeparator () {
      return this.shortcut.replace(new RegExp(this.separator, 'gi'), '{plus}');
    },

    formattedShortcut () {
      return Object.keys(SHORTCUTS_ALIASES).reduce((result, key) => {
        return result.replace(new RegExp('{' + key + '}', 'gi'), SHORTCUTS_ALIASES[key]);
      }, this.shortcutWithSeparator);
    },

    // Splits any icon based aliases into their own array items.
    formattedShortcutSplit () {
      const iconAliasString = Object.keys(this.icons).join('|');

      /* any SHORTCUTS_ICON_ALIASES will go into the lookaround separated by or's
         example: split(/(?={icon1|icon2})|(?<={icon1|icon2})/g);

         splits a string while retaining the delimiters in their own array item:

         if {win} is our delimiter AKA shortcut icon alias
         '{win} + D + {win}' would split like [{win}, ' + D + ', {win}] */
      const regex = new RegExp(`(?=${iconAliasString})|(?<=${iconAliasString})`, 'gi');
      return this.formattedShortcut.split(regex);
    },
  },
};
</script>

<style lang="less">
.dt-keyboard-shortcut__svg {
  width: 1em;
  height: 1em;

  path {
    fill: currentColor;
  }
}
</style>
