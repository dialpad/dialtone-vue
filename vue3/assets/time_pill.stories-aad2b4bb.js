import{c}from"./storybook_utils-182ea7b7.js";import{D as s}from"./time_pill-fae5a4c9.js";import{s as d,o as u,b as _}from"./vue.esm-bundler-15c892b6.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const l={name:"DtRecipeTimePillDefault",components:{DtRecipeTimePill:s}};function D(t,a,P,$,O,R){const m=d("dt-recipe-time-pill");return u(),_(m,{"date-time":t.$attrs.dateTime,"date-time-display":t.$attrs.dateTimeDisplay},null,8,["date-time","date-time-display"])}const f=T(l,[["render",D]]);l.__docgenInfo={displayName:"DtRecipeTimePillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/time_pill/time_pill_default.story.vue"]};const n={},p={},y={title:"Recipes/Conversation View/Time Pill",component:s,args:n,argTypes:p,excludeStories:/.*Data$/},g=new Date("1999-03-28"),S=(t,{argTypes:a})=>c(t,a,f),e={render:S,args:{dateTime:g.toISOString().split("T")[0],dateTimeDisplay:"Today"}};var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    dateTime: today.toISOString().split('T')[0],
    dateTimeDisplay: 'Today'
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const v=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:v,argTypesData:p,argsData:n,default:y},Symbol.toStringTag,{value:"Module"}));export{e as D,F as T};
//# sourceMappingURL=time_pill.stories-aad2b4bb.js.map
