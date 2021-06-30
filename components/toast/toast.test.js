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

// Constants
const basePropsData = {};
const baseData = {};
const baseSlotsData = {};

describe('DtToast Tests', function () {
  // Wrappers
  let wrapper;
  let toast;
  let actionChildStub;
  let contentChildStub;
  let iconChildStub;

  // Environment
  let data = baseData;
  let propsData = basePropsData;
  let attrs = {};
  let slots = baseSlotsData;

  // Helpers
  const _setChildWrappers = async () => {
    toast = wrapper.find('[data-qa="dt-toast"]');
    actionChildStub = wrapper.find('dt-notice-action-stub');
    contentChildStub = wrapper.find('dt-notice-content-stub');
    iconChildStub = wrapper.find('dt-notice-icon-stub');
  };
  let clock;

  const _setWrappers = () => {
    wrapper = shallowMount(DtToast, {
      data () { return data; },
      propsData,
      attrs,
      slots,
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
    data = baseData;
    propsData = basePropsData;
    attrs = {};
    slots = baseSlotsData;
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

    describe('When the toast renders with slots', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        slots = {
          ...baseSlotsData,
          default: 'default slot content',
          action: 'action slot content',
          icon: 'icon slot content',
        };
        _setWrappers();
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
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        propsData = {
          ...basePropsData,
          titleId: 'titleId prop content',
          contentId: 'contentId prop content',
          title: 'title prop content',
          message: 'message prop content',
          closeButtonProps: { ariaLabel: 'close' },
          hideClose: true,
        };
        _setWrappers();
      });

      it('titleId prop is passed down correctly', function () {
        assert.strictEqual(contentChildStub.props('titleId'), propsData.titleId);
      });

      it('contentId prop is passed down correctly', function () {
        assert.strictEqual(contentChildStub.props('contentId'), propsData.contentId);
      });

      it('title prop is passed down correctly', function () {
        assert.strictEqual(contentChildStub.props('title'), propsData.title);
      });

      it('message prop is passed down correctly', function () {
        assert.strictEqual(contentChildStub.text(), propsData.message);
      });

      it('closeButtonProps prop is passed down correctly', function () {
        assert.deepEqual(actionChildStub.props('closeButtonProps'), { ariaLabel: 'close' });
      });

      it('hideClose prop is passed down correctly', function () {
        assert.strictEqual(actionChildStub.props('hideClose'), propsData.hideClose);
      });
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
        itBehavesLikeDoesNotHaveClass(toast, 'd-toast--important');
      });
    });

    describe('When important is true', function () {
      // Test Setup
      beforeEach(function () {
        data = { ...baseData, hidden: false };
        propsData = { ...basePropsData, important: true };
        _setWrappers();
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
        _setWrappers();
        clock = useFakeTimers(global);
      });

      afterEach(function () {
        clock.restore();
      });

      it('should close the toast after default duration', async function () {
        wrapper.vm.show();
        await wrapper.vm.$nextTick();
        await _setChildWrappers();

        assert.isTrue(toast.exists());

        clock.tick(duration);
        await wrapper.vm.$nextTick();
        await _setChildWrappers();

        assert.isFalse(toast.exists());
      });
    });

    describe('When duration is provided', function () {
      // Test Environment
      const duration = 6500;

      // Test Setup
      beforeEach(function () {
        propsData = { ...basePropsData, duration };
        _setWrappers();
        clock = useFakeTimers(global);
      });

      afterEach(function () {
        clock.restore();
      });

      it('should close the toast after duration time is finished', async function () {
        wrapper.vm.show();
        await wrapper.vm.$nextTick();
        await _setChildWrappers();

        assert.isTrue(toast.exists());

        clock.tick(duration + 1);
        await wrapper.vm.$nextTick();
        await _setChildWrappers();

        assert.isFalse(toast.exists());
      });

      it('should close the toast with close method', async function () {
        wrapper.vm.show();
        await wrapper.vm.$nextTick();
        await _setChildWrappers();

        assert.isTrue(toast.exists());

        wrapper.vm.close();
        await wrapper.vm.$nextTick();
        await _setChildWrappers();

        assert.isFalse(toast.exists());
      });
    });
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

  describe('Validation Tests', function () {
    // Test Setup
    beforeEach(function () {
      _setWrappers();
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
});
