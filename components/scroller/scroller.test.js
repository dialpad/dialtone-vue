import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtScroller from './scroller.vue';

// Constants
const items = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));

const baseSlotsData = {
  default: ` <div class="user">
          {{ item.name }}
        </div>`,
};

const basePropsData = {
  items,
  itemSize: 30,
  scrollerHeight: 60,
  scrollerWidth: 60,
};

describe('DtScroller Tests', function () {
  // Wrappers
  let wrapper;

  let defaultContent;

  // Environment
  let propsData = basePropsData;
  let slots = baseSlotsData;

  // Helpers
  const _setChildWrappers = () => {
    defaultContent = wrapper.find('[data-qa="dt-scroller"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtScroller, {
      propsData,
      slots,
    });
    _setChildWrappers();
  };

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    slots = baseSlotsData;
  });

  beforeEach(function () { _setWrappers(); });

  describe('Presentation Tests', function () {
    describe('When scroller renders', function () {
      it('scroller exist', function () {
        assert.isTrue(wrapper.exists());
      });

      it('scroller content should render correctly', function () {
        assert.isTrue(defaultContent.exists());
      });
    });
  });

  describe('Interactivity Tests', function () {
    describe('Should emit', function () {
      it('`scroll-start` event immediately the component renders', async function () {
        assert.isTrue(!!wrapper.emitted()['scroll-start']);
      });
      it('`scroll-end` event when scroll reach the bottom of the component', async function () {
        defaultContent.element.scrollTop = 500;
        await wrapper.trigger('scroll');
        assert.isTrue(!!wrapper.emitted()['scroll-end']);
      });
    });

    describe('On `scrollToItem` event', function () {
      it('should scroll to the item', function () {

      });
    });
  });
});
