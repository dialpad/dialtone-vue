export default {
  /**
   * Get all the components contained within a scroll window.
   * @param jankCacheId - id so that we don't cause reflows by asking elements for
   *                      their size etc if we've already asked before.
   * @param scrollWindow - an object of {start: num, end: num} representing the top and bottom offsets.
   * @param components - an ordered list (ie how they are represented in the dom) of components
   * @returns {{
   *   start: the index of first visible component
   *   end: the index of the last visible component
   *   components: a list of the visible components
   * }}
   */

  methods: {
    getVisibleComponents (jankCacheId, scrollWindow, components) {
      const idx = this._getAnyVisibleComponentIndex(components, jankCacheId, scrollWindow);
      if (idx === -1) {
        return {
          start: 0,
          end: -1,
          components: [],
        };
      }
      return this._getVisibleComponentsFromIndex(idx, components, jankCacheId, scrollWindow);
    },

    /**
     * Walk out from an index and find all visible components.
     * @param idx
     * @param components
     * @param jankCacheId
     * @param scrollWindow
     * @returns {{start: *, end: *, components: *[]}}
     * @private
     */
    _getVisibleComponentsFromIndex (idx, components, jankCacheId, scrollWindow) {
      let lowIdx = idx;
      let startIdx = idx;
      const visibleComponents = [components[idx]];
      let component;
      while (lowIdx >= 0) {
        component = components[lowIdx];
        if (this._elIsVisible(component.$el, jankCacheId, scrollWindow).isContained) {
          lowIdx !== idx && visibleComponents.unshift(component);
          startIdx = lowIdx;
          lowIdx--;
        } else {
          break;
        }
      }
      let highIdx = idx;
      let endIdx = idx;
      const len = components.length;
      while (highIdx < len) {
        component = components[highIdx];
        if (this._elIsVisible(component.$el, jankCacheId, scrollWindow).isContained) {
          highIdx !== idx && visibleComponents.push(component);
          endIdx = highIdx;
          highIdx++;
        } else {
          break;
        }
      }
      return {
        start: startIdx,
        end: endIdx,
        components: visibleComponents,
      };
    },

    /**
     * Bianary search the components passed and return the index of the first one found within the scrollWindow.
     * @param components
     * @param jankCacheId
     * @param scrollWindow
     * @returns index (int)
     * @private
     */
    _getAnyVisibleComponentIndex (components, jankCacheId, scrollWindow) {
      let low = 0;
      let high = components.length;
      let middle;
      let visibility;
      while (low < high) {
        middle = Math.floor((low + high) / 2);
        visibility = this._elIsVisible(components[middle].$el, jankCacheId, scrollWindow);
        if (visibility.lookHigher) {
          // looking too low -- look higher.
          low = middle + 1;
        } else if (visibility.lookLower) {
          // looking too high -- look lower.
          high = middle;
        } else {
          return middle;
        }
      }
      return -1;
    },

    componentHasMounted (component) {
      // TODO(TJ): NOT the greatest to use a private vue attr. Figure out better way (is looking for $el good enough?)
      return component && component._isMounted;
    },

    /**
     * Helper for binary search that determines if an element is within the scrollWindow.
     * @param el
     * @param jankCacheId
     * @param scrollWindow
     * @returns {{
     *   isContained: boolean,
     *   lookHigher: boolean, (Binary search the top half, ie discard the bottom half)
     *   lookLower: boolean (Binary search the bottom half, ie discard the top half)
     * }}
     * @private
     */
    _elIsVisible (el, jankCacheId, scrollWindow) {
      const rect = this._getClientRect(el, jankCacheId);
      const start = rect.offsetTop + rect.height;
      const end = rect.offsetTop;
      return {
        isContained:
          (start >= scrollWindow.start && start <= scrollWindow.end) ||
          (end <= scrollWindow.end && end >= scrollWindow.start),
        lookHigher: start < scrollWindow.start,
        lookLower: end > scrollWindow.end,
      };
    },

    /**
     * Get the necessary values from an element to determine if it is visible
     * inside a scrollWindow, avoiding reflows when possible
     * @param el
     * @param jankCacheId
     * @returns {*}
     * @private
     */
    _getClientRect (el, jankCacheId) {
      if (!el || !el.getBoundingClientRect) {
        return;
      }
      if (!el._boundingRect || !jankCacheId || (el._boundingRect.id !== jankCacheId)) {
        el._boundingRect = {
          id: jankCacheId,
          offsetLeft: el.offsetLeft,
          offsetTop: el.offsetTop,
          ...el.getBoundingClientRect(),
        };
      }
      return el._boundingRect;
    },

    getScrollWindow (el) {
      const scrollTop = el.scrollTop;
      return {
        start: scrollTop,
        end: scrollTop + el.clientHeight,
      };
    },

    hasScrollBar (el, offset = 0) {
      // TODO(TJ): maybe take an optional jankCacheId?
      return el.clientHeight < el.scrollHeight - offset;
    },

    canCheckScroll (el) {
      const scrollWindow = this.getScrollWindow(el);
      return scrollWindow.end > scrollWindow.start;
    },

    /**
     * Returns the number of pixels the top of an element appears above the top of a scrollWindow.
     * A negative return value means the element is fully below the top of the scrollWindow
     * @param el
     * @param scrollWindow
     * @param jankCacheId
     * @returns {number}
     */
    getElementOffsetFromTop (el, scrollWindow, jankCacheId) {
      const rect = this._getClientRect(el, jankCacheId);
      return scrollWindow.start - rect.offsetTop;
    },

    getElementRectangle (el, jankCacheId) {
      return this._getClientRect(el, jankCacheId);
    },

    /**
     * Returns the number of pixels the bottom of an element appears below the bottom of a scrollWindow.
     * A negative return value means the element is fully above the bottom of the scrollWindow
     * @param el
     * @param scrollWindow
     * @param jankCacheId
     * @returns {number}
     */
    getElementOffsetFromBottom (el, scrollWindow, jankCacheId) {
      const rect = this._getClientRect(el, jankCacheId);
      return (rect.height + rect.offsetTop) - scrollWindow.end;
    },

    /**
     * Scroll an element into view if it is not fully visible in its nearest scrollable ancestor.
     * @param {Element} ref
     */
    scrollElementIntoViewIfNeeded (ref, opt_center, opt_behavior, opt_parent) {
      if (ref.scrollIntoViewIfNeeded) {
        this.scrollIntoViewIfNeeded(ref, opt_center, opt_behavior, opt_parent);
      } else {
        this.scrollIntoView(ref, 'bottom', false, opt_behavior, opt_parent);
      }
    },

    /**
     * Scroll an element to the top or bottom of its scroll ancestor.
     * @param {Element} ref
     */
    scrollElementIntoView (ref, opt_scrollToTop, opt_behavior, opt_parent) {
      if (opt_scrollToTop === 'center') {
        this.scrollIntoView(ref, 'center', false, opt_behavior, opt_parent);
        return;
      }

      if (opt_scrollToTop === false) {
        this.scrollIntoView(ref, 'bottom', false, opt_behavior, opt_parent);
      } else {
        this.scrollIntoView(ref, 'top', false, opt_behavior, opt_parent);
      }
    },

    scrollIntoViewIfNeeded (ref, opt_center, opt_behavior, opt_parent) {
      const dir = opt_center ? 'center' : undefined;
      this.scrollIntoView(ref, dir, true, opt_behavior, opt_parent);
    },

    scrollIntoView (ref, opt_dir, opt_ifNeeded, opt_behavior, opt_parent) {
      if (!ref || !ref.parentElement) {
        return;
      }
      const offsetTop = ref.offsetTop;
      const refParent = opt_parent || ref.parentElement;
      const scrollBounds = this._getScrollBounds(refParent);
      const parentHeight = scrollBounds.bottom - scrollBounds.top;
      const elHeight = this._getElementHeight(ref);
      const offsetBottom = offsetTop + elHeight;
      let scrollTop = -1;
      switch (opt_dir) {
        case 'top':
          scrollTop = offsetTop;
          break;
        case 'center':
          scrollTop = offsetTop + (elHeight - parentHeight) / 2;
          break;
        case 'bottom':
          scrollTop = scrollTop = offsetBottom - parentHeight;
          break;
        default:
          // Go to the closest edge if needed and no direction is provided.
          if (offsetTop - scrollBounds.top <= (parentHeight / 2)) {
            // Lock it to the top edge.
            scrollTop = offsetTop;
          } else {
            scrollTop = offsetBottom - parentHeight;
          }
          break;
      }
      this._setScrollTop(refParent, scrollTop, scrollBounds, offsetTop, offsetBottom, opt_ifNeeded, opt_behavior);
    },

    _setScrollTop (el, scrollTop, bounds, offsetTop, offsetBottom, opt_isNeeded, opt_behavior) {
      bounds = bounds || this._getScrollBounds(el);
      const parentHeight = bounds.bottom - bounds.top;
      if (opt_isNeeded && this._inScrollBounds(offsetTop, offsetBottom, bounds)) {
        // Then lock to the top or bottom if it's hanging off the edge.
        if (offsetTop < bounds.top) {
          // Snap it to the top.
          scrollTop = offsetTop;
        } else if (offsetBottom > bounds.bottom) {
          scrollTop = offsetBottom - parentHeight;
        } else {
          return;
        }
      }

      if (opt_behavior) {
        el.scrollTo({ top: scrollTop, behavior: opt_behavior });
      } else {
        el.scrollTop = scrollTop;
      }
    },

    _getElementHeight (el) {
      return el.getBoundingClientRect().height;
    },

    _getScrollBounds (el) {
      const height = this._getElementHeight(el);
      const scrollTop = el.scrollTop;
      return {
        top: scrollTop,
        bottom: scrollTop + height,
      };
    },

    _inScrollBounds (top, bottom, bounds) {
      // Since we read from top to bottom, we want more than 3/4 to be visible at the top
      // (bc you're looking at the bottom half) or a quarter visible at the bottom (bc you
      // can read the beginning of it)

      const height = bottom - top;
      return (bottom <= bounds.bottom + (3 * height / 4)) && (top >= bounds.top - (height / 4));
    },

    getSelectedText (opt_el) {
      const sel = window.getSelection();
      if (!sel.rangeCount || (opt_el && sel.anchorNode !== opt_el)) {
        return;
      }

      return sel.toString();
    },

    /**
     * Returns the left position of mouse relative to event target or passed element.
     * @param {EVENT} e
     * @param {Element} opt_el
     * @returns {number}
     */
    getMouseLeftPositionFromElement (e, opt_el) {
      const target = opt_el || e.target;
      if (!e || !e.clientX || !target || !target.getBoundingClientRect) {
        return;
      }

      const { width, left } = target.getBoundingClientRect();
      const mouseLeft = e.clientX;
      const relativePosition = (mouseLeft - left) / width;

      return relativePosition;
    },

    focusOn (ref) {
      const element = this.$refs[ref];

      // To avoid Vuex warnings as Vuex does not deal with DOM.
      if (!element?.focus) {
        return;
      }

      element.focus();
    },
  },
};
