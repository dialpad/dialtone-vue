import { mount } from '@vue/test-utils';
import DtRecipeGeneralRow from './general_row.vue';
import {
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS,
  LEFTBAR_GENERAL_ROW_TYPES,
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_VALIDATION_ERROR,
} from '@/recipes/leftbar/general_row/general_row_constants';

// Constants
const props = {
  type: 'inbox',
  description: 'Description',
};

describe('DtRecipeGeneralRow Tests', () => {
  let testContext;

  beforeAll(() => {
    testContext = {};
  });

  // Wrappers
  let wrapper;
  let iconType;
  let description;
  let unreadBadge;

  // Environment
  let props = props;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    iconType = wrapper.find('[data-qa="dt-leftbar-row-icon"]');
    description = wrapper.find('.dt-leftbar-row__description');
    unreadBadge = wrapper.find('[data-qa="dt-leftbar-row-unread-badge"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtRecipeGeneralRow, {
      props,
      attrs,
      slots,
      provide,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {});

  beforeEach(() => {
    props = props;
    slots = {};
    _setWrappers();
  });

  // Teardown
  afterEach(() => {
    props = props;
    attrs = {};
    slots = {};
    provide = {};
  });
  afterAll(() => {});

  describe('Presentation Tests', () => {
    describe('When the leftbar renders', () => {
      // Test Setup
      beforeEach(() => { _setWrappers(); });

      it('should exist', () => { assert.exists(wrapper); });

      it('should render the icon', () => {
        expect(iconType.exists()).toBe(true);
        assert.exists(iconType.find('svg'));
      });

      it('should render the description', () => {
        expect(description.text()).toBe(props.description);
      });
    });

    describe('When a unreadCount is provided', () => {
      // Test Environment
      const unreadCount = '25';
      const hasUnreads = true;

      // Test Setup
      beforeEach(() => {
        props = { ...props, hasUnreads, unreadCount };
        _setWrappers();
      });

      it('should render the unreadCount', () => {
        expect(unreadBadge.text()).toBe(unreadCount);
      });
    });

    describe('When type is contact center', () => {
      // Test Environment
      const type = LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER;
      const color = 'red';

      // Test Setup
      beforeEach(() => {
        props = { ...props, type, color };
        _setWrappers();
      });

      it('should render the contact center icon', () => {
        assert.exists(iconType.find('.leftbar-general-row__contact-center-icon'));
      });

      it(
        'should render the contact center icon with the correct color',
        () => {
          assert.exists(iconType.find(`.${LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS[color]}`));
        },
      );
    });

    describe('When type is dialbot', () => {
      // Test Environment
      const type = LEFTBAR_GENERAL_ROW_TYPES.DIALBOT;

      // Test Setup
      beforeEach(() => {
        props = { ...props, type };
        _setWrappers();
      });

      it('should render the icon', () => {
        assert.exists(iconType.find('.leftbar-general-row__dialbot-icon'));
      });
    });

    describe('When type is contact center and no color is provided', () => {
      // Test Environment
      let consoleErrorSpy;
      const type = LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER;

      beforeEach(async () => {
        consoleErrorSpy = jest.spyOn(console, 'error').mockClear();
        props = { ...props, type };
        _setWrappers();
      });

      afterEach(() => {
        consoleErrorSpy = null;
        console.error.mockRestore();
      });

      it('should output error message', () => {
        expect(
          consoleErrorSpy.calledWith(LEFTBAR_GENERAL_ROW_CONTACT_CENTER_VALIDATION_ERROR),
        ).toBe(true);
      });
    });
  });
});
