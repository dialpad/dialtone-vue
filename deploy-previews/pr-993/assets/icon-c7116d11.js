import{I as t,D as r}from"./icon_constants-28986072.js";import{k as s}from"./storybook_utils-605a9b8f.js";import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";const l={name:"DtIcon",props:{size:{type:String,default:"500",validator:a=>Object.keys(t).includes(a)},name:{type:String,required:!0},ariaLabel:{type:String,default:void 0}},computed:{iconSize(){return t[this.size]},iconName(){return s(this.name)},currentIcon(){return r[this.iconName]}}};var o=function(){var e=this,i=e._self._c;return e.currentIcon?i(e.currentIcon,{tag:"component",class:e.iconSize,attrs:{"data-qa":"dt-icon","aria-hidden":e.ariaLabel?"false":"true","aria-label":e.ariaLabel}}):e._e()},u=[];o._withStripped=!0;var n=c(l,o,u,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/icon/icon.vue";const f=n.exports;n.exports.__docgenInfo={displayName:"DtIcon",description:"The Icon component provides a set of glyphs and sizes to provide context your application.",tags:{see:[{description:"https://dialpad.design/components/icon.html",title:"see"}]},exportName:"default",props:[{name:"size",description:"The size of the icon.",tags:{},values:["100","200","300","400","500","600","700","800"],type:{name:"string"},defaultValue:{func:!1,value:"'500'"}},{name:"name",description:"The icon name in kebab-case",type:{name:"string"},required:!0},{name:"ariaLabel",description:"The label of the icon as read out by a screenreader. Leave this unset if your icon is purely presentational",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/icon/icon.vue"]};export{f as D};
//# sourceMappingURL=icon-c7116d11.js.map
