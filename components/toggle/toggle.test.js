import { createLocalVue, shallowMount } from '@vue/test-utils';
import { assert } from 'chai';
import DtToggle from './toggle.vue';
import sinon from 'sinon';
import Vue from 'vue';
import {
  itBehavesLikeDoesNotRaiseAnyVueWarnings,
  itBehavesLikeRaisesSingleVueWarning,
} from '../../tests/shared_examples/validation';

// Constants
const basePropsData = {
  label: 'My Toggle Label',
};

describe('Toggle Tests', function () {
  // Wrappers
  let wrapper;
  let button;
  let label;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};
  let listeners = {};

  // Helpers
  const _setChildWrappers = () => {
    button = wrapper.find('button');
    label = wrapper.find('[data-qa="toggle-label"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtToggle, {
      propsData,
      attrs,
      slots,
      provide,
      listeners,
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
    provide = {};
    listeners = {};
  });
  after(function () {});

  describe('Presentation Tests', function () {
    describe('Common toggle button attrs', function () {
      // Test Setup
      beforeEach(function () {
        _setWrappers();
      });
      it('should exist', function () { assert.isTrue(wrapper.exists()); });
      it('should have d-toggle class', function () {
        assert.isTrue(button.classes().includes('d-toggle'));
      });
      it('should have type button', function () { assert.strictEqual(button.attributes('type'), 'button'); });
      it('should have role switch', function () { assert.strictEqual(button.attributes('role'), 'switch'); });

      describe('disabled behaviour', function () {
        it('should set correct disabled attributes when disabled prop is false', function () {
          assert.strictEqual(button.attributes('aria-disabled'), 'false');
          assert.isUndefined(button.attributes().disabled);
          assert.isFalse(button.classes().includes('d-toggle--disabled'));
        });

        it('should set correct disabled attributes when disabled prop is true', async function () {
          await wrapper.setProps({ disabled: true });
          assert.strictEqual(button.attributes('aria-disabled'), 'true');
          assert.equal(button.attributes().disabled, 'disabled');
          assert.isTrue(button.classes().includes('d-toggle--disabled'));
        });
      });
    });
    describe('Unchecked Toggle', function () {
      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
          checked: false,
        };
        _setWrappers();
      });

      it('should exist', function () { assert.isTrue(wrapper.exists()); });

      describe('checked behaviour', function () {
        it('should set correct checked attributes when checked prop is false', function () {
          assert.strictEqual(button.attributes('aria-checked'), 'false');
          assert.isFalse(button.classes().includes('d-toggle--checked'));
        });
      });

      describe('label behaviour', function () {
        it('should exist', function () { assert.isTrue(label.exists()); });
        it('should match provided label prop', function () { assert.strictEqual(label.text(), propsData.label); });
      });
    });

    describe('Checked Toggle', function () {
      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
          checked: true,
          disabled: false,
        };
        _setWrappers();
      });

      it('should exist', function () { assert.isTrue(wrapper.exists()); });

      describe('checked behaviour', function () {
        it('should set correct checked attributes when checked prop is true', function () {
          assert.strictEqual(button.attributes('aria-checked'), 'true');
          assert.isTrue(button.classes().includes('d-toggle--checked'));
        });
      });

      describe('label behaviour', function () {
        it('should exist', function () { assert.isTrue(label.exists()); });
        it('should match provided label prop', function () { assert.strictEqual(label.text(), propsData.label); });
      });
    });

    describe('Accessibility Tests', function () {
      describe('aria-label validations', function () {
        const warningMessage = 'You must provide an aria-label when there is no label passed';

        before(function () {
          Vue.config.silent = true;
          sinon.spy(Vue.util, 'warn');
        });

        after(function () {
          Vue.util.warn.restore();
          Vue.config.silent = false;
        });

        it('should not throw a Vue error if a label is provided', async function () {
          await wrapper.setProps({ label: 'my label' });
          itBehavesLikeDoesNotRaiseAnyVueWarnings();
        });

        it('should not throw a Vue error if a label is not provided, but an aria-label attr exists',
          async function () {
            await wrapper.setProps({ ariaLabel: 'my label', label: undefined });
            itBehavesLikeDoesNotRaiseAnyVueWarnings();
          });

        describe('When a label/ariaLabel is not provided, but a default slot exists', function () {
          // Test Setup
          beforeEach(function () {
            propsData = { ...basePropsData, label: undefined, ariaLabel: undefined };
            slots = { default: '<div> Slot Label </div>' };
            _setWrappers();
          });
          itBehavesLikeDoesNotRaiseAnyVueWarnings();
        });

        describe('When neither label/ariaLabel nor a default slot exists', function () {
          beforeEach(function () {
            propsData = { ...basePropsData, label: undefined, ariaLabel: undefined };
            slots = { };
            _setWrappers();
          });

          itBehavesLikeRaisesSingleVueWarning(warningMessage);
        });
      });
    });
  });
});
