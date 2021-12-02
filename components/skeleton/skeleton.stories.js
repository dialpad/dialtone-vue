import { createTemplateFromVueFile } from '../storybook_utils';
import DtSkeleton from './skeleton';
import DtSkeletonMdx from './skeleton.mdx';
import DtSkeletonDefaultTemplate from './skeleton_default.story.vue';
import DtSkeletonVariantsTemplate from './skeleton_variants.story.vue';

export const argTypesData = {
  paragraphOption: {
    description: 'Interface for skeleton paragraph',
    table: {
      type: {
        detail: `{
          rows?: number | string | 3,
          animate?: boolean | false,
          minWidth?: number | string | 30,
          maxWidth?: number | string | 100,
          width?: string, Array<string> | null,
          randomWidth?: boolean | false,
          offset?: number | 1,
          animationDuration?: number| -1
        }`,
      },
    },
  },
  listItemOption: {
    description: 'Interface for skeleton list item',
    table: {
      type: {
        detail: `{
          shape?: string<circle | square | rectangle | pill> | 'circle',
          shapeSize?: string<xs | sm | md | lg | xl | 2xl> | 'md'
          textType?: string <label | heading> | 'label',
          animate?: boolean | false,
          paragraphs?: paragraphOption | { rows: 3, randomWidth: true }
          offset?: number | 1,
          animationDuration?: number| -1
        }`,
      },
    },
  },

  textOption: {
    description: 'Interface for skeleton text',
    table: {
      type: {
        detail: `null | {
          type?: string <label | heading> | 'label',
          headingHeight?: string<sm | md | lg | xl> | 'md',
          width?: string | '100%',
          contentClass?: string | '',
          offset?: number | 1,
          animationDuration?: number| -1
        }`,
      },
    },
  },

  shapeOption: {
    description: 'Interface for skeleton shape',
    table: {
      type: {
        detail: `{
          shape?: string<circle | square | rectangle | pill> | 'circle',
          size?: string<xs | sm | md | lg | xl | 2xl> | 'md'
          animate?: boolean | false,
          offset?: number | 1,
          animationDuration?: number| -1
        }`,
      },
    },
  },
  ariaLabel: {
    defaultValue: 'Loading',
  },
  // Slots
  'list-item': {
    description: `Slot for default slot skeleton-list-item`,
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  default: {
    description: `Slot for default slot skeleton`,
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Components/Skeleton',
  component: DtSkeleton,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtSkeletonMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtSkeletonDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtSkeletonVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
