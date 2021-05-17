import { createTemplateFromVueFile } from '../storybook_utils';
import DtTooltip from './tooltip';
import DtTooltipMdx from './tooltip.mdx';
import DtTooltipDefaultTemplate from './tooltip_default.story.vue';
import DtTooltipVariantsTemplate from './tooltip_variants.story.vue';
import { TOOLTIP_DIRECTION_MODIFIERS } from './tooltip_constants';

// Default Prop Values
export const argsData = {
  message: 'message',
  anchorSlot: 'anchor',
  default: 'default',
  show: true,
};

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

  arrowDirection: {
    control: {
      type: 'select',
      options: TOOLTIP_DIRECTION_MODIFIERS,
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
