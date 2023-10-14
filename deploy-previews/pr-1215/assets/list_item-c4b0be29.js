import{u}from"./storybook_utils-3d298cfc.js";import{D as m}from"./icon-82a08f84.js";import{D as l}from"./item_layout-499a0a91.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const n={DEFAULT:"default",CUSTOM:"custom"},i={ARROW_KEYS:"arrow-keys",TAB:"tab",NONE:"none"};const c={name:"DtListItem",components:{DtItemLayout:l,DtIcon:m},inject:{highlightId:{default:null}},props:{id:{type:String,default(){return u.getUniqueString()}},role:{type:String,default:"listitem"},elementType:{type:String,default:"li"},type:{type:String,default:n.DEFAULT,validator:t=>Object.values(n).includes(t)},navigationType:{type:String,default:i.NONE,validator:t=>Object.values(i).includes(t)},selected:{type:Boolean,default:!1}},emits:["click","keydown","mousemove","mouseleave"],data(){return{injected:!1,mouseHighlighted:!1}},computed:{listItemType(){switch(this.type){case n.DEFAULT:return l;default:return null}},listItemListeners(){return{...this.$listeners,keydown:t=>{["enter","space"].includes(t.code.toLowerCase())&&this.onClick(t),this.$emit("keydown",t)},mousemove:t=>{this.onMouseHover(t),this.$emit("mousemove",t)},mouseleave:t=>{this.onMouseLeave(t),this.$emit("mouseleave",t)}}},isHighlighted(){return this.isHoverable?this.highlightId&&this.highlightId()?this.id===this.highlightId():this.mouseHighlighted:!1},isFocusable(){return this.navigationType===i.TAB},isHoverable(){return this.navigationType!==i.NONE}},methods:{onClick(t){this.$emit("click",t)},onMouseHover(){this.mouseHighlighted=!0},onMouseLeave(){this.mouseHighlighted=!1}}};var r=function(){var e=this,s=e._self._c;return s(e.elementType,e._g({tag:"component",class:["dt-list-item",{"dt-list-item--focusable":e.isFocusable,"dt-list-item--highlighted":e.isHighlighted,"dt-list-item--static":!e.isHoverable}],attrs:{id:e.id,tabindex:e.isFocusable?0:-1,role:e.role,"aria-selected":e.isHighlighted}},e.listItemListeners),[e.listItemType?s(e.listItemType,{tag:"component",scopedSlots:e._u([e._l(e.$slots,function(h,o){return{key:o,fn:function(){return[e._t(o)]},proxy:!0}}),e.selected?{key:"selected",fn:function(){return[s("dt-icon",{staticClass:"dt-list-item--selected-icon",attrs:{name:"check",size:"400"}})]},proxy:!0}:null],null,!0)}):e._t("default")],2)},p=[];r._withStripped=!0;var a=d(c,r,p,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/list_item.vue";const _=a.exports;a.exports.__docgenInfo={displayName:"DtListItem",description:"A list item is an element that can be used to represent individual items in a list.",tags:{see:[{description:"https://dialpad.design/components/list_item.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"'listitem'"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"type",description:"The type of child list item to use.",tags:{},values:["default","custom"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_TYPES.DEFAULT"}},{name:"navigationType",description:`The type of navigation that this component should support.
- "arrow-keys" for items that are navigated with UP/DOWN keys.
- "tab" for items that are navigated using the TAB key.
- "none" for static items that are not interactive.`,tags:{},values:["arrow-keys","tab","none"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_NAVIGATION_TYPES.NONE"}},{name:"selected",description:"Applies selected styles to the list item",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"keydown",description:"Key down event",type:{names:["KeyboardEvent"]}},{name:"mousemove",description:"Native mouse move event",type:{names:["MouseEvent"]}},{name:"mouseleave",description:"Native mouse leave event",type:{names:["MouseEvent"]}}],slots:[{name:"slotName",scoped:!0,description:"named slots for custom list items",bindings:[{name:"name",title:"binding"}]},{name:"default",description:"slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/list_item.vue"]};export{_ as D,i as L,n as a};
//# sourceMappingURL=list_item-c4b0be29.js.map