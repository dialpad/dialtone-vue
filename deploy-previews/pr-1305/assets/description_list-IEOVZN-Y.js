import{b as p}from"./stack_constants-45i7xhSZ.js";import{k as i,F as l,z as f,p as a,o as n,e as o,y as d}from"./vue.esm-bundler-pH9C34oL.js";import{_ as m}from"./_plugin-vue_export-helper-x3n3nnut.js";const y=["row","column"],_=e=>e.term?typeof e.term=="string":!1,g=e=>e.description?typeof e.description=="string":!1,h=e=>Array.isArray(e)?e.every(t=>!(typeof t!="object"||!_(t)||!g(t))):!1,c={name:"DtDescriptionList",props:{direction:{type:String,default:"row",validator:e=>y.includes(e)},items:{type:Array,default:()=>[],validator:e=>h(e),required:!0},gap:{type:String,default:"400",validator:e=>p.includes(e)},termClass:{type:[String,Array,Object],default:""},descriptionClass:{type:[String,Array,Object],default:""}},computed:{dtClass(){return["dt-description-list__term",this.termClass]},ddClass(){return["dt-description-list__description",this.descriptionClass]},getDirectionClass(){return`dt-description-list--${this.direction}`},getGapClass(){return`dt-description-list--gap-${this.gap}`}}};function C(e,t,u,v,D,r){return n(),i("dl",{class:a(["dt-description-list",r.getDirectionClass,r.getGapClass])},[(n(!0),i(l,null,f(u.items,s=>(n(),i(l,{key:s.term},[o("dt",{class:a(r.dtClass)},d(s.term),3),o("dd",{class:a(r.ddClass)},d(s.description),3)],64))),128))],2)}const T=m(c,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]]);c.__docgenInfo={displayName:"DtDescriptionList",exportName:"default",description:"",tags:{},props:[{name:"direction",description:"The direction for the list",tags:{},values:["row","column"],type:{name:"string"},defaultValue:{func:!1,value:"'row'"}},{name:"items",description:"A list of items that represent the term and the description",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"gap",description:"Set the space between the elements",tags:{},values:["0","100","200","300","400","500","600"],type:{name:"string"},defaultValue:{func:!1,value:"'400'"}},{name:"termClass",description:"Used to customize the term element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"descriptionClass",description:"Used to customize the description element",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/description_list/description_list.vue"]};export{T as D};
//# sourceMappingURL=description_list-IEOVZN-Y.js.map