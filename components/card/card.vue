<template>
  <div
    class="d-card"
    data-qa="dt-card"
  >
    <div
      v-if="$slots.header"
      class="d-card__header"
    >
      <slot name="header" />
    </div>

    <div
      class="d-card__content"
      :style="{ 'max-height': maxHeight }"
    >
      <slot name="content" />
    </div>

    <div
      v-if="$slots.footer"
      class="d-card__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DtCard',
  props: {
    /**
     * The maximum height of the card content.
     * If given, makes content area scrollable.
     */
    maxHeight: {
      type: String,
      default: null,
    },
  },
};
</script>
