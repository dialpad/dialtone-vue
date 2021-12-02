<template>
  <dt-skeleton
    :paragraph-option="paragraphOption"
    :list-item-option="listItemOption"
    :text-option="textOption"
    :shape-option="shapeOption"
    :animation-duration="animationDuration"
    :aria-label="ariaLabel"
    :animate="animate"
    :offset="offset"
  />
</template>

<script>
import DtSkeleton from './skeleton';

export default {
  name: 'DtSkeletonDefault',
  components: { DtSkeleton },
};
</script>
