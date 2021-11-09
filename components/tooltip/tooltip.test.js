import { assert } from 'chai';
import sinon from 'sinon';
import { createLocalVue, mount } from '@vue/test-utils';
import DtTooltip from './tooltip-tippy-headless.vue';
import { DtButton } from '../button';
import {
  TOOLTIP_KIND_MODIFIERS,
  TOOLTIP_DIRECTION_MODIFIERS,
} from './tooltip_constants';

// RequestAnimationFrame and cancelAnimationFrame are undefined in the scope
// Need to mock them to avoid error
global.requestAnimationFrame = sinon.spy();
global.cancelAnimationFrame = sinon.spy();

const flushPromise = () => new Promise(setImmediate);

describe('Dialtone Vue Tooltip tests', function () {
  // Wrappers
  let wrapper;
  let tooltipContainer;
  let tooltip;
  let anchor;
  let button;

  const getValueUpdateShow = () => {
    const values = wrapper.emitted()['update:show'];
    const lastIndex = values.length - 1;

    return values[lastIndex][0];
  };

  // Helpers
  const _setWrappers = () => {
    tooltipContainer = wrapper.find('[data-qa="dt-tooltip-container"]');
    tooltip = wrapper.find('[data-qa="dt-tooltip"]');
    anchor = wrapper.find('[data-qa="dt-tooltip-anchor"]');
    button = wrapper.find('[data-qa="dt-button"]');
  };

  const tooltipWrapper = {
    data: () => ({
      show: false,
    }),
    render (h) {
      const that = this;
      return h(
        DtTooltip, {
          props: {
            ...that.$attrs,
            show: that.show,
          },
          on: {
            'update:show' (isShow) {
              that.show = isShow;
              that.$emit('update:show', isShow);
            },
          },
        },
        [h(DtButton, { slot: 'anchor' }, 'Anchor Slot')],
      );
    },
  };

  const _mountWrapper = () => {
    wrapper = mount(tooltipWrapper, {
      localVue: createLocalVue(),
      propsData: {
        appendTo: 'parent',
      },
    });
    _setWrappers();
  };

  before(function () {
    this.localVue = createLocalVue();
  });

  const click = async () => {
    await button.trigger('click.native');
    await flushPromise();
  };

  const focus = async () => {
    await button.trigger('focus');
    await flushPromise();
  };

  const escape = () => {
    const keyboardEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(keyboardEvent);
  };

  const mouseover = async () => {
    await button.trigger('mouseover');
    await flushPromise();
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
        await wrapper.setData({ show: true });
        assert.isTrue(tooltip.attributes('aria-hidden') === 'false');
      });
      it('should be closed', async function () {
        await wrapper.setData({ show: false });
        assert.isFalse(getValueUpdateShow());
      });
    });

    describe('on mouseover', function () {
      before(async function () {
        await wrapper.setProps({ trigger: 'click' });
        await click();
      });
      it('shows tooltip', async function () {
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
          assert.isFalse(getValueUpdateShow());
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
        assert.isFalse(getValueUpdateShow());
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

      describe('When escape pressed', function () {
        beforeEach(async function () {
          await focus();
          await escape();
        });
        it('hide tooltip', function () {
          assert.isFalse(getValueUpdateShow());
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

      describe('When escape was pressed', function () {
        beforeEach(async function () {
          await escape();
        });
        it('hide tooltip', function () {
          assert.isFalse(getValueUpdateShow());
        });
      });
    });
  });
});
