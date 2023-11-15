import{D as s}from"./button-61a95420.js";import{D as i}from"./tooltip-01671e36.js";import{u as r}from"./utils-a1e592ea.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";const u=["sm","md","lg","xl"];const d={name:"DtRecipeCallbarButton",components:{DtButton:s,DtTooltip:i},inheritAttrs:!1,props:{id:{type:String,default(){return r.getUniqueString()}},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},ariaLabel:{type:String,default:null,validator:t=>t||globalThis.$slots.default},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:t=>u.includes(t)},importance:{type:String,default:""}},emits:["click"],computed:{callbarButtonClass(){return[this.buttonClass,"dt-recipe-callbar-button","d-px0",{"dt-recipe-callbar-button--circle":this.circle,"dt-recipe-callbar-button--active":this.active,"dt-recipe-callbar-button--danger":this.danger,"d-btn--disabled d-bgc-transparent":this.disabled,"d-fc-primary":!this.disabled}]},callbarButtonTextClass(){return["d-fs-100 lg:d-d-none md:d-d-none sm:d-d-none",this.textClass]},buttonWidth(){switch(this.buttonWidthSize){case"sm":return"4.5rem";case"md":return"6rem";default:return"8.4rem"}},buttonImportance(){return this.importance?this.importance:this.circle?"outlined":"clear"},callbarButtonListeners(){return{...this.$listeners,click:t=>this.$emit("click",t)}}}};var l=function(){var e=this,a=e._self._c;return a("dt-tooltip",{attrs:{id:e.id,offset:[0,8]},scopedSlots:e._u([{key:"anchor",fn:function(){return[a("span",{class:{"d-c-not-allowed":e.disabled}},[a("dt-button",e._g(e._b({class:e.callbarButtonClass,attrs:{importance:e.buttonImportance,kind:"muted","icon-position":"top","aria-disabled":e.disabled,"aria-label":e.ariaLabel,"label-class":e.callbarButtonTextClass,width:e.buttonWidth},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("icon")]},proxy:!0}],null,!0)},"dt-button",e.$attrs,!1),e.callbarButtonListeners),[e._t("default")],2)],1)]},proxy:!0}],null,!0)},[e._t("tooltip")],2)},c=[];l._withStripped=!0;var n=o(d,l,c,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button.vue";const h=n.exports;n.exports.__docgenInfo={displayName:"DtRecipeCallbarButton",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return utils.getUniqueString();
}`}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:`Determines whether the button should have danger styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:`Determines whether the button should be disabled
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"circle",description:"Whether the button is a circle or not.",tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label for the button. If empty, it takes its value from the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"importance",description:"The fill and outline of the button associated with its visual importance.",tags:{},values:["clear","outlined","primary"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"},{name:"icon"},{name:"tooltip"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button.vue"]};export{u as C,h as D};
//# sourceMappingURL=callbar_button-24fc44aa.js.map