<template>
  <ol class="d-p0">
    <dt-list-item
      class="d-d-flex d-jc-center"
      role="option"
      navigation-type="arrow-keys"
    >
      <span>{{ message }}</span>
    </dt-list-item>
  </ol>
</template>

<script>
import { DtListItem } from '../list_item';

export default {
  name: 'ComboboxLoadingList',

  components: { DtListItem },

  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
