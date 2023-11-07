import { mount } from '@vue/test-utils';
import DtRecipeImageUploadPreview from './image_upload_preview.vue';
import { beforeEach, describe } from '@/node_modules/vitest/dist/index';

// Wrappers
let wrapper;

// Test Environment
let props;
let attrs;
let slots;
let listeners;

// Constants
const baseProps = {
  modelValue: 'initial value',
  inputAriaLabel: 'aria-label text',
  inputClass: 'qa-editor',
};

const baseSlots = {
  middle: 'image carousel',
  footerLeft: 'footer left',
  footerRight: 'footer right',
};

// Helpers
const _setChildWrappers = () => {

};

const _mountWrapper = () => {
  wrapper = mount(DtRecipeImageUploadPreview, {
    props,
    listeners,
    attrs,
    slots,
    attachTo: document.body,
  });
};

describe('DtMessage tests', () => {
  // Test Setup
  beforeAll(() => {
  });

  beforeEach(async () => {
    props = baseProps;
    attrs = {};
    slots = baseSlots;
    _mountWrapper();
    await wrapper.vm.$nextTick();
    _setChildWrappers();
  });

  // Test Teardown
  afterEach(function () {
    props = baseProps;
    slots = baseSlots;
  });

  describe('Presentation Tests', function () {

  });

  describe('Interactivity tests', function () {
  });
});
