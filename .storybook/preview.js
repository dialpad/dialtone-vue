import '../css/dialtone-globals.less';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, app } from '@storybook/vue3';
import { version } from '../package.json';
import theme from './theme';
import fixDefaultSlot from '../components/plugins/fixDefaultSlot';
import { setEmojiAssetUrlSmall, setEmojiAssetUrlLarge, setCustomEmojiUrl, setCustomEmojiJson } from '@/common/emoji.js';
import * as customEmojiJson from '@/common/custom-emoji.json';
import focusVisiblePolyfill from 'focus-visible';

setEmojiAssetUrlSmall('https://static.dialpadcdn.com/joypixels/png/unicode/32/', '.png');
setEmojiAssetUrlLarge('https://static.dialpadcdn.com/joypixels/svg/unicode/', '.svg');
setCustomEmojiUrl('https://github.githubassets.com/images/icons/emoji/');
setCustomEmojiJson(customEmojiJson);
app.use(fixDefaultSlot);

addParameters({
  docs: {
    theme,
  },
});

export const parameters = {
  controls: {
    expanded: true,
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      // Make sure the docs come first
      order: [
        `Version ${version}`,
        [
          'Welcome',
        ],
        'Docs',
        [
          'Component Driven Development',
          [
            'Yeoman Generator',
            'Unit Tests',
          ],
          'Storybook',
          [
            'Getting Started',
            'File Structure',
            'Writing Stories',
            'Addons',
            'Writing Documentation',
          ],
          'Templates',
          [
            'Component',
            'SFC Component Story Template',
            'Stories',
            'MDX Documentation',
            'Unit Tests',
            'Pull Request',
          ],
        ],
      ],
    },
  },
  docs: {
    transformSource: (src) => {
      if (typeof src === 'object') return src

      // remove <template> and </template> tags
      return src.slice(10, -12);
    }
  },
  percy: {
    include: [
      'Visual Testing/Combobox With Popover: Default',
      'Visual Testing/Dropdown: Default',
      'Visual Testing/Popover: Default',
      'Visual Testing/Toast: Default',
      'Visual Testing/Tooltip: Default',
      'Visual Testing/Inline Components: Default',
      'Visual Testing/Modal: Default',
      'Visual Testing/Modal: With Footer',
      'Visual Testing/Modal: With Fixed Header Footer',
      'Visual Testing/Modal: With Danger Style',
      'Visual Testing/Modal: With Full Size',
      'Visual Testing/Modal: With Custom Header And Content',
    ],
  }
};
