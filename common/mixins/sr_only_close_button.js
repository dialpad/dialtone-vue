/**
 * @displayName SR-Only close button mixin
 */
export default {
  props: {
    /**
     * If true, a hidden close button is included for screen readers
     * @values true, false
     */
    visuallyHiddenClose: {
      type: Boolean,
      default: false,
    },

    /**
     * Label for the visually hidden close button
     * Required if visuallyHiddenClose is set to `true`
     */
    visuallyHiddenCloseLabel: {
      type: String,
      default: '',
    },
  },

  watch: {
    $props: {
      immediate: true,
      deep: true,
      handler () {
        this.validateVisuallyHiddenCloseProps();
      },
    },
  },

  methods: {
    validateVisuallyHiddenCloseProps () {
      if (this.visuallyHiddenClose && !this.visuallyHiddenCloseLabel) {
        console.error('If visuallyHiddenClose prop is true, the component includes a visually hidden ' +
        'close button and you must set the visuallyHiddenCloseLabel prop.');
      }
    },
  },
};
