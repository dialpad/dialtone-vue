<template>
  <li
    :class="leftbarGeneralRowClasses"
    data-qa="leftbar-general-row"
  >
    <div class="d-d-flex d-ai-center d-fl-grow2 d-truncate">
      <div class="d-w24 d-wmn24 d-h24 d-d-flex d-ai-center d-jc-center">
        <dt-recipe-leftbar-general-row-icon
          :type="getIcon"
          :color="color"
          class="leftbar-general-row__icon"
        />
      </div>
      <dt-emoji-text-wrapper
        :class="descriptionClasses"
        data-qa="leftbar-general-row-description"
      >
        {{ description }}
      </dt-emoji-text-wrapper>
    </div>
    <div class="d-d-flex d-ai-center d-pl8">
      <dt-badge
        v-if="hasUnreadMessages"
        kind="count"
        type="bulletin"
        data-qa="leftbar-general-row-unread-badge"
      >
        {{ unreadCount }}
      </dt-badge>
    </div>
  </li>
</template>

<script>
import { LEFTBAR_GENERAL_ROW_TYPES, LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS } from './general_row_constants.js';
import { DtBadge } from '@/components/badge';
import DtEmojiTextWrapper from '@/components/emoji_text_wrapper/emoji_text_wrapper.vue';
import DtRecipeLeftbarGeneralRowIcon from './leftbar_general_row_icon.vue';

export default {
  name: 'DtRecipeGeneralRow',

  components: {
    DtEmojiTextWrapper,
    DtBadge,
    DtRecipeLeftbarGeneralRowIcon,
  },

  props: {
    /**
     * Determines the icon to show.
     * If type is contact center, the color prop must be provided and will determine the color of the icon
     */
    type: {
      type: String,
      default: 'inbox',
      validator: (type) => {
        return Object.values(LEFTBAR_GENERAL_ROW_TYPES).includes(type);
      },
    },

    /**
     * Text displayed next to the icon
     */
    description: {
      type: String,
      default: '',
    },

    /**
     * Determines the color of the contact center icon
     */
    color: {
      type: String,
      default: null,
      validator: (color) => {
        return Object.keys(LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS).includes(color);
      },
    },

    /**
     * Number of unread messages
     */
    unreadCount: {
      type: Number,
      default: null,
    },
  },

  computed: {
    leftbarGeneralRowClasses () {
      return [
        'leftbar-general-row',
      ];
    },

    descriptionClasses () {
      return [
        'leftbar-general-row__description',
        'd-mr-auto',
        'd-truncate',
        {
          'd-fw-bold': this.unreadCount > 0,
        },
      ];
    },

    getIcon () {
      return this.type === LEFTBAR_GENERAL_ROW_TYPES.CHANNELS && this.hasUnreadMessages
        ? 'channel bold'
        : this.type;
    },

    hasUnreadMessages () {
      return this.unreadCount > 0;
    },
  },

  watch: {
    $props: {
      immediate: true,
      deep: true,
      handler () {
        this.validateProps();
      },
    },
  },

  methods: {
    validateProps () {
      if (this.type === LEFTBAR_GENERAL_ROW_TYPES.CONTACT_CENTER &&
          !Object.keys(LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS).includes(this.color)) {
        console.error('If type is contact center, color must be one of the following: ' +
          Object.keys(LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS).join(', '));
      }
    },
  },
};
</script>

<style lang="less">
.leftbar-general-row {
  padding: calc(var(--space-200) * 3) var(--space-400);
  height: var(--su24);
  border-radius: calc(var(--space-200) * 14);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: var(--theme-sidebar-row-color-background-hover);
    cursor: pointer;
  }

  &:active {
    background-color: var(--theme-sidebar-active-row-color-background);
  }

  &__description {
    font-size: var(--fs-200);
    line-height: var(--lh-400);
    padding-left: var(--su8);
    width: 100%;
  }
}
</style>
