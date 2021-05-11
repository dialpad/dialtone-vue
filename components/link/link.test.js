import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import HsLink from './link.vue';
import { LINK_MODIFIERS } from '../link';

// Constants
const basePropsData = {
  href: '#',
};

describe('HsTest Tests', function () {
  // Wrappers
  let wrapper;
  let nativeLink;

  // Environment
  let propsData = basePropsData;
  let slots = {};

  // Helpers
  const _setWrappers = () => {
    nativeLink = wrapper.find('.d-link');
  };

  const _mountWrapper = () => {
    wrapper = mount(HsLink, {
      propsData,
      slots,
      localVue: this.localVue,
    });
    _setWrappers();
  };

  // Test Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  beforeEach(function () {
    propsData = basePropsData;
    _mountWrapper();
  });

  // Test Teardown
  afterEach(function () {
    propsData = basePropsData;
    slots = {};
  });

  describe('Presentation Tests', function () {
    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });

    describe('When a default slot is provided', function () {
      beforeEach(function () {
        slots = { default: 'Slotted Link' };
        _mountWrapper();
        _setWrappers();
      });
      it('should have a default slot', function () { assert.equal(nativeLink.text(), 'Slotted Link'); });
    });

    describe('When type is danger', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: 'danger' });
        _setWrappers();
      });

      it('should render the native anchor', function () { assert.isTrue(nativeLink.exists()); });
      it('should have danger class', function () { assert.isTrue(nativeLink.classes().includes('d-link--danger')); });
      it('should have danger inverted class', async function () {
        await wrapper.setProps({ inverted: true });
        assert.isTrue(nativeLink.classes().includes('d-link--inverted-danger'));
      });
    });

    describe('When type is success', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: 'success', inverted: false });
        _setWrappers();
      });

      it('should have success class', function () { assert.isTrue(nativeLink.classes().includes('d-link--success')); });
      it('shouldn\'t have success inverted class', async function () {
        await wrapper.setProps({ inverted: true });
        assert.isFalse(nativeLink.classes().includes('d-link--inverted-success'));
      });
    });

    describe('When type is warning', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: 'warning', inverted: false });
        _setWrappers();
      });

      it('should have warning class', function () { assert.isTrue(nativeLink.classes().includes('d-link--warning')); });
      it('shouldn\'t have warning inverted class', async function () {
        await wrapper.setProps({ inverted: true });
        assert.isFalse(nativeLink.classes().includes('d-link--inverted-warning'));
      });
    });

    describe('When type is muted', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: 'muted', inverted: false });
        _setWrappers();
      });

      it('should have muted class', function () { assert.isTrue(nativeLink.classes().includes('d-link--muted')); });
      it('shouldn\'t have muted inverted class', async function () {
        await wrapper.setProps({ inverted: true });
        assert.isFalse(nativeLink.classes().includes('d-link--inverted-warning'));
      });
    });

    describe('When anchor is disabled', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: '', inverted: false, disabled: true });
        _setWrappers();
      });

      it('should have disabled class', function () { assert.isTrue(nativeLink.classes().includes('d-link--disabled')); });
      it('should have disabled inverted class', async function () {
        await wrapper.setProps({ inverted: true });
        assert.isTrue(nativeLink.classes().includes('d-link--inverted-disabled'));
      });
    });

    describe('When anchor is inverted', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: '', inverted: true, disabled: false });
        _setWrappers();
      });

      it('should have inverted class', function () { assert.isTrue(nativeLink.classes().includes('d-link--inverted')); });
      it('should have inverted danger class', async function () {
        await wrapper.setProps({ kind: 'danger' });
        assert.isTrue(nativeLink.classes().includes('d-link--inverted-danger'));
      });
    });

    describe('When the link has default state', function () {
      beforeEach(function () {
        _mountWrapper();
      });
      it('should has correct modifier class', function () {
        assert.strictEqual(wrapper.vm.linkModifierClassDisabled, '');
      });

      it('should has correct inverted modifier class', function () {
        assert.strictEqual(wrapper.vm.linkModifierClassInverted, '');
      });
    });

    describe('When the link is disabled', function () {
      beforeEach(async function () {
        await wrapper.setProps({ disabled: true });
        _setWrappers();
      });
      it('should has correct modifier class', function () {
        assert.strictEqual(wrapper.vm.linkModifierClassDisabled, LINK_MODIFIERS.disabled);
      });
    });

    describe('When the link is disabled and inverted', function () {
      beforeEach(async function () {
        await wrapper.setProps({ disabled: true, inverted: true });
        _setWrappers();
      });
      it('should has correct modifier class', function () {
        assert.strictEqual(wrapper.vm.linkModifierClassDisabled, LINK_MODIFIERS.invertedDisabled);
      });
    });

    it('should has correct inverted modifier class in inverted case', async function () {
      await wrapper.setProps({ disabled: false, inverted: true });
      assert.strictEqual(wrapper.vm.linkModifierClassInverted, LINK_MODIFIERS.inverted);
    });

    it('should has correct inverted modifier class in danger and inverted case', async function () {
      await wrapper.setProps({ kind: 'danger', inverted: true });
      assert.strictEqual(wrapper.vm.linkModifierClassInverted, LINK_MODIFIERS.invertedDanger);
    });
  });
});
