<template>
  <transition
    :appear="appear"
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    v-on="$listeners"
  >
    <slot />
  </transition>
</template>

<script>
// https://stackoverflow.com/a/64379393/15171366
export default {
  name: 'TransitionCollapseHeight',

  props: {
    appear: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    /**
     * @param {HTMLElement} element
     */
    beforeEnter (element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = '0px';
        }

        element.style.display = null;
      });
    },

    /**
     * @param {HTMLElement} element
     */
    enter (element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`;
        });
      });
    },

    /**
     * @param {HTMLElement} element
     */
    afterEnter (element) {
      element.style.height = null;
    },

    /**
     * @param {HTMLElement} element
     */
    beforeLeave (element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
      });
    },

    /**
     * @param {HTMLElement} element
     */
    leave (element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = '0px';
        });
      });
    },

    /**
     * @param {HTMLElement} element
     */
    afterLeave (element) {
      element.style.height = null;
    },
  },
};
</script>

<style>
  .enter-active,
  .leave-active {
    overflow: hidden;
    transition: height .3s linear;
  }
</style>
