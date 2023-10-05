import{D as h}from"./link-7cbb0bc8.js";import{I as D,M as B}from"./link_constants-8ea95ec9.js";import{u as o,o as r,p as l,y as E,w as I,f as u,g as i,z as g,A as k,m as c,k as m,e as R,F as V,B as C,b as M}from"./vue.esm-bundler-a1916ad5.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{u as N}from"./utils-2ce43813.js";const w="d-breadcrumbs__item--selected",A="d-breadcrumbs--inverted",f={name:"DtBreadcrumbItem",components:{DtLink:h},inheritAttrs:!1,props:{inverted:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{BREADCRUMB_ITEM_SELECTED_MODIFIER:w}},computed:{linkKind(){return this.inverted?D:B},ariaCurrent(){return this.selected?"location":void 0}}};function S(t,n,e,_,s,a){const d=o("dt-link");return r(),l("li",{"data-qa":"dt-breadcrumb-item",class:m(["d-breadcrumbs__item",{[s.BREADCRUMB_ITEM_SELECTED_MODIFIER]:e.selected}])},[E(d,c({kind:a.linkKind,"aria-current":a.ariaCurrent,"data-qa":"breadcrumb-item"},t.$attrs),{default:I(()=>[u(" @slot default slot for breadcrumb item's label "),i(t.$slots,"default",{},()=>[g(k(e.label),1)])]),_:3},16,["kind","aria-current"])],2)}const T=b(f,[["render",S],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]]);f.__docgenInfo={displayName:"DtBreadcrumbItem",exportName:"default",description:"",tags:{},props:[{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Applies selected styles to the breadcrumb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Describes the breadcrumb. Overridden by default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"default slot for breadcrumb item's label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]};const p={name:"DtBreadcrumbs",components:{DtBreadcrumbItem:T},props:{breadcrumbs:{type:Array,default:()=>[],validate(t){return t.every(({href:n,label:e})=>n!==void 0&&e!==void 0)}},inverted:{type:Boolean,default:!1},ariaLabel:{type:String,default:"breadcrumb"}},data(){return{BREADCRUMBS_INVERTED_MODIFIER:A}},methods:{getBreadcrumbItemKey(t){return`breadcrumbs-item-${t}-${N.getUniqueString()}`}}},F=["aria-label"];function L(t,n,e,_,s,a){const d=o("dt-breadcrumb-item");return r(),l("nav",{"aria-label":e.ariaLabel,"data-qa":"dt-breadcrumbs",class:m(["d-breadcrumbs",{[s.BREADCRUMBS_INVERTED_MODIFIER]:e.inverted}])},[R("ol",null,[u(" @slot default slot for breadcrumbs content "),i(t.$slots,"default",{},()=>[(r(!0),l(V,null,C(e.breadcrumbs,(v,y)=>(r(),M(d,c({key:a.getBreadcrumbItemKey(y),inverted:e.inverted},v),null,16,["inverted"]))),128))])])],10,F)}const $=b(p,[["render",L],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]]);p.__docgenInfo={displayName:"DtBreadcrumbs",description:`Breadcrumbs are links used to provide context for the currently-viewed page
and where it is located within the overall site structure.`,tags:{see:[{description:"https://dialpad.design/components/breadcrumbs.html",title:"see"}]},exportName:"default",props:[{name:"breadcrumbs",description:"A provided list of breadcrumbs. Overridden by default slot",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Descriptive label for the navigation content.",type:{name:"string"},defaultValue:{func:!1,value:"'breadcrumb'"}}],slots:[{name:"default",description:"default slot for breadcrumbs content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]};export{$ as D,T as a};
//# sourceMappingURL=breadcrumbs-27a7428e.js.map
