import{c as m}from"./storybook_utils-cf049d2e.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{D as n,L as b,a as D,b as h}from"./general_row-79061f93.js";import{n as _}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as R}from"./stack-96c8088f.js";const w={name:"DtRecipeGeneralRowDefault",components:{DtRecipeGeneralRow:n}};var C=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",{attrs:{type:e.$attrs.type,color:e.$attrs.color,description:e.$attrs.description,"unread-count":e.$attrs.unreadCount,"has-unreads":e.$attrs.hasUnreads,"aria-label":e.$attrs.ariaLabel,"unread-count-tooltip":e.$attrs.unreadCountTooltip,selected:e.$attrs.selected,"has-call-button":e.$attrs.hasCallButton,"call-button-tooltip":e.$attrs.callButtonTooltip,muted:e.$attrs.muted,"active-voice-chat":e.$attrs.activeVoiceChat,"dnd-text":e.$attrs.dndText,"dnd-text-tooltip":e.$attrs.dndTextTooltip,"is-typing":e.$attrs.isTyping,"icon-size":e.$attrs.iconSize},on:{click:e.$attrs.onClick,call:e.$attrs.onCall}})},T=[],g=_(w,C,T,!1,null,null,null,null);const $=g.exports;g.exports.__docgenInfo={displayName:"DtRecipeGeneralRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue"]};const x={name:"DtRecipeGeneralRowVariants",components:{DtRecipeGeneralRow:n,DtStack:R}};var k=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v(" Channel with unread messages ")]),t("dt-recipe-general-row",{attrs:{type:"channels",description:"Channel name","unread-count":"29","unread-count-tooltip":"29 unread messages"}}),t("div",{staticClass:"d-mt8 d-fc-secondary d-fs-100"},[t("strong",[e._v("Note:")]),e._v(" the unread count is not limited to 99 or any number so make sure to add the necessary logic to limit the number of unread messages if needed. ")])],1),t("div",[t("h3",[e._v(" Contact Center ")]),t("dt-recipe-general-row",{attrs:{type:"contact center",description:"Contact Center name",color:"magenta-200"}})],1),t("div",[t("h3",[e._v(" Dialbot ")]),t("dt-recipe-general-row",{attrs:{type:"dialbot",description:"Dialbot"}})],1),t("div",[t("h3",[e._v(" Contact Center with DND and unread count ")]),t("dt-recipe-general-row",{attrs:{type:"contact center","dnd-text":"DND","unread-count":"1","has-unreads":!0,description:"Long contact center name",color:"magenta-200"}})],1),t("div",[t("h3",[e._v(" Contact Center with active voice chat ")]),t("dt-recipe-general-row",{attrs:{"active-voice-chat":!0,description:"Long contact center name",color:"magenta-200"}})],1)])},E=[],v=_(x,k,E,!1,null,null,null,null);const S=v.exports;v.exports.__docgenInfo={displayName:"DtRecipeGeneralRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue"]};const f={type:"inbox",callButtonTooltip:"Call",dndTextTooltip:"Do not Disturb",description:"Description",iconSize:"300",onClick:s("click"),onCall:s("call")},y={type:{table:{category:"props",type:{summary:"string"}},options:Object.values(b),control:{type:"select"}},iconSize:{control:{type:"select",options:Object.values(D)}},color:{table:{category:"props",type:{summary:"string"}},options:Object.keys(h),control:{type:"select"}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},G=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),N={title:"Recipes/Leftbar/General Row",component:n,args:f,argTypes:y,decorators:[G],excludeStories:/.*Data$/},O=(a,{argTypes:e})=>m(a,e,$),L=(a,{argTypes:e})=>m(a,e,S),r={render:O,args:{}},o={render:L,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const V=["argsData","argTypesData","Default","Variants"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:V,argTypesData:y,argsData:f,default:N},Symbol.toStringTag,{value:"Module"}));export{r as D,I as G,o as V};
//# sourceMappingURL=general_row.stories-fbf1f663.js.map