import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtEmoji from './emoji.vue';
import { setEmojiAssetUrl } from '@/common/emoji.js';
import { flushPromises } from '@/common/utils.js';

setEmojiAssetUrl('https://mockstorage.com/emojis/', '.svg');

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
  const _setChildWrappers = async () => {
    emoji = await wrapper.find('img');
  };

  const _setWrappers = async () => {
    wrapper = mount(DtEmoji, {
      propsData,
      attrs,
      slots,
      provide,
      localVue: this.localVue,
    });
    await _setChildWrappers();
    await flushPromises();
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
      beforeEach(async function () {
        propsData = {
          code: ':smile:',
        };
        await _setWrappers();
      });

      it('renders the correct emoji', async function () {
        assert.strictEqual(emoji.attributes('src'), expectedSmileSrc);
      });
      describe('When a prop changes to a new code', function () {
        beforeEach(async function () {
          await wrapper.setProps({ code: ':laughing:' });
          await flushPromises();
        });
        it('should display the correct emoji with the new code', function () {
          assert.strictEqual(emoji.attributes('src'), expectedLaughingSrc);
        });
      });

      describe('When a prop changes to an invalid code', function () {
        beforeEach(async function () {
          await wrapper.setProps({ code: ':invalidcode:' });
          await flushPromises();
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
      beforeEach(async function () {
        propsData = {
          code: ':point_up_tone1:',
        };
        await _setWrappers();
      });
      it('renders the correct emoji', function () {
        assert.strictEqual(emoji.attributes('src'), expectedPointUpLight);
      });
    });

    describe('When an emoji unicode is passed in', function () {
      beforeEach(async function () {
        propsData = {
          code: '☝🏻',
        };
        await _setWrappers();
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
      beforeEach(async function () {
        propsData = {
          code: ':smile:',
        };
        await _setWrappers();
      });
      it('should have aria-label describing the emoji', function () {
        assert.strictEqual(emoji.attributes('aria-label'), 'grinning face with smiling eyes');
      });
    });
  });
});
