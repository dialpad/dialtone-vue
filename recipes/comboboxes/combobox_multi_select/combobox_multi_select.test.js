import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtRecipeComboboxMultiSelect from './combobox_multi_select.vue';
import { VALIDATION_MESSAGE_TYPES } from '@/common/constants';
import { flushPromises } from '@/common/utils';
import sinon from 'sinon';
import DtPopover from '@/components/popover/popover';
import { itBehavesLikeDoesNotHaveClass } from '@/tests/shared_examples/classes';

class ResizeObserverMock {
  observe () {
    // do nothing
  }

  unobserve () {
    // do nothing
  }
}

// Constants
const basePropsData = {
  showList: true,
  visuallyHiddenCloseLabel: 'Close combobox',
};

describe('DtRecipeComboboxMultiSelect Tests', function () {
  // Wrappers
  let wrapper;
  let chips;
  let input;
  let validationMsg;

  // Environment
  let props = basePropsData;
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
      props,
      attrs,
      slots,
      provide,
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
  });
  beforeEach(function () {
    _setWrappers();
  });

  // Teardown
  afterEach(function () {
    props = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
    wrapper.unmount();
  });
  after(function () {
    global.ResizeObserver = null;
  });

  describe('Presentation Tests', function () {
    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the input', function () { assert.isTrue(input.exists()); });
    it('should not render the chip if no selection', function () {
      assert.isTrue(chips.length === 0);
    });
    it('should not render the visually hidden close button', async function () {
      assert.isFalse(wrapper
        .findComponent(DtPopover)
        .findComponent({ ref: 'content' })
        .find('[data-qa="dt-popover-sr-only-close-button"]')
        .exists(),
      );
    });

    describe('Should render the chips if any selection', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ selectedItems: ['1', '2'] });
        _setChildWrappers();
      });

      it('should render the chip component', function () {
        assert.isTrue(chips.length > 0);
      });

      it('should be two chip components', function () {
        assert.equal(chips.length, 2);
      });
    });

    describe('When visuallyHiddenClose is true', function () {
      beforeEach(async function () {
        await wrapper.setProps({ visuallyHiddenClose: true });
        await input.trigger('focus');
        _setChildWrappers();
      });

      it('should contain a visually hidden close button', async function () {
        assert.isTrue(wrapper
          .findComponent(DtPopover)
          .findComponent({ ref: 'content' })
          .find('[data-qa="dt-popover-sr-only-close-button"]')
          .exists())
        ;
      });

      describe('When visuallyHiddenCloseLabel is null', function () {
        let consoleErrorSpy;
        beforeEach(async function () {
          consoleErrorSpy = sinon.spy(console, 'error');
          await wrapper.setProps({ visuallyHiddenCloseLabel: null });
        });

        afterEach(function () {
          consoleErrorSpy = null;
          console.error.restore();
        });

        it('should output error message', async function () {
          assert.isTrue(consoleErrorSpy.calledWith('If visuallyHiddenClose prop is true, the component includes ' +
          'a visually hidden close button and you must set the visuallyHiddenCloseLabel prop.'));
        });
      });
    });
  });

  describe('Accessibility Tests', function () {
    let firstChip;
    let secondChip;
    beforeEach(async function () {
      await wrapper.setProps({ selectedItems: ['1', '2'] });
      _setChildWrappers();
      firstChip = chips.at(0);
      secondChip = chips.at(1);
    });

    describe('Should navigate between chips', function () {
      describe('When second chip is focused', function () {
        beforeEach(async function () {
          await secondChip.trigger('focus');
        });

        describe('When LEFT key is pressed', function () {
          beforeEach(async function () {
            await secondChip.trigger('keyup', { code: 'arrowleft' });
          });

          it('should focus the first chip', function () {
            assert.strictEqual(document.activeElement, firstChip.element);
          });
        });
      });

      describe('When first chip is focused', function () {
        beforeEach(async function () {
          await firstChip.trigger('focus');
        });

        describe('When RIGHT key is pressed', function () {
          beforeEach(async function () {
            await firstChip.trigger('keyup', { code: 'arrowright' });
          });

          it('should focus the second chip', function () {
            assert.strictEqual(document.activeElement, secondChip.element);
          });
        });
      });
    });

    describe('Should navigate between last chip and input', function () {
      let lastChip;
      beforeEach(async function () {
        await wrapper.setProps({ selectedItems: ['1'] });
        lastChip = chips.at(0);
      });

      describe('When input is focused', function () {
        beforeEach(async function () {
          input.trigger('focus');
        });

        describe('When LEFT key is pressed', function () {
          beforeEach(async function () {
            input.trigger('keyup', { code: 'arrowleft' });
          });

          it('should focus the last chip', function () {
            assert.strictEqual(document.activeElement, lastChip.element);
          });
        });

        describe('When BACKSPACE key is pressed', function () {
          beforeEach(async function () {
            input.trigger('keyup', { code: 'backspace' });
          });

          it('should focus the last chip', function () {
            assert.strictEqual(document.activeElement, lastChip.element);
          });
        });
      });

      describe('When the last chip is focused', function () {
        beforeEach(async function () {
          lastChip.trigger('focus');
        });

        describe('When RIGHT key is pressed', function () {
          beforeEach(async function () {
            lastChip.trigger('keyup', { code: 'arrowright' });
          });

          it('should focus the input', function () {
            assert.strictEqual(document.activeElement, input.element);
          });
        });
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

    describe('When sr-only close button is enabled and activated', function () {
      let popoverContainer;

      beforeEach(async function () {
        await wrapper.setProps({ visuallyHiddenClose: true });
        await input.trigger('focus');
        popoverContainer = wrapper.find('[data-qa="dt-popover-container"]');
        await wrapper
          .findComponent(DtPopover)
          .findComponent({ ref: 'content' })
          .find('[data-qa="dt-popover-sr-only-close-button"]')
          .trigger('click');
      });

      it('Does not contain modal-opened class', function () {
        itBehavesLikeDoesNotHaveClass(popoverContainer, 'd-popover__anchor--modal-opened');
      });
    });
  });

  describe('Validation Tests', function () {
    beforeEach(async function () {
      await wrapper.setProps({
        maxSelected: 2,
        maxSelectedMessage: [{
          message: 'More than 2 selected',
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
        await wrapper.setProps({ selectedItems: ['item1', 'item2', 'item3'] });
        await flushPromises();
        _setChildWrappers();
        assert.strictEqual(validationMsg.text(), 'More than 2 selected');
      });
    });
  });
});
