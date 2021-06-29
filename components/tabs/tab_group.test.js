import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtTabGroup from './tab_group.vue';
import { TAB_LIST_KIND_MODIFIERS, TAB_LIST_SIZE_MODIFIERS, TAB_LIST_IMPORTANCE_MODIFIERS } from './tabs_constants';

describe('Dialtone Vue Tab Group tests', function () {
  // Wrappers
  let wrapper;
  let tabList;

  const propsData = {
    label: 'area-label',
    selected: '',
    disabled: false,
    inverted: false,
    borderless: false,
    size: '',
  };

  const _setWrappers = () => {
    tabList = wrapper.find('[role="tablist"]');
  };

  const _mountWrapper = () => {
    wrapper = shallowMount(DtTabGroup, {
      localVue: createLocalVue(),
      propsData,
    });
    _setWrappers();
  };

  describe('Presentation Tests', function () {
    // Setup
    before(function () {
      _mountWrapper();
    });

    it('should render the component', function () {
      assert.exists(wrapper, 'wrapper exists');
    });
    it('should render correct attributes', function () {
      assert.strictEqual(tabList.attributes('role'), 'tablist');
      assert.strictEqual(tabList.attributes('aria-label'), propsData.label);
    });
  });
  describe('Interactivity Tests', function () {
    describe('Correct size modifiers', function () {
      beforeEach(function () {
        propsData.size = 'sm';
        _mountWrapper();
      });
      it('should be selected correct class modifiers', function () {
        assert.isTrue(tabList.classes(TAB_LIST_SIZE_MODIFIERS.sm));
      });
    });

    describe('Correct kind modifiers', function () {
      beforeEach(function () {
        propsData.inverted = true;
        _mountWrapper();
      });
      it('should be selected correct class modifiers', function () {
        assert.isTrue(tabList.classes(TAB_LIST_KIND_MODIFIERS.inverted));
      });
    });

    describe('Correct importance modifiers', function () {
      beforeEach(function () {
        propsData.borderless = true;
        _mountWrapper();
      });
      it('should be selected correct class modifiers', function () {
        assert.isTrue(tabList.classes(TAB_LIST_IMPORTANCE_MODIFIERS.borderless));
      });
    });
  });
});
