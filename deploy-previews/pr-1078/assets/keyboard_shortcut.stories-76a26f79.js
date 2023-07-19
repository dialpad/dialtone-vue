import{D as o,S as h}from"./keyboard_shortcut-4ce3db52.js";import{c as m}from"./storybook_utils-344aa704.js";import{n as v}from"./_plugin-vue2_normalizer-2bbd088e.js";const g={name:"DtKeyboardShortcutDefault",components:{DtKeyboardShortcut:o}};var f=function(){var e=this,t=e._self._c;return t("div",{class:["d-p8",{"d-bgc-black-900":e.inverted}]},[t("dt-keyboard-shortcut",{attrs:{inverted:e.inverted,shortcut:e.shortcut,"screen-reader-text":e.screenReaderText}})],1)},D=[];f._withStripped=!0;var n=v(g,f,D,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_default.story.vue";const k=n.exports;n.exports.__docgenInfo={displayName:"DtKeyboardShortcutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_default.story.vue"]};const w={name:"DtKeyboardShortcutVariants",components:{DtKeyboardShortcut:o},data:()=>({availableVariants:h.join("+").trim()})};var y=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" Default shortcut ")]),t("dt-keyboard-shortcut",{attrs:{shortcut:"Option+{cmd}+{win}+Shift+{arrow-up}"}})],1),t("div",{staticClass:"d-p8 d-bgc-contrast"},[t("h1",{staticClass:"d-fc-primary-inverted d-fs-200"},[e._v(" Inverted style ")]),t("dt-keyboard-shortcut",{attrs:{shortcut:"{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}+E+B",inverted:""}})],1),t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" Shortcut size variation ")]),t("dt-keyboard-shortcut",{staticClass:"d-fs-200",attrs:{shortcut:"{cmd}+Y"}})],1),t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" All available shortcut aliases ")]),t("dt-keyboard-shortcut",{attrs:{shortcut:e.availableVariants}})],1),t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" Inline with text and screen reader text ")]),t("p",[e._v(" Press "),t("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Ctrl and F5",shortcut:"Ctrl + F5"}}),e._v(" to hard refresh the page. ")],1)])])},C=[];y._withStripped=!0;var c=v(w,y,C,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_variants.story.vue";const x=c.exports;c.exports.__docgenInfo={displayName:"DtKeyboardShortcutVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_variants.story.vue"]};const b={shortcut:"{cmd}+Ctrl+X"},S={shortcut:{description:`Include any of these tokens in your string to render the corresponding symbol:<br>
      ${h.join(", ")}`,control:"text"}},T={title:"Components/Keyboard Shortcut",component:o,args:b,argTypes:S,excludeStories:/.*Data$/},V=(r,{argTypes:e})=>m(r,e,k),K=(r,{argTypes:e})=>m(r,e,x),a={render:V,args:{}},s={render:K,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,p,_;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(p=s.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const F=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:s,__namedExportsOrder:F,argTypesData:S,argsData:b,default:T},Symbol.toStringTag,{value:"Module"}));export{a as D,j as K,s as V};
//# sourceMappingURL=keyboard_shortcut.stories-76a26f79.js.map
