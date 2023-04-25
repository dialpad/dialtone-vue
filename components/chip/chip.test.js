import { mount } from '@vue/test-utils';
import EmptyComponentFixture from '../../tests/fixtures/component.vue';
import DtChip from './chip.vue';

// Constants
const props = {
  closeButtonProps: {
    ariaLabel: 'close',
  },
};

describe('DtChip Tests', () => {
  let testContext;

  beforeAll(() => {
    testContext = {};
  });

  // Wrappers
  let wrapper;
  let chip;
  let icon;
  let avatar;
  let label;
  let remove;

  // Environment
  let props = props;
  let slots = {};
  let listeners;

  // Helpers
  const _setChildWrappers = () => {
    chip = wrapper.find('[data-qa="dt-chip"]');
    icon = wrapper.find('[data-qa="dt-chip-icon"]');
    avatar = wrapper.find('[data-qa="dt-chip-avatar"]');
    label = wrapper.find('[data-qa="dt-chip-label"]');
    remove = wrapper.find('[data-qa="dt-chip-close"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtChip, {
      props,
      slots,
      listeners,
    });
    _setChildWrappers();
  };

  // Teardown
  afterEach(() => {
    props = props;
    slots = {};
  });

  describe('Presentation Tests', () => {
    describe('When rendered with default props', () => {
      const defaultText = 'TEXT';
      beforeEach(() => {
        slots = { default: defaultText };
        _setWrappers();
      });
      it(
        'should render the component',
        () => { assert.exists(wrapper, 'wrapper exists'); },
      );
      it('should render chip', () => { assert.exists(chip, 'chip exists'); });
      it(
        'should render remove button',
        () => { assert.exists(remove, 'close button exists'); },
      );
      it('should render label', () => { assert.exists(label); });
      it(
        'should display the correct text',
        () => { expect(label.text()).toBe(defaultText); },
      );
      it('should not render icon', () => { expect(icon.exists()).toBe(false); });
      it(
        'should not render avatar',
        () => { expect(avatar.exists()).toBe(false); },
      );
      it('default interactive', () => {
        expect(chip.element.tagName).toBe('BUTTON');
      });
      it('chip should have aria-labelledby', () => {
        expect('aria-labelledby' in chip.attributes()).toBeTruthy();
      });
      it('button should have aria-label', () => {
        expect(remove.attributes('aria-label')).toEqual('close');
      });
    });

    describe('When interactive is false', () => {
      beforeEach(async () => {
        props = {
          ...props,
          interactive: false,
        };
        await _setWrappers();
      });
      it('should not be interactive', () => {
        expect(chip.element.tagName).toBe('SPAN');
      });
    });

    describe('When hide close button', () => {
      beforeEach(async () => {
        props = {
          ...props,
          hideClose: true,
        };
        await _setWrappers();
      });
      it(
        'should not render remove button',
        () => { expect(remove.exists()).toBe(false); },
      );
    });

    describe('When show avatar', () => {
      beforeEach(() => {
        props = {
          ...props,
          avatarProps: {
            SRC: 'image.png',
            ALT: 'Avatar image',
          },
        };
        _setWrappers();
      });
      it('should render avatar', () => { assert.exists(avatar); });
    });

    describe('With icon slot', () => {
      beforeEach(() => {
        slots = {
          icon: EmptyComponentFixture,
        };
        _setWrappers();
      });
      it('should render icon', () => { assert.exists(icon); });
    });
  });

  describe('Interactivity Tests', () => {
    beforeEach(() => {
      _setWrappers();
    });

    describe('When close button is clicked', () => {
      beforeEach(async () => {
        await remove.trigger('click');
      });
      it('should emit close event', () => {
        expect('close' in wrapper.emitted()).toBeTruthy();
      });
    });

    describe('When delete is pressed on a chip', () => {
      beforeEach(async () => {
        await chip.trigger('keyup', { code: 'DELETE' });
      });
      it('should emit close event', () => {
        expect('close' in wrapper.emitted()).toBeTruthy();
      });
    });
  });
});
