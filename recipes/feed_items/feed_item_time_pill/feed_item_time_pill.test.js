import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtRecipeFeedItemTimePill from './feed_item_time_pill.vue';

// Constants
const today = new Date();
const basePropsData = {
  dateTime: today.toISOString().split('T')[0],
  dateTimeDisplay: 'Today',
};

describe('DtRecipeFeedItemTimePill Tests', function () {
  // Wrappers
  let wrapper;
  let timePill;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    timePill = wrapper.find('[data-qa="dt-feed-item-time-pill"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtRecipeFeedItemTimePill, {
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
    describe('When some description of the current environment', function () {
      it('Should display date time display', function () {
        assert.strictEqual(timePill.text(), basePropsData.dateTimeDisplay);
      });
    });
  });

  describe('Accessibility Tests', function () {
    describe('When some description of the current environment', function () {
      it('Should have a datetime attribute', function () {
        assert.strictEqual(timePill.attributes('datetime'), basePropsData.dateTime);
      });
    });
  });
});
