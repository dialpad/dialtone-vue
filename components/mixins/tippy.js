import { getUniqueString } from '../utils';
import { TOOLTIP_DIRECTION_MODIFIERS } from '../tooltip';

const hideOnEsc = {
  name: 'hideOnEsc',
  defaultValue: true,
  fn ({ hide }) {
    function onKeyDown (event) {
      if (event.key === 'Escape') {
        hide();
      }
    }

    return {
      onShow () {
        document.addEventListener('keydown', onKeyDown);
      },
      onHide () {
        document.removeEventListener('keydown', onKeyDown);
      },
    };
  },
};

export default {
  props: {
    /**
     * The id of the tooltip
     */
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * This property is needed for define fallback placements
     * by providing a list of placements to try.
     * */
    flip: {
      type: Array,
      default: () => ['left-center', 'top-center'],
    },

    /**
     * Add inverted class
     */
    inverted: {
      type: Boolean,
      default: false,
    },

    /**
     * This property is needed for focus event
     */
    tabIndex: {
      type: [String, Number],
      default: '0',
    },

    /**
     *  Displaces the tippy from its reference element
     *  in pixels (skidding and distance).
     */
    offset: {
      type: Array,
      default: () => [0, 10],
    },

    /**
     * Describes the preferred placement of the tooltip
     */
    arrowDirection: {
      type: String,
      default: 'bottom-center',
      validator (direction) {
        return TOOLTIP_DIRECTION_MODIFIERS.includes(direction);
      },
    },

    /**
     * The element to append the tippy to.
     */
    appendTo: {
      type: [String, HTMLElement],
      default: () => document.body,
    },

    /**
     * Determines if the tippy has interactive content inside of it,
     * so that it can be hovered over and clicked inside without hiding.
     */
    interactive: {
      type: Boolean,
      default: false,
    },

    /**
     * This describes the area that the element
     * will be checked for overflow relative to.
     */
    flipBoundary: {
      type: [String, HTMLElement],
      default: 'popper',
    },

    /**
     * Determines the size of the invisible border around the
     * tippy that will prevent it from hiding if the cursor left it.
     * */
    interactiveBorder: {
      type: Number,
      default: 2,
    },

    /**
     * A provided message for the tooltip content
     */
    message: {
      type: String,
      default: '',
    },

    /**
     * Determines the events that cause the tippy to show.
     * Multiple event names are separated by spaces.
     * **/
    trigger: {
      type: String,
      default: 'mouseenter focus click',
    },

    /***
     * Determines if the tippy hides upon clicking the
     * reference or outside of the tippy.
     * The behavior can depend upon the trigger events used.
     * */
    hideOnClick: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    animateShow (box) {
      requestAnimationFrame(() => {
        box.classList.add('fade-in');
        box.classList.remove('fade-out');
      });
    },

    animateHide (box, instance) {
      box.classList.remove('fade-in');
      box.classList.add('fade-out');

      setTimeout(() => {
        requestAnimationFrame(() => {
          instance.unmount();
        });
      }, 150);
    },
    getOptions ({ popperOptions, tippyOptions } = {}) {
      return {
        hideOnClick: this.hideOnClick,
        offset: this.offset,
        interactiveBorder: this.interactiveBorder,
        appendTo: this.appendTo,
        interactive: this.interactive,
        allowHTML: true,
        trigger: this.trigger,
        popperOptions: popperOptions || {},
        animation: true,
        delay: [180, 180],
        render: () => {
          // The recommended structure is to use the popper as an outer wrapper
          const popper = document.createElement('div');
          popper.className = 'tippy-box d-ps-absolute';
          popper.appendChild(this.$refs.content);
          return {
            popper,
          };
        },

        plugins: [hideOnEsc],
        ...(tippyOptions || {}),
      };
    },
  },

  beforeDestroy () {
    this.tip?.destroy();
  },
};
