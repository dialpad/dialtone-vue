import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtLink from './link.vue';
import {
  LINK_KIND_MODIFIERS,
  DANGER,
  SUCCESS,
  WARNING,
  MUTED,
  INVERTED,
} from './link_constants';
import { itBehavesLikeHasCorrectClass } from '../../tests/shared_examples/classes';

// Constants
const baseProps = {
  href: '#',
};

describe('DtLink tests', function () {
  // Wrappers
  let wrapper;
  let nativeLink;

  // Environment
  const props = baseProps;
  const slots = { default: 'Slotted Link' };

  // Helpers
  const _setWrappers = () => {
    nativeLink = wrapper.find('[data-qa="dt-link"]');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtLink, {
      props,
      slots,
    });
    _setWrappers();
  };

  const itBehavesLikeHasCorrectKindClass = kind => {
    it('should have correct class', async function () {
      await wrapper.setProps({ kind });
      itBehavesLikeHasCorrectClass(nativeLink, LINK_KIND_MODIFIERS[kind]);
    });
  };

  // Setup
  beforeEach(function () {
    _mountWrapper();
  });

  describe('Presentation Tests', function () {
    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the native anchor', function () { assert.isTrue(nativeLink.exists()); });

    describe('When a default slot is provided', function () {
      it('should render the provided data', function () { assert.equal(nativeLink.text(), slots.default); });
    });

    describe('When kind is danger', function () { itBehavesLikeHasCorrectKindClass(DANGER); });

    describe('When kind is inverted', function () { itBehavesLikeHasCorrectKindClass(INVERTED); });

    describe('When kind is success', function () { itBehavesLikeHasCorrectKindClass(SUCCESS); });

    describe('When kind is warning', function () { itBehavesLikeHasCorrectKindClass(WARNING); });

    describe('When kind is muted', function () { itBehavesLikeHasCorrectKindClass(MUTED); });
  });
});