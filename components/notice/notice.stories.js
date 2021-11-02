import { action } from '@storybook/addon-actions';
import DtNotice from './notice';
import { NOTICE_KINDS, NOTICE_ROLES } from './notice_constants';
import NoticeDefault from './notice_default.story.vue';
import DtNoticeMdx from './notice.mdx';
import { createTemplateFromVueFile, getIconNames } from '../storybook_utils';

// Default Prop Values
export const argsData = {
  onClose: action('close'),
};

export const argTypesData = {
  // Slots
  titleOverride: {
    table: {
      type: { summary: 'text/html' },
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
      type: { summary: 'text/html' },
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
  onClose: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Elements/Notice',
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
  },
};

const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, NoticeDefault);

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
