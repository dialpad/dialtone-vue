<!-- eslint-disable vue/no-v-html -->
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
    <template
      v-for="(item, i) in formattedShortcutSplit"
    >
      <component
        :is="SHORTCUTS_ICON_ALIASES[item.shortcut]"
        v-if="SHORTCUTS_ICON_ALIASES[item.shortcut]"
        :key="`${i}-${item.shortcut}`"
        :class="[
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
          'd-mx1',
          'd-svg--size16',
        ]"
        :style="customizeIcon(item)"
      />
      <span
        v-else
        :key="`${i}-${item.shortcut}`"
        :class="[
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
          'd-lh0',
          'd-mx2',
        ]"
        v-html="item.shortcut"
      />
      <span
        v-if="i !== formattedShortcutSplit.length - 1"
        :key="`${i}-${item.shortcut}+`"
        :class="[
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
          'd-lh0',
        ]"
      > + </span>
    </template>
  </div>
</template>

<script>
import IconGrid from '@dialpad/dialtone/lib/dist/vue/icons/IconGrid';
import IconArrowRightAlt from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowRightAlt';
import { SHORTCUTS_ALIASES, SHORTCUTS_ICON_ALIASES, ARROW_DIRECTIONS } from './keyboard_shortcut_constants';
export default {
  name: 'DtKeyboardShortcut',

  components: {
    IconGrid,
    IconArrowRightAlt,
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
      // const iconAliasString = Object.keys(SHORTCUTS_ICON_ALIASES).join('|');
      /* any SHORTCUTS_ICON_ALIASES will go into the lookaround separated by or's
         example: split(/(?={icon1|icon2})|(?<={icon1|icon2})/g);

         splits a string while retaining the delimiters in their own array item:

         if {win} is our delimiter AKA shortcut icon alias
         '{win} + D + {win}' would split like [{win}, ' + D + ', {win}] */
      // const regex = new RegExp(`(?=${iconAliasString})|(?<=${iconAliasString})`, 'gi');
      return this.formattedShortcut.split(' ').map(shortcut => {
        return {
          shortcut,
          type: shortcut.includes('arrow') ? 'arrow' : null,
        };
      });
    },
  },

  methods: {
    customizeIcon (item) {
      if (item.type === 'arrow') {
        const direction = item.shortcut.match(/right|left|up|down/)?.[0];
        return {
          transform: `rotate(${ARROW_DIRECTIONS[direction]}deg)`,
        };
      }
      return {};
    },
  },
};
</script>
