import{a}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as h}from"./storybook_utils-3dddf937.js";import{D as p,R as T,a as D}from"./rich_text_editor-6d7dba5b.js";import{a as g,o as F,b as k}from"./vue.esm-bundler-8de31a68.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const c={name:"DtRichTextEditorDefault",components:{DtRichTextEditor:p}};function R(e,r,x,O,S,w){const b=g("dt-rich-text-editor");return F(),k(b,{modelValue:e.inputValue,"onUpdate:modelValue":r[0]||(r[0]=_=>e.inputValue=_),editable:e.editable,"input-aria-label":e.inputAriaLabel,"input-class":e.inputClass,"output-format":e.outputFormat,"auto-focus":e.autoFocus,placeholder:e.placeholder,link:e.link,onBlur:e.onBlur,onInput:e.onInput,onFocus:e.onFocus},null,8,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","placeholder","link","onBlur","onInput","onFocus"])}const I=y(c,[["render",R],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]]);c.__docgenInfo={displayName:"DtRichTextEditorDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]};const m={modelValue:"I’m not a standalone component, please use Message Input instead 🙏!",editable:!0,inputAriaLabel:"This is a descriptive label",outputFormat:"text",autoFocus:!1,placeholder:"Type here...",link:!0,onBlur:a("blur"),onInput:a("input"),onFocus:a("focus")},f={editable:{control:"boolean"},inputClass:{control:"text"},autoFocus:{control:"select",options:[...Object.values(T),!1,!0],table:{defaultValue:{summary:!1}}},outputFormat:{control:"select",options:Object.values(D),table:{defaultValue:{summary:"text"}}},modelValue:{control:"text"},link:{control:"boolean"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onFocus:{table:{disable:!0}}},v={title:"Components/Rich Text Editor",component:p,argTypes:f,args:m,excludeStories:/.*Data$/},E=e=>h(e,I),t={render:E},o={...t,args:{link:!0,modelValue:"The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!"}};var l,n,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var u,i,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Default,
  args: {
    link: true,
    modelValue: 'The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, ' + 'IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const V=["argsData","argTypesData","Default","WithLinks"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithLinks:o,__namedExportsOrder:V,argTypesData:f,argsData:m,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,$ as R};
//# sourceMappingURL=rich_text_editor.stories-4a15c021.js.map
