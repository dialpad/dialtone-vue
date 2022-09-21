import {
  argsData,
  argTypesData,
  Default,
} from '@/recipes/cards/ivr_node/ivr_node.stories';

export default {
  title: 'Visual Testing/Ivr Node',
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    options: { showPanel: false },
    a11y: {
      disable: true,
    },
  },
  args: { ...argsData, show: true },
  argTypes: argTypesData,
};

export { Default };
