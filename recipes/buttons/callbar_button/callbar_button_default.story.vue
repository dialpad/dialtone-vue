<template>
  <dt-recipe-callbar-button
    :active="active"
    :disabled="disabled"
    :danger="danger"
    :circle="circle"
    @click="onClick"
  >
    <template
      v-if="tooltip"
      slot="tooltip"
    >
      <span v-html="tooltip" />
    </template>
    <template
      v-else
      slot="tooltip"
    >
      Tooltip text
    </template>

    <template v-if="defaultSlot">
      <span v-html="defaultSlot" />
    </template>
    <template v-else>
      Button
    </template>

    <template
      v-if="icon"
      slot="icon"
    >
      <span v-html="icon" />
    </template>
    <template
      v-else
      slot="icon"
    >
      <icon-dialpad-glyph />
    </template>
  </dt-recipe-callbar-button>
</template>

<script>
import DtRecipeCallbarButton from './callbar_button';
import IconDialpadGlyph from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpadGlyph';

export default {
  name: 'DtRecipeCallbarButtonDefault',
  components: { DtRecipeCallbarButton, IconDialpadGlyph },
  methods: {
    onClick () {
      console.log('button clicked');
    },
  },
};
</script>
