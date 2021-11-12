import {
  DtPopover,
  POPOVER_PADDING_CLASSES,
  POPOVER_HORIZONTAL_ALIGNMENT,
  POPOVER_VERTICAL_ALIGNMENT,
  POPOVER_ROLES,
} from './';
import PopoverDefault from './popover_default.story.vue';
import { createTemplateFromVueFile } from '../storybook_utils';
import PopoverMdx from './popover.mdx';

const argTypesData = {
  id: {
    defaultValue: 'DtPopover__content0',
    table: {
      defaultValue: {
        summary: 'Automatically generated unique ID',
      },
    },
  },
  padding: {
    control: {
      type: 'select',
      options: Object.keys(POPOVER_PADDING_CLASSES),
    },
  },
  role: {
    control: {
      type: 'select',
      options: POPOVER_ROLES,
    },
  },
  fixedAlignment: {
    control: {
      type: 'select',
      options: POPOVER_HORIZONTAL_ALIGNMENT,
    },
  },
  fixedVerticalAlignment: {
    control: {
      type: 'select',
      options: POPOVER_VERTICAL_ALIGNMENT,
    },
  },
};

export default {
  title: 'Elements/Popover',
  component: DtPopover,
  argTypes: argTypesData,
  parameters: {
    docs: {
      page: PopoverMdx,
    },
  },
  excludeStories: /.Data$/,
};

const PopoverTippyTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, PopoverDefault);
export const Default = PopoverTippyTemplate.bind({});
Default.args = {};
