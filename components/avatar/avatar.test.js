import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtAvatar from './avatar.vue';
import { itBehavesLikeHasCorrectClass } from '../../tests/shared_examples/classes';
import { AVATAR_COLOR_MODIFIERS, AVATAR_KIND_MODIFIERS, AVATAR_SIZE_MODIFIERS } from './avatar_constants';
import {
  itBehavesLikeFailsCustomPropValidation,
  itBehavesLikePassesCustomPropValidation,
  itBehavesLikeDoesNotRaiseAnyVueWarnings,
  itBehavesLikeRaisesSingleVueWarning,
} from '../../tests/shared_examples/validation';
import {
  itBehavesLikeAppliesClassToChild,
} from '../../tests/shared_examples/extendability';
import sinon from 'sinon';

// Constants
const DEFAULT_SLOT = 'DP';
const IMAGE_ATTRS = {
  SRC: 'image.png',
  ALT: 'Avatar image',
};
const baseProps = {};
const baseAttrs = {};

describe('DtAvatar Tests', function () {
  // Wrappers
  let wrapper;
  let avatar;
  let image;

  // Environment
  let props = baseProps;
  let attrs = baseAttrs;
  let slots = {};

  // Helpers
  const _setChildWrappers = () => {
    avatar = wrapper.find('[data-qa="dt-avatar"]');
    image = wrapper.find('[data-qa="dt-avatar-image"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtAvatar, {
      props,
      attrs,
      slots,
    });
    _setChildWrappers();
  };

  // Setup
  beforeEach(function () {});

  // Teardown
  afterEach(function () {
    props = baseProps;
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
      beforeEach(function () {
        slots = { default: imageSlot };
        _setWrappers();
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
      beforeEach(function () {
        props = { ...baseProps };
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
      beforeEach(function () {
        props = {
          ...baseProps,
          kind: 'initials',
        };
        slots = { default: initials };
        _setWrappers();
      });

      it('initial slot should exist', function () {
        assert.strictEqual(avatar.text(), initials);
      });

      it('should have correct class', function () {
        itBehavesLikeHasCorrectClass(avatar, AVATAR_KIND_MODIFIERS.initials);
      });
    });

    describe('When a size is provided', function () {
      // Test Environment
      const size = 'lg';

      // Test Setup
      beforeEach(function () {
        props = {
          ...baseProps,
          size,
        };
        slots = { default: DEFAULT_SLOT };
        _setWrappers();
      });

      it('should have size variant class on the avatar', function () {
        assert.isTrue(avatar.classes(AVATAR_SIZE_MODIFIERS[size]));
      });
    });

    describe('When a color is provided', function () {
      // Test Environment
      const color = 'orange-500';

      // Test Setup
      beforeEach(function () {
        props = {
          ...baseProps,
          color,
        };
        slots = { default: DEFAULT_SLOT };
        _setWrappers();
      });

      it('should have color variant class on the avatar', function () {
        assert.isTrue(avatar.classes(AVATAR_COLOR_MODIFIERS[color]));
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

    describe('Color Validator', function () {
      // Test Environment
      const prop = DtAvatar.props.color;

      describe('When provided color is in AVATAR_COLOR_MODIFIERS', function () {
        itBehavesLikePassesCustomPropValidation(prop, prop.default);
      });

      describe('When provided color is not in AVATAR_COLOR_MODIFIERS', function () {
        itBehavesLikeFailsCustomPropValidation(prop, `INVALID_COLOR`);
      });
    });

    describe('Image Attrs Validation', function () {
      // Test Environment
      const warningMessage = '[Vue warn]: src and alt attributes are required for image avatars';

      // Test Setup
      before(function () {
        sinon.spy(console, 'warn');
      });

      // Test Teardown
      afterEach(function () {
        console.warn.resetHistory();
      });

      after(function () {
        console.warn.restore();
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
      props[childClassName] = customClass;
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
