<template>
  <span class="dt-emoji-row">
    <span
      v-for="reaction in reactions"
      :key="reaction.unicodeOutput"
      :reaction="reaction"
    >
      <dt-tooltip
        class="dt-emoji-row__tooltip"
        content-class="d-wmx464"
        @shown="(shown) => emojiHovered(reaction, shown)"
      >
        <span aria-hidden="true">
          <dt-emoji-text-wrapper size="200">
            {{ reaction.tooltip }}
          </dt-emoji-text-wrapper>
        </span>
        <template #anchor="{ attrs }">
          <dt-button
            importance="clear"
            size="sm"
            data-qa="feed-item-reaction-button"
            :class="['dt-emoji-row__reaction', reaction.isSelected ? 'dt-emoji-row__reaction--selected' : '']"
            :aria-label="reaction.ariaLabel"
            :attrs="attrs"
            @click="emojiClicked(reaction)"
          >
            <span class="dt-emoji-row__emoji">
              <dt-emoji
                size="200"
                :code="reaction.emojiUnicodeOrShortname"
              />
            </span>
            <span class="dt-emoji-row__reaction-number">
              {{ reaction.num }}
            </span>
          </dt-button>
        </template>
      </dt-tooltip>
    </span>
    <!-- @slot Slot for emoji picker component, including the anchor. -->
    <slot name="picker" />
  </span>
</template>

<script>
import { REACTIONS_ATTRIBUTES } from './emoji_row_constants.js';
import { DtButton } from '../../../components/button';
import { DtTooltip } from '../../../components/tooltip';
import { DtEmoji } from '../../../components/emoji';
import { DtEmojiTextWrapper } from '../../../components/emoji_text_wrapper';

export default {
  name: 'DtRecipeEmojiRow',

  components: { DtTooltip, DtButton, DtEmoji, DtEmojiTextWrapper },

  mixins: [],

  props: {
    /**
     * Provide an array of reaction objects to be shown.
     */
    reactions: {
      type: Array,
      default: () => [],
      validator: (reactions) => {
        for (const reaction of reactions) {
          const validInput = REACTIONS_ATTRIBUTES.every((attribute) => reaction[attribute] !== undefined ?? false);
          if (!validInput) return false;
        }
        return true;
      },
    },
  },

  emits: [
    'emoji-clicked',
    'emoji-hovered',
  ],

  methods: {
    emojiClicked (reaction) {
      this.$emit('emoji-clicked', reaction.emojiUnicodeOrShortname);
    },

    emojiHovered (reaction, state) {
      this.$emit('emoji-hovered', {
        reaction: reaction.emojiUnicodeOrShortname,
        state,
      });
    },
  },
};
</script>

<style lang="less">
.dt-emoji-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dt-space-300);

  &__tooltip {
    display: inline-block;
  }

  &__reaction {
    padding: var(--dt-space-300) var(--dt-space-400); // 4px 8px
    gap: var(--dt-space-300);
    border-radius: var(--dt-size-radius-500);
    border-width: var(--dt-size-border-100);
    transition-delay: 0s;
    transition-duration: var(--td50);
    transition-property: all;
    transition-timing-function: var(--ttf-in-out);

    color: var(--dt-color-foreground-secondary);
    background-color: var(--dt-color-surface-moderate-opaque);

    &.dt-emoji-row__picker {
      padding: var(--dt-space-200) var(--dt-space-350); // 2px 6px
    }

    &:hover, &:focus-visible {
      border-color: hsla(var(--dt-color-black-600-hsl)/100%)!important;
    }

    &--selected {
      color: var(--dt-color-link-primary);
      border-width: var(--dt-size-border-150);
      background-color: var(--dt-color-purple-100) !important;
      border-color: var(--dt-color-brand-purple) !important;
      &:hover {
        color: var(--dt-color-link-primary);
      }
    }
  }

  &__emoji {
    margin-right: var(--dt-space-300);
    display: inline-flex;
  }

  &__reaction-number {
    font-weight: var(--dt-font-weight-bold);
    font-size: var(--dt-font-size-100);
  }

}
</style>
