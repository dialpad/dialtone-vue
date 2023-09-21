import{D as n,S as h}from"./keyboard_shortcut-4744f76f.js";import{c as m}from"./storybook_utils-5b045293.js";import{u as f,o as y,p as b,x as o,k as K,e,z as c}from"./vue.esm-bundler-735640fd.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const g={name:"DtKeyboardShortcutDefault",components:{DtKeyboardShortcut:n}};function C(t,T,$,w,V,x){const r=f("dt-keyboard-shortcut");return y(),b("div",{class:K(["d-p8",{"d-bgc-black-900":t.$attrs.inverted}])},[o(r,{inverted:t.$attrs.inverted,shortcut:t.$attrs.shortcut,"screen-reader-text":t.$attrs.screenReaderText},null,8,["inverted","shortcut","screen-reader-text"])],2)}const I=v(g,[["render",C],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_default.story.vue"]]);g.__docgenInfo={displayName:"DtKeyboardShortcutDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_default.story.vue"]};const S={name:"DtKeyboardShortcutVariants",components:{DtKeyboardShortcut:n},data:()=>({availableVariants:h.join("+").trim()})},N={class:"d-p8"},F=e("h1",{class:"d-fs-200"}," Default shortcut ",-1),O={class:"d-p8 d-bgc-contrast"},j=e("h1",{class:"d-fc-primary-inverted d-fs-200"}," Inverted style ",-1),z={class:"d-p8"},B=e("h1",{class:"d-fs-200"}," Shortcut size variation ",-1),E={class:"d-p8"},P=e("h1",{class:"d-fs-200"}," All available shortcut aliases ",-1),A={class:"d-p8"},L=e("h1",{class:"d-fs-200"}," Inline with text and screen reader text ",-1);function R(t,T,$,w,V,x){const r=f("dt-keyboard-shortcut");return y(),b("div",null,[e("div",N,[F,o(r,{shortcut:"Option+{cmd}+{win}+Shift+{arrow-up}"})]),e("div",O,[j,o(r,{shortcut:"{win}+{arrow-right}+{arrow-left}+{arrow-up}+{arrow-down}+E+B",inverted:""})]),e("div",z,[B,o(r,{class:"d-fs-200",shortcut:"{cmd}+Y"})]),e("div",E,[P,o(r,{shortcut:t.availableVariants},null,8,["shortcut"])]),e("div",A,[L,e("p",null,[c(" Press "),o(r,{"screen-reader-text":"Ctrl and F5",shortcut:"Ctrl + F5"}),c(" to hard refresh the page. ")])])])}const H=v(S,[["render",R],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_variants.story.vue"]]);S.__docgenInfo={displayName:"DtKeyboardShortcutVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/keyboard_shortcut/keyboard_shortcut_variants.story.vue"]};const k={shortcut:"{cmd}+Ctrl+X"},D={shortcut:{description:`Include any of these tokens in your string to render the corresponding symbol:<br>
      ${h.join(", ")}`,control:"text"}},M={title:"Components/Keyboard Shortcut",component:n,args:k,argTypes:D,excludeStories:/.*Data$/},U=t=>m(t,I),X=t=>m(t,H),s={render:U,args:{}},a={render:X,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(_=(p=a.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const Y=["argsData","argTypesData","Default","Variants"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Variants:a,__namedExportsOrder:Y,argTypesData:D,argsData:k,default:M},Symbol.toStringTag,{value:"Module"}));export{s as D,W as K,a as V};
//# sourceMappingURL=keyboard_shortcut.stories-64abb768.js.map
