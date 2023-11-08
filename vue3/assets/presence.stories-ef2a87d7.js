import{c as u}from"./storybook_utils-182ea7b7.js";import{D as c,P as $}from"./presence-b753ccee.js";import{s as f,o as h,b as V,k as b,e,u as o}from"./vue.esm-bundler-2fc8d911.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const y={name:"DtPresenceDefaultStory",components:{DtPresence:c}};function w(s,r,D,T,P,S){const t=f("dt-presence");return h(),V(t,{presence:s.$attrs.presence,"sr-text":s.$attrs.srText},null,8,["presence","sr-text"])}const N=x(y,[["render",w]]);y.__docgenInfo={displayName:"DtPresenceDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]};const g={name:"DtPresenceVariantsStory",components:{DtPresence:c}},k={class:"d-p8 d-d-flex d-ai-center"},E=e("h1",{class:"d-fs-200 d-mx4"}," Active ",-1),B={class:"d-p8 d-d-flex d-ai-center"},F=e("h1",{class:"d-fs-200 d-mx4"}," Away ",-1),O={class:"d-p8 d-d-flex d-ai-center"},A=e("h1",{class:"d-fs-200 d-mx4"}," Busy ",-1),C={class:"d-p8 d-d-flex d-ai-center"},I=e("h1",{class:"d-fs-200 d-mx4"}," Offline ",-1);function j(s,r,D,T,P,S){const t=f("dt-presence");return h(),b("div",null,[e("div",k,[E,o(t,{presence:"active"})]),e("div",B,[F,o(t,{presence:"away"})]),e("div",O,[A,o(t,{presence:"busy"})]),e("div",C,[I,o(t,{presence:"offline"})])])}const z=x(g,[["render",j]]);g.__docgenInfo={displayName:"DtPresenceVariantsStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]};const v={presence:{table:{type:{summary:"string"}},options:[...$],control:"select"},srText:{description:"Screen reader text read out whenver the presence changes",control:"text"}},L={title:"Components/Presence",component:c,argTypes:v,excludeStories:/.*Data$/},M=(s,{argTypes:r})=>u(s,r,N),R=(s,{argTypes:r})=>u(s,r,z),n={render:M,args:{}},a={render:R,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,m,_;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(_=(m=a.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const q=["argTypesData","Default","Variants"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:a,__namedExportsOrder:q,argTypesData:v,default:L},Symbol.toStringTag,{value:"Module"}));export{n as D,Q as P,a as V};
//# sourceMappingURL=presence.stories-ef2a87d7.js.map
