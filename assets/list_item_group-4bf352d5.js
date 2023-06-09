import{a as n}from"./storybook_utils-d08f208b.js";import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";const r={name:"DtListItemGroup",props:{id:{type:String,default(){return n()}},heading:{type:String,default:""},headingClass:{type:[String,Array,Object],default:""},listClass:{type:[String,Array,Object],default:""}}};var s=function(){var e=this,t=e._self._c;return t("ul",{class:["d-ps-relative","d-px0",e.listClass],attrs:{id:e.id,role:"group","data-qa":"dt-dropdown-list-wrapper","aria-labelledby":`${e.id}-heading`}},[e.heading?t("li",{class:["dt-dropdown-list--header",e.headingClass],attrs:{id:`${e.id}-heading`,role:"presentation","data-qa":"dt-dropdown-list-heading"}},[e._t("headingSlot",function(){return[e._v(" "+e._s(e.heading)+" ")]})],2):e._e(),e._t("default")],2)},l=[],a=i(r,s,l,!1,null,null,null,null);const p=a.exports;a.exports.__docgenInfo={displayName:"DtListItemGroup",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id of the List Item Group",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"heading",description:"List's heading.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"headingClass",description:"Additional class to style the heading",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"listClass",description:"Additional class for the wrapper list element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"headingSlot",description:"Slot for heading, will override heading prop."},{name:"default",description:"Slot for the list component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item_group/list_item_group.vue"]};export{p as D};
//# sourceMappingURL=list_item_group-4bf352d5.js.map