import{u as p}from"./utils-uw-tjP-u.js";import{D as f}from"./icon-z49A8j_D.js";import{D as l}from"./item_layout-ZjX3qzlc.js";import{s as g,b as r,w as n,m as y,t as v,I as m,o as d,B as T,G as I,f as u,u as _}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as b}from"./_plugin-vue_export-helper-x3n3nnut.js";const a={DEFAULT:"default",CUSTOM:"custom"},i={ARROW_KEYS:"arrow-keys",TAB:"tab",NONE:"none"},c={name:"DtListItem",components:{DtItemLayout:l,DtIcon:f},inject:{highlightId:{default:null}},props:{id:{type:String,default(){return p.getUniqueString()}},role:{type:String,default:"listitem"},elementType:{type:String,default:"li"},type:{type:String,default:a.DEFAULT,validator:e=>Object.values(a).includes(e)},navigationType:{type:String,default:i.NONE,validator:e=>Object.values(i).includes(e)},selected:{type:Boolean,default:!1}},emits:["keydown","mousemove","mouseleave","mousedown"],data(){return{injected:!1,mouseHighlighted:!1}},computed:{listItemType(){switch(this.type){case a.DEFAULT:return l;default:return null}},listItemListeners(){return{keydown:e=>{["enter","space"].includes(e.code.toLowerCase())&&this.onClick(e),this.$emit("keydown",e)},mousemove:e=>{this.onMouseHover(e),this.$emit("mousemove",e)},mouseleave:e=>{this.onMouseLeave(e),this.$emit("mouseleave",e)}}},isHighlighted(){return this.isHoverable?this.highlightId&&this.highlightId()?this.id===this.highlightId():this.mouseHighlighted:!1},isFocusable(){return this.navigationType===i.TAB},isHoverable(){return this.navigationType!==i.NONE}},methods:{onClick(e){this.$emit("click",e)},onMouseHover(){this.mouseHighlighted=!0},onMouseLeave(){this.mouseHighlighted=!1}}};function k(e,E,s,L,S,t){const h=g("dt-icon");return d(),r(m(s.elementType),y({id:s.id,class:["dt-list-item",{"dt-list-item--focusable":t.isFocusable,"dt-list-item--highlighted":t.isHighlighted,"dt-list-item--static":!t.isHoverable}],tabindex:t.isFocusable?0:-1,role:s.role,"aria-selected":t.isHighlighted},v(t.listItemListeners)),{default:n(()=>[t.listItemType?(d(),r(m(t.listItemType),{key:0},T({_:2},[I(e.$slots,(w,o)=>({name:o,fn:n(()=>[u(e.$slots,o)])})),s.selected?{name:"selected",fn:n(()=>[_(h,{name:"check",size:"400",class:"dt-list-item--selected-icon"})]),key:"0"}:void 0]),1024)):u(e.$slots,"default",{key:1})]),_:3},16,["id","class","tabindex","role","aria-selected"])}const O=b(c,[["render",k]]);c.__docgenInfo={displayName:"DtListItem",description:"A list item is an element that can be used to represent individual items in a list.",tags:{see:[{description:"https://dialpad.design/components/list_item.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"'listitem'"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"type",description:"The type of child list item to use.",tags:{},values:["default","custom"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_TYPES.DEFAULT"}},{name:"navigationType",description:`The type of navigation that this component should support.
- "arrow-keys" for items that are navigated with UP/DOWN keys.
- "tab" for items that are navigated using the TAB key.
- "none" for static items that are not interactive.`,tags:{},values:["arrow-keys","tab","none"],type:{name:"string"},defaultValue:{func:!1,value:"LIST_ITEM_NAVIGATION_TYPES.NONE"}},{name:"selected",description:"Applies selected styles to the list item",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"keydown",description:"Key down event",type:{names:["KeyboardEvent"]}},{name:"mousemove",description:"Native mouse move event",type:{names:["MouseEvent"]}},{name:"mouseleave",description:"Native mouse leave event",type:{names:["MouseEvent"]}},{name:"mousedown",description:"Mouse down event"},{name:"click",type:{names:["undefined"]}}],slots:[{name:"slotName",scoped:!0,description:"named slots for custom list items",bindings:[{name:"name",title:"binding"}]},{name:"default",description:"slot for the main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item/list_item.vue"]};export{O as D,i as L,a};
//# sourceMappingURL=list_item-epInwBgn.js.map