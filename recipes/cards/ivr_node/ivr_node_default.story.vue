<template>
  <dt-recipe-ivr-node
    :node-label="label"
    :node-type="nodeType"
    :drop-down-menu-items="items"
    :is-selected="isSelected"
    :menu-button-label="menuButtonLabel"
  >
    <template v-if="expert">
      <p class="d-fs14 d-fw-bold">
        Account Issues
      </p>
      <p class="d-fs14">
        19 Nodes
      </p>
      <dt-button
        importance="clear"
        icon-position="right"
      >
        Launch Expert
        <template #icon>
          <icon-launch />
        </template>
      </dt-button>
    </template>
    <template v-if="transfer">
      <div class="d-d-flex d-ai-center d-gg8">
        <dt-avatar>
          <img
            data-qa="dt-avatar-image"
            :src="avatarSrc"
            alt="Person Avatar"
          >
        </dt-avatar>
        <p>Carolina Garcia Rodriguez</p>
      </div>
    </template>
    <template v-if="hangup || branch || goTo">
      <p class="d-fs14 d-fw-bold">
        Name
      </p>
      <p class="d-fs14">
        Description
      </p>
    </template>
    <template v-if="play">
      <p class="d-fs14 d-fc-purple-700">
        2022-Greeting.mp3
      </p>
    </template>
    <template v-if="collect || menu">
      <p class="d-fs14 d-fw-bold">
        {{ label }} prompt
      </p>
      <p class="d-fs14 d-fc-purple-700">
        {{ fileName }}
      </p>
    </template>
  </dt-recipe-ivr-node>
</template>

<script>
import DtRecipeIvrNode from './ivr_node';
import {
  IVR_NODE_BRANCH,
  IVR_NODE_EXPERT, IVR_NODE_GO_TO, IVR_NODE_HANGUP,
  IVR_NODE_LABELS,
  IVR_NODE_PROMPT_COLLECT,
  IVR_NODE_PROMPT_MENU,
  IVR_NODE_PROMPT_PLAY, IVR_NODE_TRANSFER,
} from './ivr_node_constants';
import IconLaunch from '@dialpad/dialtone/lib/dist/vue/icons/IconLaunch';
import DtButton from '@/components/button/button';
import DtAvatar from '@/components/avatar/avatar';
import avatarImage from './avatar.png';

export default {
  name: 'DtRecipeIvrNodeDefault',
  components: { DtButton, DtRecipeIvrNode, IconLaunch, DtAvatar },
  props: {
    nodeType: {
      type: String,
      default: null,
    },
  },

  computed: {
    avatarSrc () {
      return avatarImage;
    },

    items () {
      return [
        { name: 'Edit', id: 1 },
        { name: 'Copy', id: 2 },
        { name: 'Delete', id: 3 },
      ];
    },

    expert () {
      return this.nodeType === IVR_NODE_EXPERT;
    },

    menu () {
      return this.nodeType === IVR_NODE_PROMPT_MENU;
    },

    collect () {
      return this.nodeType === IVR_NODE_PROMPT_COLLECT;
    },

    play () {
      return this.nodeType === IVR_NODE_PROMPT_PLAY;
    },

    goTo () {
      return this.nodeType === IVR_NODE_GO_TO;
    },

    branch () {
      return this.nodeType === IVR_NODE_BRANCH;
    },

    transfer () {
      return this.nodeType === IVR_NODE_TRANSFER;
    },

    hangup () {
      return this.nodeType === IVR_NODE_HANGUP;
    },

    label () {
      return IVR_NODE_LABELS[this.nodeType];
    },

    fileName () {
      return this.menu
        ? 'americas_office-workflow_main-menu-2022--FINAL.mp3'
        : 'americas_office-collect-menu-2022-FINAL.mp3';
    },
  },
};
</script>
