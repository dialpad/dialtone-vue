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

Default.parameters = {
  docs: {
    source: {
      code: `
<dt-recipe-pagination :total-pages="5" />
      `,
    },
  },
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};

Variants.parameters = {
  docs: {
    source: {
      code: `
<div class="d-divide-y d-divide-purple-400">
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator in the end
      </p>
      <dt-recipe-pagination
        :total-pages="10"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator in the beginning
      </p>
      <dt-recipe-pagination
        :total-pages="15"
        :active-page="13"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator on both sides
      </p>
      <dt-recipe-pagination
        :total-pages="10"
        :active-page="5"
      />
    </div>
  </div>
`,
    },
  },
};
