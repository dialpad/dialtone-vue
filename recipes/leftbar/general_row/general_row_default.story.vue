<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <dt-recipe-general-row
    :type="type"
    :color="color"
    :description="description"
    :unread-count="unreadCount"
  />
</template>

<script>
import DtRecipeGeneralRow from './general_row';

export default {
  name: 'DtRecipeGeneralRowDefault',
  components: { DtRecipeGeneralRow },
};
</script>
