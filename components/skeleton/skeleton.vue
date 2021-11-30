<template>
  <div
    ref="skeleton"
  >
    <div
      aria-hidden="true"
    >
      <dt-skeleton-list
        v-if="listOption"
        v-bind="listOption"
        :animation-duration="animationDuration"
      >
        <template #default="{ item }">
          <slot
            name="list"
            :item="{ row: item.row, list: item.list }"
          />
        </template>
      </dt-skeleton-list>
      <dt-skeleton-shape
        v-else-if="shapeOption"
        v-bind="shapeOption"
        :animation-duration="animationDuration"
      />
      <dt-skeleton-text
        v-else-if="textOption"
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
import DtSkeletonList from './skeleton-list';
import { getUniqueString } from '../utils';

export default {
  name: 'DtSkeleton',
  components: { DtSkeletonText, DtSkeletonShape, DtSkeletonList },
  provide: {
    hasParentSkeleton: true,
  },

  props: {
    listOption: {
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

    transitionContent: {
      type: String,
    },

    ariaLoadingText: {
      type: String,
      default: 'Loading',
    },
  },

  computed: {
    uniqId () {
      return getUniqueString('DtSkeleton');
    },
  },

  mounted () {
    if (!this.hasParentSkeleton) {
      this.$refs.skeleton.setAttribute('tabindex', '0');
      this.$refs.skeleton.setAttribute('aria-describedby', this.uniqId);
    }
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
