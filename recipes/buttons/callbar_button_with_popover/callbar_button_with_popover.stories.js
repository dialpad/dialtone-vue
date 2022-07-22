import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeCallbarButtonWithPopover from './callbar_button_with_popover';
import DtRecipeCallbarButtonWithPopoverMdx from './callbar_button_with_popover.mdx';
import DtRecipeCallbarButtonWithPopoverDefaultTemplate from './callbar_button_with_popover_default.story.vue';
import DtRecipeCallbarButtonWithPopoverVariantsTemplate from './callbar_button_with_popover_variants.story.vue';

// Default Prop Values
export const argsData = {
  some: 'prop',
  arrowClick: action('event'),
  click: action('event'),
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
  // Props
  some: {
    description: 'Describes the some prop',
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'text',
    },
  },

  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },
  /*
    We use the following naming scheme `<SLOT_NAME>Slot` for slot controls to prevent conflicts with props that share
    the same name. We provide the correct name of the slot using the name control attribute to ensure that the argument
    table and description within the controls accurately reflects the correct names of our component's props and slots.
  */
  someSlot: {
    name: 'some',
    description: 'Slot for some',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },

  // Action Event Handlers
  arrowClick: {
    description: 'Triggered when the arrow is clicked',
    table: {
      disable: false,
    },
  },
  click: {
    description: 'Triggered when the button is clicked',
    table: {
      disable: false,
    },
  },
};

// Story Collection
export default {
  title: 'Recipes/Buttons/DtRecipeCallbarButtonWithPopover',
  component: DtRecipeCallbarButtonWithPopover,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtRecipeCallbarButtonWithPopoverMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallbarButtonWithPopoverDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallbarButtonWithPopoverVariantsTemplate,
);
// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
