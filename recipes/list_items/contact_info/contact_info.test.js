import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtRecipeContactInfo from './contact_info.vue';

// Constants
const basePropsData = {
  avatarSrc: 'avatar.png',
  avatarInitials: 'JL',
  presence: 'active',
};

const baseSlotsData = {
  header: 'Joseph Lumaban',
  subtitle: '+1 (415) 123-4567',
  bottom: 'Aerolabs Support',
};

describe('DtRecipeContactInfo Tests', function () {
  // Wrappers
  let wrapper;
  let rootElement;
  let headerElement;
  let avatarElement;
  let subtitleElement;
  let bottomElement;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = baseSlotsData;
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    rootElement = wrapper.find('[data-qa="contact-info"]');
    headerElement = wrapper.find('[data-qa="contact-info-header"]');
    avatarElement = wrapper.find('[data-qa="dt-avatar"]');
    subtitleElement = wrapper.find('[data-qa="contact-info-subtitle"]');
    bottomElement = wrapper.find('[data-qa="contact-info-bottom"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtRecipeContactInfo, {
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
  beforeEach(function () {
    _setWrappers();
  });

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = baseSlotsData;
    provide = {};
  });

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('When pass default content', function () {
      it('Should render contact info component', function () {
        assert.isTrue(wrapper.exists());
        assert.isTrue(rootElement.exists());
      });
      it('Should display header content correctly', function () {
        assert.isTrue(headerElement.exists());
        assert.strictEqual(headerElement.text(), 'Joseph Lumaban');
      });
      it('Should render avatar component', function () {
        assert.isTrue(avatarElement.exists());
      });
      it('Should render subtitle content correctly', function () {
        assert.isTrue(subtitleElement.exists());
        assert.strictEqual(subtitleElement.text(), '+1 (415) 123-4567');
      });
      it('Should render bottom content correctly', function () {
        assert.isTrue(bottomElement.exists());
        assert.strictEqual(bottomElement.text(), 'Aerolabs Support');
      });
    });

    describe('When `avatarSrc` is empty and `avatarInitials` is passed', function () {
      beforeEach(async function () {
        await wrapper.setProps({
          avatarSrc: '',
          avatarInitials: 'JL',
        });
        await wrapper.vm.$nextTick();
        _setChildWrappers();
      });
      it('Avatar should display', function () {
        assert.isTrue(avatarElement.exists());
      });
      it('Should display correct initials', function () {
        assert.strictEqual(avatarElement.text(), 'JL');
      });
    });

    describe('When both `avatarSrc` and `avatarInitials` are empty', function () {
      beforeEach(async function () {
        await wrapper.setProps({
          avatarSrc: '',
          avatarInitials: '',
        });
      });
      it('Should not display avatar', function () {
        assert.isFalse(avatarElement.exists());
      });
    });
  });
});