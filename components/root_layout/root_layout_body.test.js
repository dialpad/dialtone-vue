import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtRootLayoutBody from './root_layout_body.vue';
import { ROOT_LAYOUT_SIDEBAR_POSITIONS } from '@/components/root_layout/root_layout_constants';

// Constants
const basePropsData = {
  sidebarWidth: '256px',
  contentWrapWidthPercent: '50%',
};

const baseSlotsData = {
  sidebar: 'sidebar slot content',
  content: 'content slot content',
};

describe('Dialtone Vue Root Layout Body Tests', function () {
  // Wrappers
  let wrapper;

  let body;
  let sidebar;
  let content;

  // Environment
  let propsData = basePropsData;
  let slots = baseSlotsData;

  // Helpers
  const _setChildWrappers = () => {
    body = wrapper.find('[data-qa="root-layout-body"]');
    sidebar = wrapper.find('[data-qa="root-layout-sidebar"]');
    content = wrapper.find('[data-qa="root-layout-content"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtRootLayoutBody, {
      propsData,
      slots,
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
    slots = baseSlotsData;
  });

  describe('Presentation Tests', function () {
    describe('When root layout body renders', function () {
      beforeEach(function () { _setWrappers(); });

      it('root should exist', function () { assert.isTrue(wrapper.exists()); });
      it('body should exist', function () { assert.isTrue(body.exists()); });
      it('sidebar should exist', function () { assert.isTrue(sidebar.exists()); });
      it('content should exist', function () { assert.isTrue(content.exists()); });
    });

    describe('When slot content renders', function () {
      it('sidebar slot is passed down correctly', async function () {
        assert.strictEqual(sidebar.text(), slots.sidebar);
      });

      it('content slot is passed down correctly', async function () {
        assert.strictEqual(content.text(), slots.content);
      });
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

    const itBehavesLikeExcludesBodyInvertClass = () => {
      it('Has correct class', async function () {
        assert.strictEqual(body.classes('root-layout__body--invert'), false);
      });
    };

    describe('When sidebarPosition is set to default', function () {
      itBehavesLikeExcludesBodyInvertClass();
    });

    describe('When sidebarPosition is set to left', function () {
      beforeEach(async function () {
        await wrapper.setProps({ sidebarPosition: ROOT_LAYOUT_SIDEBAR_POSITIONS.LEFT });
      });

      itBehavesLikeExcludesBodyInvertClass();
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
    describe('When sidebar is rendered', function () {
      it('Uses `aside` tag', async function () {
        assert.strictEqual(sidebar.element.tagName, 'ASIDE');
      });
    });

    describe('When content is rendered', function () {
      it('Uses `main` tag', async function () {
        assert.strictEqual(content.element.tagName, 'MAIN');
      });
    });
  });
});
