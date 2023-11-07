<template>
  <div
    class="d-emoji-picker__selector"
  >
    <div
      id="d-emoji-picker-list"
      ref="listRef"
      class="d-emoji-picker__list"
    >
      <p
        v-if="emojiFilter"
        class="d-emoji-picker__search-label d-emoji-picker__alignment"
      >
        {{ filteredEmojis.length > 0 ? searchResultsLabel : searchNoResultsLabel }}
      </p>
      <div
        v-else
        ref="tabCategoryRef"
        class="d-emoji-picker__category d-emoji-picker__alignment"
      >
        <p>
          {{ fixedLabel }}
        </p>
      </div>
      <div
        v-for="(tabLabel, indexTab) in tabLabels"
        v-show="!emojiFilter"
        :key="indexTab"
        :ref="`tabLabelRef-${indexTab}`"
        class="d-emoji-picker__alignment"
      >
        <p
          v-if="indexTab"
        >
          {{ tabLabel.label }}
        </p>
        <div
          class="d-emoji-picker__tab"
        >
          <button
            v-for="(emoji, indexEmoji) in
            (emojis[tabs[indexTab] + skinTone] ? emojis[tabs[indexTab] + skinTone] : emojis[tabs[indexTab]])"
            :key="emoji.shortname"
            :ref="`emojiRef-${indexTab}`"
            type="button"
            :aria-label="emoji.name"
            @click="$emit('selected-emoji', emoji)"
            @focusin="$emit('highlighted-emoji', emoji)"
            @focusout="$emit('highlighted-emoji', null)"
            @mouseover="$emit('highlighted-emoji', emoji)"
            @mouseleave="$emit('highlighted-emoji', null)"
          >
            <img
              class="d-icon d-icon--size-500"
              :alt="emoji.name"
              :aria-label="emoji.name"
              :title="emoji.name"
              :src="getImgSrc(emoji.unicode_character)"
              @error="handleImageError"
            >
          </button>
        </div>
      </div>
      <div
        v-if="emojiFilter"
        class="d-emoji-picker__alignment"
      >
        <div
          class="d-emoji-picker__tab "
          data-qa="filtered-emojis"
        >
          <button
            v-for="(emoji, index) in filteredEmojis"
            :key="emoji.shortname"
            :ref="`filteredEmoji-${index}`"
            type="button"
            :aria-label="emoji.name"
            :class="{
              'hover-emoji': (index === 0 && hoverFirstEmoji),
            }"
            @click="$emit('selected-emoji', emoji)"
            @focusin="$emit('highlighted-emoji', emoji)"
            @focusout="$emit('highlighted-emoji', null)"
            @mouseover="hoverEmoji(emoji)"
            @mouseleave="hoverEmoji(null)"
          >
            <img
              class="d-icon d-icon--size-500"
              :alt="emoji.name"
              :aria-label="emoji.name"
              :title="emoji.name"
              :src="`${CDN_URL + emoji.unicode_character}.png`"
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable max-len
import { emojisGrouped as emojisImported } from '@/components/emoji_picker/emojis';
import { CDN_URL } from '@/components/emoji_picker/emoji_picker_constants';

