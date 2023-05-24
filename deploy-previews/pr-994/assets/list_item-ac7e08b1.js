import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";import{u as c}from"./storybook_utils-adf429e4.js";import{D as f}from"./icon-f34d44a2.js";const n={DEFAULT:"default",CUSTOM:"custom"},s={ARROW_KEYS:"arrow-keys",TAB:"tab",NONE:"none"};const p={name:"DtDefaultListItem"};var u=function(){var e=this,i=e._self._c;return i("div",{staticClass:"dt-default-list-item d-fs-200 d-lh-300 d-py4 d-px8 d-d-flex d-ai-center"},[e.$slots.left?i("section",{staticClass:"dt-default-list-item--left d-d-inline-flex d-as-flex-start d-d-flex d-ai-center d-pr8 d-jc-flex-end",attrs:{"data-qa":"dt-default-list-item-left-wrapper"}},[e._t("left")],2):e._e(),i("section",{staticClass:"d-fl-grow1"},[e.$slots.default?i("div",[e._t("default")],2):e._e(),e.$slots.subtitle?i("div",{class:["d-fs-100 d-fc-tertiary",{"d-mtn2":e.$slots.default}],attrs:{"data-qa":"dt-default-list-item-subtitle-wrapper"}},[e._t("subtitle")],2):e._e(),e.$slots.bottom?i("div",{staticClass:"d-mt2",attrs:{"data-qa":"dt-default-list-item-bottom-wrapper"}},[e._t("bottom")],2):e._e()]),e.$slots.right?i("section",{staticClass:"dt-default-list-item--right d-d-inline-flex d-as-flex-start d-d-flex d-ai-center d-pl8",attrs:{"data-qa":"dt-default-list-item-right-wrapper"}},[e._t("right")],2):e._e(),e._t("selected")],2)},_=[];u._withStripped=!0;var l=d(p,u,_,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/default_list_item.vue";const r=l.exports;l.exports.__docgenInfo={displayName:"DtDefaultListItem",exportName:"default",description:"",tags:{},slots:[{name:"left",description:"Slot for the left content"},{name:"default",description:"Slot for the main content"},{name:"subtitle",description:"Slot for the content below the main content"},{name:"bottom",description:"Slot for the content below the subtitle"},{name:"right",description:"Slot for the right content"},{name:"selected"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/default_list_item.vue"]};const h={name:"DtListItem",components:{DtDefaultListItem:r,DtIcon:f},inject:{highlightId:{default:null}},props:{id:{type:String,default(){return c.getUniqueString()}},role:{type:String,default:"listitem"},elementType:{type:String,default:"li"},type:{type:String,default:n.DEFAULT,validator:t=>Object.values(n).includes(t)},navigationType:{type:String,default:s.NONE,validator:t=>Object.values(s).includes(t)},selected:{type:Boolean,default:!1}},emits:["click","keydown","mousemove","mouseleave"],data(){return{injected:!1,mouseHighlighted:!1}},computed:{listItemType(){switch(this.type){case n.DEFAULT:return r;default:return null}},listItemListeners(){return{...this.$listeners,keydown:t=>{["enter","space"].includes(t.code.toLowerCase())&&this.onClick(t),this.$emit("keydown",t)},mousemove:t=>{this.onMouseHover(t),this.$emit("mousemove",t)},mouseleave:t=>{this.onMouseLeave(t),this.$emit("mouseleave",t)}}},isHighlighted(){return this.isHoverable?this.highlightId&&this.highlightId()?this.id===this.highlightId():this.mouseHighlighted:!1},isFocusable(){return this.navigationType===s.TAB},isHoverable(){return this.navigationType!==s.NONE}},methods:{onClick(t){this.$emit("click",t)},onMouseHover(){this.mouseHighlighted=!0},onMouseLeave(){this.mouseHighlighted=!1}}};var m=function(){var e=this,i=e._self._c;return i(e.elementType,e._g({tag:"component",class:["dt-list-item d-ls-none",{"dt-list-item--focusable":e.isFocusable,"dt-list-item--highlighted":e.isHighlighted,"dt-list-item--static":!e.isHoverable}],attrs:{id:e.id,tabindex:e.isFocusable?0:-1,role:e.role,"aria-selected":e.isHighlighted}},e.listItemListeners),[e.listItemType?i(e.listItemType,{tag:"component",scopedSlots:e._u([e._l(e.$slots,function(g,o){return{key:o,fn:function(){return[e._t(o)]},proxy:!0}}),e.selected?{key:"selected",fn:function(){return[i("dt-icon",{staticClass:"d-ml8",attrs:{name:"check",size:"400"}})]},proxy:!0}:null],null,!0)}):e._t("default")],2)},v=[];m._withStripped=!0;var a=d(h,m,v,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/list_item.vue";const b=a.exports;a.exports.__docgenInfo={displayName:"DtListItem",description:"A list item is an element that can be used to represent individual items in a list.",tags:{see:[{description:"https://dialpad.design/components/list_item.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"'listitem'"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"type",description:"The type of child list item to use.",tags:{},values:["default","custom"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_TYPES.DEFAULT"}},{name:"navigationType",description:`The type of navigation that this component should support.
- "arrow-keys" for items that are navigated with UP/DOWN keys.
- "tab" for items that are navigated using the TAB key.
- "none" for static items that are not interactive.`,tags:{},values:["arrow-keys","tab","none"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_NAVIGATION_TYPES.NONE"}},{name:"selected",description:"Applies selected styles to the list item",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"keydown",description:"Key down event",type:{names:["KeyboardEvent"]}},{name:"mousemove",description:"Native mouse move event",type:{names:["MouseEvent"]}},{name:"mouseleave",description:"Native mouse leave event",type:{names:["MouseEvent"]}}],slots:[{name:"slotName",scoped:!0,description:"named slots for custom list items",bindings:[{name:"name",title:"binding"}]},{name:"default",description:"slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/list_item.vue"]};export{b as D,s as L,n as a};
//# sourceMappingURL=list_item-ac7e08b1.js.map
