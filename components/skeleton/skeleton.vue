<template>
  <div
    ref="skeleton"
  >
    <div
      v-if="loading"
      aria-hidden="true"
    >
      <dt-skeleton-list
        v-if="listOption"
        v-bind="listOption"
        :has-aria-described-by="false"
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
        :has-aria-described-by="false"
        :animation-duration="animationDuration"
      />
      <dt-skeleton-text
        v-else-if="textOption"
        v-bind="textOption"
        :has-aria-described-by="false"
        :animation-duration="animationDuration"
      />
      <slot />
    </div>
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
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';
import DtSkeletonList from './skeleton-list';
import { DtLazyShow } from '../lazy_show';
import { getUniqueString } from '../utils';

export default {
  name: 'DtSkeleton',
  components: { DtSkeletonText, DtSkeletonShape, DtSkeletonList, DtLazyShow },
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

    hasAriaDescribedBy: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    uniqId () {
      return getUniqueString('DtSkeleton');
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
    if (this.hasAriaDescribedBy) {
      this.$refs.skeleton.setAttribute('tabindex', '0');
      this.$refs.skeleton.setAttribute('aria-describedby', this.uniqId);
    }
  },
};
</script>
