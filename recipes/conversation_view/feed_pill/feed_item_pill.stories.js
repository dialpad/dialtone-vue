import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeFeedItemPill from './feed_item_pill.vue';
import DtRecipeFeedItemPillDefaultTemplate from './feed_item_pill_default.story.vue';

// Default Prop Values
export const argsData = {
};

export const argTypesData = {
  // Slots
  subtitle: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  bottom: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  right: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  content: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Recipes/Conversation View/Feed Item Pill',
  component: DtRecipeFeedItemPill,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeFeedItemPillDefaultTemplate,
);

// Stories
export const Default = {
  render: DefaultTemplate,
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    ariaLabel: 'Click to expand',
    buttonClass: '',
    toggleable: true,
  },
};

export const GradientVariant = {
  render: DefaultTemplate,
  parameters: { options: { showPanel: false }, controls: { disable: true } },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: 'd-p2 d-bgg-to-br d-bgg-from-purple-400 d-bgg-to-magenta-300',
    buttonClass: '',
    ariaLabel: 'Click to expand',
    toggleable: true,
  },
};

export const NoToggleVariant = {
  render: DefaultTemplate,
  parameters: { options: { showPanel: false }, controls: { disable: true } },
  args: {
    iconName: 'video',
    title: 'This meeting has ended',
    wrapperClass: '',
    expanded: false,
    ariaLabel: 'Click to expand',
    toggleable: false,
  },
};
