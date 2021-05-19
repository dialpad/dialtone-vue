import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtLink from './link.vue';
import {
  LINK_MODIFIER_CLASSES,
  LINK_VALIDATION_CLASSES,
  DANGER,
  SUCCESS,
  WARNING,
  MUTED,
  INVERTED,
  DISABLED,
} from '../link';

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
    nativeLink = wrapper.find('.d-link');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtLink, {
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

    function itBehavesLikeHasCorrectClass (kind) {
      it('should have correct class', async function () {
        assert.isTrue(nativeLink.classes().includes(LINK_VALIDATION_CLASSES[kind]));
      });
    }

    describe('When a default slot is provided', function () {
      beforeEach(function () {
        slots = { default: 'Slotted Link' };
        _mountWrapper();
        _setWrappers();
      });
      it('should render the provided data', function () { assert.equal(nativeLink.text(), 'Slotted Link'); });
    });

    describe('When kind is danger', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: DANGER });
        _setWrappers();
      });

      it('should render the native anchor', function () { assert.isTrue(nativeLink.exists()); });
      itBehavesLikeHasCorrectClass(DANGER);
    });

    describe('When kind is inverted', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: INVERTED });
        _setWrappers();
      });

      itBehavesLikeHasCorrectClass(INVERTED);
    });

    describe('When kind is success', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: SUCCESS });
        _setWrappers();
      });

      itBehavesLikeHasCorrectClass(SUCCESS);
    });

    describe('When kind is warning', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: WARNING, inverted: false });
        _setWrappers();
      });

      itBehavesLikeHasCorrectClass(WARNING);
    });

    describe('When kind is muted', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: MUTED, inverted: false });
        _setWrappers();
      });

      itBehavesLikeHasCorrectClass(MUTED);
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

    describe('When the link has default state', function () {
      beforeEach(function () {
        _mountWrapper();
      });
      it('should has correct disabled modifier class', function () {
        assert.isFalse(nativeLink.classes().includes(LINK_MODIFIER_CLASSES.disabled));
      });
    });
  });
});
