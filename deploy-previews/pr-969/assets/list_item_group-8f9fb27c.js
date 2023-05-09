import{g as l}from"./utils-9325de8f.js";import{e as i,n,i as t,j as o,o as r,q as d,t as u}from"./vue.esm-bundler-2e3b72e0.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const s={name:"DtListItemGroup",props:{id:{type:String,default(){return l()}},heading:{type:String,default:""},headingClass:{type:[String,Array,Object],default:""},listClass:{type:[String,Array,Object],default:""}}},c=["id","aria-labelledby"],g=["id"];function m(a,f,e,h,_,y){return r(),i("ul",{id:e.id,class:n(["d-ps-relative","d-px0",e.listClass]),role:"group","data-qa":"dt-dropdown-list-wrapper","aria-labelledby":`${e.id}-heading`},[e.heading?(r(),i("li",{key:0,id:`${e.id}-heading`,role:"presentation","data-qa":"dt-dropdown-list-heading",class:n(["dt-dropdown-list--header",e.headingClass])},[t(" @slot Slot for heading, will override heading prop. "),o(a.$slots,"headingSlot",{},()=>[d(u(e.heading),1)])],10,g)):t("v-if",!0),t(" @slot Slot for the list component "),o(a.$slots,"default")],10,c)}const b=p(s,[["render",m],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/list_item_group/list_item_group.vue"]]);s.__docgenInfo={displayName:"DtListItemGroup",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id of the List Item Group",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"heading",description:"List's heading.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"headingClass",description:"Additional class to style the heading",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"listClass",description:"Additional class for the wrapper list element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"headingSlot",description:"Slot for heading, will override heading prop."},{name:"default",description:"Slot for the list component"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/list_item_group/list_item_group.vue"]};export{b as D};
//# sourceMappingURL=list_item_group-8f9fb27c.js.map
