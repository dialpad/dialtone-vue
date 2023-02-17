<template>
  <div
    :class="leftbarGeneralRowClasses"
    data-qa="dt-leftbar-general-row"
  >
    <div class="leftbar-general-row__content">
      <div
        class="leftbar-general-row__type"
        data-qa="dt-left-sidebar-row-type"
      >
        <dt-recipe-leftbar-general-row-icon
          :type="getIcon"
          :color="color"
          class="leftbar-general-row__icon"
        />
      </div>
      <dt-emoji-text-wrapper
        :class="descriptionClasses"
      >
        {{ description }}
      </dt-emoji-text-wrapper>
    </div>
    <div
      class="leftbar-general-row__secondary"
      data-qa="dt-left-sidebar-row-secondary"
    >
      <dt-badge
        v-if="hasUnreadMessages"
        kind="count"
        type="bulletin"
        data-qa="dt-left-sidebar-row-unread-badge"
      >
        {{ unreadCount }}
      </dt-badge>
    </div>
  </div>
</template>

<script>
import {
  LEFTBAR_GENERAL_ROW_TYPES,
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_COLORS,
  LEFTBAR_GENERAL_ROW_CONTACT_CENTER_VALIDATION_ERROR,
} from './general_row_constants.js';
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
      type: String,
      default: null,
    },

    /**
     * Determines if the row is selected
     */
    selected: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    leftbarGeneralRowClasses () {
      return [
        'leftbar-general-row',
        {
          'leftbar-general-row--selected': this.selected,
        },
      ];
    },

    descriptionClasses () {
      return [
        'leftbar-general-row__description',
        'd-mr-auto',
        'd-truncate',
        {
          'd-fw-bold': this.hasUnreadMessages,
        },
      ];
    },

    getIcon () {
      return this.type === LEFTBAR_GENERAL_ROW_TYPES.CHANNELS && this.hasUnreadMessages
        ? 'channel bold'
        : this.type;
    },

    hasUnreadMessages () {
      return isNaN(Number(this.unreadCount)) ? !!this.unreadCount : Number(this.unreadCount) > 0;
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
        console.error(LEFTBAR_GENERAL_ROW_CONTACT_CENTER_VALIDATION_ERROR);
      }
    },
  },
};
</script>

<style lang="less">
.leftbar-general-row {
  padding: calc(var(--space-200) * 3) var(--space-400);
  border-radius: 100em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size-400);

  &:hover {
    background-color: var(--theme-sidebar-row-color-background-hover);
    cursor: pointer;
  }

  &:active {
    background-color: var(--theme-sidebar-active-row-color-background);
  }

  &__content {
    display: flex;
    align-items: center;
    flex-grow: 2;
    gap: var(--size-400);
    overflow: hidden;
  }

  &__type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size24);
    height: var(--size24);
  }

  &__secondary {
    display: flex;
    align-items: center;
  }

  &__description {
    font-size: var(--fs-200);
    line-height: var(--lh-400);
    width: 100%;
  }

  &--selected {
    background-color: var(--black-200);
  }
}
</style>
