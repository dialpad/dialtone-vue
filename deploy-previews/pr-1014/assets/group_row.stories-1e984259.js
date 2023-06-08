import{a as V}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as k}from"./storybook_utils-aefd525a.js";import{D as x}from"./general_row-f12c5412.js";import{D as G}from"./icon-6ea2a40b.js";import{a as u,b as c,w as T,m as L,o as p,d as r,g as a}from"./vue.esm-bundler-e62bdd6b.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{D as q}from"./stack-c79e46cf.js";import{d as B}from"./person-13c0d6d2.js";const R={name:"DtRecipeGroupRow",components:{DtIcon:G,DtRecipeGeneralRow:x},inheritAttrs:!1,props:{groupCountText:{type:String,default:""},names:{type:String,required:!0},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1}},emits:["click"],computed:{ariaLabel(){return[this.groupCountText,this.names].filter(e=>!!e).join(" ")}}};function J(e,f,t,_,g,i){const o=u("dt-icon"),l=u("dt-recipe-general-row");return p(),c(l,L({description:t.names,"aria-label":i.ariaLabel,"unread-count":t.unreadCount,"has-unreads":t.hasUnreads,"unread-count-tooltip":t.unreadCountTooltip,selected:t.selected,"is-typing":t.isTyping},e.$attrs),{left:T(()=>[r(o,{name:"users",size:"300"})]),_:1},16,["description","aria-label","unread-count","has-unreads","unread-count-tooltip","selected","is-typing"])}const m=d(R,[["render",J],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]]);R.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"groupCountText",description:'Screen reader will read out the number of users in the group using this text. Ex: "2 users"',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"names",description:"Names of the group members",type:{name:"string"},required:!0},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]};const S={name:"DtRecipeGroupRowDefault",components:{DtRecipeGroupRow:m}};function E(e,f,t,_,g,i){const o=u("dt-recipe-group-row");return p(),c(o,{"group-count-text":e.$attrs.groupCountText,names:e.$attrs.names,"unread-count":e.$attrs.unreadCount,"unread-count-tooltip":e.$attrs.unreadCountTooltip,"has-unreads":e.$attrs.hasUnreads,selected:e.$attrs.selected,"is-typing":e.$attrs.isTyping,onClick:e.$attrs.onClick},null,8,["group-count-text","names","unread-count","unread-count-tooltip","has-unreads","selected","is-typing","onClick"])}const F=d(S,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]]);S.__docgenInfo={displayName:"DtRecipeGroupRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]};const C={name:"DtRecipeGroupRowVariants",components:{DtRecipeGroupRow:m,DtStack:q},data(){return{defaultImage:B}}},I=a("h3",null," Default behavior ",-1),P=a("h3",null," Ellipsed names ",-1),U=a("h3",null," With unread count ",-1),j=a("h3",null," Selected ",-1);function O(e,f,t,_,g,i){const o=u("dt-recipe-group-row"),l=u("dt-stack");return p(),c(l,{gap:"600"},{default:T(()=>[a("div",null,[I,r(o,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith"})]),a("div",null,[P,r(o,{"group-count-text":"4 users",names:"Jaqueline Nackos, Lori Smith, Jaqueline Nackos, Lori Smith"})]),a("div",null,[U,r(o,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith","has-unreads":!0,"unread-count-tooltip":"1 unread message"})]),a("div",null,[j,r(o,{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith",selected:""})])]),_:1})}const z=d(C,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]]);C.__docgenInfo={displayName:"DtRecipeGroupRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]};const $={onClick:V("click"),names:"Jaqueline Nackos, Lori Smith"},N={onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},A=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),K={title:"Recipes/Leftbar/Group Row",component:m,args:$,argTypes:N,decorators:[A],excludeStories:/.*Data$/},M=e=>k(e,F),W=e=>k(e,z),n={render:M,args:{}},s={render:W,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var h,w,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var y,b,D;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const H=["argsData","argTypesData","Default","Variants"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:s,__namedExportsOrder:H,argTypesData:N,argsData:$,default:K},Symbol.toStringTag,{value:"Module"}));export{n as D,re as G,s as V};
//# sourceMappingURL=group_row.stories-1e984259.js.map
