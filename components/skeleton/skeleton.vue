<template>
  <div
    ref="skeleton"
    :tabindex="isFocusable ? 0 : -1"
    :aria-describedby="ariaDescribedBy"
  >
    <div
      aria-hidden="true"
    >
      <dt-skeleton-list-item
        v-if="listItemOption"
        v-bind="listItemOption"
        :animation-duration="animationDuration"
      >
        <template #default>
          <slot name="list-item" />
        </template>
      </dt-skeleton-list-item>
      <dt-skeleton-shape
        v-else-if="shapeOption"
        v-bind="shapeOption"
        :animation-duration="animationDuration"
      />
      <dt-skeleton-text
        v-bind="textOption"
        :animation-duration="animationDuration"
      />
      <slot />
    </div>
    <span
      :id="uniqId"
      class="d-d-none described-text"
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

<style>
.described-text {
  position: absolute;
  top: auto;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  white-space: nowrap;
}
</style>
