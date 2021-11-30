<template>
  <div
    ref="skeleton-text"
    :tabindex="isFocusable ? 0 : -1"
    :aria-describedby="ariaDescribedBy"
  >
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
      :id="uniqId"
      class="d-d-none"
    >
      {{ ariaLoadingText }}
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
import { getUniqueString } from '../utils';

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

    ariaLoadingText: {
      type: String,
      required: true, // or default '' and if it's no ariaLoadingText do not render span
    },

    isFocusable: {
      type: Boolean,
      default: false,
    },

    animate: {
      type: Boolean,
      default: false,
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

    uniqId () {
      return getUniqueString('DtSkeletonShape');
    },

    ariaDescribedBy () {
      return this.isFocusable ? this.uniqId : '';
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
