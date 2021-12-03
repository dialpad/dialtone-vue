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
      v-for="item in formattedShortcutSplit"
    >
      <component
        :is="SHORTCUTS_ICON_ALIASES[item]"
        v-if="SHORTCUTS_ICON_ALIASES[item]"
        :key="item"
        :class="[
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
          'd-mx1',
        ]"
      />
      <span
        v-else
        :key="item"
        :class="[
          inverted ? 'd-fc-black-075' : 'd-fc-black-500',
        ]"
        v-html="item"
      />
    </template>
  </div>
</template>

<script>
import IconGrid from '@dialpad/dialtone/lib/dist/vue/icons/IconGrid';
import { SHORTCUTS_ALIASES, SHORTCUTS_ICON_ALIASES } from './keyboard_shortcut_constants';

export default {
  name: 'DtKeyboardShortcut',

  components: {
    IconGrid,
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
};
</script>
