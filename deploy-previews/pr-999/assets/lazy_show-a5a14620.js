import{b as o,w as l,m as r,G as u,o as d,e as p,v as f,g as c,k as a,l as m,D as h,E as w}from"./vue.esm-bundler-15aa0fd7.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const s={name:"DtLazyShow",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},transition:{type:String,default:null},appear:{type:Boolean,default:!1}},data(){return{initialized:!!this.show}},computed:{isCSSEnabled(){return!0}},watch:{show:function(e){!e||this.initialized||(this.initialized=!0)}}};function y(e,_,t,S,n,i){return d(),o(u,r({name:t.transition,appear:t.appear},e.$attrs,{css:i.isCSSEnabled,persisted:""}),{default:l(()=>[p(c("div",h(w(e.$attrs)),[a(" @slot Slot for main content "),n.initialized?m(e.$slots,"default",{key:0}):a("v-if",!0)],16),[[f,t.show]])]),_:3},16,["name","appear","css"])}const b=v(s,[["render",y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show.vue"]]);s.__docgenInfo={displayName:"DtLazyShow",description:"Lazy Show is a utility component that prevents its children from being rendered until the first time it is shown.",tags:{see:[{description:"https://dialpad.design/components/lazy_show.html",title:"see"}]},exportName:"default",props:[{name:"show",description:"Whether the child slot is shown.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"transition",description:"A valid Vue enter/leave CSS transition name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"appear",description:"Enable/Disable transition animation",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/lazy_show/lazy_show.vue"]};export{b as D};
//# sourceMappingURL=lazy_show-a5a14620.js.map
