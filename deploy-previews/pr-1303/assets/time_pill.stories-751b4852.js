import{c}from"./storybook_utils-182ea7b7.js";import{D as s}from"./time_pill-a6d97ba4.js";import{s as d,o as u,b as _}from"./vue.esm-bundler-81c53cfe.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const l={name:"DtRecipeTimePillDefault",components:{DtRecipeTimePill:s}};function f(t,a,P,$,w,O){const m=d("dt-recipe-time-pill");return u(),_(m,{"date-time":t.$attrs.dateTime,"date-time-display":t.$attrs.dateTimeDisplay},null,8,["date-time","date-time-display"])}const D=T(l,[["render",f],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/time_pill/time_pill_default.story.vue"]]);l.__docgenInfo={displayName:"DtRecipeTimePillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/time_pill/time_pill_default.story.vue"]};const n={},p={},y={title:"Recipes/Conversation View/Time Pill",component:s,args:n,argTypes:p,excludeStories:/.*Data$/},g=new Date("1999-03-28"),v=(t,{argTypes:a})=>c(t,a,D),e={render:v,args:{dateTime:g.toISOString().split("T")[0],dateTimeDisplay:"Today"}};var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    dateTime: today.toISOString().split('T')[0],
    dateTimeDisplay: 'Today'
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const S=["argsData","argTypesData","Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:S,argTypesData:p,argsData:n,default:y},Symbol.toStringTag,{value:"Module"}));export{e as D,h as T};
//# sourceMappingURL=time_pill.stories-751b4852.js.map
