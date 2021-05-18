import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '../storybook_utils';
import { SELECT_SIZE_MODIFIERS } from './select_menu_constants';
import DtSelectMenu from './select_menu';
import DtSelectMenuMdx from './select_menu.mdx';
import DtSelectMenuDefaultTemplate from './select_menu_default.story.vue';
import DtSelectMenuVariantsTemplate from './select_menu_variants.story.vue';

// Default Prop Values
export const argsData = {
  label: 'Label',
  onEvent: action('event'),
};

export const argTypesData = {
  // Props
  messages: {
    control: 'object',
  },
  size: {
    control: {
      type: 'select',
      options: Object.keys(SELECT_SIZE_MODIFIERS),
    },
    defaultValue: 'md',
    table: {
      defaultValue: {
        summary: 'md',
      },
    },
  },
  messagesChildProps: { control: null },

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
  defaultSlot: {
    name: 'default',
    description: 'Slot for select menu options',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
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
