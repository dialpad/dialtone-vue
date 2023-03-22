<template>
  <pre>
    <code
      class="d-d-block d-bgc-white d-ws-pre-wrap d-p8 d-my4 d-ba d-bc-black-500 d-bar8 d-fs-100 d-lh-200 d-fc-red-400"
    >{{ text }}</code>
  </pre>
</template>

<script>
export default {
  name: 'DtCodeblock',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
