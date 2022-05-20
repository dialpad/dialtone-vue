import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';
import DtChip from './chip';
import DtChipMdx from './chip.mdx';
import DtChipDefaultTemplate from './chip_default.story.vue';
import { CHIP_SIZE_MODIFIERS } from './chip_constants';

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

  icon: {
    control: {
      type: 'select',
      options: getIconNames(),
    },
    table: {
      type: { summary: 'VNode' },
    },
  },

  // Props
  hideClose: {
    control: 'boolean',
  },
  interactive: {
    control: 'boolean',
  },
  labelledById: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
  size: {
    control: {
      type: 'select',
      options: Object.keys(CHIP_SIZE_MODIFIERS),
    },
  },
  avatarProps: {
    control: 'object',
    table: {
      defaultValue: {
        summary: '{}',
      },
    },
  },

  // Action Event Handlers
  onClick: {
    table: {
      disable: true,
    },
  },
  onClose: {
    table: {
      disable: true,
    },
  },

  close: {
    description: 'Native chip close button event',
    table: {
      type: { summary: 'event' },
    },
  },

  click: {
    description: 'Native chip click event',
    table: {
      type: { summary: 'event' },
    },
  },
};

// Default Props for all variations
export const argsData = {
  closeButtonProps: {
    ariaLabel: 'Close',
  },
  onClose: action('close'),
  onClick: action('click'),
};

// Story Collection
export default {
  title: 'Components/Chip',
  component: DtChip,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtChipMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

// Templates
const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtChipDefaultTemplate);
const defaultImage = require('../avatar/person.png');

// Stories
export const Default = Template.bind({});
Default.args = {
  default: 'Chip',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: 'IconLock',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  ...Default.args,
  avatarProps: {
    src: defaultImage,
    alt: 'Person Avatar',
  },
};

export const NonInteractive = Template.bind({});
NonInteractive.args = {
  ...Default.args,
  interactive: false,
  hideClose: true,
};
