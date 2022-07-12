<template>
  <div>
    <dt-list-item
      class="d-d-flex d-jc-center"
      role="option"
      navigation-type="none"
    >
      <span>{{ message }}</span>
    </dt-list-item>
  </div>
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
