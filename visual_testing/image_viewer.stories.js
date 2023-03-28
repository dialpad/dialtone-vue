import {
  argsData,
  argTypesData,
  Default,
} from '@/components/image_viewer/image_viewer.stories';

export default {
  title: 'Visual Testing/Image Viewer',
  parameters: {
    options: { showPanel: false },
    percy: {
      queryParams: {
        viewMode: 'story',
      },
    },
    a11y: {
      disable: true,
    },
  },
  args: {
    ...argsData,
    forceOpen: true,
  },
  argTypes: argTypesData,
};
export { Default };
