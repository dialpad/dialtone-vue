<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <!--
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding `.story.js` file.
  -->
  <dt-emoji-picker
    :some="some"
    :cdn-test-to-remove="true"
  >
    <!--
      We can also bind any slot data that the user has entered into the storybook controls. In this example we
      conditionally render slots using a custom storybook control defined in the corresponding `.story.js`.

      The preferred naming scheme for storybook slot controls uses the following format `<SLOT_NAME>Slot`.

      We use this storybook control naming scheme to prevent conflicts between controls for props and slots with the
      same name.
    -->
    <template v-if="defaultSlot">
      <span v-html="defaultSlot" />
    </template>
    <template
      v-if="someSlot"
      #some
    >
      <span v-html="someSlot" />
    </template>
  </dt-emoji-picker>
</template>

<script>
import DtEmojiPicker from './emoji_picker';

export default {
  name: 'DtEmojiPickerVariants',
  components: { DtEmojiPicker },
};
</script>
