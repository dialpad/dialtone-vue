import{D as l}from"./link-0d2202f6.js";import{I as d,M as o}from"./link_constants-8ea95ec9.js";import{s as i,k as u,u as c,w as m,m as f,p,o as b,f as _,x as E,y as D}from"./vue.esm-bundler-15c892b6.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const B="d-breadcrumbs__item--selected",T="d-breadcrumbs--inverted",r={name:"DtBreadcrumbItem",components:{DtLink:l},inheritAttrs:!1,props:{inverted:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{BREADCRUMB_ITEM_SELECTED_MODIFIER:B}},computed:{linkKind(){return this.inverted?d:o},ariaCurrent(){return this.selected?"location":void 0}}};function k(e,v,t,y,s,a){const n=i("dt-link");return b(),u("li",{"data-qa":"dt-breadcrumb-item",class:p(["d-breadcrumbs__item",{[s.BREADCRUMB_ITEM_SELECTED_MODIFIER]:t.selected}])},[c(n,f({kind:a.linkKind,"aria-current":a.ariaCurrent,"data-qa":"breadcrumb-item"},e.$attrs),{default:m(()=>[_(e.$slots,"default",{},()=>[E(D(t.label),1)])]),_:3},16,["kind","aria-current"])],2)}const g=I(r,[["render",k]]);r.__docgenInfo={displayName:"DtBreadcrumbItem",exportName:"default",description:"",tags:{},props:[{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Applies selected styles to the breadcrumb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Describes the breadcrumb. Overridden by default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"default slot for breadcrumb item's label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]};export{T as B,g as D};
//# sourceMappingURL=breadcrumb_item-1957fda3.js.map
