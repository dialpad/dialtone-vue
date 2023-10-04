import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";import{h as _}from"./storybook_utils-3d298cfc.js";import{D as s}from"./group_row-509d6d5e.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as k}from"./stack-b8a925c0.js";import{d as R}from"./person-13c0d6d2.js";const b={name:"DtRecipeGroupRowDefault",components:{DtRecipeGroupRow:s}};var g=function(){var e=this,r=e._self._c;return r("dt-recipe-group-row",{attrs:{"group-count-text":e.groupCountText,names:e.names,"unread-count":e.unreadCount,"unread-count-tooltip":e.unreadCountTooltip,"has-unreads":e.hasUnreads,selected:e.selected,"is-typing":e.isTyping},on:{click:e.onClick}})},y=[];g._withStripped=!0;var n=f(b,g,y,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue";const x=n.exports;n.exports.__docgenInfo={displayName:"DtRecipeGroupRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]};const S={name:"DtRecipeGroupRowVariants",components:{DtRecipeGroupRow:s,DtStack:k},data(){return{defaultImage:R}}};var v=function(){var e=this,r=e._self._c;return r("dt-stack",{attrs:{gap:"600"}},[r("div",[r("h3",[e._v(" Default behavior ")]),r("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith"}})],1),r("div",[r("h3",[e._v(" Ellipsed names ")]),r("dt-recipe-group-row",{attrs:{"group-count-text":"4 users",names:"Jaqueline Nackos, Lori Smith, Jaqueline Nackos, Lori Smith"}})],1),r("div",[r("h3",[e._v(" With unread count ")]),r("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith","has-unreads":!0,"unread-count-tooltip":"1 unread message"}})],1),r("div",[r("h3",[e._v(" Selected ")]),r("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith",selected:""}})],1)])},T=[];v._withStripped=!0;var u=f(S,v,T,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue";const G=u.exports;u.exports.__docgenInfo={displayName:"DtRecipeGroupRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]};const w={onClick:D("click"),names:"Jaqueline Nackos, Lori Smith"},h={onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},N=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),V={title:"Recipes/Leftbar/Group Row",component:s,args:w,argTypes:h,decorators:[N],excludeStories:/.*Data$/},C=(t,{argTypes:e})=>_(t,e,x),L=(t,{argTypes:e})=>_(t,e,G),o={render:C,args:{}},a={render:L,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const q=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:a,__namedExportsOrder:q,argTypesData:h,argsData:w,default:V},Symbol.toStringTag,{value:"Module"}));export{o as D,j as G,a as V};
//# sourceMappingURL=group_row.stories-02cb0fdc.js.map
