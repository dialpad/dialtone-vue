import{a}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as _}from"./storybook_utils-d0fbf3aa.js";import{D as c,R as D,a as g}from"./rich_text_editor-fa29ec83.js";import{a as F,o as R,b as k}from"./vue.esm-bundler-66d1e5de.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const m={name:"DtRichTextEditorDefault",components:{DtRichTextEditor:c},data(){return{inputValue:this.modelValue}},watch:{value(e){this.inputValue=e}}};function y(e,r,O,S,s,w){const h=F("dt-rich-text-editor");return R(),k(h,{value:s.inputValue,"onUpdate:value":r[0]||(r[0]=T=>s.inputValue=T),editable:e.editable,"input-aria-label":e.inputAriaLabel,"input-class":e.inputClass,"output-format":e.outputFormat,"auto-focus":e.autoFocus,placeholder:e.placeholder,link:e.link,onBlur:e.onBlur,onInput:e.onInput,onFocus:e.onFocus},null,8,["value","editable","input-aria-label","input-class","output-format","auto-focus","placeholder","link","onBlur","onInput","onFocus"])}const I=v(m,[["render",y]]);m.__docgenInfo={displayName:"DtRichTextEditorDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/rich_text_editor/rich_text_editor_default.story.vue"]};const b={modelValue:"I’m not a standalone component, please use Message Input instead 🙏!",editable:!0,inputAriaLabel:"This is a descriptive label",outputFormat:"text",autoFocus:!1,placeholder:"Type here...",link:!0,onBlur:a("blur"),onInput:a("input"),onFocus:a("focus")},f={editable:{control:"boolean"},inputClass:{control:"text"},autoFocus:{control:"select",options:[...Object.values(D),!1,!0],table:{defaultValue:{summary:!1}}},outputFormat:{control:"select",options:Object.values(g),table:{defaultValue:{summary:"text"}}},modelValue:{control:"text"},link:{control:"boolean"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onFocus:{table:{disable:!0}}},E={title:"Components/Rich Text Editor",component:c,argTypes:f,args:b,excludeStories:/.*Data$/},V=e=>_(e,I),t={render:V},o={...t,args:{link:!0,modelValue:"The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!"}};var l,n,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var i,p,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Default,
  args: {
    link: true,
    modelValue: 'The editor can autolink URLs: dialpad.com, https://www.dialpad.com/about-us/, ' + 'IP addresses: 192.158.1.38, email addresses: noreply@dialpad.com and phone numbers: (778) 765-8813, +17787658813!'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["argsData","argTypesData","Default","WithLinks"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithLinks:o,__namedExportsOrder:x,argTypesData:f,argsData:b,default:E},Symbol.toStringTag,{value:"Module"}));export{t as D,j as R};
//# sourceMappingURL=rich_text_editor.stories-7d16d48b.js.map