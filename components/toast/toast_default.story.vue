<template>
  <dt-toast
    :id="id"
    :kind="kind"
    :title="title"
    :message="message"
    :title-id="titleId"
    :content-id="contentId"
    :important="important"
    :hide-close="hideClose"
    :duration="duration"
    :close-button-props="buttonCloseProps"
    :placement="placement"
    :append-to="appendTo"
    :role="role"
    :transition="transition"
    :trigger="trigger"
    :hide-on-click="hideOnClick"
    :interactive="interactive"
    :show="isShown"
    @close="isShown = false"
  >
    <template #anchor="{ attrs }">
      <dt-button
        v-bind="attrs"
        @click="isShown = true"
      >
        Click to show!
      </dt-button>
    </template>
    <span
      v-if="defaultSlot"
      v-html="defaultSlot"
    />
    <span v-else>
      Message body with
      <a
        href="#"
        class="d-link"
        :class="linkClass"
      >a link</a>.
    </span>

    <template #action>
      <span
        v-if="action"
        v-html="action"
      />
      <dt-button
        v-else
        size="sm"
        importance="outlined"
        :kind="buttonKind"
        @click="onClick"
      >
        Action
      </dt-button>
    </template>
    <template
      v-if="icon"
      #icon
    >
      <component :is="icon" />
    </template>
    <template
      v-if="titleOverride"
      #titleOverride
    >
      <span v-html="titleOverride" />
    </template>
  </dt-toast>
</template>

<script>
import DtToast from './toast';
import DtButton from '../button/button';
import icon from '../mixins/icon';

export default {
  name: 'ToastDefault',

  components: { DtToast, DtButton },

  mixins: [icon],

  data () {
    return {
      isShown: this.show || false,
    };
  },

  computed: {
    shouldInvertButton () {
      return this.kind === 'base' || this.kind === 'error' || this.kind === 'info';
    },

    isInverted () {
      return this.important && this.shouldInvertButton;
    },

    buttonKind () {
      return this.isInverted ? 'inverted' : 'muted';
    },

    linkClass () {
      return this.isInverted ? 'd-link--inverted' : 'd-link--muted';
    },

    buttonCloseProps () {
      return {
        ...this.closeButtonProps,
        kind: this.buttonKind,
        ariaLabel: 'Close',
      };
    },
  },

  watch: {
    show (isShown) {
      this.isShown = isShown;
    },
  },
};
</script>
