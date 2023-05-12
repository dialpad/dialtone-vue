import{g as q,c as b}from"./storybook_utils-b6841212.js";import{D as f,B as x,a as L,b as U}from"./badge-e7112da6.js";import{a as D,o,b as g,w as z,e as c,F as m,q as Y,t as H,j as J,f as s,s as y,d as t}from"./vue.esm-bundler-8a039e44.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const j={name:"DtBadgeDefault",components:{DtBadge:f}};function Q(a,r,v,k,_,d){const e=D("dt-badge");return o(),g(e,{text:a.$attrs.text,type:a.$attrs.type,kind:a.$attrs.kind,decoration:a.$attrs.decoration,"icon-left":a.$attrs.iconLeft,"icon-right":a.$attrs.iconRight},{default:z(()=>[a.defaultSlot?(o(),c(m,{key:0},[Y(H(a.defaultSlot),1)],64)):J("",!0)]),_:1},8,["text","type","kind","decoration","icon-left","icon-right"])}const W=h(j,[["render",Q]]);j.__docgenInfo={displayName:"DtBadgeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_default.story.vue"]};const P={name:"DtBadgeVariants",components:{DtBadge:f},data(){return{BADGE_TYPE_MODIFIERS:x,BADGE_DECORATION_MODIFIERS:L}},computed:{types(){const a=[];for(const r in x)a.push({display:r[0].toUpperCase()+r.slice(1),value:r});return a}},methods:{getDecorationText(a){return a.split("-").map(r=>r[0].toUpperCase()+r.slice(1)).join(" ")}}},X={class:"d-fd-column d-p24 d-of-auto d-stack8"},Z={id:"components-badge--variants-container",class:"d-d-flex d-gg8 d-ai-center d-ff-row-wrap"};function ee(a,r,v,k,_,d){const e=D("dt-badge");return o(),c("div",X,[s("div",Z,[(o(!0),c(m,null,y(d.types,n=>(o(),g(e,{key:n.value,text:n.display,type:n.value},null,8,["text","type"]))),128)),(o(!0),c(m,null,y(d.types.slice(0,d.types.length-1),n=>(o(),g(e,{key:`${n.value}-count`,text:"1",type:n.value,kind:"count"},null,8,["type"]))),128)),(o(!0),c(m,null,y(Object.keys(_.BADGE_DECORATION_MODIFIERS),n=>(o(),g(e,{key:n,decoration:n,text:d.getDecorationText(n),type:"default",kind:"label"},null,8,["decoration","text"]))),128))])])}const te=h(P,[["render",ee]]);P.__docgenInfo={displayName:"DtBadgeVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_variants.story.vue"]};const A={name:"DtBadgeExamples",components:{DtBadge:f}},ae={class:"d-fd-column d-p24 d-w100p d-of-auto d-stack8"},se=s("h2",null,"Kind: Label",-1),ne={class:"d-d-flex d-gg8 d-ai-center"},oe={class:"d-d-flex d-gg8 d-ai-center"},re={class:"d-d-flex d-gg8 d-ai-center"},de={class:"d-d-flex d-gg8 d-ai-center"},ce={class:"d-d-flex d-gg8 d-ai-center"},ie={class:"d-d-flex d-gg8 d-ai-center"},le={class:"d-d-flex d-gg8 d-ai-center"},pe={class:"d-d-flex d-gg8 d-ai-center"},ue=s("h2",{class:"d-mt32"}," Kind: Count ",-1),ge={class:"d-d-flex d-gg8 d-ai-center"},me={class:"d-d-flex d-gg8 d-ai-center"},fe={class:"d-d-flex d-gg8 d-ai-center"};function _e(a,r,v,k,_,d){const e=D("dt-badge");return o(),c("div",ae,[se,s("div",ne,[t(e,{text:"Co-host"}),t(e,{text:"Customer"}),t(e,{text:"Locked","icon-left":"lock"}),t(e,{text:"Chat log","icon-left":"message"})]),s("div",oe,[t(e,{text:"Label",decoration:"black-900"}),t(e,{text:"Support",decoration:"blue-400"}),t(e,{text:"Complaint",decoration:"red-400"})]),s("div",re,[t(e,{text:"In progress",type:"info"}),t(e,{text:"Beta",type:"info"}),t(e,{text:"Draft",type:"info"})]),s("div",de,[t(e,{text:"Overdue",type:"warning"})]),s("div",ce,[t(e,{text:"Resolved",type:"success"})]),s("div",ie,[t(e,{text:"Recording",type:"critical","icon-left":"record-filled"})]),s("div",le,[t(e,{text:"Live",type:"bulletin"}),t(e,{text:"Presenter",type:"bulletin"})]),s("div",pe,[t(e,{text:"Notes",type:"ai"}),t(e,{text:"Suggestion",type:"ai"}),t(e,{text:"on",type:"ai"}),t(e,{text:"Transcript",type:"ai"})]),ue,s("div",ge,[t(e,{text:"5%",kind:"count",type:"success","icon-left":"arrow-up"})]),s("div",me,[t(e,{text:"-12%",kind:"count",type:"critical","icon-left":"arrow-down"})]),s("div",fe,[t(e,{text:"1",kind:"count",type:"bulletin"}),t(e,{text:"18",kind:"count",type:"bulletin"}),t(e,{text:"99+",kind:"count",type:"bulletin"})])])}const ye=h(A,[["render",_e]]);A.__docgenInfo={displayName:"DtBadgeExamples",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_examples.story.vue"]};const B=q(),M={type:"default",kind:"label",decoration:void 0},G={default:{control:"text",table:{type:{summary:"VNode"}}},iconLeft:{options:B,control:{type:"select",labels:{undefined:"(empty)"}}},iconRight:{options:B,control:{type:"select",labels:{undefined:"(empty)"}}},type:{control:{type:"select"},options:Object.keys(x)},kind:{control:{type:"select"},options:Object.keys(U),if:{arg:"type",neq:"ai"}},decoration:{control:{type:"select",labels:{undefined:"(empty)"}},options:[void 0,...Object.keys(L)]}},xe={title:"Components/Badge",component:f,excludeStories:/.*Data$/,args:M,argTypes:G},K=a=>b(a,W),be=a=>b(a,te),De=a=>b(a,ye),i={render:K,args:{default:"Badge"}},l={render:K,args:{default:"1",kind:"count"}},p={render:be,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}},u={render:De,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}};var T,E,$;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Badge'
  }
}`,...($=(E=i.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var S,C,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: '1',
    kind: 'count'
  }
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var N,O,w;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: VariantsTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  },
  args: {}
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var V,F,R;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ExamplesTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  },
  args: {}
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const he=["argsData","argTypesData","Default","Count","Variants","Examples"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Count:l,Default:i,Examples:u,Variants:p,__namedExportsOrder:he,argTypesData:G,argsData:M,default:xe},Symbol.toStringTag,{value:"Module"}));export{Ee as B,l as C,i as D,u as E,p as V};
//# sourceMappingURL=badge.stories-fcc4c240.js.map
