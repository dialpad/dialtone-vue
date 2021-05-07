import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import HsLink from './link.vue';
import { LINK_MODIFIERS } from '../link';

// Constants
const basePropsData = {
  url: '#',
  label: 'Link',
};

describe('HsTest Tests', function () {
  // Wrappers
  let wrapper;
  let label;
  let nativeLink;

  // Environment
  let propsData = basePropsData;
  let slots = {};
  const attrs = { 'aria-label': 'anchor' };

  // Helpers
  const _setWrappers = () => {
    label = wrapper.find('[data-qa="hs-link-label"]');
    nativeLink = wrapper.find('.d-link');
  };

  const _mountWrapper = () => {
    wrapper = mount(HsLink, {
      propsData,
      slots,
      attrs,
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
    it('should have a generated id', function () { assert.exists(nativeLink.attributes('id')); });
    it('should have a label', function () { assert.equal(label.text(), 'Link'); });

    describe('When a label is provided via slot', function () {
      beforeEach(async function () {
        slots = { default: 'Slotted Link' };
        _mountWrapper();
        _setWrappers();
        await wrapper.setProps({ label: '' });
      });
      it('should have a label', function () { assert.equal(label.text(), 'Slotted Link'); });
      it('shouldn\'t have a slotted label', async function () {
        await wrapper.setProps({ label: 'Link' });
        assert.notEqual(label.text(), 'Slotted Link');
        assert.equal(label.text(), 'Link');
      });
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

  describe('Extendability Tests', function () {
    // Test Setup
    beforeEach(function () {
      _setWrappers();
    });

    it('should handle pass through props/attrs', async function () {
      // Validating all attrs from base-input get passed down to the native input.
      assert.include(nativeLink.attributes(), attrs);
      assert.isUndefined(nativeLink.attributes().disabled);

      await wrapper.setProps({ disabled: true });
      assert.equal(nativeLink.attributes().disabled, 'disabled');
    });
  });
});
