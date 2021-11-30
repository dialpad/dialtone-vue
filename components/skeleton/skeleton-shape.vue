<template>
  <div ref="skeleton-shape">
    <div
      aria-hidden="true"
      :class="[
        'skeleton-placeholder',
        SKELETON_SHAPES[shape],
        SKELETON_HEIGHTS[size],
        widthClass,
        {
          'skeleton-placeholder--animate': animate,
        },
      ]"
      :style="placeholderStyle"
    />
    <span
      v-if="screenReaderText"
      class="d-d-none"
    >
      {{ screenReaderText }}
    </span>
  </div>
</template>

<script>
import {
  SKELETON_HEIGHTS,
  SKELETON_RECTANGLE_WIDTH,
  SKELETON_SHAPES,
  SKELETON_WIDTHS,
  SKELETON_RIPPLE_DURATION,
} from './skeleton_constants';

export default {
  name: 'DtSkeletonShape',

  props: {
    shape: {
      type: String,
      default: 'circle',
      validator: shape => Object.keys(SKELETON_SHAPES).includes(shape),
    },

    size: {
      type: String,
      default: 'sm',
      validator: size => Object.keys(SKELETON_WIDTHS).includes(size),
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
  },

  data () {
    return {
      SKELETON_SHAPES,
      SKELETON_HEIGHTS,
    };
  },

  computed: {
    isEqualSided () {
      return this.shape === 'circle' || this.shape === 'square';
    },

    widthClass () {
      return this.isEqualSided
        ? SKELETON_WIDTHS[this.size]
        : SKELETON_RECTANGLE_WIDTH[this.size];
    },

    placeholderOffset () {
      const skeletonText = this.$refs['skeleton-shape'];
      if (!skeletonText) { return this.offset; }
      const { top, height } = skeletonText.getBoundingClientRect();
      return top + (height / 2);
    },

    placeholderStyle () {
      const style = {};
      if (this.placeholderOffset === -1 || (!this.animate && this.animationDuration === -1)) {
        return style;
      }
      const animationDelay = this.placeholderOffset * SKELETON_RIPPLE_DURATION / 1000;
      const animationDuration = this.animationDuration === -1 ? 1000 : this.animationDuration;
      style.animationDelay = `${animationDelay}ms`;
      style.animationDuration = `${animationDuration}ms`;
      return style;
    },
  },
};
</script>
