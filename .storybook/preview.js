import '../css/dialtone-globals.less';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, app } from '@storybook/vue3';
import { version } from '../package.json';
import theme from './theme';
import fixDefaultSlot from '../components/plugins/fixDefaultSlot';
import { setEmojiAssetUrl } from '../common/emoji.js';
import focusVisiblePolyfill from 'focus-visible';

setEmojiAssetUrl('https://storage.cloud.google.com/switch_static/joypixels/svg/unicode/')
setEmojiAssetUrl('https://storage.cloud.google.com/switch_static/joypixels/svg/unicode/', '.svg')
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
  }
};
