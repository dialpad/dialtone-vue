import{a as h}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as _}from"./storybook_utils-6c24aced.js";import{n as r}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as y}from"./button-82727ed7.js";import{D}from"./icon-b42420a4.js";const m=["green300","green100","red200","red100","gold100","gold200","black100","white"];const w={name:"DtRecipeTopBannerInfo",props:{colorCode:{type:String,default:"green300",validator:function(n){return m.includes(n)}}},computed:{bannerInfoClass(){return[{green300:"d-bgc-success",green100:"d-bgc-success",red200:"d-bgc-critical",red100:"d-bgc-critical",gold200:"d-bgc-warning",gold100:"d-bgc-warning",black100:"d-bgc-info",white:"d-bgc-primary"}[this.colorCode]]}}};var T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-fs-100 d-d-flex d-top-banner-info d-jc-space-between d-ai-center d-fc-primary",class:t.bannerInfoClass,attrs:{"data-qa":"banner-info"}},[e("div",{staticClass:"d-top-banner-info__left"},[t._t("left")],2),e("div",{staticClass:"d-top-banner-info__middle d-my4"},[t._t("default")],2),e("div",{staticClass:"d-top-banner-info__right d-ta-right"},[t._t("right")],2)])},x=[],u=r(w,T,x,!1,null,null,null,null);const s=u.exports;u.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfo",exportName:"default",description:"",tags:{},props:[{name:"colorCode",description:"color of the banner background",type:{name:"string"},defaultValue:{func:!1,value:"'green300'"},values:["green300","green100","red200","red100","gold100","gold200","black100","white"]}],slots:[{name:"left"},{name:"default"},{name:"right"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info.vue"]};const I={name:"DtRecipeTopBannerInfoDefault",components:{DtRecipeTopBannerInfo:s}};var k=function(){var t=this,e=t._self._c;return e("dt-recipe-top-banner-info",{attrs:{"color-code":t.colorCode}},[t.left?e("template",{slot:"left"},[e("span",{domProps:{innerHTML:t._s(t.left)}})]):e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")])]),t.defaultSlot?[e("span",{domProps:{innerHTML:t._s(t.defaultSlot)}})]:e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Caller ID: ")]),t._v(" Aerolabs Support (415) 583-3482 ")]),t.right?e("template",{slot:"right"},[e("span",{domProps:{innerHTML:t._s(t.right)}})]):e("template",{slot:"right"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Recording ON ")])])],2)},R=[],g=r(I,k,R,!1,null,null,null,null);const S=g.exports;g.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]};const B={name:"DtRecipeTopBannerInfoVariants",components:{DtButton:y,DtRecipeTopBannerInfo:s,DtIcon:D}};var V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-stack8"},[e("dt-recipe-top-banner-info",{attrs:{"color-code":"gold200"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")]),t._v(" 3:21 ")]),e("dt-button",{staticClass:"d-px4 d-py0",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"arrow-up",size:"200"}})]},proxy:!0}])},[t._v(" Show 2 calls on hold ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"red200"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")]),t._v(" 3:21 ")]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Caller ID: ")]),t._v(" Aerolabs Support (415) 583-3482 ")]),e("template",{slot:"right"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Admin is listening in ")]),t._v(" 0:21 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"black100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Connecting Call ")])]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Your caller ID: ")]),t._v(" (415) 555-1234 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"green100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Ringing... ")])]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Your caller ID:")]),t._v(" (415) 555-1234 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"gold100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v("Joseph Lumaban")]),e("div",{staticClass:"d-fc-critical-strong d-fw-semibold"},[t._v(" On hold "),e("span",{staticClass:"d-fw-normal"},[t._v("00:08")])])]),e("div",[e("dt-button",{attrs:{importance:"clear",kind:"muted"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"park",size:"300"}})],1),t._v(" Park ")],2),e("dt-button",{attrs:{importance:"clear",kind:"muted"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"transfer",size:"300"}})],1),t._v(" Transfer ")],2),e("dt-button",{staticClass:"d-fc-critical-strong",attrs:{importance:"clear",kind:"danger"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"phone-hang-up",size:"300"}})],1),t._v(" End Call ")],2)],1),e("template",{slot:"right"},[e("dt-button",{staticClass:"d-fc-primary d-p0 d-fw-bold",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"}},[t._v(" Click to answer ")]),t._v(" and put the active call on hold ")],1)],2)],1)},N=[],v=r(B,V,N,!1,null,null,null,null);const $=v.exports;v.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]};const b={colorCode:"green300",onEvent:h("event")},C={colorCode:{description:"Background color of the banner",options:m,control:{type:"select"}},default:{description:"Display content in the center of the banner",table:{type:{summary:"VNode"}},control:{type:"text"}},left:{name:"left",table:{type:{summary:"VNode"}},control:{type:"text"}},right:{name:"right",table:{type:{summary:"VNode"}},control:{type:"text"}},onEvent:{table:{disable:!0}}},z={title:"Recipes/Notices/Top Banner Info",component:s,args:b,argTypes:C,excludeStories:/.*Data$/},F=(n,{argTypes:t})=>_(n,t,S),O=(n,{argTypes:t})=>_(n,t,$),a={render:F,args:{}},o={render:O,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        }, {
          id: 'duplicate-id',
          enabled: false
        }]
      }
    }
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const P=["argsData","argTypesData","Default","Variants"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:o,__namedExportsOrder:P,argTypesData:C,argsData:b,default:z},Symbol.toStringTag,{value:"Module"}));export{a as D,H as T,o as V};
//# sourceMappingURL=top_banner_info.stories-014e29cb.js.map
