import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtRecipeComboboxMultiSelect from './combobox_multi_select.vue';
import { VALIDATION_MESSAGE_TYPES } from '@/common/constants';
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

describe('DtRecipeComboboxMultiSelect Tests', function () {
  // Wrappers
  let wrapper;
  let chips;
  let input;
  let validationMsg;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    chips = wrapper.findAll('[data-qa="dt-chip"]');
    input = wrapper.find('[data-qa="dt-input-input"]');
    validationMsg = wrapper.find('[data-qa="validation-message"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtRecipeComboboxMultiSelect, {
      propsData,
      attrs,
      slots,
      provide,
      localVue: this.localVue,
      attachTo: document.body,
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
    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the input', function () { assert.isTrue(input.exists()); });
    it('should not render the chip if no selection', function () {
      assert.isFalse(chips.exists());
    });

    describe('Should render the chips if any selection', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ selectedItems: ['1', '2'] });
        _setChildWrappers();
      });

      it('should render the chip component', function () {
        assert.isTrue(chips.exists());
      });

      it('should be two chip components', function () {
        assert.equal(chips.length, 2);
      });
    });
  });

  describe('Accessibility Tests', function () {
    beforeEach(async function () {
      await wrapper.setProps({ selectedItems: ['1', '2'] });
      _setChildWrappers();
    });

    describe('Should navigate between chips', function () {
      it('should move to the previous chip if press "LEFT" arrow', function () {
        const firstChip = chips.at(0);
        const secondChip = chips.at(1);
        // Focus on the second chip
        secondChip.trigger('focus');
        assert.strictEqual(document.activeElement, secondChip.element);

        // Press Key 'LEFT'
        secondChip.trigger('keyup', { code: 'arrowleft' });
        assert.strictEqual(document.activeElement, firstChip.element);
      });

      it('should move to the next chip if press "RIGHT" arrow', function () {
        const firstChip = chips.at(0);
        const secondChip = chips.at(1);
        // Focus on the first chip
        firstChip.trigger('focus');
        assert.strictEqual(document.activeElement, firstChip.element);

        // Press Key 'RIGHT'
        firstChip.trigger('keyup', { code: 'arrowright' });
        assert.strictEqual(document.activeElement, secondChip.element);
      });
    });

    describe('Should navigate between last chip and input', function () {
      it('should move to last chip if press "LEFT" arrow', function () {
        const lastChip = chips.at(1);
        // Focus on the input
        input.trigger('focus');
        assert.strictEqual(document.activeElement, input.element);

        // Press Key 'LEFT'
        input.trigger('keyup', { code: 'arrowleft' });
        assert.strictEqual(document.activeElement, lastChip.element);
      });

      it('should move to last chip if press "Backspace" arrow', function () {
        const lastChip = chips.at(1);
        // Focus on the input
        input.trigger('focus');
        assert.strictEqual(document.activeElement, input.element);

        // Press Key 'LEFT'
        input.trigger('keyup', { code: 'backspace' });
        assert.strictEqual(document.activeElement, lastChip.element);
      });

      it('should move to the input if press "RIGHT" arrow', function () {
        const lastChip = chips.at(1);
        // Focus on the last chip
        lastChip.trigger('focus');
        assert.strictEqual(document.activeElement, lastChip.element);

        // Press Key 'RIGHT'
        lastChip.trigger('keyup', { code: 'arrowright' });
        assert.strictEqual(document.activeElement, input.element);
      });
    });
  });

  describe('Interactivity Tests', function () {
    beforeEach(async function () {
      await wrapper.setProps({ selectedItems: ['1'] });
      _setChildWrappers();
    });

    it('Should emit "remove" event when close the chip and focus back to input', function () {
      const chip = chips.at(0);
      chip.trigger('keyup', { code: 'delete' });
      assert.equal(wrapper.emitted().remove, '1');
      assert.strictEqual(document.activeElement, input.element);
    });
  });

  describe('Validation Tests', function () {
    beforeEach(async function () {
      await wrapper.setProps({
        maxSelected: 2,
        maxSelectedMessage: [{
          message: 'Max 2 selected',
          type: VALIDATION_MESSAGE_TYPES.WARNING,
        }],
      });
      _setChildWrappers();
    });

    describe('"max-selected" validation', function () {
      it('should not show warning if not reach max', async function () {
        await wrapper.setProps({ selectedItems: ['1'] });
        assert.isFalse(validationMsg.exists());
      });

      it('should show warning if reach max', async function () {
        await wrapper.setProps({ selectedItems: ['1', '2'] });
        await wrapper.vm.$nextTick();
        _setChildWrappers();
        assert.strictEqual(validationMsg.text(), 'Max 2 selected');
      });
    });
  });
});
