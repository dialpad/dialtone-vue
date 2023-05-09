import{a as w}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as v}from"./storybook_utils-1ca8d93f.js";import{D as P}from"./icon-8710e0b7.js";import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";const g=["up","down"],y=["mentions","messages"];const R={name:"DtRecipeUnreadPill",components:{DtIcon:P},props:{kind:{type:String,required:!0,validator:n=>y.includes(n)},direction:{type:String,required:!0,validator:n=>g.includes(n)}},emits:["click"]};var k=function(){var e=this,t=e._self._c;return t("button",e._g({class:["dt-leftbar-unread-pill",`dt-leftbar-unread-pill--${e.kind}`],attrs:{type:"button","data-qa":"dt-leftbar-unread-pill"}},e.$listeners),[t("dt-icon",{attrs:{name:`arrow-${e.direction}`,size:"300"}}),t("span",{attrs:{"data-qa":"dt-leftbar-unread-pill__label"}},[e._t("default")],2)],1)},S=[];k._withStripped=!0;var s=i(R,k,S,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue";const l=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeUnreadPill",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"The kind of unread pill which determines the styling",tags:{},values:["'mentions'","'messages'"],type:{name:"string"},required:!0},{name:"direction",description:"The direction of the arrow icon",tags:{},values:["'up'","'down'"],type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]};const T={name:"DtRecipeUnreadPillDefault",components:{DtRecipeUnreadPill:l}};var D=function(){var e=this,t=e._self._c;return t("dt-recipe-unread-pill",{attrs:{direction:e.direction,kind:e.kind},on:{click:e.onClick}},[e.defaultSlot?[t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]:e._e()],2)},x=[];D._withStripped=!0;var o=i(T,D,x,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_default.story.vue";const N=o.exports;o.exports.__docgenInfo={displayName:"DtRecipeUnreadPillDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_default.story.vue"]};const $={name:"DtRecipeUnreadPillVariants",components:{DtRecipeUnreadPill:l}};var b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-stack16"},[t("dt-recipe-unread-pill",{attrs:{direction:"up",kind:"mentions"}},[e._v(" Unread mentions ")]),t("dt-recipe-unread-pill",{attrs:{direction:"down",kind:"mentions"}},[e._v(" Unread mentions ")]),t("dt-recipe-unread-pill",{attrs:{direction:"up",kind:"messages"}},[e._v(" Unread messages ")]),t("dt-recipe-unread-pill",{attrs:{direction:"down",kind:"messages"}},[e._v(" Unread messages ")])],1)},V=[];b._withStripped=!0;var d=i($,b,V,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_variants.story.vue";const I=d.exports;d.exports.__docgenInfo={displayName:"DtRecipeUnreadPillVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill_variants.story.vue"]};const h={onClick:w("click")},U={kind:{options:y,control:{type:"select"}},direction:{options:g,control:{type:"select"}},default:{table:{type:{summary:"VNode"}},control:{type:"text"}},onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},F=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),q={title:"Recipes/Leftbar/Unread Pill",component:l,args:h,argTypes:U,decorators:[F],excludeStories:/.*Data$/},C=(n,{argTypes:e})=>v(n,e,N),E=(n,{argTypes:e})=>v(n,e,I),r={render:C,args:{default:"Unread mentions",kind:"mentions",direction:"up"}},a={render:E,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Unread mentions',
    kind: 'mentions',
    direction: 'up'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var _,m,f;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const L=["argsData","argTypesData","Default","Variants"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:a,__namedExportsOrder:L,argTypesData:U,argsData:h,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,K as U,a as V};
//# sourceMappingURL=unread_pill.stories-c7b8be8a.js.map
