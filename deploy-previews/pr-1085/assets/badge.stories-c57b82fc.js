import{g as V,c}from"./storybook_utils-344aa704.js";import{D as l,B as i,a as w,b as $}from"./badge-bf9ef9e6.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";const L={name:"DtBadgeDefault",components:{DtBadge:l}};var S=function(){var t=this,e=t._self._c;return e("dt-badge",{attrs:{text:t.text,type:t.type,kind:t.kind,decoration:t.decoration,"icon-left":t.iconLeft,"icon-right":t.iconRight,"label-class":t.labelClass}},[t.defaultSlot?[t._v(" "+t._s(t.defaultSlot)+" ")]:t._e()],2)},P=[];S._withStripped=!0;var u=p(L,S,P,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_default.story.vue";const j=u.exports;u.exports.__docgenInfo={displayName:"DtBadgeDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_default.story.vue"]};const A={name:"DtBadgeVariants",components:{DtBadge:l},data(){return{BADGE_TYPE_MODIFIERS:i,BADGE_DECORATION_MODIFIERS:w}},computed:{types(){const a=[];for(const t in i)a.push({display:t[0].toUpperCase()+t.slice(1),value:t});return a}},methods:{getDecorationText(a){return a.split("-").map(t=>t[0].toUpperCase()+t.slice(1)).join(" ")}}};var I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-fd-column d-of-auto d-stack8"},[e("div",{staticClass:"d-d-flex d-gg8 d-ai-center d-ff-row-wrap",attrs:{id:"components-badge--variants-container"}},[t._l(t.types,function(s){return e("dt-badge",{key:s.value,attrs:{text:s.display,type:s.value}})}),t._l(t.types.slice(0,t.types.length-1),function(s){return e("dt-badge",{key:`${s.value}-count`,attrs:{text:"1",type:s.value,kind:"count"}})}),t._l(Object.keys(t.BADGE_DECORATION_MODIFIERS),function(s){return e("dt-badge",{key:s,attrs:{decoration:s,text:t.getDecorationText(s),type:"default",kind:"label"}})})],2)])},M=[];I._withStripped=!0;var g=p(A,I,M,!1,null,null,null,null);g.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_variants.story.vue";const G=g.exports;g.exports.__docgenInfo={displayName:"DtBadgeVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_variants.story.vue"]};const z={name:"DtBadgeExamples",components:{DtBadge:l}};var O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-fd-column d-p24 d-w100p d-of-auto d-stack8"},[e("h2",[t._v("Kind: Label")]),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Co-host"}}),e("dt-badge",{attrs:{text:"Customer"}}),e("dt-badge",{attrs:{text:"Locked","icon-left":"lock"}}),e("dt-badge",{attrs:{text:"Chat log","icon-left":"message"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Label",decoration:"black-900"}}),e("dt-badge",{attrs:{text:"Support",decoration:"blue-400"}}),e("dt-badge",{attrs:{text:"Complaint",decoration:"red-400"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"In progress",type:"info"}}),e("dt-badge",{attrs:{text:"Beta",type:"info"}}),e("dt-badge",{attrs:{text:"Draft",type:"info"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Overdue",type:"warning"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Resolved",type:"success"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Recording",type:"critical","icon-left":"record-filled"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Live",type:"bulletin"}}),e("dt-badge",{attrs:{text:"Presenter",type:"bulletin"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"Notes",type:"ai"}}),e("dt-badge",{attrs:{text:"Suggestion",type:"ai"}}),e("dt-badge",{attrs:{text:"on",type:"ai"}}),e("dt-badge",{attrs:{text:"Transcript",type:"ai"}})],1),e("h2",{staticClass:"d-mt32"},[t._v(" Kind: Count ")]),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"5%",kind:"count",type:"success","icon-left":"arrow-up"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"-12%",kind:"count",type:"critical","icon-left":"arrow-down"}})],1),e("div",{staticClass:"d-d-flex d-gg8 d-ai-center"},[e("dt-badge",{attrs:{text:"1",kind:"count",type:"bulletin"}}),e("dt-badge",{attrs:{text:"18",kind:"count",type:"bulletin"}}),e("dt-badge",{attrs:{text:"99+",kind:"count",type:"bulletin"}})],1)])},K=[];O._withStripped=!0;var m=p(z,O,K,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_examples.story.vue";const U=m.exports;m.exports.__docgenInfo={displayName:"DtBadgeExamples",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/badge/badge_examples.story.vue"]};const f=V(),R={type:"default",kind:"label",decoration:void 0},F={default:{control:"text",table:{type:{summary:"VNode"}}},iconLeft:{options:f,control:{type:"select",labels:{undefined:"(empty)"}}},iconRight:{options:f,control:{type:"select",labels:{undefined:"(empty)"}}},type:{control:{type:"select"},options:Object.keys(i)},kind:{control:{type:"select"},options:Object.keys($),if:{arg:"type",neq:"ai"}},decoration:{control:{type:"select",labels:{undefined:"(empty)"}},options:[void 0,...Object.keys(w)]},labelClass:{description:"Pass through classes. Used to customize the label container"}},q={title:"Components/Badge",component:l,excludeStories:/.*Data$/,args:R,argTypes:F},N=(a,{argTypes:t})=>c(a,t,j),Y=(a,{argTypes:t})=>c(a,t,G),H=(a,{argTypes:t})=>c(a,t,U),n={render:N,args:{default:"Badge"}},r={render:N,args:{default:"1",kind:"count"}},o={render:Y,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}},d={render:H,parameters:{options:{showPanel:!1},controls:{disable:!0}},args:{}};var _,b,x;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Badge'
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,y,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: '1',
    kind: 'count'
  }
}`,...(D=(y=r.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var k,C,h;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var B,T,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const J=["argsData","argTypesData","Default","Count","Variants","Examples"],Z=Object.freeze(Object.defineProperty({__proto__:null,Count:r,Default:n,Examples:d,Variants:o,__namedExportsOrder:J,argTypesData:F,argsData:R,default:q},Symbol.toStringTag,{value:"Module"}));export{Z as B,r as C,n as D,d as E,o as V};
//# sourceMappingURL=badge.stories-c57b82fc.js.map
