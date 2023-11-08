import{a as r}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as he,a as fe}from"./storybook_utils-cf049d2e.js";import{D as I,I as v,a as ye}from"./input-9e7bc2f6.js";import{D as be}from"./icon-afc75046.js";import{n as ve}from"./_plugin-vue2_normalizer-2bbd088e.js";const Ie={name:"InputDefault",components:{DtInput:I,DtIcon:be},data(){return{inputValue:"",inputLength:0}},computed:{validationMessage(){var e,s,n;const a=((n=(s=(e=this.$attrs)==null?void 0:e.validate)==null?void 0:s.length)==null?void 0:n.max)-this.inputLength;return a<0?`${Math.abs(a)} characters over limit`:`${a} characters left`},validationConfig(){var e,s,n,S,$;if(!((s=(e=this==null?void 0:this.$attrs)==null?void 0:e.validate)!=null&&s.length))return null;const a=JSON.parse(JSON.stringify(this.$attrs.validate));return a.length.message=($=(S=(n=this==null?void 0:this.$attrs)==null?void 0:n.validate)==null?void 0:S.length)!=null&&$.message?this.$attrs.validate.length.message:this.validationMessage,a}},watch:{value(a){this.inputValue=a}},methods:{updateLength(a){this.inputLength=a,this.$attrs.onUpdateLength(a)}}};var Se=function(){var e=this,s=e._self._c;return s("dt-input",{ref:"input",attrs:{type:e.$attrs.type,messages:e.$attrs.messages,size:e.$attrs.size,"icon-size":e.$attrs.iconSize,label:e.$attrs.label,"messages-child-props":e.$attrs.messagesChildProps,name:e.$attrs.name,disabled:e.$attrs.disabled,"show-messages":e.$attrs.showMessages,"messages-class":e.$attrs.messagesClass,placeholder:e.$attrs.placeholder,"input-class":e.$attrs.inputClass,"retain-warning":e.$attrs.retainWarning,"input-wrapper-class":e.$attrs.inputWrapperClass,"current-length":e.$attrs.currentLength,validate:e.validationConfig},on:{blur:e.$attrs.onBlur,input:e.$attrs.onInput,clear:e.$attrs.onClear,focus:e.$attrs.onFocus,focusin:e.$attrs.onFocusIn,focusout:e.$attrs.onFocusOut,"update:length":e.updateLength,"update:invalid":e.$attrs.onUpdateIsInvalid},model:{value:e.inputValue,callback:function(n){e.inputValue=n},expression:"inputValue"}},[e.$attrs.labelSlot?s("template",{slot:"labelSlot"},[s("span",{domProps:{innerHTML:e._s(e.$attrs.labelSlot)}})]):e._e(),e.$attrs.description?s("template",{slot:"description"},[s("span",{domProps:{innerHTML:e._s(e.$attrs.description)}})]):e._e(),e.$attrs.leftIcon?s("template",{slot:"leftIcon"},[s("dt-icon",{attrs:{name:e.$attrs.leftIcon}})],1):e._e(),e.$attrs.rightIcon?s("template",{slot:"rightIcon"},[s("dt-icon",{attrs:{name:e.$attrs.rightIcon}})],1):e._e()],2)},$e=[],me=ve(Ie,Se,$e,!1,null,null,null,null);const De=me.exports;me.exports.__docgenInfo={displayName:"InputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue"]};const D=fe(),de={type:I.props.type.default,size:v.DEFAULT,placeholder:"placeholder",label:"Label",iconSize:null,onBlur:r("blur"),onInput:r("input"),onClear:r("clear"),onFocus:r("focus"),onFocusIn:r("focusin"),onFocusOut:r("focusout"),onUpdateLength:r("update:length"),onUpdateIsInvalid:r("update:invalid")},ge={description:{description:"slot for description, defaults to description prop",table:{type:{summary:"VNode"}},control:{type:"text"}},leftIcon:{options:D,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightIcon:{options:D,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},labelSlot:{table:{type:{summary:"VNode"}},control:{type:"text"}},value:{control:"text"},type:{options:[null,...Object.values(ye)],control:{type:"select"},table:{defaultValue:{summary:I.props.type.default}}},messages:{control:"object"},size:{options:Object.values(v),control:{type:"select"},table:{defaultValue:{summary:v.DEFAULT}}},iconSize:{options:[null,...Object.values(v)],control:{type:"select"},table:{defaultValue:{summary:"null"}}},inputClass:{control:"text"},messagesChildProps:{control:null},label:{control:{type:"text"}},currentLength:{table:{defaultValue:{summary:"null"}}},validate:{table:{defaultValue:{summary:"null"}}},placeholder:{description:"HTML input placeholder attribute",table:{category:"html attributes"},control:"text"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onClear:{table:{disable:!0}},onFocus:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},onUpdateLength:{table:{disable:!0}},onUpdateIsInvalid:{table:{disable:!0}},blur:{description:"Native input blur event",table:{type:{summary:"event"}}},input:{description:"Native input event",table:{type:{summary:"event"}}},clear:{description:"Native input clear event",table:{type:{summary:"event"}}},focus:{description:"Native input focus event",table:{type:{summary:"event"}}},focusin:{description:"Native input focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native input focusout event",table:{type:{summary:"event"}}},"update:length":{description:"Length of the input when currentLength prop is not passed",table:{type:{summary:"event"}}},"update:invalid":{description:"Result of the input validation",table:{type:{summary:"event"}}}},Le=()=>({template:'<div style="width: 500px"><story /></div>'}),_e={title:"Components/Input",component:I,decorators:[Le],excludeStories:/.*Data$/,argTypes:ge,args:de},t={render:(a,{argTypes:e})=>he(a,e,De)},o={...t,args:{label:"Label",description:"Description"}},i={...t,args:{leftIcon:"send"}},l={...t,args:{rightIcon:"lock-filled"}},c={...t,args:{leftIcon:"send",rightIcon:"lock-filled"}},u={...t,args:{messages:[{message:"This is a warning message",type:"warning"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},p={...t,args:{messages:[{message:"This is an error message",type:"error"}]}},m={...t,args:{messages:[{message:"This is a success message",type:"success"}]}},d={...t,args:{messages:[{message:"This is the first message",type:"error"},{message:"This is the second message",type:"error"},{message:"This is the third message",type:"error"}]}},g={...t,args:{size:"xs"}},h={...t,args:{size:"sm"}},f={...t,args:{size:"lg"}},y={...t,args:{size:"xl"}},b={...t,args:{validate:{length:{description:"Max 25 characters.",max:25,warn:15,limitMaxLength:!1}}}};var L,_,x;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => {
    return createTemplateFromVueFile(args, argTypes, InputDefault);
  }
}`,...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var T,W,z;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(z=(W=o.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var V,F,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    leftIcon: 'send'
  }
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var M,C,w;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Default,
  args: {
    rightIcon: 'lock-filled'
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var E,O,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Default,
  args: {
    leftIcon: 'send',
    rightIcon: 'lock-filled'
  }
}`,...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var P,j,k;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var B,R,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is an error message',
      type: 'error'
    }]
  }
}`,...(H=(R=p.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var A,J,Y;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is a success message',
      type: 'success'
    }]
  }
}`,...(Y=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,q,G;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xs'
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'sm'
  }
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,re,ne;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'lg'
  }
}`,...(ne=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ie,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xl'
  }
}`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,pe;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const xe=["argsData","argTypesData","Default","WithDescription","WithLeftIcon","WithRightIcon","WithBothIcons","WithWarning","WithError","WithSuccess","WithMultipleMessages","ExtraSmall","Small","Large","ExtraLarge","WithLengthValidation"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ExtraLarge:y,ExtraSmall:g,Large:f,Small:h,WithBothIcons:c,WithDescription:o,WithError:p,WithLeftIcon:i,WithLengthValidation:b,WithMultipleMessages:d,WithRightIcon:l,WithSuccess:m,WithWarning:u,__namedExportsOrder:xe,argTypesData:ge,argsData:de,default:_e},Symbol.toStringTag,{value:"Module"}));export{t as D,g as E,Ne as I,f as L,h as S,o as W,i as a,l as b,c,u as d,p as e,m as f,b as g,y as h};
//# sourceMappingURL=input.stories-202e18b3.js.map
