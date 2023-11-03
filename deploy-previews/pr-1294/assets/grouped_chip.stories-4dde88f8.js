import{a as m,c as f}from"./storybook_utils-996a989f.js";import{D as p}from"./grouped_chip-e1867bab.js";import{D as g}from"./icon-df53d230.js";import{n as h}from"./_plugin-vue2_normalizer-2bbd088e.js";const _={name:"DtRecipeGroupedChipDefault",components:{DtRecipeGroupedChip:p,DtIcon:g}};var l=function(){var e=this,t=e._self._c;return t("dt-recipe-grouped-chip",{scopedSlots:e._u([{key:"leftContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.leftContent)}})]},proxy:!0},e.$attrs.rightContent?{key:"rightContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.rightContent)}})]},proxy:!0}:null],null,!0)},[e.$attrs.leftIcon?t("template",{slot:"leftIcon"},[t("dt-icon",{attrs:{name:e.$attrs.leftIcon,size:"200"}})],1):e._e(),e.$attrs.rightIcon?t("template",{slot:"rightIcon"},[t("dt-icon",{attrs:{name:e.$attrs.rightIcon,size:"200"}})],1):e._e()],2)},y=[];l._withStripped=!0;var n=h(_,l,y,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue";const v=n.exports;n.exports.__docgenInfo={displayName:"DtRecipeGroupedChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]};const a=m(),d={},u={leftContent:{control:"text",description:"Slot left hand side content. Ex. ongoing call time value",table:{category:"slots",type:{summary:"VNode"}}},leftIcon:{name:"leftIcon",options:a,description:"Slot for left hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightContent:{control:"text",description:"Slot right hand side content. Ex. ongoing call hold time value",table:{category:"slots",type:{summary:"VNode"}}},rightIcon:{name:"rightIcon",options:a,description:"Slot for right hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}}},C={title:"Recipes/Chips/Grouped Chips",component:p,args:d,argTypes:u,excludeStories:/.*Data$/},D=(r,{argTypes:e})=>f(r,e,v),o={render:D,args:{leftIcon:"clock",leftContent:`<div>
      2:50:13
  </div>`,rightIcon:"pause",rightContent:`<div>
      0.25
  </div>`},parameters:{}};var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const I=["argsData","argTypesData","Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:I,argTypesData:u,argsData:d,default:C},Symbol.toStringTag,{value:"Module"}));export{o as D,$ as G};
//# sourceMappingURL=grouped_chip.stories-4dde88f8.js.map
