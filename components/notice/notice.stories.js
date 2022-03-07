import { action } from '@storybook/addon-actions';
import DtNotice from './notice';
import { NOTICE_KINDS, NOTICE_ROLES } from './notice_constants';
import NoticeDefault from './notice_default.story.vue';
import DtNoticeMdx from './notice.mdx';
import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';

// Default Prop Values
export const argsData = {
  onClose: action('close'),
  onClick: action('click'),
};

export const argTypesData = {
  // Slots
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
  kind: {
    control: {
      type: 'select',
      options: NOTICE_KINDS,
    },
  },
  role: {
    control: {
      type: 'select',
      options: NOTICE_ROLES,
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
    description: 'Close button click event',
    table: {
      type: { summary: 'event' },
    },
  },
};

// Story Collection
export default {
  title: 'Components/Notice',
  component: DtNotice,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtNoticeMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

const Template = (args) => createTemplateFromVueFile(args, NoticeDefault);

export const Default = Template.bind({});
Default.args = {
  title: 'Base title (optional)',
  kind: 'base',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  title: 'Error title (optional)',
  kind: 'error',
};

export const Info = Template.bind({});
Info.args = {
  ...Default.args,
  title: 'Info title (optional)',
  kind: 'info',
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  title: 'Success title (optional)',
  kind: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  title: 'Warning title (optional)',
  kind: 'warning',
};

export const Important = Template.bind({});
Important.args = {
  ...Default.args,
  important: true,
};
