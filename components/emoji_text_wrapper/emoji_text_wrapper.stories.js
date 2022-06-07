import { createTemplateFromVueFile } from '@/common/storybook_utils';
import { EMOJI_SIZES } from '../emoji/emoji_constants';
import DtEmojiTextWrapper from './emoji_text_wrapper';
import DtEmojiTextWrapperMdx from './emoji_text_wrapper.mdx';
import DtEmojiTextWrapperDefaultTemplate from './emoji_text_wrapper_default.story.vue';
import DtEmojiTextWrapperVariantsTemplate from './emoji_text_wrapper_variants.story.vue';

// Default Prop Values
export const argsData = {};

/**
 * example prop description decorator
 */
export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'string | VNode',
      },
    },
  },

  // Props
  size: {
    control: {
      type: 'select',
      options: Object.values(EMOJI_SIZES),
    },
    defaultValue: EMOJI_SIZES.SIZE_20,
    table: {
      defaultValue: {
        summary: EMOJI_SIZES.SIZE_20,
      },
    },
  },
  elementType: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'div' },
    },
    control: {
      type: 'text',
    },
  },
};

// Story Collection
export default {
  title: 'Components/Emoji Text Wrapper',
  component: DtEmojiTextWrapper,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtEmojiTextWrapperMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

// Templates
const DefaultTemplate = (args) => createTemplateFromVueFile(
  args,
  DtEmojiTextWrapperDefaultTemplate,
);
const VariantsTemplate = (args) => createTemplateFromVueFile(
  args,
  DtEmojiTextWrapperVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  default: 'Some text with :invalid-emoji: :smile: :cry: and 😄',
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
Variants.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
