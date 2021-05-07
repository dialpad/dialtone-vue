<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div>
    <!--
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding `.story.js` file.
  -->
    <hs-link
      url="#"
      :label="label"
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
    <hs-link
      url="#"
      kind="danger"
      label="Danger link"
    />
    <hs-link
      url="#"
      kind="warning"
      label="Warning link"
    />
    <hs-link
      url="#"
      kind="success"
      label="Success link"
    />
    <hs-link
      url="#"
      kind="muted"
      label="Dark link"
    />
    <hs-link
      url="#"
      disabled
      label="Disabled link"
    />
    <div class="d-bgc-blue-800">
      <hs-link
        url="#"
        disabled
        inverted
        label="Inverted Disabled link"
      />
      <hs-link
        url="#"
        inverted
        label="Inverted link"
      />
      <hs-link
        url="#"
        kind="danger"
        inverted
        label="Inverted Danger link"
      />
    </div>
  </div>
</template>

<script>
import HsLink from './link';

export default {
  name: 'HsLinkVariants',
  components: { HsLink },
};
</script>
