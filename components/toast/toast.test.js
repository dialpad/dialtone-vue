import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtToast from './toast.vue';
import { itBehavesLikeDoesntHaveClass, itBehavesLikeHasCorrectClass } from '../../tests/shared_examples/classes';

// Constants
const basePropsData = {};

describe('DtToast Tests', function () {
  // Wrappers
  let wrapper;
  let toast;
  let actionChildStub;
  let contentChildStub;
  let iconChildStub;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = async () => {
    await wrapper.setData({ hidden: false });

    toast = wrapper.find('[data-qa="dt-toast"]');
    actionChildStub = wrapper.find('dt-notice-action-stub');
    contentChildStub = wrapper.find('dt-notice-content-stub');
    iconChildStub = wrapper.find('dt-notice-icon-stub');
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

    describe('When important is false', function () {
      it('doesnt have important class', function () {
        itBehavesLikeDoesntHaveClass(toast, 'd-toast--important');
      });
    });

    describe('When important is true', function () {
      beforeEach(async function () {
        await wrapper.setProps({ important: true });
      });

      it('Has correct class', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--important');
      });
    });

    describe('When some description of the current environment', function () {});
  });

  describe('Accessibility Tests', function () {
    describe('When rendered with default content', function () {
      it('shows correct default role', function () {
        assert.strictEqual(contentChildStub.attributes('role'), 'status');
      });
    });

    describe('When role is alert', function () {
      beforeEach(async function () {
        await wrapper.setProps({ role: 'alert' });
      });

      it('shows correct role', function () {
        assert.strictEqual(contentChildStub.attributes('role'), 'alert');
      });
    });
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
