import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtTooltip from './tooltip.vue';
import {
  TOOLTIP_KIND_MODIFIERS,
  TOOLTIP_DIRECTION_MODIFIERS,
} from './tooltip_constants';

describe('Dialtone Vue Tooltip tests', function () {
  // Wrappers
  let wrapper;
  let tooltipContainer;
  let tooltip;

  // Helpers
  const _setWrappers = () => {
    tooltipContainer = wrapper.find('[data-qa="dt-tooltip-container"]');
    tooltip = wrapper.find('[data-qa="dt-tooltip"]');
  };

  const _mountWrapper = () => {
    wrapper = shallowMount(DtTooltip, {
      localVue: createLocalVue(),
    });
    _setWrappers();
  };

  const itBehavesLikeHasCorrectDirectionClass = arrowDirection => {
    it('should have correct class', async function () {
      await wrapper.setProps({ arrowDirection });
      assert.isTrue(tooltip.classes().includes(`d-tooltip__arrow--${arrowDirection}`));
    });
  };

  const describeDirections = () => TOOLTIP_DIRECTION_MODIFIERS
    .forEach(arrowDirection =>
      describe(`When direction is ${arrowDirection}`,
        function () { itBehavesLikeHasCorrectDirectionClass(arrowDirection); }));

  const mouseover = () => wrapper.trigger('mouseover');
  const focus = () => wrapper.trigger('focus.capture');
  const blur = () => wrapper.trigger('blur.capture');
  const escape = () => wrapper.trigger('keyup.esc');

  describe('Presentation Tests', function () {
    // Setup
    _mountWrapper();

    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the container', function () { assert.isTrue(tooltipContainer.exists()); });
    it('should render the tooltip', function () { assert.isTrue(tooltip.exists()); });
  });
  describeDirections();

  describe('Events', function () {
    it('mouseover show tooltip', async function () {
      await mouseover();
      assert.isTrue(tooltip.classes().includes(TOOLTIP_KIND_MODIFIERS.show));
    });

    it('focus show tooltip', async function () {
      await focus();
      assert.isTrue(tooltip.classes().includes(TOOLTIP_KIND_MODIFIERS.show));
    });

    it('blur hide tooltip', async function () {
      await blur();
      assert.isTrue(tooltip.classes().includes(TOOLTIP_KIND_MODIFIERS.hide));
    });

    it('Escape on focus', async function () {
      await focus();
      assert.isTrue(tooltip.classes().includes(TOOLTIP_KIND_MODIFIERS.show));
      await escape();
      assert.isTrue(tooltip.classes().includes(TOOLTIP_KIND_MODIFIERS.hide));
      await blur();
    });

    it('Escape on mouseover', async function () {
      await mouseover();
      assert.isTrue(tooltip.classes().includes(TOOLTIP_KIND_MODIFIERS.show));
      await escape();
      assert.isTrue(tooltip.classes().includes(TOOLTIP_KIND_MODIFIERS.hide));
    });
  });

  describe('Accessibility Tests', function () {
    beforeEach(async function () {
      await blur();
    });
    describe('When anchor has focus', function () {
      it('has focus', async function () {
        await focus();
        assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
      });
      it('has escape', async function () {
        await focus();
        await escape();
        assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
      });
    });

    describe('When anchor has mouseover', function () {
      it('has mouseover', async function () {
        await mouseover();
        assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
      });
      it('has escape', async function () {
        await focus();
        await escape();
        assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
      });
    });
  });
});
