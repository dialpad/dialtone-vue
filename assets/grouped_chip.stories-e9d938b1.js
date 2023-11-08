import{a as u,c as m}from"./storybook_utils-cf049d2e.js";import{D as c}from"./grouped_chip-d46778ea.js";import{D as f}from"./icon-afc75046.js";import{n as g}from"./_plugin-vue2_normalizer-2bbd088e.js";const h={name:"DtRecipeGroupedChipDefault",components:{DtRecipeGroupedChip:c,DtIcon:f}};var _=function(){var e=this,t=e._self._c;return t("dt-recipe-grouped-chip",{scopedSlots:e._u([{key:"leftContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.leftContent)}})]},proxy:!0},e.$attrs.rightContent?{key:"rightContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.rightContent)}})]},proxy:!0}:null],null,!0)},[e.$attrs.leftIcon?t("template",{slot:"leftIcon"},[t("dt-icon",{attrs:{name:e.$attrs.leftIcon,size:"200"}})],1):e._e(),e.$attrs.rightIcon?t("template",{slot:"rightIcon"},[t("dt-icon",{attrs:{name:e.$attrs.rightIcon,size:"200"}})],1):e._e()],2)},y=[],l=g(h,_,y,!1,null,null,null,null);const C=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeGroupedChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]};const r=u(),p={},d={leftContent:{control:"text",description:"Slot left hand side content. Ex. ongoing call time value",table:{category:"slots",type:{summary:"VNode"}}},leftIcon:{name:"leftIcon",options:r,description:"Slot for left hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightContent:{control:"text",description:"Slot right hand side content. Ex. ongoing call hold time value",table:{category:"slots",type:{summary:"VNode"}}},rightIcon:{name:"rightIcon",options:r,description:"Slot for right hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}}},D={title:"Recipes/Chips/Grouped Chips",component:c,args:p,argTypes:d,excludeStories:/.*Data$/},v=(n,{argTypes:e})=>m(n,e,C),o={render:v,args:{leftIcon:"clock",leftContent:`<div>
      2:50:13
  </div>`,rightIcon:"pause",rightContent:`<div>
      0.25
  </div>`},parameters:{}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const I=["argsData","argTypesData","Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:I,argTypesData:d,argsData:p,default:D},Symbol.toStringTag,{value:"Module"}));export{o as D,$ as G};
//# sourceMappingURL=grouped_chip.stories-e9d938b1.js.map
