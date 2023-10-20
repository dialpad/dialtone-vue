import{K as h}from"./keyboard_list_navigation-8c116ee6.js";import{D as m,a as c}from"./popover-3d2f7f4e.js";import{L as a}from"./list_item-e14e87e5.js";import{D as s}from"./dropdown_constants-d0cadac9.js";import{g as f,E as n}from"./utils-c7895956.js";import{a as g,S as y}from"./sr_only_close_button-5f4a1676.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const v={name:"DtDropdown",components:{DtPopover:m,SrOnlyCloseButton:g},mixins:[h({indexKey:"highlightIndex",idKey:"highlightId",listElementKey:"getListElement",listItemRole:"menuitem",afterHighlightMethod:"afterHighlight",beginningOfListMethod:"beginningOfListMethod",endOfListMethod:"endOfListMethod",activeItemKey:"activeItemEl",focusOnKeyboardNavigation:!0}),y],props:{open:{type:Boolean,default:null},openOnContext:{type:Boolean,default:!1},padding:{type:String,default:"small",validator:t=>Object.keys(s).some(e=>e===t)},modal:{type:Boolean,default:!0},contentWidth:{type:String,default:null},maxHeight:{type:String,default:""},maxWidth:{type:String,default:""},listId:{type:String,default(){return f()}},navigationType:{type:String,default:a.ARROW_KEYS,validator:t=>Object.values(a).includes(t)},fallbackPlacements:{type:Array,default:()=>["auto"]},placement:{type:String,default:"bottom"},onBeginningOfList:{type:Function,default:null},onEndOfList:{type:Function,default:null},listClass:{type:[String,Array,Object],default:""},appendTo:{type:[HTMLElement,String],default:"body",validator:t=>c.includes(t)||t instanceof HTMLElement},tether:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},emits:["highlight","opened","update:open"],data(){return{LIST_ITEM_NAVIGATION_TYPES:a,DROPDOWN_PADDING_CLASSES:s,EVENT_KEYNAMES:n,openedWithKeyboard:!1,isOpen:null}},computed:{dropdownListeners(){return{...this.$listeners,opened:t=>{this.updateInitialHighlightIndex(t)},keydown:t=>{switch(t.code){case n.up:case n.arrowup:this.onUpKeyPress(t),t.stopPropagation(),t.preventDefault();break;case n.down:case n.arrowdown:this.onDownKeyPress(t),t.stopPropagation(),t.preventDefault();break;case n.space:case n.spacebar:this.onSpaceKey();break;case n.enter:this.onEnterKey();break;case n.home:this.onHomeKeyPress(t),t.stopPropagation(),t.preventDefault();break;case n.end:this.onEndKeyPress(t),t.stopPropagation(),t.preventDefault();break;default:this.onKeyPress(t);break}this.$emit("keydown",t)}}},beginningOfListMethod(){return this.onBeginningOfList||this.jumpToEnd},endOfListMethod(){return this.onEndOfList||this.jumpToBeginning},activeItemEl(){return this.getListElement().querySelector("#"+this.highlightId)},isArrowKeyNav(){return this.navigationType===this.LIST_ITEM_NAVIGATION_TYPES.ARROW_KEYS},listClasses(){return["d-ps-relative","d-stack2","d-m4","d-px0",s[this.padding],this.listClass,{"d-context-menu-list":this.openOnContext}]},shouldOpenWithArrowKeys(){return!this.openOnContext}},methods:{onMouseHighlight(t){const e=t.target.closest("li");e&&e.role&&this.highlightId!==e.id&&(this.setHighlightId(e.id),e.focus())},getListElement(){return this.$refs.listWrapper},clearHighlightIndex(){this.setHighlightIndex(-1)},afterHighlight(){this.visuallyHiddenClose&&this.highlightIndex===this._itemsLength()-1||this.$emit("highlight",this.highlightIndex)},updateInitialHighlightIndex(t){this.isOpen=t,t?(this.openedWithKeyboard&&this.isArrowKeyNav&&this.setHighlightIndex(0),this.$emit("opened",!0)):(this.clearHighlightIndex(),this.openedWithKeyboard=!1,this.$emit("opened",!1))},onSpaceKey(){this.open||(this.openedWithKeyboard=!0)},onEnterKey(){this.open||(this.openedWithKeyboard=!0)},onUpKeyPress(){if(!this.isOpen){this.openedWithKeyboard=!0;return}if(this.isArrowKeyNav)return this.onUpKey()},onDownKeyPress(){if(!this.isOpen){this.openedWithKeyboard=!0;return}if(this.isArrowKeyNav)return this.onDownKey()},onHomeKeyPress(){if(!(!this.isOpen||!this.isArrowKeyNav))return this.onHomeKey()},onEndKeyPress(){if(!(!this.isOpen||!this.isArrowKeyNav))return this.onEndKey()},onKeyPress(t){if(!(!this.isOpen||!this.isArrowKeyNav||!this.isValidCharacter(t.key)))return t.stopPropagation(),t.preventDefault(),this.onNavigationKey(t.key)}}};var u=function(){var e=this,i=e._self._c;return i("dt-popover",e._g({ref:"popover",attrs:{"content-width":e.contentWidth,open:e.open,placement:e.placement,"initial-focus-element":e.openedWithKeyboard?"first":"dialog","fallback-placements":e.fallbackPlacements,padding:"none",role:"menu","append-to":e.appendTo,modal:e.modal,"max-height":e.maxHeight,"max-width":e.maxWidth,"open-with-arrow-keys":e.shouldOpenWithArrowKeys,"open-on-context":e.openOnContext,tether:e.tether,transition:e.transition},scopedSlots:e._u([{key:"anchor",fn:function({attrs:o}){return[e._t("anchor",null,null,o)]}},{key:"content",fn:function({close:o}){return[i("ul",{ref:"listWrapper",class:e.listClasses,attrs:{id:e.listId,"data-qa":"dt-dropdown-list-wrapper"},on:{mouseleave:e.clearHighlightIndex,"!mousemove":function(x){return e.onMouseHighlight.apply(null,arguments)}}},[e._t("list",null,{close:o}),e.showVisuallyHiddenClose?i("sr-only-close-button",{attrs:{"visually-hidden-close-label":e.visuallyHiddenCloseLabel,tabindex:e.isArrowKeyNav?-1:0},on:{close:o}}):e._e()],2)]}}],null,!0)},e.dropdownListeners))},w=[];u._withStripped=!0;var r=d(v,u,w,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown.vue";const L=r.exports;r.exports.__docgenInfo={exportName:"default",displayName:"DtDropdown",description:"",tags:{},props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the dropdown is shown. Leaving this null will have the dropdown trigger on click by default.
If you set this value, the default trigger behavior will be disabled and you can control it as you need.
Supports .sync modifier`,type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"openOnContext",description:"Opens the dropdown on right click (context menu). If you set this value to `true`,\nthe default trigger behavior will be disabled.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"padding",description:"Vertical padding size around the list element.",tags:{},values:["none","small","large"],type:{name:"string"},defaultValue:{func:!1,value:"'small'"}},{name:"modal",description:`Determines modal state, dropdown has a modal overlay preventing interaction with elements
below it, but it is invisible.`,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"contentWidth",description:`Width configuration for the popover content. When its value is 'anchor',
the popover content will have the same width as the anchor.`,tags:{},values:["null","anchor"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",description:`Determines maximum height for the popover before overflow.
Possible units rem|px|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxWidth",description:`Determines maximum width for the popover before overflow.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"listId",description:`Sets an ID on the list element of the component. Used by several aria attributes
as well as when deriving the IDs for each item.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"navigationType",description:`The type of navigation that this component should support.
- "arrow-keys" for items that are navigated with UP/DOWN keys.
- "tab" for items that are navigated using the TAB key.
- "none" for static items that are not interactive.`,tags:{},values:["arrow-keys","tab","none"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_NAVIGATION_TYPES.ARROW_KEYS"}},{name:"fallbackPlacements",description:`If the dropdown does not fit in the direction described by "placement",
it will attempt to change it's direction to the "fallbackPlacements".`,tags:{},values:["top","top-start","top-end","right","right-start","right-end","left","left-start","left-end","bottom","bottom-start","bottom-end","auto","auto-start","auto-end"],type:{name:"array"},defaultValue:{func:!1,value:"['auto']"}},{name:"placement",description:"The direction the dropdown displays relative to the anchor.",type:{name:"string"},defaultValue:{func:!1,value:"'bottom'"}},{name:"onBeginningOfList",description:"A method that will be called when the selection goes past the beginning of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"onEndOfList",description:"A method that will be called when the selection goes past the end of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"listClass",description:"Additional class for the wrapper list element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"appendTo",description:`Sets the element to which the popover is going to append to.
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}},{name:"tether",description:`If set to false the dialog will display over top of the anchor when there is insufficient space.
If set to true it will never move from its position relative to the anchor and will clip instead.
<a
  class="d-link"
  href="https://popper.js.org/docs/v2/modifiers/prevent-overflow/#tether"
  target="_blank"
>
  Popper.js docs
</a>`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}}],events:[{name:"highlight",description:"Event fired when the highlight changes",type:{names:["Number"]}},{name:"opened",description:"Event fired when dropdown is shown or hidden",type:{names:["Boolean | Array"]}},{name:"update:open",description:"Event fired to sync the open prop with the parent component"},{name:"keydown",type:{names:["undefined"]}}],slots:[{name:"anchor",scoped:!0,description:"Anchor element that activates the dropdown",bindings:[{name:"ref",title:"binding"}]},{name:"list",scoped:!0,description:"Slot for the list component",bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/dom.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/keyboard_list_navigation.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown.vue"]};const _={name:"DtDropdownSeparator"};var p=function(){var e=this,i=e._self._c;return i("li",{staticClass:"dt-list-separator d-my4 d-mxn4",attrs:{"aria-hidden":"true"}})},b=[];p._withStripped=!0;var l=d(_,p,b,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_separator.vue";const A=l.exports;l.exports.__docgenInfo={displayName:"DtDropdownSeparator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_separator.vue"]};export{L as D,A as a};
//# sourceMappingURL=dropdown_separator-fc658bc0.js.map
