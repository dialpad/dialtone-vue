import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtBreadcrumb from './breadcrumbs.vue';
import {
  INVERTED,
  SELECTED,
} from './breadcrumbs_constants';

// Constants
const basePropsData = {
  breadcrumbs: [{
    href: '#',
    label: 'string',
    kind: 'muted',
  },
  {
    href: '#',
    label: 'string',
    kind: 'muted',
  },
  {
    href: '#',
    label: 'string',
    kind: 'muted',
    selected: true,
  }],
};

describe('Dialtone Vue Breadcrumb tests', function () {
  // Wrappers
  let wrapper;
  let breadcrumbs;
  let breadcrumbItems;

  // Environment
  const propsData = basePropsData;

  // Helpers
  const _setWrappers = () => {
    breadcrumbs = wrapper.find('[data-qa="dt-breadcrumbs"]');
    breadcrumbItems = wrapper.findAll('[data-qa="dt-breadcrumb"]');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtBreadcrumb, {
      propsData,
      localVue: createLocalVue(),
    });
    _setWrappers();
  };

  describe('Presentation Tests', function () {
    // Setup
    _mountWrapper();

    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the breadcrumbs', function () { assert.exists(breadcrumbs.exists(), 'breadcrumbs exists'); });
    it('should render the item breadcrumb', function () { assert.exists(breadcrumbItems.exists(), 'ite,s exists'); });

    describe('When the breadcrumb has default state', function () {
      it('should has correct aria-current', function () {
          console.log(breadcrumbItems.filter(item => {
              const v = item.find('[aria-current="location"]')
              console.log(v.__proto__.constructor.name)
              return v.__proto__.constructor.name === 'VueWrapper'
          }).length)
        //   breadcrumbItems.find(['aria-current="location"'])
        //
        //
        // assert.isFalse(breadcrumbItems.find(['aria-current="location"']));
      });
    });
  //
  //   describe('When a default slot is provided', function () {
  //     it('should render the provided data', function () { assert.equal(nativeLink.text(), slots.default); });
  //   });
  //
  //   describe('When kind is danger', function () { itBehavesLikeHasCorrectKindClass(DANGER); });
  //
  //   describe('When kind is inverted', function () { itBehavesLikeHasCorrectKindClass(INVERTED); });
  //
  //   describe('When kind is success', function () { itBehavesLikeHasCorrectKindClass(SUCCESS); });
  //
  //   describe('When kind is warning', function () { itBehavesLikeHasCorrectKindClass(WARNING); });
  //
  //   describe('When kind is muted', function () { itBehavesLikeHasCorrectKindClass(MUTED); });
  //
  //   describe('When anchor is disabled', function () {
  //     it('should have correct class', async function () {
  //       await wrapper.setProps({ kind: '', disabled: true });
  //       assert.isTrue(nativeLink.classes().includes(LINK_MODIFIER_CLASSES[DISABLED]));
  //     });
  //   });
  });
});
