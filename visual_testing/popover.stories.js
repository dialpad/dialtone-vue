import {
  argsData,
  argTypesData,
  Default,
  Variants,
} from '@/components/popover/popover.stories';

export default {
  title: 'Visual Testing/Popover',
  args: {
    ...argsData,
    open: true,
  },
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    options: { showPanel: false },
  },
};
export { Default, Variants };
