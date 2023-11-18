import{b as o,w as r,m as l,T as u,o as d,d as p,v as f,e as c,f as t,g as h,n as m,j as w}from"./vue.esm-bundler-pH9C34oL.js";import{_ as v}from"./_plugin-vue_export-helper-x3n3nnut.js";const s={name:"DtLazyShow",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},transition:{type:String,default:null},appear:{type:Boolean,default:!1}},data(){return{initialized:!!this.show}},computed:{isCSSEnabled(){return!0}},watch:{show:function(e){!e||this.initialized||(this.initialized=!0)}}};function y(e,_,a,S,n,i){return d(),o(u,l({name:a.transition,appear:a.appear},e.$attrs,{css:i.isCSSEnabled,persisted:""}),{default:r(()=>[p(c("div",m(w(e.$attrs)),[t(" @slot Slot for main content "),n.initialized?h(e.$slots,"default",{key:0}):t("v-if",!0)],16),[[f,a.show]])]),_:3},16,["name","appear","css"])}const b=v(s,[["render",y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show.vue"]]);s.__docgenInfo={displayName:"DtLazyShow",description:"Lazy Show is a utility component that prevents its children from being rendered until the first time it is shown.",tags:{see:[{description:"https://dialpad.design/components/lazy_show.html",title:"see"}]},exportName:"default",props:[{name:"show",description:"Whether the child slot is shown.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"transition",description:"A valid Vue enter/leave CSS transition name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"appear",description:"Enable/Disable transition animation",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show.vue"]};export{b as D};
//# sourceMappingURL=lazy_show-4hAI-Gxy.js.map
