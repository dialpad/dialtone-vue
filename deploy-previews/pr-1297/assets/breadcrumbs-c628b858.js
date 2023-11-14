import{D as u,B as i}from"./breadcrumb_item-30fa3087.js";import{u as l}from"./utils-a1e592ea.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";const c={name:"DtBreadcrumbs",components:{DtBreadcrumbItem:u},props:{breadcrumbs:{type:Array,default:()=>[],validate(t){return t.every(({href:e,label:r})=>e!==void 0&&r!==void 0)}},inverted:{type:Boolean,default:!1},ariaLabel:{type:String,default:"breadcrumb"}},data(){return{BREADCRUMBS_INVERTED_MODIFIER:i}},methods:{getBreadcrumbItemKey(t){return`breadcrumbs-item-${t}-${l.getUniqueString()}`}}};var n=function(){var e=this,r=e._self._c;return r("nav",{class:["d-breadcrumbs",{[e.BREADCRUMBS_INVERTED_MODIFIER]:e.inverted}],attrs:{"aria-label":e.ariaLabel,"data-qa":"dt-breadcrumbs"}},[r("ol",[e._t("default",function(){return e._l(e.breadcrumbs,function(s,d){return r("dt-breadcrumb-item",e._g(e._b({key:e.getBreadcrumbItemKey(d),attrs:{inverted:e.inverted}},"dt-breadcrumb-item",s,!1),e.$listeners))})})],2)])},m=[];n._withStripped=!0;var a=o(c,n,m,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue";const v=a.exports;a.exports.__docgenInfo={displayName:"DtBreadcrumbs",description:`Breadcrumbs are links used to provide context for the currently-viewed page
and where it is located within the overall site structure.`,tags:{see:[{description:"https://dialpad.design/components/breadcrumbs.html",title:"see"}]},exportName:"default",props:[{name:"breadcrumbs",description:"A provided list of breadcrumbs. Overridden by default slot",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"inverted",description:"Passed through to link. If true, applies inverted styles to the link.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Descriptive label for the navigation content.",type:{name:"string"},defaultValue:{func:!1,value:"'breadcrumb'"}}],slots:[{name:"default",description:"default slot for breadcrumbs content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/breadcrumbs/breadcrumbs.vue"]};export{v as D};
//# sourceMappingURL=breadcrumbs-c628b858.js.map
