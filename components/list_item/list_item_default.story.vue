<template>
  <dt-list-item @click="onClick">
    <template
      v-if="iconLeft"
      #iconLeft
    >
      <component :is="iconLeft" />
    </template>
    Example List Item
    <template
      v-if="iconRight"
      #iconRight
    >
      <component :is="iconRight" />
    </template>
  </dt-list-item>
</template>

<script>
import DtAvatar from '../avatar/avatar';
import DtListItem from './list_item';
import icon from '../mixins/icon';

export default {
  name: 'DtListItemDefault',

  components: {
    DtAvatar,
    DtListItem,
  },

  mixins: [icon],
};
</script>
