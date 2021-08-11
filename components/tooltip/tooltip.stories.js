import { createTemplateFromVueFile } from '../storybook_utils';
import DtTooltip from './tooltip';
import DtTooltipTippyTemplate from './tooltip_tippy.story.vue';
import DtTooltipMdx from './tooltip.mdx';
import DtTooltipDefaultTemplate from './tooltip_default.story.vue';
import DtTooltipVariantsTemplate from './tooltip_variants.story';
import DtTooltipTippyDefault from './tooltip_tippy_default.story';
import DtTooltipTippyNoHeadlessTemplate from './tooltip_tippy_no_headless.story';

import { TOOLTIP_DIRECTION_MODIFIERS } from './tooltip_constants';

// Default Prop Values
export const argsData = {
  message: 'This is a Tooltip',
  anchor: 'Hover over me to see a tooltip',
  default: `This is a simple tooltip. The tooltip can be positioned in multiple areas too!`,
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
  parameters: {
    docs: {
      page: DtTooltipMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipVariantsTemplate);
const TippyBodyTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipTippyTemplate);
const TooltipTippyDefault = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtTooltipTippyDefault);
const TooltipTippyNoHeadlessTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtTooltipTippyNoHeadlessTemplate);
// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const TippyHeadlessDefault = TooltipTippyDefault.bind({});
TippyHeadlessDefault.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};

export const TippyHeadlessBody = TippyBodyTemplate.bind({});
TippyHeadlessBody.args = {};

export const TippyNoHeadlessBody = TooltipTippyNoHeadlessTemplate.bind({});
TippyNoHeadlessBody.args = {};
