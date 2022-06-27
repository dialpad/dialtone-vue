<template>
  <component
    :is="elementType"
    ref="collapsible"
    v-on="$listeners"
  >
    <div>
      <!-- @slot Slot for the header element that toggles the collapsible content -->
      <slot
        ref="anchor"
        name="anchor"
        v-bind="attrs"
      >
        <dt-button
          class="dt-collapsible__anchor"
          :aria-expanded="String(isOpen)"
          :style="{
            'width': contentWidth,
          }"
          @click.stop="defaultToggleOpen"
        >
          <icon-arrow-accordion-open
            v-if="open"
            class="d-svg--size18 d-mr8 d-fl-shrink0"
          />
          <icon-arrow-accordion-closed
            v-else
            class="d-svg--size18 d-mr8 d-fl-shrink0"
          />
          <span
            class="d-mr-auto d-truncate"
            :title="anchorText"
          >
            {{ anchorText }}
          </span>
        </dt-button>
      </slot>
    </div>
    <dt-lazy-show
      :id="id"
      ref="content"
      :role="role"
      data-qa="dt-popover"
      :aria-expanded="`${!isOpen}`"
      :aria-labelledby="ariaLabel"
      :aria-label="ariaLabel"
      :transition="transition"
      :show="isOpen"
      class="dt-collapsible__content"
      :style="{
        'max-height': contentHeight,
        'max-width': contentWidth,
      }"
      tabindex="-1"
      appear
      @keydown.capture="onKeydown"
      @after-leave="onLeaveTransitionComplete"
      @after-enter="onEnterTransitionComplete"
    >
      <!-- @slot Slot for the collapsible element  -->
      <slot
        name="content"
        :close="close"
      />
    </dt-lazy-show>
  </component>
</template>

<script>
import {
  POPOVER_INITIAL_FOCUS_STRINGS,
} from '../popover';
import KeyboardNavigation from '@/common/mixins/keyboard_list_navigation';
import { DtLazyShow } from '../lazy_show';
import IconArrowAccordionOpen from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowAccordionOpen';
import IconArrowAccordionClosed from '@dialpad/dialtone/lib/dist/vue/icons/IconArrowAccordionClosed';
import DtButton from '../button/button';

export default {
  name: 'DtCollapsible',

  components: {
    DtButton,
    DtLazyShow,
    IconArrowAccordionOpen,
    IconArrowAccordionClosed,
  },

  mixins: [
    KeyboardNavigation({
      indexKey: 'highlightIndex',
      idKey: 'highlightId',
      listElementKey: 'getListElement',
      listItemRole: 'menuitem',
      afterHighlightMethod: 'afterHighlight',
      beginningOfListMethod: 'beginningOfListMethod',
      endOfListMethod: 'endOfListMethod',
      activeItemKey: 'activeItemEl',
      focusOnKeyboardNavigation: true,
    }),
  ],

  props: {
    /**
     * Text that is displayed on the anchor if nothing is passed in the slot.
     * Ignored if the anchor slot is used.
     */
    anchorText: {
      type: String,
      default: null,
    },

    /**
     * Controls whether the dropdown is shown. Leaving this null will have the dropdown trigger on click by default.
     * If you set this value, the default trigger behavior will be disabled and you can control it as you need.
     * Supports .sync modifier
     */
    open: {
      type: Boolean,
      default: null,
    },

    /**
     * Element type (tag name) of the root element of the component.
     */
    elementType: {
      type: String,
      default: 'div',
    },

    transition: {
      type: String,
      default: 'expand',
    },

    contentHeight: {
      type: String,
      default: null,
    },

    contentWidth: {
      type: String,
      default: null,
    },

    ariaLabel: {
      type: String,
      default: null,
    },

    ariaLabelledBy: {
      type: String,
      default: null,
    },

    /**
     * The element that is focused when the popover is opened. This can be an
     * HTMLElement within the popover, a string starting with '#' which will
     * find the element by ID. 'first' which will automatically focus
     * the first element, or 'dialog' which will focus the dialog window itself.
     * If the dialog is modal this prop cannot be 'none'.
     */
    initialFocusElement: {
      type: [String, HTMLElement],
      default: 'none',
      validator: initialFocusElement => {
        return POPOVER_INITIAL_FOCUS_STRINGS.includes(initialFocusElement) ||
          (initialFocusElement instanceof HTMLElement) ||
          initialFocusElement.startsWith('#');
      },
    },
  },

  emits: ['update:open', 'opened'],

  data () {
    return {
      isOpen: true,
    };
  },

  computed: {
  },

  watch: {
    open: {
      handler: function (open) {
        if (open !== null) {
          this.isOpen = open;
        }
      },

      immediate: true,
    },
  },

  methods: {
    async onLeaveTransitionComplete () {
      this.focusFirstElement(this.$refs.anchor);
      // await next tick in case the user wants to change focus themselves.
      await this.$nextTick();
      this.$emit('opened', false);
      if (this.open !== null) {
        this.$emit('update:open', false);
      }
    },

    async onEnterTransitionComplete () {
      this.focusInitialElement();
      // await next tick in case the user wants to change focus themselves.
      await this.$nextTick();
      this.$emit('opened', true, this.$refs.content);
      if (this.open !== null) {
        this.$emit('update:open', true);
      }
    },

    defaultToggleOpen () {
      if (open !== null) {
        this.toggleOpen();
      }
    },

    toggleOpen () {
      this.isOpen = !this.isOpen;
    },

    focusInitialElement () {
      if (this.initialFocusElement === 'dialog') {
        this.$refs.content.$el.focus();
      }
      // find by ID
      if (this.initialFocusElement.startsWith('#')) {
        this.focusInitialElementById();
      }
      if (this.initialFocusElement === 'first') {
        this.focusFirstElementIfNeeded(this.$refs.content);
      }
      if (this.initialFocusElement instanceof HTMLElement) {
        this.initialFocusElement.focus();
      }
    },

    focusInitialElementById () {
      const result = this.$refs.content.$el.querySelector(this.initialFocusElement);
      if (result) {
        result.focus();
      } else {
        console.warn('Could not find the element specified in dt-collapsible prop ' +
            '"initialFocusElement". Defaulting to focusing the dialog.');
      }
      result ? result.focus() : this.$refs.content.$el.focus();
    },
  },
};
</script>
