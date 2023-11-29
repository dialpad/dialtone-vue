import{a as m}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as _}from"./storybook_utils-XrTpeJKJ.js";import{D as f}from"./button-5wqdSkdq.js";import{D as b}from"./icon-GkF47-VR.js";import{n as l}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const g={name:"DtRecipeSettingsMenuButton",components:{DtButton:f,DtIcon:b},props:{updateAvailable:{type:Boolean,default:!1},ariaLabel:{type:String,required:!0}},emits:["click"]};var v=function(){var e=this,t=e._self._c;return e.updateAvailable?t("dt-button",e._g({staticClass:"settings-menu-button-update",attrs:{importance:"outlined",size:"xs","icon-position":"right","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}],null,!1,3418040308)},e.$listeners),[e._t("default")],2):t("dt-button",e._g({staticClass:"settings-menu-button",attrs:{importance:"clear",kind:"inverted","aria-label":e.ariaLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"more-vertical",size:"300"}})]},proxy:!0}])},e.$listeners))},y=[],i=l(g,v,y,!1,null,"4ee1371d",null,null);const u=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButton",exportName:"default",description:"",tags:{},props:[{name:"updateAvailable",description:`Determines whether the button should display the update state
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Aria label",type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button.vue"]};const D={name:"DtRecipeSettingsMenuButtonDefault",components:{DtRecipeSettingsMenuButton:u}};var h=function(){var e=this,t=e._self._c;return t("dt-recipe-settings-menu-button",{attrs:{"update-available":e.$attrs.updateAvailable,"aria-label":e.$attrs.ariaLabel},on:{click:e.$attrs.onClick}},[e.$attrs.default?[e._v(" "+e._s(e.$attrs.default)+" ")]:e._e()],2)},S=[],c=l(D,h,S,!1,null,null,null,null);const k=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeSettingsMenuButtonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/header/settings_menu_button/settings_menu_button_default.story.vue"]};const p={onClick:m("click")},d={updateAvailable:{control:"boolean"},default:{name:"default",description:'Slot default content. This should be the word "update"',control:"text",table:{category:"slots",type:{summary:"text/html"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}}},x={title:"Recipes/Header/Settings Menu Button",component:u,args:p,argTypes:d,excludeStories:/.*Data$/},$=(n,{argTypes:e})=>_(n,e,k),a={render:$,args:{default:"Update",ariaLabel:"Update app"}};var s,r,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Update',
    ariaLabel: 'Update app'
  }
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const B=["argsData","argTypesData","Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:B,argTypesData:d,argsData:p,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,C as S};
//# sourceMappingURL=settings_menu_button.stories-xxvqjQDh.js.map
