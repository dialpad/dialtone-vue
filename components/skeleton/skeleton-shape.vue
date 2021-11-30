<template>
  <div
    ref="skeleton-shape"
    :tabindex="isFocusable ? 0 : -1"
    :aria-describedby="ariaDescribedBy"
  >
    <div
      aria-hidden="true"
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
  },
};
</script>
