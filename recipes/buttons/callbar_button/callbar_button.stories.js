import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeCallbarButton from './callbar_button';
import DtRecipeCallbarButtonMdx from './callbar_button.mdx';
import DtRecipeCallbarButtonDefaultTemplate from './callbar_button_default.story.vue';
import DtRecipeCallbarButtonVariantsTemplate from './callbar_button_variants.story.vue';
import DtRecipeCallbarButtonCallbarTemplate from './callbar_button_callbar.story.vue';

// Default Prop Values
export const argsData = {
  some: 'prop',
  onEvent: action('event'),
};

/**
 * example prop description decorator
 */

/*
  Controls
  ========

  Here we define any custom controls or control overrides for our components.

  By default storybook will attempt to provide an appropriate control of the same name for each property in the
  component as well as include any description provided using a prop decorator within your component (see above).

  Storybook will also attempt to provide an appropriate control for each slot in the component as well as include any
  description provided using a slot decorator within your component (see below).

  <!-- @slot example slot decorator -->
*/
export const argTypesData = {
  // // Props
  // some: {
  //   description: 'Describes the some prop',
  //   table: {
  //     category: 'props',
  //     type: {
  //       summary: 'string',
  //     },
  //   },
  //   control: {
  //     type: 'text',
  //   },
  // },

  // // Slots
  // default: {
  //   control: 'text',
  //   name: 'Label',
  //   description: 'Button label; can be empty',
  //   table: {
  //     type: {
  //       summary: 'text/html',
  //     },
  //   },
  // },

  // // Action Event Handlers
  // onEvent: {
  //   table: {
  //     disable: true,
  //   },
  // },
};

// Story Collection
export default {
  title: 'Recipes/Buttons/DtRecipeCallbarButton',
  component: DtRecipeCallbarButton,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtRecipeCallbarButtonMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallbarButtonDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallbarButtonVariantsTemplate,
);
const CallbarTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallbarButtonCallbarTemplate,
);
// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};

export const Callbar = CallbarTemplate.bind({});
Callbar.args = {};
