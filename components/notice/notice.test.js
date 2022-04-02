import { assert } from 'chai';
import { config, shallowMount } from '@vue/test-utils';

import DtNotice from './notice';

// Constants
const baseProps = {
  title: 'Notice Title',
  closeButtonProps: { ariaLabel: 'close' },
};

const baseSlotsData = {
  default: 'default slot content',
  action: 'action slot content',
  icon: 'icon slot content',
};

describe('DtNotice tests', function () {
  let wrapper;

  let rootElement;
  let actionChildStub;
  let contentChildStub;
  let iconChildStub;

  const _setWrappers = () => {
    wrapper = shallowMount(DtNotice, {
      props: baseProps,
      slots: baseSlotsData,
    });
    _setChildWrappers();
  };

  const _setChildWrappers = () => {
    rootElement = wrapper.find('aside');
    actionChildStub = wrapper.findComponent('dt-notice-action-stub');
    contentChildStub = wrapper.findComponent('dt-notice-content-stub');
    iconChildStub = wrapper.findComponent('dt-notice-icon-stub');
  };

  before(function () {
    config.renderStubDefaultSlot = true;
  });

  beforeEach(function () {
    _setWrappers();
  });

  after(function () {
    config.renderStubDefaultSlot = false;
  });

  describe('Presentation Tests', function () {
    describe('When rendered with default content', function () {
      it('Should render notice component', function () {
        assert.isTrue(wrapper.exists());
      });

      it('action slot is passed down correctly', async function () {
        assert.strictEqual(actionChildStub.text(), baseSlotsData.action);
      });

      it('default slot is passed down correctly', async function () {
        assert.strictEqual(contentChildStub.text(), baseSlotsData.default);
      });

      it('icon slot is passed down correctly', async function () {
        assert.strictEqual(iconChildStub.text(), baseSlotsData.icon);
      });
    });

    describe('When important is false', function () {
      it('Has correct class', function () {
        assert.strictEqual(rootElement.classes('d-notice--important'), false);
      });
    });

    describe('When important is true', function () {
      beforeEach(async function () {
        await wrapper.setProps({ important: true });
      });

      it('Has correct class', async function () {
        assert.strictEqual(rootElement.classes('d-notice--important'), true);
      });
    });

    describe('When kind is not specified', function () {
      it('Does not add notice kind class', async function () {
        assert.strictEqual(rootElement.classes('d-notice--'), false);
      });
    });

    describe('When kind is set to error', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: 'error' });
      });

      it('Has correct class', async function () {
        assert.strictEqual(rootElement.classes('d-notice--error'), true);
      });
    });

    describe('When closeButtonProps is passed', function () {
      it('Has correct class', async function () {
        assert.deepEqual(actionChildStub.vm.closeButtonProps, { ariaLabel: 'close' });
      });
    });
  });

  describe('Accessibility Tests', function () {
    describe('When rendered with default content', function () {
      it('Shows correct role', function () {
        assert.strictEqual(contentChildStub.attributes('role'), 'status');
      });
    });

    describe('When role is alert', function () {
      beforeEach(async function () {
        await wrapper.setProps({ role: 'alert' });
      });

      it('Shows correct role', async function () {
        assert.strictEqual(contentChildStub.attributes('role'), 'alert');
      });
    });
  });
});
