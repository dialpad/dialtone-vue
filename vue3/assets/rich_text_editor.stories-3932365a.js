import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as h}from"./storybook_utils-30cbb8fe.js";import{D as p,R as _,a as D}from"./rich_text_editor-be989c17.js";import{k as $,o as g,v as F}from"./vue.esm-bundler-2337cf2c.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const c={name:"DtRichTextEditorDefault",components:{DtRichTextEditor:p}};function R(e,r,v,O,S,x){const b=$("dt-rich-text-editor");return g(),F(b,{modelValue:e.$attrs.inputValue,"onUpdate:modelValue":r[0]||(r[0]=T=>e.$attrs.inputValue=T),editable:e.$attrs.editable,"input-aria-label":e.$attrs.inputAriaLabel,"input-class":e.$attrs.inputClass,"output-format":e.$attrs.outputFormat,"auto-focus":e.$attrs.autoFocus,placeholder:e.$attrs.placeholder,link:e.$attrs.link,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onFocus:e.$attrs.onFocus},null,8,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","placeholder","link","onBlur","onInput","onFocus"])}const y=k(c,[["render",R]]);c.__docgenInfo={displayName:"DtRichTextEditorDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]};const m={modelValue:"I’m not a standalone component, please use Message Input instead 🙏!",editable:!0,inputAriaLabel:"This is a descriptive label",outputFormat:"text",autoFocus:!1,placeholder:"Type here...",link:!0,onBlur:a("blur"),onInput:a("input"),onFocus:a("focus")},f={editable:{control:"boolean"},inputClass:{control:"text"},autoFocus:{control:"select",options:[...Object.values(_),!1,!0],table:{defaultValue:{summary:!1}}},outputFormat:{control:"select",options:Object.values(D),table:{defaultValue:{summary:"text"}}},modelValue:{control:"text"},link:{control:"boolean"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onFocus:{table:{disable:!0}}},I={title:"Components/Rich Text Editor",component:p,argTypes:f,args:m,excludeStories:/.*Data$/},E=e=>h(e,y),t={render:E},o={...t,args:{link:!0,modelValue:"The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!"}};var s,l,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var u,i,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    link: true,
    modelValue: 'The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, ' + 'IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const V=["argsData","argTypesData","Default","WithLinks"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithLinks:o,__namedExportsOrder:V,argTypesData:f,argsData:m,default:I},Symbol.toStringTag,{value:"Module"}));export{t as D,P as R};
//# sourceMappingURL=rich_text_editor.stories-3932365a.js.map
