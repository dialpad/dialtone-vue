import {
  argsData,
  argTypesData,
  Default,
  Error,
  Info,
  Success,
  Warning,
  Important,
} from '@/components/toast/toast.stories';

export default {
  title: 'Visual Testing/Toast',
  parameters: {
    options: { showPanel: false },
  },
  args: { ...argsData, show: false },
  argTypes: argTypesData,
};

export { Default, Error, Info, Success, Warning, Important };
