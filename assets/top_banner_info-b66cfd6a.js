import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";const a=["green300","green100","red200","red100","gold100","gold200","black100","white"];const s={name:"DtRecipeTopBannerInfo",props:{colorCode:{type:String,default:"green300",validator:function(r){return a.includes(r)}}},computed:{bannerInfoClass(){return[{green300:"d-bgc-success",green100:"d-bgc-success",red200:"d-bgc-critical",red100:"d-bgc-critical",gold200:"d-bgc-warning",gold100:"d-bgc-warning",black100:"d-bgc-info",white:"d-bgc-primary"}[this.colorCode]]}}};var d=function(){var e=this,n=e._self._c;return n("div",{staticClass:"d-fs-100 d-d-flex d-top-banner-info d-jc-space-between d-ai-center d-fc-primary",class:e.bannerInfoClass,attrs:{"data-qa":"banner-info"}},[n("div",{staticClass:"d-top-banner-info__left"},[e._t("left")],2),n("div",{staticClass:"d-top-banner-info__middle d-my4"},[e._t("default")],2),n("div",{staticClass:"d-top-banner-info__right d-ta-right"},[e._t("right")],2)])},i=[],t=o(s,d,i,!1,null,null,null,null);const l=t.exports;t.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfo",exportName:"default",description:"",tags:{},props:[{name:"colorCode",description:"color of the banner background",type:{name:"string"},defaultValue:{func:!1,value:"'green300'"},values:["green300","green100","red200","red100","gold100","gold200","black100","white"]}],slots:[{name:"left"},{name:"default"},{name:"right"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue"]};export{a as C,l as D};
//# sourceMappingURL=top_banner_info-b66cfd6a.js.map
