<template>
  <dt-list-item-group
    :heading="heading"
    :heading-class="headingClass"
    :list-class="listClass"
  >
    <dt-list-item
      class="d-pl8"
      navigation-type="tab"
    >
      item1
    </dt-list-item>
    <dt-list-item
      class="d-pl8"
      navigation-type="tab"
    >
      item2
    </dt-list-item>
    <dt-list-item
      class="d-pl8"
      navigation-type="tab"
    >
      item3
    </dt-list-item>
  </dt-list-item-group>
</template>

<script>
import DtListItemGroup from './list_item_group';
import DtListItem from '../list_item/list_item';

export default {
  name: 'DtListItemGroupDefault',
  components: { DtListItemGroup, DtListItem },
};
</script>
