import{D as s}from"./icon-90db3229.js";import{I as k}from"./icon_constants-a5c11dff.js";import{u as f,o,b as g,p as i,F,B as N}from"./vue.esm-bundler-24d82261.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{g as O,c as I}from"./storybook_utils-98c88692.js";const y={name:"IconDefault",components:{DtIcon:s}};function V(e,v,z,S,r,h){const n=f("dt-icon");return o(),g(n,{size:e.$attrs.size,name:e.$attrs.name,"aria-label":e.$attrs.ariaLabel},null,8,["size","name","aria-label"])}const w=D(y,[["render",V]]);y.__docgenInfo={displayName:"IconDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/icon/icon_default.story.vue"]};const b={name:"IconDefault",components:{DtIcon:s},data(){return{sizes:["100","200","300","400","500","600","700","800"]}}},x={class:"d-flow4"};function B(e,v,z,S,r,h){const n=f("dt-icon");return o(),i("div",x,[(o(!0),i(F,null,N(r.sizes,c=>(o(),g(n,{key:c,size:c,name:"alert-circle"},null,8,["size"]))),128))])}const E=D(b,[["render",B]]);b.__docgenInfo={displayName:"IconDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/icon/icon_variants.story.vue"]};const j=O(),$={size:{options:Object.keys(k),control:{type:"select"}},name:{options:j,control:{type:"select",labels:{undefined:"(empty)"}}}},T={},C={title:"Components/Icon",component:s,args:T,argTypes:$,excludeStories:/.*Data$/},L=e=>I(e,w),P=e=>I(e,E),t={render:L,args:{name:"accessibility"}},a={render:P,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    name: 'accessibility'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,_;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(d=a.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};const M=["argTypesData","argsData","Default","Variants"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:a,__namedExportsOrder:M,argTypesData:$,argsData:T,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,H as I};
//# sourceMappingURL=icon.stories-a2ef24e7.js.map