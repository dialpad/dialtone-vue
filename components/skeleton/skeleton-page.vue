<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SkeletonPage',
  provide () {
    return {
      hasParentSkeleton: true,
      skeletonPageOption: this.childOption,
    };
  },

  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    childOption: {
      loading: true,
    },
  }),

  watch: {
    loading: {
      immediate: true,
      handler () {
        this.childOption.loading = this.loading;
      },
    },

  },
};
</script>

<style scoped>

</style>
