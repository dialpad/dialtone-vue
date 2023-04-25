import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtRecipeGeneralRow from './general_row.vue';
import {
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS,
  LEFTBAR_GENERAL_ROW_TYPES,
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_VALIDATION_ERROR,
} from '@/recipes/leftbar/general_row/general_row_constants';

// Constants
const basePropsData = {
  type: 'inbox',
  description: 'Description',
};

describe('DtRecipeGeneralRow Tests', function () {
  // Wrappers
  let wrapper;
  let iconType;
  let description;
  let unreadBadge;

  // Environment
  let propsData = basePropsData;
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
      propsData,
      attrs,
      slots,
      provide,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {});

  beforeEach(function () {
    propsData = basePropsData;
    slots = {};
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
    describe('When the leftbar renders', function () {
      // Test Setup
      beforeEach(function () { _setWrappers(); });

      it('should exist', function () { assert.exists(wrapper); });

      it('should render the icon', function () {
        assert.isTrue(iconType.exists());
        assert.exists(iconType.find('svg'));
      });

      it('should render the description', function () {
        assert.strictEqual(description.text(), basePropsData.description);
      });
    });

    describe('When a unreadCount is provided', function () {
      // Test Environment
      const unreadCount = '25';
      const hasUnreads = true;

      // Test Setup
      beforeEach(function () {
        propsData = { ...propsData, hasUnreads, unreadCount };
        _setWrappers();
      });

      it('should render the unreadCount', function () {
        assert.strictEqual(unreadBadge.text(), unreadCount);
      });
    });

    describe('When type is contact center', function () {
      // Test Environment
      const type = LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER;
      const color = 'red';

      // Test Setup
      beforeEach(function () {
        propsData = { ...propsData, type, color };
        _setWrappers();
      });

      it('should render the contact center icon', function () {
        assert.exists(iconType.find('.leftbar-general-row__contact-center-icon'));
      });

      it('should render the contact center icon with the correct color', function () {
        assert.exists(iconType.find(`.${LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS[color]}`));
      });
    });

    describe('When type is dialbot', function () {
      // Test Environment
      const type = LEFTBAR_GENERAL_ROW_TYPES.DIALBOT;

      // Test Setup
      beforeEach(function () {
        propsData = { ...propsData, type };
        _setWrappers();
      });

      it('should render the icon', function () {
        assert.exists(iconType.find('.leftbar-general-row__dialbot-icon'));
      });
    });

    describe('When type is contact center and no color is provided', function () {
      // Test Environment
      let consoleErrorSpy;
      const type = LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER;

      beforeEach(async function () {
        consoleErrorSpy = jest.spyOn(console, 'error').mockClear();
        propsData = { ...propsData, type };
        _setWrappers();
      });

      afterEach(function () {
        consoleErrorSpy = null;
        console.error.mockRestore();
      });

      it('should output error message', function () {
        assert.isTrue(consoleErrorSpy.calledWith(LEFTBAR_GENERAL_ROW_CONTACT_CENTER_VALIDATION_ERROR));
      });
    });
  });
});
