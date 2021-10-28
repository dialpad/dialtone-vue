import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtTooltip from './tooltip-tippy-headless.vue';
import { DtButton } from '../button';
import {
  TOOLTIP_KIND_MODIFIERS,
  TOOLTIP_DIRECTION_MODIFIERS,
} from './tooltip_constants';

global.cancelAnimationFrame = function () {
  return setTimeout(() => {}, 0);
};

global.requestAnimationFrame = function () {
  return setTimeout(() => {}, 0);
};

describe('Dialtone Vue Tooltip tests', function () {
  // Wrappers
  let wrapper;
  let tooltipContainer;
  let tooltip;
  let anchor;
  let button;
  let slots = {
    anchor: {
      functional: true,
      render (h) {
        return h(DtButton, 'Anchor Slot');
      },
    },
  };

  // Helpers
  const _setWrappers = () => {
    tooltipContainer = wrapper.find('[data-qa="dt-tooltip-container"]');
    tooltip = wrapper.find('[data-qa="dt-tooltip"]');
    anchor = wrapper.find('[data-qa="dt-tooltip-anchor"]');
    button = wrapper.find('[data-qa="dt-button"]');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtTooltip, {
      localVue: createLocalVue(),
      slots,
      propsData: {
        appendTo: 'parent',
      },
    });
    _setWrappers();
  };

  before(function () {
    this.localVue = createLocalVue();
  });

  const waiteForTippyUpdate = async () => {
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
  };

  const click = async () => {
    await button.trigger('click.native');
    await waiteForTippyUpdate();
  };

  const focus = async () => {
    await button.trigger('focus');
    await waiteForTippyUpdate();
  };

  const escape = () => {
    const keyboardEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(keyboardEvent);
  };

  const mouseover = async () => {
    await button.trigger('mouseover');
    await waiteForTippyUpdate();
  };

  describe('Presentation Tests', function () {
    // Setup
    _mountWrapper();

    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the container', function () { assert.isTrue(tooltipContainer.exists()); });
    it('should render the tooltip', function () { assert.isTrue(tooltip.exists()); });
    it('should set default classes', function () {
      assert.isTrue(tooltip.classes('d-tooltip__arrow--bottom-center'));
    });
  });

  describe('When an arrow direction is provided', function () {
    TOOLTIP_DIRECTION_MODIFIERS.forEach(arrowDirection => describe(`When direction is ${arrowDirection}`, function () {
      beforeEach(async function () {
        await wrapper.setProps({ arrowDirection });
      });

      it('should have correct arrow direction class', async function () {
        assert.isTrue(tooltip.classes(`d-tooltip__arrow--${arrowDirection}`));
      });
    }));
  });

  describe('Message provided via prop', function () {
    it('should render the message', async function () {
      await wrapper.setProps({ message: 'Message Prop' });
      assert.strictEqual(tooltip.text(), 'Message Prop');
    });
  });

  describe('Message provided via slot', function () {
    before(function () {
      slots = { ...slots, default: 'Message Slot' };
      _mountWrapper();
    });
    it('should render the message', async function () {
      await wrapper.setProps({ message: 'Message Slot' });
      assert.strictEqual(tooltip.text(), 'Message Slot');
    });
  });

  describe('Anchor slot', function () {
    it('should render the anchor slot', async function () {
      assert.strictEqual(anchor.text(), 'Anchor Slot');
    });
  });

  describe('Visibility props', function () {
    it('should has inverted class', async function () {
      await wrapper.setProps({ inverted: true });
      assert.isTrue(tooltip.classes(TOOLTIP_KIND_MODIFIERS.inverted));
    });
  });

  describe('Interactivity Tests', function () {
    describe('Show state', function () {
      it('should be visible', async function () {
        await wrapper.setProps({ show: true });
        wrapper.vm.$nextTick(() => {
          assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
        });
      });
      it('should be closed', async function () {
        await wrapper.setProps({ show: false });
        wrapper.vm.$nextTick(() => {
          assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
        });
      });
    });

    describe('on mouseover', function () {
      before(async function () {
        await wrapper.setProps({ trigger: 'click' });
        await click();
      });
      it('shows tooltip', function () {
        assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
      });
    });

    describe('on focus', function () {
      before(async function () {
        _mountWrapper();
        await wrapper.setProps({ trigger: 'focus' });
        await focus();
      });

      it('shows tooltip', async function () {
        assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
      });
    });

    describe('on escape', function () {
      describe('escape on focus', function () {
        before(async function () {
          await escape();
        });

        it('hide tooltip', function () {
          assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
        });
      });
    });

    describe('escape on mouseover', function () {
      before(async function () {
        _mountWrapper();
        await wrapper.setProps({ trigger: 'mouseover' });
        await mouseover();
        await escape();
      });

      it('hide tooltip', async function () {
        assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
      });
    });
  });
  //
  describe('Accessibility Tests', function () {
    beforeEach(function () {
      _mountWrapper();
    });
    describe('When anchor has focus', function () {
      beforeEach(async function () {
        await focus();
      });

      it('has focus', async function () {
        assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
      });

      describe('When anchor has blur', function () {
        beforeEach(function () {
          _mountWrapper();
        });
        it('hide tooltip', function () {
          assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
        });
      });

      describe('When escape pressed', function () {
        beforeEach(async function () {
          await escape();
        });
        it('hide tooltip', function () {
          assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
        });
      });
    });

    describe('When anchor has mouseover', function () {
      beforeEach(async function () {
        await wrapper.setProps({ trigger: 'mouseover' });
        await mouseover();
      });

      it('has mouseover', async function () {
        assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
      });

      describe('When anchor has blur', function () {
        beforeEach(function () {
          _mountWrapper();
        });
        it('hide tooltip', function () {
          assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
        });
      });

      describe('When escape was pressed', function () {
        beforeEach(async function () {
          await escape();
        });
        it('hide tooltip', function () {
          assert.isTrue(tooltip.attributes('aria-hidden') === 'true');
        });
      });
    });
  });
});
