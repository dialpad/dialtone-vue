import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtAvatar from './avatar.vue';
import { itBehavesLikeHasCorrectClass } from '../../tests/shared_examples/classes';
import { AVATAR_KIND_MODIFIERS, AVATAR_SIZE_MODIFIERS } from './avatar_constants';
import {
  itBehavesLikeFailsCustomPropValidation,
  itBehavesLikePassesCustomPropValidation,
  itBehavesLikeDoesNotRaiseAnyVueWarnings,
  itBehavesLikeRaisesSingleVueWarning,
} from '../../tests/shared_examples/validation';
import {
  itBehavesLikeAppliesClassToChild,
} from '../../tests/shared_examples/extendability';
import Vue from 'vue';
import sinon from 'sinon';

// Constants
const DEFAULT_SLOT = 'DP';
const IMAGE_ATTRS = {
  SRC: 'image.png',
  ALT: 'Avatar image',
};
const basePropsData = {};
const baseAttrs = {};

describe('DtAvatar Tests', function () {
  // Wrappers
  let wrapper;
  let avatar;
  let image;
  let presence;

  // Environment
  let propsData = basePropsData;
  let attrs = baseAttrs;
  let slots = {};

  // Helpers
  const _setChildWrappers = () => {
    avatar = wrapper.find('[data-qa="dt-avatar"]');
    image = wrapper.find('[data-qa="dt-avatar-image"]');
    presence = wrapper.find('[data-qa="dt-presence"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtAvatar, {
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
  beforeEach(function () {});

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
  });
  after(function () {});

  describe('Presentation Tests', function () {
    describe('When the avatar renders', function () {
      // Test Setup
      beforeEach(function () {
        slots = { default: DEFAULT_SLOT };
        _setWrappers();
      });

      it('should exists', function () { assert.exists(wrapper); });
      it('should render the avatar', function () { assert.isTrue(avatar.exists()); });
    });

    describe('When the avatar renders image via slot', function () {
      // Test Environment
      const imageSlot = `<img src="${IMAGE_ATTRS.SRC}" alt="${IMAGE_ATTRS.ALT}" data-qa="dt-avatar-image">`;

      // Test Setup
      beforeEach(async function () {
        slots = { default: imageSlot };
        _setWrappers();
        await wrapper.vm.$nextTick();
        _setChildWrappers();
      });

      it('image should exist', function () {
        assert.exists(image);
      });

      it('src should match those provided by attrs', function () {
        assert.strictEqual(image.attributes('src'), IMAGE_ATTRS.SRC);
      });

      it('alt should match those provided by attrs', function () {
        assert.strictEqual(image.attributes('alt'), IMAGE_ATTRS.ALT);
      });
    });

    describe('With icon in slot', function () {
      // Test Environment
      const icon = '<svg></svg>';

      // Test Setup
      beforeEach(async function () {
        propsData = { ...basePropsData };
        slots = { default: icon };
        _setWrappers();
      });

      it('icon slot should exist', function () {
        assert.exists(avatar.find('svg'));
      });

      it('should have correct class', function () {
        itBehavesLikeHasCorrectClass(avatar, AVATAR_KIND_MODIFIERS.icon);
      });
    });

    describe('With initials in slot', function () {
      // Test Environment
      const initials = 'DP';

      // Test Setup
      beforeEach(async function () {
        propsData = {
          ...basePropsData,
        };
        slots = { default: initials };
        _setWrappers();
        await wrapper.vm.$nextTick();
        _setChildWrappers();
      });

      it('initial slot should exist', function () {
        assert.strictEqual(avatar.text(), initials);
      });

      it('should have correct class', function () {
        itBehavesLikeHasCorrectClass(avatar, AVATAR_KIND_MODIFIERS.initials);
      });
    });

    describe('With initials in slot and size is sm', function () {
      // Test Environment
      const initials = 'DP';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
        };
        slots = { default: initials };
        _setWrappers();
      });

      it(' shows a single character', async function () {
        await wrapper.setProps({
          size: 'sm',
        });
        assert.strictEqual(avatar.text(), initials[0]);
      });
    });

    describe('With initials in slot and size is xs', function () {
      // Test Environment
      const initials = 'DP';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
        };
        slots = { default: initials };
        _setWrappers();
      });

      it('has no initials', async function () {
        await wrapper.setProps({
          size: 'xs',
        });
        assert.strictEqual(avatar.text(), '');
      });
    });

    describe('When a size is provided', function () {
      // Test Environment
      const size = 'lg';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
          size,
        };
        slots = { default: DEFAULT_SLOT };
        _setWrappers();
      });

      it('should have size variant class on the avatar', function () {
        assert.isTrue(avatar.classes(AVATAR_SIZE_MODIFIERS[size]));
      });
    });

    describe('With Presence', function () {
      const initials = 'DP';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
        };
        slots = { default: initials };
        _setWrappers();
      });

      it('should not render presence if presence prop is not defined', async function () {
        await wrapper.setProps({ presence: null });
        presence = wrapper.find('[data-qa="dt-presence"]');
        assert.isFalse(presence.exists());
      });

      it('should render presence when presence prop is defined', async function () {
        await wrapper.setProps({ presence: 'active' });
        presence = wrapper.find('[data-qa="dt-presence"]');
        assert.isTrue(presence.exists());
        assert.isTrue(presence.classes('d-avatar__presence'));
      });

      it('should pass through data in presenceProps to the presence component ', async function () {
        await wrapper.setProps({
          presence: 'active',
          presenceProps: {
            'aria-live': 'assertive',
            'random-attribute': 'value',
            propValue: 2,
          },
        });
        presence = wrapper.find('[data-qa="dt-presence"]');
        assert.isTrue(presence.exists());
        assert.equal(presence.attributes('aria-live'), 'assertive');
        assert.equal(presence.attributes('random-attribute'), 'value');
      });

      it('should update presence styles based on Avatar size', async function () {
        // default styles are for 'sm'
        await wrapper.setProps({
          size: 'md',
          presence: 'active',
        });
        presence = wrapper.find('[data-qa="dt-presence"]');
        assert.isTrue(presence.classes('d-avatar__presence--md'));
        await wrapper.setProps({
          size: 'lg',
          presence: 'active',
        });
        presence = wrapper.find('[data-qa="dt-presence"]');
        assert.isTrue(presence.classes('d-avatar__presence--lg'));
      });
    });
  });

  describe('Validation Tests', function () {
    describe('Size Validator', function () {
      // Test Environment
      const prop = DtAvatar.props.size;

      describe('When provided size is in AVATAR_SIZE_MODIFIERS', function () {
        itBehavesLikePassesCustomPropValidation(prop, prop.default);
      });

      describe('When provided size is not in AVATAR_SIZE_MODIFIERS', function () {
        itBehavesLikeFailsCustomPropValidation(prop, `INVALID_SIZE`);
      });
    });

    describe('Image Attrs Validation', function () {
      // Test Environment
      const warningMessage = 'src and alt attributes are required for image avatars';

      // Test Setup
      before(function () {
        Vue.config.silent = true;
        sinon.spy(Vue.util, 'warn');
      });

      // Test Teardown
      afterEach(function () {
        Vue.util.warn.resetHistory();
      });

      after(function () {
        Vue.util.warn.restore();
        Vue.config.silent = false;
      });

      describe('When image src and alt attributes are provided', function () {
        // Test Setup
        beforeEach(function () {
          attrs = {
            ...baseAttrs,
            src: IMAGE_ATTRS.SRC,
            alt: IMAGE_ATTRS.ALT,
          };
          _setWrappers();
        });

        itBehavesLikeDoesNotRaiseAnyVueWarnings();
      });

      describe('When image alt attribute is not provided', function () {
        // Test Setup
        beforeEach(function () {
          const imageSlot = `<img src="${IMAGE_ATTRS.SRC}" data-qa="dt-avatar-image">`;

          slots = { default: imageSlot };
          _setWrappers();
        });

        itBehavesLikeRaisesSingleVueWarning(warningMessage);
      });

      describe('When image src attribute is not provided', function () {
        // Test Setup
        beforeEach(function () {
          const imageSlot = `<img alt="${IMAGE_ATTRS.ALT}" data-qa="dt-avatar-image">`;

          slots = { default: imageSlot };
          _setWrappers();
        });

        itBehavesLikeRaisesSingleVueWarning(warningMessage);
      });
    });
  });

  describe('Extendability Tests', function () {
    // Test Environment
    let element;
    const customClass = 'my-custom-class';

    // Helpers
    const _setupChildClassTest = (childClassName, selector) => {
      propsData[childClassName] = customClass;
      slots = { default: DEFAULT_SLOT };
      _setWrappers();
      element = wrapper.find(selector);
    };

    // Shared Examples
    const itBehavesLikeAppliesClassToChildLocal = () => {
      it('should apply custom class to child', function () {
        itBehavesLikeAppliesClassToChild(wrapper, '.my-custom-class', element);
      });
    };

    describe('When an avatar class is provided', function () {
      // Test Setup
      beforeEach(function () { _setupChildClassTest('avatarClass', '[data-qa="dt-avatar"]'); });

      itBehavesLikeAppliesClassToChildLocal();
    });
  });
});
