import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeFeedItemTimePill from './feed_item_time_pill';
import DtRecipeFeedItemTimePillMdx from './feed_item_time_pill.mdx';
import DtRecipeFeedItemTimePillDefaultTemplate from './feed_item_time_pill_default.story.vue';

// Default Prop Values
export const argsData = {
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
};

// Story Collection
export default {
  title: 'Recipes/Feed Items/Time Pill',
  component: DtRecipeFeedItemTimePill,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtRecipeFeedItemTimePillMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeFeedItemTimePillDefaultTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});

const today = new Date();

Default.args = {
  dateTime: today.toISOString().split('T')[0],
  dateTimeDisplay: 'Today',
};
