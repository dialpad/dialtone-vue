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
  let propsData = basePropsData;
  let slots = {};

  // Helpers
  const _setWrappers = () => {
    nativeLink = wrapper.find('[data-qa="dt-link"]');
  };

  const _mountWrapper = () => {
    wrapper = shallowMount(DtLink, {
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
    it('should render the native anchor', function () { assert.isTrue(nativeLink.exists()); });

    function itBehavesLikeHasCorrectKindClass (kind) {
      it('should have correct class', async function () {
        assert.isTrue(nativeLink.classes().includes(LINK_VARIANTS_CLASSES[kind]));
      });
    }

    describe('When the link has default state', function () {
      beforeEach(function () {
        _mountWrapper();
      });

      it('should has correct disabled modifier class', function () {
        assert.isFalse(nativeLink.classes().includes(LINK_MODIFIER_CLASSES.disabled));
      });
    });

    describe('When a default slot is provided', function () {
      beforeEach(function () {
        slots = { default: 'Slotted Link' };
        _mountWrapper();
      });

      it('should render the provided data', function () { assert.equal(nativeLink.text(), 'Slotted Link'); });
    });

    describe('When kind is danger', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: DANGER });
        _setWrappers();
      });

      itBehavesLikeHasCorrectKindClass(DANGER);
    });

    describe('When kind is inverted', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: INVERTED });
        _setWrappers();
      });

      itBehavesLikeHasCorrectKindClass(INVERTED);
    });

    describe('When kind is success', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: SUCCESS });
        _setWrappers();
      });

      itBehavesLikeHasCorrectKindClass(SUCCESS);
    });

    describe('When kind is warning', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: WARNING });
        _setWrappers();
      });

      itBehavesLikeHasCorrectKindClass(WARNING);
    });

    describe('When kind is muted', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: MUTED });
        _setWrappers();
      });

      itBehavesLikeHasCorrectKindClass(MUTED);
    });

    describe('When anchor is disabled', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: '', disabled: true });
        _setWrappers();
      });

      it('should have correct class', function () {
        assert.isTrue(nativeLink.classes().includes(LINK_MODIFIER_CLASSES[DISABLED]));
      });
    });
  });
});
