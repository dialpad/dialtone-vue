<template>
  <div>
    <h3>Scroller</h3>

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
      class="scroller"
      :items="items"
      :item-size="32"
      :scroller-height="200"
      :scroller-width="200"
      key-field="id"
    >
      <template #default="{ item }">
        <div class="user">
          {{ item.name }}
        </div>
      </template>
    </dt-scroller>

    <h3>Scroller with dynamic size</h3>

    <button @click="updateItem(0)">
      Update Element Message
    </button>

    <dt-scroller
      :items="dynamicItems"
      :min-item-size="54"
      :scroller-height="300"
      :scroller-width="500"
      class="scroller"
      :dynamic="true"
    >
      <template #default="{ item }">
        <div class="avatar">
          {{ item.id }}
          <img
            :key="item.avatar"
            :src="item.avatar"
            alt="avatar"
            class="image"
          >
        </div>
        <div class="text">
          {{ item.message }}
        </div>
      </template>
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

const defaultAvatar = require('./person.png');

const messages = [
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam',
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl',
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet',
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet',
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam,nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc',
  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam',
  'lorem ipsum dolor sit amet',
];

const dynamicItems = ref(Array.from({ length: 37 }, (_, index) => ({
  id: index,
  avatar: defaultAvatar,
  message: messages[Math.floor(Math.random() * 8)],
})));

const scroller = ref('scroller');

function scrollToItem (index) {
  scroller.value.scrollToItem(index);
}

function updateItem (index) {
  dynamicItems.value[index].message = messages[Math.floor(Math.random() * 8)];
}
</script>

<style scoped>
.scroller {
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

.image{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
</style>
