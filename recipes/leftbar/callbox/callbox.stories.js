import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeCallbox from './callbox.vue';
import DtRecipeCallboxDefaultTemplate from './callbox_default.story.vue';
import DtRecipeCallboxVariantsTemplate from './callbox_variants.story.vue';

export const argTypesData = {
  // Props: only define things here that cannot be set by jsdoc comments on the component itself.

  // Slots

  /*
    We use the following naming scheme `<SLOT_NAME>Slot` for slot controls to prevent conflicts with props that share
    the same name.
  */

  // Events: Exclude this from the table as event names will automatically be added from the component itself.

};

const decorator = () => ({
  template: `<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`,
});

// Set default values at the story level here.
export const argsData = {
  title: 'Title',
  avatarFullName: 'Title',
  borderColor: 'ai',
};

// Story Collection
export default {
  title: 'Recipes/Leftbar/Callbox',
  component: DtRecipeCallbox,
  args: argsData,
  argTypes: argTypesData,
  decorators: [decorator],
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args) => createTemplateFromVueFile(
  args,
  DtRecipeCallboxDefaultTemplate,
);

const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallboxVariantsTemplate,
);

// Stories
export const Default = {
  render: DefaultTemplate,
  args: {
    video: 'Video slot',
    badge: 'Badge slot',
    subtitle: 'Subtitle slot',
    right: 'Right slot',
    bottom: 'Bottom slot',
  },

  parameters: {
    percy: {
      args: {
        avatarSeed: 'seed',
      },
    },
  },
};

export const Variants = {
  render: VariantsTemplate,

  parameters: { options: { showPanel: false }, controls: { disable: true } },
};
