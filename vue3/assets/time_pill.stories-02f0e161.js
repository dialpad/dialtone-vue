import{c as m}from"./storybook_utils-98c88692.js";import{D as r}from"./time_pill-2d7bf64a.js";import{u as c,o as d,b as u}from"./vue.esm-bundler-24d82261.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const s={name:"DtRecipeTimePillDefault",components:{DtRecipeTimePill:r}};function T(t,v,P,$,O,R){const p=c("dt-recipe-time-pill");return d(),u(p,{"date-time":t.$attrs.dateTime,"date-time-display":t.$attrs.dateTimeDisplay},null,8,["date-time","date-time-display"])}const D=_(s,[["render",T]]);s.__docgenInfo={displayName:"DtRecipeTimePillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/time_pill/time_pill_default.story.vue"]};const l={},n={},f={title:"Recipes/Conversation View/Time Pill",component:r,args:l,argTypes:n,excludeStories:/.*Data$/},y=new Date("1999-03-28"),g=t=>m(t,D),e={render:g,args:{dateTime:y.toISOString().split("T")[0],dateTimeDisplay:"Today"}};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    dateTime: today.toISOString().split('T')[0],
    dateTimeDisplay: 'Today'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:S,argTypesData:n,argsData:l,default:f},Symbol.toStringTag,{value:"Module"}));export{e as D,F as T};
//# sourceMappingURL=time_pill.stories-02f0e161.js.map
