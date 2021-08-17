import { createTemplateFromVueFile } from '../storybook_utils';
import DtTooltip from './tooltip';
import DtTooltipOverflowTemplate from './tooltip_overflow.story.vue';
import DtTooltipDefault from './tooltip_default.story';

import { TOOLTIP_DIRECTION_MODIFIERS } from './tooltip_constants';

// Default Prop Values
export const argsData = {
  message: 'This is a Tooltip',
  anchor: 'Hover over me to see a tooltip',
  default: `This is a simple tooltip. The tooltip can be positioned in multiple areas too!`,
  show: true,
  inverted: false,
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

  anchor: {
    name: 'anchor',
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
};

// Templates
const TooltipOverflowTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtTooltipOverflowTemplate);
const TooltipDefault = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipDefault);

export const Default = TooltipDefault.bind({});
Default.args = {};

export const OverflowTemplate = TooltipOverflowTemplate.bind({});
OverflowTemplate.args = {};
