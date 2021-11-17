<template>
  <div
    :class="[
      'placeholder',
      SKELETON_SHAPES[shape],
      SKELETON_HEIGHTS[size],
      widthClass,
    ]"
    :style="{
      'animation-duration': `${animationDuration}ms`,
    }"
  />
</template>

<script>
import {
  SKELETON_HEIGHTS,
  SKELETON_RECTANGLE_WIDTH,
  SKELETON_SHAPES,
  SKELETON_WIDTHS,
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
      default: 1000,
    },
  },

  data () {
    return {
      SKELETON_SHAPES,
      SKELETON_HEIGHTS,
    };
  },

  computed: {
    isSquareShape () {
      return this.shape === 'circle' || this.shape === 'square';
    },

    widthClass () {
      return this.isSquareShape
        ? SKELETON_WIDTHS[this.size]
        : SKELETON_RECTANGLE_WIDTH[this.size];
    },
  },
};
</script>
