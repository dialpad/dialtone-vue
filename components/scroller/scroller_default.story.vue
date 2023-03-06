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

    <h3>Scroller with dynamic size</h3>
    <button @click="updateItem(0)">
      Update Element Message
    </button>
    <dt-scroller
      :items="dynamicItems"
      :min-item-size="54"
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

const dynamicItems = ref([
  {
    id: 1,
    avatar: defaultAvatar,
    message: messages[0],
  },
  {
    id: 2,
    avatar: defaultAvatar,
    message: messages[1],
  },
  {
    id: 3,
    avatar: defaultAvatar,
    message: messages[0],
  },
  {
    id: 4,
    avatar: defaultAvatar,
    message: messages[7],
  },
  {
    id: 5,
    avatar: defaultAvatar,
    message: messages[6],
  },
  {
    id: 6,
    avatar: defaultAvatar,
    message: messages[3],
  },
  {
    id: 7,
    avatar: defaultAvatar,
    message: messages[2],
  },
  {
    id: 8,
    avatar: defaultAvatar,
    message: messages[4],
  },
  {
    id: 9,
    avatar: defaultAvatar,
    message: messages[5],
  },
  {
    id: 10,
    avatar: defaultAvatar,
    message: messages[6],
  },
  {
    id: 11,
    avatar: defaultAvatar,
    message: messages[7],
  },
  {
    id: 12,
    avatar: defaultAvatar,
    message: messages[2],
  },
  {
    id: 13,
    avatar: defaultAvatar,
    message: messages[3],
  },
  {
    id: 14,
    avatar: defaultAvatar,
    message: messages[3],
  },
  {
    id: 15,
    avatar: defaultAvatar,
    message: messages[1],
  },
  {
    id: 16,
    avatar: defaultAvatar,
    message: messages[0],
  },
  {
    id: 17,
    avatar: defaultAvatar,
    message: messages[6],
  },
  {
    id: 21,
    avatar: defaultAvatar,
    message: messages[7],
  },
  {
    id: 22,
    avatar: defaultAvatar,
    message: messages[4],
  },
  {
    id: 23,
    avatar: defaultAvatar,
    message: messages[3],
  },
  {
    id: 24,
    avatar: defaultAvatar,
    message: messages[2],
  },
  {
    id: 25,
    avatar: defaultAvatar,
    message: messages[6],
  },
  {
    id: 26,
    avatar: defaultAvatar,
    message: messages[5],
  },
  {
    id: 27,
    avatar: defaultAvatar,
    message: messages[3],
  },
  {
    id: 28,
    avatar: defaultAvatar,
    message: messages[7],
  },
  {
    id: 29,
    avatar: defaultAvatar,
    message: messages[0],
  },
  {
    id: 210,
    avatar: defaultAvatar,
    message: messages[4],
  },
  {
    id: 211,
    avatar: defaultAvatar,
    message: messages[4],
  },
  {
    id: 212,
    avatar: defaultAvatar,
    message: messages[5],
  },
  {
    id: 213,
    avatar: defaultAvatar,
    message: messages[6],
  },
  {
    id: 214,
    avatar: defaultAvatar,
    message: messages[7],
  },
  {
    id: 215,
    avatar: defaultAvatar,
    message: messages[0],
  },
  {
    id: 216,
    avatar: defaultAvatar,
    message: messages[1],
  },
  {
    id: 217,
    avatar: defaultAvatar,
    message: messages[2],
  },
]);

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
  height: 200px;
  width: 100%;
  max-width: calc(var(--size-300) * 157);
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

<style>
.resize-observer[data-v-b329ee4c]{
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  width:100%;
  height:100%;
  border:none;
  background-color:transparent;
  pointer-events:none;
  display:block;
  overflow:hidden;
  opacity:0
}
.resize-observer[data-v-b329ee4c] object{
   display:block;
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  overflow:hidden;
  pointer-events:none;
  z-index:-1
 }
</style>
