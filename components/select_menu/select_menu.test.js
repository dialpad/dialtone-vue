import { assert } from 'chai';
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import {
  LABEL_SIZE_MODIFIERS,
  DESCRIPTION_SIZE_MODIFIERS,
} from '../constants';
import {
  SELECT_SIZE_MODIFIERS,
  SELECT_STATE_MODIFIERS,
} from './select_menu_constants';
import DtSelectMenu from './select_menu.vue';

// Constants
const LABEL = 'Label';
const DESCRIPTION = 'Description';
const OPTIONS = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];

const basePropsData = {
  label: LABEL,
  options: OPTIONS,
};
const baseAttrs = {
  name: 'select-menu',
};

describe('DtSelectMenu Tests', function () {
  // Wrappers
  let wrapper;
  let selectWrapper;
  let select;
  let label;
  let description;
  let messages;

  // Environment
  let propsData = basePropsData;
  let attrs = baseAttrs;
  let slots = {};

  // Helpers
  const _setChildWrappers = () => {
    select = wrapper.find('[data-qa="dt-select"]');
    selectWrapper = wrapper.find('[data-qa="dt-select-wrapper"]');
    label = wrapper.find('[data-qa="dt-select-label"]');
    description = wrapper.find('[data-qa="dt-select-description"]');
    messages = wrapper.find('[data-qa="dt-select-messages"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtSelectMenu, {
      propsData,
      attrs,
      slots,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  const _mountWrappers = () => {
    wrapper = mount(DtSelectMenu, {
      propsData,
      attrs,
      slots,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  // Shared Examples

  // Setup
  before(function () {
    this.localVue = createLocalVue();
  });
  beforeEach(function () {});

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = baseAttrs;
    slots = {};
  });
  after(function () {});

  describe.only('Presentation Tests', function () {
    describe('When rendered with required content', function () {
      // Test Setup
      beforeEach(function () { _setWrappers(); });

      it('should render the provided label', function () { assert.strictEqual(label.text(), LABEL); });
      it('should have no size variant classes on the label', function () {
        assert.strictEqual(label.classes().length, 1);
      });
      it('should not render a description', function () { assert.isFalse(description.exists()); });
      it('should render the select menu', function () { assert.isTrue(select.exists()); });
      it('should have no size variant classes on select menu', function () {
        assert.strictEqual(selectWrapper.classes().length, 1);
      });
      it('should have no kind variant classes on select menu input', function () {
        assert.strictEqual(select.classes().length, 1);
      });
      it('should render the select menu options', function () {
        OPTIONS.forEach(option => {
          assert.exists(select.find(`[value="${option.value}"]`));
        });
      });
      it('should not render any validation messages', function () {
        assert.strictEqual(messages?.props('validationMessages').length, 0);
      });
    });

    describe('When a label is provided via slot', function () {
      // Test Environment
      const slottedLabel = 'Slotted Label';

      // Test Setup
      beforeEach(function () {
        slots = {
          label: slottedLabel,
        };
        _setWrappers();
      });

      it('should render the slotted label', function () { assert.strictEqual(label.text(), slottedLabel); });
    });

    describe('When a description is provided via prop', function () {
      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
          description: DESCRIPTION,
        };
        _setWrappers();
      });

      it('should render the provided description', function () {
        assert.strictEqual(description.text(), DESCRIPTION);
      });
      it('should have no size variant classes on the description', function () {
        assert.strictEqual(description.classes().length, 1);
      });
    });

    describe('When a description is provided via slot', function () {
      // Test Environment
      const slottedDescription = 'Slotted Description';

      // Test Setup
      beforeEach(function () {
        slots = {
          description: slottedDescription,
        };
        _setWrappers();
      });

      it('should render the slotted description', function () {
        assert.strictEqual(description.text(), slottedDescription);
      });
    });

    describe('When options are provided via slot', function () {
      // Test Environment
      const slottedOptions = '<option value="1">Option 1</option><option value="2">Option 2</option>';

      // Test Setup
      beforeEach(function () {
        slots = {
          default: slottedOptions,
        };
        _setWrappers();
      });

      it('should render the select menu options', function () {
        assert.exists(select.findAll('option').length, 2);
      });
    });

    describe('When a size is provided', function () {
      // Test Environment
      const size = 'lg';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
          description: DESCRIPTION,
          size,
        };
        _setWrappers();
      });

      it('should have size variant class on the label', function () {
        assert.isTrue(label.classes(LABEL_SIZE_MODIFIERS[size]));
      });
      it('should have size variant class on the description', function () {
        assert.isTrue(description.classes(DESCRIPTION_SIZE_MODIFIERS[size]));
      });
      it('should have size variant class on select menu', function () {
        assert.isTrue(selectWrapper.classes(SELECT_SIZE_MODIFIERS[size]));
      });
    });

    describe('When validation messages are provided', function () {
      // Test Environment
      const message = 'Validation Message';

      // Test Setup
      beforeEach(function () {
        propsData = {
          ...basePropsData,
          messages: [message],
        };
      });

      // Shared Examples
      const itBehavesLikeHasSelectInputStateClass = () => {
        it('should be equal', function () { assert.isTrue(select.classes(SELECT_STATE_MODIFIERS.error)); });
      };

      describe('When validation messages are shown', function () {
        // Test Setup
        beforeEach(function () {
          _mountWrappers();
        });

        itBehavesLikeHasSelectInputStateClass();
        it('should render validation message', function () {
          assert.strictEqual(messages?.findAll('[data-qa="validation-message"]').length, 1);
        });
      });

      describe('When validation messages are hidden', function () {
        // Test Setup
        beforeEach(function () {
          propsData.showMessages = false;
          _mountWrappers();
        });

        itBehavesLikeHasSelectInputStateClass();
        it('should not render any validation messages', function () {
          assert.isFalse(messages.exists());
        });
      });
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
