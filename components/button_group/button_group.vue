<template>
  <div
    :class="[
      'btn-group',
      BUTTON_GROUP_ALIGNMENT[this.alignment],
      BUTTON_GROUP_SPACING[this.spacing],
    ]"
    :data-qa="dataQaGroup"
    role="group"
  >
    <!-- @slot Default slot for button items -->
    <slot></slot>
  </div>
</template>

<script>
import { BUTTON_GROUP_ALIGNMENT, BUTTON_GROUP_SPACING } from './button_group_constants';

export default {
  name: 'DtButtonGroup',

  props: {
    /**
     * A data qa tag for the button group
     */
    dataQaGroup: {
      type: String,
      default: 'button-group',
    },

    /**
     * Alignment of the buttons inside the container
     */
    alignment: {
      type: String,
      default: 'start',
      validator: (alignment) => Object.keys(BUTTON_GROUP_ALIGNMENT).includes(alignment),
    },

    /**
     * Spacing between buttons
     */
    spacing: {
      type: String,
      default: 'default',
      validator: (spacing) => Object.keys(BUTTON_GROUP_SPACING).includes(spacing),
    },
  },

  data () {
    return {
      BUTTON_GROUP_ALIGNMENT,
      BUTTON_GROUP_SPACING,
    };
  },
};
</script>

<style lang="less">
.btn-group {
  display: flex;

  &.d-btn-group--start {
    justify-content: start;
  }

  &.d-btn-group--end {
    justify-content: end;
  }

  &.d-btn-group--space-between {
    justify-content: space-between;
  }

  .d-btn:not(:last-child) {
    margin-right: var(--su16);
  }

  &.d-btn-group--extra-tight {
    .d-btn:not(:last-child) {
      margin-right: var(--su8);
    }
  }

  &.d-btn-group--tight {
    .d-btn:not(:last-child) {
      margin-right: var(--su12);
    }
  }

  &.d-btn-group--loose {
    .d-btn:not(:last-child) {
      margin-right: var(--su24);
    }
  }
}
</style>
