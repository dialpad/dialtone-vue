<template>
  <span class="d-d-flex d-fw-wrap">
    <span
      v-for="reaction in reactions"
      :key="reaction.unicodeOutput"
      :reaction="reaction"
      class="d-mr4 d-mb4"
    >
      <dt-tooltip
        class="d-d-inline-block"
        content-class="d-wmx464"
        @shown="(shown) => emojiHovered(reaction, shown)"
      >
        <dt-emoji-text-wrapper size="200">
          {{ reaction.tooltip }}
        </dt-emoji-text-wrapper>
        <template #anchor="{ attrs }">
          <dt-button
            importance="clear"
            size="sm"
            data-qa="feed-item-reaction-button"
            :class="[
              'd-h24 d-bar16 d-py0 d-fs-200 d-mb0 d-t',
              !!reaction.isSelected
                ? `d-fc-purple-400 d-bgc-purple-400 d-bgo10 d-bc-purple-400 d-bco50 ' +
                  'h:d-bgc-purple-400 h:d-bco25 a:d-bgc-purple-400 a:d-bco25`
                : 'd-fc-black-600 d-bgc-black-100 h:d-bgc-white h:d-bc-black-600 a:d-bgc-white a:d-bc-black-600',
            ]"
            :aria-label="reaction.ariaLabel"
            :attrs="attrs"
            @click="emojiClicked(reaction)"
          >
            <span class="d-mr4">
              <dt-emoji
                size="200"
                :code="reaction.emojiUnicodeOrShortname"
              />
            </span>
            <span class="d-fw-bold d-fs-100">
              {{ reaction.num }}
            </span>
          </dt-button>
        </template>
      </dt-tooltip>
    </span>
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

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    reactions: {
      type: Array,
      default: () => [],
      validator: (reactions) => {
        let validInput = true;
        if (!Array.isArray(reactions)) {
          return false;
        }
        for (let i = 0; i < reactions.length; i++) {
          const reaction = reactions[i];
          REACTIONS_ATTRIBUTES.forEach((attribute) => {
            if (reaction[attribute] === undefined || reaction[attribute] === null) {
              validInput = false;
            }
          });
          if (!validInput) {
            break;
          }
        }
        return validInput;
      },
    },
  },

  emits: [
    'emojiClicked',
    'emojiHovered',
  ],

  data () {
    return {};
  },

  computed: {},

  watch: {},

  methods: {
    emojiClicked (reaction) {
      this.$emit('emojiClicked', reaction.emojiUnicodeOrShortname);
    },

    emojiHovered (reaction, state) {
      this.$emit('emojiHovered', {
        reaction: reaction.emojiUnicodeOrShortname,
        state,
      });
    },
  },
};
</script>

<style lang="less">

</style>
