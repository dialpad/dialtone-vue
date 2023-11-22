import{c as _}from"./storybook_utils-dy5aucTw.js";import{D as c,P as $}from"./presence-ypnOiPCE.js";import{s as f,o as v,b as V,k as w,e,u as a}from"./vue.esm-bundler-PY0rQjII.js";import{_ as h}from"./_plugin-vue_export-helper-x3n3nnut.js";const y={name:"DtPresenceDefaultStory",components:{DtPresence:c}};function b(s,r,D,T,P,S){const t=f("dt-presence");return v(),V(t,{presence:s.$attrs.presence,"sr-text":s.$attrs.srText},null,8,["presence","sr-text"])}const k=h(y,[["render",b],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]]);y.__docgenInfo={displayName:"DtPresenceDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]};const x={name:"DtPresenceVariantsStory",components:{DtPresence:c}},N={class:"d-p8 d-d-flex d-ai-center"},E=e("h1",{class:"d-fs-200 d-mx4"}," Active ",-1),B={class:"d-p8 d-d-flex d-ai-center"},F=e("h1",{class:"d-fs-200 d-mx4"}," Away ",-1),O={class:"d-p8 d-d-flex d-ai-center"},A=e("h1",{class:"d-fs-200 d-mx4"}," Busy ",-1),C={class:"d-p8 d-d-flex d-ai-center"},I=e("h1",{class:"d-fs-200 d-mx4"}," Offline ",-1);function j(s,r,D,T,P,S){const t=f("dt-presence");return v(),w("div",null,[e("div",N,[E,a(t,{presence:"active"})]),e("div",B,[F,a(t,{presence:"away"})]),e("div",O,[A,a(t,{presence:"busy"})]),e("div",C,[I,a(t,{presence:"offline"})])])}const z=h(x,[["render",j],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]]);x.__docgenInfo={displayName:"DtPresenceVariantsStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]};const g={presence:{table:{type:{summary:"string"}},options:[...$],control:"select"},srText:{description:"Screen reader text read out whenver the presence changes",control:"text"}},L={title:"Components/Presence",component:c,argTypes:g,excludeStories:/.*Data$/},M=(s,{argTypes:r})=>_(s,r,k),R=(s,{argTypes:r})=>_(s,r,z),n={render:M,args:{}},o={render:R,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,m,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const q=["argTypesData","Default","Variants"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:o,__namedExportsOrder:q,argTypesData:g,default:L},Symbol.toStringTag,{value:"Module"}));export{n as D,Q as P,o as V};
//# sourceMappingURL=presence.stories-fA3pGdGl.js.map
