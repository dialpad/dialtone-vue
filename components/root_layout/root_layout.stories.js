/* eslint-disable max-len */
// import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import { ROOT_LAYOUT_POSITIONS } from './root_layout_constants';
import DtRootLayout from './root_layout';
import DtRootLayoutMdx from './root_layout.mdx';
import DtRootLayoutDefaultTemplate from './root_layout_default.story.vue';
import DtRootLayoutVariantsTemplate from './root_layout_variants.story.vue';

// Default Prop Values
export const argsData = {
  header: 'Header',
  footer: 'Footer',
  sidebar: '<div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div>',
  default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean magna libero, ultrices vitae fermentum vitae, varius eu erat. Cras sagittis imperdiet nisi, id congue risus ullamcorper nec. Duis ut elementum urna, ut sagittis est. Ut et ligula aliquet, hendrerit enim sit amet, dictum sapien. Vestibulum cursus sem eu nisi consectetur, vitae rhoncus tellus pretium. Cras mattis, mauris id fermentum eleifend, turpis odio rutrum magna, scelerisque sagittis arcu orci at nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ultrices tristique odio, eu pulvinar dolor euismod ac. Duis nisi risus, convallis consequat risus sed, efficitur porttitor neque. Pellentesque nec ipsum odio. Ut rhoncus finibus enim, a iaculis metus elementum quis. Duis a tristique mi, ac aliquet quam. Ut non mauris vitae neque pellentesque placerat. Phasellus turpis erat, convallis eu massa sed, efficitur scelerisque augue. Curabitur sit amet vehicula elit. Phasellus sed tincidunt sapien, quis feugiat lorem.

  Donec in mauris id turpis sollicitudin interdum a finibus tellus. Integer tempus dui id malesuada egestas. Cras ullamcorper mauris eget lorem volutpat semper. Cras ut egestas lorem. Cras et consectetur nunc, ac pretium mauris. Praesent sit amet blandit sem. Curabitur sollicitudin mollis accumsan. Nam quis hendrerit lorem. Etiam sit amet magna porta est condimentum tempor. Donec ullamcorper ornare ex, non finibus massa lobortis ac. Proin in cursus nisi. Vivamus ultrices laoreet arcu quis volutpat. Curabitur eu metus ac augue ultricies euismod.

  In hac habitasse platea dictumst. Sed interdum, felis sed mattis interdum, tellus elit consequat mi, non rutrum neque nulla molestie ante. Donec faucibus lectus et odio faucibus suscipit. Mauris sodales erat iaculis, mattis magna et, congue lectus. Nam sed libero in est faucibus tincidunt. Pellentesque molestie in nulla vehicula vestibulum. Nam mollis aliquam orci, at tempor risus euismod et. Suspendisse laoreet feugiat mauris, id suscipit eros sagittis sit amet. Pellentesque ultrices elit tortor, nec vulputate dolor mollis eu. Nullam ut risus eu velit hendrerit volutpat. Integer id consectetur ex. Etiam enim purus, tincidunt sit amet nisi sit amet, posuere lobortis risus. Cras elementum dui arcu. Nam blandit, libero quis bibendum iaculis, arcu urna iaculis sapien, ut vestibulum tortor augue et enim. Nullam eget pretium dolor.

  Vivamus sollicitudin porttitor neque, sed tincidunt eros mattis id. Morbi est arcu, volutpat vel magna sed, dictum vestibulum tellus. Sed et nibh elit. Pellentesque eros massa, iaculis sit amet dolor non, mattis iaculis elit. Quisque at orci sed sapien interdum placerat. In eget orci ex. Fusce faucibus, urna sit amet condimentum posuere, nibh diam eleifend diam, eget blandit lacus orci non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

  Integer ac lorem urna. Morbi volutpat facilisis dignissim. Vestibulum ornare suscipit dui id porta. Mauris egestas porttitor erat, a iaculis urna fermentum eu. Donec sit amet nisl mi. Nunc consequat ante accumsan libero euismod interdum. Nullam neque quam, efficitur at congue non, feugiat egestas augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nec leo eros. Vestibulum molestie nulla sit amet molestie ullamcorper. Praesent nec tempor dui, non dapibus lacus. Nulla fermentum varius nibh, ac blandit dolor suscipit sed. Etiam iaculis interdum dolor, pellentesque maximus ipsum.`,
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

  // Slots
  default: {
    control: 'text',
    description: 'Slot for main content',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  header: {
    description: 'Slot for header content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  sidebar: {
    description: 'Slot for left sidebar content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  footer: {
    description: 'Slot for footer content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  sidebarPosition: {
    defaultValue: 'left',
    control: {
      type: 'select',
      options: Object.values(ROOT_LAYOUT_POSITIONS),
    },
  },
};

// Story Collection
export default {
  title: 'Components/Root Layout',
  component: DtRootLayout,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtRootLayoutMdx,
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
  DtRootLayoutDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRootLayoutVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
