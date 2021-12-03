import { SHORTCUTS_ALIASES_LIST } from './keyboard_shortcut_constants';
import { createTemplateFromVueFile } from '../storybook_utils';
import DtKeyboardShortcut from './keyboard_shortcut.vue';
import DtKeyboardShortcutMdx from './keyboard_shortcut.mdx';
import DtKeyboardShortcutDefaultTemplate from './keyboard_shortcut_default.story.vue';
import DtKeyboardShortcutVariantsTemplate from './keyboard_shortcut_variants.story.vue';

export const argTypesData = {
  shortcut: {
    description: 'shortcut string, which supports aliases between curly brackets, `{aliasForKey}`',
    defaultValue: SHORTCUTS_ALIASES_LIST[0],
    table: {
      type: {
        detail: `string<${SHORTCUTS_ALIASES_LIST.join(' | ')}>`,
      },
    },
    control: {
      type: 'select',
      options: SHORTCUTS_ALIASES_LIST,
    },
  },

  inverted: {
    description: 'Applies the inverted styles',
  },
};

// Story Collection
export default {
  title: 'Components/KeyboardShortcut',
  component: DtKeyboardShortcut,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtKeyboardShortcutMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtKeyboardShortcutDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtKeyboardShortcutVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
