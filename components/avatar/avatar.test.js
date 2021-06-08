import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtAvatar from './avatar.vue';
import { itBehavesLikeHasCorrectClass } from '../../tests/shared_examples/classes';
import { AVATAR_COLOR_MODIFIERS, AVATAR_KIND_MODIFIERS, AVATAR_SIZE_MODIFIERS } from './avatar_constants';
import {
  itBehavesLikeFailsCustomPropValidation,
  itBehavesLikePassesCustomPropValidation,
} from '../../tests/shared_examples/validation';
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

  // Environment
  let propsData = basePropsData;
  let attrs = baseAttrs;
  let slots = {};

  // Helpers
  const _setChildWrappers = () => {
    avatar = wrapper.find('[data-qa="dt-avatar"]');
    image = wrapper.find('[data-qa="dt-avatar-image"]');
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

    describe('When the avatar renders image via attrs', function () {
      // Test Environment
      const src = IMAGE_ATTRS.SRC;
      const alt = IMAGE_ATTRS.ALT;

      // Test Setup
      beforeEach(function () {
        attrs = {
          ...baseAttrs,
          src,
          alt,
        };
        _setWrappers();
      });

      it('image should exist', function () {
        assert.exists(image);
      });

      it('src should match those provided by attrs', function () {
        assert.strictEqual(image.attributes('src'), src);
      });

      it('alt should match those provided by attrs', function () {
        assert.strictEqual(image.attributes('alt'), alt);
      });
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

    describe('With kind icon and slot populated', function () {
      // Test Environment
      const icon = '<svg></svg>';

      // Test Setup
      beforeEach(function () {
        propsData = { ...basePropsData, kind: 'icon' };
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

    describe('With kind initials and slot populated', function () {
      // Test Environment
      const initials = 'DP';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
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

    describe('When a color is provided', function () {
      // Test Environment
      const color = 'orange-500';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
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

      describe('when provided size is not in AVATAR_SIZE_MODIFIERS', function () {
        itBehavesLikeFailsCustomPropValidation(prop, `INVALID_SIZE`);
      });
    });

    describe('Image Attrs Validation', function () {
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

      // Shared Examples
      const itBehavesLikeDoesNotRaiseAnyWarnings = () => {
        it('should not raise any warnings', function () { assert.isTrue(Vue.util.warn.notCalled); });
      };

      const itBehavesLikeRaisesWarning = () => {
        it('should raise a single warning', function () { assert.isTrue(Vue.util.warn.calledOnce); });
        it('should have expected warning message', function () {
          assert.strictEqual(Vue.util.warn.firstCall.args[0], 'src and alt attributes are required for image avatars');
        });
      };

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

        itBehavesLikeDoesNotRaiseAnyWarnings();
      });

      describe('When image alt attribute is not provided', function () {
        // Test Setup
        beforeEach(function () {
          attrs = {
            ...baseAttrs,
            src: IMAGE_ATTRS.SRC,
          };
          _setWrappers();
        });

        itBehavesLikeRaisesWarning();
      });

      describe('When image src attribute is not provided', function () {
        // Test Setup
        beforeEach(function () {
          attrs = {
            ...baseAttrs,
            alt: IMAGE_ATTRS.ALT,
          };
          _setWrappers();
        });

        itBehavesLikeRaisesWarning();
      });
    });
  });
});
