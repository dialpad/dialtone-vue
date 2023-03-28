import {
  argsData,
  argTypesData,
  Default,
} from '@/components/image_viewer/image_viewer.stories';

export default {
  title: 'Visual Testing/Image Viewer',
  args: {
    ...argsData,
    forceOpen: true,
  },
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    options: { showPanel: false },
    a11y: {
      disable: true,
    },
  },
};
export { Default };
