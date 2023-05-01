import { createLocalVue, mount } from '@vue/test-utils';
import DtFeedItemRow from './feed_item_row';

const basePropsData = {
  displayName: 'Dwight Schrute',
  time: '4:54 PM',
  shortTime: '4:54',
};

describe('DtFeedItemRow tests', () => {
  let testContext;

  beforeAll(() => {
    testContext = {};
  });

  // Wrappers
  let wrapper;

  // child wrappers
  let headerWrapper;
  let avatarImgWrapper;
  let leftTimeWrapper;
  let contentWrapper;
  let reactionsWrapper;
  let menuWrapper;

  // Test Environment
  let propsData = basePropsData;
  let slots;
  let scopedSlots;
  let listeners;
  let provide;
  let attrs;

  // Helpers
  const _setChildWrappers = () => {
    avatarImgWrapper = wrapper.find('[data-qa="feed-item-row-avatar-img"]');
    headerWrapper = wrapper.find('[data-qa="feed-item-row-header"]');
    leftTimeWrapper = wrapper.find('[data-qa="feed-item-row-left-time"]');
    contentWrapper = wrapper.find('[data-qa="feed-item-row-content"]');
    reactionsWrapper = wrapper.find('[data-qa="feed-item-row-reactions"]');
    menuWrapper = wrapper.find('[data-qa="feed-item-row-menu"]');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtFeedItemRow, {
      propsData,
      attrs,
      slots,
      scopedSlots,
      listeners,
      provide,
      localVue: testContext.localVue,
    });
  };

  // Test Setup
  beforeAll(() => {
    testContext.localVue = createLocalVue();
  });

  beforeEach(() => {
    _mountWrapper();
  });

  // Test Teardown
  afterEach(() => {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    scopedSlots = null;
    provide = {};
    wrapper.destroy();
  });

  describe('Presentation Tests', () => {
    it(
      'should render the component',
      () => { expect(wrapper.exists()).toBe(true); },
    );

    describe('When showHeader is true', () => {
      beforeEach(() => {
        propsData = {
          ...basePropsData,
          showHeader: true,
        };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render avatar and not render left time', () => {
        expect(headerWrapper.exists()).toBe(true);
        expect(leftTimeWrapper.exists()).toBe(false);
      });

      describe('showHeader is toggled to false, left time', () => {
        beforeEach(() => {
          propsData = {
            ...basePropsData,
            showHeader: false,
          };
          _mountWrapper();
          _setChildWrappers();
        });

        it('should not be visible when isActive is false', () => {
          expect(leftTimeWrapper.isVisible()).toBe(false);
        });

        it('should be visible and rendered when isActive is true', async () => {
          await wrapper.setProps({ isActive: true });
          expect(leftTimeWrapper.exists()).toBe(true);
          expect(leftTimeWrapper.isVisible()).toBe(true);
        });
      });
    });

    describe('When avatar url is provided', () => {
      beforeEach(() => {
        propsData = {
          ...basePropsData,
          showHeader: true,
          avatarImageUrl: 'https://i1.sndcdn.com/avatars-000181324408-652e57-t500x500.jpg',
        };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should display header avatar img', () => {
        expect(avatarImgWrapper.exists()).toBe(true);
        expect(avatarImgWrapper.find('img').exists()).toBe(true);
      });
    });

    describe('When default slot content is provided', () => {
      beforeEach(() => {
        slots = {
          default: 'Test default content',
        };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render default content in the slot provided', () => {
        expect(contentWrapper.exists()).toBe(true);
      });
    });

    describe('When reactions slot is provided', () => {
      beforeEach(() => {
        slots = {
          reactions: 'reactions',
        };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render reactions slot', () => {
        expect(reactionsWrapper.exists()).toBe(true);
      });
    });

    describe('When menu slot is provided', () => {
      beforeEach(() => {
        propsData = {
          ...basePropsData,
          isActive: false,
        };
        scopedSlots = {
          menu: 'menu',
        };

        _mountWrapper();
        _setChildWrappers();
      });

      it('menu should not be visible when isActive is false', () => {
        expect(menuWrapper.isVisible()).toBe(false);
      });

      it('menu should be visible isActive is true', async () => {
        await wrapper.setProps({ isActive: true });
        expect(wrapper.exists()).toBe(true);
      });
    });
  });

  describe('Interactivity Tests', () => {
    // Test Setup
    beforeEach(async () => {
      propsData = {
        ...basePropsData,
        isActive: false,
      };
      _mountWrapper();
      _setChildWrappers();
    });

    describe('When isActive is false', () => {
      it('should not add highlight background to the feed row', () => {
        expect(wrapper.classes('d-bgc-secondary-opaque')).toBe(false);
      });

      it('should add highlight background to the feed row when isActive is toggled', async () => {
        await wrapper.setProps({ isActive: true });
        expect(wrapper.classes('d-bgc-secondary-opaque')).toBe(true);
      });
    });
  });
});
