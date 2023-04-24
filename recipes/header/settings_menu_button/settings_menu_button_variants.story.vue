<template>
  <dt-recipe-settings-menu-button
    :update-available="true"
  >
    <template v-if="defaultSlot">
      {{ defaultSlot }}
    </template>
  </dt-recipe-settings-menu-button>
</template>

<script>
import DtRecipeSettingsMenuButton from './settings_menu_button';

export default {
  name: 'DtRecipeSettingsMenuButtonVariants',
  components: { DtRecipeSettingsMenuButton },
};
</script>
