<template>
  <div>
    <div
      v-show="isOpen"
      class="d-emoji-picker__skin-list"
    >
      <button
        v-for="skin in skinList"
        :key="skin.name"
        :class="{
          'selected': skinSelected === skin.skinCode,
        }"
        @click="selectSkin(skin)"
      >
        <dt-emoji
          :code="skin.name"
        />
      </button>
    </div>
    <div
      v-show="!isOpen"
      class="d-emoji-picker__skin-selected"
    >
      <button @click="isOpen = true">
        <dt-emoji
          :code="`:wave${skinSelected}:`"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { DtEmoji } from '@/components/emoji';
import { ref } from 'vue';

const emits = defineEmits([
  /**
   * The skin tone that was selected
   * @event skin-tone
   * @type {Number}
   */
  'skin-tone',
]);

const skinList = [
  {
    name: ':wave_tone1:',
    skinTone: 'Light',
    skinCode: '_tone1',
  },
  {
    name: ':wave_tone2:',
    skinTone: 'MediumLight',
    skinCode: '_tone2',
  },
  {
    name: ':wave_tone3:',
    skinTone: 'Medium',
    skinCode: '_tone3',
  },
  {
    name: ':wave_tone4:',
    skinTone: 'MediumDark',
    skinCode: '_tone4',
  },
  {
    name: ':wave_tone5:',
    skinTone: 'Dark',
    skinCode: '_tone5',
  },
  {
    name: ':wave:',
    skinTone: 'Default',
    skinCode: '',
  },
];
const skinSelected = ref('');
const isOpen = ref(false);

function selectSkin (skin) {
  skinSelected.value = skin.skinCode;
  isOpen.value = false;
  emits('skin-tone', skin.skinTone);
}
</script>

<style lang="less" scoped>
.d-emoji-picker{
  &__skin-list{
    display: inline-flex;
    border-radius: 40px;
    background: rgba(0, 0, 0, 0.05);
    flex-direction: row;
    align-items: flex-start;
    padding: 4px;
    gap: 4px;

    button{
      border: none;
      background: none;
      cursor: pointer;
      margin: 0;
      outline: none;
      padding: 3px;

      &:hover{
        background: rgba(0, 0, 0, 0.1);
        border-radius: 28px;
      }

      &.selected{
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 28px;
      }
    }
  }

  &__skin-selected{
    button{
      border: none;
      background: none;
      cursor: pointer;
      margin: 0;
      outline: none;
      padding: 7px;
      display: inline-block;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 28px;
    }
  }
}
</style>
