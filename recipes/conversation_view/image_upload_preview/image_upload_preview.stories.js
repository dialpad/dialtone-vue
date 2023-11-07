import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeImageUploadPreview from './image_upload_preview.vue';
import DtRecipeImageUploadPreviewDefaultTemplate from './image_upload_preview_default.story.vue';

/*
  Controls
  ========

  Here we define any custom configuration for props / slots / events in storybook

  By default storybook will display any props / slots / events from the associated component. It will also use jsdoc
  comments on the component to populate details such as description and default value. You should only enter config
  here if it was not possible to add into the jsdoc of the component itself.

  See https://storybook.js.org/docs/vue/api/argtypes#manual-specification

  To set the description of a slot, add the below comment to the line above where the slot is defined:
  <!-- @slot example slot decorator -->
*/

export const argTypesData = {
  // Props
  // Events
};

// Set default values at the story level here.
export const argsData = {
};

// Story Collection
export default {
  title: 'Recipes/Conversation View/Image Upload Preview',
  component: DtRecipeImageUploadPreview,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeImageUploadPreviewDefaultTemplate,
);

// Stories
export const Default = {
  render: DefaultTemplate,
  args: {},
};
