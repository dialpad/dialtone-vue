import { createTemplateFromVueFile, getIconNames } from '../storybook_utils';
import DtToast from './toast';
import DtToastMdx from './toast.mdx';
import DtToastDefaultTemplate from './toast_default.story.vue';
import DtToastVariantsTemplate from './toast_variants.story.vue';
import { NOTICE_KINDS } from '../notice';

// Default Prop Values
export const argsData = {
  default: '<span>Message body with <a href="#" class="d-link d-link--muted">a link.</a></span>',
};

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
  args: argsData,
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
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtToastVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Optional title',
  kind: 'base',
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
