import { assert } from 'chai';
import sinon from 'sinon';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtTab from './tab.vue';
import { TAB_IMPORTANCE_MODIFIERS } from './tabs_constants.js';

describe('Dialtone Vue Tab tests', function () {
  // Wrappers
  let wrapper;
  let tab;
  const panelId = '2';
  const label = 'area-label';
  const id = '1';
  const defaultSlot = 'Message Slot';

  const slots = { default: defaultSlot };
  const groupContext = {
    disabled: false,
    selected: '',
  };
  const propsData = {
    id,
    panelId,
    label,
    selected: false,
    disabled: false,
    tabClass: '',
  };
  const _setWrappers = () => {
    tab = wrapper.find('[data-qa="dt-tab"]');
  };

  const _mountWrapper = () => {
    wrapper = shallowMount(DtTab, {
      localVue: createLocalVue(),
      slots,
      propsData,
      provide: {
        setFocus: sinon.spy(),
        groupContext,
        changeContentPanel: sinon.spy(),
      },
    });
    _setWrappers();
  };

  describe('Presentation Tests', function () {
    // Setup
    _mountWrapper();

    it('should render the component', function () {
      assert.exists(wrapper, 'wrapper exists');
    });
    it('should be set default classes', function () {
      assert.isTrue(tab.classes('d-tab'));
    });
    it('should render the slot', function () {
      assert.strictEqual(tab.text(), defaultSlot);
    });

    describe('Default areas', function () {
      it('should be set default aria-selected', function () {
        assert.strictEqual(tab.attributes('aria-selected'), 'false');
      });
      it('should be set default aria-controls', function () {
        assert.strictEqual(tab.attributes('aria-controls'), `dt-panel-${panelId}`);
      });
      it('should be set default aria-label', function () {
        assert.strictEqual(tab.attributes('aria-label'), label);
      });
      it('should be set valid role', function () {
        assert.strictEqual(tab.attributes('role'), 'tab');
      });
    });

    describe('Attributes', function () {
      it('should be set valid id', function () {
        assert.strictEqual(tab.attributes('id'), `dt-tab-${id}`);
      });
      it('should be set valid tabindex', function () {
        assert.strictEqual(tab.attributes('tabindex'), '-1');
      });
      it('should be set valid disabled', function () {
        assert.strictEqual(tab.attributes('disabled'), undefined);
      });
    });
  });

  describe('Interactivity Tests', function () {
    describe('Selected state', function () {
      beforeEach(function () {
        groupContext.selected = panelId;
        _mountWrapper();
      });
      it('should be set selected class', function () {
        assert.isTrue(tab.classes(TAB_IMPORTANCE_MODIFIERS.selected));
      });
      it('should be set valid tabindex', function () {
        assert.strictEqual(tab.attributes('tabindex'), '0');
      });
      it('should be set default aria-selected', function () {
        assert.strictEqual(tab.attributes('aria-selected'), 'true');
      });
    });

    describe('Unselected state', function () {
      beforeEach(function () {
        groupContext.selected = '';
        _mountWrapper();
      });
      it('should be set selected class', function () {
        assert.isFalse(tab.classes(TAB_IMPORTANCE_MODIFIERS.selected));
      });
      it('should be set valid tabindex', function () {
        assert.strictEqual(tab.attributes('tabindex'), '-1');
      });
      it('should be set default aria-selected', function () {
        assert.strictEqual(tab.attributes('aria-selected'), 'false');
      });
    });

    describe('Disabled state', function () {
      beforeEach(function () {
        _mountWrapper();
      });
      describe('disabled by inject', function () {
        before(function () {
          groupContext.disabled = true;
        });
        after(function () {
          groupContext.disabled = false;
        });
        it('should be disabled', function () {
          assert.strictEqual(tab.attributes('disabled'), 'true');
        });
      });

      describe('disabled by prop', function () {
        before(function () {
          propsData.disabled = true;
        });
        after(function () {
          propsData.disabled = false;
        });
        it('should be disabled', function () {
          assert.strictEqual(tab.attributes('disabled'), 'true');
        });
      });
    });
  });

  describe('Accessibility Tests', function () {
    describe('Selected aria-selected', function () {
      beforeEach(function () {
        groupContext.selected = panelId;
        _mountWrapper();
      });
      it('should be set default aria-selected', function () {
        assert.strictEqual(tab.attributes('aria-selected'), 'true');
      });
    });

    describe('Unselected aria-selected', function () {
      beforeEach(function () {
        groupContext.selected = '';
        _mountWrapper();
      });
      it('should be set default aria-selected', function () {
        assert.strictEqual(tab.attributes('aria-selected'), 'false');
      });
    });
  });
});
