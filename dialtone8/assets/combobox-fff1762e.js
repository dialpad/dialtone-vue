import{K as d}from"./keyboard_list_navigation-8c116ee6.js";import{a as u}from"./storybook_utils-31ede21d.js";import{D as a}from"./list_item-bb51fa93.js";import{D as p}from"./skeleton-8a392920.js";import{n}from"./_plugin-vue2_normalizer-2bbd088e.js";const m={name:"ComboboxLoadingList",components:{DtListItem:a,DtSkeleton:p}};var h=function(){var e=this,s=e._self._c;return s("ol",{staticClass:"d-p0 d-mt8 d-hmx332 d-of-y-auto",attrs:{"aria-busy":"true"}},e._l(7,function(t){return s("dt-list-item",{key:t,attrs:{role:"option","navigation-type":"none"}},[s("dt-skeleton",{attrs:{"text-option":{type:"body"},offset:0}})],1)}),1)},c=[],o=n(m,h,c,!1,null,null,null,null);const f=o.exports;o.exports.__docgenInfo={displayName:"ComboboxLoadingList",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_loading-list.vue"]};const g={name:"ComboboxEmptyList",components:{DtListItem:a},props:{message:{type:String,required:!0},itemClass:{type:[String,Object,Array],default:""}}};var y=function(){var e=this,s=e._self._c;return s("ol",{staticClass:"d-p0",attrs:{"data-qa":"dt-combobox-empty-list"}},[e._t("default",function(){return[s("dt-list-item",{class:["dt-empty-list-item",e.itemClass],attrs:{role:"option","navigation-type":"none",type:"custom"}},[s("span",[e._v(e._s(e.message))])])]})],2)},b=[],l=n(g,y,b,!1,null,null,null,null);const x=l.exports;l.exports.__docgenInfo={displayName:"ComboboxEmptyList",exportName:"default",description:"",tags:{},props:[{name:"message",description:"Message to display when list is empty",type:{name:"string"},required:!0},{name:"itemClass",description:`Additional class name for the empty list element.
Can accept all of String, Object, and Array, i.e. has the
same api as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_empty-list.vue"]};const _={EXTRA_SMALL:"xs",SMALL:"sm",DEFAULT:"md",LARGE:"lg",EXTRA_LARGE:"xl"},L={name:"DtCombobox",components:{ComboboxLoadingList:f,ComboboxEmptyList:x},mixins:[d({indexKey:"highlightIndex",idKey:"highlightId",listElementKey:"getListElement",afterHighlightMethod:"afterHighlight",beginningOfListMethod:"beginningOfListMethod",endOfListMethod:"endOfListMethod",activeItemKey:"activeItemEl"})],props:{label:{type:String,required:!0},labelVisible:{type:Boolean,default:!0},size:{type:String,default:null,validator:i=>Object.values(_).includes(i)},description:{type:String,default:""},listId:{type:String,default(){return u()}},onBeginningOfList:{type:Function,default:null},onEndOfList:{type:Function,default:null},showList:{type:Boolean,default:!1},listRenderedOutside:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},emptyList:{type:Boolean,default:!1},emptyStateMessage:{type:String,default:""},emptyStateClass:{type:[String,Object,Array],default:""},clickOnSelect:{type:Boolean,default:!1}},emits:["select","escape","highlight","opened"],data(){return{outsideRenderedListRef:null}},computed:{inputProps(){return{label:this.label,labelVisible:this.labelVisible,size:this.size,description:this.description,role:"combobox","aria-label":this.label,"aria-expanded":this.showList.toString(),"aria-owns":this.listId,"aria-haspopup":"listbox","aria-activedescendant":this.activeItemId,"aria-controls":this.listId}},listProps(){return{role:"listbox",id:this.listId,class:"d-ps-relative","aria-label":this.label}},beginningOfListMethod(){return this.onBeginningOfList||this.jumpToEnd},endOfListMethod(){return this.onEndOfList||this.jumpToBeginning},activeItemId(){if(!(!this.showList||this.highlightIndex<0||this.loading))return this.highlightId},activeItemEl(){return this.highlightId?this.getListElement().querySelector("#"+this.highlightId):""}},watch:{showList(i){this.listRenderedOutside||(this.setInitialHighlightIndex(),this.$emit("opened",i)),!i&&this.outsideRenderedListRef&&(this.outsideRenderedListRef.removeEventListener("mousemove",this.onMouseHighlight),this.outsideRenderedListRef=null)},loading(i){this.$nextTick(()=>{this.setInitialHighlightIndex()})},$props:{deep:!0,immediate:!0,handler(){this.validateEmptyListProps()}}},created(){this.validateEmptyListProps()},methods:{onMouseHighlight(i){if(this.loading)return;const e=i.target.closest("li");e&&this.highlightId!==e.id&&this.setHighlightId(e.id)},getListElement(){var i;return this.outsideRenderedListRef??((i=this.$refs.listWrapper)==null?void 0:i.querySelector(`#${this.listId}`))},clearHighlightIndex(){this.showList&&this.setHighlightIndex(-1)},afterHighlight(){this.loading||this.$emit("highlight",this.highlightIndex)},onEnterKey(){var i;this.loading||this.emptyList||this.highlightIndex>=0&&(this.$emit("select",this.highlightIndex),this.clickOnSelect&&((i=this.activeItemEl)==null||i.click()))},onEscapeKey(){this.$emit("escape")},onOpen(i,e){var s;this.outsideRenderedListRef=e,(s=this.outsideRenderedListRef)==null||s.addEventListener("mousemove",this.onMouseHighlight),this.$emit("opened",i),i&&this.setInitialHighlightIndex()},onKeyValidation(i,e){!this.showList||!this.getListElement()||this[e](i)},setInitialHighlightIndex(){this.showList&&this.$nextTick(()=>{this.setHighlightIndex(this.loading?-1:0)})},validateEmptyListProps(){this.$slots.emptyListItem||(this.emptyList&&!this.emptyStateMessage||!this.emptyList&&this.emptyStateMessage)&&console.error(`Invalid props: you must pass both props emptyList and emptyStateMessage to show the
      empty message.`)}}};var v=function(){var e=this,s=e._self._c;return s("div",{on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.onKeyValidation(t,"onEscapeKey"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onKeyValidation(t,"onEnterKey")},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.stopPropagation(),t.preventDefault(),e.onKeyValidation(t,"onUpKey"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.stopPropagation(),t.preventDefault(),e.onKeyValidation(t,"onDownKey"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"home",void 0,t.key,void 0)?null:(t.stopPropagation(),t.preventDefault(),e.onKeyValidation(t,"onHomeKey"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"end",void 0,t.key,void 0)?null:(t.stopPropagation(),t.preventDefault(),e.onKeyValidation(t,"onEndKey"))}]}},[s("div",{attrs:{"data-qa":"dt-combobox-input-wrapper"}},[e._t("input",null,{inputProps:e.inputProps})],2),e.showList?s("div",{ref:"listWrapper",attrs:{"data-qa":"dt-combobox-list-wrapper"},on:{mouseleave:e.clearHighlightIndex,focusout:e.clearHighlightIndex,"!mousemove":function(t){return e.onMouseHighlight.apply(null,arguments)}}},[e.loading&&!e.listRenderedOutside?s("combobox-loading-list",e._b({},"combobox-loading-list",e.listProps,!1)):e.emptyList&&(e.emptyStateMessage||e.$slots.emptyListItem)&&!e.listRenderedOutside?s("combobox-empty-list",e._b({attrs:{message:e.emptyStateMessage,"item-class":e.emptyStateClass}},"combobox-empty-list",e.listProps,!1),[e._t("emptyListItem")],2):e._t("list",null,{listProps:e.listProps,opened:e.onOpen,clearHighlightIndex:e.clearHighlightIndex})],2):e._e()])},I=[],r=n(L,v,I,!1,null,null,null,null);const C=r.exports;r.exports.__docgenInfo={exportName:"default",displayName:"DtCombobox",description:`A combobox is a semantic component that displays an input element combined with a listbox,
which enables the user to select items from the list.`,tags:{see:[{description:"https://dialpad.design/components/combobox.html",title:"see"}]},props:[{name:"label",description:"String to use for the input label.",type:{name:"string"},required:!0},{name:"labelVisible",description:"Determines visibility of input label.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the input, one of `xs`, `sm`, `md`, `lg`, `xl`",tags:{},values:["null","xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"description",description:"Description for the input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"listId",description:`Sets an ID on the list element of the component. Used by several aria attributes
as well as when deriving the IDs for each item.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"onBeginningOfList",description:"A method that will be called when the selection goes past the beginning of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"onEndOfList",description:"A method that will be called when the selection goes past the end of the list.",type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"showList",description:"Determines when to show the list element and also controls the aria-expanded attribute.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listRenderedOutside",description:"If the list is rendered outside the component, like when using popover as the list wrapper.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Determines when to show the skeletons and also controls aria-busy attribute.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyList",description:"Sets the list to an empty state, and displays the message from prop `emptyStateMessage`.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyStateMessage",description:"Message to show when the list is empty",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"emptyStateClass",description:`Additional class name for the empty list element.
Can accept all of String, Object, and Array, i.e. has the
same api as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"clickOnSelect",description:`Programmatically click on the active list item element when a selection
comes from keyboard navigation, i.e. pressing the "Enter" key.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"select",description:"Event fired when item selected",type:{names:["Number"]}},{name:"escape",description:"Event fired when pressing escape"},{name:"highlight",description:"Event fired when the highlight changes",type:{names:["Number"]}},{name:"opened",description:"Event fired when list is shown or hidden",type:{names:["Boolean"]}}],slots:[{name:"input",scoped:!0,description:"Slot for the combobox input element",bindings:[{name:"input-props",title:"binding"}]},{name:"emptyListItem"},{name:"list",scoped:!0,description:"Slot for the combobox list element",bindings:[{name:"list-props",title:"binding"},{name:"opened",title:"binding"},{name:"clear-highlight-index",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/dom.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/keyboard_list_navigation.js","/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox.vue"]};export{f as C,C as D,_ as L,x as a};
//# sourceMappingURL=combobox-fff1762e.js.map
