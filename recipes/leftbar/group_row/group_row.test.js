import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtRecipeGroupRow from './group_row.vue';

// Constants
const basePropsData = {
  groupCount: 2,
  names: 'Jaqueline Nackos, Lori Smith',
  avatarInitials: 'JN',
  avatarSrc: 'person.png',
};

describe('DtRecipeGroupRow Tests', function () {
  // Wrappers
  let wrapper;
  let description;
  let unreadBadge;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    description = wrapper.find('.dt-leftbar-row__description');
    unreadBadge = wrapper.find('[data-qa="dt-leftbar-row-unread-badge"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtRecipeGroupRow, {
      propsData,
      attrs,
      slots,
      provide,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  beforeEach(function () {
    propsData = basePropsData;
    slots = {};
    _setWrappers();
  });

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });
  after(function () {});

  describe('Presentation Tests', function () {
    describe('When the group row renders', function () {
      // Test Setup
      beforeEach(function () { _setWrappers(); });

      it('should exist', function () { assert.exists(wrapper); });

      it('should render the description', function () {
        assert.strictEqual(description.text(), basePropsData.names);
      });
    });

    describe('When a unreadCount is provided', function () {
      // Test Environment
      const unreadCount = '25';
      const hasUnreads = true;

      // Test Setup
      beforeEach(function () {
        propsData = { ...propsData, hasUnreads, unreadCount };
        _setWrappers();
      });

      it('should render the unreadCount', function () {
        assert.strictEqual(unreadBadge.text(), unreadCount);
      });
    });

    describe('When selected is provided', function () {
      // Test Setup
      beforeEach(function () {
        propsData = { ...propsData, selected: true };
        _setWrappers();
      });

      it('should render the selected group row', function () {
        assert.isTrue(wrapper.classes().includes('dt-leftbar-row--selected'));
      });
    });
  });
});