import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtLink from './link.vue';
import {
  LINK_MODIFIER_CLASSES,
  LINK_VARIANTS_CLASSES,
  DANGER,
  SUCCESS,
  WARNING,
  MUTED,
  INVERTED,
  DISABLED,
} from './link_constants';

// Constants
const basePropsData = {
  href: '#',
};

describe('Dialtone Vue Link tests', function () {
  // Wrappers
  let wrapper;
  let nativeLink;

  // Environment
  const propsData = basePropsData;
  const slots = { default: 'Slotted Link' };

  // Helpers
  const _setWrappers = () => {
    nativeLink = wrapper.find('[data-qa="dt-link"]');
  };

  const _mountWrapper = () => {
    wrapper = shallowMount(DtLink, {
      propsData,
      slots,
      localVue: createLocalVue(),
    });
    _setWrappers();
  };

  const itBehavesLikeHasCorrectKindClass = kind => {
    it('should have correct class', async function () {
      await wrapper.setProps({ kind });
      assert.isTrue(nativeLink.classes().includes(LINK_VARIANTS_CLASSES[kind]));
    });
  };

  // Test Teardown
  afterEach(function () {});
  after(function () {});

  describe('Presentation Tests', function () {
    // Setup
    _mountWrapper();

    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the native anchor', function () { assert.isTrue(nativeLink.exists()); });

    describe('When the link has default state', function () {
      it('should has correct disabled modifier class', function () {
        assert.isFalse(nativeLink.classes().includes(LINK_MODIFIER_CLASSES.disabled));
      });
    });

    describe('When a default slot is provided', function () {
      it('should render the provided data', function () { assert.equal(nativeLink.text(), slots.default); });
    });

    describe('When kind is danger', function () { itBehavesLikeHasCorrectKindClass(DANGER); });

    describe('When kind is inverted', function () { itBehavesLikeHasCorrectKindClass(INVERTED); });

    describe('When kind is success', function () { itBehavesLikeHasCorrectKindClass(SUCCESS); });

    describe('When kind is warning', function () { itBehavesLikeHasCorrectKindClass(WARNING); });

    describe('When kind is muted', function () { itBehavesLikeHasCorrectKindClass(MUTED); });

    describe('When anchor is disabled', function () {
      it('should have correct class', async function () {
        await wrapper.setProps({ kind: '', disabled: true });
        assert.isTrue(nativeLink.classes().includes(LINK_MODIFIER_CLASSES[DISABLED]));
      });
    });
  });
});
