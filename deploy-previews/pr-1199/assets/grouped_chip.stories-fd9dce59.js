import{e as m,h as f}from"./storybook_utils-8047579d.js";import{D as p}from"./grouped_chip-c16e6d47.js";import{D as g}from"./icon-628094ca.js";import{n as h}from"./_plugin-vue2_normalizer-2bbd088e.js";const _={name:"DtRecipeGroupedChipDefault",components:{DtRecipeGroupedChip:p,DtIcon:g}};var l=function(){var e=this,t=e._self._c;return t("dt-recipe-grouped-chip",{scopedSlots:e._u([{key:"leftContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.leftContent)}})]},proxy:!0},e.rightContent?{key:"rightContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.rightContent)}})]},proxy:!0}:null],null,!0)},[e.leftIcon?t("template",{slot:"leftIcon"},[t("dt-icon",{attrs:{name:e.leftIcon,size:"200"}})],1):e._e(),e.rightIcon?t("template",{slot:"rightIcon"},[t("dt-icon",{attrs:{name:e.rightIcon,size:"200"}})],1):e._e()],2)},y=[];l._withStripped=!0;var n=h(_,l,y,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue";const v=n.exports;n.exports.__docgenInfo={displayName:"DtRecipeGroupedChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]};const s=m(),d={},u={leftContent:{control:"text",description:"Slot left hand side content. Ex. ongoing call time value",table:{category:"slots",type:{summary:"VNode"}}},leftIcon:{name:"leftIcon",options:s,description:"Slot for left hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightContent:{control:"text",description:"Slot right hand side content. Ex. ongoing call hold time value",table:{category:"slots",type:{summary:"VNode"}}},rightIcon:{name:"rightIcon",options:s,description:"Slot for right hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}}},C={title:"Recipes/Chips/Grouped Chips",component:p,args:d,argTypes:u,excludeStories:/.*Data$/},D=(r,{argTypes:e})=>f(r,e,v),o={render:D,args:{leftIcon:"clock",leftContent:`<div>
      2:50:13
  </div>`,rightIcon:"pause",rightContent:`<div>
      0.25
  </div>`},parameters:{}};var a,i,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const I=["argsData","argTypesData","Default"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:I,argTypesData:u,argsData:d,default:C},Symbol.toStringTag,{value:"Module"}));export{o as D,G};
//# sourceMappingURL=grouped_chip.stories-fd9dce59.js.map
