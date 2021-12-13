<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    :class="[
      'd-d-inline-flex',
      'd-ai-center',
      'd-jc-center',
      'd-box-border',
      'd-px6',
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
        :is="SHORTCUTS_ICON_ALIASES[item]"
        v-if="SHORTCUTS_ICON_ALIASES[item]"
        :key="`${i}-${item}`"
        :class="[
          'dt-keyboard-shortcut__svg',
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
          'd-mr2',
        ]"
        :style="customizeIcon(item)"
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
      <icon-add
        v-if="separator && item.trim()"
        :key="`add-${i}-${item}`"
        class="dt-keyboard-shortcut__svg"
      />
    </template>
  </div>
</template>

<script>
import IconWindows from '@dialpad/dialtone/lib/dist/vue/icons/IconWindows';
import IconAdd from '@dialpad/dialtone/lib/dist/vue/icons/IconAdd';
import IconArrowRightAlt from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowRightAlt';
import { SHORTCUTS_ALIASES, SHORTCUTS_ICON_ALIASES, ARROW_DIRECTIONS } from './keyboard_shortcut_constants';

export default {
  name: 'DtKeyboardShortcut',

  components: {
    IconWindows,
    IconArrowRightAlt,
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

    separator: { // this is needed for testing and demo
      type: String,
      default: '',
    },
  },

  data () {
    return {
      SHORTCUTS_ICON_ALIASES,
    };
  },

  computed: {
    formattedShortcut () {
      return Object.keys(SHORTCUTS_ALIASES).reduce((result, key) => {
        return result.replace(new RegExp('{' + key + '}', 'gi'), SHORTCUTS_ALIASES[key]);
      }, this.shortcut);
    },

    // Splits any icon based aliases into their own array items.
    formattedShortcutSplit () {
      const iconAliasString = Object.keys(SHORTCUTS_ICON_ALIASES).join('|');

      /* any SHORTCUTS_ICON_ALIASES will go into the lookaround separated by or's
         example: split(/(?={icon1|icon2})|(?<={icon1|icon2})/g);

         splits a string while retaining the delimiters in their own array item:

         if {win} is our delimiter AKA shortcut icon alias
         '{win} + D + {win}' would split like [{win}, ' + D + ', {win}] */
      const regex = new RegExp(`(?=${iconAliasString})|(?<=${iconAliasString})`, 'gi');
      return this.formattedShortcut.split(regex);
    },
  },

  methods: {
    customizeIcon (item) {
      if (item.includes('arrow')) {
        const direction = item.match(/right|left|up|down/)?.[0];
        return {
          transform: `rotate(${ARROW_DIRECTIONS[direction]}deg)`,
        };
      }
      return {};
    },
  },
};
</script>

<style lang="less">
.dt-keyboard-shortcut__svg {
  top: 0.0833em;
  position: relative;
  width: 1em;
  height: 1em;

  path {
    fill: currentColor;
  }
}
</style>
