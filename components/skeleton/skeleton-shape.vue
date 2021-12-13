<template>
  <div
    ref="skeleton"
    data-qa="skeleton-shape"
    :class="[
      'skeleton-placeholder',
      SKELETON_SHAPES[shape],
      SKELETON_HEIGHTS[size],
      SKELETON_WIDTHS[size],
      {
        'skeleton-placeholder--animate': animate,
      },
      contentClass,
    ]"
    :style="skeletonStyle"
  />
</template>

<script>
import SkeletonAnimation from '../mixins/skeleton.js';
import {
  SKELETON_HEIGHTS,
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

    contentClass: {
      type: String,
      default: '',
    },
  },

  data () {
    return {
      SKELETON_SHAPES,
      SKELETON_HEIGHTS,
      SKELETON_WIDTHS,
    };
  },
};
</script>
