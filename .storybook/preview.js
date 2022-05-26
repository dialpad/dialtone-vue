import '../css/dialtone-globals.less';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/vue';
import { version } from '../package.json';
import theme from './theme';
import Vue from 'vue';
import fixDefaultSlot from '../components/plugins/fixDefaultSlot';
import { setEmojiAssetUrlSmall, setEmojiAssetUrlLarge } from '../common/emoji.js';
import focusVisiblePolyfill from 'focus-visible';

setEmojiAssetUrlSmall('https://storage.cloud.google.com/dialpad_static/joypixels/png/unicode/32/', '.png');
setEmojiAssetUrlLarge('https://storage.cloud.google.com/dialpad_static/joypixels/svg/unicode/', '.svg');
Vue.use(fixDefaultSlot);

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
