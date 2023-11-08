import{D as o,S as p}from"./keyboard_shortcut-13c16722.js";import{c as _}from"./storybook_utils-cf049d2e.js";import{n as m}from"./_plugin-vue2_normalizer-2bbd088e.js";const b={name:"DtKeyboardShortcutDefault",components:{DtKeyboardShortcut:o}};var g=function(){var e=this,t=e._self._c;return t("div",{class:["d-p8",{"d-bgc-black-900":e.inverted}]},[t("dt-keyboard-shortcut",{attrs:{inverted:e.$attrs.inverted,shortcut:e.$attrs.shortcut,"screen-reader-text":e.$attrs.screenReaderText}})],1)},S=[],h=m(b,g,S,!1,null,null,null,null);const D=h.exports;h.exports.__docgenInfo={displayName:"DtKeyboardShortcutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_default.story.vue"]};const C={name:"DtKeyboardShortcutVariants",components:{DtKeyboardShortcut:o},data:()=>({availableVariants:p.join("+").trim()})};var k=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" Default shortcut ")]),t("dt-keyboard-shortcut",{attrs:{shortcut:"Option+{cmd}+{win}+Shift+{arrow-up}"}})],1),t("div",{staticClass:"d-p8 d-bgc-contrast"},[t("h1",{staticClass:"d-fc-primary-inverted d-fs-200"},[e._v(" Inverted style ")]),t("dt-keyboard-shortcut",{attrs:{shortcut:"{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}+E+B",inverted:""}})],1),t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" Shortcut size variation ")]),t("dt-keyboard-shortcut",{staticClass:"d-fs-200",attrs:{shortcut:"{cmd}+Y"}})],1),t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" All available shortcut aliases ")]),t("dt-keyboard-shortcut",{attrs:{shortcut:e.availableVariants}})],1),t("div",{staticClass:"d-p8"},[t("h1",{staticClass:"d-fs-200"},[e._v(" Inline with text and screen reader text ")]),t("p",[e._v(" Press "),t("dt-keyboard-shortcut",{attrs:{"screen-reader-text":"Ctrl and F5",shortcut:"Ctrl + F5"}}),e._v(" to hard refresh the page. ")],1)])])},x=[],f=m(C,k,x,!1,null,null,null,null);const T=f.exports;f.exports.__docgenInfo={displayName:"DtKeyboardShortcutVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_variants.story.vue"]};const v={shortcut:"{cmd}+Ctrl+X"},y={shortcut:{description:`Include any of these tokens in your string to render the corresponding symbol:<br>
      ${p.join(", ")}`,control:"text"}},w={title:"Components/Keyboard Shortcut",component:o,args:v,argTypes:y,excludeStories:/.*Data$/},V=(r,{argTypes:e})=>_(r,e,D),K=(r,{argTypes:e})=>_(r,e,T),a={render:V,args:{}},s={render:K,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var n,c,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,i,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const $=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:s,__namedExportsOrder:$,argTypesData:y,argsData:v,default:w},Symbol.toStringTag,{value:"Module"}));export{a as D,j as K,s as V};
//# sourceMappingURL=keyboard_shortcut.stories-7d7ecfd2.js.map
