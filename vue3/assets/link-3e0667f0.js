import{L as i,a as r}from"./link_constants-8ea95ec9.js";import{p as o,f as s,k as l,o as p}from"./vue.esm-bundler-3a08a304.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const t={name:"DtLink",props:{kind:{type:String,default:"",validator(e){return i.includes(e)}}},data(){return{LINK_KIND_MODIFIERS:r}}},c=["href"];function m(e,u,n,f,a,k){return p(),o("a",{class:l(["d-link",a.LINK_KIND_MODIFIERS[n.kind]]),"data-qa":"dt-link",href:"href"in e.$attrs?e.$attrs.href:"javascript:void(0)"},[s(e.$slots,"default")],10,c)}const v=d(t,[["render",m]]);t.__docgenInfo={displayName:"DtLink",description:"A link is a navigational element that can be found on its own, within other text, or directly following content.",tags:{property:[{title:"property",type:{name:"String"},name:"href",description:"attribute"},{title:"property",type:{name:"String"},name:"rel",description:"attribute"}],see:[{description:"https://dialpad.design/components/link.html",title:"see"}]},exportName:"default",props:[{name:"kind",description:"Applies the link variant styles",tags:{},values:["null","danger","warning","success","muted","inverted"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue"]};export{v as D};
//# sourceMappingURL=link-3e0667f0.js.map
