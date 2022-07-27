import '../css/dialtone-globals.less';
import { addons } from '@storybook/addons';
import theme from './theme';

const CSS_TO_HIDE_TEST_SECTION_FROM_SIDEBAR = `
#visual-testing,
*[data-parent-id*="visual-testing"],
*[title*="Visual Testing"] {
  display: none !important;
}
`;

if (process.env.NODE_ENV === 'production') {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);
  style.appendChild(
    document.createTextNode(CSS_TO_HIDE_TEST_SECTION_FROM_SIDEBAR)
  );
}

addons.setConfig({
  sidebar: {
    showRoots: true
  },
  theme,
});
