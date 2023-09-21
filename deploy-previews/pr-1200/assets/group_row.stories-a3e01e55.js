import{a as N}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as _}from"./storybook_utils-5b045293.js";import{D as u}from"./group_row-dd5c3fa0.js";import{u as n,o as g,b as f,w as V,e as o,x as s}from"./vue.esm-bundler-735640fd.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{D as x}from"./stack-4bf0ac33.js";import{d as C}from"./person-13c0d6d2.js";const h={name:"DtRecipeGroupRowDefault",components:{DtRecipeGroupRow:u}};function G(e,$,b,y,R,S){const t=n("dt-recipe-group-row");return g(),f(t,{"group-count-text":e.$attrs.groupCountText,names:e.$attrs.names,"unread-count":e.$attrs.unreadCount,"unread-count-tooltip":e.$attrs.unreadCountTooltip,"has-unreads":e.$attrs.hasUnreads,selected:e.$attrs.selected,"is-typing":e.$attrs.isTyping,onClick:e.$attrs.onClick},null,8,["group-count-text","names","unread-count","unread-count-tooltip","has-unreads","selected","is-typing","onClick"])}const L=w(h,[["render",G],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]]);h.__docgenInfo={displayName:"DtRecipeGroupRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]};const v={name:"DtRecipeGroupRowVariants",components:{DtRecipeGroupRow:u,DtStack:x},data(){return{defaultImage:C}}},q=o("h3",null," Default behavior ",-1),J=o("h3",null," Ellipsed names ",-1),F=o("h3",null," With unread count ",-1),B=o("h3",null," Selected ",-1);function I(e,$,b,y,R,S){const t=n("dt-recipe-group-row"),T=n("dt-stack");return g(),f(T,{gap:"600"},{default:V(()=>[o("div",null,[q,s(t,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith"})]),o("div",null,[J,s(t,{"group-count-text":"4 users",names:"Jaqueline Nackos, Lori Smith, Jaqueline Nackos, Lori Smith"})]),o("div",null,[F,s(t,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith","has-unreads":!0,"unread-count-tooltip":"1 unread message"})]),o("div",null,[B,s(t,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith",selected:""})])]),_:1})}const O=w(v,[["render",I],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]]);v.__docgenInfo={displayName:"DtRecipeGroupRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]};const k={onClick:N("click"),names:"Jaqueline Nackos, Lori Smith"},D={onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},P=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),j={title:"Recipes/Leftbar/Group Row",component:u,args:k,argTypes:D,decorators:[P],excludeStories:/.*Data$/},E=e=>_(e,L),z=e=>_(e,O),r={render:E,args:{}},a={render:z,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const M=["argsData","argTypesData","Default","Variants"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:a,__namedExportsOrder:M,argTypesData:D,argsData:k,default:j},Symbol.toStringTag,{value:"Module"}));export{r as D,Y as G,a as V};
//# sourceMappingURL=group_row.stories-a3e01e55.js.map
