import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtBreadcrumb from './breadcrumbs.vue';
import DtBreadcrumbItem from './breadcrumb_item.vue';
import { INVERTED, SELECTED } from './breadcrumbs_constants';

// Constants
const basePropsData = {
  inverted: false,
  breadcrumbs: [{
    url: '#',
    label: 'Root',
  },
  {
    url: '#',
    label: 'Section',
  },
  {
    url: '#',
    label: 'Section',
  },
  {
    url: '#',
    label: 'Section',
  },
  {
    url: '#',
    label: 'Current Page',
    selected: true,
  }],
};

const breadcrumbItemOption = {
  url: '#',
  label: 'Section',
};
let breadcrumbItemSlot = { default: 'Slotted section' };

describe('Dialtone Vue Breadcrumb tests', function () {
  // Wrappers
  let wrapper;
  let breadcrumbItem;
  let breadcrumbs;
  let breadcrumbItems;

  // Environment
  const propsData = basePropsData;

  // Helpers
  const _setWrappers = () => {
    breadcrumbs = wrapper.find('[aria-label="breadcrumbs"]');
    breadcrumbItems = wrapper.findAll('[data-qa="breadcrumb"]');
  };

  const _mountWrapper = () => {
    breadcrumbItem = mount(DtBreadcrumbItem, {
      propsData: breadcrumbItemOption,
      slots: breadcrumbItemSlot,
      localVue: createLocalVue(),
    });
    wrapper = mount(DtBreadcrumb, {
      propsData,
      localVue: createLocalVue(),
    });
    _setWrappers();
  };

  // Setup
  beforeEach(function () {
    // Setup
    _mountWrapper();
  });

  describe('Presentation Tests', function () {
    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the breadcrumbs', function () { assert.exists(breadcrumbs.exists(), 'breadcrumbs exist'); });
    it('should render the item breadcrumb', function () { assert.exists(breadcrumbItems.exists(), 'items exist'); });

    describe('When the breadcrumb has default state', function () {
      it('should has correct aria-current', function () {
        const elementWithValidAria = breadcrumbItems.filter(item => {
          return item.find('[aria-current="location"]').constructor.name === 'VueWrapper';
        });

        assert.equal(elementWithValidAria.length, 1);
      });
    });

    describe('When a default slot is provided to breadcrumb item', function () {
      it('should render default slot label', function () {
        assert.equal(breadcrumbItem.text(), 'Slotted section');
      });
    });

    describe('When a label is provided to breadcrumb item', function () {
      before(function () {
        breadcrumbItemSlot = {};
      });
      it('should render label', function () {
        assert.equal(breadcrumbItem.text(), 'Section');
      });
    });

    describe('When a inverted is provided to breadcrumbs', function () {
      before(function () {
        basePropsData.inverted = true;
      });
      it('should render label', function () {
        assert.isTrue(breadcrumbs.classes().includes(`d-breadcrumbs--${INVERTED}`));
      });
    });

    describe('When a selected is provided to breadcrumbs', function () {
      it('should render label', function () {
        const elementWithValidAria = breadcrumbItems.filter(item => {
          return item.classes().includes(`d-breadcrumbs__item--${SELECTED}`);
        });
        assert.equal(elementWithValidAria.length, 1);
      });
    });
  });
});
