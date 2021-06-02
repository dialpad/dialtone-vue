import { createTemplateFromVueFile } from '../storybook_utils';
import DtAvatar from './avatar';
import DtAvatarDefaultTemplate from './avatar_default.story.vue';
import DtAvatarVariantsTemplate from './avatar_variants.story.vue';
import { AVATAR_COLOR_MODIFIERS, AVATAR_KIND_MODIFIERS, AVATAR_SIZE_MODIFIERS } from './avatar_constants';

export const argTypesData = {
  // Props
  imageUrl: {
    control: {
      type: 'text',
    },
  },

  alt: {
    control: {
      type: 'text',
    },
  },

  kind: {
    defaultValue: 'default',
    control: {
      type: 'select',
      options: Object.keys(AVATAR_KIND_MODIFIERS),
    },
  },

  size: {
    defaultValue: 'md',
    control: {
      type: 'select',
      options: Object.keys(AVATAR_SIZE_MODIFIERS),
    },
  },

  color: {
    defaultValue: 'base',
    control: {
      type: 'select',
      options: Object.keys(AVATAR_COLOR_MODIFIERS),
    },
  },

  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },

  presence: {
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Elements/Avatar',
  component: DtAvatar,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtAvatarDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtAvatarVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
