<template>
  <div>
    <!-- TODO: A purpose-built place to display validation errors using DtBanner -->
    <div
      class="d-d-flex d-fd-column d-bar8 d-baw1 d-ba d-c-text"
      :class="{ 'd-bc-black-500 d-bs-sm': hasFocus, 'd-bc-black-300': !hasFocus }"
    >
      <!-- Some wrapper to restrict the height and show the scrollbar -->
      <div class="d-of-auto d-mx16 d-mt8 d-mb4 d-hmx40p">
        <dt-rich-text-editor
          v-model="inputValue"
          :editable="editable"
          :input-aria-label="inputAriaLabel"
          :input-class="inputClass"
          :output-format="outputFormat"
          :auto-focus="autoFocus"
          :link="link"
          :placeholder="placeholder"
          v-bind="$attrs"
        />
      </div>
      <!-- @slot Slot for attachment carousel -->
      <slot name="middle" />
      <!-- Section for the bottom UI -->
      <section class="d-d-flex d-jc-space-between d-mx8 d-my4">
        <!-- Left content -->
        <div class="d-d-flex">
          <dt-button
            size="sm"
            circle
            importance="clear"
          >
            <template #icon>
              <dt-icon
                name="image"
                size="300"
              />
            </template>
          </dt-button>
          <dt-popover
            :open="emojiPickerOpened"
            @opened="(open) => { emojiPickerOpened = open }"
          >
            <template #anchor>
              <dt-button
                size="sm"
                circle
                importance="clear"
                @click="toggleEmojiPicker"
              >
                <template #icon>
                  <dt-icon
                    name="satisfied"
                    size="300"
                  />
                </template>
              </dt-button>
            </template>
            <template #content>
              <dt-emoji-picker
                :tab-set-labels="[
                  &quot;Most recently used&quot;,
                  &quot;Smileys and people&quot;,
                  &quot;Nature&quot;,
                  &quot;Food&quot;,
                  &quot;Activity&quot;,
                  &quot;Travel&quot;,
                  &quot;Objects&quot;,
                  &quot;Symbols&quot;,
                  &quot;Flags&quot;,
                ]"
                skin-selector-button-tooltip-label="Change default skin tone"
                search-no-results-label="No results"
                search-results-label="Search results"
                search-placeholder-label="Search..."
                @skin-tone="() => {}"
                @selected-emoji="onSelectEmoji"
                @close="() => {}"
              />
            </template>
          </dt-popover>
        </div>
        <!-- Right content -->
        <div class="d-d-flex">
          <!-- Optionally displayed remaining character counter -->
          <p class="d-fc-error d-mr16 d-as-center dt-message-input--remaining-char">
            <!-- TODO: Replace with char remaining logic -->
            {{ 500 }}
          </p>
          <!-- Right positioned UI - send button -->
          <dt-button
            size="sm"
            circle
            importance="primary"
            :disabled="disableSend"
            @click="onSend"
          >
            <template #icon>
              <dt-icon
                name="send"
                size="300"
              />
            </template>
          </dt-button>
        </div>
      </section>
    </div>
    <section class="d-d-flex d- d-jc-space-between d-h24">
      <div>
        <!-- @slot Slot for helper text. Who is typing can go here -->
        <slot name="footerLeft" />
      </div>
      <div>
        <!-- @slot helper text for the input. Shift + enter for new line -->
        <slot name="footerRight" />
      </div>
    </section>
  </div>
</template>

<script>
import {
  DtRichTextEditor,
  RICH_TEXT_EDITOR_OUTPUT_FORMATS,
  RICH_TEXT_EDITOR_AUTOFOCUS_TYPES,
} from '@/components/rich_text_editor';
import { DtButton } from '@/components/button';
import { DtIcon } from '@/components/icon';
import { DtEmojiPicker } from '@/components/emoji_picker';
import { DtPopover } from '@/components/popover';

export default {
  name: 'DtRecipeMessageInput',

  components: {
    DtButton,
    DtEmojiPicker,
    DtIcon,
    DtPopover,
    DtRichTextEditor,
  },

  mixins: [],

  inheritAttrs: false,

  props: {
    /**
     * Value of the input. The object format should match TipTap's JSON
     * document structure: https://tiptap.dev/guide/output#option-1-json
     */
    value: {
      type: [Object, String],
      default: '',
    },

    /**
     * Whether the input is editable
     */
    editable: {
      type: Boolean,
      default: true,
    },

    /**
     * Descriptive label for the input element
     */
    inputAriaLabel: {
      type: String,
      required: true,
    },

    /**
     * Additional class name for the input element. Only accepts a String value
     * because this is passed to the editor via options. For multiple classes,
     * join them into one string, e.g. "d-p8 d-hmx96"
     */
    inputClass: {
      type: String,
      default: '',
    },

    /**
     * Whether the input should receive focus after the component has been
     * mounted. Either one of `start`, `end`, `all` or a Boolean or a Number.
     * - `start`  Sets the focus to the beginning of the input
     * - `end`    Sets the focus to the end of the input
     * - `all`    Selects the whole contents of the input
     * - `Number` Sets the focus to a specific position in the input
     * - `true`   Defaults to `start`
     * - `false`  Disables autofocus
     * @values true, false, start, end, all, number
     */
    autoFocus: {
      type: [Boolean, String, Number],
      default: false,
      validator (autoFocus) {
        if (typeof autoFocus === 'string') {
          return RICH_TEXT_EDITOR_AUTOFOCUS_TYPES.includes(autoFocus);
        }
        return true;
      },
    },

    /**
     * The output format that the editor uses when emitting the "@input" event.
     * One of `text`, `json`, `html`. See https://tiptap.dev/guide/output for
     * examples.
     * @values text, json, html
     */
    outputFormat: {
      type: String,
      default: 'text',
      validator (outputFormat) {
        return RICH_TEXT_EDITOR_OUTPUT_FORMATS.includes(outputFormat);
      },
    },

    /**
     * Enables the Link extension and optionally passes configurations to it
     */
    link: {
      type: [Boolean, Object],
      default: false,
    },

    /**
     * Placeholder text
     */
    placeholder: {
      type: String,
      default: '',
    },

    /**
     * Disable Send Button
     */
    disableSend: {
      type: Boolean,
      default: false,
    },
  },

  emits: [
    /**
     * Fires when send button is clicked
     *
     * @event submit
     * @type {String}
     */
    'submit',
  ],

  data () {
    return {
      inputValue: this.value,
      hasFocus: false,
      emojiPickerOpened: false,
    };
  },

  methods: {
    onSelectEmoji (emoji) {
      this.inputValue = this.inputValue + emoji.shortname;
      this.emojiPickerOpened = false;
    },

    toggleEmojiPicker () {
      this.emojiPickerOpened = !this.emojiPickerOpened;
    },

    onSend () {
      this.$emit('submit', this.inputValue);
      this.inputValue = '';
    },
  },
};
</script>

<style lang="less">
.dt-message-input--remaining-char {
  font-size: 1.2rem;
}
</style>
