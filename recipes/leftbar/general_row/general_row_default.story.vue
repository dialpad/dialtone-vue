<template>
  <dt-recipe-general-row
    :type="$attrs.type"
    :color="$attrs.color"
    :description="$attrs.description"
    :unread-count="$attrs.unreadCount"
    :has-unreads="$attrs.hasUnreads"
    :selected="$attrs.selected"
    :muted="$attrs.muted"
    :active-voice-chat="$attrs.activeVoiceChat"
    :dnd-text="$attrs.dndText"
    :is-typing="$attrs.isTyping"
    :call-button-tooltip="$attrs.callButtonTooltip"
    @click="$attrs.onClick"
    @call="$attrs.onCall"
  />
</template>

<script>
import DtRecipeGeneralRow from './general_row';

export default {
  name: 'DtRecipeGeneralRowDefault',
  components: { DtRecipeGeneralRow },
};
</script>
