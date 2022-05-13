import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtEmoji from './emoji.vue';
import emojiToolkit from 'emoji-toolkit';

emojiToolkit.imagePathPNG = 'https://mockstorage.com/emojis/';
emojiToolkit.fileExtension = '.svg';

global.DOMParser = window.DOMParser;

// Constants
const basePropsData = {};

describe('DtEmoji Tests', function () {
  // Wrappers
  let wrapper;
  let emoji;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Expected
  const expectedSmileSrc = 'https://mockstorage.com/emojis/1f604.svg';
  const expectedLaughingSrc = 'https://mockstorage.com/emojis/1f606.svg';
  const expectedPointUpLight = 'https://mockstorage.com/emojis/261d-1f3fb.svg';

  // Helpers
  const _setChildWrappers = () => {
    emoji = wrapper.find('img');
  };

  const _setWrappers = () => {
    wrapper = mount(DtEmoji, {
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
  beforeEach(function () {});

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });
  after(function () {});

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('When a code string is passed in', function () {
      beforeEach(function () {
        propsData = {
          code: ':smile:',
        };
        _setWrappers();
      });

      it('renders the correct emoji', function () {
        assert.strictEqual(emoji.attributes('src'), expectedSmileSrc);
      });
      describe('When a prop changes to a new code', function () {
        beforeEach(async function () {
          await wrapper.setProps({ code: ':laughing:' });
        });
        it('should display the correct emoji with the new code', function () {
          assert.strictEqual(emoji.attributes('src'), expectedLaughingSrc);
        });
      });

      describe('When a prop changes to an invalid code', function () {
        beforeEach(async function () {
          await wrapper.setProps({ code: ':invalidcode:' });
        });
        it('should display a "not found" image', function () {
          assert.strictEqual(emoji.attributes('title'), 'Invalid Emoji');
        });
      });

      describe('When the size changes', function () {
        beforeEach(async function () {
          await wrapper.setProps({ size: 'd-svg--size48' });
        });
        it('the correct class is set on the element', function () {
          assert.isTrue(emoji.classes('d-svg--size48'));
        });
      });
    });

    describe('When a skin tone emoji is passed in', function () {
      beforeEach(function () {
        propsData = {
          code: ':point_up_tone1:',
        };
        _setWrappers();
      });
      it('renders the correct emoji', function () {
        assert.strictEqual(emoji.attributes('src'), expectedPointUpLight);
      });
    });

    describe('When an emoji unicode is passed in', function () {
      beforeEach(function () {
        propsData = {
          code: '☝🏻',
        };
        _setWrappers();
      });
      it('renders the correct emoji', function () {
        assert.strictEqual(emoji.attributes('src'), expectedPointUpLight);
      });
    });
  });

  describe('Accessibility Tests', function () {
    /*
     * Test(s) to ensure that the component is accessible
     */

    describe('When an emoji is rendered', function () {
      beforeEach(function () {
        propsData = {
          code: ':smile:',
        };
        _setWrappers();
      });
      it('should have aria-label describing the emoji', function () {
        assert.strictEqual(emoji.attributes('aria-label'), 'grinning face with smiling eyes');
      });
    });
  });
});
