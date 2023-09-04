import{u as f}from"./utils-dd7e0c5a.js";import{D as g}from"./icon-bd60410b.js";import{k as v,v as m,m as n,p as y,z as _,I as r,o as a,J as T,g as I,j as d,x as u,l as k,d as E,F as L}from"./vue.esm-bundler-6a14dfd3.js";import{D as c}from"./item_layout-5c0d6ab8.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const o={DEFAULT:"default",CUSTOM:"custom"},i={ARROW_KEYS:"arrow-keys",TAB:"tab",NONE:"none"};const h={name:"DtListItem",components:{DtItemLayout:c,DtIcon:g},inject:{highlightId:{default:null}},props:{id:{type:String,default(){return f.getUniqueString()}},role:{type:String,default:"listitem"},elementType:{type:String,default:"li"},type:{type:String,default:o.DEFAULT,validator:e=>Object.values(o).includes(e)},navigationType:{type:String,default:i.NONE,validator:e=>Object.values(i).includes(e)},selected:{type:Boolean,default:!1}},emits:["keydown","mousemove","mouseleave","mousedown"],data(){return{injected:!1,mouseHighlighted:!1}},computed:{listItemType(){switch(this.type){case o.DEFAULT:return c;default:return null}},listItemListeners(){return{keydown:e=>{["enter","space"].includes(e.code.toLowerCase())&&this.onClick(e),this.$emit("keydown",e)},mousemove:e=>{this.onMouseHover(e),this.$emit("mousemove",e)},mouseleave:e=>{this.onMouseLeave(e),this.$emit("mouseleave",e)}}},isHighlighted(){return this.isHoverable?this.highlightId&&this.highlightId()?this.id===this.highlightId():this.mouseHighlighted:!1},isFocusable(){return this.navigationType===i.TAB},isHoverable(){return this.navigationType!==i.NONE}},methods:{onClick(e){this.$emit("click",e)},onMouseHover(){this.mouseHighlighted=!0},onMouseLeave(){this.mouseHighlighted=!1}}};function b(e,N,s,w,A,t){const p=v("dt-icon");return a(),m(r(s.elementType),y({id:s.id,class:["dt-list-item",{"dt-list-item--focusable":t.isFocusable,"dt-list-item--highlighted":t.isHighlighted,"dt-list-item--static":!t.isHoverable}],tabindex:t.isFocusable?0:-1,role:s.role,"aria-selected":t.isHighlighted},_(t.listItemListeners)),{default:n(()=>[t.listItemType?(a(),m(r(t.listItemType),{key:0},T({_:2},[I(e.$slots,(D,l)=>({name:l,fn:n(()=>[d(" @slot named slots for custom list items "),u(e.$slots,l)])})),s.selected?{name:"selected",fn:n(()=>[k(p,{name:"check",size:"400",class:"dt-list-item--selected-icon"})]),key:"0"}:void 0]),1024)):(a(),E(L,{key:1},[d(" @slot slot for the main content "),u(e.$slots,"default")],2112))]),_:3},16,["id","class","tabindex","role","aria-selected"])}const C=S(h,[["render",b],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/list_item.vue"]]);h.__docgenInfo={displayName:"DtListItem",description:"A list item is an element that can be used to represent individual items in a list.",tags:{see:[{description:"https://dialpad.design/components/list_item.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"'listitem'"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"type",description:"The type of child list item to use.",tags:{},values:["default","custom"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_TYPES.DEFAULT"}},{name:"navigationType",description:`The type of navigation that this component should support.
- "arrow-keys" for items that are navigated with UP/DOWN keys.
- "tab" for items that are navigated using the TAB key.
- "none" for static items that are not interactive.`,tags:{},values:["arrow-keys","tab","none"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_NAVIGATION_TYPES.NONE"}},{name:"selected",description:"Applies selected styles to the list item",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"keydown",description:"Key down event",type:{names:["KeyboardEvent"]}},{name:"mousemove",description:"Native mouse move event",type:{names:["MouseEvent"]}},{name:"mouseleave",description:"Native mouse leave event",type:{names:["MouseEvent"]}},{name:"mousedown",description:"Mouse down event"},{name:"click",type:{names:["undefined"]}}],slots:[{name:"slotName",scoped:!0,description:"named slots for custom list items",bindings:[{name:"name",title:"binding"}]},{name:"default",description:"slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/list_item.vue"]};export{C as D,i as L,o as a};
//# sourceMappingURL=list_item-5d806be9.js.map
