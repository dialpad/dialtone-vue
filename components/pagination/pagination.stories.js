import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtPagination from './pagination';
import DtPaginationMdx from './pagination.mdx';
import DtPaginationDefaultTemplate from './pagination_default.story.vue';
import DtPaginationVariantsTemplate from './pagination_variants.story.vue';

// Default Prop Values
export const argsData = {
  totalPages: 5,
  activePage: 1,
  maxVisible: 5,
};

export const argTypesData = {
// Props
  totalPages: {
    control: {
      type: 'number',
    },
  },
  activePage: {
    control: {
      type: 'number',
    },
  },
  maxVisible: {
    control: {
      type: 'number',
    },
  },
};

// Story Collection
export default {
  title: 'Components/Pagination',
  component: DtPagination,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtPaginationMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args) => createTemplateFromVueFile(
  args,
  DtPaginationDefaultTemplate,
);
const VariantsTemplate = (args) => createTemplateFromVueFile(
  args,
  DtPaginationVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    source: {
      code: `
<dt-pagination :total-pages="totalPages" :active-page="activePage" :max-visible="maxVisible" />
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
      <dt-pagination
        :total-pages="10"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator in the beginning
      </p>
      <dt-pagination
        :total-pages="15"
        :active-page="13"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator on both sides
      </p>
      <dt-pagination
        :total-pages="10"
        :active-page="5"
      />
    </div>
  </div>
`,
    },
  },
};
