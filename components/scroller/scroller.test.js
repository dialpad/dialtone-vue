import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import DtScroller from './scroller.vue';

// Constants
// const baseSlotsData = {
//   default: `<div data-qa="default-content">Test 1</div> <div>Test 2</div>`,
// };

describe('DtStack Tests', function () {
  // Wrappers
  let wrapper;

  // let defaultContent;

  // Environment
  // let slots = baseSlotsData;

  // Helpers
  const _setChildWrappers = () => {
    // defaultContent = wrapper.find('[data-qa="default-content"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtScroller, {
      // slots,
    });
    _setChildWrappers();
  };

  // Teardown
  afterEach(function () {
    // slots = baseSlotsData;
  });

  beforeEach(function () { _setWrappers(); });

  describe('Presentation Tests', function () {
    describe('When stack renders', function () {
      it('scroller exist', function () {
        assert.isTrue(wrapper.exists());
      });

      // it('scroller content should render correctly', function () {
      //   assert.isTrue(defaultContent.exists());
      // });
    });
  });

  describe('Interactivity Tests', function () {
    describe('Should emit', function () {
      it('`scroll-start` event when scroll reach top of the component', function () {

      });
      it('`scroll-end` event when scroll reach top of the component', function () {

      });
    });

    describe('On `scrollToItem` event', function () {
      it('should scroll to the item', function () {

      });
    });
  });
});
