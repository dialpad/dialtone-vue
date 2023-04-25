<<<<<<< HEAD
import { assert } from 'chai';
import { mount } from '@vue/test-utils';
=======
import { createLocalVue, mount } from '@vue/test-utils';
>>>>>>> febc8cda (migrate tests)
import DtBreadcrumb from './breadcrumbs.vue';
import { BREADCRUMB_ITEM_SELECTED_MODIFIER, BREADCRUMBS_INVERTED_MODIFIER } from './breadcrumbs_constants';

// Constants
const baseProps = {
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

describe('DtBreadcrumb Tests', () => {
  // Wrappers
  let wrapper;
  let breadcrumbs;
  let breadcrumbItems;

  // Environment
  const props = baseProps;

  // Helpers
  const _setWrappers = () => {
    breadcrumbs = wrapper.find('[data-qa="dt-breadcrumbs"]');
    breadcrumbItems = wrapper.findAll('[data-qa="dt-breadcrumb-item"]');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtBreadcrumb, {
      props,
    });
    _setWrappers();
  };

  // Setup
  beforeEach(() => {
    _mountWrapper();
  });

  describe('Presentation Tests', function () {
    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
    it('should render the breadcrumbs', function () { assert.exists(breadcrumbs.exists(), 'breadcrumbs exist'); });
    it('should render the item breadcrumb', function () { assert.isNotEmpty(breadcrumbItems); });

    describe('When the breadcrumb has default state', () => {
      it('should has correct aria-current', () => {
        const elementWithValidAria = breadcrumbItems.filter(item => {
          return item.find('[aria-current="location"]').exists();
        });
        expect(elementWithValidAria.length).toEqual(1);
      });
      it('should has correct rendered items', () => {
        expect(breadcrumbItems.length).toEqual(baseProps.breadcrumbs.length);
      });
      it('should has correct sequence', () => {
        expect(breadcrumbItems.length).toEqual(baseProps.breadcrumbs.length);
        props.breadcrumbs.forEach(({ label }, i) => {
          expect(breadcrumbItems.at(i).text()).toEqual(label);
        });
      });
    });

    describe('When a inverted is provided to breadcrumbs', () => {
      beforeAll(() => {
        baseProps.inverted = true;
      });
      it('should render label', () => {
        expect(breadcrumbs.classes().includes(BREADCRUMBS_INVERTED_MODIFIER)).toBe(true);
      });
    });

    describe('When a selected is provided to breadcrumbs', () => {
      it('should render label', () => {
        const elementWithValidAria = breadcrumbItems.filter(item => {
          return item.classes().includes(BREADCRUMB_ITEM_SELECTED_MODIFIER);
        });
        expect(elementWithValidAria.length).toEqual(1);
      });
    });
  });

  describe('Accessibility Tests', () => {
    describe('When a new area-label is provided', () => {
      beforeAll(() => {
        baseProps.ariaLabel = 'newAria';
      });

      it('should update area-label value', () => {
        expect(breadcrumbs.attributes('aria-label')).toBe('newAria');
      });
    });
  });
});
