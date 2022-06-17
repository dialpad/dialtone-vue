import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import DtRootLayout from './root_layout.vue';

// Constants
const basePropsData = {
  headerHeight: '32px',
  footerHeight: '64px',
};

const baseSlotsData = {
  header: 'header slot content',
  footer: 'footer slot content',
};

describe('Dialtone Vue Root Layout Tests', function () {
  // Wrappers
  let wrapper;

  let header;
  let footer;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = baseSlotsData;
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    header = wrapper.find('[data-qa="root-layout-header"]');
    footer = wrapper.find('[data-qa="root-layout-footer"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtRootLayout, {
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
    slots = baseSlotsData;
    provide = {};
  });

  beforeEach(function () { _setWrappers(); });

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('When root layout renders', function () {
      it('root should exist', function () { assert.isTrue(wrapper.exists()); });
      it('header should exist', function () { assert.isTrue(header.exists()); });
      it('footer should exist', function () { assert.isTrue(footer.exists()); });
    });

    describe('When slot content renders', function () {
      it('header slot is passed down correctly', async function () {
        assert.strictEqual(header.text(), slots.header);
      });

      it('footer slot is passed down correctly', async function () {
        assert.strictEqual(footer.text(), slots.footer);
      });
    });

    describe('When dynamic inline styles are set', function () {
      it('should set the header height', function () {
        assert.strictEqual(header.element.style.getPropertyValue('height'), propsData.headerHeight);
      });

      it('should set the footer height', function () {
        assert.strictEqual(footer.element.style.getPropertyValue('height'), propsData.footerHeight);
      });
    });

    describe('When headerSticky is set to default', function () {
      it('Has correct class', async function () {
        assert.strictEqual(header.classes('root-layout__header--sticky'), false);
      });
    });

    describe('When headerSticky is set to true', function () {
      beforeEach(async function () {
        await wrapper.setProps({ headerSticky: true });
      });

      it('Has correct class', async function () {
        assert.strictEqual(header.classes('root-layout__header--sticky'), true);
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
