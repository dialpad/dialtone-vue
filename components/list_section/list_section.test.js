import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtListSection from './list_section.vue';
import { h } from 'vue';

// Constants
const baseProps = {
  id: 'sectionId',
};

const baseSlotsData = {
  // passing in three list items by default
  // TODO: use string slots once move forward from VTU 2.0.0-rc.12 as in this version
  // string slots contain a SlotWrapper and ListSection doesn't return correct vnodes length
  // like in this issue https://github.com/vuejs/test-utils/issues/389
  default: () => [
    h('div', 'first item'),
    h('div', 'second item'),
    h('div', 'third item'),
  ],
};

describe('ListSection tests', function () {
  let wrapper;

  const props = baseProps;
  const slotsData = baseSlotsData;

  let rootElement;
  let content;
  let contentItems;
  let header;
  let showMoreLessButton;

  const _setWrappers = () => {
    wrapper = mount(DtListSection, {
      props,
      slots: slotsData,
    });
    _setChildWrappers();
  };

  const _setChildWrappers = () => {
    rootElement = wrapper.find('#' + baseProps.id);
    header = wrapper.find(`#${baseProps.id}-list-section-header`);
    content = wrapper.find(`#${baseProps.id}-list-section-content`);
    contentItems = content.findAll('#sectionId-list-section-content > *');
    showMoreLessButton = wrapper.find(`#${baseProps.id}-list-section-show-more-less`);
  };

  beforeEach(function () {
    _setWrappers();
  });

  describe('Presentation Tests', function () {
    describe('When rendered with default slot content', function () {
      it('Should render the component', function () {
        assert.isTrue(wrapper.exists());
      });

      it('Id should be set correctly on the root element', function () {
        assert.isTrue(rootElement.exists());
      });

      it('Slot content should be displayed', function () {
        assert.strictEqual(content.text(), 'first itemsecond itemthird item');
      });

      it('Header should not be displayed', function () {
        assert.isFalse(header.exists());
      });
    });

    describe('When header is passed in as a prop', function () {
      const headerText = 'I am a header';
      beforeEach(async function () {
        await wrapper.setProps({ header: headerText });
        _setChildWrappers();
      });
      it('Header text is displayed correctly', function () {
        assert.strictEqual(header.text(), headerText);
      });
    });

    describe('When separator is set to true', function () {
      beforeEach(async function () {
        await wrapper.setProps({ separator: true });
      });
      it('separator is displayed correctly', function () {
        assert.isTrue(rootElement.classes('d-bb'));
      });
    });

    describe('When maxDisplayed is set to a number less than number of entries', function () {
      const maxDisplayed = 2;
      beforeEach(async function () {
        await wrapper.setProps({ maxDisplayed });
        _setChildWrappers();
      });

      it('show more button is displayed', async function () {
        assert.isTrue(showMoreLessButton.isVisible());
      });

      it('the correct number of entries is shown', async function () {
        assert.strictEqual(contentItems.length, maxDisplayed);
      });

      describe('Show more was clicked', function () {
        beforeEach(async function () {
          await showMoreLessButton.trigger('click');
        });

        it('show less button is displayed', function () {
          assert.strictEqual(showMoreLessButton.text(), 'Show less');
        });
      });
    });

    describe('When maxDisplayed is set to a number greater than number of entries', function () {
      beforeEach(async function () {
        await wrapper.setProps({ maxDisplayed: 5 });
        _setChildWrappers();
      });
      it('show more button is not displayed', function () {
        assert.isFalse(showMoreLessButton.exists());
      });
      it('all entries are shown', function () {
        assert.strictEqual(contentItems.length, 3);
      });
    });

    describe('When maxDisplayed is set to 0', function () {
      beforeEach(async function () {
        await wrapper.setProps({ maxDisplayed: 0 });
        _setChildWrappers();
      });
      it('show more button is not displayed', function () {
        assert.isFalse(showMoreLessButton.exists());
      });
      it('all entries are shown', function () {
        assert.strictEqual(contentItems.length, 3);
      });
    });
  });

  describe('Interactivity Tests', function () {
    describe('When maxDisplayed is set to a number less than number of entries', function () {
      const maxDisplayed = 2;
      beforeEach(async function () {
        await wrapper.setProps({ maxDisplayed });
        _setChildWrappers();
      });

      describe('When show more button is clicked', function () {
        beforeEach(async function () {
          await showMoreLessButton.trigger('click');
          _setChildWrappers();
        });

        it('displays all entries if show more button is clicked', async function () {
          assert.strictEqual(contentItems.length, 3);
        });
      });

      describe('When show less button is clicked', function () {
        beforeEach(async function () {
          // click show more button to change to a "show less" button
          await showMoreLessButton.trigger('click');
          // cick again to change back to show more
          await showMoreLessButton.trigger('click');
          _setChildWrappers();
        });

        it('displays maxDisplayed number of entries if show less button is clicked', async function () {
          assert.strictEqual(contentItems.length, maxDisplayed);
        });
      });
    });
  });
});
