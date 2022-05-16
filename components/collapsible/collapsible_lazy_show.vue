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

// https://codepen.io/kdydesign/pen/VrQZqx
<style>
  .expand-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .expand-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .expand-enter-to, .expand-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .expand-enter, .expand-leave-to {
    overflow: hidden;
    max-height: 0;
  }
</style>
