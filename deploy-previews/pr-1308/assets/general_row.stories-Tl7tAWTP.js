import{c as g}from"./storybook_utils-XrTpeJKJ.js";import{a as c}from"./chunk-AY7I2SME-4UylTnhF.js";import{D as n,L as h,a as D,b as R}from"./general_row-ZUBVwJ78.js";import{n as v}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as C}from"./stack-rPBk-08O.js";const T={name:"DtRecipeGeneralRowDefault",components:{DtRecipeGeneralRow:n}};var f=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",{attrs:{type:e.$attrs.type,color:e.$attrs.color,description:e.$attrs.description,"unread-count":e.$attrs.unreadCount,"has-unreads":e.$attrs.hasUnreads,"aria-label":e.$attrs.ariaLabel,"unread-count-tooltip":e.$attrs.unreadCountTooltip,selected:e.$attrs.selected,"has-call-button":e.$attrs.hasCallButton,"call-button-tooltip":e.$attrs.callButtonTooltip,muted:e.$attrs.muted,"active-voice-chat":e.$attrs.activeVoiceChat,"dnd-text":e.$attrs.dndText,"dnd-text-tooltip":e.$attrs.dndTextTooltip,"is-typing":e.$attrs.isTyping,"icon-size":e.$attrs.iconSize},on:{click:e.$attrs.onClick,call:e.$attrs.onCall}})},$=[];f._withStripped=!0;var s=v(T,f,$,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue";const x=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeGeneralRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue"]};const k={name:"DtRecipeGeneralRowVariants",components:{DtRecipeGeneralRow:n,DtStack:C}};var y=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v(" Channel with unread messages ")]),t("dt-recipe-general-row",{attrs:{type:"channels",description:"Channel name","unread-count":"29","unread-count-tooltip":"29 unread messages"}}),t("div",{staticClass:"d-mt8 d-fc-secondary d-fs-100"},[t("strong",[e._v("Note:")]),e._v(" the unread count is not limited to 99 or any number so make sure to add the necessary logic to limit the number of unread messages if needed. ")])],1),t("div",[t("h3",[e._v(" Contact Center ")]),t("dt-recipe-general-row",{attrs:{type:"contact center",description:"Contact Center name",color:"magenta-200"}})],1),t("div",[t("h3",[e._v(" Dialbot ")]),t("dt-recipe-general-row",{attrs:{type:"dialbot",description:"Dialbot"}})],1),t("div",[t("h3",[e._v(" Contact Center with DND and unread count ")]),t("dt-recipe-general-row",{attrs:{type:"contact center","dnd-text":"DND","unread-count":"1","has-unreads":!0,description:"Long contact center name",color:"magenta-200"}})],1),t("div",[t("h3",[e._v(" Contact Center with active voice chat ")]),t("dt-recipe-general-row",{attrs:{"active-voice-chat":!0,description:"Long contact center name",color:"magenta-200"}})],1)])},S=[];y._withStripped=!0;var l=v(k,y,S,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue";const E=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeGeneralRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue"]};const b={type:"inbox",callButtonTooltip:"Call",dndTextTooltip:"Do not Disturb",description:"Description",iconSize:"300",onClick:c("click"),onCall:c("call")},w={type:{table:{category:"props",type:{summary:"string"}},options:Object.values(h),control:{type:"select"}},iconSize:{control:{type:"select",options:Object.values(D)}},color:{table:{category:"props",type:{summary:"string"}},options:Object.keys(R),control:{type:"select"}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},G=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),N={title:"Recipes/Leftbar/General Row",component:n,args:b,argTypes:w,decorators:[G],excludeStories:/.*Data$/},O=(a,{argTypes:e})=>g(a,e,x),L=(a,{argTypes:e})=>g(a,e,E),r={render:O,args:{}},o={render:L,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,_;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(m=o.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const V=["argsData","argTypesData","Default","Variants"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:V,argTypesData:w,argsData:b,default:N},Symbol.toStringTag,{value:"Module"}));export{r as D,I as G,o as V};
//# sourceMappingURL=general_row.stories-Tl7tAWTP.js.map
