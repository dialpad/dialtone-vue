import{a as h}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as _}from"./storybook_utils-3f71f290.js";import{D as r,C as D}from"./top_banner_info-371feffc.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as y}from"./button-f9ebe2a3.js";import{D as w}from"./icon-8e9c060c.js";const T={name:"DtRecipeTopBannerInfoDefault",components:{DtRecipeTopBannerInfo:r}};var v=function(){var t=this,e=t._self._c;return e("dt-recipe-top-banner-info",{attrs:{"color-code":t.colorCode}},[t.left?e("template",{slot:"left"},[e("span",{domProps:{innerHTML:t._s(t.left)}})]):e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")])]),t.defaultSlot?[e("span",{domProps:{innerHTML:t._s(t.defaultSlot)}})]:e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Caller ID: ")]),t._v(" Aerolabs Support (415) 583-3482 ")]),t.right?e("template",{slot:"right"},[e("span",{domProps:{innerHTML:t._s(t.right)}})]):e("template",{slot:"right"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Recording ON ")])])],2)},k=[];v._withStripped=!0;var s=u(T,v,k,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue";const x=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_default.story.vue"]};const I={name:"DtRecipeTopBannerInfoVariants",components:{DtButton:y,DtRecipeTopBannerInfo:r,DtIcon:w}};var b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-stack8"},[e("dt-recipe-top-banner-info",{attrs:{"color-code":"gold200"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")]),t._v(" 3:21 ")]),e("dt-button",{staticClass:"d-px4 d-py0",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"arrow-up",size:"200"}})]},proxy:!0}])},[t._v(" Show 2 calls on hold ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"red200"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Active Call ")]),t._v(" 3:21 ")]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Caller ID: ")]),t._v(" Aerolabs Support (415) 583-3482 ")]),e("template",{slot:"right"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Admin is listening in ")]),t._v(" 0:21 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"black100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Connecting Call ")])]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Your caller ID: ")]),t._v(" (415) 555-1234 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"green100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v(" Ringing... ")])]),e("span",[e("span",{staticClass:"d-fw-medium"},[t._v("Your caller ID:")]),t._v(" (415) 555-1234 ")])],2),e("dt-recipe-top-banner-info",{attrs:{"color-code":"gold100"}},[e("template",{slot:"left"},[e("span",{staticClass:"d-fw-bold"},[t._v("Joseph Lumaban")]),e("div",{staticClass:"d-fc-critical-strong d-fw-semibold"},[t._v(" On hold "),e("span",{staticClass:"d-fw-normal"},[t._v("00:08")])])]),e("div",[e("dt-button",{attrs:{importance:"clear",kind:"muted"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"park",size:"300"}})],1),t._v(" Park ")],2),e("dt-button",{attrs:{importance:"clear",kind:"muted"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"transfer",size:"300"}})],1),t._v(" Transfer ")],2),e("dt-button",{staticClass:"d-fc-critical-strong",attrs:{importance:"clear",kind:"danger"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"phone-hang-up",size:"300"}})],1),t._v(" End Call ")],2)],1),e("template",{slot:"right"},[e("dt-button",{staticClass:"d-fc-primary d-p0 d-fw-bold",attrs:{importance:"clear","icon-position":"right",size:"xs",kind:"muted"}},[t._v(" Click to answer ")]),t._v(" and put the active call on hold ")],1)],2)],1)},S=[];b._withStripped=!0;var l=u(I,b,S,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue";const R=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeTopBannerInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/notices/top_banner_info/top_banner_info_variants.story.vue"]};const g={colorCode:"green300",onEvent:h("event")},C={colorCode:{description:"Background color of the banner",options:D,control:{type:"select"}},default:{description:"Display content in the center of the banner",table:{type:{summary:"VNode"}},control:{type:"text"}},left:{name:"left",table:{type:{summary:"VNode"}},control:{type:"text"}},right:{name:"right",table:{type:{summary:"VNode"}},control:{type:"text"}},onEvent:{table:{disable:!0}}},V={title:"Recipes/Notices/Top Banner Info",component:r,args:g,argTypes:C,excludeStories:/.*Data$/},B=(n,{argTypes:t})=>_(n,t,x),N=(n,{argTypes:t})=>_(n,t,R),a={render:B,args:{}},o={render:N,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,f,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(f=o.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const z=["argsData","argTypesData","Default","Variants"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:o,__namedExportsOrder:z,argTypesData:C,argsData:g,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,$ as T,o as V};
//# sourceMappingURL=top_banner_info.stories-640f0177.js.map