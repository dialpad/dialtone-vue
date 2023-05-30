import{a as i}from"./storybook_utils-96cfb4be.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";const s={name:"DtListItemGroup",props:{id:{type:String,default(){return i()}},heading:{type:String,default:""},headingClass:{type:[String,Array,Object],default:""},listClass:{type:[String,Array,Object],default:""}}};var n=function(){var e=this,a=e._self._c;return a("ul",{class:["d-ps-relative","d-px0",e.listClass],attrs:{id:e.id,role:"group","data-qa":"dt-dropdown-list-wrapper","aria-labelledby":`${e.id}-heading`}},[e.heading?a("li",{class:["dt-dropdown-list--header",e.headingClass],attrs:{id:`${e.id}-heading`,role:"presentation","data-qa":"dt-dropdown-list-heading"}},[e._t("headingSlot",function(){return[e._v(" "+e._s(e.heading)+" ")]})],2):e._e(),e._t("default")],2)},l=[];n._withStripped=!0;var t=r(s,n,l,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/list_item_group/list_item_group.vue";const p=t.exports;t.exports.__docgenInfo={displayName:"DtListItemGroup",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id of the List Item Group",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"heading",description:"List's heading.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"headingClass",description:"Additional class to style the heading",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"listClass",description:"Additional class for the wrapper list element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"headingSlot",description:"Slot for heading, will override heading prop."},{name:"default",description:"Slot for the list component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item_group/list_item_group.vue"]};export{p as D};
//# sourceMappingURL=list_item_group-c204332b.js.map