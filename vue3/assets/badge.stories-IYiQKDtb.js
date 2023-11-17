import{g as K,c as b}from"./storybook_utils-dy5aucTw.js";import{D as f,B as x,a as L,b as U}from"./badge-FHO24ASx.js";import{s as h,o as r,b as g,w as q,F as m,y as Y,x as H,k as c,g as J,e as n,z as y,u as t}from"./vue.esm-bundler-qY5SvxH_.js";import{_ as D}from"./_plugin-vue_export-helper-x3n3nnut.js";const P={name:"DtBadgeDefault",components:{DtBadge:f}};function Q(a,s,k,v,_,d){const e=h("dt-badge");return r(),g(e,{text:a.$attrs.text,type:a.$attrs.type,kind:a.$attrs.kind,decoration:a.$attrs.decoration,"icon-left":a.$attrs.iconLeft,"icon-right":a.$attrs.iconRight,"label-class":a.$attrs.labelClass},{default:q(()=>[a.defaultSlot?(r(),c(m,{key:0},[H(Y(a.defaultSlot),1)],64)):J("",!0)]),_:1},8,["text","type","kind","decoration","icon-left","icon-right","label-class"])}const W=D(P,[["render",Q]]);P.__docgenInfo={displayName:"DtBadgeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_default.story.vue"]};const j={name:"DtBadgeVariants",components:{DtBadge:f},data(){return{BADGE_TYPE_MODIFIERS:x,BADGE_DECORATION_MODIFIERS:L}},computed:{types(){const a=[];for(const s in x)a.push({display:s[0].toUpperCase()+s.slice(1),value:s});return a}},methods:{getDecorationText(a){return a.split("-").map(s=>s[0].toUpperCase()+s.slice(1)).join(" ")}}},X={class:"d-fd-column d-of-auto d-stack8"},Z={id:"components-badge--variants-container",class:"d-d-flex d-gg8 d-ai-center d-ff-row-wrap"};function ee(a,s,k,v,_,d){const e=h("dt-badge");return r(),c("div",X,[n("div",Z,[(r(!0),c(m,null,y(d.types,o=>(r(),g(e,{key:o.value,text:o.display,type:o.value},null,8,["text","type"]))),128)),(r(!0),c(m,null,y(d.types.slice(0,d.types.length-1),o=>(r(),g(e,{key:`${o.value}-count`,text:"1",type:o.value,kind:"count"},null,8,["type"]))),128)),(r(!0),c(m,null,y(Object.keys(_.BADGE_DECORATION_MODIFIERS),o=>(r(),g(e,{key:o,decoration:o,text:d.getDecorationText(o),type:"default",kind:"label"},null,8,["decoration","text"]))),128))])])}const te=D(j,[["render",ee]]);j.__docgenInfo={displayName:"DtBadgeVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_variants.story.vue"]};const A={name:"DtBadgeExamples",components:{DtBadge:f}},ae={class:"d-fd-column d-p24 d-w100p d-of-auto d-stack8"},se=n("h2",null,"Kind: Label",-1),ne={class:"d-d-flex d-gg8 d-ai-center"},oe={class:"d-d-flex d-gg8 d-ai-center"},re={class:"d-d-flex d-gg8 d-ai-center"},de={class:"d-d-flex d-gg8 d-ai-center"},ce={class:"d-d-flex d-gg8 d-ai-center"},le={class:"d-d-flex d-gg8 d-ai-center"},ie={class:"d-d-flex d-gg8 d-ai-center"},pe={class:"d-d-flex d-gg8 d-ai-center"},ue=n("h2",{class:"d-mt32"}," Kind: Count ",-1),ge={class:"d-d-flex d-gg8 d-ai-center"},me={class:"d-d-flex d-gg8 d-ai-center"},fe={class:"d-d-flex d-gg8 d-ai-center"};function _e(a,s,k,v,_,d){const e=h("dt-badge");return r(),c("div",ae,[se,n("div",ne,[t(e,{text:"Co-host"}),t(e,{text:"Customer"}),t(e,{text:"Locked","icon-left":"lock"}),t(e,{text:"Chat log","icon-left":"message"})]),n("div",oe,[t(e,{text:"Label",decoration:"black-900"}),t(e,{text:"Support",decoration:"blue-400"}),t(e,{text:"Complaint",decoration:"red-400"})]),n("div",re,[t(e,{text:"In progress",type:"info"}),t(e,{text:"Beta",type:"info"}),t(e,{text:"Draft",type:"info"})]),n("div",de,[t(e,{text:"Overdue",type:"warning"})]),n("div",ce,[t(e,{text:"Resolved",type:"success"})]),n("div",le,[t(e,{text:"Recording",type:"critical","icon-left":"record-filled"})]),n("div",ie,[t(e,{text:"Live",type:"bulletin"}),t(e,{text:"Presenter",type:"bulletin"})]),n("div",pe,[t(e,{text:"Notes",type:"ai"}),t(e,{text:"Suggestion",type:"ai"}),t(e,{text:"on",type:"ai"}),t(e,{text:"Transcript",type:"ai"})]),ue,n("div",ge,[t(e,{text:"5%",kind:"count",type:"success","icon-left":"arrow-up"})]),n("div",me,[t(e,{text:"-12%",kind:"count",type:"critical","icon-left":"arrow-down"})]),n("div",fe,[t(e,{text:"1",kind:"count",type:"bulletin"}),t(e,{text:"18",kind:"count",type:"bulletin"}),t(e,{text:"99+",kind:"count",type:"bulletin"})])])}const ye=D(A,[["render",_e]]);A.__docgenInfo={displayName:"DtBadgeExamples",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_examples.story.vue"]};const B=K(),M={type:"default",kind:"label",decoration:void 0},G={default:{control:"text",table:{type:{summary:"VNode"}}},iconLeft:{options:B,control:{type:"select",labels:{undefined:"(empty)"}}},iconRight:{options:B,control:{type:"select",labels:{undefined:"(empty)"}}},type:{control:{type:"select"},options:Object.keys(x)},kind:{control:{type:"select"},options:Object.keys(U),if:{arg:"type",neq:"ai"}},decoration:{control:{type:"select",labels:{undefined:"(empty)"}},options:[void 0,...Object.keys(L)]},labelClass:{description:"Pass through classes. Used to customize the label container"}},xe={title:"Components/Badge",component:f,excludeStories:/.*Data$/,args:M,argTypes:G},z=(a,{argTypes:s})=>b(a,s,W),be=(a,{argTypes:s})=>b(a,s,te),he=(a,{argTypes:s})=>b(a,s,ye),l={render:z,args:{default:"Badge"}},i={render:z,args:{default:"1",kind:"count"}},p={render:be,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}},u={render:he,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}};var T,$,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Badge'
  }
}`,...(E=($=l.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var C,S,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: '1',
    kind: 'count'
  }
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,O,w;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const De=["argsData","argTypesData","Default","Count","Variants","Examples"],$e=Object.freeze(Object.defineProperty({__proto__:null,Count:i,Default:l,Examples:u,Variants:p,__namedExportsOrder:De,argTypesData:G,argsData:M,default:xe},Symbol.toStringTag,{value:"Module"}));export{$e as B,i as C,l as D,u as E,p as V};
//# sourceMappingURL=badge.stories-IYiQKDtb.js.map
