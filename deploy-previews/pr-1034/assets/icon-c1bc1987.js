import{I as t,D as o}from"./icon_constants-230f8bbc.js";import{k as r}from"./utils-46af4dbd.js";import{b as s,n as c,p as l,k as u,o as d}from"./vue.esm-bundler-e62bdd6b.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const i={name:"DtIcon",props:{size:{type:String,default:"500",validator:a=>Object.keys(t).includes(a)},name:{type:String,required:!0},ariaLabel:{type:String,default:void 0}},computed:{iconSize(){return t[this.size]},iconName(){return r(this.name)},currentIcon(){return o[this.iconName]}}};function p(a,f,n,h,_,e){return e.currentIcon?(d(),s(l(e.currentIcon),{key:0,"data-qa":"dt-icon","aria-hidden":n.ariaLabel?"false":"true","aria-label":n.ariaLabel,class:c(e.iconSize)},null,8,["aria-hidden","aria-label","class"])):u("v-if",!0)}const g=m(i,[["render",p],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/icon/icon.vue"]]);i.__docgenInfo={displayName:"DtIcon",description:"The Icon component provides a set of glyphs and sizes to provide context your application.",tags:{see:[{description:"https://dialpad.design/components/icon.html",title:"see"}]},exportName:"default",props:[{name:"size",description:"The size of the icon.",tags:{},values:["100","200","300","400","500","600","700","800"],type:{name:"string"},defaultValue:{func:!1,value:"'500'"}},{name:"name",description:"The icon name in kebab-case",type:{name:"string"},required:!0},{name:"ariaLabel",description:"The label of the icon as read out by a screenreader. Leave this unset if your icon is purely presentational",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/icon/icon.vue"]};export{g as D};
//# sourceMappingURL=icon-c1bc1987.js.map
