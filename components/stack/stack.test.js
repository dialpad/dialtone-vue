import { assert } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { DT_STACK_DIR, DT_STACK_GAP } from './stack_constants';
import DtStack from './stack.vue';

// Constants
const baseSlotsData = {
  default: `<div data-qa="default-content">Test 1</div> <div>Test 2</div>`,
};

describe('DtStack Tests', function () {
  // Wrappers
  let wrapper;

  let defaultContent;

  // Environment
  let slots = baseSlotsData;

  // Helpers
  const _setChildWrappers = () => {
    defaultContent = wrapper.find('[data-qa="default-content"]');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtStack, {
      slots,
      localVue: this.localVue,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {
    this.localVue = createLocalVue();
  });

  // Teardown
  afterEach(function () {
    slots = baseSlotsData;
  });

  beforeEach(function () { _setWrappers(); });

  describe('Presentation Tests', function () {
    describe('When stack renders', function () {
      it('stack exist', function () {
        assert.isTrue(wrapper.exists());
      });

      it('content should exist', function () {
        assert.isTrue(defaultContent.exists());
      });

      it('should set proper default classes', function () {
        assert.isTrue(wrapper.classes('dt-stack', DT_STACK_DIR.default));
      });
    });
  });

  describe('When `dir` prop is provided as a', function () {
    describe('string', function () {
      beforeEach(async function () {
        await wrapper.setProps({ dir: 'row' });
      });

      it('should set the proper class and override the default value', function () {
        assert.isTrue(wrapper.classes('dt-stack', 'dt-stack--row'));
      });
    });

    describe('object', function () {
      beforeEach(async function () {
        await wrapper.setProps({
          dir: {
            sm: 'column',
            lg: 'column-reverse',
            md: 'row-reverse',
            xl: 'row',
          },
        });
      });

      it('should set proper responsive classes', function () {
        assert.isTrue(wrapper.classes(
          'dt-stack--sm--column',
          'dt-stack--md--row-reverse',
          'dt-stack--lg--column-reverse',
          'dt-stack--xl--row',
        ));
      });

      describe('When `default` is provided', function () {
        beforeEach(async function () {
          await wrapper.setProps({ dir: { default: 'row-reverse' } });
        });

        it('should override the default value', function () {
          assert.isTrue(wrapper.classes('dt-stack', 'dt-stack--row'));
        });
      });
    });

    describe('non expected value as a', function () {
      describe('string', function () {
        beforeEach(async function () {
          await wrapper.setProps({ dir: 'invalid' });
        });

        it('should do not add inexistent class', function () {
          assert.isFalse(wrapper.classes().includes('dt-stack--invalid'));
        });
      });

      describe('object', function () {
        beforeEach(async function () {
          await wrapper.setProps({ dir: { invalid: 'column' } });
        });

        it('should do not add inexistent breakpoint class', function () {
          assert.isFalse(wrapper.classes().includes('dt-stack--invalid--column'));
        });
      });
    });
  });

  describe('When `as` prop is provided', function () {
    beforeEach(async function () {
      await wrapper.setProps({ as: 'section' });
    });

    it('should use it as the HTML element of stack', function () {
      assert.strictEqual(wrapper.element.tagName, 'SECTION');
    });
  });

  describe('When `gap` prop is provided as', function () {
    describe('valid value', function () {
      beforeEach(async function () {
        await wrapper.setProps({ gap: '300' });
      });

      it('should set inline style with gap variable', function () {
        assert.strictEqual(wrapper.attributes('style'), `--stack-gap: ${DT_STACK_GAP[300]};`);
      });
    });

    describe('non valid value', function () {
      beforeEach(async function () {
        await wrapper.setProps({ gap: '123' });
      });

      it('should not set inline style', function () {
        assert.isUndefined(wrapper.attributes('style'));
      });
    });
  });
});
