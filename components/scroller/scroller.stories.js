import DtScroller from './scroller';
import BaseScrollerMdx from './scroller.mdx';
import ScrollerDefault from './scroller_default.story';
import ScrollerDynamic from '@/components/scroller/scroller_dynamic.story.vue';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import { action } from '@storybook/addon-actions';

export const argTypesData = {
  default: {
    control: { type: null },
    description: 'Slot for main content that will be rendered inside the scroller. ' +
      'Default scoped slot props are:\n\n ' +
      'item: item being rendered in a view.\n\n' +
      'index: reflects each items position in the items array\n\n' +
      'active: whether or not the view is active.',
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
    control: { type: null },
  },

  listTag: {
    control: { type: null },
  },

  itemTag: {
    control: { type: null },
  },

  minItemSize: {
    control: { type: null },
  },

  scrollerWidth: {
    control: { type: null },
  },

  scrollerHeight: {
    control: { type: null },
  },

  // Events
  onScrollStart: {
    control: { type: null },
    description: 'Emitted when the first item is rendered.',
  },

  onScrollEnd: {
    control: { type: null },
    description: 'Emitted when the last item is rendered.',
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

const VariantsTemplate = (args) => createTemplateFromVueFile(args, ScrollerDynamic);

export const Dynamic = VariantsTemplate.bind({});
Dynamic.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
Dynamic.args = {};
