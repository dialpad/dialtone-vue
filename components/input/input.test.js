import sinon from 'sinon';
import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import HsInput from './input.vue';

// Constants
const basePropsData = {
  type: 'text',
  value: 'value',
};

const baseAttrs = {
  placeholder: 'input-placeholder',
  name: 'input-name',
};

describe('Dialtone Vue Input tests', function () {
  // Wrappers
  let wrapper;
  let label;
  let description;
  let nativeInput;
  let nativeTextarea;

  // Test Environment
  let propsData;
  let attrs;
  let slots;
  let listeners;
  let inputStub;

  // Helpers
  const _setChildWrappers = () => {
    label = wrapper.find('[data-qa="hs-input-label"]');
    description = wrapper.find('[data-qa="hs-input-description"]');
    nativeInput = wrapper.find('input');
    nativeTextarea = wrapper.find('textarea');
  };

  const _mountWrapper = () => {
    wrapper = mount(HsInput, {
      propsData,
      attrs,
      slots,
      listeners,
      localVue: this.localVue,
    });
  };

  // Test Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  beforeEach(function () {
    propsData = basePropsData;
    attrs = baseAttrs;
    inputStub = sinon.stub();
    listeners = { input: inputStub };
    _mountWrapper();
  });

  // Test Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = baseAttrs;
    slots = {};
  });

  describe('Presentation Tests', function () {
    // Shared Examples
    const itBehavesLikeRendersDescription = (descriptionText) => {
      it('should render the description', function () { assert.isTrue(description.exists()); });
      it('should have description class', function () { assert.isTrue(description.classes().includes('d-description')); });
      it('should have a generated id', function () { assert.exists(description.attributes('id')); });
      it('should display the correct description', function () {
        assert.strictEqual(description.text(), descriptionText);
      });
      it('should have aria details defined on label', function () {
        assert.strictEqual(description.attributes('id'), label.attributes('aria-details'));
      });
    };

    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });

    describe('When type is not textarea', function () {
      // Test Setup
      beforeEach(function () {
        _setChildWrappers();
      });

      it('should render the native input', function () { assert.isTrue(nativeInput.exists()); });
      it('should have a type prop', function () { assert.strictEqual(nativeInput.attributes('type'), propsData.type); });
      it('should have a bound value prop', function () { assert.strictEqual(nativeInput.element.value, propsData.value); });
      it('should have input class', function () { assert.isTrue(nativeInput.classes().includes('d-input')); });
      it('should display the initial value prop', function () {
        assert.strictEqual(nativeInput.element.value, wrapper.vm.value);
      });
    });

    describe('When type is textarea', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ type: 'textarea' });
        _setChildWrappers();
      });

      it('should render the native textarea', function () { assert.isTrue(nativeTextarea.exists()); });
      it('should not have a type prop', function () { assert.isUndefined(nativeTextarea.attributes().type); });
      it('should not have a bound value prop', function () { assert.isUndefined(nativeTextarea.attributes().value); });
      it('should have textarea class', function () { assert.isTrue(nativeTextarea.classes().includes('d-textarea')); });
      it('should display the initial value prop', function () {
        assert.strictEqual(nativeTextarea.element.value, wrapper.vm.value);
      });
    });

    describe('When a description is not provided', function () {
      // Test Setup
      beforeEach(async function () { _setChildWrappers(); });

      it('should not render a description', function () { assert.isFalse(description.exists()); });
      it('should not have aria details defined on label', function () {
        assert.notExists(label.attributes('aria-details'));
      });
    });

    describe('When a description is provided via prop', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ description: 'Description' });
        _setChildWrappers();
      });

      itBehavesLikeRendersDescription('Description');
    });

    describe('When a description is provided via slot', function () {
      // Test Setup
      beforeEach(async function () {
        slots = { description: 'Description' };
        _mountWrapper();
        _setChildWrappers();
      });

      itBehavesLikeRendersDescription('Description');
    });

    describe('When no validation message(s) are provided', function () {
      it('should not render any validation messages', function () {
        assert.equal(wrapper.findAll('.d-validation-message').length, 0);
      });
      it('should not have an input state', function () { assert.isNull(wrapper.vm.inputState); });
    });

    describe('When validation message(s) are provided', function () {
      it('should display error messages', async function () {
        const errorMessage1 = 'error message 1';
        const errorMessage2 = 'error message 2';

        await wrapper.setProps({
          showMessages: false,
          messages: [
            errorMessage1,
            { message: errorMessage2, type: 'error' },
          ],
        });
        assert.equal(wrapper.findAll('.d-validation-message').length, 0);
        assert.equal(wrapper.vm.inputState, 'error', 'message type error present');

        await wrapper.setProps({ showMessages: true });

        const inputErrorMessages = wrapper.findAll('.d-validation-message--error');
        assert.equal(inputErrorMessages.length, 2);
        assert.equal(inputErrorMessages.at(0).text(), errorMessage1);
        assert.equal(inputErrorMessages.at(1).text(), errorMessage2);
      });

      it('should ignore all other message types if at least 1 error message is present', async function () {
        const strErrorMessage = 'string error message';

        await wrapper.setProps({
          messages: [
            strErrorMessage,
            { message: 'formatted warning message', type: 'warning' },
            { message: 'formatted success message', type: 'success' },
          ],
        });
        assert.equal(wrapper.vm.inputState, 'error', 'message type error present');

        const inputMessages = wrapper.findAll('.d-validation-message');
        const inputErrorMessages = wrapper.findAll('.d-validation-message--error');
        assert.equal(inputMessages.length, 1);
        assert.equal(inputErrorMessages.length, 1);
        assert.equal(inputErrorMessages.at(0).text(), strErrorMessage);
      });

      it('should display warning messages only if no error messages are present', async function () {
        const warningMessage = 'formatted warning message';

        await wrapper.setProps({
          messages: [
            { message: warningMessage, type: 'warning' },
            { message: 'formatted success message', type: 'success' },
          ],
        });
        assert.equal(wrapper.vm.inputState, 'warning', 'message type warning present');

        const inputMessages = wrapper.findAll('.d-validation-message');
        const inputWarningMessages = wrapper.findAll('.d-validation-message--warning');
        assert.equal(inputMessages.length, 1);
        assert.equal(inputWarningMessages.length, 1);
        assert.equal(inputWarningMessages.at(0).text(), warningMessage);
      });

      it('should display success messages only if no other types are present', async function () {
        const successMessage1 = 'formatted success message 1';
        const successMessage2 = 'formatted success message 2';

        await wrapper.setProps({
          messages: [
            { message: successMessage1, type: 'success' },
            { message: successMessage2, type: 'success' },
          ],
        });
        assert.equal(wrapper.vm.inputState, 'success', 'message type success present');

        const inputMessages = wrapper.findAll('.d-validation-message');
        const inputSuccessMessages = wrapper.findAll('.d-validation-message--success');
        assert.equal(inputMessages.length, 2);
        assert.equal(inputSuccessMessages.length, 2);
        assert.equal(inputSuccessMessages.at(0).text(), successMessage1);
        assert.equal(inputSuccessMessages.at(1).text(), successMessage2);
      });
    });
  });

  describe('Reactivity Tests', function () {
    describe('User Input Tests', function () {
      // Test Environment
      const userTextInputVal = 'new user input';
      const newValue = 'new value';

      // Shared Examples
      const itBehavesLikeHandlesUserInput = () => {
        it('should handle input value', function () {
          assert.equal(wrapper.emitted().input[0][0], userTextInputVal);
          assert.isTrue(inputStub.called);
        });
      };

      describe('When type is not a textarea', function () {
        // Test Setup
        beforeEach(function () {
          _setChildWrappers();
          nativeInput.setValue(userTextInputVal);
        });

        itBehavesLikeHandlesUserInput();

        describe('When a new value is provided', function () {
          // Test Setup
          beforeEach(async function () { await wrapper.setProps({ value: newValue }); });

          it('should update input value', function () { assert.equal(nativeInput.element.value, newValue); });
        });
      });

      describe('When type is a textarea', function () {
        // Test Setup
        beforeEach(async function () {
          await wrapper.setProps({ type: 'textarea' });
          _setChildWrappers();
          nativeTextarea.setValue(userTextInputVal);
        });

        itBehavesLikeHandlesUserInput();

        describe('When a new value is provided', function () {
          // Test Setup
          beforeEach(async function () { await wrapper.setProps({ value: newValue }); });

          it('should update input value', function () { assert.equal(nativeTextarea.element.value, newValue); });
        });
      });
    });
  });

  describe('Extendability Tests', function () {
    // Test Setup
    beforeEach(function () {
      _setChildWrappers();
    });

    it('should handle pass through props/attrs', async function () {
      // Validating all attrs from base-input get passed down to the native input.
      assert.include(nativeInput.attributes(), attrs);
      assert.isUndefined(nativeInput.attributes().disabled);

      await wrapper.setProps({ disabled: true });
      assert.equal(nativeInput.attributes().disabled, 'disabled');
    });
  });
});
