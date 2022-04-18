import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeComboboxWithPopover from './combobox_with_popover';
import DtRecipeComboboxWithPopoverMdx from './combobox_with_popover.mdx';
import DtRecipeComboboxWithPopoverDefaultTemplate from './combobox_with_popover_default.story.vue';
import DtRecipeComboboxWithPopoverVariantsTemplate from './combobox_with_popover_variants.story.vue';

// Default Prop Values
export const argsData = {
  showList: true,
  onEvent: action('event'),
};

export const argTypesData = {
  // Slots
  input: {
    description: 'Slot for the input component',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },
  content: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  footerContent: {
    name: 'footerContent',
    description: 'Slot for popover footer content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Action Event Handlers
  onEvent: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Recipes/Comboboxes/Combobox With Popover',
  component: DtRecipeComboboxWithPopover,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtRecipeComboboxWithPopoverMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeComboboxWithPopoverDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeComboboxWithPopoverVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
