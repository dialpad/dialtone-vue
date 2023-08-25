/* eslint-disable vitest/expect-expect */
/* eslint-disable vitest/valid-describe-callback */
import { createLocalVue, mount } from '@vue/test-utils';
import DtRecipeFeedItemPill from './feed_item_pill.vue';

const basePropsData = {
  iconName: 'video',
  title: 'This meeting has ended',
  ariaLabel: 'Click to expand',
  buttonClass: '',
  toggleable: true,
};

// slots
const content = '<div data-qa="content-element"> content </div>';

describe('DtRecipeFeedItemPill Tests', function () {
  let testContext = {};

  // Wrappers
  let wrapper, feedItemPill, hoverIcon, icon;

  // Helpers
  const _setChildWrappers = () => {
    feedItemPill = wrapper.find('[data-qa="dt-feed-item-pill"]');
    hoverIcon = wrapper.find('[data-qa="dt-feed-item-hover-icon"]');
    icon = wrapper.find('[data-qa="dt-feed-item-icon"]');
  };

  // Test Environment
  let propsData = basePropsData;
  const slots = { content };
  let provide;
  let attrs;

  const _setWrappers = () => {
    wrapper = mount(DtRecipeFeedItemPill, {
      stubs: {
      },
      propsData,
      attrs,
      slots,
      provide,
      localVue: testContext.localVue,
      attachTo: document.body,
    });
    _setChildWrappers();
  };

  // Setup
  beforeAll(function () {
    testContext.localVue = createLocalVue();
  });

  beforeEach(function () {
    testContext = {};
    _setWrappers();
  });

  // Teardown
  afterEach(function () {
  });
  afterAll(function () {
  });

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('Default render', function () {
      it('should exist', () => {
        expect(wrapper.exists()).toBe(true);
      });
      it('should render a feed item pill', () => {
        expect(feedItemPill.exists()).toBeTruthy();
        expect(icon.exists()).toBe(true);
        expect(hoverIcon.exists()).toBe(false);
        expect(wrapper.find('[data-qa="content-element"]').exists()).toBe(false);
      });
    });
  });

  describe('Accessibility Tests', function () {
    /*
     * Test(s) to ensure that the component is accessible
     */

    describe('Default Render', function () {
      it('should render a reaction button', () => {
        expect(feedItemPill.attributes('aria-label')).toBe(basePropsData.ariaLabel);
      });
    });
  });

  describe('Interactivity Tests', function () {
    /*
     * Test(s) to ensure that the component correctly handles user input
     */

    describe('Toggle feed item pill', async function () {
      it('Should emit a click event', async () => {
        await feedItemPill.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.find('[data-qa="content-element"]').exists()).toBe(true);
      });

      describe('toggleable false', function () {
        beforeAll(() => {
          propsData = {
            ...basePropsData,
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

    // Why this no work with trigger focus or trigger mouseenter
    describe.skip('Hover Feed Item Pill event', async function () {
      beforeAll(() => {
        feedItemPill.trigger('focus');
      });
      it('should show a different icon', async () => {
        expect(icon.exists()).toBe(false);
        expect(hoverIcon.exists()).toBe(true);
      });
    });
  });
});
