import {
  argsData,
  argTypesData,
  Default,
  Variants,
} from '@/components/dropdown/dropdown.stories';

export default {
  title: 'Visual Testing/Dropdown',
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
