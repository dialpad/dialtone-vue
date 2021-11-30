<template>
  <div
    ref="skeleton-text"
    :tabindex="isFocusable ? 0 : -1"
    :aria-describedby="ariaDescribedBy"
  >
    <div
      v-if="type === 'label'"
      aria-hidden="true"
      class="d-h8 placeholder"
      :style="{
        width: textWidth,
        'animation-duration': `${animationDuration}ms`,
      }"
    />
    <div
      v-else-if="type === 'heading'"
      aria-hidden="true"
      :class="[
        'placeholder',
        SKELETON_HEADING_HEIGHTS[headingHeight],
      ]"
      :style="{
        width: textWidth,
        'animation-duration': `${animationDuration}ms`,
      }"
    />

    <div
      v-else-if="type === 'paragraphs'"
      aria-hidden="true"
      class="d-w100p"
    >
      <div
        v-for="row in paragraphs.rows"
        :key="row"
        :class="[
          'd-h12',
          'placeholder',
          {
            'd-mb12': row !== paragraphs.rows,
          },
        ]"
        :style="{
          width: getSizeParagraphRow(row),
          'animation-duration': `${animationDuration}ms`,
        }"
      />
    </div>
    <span
      :id="uniqId"
      class="d-d-none"
    >
      {{ ariaLoadingText }}
    </span>
  </div>
</template>

<script>
import { SKELETON_HEADING_HEIGHTS, SKELETON_TEXT_TYPES } from './skeleton_constants';
import { getUniqueString } from '../utils';
export default {
  name: 'SkeletonText',

  props: {
    type: {
      type: String,
      default: 'label',
      validator: type => SKELETON_TEXT_TYPES.includes(type),
    },

    headingHeight: {
      type: String,
      default: 'md',
      validator: headingHeight => Object.keys(SKELETON_HEADING_HEIGHTS).includes(headingHeight),
    },

    textWidth: {
      type: String,
      default: '100%',
    },

    paragraphs: {
      type: Object,
      default: () => ({ rows: 3 }),
    },

    animationDuration: {
      type: Number,
      default: 1000,
    },

    ariaLoadingText: {
      type: String,
      default: 'Loading',
    },

    isFocusable: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      SKELETON_HEADING_HEIGHTS,
    };
  },

  computed: {
    uniqId () {
      return getUniqueString('DtSkeleton');
    },

    ariaDescribedBy () {
      return this.isFocusable ? this.uniqId : '';
    },
  },

  methods: {
    randomWidthPercentage () {
      const minWidth = this.paragraphs.minWidth || 30;
      const maxWidth = this.paragraphs.maxWidth || 100;
      const min = Math.min(minWidth, maxWidth);
      const max = Math.max(minWidth, maxWidth);
      return `${Math.round(Math.random() * (max - min)) + min}%`;
    },

    getSizeParagraphRow (row) {
      const paragraphWidth = this.paragraphs.width;
      const isArrayWidth = Array.isArray(paragraphWidth);
      const currentWidth = paragraphWidth?.[row - 1];
      const isLastRow = row === this.paragraphs.rows;

      if (this.paragraphs.randomWidth) {
        return this.randomWidthPercentage();
      }

      if (paragraphWidth && !isArrayWidth) {
        return paragraphWidth;
      }

      if (paragraphWidth && isArrayWidth && currentWidth) {
        return currentWidth;
      }

      return isLastRow ? '38%' : '100%';
    },
  },
};
</script>
