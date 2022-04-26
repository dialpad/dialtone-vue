import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeComboboxWithPopover from './combobox_with_popover';
import DtRecipeComboboxWithPopoverMdx from './combobox_with_popover.mdx';
import DtRecipeComboboxWithPopoverDefaultTemplate from './combobox_with_popover_default.story.vue';
import { POPOVER_CONTENT_WIDTHS } from '@';
import { DROPDOWN_PADDING_CLASSES } from '@/components/dropdown/dropdown_constants';

// Default Prop Values
export const argsData = {
  showList: null,
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
    description: 'Slot for the list',
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
  showList: {
    table: {
      defaultValue: {
        summary: 'null',
      },
    },
  },
  listId: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
  contentWidth: {
    defaultValue: 'anchor',
    control: {
      type: 'select',
      options: POPOVER_CONTENT_WIDTHS,
    },
    table: {
      defaultValue: {
        summary: 'null',
      },
    },
  },
  padding: {
    defaultValue: 'small',
    control: {
      type: 'select',
      options: Object.keys(DROPDOWN_PADDING_CLASSES),
    },
  },
  maxHeight: {
    defaultValue: '300px',
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
    description: 'Event fired when pressing escape',
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

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};
Default.parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: 'aria-allowed-attr',
          enabled: false,
        },
        {
          id: 'aria-valid-attr-value',
          enabled: false,
        },
      ],
    },
  },
};
