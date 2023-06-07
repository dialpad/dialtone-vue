import{c as g}from"./storybook_utils-aefd525a.js";import{a as i}from"./chunk-OPEUWD42-a3b45fd8.js";import{D as l,L as E,a as S,b as G}from"./general_row-d06adc25.js";import{a as s,o as f,b,w as O,g as t,d as n,s as V}from"./vue.esm-bundler-e62bdd6b.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{D as L}from"./stack-c79e46cf.js";const h={name:"DtRecipeGeneralRowDefault",components:{DtRecipeGeneralRow:l}};function B(e,D,R,T,$,k){const a=s("dt-recipe-general-row");return f(),b(a,{type:e.$attrs.type,color:e.$attrs.color,description:e.$attrs.description,"unread-count":e.$attrs.unreadCount,"has-unreads":e.$attrs.hasUnreads,"aria-label":e.$attrs.ariaLabel,"unread-count-tooltip":e.$attrs.unreadCountTooltip,selected:e.$attrs.selected,"has-call-button":e.$attrs.hasCallButton,"call-button-tooltip":e.$attrs.callButtonTooltip,muted:e.$attrs.muted,"active-voice-chat":e.$attrs.activeVoiceChat,"dnd-text":e.$attrs.dndText,"dnd-text-tooltip":e.$attrs.dndTextTooltip,"is-typing":e.$attrs.isTyping,"icon-size":e.iconSize,onClick:e.$attrs.onClick,onCall:e.$attrs.onCall},null,8,["type","color","description","unread-count","has-unreads","aria-label","unread-count-tooltip","selected","has-call-button","call-button-tooltip","muted","active-voice-chat","dnd-text","dnd-text-tooltip","is-typing","icon-size","onClick","onCall"])}const A=y(h,[["render",B],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue"]]);h.__docgenInfo={displayName:"DtRecipeGeneralRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue"]};const v={name:"DtRecipeGeneralRowVariants",components:{DtRecipeGeneralRow:l,DtStack:L}},F=t("h3",{class:"d-mb8"}," Channel with unread messages ",-1),z=t("div",{class:"d-mt8 d-fc-secondary d-fs-100"},[t("strong",null,"Note:"),V(" the unread count is not limited to 99 or any number so make sure to add the necessary logic to limit the number of unread messages if needed. ")],-1),j=t("h3",{class:"d-mb8"}," Contact Center ",-1),I=t("h3",{class:"d-mb8"}," Dialbot ",-1);function P(e,D,R,T,$,k){const a=s("dt-recipe-general-row"),N=s("dt-stack");return f(),b(N,{gap:"600"},{default:O(()=>[t("div",null,[F,n(a,{type:"channels",description:"Channel name","unread-count":"29","unread-count-tooltip":"29 unread messages"}),z]),t("div",null,[j,n(a,{type:"contact center",description:"Contact Center name",color:"magenta-200"})]),t("div",null,[I,n(a,{type:"dialbot",description:"Dialbot"})])]),_:1})}const W=y(v,[["render",P],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue"]]);v.__docgenInfo={displayName:"DtRecipeGeneralRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue"]};const w={type:"inbox",callButtonTooltip:"Call",dndTextTooltip:"Do not Disturb",description:"Description",iconSize:"300",onClick:i("click"),onCall:i("call")},C={type:{table:{category:"props",type:{summary:"string"}},options:Object.values(E),control:{type:"select"}},iconSize:{control:{type:"select",options:Object.values(S)}},color:{table:{category:"props",type:{summary:"string"}},options:Object.keys(G),control:{type:"select"}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{description:"Native click event on the row itself",table:{category:"events",type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},M=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),U={title:"Recipes/Leftbar/General Row",component:l,args:w,argTypes:C,decorators:[M],excludeStories:/.*Data$/},Y=e=>g(e,A),Z=e=>g(e,W),o={render:Y,args:{}},r={render:Z,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,_;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(m=r.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const q=["argsData","argTypesData","Default","Variants"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:r,__namedExportsOrder:q,argTypesData:C,argsData:w,default:U},Symbol.toStringTag,{value:"Module"}));export{o as D,ee as G,r as V};
//# sourceMappingURL=general_row.stories-fe23909d.js.map
