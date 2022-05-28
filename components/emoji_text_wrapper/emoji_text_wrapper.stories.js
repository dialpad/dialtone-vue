import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtEmojiTextWrapper from './emoji_text_wrapper';
import DtEmojiTextWrapperMdx from './emoji_text_wrapper.mdx';
import DtEmojiTextWrapperDefaultTemplate from './emoji_text_wrapper_default.story.vue';
import DtEmojiTextWrapperVariantsTemplate from './emoji_text_wrapper_variants.story.vue';

// Default Prop Values
export const argsData = {
  default: 'This is an example text with :smile: :invalid_emoji: :smile: and 😅 emojis',
};

/**
 * example prop description decorator
 */
export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
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
    docs: {
      page: DtEmojiTextWrapperMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtEmojiTextWrapperDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtEmojiTextWrapperVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
