<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div class="d-stack16">
    <h3>
      Call Bar Buttons
    </h3>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-callbar-button-with-popover
        :disabled="false"
        :show-close-button="true"
      >
        Button
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip text
        </template>
        <template #content>
          Body
        </template>
        <template #headerContent>
          Header Content
        </template>
        <template #footerContent>
          Footer content
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover>
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover disabled>
        <template #label>
          Disabled
        </template>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>
    </div>

    <h3>
      Active Call Bar Buttons
    </h3>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-callbar-button-with-popover active>
        <template #label>
          Button
        </template>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover active>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover active>
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover active>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover
        active
        disabled
      >
        <template #label>
          Disabled
        </template>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>
    </div>

    <h3>
      Danger Call Bar Buttons
    </h3>
    <div class="d-fs12">
      Danger Call Bar Buttons look the same as regular buttons; they only differ on their active state.
    </div>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-callbar-button-with-popover danger>
        <template #label>
          Button
        </template>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover danger>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover danger>
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover danger>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover
        disabled
        danger
      >
        <template #label>
          Disabled
        </template>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>
    </div>

    <h3>
      Danger Active Call Bar Buttons
    </h3>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-callbar-button-with-popover
        active
        danger
      >
        <template #label>
          Button
        </template>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover
        active
        danger
      >
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover
        active
        danger
      >
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover
        active
        danger
      >
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-callbar-button-with-popover>

      <dt-recipe-callbar-button-with-popover
        :disabled="false"
        :show-close-button="true"
      >
        Button
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip text
        </template>
        <template #content>
          Body
        </template>
        <template #headerContent>
          Header Content
        </template>
        <template #footerContent>
          Footer content
        </template>
      </dt-recipe-callbar-button-with-popover>
    </div>
  </div>
</template>

<script>
import DtRecipeCallbarButtonWithPopover from './callbar_button_with_popover';
import IconDialpadGlyph from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpadGlyph';
import IconMicOn from '@dialpad/dialtone/lib/dist/vue/icons/IconMicOn';
import IconRecording from '@dialpad/dialtone/lib/dist/vue/icons/IconRecording';
import IconPerson from '@dialpad/dialtone/lib/dist/vue/icons/IconPerson';
import IconPlay from '@dialpad/dialtone/lib/dist/vue/icons/IconPlay';
import IconStar from '@dialpad/dialtone/lib/dist/vue/icons/IconStar';

export default {
  name: 'DtRecipeCallbarButtonWithPopoverVariants',
  components: {
    DtRecipeCallbarButtonWithPopover,
    IconDialpadGlyph,
    IconMicOn,
    IconRecording,
    IconPerson,
    IconPlay,
    IconStar,
  },
};
</script>
