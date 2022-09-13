import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtCard from './card.vue';

// Constants
const content = '<div data-qa="content-element"> card content </div>';
const header = '<div data-qa="header-element"> card header </div>';
const footer = '<div data-qa="footer-element"> card footer </div>';

describe('DtCard Tests', function () {
  // Wrappers
  let wrapper;
  let contentElement;
  let headerElement;
  let footerElement;

  // Environment
  const slots = { content, header, footer };

  const _clearChildWrappers = () => {
    contentElement = undefined;
    headerElement = undefined;
    footerElement = undefined;
  };

  const _setChildWrappers = () => {
    contentElement = wrapper.find('[data-qa="content-element"]');
    headerElement = wrapper.find('[data-qa="header-element"]');
    footerElement = wrapper.find('[data-qa="footer-element"]');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtCard, {
      slots,
      attachTo: document.body,
    });
    _setChildWrappers();
  };

  beforeEach(function () {
    _mountWrapper();
  });

  afterEach(async function () {
    _clearChildWrappers();
  });

  describe('Test default rendering', function () {
    it('should render the component', function () {
      assert.exists(wrapper, 'wrapper exists');
    });

    it('should render the header', function () {
      assert.exists(headerElement, 'header exists');
    });

    it('should render the content', function () {
      assert.exists(contentElement, 'content exists');
    });

    it('should render the footer', function () {
      assert.exists(footerElement, 'footer exists');
    });
  });
});
