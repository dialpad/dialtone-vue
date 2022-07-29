<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <!--
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding `.story.js` file.
  -->
  <dt-recipe-callbar-button-with-popover
    @click="buttonClicked"
  >
    Button
    <template #icon>
      <icon-dialpad-ai />
    </template>
    <template #tooltip>
      Tooltip text
    </template>
    <template #content>
      Body
    </template>
    <template #headerContent>
      Header Content
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
