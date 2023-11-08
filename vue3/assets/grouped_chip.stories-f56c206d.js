import{g as _,c as y}from"./storybook_utils-182ea7b7.js";import{D as m}from"./grouped_chip-5ed8db5b.js";import{D as C}from"./icon-887d57b1.js";import{s as a,o as D,b as I,C as v,w as n,u as s,e as i}from"./vue.esm-bundler-15c892b6.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"DtRecipeGroupedChipDefault",components:{DtRecipeGroupedChip:m,DtIcon:C}},$=["innerHTML"],b=["innerHTML"];function S(e,o,M,R,V,x){const r=a("dt-icon"),h=a("dt-recipe-grouped-chip");return D(),I(h,null,v({leftContent:n(()=>[i("span",{innerHTML:e.$attrs.leftContent},null,8,$)]),_:2},[e.$attrs.leftIcon?{name:"leftIcon",fn:n(()=>[s(r,{name:e.$attrs.leftIcon,size:"200"},null,8,["name"])]),key:"0"}:void 0,e.$attrs.rightIcon?{name:"rightIcon",fn:n(()=>[s(r,{name:e.$attrs.rightIcon,size:"200"},null,8,["name"])]),key:"1"}:void 0,e.$attrs.rightContent?{name:"rightContent",fn:n(()=>[i("span",{innerHTML:e.$attrs.rightContent},null,8,b)]),key:"2"}:void 0]),1024)}const k=T(u,[["render",S]]);u.__docgenInfo={displayName:"DtRecipeGroupedChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]};const c=_(),f={},g={leftContent:{control:"text",description:"Slot left hand side content. Ex. ongoing call time value",table:{category:"slots",type:{summary:"VNode"}}},leftIcon:{name:"leftIcon",options:c,description:"Slot for left hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightContent:{control:"text",description:"Slot right hand side content. Ex. ongoing call hold time value",table:{category:"slots",type:{summary:"VNode"}}},rightIcon:{name:"rightIcon",options:c,description:"Slot for right hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}}},G={title:"Recipes/Chips/Grouped Chips",component:m,args:f,argTypes:g,excludeStories:/.*Data$/},N=(e,{argTypes:o})=>y(e,o,k),t={render:N,args:{leftIcon:"clock",leftContent:`<div>
      2:50:13
  </div>`,rightIcon:"pause",rightContent:`<div>
      0.25
  </div>`},parameters:{}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const L=["argsData","argTypesData","Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:L,argTypesData:g,argsData:f,default:G},Symbol.toStringTag,{value:"Module"}));export{t as D,F as G};
//# sourceMappingURL=grouped_chip.stories-f56c206d.js.map
