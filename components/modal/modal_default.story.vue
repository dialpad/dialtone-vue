<template>
  <div>
    <dt-modal
      :close-button-props="closeButtonProps"
      :show="isOpen"
    >
    </dt-modal>
    <dt-button
      @click="isOpen = !isOpen"
    >
      Click to open
    </dt-button>
  </div>
</template>

<script>
import DtModal from './modal';
import { DtButton } from '../button';
import Modal from '../mixins/modal.js';
import { MODAL_KIND_MODIFIERS, MODAL_SIZE_MODIFIERS } from './modal_constants';

/**
 * Base Vue component for Dialtone Modal.
 * @displayName DtModal
 */
export default {
  name: 'DtModal',

  components: {
    DtModal,
    DtButton,
  },

  mixins: [Modal],

  props: {
    /**
     * A set of props to be passed into the modal's close button. Requires an 'ariaLabel' property.
     */
    closeButtonProps: {
      type: Object,
      required: true,
      validator: (props) => {
        return !!props.ariaLabel;
      },
    },

    /**
     * Whether the modal should be shown.  Parent component can sync on this value to control the modal's visibility.
     */
    show: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      MODAL_KIND_MODIFIERS,
      MODAL_SIZE_MODIFIERS,
      isOpen: this.open || false,
    };
  },

  computed: {
    buttonCloseProps () {
      return {
        ...this.closeButtonProps,
        ariaLabel: 'Close',
      };
    },

    open () {
      return `${!this.show}`;
    },

    hasFooterSlot () {
      return !!this.$slots.footer;
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
    close () {
      this.$emit('update:show', false);
    },

    setFocusAfterTransition ({ propertyName }) {
      // We only focus if the dialog is showing, and 'transform' seems to be the most reliable property to track.
      // Note: 'visibility' would be an ideal prop to watch here, but it doesn't fire if the previous close transition
      // was still in progress, making it a little flakey when quickly opening/closing a modal repeatedly.
      if (!this.show || propertyName !== 'transform') {
        return;
      }
      this.focusFirstElement();
    },

    trapFocus (e) {
      if (this.show) {
        this.focusTrappedTabPress(e);
      }
    },
  },
};
</script>
