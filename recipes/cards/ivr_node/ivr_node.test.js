import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import DtRecipeIvrNode from './ivr_node.vue';
import {
  IVR_NODE_COLOR_MAPPING, IVR_NODE_HANGUP, IVR_NODE_LABELS,
} from '@/recipes/cards/ivr_node/ivr_node_constants';

const basePropsData = {
  menuButtonAriaLabel: 'Node menu',
  nodeType: IVR_NODE_HANGUP,
  nodeLabel: IVR_NODE_LABELS[IVR_NODE_HANGUP],
  isSelected: false,
};

const baseSlots = {
  content: '<p>Hangup</p>',
  menuItems: '<ul><li>edit</li><li>copy</li><li>delete</li></ul>',
};

describe('DtPagination Tests', function () {
  // Wrappers
  let wrapper;
  let topConnector;
  let nodeIcon;

  // Environment
  let propsData = basePropsData;
  let slots = baseSlots;

  // Helpers
  const _setChildWrappers = () => {
    topConnector = wrapper.find('[data-qa="dt-top-connector"]');
    nodeIcon = wrapper.find('[data-qa="dt-ivr-node-icon"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtRecipeIvrNode, {
      propsData,
      slots,
    });
    _setChildWrappers();
  };

  // Teardown
  afterEach(function () {
    propsData = basePropsData;
    slots = baseSlots;
  });

  describe('Presentation Tests', function () {
    describe('When rendered with default props', function () {
      beforeEach(function () {
        _setWrappers();
      });
      it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });
      it('should render top connector dot', function () { assert.exists(topConnector, 'top connector exists'); });
      it('Default slot renders correctly as card content', function () {
        const content = wrapper.find('.d-card__content');
        assert.equal(content.text(), 'Hangup');
      });
    });

    describe('When top connector has dtmf', function () {
      beforeEach(async function () {
        propsData = {
          ...basePropsData,
          dtmfKey: '2',
        };
        await _setWrappers();
      });
      it('should render dtmf connector', function () {
        const dtmfDot = wrapper.find('[data-qa="dt-top-connector-dtmf"]');
        assert.exists(dtmfDot, 'dtmf dot exists');
        assert.equal(dtmfDot.text(), '2');
      });
    });

    describe('When node is selected', function () {
      beforeEach(async function () {
        propsData = {
          ...basePropsData,
          isSelected: true,
        };
        await _setWrappers();
      });
      it('should include selected class', function () {
        const card = wrapper.find('[data-qa="dt-card"]');
        const header = wrapper.find('.d-card__header');
        assert.isTrue(card.classes().includes(IVR_NODE_COLOR_MAPPING[IVR_NODE_HANGUP].selected));
        assert.isTrue(header.classes().includes(IVR_NODE_COLOR_MAPPING[IVR_NODE_HANGUP].selected));
      });
    });
  });

  describe('Interactivity Tests', function () {
    beforeEach(function () {
      _setWrappers();
    });

    describe('When node is clicked', function () {
      beforeEach(async function () {
        await nodeIcon.trigger('click');
      });
      it('should emit click event', function () {
        assert.equal(wrapper.emitted().click);
      });
    });
  });
});
