import{a as $}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as B}from"./storybook_utils-cf9b483a.js";import{D as T}from"./button-586a189e.js";import{D as w}from"./icon-2be5d650.js";import{a as r,b as i,w as o,m as u,o as s,d,l as M,f as C,F as A,s as L,t as N,k as R}from"./vue.esm-bundler-15aa0fd7.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const b={name:"DtRecipeSettingsMenuButton",components:{DtButton:T,DtIcon:w},inheritAttrs:!1,props:{updateAvailable:{type:Boolean,default:!1},ariaLabel:{type:String,required:!0}}};function x(e,y,a,D,k,S){const n=r("dt-icon"),l=r("dt-button");return a.updateAvailable?(s(),i(l,u({key:0,importance:"outlined",size:"xs","icon-position":"right",class:"d-h32 d-bar-pill d-bgc-blue-200 d-bgo25 h:d-bgo50 d-bc-blue-500 d-bco25 d-fc-blue-500","aria-label":a.ariaLabel},e.$attrs),{icon:o(()=>[d(n,{name:"more-vertical",size:"300",class:"d-fc-blue-500"})]),default:o(()=>[M(e.$slots,"default",{},void 0,!0)]),_:3},16,["aria-label"])):(s(),i(l,u({key:1,importance:"clear",kind:"inverted",class:"settings-menu-button d-p0 d-bar24 d-h32 d-w24 d-theme-topbar-fc","aria-label":a.ariaLabel},e.$attrs),{icon:o(()=>[d(n,{name:"more-vertical",size:"300"})]),_:1},16,["aria-label"]))}const f=_(b,[["render",x],["__scopeId","data-v-90cc2a95"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]]);b.__docgenInfo={displayName:"DtRecipeSettingsMenuButton",exportName:"default",description:"",tags:{},props:[{name:"updateAvailable",description:`Determines whether the button should display the update state
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]};const g={name:"DtRecipeSettingsMenuButtonDefault",components:{DtRecipeSettingsMenuButton:f}};function F(e,y,a,D,k,S){const n=r("dt-recipe-settings-menu-button");return s(),i(n,{"update-available":e.$attrs.updateAvailable,"aria-label":e.$attrs.ariaLabel,onClick:e.$attrs.onClick},{default:o(()=>[e.defaultSlot?(s(),C(A,{key:0},[L(N(e.defaultSlot),1)],64)):R("v-if",!0)]),_:1},8,["update-available","aria-label","onClick"])}const V=_(g,[["render",F],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]]);g.__docgenInfo={displayName:"DtRecipeSettingsMenuButtonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]};const v={onClick:$("click")},h={updateAvailable:{control:"boolean"},default:{name:"default",description:'Slot default content. This should be the word "update"',control:"text",table:{category:"slots",type:{summary:"text/html"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}}},z={title:"Recipes/Header/Settings Menu Button",component:f,args:v,argTypes:h,excludeStories:/.*Data$/},I=e=>B(e,V),t={render:I,args:{default:"Update",ariaLabel:"Update app"}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Update',
    ariaLabel: 'Update app'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["argsData","argTypesData","Default"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:U,argTypesData:h,argsData:v,default:z},Symbol.toStringTag,{value:"Module"}));export{t as D,G as S};
//# sourceMappingURL=settings_menu_button.stories-3838f0d0.js.map
