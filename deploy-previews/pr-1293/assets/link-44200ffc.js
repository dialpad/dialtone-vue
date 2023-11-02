import{L as o,a}from"./link_constants-8ea95ec9.js";import{p as r,f as s,g as l,k as d,o as p}from"./vue.esm-bundler-807df745.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";const t={name:"DtLink",props:{kind:{type:String,default:"",validator(e){return o.includes(e)}}},data(){return{LINK_KIND_MODIFIERS:a}}},m=["href"];function u(e,f,n,k,i,_){return p(),r("a",{class:d(["d-link",i.LINK_KIND_MODIFIERS[n.kind]]),"data-qa":"dt-link",href:"href"in e.$attrs?e.$attrs.href:"javascript:void(0)"},[s(" @slot Slot for main content "),l(e.$slots,"default")],10,m)}const I=c(t,[["render",u],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue"]]);t.__docgenInfo={displayName:"DtLink",description:"A link is a navigational element that can be found on its own, within other text, or directly following content.",tags:{property:[{title:"property",type:{name:"String"},name:"href",description:"attribute"},{title:"property",type:{name:"String"},name:"rel",description:"attribute"}],see:[{description:"https://dialpad.design/components/link.html",title:"see"}]},exportName:"default",props:[{name:"kind",description:"Applies the link variant styles",tags:{},values:["null","danger","warning","success","muted","inverted"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue"]};export{I as D};
//# sourceMappingURL=link-44200ffc.js.map
