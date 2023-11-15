import{D as c,B as m}from"./breadcrumb_item-23bab3a4.js";import{u as b}from"./utils-ddad74ee.js";import{s as f,k as n,e as p,f as v,g as _,p as B,o as t,F as g,z as y,b as h,m as D}from"./vue.esm-bundler-81c53cfe.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const s={name:"DtBreadcrumbs",components:{DtBreadcrumbItem:c},props:{breadcrumbs:{type:Array,default:()=>[],validate(r){return r.every(({href:a,label:e})=>a!==void 0&&e!==void 0)}},inverted:{type:Boolean,default:!1},ariaLabel:{type:String,default:"breadcrumb"}},data(){return{BREADCRUMBS_INVERTED_MODIFIER:m}},methods:{getBreadcrumbItemKey(r){return`breadcrumbs-item-${r}-${b.getUniqueString()}`}}},k=["aria-label"];function E(r,a,e,R,d,o){const l=f("dt-breadcrumb-item");return t(),n("nav",{"aria-label":e.ariaLabel,"data-qa":"dt-breadcrumbs",class:B(["d-breadcrumbs",{[d.BREADCRUMBS_INVERTED_MODIFIER]:e.inverted}])},[p("ol",null,[v(" @slot default slot for breadcrumbs content "),_(r.$slots,"default",{},()=>[(t(!0),n(g,null,y(e.breadcrumbs,(u,i)=>(t(),h(l,D({key:o.getBreadcrumbItemKey(i),inverted:e.inverted},u),null,16,["inverted"]))),128))])])],10,k)}const F=I(s,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]]);s.__docgenInfo={displayName:"DtBreadcrumbs",description:`Breadcrumbs are links used to provide context for the currently-viewed page
and where it is located within the overall site structure.`,tags:{see:[{description:"https://dialpad.design/components/breadcrumbs.html",title:"see"}]},exportName:"default",props:[{name:"breadcrumbs",description:"A provided list of breadcrumbs. Overridden by default slot",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Descriptive label for the navigation content.",type:{name:"string"},defaultValue:{func:!1,value:"'breadcrumb'"}}],slots:[{name:"default",description:"default slot for breadcrumbs content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]};export{F as D};
//# sourceMappingURL=breadcrumbs-e402128b.js.map
