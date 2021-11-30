<template>
  <div>
    <dt-skeleton-list-item
      v-if="listItemOption"
      v-bind="listItemOption"
      :screen-reader-text="screenReaderText"
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
      :screen-reader-text="screenReaderText"
      :animation-duration="animationDuration"
      :animate="animate"
      :offset="offset"
    />
    <dt-skeleton-text
      v-else
      v-bind="textOption"
      :screen-reader-text="screenReaderText"
      :animation-duration="animationDuration"
      :animate="animate"
      :offset="offset"
    />
    <slot />
  </div>
</template>

<script>
import DtSkeletonShape from './skeleton-shape';
import DtSkeletonText from './skeleton-text';
import DtSkeletonListItem from './skeleton-list-item';

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
  },
};
</script>
