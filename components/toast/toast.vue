<template>
  <div
    data-qa="dt-toast-container"
  >
    <div
      ref="anchor"
      data-qa="dt-toast-anchor"
    >
      <slot
        name="anchor"
        :attrs="{
          'aria-expanded': showToast.toString(),
          'aria-controls': id,
          'aria-haspopup': 'dialog',
        }"
      />
    </div>
    <dt-lazy-show
      :id="id"
      ref="content"
      data-qa="dt-toast"
      :data-placement="placement"
      :aria-hidden="`${!showToast}`"
      :transition="transition"
      :show="showToast"
      :class="[
        'd-toast',
        kindClass,
        { 'd-toast--important': important },
      ]"
      v-on="$listeners"
      @after-leave="onLeave"
    >
      <div
        ref="toast__content"
        class="d-toast__dialog"
      >
        <dt-notice-icon
          :kind="kind"
          data-qa="dt-toast-icon"
          v-on="$listeners"
        >
          <!-- @slot Use a custom icon -->
          <slot name="icon" />
        </dt-notice-icon>
        <dt-notice-content
          :title-id="titleId"
          :content-id="contentId"
          :title="title"
          :role="role"
          data-qa="dt-toast-content"
          v-on="$listeners"
        >
          <template #titleOverride>
            <!-- @slot Allows you to override the title, only use this if you need to override
          with something other than text. Otherwise use the "title" prop. -->
            <slot name="titleOverride" />
          </template>
          <!-- @slot the main textual content of the toast -->
          <slot>
            {{ message }}
          </slot>
        </dt-notice-content>
        <dt-notice-action
          :hide-close="hideClose"
          :close-button-props="closeButtonProps"
          data-qa="dt-toast-actions"
          v-on="$listeners"
        >
          <!-- @slot Enter a possible action for the user to take, such as a link to another page -->
          <slot name="action" />
        </dt-notice-action>
      </div>
    </dt-lazy-show>
  </div>
</template>

<script>
import DtNoticeIcon from '../notice/notice_icon';
import DtNoticeContent from '../notice/notice_content';
import DtNoticeAction from '../notice/notice_action';
import { NOTICE_KINDS } from '../notice/notice_constants';
import { getUniqueString } from '../utils';
import { TOAST_ROLES } from './toast_constants';
import DtLazyShow from '../lazy_show/lazy_show';
import {
  createTippy,
  getAbsolutePosition,
  BASE_TIPPY_ABSOLUTE_POSITIONING,
} from '../popover/tippy_utils';
import { TOOLTIP_HIDE_ON_CLICK_VARIANTS } from '../tooltip';

