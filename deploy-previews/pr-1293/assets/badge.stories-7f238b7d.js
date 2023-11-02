import{g as K,c as b}from"./storybook_utils-1ccaacc9.js";import{D as f,B as x,a as L,b as U}from"./badge-03a6bcd2.js";import{t as v,o as r,b as m,w as q,p as l,F as g,y as Y,z as H,f as J,e as n,A as y,x as t}from"./vue.esm-bundler-807df745.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const P={name:"DtBadgeDefault",components:{DtBadge:f}};function Q(a,s,D,k,_,d){const e=v("dt-badge");return r(),m(e,{text:a.$attrs.text,type:a.$attrs.type,kind:a.$attrs.kind,decoration:a.$attrs.decoration,"icon-left":a.$attrs.iconLeft,"icon-right":a.$attrs.iconRight,"label-class":a.$attrs.labelClass},{default:q(()=>[a.defaultSlot?(r(),l(g,{key:0},[Y(H(a.defaultSlot),1)],64)):J("v-if",!0)]),_:1},8,["text","type","kind","decoration","icon-left","icon-right","label-class"])}const W=h(P,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_default.story.vue"]]);P.__docgenInfo={displayName:"DtBadgeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_default.story.vue"]};const j={name:"DtBadgeVariants",components:{DtBadge:f},data(){return{BADGE_TYPE_MODIFIERS:x,BADGE_DECORATION_MODIFIERS:L}},computed:{types(){const a=[];for(const s in x)a.push({display:s[0].toUpperCase()+s.slice(1),value:s});return a}},methods:{getDecorationText(a){return a.split("-").map(s=>s[0].toUpperCase()+s.slice(1)).join(" ")}}},X={class:"d-fd-column d-of-auto d-stack8"},Z={id:"components-badge--variants-container",class:"d-d-flex d-gg8 d-ai-center d-ff-row-wrap"};function ee(a,s,D,k,_,d){const e=v("dt-badge");return r(),l("div",X,[n("div",Z,[(r(!0),l(g,null,y(d.types,o=>(r(),m(e,{key:o.value,text:o.display,type:o.value},null,8,["text","type"]))),128)),(r(!0),l(g,null,y(d.types.slice(0,d.types.length-1),o=>(r(),m(e,{key:`${o.value}-count`,text:"1",type:o.value,kind:"count"},null,8,["type"]))),128)),(r(!0),l(g,null,y(Object.keys(_.BADGE_DECORATION_MODIFIERS),o=>(r(),m(e,{key:o,decoration:o,text:d.getDecorationText(o),type:"default",kind:"label"},null,8,["decoration","text"]))),128))])])}const te=h(j,[["render",ee],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_variants.story.vue"]]);j.__docgenInfo={displayName:"DtBadgeVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_variants.story.vue"]};const A={name:"DtBadgeExamples",components:{DtBadge:f}},ae={class:"d-fd-column d-p24 d-w100p d-of-auto d-stack8"},se=n("h2",null,"Kind: Label",-1),ne={class:"d-d-flex d-gg8 d-ai-center"},oe={class:"d-d-flex d-gg8 d-ai-center"},re={class:"d-d-flex d-gg8 d-ai-center"},de={class:"d-d-flex d-gg8 d-ai-center"},le={class:"d-d-flex d-gg8 d-ai-center"},ce={class:"d-d-flex d-gg8 d-ai-center"},ie={class:"d-d-flex d-gg8 d-ai-center"},pe={class:"d-d-flex d-gg8 d-ai-center"},ue=n("h2",{class:"d-mt32"}," Kind: Count ",-1),me={class:"d-d-flex d-gg8 d-ai-center"},ge={class:"d-d-flex d-gg8 d-ai-center"},fe={class:"d-d-flex d-gg8 d-ai-center"};function _e(a,s,D,k,_,d){const e=v("dt-badge");return r(),l("div",ae,[se,n("div",ne,[t(e,{text:"Co-host"}),t(e,{text:"Customer"}),t(e,{text:"Locked","icon-left":"lock"}),t(e,{text:"Chat log","icon-left":"message"})]),n("div",oe,[t(e,{text:"Label",decoration:"black-900"}),t(e,{text:"Support",decoration:"blue-400"}),t(e,{text:"Complaint",decoration:"red-400"})]),n("div",re,[t(e,{text:"In progress",type:"info"}),t(e,{text:"Beta",type:"info"}),t(e,{text:"Draft",type:"info"})]),n("div",de,[t(e,{text:"Overdue",type:"warning"})]),n("div",le,[t(e,{text:"Resolved",type:"success"})]),n("div",ce,[t(e,{text:"Recording",type:"critical","icon-left":"record-filled"})]),n("div",ie,[t(e,{text:"Live",type:"bulletin"}),t(e,{text:"Presenter",type:"bulletin"})]),n("div",pe,[t(e,{text:"Notes",type:"ai"}),t(e,{text:"Suggestion",type:"ai"}),t(e,{text:"on",type:"ai"}),t(e,{text:"Transcript",type:"ai"})]),ue,n("div",me,[t(e,{text:"5%",kind:"count",type:"success","icon-left":"arrow-up"})]),n("div",ge,[t(e,{text:"-12%",kind:"count",type:"critical","icon-left":"arrow-down"})]),n("div",fe,[t(e,{text:"1",kind:"count",type:"bulletin"}),t(e,{text:"18",kind:"count",type:"bulletin"}),t(e,{text:"99+",kind:"count",type:"bulletin"})])])}const ye=h(A,[["render",_e],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_examples.story.vue"]]);A.__docgenInfo={displayName:"DtBadgeExamples",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_examples.story.vue"]};const B=K(),M={type:"default",kind:"label",decoration:void 0},G={default:{control:"text",table:{type:{summary:"VNode"}}},iconLeft:{options:B,control:{type:"select",labels:{undefined:"(empty)"}}},iconRight:{options:B,control:{type:"select",labels:{undefined:"(empty)"}}},type:{control:{type:"select"},options:Object.keys(x)},kind:{control:{type:"select"},options:Object.keys(U),if:{arg:"type",neq:"ai"}},decoration:{control:{type:"select",labels:{undefined:"(empty)"}},options:[void 0,...Object.keys(L)]},labelClass:{description:"Pass through classes. Used to customize the label container"}},xe={title:"Components/Badge",component:f,excludeStories:/.*Data$/,args:M,argTypes:G},z=(a,{argTypes:s})=>b(a,s,W),be=(a,{argTypes:s})=>b(a,s,te),ve=(a,{argTypes:s})=>b(a,s,ye),c={render:z,args:{default:"Badge"}},i={render:z,args:{default:"1",kind:"count"}},p={render:be,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}},u={render:ve,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}};var T,$,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Badge'
  }
}`,...(E=($=c.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var w,C,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: '1',
    kind: 'count'
  }
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var I,N,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,F,R;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const he=["argsData","argTypesData","Default","Count","Variants","Examples"],$e=Object.freeze(Object.defineProperty({__proto__:null,Count:i,Default:c,Examples:u,Variants:p,__namedExportsOrder:he,argTypesData:G,argsData:M,default:xe},Symbol.toStringTag,{value:"Module"}));export{$e as B,i as C,c as D,u as E,p as V};
//# sourceMappingURL=badge.stories-7f238b7d.js.map
