<template>
  <!-- applies the transition on initial render -->
  <transition
    :appear="appear"
    mode="out-in"
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <!-- IMPORTANT:
      Since both elements are the same type, the Vue VDOM cannot
      distinguish between them whenever they mount/unmount.
      This causes the transition to think that they're both referring
      to the same element and as a result the transition animation
      does not apply.

      To differentiate them, we need to add a unique
      key attribute on both instances to let the VDOM know that
      they're both different nodes.
    -->
    <component
      :is="elementType"
      v-if="isExpanded"
      key="onOpen"
      v-on="$listeners"
    >
      <!-- @slot slot for Content when collapsible is expanded -->
      <slot name="contentOnExpanded" />
    </component>
    <component
      :is="elementType"
      v-else
      key="onClose"
      v-on="$listeners"
    >
      <!-- @slot slot for Content when collapsible is collapsed -->
      <slot name="contentOnCollapsed" />
    </component>
  </transition>
</template>

<script>
export default {
  name: 'DtCollapsibleLazyShow',

  inheritAttrs: false,

  /******************
   *     PROPS      *
   ******************/
  props: {
    /**
     * Whether the child slot is shown.
     */
    isExpanded: {
      type: Boolean,
      default: null,
    },

    /**
     * Enable/Disable transition animation
     */
    appear: {
      type: Boolean,
      default: false,
    },

    /**
     * HTML element type (tag name) of the content wrapper element.
     */
    elementType: {
      type: String,
      default: 'div',
    },
  },
};
</script>

<style>
.enter-active {
  animation: fade-in 0.2s;
}
.leave-active {
  animation: fade-in 0.2s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
