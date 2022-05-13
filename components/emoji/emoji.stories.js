import { createTemplateFromVueFile } from '@/common/storybook_utils';
import { EMOJI_SIZES } from './emoji_constants';
import DtEmoji from './emoji';
import DtEmojiMdx from './emoji.mdx';
import DtEmojiDefaultTemplate from './emoji_default.story.vue';
import DtEmojiVariantsTemplate from './emoji_variants.story.vue';

// Default Prop Values
export const argsData = {
  code: ':smile:',
};

/**
 * example prop description decorator
 */

/*
  Controls
  ========

  Here we define any custom controls or control overrides for our components.

  By default storybook will attempt to provide an appropriate control of the same name for each property in the
  component as well as include any description provided using a prop decorator within your component (see above).

  Storybook will also attempt to provide an appropriate control for each slot in the component as well as include any
  description provided using a slot decorator within your component (see below).

  <!-- @slot example slot decorator -->
*/
export const argTypesData = {
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
};

// Story Collection
export default {
  title: 'Components/Emoji',
  component: DtEmoji,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtEmojiMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtEmojiDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtEmojiVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
Variants.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
