import { config, mount } from '@vue/test-utils';
import DtCollapsible from './collapsible.vue';
import axe from 'axe-core';
import configA11y from '../../storybook/scripts/storybook-a11y-test.config';

const content = '<div data-qa="content-element"> Test Text </div>';
const baseProps = {
  anchorText: 'anchor text',
};

describe('DtCollapsible Tests', () => {
  // Wrappers
  let wrapper;
  let contentElement;
  let contentWrapperElement;
  let anchorElement;
  let scopedSlots = {};
  let anchorSlotElement;

  // Environment
  const slots = { content };
  let propsData = baseProps;

  const _clearChildWrappers = () => {
    contentElement = undefined;
    contentWrapperElement = undefined;
    anchorElement = undefined;
    anchorSlotElement = undefined;
    scopedSlots = {};
  };

  const _setChildWrappers = () => {
    anchorElement = wrapper.find('[data-qa="dt-button"]');
    anchorSlotElement = wrapper.find('[data-qa="anchor-element"]');
    contentElement = wrapper.find('[data-qa="content-element"]');
    contentWrapperElement = wrapper.findComponent({ ref: 'contentWrapper' });
  };

  const _mountWrapper = () => {
    wrapper = mount(DtCollapsible, {
      propsData,
      scopedSlots,
      slots,
      attachTo: document.body,
    });
    _setChildWrappers();
  };

  beforeAll(() => {
    global.requestAnimationFrame = jest.fn();
    global.cancelAnimationFrame = jest.fn();
    config.renderStubDefaultSlot = true;
  });

  beforeEach(() => {
    _mountWrapper();
  });

  afterAll(() => {
    // Restore RequestAnimationFrame and cancelAnimationFrame
    global.requestAnimationFrame = undefined;
    global.cancelAnimationFrame = undefined;
    config.renderStubDefaultSlot = false;
  });

  afterEach(async () => {
    propsData = baseProps;
    _clearChildWrappers();
  });

  describe('Test default rendering', () => {
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('should render the anchor', () => {
      expect(anchorElement.exists()).toBeTruthy();
    });

    it('should render the content', () => {
      expect(contentElement.exists()).toBeTruthy();
    });
  });

  describe('When scoped slot is provided', () => {
    beforeEach(() => {
      const anchor = '<button data-qa="anchor-element">click me</button>';
      scopedSlots = { anchor };
      _mountWrapper();
    });
    it('should render the scoped slot', () => {
      expect(anchorSlotElement.exists()).toBeTruthy();
    });
  });

  describe('Test open prop undefined', () => {
    it('content should be expanded by default', () => {
      expect(contentElement.isVisible()).toBe(true);
    });

    it('should toggle the content when clicked', async () => {
      await anchorElement.trigger('click');
      expect(contentElement.isVisible()).toBe(false);
    });
  });

  describe('Test open prop defined', () => {
    describe('Test open prop set to true', () => {
      beforeEach(async () => {
        await wrapper.setProps({ open: true });
      });

      it('content is expanded', () => {
        expect(contentElement.isVisible()).toBe(true);
      });

      it('clicking does not collapse content', async () => {
        await anchorElement.trigger('click');
        expect(contentElement.isVisible()).toBe(true);
      });

      it('updating open prop does collapse content', async () => {
        await wrapper.setProps({ open: false });
        expect(contentElement.isVisible()).toBe(false);
      });
    });

    describe('Test open prop set to false', () => {
      beforeEach(async () => {
        await wrapper.setProps({ open: false });
      });

      it('content starts collapsed', () => {
        expect(contentElement.isVisible()).toBe(false);
      });

      it('clicking does not expand content', async () => {
        await anchorElement.trigger('click');
        expect(contentElement.isVisible()).toBe(false);
      });

      it('updating open prop does collapse content', async () => {
        await wrapper.setProps({ open: true });
        expect(contentElement.isVisible()).toBe(true);
      });
    });
  });

  describe('If anchor text and anchor slot content are falsy', () => {
    let consoleErrorSpy;

    beforeEach(async () => {
      consoleErrorSpy = jest.spyOn(console, 'error').mockClear();
      propsData = { ...baseProps, anchorText: undefined };
      _mountWrapper();
    });

    afterEach(() => {
      consoleErrorSpy = null;
      console.error.mockRestore();
    });

    it('should output error message', async () => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('anchor text and anchor slot content cannot both be falsy');
    });
  });

  describe('Accessibility Tests', () => {
    describe('Content is expanded', () => {
      beforeEach(async () => {
        await wrapper.setProps({ open: true, id: 'contentId' });
      });

      it('should pass axe-core accessibility rules', async () => {
        const a11yResults = await axe.run(wrapper.element, configA11y);
        const violations = a11yResults.violations;
        if (violations.length) {
          console.log('axe-core accessibility violations:', violations);
        }
        expect(violations.length).toEqual(0);
      });

      it(
        'aria-controls on anchor should be set to the id of the contentWrapper',
        () => {
          expect(anchorElement.attributes('aria-controls')).toEqual('contentId');
          expect(contentWrapperElement.attributes('id')).toEqual('contentId');
        },
      );

      it('aria-expanded should be true', () => {
        expect(anchorElement.attributes('aria-expanded')).toEqual('true');
      });
    });

    describe('Content is collapsed', () => {
      beforeEach(async () => {
        await wrapper.setProps({ open: false });
      });

      it('aria-expanded should be "false"', () => {
        expect(anchorElement.attributes('aria-expanded')).toEqual('false');
      });
    });
  });
});
