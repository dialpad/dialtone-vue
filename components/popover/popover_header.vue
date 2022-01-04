<template>
  <div
    data-qa="dt-popover-header"
    :class="[
      'd-w100p',
      'd-pl12',
      'd-pr8',
      'd-py6',
      'd-bb',
      'd-bc-black-075',
      'd-baw1',
      'd-d-flex',
      'd-fs16',
      'd-ai-flex-start',
      'd-fw-bold',
      'd-hmn48',
      'd-of-auto',
      popoverHeaderClasses,
      headerClass,
    ]"
  >
    <div
      v-if="isTitleVisible"
      data-qa="dt-popover-title"
      class="d-to-ellipsis d-pt6"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div
      v-if="areHeaderButtonsVisible"
      class="d-pl6 d-d-flex d-ws-nowrap"
    >
      <slot name="header-actions" />
      <dt-button
        v-if="showCloseButton"
        ref="popover__close-button"
        :aria-label="closeButtonAriaLabel"
        circle
        class="d-p6 d-bc-transparent"
        importance="outlined"
        kind="muted"
        @click="$emit('close')"
      >
        <template #icon>
          <icon-close
            class="d-svg--size20"
          />
        </template>
      </dt-button>
    </div>
  </div>
</template>

<script>
import DtButton from '../button/button';
import IconClose from '@dialpad/dialtone/lib/dist/vue/icons/IconClose';
export default {
  name: 'PopoverHeader',
  components: {
    DtButton,
    IconClose,
  },

  props: {
    /**
     * Additional class name for the content wrapper element.
     */
    headerClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * Determines title for popover header.
     * If provided prop is not null, corresponding holder div will be rendered
     */
    title: {
      type: String,
      default: null,
    },

    /**
     * Determines visibility for close button
     */
    showCloseButton: {
      type: Boolean,
      default: false,
    },

    /**
     * Descriptive label for the popover close button in the header.
     */
    closeButtonAriaLabel: {
      type: String,
      default: null,
    },

    /**
     * Determines fixed / sticky styles for popover header
     */
    hasBoxShadow: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    popoverHeaderClasses () {
      return {
        'd-bs-card': this.hasBoxShadow,
        'd-jc-space-between': this.isTitleVisible,
        'd-jc-flex-end': !this.isTitleVisible,
      };
    },

    isTitleVisible () {
      return this.$slots.title || this.title !== null;
    },

    areHeaderButtonsVisible () {
      return this.$slots['header-actions'] || this.showCloseButton;
    },
  },
};
</script>
