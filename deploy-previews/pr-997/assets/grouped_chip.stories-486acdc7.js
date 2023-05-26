import{g as m,c as g}from"./storybook_utils-3cb281bc.js";import{D as v}from"./chip-3201e9c5.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as y}from"./icon-6ceed40f.js";const C={name:"DtRecipeGroupedChip",components:{DtChip:v},computed:{}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-d-inline-flex d-ws-nowrap d-bgc-unset",attrs:{"data-qa":"grouped-chip"}},[t("dt-chip",{staticClass:"d-blr-pill d-bgc-moderate-opaque d-wmx84 dt-chip-content",attrs:{"hide-close":!0,interactive:!1,"content-class":"d-fs100",size:"xs","grouped-chip":!0},scopedSlots:e._u([e.$slots.leftIcon?{key:"icon",fn:function(){return[e.$slots.leftIcon?t("div",{attrs:{"data-qa":"left-grouped-chip-icon"}},[e._t("leftIcon")],2):e._e()]},proxy:!0}:null,{key:"default",fn:function(){return[e.$slots.leftContent?t("div",{attrs:{"data-qa":"left-grouped-chip-content"}},[e._t("leftContent")],2):e._e()]},proxy:!0}],null,!0)}),t("dt-chip",{staticClass:"d-brr-pill d-bgc-purple-200 d-wmx84 dt-chip-content",attrs:{"hide-close":!0,interactive:!1,"content-class":"d-fs100",size:"xs","grouped-chip":!0},scopedSlots:e._u([{key:"icon",fn:function(){return[e.$slots.rightIcon?t("div",{attrs:{"data-qa":"right-grouped-chip-icon"}},[e._t("rightIcon")],2):e._e()]},proxy:!0},{key:"default",fn:function(){return[e.$slots.rightContent?t("div",{attrs:{"data-qa":"right-grouped-chip-content"}},[e._t("rightContent")],2):e._e()]},proxy:!0}],null,!0)})],1)},x=[];d._withStripped=!0;var r=l(C,d,x,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip.vue";const u=r.exports;r.exports.__docgenInfo={displayName:"DtRecipeGroupedChip",exportName:"default",description:"",tags:{},slots:[{name:"leftIcon"},{name:"leftContent",description:"Slot for left chip content information"},{name:"rightIcon",description:"Slot for right chip content information"},{name:"rightContent",description:"Slot for right chip content information"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip.vue"]};const I={name:"DtRecipeGroupedChipDefault",components:{DtRecipeGroupedChip:u,DtIcon:y}};var f=function(){var e=this,t=e._self._c;return t("dt-recipe-grouped-chip",{scopedSlots:e._u([{key:"leftContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.leftContent)}})]},proxy:!0},e.rightContent?{key:"rightContent",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.rightContent)}})]},proxy:!0}:null],null,!0)},[e.leftIcon?t("template",{slot:"leftIcon"},[t("dt-icon",{attrs:{name:e.leftIcon,size:"200"}})],1):e._e(),e.rightIcon?t("template",{slot:"rightIcon"},[t("dt-icon",{attrs:{name:e.rightIcon,size:"200"}})],1):e._e()],2)},D=[];f._withStripped=!0;var i=l(I,f,D,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue";const S=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeGroupedChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/chips/grouped_chip/grouped_chip_default.story.vue"]};const s=m(),h={},_={leftContent:{control:"text",description:"Slot left hand side content. Ex. ongoing call time value",table:{category:"slots",type:{summary:"VNode"}}},leftIcon:{name:"leftIcon",options:s,description:"Slot for left hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightContent:{control:"text",description:"Slot right hand side content. Ex. ongoing call hold time value",table:{category:"slots",type:{summary:"VNode"}}},rightIcon:{name:"rightIcon",options:s,description:"Slot for right hand chip icon",table:{category:"slots",type:{summary:"Component"}},control:{type:"select",labels:{undefined:"(empty)"}}}},b={title:"Recipes/Chips/Grouped Chips",component:u,args:h,argTypes:_,excludeStories:/.*Data$/},k=(o,{argTypes:e})=>g(o,e,S),n={render:k,args:{leftIcon:"clock",leftContent:`<div>
      2:50:13
  </div>`,rightIcon:"pause",rightContent:`<div>
      0.25
  </div>`},parameters:{}};var c,a,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const w=["argsData","argTypesData","Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:w,argTypesData:_,argsData:h,default:b},Symbol.toStringTag,{value:"Module"}));export{n as D,N as G};
//# sourceMappingURL=grouped_chip.stories-486acdc7.js.map
