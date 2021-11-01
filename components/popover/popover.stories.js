import {
  DtPopover,
  POPOVER_PADDING_CLASSES,
  POPOVER_HORIZONTAL_ALIGNMENT,
  POPOVER_VERTICAL_ALIGNMENT,
  POPOVER_ROLES,
} from './';
import PopoverDefault from './popover_default.story.vue';
import { createTemplateFromVueFile } from '../storybook_utils';
import PopoverMdx from './popover.mdx';

const argTypesData = {
  id: {
    defaultValue: 'DtPopover__content0',
    table: {
      defaultValue: {
        summary: 'Automatically generated unique ID',
      },
    },
  },
  padding: {
    control: {
      type: 'select',
      options: POPOVER_PADDING_CLASSES,
    },
  },
  role: {
    control: {
      type: 'select',
      options: POPOVER_ROLES,
    },
  },
  fixedAlignment: {
    control: {
      type: 'select',
      options: POPOVER_HORIZONTAL_ALIGNMENT,
    },
  },
  fixedVerticalAlignment: {
    control: {
      type: 'select',
      options: POPOVER_VERTICAL_ALIGNMENT,
    },
  },
};

export default {
  title: 'Elements/Popovers',
  component: DtPopover,
  argTypes: argTypesData,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: PopoverMdx,
    },
  },
  excludeStories: /.Data$/,
};

const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, PopoverDefault);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [() => ({
  template: '<div class="d-h102"><story /></div>',
})];
Default.parameters = {
  docs: {
    source: {
      code: `
<dt-popover :open.sync="open">
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
      @click="open = !open"
    >
      Click to open
    </dt-button>
  </template>
  <template #content>
    <p>I will be displayed in the popover!</p>
  </template>
</dt-popover>
    `,
    },
  },
};

export const FixedRight = Template.bind({});
FixedRight.args = { ...Default.args, fixedAlignment: 'right' };
FixedRight.decorators = [() => ({
  template: '<div class="d-h102 d-ta-right"><story /></div>',
})];
FixedRight.parameters = {
  docs: {
    source: {
      code: `
<dt-popover fixedAlignment="right">
  <template #anchor="{ attrs }"></template>
  <template #content></template>
</dt-popover>
    `,
    },
  },
};

export const NoPadding = Template.bind({});
NoPadding.args = { ...Default.args, padding: 'none', open: true };
NoPadding.parameters = {
  docs: {
    source: {
      code: `
<dt-popover padding="none">
  <template #anchor="{ attrs }"></template>
  <template #content></template>
</dt-popover>
    `,
    },
  },
};
