<template>
  <span v-html="emojiHtml" />
</template>

<script>
export default {
  name: 'DtEmoji',

  props: {
    code: {
      type: String,
      default: null,
    },
  },

  data () {
    return {
      emojiHtml: '',
    };
  },

  watch: {
    code: {
      handler: function () {
        // run getEmojiHtml
      },

      immediate: true,
    },
  },

  methods: {
    getCodeFromProps () {
      // Check whether shortcode or unicode was passed in, if both, use unicode.
      // return string
    },

    getEmojiHtml () {
      // call getCodeFromProps
      // run shortcode convert function if shortcode
      // run unicode convert function if unicode
      // if success: update emojiHtml data prop with resulting html
      // if failure (not found): display an error icon.
    },
  },
};
</script>
