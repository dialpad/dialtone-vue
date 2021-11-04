import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile, getIconNames } from '../storybook_utils';
import DtListItem from './list_item';
import DtListItemMdx from './list_item.mdx';
import { LIST_ITEM_NAVIGATION_TYPES, LIST_ITEM_TYPES } from './list_item_constants.js';
import DtListItemDefaultTemplate from './list_item_default.story.vue';
import DtListItemCustomTemplate from './list_item_custom.story.vue';

// Default Prop Values
export const argsData = {
  onClick: action('click'),
};

export const argTypesData = {
  // Props
  id: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'generated unique ID' },
    },
    control: {
      type: 'text',
    },
  },

  role: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'listitem' },
    },
    control: {
      type: 'text',
    },
  },

  elementType: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'li' },
    },
    control: {
      type: 'text',
    },
  },

  type: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: LIST_ITEM_TYPES.DEFAULT },
    },
    control: {
      type: 'select',
      options: Object.values(LIST_ITEM_TYPES),
    },
  },

  navigationType: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'none' },
    },
    control: {
      type: 'select',
      options: Object.values(LIST_ITEM_NAVIGATION_TYPES),
    },
  },

  index: {
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 'null' },
    },
    control: {
      type: 'number',
    },
  },

  isHighlighted: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: false },
    },
    control: {
      type: 'boolean',
    },
  },

  // Slots
  default: {
    description: 'Slot for the main content',
    table: {
      category: 'slots',
      type: { summary: 'string' },
    },
    control: {
      type: 'text',
    },
  },

  left: {
    description: 'Slot for the left content',
    table: {
      category: 'slots',
      type: { summary: 'component' },
    },
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },

  right: {
    description: 'Slot for the right content',
    table: {
      category: 'slots',
      type: { summary: 'component' },
    },
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },

  subtitle: {
    description: 'Slot for the content below the main content',
    table: {
      category: 'slots',
      type: { summary: 'string' },
    },
    control: {
      type: 'text',
    },
  },

  bottom: {
    description: 'Slot for the content below the subtitle',
    table: {
      category: 'slots',
      type: { summary: 'string' },
    },
    control: {
      type: 'text',
    },
  },

  // Action Event Handlers
  onClick: {
    table: {
      disable: true,
    },
  },
};

const decorator = () => ({
  template: '<div class="d-w628"><story /></div>',
});

// Story Collection
export default {
  title: 'Elements/List Item',
  component: DtListItem,
  args: argsData,
  argTypes: argTypesData,
  decorators: [decorator],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtListItemMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtListItemDefaultTemplate);
const CustomTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtListItemCustomTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  left: 'IconWorldwide',
  right: 'IconLaunch',
  default: 'Default List Item',
  subtitle: 'Description',
  bottom: '<span class="d-badge d-badge--purple-100">Label</span>',
  navigationType: LIST_ITEM_NAVIGATION_TYPES.TAB,
};

export const Custom = CustomTemplate.bind({});
Custom.args = {};
