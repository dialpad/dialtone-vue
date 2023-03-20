<template>
  <div>
    <!-- TODO: Does this also need an aria label but the button image or is the alt enough? -->
    <dt-button
      data-qa="dt-image-viewer-preview"
      :tabindex="show ? -1 : 0"
      importance="clear"
      @click="open"
    >
      <img
        class="d-wmn64 d-hmn64 w-wm332 d-hmx332"
        :src="imageUrl"
        :alt="imageAlt"
      >
    </dt-button>

    <dt-lazy-show
      transition="d-zoom"
      :aria-hidden="isOpen"
      :show="show"
      class="d-modal"
      data-qa="dt-modal"
      v-on="modalListeners"
      @mouseover="showCloseButton = true"
      @mouseleave="showCloseButton = false"
      @focusin=" showCloseButton = true"
      @focusout=" showCloseButton = false"
    >
      <transition
        appear
        name="d-modal__dialog"
      >
        <div
          v-show="show"
          data-qa="dt-image-viewer-full"
          :class="[
            'd-modal__dialog', 'd-p0 d-bar0 d-wmx80p d-hmx80p d-image-viewer--modal',
          ]"
          role="dialog"
          aria-modal="true"
        >
          <img
            :src="imageUrl"
            :alt="imageAlt"
          >
        </div>
      </transition>
      <dt-button
        v-if="showCloseButton"
        ref="closeImage"
        data-qa="dt-image-viewer-close-btn"
        class="d-modal__close"
        circle
        size="lg"
        importance="clear"
        kind="inverted"
        :aria-label="closeAriaLabel"
        @click="close"
      >
        <template #icon>
          <dt-icon
            name="close"
            size="400"
          />
        </template>
      </dt-button>
    </dt-lazy-show>
  </div>
</template>

<script>
import {} from './image_viewer_constants.js';
import Modal from '@/common/mixins/modal.js';
import { EVENT_KEYNAMES } from '@/common/constants';
import { DtIcon } from '@/components/icon';
import { DtButton } from '@/components/button';
import { DtLazyShow } from '@/components/lazy_show';

export default {
  name: 'DtImageViewer',

  components: {
    DtLazyShow,
    DtButton,
    DtIcon,
  },

  mixins: [Modal],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * URL of the image to be shown
     */
    imageUrl: {
      type: String,
      required: true,
    },

    /**
     * Alt text of image
     */
    imageAlt: {
      type: String,
      required: true,
    },

    /**
     * Aria label for close button
     */
    closeAriaLabel: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      show: false,
      showCloseButton: true,
    };
  },

  computed: {
    isOpen () {
      return `${!this.show}`;
    },

    modalListeners () {
      return {
        ...this.$listeners,

        click: event => {
          (event.target === event.currentTarget) && this.close();
        },

        keydown: event => {
          switch (event.code) {
            case EVENT_KEYNAMES.esc:
            case EVENT_KEYNAMES.escape:
              this.close();
              break;
            case EVENT_KEYNAMES.tab:
              this.trapFocus(event);
              break;
          }
        },

        'after-enter': event => {
          this.focusAfterOpen();
        },
      };
    },
  },

  watch: {
    show: {
      immediate: true,
      handler (isShowing) {
        if (isShowing) {
          // Set a reference to the previously-active element, to which we'll return focus on modal close.
          this.previousActiveElement = document.activeElement;
        } else {
          // Modal is being hidden, so return focus to the previously active element before clearing the reference.
          this.previousActiveElement?.focus();
          this.previousActiveElement = null;
        }
      },
    },
  },

  methods: {
    open () {
      this.show = true;
      this.showCloseButton = true;
    },

    close () {
      this.show = false;
    },

    focusAfterOpen () {
      this.$refs.closeImage.$el.focus();
    },

    trapFocus (e) {
      if (this.show) {
        this.focusTrappedTabPress(e);
      }
    },

  },
};
</script>

<style lang="less">
.d-image-viewer--modal {
  width: unset;
}
</style>
