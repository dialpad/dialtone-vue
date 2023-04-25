import { mount } from '@vue/test-utils';
import DtBreadcrumbItem from './breadcrumb_item.vue';

const breadcrumbItemOption = {
  url: '#',
  label: 'Section',
};
let breadcrumbItemSlot = { default: 'Slotted section' };

describe('DtBreadcrumbItem Tests', () => {
  // Wrappers
  let wrapper;

  const _mountWrapper = () => {
    wrapper = mount(DtBreadcrumbItem, {
      props: breadcrumbItemOption,
      slots: breadcrumbItemSlot,
    });
  };

  // Setup
  beforeEach(() => {
    _mountWrapper();
  });

  describe('Presentation Tests', () => {
    it('should render the breadcrumbItem', () => {
      assert.exists(wrapper.exists(), 'breadcrumbItem exist');
    });

    describe('When a default slot is provided to breadcrumb item', () => {
      it('should render default slot label', () => {
        expect(wrapper.text()).toEqual('Slotted section');
      });
    });

    describe('When a label is provided to breadcrumb item', () => {
      beforeAll(() => {
        breadcrumbItemSlot = {};
      });
      it('should render label', () => {
        expect(wrapper.text()).toEqual('Section');
      });
    });
  });
});
