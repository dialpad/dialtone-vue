import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtRootLayoutBody from './root_layout_body.vue';

// Constants
const basePropsData = {};

describe('Dialtone Vue Root Layout Body Tests', function () {
  // Wrappers
  let wrapper;

  let sidebar;
  let content;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    sidebar = wrapper.find('[data-qa="root-layout-sidebar"]');
    content = wrapper.find('[data-qa="root-layout-content"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtRootLayoutBody, {
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

      it('sidebar should exist', function () { assert.exists(sidebar.element); });
      it('content should exist', function () { assert.exists(content.element); });
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
