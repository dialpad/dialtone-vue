<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <!--
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding `.story.js` file.
  -->
  <div>
    <hs-link
      :url="url"
      :label="label"
      :kind="kind"
      :inverted="inverted"
      :disabled="disabled"
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
    </hs-link>
  </div>
</template>

<script>
import HsLink from './link';

export default {
  name: 'HsLinkDefault',
  components: { HsLink },
  inheritAttrs: false,
};
</script>
