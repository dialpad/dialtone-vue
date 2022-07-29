import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtRecipeCallbarButtonWithPopover from './callbar_button_with_popover.vue';
import sinon from 'sinon';

class ResizeObserverMock {
  observe () {
    // do nothing
  }

  unobserve () {
    // do nothing
  }
}

// Constants
const basePropsData = {};

describe('DtRecipeCallbarButtonWithPopover Tests', function () {
  // Wrappers
  let wrapper;
  let arrow;
  let button;
  let popover;
  let popoverWindow;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    button = wrapper.findComponent('.dt-recipe--callbar-button-with-popover--main-button');
    arrow = wrapper.findComponent('.dt-recipe--callbar-button-with-popover--arrow');
    popover = wrapper.findComponent('.dt-recipe--callbar-button-with-popover--popover-wrapper');
    popoverWindow = wrapper.findComponent({ ref: 'content' });
  };

  const _setWrappers = () => {
    wrapper = mount(DtRecipeCallbarButtonWithPopover, {
      propsData,
      attrs,
      slots,
      provide,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {
    // RequestAnimationFrame and cancelAnimationFrame are undefined in the scope
    // Need to mock them to avoid error
    global.requestAnimationFrame = sinon.spy();
    global.cancelAnimationFrame = sinon.spy();
    global.ResizeObserver = ResizeObserverMock;
    this.localVue = createLocalVue();
  });
  beforeEach(function () {
    _setWrappers();
  });

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
    wrapper.destroy();
  });
  after(function () {
    global.ResizeObserver = null;
  });

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the button', function () { assert.isTrue(button.exists()); });
    it('should render the popover', function () { assert.isTrue(popover.exists()); });
    it('should render the arrow', function () { assert.isTrue(arrow.exists()); });

    it('should not render the arrow if disabled', async function () {
      await wrapper.setProps({ disabled: true });
      _setChildWrappers();

      assert.isFalse(arrow.exists());
    });

    it('should propagate disabled, active and danger props to the button component', async function () {
      await wrapper.setProps({ disabled: true, active: true, danger: true });
      _setChildWrappers();

      const buttonProps = button.props();

      assert.isTrue(buttonProps.disabled);
      assert.isTrue(buttonProps.active);
      assert.isTrue(buttonProps.danger);
    });

    it('should propagate disabled, placement, initialFocusElement and showCloseButton props to the popover component',
      async function () {
        await wrapper.setProps({
          disabled: true,
          placement: 'mock',
          initialFocusElement: '#mock',
          showCloseButton: true,
        });
        _setChildWrappers();

        const popoverProps = popover.props();

        assert.isTrue(popoverProps.disabled);
        assert.isTrue(popoverProps.showCloseButton);
        assert.equal(popoverProps.placement, 'mock');
        assert.equal(popoverProps.initialFocusElement, '#mock');
      });
  });

  describe('Interactivity Tests', function () {
    describe('When clicking on the arrow', function () {
      it('should pass the open prop to the popover, so it opens', async function () {
        await arrow.trigger('click');
        _setChildWrappers();

        const popoverProps = popover.props();
        console.log(popoverWindow, popoverProps);
        assert.isTrue(popoverProps.open);
      });
    });
  });
});
