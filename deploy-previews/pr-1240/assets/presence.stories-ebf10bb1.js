import{h as _}from"./storybook_utils-1aebbd64.js";import{D as a,P as g}from"./presence-d4f38341.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";const T={name:"Presence",components:{DtPresence:a}};var v=function(){var s=this,e=s._self._c;return e("dt-presence",{attrs:{presence:s.presence,"sr-text":s.srText}})},h=[];v._withStripped=!0;var o=f(T,v,h,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue";const P=o.exports;o.exports.__docgenInfo={displayName:"Presence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_default.story.vue"]};const S={name:"Presence",components:{DtPresence:a}};var x=function(){var s=this,e=s._self._c;return e("div",[e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Active ")]),e("dt-presence",{attrs:{presence:"active"}})],1),e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Away ")]),e("dt-presence",{attrs:{presence:"away"}})],1),e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Busy ")]),e("dt-presence",{attrs:{presence:"busy"}})],1),e("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[e("h1",{staticClass:"d-fs-200 d-mx4"},[s._v(" Offline ")]),e("dt-presence",{attrs:{presence:"offline"}})],1)])},C=[];x._withStripped=!0;var c=f(S,x,C,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue";const D=c.exports;c.exports.__docgenInfo={displayName:"Presence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence_variants.story.vue"]};const y={presence:{table:{type:{summary:"string"}},options:[...g],control:{type:"select"}},srText:{control:{type:"text"}}},w={title:"Components/Presence",component:a,argTypes:y,excludeStories:/.*Data$/},b=(t,{argTypes:s})=>_(t,s,P),V=(t,{argTypes:s})=>_(t,s,D),r={render:b,args:{}},n={render:V,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var l,p,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["argTypesData","Default","Variants"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:F,argTypesData:y,default:w},Symbol.toStringTag,{value:"Module"}));export{r as D,k as P,n as V};
//# sourceMappingURL=presence.stories-ebf10bb1.js.map
