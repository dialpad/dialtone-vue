import { assert } from 'chai';
import { mount } from '@vue/test-utils';

import DtNoticeAction from './notice_action';
import DtButton from '../button/button';
import sinon from 'sinon';

// Constants
const baseProps = {
  hideClose: false,
  closeButtonProps: { ariaLabel: 'Close' },
  visuallyHiddenCloseLabel: 'Close',
};

const baseSlotsData = {
  default: 'this is the action slot content',
};

describe('DtNoticeAction tests', function () {
  let wrapper;

  let props = baseProps;
  const slotsData = baseSlotsData;

  let closeButton;
  let srOnlyCloseButton;

  const _setWrappers = () => {
    wrapper = mount(DtNoticeAction, {
      props,
      slots: slotsData,
    });
    _setChildWrappers();
  };

  const _setChildWrappers = () => {
    closeButton = wrapper.findComponent(DtButton);
    srOnlyCloseButton = wrapper.find('[data-qa="dt-notice-action-sr-only-close-button"]');
  };

  beforeEach(function () {
    _setWrappers();
  });

  afterEach(function () {
    props = baseProps;
  });

  describe('Presentation Tests', function () {
    describe('When rendered with default slot content', function () {
      it('Should render notice action', function () {
        assert.isTrue(wrapper.exists());
      });

      it('Default slot renders correctly as action text/html', function () {
        const root = wrapper.find('.d-notice__actions');
        assert.strictEqual(root.text(), slotsData.default);
      });

      it('Should not render sr-only close button', function () {
        assert.isFalse(srOnlyCloseButton.exists());
      });
    });

    describe('When hideClose is false', function () {
      it('Close button is displayed', function () {
        assert.isTrue(closeButton.exists());
      });
    });

    describe('When closeButtonProps is passed', function () {
      it('Adds props to button', function () {
        assert.strictEqual(closeButton.attributes()['aria-label'], 'Close');
      });
    });

    describe('When hideClose is true', function () {
      let consoleErrorSpy;

      beforeEach(async function () {
        props = {
          ...baseProps,
          hideClose: true,
        };
        _setWrappers();
        consoleErrorSpy = sinon.spy(console, 'error');
      });

      afterEach(function () {
        consoleErrorSpy = null;
        console.error.restore();
      });

      it('Close button is not displayed', function () {
        assert.isFalse(closeButton.exists());
      });

      it('should output error message', function () {
        assert.isTrue(consoleErrorSpy.calledWith('If hideClose prop is true, visuallyHiddenClose' +
            ' and visuallyHiddenCloseLabel props need to be set so the component' +
            ' always includes a close button'));
      });
    });

    describe('When visuallyHiddenClose is true', function () {
      beforeEach(async function () {
        await wrapper.setProps({ visuallyHiddenClose: true });
        _setChildWrappers();
      });

      it('should contain a visually hidden close button', async function () {
        assert.isTrue(srOnlyCloseButton.exists());
      });

      describe('When visuallyHiddenCloseLabel is null', function () {
        let consoleErrorSpy;
        beforeEach(async function () {
          consoleErrorSpy = sinon.spy(console, 'error');
          await wrapper.setProps({ visuallyHiddenCloseLabel: null });
        });

        afterEach(function () {
          consoleErrorSpy = null;
          console.error.restore();
        });

        it('should output error message', async function () {
          assert.isTrue(consoleErrorSpy.calledWith('If visuallyHiddenClose prop is true, the component includes ' +
          'a visually hidden close button and you must set the visuallyHiddenCloseLabel prop.'));
        });
      });
    });
  });

  describe('Interactivity Tests', function () {
    describe('When hideClose is false', function () {
      describe('When close button is clicked', function () {
        beforeEach(async function () {
          closeButton.vm.$emit('click');
        });
        it('emits event', function () {
          assert.isOk(wrapper.emitted('close'));
        });
      });
    });

    describe('When sr-only close button is enabled and activated', function () {
      beforeEach(async function () {
        await wrapper.setProps({ visuallyHiddenClose: true });
        _setChildWrappers();
        await srOnlyCloseButton.trigger('click');
      });

      it('emits event', function () {
        assert.isOk(wrapper.emitted('close'));
      });
    });
  });
});
