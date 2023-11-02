import{g as h,c as _}from"./storybook_utils-5e2f75ca.js";import{D as d}from"./grouped_chip-8d56e9b4.js";import{D as y}from"./icon-c9b7700c.js";import{t as r,o as C,b as D,D as v,w as o,x as a,e as s}from"./vue.esm-bundler-807df745.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"DtRecipeGroupedChipDefault",components:{DtRecipeGroupedChip:d,DtIcon:y}},T=["innerHTML"],$=["innerHTML"];function b(e,x,L,M,R,V){const n=r("dt-icon"),g=r("dt-recipe-grouped-chip");return C(),D(g,null,v({leftContent:o(()=>[s("span",{innerHTML:e.$attrs.leftContent},null,8,T)]),_:2},[e.$attrs.leftIcon?{name:"leftIcon",fn:o(()=>[a(n,{name:e.$attrs.leftIcon,size:"200"},null,8,["name"])]),key:"0"}:void 0,e.$attrs.rightIcon?{name:"rightIcon",fn:o(()=>[a(n,{name:e.$attrs.rightIcon,size:"200"},null,8,["name"])]),key:"1"}:void 0,e.$attrs.rightContent?{name:"rightContent",fn:o(()=>[s("span",{innerHTML:e.$attrs.rightContent},null,8,$)]),key:"2"}:void 0]),1024)}const S=I(u,[["render",b],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]]);u.__docgenInfo={displayName:"DtRecipeGroupedChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]};const i=h(),m={},f={leftContent:{control:"text",description:"Slot left hand side content. Ex. ongoing call time value",table:{category:"slots",type:{summary:"VNode"}}},leftIcon:{name:"leftIcon",options:i,description:"Slot for left hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightContent:{control:"text",description:"Slot right hand side content. Ex. ongoing call hold time value",table:{category:"slots",type:{summary:"VNode"}}},rightIcon:{name:"rightIcon",options:i,description:"Slot for right hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}}},k={title:"Recipes/Chips/Grouped Chips",component:d,args:m,argTypes:f,excludeStories:/.*Data$/},G=e=>_(e,S),t={render:G,args:{leftIcon:"clock",leftContent:`<div>
      2:50:13
  </div>`,rightIcon:"pause",rightContent:`<div>
      0.25
  </div>`},parameters:{}};var c,p,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    leftIcon: 'clock',
    leftContent: \`<div>
      2:50:13
  </div>\`,
    rightIcon: 'pause',
    rightContent: \`<div>
      0.25
  </div>\`
  },
  parameters: {}
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const N=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:N,argTypesData:f,argsData:m,default:k},Symbol.toStringTag,{value:"Module"}));export{t as D,F as G};
//# sourceMappingURL=grouped_chip.stories-6269e96a.js.map
