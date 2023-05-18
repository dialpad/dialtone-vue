import{D as d,C as f,a as m,L as c}from"./combobox-3daca1d7.js";import{D as h,a as b,b as y}from"./popover-dee9c179.js";import{a as r}from"./storybook_utils-65268b54.js";import{D as u}from"./dropdown_constants-d0cadac9.js";import{S as g}from"./sr_only_close_button-8fcfdbe5.js";import{n as v}from"./_plugin-vue2_normalizer-2bbd088e.js";const w={name:"DtRecipeComboboxWithPopover",components:{DtCombobox:d,DtPopover:h,ComboboxLoadingList:f,ComboboxEmptyList:m},mixins:[g],props:{label:{type:String,required:!0},labelVisible:{type:Boolean,default:!0},size:{type:String,default:null,validator:t=>Object.values(c).includes(t)},description:{type:String,default:""},showList:{type:Boolean,default:null},listId:{type:String,default(){return r()}},listClass:{type:[String,Array,Object],default:""},onBeginningOfList:{type:Function,default:null},onEndOfList:{type:Function,default:null},maxHeight:{type:String,default:""},maxWidth:{type:String,default:""},padding:{type:String,default:"small",validator:t=>Object.keys(u).some(e=>e===t)},contentWidth:{type:String,default:null,validator:t=>b.includes(t)},openWithArrowKeys:{type:Boolean,default:!1},popoverOffset:{type:Array,default:()=>[0,4]},popoverSticky:{type:[Boolean,String],default:!1},hasSuggestionList:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},emptyList:{type:Boolean,default:!1},emptyStateMessage:{type:String,default:""},appendTo:{type:[HTMLElement,String],default:"body",validator:t=>y.includes(t)||t instanceof HTMLElement},transition:{type:String,default:"fade"}},emits:["select","escape","highlight","opened"],data(){return{DROPDOWN_PADDING_CLASSES:u,isListShown:!1,isInputFocused:!1,isListFocused:!1,externalAnchor:r()}},computed:{comboboxListeners(){return{...this.$listeners,select:this.onSelect,escape:this.onEscape,highlight:this.onHighlight}}},watch:{showList:{handler:function(t){t!==null&&(this.isListShown=t)},immediate:!0},isListShown(t){t?window.addEventListener("mousedown",this.onFocusOut):window.removeEventListener("mousedown",this.onFocusOut),this.onOpened(t)}},methods:{handleDisplayList(t){!this.hasSuggestionList&&t&&this.showComboboxList(),!this.hasSuggestionList&&!t&&this.closeComboboxList()},showComboboxList(){this.showList==null&&(this.isListShown=!0)},closeComboboxList(){this.showList==null&&(this.isListShown=!1)},onSelect(t){this.loading||(this.$emit("select",t),this.hasSuggestionList||this.closeComboboxList())},onEscape(){this.$emit("escape"),this.closeComboboxList()},onHighlight(t){this.loading||this.$emit("highlight",t)},onOpened(t){this.$emit("opened",t)},onFocusIn(t){var e;this.hasSuggestionList&&t&&((e=this.$refs.input)==null?void 0:e.querySelector("input"))===t.target&&this.showComboboxList()},onFocusOut(t){var i,n,s;const e=(n=(i=this.$refs.popover)==null?void 0:i.tip)==null?void 0:n.popper,o=this.$refs.input;(s=t.composedPath())!=null&&s.some(a=>[e,o].includes(a))||this.closeComboboxList()},openOnArrowKeyPress(){this.showList!==null||this.isListShown||!this.openWithArrowKeys||this.showComboboxList()}}};var p=function(){var e=this,o=e._self._c;return o("dt-combobox",e._g({ref:"combobox",attrs:{loading:e.loading,label:e.label,"label-visible":e.labelVisible,size:e.size,description:e.description,"empty-list":e.emptyList,"empty-state-message":e.emptyStateMessage,"show-list":e.isListShown,"on-beginning-of-list":e.onBeginningOfList,"on-end-of-list":e.onEndOfList,"list-rendered-outside":!0,"list-id":e.listId,"data-qa":"dt-combobox"},scopedSlots:e._u([{key:"input",fn:function({inputProps:i}){return[o("div",{ref:"input",attrs:{id:e.externalAnchor},on:{focusin:e.onFocusIn,keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:e.openOnArrowKeyPress(n)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:e.openOnArrowKeyPress(n)}]}},[e._t("input",null,{inputProps:i,onInput:e.handleDisplayList})],2)]}},{key:"list",fn:function({opened:i,listProps:n,clearHighlightIndex:s}){return[o("dt-popover",{ref:"popover",attrs:{open:e.isListShown,"hide-on-click":!1,"max-height":e.maxHeight,"max-width":e.maxWidth,offset:e.popoverOffset,sticky:e.popoverSticky,placement:"bottom-start","initial-focus-element":"none",padding:"none",role:"listbox","external-anchor":e.externalAnchor,"content-width":e.contentWidth,"content-tabindex":null,modal:!1,"auto-focus":!1,"append-to":e.appendTo,transition:e.transition,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"visually-hidden-close":e.visuallyHiddenClose},on:{"update:open":function(a){e.isListShown=a},opened:function(a){return i(a,arguments[1])}},scopedSlots:e._u([{key:"headerContent",fn:function(){return[e.$slots.header?o("div",{ref:"header"},[e._t("header")],2):e._e()]},proxy:!0},{key:"content",fn:function(){return[o("div",{ref:"listWrapper",class:[e.DROPDOWN_PADDING_CLASSES[e.padding],e.listClass],on:{mouseleave:s,focusout:s}},[e.loading?o("combobox-loading-list",e._b({},"combobox-loading-list",n,!1)):e.emptyList&&e.emptyStateMessage?o("combobox-empty-list",e._b({attrs:{message:e.emptyStateMessage}},"combobox-empty-list",n,!1)):e._t("list",null,{listProps:n})],2)]},proxy:!0},{key:"footerContent",fn:function(){return[e.$slots.footer?o("div",{ref:"footer"},[e._t("footer")],2):e._e()]},proxy:!0}],null,!0)})]}}],null,!0)},e.comboboxListeners))},x=[];p._withStripped=!0;var l=v(w,p,x,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover.vue";const V=l.exports;l.exports.__docgenInfo={description:"",displayName:"DtRecipeComboboxWithPopover",tags:{},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"String to use for the input label.",type:{name:"string"},required:!0},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the input, one of `xs`, `sm`, `md`, `lg`, `xl`",tags:{},values:["null","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showList",description:`Determines when to show the list element and also controls the aria-expanded attribute.
Leaving this null will have the combobox trigger on input focus by default.
If you set this value, the default trigger behavior will be disabled and you can
control it as you need.`,type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"listId",description:`Sets an ID on the list element of the component. Used by several aria attributes
as well as when deriving the IDs for each item.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"listClass",description:"Additional class for the wrapper list element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"onBeginningOfList",description:"A method that will be called when the selection goes past the beginning of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"onEndOfList",description:"A method that will be called when the selection goes past the end of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",description:`Determines maximum height for the popover before overflow.
Possible units rem|px|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxWidth",description:`Determines maximum width for the popover before overflow.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"padding",description:"Vertical padding size around the list element.",type:{name:"string"},defaultValue:{func:!1,value:"'small'"}},{name:"contentWidth",description:`Width configuration for the popover content. When its value is 'anchor',
the popover content will have the same width as the anchor.`,type:{name:"string"},defaultValue:{func:!1,value:"null"},values:["anchor"]},{name:"openWithArrowKeys",description:`If the list should be shown by pressing up or down arrow key on the input element.
This can be set when not passing showList prop.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"popoverOffset",description:`Displaces the popover content box from its anchor element
 by the specified number of pixels.`,type:{name:"array"},defaultValue:{func:!1,value:"[0, 4]"}},{name:"popoverSticky",description:"If the popover sticks to the input.",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"hasSuggestionList",description:`Displays the list when the combobox is focused, before the user has typed anything.
When this is enabled the list will not close after selection.`,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyList",description:"Sets the list to an empty state, and displays the message from prop `emptyStateMessage`.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyStateMessage",description:"Message to show when the list is empty",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"appendTo",description:`Sets the element to which the popover is going to append to.
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}}],events:[{name:"select",description:"Event fired when item selected",type:{names:["Number"]}},{name:"escape",description:"Event fired when 'escape' key is pressed"},{name:"highlight",description:"Event fired when an item is highlighted",type:{names:["Number"]}},{name:"opened",description:"Emitted when items are shown or hidden",type:{names:["Boolean | Array"]}}],slots:[{name:"input",scoped:!0,bindings:[{name:"input-props",title:"binding"},{name:"on-input",title:"binding"}]},{name:"header"},{name:"list",scoped:!0,bindings:[{name:"list-props",title:"binding"}]},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover.vue"]};export{V as D};
//# sourceMappingURL=combobox_with_popover-3f1693dc.js.map
