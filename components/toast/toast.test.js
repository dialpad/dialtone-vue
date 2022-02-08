import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtToast from './toast.vue';
import {
  itBehavesLikeDoesNotHaveClass,
  itBehavesLikeHasCorrectClass,
} from '../../tests/shared_examples/classes';
import {
  itBehavesLikeFailsCustomPropValidation,
  itBehavesLikePassesCustomPropValidation,
} from '../../tests/shared_examples/validation';
import { useFakeTimers } from 'sinon';
import {
  itBehavesLikePassesChildProp,
} from '../../tests/shared_examples/extendability';
import { DtButton } from '../button';

// Constants
const basePropsData = {
  show: false,
  closeButtonProps: {
    ariaLabel: 'close',
  },
};
const baseSlotsData = {
  anchor: '<dt-button @click="isShown = !isShown">Click to show!</dt-button>',
};

describe('DtToast Tests', function () {
  // Wrappers
  let wrapper;
  let toast;
  let toastContainer;

  let actionChildStub;
  let contentChildStub;
  let iconChildStub;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = baseSlotsData;

  // Helpers
  const _mountWrapper = () => {
    wrapper = shallowMount(DtToast, {
      localVue: createLocalVue(),
      components: { DtButton },
      propsData,
      attrs,
      slots,
    });
  };

  let clock;

  const _setChildWrappers = () => {
    toastContainer = wrapper.find('[data-qa="dt-toast-container"]');
    toast = wrapper.find('[data-qa="dt-toast"]');

    actionChildStub = wrapper.find('dt-notice-action-stub');
    contentChildStub = wrapper.find('dt-notice-content-stub');
    iconChildStub = wrapper.find('dt-notice-icon-stub');
  };

  const _showToast = async () => {
    await wrapper.setProps({
      show: true,
    });
    _setChildWrappers();
  };

  // Teardown
  afterEach(function () {
    propsData = { ...basePropsData };
    attrs = {};
    slots = { ...baseSlotsData };
  });

  describe('Presentation Tests', function () {
    describe('When the toast renders', function () {
      // Test Setup
      beforeEach(async function () {
        _mountWrapper();
        await _showToast();
      });

      it('should render the component', function () { assert.exists(wrapper); });
      it('should render the container', function () { assert.exists(toastContainer); });
      it('should render the toast', function () { assert.exists(toast); });
    });

    describe('When the toast renders with slots', function () {
      // Test Setup
      beforeEach(async function () {
        slots = {
          ...baseSlotsData,
          default: 'default slot content',
          action: 'action slot content',
          icon: 'icon slot content',
        };
        _mountWrapper();
        await _showToast();
      });

      it('action slot is passed down correctly', function () {
        assert.strictEqual(actionChildStub.text(), slots.action);
      });

      it('default slot is passed down correctly', function () {
        assert.strictEqual(contentChildStub.text(), slots.default);
      });

      it('icon slot is passed down correctly', function () {
        assert.strictEqual(iconChildStub.text(), slots.icon);
      });
    });

    describe('When the toast renders with props', function () {
      // Test Setup
      beforeEach(async function () {
        propsData = {
          ...basePropsData,
          titleId: 'titleId prop content',
          contentId: 'contentId prop content',
          title: 'title prop content',
          message: 'message prop content',
          hideClose: true,
          kind: 'info',
          closeButtonProps: {
            ariaLabel: 'custom label',
          },
          role: 'alert',
        };
        _mountWrapper();
        await _showToast();
      });

      /* dt-notice-icon props */
      it('kind prop is passed down correctly', function () {
        itBehavesLikePassesChildProp(iconChildStub, 'kind', propsData.kind);
      });

      /* dt-notice-content props */
      it('titleId prop is passed down correctly', function () {
        itBehavesLikePassesChildProp(contentChildStub, 'titleId', propsData.titleId);
      });

      it('contentId prop is passed down correctly', function () {
        itBehavesLikePassesChildProp(contentChildStub, 'contentId', propsData.contentId);
      });

      it('title prop is passed down correctly', function () {
        itBehavesLikePassesChildProp(contentChildStub, 'title', propsData.title);
      });

      it('message prop is passed down correctly', function () {
        assert.strictEqual(contentChildStub.text(), propsData.message);
      });

      /* dt-notice-action props */
      it('hideClose prop is passed down correctly', function () {
        itBehavesLikePassesChildProp(actionChildStub, 'hideClose', propsData.hideClose);
      });
    });

    describe('When kind is not specified', function () {
      // Test Setup
      beforeEach(async function () {
        _mountWrapper();
        await _showToast();
      });

      it('should use the default kind', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--base');
      });
    });

    describe('When kind is set to error', function () {
      // Test Setup
      beforeEach(async function () {
        propsData = { ...basePropsData, kind: 'error' };
        _mountWrapper();
        await _showToast();
      });

      it('has correct class', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--error');
      });
    });

    describe('When important is not provided', function () {
      // Test Setup
      beforeEach(async function () {
        _mountWrapper();
        await _showToast();
      });

      it('doesnt have important class', function () {
        itBehavesLikeDoesNotHaveClass(toast, 'd-toast--important');
      });
    });

    describe('When important is true', function () {
      // Test Setup
      beforeEach(async function () {
        propsData = { ...basePropsData, important: true };
        _mountWrapper();
        await _showToast();
      });

      it('has correct class', function () {
        itBehavesLikeHasCorrectClass(toast, 'd-toast--important');
      });
    });

    describe('When duration is not provided', function () {
      // Test Environment
      const duration = DtToast.props.duration.default;

      // Test Setup
      beforeEach(function () {
        _mountWrapper();
        clock = useFakeTimers(global);
      });

      afterEach(function () {
        clock.restore();
      });

      it('should close the toast after default duration', async function () {
        await _showToast();
        assert.strictEqual(toast.attributes('aria-hidden'), 'false');

        clock.tick(duration);
        await wrapper.vm.$nextTick();
        _setChildWrappers();

        assert.strictEqual(toast.attributes('aria-hidden'), 'true');
      });
    });

    describe('When duration is provided', function () {
      // Test Environment
      const duration = 6500;

      // Test Setup
      beforeEach(function () {
        propsData = { ...basePropsData, duration };
        _mountWrapper();
        clock = useFakeTimers(global);
      });

      afterEach(function () {
        clock.restore();
      });

      it('should close the toast after duration time is finished', async function () {
        await _showToast();
        assert.strictEqual(toast.attributes('aria-hidden'), 'false');

        clock.tick(duration);
        await wrapper.vm.$nextTick();

        _setChildWrappers();

        assert.strictEqual(toast.attributes('aria-hidden'), 'true');
      });

      it('should close the toast with close method', async function () {
        await _showToast();
        assert.strictEqual(toast.attributes('aria-hidden'), 'false');

        wrapper.vm.close();
        await wrapper.vm.$nextTick();

        _setChildWrappers();

        assert.strictEqual(toast.attributes('aria-hidden'), 'true');
      });
    });

    describe('When placement is set to bottom-start', function () {
      // Test Setup
      beforeEach(async function () {
        propsData = { ...basePropsData, placement: 'bottom-start' };
        _mountWrapper();
        await _showToast();
      });

      it('should use the bottom-start placement', function () {
        assert.strictEqual(toast.attributes('data-placement'), propsData.placement);
      });
    });

    describe('When placement is not provided', function () {
      // Test environment
      const placement = DtToast.props.placement.default;

      // Test Setup
      beforeEach(async function () {
        _mountWrapper();
        await _showToast();
      });

      it('should use the default placement', function () {
        assert.strictEqual(toast.attributes('data-placement'), placement);
      });
    });
  });

  describe('Accessibility Tests', function () {
    describe('When rendered with default content', function () {
      // Test Environment
      const role = DtToast.props.role.default;

      // Test Setup
      beforeEach(async function () {
        _mountWrapper();
        await _showToast();
      });

      it('shows correct default role', function () {
        assert.strictEqual(contentChildStub.attributes('role'), role);
      });

      it('should have aria-hidden set to false when toast is shown', function () {
        assert.strictEqual(toast.attributes('aria-hidden'), 'false');
      });
    });

    describe('When role is alert', function () {
      // Test Setup
      beforeEach(async function () {
        propsData = { ...basePropsData, role: 'alert' };
        _mountWrapper();
        await _showToast();
      });

      it('shows correct role', function () {
        assert.strictEqual(contentChildStub.attributes('role'), 'alert');
      });
    });
  });

  describe('Validation Tests', function () {
    // Test Setup
    beforeEach(function () {
      _mountWrapper();
    });

    describe('Role Validator', function () {
      // Test Environment
      const prop = DtToast.props.role;

      describe('When provided role is in TOAST_ROLES', function () {
        itBehavesLikePassesCustomPropValidation(prop, prop.default);
      });

      describe('When provided role is not in TOAST_ROLES', function () {
        itBehavesLikeFailsCustomPropValidation(prop, `INVALID_ROLE`);
      });
    });

    describe('Kind Validator', function () {
      // Test Environment
      const prop = DtToast.props.kind;

      describe('When provided kind is in NOTICE_KINDS', function () {
        itBehavesLikePassesCustomPropValidation(prop, prop.default);
      });

      describe('When provided kind is not in NOTICE_KINDS', function () {
        itBehavesLikeFailsCustomPropValidation(prop, `INVALID_KIND`);
      });
    });

    describe('Duration Validator', function () {
      // Test Environment
      const prop = DtToast.props.duration;
      const duration = prop.default;

      describe('When provided duration is a valid duration', function () {
        itBehavesLikePassesCustomPropValidation(prop, duration);
      });

      describe('When provided duration is not a valid duration', function () {
        itBehavesLikeFailsCustomPropValidation(prop, duration - 1);
      });
    });
  });

  describe('Extendability Tests', function () {
    // Test Environment
    let element;
    let propName;
    const propValue = {
      ariaLabel: 'close',
    };

    // Helpers
    const _setupChildPropsTest = async (childPropName) => {
      propsData[childPropName] = propValue;
      _mountWrapper();
      await _showToast();
    };

    // Shared Examples
    const itBehavesLikePassesChildPropLocal = () => {
      it('should pass down provided child prop', function () {
        itBehavesLikePassesChildProp(element, propName, propValue);
      });
    };

    describe('When close button child props are provided', function () {
      beforeEach(async function () {
        propName = 'closeButtonProps';
        await _setupChildPropsTest(propName);
        element = actionChildStub;
      });
      itBehavesLikePassesChildPropLocal();
    });
  });
});
