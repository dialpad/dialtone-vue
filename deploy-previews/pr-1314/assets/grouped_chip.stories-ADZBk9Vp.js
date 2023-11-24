import{a as _,c as g}from"./storybook_utils-XrTpeJKJ.js";import{D as v}from"./chip-m81D19Rf.js";import{n as l}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as y}from"./icon-SfO3AFzV.js";const C={name:"DtRecipeGroupedChip",components:{DtChip:v},computed:{}};var d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-d-inline-flex d-ws-nowrap d-bgc-unset",attrs:{"data-qa":"grouped-chip"}},[e("dt-chip",{staticClass:"d-blr-pill d-bgc-moderate-opaque d-wmx84 dt-chip-content",attrs:{"hide-close":!0,interactive:!1,"content-class":"d-fs100",size:"xs","grouped-chip":!0},scopedSlots:t._u([t.$slots.leftIcon?{key:"icon",fn:function(){return[t.$slots.leftIcon?e("div",{attrs:{"data-qa":"left-grouped-chip-icon"}},[t._t("leftIcon")],2):t._e()]},proxy:!0}:null,{key:"default",fn:function(){return[t.$slots.leftContent?e("div",{attrs:{"data-qa":"left-grouped-chip-content"}},[t._t("leftContent")],2):t._e()]},proxy:!0}],null,!0)}),e("dt-chip",{staticClass:"d-brr-pill d-bgc-purple-200 d-wmx84 dt-chip-content",attrs:{"hide-close":!0,interactive:!1,"content-class":"d-fs100",size:"xs","grouped-chip":!0},scopedSlots:t._u([{key:"icon",fn:function(){return[t.$slots.rightIcon?e("div",{attrs:{"data-qa":"right-grouped-chip-icon"}},[t._t("rightIcon")],2):t._e()]},proxy:!0},{key:"default",fn:function(){return[t.$slots.rightContent?e("div",{attrs:{"data-qa":"right-grouped-chip-content"}},[t._t("rightContent")],2):t._e()]},proxy:!0}],null,!0)})],1)},I=[];d._withStripped=!0;var r=l(C,d,I,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip.vue";const u=r.exports;r.exports.__docgenInfo={displayName:"DtRecipeGroupedChip",exportName:"default",description:"",tags:{},slots:[{name:"leftIcon"},{name:"leftContent",description:"Slot for left chip content information"},{name:"rightIcon",description:"Slot for right chip content information"},{name:"rightContent",description:"Slot for right chip content information"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip.vue"]};const x={name:"DtRecipeGroupedChipDefault",components:{DtRecipeGroupedChip:u,DtIcon:y}};var f=function(){var t=this,e=t._self._c;return e("dt-recipe-grouped-chip",{scopedSlots:t._u([{key:"leftContent",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.$attrs.leftContent)}})]},proxy:!0},t.$attrs.rightContent?{key:"rightContent",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.$attrs.rightContent)}})]},proxy:!0}:null],null,!0)},[t.$attrs.leftIcon?e("template",{slot:"leftIcon"},[e("dt-icon",{attrs:{name:t.$attrs.leftIcon,size:"200"}})],1):t._e(),t.$attrs.rightIcon?e("template",{slot:"rightIcon"},[e("dt-icon",{attrs:{name:t.$attrs.rightIcon,size:"200"}})],1):t._e()],2)},D=[];f._withStripped=!0;var i=l(x,f,D,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue";const S=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeGroupedChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]};const s=_(),h={},m={leftContent:{control:"text",description:"Slot left hand side content. Ex. ongoing call time value",table:{category:"slots",type:{summary:"VNode"}}},leftIcon:{name:"leftIcon",options:s,description:"Slot for left hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightContent:{control:"text",description:"Slot right hand side content. Ex. ongoing call hold time value",table:{category:"slots",type:{summary:"VNode"}}},rightIcon:{name:"rightIcon",options:s,description:"Slot for right hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}}},$={title:"Recipes/Chips/Grouped Chip",component:u,args:h,argTypes:m,excludeStories:/.*Data$/},b=(n,{argTypes:t})=>g(n,t,S),o={render:b,args:{leftIcon:"clock",leftContent:`<div>
      2:50:13
  </div>`,rightIcon:"pause",rightContent:`<div>
      0.25
  </div>`},parameters:{}};var a,c,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["argsData","argTypesData","Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:k,argTypesData:m,argsData:h,default:$},Symbol.toStringTag,{value:"Module"}));export{o as D,N as G};
//# sourceMappingURL=grouped_chip.stories-ADZBk9Vp.js.map