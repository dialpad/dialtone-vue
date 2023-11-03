import{a as r}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as fe,a as ye}from"./storybook_utils-996a989f.js";import{D as I,I as v,a as be}from"./input-bc2979d9.js";import{D as ve}from"./icon-8aafe488.js";import{n as Ie}from"./_plugin-vue2_normalizer-2bbd088e.js";const Se={name:"InputDefault",components:{DtInput:I,DtIcon:ve},data(){return{inputValue:"",inputLength:0}},computed:{validationMessage(){var e,s,n;const a=((n=(s=(e=this.$attrs)==null?void 0:e.validate)==null?void 0:s.length)==null?void 0:n.max)-this.inputLength;return a<0?`${Math.abs(a)} characters over limit`:`${a} characters left`},validationConfig(){var e,s,n,$,D;if(!((s=(e=this==null?void 0:this.$attrs)==null?void 0:e.validate)!=null&&s.length))return null;const a=JSON.parse(JSON.stringify(this.$attrs.validate));return a.length.message=(D=($=(n=this==null?void 0:this.$attrs)==null?void 0:n.validate)==null?void 0:$.length)!=null&&D.message?this.$attrs.validate.length.message:this.validationMessage,a}},watch:{value(a){this.inputValue=a}},methods:{updateLength(a){this.inputLength=a,this.$attrs.onUpdateLength(a)}}};var me=function(){var e=this,s=e._self._c;return s("dt-input",{ref:"input",attrs:{type:e.$attrs.type,messages:e.$attrs.messages,size:e.$attrs.size,"icon-size":e.$attrs.iconSize,label:e.$attrs.label,"messages-child-props":e.$attrs.messagesChildProps,name:e.$attrs.name,disabled:e.$attrs.disabled,"show-messages":e.$attrs.showMessages,"messages-class":e.$attrs.messagesClass,placeholder:e.$attrs.placeholder,"input-class":e.$attrs.inputClass,"retain-warning":e.$attrs.retainWarning,"input-wrapper-class":e.$attrs.inputWrapperClass,"current-length":e.$attrs.currentLength,validate:e.validationConfig},on:{blur:e.$attrs.onBlur,input:e.$attrs.onInput,clear:e.$attrs.onClear,focus:e.$attrs.onFocus,focusin:e.$attrs.onFocusIn,focusout:e.$attrs.onFocusOut,"update:length":e.updateLength,"update:invalid":e.$attrs.onUpdateIsInvalid},model:{value:e.inputValue,callback:function(n){e.inputValue=n},expression:"inputValue"}},[e.$attrs.labelSlot?s("template",{slot:"labelSlot"},[s("span",{domProps:{innerHTML:e._s(e.$attrs.labelSlot)}})]):e._e(),e.$attrs.description?s("template",{slot:"description"},[s("span",{domProps:{innerHTML:e._s(e.$attrs.description)}})]):e._e(),e.$attrs.leftIcon?s("template",{slot:"leftIcon"},[s("dt-icon",{attrs:{name:e.$attrs.leftIcon}})],1):e._e(),e.$attrs.rightIcon?s("template",{slot:"rightIcon"},[s("dt-icon",{attrs:{name:e.$attrs.rightIcon}})],1):e._e()],2)},$e=[];me._withStripped=!0;var S=Ie(Se,me,$e,!1,null,null,null,null);S.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue";const De=S.exports;S.exports.__docgenInfo={displayName:"InputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue"]};const _=ye(),ge={type:I.props.type.default,size:v.DEFAULT,placeholder:"placeholder",label:"Label",iconSize:null,onBlur:r("blur"),onInput:r("input"),onClear:r("clear"),onFocus:r("focus"),onFocusIn:r("focusin"),onFocusOut:r("focusout"),onUpdateLength:r("update:length"),onUpdateIsInvalid:r("update:invalid")},he={description:{description:"slot for description, defaults to description prop",table:{type:{summary:"VNode"}},control:{type:"text"}},leftIcon:{options:_,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightIcon:{options:_,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},labelSlot:{table:{type:{summary:"VNode"}},control:{type:"text"}},value:{control:"text"},type:{options:[null,...Object.values(be)],control:{type:"select"},table:{defaultValue:{summary:I.props.type.default}}},messages:{control:"object"},size:{options:Object.values(v),control:{type:"select"},table:{defaultValue:{summary:v.DEFAULT}}},iconSize:{options:[null,...Object.values(v)],control:{type:"select"},table:{defaultValue:{summary:"null"}}},inputClass:{control:"text"},messagesChildProps:{control:null},label:{control:{type:"text"}},currentLength:{table:{defaultValue:{summary:"null"}}},validate:{table:{defaultValue:{summary:"null"}}},placeholder:{description:"HTML input placeholder attribute",table:{category:"html attributes"},control:"text"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onClear:{table:{disable:!0}},onFocus:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},onUpdateLength:{table:{disable:!0}},onUpdateIsInvalid:{table:{disable:!0}},blur:{description:"Native input blur event",table:{type:{summary:"event"}}},input:{description:"Native input event",table:{type:{summary:"event"}}},clear:{description:"Native input clear event",table:{type:{summary:"event"}}},focus:{description:"Native input focus event",table:{type:{summary:"event"}}},focusin:{description:"Native input focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native input focusout event",table:{type:{summary:"event"}}},"update:length":{description:"Length of the input when currentLength prop is not passed",table:{type:{summary:"event"}}},"update:invalid":{description:"Result of the input validation",table:{type:{summary:"event"}}}},_e=()=>({template:'<div style="width: 500px"><story /></div>'}),Le={title:"Components/Input",component:I,decorators:[_e],excludeStories:/.*Data$/,argTypes:he,args:ge},t={render:(a,{argTypes:e})=>fe(a,e,De)},o={...t,args:{label:"Label",description:"Description"}},i={...t,args:{leftIcon:"send"}},l={...t,args:{rightIcon:"lock-filled"}},c={...t,args:{leftIcon:"send",rightIcon:"lock-filled"},parameters:{a11y:{config:{rules:[{id:"duplicate-id",enabled:!1}]}}}},u={...t,args:{messages:[{message:"This is a warning message",type:"warning"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},p={...t,args:{messages:[{message:"This is an error message",type:"error"}]}},d={...t,args:{messages:[{message:"This is a success message",type:"success"}]}},m={...t,args:{messages:[{message:"This is the first message",type:"error"},{message:"This is the second message",type:"error"},{message:"This is the third message",type:"error"}]}},g={...t,args:{size:"xs"}},h={...t,args:{size:"sm"}},f={...t,args:{size:"lg"}},y={...t,args:{size:"xl"}},b={...t,args:{validate:{length:{description:"Max 25 characters.",max:25,warn:15,limitMaxLength:!1}}}};var L,x,T;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => {
    return createTemplateFromVueFile(args, argTypes, InputDefault);
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var W,z,V;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(V=(z=o.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var F,N,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  args: {
    leftIcon: 'send'
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var M,C,E;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Default,
  args: {
    rightIcon: 'lock-filled'
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,U,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(U=c.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var k,j,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var R,H,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is an error message',
      type: 'error'
    }]
  }
}`,...(A=(H=p.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var J,Y,Z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is a success message',
      type: 'success'
    }]
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var q,G,K;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xs'
  }
}`,...(ee=(X=g.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,se,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'sm'
  }
}`,...(ae=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,ne,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'lg'
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,le,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xl'
  }
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,pe,de;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const xe=["argsData","argTypesData","Default","WithDescription","WithLeftIcon","WithRightIcon","WithBothIcons","WithWarning","WithError","WithSuccess","WithMultipleMessages","ExtraSmall","Small","Large","ExtraLarge","WithLengthValidation"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ExtraLarge:y,ExtraSmall:g,Large:f,Small:h,WithBothIcons:c,WithDescription:o,WithError:p,WithLeftIcon:i,WithLengthValidation:b,WithMultipleMessages:m,WithRightIcon:l,WithSuccess:d,WithWarning:u,__namedExportsOrder:xe,argTypesData:he,argsData:ge,default:Le},Symbol.toStringTag,{value:"Module"}));export{t as D,g as E,Ne as I,f as L,h as S,o as W,i as a,l as b,c,u as d,p as e,d as f,b as g,y as h};
//# sourceMappingURL=input.stories-0cb2579a.js.map
