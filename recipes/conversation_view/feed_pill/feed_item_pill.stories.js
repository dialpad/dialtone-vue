import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeFeedItemPill from './feed_item_pill.vue';
import DtRecipeFeedItemPillDefaultTemplate from './feed_item_pill_default.story.vue';

// Default Prop Values
const args = {
  iconName: 'phone',
  title: 'This meeting has ended',
  ariaLabel: 'Click to expand',
  wrapperClass: 'd-w628',
};

const argTypes = {
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
  args,
  argTypes,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args) => createTemplateFromVueFile(
  args,
  DtRecipeFeedItemPillDefaultTemplate,
);

// Stories
export const Default = {
  render: DefaultTemplate,
  parameters: { options: { showPanel: false }, a11y: { disable: true }, controls: { disable: true } },
};

export const DefaultToggledVariant = {
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    defaultToggled: true,
  },
};

export const DefaultToggledVariantNonToggleable = {
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    toggleable: false,
    defaultToggled: true,
  },
};

export const AiBorderGradient = {
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    borderColor: 'ai',
  },
};

export const NoToggleVariant = {
  render: DefaultTemplate,
  parameters: Default.parameters,
  args: {
    toggleable: false,
    borderColor: 'critical',
  },
};
