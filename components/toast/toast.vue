<template>
  <aside class="d-toast-wrapper">
    <div
      class="d-toast"
      role="status"
      :aria-hidden="hidden"
    >
      <div class="d-toast__dialog">
        <dt-notice-icon
          :kind="kind"
          v-on="$listeners"
        >
          <!-- @slot Use a custom icon -->
          <slot name="icon" />
        </dt-notice-icon>
        <dt-notice-content
          :title-id="titleId"
          :content-id="contentId"
          :title="title"
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
          v-on="$listeners"
        >
          <!-- @slot Enter a possible action for the user to take, such as a link to another page -->
          <slot name="action" />
        </dt-notice-action>
      </div>
    </div>
  </aside>
</template>

<script>
import DtNoticeIcon from '../notice/notice_icon';
import DtNoticeContent from '../notice/notice_content';
import DtNoticeAction from '../notice/notice_action';
import { NOTICE_KINDS } from '../notice/notice_constants';
import {} from './toast_constants.js';
import util from '../utils';

export default {
  name: 'DtToast',

  components: {
    DtNoticeIcon,
    DtNoticeContent,
    DtNoticeAction,
  },

  mixins: [],

  props: {
    /**
     * Sets an ID on the title element of the component. Useful for aria-describedby
     * or aria-labelledby or any other reason you may need an id to refer to the title.
     */
    titleId: {
      type: String,
      default () { return util.getUniqueString(); },
    },

    /**
     * Sets an ID on the content element of the component. Useful for aria-describedby
     * or aria-labelledby or any other reason you may need an id to refer to the content.
     */
    contentId: {
      type: String,
      default () { return util.getUniqueString(); },
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
     * Severity level of the toast, sets the icon and background
     */
    kind: {
      type: String,
      default: '',
      validate (kind) {
        return NOTICE_KINDS.includes(kind);
      },
    },

    /**
     * Used in scenarios where the message needs to visually dominate the screen.
     *  This will also change the aria role from status to alertdialog.
     * and will modally trap the keyboard focus in the dialog as soon as it displays.
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
     * the duration in ms the toast will display before disappearing
     */
    duration: {
      type: Number,
      default: 6000,
    },
  },

  data () {
    return {
      hidden: true,
    };
  },

  computed: {},

  watch: {},

  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  destroyed () {
    clearTimeout(this.displayTimer);
  },

  methods: {
    show () {
      this.hidden = false;
      this.displayTimer = setTimeout(() => {
        this.hidden = true;
      }, this.duration);
    },
  },
};
</script>

<style lang="less">

</style>
