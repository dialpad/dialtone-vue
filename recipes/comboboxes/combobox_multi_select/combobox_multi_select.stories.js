import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeComboboxMultiSelect from './combobox_multi_select';
import DtRecipeComboboxMultiSelectMdx from './combobox_multi_select.mdx';
import DtRecipeComboboxMultiSelectDefaultTemplate from './combobox_multi_select_default.story.vue';

// Default Prop Values
export const argsData = {
  listMaxHeight: '300px',
  selectedItems: [],
  onInput: action('input'),
  onSelect: action('select'),
  onRemove: action('remove'),
  onMaxSelected: action('maxSelected'),
};

export const argTypesData = {
  // Slots
  list: {
    description: 'Slot for the list',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },
  header: {
    description: 'Slot for popover header content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },
  footer: {
    description: 'Slot for popover footer content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  loading: {
    defaultValue: false,
  },
  loadingMessage: {
    defaultValue: 'loading...',
  },
  selectedItems: {
    defaultValue: [],
  },
  showList: {
    defaultValue: null,
  },
  listMaxHeight: {
    defaultValue: '300px',
  },
  maxSelected: {
    defaultValue: 0,
  },
  maxSelectedMessage: {
    defaultValue: [],
  },
  hasSuggestionList: {
    defaultValue: true,
  },

  // Action Event Handlers
  onEscape: {
    table: {
      disable: true,
    },
  },
  onHighlight: {
    table: {
      disable: true,
    },
  },
  onInput: {
    table: {
      disable: true,
    },
  },
  onSelect: {
    table: {
      disable: true,
    },
  },
  onMaxSelected: {
    table: {
      disable: true,
    },
  },

  onRemove: {
    table: {
      disable: true,
    },
  },

  select: {
    description: 'Select item event',
    table: {
      type: { summary: 'event' },
    },
  },
};

// Story Collection
export default {
  title: 'Recipes/Comboboxes/Combobox Multi-Select',
  component: DtRecipeComboboxMultiSelect,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtRecipeComboboxMultiSelectMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

// Templates
const Template = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeComboboxMultiSelectDefaultTemplate,
);

// Stories
export const Default = Template.bind({});

export const WithMaxSelectValidation = Template.bind({});
WithMaxSelectValidation.args = {
  maxSelected: 2,
  selectedItems: ['(732) 338-6728', '(732) 338-7728'],
  maxSelectedMessage: [{ message: 'Max 2 selected', type: 'warning' }],
};
WithMaxSelectValidation.parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
        {
          id: 'label',
          enabled: false,
        },
      ],
    },
  },
};
