import{c as m}from"./storybook_utils-e1aad9b5.js";import{D as a,P as x}from"./presence-7999d7f0.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const y={name:"Presence",components:{DtPresence:a}};var g=function(){var s=this,e=s._self._c;return e("dt-presence",{attrs:{presence:s.presence,"sr-text":s.srText}})},T=[],_=u(y,g,T,!1,null,null,null,null);const P=_.exports;_.exports.__docgenInfo={displayName:"Presence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]};const C={name:"Presence",components:{DtPresence:a}};var D=function(){var s=this,e=s._self._c;return e("div",[e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Active ")]),e("dt-presence",{attrs:{presence:"active"}})],1),e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Away ")]),e("dt-presence",{attrs:{presence:"away"}})],1),e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Busy ")]),e("dt-presence",{attrs:{presence:"busy"}})],1),e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Offline ")]),e("dt-presence",{attrs:{presence:"offline"}})],1)])},h=[],f=u(C,D,h,!1,null,null,null,null);const S=f.exports;f.exports.__docgenInfo={displayName:"Presence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]};const v={presence:{table:{type:{summary:"string"}},options:[...x],control:{type:"select"}},srText:{control:{type:"text"}}},b={title:"Components/Presence",component:a,argTypes:v,excludeStories:/.*Data$/},V=(t,{argTypes:s})=>m(t,s,P),w=(t,{argTypes:s})=>m(t,s,S),r={render:V,args:{}},n={render:w,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var o,c,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,i;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const F=["argTypesData","Default","Variants"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:F,argTypesData:v,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,O as P,n as V};
//# sourceMappingURL=presence.stories-1b129309.js.map
