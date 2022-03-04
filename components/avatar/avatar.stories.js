import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtAvatar from './avatar';
import DtAvatarDefaultTemplate from './avatar_default.story.vue';
import { AVATAR_COLOR_MODIFIERS, AVATAR_KIND_MODIFIERS, AVATAR_SIZE_MODIFIERS } from './avatar_constants';
import DtAvatarMdx from './avatar.mdx';

export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  kind: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: Object.keys(AVATAR_KIND_MODIFIERS),
    control: 'select',
  },
  size: {
    table: {
      defaultValue: { summary: 'md' },
    },
    options: Object.keys(AVATAR_SIZE_MODIFIERS),
    control: 'select',
  },
  color: {
    table: {
      defaultValue: { summary: 'base' },
    },
    options: Object.keys(AVATAR_COLOR_MODIFIERS),
    control: 'select',
  },
  avatarClass: {
    description: 'Pass through classes. Used to customize the avatar container',
  },
  id: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },

  // HTML attributes
  src: {
    description: 'HTML image src attribute. Required for image avatars. Overridden by the default slot',
    table: {
      category: 'html attributes',
    },
    type: {
      summary: 'string',
    },
    control: 'text',
  },
  alt: {
    description: 'HTML image alt attribute. Required for image avatars. Overridden by the default slot',
    table: {
      category: 'html attributes',
    },
    type: {
      summary: 'string',
    },
    control: 'text',
  },
};

// Story Collection
export default {
  title: 'Components/Avatar',
  component: DtAvatar,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtAvatarMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

// Templates
const DefaultTemplate = (args) => createTemplateFromVueFile(
  args,
  DtAvatarDefaultTemplate,
);

const defaultImage = require('./person.png');

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  src: defaultImage,
  alt: 'Person Avatar',
};

export const Icon = DefaultTemplate.bind({});
Icon.args = {
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
