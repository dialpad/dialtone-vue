import DtBanner from './banner';
import BaseBannerMdx from './banner.mdx';
import BannerDefault from './banner_default.story.vue';
import { createTemplateFromVueFile } from '../storybook_utils';
import { argTypesData } from '../notice/notice.stories.js';

argTypesData.titleId = {
  defaultValue: '',
  table: {
    defaultValue: {
      summary: 'generated unique ID',
    },
  },
};
argTypesData.contentId = {
  defaultValue: '',
  table: {
    defaultValue: {
      summary: 'generated unique ID',
    },
  },
};

export default {
  title: 'Elements/Banner',
  component: DtBanner,
  parameters: {
    docs: {
      page: BaseBannerMdx,
    },
  },
  argTypes: argTypesData,
  excludeStories: /.Data$/,
};

const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, BannerDefault);

export const Default = Template.bind({});
Default.args = {
  title: '',
  default: 'Your meeting invite has been sent to Ted, Vicky, David, and Trinh.',
  action: 'Action',
  kind: 'base',
};

export const Info = Template.bind({});
Info.args = { ...Default.args, kind: 'info' };

export const Warning = Template.bind({});
Warning.args = { ...Default.args, kind: 'warning' };

export const Error = Template.bind({});
Error.args = { ...Default.args, kind: 'error' };

export const Success = Template.bind({});
Success.args = { ...Default.args, kind: 'success' };

export const Pinned = Template.bind({});
Pinned.args = { ...Default.args, pinned: true };
