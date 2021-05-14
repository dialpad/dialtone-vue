import { createTemplateFromVueFile } from '../storybook_utils';
import DtTooltip from './tooltip';
import DtTooltipMdx from './tooltip.mdx';
import DtTooltipDefaultTemplate from './tooltip_default.story.vue';
import DtTooltipVariantsTemplate from './tooltip_variants.story.vue';

// Default Prop Values
export const argsData = {
  message: 'message',
  anchorSlot: 'anchor',
  default: 'default',
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
  show: {
    description: 'Used to show tooltip',
    control: 'boolean',
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
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

  anchorSlot: {
    name: 'anchor',
    description: 'slot for tooltip',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Elements/Tooltip',
  component: DtTooltip,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtTooltipMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipVariantsTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
