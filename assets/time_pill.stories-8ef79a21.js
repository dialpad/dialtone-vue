import{c}from"./storybook_utils-e1aad9b5.js";import{D as s}from"./time_pill-fd708477.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const u={name:"DtRecipeTimePillDefault",components:{DtRecipeTimePill:s}};var _=function(){var e=this,p=e._self._c;return p("dt-recipe-time-pill",{attrs:{"date-time":e.dateTime,"date-time-display":e.dateTimeDisplay}})},T=[],l=d(u,_,T,!1,null,null,null,null);const f=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeTimePillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/conversation_view/time_pill/time_pill_default.story.vue"]};const n={},m={},D={title:"Recipes/Conversation View/Time Pill",component:s,args:n,argTypes:m,excludeStories:/.*Data$/},g=new Date("1999-03-28"),y=(a,{argTypes:e})=>c(a,e,f),t={render:y,args:{dateTime:g.toISOString().split("T")[0],dateTimeDisplay:"Today"}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    dateTime: today.toISOString().split('T')[0],
    dateTimeDisplay: 'Today'
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const v=["argsData","argTypesData","Default"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:v,argTypesData:m,argsData:n,default:D},Symbol.toStringTag,{value:"Module"}));export{t as D,R as T};
//# sourceMappingURL=time_pill.stories-8ef79a21.js.map
