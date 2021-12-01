<template>
  <div ref="skeleton">
    <div
      v-if="type === 'label'"
      :class="[
        'd-h8',
        'skeleton-placeholder',
        {
          'skeleton-placeholder--animate': animate,
        },
        contentClass,
      ]"
      :style="{
        width,
        ...skeletonStyle,
      }"
    />
    <div
      v-else-if="type === 'heading'"
      :class="[
        SKELETON_HEADING_HEIGHTS[headingHeight],
        'skeleton-placeholder',
        {
          'skeleton-placeholder--animate': animate,
        },
        contentClass,
      ]"
      :style="{
        width,
        ...skeletonStyle,
      }"
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
import { SKELETON_HEADING_HEIGHTS, SKELETON_TEXT_TYPES } from './skeleton_constants';
import SkeletonAnimation from '../mixins/skeleton.js';

export default {
  name: 'DtSkeletonText',

  mixins: [SkeletonAnimation],

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

    width: {
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
};
</script>
