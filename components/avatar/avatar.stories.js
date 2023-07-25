import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';
import DtAvatar from './avatar.vue';
import { AVATAR_SIZE_MODIFIERS, AVATAR_PRESENCE_STATES, AVATAR_COLORS } from './avatar_constants';
import DtAvatarDefaultTemplate from './avatar_default.story.vue';
import DtAvatarVariantsTemplate from './avatar_variants.story.vue';

import defaultImage from '@/common/assets/person.png';

const iconsList = getIconNames();

export const argsData = {
  size: 'md',
  presence: null,
  fullName: 'Jaqueline Nackos',
  seed: null,
};

export const argTypesData = {
  // Props
  size: {
    control: {
      type: 'select',
    },
    options: Object.keys(AVATAR_SIZE_MODIFIERS),
  },
  color: {
    control: {
      type: 'select',
      labels: {
        undefined: '(empty)',
      },
    },
    options: AVATAR_COLORS,
  },
  presence: {
    defaultValue: null,
    control: {
      type: 'select',
    },
    options: Object.values(AVATAR_PRESENCE_STATES),
    table: {
      defaultValue: {
        summary: 'null',
      },
    },
  },
  presenceProps: {
    description: 'Pass through props. Used to customize the presence component',
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
  overlayIcon: {
    options: iconsList,
    control: {
      type: 'select',
      labels: {
        undefined: '(empty)',
      },
    },
  },
  overlayText: {
    description: 'The text that overlays the avatar',
  },
  overlayClass: {
    description: 'Pass through classes. Used to customize the avatar overlay',
  },
  iconName: {
    options: iconsList,
    control: {
      type: 'select',
      labels: {
        undefined: '(empty)',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Components/Avatar',
  component: DtAvatar,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtAvatarDefaultTemplate);

const VariantsTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtAvatarVariantsTemplate);

// Stories
export const Default = {
  render: DefaultTemplate,
  decorators: [
    () => ({
      template: `<div class="d-d-flex"><story /></div>`,
    }),
  ],
  args: { imageSrc: defaultImage },
};

export const Variants = {
  render: VariantsTemplate,
  parameters: {
    percy: {
      args: {
        seed: 'seed',
      },
    },
    options: { showPanel: false },
    controls: { disable: true },
  },
};
