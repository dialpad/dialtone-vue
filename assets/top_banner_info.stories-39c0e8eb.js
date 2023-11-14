import{a as b}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as m}from"./storybook_utils-cf049d2e.js";import{D as s,C}from"./top_banner_info-b66cfd6a.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D}from"./button-d2753bc0.js";import{D as h}from"./icon-666860e3.js";const y={name:"DtRecipeTopBannerInfoDefault",components:{DtRecipeTopBannerInfo:s}};var T=function(){var e=this,t=e._self._c;return t("dt-recipe-top-banner-info",{attrs:{"color-code":e.$attrs.colorCode}},[e.$attrs.left?t("template",{slot:"left"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.left)}})]):t("template",{slot:"left"},[t("span",{staticClass:"d-fw-bold"},[e._v(" Active Call ")])]),e.$attrs.default?[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]:t("span",[t("span",{staticClass:"d-fw-medium"},[e._v("Caller ID: ")]),e._v(" Aerolabs Support (415) 583-3482 ")]),e.$attrs.right?t("template",{slot:"right"},[t("span",{domProps:{innerHTML:e._s(e.$attrs.right)}})]):t("template",{slot:"right"},[t("span",{staticClass:"d-fw-bold"},[e._v(" Recording ON ")])])],2)},w=[],_=f(y,T,w,!1,null,null,null,null);const x=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]};const I={name:"DtRecipeTopBannerInfoVariants",components:{DtButton:D,DtRecipeTopBannerInfo:s,DtIcon:h}};var k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack8"},[t("dt-recipe-top-banner-info",{attrs:{"color-code":"gold200"}},[t("template",{slot:"left"},[t("span",{staticClass:"d-fw-bold"},[e._v(" Active Call ")]),e._v(" 3:21 ")]),t("dt-button",{staticClass:"d-px4 d-py0",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"arrow-up",size:"200"}})]},proxy:!0}])},[e._v(" Show 2 calls on hold ")])],2),t("dt-recipe-top-banner-info",{attrs:{"color-code":"red200"}},[t("template",{slot:"left"},[t("span",{staticClass:"d-fw-bold"},[e._v(" Active Call ")]),e._v(" 3:21 ")]),t("span",[t("span",{staticClass:"d-fw-medium"},[e._v("Caller ID: ")]),e._v(" Aerolabs Support (415) 583-3482 ")]),t("template",{slot:"right"},[t("span",{staticClass:"d-fw-bold"},[e._v(" Admin is listening in ")]),e._v(" 0:21 ")])],2),t("dt-recipe-top-banner-info",{attrs:{"color-code":"black100"}},[t("template",{slot:"left"},[t("span",{staticClass:"d-fw-bold"},[e._v(" Connecting Call ")])]),t("span",[t("span",{staticClass:"d-fw-medium"},[e._v("Your caller ID: ")]),e._v(" (415) 555-1234 ")])],2),t("dt-recipe-top-banner-info",{attrs:{"color-code":"green100"}},[t("template",{slot:"left"},[t("span",{staticClass:"d-fw-bold"},[e._v(" Ringing... ")])]),t("span",[t("span",{staticClass:"d-fw-medium"},[e._v("Your caller ID:")]),e._v(" (415) 555-1234 ")])],2),t("dt-recipe-top-banner-info",{attrs:{"color-code":"gold100"}},[t("template",{slot:"left"},[t("span",{staticClass:"d-fw-bold"},[e._v("Joseph Lumaban")]),t("div",{staticClass:"d-fc-critical-strong d-fw-semibold"},[e._v(" On hold "),t("span",{staticClass:"d-fw-normal"},[e._v("00:08")])])]),t("div",[t("dt-button",{attrs:{importance:"clear",kind:"muted"}},[t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:"park",size:"300"}})],1),e._v(" Park ")],2),t("dt-button",{attrs:{importance:"clear",kind:"muted"}},[t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:"transfer",size:"300"}})],1),e._v(" Transfer ")],2),t("dt-button",{staticClass:"d-fc-critical-strong",attrs:{importance:"clear",kind:"danger"}},[t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:"phone-hang-up",size:"300"}})],1),e._v(" End Call ")],2)],1),t("template",{slot:"right"},[t("dt-button",{staticClass:"d-fc-primary d-p0 d-fw-bold",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"}},[e._v(" Click to answer ")]),e._v(" and put the active call on hold ")],1)],2)],1)},R=[],u=f(I,k,R,!1,null,null,null,null);const V=u.exports;u.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]};const v={colorCode:"green300",onEvent:b("event")},g={colorCode:{description:"Background color of the banner",options:C,control:{type:"select"}},default:{description:"Display content in the center of the banner",table:{type:{summary:"VNode"}},control:{type:"text"}},left:{name:"left",table:{type:{summary:"VNode"}},control:{type:"text"}},right:{name:"right",table:{type:{summary:"VNode"}},control:{type:"text"}},onEvent:{table:{disable:!0}}},$={title:"Recipes/Notices/Top Banner Info",component:s,args:v,argTypes:g,excludeStories:/.*Data$/},B=(a,{argTypes:e})=>m(a,e,x),S=(a,{argTypes:e})=>m(a,e,V),n={render:B,args:{}},o={render:S,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var r,l,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const N=["argsData","argTypesData","Default","Variants"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:o,__namedExportsOrder:N,argTypesData:g,argsData:v,default:$},Symbol.toStringTag,{value:"Module"}));export{n as D,L as T,o as V};
//# sourceMappingURL=top_banner_info.stories-39c0e8eb.js.map