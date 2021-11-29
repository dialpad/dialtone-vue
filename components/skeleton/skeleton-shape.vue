<template>
  <div
    ref="skeleton-shape"
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
    <dt-lazy-show
      :show="!loading"
      :transition="transitionContent"
    >
      <slot name="content" />
    </dt-lazy-show>
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
import { DtLazyShow } from '../lazy_show';
import { getUniqueString } from '../utils';

export default {
  name: 'DtSkeletonShape',
  components: {
    DtLazyShow,
  },

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

    loading: {
      type: Boolean,
      default: true,
    },

    transitionContent: {
      type: String,
    },

    ariaLoadingText: {
      type: String,
      default: 'Loading',
    },

    hasAriaDescribedBy: {
      type: Boolean,
      default: true,
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

    uniqId () {
      return getUniqueString('DtSkeletonShape');
    },
  },

  watch: {
    loading () {
      if (!this.loading) {
        this.$refs['skeleton-shape'].removeAttribute('tabindex');
        this.$refs['skeleton-shape'].removeAttribute('aria-describedby');
      }
    },
  },

  mounted () {
    if (this.hasAriaDescribedBy) {
      this.$refs['skeleton-shape'].setAttribute('tabindex', '0');
      this.$refs['skeleton-shape'].setAttribute('aria-describedby', this.uniqId);
    }
  },
};
</script>
