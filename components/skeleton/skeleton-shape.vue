<template>
  <div
    ref="skeleton"
    data-qa="skeleton-shape"
    :class="[
      'skeleton-placeholder',
      SKELETON_SHAPES[shape],
      SKELETON_HEIGHTS[size],
      widthClass,
      {
        'skeleton-placeholder--animate': animate,
      },
    ]"
    :style="skeletonStyle"
  />
</template>

<script>
import SkeletonAnimation from '../mixins/skeleton.js';
import {
  SKELETON_HEIGHTS,
  SKELETON_RECTANGLE_WIDTH,
  SKELETON_SHAPES,
  SKELETON_WIDTHS,
} from './skeleton_constants';

export default {
  name: 'DtSkeletonShape',

  mixins: [SkeletonAnimation],

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
  },
};
</script>
