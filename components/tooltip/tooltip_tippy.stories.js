import { createTemplateFromVueFile } from '../storybook_utils';
import DtTooltipTippy from './tooltip-tippy-headless';
import DtTooltipTippyFlipTemplate from './tooltip_tippy_flip.story.vue';
import DtTooltipTippyDefault from './tooltip_tippy_default.story';
import DtTooltipTippyVariantsTemplate from './tooltip_tippy_variants';

import { TOOLTIP_DIRECTION_MODIFIERS } from './tooltip_constants';
import DtTooltipMdx from './tooltip_tippy.mdx';

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
    defaultValue: [0, 10],
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
  parameters: {
    docs: {
      page: DtTooltipMdx,
    },
  },
};

// Templates
const TooltipTippyFlipTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtTooltipTippyFlipTemplate);
const TooltipTippyDefault = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipTippyDefault);
const TooltipTippyVariantsTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtTooltipTippyVariantsTemplate);
// Stories

export const TippyHeadlessDefault = TooltipTippyDefault.bind({});
TippyHeadlessDefault.args = {};

export const TooltipTippyFlip = TooltipTippyFlipTemplate.bind({});
TooltipTippyFlip.args = {};

export const TippyHeadlessVariants = TooltipTippyVariantsTemplate.bind({});
TippyHeadlessVariants.args = {};
