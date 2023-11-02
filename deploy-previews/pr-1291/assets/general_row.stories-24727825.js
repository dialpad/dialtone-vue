import{c as g}from"./storybook_utils-5e2f75ca.js";import{a as c}from"./chunk-AY7I2SME-5eb1ab46.js";import{D as l,L as E,a as S,b as G}from"./general_row-a481cc73.js";import{t as s,o as f,b as y,w as O,e as t,x as o,y as V}from"./vue.esm-bundler-807df745.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{D as L}from"./stack-987140d6.js";const h={name:"DtRecipeGeneralRowDefault",components:{DtRecipeGeneralRow:l}};function B(e,D,$,R,T,k){const a=s("dt-recipe-general-row");return f(),y(a,{type:e.$attrs.type,color:e.$attrs.color,description:e.$attrs.description,"unread-count":e.$attrs.unreadCount,"has-unreads":e.$attrs.hasUnreads,"aria-label":e.$attrs.ariaLabel,"unread-count-tooltip":e.$attrs.unreadCountTooltip,selected:e.$attrs.selected,"has-call-button":e.$attrs.hasCallButton,"call-button-tooltip":e.$attrs.callButtonTooltip,muted:e.$attrs.muted,"active-voice-chat":e.$attrs.activeVoiceChat,"dnd-text":e.$attrs.dndText,"dnd-text-tooltip":e.$attrs.dndTextTooltip,"is-typing":e.$attrs.isTyping,"icon-size":e.$attrs.iconSize,onClick:e.$attrs.onClick,onCall:e.$attrs.onCall},null,8,["type","color","description","unread-count","has-unreads","aria-label","unread-count-tooltip","selected","has-call-button","call-button-tooltip","muted","active-voice-chat","dnd-text","dnd-text-tooltip","is-typing","icon-size","onClick","onCall"])}const A=b(h,[["render",B],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue"]]);h.__docgenInfo={displayName:"DtRecipeGeneralRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_default.story.vue"]};const v={name:"DtRecipeGeneralRowVariants",components:{DtRecipeGeneralRow:l,DtStack:L}},F=t("h3",{class:"d-mb8"}," Channel with unread messages ",-1),z=t("div",{class:"d-mt8 d-fc-secondary d-fs-100"},[t("strong",null,"Note:"),V(" the unread count is not limited to 99 or any number so make sure to add the necessary logic to limit the number of unread messages if needed. ")],-1),j=t("h3",{class:"d-mb8"}," Contact Center ",-1),I=t("h3",{class:"d-mb8"}," Dialbot ",-1),P=t("h3",null," Contact Center with DND and unread count ",-1),x=t("h3",null," Contact Center with active voice chat ",-1);function W(e,D,$,R,T,k){const a=s("dt-recipe-general-row"),N=s("dt-stack");return f(),y(N,{gap:"600"},{default:O(()=>[t("div",null,[F,o(a,{type:"channels",description:"Channel name","unread-count":"29","unread-count-tooltip":"29 unread messages"}),z]),t("div",null,[j,o(a,{type:"contact center",description:"Contact Center name",color:"magenta-200"})]),t("div",null,[I,o(a,{type:"dialbot",description:"Dialbot"})]),t("div",null,[P,o(a,{type:"contact center","dnd-text":"DND","unread-count":"1","has-unreads":!0,description:"Long contact center name",color:"magenta-200"})]),t("div",null,[x,o(a,{"active-voice-chat":!0,description:"Long contact center name",color:"magenta-200"})])]),_:1})}const M=b(v,[["render",W],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue"]]);v.__docgenInfo={displayName:"DtRecipeGeneralRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row_variants.story.vue"]};const w={type:"inbox",callButtonTooltip:"Call",dndTextTooltip:"Do not Disturb",description:"Description",iconSize:"300",onClick:c("click"),onCall:c("call")},C={type:{table:{category:"props",type:{summary:"string"}},options:Object.values(E),control:{type:"select"}},iconSize:{control:{type:"select",options:Object.values(S)}},color:{table:{category:"props",type:{summary:"string"}},options:Object.keys(G),control:{type:"select"}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{description:"Native click event on the row itself",table:{category:"events",type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},U=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),Y={title:"Recipes/Leftbar/General Row",component:l,args:w,argTypes:C,decorators:[U],excludeStories:/.*Data$/},Z=e=>g(e,A),q=e=>g(e,M),r={render:Z,args:{}},n={render:q,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,_;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(m=n.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const H=["argsData","argTypesData","Default","Variants"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:H,argTypesData:C,argsData:w,default:Y},Symbol.toStringTag,{value:"Module"}));export{r as D,ae as G,n as V};
//# sourceMappingURL=general_row.stories-24727825.js.map
