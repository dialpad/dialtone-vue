import{a as f}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as b}from"./storybook_utils-XrTpeJKJ.js";import{D as g}from"./button-ux2tnS3y.js";import{D as v}from"./icon-SfO3AFzV.js";import{n as u}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const y={name:"DtRecipeSettingsMenuButton",components:{DtButton:g,DtIcon:v},props:{updateAvailable:{type:Boolean,default:!1},ariaLabel:{type:String,required:!0}},emits:["click"]};var c=function(){var e=this,t=e._self._c;return e.updateAvailable?t("dt-button",e._g({staticClass:"settings-menu-button-update",attrs:{importance:"outlined",size:"xs","icon-position":"right","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}],null,!1,3418040308)},e.$listeners),[e._t("default")],2):t("dt-button",e._g({staticClass:"settings-menu-button",attrs:{importance:"clear",kind:"inverted","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}])},e.$listeners))},h=[];c._withStripped=!0;var s=u(y,c,h,!1,null,"90cc2a95",null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue";const p=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButton",exportName:"default",description:"",tags:{},props:[{name:"updateAvailable",description:`Determines whether the button should display the update state
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]};const D={name:"DtRecipeSettingsMenuButtonDefault",components:{DtRecipeSettingsMenuButton:p}};var d=function(){var e=this,t=e._self._c;return t("dt-recipe-settings-menu-button",{attrs:{"update-available":e.$attrs.updateAvailable,"aria-label":e.$attrs.ariaLabel},on:{click:e.$attrs.onClick}},[e.$attrs.default?[e._v(" "+e._s(e.$attrs.default)+" ")]:e._e()],2)},S=[];d._withStripped=!0;var r=u(D,d,S,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue";const k=r.exports;r.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButtonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]};const m={onClick:f("click")},_={updateAvailable:{control:"boolean"},default:{name:"default",description:'Slot default content. This should be the word "update"',control:"text",table:{category:"slots",type:{summary:"text/html"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}}},x={title:"Recipes/Header/Settings Menu Button",component:p,args:m,argTypes:_,excludeStories:/.*Data$/},$=(n,{argTypes:e})=>b(n,e,k),a={render:$,args:{default:"Update",ariaLabel:"Update app"}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Update',
    ariaLabel: 'Update app'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const B=["argsData","argTypesData","Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:B,argTypesData:_,argsData:m,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,A as S};
//# sourceMappingURL=settings_menu_button.stories-Zkgq7glh.js.map
