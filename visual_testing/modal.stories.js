import {
  argsData,
  argTypesData,
  Default,
  WithFooter,
  WithFixedHeaderFooter,
  WithDangerStyle,
  WithFullSize,
  WithCustomHeaderAndContent,
} from '@/components/modal/modal.stories';

export default {
  title: 'Visual Testing/Modal',
  parameters: {
    options: { showPanel: false },
  },
  args: { ...argsData, show: false },
  argTypes: argTypesData,
};

export {
  Default,
  WithFooter,
  WithFixedHeaderFooter,
  WithDangerStyle,
  WithFullSize,
  WithCustomHeaderAndContent,
};
