import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtToast from './toast.vue';
import {itBehavesLikeHasCorrectClass} from "../../tests/shared_examples/classes";

// Constants
const basePropsData = {};

describe('DtToast Tests', function () {
  // Wrappers
  let wrapper;
  let toast;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    toast = wrapper.find('[data-qa="dt-toast"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtToast, {
      propsData,
      attrs,
      slots,
      provide,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  // Shared Examples
  const itBehavesLikeSomeExpectation = () => {
    it('should be equal', function () { assert.strictEqual(1, 1); });
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
    describe('When the toast renders', function () {
      // Test Setup
      beforeEach(function () { _setWrappers(); });

      it('should exist', function () { assert.exists(wrapper); });
    });

    describe('When kind is not specified', function () {
      it('should use the default kind', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--base');
      });
    });

    describe('When kind is set to error', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: 'error' });
      });

      it('has correct class', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--error');
      });
    });

    describe('When some description of the current environment', function () {});
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
