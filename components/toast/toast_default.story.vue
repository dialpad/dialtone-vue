<template>
  <div>
    <dt-button @click="$attrs.buttonClicked">
      Click to show!
    </dt-button>

    <aside class="d-toast-wrapper">
      <dt-toast
        ref="toast"
        :show.sync="$attrs.isShown"
        :kind="$attrs.kind"
        :title="$attrs.title"
        :message="$attrs.message"
        :title-id="$attrs.titleId"
        :content-id="$attrs.contentId"
        :important="$attrs.important"
        :hide-close="$attrs.hideClose"
        :duration="$attrs.duration"
        :close-button-props="$attrs.buttonCloseProps"
        :visually-hidden-close="$attrs.visuallyHiddenClose"
        :visually-hidden-close-label="$attrs.visuallyHiddenCloseLabel"
        @close="onClose($event)"
      >
        <span
          v-if="$attrs.default"
          v-html="$attrs.default"
        />
        <span v-else>
          Message body with
          <a
            href="#"
            class="d-link"
            :class="$attrs.linkClass"
          >a link</a>.
        </span>

        <template slot="action">
          <span
            v-if="$attrs.action"
            v-html="$attrs.action"
          />
          <dt-button
            v-else
            size="sm"
            importance="outlined"
            :kind="$attrs.buttonKind"
            @click="$attrs.onClick"
          >
            Action
          </dt-button>
        </template>
        <template
          v-if="$attrs.icon"
          slot="icon"
        >
          <dt-icon :name="$attrs.icon" />
        </template>
        <template
          v-if="$attrs.titleOverride"
          slot="titleOverride"
        >
          <span v-html="$attrs.titleOverride" />
        </template>
      </dt-toast>
    </aside>
  </div>
</template>

<script>
import DtToast from './toast.vue';
import DtButton from '../button/button.vue';
import { DtIcon } from '@/components/icon';

export default {
  name: 'ToastDefault',

  components: { DtToast, DtButton, DtIcon },

  data () {
    return {
      isShown: this.show,
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

  watch: {
    show: function (show) {
      this.isShown = show;
    },
  },

  methods: {
    buttonClicked () {
      this.isShown = true;
    },
  },
};
</script>
