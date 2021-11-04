import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '../storybook_utils';
import { SELECT_SIZE_MODIFIERS } from './select_menu_constants';
import DtSelectMenu from './select_menu';
import DtSelectMenuMdx from './select_menu.mdx';
import DtSelectMenuDefaultTemplate from './select_menu_default.story.vue';
import DtSelectMenuVariantsTemplate from './select_menu_variants.story.vue';

// Constants
const SELECT_OPTIONS = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

// Default Prop Values
export const argsData = {
  label: 'Label',
  options: SELECT_OPTIONS,
  onInput: action('input'),
  onChange: action('change'),
};

export const argTypesData = {
  // Slots
  labelSlot: {
    name: 'label',
    description: 'Slot for label, defaults to label prop',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },
  descriptionSlot: {
    name: 'description',
    description: 'Slot for description, defaults to description prop',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },
  default: {
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  label: {
    description: 'Label for the select',
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
    control: {
      type: 'text',
    },
  },
  description: {
    description: 'Describes the select',
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
    control: {
      type: 'text',
    },
  },
  options: {
    control: {
      type: 'object',
    },
    defaultValue: SELECT_OPTIONS,
    table: {
      category: 'props',
      type: {
        summary: 'object',
      },
      defaultValue: {
        summary: [],
      },
    },
  },
  size: {
    description: 'Controls the size of the select',
    control: {
      type: 'select',
      options: Object.keys(SELECT_SIZE_MODIFIERS),
    },
    defaultValue: 'md',
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'md',
      },
    },
  },
  labelClass: {
    description: 'Pass through classes. Used to customize the label container',
  },
  descriptionClass: {
    description: 'Pass through classes. Used to customize the description container',
  },
  selectClass: {
    description: 'Pass through classes. Used to customize the select',
  },
  optionClass: {
    description: 'Pass through classes. Used to customize each option, should options be provided via prop',
  },
  messagesClass: {
    description: 'Pass through classes. Used to customize the the validation messages component',
  },
  labelChildProps: {
    description: 'Pass through props. A set of props that are passed into the label container',
  },
  descriptionChildProps: {
    description: 'Pass through props. A set of props that are passed into the description container',
  },
  optionChildProps: {
    description: `Pass through props. A set of props that are passed into each option,
     should options be provided via prop`,
  },
  messagesChildProps: {
    description: 'Pass through props. A set of props that are passed into the validation messages component',
  },

  // HTML attributes
  value: {
    description: 'HTML select value attribute. Provides a value for the select',
    control: {
      type: 'select',
      options: SELECT_OPTIONS.map(option => option.value),
    },
    defaultValue: SELECT_OPTIONS[0].value,
    table: {
      category: 'html attributes',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  name: {
    description: 'HTML select name attribute. Provides a name for the select',
    control: {
      type: 'text',
    },
    defaultValue: '',
    table: {
      category: 'html attributes',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  disabled: {
    description: 'HTML select disabled attribute. Disables the select',
    control: {
      type: 'boolean',
    },
    defaultValue: false,
    table: {
      category: 'html attributes',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
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

  onChange: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Forms/Select Menu',
  component: DtSelectMenu,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtSelectMenuMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtSelectMenuDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtSelectMenuVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
