import DtScroller from './scroller';
import BaseScrollerMdx from './scroller.mdx';
import ScrollerDefault from './scroller_default.story';
import ScrollerDynamic from '@/components/scroller/scroller_dynamic.story.vue';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import { action } from '@storybook/addon-actions';
import { CHIP_SIZE_MODIFIERS } from '@';

export const argTypesData = {
  default: {
    control: { type: null },
    description: 'Slot for main content that will be rendered inside the scroller. ' +
      'Default scoped slot props are:\n\n ' +
      'item: the item itself, it will be an object if your list is an array with objects.\n\n' +
      'index: reflects each items position in the list array\n\n' +
      'active: return if the item is visible for the user or not.',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  items: {
    control: { type: null },
  },

  dynamic: {
    control: { type: null },
  },

  keyField: {
    control: { type: null },
  },

  direction: {
    control: {
      type: 'select',
      options: ['horizontal', 'vertical'],
    },
  },

  listTag: {
    control: { type: 'text' },
    defaultValue: 'div',
  },

  itemTag: {
    control: { type: 'text' },
    defaultValue: 'div',
  },

  itemSize: {
    control: { type: 'number' },
    defaultValue: 32,
  },

  minItemSize: {
    control: { type: null },
  },

  scrollerWidth: {
    control: { type: 'number' },
    defaultValue: 300,
  },

  scrollerHeight: {
    control: { type: 'number' },
    defaultValue: 200,
  },

  // Action Event Handlers
  onScrollStart: {
    table: {
      disable: true,
    },
  },

  onScrollEnd: {
    table: {
      disable: true,
    },
  },

  'scroll-start': {
    description: 'Emitted when the first item is rendered.',
    table: {
      type: { summary: 'event' },
    },
  },

  'scroll-end': {
    description: 'Emitted when the last item is rendered.',
    table: {
      type: { summary: 'event' },
    },
  },
};

export const argsData = {
  onScrollStart: action('scroll-start'),
  onScrollEnd: action('scroll-end'),
};

export default {
  title: 'Components/Scroller',
  component: DtScroller,
  parameters: {
    docs: {
      page: BaseScrollerMdx,
    },
    controls: {
      sort: 'requiredFirst',
    },
    options: {
      showPanel: true,
    },
  },
  argTypes: argTypesData,
  args: argsData,
  excludeStories: /.*Data$/,
};

const Template = (args) => createTemplateFromVueFile(args, ScrollerDefault);

export const Default = Template.bind({});
Default.args = {
  default: 'Scroller',
};

const DynamicTemplate = (args) => createTemplateFromVueFile(args, ScrollerDynamic);

export const Dynamic = DynamicTemplate.bind({});
Dynamic.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
Dynamic.args = {};
