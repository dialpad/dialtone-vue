const E={methods:{scrollElementIntoViewIfNeeded(e,i,s,n){e.scrollIntoViewIfNeeded?this.scrollIntoViewIfNeeded(e,i,s,n):this.scrollIntoView(e,"bottom",!1,s,n)},scrollElementIntoView(e,i,s,n){if(i==="center"){this.scrollIntoView(e,"center",!1,s,n);return}i===!1?this.scrollIntoView(e,"bottom",!1,s,n):this.scrollIntoView(e,"top",!1,s,n)},scrollIntoViewIfNeeded(e,i,s,n){const r=i?"center":void 0;this.scrollIntoView(e,r,!0,s,n)},scrollIntoView(e,i,s,n,r){if(!e||!e.parentElement)return;const l=e.offsetTop,h=r||e.parentElement,c=this._getScrollBounds(h),m=c.bottom-c.top,d=this._getElementHeight(e),g=l+d;let t=-1;switch(i){case"top":t=l;break;case"center":t=l+(d-m)/2;break;case"bottom":t=t=g-m;break;default:l-c.top<=m/2?t=l:t=g-m;break}this._setScrollTop(h,t,c,l,g,s,n)},_setScrollTop(e,i,s,n,r,l,h){s=s||this._getScrollBounds(e);const c=s.bottom-s.top;if(l&&this._inScrollBounds(n,r,s))if(n<s.top)i=n;else if(r>s.bottom)i=r-c;else return;h?e.scrollTo({top:i,behavior:h}):e.scrollTop=i},_getElementHeight(e){return e.getBoundingClientRect().height},_getScrollBounds(e){const i=this._getElementHeight(e),s=e.scrollTop;return{top:s,bottom:s+i}},_inScrollBounds(e,i,s){const n=i-e;return i<=s.bottom+3*n/4&&e>=s.top-n/4}}},N="listElementKey is required or the referenced element doesn't exist. Received listElement: ",w=({listItemRole:e="option",indexKey:i="highlightIndex",idKey:s="highlightId",listElementKey:n="listRef",activeItemKey:r="",openMethod:l=null,afterHighlightMethod:h=null,beginningOfListMethod:c=null,endOfListMethod:m=null,scrollToOnHighlight:d=!0,focusOnKeyboardNavigation:g=!1}={})=>({mixins:[E],data(){return{[i]:-1,[s]:"",scrollToOnHighlight:d,focusOnKeyboardNavigation:g}},provide(){return{highlightId:()=>this[s]}},methods:{_getListElement(){var t;return((t=this[n]())==null?void 0:t.$el)||this[n]()},_itemsLength(){const t=this._getListItemNodes();return t===null?0:t.length},_getListItemNodes(){const t=this._getListElement();return t?Array.from(t.querySelectorAll(`[role="${e}"], #sr-only-close-button`)):(console.error(N,t),null)},onUpKey(){l&&this[l](!0),this[i]>0?this.setHighlightIndex(this[i]-1):c&&this[c](),this.scrollActiveItemIntoViewIfNeeded(),this.focusActiveItemIfNeeded()},onDownKey(){l&&this[l](!0),this[i]<this._itemsLength()-1?this.setHighlightIndex(this[i]+1):m&&this[m](),this.scrollActiveItemIntoViewIfNeeded(),this.focusActiveItemIfNeeded()},onHomeKey(){this.jumpToBeginning(),this.scrollActiveItemIntoViewIfNeeded(),this.focusActiveItemIfNeeded()},onEndKey(){this.jumpToEnd(),this.scrollActiveItemIntoViewIfNeeded(),this.focusActiveItemIfNeeded()},onNavigationKey(t){const o=this._getListItemNodes(),I=o.filter(f=>f.textContent.trim().toLowerCase().startsWith(t.toLowerCase()));if(I.length<=0)return;const u=I.findIndex(f=>this[i]===o.indexOf(f)),a=o.indexOf(u<I.length-1?I[u+1]:I[0]);this.setHighlightIndex(a),this.scrollActiveItemIntoViewIfNeeded(),this.focusActiveItemIfNeeded()},isValidLetter(t){return t.length>1?!1:t>="a"&&t<="z"||t>="A"&&t<="Z"},jumpToBeginning(){this.setHighlightIndex(0)},jumpToEnd(){this.setHighlightIndex(this._itemsLength()-1)},setHighlightIndex(t){this[i]=t,this[s]=this._getItemId(t),this._itemsLength()&&h&&this[h](t)},setHighlightId(t){this[s]=t,this[i]=this._getItemIndex(t),this._itemsLength()&&h&&this[h](this._getItemIndex(t))},_getItemIndex(t){const o=this._getListElement();return o?Array.from(o.querySelectorAll(`[role="${e}"], #sr-only-close-button`)).indexOf(o.querySelector(`#${t}`)):void 0},_getItemId(t){var I;const o=this._getListElement();if(o)return(I=o.querySelectorAll(`[role="${e}"], #sr-only-close-button`)[t])==null?void 0:I.id},scrollActiveItemIntoViewIfNeeded(){if(!this.scrollToOnHighlight)return;const t=this[r];if(t){const o=this._getListElement();this.scrollElementIntoViewIfNeeded(t,null,null,o)}},focusActiveItemIfNeeded(){if(!this.focusOnKeyboardNavigation)return;const t=this[r];t&&t.focus()}}});export{w as K};
//# sourceMappingURL=keyboard_list_navigation-7bd5fd77.js.map
