import { assert } from 'chai';
import DtNoticeIcon from './notice_icon';
import { mount } from '@vue/test-utils';
import { DtIcon } from '@/components/icon';

// Constants
const baseProps = {
  kind: 'warning',
};

const baseSlotsData = {};

describe('DtNoticeIcon tests', function () {
  let wrapper;
  let icon;
  let props;
  let slotsData;

  const _setWrappers = () => {
    wrapper = mount(DtNoticeIcon, {
      global: { components: { 'dt-icon': DtIcon } },
      props,
      slots: slotsData,
    });
    _setChildWrappers();
  };

  const _setChildWrappers = () => {
    icon = wrapper.findComponent(DtIcon);
  };

  beforeEach(function () {
    props = baseProps;
    slotsData = baseSlotsData;
    _setWrappers();
  });

  describe('Presentation Tests', function () {
    describe('When rendered with default content', function () {
      it('Should render notice icon component', function () {
        assert.isTrue(wrapper.exists());
      });

      it('Should render an icon', function () {
        assert.isTrue(icon.exists());
      });

      it('Should have aria-hidden set to true', function () {
        assert.strictEqual(wrapper.attributes('aria-hidden'), 'true');
      });
    });

    describe('When kind is base', function () {
      beforeEach(async function () {
        await wrapper.setProps({ kind: 'base' });
        _setChildWrappers();
      });

      it('Should render base icon', function () {
        assert.isTrue(icon.classes().includes('d-icon--bell'));
      });
    });

    describe('When custom icon is passed into the slot', function () {
      beforeEach(async function () {
        slotsData = {
          default: '<dt-icon name="accessibility" />',
        };
        _setWrappers();
      });

      it('Should render correctly', async function () {
        assert.isTrue(icon.classes().includes('d-icon--accessibility'));
      });
    });
  });
});