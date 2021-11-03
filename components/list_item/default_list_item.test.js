import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import DtDefaultListItem from './default_list_item.vue';

describe('Dialtone Vue DefaultListItem tests', function () {
  // Wrappers
  let wrapper;
  let leftWrapper;
  let rightWrapper;
  let subtitleWrapper;
  let bottomWrapper;

  // Helpers
  const _setChildWrappers = () => {
    leftWrapper = wrapper.find('[data-qa="dt-default-list-item-left-wrapper"]');
    rightWrapper = wrapper.find('[data-qa="dt-default-list-item-right-wrapper"]');
    subtitleWrapper = wrapper.find('[data-qa="dt-default-list-item-subtitle-wrapper"]');
    bottomWrapper = wrapper.find('[data-qa="dt-default-list-item-bottom-wrapper"]');
  };

  // Test Environment
  let slots;

  const _mountWrapper = () => {
    wrapper = mount(DtDefaultListItem, {
      slots,
    });
  };

  // Test Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  beforeEach(function () {
    _mountWrapper();
  });

  // Test Teardown
  afterEach(function () {
    slots = {};
  });

  describe('Presentation Tests', function () {
    describe('When left content is provided', function () {
      // Test Setup
      beforeEach(async function () {
        slots = { left: 'left' };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render the slot wrapper', function () { assert.isTrue(leftWrapper.exists()); });
      it('should render the provided content', function () { assert.isTrue(wrapper.text().includes('left')); });
    });

    describe('When right content is provided', function () {
      // Test Setup
      beforeEach(async function () {
        slots = { right: 'right' };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render the slot wrapper', function () { assert.isTrue(rightWrapper.exists()); });
      it('should render the provided content', function () { assert.isTrue(wrapper.text().includes('right')); });
    });

    describe('When subtitle content is provided', function () {
      // Test Setup
      beforeEach(async function () {
        slots = { subtitle: 'subtitle' };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render the slot wrapper', function () { assert.isTrue(subtitleWrapper.exists()); });
      it('should render the provided content', function () { assert.isTrue(wrapper.text().includes('subtitle')); });
    });

    describe('When bottom content is provided', function () {
      // Test Setup
      beforeEach(async function () {
        slots = { bottom: 'bottom' };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render the slot wrapper', function () { assert.isTrue(bottomWrapper.exists()); });
      it('should render the provided content', function () { assert.isTrue(wrapper.text().includes('bottom')); });
    });
  });
});
