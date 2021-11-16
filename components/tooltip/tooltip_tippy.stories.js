import { createTemplateFromVueFile } from '../storybook_utils';
import DtTooltipTippy from './tooltip-tippy-headless';
import DtTooltipTippyFlipTemplate from './tooltip_tippy_flip.story.vue';
import DtTooltipTippyDefault from './tooltip_tippy_default.story';
import DtTooltipTippyVariantsTemplate from './tooltip_tippy_variants';
import { action } from '@storybook/addon-actions';

import { TOOLTIP_DIRECTION_MODIFIERS, TOOLTIP_HIDE_ON_CLICK_VARIANTS } from './tooltip_constants';
import DtTooltipMdx from './tooltip_tippy.mdx';

// Default Prop Values
export const argsData = {
  show: false,
  message: 'This is a Tooltip',
  anchor: 'Hover over me to see a tooltip',
  default: `This is a simple tooltip. The tooltip can be positioned in multiple areas too!`,
  onToggle: action('update:show'),
};

export const argTypesData = {
  id: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
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

  hideOnClick: {
    type: 'select',
    options: TOOLTIP_HIDE_ON_CLICK_VARIANTS,
  },

  flipBoundary: {
    defaultValue: 'popper',
  },
  transition: {
    control: {
      type: 'select',
      options: ['', 'fade', 'slide-down', 'pop', 'shake'],
    },
  },
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  anchor: {
    name: 'anchor',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },
  // Events
  'update:show': {
    description: `The tooltip will emit a "false" boolean value when it is closed and \
    "true" boolean value when it is opened. Parent components can sync on this value to create \
a 2-way binding to control tooltip visibility.`,
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  onToggle: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Components/Tooltip-Tippy',
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
