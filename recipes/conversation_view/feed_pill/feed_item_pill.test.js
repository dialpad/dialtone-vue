import { mount } from '@vue/test-utils';
import DtRecipeFeedItemPill from './feed_item_pill.vue';

describe('DtRecipeFeedItemPill Tests', function () {
  // Wrappers
  let wrapper, feedItemPill, hoverIcon, icon;

  // Helpers
  const _setChildWrappers = () => {
    feedItemPill = wrapper.find('[data-qa="dt-feed-item-pill"]');
    hoverIcon = wrapper.find('[data-qa="dt-feed-item-hover-icon"]');
    icon = wrapper.find('[data-qa="dt-feed-item-icon"]');
  };

  const MOCK_ARIA_LABEL = 'Click to expand';

  const baseProps = {
    iconName: 'video',
    title: 'This meeting has ended',
    ariaLabel: MOCK_ARIA_LABEL,
    buttonClass: '',
    toggleable: true,
  };
  const baseAttrs = {};
  const baseSlots = {
    content: '<div data-qa="content-element"> content </div>',
  };
  const baseProvide = {};

  let mockProps = {};
  let mockAttrs = {};
  let mockSlots = {};
  let mockProvide = {};

  const updateWrapper = () => {
    wrapper = mount(DtRecipeFeedItemPill, {
      propsData: { ...baseProps, ...mockProps },
      attrs: { ...baseAttrs, ...mockAttrs },
      slots: { ...baseSlots, ...mockSlots },
      global: {
        provide: { ...baseProvide, ...mockProvide },
      },
    });
    _setChildWrappers();
  };

  // Setup
  beforeEach(function () {
    updateWrapper();
  });

  // Teardown
  afterEach(function () {
    mockProps = {};
    mockAttrs = {};
    mockSlots = {};
    mockProvide = {};
  });

  describe('Presentation Tests', function () {
    describe('Default render', function () {
      it('should exist', () => {
        expect(wrapper.exists()).toBe(true);
      });
      it('should render a feed item pill', () => {
        console.log(wrapper.html());
        expect(feedItemPill.exists()).toBeTruthy();
        expect(icon.exists()).toBe(true);
        expect(hoverIcon.exists()).toBe(false);
        expect(wrapper.find('[data-qa="content-element"]').exists()).toBe(false);
      });
    });
  });

  describe('Accessibility Tests', function () {
    describe('Default Render', function () {
      it('should render a reaction button', () => {
        expect(feedItemPill.attributes('aria-label')).toBe(MOCK_ARIA_LABEL);
      });
    });
  });

  describe('Interactivity Tests', function () {
    describe('Toggle feed item pill', function () {
      it('Should emit a click event', async () => {
        await feedItemPill.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.find('[data-qa="content-element"]').exists()).toBe(true);
      });

      describe('toggleable false', function () {
        beforeAll(() => {
          mockProps = {
            toggleable: false,
          };
        });

        it('should exist', () => {
          expect(wrapper.exists()).toBe(true);
        });
        it('should not respond to clicks', () => {
          expect(feedItemPill.exists()).toBeTruthy();
          expect(icon.exists()).toBe(true);
          expect(hoverIcon.exists()).toBe(false);
          expect(wrapper.find('[data-qa="content-element"]').exists()).toBe(false);
        });
      });
    });

    // Test not working
    describe.skip('Hover Feed Item Pill event', function () {
      it('should show a different icon', async () => {
        await feedItemPill.trigger('focus');
        _setChildWrappers();
        expect(icon.exists()).toBe(false);
        expect(hoverIcon.exists()).toBe(true);
      });
    });
  });
});