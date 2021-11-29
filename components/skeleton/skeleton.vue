<template>
  <div
    ref="skeleton"
  >
    <div
      v-if="hasLoading"
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
      <template v-if="!skeletonPageOption">
        <slot />
      </template>
    </div>
    <template v-if="skeletonPageOption">
      <slot />
    </template>
    <dt-lazy-show
      :show="!hasLoading"
      :transition="transitionContent"
    >
      <slot name="content" />
    </dt-lazy-show>
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
import { DtLazyShow } from '../lazy_show';
import { getUniqueString } from '../utils';

export default {
  name: 'DtSkeleton',
  components: { DtSkeletonText, DtSkeletonShape, DtSkeletonList, DtLazyShow },
  provide: {
    hasParentSkeleton: true,
  },

  inject: {
    hasParentSkeleton: {
      default: false,
    },

    skeletonPageOption: {
      default: null,
    },
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

    loading: {
      type: Boolean,
      default: true,
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

    hasLoading () {
      return this.skeletonPageOption ? this.skeletonPageOption.loading : this.loading;
    },
  },

  watch: {
    loading () {
      if (!this.loading) {
        this.$refs.skeleton.removeAttribute('tabindex');
        this.$refs.skeleton.removeAttribute('aria-describedby');
      }
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
