import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtTabPanel from './tab_panel.vue';

describe('Dialtone Vue Tab Panel tests', function () {
  // Wrappers
  let wrapper;
  let tabPanel;
  const defaultSlot = 'Panel Slot';

  const slots = { default: defaultSlot };
  const groupContext = {
    disabled: false,
    selected: '',
  };
  const propsData = {
    id: '1',
    tabId: '2',
    hidden: false,
    tabPanelClass: '',
  };
  const _setWrappers = () => {
    tabPanel = wrapper.find('[data-qa="dt-tab-panel"]');
  };

  const _mountWrapper = () => {
    wrapper = shallowMount(DtTabPanel, {
      localVue: createLocalVue(),
      slots,
      propsData,
      provide: {
        groupContext,
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
    it('should render the slot', function () {
      assert.strictEqual(tabPanel.text(), defaultSlot);
    });

    describe('Default areas', function () {
      it('should be default aria-hidden', function () {
        assert.strictEqual(tabPanel.attributes('aria-hidden'), 'true');
      });
      it('should be default aria-labelledby', function () {
        assert.strictEqual(tabPanel.attributes('aria-labelledby'), `dt-tab-${propsData.tabId}`);
      });
      it('should be set valid role', function () {
        assert.strictEqual(tabPanel.attributes('role'), 'tabpanel');
      });
    });

    describe('Attributes', function () {
      it('should be valid id', function () {
        assert.strictEqual(tabPanel.attributes('id'), `dt-panel-${propsData.id}`);
      });
      it('should be valid tabindex', function () {
        assert.strictEqual(tabPanel.attributes('tabindex'), '0');
      });
    });
  });

  describe('Interactivity Tests', function () {
    describe('Selected state', function () {
      beforeEach(function () {
        groupContext.selected = propsData.id;
        _mountWrapper();
      });
      it('should be default slot', function () {
        assert.strictEqual(tabPanel.text(), defaultSlot);
        assert.strictEqual(tabPanel.attributes('aria-hidden'), 'false');
      });
    });

    describe('Unselected state', function () {
      beforeEach(function () {
        groupContext.selected = '';
        _mountWrapper();
      });
      it('should be hidden', function () {
        assert.strictEqual(tabPanel.attributes('aria-hidden'), 'true');
      });
    });

    describe('Hidden state', function () {
      beforeEach(function () {
        groupContext.selected = propsData.id;
        _mountWrapper();
      });

      describe('Hidden by prop', function () {
        before(function () {
          propsData.hidden = true;
        });
        after(function () {
          propsData.hidden = false;
        });
        it('should be hidden', function () {
          assert.strictEqual(tabPanel.attributes('aria-hidden'), 'true');
        });
      });
    });
  });

  describe('Accessibility Tests', function () {
    describe('Unselected aria-hidden', function () {
      beforeEach(function () {
        groupContext.selected = propsData.id;
        _mountWrapper();
      });
      it('should be equal false', function () {
        assert.strictEqual(tabPanel.attributes('aria-hidden'), 'false');
      });
    });

    describe('Selected aria-hidden', function () {
      beforeEach(function () {
        groupContext.selected = '';
        _mountWrapper();
      });
      it('should be set default aria-selected', function () {
        assert.strictEqual(tabPanel.attributes('aria-hidden'), 'true');
      });
    });
  });
});
