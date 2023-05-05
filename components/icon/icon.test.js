import { mount } from '@vue/test-utils';
import DtIcon from './icon.vue';

const baseProps = {
  name: 'accessibility',
};

describe('DtIcon Tests', () => {
  let wrapper;
  let icon;

  const _setWrappers = () => {
    wrapper = mount(DtIcon,
      {
        props: baseProps,
      });
    _setChildWrappers();
  };

  const _setChildWrappers = () => {
    icon = wrapper.findComponent(DtIcon);
  };

  beforeEach(function () {
    _setWrappers();
  });

  describe('Presentation Tests', () => {
    it('Should render the accessibility icon', () => {
      expect(wrapper.exists()).toBe(true);
      expect(icon.exists()).toBe(true);
      expect(icon.classes('d-icon--accessibility')).toBe(true);
    });

    describe('When size prop is not set', () => {
      it('Should have default class', () => {
        expect(icon.classes('d-icon--size-500')).toBe(true);
      });
    });

    describe('When size prop is set', () => {
      beforeEach(async () => {
        await wrapper.setProps({ size: '800' });
      });

      it('Should have correct class', () => {
        expect(icon.classes('d-icon--size-800')).toBe(true);
      });
    });
  });

  describe('Accessibility Tests', () => {
    describe('When ariaLabel prop is set', () => {
      beforeEach(async () => {
        await wrapper.setProps({ ariaLabel: 'icon description' });
        _setChildWrappers();
      });
      it('sets the aria-label attribute', () => {
        expect(icon.attributes('aria-label')).toBe('icon description');
      });
      it('sets aria-hidden to false', () => {
        expect(icon.attributes('aria-hidden')).toBe('false');
      });
    });
  });
});
