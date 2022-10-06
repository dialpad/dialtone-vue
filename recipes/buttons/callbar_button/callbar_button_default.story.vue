<template>
  <dt-recipe-callbar-button
    :id="id"
    :active="active"
    :aria-label="ariaLabel"
    :circle="circle"
    :disabled="disabled"
    :danger="danger"
    :button-class="buttonClass"
    @click="onClick"
  >
    <template
      v-if="$attrs.tooltip"
      #tooltip
    >
      <span v-html="$attrs.tooltip" />
    </template>

    <span
      v-if="defaultSlot"
      v-html="defaultSlot"
    />

    <template
      v-if="$attrs.icon"
      #icon
    >
      <component :is="$attrs.icon" />
    </template>
  </dt-recipe-callbar-button>
</template>

<script>
import DtRecipeCallbarButton from './callbar_button';
import IconDialpadGlyph from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpadGlyph';
import icon from '@/common/mixins/icon';

export default {
  name: 'DtRecipeCallbarButtonDefault',
  components: { DtRecipeCallbarButton, IconDialpadGlyph },
  mixins: [icon],
};
</script>
