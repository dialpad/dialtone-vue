import DtScroller from './scroller';
import BaseScrollerMdx from './scroller.mdx';
import ScrollerDefault from './scroller_default.story';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
export const argTypesData = {
  default: {
    control: { type: null },
    description: 'Slot for main content',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  items: {
    control: { type: null },
    description: 'The items to render. If the items are simple arrays, ' +
        'the index will be used as the key. ' +
        'If the items are objects, the keyField will be used as the key.',
  },

  dynamic: {
    control: { type: null },
    description: 'Indicates if the items are dynamic. ' +
        'If true, the items will be wrapped in a DtScrollerItem component. ' +
        'This is required for dynamic items to be able to react to changes in their size.',
  },

  keyField: {
    control: { type: null },
    description: 'The key field to use for the items. Only used if the items are objects.',
  },

  direction: {
    control: { type: null },
    description: 'The direction of the scroller. ' +
        'Can be either "vertical" or "horizontal".',
  },

  listTag: {
    control: { type: null },
    description: 'The tag to use for the list.',
  },

  itemTag: {
    control: { type: null },
    description: 'The tag to use for the items.',
  },

  minItemSize: {
    control: { type: null },
    description: 'The minimum size of an item.' +
        'This is used to calculate the number of items to render.' +
        'Is required for the initial render of items in DYNAMIC size mode.',
  },

  scrollerWidth: {
    control: { type: null },
    description: 'The width of the scroller. ' +
        'Can be a number (in pixels) or a string (in CSS units).',
  },

  scrollerHeight: {
    control: { type: null },
    description: 'The height of the scroller. ' +
        'Can be a number (in pixels) or a string (in CSS units).',
  },

  // Events
  'scroll-start': {
    control: { type: null },
    description: 'Emitted when the first item is rendered.',
  },

  'scroll-end': {
    control: { type: null },
    description: 'Emitted when the last item is rendered.',
  },

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
  excludeStories: /.*Data$/,
};

const Template = (args) => createTemplateFromVueFile(args, ScrollerDefault);

export const Default = Template.bind({});
Default.args = {};
