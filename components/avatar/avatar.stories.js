import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';
import DtAvatar from './avatar';
import DtAvatarDefaultTemplate from './avatar_default.story.vue';
import DtAvatarIconTemplate from './avatar_icon.story.vue';
import DtAvatarPresenceTemplate from './avatar_presence.story.vue';
import { AVATAR_COLOR_MODIFIERS, AVATAR_SIZE_MODIFIERS } from './avatar_constants';
import DtAvatarMdx from './avatar.mdx';
import { PRESENCE_STATES_LIST } from '../presence';

export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode|String|Component',
      },
    },
  },

  // Props
  size: {
    defaultValue: 'md',
    options: Object.keys(AVATAR_SIZE_MODIFIERS),
    control: 'select',
  },
  presence: {
    defaultValue: null,
    options: PRESENCE_STATES_LIST,
    control: 'select',
  },
  color: {
    defaultValue: 'base',
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

const IconTemplate = (args) => createTemplateFromVueFile(
  args,
  DtAvatarIconTemplate,
);

const PresenceTemplate = (args) => createTemplateFromVueFile(
  args,
  DtAvatarPresenceTemplate,
);

const defaultImage = require('./person.png');

// Stories
export const Image = DefaultTemplate.bind({});
Image.args = {
  default: `<img data-qa="dt-avatar-image" src="${defaultImage}" alt="Person Avatar">`,
};
export const Icon = IconTemplate.bind({});
Icon.args = {
  color: 'purple-200',
  default: 'accessibility',
};

Icon.argTypes = {
  default: {
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },
};

export const Initials = DefaultTemplate.bind({});
Initials.args = {
  color: 'purple-200',
  default: 'DP',
};

export const Presence = PresenceTemplate.bind({});
Presence.args = {};
Presence.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  options: { showPanel: false },
};
