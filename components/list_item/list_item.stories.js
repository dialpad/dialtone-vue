import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile, getIconNames } from '../storybook_utils';
import DtListItem from './list_item';
import DtListItemMdx from './list_item.mdx';
import DtListItemDefaultTemplate from './list_item_default.story.vue';

// Default Prop Values
export const argsData = {
  onClick: action('click'),
};

export const argTypesData = {
  // Props
  id: {
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
    control: {
      type: 'text',
    },
  },

  role: {
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'listitem',
      },
    },
    control: {
      type: 'text',
    },
  },

  clickable: {
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'true',
      },
    },
    control: {
      type: 'boolean',
    },
  },

  absoluteIndex: {
    table: {
      category: 'props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: 'null',
      },
    },
    control: {
      type: 'number',
    },
  },

  highlightIndex: {
    table: {
      category: 'props',
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: 'null',
      },
    },
    control: {
      type: 'number',
    },
  },

  setHighlightIndex: {
    table: {
      category: 'props',
      type: {
        summary: 'function',
      },
      defaultValue: {
        summary: 'null',
      },
    },
    control: {
      type: 'number',
    },
  },

  parentElement: {
    table: {
      category: 'props',
      type: {
        summary: 'object, htmlelement',
      },
      defaultValue: {
        summary: 'null',
      },
    },
    control: {
      type: 'number',
    },
  },

  // Slots
  iconLeft: {
    table: {
      type: {
        category: 'slot data',
        summary: 'VNode',
      },
    },
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },

  iconRight: {
    table: {
      type: {
        category: 'slot data',
        summary: 'VNode',
      },
    },
    control: {
      type: 'select',
      options: getIconNames(),
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
  template: '<ol class="d-p0 d-w512"><story /></ol>',
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
const Template = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtListItemDefaultTemplate,
);

// Stories
export const Default = Template.bind({});
Default.args = {};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  iconLeft: 'IconWarning',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  iconRight: 'IconLaunch',
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  iconLeft: 'IconWarning',
  iconRight: 'IconLaunch',
};
