import{D as n}from"./link-9e22174f.js";import{I as s,M as l}from"./link_constants-8ea95ec9.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const i="d-breadcrumbs__item--selected",b="d-breadcrumbs--inverted",o={name:"DtBreadcrumbItem",components:{DtLink:n},inheritAttrs:!1,props:{inverted:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{type:String,default:""}},data(){return{BREADCRUMB_ITEM_SELECTED_MODIFIER:i}},computed:{linkKind(){return this.inverted?s:l},ariaCurrent(){return this.selected?"location":void 0}}};var a=function(){var e=this,r=e._self._c;return r("li",{class:["d-breadcrumbs__item",{[e.BREADCRUMB_ITEM_SELECTED_MODIFIER]:e.selected}],attrs:{"data-qa":"dt-breadcrumb-item"}},[r("dt-link",e._b({attrs:{kind:e.linkKind,"aria-current":e.ariaCurrent,"data-qa":"breadcrumb-item"}},"dt-link",e.$attrs,!1),[e._t("default",function(){return[e._v(" "+e._s(e.label)+" ")]})],2)],1)},u=[];a._withStripped=!0;var t=d(o,a,u,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue";const p=t.exports;t.exports.__docgenInfo={displayName:"DtBreadcrumbItem",exportName:"default",description:"",tags:{},props:[{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Applies selected styles to the breadcrumb",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Describes the breadcrumb. Overridden by default slot",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"default slot for breadcrumb item's label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumb_item.vue"]};export{b as B,p as D};
//# sourceMappingURL=breadcrumb_item-cd61bc38.js.map
