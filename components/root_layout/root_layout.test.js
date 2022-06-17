import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtRootLayout from './root_layout.vue';

// Constants
const basePropsData = {};

describe('Dialtone Vue Root Layout Tests', function () {
  // Wrappers
  let wrapper;

  let header;
  let body;
  let sidebar;
  let content;
  let footer;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    header = wrapper.find('[data-qa="root-layout-header"]');
    body = wrapper.find('[data-qa="root-layout-body"]');
    sidebar = wrapper.find('[data-qa="root-layout-sidebar"]');
    content = wrapper.find('[data-qa="root-layout-content"]');
    footer = wrapper.find('[data-qa="root-layout-footer"]');
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
  beforeEach(function () {});

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });
  after(function () {});

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    beforeEach(function () { _setWrappers(); });

    describe('When some description of the current environment', function () {
      it('header should exist', function () { assert.exists(header); });
      it('body should exist', function () { assert.exists(body); });
      it('sidebar should exist', function () { assert.exists(sidebar); });
      it('content should exist', function () { assert.exists(content); });
      it('footer should exist', function () { assert.exists(footer); });
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
