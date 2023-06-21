import{D as O,C as D,a as V,L as E}from"./combobox-cb042101.js";import{D as k,a as A,b as P}from"./popover-7783aeac.js";import{g as y,h as W}from"./utils-46af4dbd.js";import{D as g}from"./dropdown_constants-d0cadac9.js";import{S as I}from"./sr_only_close_button-87d5dd11.js";import{a as l,b as h,w as a,m as c,o as f,k as v,g as r,l as u,y as w,d as B,z as H,D as M,n as N}from"./vue.esm-bundler-e62bdd6b.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const x={name:"DtRecipeComboboxWithPopover",components:{DtCombobox:O,DtPopover:k,ComboboxLoadingList:D,ComboboxEmptyList:V},mixins:[I],props:{label:{type:String,required:!0},labelVisible:{type:Boolean,default:!0},size:{type:String,default:null,validator:e=>Object.values(E).includes(e)},description:{type:String,default:""},showList:{type:Boolean,default:null},listId:{type:String,default(){return y()}},listClass:{type:[String,Array,Object],default:""},onBeginningOfList:{type:Function,default:null},onEndOfList:{type:Function,default:null},maxHeight:{type:String,default:""},maxWidth:{type:String,default:""},padding:{type:String,default:"small",validator:e=>Object.keys(g).some(n=>n===e)},contentWidth:{type:String,default:null,validator:e=>A.includes(e)},openWithArrowKeys:{type:Boolean,default:!1},popoverOffset:{type:Array,default:()=>[0,4]},popoverSticky:{type:[Boolean,String],default:!1},hasSuggestionList:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},emptyList:{type:Boolean,default:!1},emptyStateMessage:{type:String,default:""},appendTo:{type:[HTMLElement,String],default:"body",validator:e=>P.includes(e)||e instanceof HTMLElement},transition:{type:String,default:"fade"}},emits:["select","escape","highlight","opened"],data(){return{DROPDOWN_PADDING_CLASSES:g,isListShown:!1,isInputFocused:!1,isListFocused:!1,externalAnchor:y(),hasSlotContent:W}},computed:{comboboxListeners(){return{...this.$attrs,onSelect:this.onSelect,onEscape:this.onEscape,onHighlight:this.onHighlight}}},watch:{showList:{handler:function(e){e!==null&&(this.isListShown=e)},immediate:!0},isListShown(e){e?window.addEventListener("mousedown",this.onFocusOut):window.removeEventListener("mousedown",this.onFocusOut),this.onOpened(e)}},methods:{handleDisplayList(e){!this.hasSuggestionList&&e&&this.showComboboxList(),!this.hasSuggestionList&&!e&&this.closeComboboxList()},showComboboxList(){this.showList==null&&(this.isListShown=!0)},closeComboboxList(){this.showList==null&&(this.isListShown=!1)},onSelect(e){this.loading||(this.$emit("select",e),this.hasSuggestionList||this.closeComboboxList())},onEscape(){this.$emit("escape"),this.closeComboboxList()},onHighlight(e){this.loading||this.$emit("highlight",e)},onOpened(e){this.$emit("opened",e)},onFocusIn(e){var n;this.hasSuggestionList&&e&&((n=this.$refs.input)==null?void 0:n.querySelector("input"))===e.target&&this.showComboboxList()},onFocusOut(e){var d,o,i;const n=(o=(d=this.$refs.popover)==null?void 0:d.tip)==null?void 0:o.popper,t=this.$refs.input;(i=e.composedPath())!=null&&i.some(m=>[n,t].includes(m))||this.closeComboboxList()},openOnArrowKeyPress(){this.showList!==null||this.isListShown||!this.openWithArrowKeys||this.showComboboxList()}}},z=["id"],T={ref:"header"},j=["onMouseleave","onFocusout"],K={ref:"footer"};function R(e,n,t,d,o,i){const m=l("combobox-loading-list"),S=l("combobox-empty-list"),L=l("dt-popover"),_=l("dt-combobox");return f(),h(_,c({ref:"combobox",loading:t.loading,label:t.label,"label-visible":t.labelVisible,size:t.size,description:t.description,"empty-list":t.emptyList,"empty-state-message":t.emptyStateMessage,"show-list":o.isListShown,"on-beginning-of-list":t.onBeginningOfList,"on-end-of-list":t.onEndOfList,"list-rendered-outside":!0,"list-id":t.listId,"data-qa":"dt-combobox"},i.comboboxListeners),{input:a(({inputProps:p})=>[v(" eslint-disable-next-line vuejs-accessibility/no-static-element-interactions "),r("div",{id:o.externalAnchor,ref:"input",onFocusin:n[0]||(n[0]=(...s)=>i.onFocusIn&&i.onFocusIn(...s)),onKeydown:[n[1]||(n[1]=w(s=>i.openOnArrowKeyPress(s),["up"])),n[2]||(n[2]=w(s=>i.openOnArrowKeyPress(s),["down"]))]},[u(e.$slots,"input",{inputProps:p,onInput:i.handleDisplayList})],40,z)]),list:a(({opened:p,listProps:s,clearHighlightIndex:b})=>[B(L,{ref:"popover",open:o.isListShown,"onUpdate:open":n[3]||(n[3]=C=>o.isListShown=C),"hide-on-click":!1,"max-height":t.maxHeight,"max-width":t.maxWidth,offset:t.popoverOffset,sticky:t.popoverSticky,placement:"bottom-start","initial-focus-element":"none",padding:"none",role:"listbox","external-anchor":o.externalAnchor,"content-width":t.contentWidth,"content-appear":!0,"content-tabindex":null,modal:!1,"auto-focus":!1,"append-to":t.appendTo,transition:t.transition,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"visually-hidden-close":e.visuallyHiddenClose,onOpened:p},H({content:a(()=>[v(" eslint-disable-next-line vuejs-accessibility/no-static-element-interactions "),r("div",{ref:"listWrapper",class:N([o.DROPDOWN_PADDING_CLASSES[t.padding],t.listClass]),onMouseleave:b,onFocusout:b},[t.loading?(f(),h(m,M(c({key:0},s)),null,16)):t.emptyList&&t.emptyStateMessage?(f(),h(S,c({key:1},s,{message:t.emptyStateMessage}),null,16,["message"])):u(e.$slots,"list",{key:2,listProps:s})],42,j)]),_:2},[o.hasSlotContent(e.$slots.header)?{name:"headerContent",fn:a(()=>[r("div",T,[u(e.$slots,"header")],512)]),key:"0"}:void 0,o.hasSlotContent(e.$slots.footer)?{name:"footerContent",fn:a(()=>[r("div",K,[u(e.$slots,"footer")],512)]),key:"1"}:void 0]),1032,["open","max-height","max-width","offset","sticky","external-anchor","content-width","append-to","transition","visually-hidden-close-label","visually-hidden-close","onOpened"])]),_:3},16,["loading","label","label-visible","size","description","empty-list","empty-state-message","show-list","on-beginning-of-list","on-end-of-list","list-id"])}const Y=F(x,[["render",R],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover.vue"]]);x.__docgenInfo={description:"",displayName:"DtRecipeComboboxWithPopover",tags:{},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"String to use for the input label.",type:{name:"string"},required:!0},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the input, one of `xs`, `sm`, `md`, `lg`, `xl`",tags:{},values:["null","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showList",description:`Determines when to show the list element and also controls the aria-expanded attribute.
Leaving this null will have the combobox trigger on input focus by default.
If you set this value, the default trigger behavior will be disabled and you can
control it as you need.`,type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"listId",description:`Sets an ID on the list element of the component. Used by several aria attributes
as well as when deriving the IDs for each item.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"listClass",description:"Additional class for the wrapper list element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"onBeginningOfList",description:"A method that will be called when the selection goes past the beginning of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"onEndOfList",description:"A method that will be called when the selection goes past the end of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",description:`Determines maximum height for the popover before overflow.
Possible units rem|px|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxWidth",description:`Determines maximum width for the popover before overflow.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"padding",description:"Vertical padding size around the list element.",type:{name:"string"},defaultValue:{func:!1,value:"'small'"}},{name:"contentWidth",description:`Width configuration for the popover content. When its value is 'anchor',
the popover content will have the same width as the anchor.`,type:{name:"string"},defaultValue:{func:!1,value:"null"},values:["anchor"]},{name:"openWithArrowKeys",description:`If the list should be shown by pressing up or down arrow key on the input element.
This can be set when not passing showList prop.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"popoverOffset",description:`Displaces the popover content box from its anchor element
 by the specified number of pixels.`,type:{name:"array"},defaultValue:{func:!1,value:"[0, 4]"}},{name:"popoverSticky",description:"If the popover sticks to the input.",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"hasSuggestionList",description:`Displays the list when the combobox is focused, before the user has typed anything.
When this is enabled the list will not close after selection.`,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",description:"Determines when to show the skeletons and also controls aria-busy attribute.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyList",description:"Sets the list to an empty state, and displays the message from prop `emptyStateMessage`.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyStateMessage",description:"Message to show when the list is empty",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"appendTo",description:`Sets the element to which the popover is going to append to.
'body' will append to the nearest body (supports shadow DOM).`,tags:{},values:["'body'","'parent'","HTMLElement",""],type:{name:"HTMLElement|string"},defaultValue:{func:!1,value:"'body'"}},{name:"transition",description:"Named transition when the content display is toggled.",tags:{see:[{description:"DtLazyShow",title:"see"}]},type:{name:"string"},defaultValue:{func:!1,value:"'fade'"}}],events:[{name:"select",description:"Event fired when item selected",type:{names:["Number"]}},{name:"escape",description:"Event fired when 'escape' key is pressed"},{name:"highlight",description:"Event fired when an item is highlighted",type:{names:["Number"]}},{name:"opened",description:"Emitted when items are shown or hidden",type:{names:["Boolean | Array"]}}],slots:[{name:"input",scoped:!0,bindings:[{name:"input-props",title:"binding"},{name:"on-input",title:"binding"}]},{name:"header"},{name:"list",scoped:!0,bindings:[{name:"list-props",title:"binding"}]},{name:"footer"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover.vue"]};export{Y as D};
//# sourceMappingURL=combobox_with_popover-90fb4058.js.map
