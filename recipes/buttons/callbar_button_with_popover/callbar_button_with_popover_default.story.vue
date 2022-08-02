<template>
  <dt-recipe-callbar-button-with-popover
    arrow-button-label="Open popover"
    @click="buttonClicked"
  >
    <template v-if="defaultSlot">
      <span v-html="defaultSlot" />
    </template>
    <template #icon>
      <icon-dialpad-ai />
    </template>
    <template #tooltip>
      <span v-html="tooltip" />
    </template>
    <template #content>
      <span v-html="content" />
    </template>
    <template #headerContent>
      <span v-html="headerContent" />
    </template>
  </dt-recipe-callbar-button-with-popover>
</template>

<script>
import DtRecipeCallbarButtonWithPopover from './callbar_button_with_popover';
import IconDialpadAi from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpadAi';

export default {
  name: 'DtRecipeCallbarButtonWithPopoverDefault',
  components: { DtRecipeCallbarButtonWithPopover, IconDialpadAi },
  methods: {
    buttonClicked () {
      console.log('button clicked');
    },
  },
};
</script>
