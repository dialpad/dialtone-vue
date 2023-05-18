import{a as S}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as $}from"./storybook_utils-7e0be7f9.js";import{D as C}from"./icon-7ed6ee34.js";import{a as c,f as p,d as n,g as I,l as L,m as x,B as E,o as l,b as q,w as a,k as B,s}from"./vue.esm-bundler-15aa0fd7.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const U=["up","down"],w=["mentions","messages"];const P={name:"DtRecipeUnreadPill",components:{DtIcon:C},props:{kind:{type:String,required:!0,validator:e=>w.includes(e)},direction:{type:String,required:!0,validator:e=>U.includes(e)}},emits:["click"],computed:{unreadChipListeners(){return{click:e=>this.$emit("click",e)}}}},F={"data-qa":"dt-leftbar-unread-pill__label"};function O(e,_,o,f,k,d){const t=c("dt-icon");return l(),p("button",x({class:["dt-leftbar-unread-pill",`dt-leftbar-unread-pill--${o.kind}`],type:"button","data-qa":"dt-leftbar-unread-pill"},E(d.unreadChipListeners,!0)),[n(t,{name:`arrow-${o.direction}`,size:"300"},null,8,["name"]),I("span",F,[L(e.$slots,"default")])],16)}const m=u(P,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]]);P.__docgenInfo={displayName:"DtRecipeUnreadPill",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"The kind of unread pill which determines the styling",tags:{},values:["'mentions'","'messages'"],type:{name:"string"},required:!0},{name:"direction",description:"The direction of the arrow icon",tags:{},values:["'up'","'down'"],type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]};const T={name:"DtRecipeUnreadPillDefault",components:{DtRecipeUnreadPill:m}},H=["innerHTML"];function M(e,_,o,f,k,d){const t=c("dt-recipe-unread-pill");return l(),q(t,{direction:e.$attrs.direction,kind:e.$attrs.kind,onClick:e.$attrs.onClick},{default:a(()=>[e.defaultSlot?(l(),p("span",{key:0,innerHTML:e.defaultSlot},null,8,H)):B("v-if",!0)]),_:1},8,["direction","kind","onClick"])}const j=u(T,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_default.story.vue"]]);T.__docgenInfo={displayName:"DtRecipeUnreadPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_default.story.vue"]};const N={name:"DtRecipeUnreadPillVariants",components:{DtRecipeUnreadPill:m}},z={class:"d-stack16"};function A(e,_,o,f,k,d){const t=c("dt-recipe-unread-pill");return l(),p("div",z,[n(t,{direction:"up",kind:"mentions"},{default:a(()=>[s(" Unread mentions ")]),_:1}),n(t,{direction:"down",kind:"mentions"},{default:a(()=>[s(" Unread mentions ")]),_:1}),n(t,{direction:"up",kind:"messages"},{default:a(()=>[s(" Unread messages ")]),_:1}),n(t,{direction:"down",kind:"messages"},{default:a(()=>[s(" Unread messages ")]),_:1})])}const K=u(N,[["render",A],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_variants.story.vue"]]);N.__docgenInfo={displayName:"DtRecipeUnreadPillVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_variants.story.vue"]};const V={onClick:S("click")},R={kind:{options:w,control:{type:"select"}},direction:{options:U,control:{type:"select"}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},G=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),J={title:"Recipes/Leftbar/Unread Pill",component:m,args:V,argTypes:R,decorators:[G],excludeStories:/.*Data$/},Q=e=>$(e,j),W=e=>$(e,K),r={render:Q,args:{default:"Unread mentions",kind:"mentions",direction:"up"}},i={render:W,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var v,g,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Unread mentions',
    kind: 'mentions',
    direction: 'up'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var D,b,h;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const X=["argsData","argTypesData","Default","Variants"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:i,__namedExportsOrder:X,argTypesData:R,argsData:V,default:J},Symbol.toStringTag,{value:"Module"}));export{r as D,ae as U,i as V};
//# sourceMappingURL=unread_pill.stories-784621cf.js.map
