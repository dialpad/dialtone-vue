import sinon from 'sinon';
import { assert } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import DtRichTextEditor from './rich_text_editor.vue';
import { EditorContent } from '@tiptap/vue-2';

// Wrappers
let wrapper;
let editor;

// Test Environment
let propsData;
let attrs;
let slots;
let listeners;
let inputStub;
const localVue = createLocalVue();

// Constants
const baseProps = {
  value: 'initial value',
  inputAriaLabel: 'aria-label text',
};

// Helpers
const _setChildWrappers = () => {
  editor = wrapper.find('[data-qa="dt-rich-text-editor"]').find('div[contenteditable]');
};

const _mountWrapper = () => {
  wrapper = mount(DtRichTextEditor, {
    propsData,
    components: { EditorContent },
    listeners,
    attrs,
    slots,
    localVue,
  });
};

async function mountWithProps (newProps) {
  // Can't use setProps since the Editor instance is created in mounted().
  // There are helper methods we could use to update the editor options
  // (editor.setOptions), but we want to test that the passed props are
  // properly getting through to the editor, so rather re-mount.
  propsData = { ...propsData, ...newProps };
  _mountWrapper();
  await wrapper.vm.$nextTick();
  _setChildWrappers();
}

describe('DtRichTextEditor tests', function () {
  // Test Setup
  beforeEach(function () {
    propsData = baseProps;
    inputStub = sinon.stub();
    listeners = {
      input: inputStub,
    };
    mountWithProps();
  });

  // Test Teardown
  afterEach(function () {
    propsData = baseProps;
    slots = {};
  });

  describe('Presentation Tests', function () {
    it('should render the component', function () {
      assert.exists(wrapper, 'wrapper exists');
    });

    it('should contain the initial value', function () {
      assert.equal(editor.text(), 'initial value');
    });
  });

  describe('Reactivity Tests', function () {
    describe('User Input Tests', function () {
      describe('When user inputs a value', function () {
        // Shared Examples
        const itBehavesLikeOutputsCorrectly = (value) => {
          it('should emit the output value', async function () {
            // The "input" is an editable div and Vue test utils doesn't provide
            // a setValue() equivalent for non-input elements, so cheat a little
            // and emit an update directly from the editor component. The value
            // emitted will be the initial value from mount.
            await wrapper.vm.editor.emit('update');
            assert.deepEqual(wrapper.emitted().input[0][0], value);
            assert.isTrue(inputStub.called);
          });
        };

        describe('When using text output', function () {
          // Test Setup
          beforeEach(async function () {
            await mountWithProps({ outputFormat: 'text' });
          });

          itBehavesLikeOutputsCorrectly(baseProps.value);
        });

        describe('When using json output', function () {
          // Test Environment
          const jsonOutput = {
            type: 'doc',
            content: [{
              type: 'paragraph',
              content: [{
                text: baseProps.value,
                type: 'text',
              }],
            }],
          };

          // Test Setup
          beforeEach(async function () {
            await mountWithProps({ outputFormat: 'json' });
          });

          itBehavesLikeOutputsCorrectly(jsonOutput);
        });

        describe('When using html output', function () {
          // Test Setup
          beforeEach(async function () {
            await mountWithProps({ outputFormat: 'html' });
          });

          itBehavesLikeOutputsCorrectly(`<p>${baseProps.value}</p>`);
        });
      });
    });
  });

  describe('Accessibility Tests', function () {
    it('should have aria-multiline attribute', function () {
      assert.equal(editor.attributes('aria-multiline'), 'true');
    });

    it('should have role attribute', function () {
      assert.equal(editor.attributes('role'), 'textbox');
    });

    describe('When not editable', function () {
      beforeEach(async function () {
        await mountWithProps({ editable: false });
      });

      it('should have aria-readonly attribute', function () {
        assert.equal(editor.attributes('aria-readonly'), 'true');
      });
    });
  });

  describe('Extendability Tests', function () {
    describe('When an inputAriaLabel prop is provided', function () {
      beforeEach(async function () {
        await mountWithProps({ inputAriaLabel: 'new aria-label' });
      });

      it('should pass through the prop to the editor', function () {
        assert.equal(editor.attributes('aria-label'), 'new aria-label');
      });
    });

    describe('When an inputClass prop is provided', function () {
      beforeEach(async function () {
        await mountWithProps({ inputClass: 'input-class' });
      });

      it('should pass through the prop to the editor', function () {
        assert.isTrue(editor.classes('input-class'));
      });
    });

    describe('When an editable prop is provided', function () {
      beforeEach(async function () {
        await mountWithProps({ editable: false });
      });

      it('should pass through the prop to the editor', function () {
        assert.equal(editor.attributes('contenteditable'), 'false');
      });
    });
  });

  describe('Build Tests', function () {
    it('should not be included in the core build', async function () {
      // Ok this one is a bit goofy, but it's a naive attempt to make sure no
      // one exports this component at the root level.
      const DialtoneVue = await import('../../index.js');
      assert.isFalse(Object.hasOwnProperty.call(DialtoneVue, 'DtRichTextEditor'));
    });
  });
});
