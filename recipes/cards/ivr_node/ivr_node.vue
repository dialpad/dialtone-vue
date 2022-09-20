<template>
  <div
    class="d-d-flex d-fd-column d-ai-center ivr_node__width"
  >
    <ivr-node-top-connector :is-selected="selected" />
    <dt-card
      content-class="d-bt d-bc-black-075 d-px12 d-pt8 d-pb12"
      :container-class="[
        'd-w100p',
        { 'd-ba d-bar4 d-baw4': selected },
        headerColor,
      ]"
      :header-class="[
        'd-bt',
        'd-btw4',
        'd-p0',
        headerColor,
        { 'd-btr4': !selected },
      ]"
      data-qa="ivr-node-card"
      @click="clickNode"
    >
      <template #header>
        <!-- node label and icon section on left of the header -->
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
        <!-- node menu for actions like edit, copy, delete -->
        <ivr-node-actions :dropdown-button-label="menuButtonLabel" />
      </template>
      <template #content>
        <slot />
      </template>
    </dt-card>
  </div>
</template>

<script>
import { DtCard, DtButton } from '@';
import {
  PROMPT_NODES,
  LOGIC_NODES,
  IVR_NODE_ICON_TYPES,
} from './ivr_node_constants.js';
import IvrNodeTopConnector from './ivr_node_top_connector';
import IvrNodeActions from './ivr_node_actions';

export default {
  name: 'DtRecipeIvrNode',

  components: {
    DtCard,
    DtButton,
    IvrNodeTopConnector,
    IvrNodeActions,
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
      if (PROMPT_NODES.includes(this.nodeType)) {
        // TODO replace with Dialtone 7 blues
        return this.selected ? 'prompt_node_border_color__selected' : 'prompt_node_border_color';
      } else if (LOGIC_NODES.includes(this.nodeType)) {
        return this.selected ? 'd-bc-purple-500' : 'd-bc-purple-200';
      }
      return this.selected ? 'd-bc-red-400' : 'd-bc-red-200';
    },
  },

  watch: {},

  methods: {
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
