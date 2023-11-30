import{a as D}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as v}from"./storybook_utils-XrTpeJKJ.js";import{n as r}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as T}from"./button-ux2tnS3y.js";import{D as k}from"./icon-SfO3AFzV.js";const g=["green300","green100","red200","red100","gold100","gold200","black100","white"],I={name:"DtRecipeTopBannerInfo",props:{colorCode:{type:String,default:"green300",validator:function(n){return g.includes(n)}}},computed:{bannerInfoClass(){return[{green300:"d-bgc-success",green100:"d-bgc-success",red200:"d-bgc-critical",red100:"d-bgc-critical",gold200:"d-bgc-warning",gold100:"d-bgc-warning",black100:"d-bgc-info",white:"d-bgc-primary"}[this.colorCode]]}}};var b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dt-top-banner-info",class:t.bannerInfoClass,attrs:{"data-qa":"banner-info"}},[e("div",{staticClass:"dt-top-banner-info__left"},[t._t("left")],2),e("div",{staticClass:"dt-top-banner-info__middle",attrs:{"data-qa":"banner-info--middle"}},[t._t("default")],2),e("div",{staticClass:"dt-top-banner-info__right"},[t._t("right")],2)])},x=[];b._withStripped=!0;var s=r(I,b,x,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue";const l=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfo",exportName:"default",description:"",tags:{},props:[{name:"colorCode",description:"color of the banner background",type:{name:"string"},defaultValue:{func:!1,value:"'green300'"},values:["green300","green100","red200","red100","gold100","gold200","black100","white"]}],slots:[{name:"left"},{name:"default"},{name:"right"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue"]};const R={name:"DtRecipeTopBannerInfoDefault",components:{DtRecipeTopBannerInfo:l}};var C=function(){var t=this,e=t._self._c;return e("dt-recipe-top-banner-info",{attrs:{"color-code":t.$attrs.colorCode}},[t.$attrs.left?e("template",{slot:"left"},[e("span",{domProps:{innerHTML:t._s(t.$attrs.left)}})]):e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")])]),t.$attrs.default?[e("span",{domProps:{innerHTML:t._s(t.$attrs.default)}})]:e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Caller ID: ")]),t._v(" Aerolabs Support (415) 583-3482 ")]),t.$attrs.right?e("template",{slot:"right"},[e("span",{domProps:{innerHTML:t._s(t.$attrs.right)}})]):e("template",{slot:"right"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Recording ON ")])])],2)},$=[];C._withStripped=!0;var i=r(R,C,$,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue";const S=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]};const B={name:"DtRecipeTopBannerInfoVariants",components:{DtButton:T,DtRecipeTopBannerInfo:l,DtIcon:k}};var h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-stack8"},[e("dt-recipe-top-banner-info",{attrs:{"color-code":"gold200"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")]),t._v(" 3:21 ")]),e("dt-button",{staticClass:"d-px4 d-py0",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"arrow-up",size:"200"}})]},proxy:!0}])},[t._v(" Show 2 calls on hold ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"red200"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")]),t._v(" 3:21 ")]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Caller ID: ")]),t._v(" Aerolabs Support (415) 583-3482 ")]),e("template",{slot:"right"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Admin is listening in ")]),t._v(" 0:21 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"black100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Connecting Call ")])]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Your caller ID: ")]),t._v(" (415) 555-1234 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"green100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Ringing... ")])]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Your caller ID:")]),t._v(" (415) 555-1234 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"gold100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v("Joseph Lumaban")]),e("div",{staticClass:"d-fc-critical-strong d-fw-semibold"},[t._v(" On hold "),e("span",{staticClass:"d-fw-normal"},[t._v("00:08")])])]),e("div",[e("dt-button",{attrs:{importance:"clear",kind:"muted"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"park",size:"300"}})],1),t._v(" Park ")],2),e("dt-button",{attrs:{importance:"clear",kind:"muted"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"transfer",size:"300"}})],1),t._v(" Transfer ")],2),e("dt-button",{staticClass:"d-fc-critical-strong",attrs:{importance:"clear",kind:"danger"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"phone-hang-up",size:"300"}})],1),t._v(" End Call ")],2)],1),e("template",{slot:"right"},[e("dt-button",{staticClass:"d-fc-primary d-p0 d-fw-bold",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"}},[t._v(" Click to answer ")]),t._v(" and put the active call on hold ")],1)],2)],1)},V=[];h._withStripped=!0;var c=r(B,h,V,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue";const N=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]};const w={colorCode:"green300",onEvent:D("event")},y={colorCode:{description:"Background color of the banner",options:g,control:{type:"select"}},default:{description:"Display content in the center of the banner",table:{type:{summary:"VNode"}},control:{type:"text"}},left:{name:"left",table:{type:{summary:"VNode"}},control:{type:"text"}},right:{name:"right",table:{type:{summary:"VNode"}},control:{type:"text"}},onEvent:{table:{disable:!0}}},z={title:"Recipes/Notices/Top Banner Info",component:l,args:w,argTypes:y,excludeStories:/.*Data$/},F=(n,{argTypes:t})=>v(n,t,S),O=(n,{argTypes:t})=>v(n,t,N),a={render:F,args:{}},o={render:O,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var d,p,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var _,u,m;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const P=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:o,__namedExportsOrder:P,argTypesData:y,argsData:w,default:z},Symbol.toStringTag,{value:"Module"}));export{a as D,j as T,o as V};
//# sourceMappingURL=top_banner_info.stories-GldUDbSv.js.map
