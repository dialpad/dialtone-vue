import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as h}from"./storybook_utils-f3611d2a.js";import{D as p,R as T,a as D}from"./rich_text_editor-a284d919.js";import{k as $,o as g,v as k}from"./vue.esm-bundler-a9a971fb.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const c={name:"DtRichTextEditorDefault",components:{DtRichTextEditor:p}};function y(e,r,V,x,O,S){const b=$("dt-rich-text-editor");return g(),k(b,{modelValue:e.$attrs.inputValue,"onUpdate:modelValue":r[0]||(r[0]=_=>e.$attrs.inputValue=_),editable:e.$attrs.editable,"input-aria-label":e.$attrs.inputAriaLabel,"input-class":e.$attrs.inputClass,"output-format":e.$attrs.outputFormat,"auto-focus":e.$attrs.autoFocus,placeholder:e.$attrs.placeholder,link:e.$attrs.link,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onFocus:e.$attrs.onFocus},null,8,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","placeholder","link","onBlur","onInput","onFocus"])}const R=F(c,[["render",y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]]);c.__docgenInfo={displayName:"DtRichTextEditorDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]};const m={modelValue:"I’m not a standalone component, please use Message Input instead 🙏!",editable:!0,inputAriaLabel:"This is a descriptive label",outputFormat:"text",autoFocus:!1,placeholder:"Type here...",link:!0,onBlur:a("blur"),onInput:a("input"),onFocus:a("focus")},f={editable:{control:"boolean"},inputClass:{control:"text"},autoFocus:{control:"select",options:[...Object.values(T),!1,!0],table:{defaultValue:{summary:!1}}},outputFormat:{control:"select",options:Object.values(D),table:{defaultValue:{summary:"text"}}},modelValue:{control:"text"},link:{control:"boolean"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onFocus:{table:{disable:!0}}},v={title:"Components/Rich Text Editor",component:p,argTypes:f,args:m,excludeStories:/.*Data$/},I=e=>h(e,R),t={render:I},o={...t,args:{link:!0,modelValue:"The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!"}};var s,l,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var u,i,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    link: true,
    modelValue: 'The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, ' + 'IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const E=["argsData","argTypesData","Default","WithLinks"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithLinks:o,__namedExportsOrder:E,argTypesData:f,argsData:m,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,P as R};
//# sourceMappingURL=rich_text_editor.stories-30d3668d.js.map