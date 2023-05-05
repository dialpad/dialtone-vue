import{a as V}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as T}from"./storybook_utils-f14132b0.js";import{D as x}from"./general_row-c68999f0.js";import{D as G}from"./icon-bc3f90e3.js";import{b as l,w as k,m as q,a as u,o as c,d as n,f as o}from"./vue.esm-bundler-2b4fd772.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{D as L}from"./stack-55a28b56.js";import{d as B}from"./person-13c0d6d2.js";const R={name:"DtRecipeGroupRow",components:{DtIcon:G,DtRecipeGeneralRow:x},inheritAttrs:!1,props:{groupCountText:{type:String,default:""},names:{type:String,required:!0},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1}},emits:["click"]};function J(e,m,t,f,g,_){const a=u("dt-icon"),i=u("dt-recipe-general-row");return c(),l(i,q({description:t.names,"aria-label":`${t.groupCountText} ${t.names}`,"unread-count":t.unreadCount,"has-unreads":t.hasUnreads,"unread-count-tooltip":t.unreadCountTooltip,selected:t.selected,"is-typing":t.isTyping},e.$attrs),{left:k(()=>[n(a,{name:"users",size:"300"})]),_:1},16,["description","aria-label","unread-count","has-unreads","unread-count-tooltip","selected","is-typing"])}const d=p(R,[["render",J]]);R.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"groupCountText",description:'Screen reader will read out the number of users in the group using this text. Ex: "2 users"',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"names",description:"Names of the group members",type:{name:"string"},required:!0},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]};const S={name:"DtRecipeGroupRowDefault",components:{DtRecipeGroupRow:d}};function E(e,m,t,f,g,_){const a=u("dt-recipe-group-row");return c(),l(a,{"group-count-text":e.$attrs.groupCountText,names:e.$attrs.names,"unread-count":e.$attrs.unreadCount,"unread-count-tooltip":e.$attrs.unreadCountTooltip,"has-unreads":e.$attrs.hasUnreads,selected:e.$attrs.selected,"is-typing":e.$attrs.isTyping,onClick:e.$attrs.onClick},null,8,["group-count-text","names","unread-count","unread-count-tooltip","has-unreads","selected","is-typing","onClick"])}const F=p(S,[["render",E]]);S.__docgenInfo={displayName:"DtRecipeGroupRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]};const $={name:"DtRecipeGroupRowVariants",components:{DtRecipeGroupRow:d,DtStack:L},data(){return{defaultImage:B}}},I=o("h3",null," Default behavior ",-1),P=o("h3",null," Ellipsed names ",-1),U=o("h3",null," With unread count ",-1),O=o("h3",null," Selected ",-1);function j(e,m,t,f,g,_){const a=u("dt-recipe-group-row"),i=u("dt-stack");return c(),l(i,{gap:"600"},{default:k(()=>[o("div",null,[I,n(a,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith"})]),o("div",null,[P,n(a,{"group-count-text":"4 users",names:"Jaqueline Nackos, Lori Smith, Jaqueline Nackos, Lori Smith"})]),o("div",null,[U,n(a,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith","has-unreads":!0,"unread-count-tooltip":"1 unread message"})]),o("div",null,[O,n(a,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith",selected:""})])]),_:1})}const z=p($,[["render",j]]);$.__docgenInfo={displayName:"DtRecipeGroupRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]};const C={onClick:V("click"),names:"Jaqueline Nackos, Lori Smith"},N={onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},A=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),K={title:"Recipes/Leftbar/Group Row",component:d,args:C,argTypes:N,decorators:[A],excludeStories:/.*Data$/},M=e=>T(e,F),W=e=>T(e,z),r={render:M,args:{}},s={render:W,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var h,w,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var v,D,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(D=s.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const H=["argsData","argTypesData","Default","Variants"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:s,__namedExportsOrder:H,argTypesData:N,argsData:C,default:K},Symbol.toStringTag,{value:"Module"}));export{r as D,ne as G,s as V};
//# sourceMappingURL=group_row.stories-1d67bc0a.js.map