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

  // Native Props
  value: {
    description: 'Provides a value for the select',
    control: {
      type: 'select',
      options: SELECT_OPTIONS.map(option => option.value),
    },
    defaultValue: SELECT_OPTIONS[0].value,
    table: {
      category: 'native props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  name: {
    description: 'Provides a name for the select',
    control: {
      type: 'text',
    },
    defaultValue: '',
    table: {
      category: 'native props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: '',
      },
    },
  },

  disabled: {
    description: 'Disables the select',
    control: {
      type: 'boolean',
    },
    defaultValue: false,
    table: {
      category: 'native props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },

  // Slots
  labelSlot: {
    name: 'label',
    description: 'Slot for select menu label',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },

  descriptionSlot: {
    name: 'description',
    description: 'Slot for select menu description',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },

  default: {
    description: 'Slot for select menu options',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },

  // Pass Through Prop Controls
  messagesChildProps: {
    table: {
      category: 'pass through props',
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
