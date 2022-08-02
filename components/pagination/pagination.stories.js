import { action } from '@storybook/addon-actions';
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
  onChange: action('change'),
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

  // Action Event Handlers
  onChange: {
    table: {
      disable: true,
    },
  },

  change: {
    description: 'Page Change event',
    table: {
      type: { summary: 'event' },
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
<dt-pagination
    :total-pages="totalPages"
    :active-page="activePage"
    :max-visible="maxVisible"
    :aria-label="'pagination'"
    :prev-aria-label="'previous'"
    :next-aria-label="'next'"
    :page-number-aria-label="getPageNumberAriaLabel"
    @change="onChange"
  />    `,
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
        Separator in the end
      </p>
      <dt-pagination
        :total-pages="10"
        :aria-label="'pagination with separator in the end'"
        :prev-aria-label="'previous'"
        :next-aria-label="'next'"
        :page-number-aria-label="getPageNumberAriaLabel"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Separator in the beginning
      </p>
      <dt-pagination
        :total-pages="15"
        :active-page="13"
        :aria-label="'pagination with separator in the beginning'"
        :prev-aria-label="'previous'"
        :next-aria-label="'next'"
        :page-number-aria-label="getPageNumberAriaLabel"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Separator on both sides
      </p>
      <dt-pagination
        :total-pages="10"
        :active-page="5"
        :aria-label="'pagination with separator on both sides'"
        :prev-aria-label="'previous'"
        :next-aria-label="'next'"
        :page-number-aria-label="getPageNumberAriaLabel"
      />
    </div>
  </div>
`,
    },
  },
};
