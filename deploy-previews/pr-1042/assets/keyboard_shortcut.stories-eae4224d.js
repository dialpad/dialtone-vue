import{D as n,S as h}from"./keyboard_shortcut-7054c7c9.js";import{c as m}from"./storybook_utils-a3173d9b.js";import{a as f,o as y,f as b,d as o,n as K,g as t,s as c}from"./vue.esm-bundler-3bf5edd9.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const g={name:"DtKeyboardShortcutDefault",components:{DtKeyboardShortcut:n}};function C(e,T,$,w,V,x){const r=f("dt-keyboard-shortcut");return y(),b("div",{class:K(["d-p8",{"d-bgc-black-900":e.$attrs.inverted}])},[o(r,{inverted:e.$attrs.inverted,shortcut:e.$attrs.shortcut,"screen-reader-text":e.$attrs.screenReaderText},null,8,["inverted","shortcut","screen-reader-text"])],2)}const I=v(g,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_default.story.vue"]]);g.__docgenInfo={displayName:"DtKeyboardShortcutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_default.story.vue"]};const S={name:"DtKeyboardShortcutVariants",components:{DtKeyboardShortcut:n},data:()=>({availableVariants:h.join("+").trim()})},N={class:"d-p8"},F=t("h1",{class:"d-fs-200"}," Default shortcut ",-1),O={class:"d-p8 d-bgc-contrast"},j=t("h1",{class:"d-fc-primary-inverted d-fs-200"}," Inverted style ",-1),B={class:"d-p8"},E=t("h1",{class:"d-fs-200"}," Shortcut size variation ",-1),P={class:"d-p8"},z=t("h1",{class:"d-fs-200"}," All available shortcut aliases ",-1),A={class:"d-p8"},L=t("h1",{class:"d-fs-200"}," Inline with text and screen reader text ",-1);function R(e,T,$,w,V,x){const r=f("dt-keyboard-shortcut");return y(),b("div",null,[t("div",N,[F,o(r,{shortcut:"Option+{cmd}+{win}+Shift+{arrow-up}"})]),t("div",O,[j,o(r,{shortcut:"{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}+E+B",inverted:""})]),t("div",B,[E,o(r,{class:"d-fs-200",shortcut:"{cmd}+Y"})]),t("div",P,[z,o(r,{shortcut:e.availableVariants},null,8,["shortcut"])]),t("div",A,[L,t("p",null,[c(" Press "),o(r,{"screen-reader-text":"Ctrl and F5",shortcut:"Ctrl + F5"}),c(" to hard refresh the page. ")])])])}const H=v(S,[["render",R],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_variants.story.vue"]]);S.__docgenInfo={displayName:"DtKeyboardShortcutVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_variants.story.vue"]};const D={shortcut:"{cmd}+Ctrl+X"},k={shortcut:{description:`Include any of these tokens in your string to render the corresponding symbol:<br>
      ${h.join(", ")}`,control:"text"}},M={title:"Components/Keyboard Shortcut",component:n,args:D,argTypes:k,excludeStories:/.*Data$/},U=e=>m(e,I),X=e=>m(e,H),s={render:U,args:{}},a={render:X,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,p,_;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(p=a.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const Y=["argsData","argTypesData","Default","Variants"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Variants:a,__namedExportsOrder:Y,argTypesData:k,argsData:D,default:M},Symbol.toStringTag,{value:"Module"}));export{s as D,W as K,a as V};
//# sourceMappingURL=keyboard_shortcut.stories-eae4224d.js.map