export default {
  name: 'EmojiSelector',

  props: {
    emojiFilter: {
      type: String,
      default: '',
    },

    skinTone: {
      type: String,
      required: true,
    },

    tabsetLabels: {
      type: Array,
      required: true,
    },

    selectedTabset: {
      type: Object,
      required: true,
    },

    searchResultsLabel: {
      type: String,
      required: true,
    },

    searchNoResultsLabel: {
      type: String,
      required: true,
    },

    recentlyUsedEmojis: {
      type: Array,
      default: () => [],
    },
  },

  data () {
    return {
      emojiRefs: [],
      emojiFilteredRefs: [],
      isFiltering: false,
      hoverFirstEmoji: true,
      fixedLabel: '',
      filteredEmojis: [],
      TABS_DATA: ['Recently used', 'People', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags'],
    };
  },

  computed: {
    currentEmojis () {
      return [
        ...this.emojis[`People${this.skinTone}`] || [],
        ...this.emojis.Nature || [],
        ...this.emojis.Food || [],
        ...this.emojis[`Activity${this.skinTone}`] || [],
        ...this.emojis.Travel || [],
        ...this.emojis[`Objects${this.skinTone}`] || [],
        ...this.emojis.Symbols || [],
        ...this.emojis.Flags || [],
      ];
    },

    emojis () {
      return emojisImported;
    },

    CDN_URL () {
      return CDN_URL;
    },

    tabLabels () {
      return this.recentlyUsedEmojis.length
        ? this.tabsetLabels.map((label, index) => ({ label, ref: this.$refs[`tabLabelRef-${index}`] }))
        : this.tabsetLabels.slice(1).map((label, index) => ({ label, ref: this.$refs[`tabLabelRef-${index}`] }));
    },

    tabs () {
      return this.recentlyUsedEmojis.length ? this.TABS_DATA : this.TABS_DATA.slice(1);
    },
  },

  watch: {
    currentEmojis: {
      handler () {
        this.searchByNameAndKeywords();
      },

      immediate: true,
    },

    recentlyUsedEmojis: {
      handler (newValue) {
        this.emojis['Recently used'] = newValue;
      },

      immediate: true,
    },

    emojiFilter: {
      handler (newFilter) {
        this.resetScroll();
        if (newFilter) {
          this.isFiltering = true;
        } else {
          this.isFiltering = false;
          this.$emit('highlighted-emoji', null);
        }
        // Make sure debouncedSearch is bound in the created/mounted lifecycle hook or is a method
        this.debouncedSearch();
      },

      immediate: true,
    },

    selectedTabset: {
      handler (newValue) {
        this.scrollToTab(newValue.tabId);
      },

      deep: true,
      immediate: true, // Add this if you want the watcher to trigger immediately like in Vue 3
    },
  },

  created () {
    // Initialize the debounced function in the created hook
    this.debouncedSearch = this.debounce(this.searchByNameAndKeywords, 300);
  },

  mounted () {
    this.$nextTick(() => {
      this.setupEmojiRefs();
      this.setupFilteredRefs();
      this.setupTabLabelRefs();
    });
  },

  methods: {
    setupTabLabelRefs () {
      this.tabsetLabels.forEach((label, index) => {
        const refKey = `tabLabelRef-${index}`;
        if (this.$refs[refKey]) {
          this.$set(this.tabLabels, index, { label, ref: this.$refs[refKey] });
        }
      });
    },

    setupFilteredRefs () {
      this.filteredEmojis.forEach((emoji, index) => {
        const refKey = `filteredEmoji-${index}`;
        if (this.$refs[refKey]) {
          this.setFilteredRef(this.$refs[refKey], index);
        }
      });
    },

    setupEmojiRefs () {
      for (let i = 0; i < this.tabs.length; i++) {
        const refKey = `emojiRef-${i}`;
        if (this.$refs[refKey]) {
          this.$refs[refKey].forEach((el, indexEmoji) => {
            if (el) {
              this.setEmojiRef(el, i, indexEmoji);
            }
          });
        }
      }
    },

    searchByNameAndKeywords: function () {
      const searchStr = this.emojiFilter.toLowerCase();
      this.filteredEmojis = this.currentEmojis.filter(function (obj) {
        const nameIncludesSearchStr = obj.name.toLowerCase().includes(searchStr);
        const keywordsIncludeSearchStr = obj.keywords.some(function (keyword) {
          return keyword.toLowerCase().includes(searchStr);
        });
        return nameIncludesSearchStr || keywordsIncludeSearchStr;
      });
      this.$nextTick(function () {
        if (searchStr) {
          this.hoverEmoji(this.filteredEmojis[0], true);
        }
      });
    },

    debounce: function (fn, delay) {
      if (delay === undefined) { delay = 300; }
      let timeout;
      return function () {
        const args = []; let len = arguments.length;
        while (len--) args[len] = arguments[len];

        clearTimeout(timeout);
        timeout = setTimeout(function () {
          fn.apply(undefined, args);
        }, delay);
      };
    },

    getImgSrc: function (emoji) {
      return this.CDN_URL + emoji + '.png';
    },

    handleImageError: function (event) {
      event.target.parentNode.style.display = 'none';
    },

    scrollToTab: function (tabIndex, focusFirstEmoji) {
      const vm = this;
      if (focusFirstEmoji === undefined) { focusFirstEmoji = true; }
      const tabLabel = vm.tabLabels[tabIndex - 1];
      const tabElement = tabLabel.ref[0];

      vm.$nextTick(function () {
        const container = vm.$refs.listRef;
        const offsetTop = tabIndex === '1' ? 0 : tabElement.offsetTop - 20;

        let isScrolling = true;
        let prevScrollTop = container.scrollTop;
        vm.$emit('is-scrolling', true);

        container.addEventListener('scroll', function () {
          if (isScrolling) {
            const scrollTop = container.scrollTop;
            if (
              (prevScrollTop < scrollTop && scrollTop >= offsetTop) ||
            (prevScrollTop > scrollTop && scrollTop <= offsetTop)
            ) {
              isScrolling = false;
              vm.$emit('is-scrolling', false);
            }
            prevScrollTop = scrollTop;
          }
        });

        container.scrollTop = offsetTop;

        if (focusFirstEmoji) {
          vm.focusEmoji(tabIndex - 1, 0);
        }
      });
    },

    resetScroll: function () {
      const container = this.$refs.listRef;
      container.scrollTop = 0;
    },

    // Focus the first emoji on the selector
    focusEmojiSelector: function () {
      this.focusEmoji(0, 0);
    },

    // Method to handle hovering over an emoji
    hoverEmoji: function (emoji, isFirst) {
      if (isFirst === void 0) { isFirst = false; }
      this.hoverFirstEmoji = isFirst;
      this.$emit('highlighted-emoji', emoji);
    },

    // Set a ref for an emoji
    setEmojiRef: function (el, indexTab, indexEmoji) {
      if (!this.emojiRefs[indexTab]) {
        this.$set(this.emojiRefs, indexTab, []);
      }
      this.$set(this.emojiRefs[indexTab], indexEmoji, el);
    },

    // Set a ref for a filtered emoji
    setFilteredRef: function (el, index) {
      this.$set(this.emojiFilteredRefs, index, el);
    },

    // Focus an emoji given its tab and index
    focusEmoji: function (indexTab, indexEmoji) {
      const emojiRef = this.isFiltering ? this.emojiFilteredRefs[indexEmoji] : this.emojiRefs[indexTab] && this.emojiRefs[indexTab][indexEmoji];

      if (emojiRef) {
        emojiRef.focus();
        return true;
      }

      return false;
    },
  },
};
</script>
