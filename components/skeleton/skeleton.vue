<template>
  <div
    :tabindex="isFocusable ? 0 : -1"
    :aria-describedby="ariaDescribedBy"
  >
    <div
      aria-hidden="true"
    >
      <dt-skeleton-list-item
        v-if="listItemOption"
        v-bind="listItemOption"
        :aria-loading-text="ariaLoadingText"
        :animation-duration="animationDuration"
        :animate="animate"
        :offset="offset"
      >
        <template #default>
          <slot name="list-item" />
        </template>
      </dt-skeleton-list-item>
      <dt-skeleton-shape
        v-else-if="shapeOption"
        v-bind="shapeOption"
        :aria-loading-text="ariaLoadingText"
        :animation-duration="animationDuration"
        :animate="animate"
        :offset="offset"
      />
      <dt-skeleton-text
        v-else
        v-bind="textOption"
        :aria-loading-text="ariaLoadingText"
        :animation-duration="animationDuration"
        :animate="animate"
        :offset="offset"
      />
      <slot />
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
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';
import DtSkeletonListItem from './skeleton-list-item';
import { getUniqueString } from '../utils';

export default {
  name: 'DtSkeleton',
  components: { DtSkeletonText, DtSkeletonShape, DtSkeletonListItem },

  props: {
    listItemOption: {
      type: Object,
      default: null,
    },

    textOption: {
      type: Object,
      default: null,
    },

    shapeOption: {
      type: Object,
      default: null,
    },

    animationDuration: {
      type: Number,
      default: -1,
    },

    ariaLoadingText: {
      type: String,
      required: true,
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

  computed: {
    uniqId () {
      return getUniqueString('DtSkeleton');
    },

    ariaDescribedBy () {
      return this.isFocusable ? this.uniqId : '';
    },
  },
};
</script>
