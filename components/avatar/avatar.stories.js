import { createTemplateFromVueFile } from '../storybook_utils';
import DtAvatar from './avatar';
import DtAvatarDefaultTemplate from './avatar_default.story.vue';
import { AVATAR_COLOR_MODIFIERS, AVATAR_KIND_MODIFIERS, AVATAR_SIZE_MODIFIERS } from './avatar_constants';

export const argTypesData = {
  // Props
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

  // Image Props
  imageUrl: {
    table: {
      category: 'Image props',
    },
    control: {
      type: 'text',
    },
  },
  alt: {
    table: {
      category: 'Image props',
    },
    control: {
      type: 'text',
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

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Image = DefaultTemplate.bind({});
Image.args = {
  color: 'purple-200',
  imageUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
  alt: 'Dialpad Avatar',
};

export const Icons = DefaultTemplate.bind({});
Icons.args = {
  color: 'purple-200',
  kind: 'icon',
  default: 'IconGroup',
};

export const Initials = DefaultTemplate.bind({});
Initials.args = {
  color: 'purple-200',
  kind: 'initials',
  default: 'DP',
};
