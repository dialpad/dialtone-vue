import{c as _}from"./storybook_utils-06870cb8.js";import{D as o,P as $}from"./presence-d0776d4c.js";import{a as u,o as f,b as V,f as b,g as e,d as a}from"./vue.esm-bundler-7a4a8caf.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const x={name:"DtPresenceDefaultStory",components:{DtPresence:o}};function w(s,v,D,T,P,S){const t=u("dt-presence");return f(),V(t,{presence:s.$attrs.presence,"sr-text":s.$attrs.srText},null,8,["presence","sr-text"])}const N=h(x,[["render",w]]);x.__docgenInfo={displayName:"DtPresenceDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]};const y={name:"DtPresenceVariantsStory",components:{DtPresence:o}},E={class:"d-p8 d-d-flex d-ai-center"},k=e("h1",{class:"d-fs-200 d-mx4"}," Active ",-1),B={class:"d-p8 d-d-flex d-ai-center"},F=e("h1",{class:"d-fs-200 d-mx4"}," Away ",-1),O={class:"d-p8 d-d-flex d-ai-center"},A=e("h1",{class:"d-fs-200 d-mx4"}," Busy ",-1),C={class:"d-p8 d-d-flex d-ai-center"},I=e("h1",{class:"d-fs-200 d-mx4"}," Offline ",-1);function j(s,v,D,T,P,S){const t=u("dt-presence");return f(),b("div",null,[e("div",E,[k,a(t,{presence:"active"})]),e("div",B,[F,a(t,{presence:"away"})]),e("div",O,[A,a(t,{presence:"busy"})]),e("div",C,[I,a(t,{presence:"offline"})])])}const z=h(y,[["render",j]]);y.__docgenInfo={displayName:"DtPresenceVariantsStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]};const g={presence:{table:{type:{summary:"string"}},options:[...$],control:"select"},srText:{description:"Screen reader text read out whenver the presence changes",control:"text"}},L={title:"Components/Presence",component:o,argTypes:g,excludeStories:/.*Data$/},M=s=>_(s,N),R=s=>_(s,z),r={render:M,args:{}},n={render:R,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,i,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const q=["argTypesData","Default","Variants"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:q,argTypesData:g,default:L},Symbol.toStringTag,{value:"Module"}));export{r as D,Q as P,n as V};
//# sourceMappingURL=presence.stories-ae930b1c.js.map
