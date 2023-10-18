import{a as r}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as S}from"./storybook_utils-7f880537.js";import{D as f,R as I,a as $}from"./rich_text_editor-49180350.js";import{u as F,o as k,b as R}from"./vue.esm-bundler-5f4c5b12.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const g={name:"DtRichTextEditorDefault",components:{DtRichTextEditor:f}};function V(e,s,n,L,B,U){const D=F("dt-rich-text-editor");return k(),R(D,{modelValue:e.$attrs.inputValue,"onUpdate:modelValue":s[0]||(s[0]=v=>e.$attrs.inputValue=v),editable:e.$attrs.editable,"input-aria-label":e.$attrs.inputAriaLabel,"input-class":e.$attrs.inputClass,"output-format":e.$attrs.outputFormat,"auto-focus":e.$attrs.autoFocus,placeholder:e.$attrs.placeholder,link:e.$attrs.link,"mention-suggestion":e.$attrs.mentionSuggestion,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onFocus:e.$attrs.onFocus},null,8,["modelValue","editable","input-aria-label","input-class","output-format","auto-focus","placeholder","link","mention-suggestion","onBlur","onInput","onFocus"])}const E=y(g,[["render",V],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]]);g.__docgenInfo={displayName:"DtRichTextEditorDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]};const O={items({query:e}){const s=[{contactId:"1",name:"Test",avatarSrc:"https://avatars.githubusercontent.com/u/13851061?s=460&u=1f1b5b0b5b2b2b2b2b2b2b2b2b2b2b2b2b2b2b&v=4"},{contactId:"2",name:"Test2",avatarSrc:"https://avatars.githubusercontent.com/u/13851061?s=460&u=1f1b5b0b5b2b2b2b2b2b2b2b2b2b2b2b2b2b2b&v=4"},{contactId:"3",name:"Test3",avatarSrc:"https://avatars.githubusercontent.com/u/13851061?s=460&u=1f1b5b0b5b2b2b2b2b2b2b2b2b2b2b2b2b2b2b&v=4"}];return e.length===0?[]:s.filter(n=>n.name.toLowerCase().startsWith(e.toLowerCase()))}},T={modelValue:"I’m not a standalone component, please use Message Input instead 🙏!",editable:!0,inputAriaLabel:"This is a descriptive label",outputFormat:"text",autoFocus:!1,placeholder:"Type here...",link:!0,onBlur:r("blur"),onInput:r("input"),onFocus:r("focus")},_={editable:{control:"boolean"},inputClass:{control:"text"},autoFocus:{control:"select",options:[...Object.values(I),!1,!0],table:{defaultValue:{summary:!1}}},outputFormat:{control:"select",options:Object.values($),table:{defaultValue:{summary:"text"}}},modelValue:{control:"text"},link:{control:"boolean"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onFocus:{table:{disable:!0}}},C={title:"Components/Rich Text Editor",component:f,argTypes:_,args:T,excludeStories:/.*Data$/},w=e=>S(e,E),t={render:w},o={...t,args:{link:!0,modelValue:"The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!"}},a={...t,args:{modelValue:"The editor can also suggest mentions: @John Doe, @Jane Doe!",mentionSuggestion:O}};var u,l,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Default,
  args: {
    link: true,
    modelValue: 'The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, ' + 'IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,m,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Default,
  args: {
    modelValue: 'The editor can also suggest mentions: @John Doe, @Jane Doe!',
    mentionSuggestion
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const x=["argsData","argTypesData","Default","WithLinks","WithMentionSuggestions"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithLinks:o,WithMentionSuggestions:a,__namedExportsOrder:x,argTypesData:_,argsData:T,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,J as R,a as W};
//# sourceMappingURL=rich_text_editor.stories-d5864af7.js.map
