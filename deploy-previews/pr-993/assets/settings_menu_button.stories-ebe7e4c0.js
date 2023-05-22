import{a as f}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as b}from"./storybook_utils-605a9b8f.js";import{D as g}from"./button-9102a84a.js";import{D as v}from"./icon-c7116d11.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const h={name:"DtRecipeSettingsMenuButton",components:{DtButton:g,DtIcon:v},props:{updateAvailable:{type:Boolean,default:!1},ariaLabel:{type:String,required:!0}},emits:["click"]};var c=function(){var e=this,t=e._self._c;return e.updateAvailable?t("dt-button",e._g({staticClass:"d-h32 d-bar-pill d-bgc-blue-200 d-bgo25 h:d-bgo50 d-bc-blue-500 d-bco25 d-fc-blue-500",attrs:{importance:"outlined",size:"xs","icon-position":"right","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{staticClass:"d-fc-blue-500",attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}],null,!1,993491315)},e.$listeners),[e._t("default")],2):t("dt-button",e._g({staticClass:"settings-menu-button d-p0 d-bar24 d-h32 d-w24 d-theme-topbar-fc",attrs:{importance:"clear",kind:"inverted","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}])},e.$listeners))},y=[];c._withStripped=!0;var s=u(h,c,y,!1,null,"90cc2a95",null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue";const d=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButton",exportName:"default",description:"",tags:{},props:[{name:"updateAvailable",description:`Determines whether the button should display the update state
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]};const D={name:"DtRecipeSettingsMenuButtonDefault",components:{DtRecipeSettingsMenuButton:d}};var p=function(){var e=this,t=e._self._c;return t("dt-recipe-settings-menu-button",{attrs:{"update-available":e.updateAvailable,"aria-label":e.ariaLabel},on:{click:e.onClick}},[e.defaultSlot?[e._v(" "+e._s(e.defaultSlot)+" ")]:e._e()],2)},S=[];p._withStripped=!0;var o=u(D,p,S,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue";const k=o.exports;o.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButtonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]};const _={onClick:f("click")},m={updateAvailable:{control:"boolean"},default:{name:"default",description:'Slot default content. This should be the word "update"',control:"text",table:{category:"slots",type:{summary:"text/html"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}}},x={title:"Recipes/Header/Settings Menu Button",component:d,args:_,argTypes:m,excludeStories:/.*Data$/},w=(n,{argTypes:e})=>b(n,e,k),a={render:w,args:{default:"Update",ariaLabel:"Update app"}};var r,i,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Update',
    ariaLabel: 'Update app'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const B=["argsData","argTypesData","Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:B,argTypesData:m,argsData:_,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,$ as S};
//# sourceMappingURL=settings_menu_button.stories-ebe7e4c0.js.map
