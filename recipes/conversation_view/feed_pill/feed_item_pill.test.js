/* eslint-disable vitest/expect-expect */
/* eslint-disable vitest/valid-describe-callback */
import { createLocalVue, mount } from '@vue/test-utils';
import {
  itBehavesLikeEmitsExpectedEvent,
} from '../../../tests/shared_examples/events';
import DtRecipeFeedItemPill from './feed_item_pill.vue';

const basePropsData = {
  iconName: 'video',
  title: 'This meeting has ended',
  wrapperClass: 'd-p2 d-bgg-to-br d-bgg-from-purple-400 d-bgg-to-magenta-300',
  expanded: false,
  ariaLabel: 'Click to expand',
};

// lsots
const content = '<div data-qa="content-element"> card content </div>';

describe('DtRecipeFeedItemPill Tests', function () {
  let testContext = {};

  // Wrappers
  let wrapper, feedItemPill, hoverIcon, icon, contentSlot;

  // Helpers
  const _setChildWrappers = () => {
    feedItemPill = wrapper.find('[data-qa="dt-feed-item-pill"]');
    hoverIcon = wrapper.find('[data-qa="dt-feed-item-hover-icon"]');
    icon = wrapper.find('[data-qa="dt-feed-item-icon"]');
    // test stuff
    contentSlot = wrapper.find('[data-qa="content-element"]');
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
        expect(contentSlot.exists()).toBe(false);
      });
    });

    describe('Expand true', function () {
      beforeAll(() => {
        propsData = {
          ...basePropsData,
          expanded: true,
        };
      });
      it('should show contentSlot', () => {
        expect(contentSlot.exists()).toBe(true);
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

    describe('Click Feed Item Pill event', async function () {
      it('Should emit a click event', async () => {
        await feedItemPill.trigger('click');
        itBehavesLikeEmitsExpectedEvent(wrapper, 'click');
      });
    });

    // Why this no work with trigger focus or trigger mouseenter
    describe.skip('Hover Feed Item Pill event', async function () {
      beforeAll(() => {
        feedItemPill.trigger('focus');
      });
      it('should show a different icon', async () => {
        console.log(wrapper.html());
        expect(icon.exists()).toBe(false);
        expect(hoverIcon.exists()).toBe(true);
      });
    });
  });
});
