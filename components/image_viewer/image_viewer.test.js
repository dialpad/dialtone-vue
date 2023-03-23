import { assert } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import DtImageViewer from './image_viewer.vue';
import sinon from 'sinon';

// Constants
const basePropsData = {
  imageSrc: 'test.png',
  imageAlt: 'imageAltText',
  closeAriaLabel: 'closeButtonAriaLabel',
  imageClass: 'd-wmn64 d-hmn64 w-wmx332 d-hmx332',
  ariaLabel: 'Click to open image',
};

describe('DtImageViewer Tests', function () {
  // Wrappers
  let wrapper;
  let imageViewerPreview;
  let imageViewerFull;
  let closeButton;
  let previewImage;
  let fullImage;
  let overlay;

  // Environment
  let propsData = basePropsData;
  let attrs = {};
  let slots = {};
  let provide = {};

  // Helpers
  const _setChildWrappers = () => {
    imageViewerPreview = wrapper.find('[data-qa="dt-image-viewer-preview"]');
    previewImage = imageViewerPreview.find('img');
  };

  const _openModal = async () => {
    await imageViewerPreview.trigger('click');
    _setFullImageChildWrappers();
  };

  const _setFullImageChildWrappers = () => {
    imageViewerFull = wrapper.find('[data-qa="dt-image-viewer-full"]');
    fullImage = imageViewerFull.find('img');
    closeButton = wrapper.find('[data-qa="dt-image-viewer-close-btn"');
    overlay = wrapper.find('[data-qa="dt-modal"]');
  };

  const transitionStub = () => ({
    render: function (h) {
      return this.$options._renderChildren;
    },
  });

  const _setWrappers = () => {
    wrapper = mount(DtImageViewer, {
      propsData,
      attrs,
      slots,
      provide,
      localVue: this.localVue,
      stubs: {
        // this gets around transition async problems. See https://v1.test-utils.vuejs.org/guides/common-tips.html
        transition: transitionStub(),
      },
      attachTo: document.body,
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {
    // RequestAnimationFrame and cancelAnimationFrame are undefined in the scope
    // Need to mock them to avoid error
    global.requestAnimationFrame = sinon.spy();
    global.cancelAnimationFrame = sinon.spy();
    this.localVue = createLocalVue();
  });

  beforeEach(function () {
    _setWrappers();
  });

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    attrs = {};
    slots = {};
    provide = {};
  });
  after(function () {
    // Restore RequestAnimationFrame and cancelAnimationFrame
    global.requestAnimationFrame = undefined;
    global.cancelAnimationFrame = undefined;
  });

  describe('Presentation Tests', function () {
    /*
     * Test(s) to ensure that the component is correctly rendering
     */

    describe('Viewing the image as a preview', function () {
      it('should render the component', function () {
        assert.exists(wrapper);
      });

      it('Should display the image in a preview form', function () {
        assert.exists(imageViewerPreview);
        assert.exists(previewImage);
      });
    });

    describe('Viewing the image in full screen modal', function () {
      beforeEach(async function () {
        await _openModal();
      });

      it('Should show the image and a close button', function () {
        assert.exists(fullImage);
        assert.exists(imageViewerFull.find('img'));
        assert.exists(closeButton);
      });
    });
  });

  describe('Accessibility Tests', function () {
    /*
     * Test(s) to ensure that the component is accessible
     */

    describe('When image has not been clicked', function () {
      it('should have an aria labels', function () {
        assert.strictEqual(previewImage.attributes('alt'), propsData.imageAlt);
        assert.strictEqual(imageViewerPreview.attributes('aria-label'), propsData.ariaLabel);
      });
    });

    describe('After the image is open', function () {
      beforeEach(async function () {
        await _openModal();
      });

      it('should have an aria labels', function () {
        assert.strictEqual(fullImage.attributes('alt'), propsData.imageAlt);
        assert.strictEqual(closeButton.attributes('aria-label'), propsData.closeAriaLabel);
      });
    });
  });

  describe('Interactivity Tests', function () {
    /*
     * Test(s) to ensure that the component correctly handles user input
     */

    describe('As an image preview', function () {
      it('should open on click', async function () {
        await _openModal();
        assert.exists(fullImage);
      });
    });

    describe('After the image is open', function () {
      beforeEach(async function () {
        await _openModal();
      });

      it('Should close the image when I press close', async function () {
        assert.exists(imageViewerFull);

        await closeButton.trigger('click');

        assert.isFalse(imageViewerFull.isVisible());
      });

      it('Should close the image when I press the background', async function () {
        assert.exists(imageViewerFull);

        await overlay.trigger('click');

        assert.isFalse(imageViewerFull.isVisible());
      });

      it('Should close the image when I press esc', async function () {
        assert.exists(imageViewerFull);

        await imageViewerFull.trigger('keydown', {
          code: 'Esc',
        });

        assert.isFalse(imageViewerFull.isVisible());
      });
    });
  });

  // No Validation tests
  // No Extendability tests
});
