import { createLocalVue, shallowMount } from '@vue/test-utils';
import { assert } from 'chai';
import DtToggle from './toggle.vue';

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
  });
});
