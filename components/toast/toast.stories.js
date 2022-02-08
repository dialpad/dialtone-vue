import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile, getIconNames } from '../storybook_utils';
import { DtToast } from './';
import DtToastMdx from './toast.mdx';
import DtToastDefaultTemplate from './toast_default.story.vue';
import { NOTICE_KINDS } from '../notice';
import { TOOLTIP_HIDE_ON_CLICK_VARIANTS } from '../tooltip';
import { BASE_TIPPY_ABSOLUTE_POSITIONING } from '../popover/tippy_utils';

// Default Prop Values
export const argsData = {
  onUpdateShow: action('update:show'),
  onClick: action('click'),
  onClose: action('close'),
};

export const argTypesData = {
  // Slots
  anchor: {
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  titleOverride: {
    table: {
      type: { summary: 'VNode' },
    },
    control: {
      type: 'text',
    },
  },
  icon: {
    table: {
      type: { summary: 'component' },
    },
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },
  default: {
    table: {
      type: { summary: 'VNode' },
    },
    control: {
      type: 'text',
    },
  },
  action: {
    table: {
      type: { summary: 'VNode' },
    },
    control: {
      type: 'text',
    },
  },

  // Props
  id: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
  titleId: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
  contentId: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
  kind: {
    control: {
      type: 'select',
      options: NOTICE_KINDS,
    },
  },
  placement: {
    control: {
      type: 'select',
      options: BASE_TIPPY_ABSOLUTE_POSITIONING,
    },
    table: {
      defaultValue: {
        summary: 'top-center',
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
  onUpdateShow: {
    table: {
      disable: true,
    },
  },

  'update:show': {
    description: `The popover will emit a boolean value for this event when the \
user performs a popover-closing or opening action and also the popover content reference when it was open. \
Parent components can sync on this value to create a 2-way binding to control popover visibility.`,
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  hideOnClick: {
    type: 'select',
    options: TOOLTIP_HIDE_ON_CLICK_VARIANTS,
  },

  close: {
    description: 'Close button click event',
    table: {
      type: { summary: 'event' },
    },
  },
};

// Story Collection
export default {
  title: 'Components/Toast',
  component: DtToast,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtToastMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtToastDefaultTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Base title (optional)',
  kind: 'base',
};

export const Error = DefaultTemplate.bind({});
Error.args = {
  ...Default.args,
  title: 'Error title (optional)',
  kind: 'error',
};

export const Info = DefaultTemplate.bind({});
Info.args = {
  ...Default.args,
  title: 'Info title (optional)',
  kind: 'info',
};

export const Success = DefaultTemplate.bind({});
Success.args = {
  ...Default.args,
  title: 'Success title (optional)',
  kind: 'success',
};

export const Warning = DefaultTemplate.bind({});
Warning.args = {
  ...Default.args,
  title: 'Warning title (optional)',
  kind: 'warning',
};

export const Important = DefaultTemplate.bind({});
Important.args = {
  ...Default.args,
  important: true,
};
