<template>
  <div
    data-qa="top-connector"
    class="d-zi-base1 d-d-flex d-w8 d-h8 d-bar-circle d-bc-purple-800 d-bgc-purple-800"
    :class="{ 'ivr-node-top-connector__selected': isSelected, 'ivr-node-top-connector__active': !isSelected }"
  />
</template>

<script>
export default {
  name: 'IvrNodeTopConnector',
  props: {
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.ivr-node-top-connector__active {
  margin-bottom: -4px;
}

.ivr-node-top-connector__selected {
  margin-bottom: -8px;
}
</style>
