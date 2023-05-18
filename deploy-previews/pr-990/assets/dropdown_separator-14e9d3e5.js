import{K}from"./keyboard_list_navigation-7bd5fd77.js";import{D as I,b as O}from"./popover-4d194937.js";import{L as r}from"./list_item-ff15b5e7.js";import{D as d}from"./dropdown_constants-d0cadac9.js";import{g as k,E as i}from"./utils-e3897dda.js";import{a as S,S as E}from"./sr_only_close_button-e754604f.js";import{a as p,b as m,w as c,m as f,B as D,o as h,k as a,l as g,g as A,n as L,f as P}from"./vue.esm-bundler-15aa0fd7.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const v={name:"DtDropdown",components:{DtPopover:I,SrOnlyCloseButton:S},mixins:[K({indexKey:"highlightIndex",idKey:"highlightId",listElementKey:"getListElement",listItemRole:"menuitem",afterHighlightMethod:"afterHighlight",beginningOfListMethod:"beginningOfListMethod",endOfListMethod:"endOfListMethod",activeItemKey:"activeItemEl",focusOnKeyboardNavigation:!0}),E],inheritAttrs:!1,props:{open:{type:Boolean,default:null},openOnContext:{type:Boolean,default:!1},padding:{type:String,default:"small",validator:e=>Object.keys(d).some(t=>t===e)},modal:{type:Boolean,default:!0},contentWidth:{type:String,default:null},maxHeight:{type:String,default:""},maxWidth:{type:String,default:""},listId:{type:String,default(){return k()}},navigationType:{type:String,default:r.ARROW_KEYS,validator:e=>Object.values(r).includes(e)},fallbackPlacements:{type:Array,default:()=>["auto"]},placement:{type:String,default:"bottom"},onBeginningOfList:{type:Function,default:null},onEndOfList:{type:Function,default:null},listClass:{type:[String,Array,Object],default:""},appendTo:{type:[HTMLElement,String],default:"body",validator:e=>O.includes(e)||e instanceof HTMLElement},tether:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},emits:["keydown","highlight","update:open","opened","update:open"],data(){return{LIST_ITEM_NAVIGATION_TYPES:r,DROPDOWN_PADDING_CLASSES:d,openedWithKeyboard:!1,isOpen:null}},computed:{dropdownListeners(){return{opened:e=>{this.updateInitialHighlightIndex(e)},keydown:e=>{switch(e.code){case i.up:case i.arrowup:this.onUpKeyPress(e),e.stopPropagation(),e.preventDefault();break;case i.down:case i.arrowdown:this.onDownKeyPress(e),e.stopPropagation(),e.preventDefault();break;case i.space:case i.spacebar:this.onSpaceKey();break;case i.enter:this.onEnterKey();break;case i.home:this.onHomeKeyPress(e),e.stopPropagation(),e.preventDefault();break;case i.end:this.onEndKeyPress(e),e.stopPropagation(),e.preventDefault();break;default:this.onKeyPress(e);break}this.$emit("keydown",e)}}},beginningOfListMethod(){return this.onBeginningOfList||this.jumpToEnd},endOfListMethod(){return this.onEndOfList||this.jumpToBeginning},activeItemEl(){return this.getListElement().querySelector("#"+this.highlightId)},isArrowKeyNav(){return this.navigationType===this.LIST_ITEM_NAVIGATION_TYPES.ARROW_KEYS},listClasses(){return["d-ps-relative","d-stack2","d-m4","d-px0",d[this.padding],this.listClass,{"d-context-menu-list":this.openOnContext}]},shouldOpenWithArrowKeys(){return!this.openOnContext}},methods:{onMouseHighlight(e){const t=e.target.closest("li");t&&t.role&&this.highlightId!==t.id&&(this.setHighlightId(t.id),t.focus())},getListElement(){return this.$refs.listWrapper},clearHighlightIndex(){this.setHighlightIndex(-1)},afterHighlight(){this.visuallyHiddenClose&&this.highlightIndex===this._itemsLength()-1||this.$emit("highlight",this.highlightIndex)},updateInitialHighlightIndex(e){this.isOpen=e,e?(this.openedWithKeyboard&&this.isArrowKeyNav&&this.setHighlightIndex(0),this.$emit("opened",!0)):(this.clearHighlightIndex(),this.openedWithKeyboard=!1,this.$emit("opened",!1))},onSpaceKey(){this.open||(this.openedWithKeyboard=!0)},onEnterKey(){this.open||(this.openedWithKeyboard=!0)},onUpKeyPress(){if(!this.isOpen){this.openedWithKeyboard=!0;return}if(this.isArrowKeyNav)return this.onUpKey()},onDownKeyPress(){if(!this.isOpen){this.openedWithKeyboard=!0;return}if(this.isArrowKeyNav)return this.onDownKey()},onHomeKeyPress(){if(!(!this.isOpen||!this.isArrowKeyNav))return this.onHomeKey()},onEndKeyPress(){if(!(!this.isOpen||!this.isArrowKeyNav))return this.onEndKey()},onKeyPress(e){if(!(!this.isOpen||!this.isArrowKeyNav||!this.isValidLetter(e.key)))return e.stopPropagation(),e.preventDefault(),this.onNavigationKey(e.key)}}},H=["id"];function N(e,t,n,b,u,o){const _=p("sr-only-close-button"),x=p("dt-popover");return h(),m(x,f({ref:"popover","content-width":n.contentWidth,open:n.open,placement:n.placement,"initial-focus-element":u.openedWithKeyboard?"first":"dialog","fallback-placements":n.fallbackPlacements,padding:"none",role:"menu","append-to":n.appendTo,modal:n.modal,"max-height":n.maxHeight,"max-width":n.maxWidth,"open-with-arrow-keys":o.shouldOpenWithArrowKeys,"open-on-context":n.openOnContext},e.$attrs,{tether:n.tether,transition:n.transition},D(o.dropdownListeners)),{anchor:c(({attrs:s})=>[a(" @slot Anchor element that activates the dropdown "),g(e.$slots,"anchor",f({ref:"anchor"},s))]),content:c(({close:s})=>[a(" eslint-disable-next-line max-len "),a(" eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events vuejs-accessibility/no-static-element-interactions "),A("ul",{id:n.listId,ref:"listWrapper",class:L(o.listClasses),"data-qa":"dt-dropdown-list-wrapper",onMouseleave:t[0]||(t[0]=(...l)=>o.clearHighlightIndex&&o.clearHighlightIndex(...l)),onMousemoveCapture:t[1]||(t[1]=(...l)=>o.onMouseHighlight&&o.onMouseHighlight(...l))},[a(" @slot Slot for the list component "),g(e.$slots,"list",{close:s}),e.showVisuallyHiddenClose?(h(),m(_,{key:0,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,tabindex:o.isArrowKeyNav?-1:0,onClose:s},null,8,["visually-hidden-close-label","tabindex","onClose"])):a("v-if",!0)],42,H)]),_:3},16,["content-width","open","placement","initial-focus-element","fallback-placements","append-to","modal","max-height","max-width","open-with-arrow-keys","open-on-context","tether","transition"])}const q=y(v,[["render",N],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown.vue"]]);v.__docgenInfo={exportName:"default",displayName:"DtDropdown",description:"",tags:{},props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the dropdown is shown. Leaving this null will have the dropdown trigger on click by default.
If you set this value, the default trigger behavior will be disabled and you can control it as you need.
Supports v-model`,type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"openOnContext",description:"Opens the dropdown on right click (context menu). If you set this value to `true`,\nthe default trigger behavior will be disabled.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"padding",description:"Vertical padding size around the list element.",tags:{},values:["none","small","large"],type:{name:"string"},defaultValue:{func:!1,value:"'small'"}},{name:"modal",description:`Determines modal state, dropdown has a modal overlay preventing interaction with elements
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
</a>`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}}],events:[{name:"keydown",description:"Native keydown event",type:{names:["KeyboardEvent"]}},{name:"highlight",description:"Event fired when the highlight changes",type:{names:["Number"]}},{name:"update:open",description:"Event fired to sync the open prop with the parent component"},{name:"opened",description:"Event fired when dropdown is shown or hidden",type:{names:["Boolean | Array"]}}],slots:[{name:"anchor",scoped:!0,description:"Anchor element that activates the dropdown",bindings:[{name:"ref",title:"binding"}]},{name:"list",scoped:!0,description:"Slot for the list component",bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/dom.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/keyboard_list_navigation.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown.vue"]};const w={name:"DtDropdownSeparator"},V={"aria-hidden":"true",class:"dt-list-separator d-my4 d-mxn4"};function C(e,t,n,b,u,o){return h(),P("li",V)}const F=y(w,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_separator.vue"]]);w.__docgenInfo={displayName:"DtDropdownSeparator",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_separator.vue"]};export{q as D,F as a};
//# sourceMappingURL=dropdown_separator-14e9d3e5.js.map
