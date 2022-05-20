import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtChip from './chip.vue';

// Constants
const basePropsData = {
  closeButtonProps: {
    ariaLabel: 'close',
  },
};

describe('DtChip Tests', function () {
  // Wrappers
  let wrapper;
  let chip;
  let icon;
  let label;
  let remove;

  // Environment
  let propsData = basePropsData;
  let slots = {};

  // Helpers
  const _setChildWrappers = () => {
    chip = wrapper.find('[data-qa="dt-chip"]');
    icon = wrapper.find('[data-qa="dt-chip-icon"]');
    label = wrapper.find('[data-qa="dt-chip-label"]');
    remove = wrapper.find('[data-qa="dt-chip-close"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtChip, {
      propsData,
      slots,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  // // Shared Examples
  // const itBehavesLikeSomeExpectation = () => {
  //   it('should be equal', function () { assert.strictEqual(1, 1); });
  // };

  // Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    slots = {};
  });

  describe('Presentation Tests', function () {
    describe('When rendered with default props', function () {
      _setWrappers();
      it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
      it('should render chip', function () { assert.exists(chip, 'chip exists'); });
      it('should render remove button', function () { assert.exists(remove, 'remove button exists'); });
      it('should not render label', function () { assert.isFalse(label.exists()); });
      it('should not render icon', function () { assert.isFalse(icon.exists()); });
    });
  });

  describe('Accessibility Tests', function () {
    /*
     * Test(s) to ensure that the component is accessible
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Interactivity Tests', function () {
    /*
     * Test(s) to ensure that the component correctly handles user input
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Validation Tests', function () {
    /*
     * Test(s) to ensure that custom validators are working as expected
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Extendability Tests', function () {
    /*
     * Test(s) to ensure that the component can be correctly extended
     */

    describe('When some description of the current environment', function () {});
  });
});
