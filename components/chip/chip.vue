<template>
  <span
    :class="chipClasses()"
    data-qa="dt-chip"
    :tabindex="chipTabIndex"
    :aria-labelledby="labelledById"
    @mousedown="onClick"
    @mouseup="onClick"
    @mouseleave="isActive = false"
    @focusout="isActive = false"
    @close="onClose"
    @keydown.enter.once="onClick"
    @keyup.enter="onClick"
    @keyup.delete="onClose"
  >
    <span
      v-if="$slots.icon"
      data-qa="dt-chip-icon"
      class="d-chip__icon"
    >
      <!-- @slot Chip icon -->
      <slot name="icon" />
    </span>
    <dt-avatar
      v-else-if="showAvatar"
      data-qa="dt-chip-avatar"
      :src="avatarProps.src"
      :alt="avatarProps.alt"
      :kind="avatarProps.kind"
    />
    <span
      v-if="$slots.default"
      :id="labelledById"
      data-qa="dt-chip-label"
      class="d-truncate"
    >
      <!-- @slot Content within chip -->
      <slot />
    </span>
    <span
      v-if="!hideClose"
      class="d-chip-btn-holder"
    />
    <span
      ref="chip-btn"
      class="d-chip-btn-container"
    >
      <dt-button
        v-if="!hideClose"
        ref="closeBtn"
        data-qa="dt-chip-close"
        circle
        importance="clear"
        :aria-label="closeButtonProps.ariaLabel"
        v-bind="closeButtonProps"
        @click="$emit('close')"
      >
        <icon-close />
      </dt-button>
    </span>
  </span>
</template>

<script>
import IconClose from '@dialpad/dialtone/lib/dist/vue/icons/IconClose';
import { DtButton } from '../button';
import { DtAvatar } from '../avatar';
import { CHIP_SIZE_MODIFIERS } from './chip_constants';
import { getUniqueString } from '@/common/utils';

export default {
  name: 'DtChip',

  components: {
    IconClose,
    DtAvatar,
    DtButton,
  },

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
     * Hides the close button on the chip
     */
    hideClose: {
      type: Boolean,
      default: false,
    },

    /**
     * The size of the chip.
     * @values xs, sm, md
     * @see https://dialpad.design/components/chip
     */
    size: {
      type: String,
      default: 'md',
      validator: (s) => Object.keys(CHIP_SIZE_MODIFIERS).includes(s),
    },

    /**
     * The interactivity of the chip.
     * Makes chip clickable, apply hover/focus/active style, emit keyboard events etc.
     * @see https://dialpad.design/components/chip
     */
    interactive: {
      type: Boolean,
      default: true,
    },

    /**
     * Id to use for the dialog's aria-labelledby.
     */
    labelledById: {
      type: String,
      default: function () { return getUniqueString(); },
    },

    /**
     * Pass in avatarProps to show an avatar.
     */
    avatarProps: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: ['click', 'close'],

  data () {
    return {
      isActive: false,
    };
  },

  computed: {
    chipTabIndex () {
      return this.interactive ? 0 : -1;
    },

    showAvatar () {
      return Object.keys(this.avatarProps)?.length;
    },
  },

  methods: {
    chipClasses () {
      return [
        'd-chip',
        CHIP_SIZE_MODIFIERS[this.size],
        {
          'd-chip--interactive': this.interactive,
          'd-chip--active': this.isActive,
        },
      ];
    },

    onClose () {
      if (this.interactive) {
        this.$emit('close');
      }
    },

    onClick (event) {
      // Clicking on the button should not update value of isActive.
      const closeBtn = this.$refs.closeBtn;
      if (!this.interactive || closeBtn.$el.parentNode.contains(event.target)) {
        return;
      }
      if (event.type === 'mousedown' || event.type === 'keydown') {
        this.isActive = true;
      } else {
        this.isActive = false;
        this.$emit('click');
      }
    },
  },
};
</script>
