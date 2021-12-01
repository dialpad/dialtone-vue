<template>
  <div ref="skeleton-text">
    <div
      v-if="type === 'label'"
      aria-hidden="true"
      :class="[
        'd-h8',
        'skeleton-placeholder',
        {
          'skeleton-placeholder--animate': animate,
        },
        contentClass,
      ]"
      :style="{
        width: textWidth,
        ...placeholderStyle,
      }"
    />
    <div
      v-else-if="type === 'heading'"
      aria-hidden="true"
      :class="[
        SKELETON_HEADING_HEIGHTS[headingHeight],
        'skeleton-placeholder',
        {
          'skeleton-placeholder--animate': animate,
        },
        contentClass,
      ]"
      :style="{
        width: textWidth,
        ...placeholderStyle,
      }"
    />
    <span
      v-if="screenReaderText"
      :id="uniqId"
      class="d-d-none"
    >
      {{ screenReaderText }}
    </span>
  </div>
</template>

<script>
import { SKELETON_HEADING_HEIGHTS, SKELETON_TEXT_TYPES, SKELETON_RIPPLE_DURATION } from './skeleton_constants';
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

    animationDuration: {
      type: Number,
      default: -1,
    },

    screenReaderText: {
      type: String,
      default: '',
    },

    animate: {
      type: Boolean,
      default: true,
    },

    offset: {
      type: Number,
      default: 1,
    },

    contentClass: {
      type: String,
      default: '',
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

    placeholderOffset () {
      const skeletonText = this.$refs['skeleton-text'];
      if (!skeletonText) { return this.offset; }
      const { top, height } = skeletonText.getBoundingClientRect();
      return top + (height / 2);
    },

    placeholderStyle () {
      const style = {};

      if (this.placeholderOffset === -1 || (!this.animate && this.animationDuration === -1)) {
        return style;
      }
      const animationDelay = this.placeholderOffset * SKELETON_RIPPLE_DURATION / 2000;
      const animationDuration = this.animationDuration === -1 ? 2000 : this.animationDuration;
      style.animationDelay = `${animationDelay}ms`;
      style.animationDuration = `${animationDuration}ms`;
      return style;
    },
  },
};
</script>
