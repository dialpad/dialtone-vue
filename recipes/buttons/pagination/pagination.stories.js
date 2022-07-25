import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipePagination from './pagination';
import DtRecipePaginationMdx from './pagination.mdx';
import DtRecipePaginationDefaultTemplate from './pagination_default.story.vue';
import DtRecipePaginationVariantsTemplate from './pagination_variants.story.vue';

// Default Prop Values
export const argsData = {};

export const argTypesData = {};

// Story Collection
export default {
  title: 'Recipes/Buttons/Pagination',
  component: DtRecipePagination,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtRecipePaginationMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipePaginationDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipePaginationVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
