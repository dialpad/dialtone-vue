import{c as f}from"./storybook_utils-XrTpeJKJ.js";import{n as i}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as g}from"./button-ux2tnS3y.js";import{h as v}from"./utils-pRacJSLF.js";const r={start:"d-btn-group--start",end:"d-btn-group--end","space-between":"d-btn-group--space-between"},b={name:"DtButtonGroup",props:{alignment:{type:String,default:"start",validator:n=>Object.keys(r).includes(n)}},data(){return{BUTTON_GROUP_ALIGNMENT:r}}};var m=function(){var t=this,e=t._self._c;return e("div",{class:["d-btn-group",t.BUTTON_GROUP_ALIGNMENT[t.alignment]],attrs:{role:"group"}},[t._t("default")],2)},D=[];m._withStripped=!0;var a=i(b,m,D,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group.vue";const c=a.exports;a.exports.__docgenInfo={displayName:"DtButtonGroup",exportName:"default",description:"",tags:{},props:[{name:"alignment",description:"Alignment of the buttons inside the container",type:{name:"string"},defaultValue:{func:!1,value:"'start'"}}],slots:[{name:"default",description:"Default slot for button items"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group.vue"]};const y={name:"DtButtonGroupDefault",components:{DtButtonGroup:c,DtButton:g,htmlFragment:v}};var d=function(){var t=this,e=t._self._c;return e("dt-button-group",{staticClass:"d-gg8",attrs:{alignment:t.$attrs.alignment}},[t.$attrs.default?e("html-fragment",{attrs:{html:t.$attrs.default}}):t.$attrs.alignment==="end"?[e("dt-button",{attrs:{importance:"outlined"}},[t._v(" Cancel ")]),e("dt-button",{attrs:{importance:"primary"}},[t._v(" Confirm ")])]:[e("dt-button",{attrs:{importance:"primary"}},[t._v(" Confirm ")]),e("dt-button",{attrs:{importance:"outlined"}},[t._v(" Cancel ")])]],2)},h=[];d._withStripped=!0;var s=i(y,d,h,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue";const T=s.exports;s.exports.__docgenInfo={displayName:"DtButtonGroupDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/button_group/button_group_default.story.vue"]};const B={alignment:"start"},_={default:{control:"text",table:{type:{summary:"VNode"}}},alignment:{defaultValue:"start",options:Object.keys(r),control:{type:"select"}}},G={title:"Components/Button Group",component:c,argTypes:_,excludeStories:/.*Data$/},N=(n,{argTypes:t})=>f(n,t,T),o={render:N,args:{}};var u,l,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["argsData","argTypesData","Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,argTypesData:_,argsData:B,default:G},Symbol.toStringTag,{value:"Module"}));export{C as B,o as D};
//# sourceMappingURL=button_group.stories-HLDxNI6a.js.map
