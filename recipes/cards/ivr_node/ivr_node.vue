<template>
  <div
    class="d-d-flex d-fd-column d-ai-center ivr_node__width"
  >
    <ivr-node-top-connector :is-selected="selected" />
    <dt-card
      content-class="d-bt d-bc-black-075 d-px12 d-pt8 d-pb12"
      :container-class="containerClasses()"
      :header-class="headerClasses()"
      @click="clickNode"
    >
      <template #header>
        <div class="d-d-flex d-ai-center">
          <dt-button
            :aria-label="nodeType"
            importance="clear"
          >
            <template #icon>
              <component
                :is="nodeIcon"
                class="d-fc-black-900"
              />
            </template>
          </dt-button>
          <p class="d-fs14 d-fw-bold">
            {{ nodeLabel }}
          </p>
        </div>
        <dt-dropdown
          placement="bottom-end"
        >
          <template #anchor>
            <dt-button
              importance="clear"
              :aria-label="menuButtonLabel"
            >
              <template #icon>
                <icon-menu-vertical class="d-fc-black-900" />
              </template>
            </dt-button>
          </template>
          <template #list>
            <slot name="menuItems" />
          </template>
        </dt-dropdown>
      </template>
      <template #content>
        <slot />
      </template>
    </dt-card>
  </div>
</template>

<script>
import { DtCard, DtButton, DtDropdown, DtListItem } from '@';
import IconMenuVertical from '@dialpad/dialtone/lib/dist/vue/icons/IconMenuVertical';
import {
  IVR_NODE_BRANCH,
  IVR_NODE_EXPERT, IVR_NODE_GO_TO, IVR_NODE_HANGUP,
  IVR_NODE_ICON_TYPES,
  IVR_NODE_PROMPT_COLLECT,
  IVR_NODE_PROMPT_MENU,
  IVR_NODE_PROMPT_PLAY, IVR_NODE_TRANSFER,
} from './ivr_node_constants.js';
import IvrNodeTopConnector from './ivr_node_top_connector';

export default {
  name: 'DtRecipeIvrNode',

  components: {
    IconMenuVertical,
    DtCard,
    DtButton,
    DtDropdown,
    DtListItem,
    IvrNodeTopConnector,
  },

  mixins: [],

  props: {

    /**
     * type of IVR Node.
     */
    nodeType: {
      type: String,
      required: true,
    },

    /**
     * Descriptive label for the node name.
     */

    nodeLabel: {
      type: String,
      required: true,
    },

    /**
     * Selected state of the node
     */
    selected: {
      type: Boolean,
      default: false,
    },

    /**
     * Translated string for header menu button
     */
    menuButtonLabel: {
      type: String,
      required: true,
    },
  },

  emits: [
    /**
     * Add node click event
     *
     * @event click
     * @type {PointerEvent | KeyboardEvent}
     */
    'click',
  ],

  data () {
    return {};
  },

  computed: {
    nodeIcon () {
      return IVR_NODE_ICON_TYPES[this.nodeType];
    },

    headerColor () {
      return this.nodeColors();
    },
  },

  watch: {},

  methods: {
    nodeColors () {
      const promptNodes = [IVR_NODE_PROMPT_COLLECT, IVR_NODE_PROMPT_MENU, IVR_NODE_PROMPT_PLAY];
      const logicNodes = [IVR_NODE_EXPERT, IVR_NODE_BRANCH, IVR_NODE_GO_TO];
      const terminalNodes = [IVR_NODE_HANGUP, IVR_NODE_TRANSFER];
      if (promptNodes.includes(this.nodeType)) {
        // TODO replace with Dialtone 7 blues
        return this.selected ? 'prompt_node_border_color__selected' : 'prompt_node_border_color';
      } else if (logicNodes.includes(this.nodeType)) {
        return this.selected ? 'd-bc-purple-500' : 'd-bc-purple-200';
      } else if (terminalNodes.includes(this.nodeType)) {
        return this.selected ? 'd-bc-red-400' : 'd-bc-red-200';
      }
    },

    headerClasses () {
      const common = ['d-bt d-btw4 d-p0', this.headerColor];
      return this.selected ? common : [...common, 'd-btr4'];
    },

    containerClasses () {
      return this.selected ? `d-w100p d-ba d-bar4 d-baw4 ${this.headerColor}` : 'd-w100p';
    },

    clickNode (event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="less">
.ivr_node__width {
  width: 280px;
}
// TODO remove when Dialtone 7 releases.
.prompt_node_border_color {
  --bco: 100%;
  border-color: #84BDFF !important;
}
.prompt_node_border_color__selected {
  --bco: 100%;
  border-color: #51A0FE !important;
}
</style>
