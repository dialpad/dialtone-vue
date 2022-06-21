<template>
  <!-- applies the transition on initial render -->
  <transition-collapse-height
    :appear="appear"
    v-on="$listeners"
  >
    <div
      v-show="show"
      v-on="$listeners"
    >
      <slot v-if="initialized" />
    </div>
  </transition-collapse-height>
</template>

<script>
import TransitionCollapseHeight from './transition_collapse_height';

export default {
  name: 'DtCollapsibleLazyShow',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    TransitionCollapseHeight,
  },

  /******************
   *     PROPS      *
   ******************/
  props: {
    /**
     * Whether the child slot is shown.
     */
    show: Boolean,

    appear: {
      type: Boolean,
      default: false,
    },
  },

  /******************
   *      DATA      *
   ******************/
  data () {
    return {
      initialized: !!this.show,
    };
  },

  /******************
   *      WATCH     *
   ******************/
  watch: {
    show: function (newValue) {
      if (!newValue || this.initialized) return;

      this.initialized = true;
    },
  },
};
</script>
