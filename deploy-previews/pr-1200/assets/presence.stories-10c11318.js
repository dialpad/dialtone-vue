import{c as u}from"./storybook_utils-5b045293.js";import{D as a,P as $}from"./presence-4f451321.js";import{u as _,o as f,b as V,p as w,e,x as o}from"./vue.esm-bundler-735640fd.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const h={name:"DtPresenceDefaultStory",components:{DtPresence:a}};function b(s,g,D,T,P,S){const t=_("dt-presence");return f(),V(t,{presence:s.$attrs.presence,"sr-text":s.$attrs.srText},null,8,["presence","sr-text"])}const k=v(h,[["render",b],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]]);h.__docgenInfo={displayName:"DtPresenceDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]};const x={name:"DtPresenceVariantsStory",components:{DtPresence:a}},N={class:"d-p8 d-d-flex d-ai-center"},E=e("h1",{class:"d-fs-200 d-mx4"}," Active ",-1),B={class:"d-p8 d-d-flex d-ai-center"},F=e("h1",{class:"d-fs-200 d-mx4"}," Away ",-1),O={class:"d-p8 d-d-flex d-ai-center"},A=e("h1",{class:"d-fs-200 d-mx4"}," Busy ",-1),C={class:"d-p8 d-d-flex d-ai-center"},I=e("h1",{class:"d-fs-200 d-mx4"}," Offline ",-1);function j(s,g,D,T,P,S){const t=_("dt-presence");return f(),w("div",null,[e("div",N,[E,o(t,{presence:"active"})]),e("div",B,[F,o(t,{presence:"away"})]),e("div",O,[A,o(t,{presence:"busy"})]),e("div",C,[I,o(t,{presence:"offline"})])])}const z=v(x,[["render",j],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]]);x.__docgenInfo={displayName:"DtPresenceVariantsStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]};const y={presence:{table:{type:{summary:"string"}},options:[...$],control:"select"},srText:{description:"Screen reader text read out whenver the presence changes",control:"text"}},L={title:"Components/Presence",component:a,argTypes:y,excludeStories:/.*Data$/},M=s=>u(s,k),R=s=>u(s,z),r={render:M,args:{}},n={render:R,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const q=["argTypesData","Default","Variants"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:q,argTypesData:y,default:L},Symbol.toStringTag,{value:"Module"}));export{r as D,Q as P,n as V};
//# sourceMappingURL=presence.stories-10c11318.js.map
