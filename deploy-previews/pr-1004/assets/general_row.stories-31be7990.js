import{c as f}from"./storybook_utils-96cfb4be.js";import{a as i}from"./chunk-OPEUWD42-a3b45fd8.js";import{D as n,L as R,a as D,b as h}from"./general_row-3dd2655e.js";import{n as g}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as T}from"./stack-dfcd045d.js";const C={name:"DtRecipeGeneralRowDefault",components:{DtRecipeGeneralRow:n}};var v=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",{attrs:{type:e.type,color:e.color,description:e.description,"unread-count":e.unreadCount,"has-unreads":e.hasUnreads,"aria-label":e.ariaLabel,"unread-count-tooltip":e.unreadCountTooltip,selected:e.selected,"has-call-button":e.hasCallButton,"call-button-tooltip":e.callButtonTooltip,muted:e.muted,"active-voice-chat":e.activeVoiceChat,"dnd-text":e.dndText,"dnd-text-tooltip":e.dndTextTooltip,"is-typing":e.isTyping,"icon-size":e.iconSize},on:{click:e.onClick,call:e.onCall}})},S=[];v._withStripped=!0;var s=g(C,v,S,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue";const x=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeGeneralRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue"]};const k={name:"DtRecipeGeneralRowVariants",components:{DtRecipeGeneralRow:n,DtStack:T}};var y=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v(" Channel with unread messages ")]),t("dt-recipe-general-row",{attrs:{type:"channels",description:"Channel name","unread-count":"29","unread-count-tooltip":"29 unread messages"}}),t("div",{staticClass:"d-mt8 d-fc-secondary d-fs-100"},[t("strong",[e._v("Note:")]),e._v(" the unread count is not limited to 99 or any number so make sure to add the necessary logic to limit the number of unread messages if needed. ")])],1),t("div",[t("h3",[e._v(" Contact Center ")]),t("dt-recipe-general-row",{attrs:{type:"contact center",description:"Contact Center name",color:"magenta-200"}})],1),t("div",[t("h3",[e._v(" Dialbot ")]),t("dt-recipe-general-row",{attrs:{type:"dialbot",description:"Dialbot"}})],1)])},E=[];y._withStripped=!0;var l=g(k,y,E,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue";const G=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeGeneralRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue"]};const b={type:"inbox",callButtonTooltip:"Call",dndTextTooltip:"Do not Disturb",description:"Description",iconSize:"300",onClick:i("click"),onCall:i("call")},w={type:{table:{category:"props",type:{summary:"string"}},options:Object.values(R),control:{type:"select"}},iconSize:{control:{type:"select",options:Object.values(D)}},color:{table:{category:"props",type:{summary:"string"}},options:Object.keys(h),control:{type:"select"}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},O=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),N={title:"Recipes/Leftbar/General Row",component:n,args:b,argTypes:w,decorators:[O],excludeStories:/.*Data$/},L=(a,{argTypes:e})=>f(a,e,x),V=(a,{argTypes:e})=>f(a,e,G),r={render:L,args:{}},o={render:V,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,_;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(_=(m=o.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const F=["argsData","argTypesData","Default","Variants"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:F,argTypesData:w,argsData:b,default:N},Symbol.toStringTag,{value:"Module"}));export{r as D,I as G,o as V};
//# sourceMappingURL=general_row.stories-31be7990.js.map
