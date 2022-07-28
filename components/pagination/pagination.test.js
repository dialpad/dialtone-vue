import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtPagination from './pagination.vue';

// Constants
const basePropsData = {
  totalPages: 5,
};

describe('DtPagination Tests', function () {
  // Wrappers
  let wrapper;
  let prev;
  let next;

  // Environment
  let propsData = basePropsData;
  let slots = {};
  let listeners;

  // Helpers
  const _setChildWrappers = () => {
    prev = wrapper.find('[data-qa="dt-pagination-prev"]');
    next = wrapper.find('[data-qa="dt-pagination-next"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtPagination, {
      propsData,
      slots,
      listeners,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

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
      beforeEach(function () {
        _setWrappers();
      });
      it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
      it('should render prev button', function () { assert.exists(prev, 'previous button exists'); });
      it('should render next button', function () { assert.exists(next, 'next button exists'); });
      it('prev button should have aria-label', function () {
        assert.equal(prev.attributes('aria-label'), 'previous');
      });
      it('next button should have aria-label', function () {
        assert.equal(next.attributes('aria-label'), 'next');
      });
    });
  });

  describe('Interactivity Tests', function () {
    beforeEach(function () {
      _setWrappers();
    });

    describe('When next button is clicked', function () {
      beforeEach(async function () {
        await next.trigger('click');
      });
      it('should emit change event', function () {
        assert.property(wrapper.emitted(), 'change');
      });
    });
  });
});
