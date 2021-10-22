import sinon from 'sinon';
import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import IconWarning from '@dialpad/dialtone/lib/dist/vue/icons/IconWarning.vue';
import DtListItem from './list_item.vue';

describe('Dialtone Vue ListItem tests', function () {
  // Wrappers
  let wrapper;
  let leftIconWrapper;
  let rightIconWrapper;

  // Test Environment
  let propsData;
  let attrs;
  let slots;
  let listeners;
  let clickStub;
  let setHighlightIndexSpy;

  // Helpers
  const _setChildWrappers = () => {
    leftIconWrapper = wrapper.find('[data-qa="dt-list-item-left-icon-wrapper"]');
    rightIconWrapper = wrapper.find('[data-qa="dt-list-item-right-icon-wrapper"]');
  };

  const _mountWrapper = () => {
    wrapper = mount(DtListItem, {
      propsData,
      attrs,
      slots,
      listeners,
      localVue: this.localVue,
    });
  };

  // Test Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  beforeEach(function () {
    clickStub = sinon.stub();
    setHighlightIndexSpy = sinon.spy();
    listeners = { click: clickStub };
    _mountWrapper();
    _setChildWrappers();
  });

  // Test Teardown
  afterEach(function () {
    propsData = {};
    slots = {};
  });

  describe('Presentation Tests', function () {
    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });

    describe('When clickable prop is provided', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ clickable: true });
      });

      it('should apply the class to the wrapper.', function () {
        assert.isTrue(wrapper.classes('dt-list-item--clickable'));
      });
      it('should add tabindex 0 to the wrapper.', function () {
        assert.isTrue(wrapper.attributes('tabindex') === '0');
      });
    });

    describe('When clickable prop is not provided', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ clickable: false });
      });

      it('should not apply the class to the wrapper.', function () {
        assert.isFalse(wrapper.classes('dt-list-item--clickable'));
      });
      it('should add tabindex -1 to the wrapper.', function () {
        assert.isTrue(wrapper.attributes('tabindex') === '-1');
      });
    });

    describe('When item is not highlighted', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ absoluteIndex: 1, highlightIndex: 2 });
      });

      it('should not apply the class to the wrapper.', function () {
        assert.isFalse(wrapper.classes('dt-list-item--highlighted'));
      });
      it('aria-selected should not be set', function () {
        assert.isUndefined(wrapper.attributes('aria-selected'));
      });
    });

    describe('When item is highlighted', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ absoluteIndex: 2, highlightIndex: 2, setHighlightIndex: () => {} });
      });

      it('should apply the class to the wrapper.', function () {
        assert.isTrue(wrapper.classes('dt-list-item--highlighted'));
      });
      it('aria-selected should be set to "true"', function () {
        assert.isTrue(wrapper.attributes('aria-selected') === 'true');
      });
    });

    describe('When a left icon is provided', function () {
      // Test Setup
      beforeEach(async function () {
        slots = { iconLeft: IconWarning };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render the icon wrapper', function () { assert.isTrue(leftIconWrapper.exists()); });
      it('should render the provided icon', function () {
        assert.isTrue(wrapper.findComponent(IconWarning).exists());
      });
    });

    describe('When a right icon is provided', function () {
      // Test Setup
      beforeEach(async function () {
        slots = { iconRight: IconWarning };
        _mountWrapper();
        _setChildWrappers();
      });

      it('should render the icon wrapper', function () { assert.isTrue(rightIconWrapper.exists()); });
      it('should render the provided icon', function () {
        assert.isTrue(wrapper.findComponent(IconWarning).exists());
      });
    });
  });

  describe('Interactivity Tests', function () {
    // Shared Examples
    const itBehavesLikeHandlesClick = () => {
      it('should call listener', async function () {
        assert.isTrue(clickStub.called);
      });

      it('should emit click event', function () {
        assert.equal(wrapper.emitted().click.length, 1);
      });
    };

    describe('When list item is clicked', function () {
      beforeEach(async function () {
        await wrapper.trigger('click');
      });

      itBehavesLikeHandlesClick();
    });

    describe('When "Enter" key is pressed', function () {
      beforeEach(async function () {
        await wrapper.trigger('keydown.enter');
      });

      itBehavesLikeHandlesClick();
    });

    describe('When "Space" key is pressed', function () {
      beforeEach(async function () {
        await wrapper.trigger('keydown.space');
      });

      itBehavesLikeHandlesClick();
    });

    describe('When mousemove is detected but item is not highlightable', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ absoluteIndex: null, highlightIndex: null, setHighlightIndex: setHighlightIndexSpy });
        await wrapper.trigger('mousemove');
      });

      it('should not call setHighlightIndex', function () {
        assert.equal(setHighlightIndexSpy.callCount, 0);
      });
    });

    describe('When mousemove is detected and item is highlightable', function () {
      // Test Setup
      beforeEach(async function () {
        await wrapper.setProps({ absoluteIndex: 1, highlightIndex: 2, setHighlightIndex: setHighlightIndexSpy });
        await wrapper.trigger('mousemove');
      });

      it('should call setHighlightIndex once', function () {
        assert.equal(setHighlightIndexSpy.callCount, 1);
      });
    });
  });
});
