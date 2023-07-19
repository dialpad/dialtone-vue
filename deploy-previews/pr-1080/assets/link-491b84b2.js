import{a as i,L as a}from"./link_constants-51338c78.js";import{f as r,k as s,l,n as d,o as p}from"./vue.esm-bundler-acd771f7.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";const t={name:"DtLink",props:{kind:{type:String,default:"",validator(e){return i.includes(e)}}},data(){return{LINK_KIND_MODIFIERS:a}}};function m(e,u,n,f,o,k){return p(),r("a",{class:d(["d-link",o.LINK_KIND_MODIFIERS[n.kind]]),"data-qa":"dt-link"},[s(" @slot Slot for main content "),l(e.$slots,"default")],2)}const I=c(t,[["render",m],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue"]]);t.__docgenInfo={displayName:"DtLink",description:"A link is a navigational element that can be found on its own, within other text, or directly following content.",tags:{property:[{title:"property",type:{name:"String"},name:"href",description:"attribute"},{title:"property",type:{name:"String"},name:"rel",description:"attribute"}],see:[{description:"https://dialpad.design/components/link.html",title:"see"}]},exportName:"default",props:[{name:"kind",description:"Applies the link variant styles",tags:{},values:["null","danger","warning","success","muted","inverted"],type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for main content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/link/link.vue"]};export{I as D};
//# sourceMappingURL=link-491b84b2.js.map
