import {
  argsData,
  argTypesData,
  Default,
  Info,
  Error,
  Pinned,
  Warning,
  Success,
} from '@/components/banner/banner.stories';

export default {
  title: 'Visual Testing/Banner',
  parameters: {
    options: { showPanel: false },
  },
  args: { ...argsData, show: true },
  argTypes: argTypesData,
};

export { Default, Info, Error, Pinned, Warning, Success };
