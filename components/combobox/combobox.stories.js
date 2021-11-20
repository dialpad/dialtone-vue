import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '../storybook_utils';
import DtCombobox from './combobox';
import DtComboboxMdx from './combobox.mdx';
import DtComboboxDefaultTemplate from './combobox_default.story.vue';

// Constants
const LIST_ITEMS = [
  { name: 'combobox item 1', id: 1 },
  { name: 'combobox item 2', id: 2 },
  { name: 'combobox item 3', id: 3 },
  { name: 'combobox item 4', id: 4 },
  { name: 'combobox item 5', id: 5 },
  { name: 'combobox item 6', id: 6 },
  { name: 'combobox item 7', id: 7 },
  { name: 'combobox item 8', id: 8 },
  { name: 'combobox item 9', id: 9 },
  { name: 'combobox item 10', id: 10 },
  { name: 'combobox item 11', id: 11 },
  { name: 'combobox item 12', id: 12 },
];

// Default Prop Values
export const argsData = {
  items: LIST_ITEMS,
  onEscape: action('escape'),
  onHighlight: action('highlight'),
  onSelect: action('select'),
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
  list: {
    description: 'Slot for the list component',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  items: {
    table: {
      category: 'props',
      type: {
        summary: 'array',
      },
      defaultValue: {
        summary: '[]',
      },
    },
  },
  listAriaLabel: {
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
  onBeginningOfList: {
    table: {
      category: 'props',
      type: {
        summary: 'function',
      },
      defaultValue: {
        summary: 'null',
      },
    },
  },
  onEndOfList: {
    table: {
      category: 'props',
      type: {
        summary: 'function',
      },
      defaultValue: {
        summary: 'null',
      },
    },
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
  onSelect: {
    table: {
      disable: true,
    },
  },

  escape: {
    description: 'Event fired when clicking on the item',
    table: {
      type: { summary: 'event' },
    },
  },
  highlight: {
    description: 'Event fired when the highlight changes',
    table: {
      type: { summary: 'event' },
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
  title: 'Components/Combobox',
  component: DtCombobox,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtComboboxMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtComboboxDefaultTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};
