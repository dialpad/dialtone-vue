import { createTemplateFromVueFile } from '../storybook_utils';
import DtTooltipTippy from './tooltip-tippy-headless';
import DtTooltipTippyTemplate from './tooltip_tippy.story.vue';
import DtTooltipTippyDefault from './tooltip_tippy_default.story';

import { TOOLTIP_DIRECTION_MODIFIERS } from './tooltip_constants';

// Default Prop Values
export const argsData = {
  message: 'This is a Tooltip',
  anchor: 'Hover over me to see a tooltip',
  default: `This is a simple tooltip. The tooltip can be positioned in multiple areas too!`,
};

export const argTypesData = {
  arrowDirection: {
    control: {
      type: 'select',
      options: TOOLTIP_DIRECTION_MODIFIERS,
    },
  },

  flip: {
    defaultValue: ['left-center', 'top-center'],
  },

  offset: {
    defaultValue: [0, 0],
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
  title: 'Elements/Tooltip-Tippy',
  component: DtTooltipTippy,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const TippyBodyTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipTippyTemplate);
const TooltipTippyDefault = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipTippyDefault);
// Stories

export const TippyHeadlessDefault = TooltipTippyDefault.bind({});
TippyHeadlessDefault.args = {};

export const TippyHeadlessBody = TippyBodyTemplate.bind({});
TippyHeadlessBody.args = {};
