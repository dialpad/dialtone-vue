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
        Pagination component when total pages is 10 and max visible is less than default(3)
      </p>
      <dt-recipe-pagination
        :total-pages="10"
        :max-visible="3"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Pagination component when total pages is 10 and max visible is 5(odd)
      </p>
      <dt-recipe-pagination
        :total-pages="10"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Pagination component when total pages is 15 and max visible is 8(even)
      </p>
      <dt-recipe-pagination
        :total-pages="15"
        :max-visible="8"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Pagination component when active page is not default
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
