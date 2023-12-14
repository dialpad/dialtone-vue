import{a as b}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as m}from"./storybook_utils-XrTpeJKJ.js";import{D as U}from"./icon-GkF47-VR.js";import{n as s}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const _=["up","down"],f=["mentions","messages"],P={name:"DtRecipeUnreadPill",components:{DtIcon:U},props:{kind:{type:String,required:!0,validator:n=>f.includes(n)},direction:{type:String,required:!0,validator:n=>_.includes(n)}},emits:["click"]};var $=function(){var e=this,t=e._self._c;return t("button",e._g({class:["dt-leftbar-unread-pill",`dt-leftbar-unread-pill--${e.kind}`],attrs:{type:"button","data-qa":"dt-leftbar-unread-pill"}},e.$listeners),[t("dt-icon",{attrs:{name:`arrow-${e.direction}`,size:"300"}}),t("span",{attrs:{"data-qa":"dt-leftbar-unread-pill__label"}},[e._t("default")],2)],1)},R=[],v=s(P,$,R,!1,null,null,null,null);const i=v.exports;v.exports.__docgenInfo={displayName:"DtRecipeUnreadPill",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"The kind of unread pill which determines the styling",tags:{},values:["'mentions'","'messages'"],type:{name:"string"},required:!0},{name:"direction",description:"The direction of the arrow icon",tags:{},values:["'up'","'down'"],type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]};const h={name:"DtRecipeUnreadPillDefault",components:{DtRecipeUnreadPill:i}};var T=function(){var e=this,t=e._self._c;return t("dt-recipe-unread-pill",{attrs:{direction:e.$attrs.direction,kind:e.$attrs.kind},on:{click:e.$attrs.onClick}},[e.$attrs.default?[t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]:e._e()],2)},w=[],g=s(h,T,w,!1,null,null,null,null);const x=g.exports;g.exports.__docgenInfo={displayName:"DtRecipeUnreadPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_default.story.vue"]};const N={name:"DtRecipeUnreadPillVariants",components:{DtRecipeUnreadPill:i}};var S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-recipe-unread-pill",{attrs:{direction:"up",kind:"mentions"}},[e._v(" Unread mentions ")]),t("dt-recipe-unread-pill",{attrs:{direction:"down",kind:"mentions"}},[e._v(" Unread mentions ")]),t("dt-recipe-unread-pill",{attrs:{direction:"up",kind:"messages"}},[e._v(" Unread messages ")]),t("dt-recipe-unread-pill",{attrs:{direction:"down",kind:"messages"}},[e._v(" Unread messages ")])],1)},V=[],k=s(N,S,V,!1,null,null,null,null);const I=k.exports;k.exports.__docgenInfo={displayName:"DtRecipeUnreadPillVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_variants.story.vue"]};const D={onClick:b("click")},y={kind:{options:f,control:{type:"select"}},direction:{options:_,control:{type:"select"}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},F=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-w264 d-p8"><story />
  </div>`}),q={title:"Recipes/Leftbar/Unread Pill",component:i,args:D,argTypes:y,decorators:[F],excludeStories:/.*Data$/},C=(n,{argTypes:e})=>m(n,e,x),E=(n,{argTypes:e})=>m(n,e,I),r={render:C,args:{default:"Unread mentions",kind:"mentions",direction:"up"}},a={render:E,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var o,l,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Unread mentions',
    kind: 'mentions',
    direction: 'up'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const L=["argsData","argTypesData","Default","Variants"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:a,__namedExportsOrder:L,argTypesData:y,argsData:D,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,K as U,a as V};
//# sourceMappingURL=unread_pill.stories-77XZsmlq.js.map