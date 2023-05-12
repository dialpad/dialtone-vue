import{g as R,c}from"./storybook_utils-720f34d4.js";import{D as l,B as i,a as T,b as F}from"./badge-ea96e305.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";const N={name:"DtBadgeDefault",components:{DtBadge:l}};var V=function(){var t=this,e=t._self._c;return e("dt-badge",{attrs:{text:t.text,type:t.type,kind:t.kind,decoration:t.decoration,"icon-left":t.iconLeft,"icon-right":t.iconRight}},[t.defaultSlot?[t._v(" "+t._s(t.defaultSlot)+" ")]:t._e()],2)},$=[],h=p(N,V,$,!1,null,null,null,null);const L=h.exports;h.exports.__docgenInfo={displayName:"DtBadgeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_default.story.vue"]};const j={name:"DtBadgeVariants",components:{DtBadge:l},data(){return{BADGE_TYPE_MODIFIERS:i,BADGE_DECORATION_MODIFIERS:T}},computed:{types(){const a=[];for(const t in i)a.push({display:t[0].toUpperCase()+t.slice(1),value:t});return a}},methods:{getDecorationText(a){return a.split("-").map(t=>t[0].toUpperCase()+t.slice(1)).join(" ")}}};var P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-fd-column d-p24 d-of-auto d-stack8"},[e("div",{staticClass:"d-d-flex d-gg8 d-ai-center d-ff-row-wrap",attrs:{id:"components-badge--variants-container"}},[t._l(t.types,function(s){return e("dt-badge",{key:s.value,attrs:{text:s.display,type:s.value}})}),t._l(t.types.slice(0,t.types.length-1),function(s){return e("dt-badge",{key:`${s.value}-count`,attrs:{text:"1",type:s.value,kind:"count"}})}),t._l(Object.keys(t.BADGE_DECORATION_MODIFIERS),function(s){return e("dt-badge",{key:s,attrs:{decoration:s,text:t.getDecorationText(s),type:"default",kind:"label"}})})],2)])},A=[],E=p(j,P,A,!1,null,null,null,null);const M=E.exports;E.exports.__docgenInfo={displayName:"DtBadgeVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_variants.story.vue"]};const G={name:"DtBadgeExamples",components:{DtBadge:l}};var K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-fd-column d-p24 d-w100p d-of-auto d-stack8"},[e("h2",[t._v("Kind: Label")]),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Co-host"}}),e("dt-badge",{attrs:{text:"Customer"}}),e("dt-badge",{attrs:{text:"Locked","icon-left":"lock"}}),e("dt-badge",{attrs:{text:"Chat log","icon-left":"message"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Label",decoration:"black-900"}}),e("dt-badge",{attrs:{text:"Support",decoration:"blue-400"}}),e("dt-badge",{attrs:{text:"Complaint",decoration:"red-400"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"In progress",type:"info"}}),e("dt-badge",{attrs:{text:"Beta",type:"info"}}),e("dt-badge",{attrs:{text:"Draft",type:"info"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Overdue",type:"warning"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Resolved",type:"success"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Recording",type:"critical","icon-left":"record-filled"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Live",type:"bulletin"}}),e("dt-badge",{attrs:{text:"Presenter",type:"bulletin"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Notes",type:"ai"}}),e("dt-badge",{attrs:{text:"Suggestion",type:"ai"}}),e("dt-badge",{attrs:{text:"on",type:"ai"}}),e("dt-badge",{attrs:{text:"Transcript",type:"ai"}})],1),e("h2",{staticClass:"d-mt32"},[t._v(" Kind: Count ")]),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"5%",kind:"count",type:"success","icon-left":"arrow-up"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"-12%",kind:"count",type:"critical","icon-left":"arrow-down"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"1",kind:"count",type:"bulletin"}}),e("dt-badge",{attrs:{text:"18",kind:"count",type:"bulletin"}}),e("dt-badge",{attrs:{text:"99+",kind:"count",type:"bulletin"}})],1)])},z=[],I=p(G,K,z,!1,null,null,null,null);const U=I.exports;I.exports.__docgenInfo={displayName:"DtBadgeExamples",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_examples.story.vue"]};const u=R(),O={type:"default",kind:"label",decoration:void 0},S={default:{control:"text",table:{type:{summary:"VNode"}}},iconLeft:{options:u,control:{type:"select",labels:{undefined:"(empty)"}}},iconRight:{options:u,control:{type:"select",labels:{undefined:"(empty)"}}},type:{control:{type:"select"},options:Object.keys(i)},kind:{control:{type:"select"},options:Object.keys(F),if:{arg:"type",neq:"ai"}},decoration:{control:{type:"select",labels:{undefined:"(empty)"}},options:[void 0,...Object.keys(T)]}},q={title:"Components/Badge",component:l,excludeStories:/.*Data$/,args:O,argTypes:S},w=(a,{argTypes:t})=>c(a,t,L),Y=(a,{argTypes:t})=>c(a,t,M),H=(a,{argTypes:t})=>c(a,t,U),n={render:w,args:{default:"Badge"}},r={render:w,args:{default:"1",kind:"count"}},d={render:Y,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}},o={render:H,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}};var g,m,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Badge'
  }
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var _,x,b;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: '1',
    kind: 'count'
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,v,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(v=d.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var k,C,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const J=["argsData","argTypesData","Default","Count","Variants","Examples"],Z=Object.freeze(Object.defineProperty({__proto__:null,Count:r,Default:n,Examples:o,Variants:d,__namedExportsOrder:J,argTypesData:S,argsData:O,default:q},Symbol.toStringTag,{value:"Module"}));export{Z as B,r as C,n as D,o as E,d as V};
//# sourceMappingURL=badge.stories-7e60a5a0.js.map
