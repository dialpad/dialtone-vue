import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeEmojiRow from './emoji_row.vue';
import DtRecipeEmojiRowDefaultTemplate from './emoji_row_default.story.vue';

// Default Prop Values
export const argsData = {
  onEmojiClicked: action('emojiClicked'),
  onEmojiHovered: action('emojiHovered'),
};

export const argTypesData = {
  // Props
  reactions: {
    description: 'Array of reactions to be displayed. Expects an object with these attributes: ' +
    ' emojiUnicodeOrShortname,' +
    ' isSelected,' +
    ' ariaLabel,' +
    ' tooltip,' +
    ' num',
    control: {
      type: 'object',
    },
  },

  // Action Event Handlers
  onEmojiClicked: {
    table: {
      disable: true,
    },
  },
  onEmojiHovered: {
    table: {
      disable: true,
    },
  },
  emojiClicked: {
    description: 'Emoji clicked event',
    table: {
      type: { summary: 'event' },
    },
  },
  emojiHovered: {
    description: 'Emoji hovered event',
    table: {
      type: { summary: 'event' },
    },
  },
};

// Story Collection
export default {
  title: 'Recipes/Conversation View/Emoji Row',
  component: DtRecipeEmojiRow,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeEmojiRowDefaultTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  reactions: [
    {
      emojiUnicodeOrShortname: '😀',
      isSelected: true,
      ariaLabel: 'Emoji aria label',
      tooltip: 'You reacted with 😀',
      num: 1,
    },
    {
      emojiUnicodeOrShortname: '😒',
      isSelected: false,
      ariaLabel: 'Emoji aria label',
      tooltip: 'You reacted with 😒',
      num: 1,
    },
    {
      emojiUnicodeOrShortname: '🙃',
      isSelected: false,
      ariaLabel: 'Emoji aria label',
      tooltip: 'You reacted with 🙃',
      num: 99,
    },
  ],
};
