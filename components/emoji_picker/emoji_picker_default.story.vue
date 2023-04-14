<template>
  <dt-emoji-picker
    :skin-tone="skinTone"
    :recently-used-emojis="recentlyUsedEmojis"
    :tab-set-labels="tabSetLabels"
    @skin-tone="updateSkinTone"
  />
</template>

<script setup>
import DtEmojiPicker from './emoji_picker';
import { ref } from 'vue';

const skinTone = ref('Light');
const recentlyUsedEmojis = [
  { name: 'thumbs up', category: 'people', shortname: ':thumbsup:', shortname_alternates: [':+1:', ':thumbup:'], keywords: ['+1', 'hand', 'thumb', 'up', 'uc6'], unicode_output: '1f44d', unicode_character: '1f44d' },
  { name: 'thumbs up: medium-light skin tone', category: 'people', shortname: ':thumbsup_tone2:', shortname_alternates: [':+1_tone2:', ':thumbup_tone2:'], keywords: ['+1', 'hand', 'medium-light skin tone', 'thumb', 'up', 'uc8'], unicode_output: '1f44d-1f3fc', unicode_character: '1f44d-1f3fc' },
  { name: 'thumbs up: dark skin tone', category: 'people', shortname: ':thumbsup_tone5:', shortname_alternates: [':+1_tone5:', ':thumbup_tone5:'], keywords: ['+1', 'dark skin tone', 'hand', 'thumb', 'up', 'uc8'], unicode_output: '1f44d-1f3ff', unicode_character: '1f44d-1f3ff' },
  { name: 'person: light skin tone', category: 'people', shortname: ':adult_tone1:', shortname_alternates: [':adult_light_skin_tone:'], keywords: ['gender-neutral', 'light skin tone', 'uc10'], unicode_output: '1f9d1-1f3fb', unicode_character: '1f9d1-1f3fb' },
  { name: 'woman with veil: dark skin tone', category: 'people', shortname: ':woman_with_veil_tone5:', shortname_alternates: [':woman_with_veil_dark_skin_tone:'], keywords: ['uc13'], unicode_output: '1f470-1f3ff-200d-2640-fe0f', unicode_character: '1f470-1f3ff-2640' },
];

const tabSetLabels = [
  'Recientes',
  'Emoticonos & Emociones',
  'Animales & Naturaleza',
  'Comida & Bebida',
  'Actividades',
  'Viajes & Lugares',
  'Objetos',
  'Símbolos',
  'Banderas',
];

function updateSkinTone (skin) {
  skinTone.value = skin;
}
</script>
