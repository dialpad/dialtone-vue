import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtRootLayout from './root_layout.vue';

// Constants
const basePropsData = {
  headerHeight: '32px',
  footerHeight: '64px',
};

describe('Dialtone Vue Root Layout Tests', function () {
  // Wrappers
  let wrapper;

  let header;
  let body;
  let footer;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    header = wrapper.find('[data-qa="root-layout-header"]');
    footer = wrapper.find('[data-qa="root-layout-footer"]');
    body = wrapper.find('[data-qa="root-layout-body"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtRootLayout, {
      propsData,
      attrs,
      slots,
      provide,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('When root layout renders', function () {
      beforeEach(function () { _setWrappers(); });

      it('root should exist', function () { assert.isTrue(wrapper.exists()); });
      it('header should exist', function () { assert.isTrue(header.exists()); });
      it('body should exist', function () { assert.isTrue(body.exists()); });
      it('footer should exist', function () { assert.isTrue(footer.exists()); });
    });

    describe('When props are set', function () {
      beforeEach(function () { _setWrappers(); });

      it('should set the header height', function () {
        assert.strictEqual(header.element.style.getPropertyValue('height'), propsData.headerHeight);
      });

      it('should set the footer height', function () {
        assert.strictEqual(footer.element.style.getPropertyValue('height'), propsData.footerHeight);
      });
    });
  });

  describe('Accessibility Tests', function () {
    /*
     * Test(s) to ensure that the component is accessible
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Interactivity Tests', function () {
    /*
     * Test(s) to ensure that the component correctly handles user input
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Validation Tests', function () {
    /*
     * Test(s) to ensure that custom validators are working as expected
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Extendability Tests', function () {
    /*
     * Test(s) to ensure that the component can be correctly extended
     */

    describe('When some description of the current environment', function () {});
  });
});
