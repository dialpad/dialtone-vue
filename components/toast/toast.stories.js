import { createTemplateFromVueFile, getIconNames } from '../storybook_utils';
import DtToast from './toast';
import DtToastMdx from './toast.mdx';
import DtToastDefaultTemplate from './toast_default.story.vue';
import { NOTICE_KINDS } from '../notice';

export const argTypesData = {
  // Props
  titleId: {
    defaultValue: '',
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
  contentId: {
    defaultValue: '',
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
};

// Story Collection
export default {
  title: 'Elements/Toast',
  component: DtToast,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
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
  default: 'Message body with <a href="#" class="d-link d-link--muted">a link.</a>',
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
  default: 'Message body with <a href="#" class="d-link d-link--inverted">a link.</a>',
};
