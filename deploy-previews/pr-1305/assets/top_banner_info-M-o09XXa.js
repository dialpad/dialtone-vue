import{k as t,e as n,g as o,p as s,o as d}from"./vue.esm-bundler-pH9C34oL.js";import{_ as i}from"./_plugin-vue_export-helper-x3n3nnut.js";const c=["green300","green100","red200","red100","gold100","gold200","black100","white"],r={name:"DtRecipeTopBannerInfo",props:{colorCode:{type:String,default:"green300",validator:function(e){return c.includes(e)}}},computed:{bannerInfoClass(){return[{green300:"d-bgc-success",green100:"d-bgc-success",red200:"d-bgc-critical",red100:"d-bgc-critical",gold200:"d-bgc-warning",gold100:"d-bgc-warning",black100:"d-bgc-info",white:"d-bgc-primary"}[this.colorCode]]}}},l={class:"d-top-banner-info__left"},p={class:"d-top-banner-info__middle d-my4"},f={class:"d-top-banner-info__right d-ta-right"};function g(e,_,u,b,m,a){return d(),t("div",{class:s(["d-fs-100 d-d-flex d-top-banner-info d-jc-space-between d-ai-center d-fc-primary",a.bannerInfoClass]),"data-qa":"banner-info"},[n("div",l,[o(e.$slots,"left")]),n("div",p,[o(e.$slots,"default")]),n("div",f,[o(e.$slots,"right")])],2)}const C=i(r,[["render",g],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue"]]);r.__docgenInfo={displayName:"DtRecipeTopBannerInfo",exportName:"default",description:"",tags:{},props:[{name:"colorCode",description:"color of the banner background",type:{name:"string"},defaultValue:{func:!1,value:"'green300'"},values:["green300","green100","red200","red100","gold100","gold200","black100","white"]}],slots:[{name:"left"},{name:"default"},{name:"right"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue"]};export{c as C,C as D};
//# sourceMappingURL=top_banner_info-M-o09XXa.js.map
