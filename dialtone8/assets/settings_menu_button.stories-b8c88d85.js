import{a as m}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as _}from"./storybook_utils-6c24aced.js";import{D as f}from"./button-82727ed7.js";import{D as b}from"./icon-b42420a4.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";const g={name:"DtRecipeSettingsMenuButton",components:{DtButton:f,DtIcon:b},props:{updateAvailable:{type:Boolean,default:!1},ariaLabel:{type:String,required:!0}},emits:["click"]};var v=function(){var e=this,t=e._self._c;return e.updateAvailable?t("dt-button",e._g({staticClass:"d-h32 d-bar-pill d-bgc-blue-200 d-bgo25 h:d-bgo50 d-bc-blue-500 d-bco25 d-fc-blue-500",attrs:{importance:"outlined",size:"xs","icon-position":"right","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{staticClass:"d-fc-blue-500",attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}],null,!1,993491315)},e.$listeners),[e._t("default")],2):t("dt-button",e._g({staticClass:"settings-menu-button d-p0 d-bar24 d-h32 d-w24 d-theme-topbar-fc",attrs:{importance:"clear",kind:"inverted","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}])},e.$listeners))},y=[],i=l(g,v,y,!1,null,"2e6fad60",null,null);const u=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButton",exportName:"default",description:"",tags:{},props:[{name:"updateAvailable",description:`Determines whether the button should display the update state
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]};const D={name:"DtRecipeSettingsMenuButtonDefault",components:{DtRecipeSettingsMenuButton:u}};var h=function(){var e=this,t=e._self._c;return t("dt-recipe-settings-menu-button",{attrs:{"update-available":e.updateAvailable,"aria-label":e.ariaLabel},on:{click:e.onClick}},[e.defaultSlot?[e._v(" "+e._s(e.defaultSlot)+" ")]:e._e()],2)},S=[],c=l(D,h,S,!1,null,null,null,null);const k=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButtonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]};const d={onClick:m("click")},p={updateAvailable:{control:"boolean"},default:{name:"default",description:'Slot default content. This should be the word "update"',control:"text",table:{category:"slots",type:{summary:"text/html"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}}},x={title:"Recipes/Header/Settings Menu Button",component:u,args:d,argTypes:p,excludeStories:/.*Data$/},B=(n,{argTypes:e})=>_(n,e,k),a={render:B,args:{default:"Update",ariaLabel:"Update app"}};var s,r,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Update',
    ariaLabel: 'Update app'
  }
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const T=["argsData","argTypesData","Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:T,argTypesData:p,argsData:d,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,w as S};
//# sourceMappingURL=settings_menu_button.stories-b8c88d85.js.map
