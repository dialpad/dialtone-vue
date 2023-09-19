import{K as k}from"./keyboard_list_navigation-7bd5fd77.js";import{g as V,h as M}from"./utils-5c53e9f9.js";import{D as L}from"./list_item-eac9c398.js";import{D as O}from"./skeleton-dbfa63a7.js";import{k as m,o,d as r,F as I,g as C,l as g,m as f,x as u,e as _,t as K,n as H,j as c,v,E as R,p as x,y as a,K as l}from"./vue.esm-bundler-a9a971fb.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const w={name:"ComboboxLoadingList",components:{DtListItem:L,DtSkeleton:O}},A={class:"d-p0 d-mt8 d-hmx332 d-of-y-auto","aria-busy":"true"};function D(t,e,n,y,h,i){const d=m("dt-skeleton"),p=m("dt-list-item");return o(),r("ol",A,[(o(),r(I,null,C(7,s=>g(p,{key:s,role:"option","navigation-type":"none"},{default:f(()=>[g(d,{"text-option":{type:"body"},offset:0})]),_:2},1024)),64))])}const B=b(w,[["render",D],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_loading-list.vue"]]);w.__docgenInfo={displayName:"ComboboxLoadingList",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_loading-list.vue"]};const S={name:"ComboboxEmptyList",components:{DtListItem:L},props:{message:{type:String,required:!0},itemClass:{type:[String,Object,Array],default:""}}},P={class:"d-p0","data-qa":"dt-combobox-empty-list"};function j(t,e,n,y,h,i){const d=m("dt-list-item");return o(),r("ol",P,[u(t.$slots,"default",{},()=>[g(d,{role:"option","navigation-type":"none",type:"custom",class:H(["dt-empty-list-item",n.itemClass])},{default:f(()=>[_("span",null,K(n.message),1)]),_:1},8,["class"])])])}const N=b(S,[["render",j],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_empty-list.vue"]]);S.__docgenInfo={displayName:"ComboboxEmptyList",exportName:"default",description:"",tags:{},props:[{name:"message",description:"Message to display when list is empty",type:{name:"string"},required:!0},{name:"itemClass",description:`Additional class name for the empty list element.
Can accept all of String, Object, and Array, i.e. has the
same api as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_empty-list.vue"]};const q={EXTRA_SMALL:"xs",SMALL:"sm",DEFAULT:"md",LARGE:"lg",EXTRA_LARGE:"xl"},E={name:"DtCombobox",components:{ComboboxLoadingList:B,ComboboxEmptyList:N},mixins:[k({indexKey:"highlightIndex",idKey:"highlightId",listElementKey:"getListElement",afterHighlightMethod:"afterHighlight",beginningOfListMethod:"beginningOfListMethod",endOfListMethod:"endOfListMethod",activeItemKey:"activeItemEl"})],props:{label:{type:String,required:!0},labelVisible:{type:Boolean,default:!0},size:{type:String,default:null,validator:t=>Object.values(q).includes(t)},description:{type:String,default:""},listId:{type:String,default(){return V()}},onBeginningOfList:{type:Function,default:null},onEndOfList:{type:Function,default:null},showList:{type:Boolean,default:!1},listRenderedOutside:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},emptyList:{type:Boolean,default:!1},emptyStateMessage:{type:String,default:""},emptyStateClass:{type:[String,Object,Array],default:""},clickOnSelect:{type:Boolean,default:!1}},emits:["select","escape","highlight","opened"],data(){return{outsideRenderedListRef:null,hasSlotContent:M}},computed:{inputProps(){return{label:this.label,labelVisible:this.labelVisible,size:this.size,description:this.description,role:"combobox","aria-label":this.label,"aria-expanded":this.showList.toString(),"aria-owns":this.listId,"aria-haspopup":"listbox","aria-activedescendant":this.activeItemId,"aria-controls":this.listId}},listProps(){return{role:"listbox",id:this.listId,class:"d-ps-relative","aria-label":this.label}},beginningOfListMethod(){return this.onBeginningOfList||this.jumpToEnd},endOfListMethod(){return this.onEndOfList||this.jumpToBeginning},activeItemId(){if(!(!this.showList||this.highlightIndex<0||this.loading))return this.highlightId},activeItemEl(){return this.highlightId?this.getListElement().querySelector("#"+this.highlightId):""}},watch:{showList(t){this.listRenderedOutside||(this.setInitialHighlightIndex(),this.$emit("opened",t)),!t&&this.outsideRenderedListRef&&(this.outsideRenderedListRef.removeEventListener("mousemove",this.onMouseHighlight),this.outsideRenderedListRef=null)},loading(t){this.$nextTick(()=>{this.setInitialHighlightIndex()})},$props:{deep:!0,immediate:!0,handler(){this.validateEmptyListProps()}}},created(){this.validateEmptyListProps()},methods:{onMouseHighlight(t){if(this.loading)return;const e=t.target.closest("li");e&&this.highlightId!==e.id&&this.setHighlightId(e.id)},getListElement(){var t;return this.outsideRenderedListRef??((t=this.$refs.listWrapper)==null?void 0:t.querySelector(`#${this.listId}`))},clearHighlightIndex(){this.showList&&this.setHighlightIndex(-1)},afterHighlight(){this.loading||this.$emit("highlight",this.highlightIndex)},onEnterKey(){var t;this.loading||this.emptyList||this.highlightIndex>=0&&(this.$emit("select",this.highlightIndex),this.clickOnSelect&&((t=this.activeItemEl)==null||t.click()))},onEscapeKey(){this.$emit("escape")},onOpen(t,e){var n;this.outsideRenderedListRef=e,(n=this.outsideRenderedListRef)==null||n.addEventListener("mousemove",this.onMouseHighlight),this.$emit("opened",t),t&&this.setInitialHighlightIndex()},onKeyValidation(t,e){!this.showList||!this.getListElement()||this[e](t)},setInitialHighlightIndex(){this.showList&&this.$nextTick(()=>{this.setHighlightIndex(this.loading?-1:0)})},validateEmptyListProps(){this.$slots.emptyListItem||(this.emptyList&&!this.emptyStateMessage||!this.emptyList&&this.emptyStateMessage)&&console.error(`Invalid props: you must pass both props emptyList and emptyStateMessage to show the
      empty message.`)}}},F={"data-qa":"dt-combobox-input-wrapper"};function z(t,e,n,y,h,i){const d=m("combobox-loading-list"),p=m("combobox-empty-list");return o(),r("div",{onKeydown:[e[3]||(e[3]=a(l(s=>i.onKeyValidation(s,"onEscapeKey"),["stop"]),["esc"])),e[4]||(e[4]=a(l(s=>i.onKeyValidation(s,"onEnterKey"),["exact"]),["enter"])),e[5]||(e[5]=a(l(s=>i.onKeyValidation(s,"onUpKey"),["stop","prevent"]),["up"])),e[6]||(e[6]=a(l(s=>i.onKeyValidation(s,"onDownKey"),["stop","prevent"]),["down"])),e[7]||(e[7]=a(l(s=>i.onKeyValidation(s,"onHomeKey"),["stop","prevent"]),["home"])),e[8]||(e[8]=a(l(s=>i.onKeyValidation(s,"onEndKey"),["stop","prevent"]),["end"]))]},[_("div",F,[c(" @slot Slot for the combobox input element "),u(t.$slots,"input",{inputProps:i.inputProps})]),n.showList?(o(),r("div",{key:0,ref:"listWrapper","data-qa":"dt-combobox-list-wrapper",onMouseleave:e[0]||(e[0]=(...s)=>i.clearHighlightIndex&&i.clearHighlightIndex(...s)),onFocusout:e[1]||(e[1]=(...s)=>i.clearHighlightIndex&&i.clearHighlightIndex(...s)),onMousemoveCapture:e[2]||(e[2]=(...s)=>i.onMouseHighlight&&i.onMouseHighlight(...s))},[n.loading&&!n.listRenderedOutside?(o(),v(d,R(x({key:0},i.listProps)),null,16)):n.emptyList&&(n.emptyStateMessage||h.hasSlotContent(t.$slots.emptyListItem))&&!n.listRenderedOutside?(o(),v(p,x({key:1},i.listProps,{message:n.emptyStateMessage,"item-class":n.emptyStateClass}),{default:f(()=>[u(t.$slots,"emptyListItem")]),_:3},16,["message","item-class"])):(o(),r(I,{key:2},[c(" @slot Slot for the combobox list element "),u(t.$slots,"list",{listProps:i.listProps,opened:i.onOpen,clearHighlightIndex:i.clearHighlightIndex})],2112))],544)):c("v-if",!0)],32)}const Z=b(E,[["render",z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox.vue"]]);E.__docgenInfo={exportName:"default",displayName:"DtCombobox",description:`A combobox is a semantic component that displays an input element combined with a listbox,
which enables the user to select items from the list.`,tags:{see:[{description:"https://dialpad.design/components/combobox.html",title:"see"}]},props:[{name:"label",description:"String to use for the input label.",type:{name:"string"},required:!0},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the input, one of `xs`, `sm`, `md`, `lg`, `xl`",tags:{},values:["null","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"listId",description:`Sets an ID on the list element of the component. Used by several aria attributes
as well as when deriving the IDs for each item.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"onBeginningOfList",description:"A method that will be called when the selection goes past the beginning of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"onEndOfList",description:"A method that will be called when the selection goes past the end of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"showList",description:"Determines when to show the list element and also controls the aria-expanded attribute.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listRenderedOutside",description:"If the list is rendered outside the component, like when using popover as the list wrapper.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Determines when to show the skeletons and also controls aria-busy attribute.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyList",description:"Sets the list to an empty state, and displays the message from prop `emptyStateMessage`.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyStateMessage",description:"Message to show when the list is empty",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"emptyStateClass",description:`Additional class name for the empty list element.
Can accept all of String, Object, and Array, i.e. has the
same api as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"clickOnSelect",description:`Programmatically click on the active list item element when a selection
comes from keyboard navigation, i.e. pressing the "Enter" key.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"select",description:"Event fired when item selected",type:{names:["Number"]}},{name:"escape",description:"Event fired when pressing escape"},{name:"highlight",description:"Event fired when the highlight changes",type:{names:["Number"]}},{name:"opened",description:"Event fired when list is shown or hidden",type:{names:["Boolean"]}}],slots:[{name:"input",scoped:!0,description:"Slot for the combobox input element",bindings:[{name:"input-props",title:"binding"}]},{name:"emptyListItem"},{name:"list",scoped:!0,description:"Slot for the combobox list element",bindings:[{name:"list-props",title:"binding"},{name:"opened",title:"binding"},{name:"clear-highlight-index",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/dom.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/keyboard_list_navigation.js","/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox.vue"]};export{B as C,Z as D,q as L,N as a};
//# sourceMappingURL=combobox-4e8457b0.js.map
