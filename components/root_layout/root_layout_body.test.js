import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtRootLayoutBody from './root_layout_body.vue';
import { ROOT_LAYOUT_SIDEBAR_POSITIONS } from '@/components/root_layout/root_layout_constants';

// Constants
const basePropsData = {
  sidebarWidth: '256px',
  contentWrapWidthPercent: '50%',
};

describe('Dialtone Vue Root Layout Body Tests', function () {
  // Wrappers
  let wrapper;

  let body;
  let sidebar;
  let content;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    body = wrapper.find('[data-qa="root-layout-body"]');
    sidebar = wrapper.find('[data-qa="root-layout-sidebar"]');
    content = wrapper.find('[data-qa="root-layout-content"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtRootLayoutBody, {
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

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('When root layout renders', function () {
      beforeEach(function () { _setWrappers(); });

      it('root should exist', function () { assert.isTrue(wrapper.exists()); });
      it('body should exist', function () { assert.isTrue(body.exists()); });
      it('sidebar should exist', function () { assert.isTrue(sidebar.exists()); });
      it('content should exist', function () { assert.isTrue(content.exists()); });
    });

    describe('When dynamic inline styles are set', function () {
      beforeEach(function () { _setWrappers(); });

      it('should set the sidebar width', function () {
        assert.strictEqual(sidebar.element.style.getPropertyValue('flex-basis'), propsData.sidebarWidth);
      });

      it('should set the body content wrap percent', function () {
        assert.strictEqual(
          content.element.style.getPropertyValue('min-inline-size'),
          propsData.contentWrapWidthPercent,
        );
      });
    });

    const itBehavesLikeAppliesBodyInvertClass = () => {
      it('Has correct class', async function () {
        assert.strictEqual(body.classes('root-layout__body--invert'), false);
      });
    };

    describe('When sidebarPosition is set to default', function () {
      itBehavesLikeAppliesBodyInvertClass();
    });

    describe('When sidebarPosition is set to left', function () {
      beforeEach(async function () {
        await wrapper.setProps({ sidebarPosition: ROOT_LAYOUT_SIDEBAR_POSITIONS.LEFT });
      });

      itBehavesLikeAppliesBodyInvertClass();
    });

    describe('When sidebarPosition is set to right', function () {
      beforeEach(async function () {
        await wrapper.setProps({ sidebarPosition: ROOT_LAYOUT_SIDEBAR_POSITIONS.RIGHT });
      });

      it('Has correct class', async function () {
        assert.strictEqual(body.classes('root-layout__body--invert'), true);
      });
    });
  });

  describe('Accessibility Tests', function () {
    /*
     * Test(s) to ensure that the component is accessible
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Interactivity Tests', function () {
    /*
     * Test(s) to ensure that the component correctly handles user input
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Validation Tests', function () {
    /*
     * Test(s) to ensure that custom validators are working as expected
     */

    describe('When some description of the current environment', function () {});
  });

  describe('Extendability Tests', function () {
    /*
     * Test(s) to ensure that the component can be correctly extended
     */

    describe('When some description of the current environment', function () {});
  });
});
