<template>
  <ol
    class="d-p0"
    data-qa="dt-combobox-empty-list"
  >
    <dt-list-item
      class="dt-empty-list-item d-fs-200 d-lh4 d-py4 d-px12 d-d-flex d-jc-center d-ai-center"
      role="option"
      navigation-type="none"
      type="custom"
    >
      <span>{{ message }}</span>
    </dt-list-item>
  </ol>
</template>

<script>
import { DtListItem } from '../list_item';

export default {
  name: 'ComboboxEmptyList',

  components: { DtListItem },

  props: {
    /**
     * Message to display when list is empty
     */
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
