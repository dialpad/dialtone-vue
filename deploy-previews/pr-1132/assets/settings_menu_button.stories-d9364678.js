import{a as $}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as B}from"./storybook_utils-79c013ce.js";import{D as T}from"./button-ebe757f5.js";import{D as M}from"./icon-1bcb5ec8.js";import{k as r,v as i,m as o,p as u,o as s,l as c,x as w,d as C,F as x,q as A,t as L,j as N}from"./vue.esm-bundler-2457a580.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const f={name:"DtRecipeSettingsMenuButton",components:{DtButton:T,DtIcon:M},inheritAttrs:!1,props:{updateAvailable:{type:Boolean,default:!1},ariaLabel:{type:String,required:!0}}};function R(e,D,a,h,k,S){const n=r("dt-icon"),l=r("dt-button");return a.updateAvailable?(s(),i(l,u({key:0,importance:"outlined",size:"xs","icon-position":"right",class:"settings-menu-button-update","aria-label":a.ariaLabel},e.$attrs),{icon:o(()=>[c(n,{name:"more-vertical",size:"300"})]),default:o(()=>[w(e.$slots,"default",{},void 0,!0)]),_:3},16,["aria-label"])):(s(),i(l,u({key:1,importance:"clear",kind:"inverted",class:"settings-menu-button","aria-label":a.ariaLabel},e.$attrs),{icon:o(()=>[c(n,{name:"more-vertical",size:"300"})]),_:1},16,["aria-label"]))}const b=_(f,[["render",R],["__scopeId","data-v-90cc2a95"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]]);f.__docgenInfo={displayName:"DtRecipeSettingsMenuButton",exportName:"default",description:"",tags:{},props:[{name:"updateAvailable",description:`Determines whether the button should display the update state
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]};const g={name:"DtRecipeSettingsMenuButtonDefault",components:{DtRecipeSettingsMenuButton:b}};function F(e,D,a,h,k,S){const n=r("dt-recipe-settings-menu-button");return s(),i(n,{"update-available":e.$attrs.updateAvailable,"aria-label":e.$attrs.ariaLabel,onClick:e.$attrs.onClick},{default:o(()=>[e.defaultSlot?(s(),C(x,{key:0},[A(L(e.defaultSlot),1)],64)):N("v-if",!0)]),_:1},8,["update-available","aria-label","onClick"])}const V=_(g,[["render",F],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]]);g.__docgenInfo={displayName:"DtRecipeSettingsMenuButtonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]};const v={onClick:$("click")},y={updateAvailable:{control:"boolean"},default:{name:"default",description:'Slot default content. This should be the word "update"',control:"text",table:{category:"slots",type:{summary:"text/html"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}}},z={title:"Recipes/Header/Settings Menu Button",component:b,args:v,argTypes:y,excludeStories:/.*Data$/},I=e=>B(e,V),t={render:I,args:{default:"Update",ariaLabel:"Update app"}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Update',
    ariaLabel: 'Update app'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["argsData","argTypesData","Default"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:U,argTypesData:y,argsData:v,default:z},Symbol.toStringTag,{value:"Module"}));export{t as D,G as S};
//# sourceMappingURL=settings_menu_button.stories-d9364678.js.map