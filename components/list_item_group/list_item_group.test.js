import { mount } from '@vue/test-utils';
import DtListItemGroup from './list_item_group.vue';

// Constants
const props = {
  heading: 'Heading',
  id: 'list-item-group',
};

describe('DtListItemGroup Tests', () => {
  let testContext;

  beforeAll(() => {
    testContext = {};
  });

  // Wrappers
  let wrapper;
  let heading;

  // Environment
  let props = props;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    heading = wrapper.find('[data-qa="dt-dropdown-list-heading"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtListItemGroup, {
      props,
      attrs,
      slots,
      provide,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {
  });
  beforeEach(() => {
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
    describe('List Group has a heading set', () => {
      it('displays the heading correctly', () => {
        expect(heading.text()).toBe(props.heading);
      });
    });
  });

  describe('Accessibility Tests', () => {
    describe('List Group has a heading set', () => {
      it(
        'the root ul is aria-labelledby the id of the header element',
        () => {
          expect(wrapper.attributes('aria-labelledby')).toBe(props.id + '-heading');
        },
      );
    });
  });
});
