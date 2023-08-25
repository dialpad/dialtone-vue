import{D as d}from"./button-ebe757f5.js";import{D as c}from"./tooltip-028405b8.js";import{u as f}from"./utils-1ad0962e.js";import{k as s,v as p,m as l,o as b,e as m,l as h,x as n,n as i}from"./vue.esm-bundler-2457a580.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const v=["sm","md","lg","xl"];const o={name:"DtRecipeCallbarButton",components:{DtButton:d,DtTooltip:c},inheritAttrs:!0,props:{id:{type:String,default(){return f.getUniqueString()}},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},ariaLabel:{type:String,default:null,validator:e=>e||globalThis.$slots.default},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:e=>v.includes(e)},importance:{type:String,default:""}},computed:{callbarButtonClass(){return[this.buttonClass,"dt-recipe-callbar-button","d-px0",{"dt-recipe-callbar-button--circle":this.circle,"d-btn--icon-only":this.circle,"dt-recipe-callbar-button--active":this.active,"dt-recipe-callbar-button--danger":this.danger,"d-btn--disabled d-bgc-transparent":this.disabled,"d-fc-primary":!this.disabled}]},callbarButtonTextClass(){return["d-fs-100 lg:d-d-none md:d-d-none sm:d-d-none",this.textClass]},buttonWidth(){switch(this.buttonWidthSize){case"sm":return"4.5rem";case"md":return"6rem";default:return"8.4rem"}},buttonImportance(){return this.importance?this.importance:this.circle?"outlined":"clear"}}};function _(e,y,t,C,B,a){const r=s("dt-button"),u=s("dt-tooltip");return b(),p(u,{id:t.id,offset:[0,8]},{anchor:l(()=>[m("span",{class:i({"d-c-not-allowed":t.disabled})},[h(r,{importance:a.buttonImportance,kind:"muted","icon-position":"top","aria-disabled":t.disabled,"aria-label":t.ariaLabel,"label-class":a.callbarButtonTextClass,width:a.buttonWidth,class:i(a.callbarButtonClass)},{default:l(()=>[n(e.$slots,"default"),n(e.$slots,"icon")]),_:3},8,["importance","aria-disabled","aria-label","label-class","width","class"])],2)]),default:l(()=>[n(e.$slots,"tooltip")]),_:3},8,["id"])}const A=g(o,[["render",_],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button.vue"]]);o.__docgenInfo={displayName:"DtRecipeCallbarButton",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return utils.getUniqueString();
}`}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:`Determines whether the button should have danger styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:`Determines whether the button should be disabled
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"circle",description:"Whether the button is a circle or not.",tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label for the button. If empty, it takes its value from the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"importance",description:"The fill and outline of the button associated with its visual importance.",tags:{},values:["clear","outlined","primary"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"},{name:"icon"},{name:"tooltip"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button.vue"]};export{v as C,A as D};
//# sourceMappingURL=callbar_button-8cbfc078.js.map
