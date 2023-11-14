import{D as l}from"./link-8f6a82c7.js";import{I as o,M as d}from"./link_constants-8ea95ec9.js";import{s as i,k as u,u as m,w as c,m as f,p as b,o as p,f as _,g as E,x as D,y as v}from"./vue.esm-bundler-3a36b22d.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const k="d-breadcrumbs__item--selected",T="d-breadcrumbs--inverted",r={name:"DtBreadcrumbItem",components:{DtLink:l},inheritAttrs:!1,props:{inverted:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{BREADCRUMB_ITEM_SELECTED_MODIFIER:k}},computed:{linkKind(){return this.inverted?o:d},ariaCurrent(){return this.selected?"location":void 0}}};function B(e,h,t,y,s,a){const n=i("dt-link");return p(),u("li",{"data-qa":"dt-breadcrumb-item",class:b(["d-breadcrumbs__item",{[s.BREADCRUMB_ITEM_SELECTED_MODIFIER]:t.selected}])},[m(n,f({kind:a.linkKind,"aria-current":a.ariaCurrent,"data-qa":"breadcrumb-item"},e.$attrs),{default:c(()=>[_(" @slot default slot for breadcrumb item's label "),E(e.$slots,"default",{},()=>[D(v(t.label),1)])]),_:3},16,["kind","aria-current"])],2)}const V=I(r,[["render",B],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]]);r.__docgenInfo={displayName:"DtBreadcrumbItem",exportName:"default",description:"",tags:{},props:[{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Applies selected styles to the breadcrumb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Describes the breadcrumb. Overridden by default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"default slot for breadcrumb item's label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]};export{T as B,V as D};
//# sourceMappingURL=breadcrumb_item-e945e041.js.map
