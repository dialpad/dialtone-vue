<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div>
    <dt-button @click="buttonClicked">
      Click to show!
    </dt-button>

    <dt-toast
      ref="toast"
      :kind="kind"
      :title="title"
      :title-id="titleId"
      :content-id="contentId"
      :important="important"
      :hide-close="hideClose"
      :close-button-props="buttonCloseProps"
      @close="displayToast = false"
    >
      <span>
        Message body with
        <a
          href="#"
          class="d-link"
          :class="linkClass"
        >a link.</a>
      </span>

      <template
        v-if="action"
        #action
      >
        <dt-button
          :kind="buttonKind"
          importance="outlined"
        >
          {{ action }}
        </dt-button>
      </template>
      <template
        v-if="icon"
        #icon
      >
        <component :is="icon" />
      </template>
      <template
        v-if="titleOverride"
        #titleOverride
      >
        <span v-html="titleOverride" />
      </template>
    </dt-toast>
  </div>
</template>

<script>
import DtToast from './toast';
import DtButton from '../button/button';
import icon from '../mixins/icon';

export default {
  name: 'ToastDefault',

  components: { DtToast, DtButton },

  mixins: [icon],

  data () {
    return {
      displayToast: false,
    };
  },

  computed: {
    shouldInvertButton () {
      return this.kind === 'base' || this.kind === 'error' || this.kind === 'info';
    },

    isInverted () {
      return this.important && this.shouldInvertButton;
    },

    buttonKind () {
      return this.isInverted ? 'inverted' : 'muted';
    },

    linkClass () {
      return this.isInverted ? 'd-link--inverted' : 'd-link--muted';
    },

    buttonCloseProps () {
      return {
        ...this.closeButtonProps,
        kind: this.buttonKind,
        ariaLabel: 'Close',
      };
    },
  },

  methods: {
    buttonClicked () {
      this.$refs.toast.show();
    },
  },
};
</script>
