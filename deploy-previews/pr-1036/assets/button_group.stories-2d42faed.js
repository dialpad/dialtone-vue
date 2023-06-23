import{h as f,c as g}from"./storybook_utils-7646992f.js";import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as v}from"./button-9102a84a.js";const r={start:"d-btn-group--start",end:"d-btn-group--end","space-between":"d-btn-group--space-between"},b={name:"DtButtonGroup",props:{alignment:{type:String,default:"start",validator:o=>Object.keys(r).includes(o)}},data(){return{BUTTON_GROUP_ALIGNMENT:r}}};var c=function(){var t=this,e=t._self._c;return e("div",{class:["d-btn-group",t.BUTTON_GROUP_ALIGNMENT[t.alignment]],attrs:{role:"group"}},[t._t("default")],2)},D=[];c._withStripped=!0;var a=i(b,c,D,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group.vue";const m=a.exports;a.exports.__docgenInfo={displayName:"DtButtonGroup",exportName:"default",description:"",tags:{},props:[{name:"alignment",description:"Alignment of the buttons inside the container",type:{name:"string"},defaultValue:{func:!1,value:"'start'"}}],slots:[{name:"default",description:"Default slot for button items"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group.vue"]};const y={name:"DtButtonGroupDefault",components:{DtButtonGroup:m,DtButton:v,htmlFragment:f}};var d=function(){var t=this,e=t._self._c;return e("dt-button-group",{attrs:{alignment:t.alignment}},[t.defaultSlot?e("html-fragment",{attrs:{html:t.defaultSlot}}):[e("dt-button",{staticClass:"d-mr6",attrs:{importance:"primary"}},[t._v(" Confirm ")]),e("dt-button",{attrs:{importance:"outlined"}},[t._v(" Cancel ")])]],2)},h=[];d._withStripped=!0;var s=i(y,d,h,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue";const T=s.exports;s.exports.__docgenInfo={displayName:"DtButtonGroupDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue"]};const B={alignment:"start"},_={default:{control:"text",table:{type:{summary:"VNode"}}},alignment:{defaultValue:"start",options:Object.keys(r),control:{type:"select"}}},G={title:"Components/Button Group",component:m,argTypes:_,excludeStories:/.*Data$/},N=(o,{argTypes:t})=>g(o,t,T),n={render:N,args:{}};var u,l,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:x,argTypesData:_,argsData:B,default:G},Symbol.toStringTag,{value:"Module"}));export{F as B,n as D};
//# sourceMappingURL=button_group.stories-2d42faed.js.map