export default {
  name: 'DtToast',

  components: {
    DtLazyShow,
    DtNoticeIcon,
    DtNoticeContent,
    DtNoticeAction,
  },

  props: {

    /**
     * The id of the toast
     */
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * Sets an ID on the title element of the component. Useful for aria-describedby
     * or aria-labelledby or any other reason you may need an id to refer to the title.
     */
    titleId: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * Sets an ID on the content element of the component. Useful for aria-describedby
     * or aria-labelledby or any other reason you may need an id to refer to the content.
     */
    contentId: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * Title header of the toast. This can be left blank to remove the title from the toast entirely.
     */
    title: {
      type: String,
      default: '',
    },

    /**
     * Message of the toast. Overridden by default slot.
     */
    message: {
      type: String,
      default: '',
    },

    /**
     * Provides a role for the toast. 'status' is used by default to communicate a message. 'alert' is used to
     * communicate an important message like an error that does not contain any interactive elements.
     */
    role: {
      type: String,
      default: 'status',
      validator: (role) => {
        return TOAST_ROLES.includes(role);
      },
    },

    /**
     * Severity level of the toast, sets the icon and background
     */
    kind: {
      type: String,
      default: 'base',
      validator: (kind) => {
        return NOTICE_KINDS.includes(kind);
      },
    },

    /**
     * Used in scenarios where the message needs to visually dominate the screen.
     */
    important: {
      type: Boolean,
      default: false,
    },

    /**
     * Props for the toast close button.
     */
    closeButtonProps: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Hides the close button from the toast
     */
    hideClose: {
      type: Boolean,
      default: false,
    },

    /**
     * The duration in ms the toast will display before disappearing.
     * Defaults to 6000 ms and the prop validation is that provided duration is equal to or greater than 6000.
     */
    duration: {
      type: Number,
      default: 6000,
      validator: (duration) => {
        return duration >= 6000;
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
     * Describes the preferred absolute placement of the toast
     */
    placement: {
      type: String,
      default: 'top-center',
      validator: (placement) => BASE_TIPPY_ABSOLUTE_POSITIONING.includes(placement),
    },

    /**
     * Whether the toast should be shown.
     */
    show: {
      type: Boolean,
      default: false,
    },

    /**
     * Named transition when the content display is toggled.
     * @see DtLazyShow
     */
    transition: {
      type: String,
      default: 'fade',
    },

    /**
     * Determines the events that cause the tippy to show.
     * Multiple event names are separated by spaces.
     */
    trigger: {
      type: String,
      default: 'manual',
    },

    /**
     * Determines if the tippy has interactive content inside of it,
     * so that it can be hovered over and clicked inside without hiding.
     */
    interactive: {
      type: Boolean,
      default: true,
    },

    /***
     * Determines if the tippy hides upon clicking the
     * reference or outside the tippy.
     * The behavior can depend upon the trigger events used.
     */
    hideOnClick: {
      type: [Boolean, String],
      default: false,
      validator (value) {
        return TOOLTIP_HIDE_ON_CLICK_VARIANTS.some(variant => variant === value);
      },
    },
  },

  emits: ['close'],

  data () {
    return {
      showToast: false,
    };
  },

  computed: {
    kindClass () {
      const kindClasses = {
        error: 'd-toast--error',
        info: 'd-toast--info',
        success: 'd-toast--success',
        warning: 'd-toast--warning',
        base: 'd-toast--base',
      };

      return kindClasses[this.kind];
    },
  },

  watch: {
    placement (placement) {
      this.changeToastPosition(placement);
    },

    show (isShown, isPrev) {
      if (isShown) {
        this.open();
      } else if (!isShown && isPrev !== isShown) {
        this.close();
      }
    },

    hideOnClick () {
      this.tip.setProps({
        hideOnClick: this.hideOnClick,
      });
    },
  },

  mounted () {
    // support single anchor for toast, not multi anchor
    this.anchorEl = this.$refs.anchor.children[0];
    this.toastContentEl = this.$refs.content.$el;
    window.addEventListener('resize', this.onResize);
    this.tip = createTippy(this.anchorEl, {
      contentElement: this.toastContentEl,
      hideOnClick: this.hideOnClick,
      appendTo: this.appendTo,
      interactive: this.interactive,
      trigger: this.trigger,
      onHide: this.onHide,
      onShow: this.onShow,
    });

    if (this.show) this.open();
  },

  /* TODO Vue 3 Migration
   * beforeDestroy() should be updated to beforeUnmount() when migrating to Vue 3.
   */
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize);
    this.tip.destroy();
    this.removeReferences();
  },

  /* TODO Vue 3 Migration
   * destroyed() should be updated to unmounted() when migrating to Vue 3.
   */
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  destroyed () {
    clearTimeout(this.displayTimer);
  },

  methods: {
    open () {
      this.showToast = true;
      this.tip.show();
      this.displayTimer = setTimeout(() => {
        this.close();
      }, this.duration);
    },

    close () {
      this.showToast = false;
      this.tip.unmount();
      clearTimeout(this.displayTimer);
    },

    removeReferences () {
      this.anchorEl = null;
      this.toastContentEl = null;
      this.tip = null;
    },

    changeToastPosition (placement = this.placement) {
      const absolutePosition = getAbsolutePosition(placement);
      this.tip.setProps({
        getReferenceClientRect: () => ({ width: 0, height: 0, ...absolutePosition }),
      });
    },

    onResize () {
      this.changeToastPosition();
    },

    /*
    * Tippy Methods
    */

    onLeave () {
      this.$emit('close');
    },

    onHide () {
      this.showToast = false;
    },

    onShow () {
      this.changeToastPosition();
    },
  },
};
</script>
