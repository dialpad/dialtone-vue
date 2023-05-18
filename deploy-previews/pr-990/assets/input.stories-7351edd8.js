import{a}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as $e,c as De}from"./storybook_utils-7e0be7f9.js";import{D as $,I as S,a as Le}from"./input-241f14eb.js";import{D as Te}from"./icon-7ed6ee34.js";import{a as T,o as Ve,b as We,z as Fe,w as I,g as V,d as W}from"./vue.esm-bundler-15aa0fd7.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";const ye={name:"InputDefault",components:{DtInput:$,DtIcon:Te},inheritAttrs:!1,data(){return{inputValue:"",inputLength:0}},computed:{validationMessage(){var t,n;const e=((n=(t=this.$attrs.validate)==null?void 0:t.length)==null?void 0:n.max)-this.inputLength;return e<0?`${Math.abs(e)} characters over limit`:`${e} characters left`},validationConfig(){var t,n,D,r,o;if(!((n=(t=this==null?void 0:this.$attrs)==null?void 0:t.validate)!=null&&n.length))return null;const e=JSON.parse(JSON.stringify(this.$attrs.validate));return e.length.message=(o=(r=(D=this==null?void 0:this.$attrs)==null?void 0:D.validate)==null?void 0:r.length)!=null&&o.message?this.$attrs.validate.length.message:this.validationMessage,e}},watch:{modelValue(e){this.inputValue=e}},methods:{updateLength(e){this.inputLength=e,this.$attrs.onUpdateLength(e)}}},ze=["innerHTML"],Ne=["innerHTML"];function Ce(e,t,n,D,r,o){const L=T("dt-icon"),Ie=T("dt-input");return Ve(),We(Ie,{ref:"input",modelValue:r.inputValue,"onUpdate:modelValue":t[0]||(t[0]=Se=>r.inputValue=Se),type:e.$attrs.type,messages:e.$attrs.messages,size:e.$attrs.size,"icon-size":e.$attrs.iconSize,label:e.$attrs.label,"messages-child-props":e.$attrs.messagesChildProps,name:e.$attrs.name,disabled:e.$attrs.disabled,"show-messages":e.$attrs.showMessages,"messages-class":e.$attrs.messagesClass,placeholder:e.$attrs.placeholder,"input-class":e.$attrs.inputClass,"retain-warning":e.$attrs.retainWarning,"input-wrapper-class":e.$attrs.inputWrapperClass,"current-length":e.$attrs.currentLength,validate:o.validationConfig,onBlur:e.$attrs.onBlur,onInput:e.$attrs.onInput,onClear:e.$attrs.onClear,onFocus:e.$attrs.onFocus,onFocusin:e.$attrs.onFocusIn,onFocusout:e.$attrs.onFocusOut,"onUpdate:length":o.updateLength,"onUpdate:invalid":e.$attrs.onUpdateIsInvalid},Fe({_:2},[e.$attrs.labelSlot?{name:"labelSlot",fn:I(()=>[V("span",{innerHTML:e.$attrs.labelSlot},null,8,ze)]),key:"0"}:void 0,e.$attrs.description?{name:"description",fn:I(()=>[V("span",{innerHTML:e.$attrs.description},null,8,Ne)]),key:"1"}:void 0,e.$attrs.leftIcon?{name:"leftIcon",fn:I(()=>[W(L,{name:e.$attrs.leftIcon},null,8,["name"])]),key:"2"}:void 0,e.$attrs.rightIcon?{name:"rightIcon",fn:I(()=>[W(L,{name:e.$attrs.rightIcon},null,8,["name"])]),key:"3"}:void 0]),1032,["modelValue","type","messages","size","icon-size","label","messages-child-props","name","disabled","show-messages","messages-class","placeholder","input-class","retain-warning","input-wrapper-class","current-length","validate","onBlur","onInput","onClear","onFocus","onFocusin","onFocusout","onUpdate:length","onUpdate:invalid"])}const Me=we(ye,[["render",Ce],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue"]]);ye.__docgenInfo={displayName:"InputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue"]};const F=$e(),be={type:$.props.type.default,size:S.DEFAULT,placeholder:"placeholder",label:"Label",iconSize:null,onBlur:a("blur"),onInput:a("input"),onClear:a("clear"),onFocus:a("focus"),onFocusIn:a("focusin"),onFocusOut:a("focusout"),onUpdateLength:a("update:length"),onUpdateIsInvalid:a("update:invalid")},ve={description:{description:"slot for description, defaults to description prop",table:{type:{summary:"VNode"}},control:{type:"text"}},leftIcon:{options:F,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightIcon:{options:F,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},labelSlot:{table:{type:{summary:"VNode"}},control:{type:"text"}},modelValue:{control:"text"},type:{control:"select",options:[null,...Object.values(Le)],table:{defaultValue:{summary:$.props.type.default}}},messages:{control:"object"},size:{control:"select",options:Object.values(S),table:{defaultValue:{summary:S.DEFAULT}}},iconSize:{options:[null,...Object.values(S)],control:{type:"select"},table:{defaultValue:{summary:"null"}}},inputClass:{control:"text"},messagesChildProps:{control:null},label:{control:{type:"text"}},currentLength:{table:{defaultValue:{summary:"null"}}},validate:{table:{defaultValue:{summary:"null"}}},placeholder:{description:"HTML input placeholder attribute",table:{category:"html attributes"},control:"text"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onClear:{table:{disable:!0}},onFocus:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},onUpdateLength:{table:{disable:!0}},onUpdateIsInvalid:{table:{disable:!0}},blur:{description:"Native input blur event",table:{type:{summary:"event"}}},input:{description:"Native input event",table:{type:{summary:"event"}}},clear:{description:"Native input clear event",table:{type:{summary:"event"}}},focus:{description:"Native input focus event",table:{type:{summary:"event"}}},focusin:{description:"Native input focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native input focusout event",table:{type:{summary:"event"}}},"update:length":{description:"Length of the input when currentLength prop is not passed",table:{type:{summary:"event"}}},"update:invalid":{description:"Result of the input validation",table:{type:{summary:"event"}}},"update:modelValue":{table:{disable:!0}}},Ue=()=>({template:'<div style="width: 500px"><story /></div>'}),ke={title:"Components/Input",component:$,decorators:[Ue],excludeStories:/.*Data$/,argTypes:ve,args:be},s={render:e=>De(e,Me)},i={...s,args:{label:"Label",description:"Description"}},l={...s,args:{leftIcon:"send"}},c={...s,args:{rightIcon:"lock-filled"}},u={...s,args:{leftIcon:"send",rightIcon:"lock-filled"},parameters:{a11y:{config:{rules:[{id:"duplicate-id",enabled:!1}]}}}},p={...s,args:{messages:[{message:"This is a warning message",type:"warning"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},d={...s,args:{messages:[{message:"This is an error message",type:"error"}]}},m={...s,args:{messages:[{message:"This is a success message",type:"success"}]}},g={...s,args:{messages:[{message:"This is the first message",type:"error"},{message:"This is the second message",type:"error"},{message:"This is the third message",type:"error"}]}},h={...s,args:{size:"xs"}},f={...s,args:{size:"sm"}},y={...s,args:{size:"lg"}},b={...s,args:{size:"xl"}},v={...s,args:{validate:{length:{description:"Max 25 characters.",max:25,warn:15,limitMaxLength:!1}}}};var w,z,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return createTemplateFromVueFile(args, InputDefault);
  }
}`,...(N=(z=s.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var C,M,U;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(U=(M=i.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var k,E,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Default,
  args: {
    leftIcon: 'send'
  }
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var B,j,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Default,
  args: {
    rightIcon: 'lock-filled'
  }
}`,...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var H,A,R;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Default,
  args: {
    leftIcon: 'send',
    rightIcon: 'lock-filled'
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'duplicate-id',
          enabled: false
        }]
      }
    }
  }
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,J,Y;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is a warning message',
      type: 'warning'
    }]
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...(Y=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,q,G;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is an error message',
      type: 'error'
    }]
  }
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is a success message',
      type: 'success'
    }]
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var x,ee,se;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is the first message',
      type: 'error'
    }, {
      message: 'This is the second message',
      type: 'error'
    }, {
      message: 'This is the third message',
      type: 'error'
    }]
  }
}`,...(se=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ae,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xs'
  }
}`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'sm'
  }
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'lg'
  }
}`,...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,de,me;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xl'
  }
}`,...(me=(de=b.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,he,fe;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...Default,
  args: {
    validate: {
      length: {
        description: 'Max 25 characters.',
        max: 25,
        warn: 15,
        limitMaxLength: false
      }
    }
  }
}`,...(fe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};const Ee=["argsData","argTypesData","Default","WithDescription","WithLeftIcon","WithRightIcon","WithBothIcons","WithWarning","WithError","WithSuccess","WithMultipleMessages","ExtraSmall","Small","Large","ExtraLarge","WithLengthValidation"],Re=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ExtraLarge:b,ExtraSmall:h,Large:y,Small:f,WithBothIcons:u,WithDescription:i,WithError:d,WithLeftIcon:l,WithLengthValidation:v,WithMultipleMessages:g,WithRightIcon:c,WithSuccess:m,WithWarning:p,__namedExportsOrder:Ee,argTypesData:ve,argsData:be,default:ke},Symbol.toStringTag,{value:"Module"}));export{s as D,h as E,Re as I,y as L,f as S,i as W,l as a,c as b,u as c,p as d,d as e,m as f,v as g,b as h};
//# sourceMappingURL=input.stories-7351edd8.js.map
