<template>
  <div>
    <button @click="scrollToItem(100)">
      Go to index 100
    </button>
    <button @click="scrollToItem(0)">
      Go to start
    </button>
    <button @click="scrollToItem(items.length - 1)">
      Go to end
    </button>

    <dt-scroller
      ref="scroller"
      v-slot="{ item }"
      class="scroller"
      :items="items"
      :item-size="32"
      key-field="id"
    >
      <div class="user">
        {{ item.name }}
      </div>
    </dt-scroller>
  </div>
</template>

<script setup>
import DtScroller from './scroller';
import { ref } from 'vue';

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));

const scroller = ref('scroller');

function scrollToItem (index) {
  scroller.value.scrollToItem(index);
}
</script>

<style scoped>
.scroller {
  height: 200px;
  width: 200px;
  margin: 20px 0;
  border: 1px solid red;
}

.user {
  height: 25px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
