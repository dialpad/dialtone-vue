import{D as u}from"./button-1c0b010e.js";import{D as d}from"./tooltip-04ae195c.js";import{u as c,e as f}from"./utils-24086939.js";import{u as s,b as p,w as l,o as m,e as b,y as h,g as n,m as g,x as v,k as y}from"./vue.esm-bundler-5f4c5b12.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const B=["sm","md","lg","xl"];const i={name:"DtRecipeCallbarButton",components:{DtButton:u,DtTooltip:d},inheritAttrs:!1,props:{id:{type:String,default(){return c.getUniqueString()}},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},ariaLabel:{type:String,default:null,validator:e=>e||globalThis.$slots.default},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:e=>B.includes(e)},importance:{type:String,default:""}},emits:["click"],computed:{callbarButtonClass(){return[this.buttonClass,"dt-recipe-callbar-button","d-px0",{"dt-recipe-callbar-button--circle":this.circle,"dt-recipe-callbar-button--active":this.active,"dt-recipe-callbar-button--danger":this.danger,"d-btn--disabled d-bgc-transparent":this.disabled,"d-fc-primary":!this.disabled}]},callbarButtonTextClass(){return["d-fs-100 lg:d-d-none md:d-d-none sm:d-d-none",this.textClass]},buttonWidth(){switch(this.buttonWidthSize){case"sm":return"4.5rem";case"md":return"6rem";default:return"8.4rem"}},buttonImportance(){return this.importance?this.importance:this.circle?"outlined":"clear"},callbarButtonListeners(){return{...f(this.$attrs),click:e=>this.$emit("click",e)}}}};function C(e,x,a,V,w,t){const r=s("dt-button"),o=s("dt-tooltip");return m(),p(o,{id:a.id,offset:[0,8]},{anchor:l(()=>[b("span",{class:y({"d-c-not-allowed":a.disabled})},[h(r,g({importance:t.buttonImportance,kind:"muted","icon-position":"top","aria-disabled":a.disabled,"aria-label":a.ariaLabel,"label-class":t.callbarButtonTextClass,width:t.buttonWidth,class:t.callbarButtonClass},e.$attrs,v(t.callbarButtonListeners)),{icon:l(()=>[n(e.$slots,"icon")]),default:l(()=>[n(e.$slots,"default")]),_:3},16,["importance","aria-disabled","aria-label","label-class","width","class"])],2)]),default:l(()=>[n(e.$slots,"tooltip")]),_:3},8,["id"])}const I=_(i,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button.vue"]]);i.__docgenInfo={displayName:"DtRecipeCallbarButton",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return utils.getUniqueString();
}`}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:`Determines whether the button should have danger styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:`Determines whether the button should be disabled
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"circle",description:"Whether the button is a circle or not.",tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label for the button. If empty, it takes its value from the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"importance",description:"The fill and outline of the button associated with its visual importance.",tags:{},values:["clear","outlined","primary"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"},{name:"icon"},{name:"tooltip"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button.vue"]};export{B as C,I as D};
//# sourceMappingURL=callbar_button-74305cbe.js.map
