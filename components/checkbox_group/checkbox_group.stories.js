import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '../storybook_utils';
import DtCheckboxGroup from './checkbox_group';
import CheckboxGroupMdx from './checkbox_group.mdx';
import CheckboxGroupDefaultTemplate from './checkbox_group_default.story.vue';
import CheckboxGroupVariantsTemplate from './checkbox_group_variants.story.vue';

// Constants
const CHECKBOX_GROUP_OPTIONS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Other', value: 'other' },
];

// Default Prop Values
export const argsData = {
  name: 'fruits-checkbox-group',
  legend: 'Fruits',
  selectedValues: [],
  options: CHECKBOX_GROUP_OPTIONS,
  onInput: action('input'),
};

// Controls
export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  legendSlot: {
    name: 'legend',
    description: 'Slot for legend',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  legend: {
    description: 'The legend of the checkbox group',
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
  selectedValues: {
    description: 'A provided list of selected values(s) for the checkbox group',
    control: 'array',
    table: {
      category: 'props',
      type: {
        summary: 'array',
      },
    },
  },

  // Directives
  'v-model': {
    description: 'Supported by this component',
    control: null,
    table: {
      category: 'directives',
    },
  },

  // Action Event Handlers
  onInput: {
    table: {
      disable: true,
    },
  },

  // Story Variables
  options: {
    table: {
      disable: true,
    },
  },

  // Disabled Controls
  value: {
    table: {
      disable: true,
    },
  },
  dataQaGroup: {
    table: {
      disable: true,
    },
  },
  dataQaGroupLegend: {
    table: {
      disable: true,
    },
  },
  dataQaGroupMessages: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Forms/Checkbox Group',
  component: DtCheckboxGroup,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: CheckboxGroupMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => {
  return createTemplateFromVueFile(args, argTypes, CheckboxGroupDefaultTemplate);
};
const VariantsTemplate = (args, { argTypes }) => {
  return createTemplateFromVueFile(args, argTypes, CheckboxGroupVariantsTemplate);
};

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
