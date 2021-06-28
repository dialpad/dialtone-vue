import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtToast from './toast.vue';
import { itBehavesLikeDoesntHaveClass, itBehavesLikeHasCorrectClass } from '../../tests/shared_examples/classes';

// Constants
const basePropsData = {};
const baseData = {};

describe('DtToast Tests', function () {
  // Wrappers
  let wrapper;
  let toast;
  let contentChildStub;

  // Environment
  let data = baseData;
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = async () => {
    toast = wrapper.find('[data-qa="dt-toast"]');
    contentChildStub = wrapper.find('dt-notice-content-stub');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtToast, {
      data () { return data; },
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
    data = baseData;
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });
  after(function () {});

  describe('Presentation Tests', function () {
    describe('When the toast renders', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        _setWrappers();
      });

      it('should exist', function () { assert.exists(wrapper); });
      it('should render the toast', function () { assert.isTrue(toast.exists()); });
    });

    describe('When kind is not specified', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        _setWrappers();
      });

      it('should use the default kind', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--base');
      });
    });

    describe('When kind is set to error', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        propsData = { ...basePropsData, kind: 'error' };
        _setWrappers();
      });

      it('has correct class', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--error');
      });
    });

    describe('When important is not provided', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        _setWrappers();
      });

      it('doesnt have important class', function () {
        itBehavesLikeDoesntHaveClass(toast, 'd-toast--important');
      });
    });

    describe('When important is true', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        propsData = { ...basePropsData, important: true };
        _setWrappers();
      });

      it('Has correct class', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--important');
      });
    });

    describe('When some description of the current environment', function () {});
  });

  describe('Accessibility Tests', function () {
    describe('When rendered with default content', function () {
      // Test Environment
      const role = DtToast.props.role.default;

      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        _setWrappers();
      });

      it('shows correct default role', function () {
        assert.strictEqual(contentChildStub.attributes('role'), role);
      });
    });

    describe('When role is alert', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        propsData = { ...basePropsData, role: 'alert' };
        _setWrappers();
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
