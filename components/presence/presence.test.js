import { createLocalVue, shallowMount } from '@vue/test-utils';
import { assert } from 'chai';
import { itBehavesLikeHasCorrectClass } from '../../tests/shared_examples/classes';
import DtPresence from './presence.vue';

// Constants
const basePropsData = {};

describe('DtPresence Tests', function () {
  let wrapper;
  let presence;
  let innerPresence;
  // Environment
  let propsData = basePropsData;
  let slots = {};

  // Helpers
  const _setChildWrappers = () => {
    presence = wrapper.find('[data-qa="dt-presence"]');
    innerPresence = wrapper.find('.d-presence__inner');
  };

  const _setWrappers = () => {
    wrapper = shallowMount(DtPresence, {
      propsData,
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
    propsData = basePropsData;
    slots = {};
  });

  describe('Presentation Tests', function () {
    // Shared Examples

    describe('When presence renders', function () {
      // Test Setup
      beforeEach(function () { _setWrappers(); });

      it('should exist', function () {
        assert.isTrue(presence.exists());
      });
    });

    describe('SR Text', function () {
      const srText = 'SR Presence Text';
      beforeEach(function () {
        propsData = {
          ...basePropsData,
          srText,
        };
        _setWrappers();
      });

      it('should correctly render the screen-reader <span/> when an srText prop is passed', function () {
        const srSpan = presence.find('span');
        assert.isTrue(srSpan.exists());
      });
      it('should have the `sr-only` class', function () {
        const srSpan = presence.find('span');
        assert.isTrue(srSpan.classes().includes('sr-only'));
      });
      it('should contain the content of the srText prop', function () {
        const srSpan = presence.find('span');
        assert.strictEqual(srSpan.text(), srText);
      });
    });

    describe('Theme prop', function () {
      beforeEach(function () {
        _setWrappers();
      });

      it('should append no additional classes when no `theme` prop is passed', function () {
        assert.deepEqual(presence.classes(), ['d-presence']);
      });
      it('should append the `d-theme-sidebar-bgc` class when `theme` prop is `default`', async function () {
        await wrapper.setProps({ theme: 'default' });
        assert.deepEqual(presence.classes(), ['d-presence', 'd-theme-sidebar-bgc']);
      });
    });

    describe('Presence color when presence is passed through a prop', function () {
      beforeEach(function () { _setWrappers(); });

      const itBehavesLikeHasCorrectColorClassForPresence = (presence, color) => {
        it('should have correct color class based on presence', async function () {
          await wrapper.setProps({ presence });
          itBehavesLikeHasCorrectClass(innerPresence, color);
        });
      };

      describe('When presence is active', function () {
        itBehavesLikeHasCorrectColorClassForPresence('active', 'd-presence__inner--active');
      });
      describe('When presence is away', function () {
        itBehavesLikeHasCorrectColorClassForPresence('away', 'd-presence__inner--away');
      });
      describe('When presence is busy', function () {
        itBehavesLikeHasCorrectColorClassForPresence('busy', 'd-presence__inner--busy');
      });
      describe('When presence is offline', function () {
        itBehavesLikeHasCorrectColorClassForPresence('offline', 'd-presence__inner--offline');
      });
    });
  });
});
