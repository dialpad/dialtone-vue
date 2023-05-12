import{a as r}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as de,c as ge}from"./storybook_utils-720f34d4.js";import{D as I,I as v,a as he}from"./input-94ff8d9c.js";import{D as fe}from"./icon-6c9f8737.js";import{n as ye}from"./_plugin-vue2_normalizer-2bbd088e.js";const be={name:"InputDefault",components:{DtInput:I,DtIcon:fe},data(){return{inputValue:"",inputLength:0}},computed:{validationMessage(){var e,t;const a=((t=(e=this.validate)==null?void 0:e.length)==null?void 0:t.max)-this.inputLength;return a<0?`${Math.abs(a)} characters over limit`:`${a} characters left`},validationConfig(){var e,t,b;if(!((e=this==null?void 0:this.validate)!=null&&e.length))return null;const a=JSON.parse(JSON.stringify(this.validate));return a.length.message=(b=(t=this==null?void 0:this.validate)==null?void 0:t.length)!=null&&b.message?this.validate.length.message:this.validationMessage,a}},watch:{value(a){this.inputValue=a}},methods:{updateLength(a){this.inputLength=a,this.onUpdateLength(a)}}};var ve=function(){var e=this,t=e._self._c;return t("dt-input",{ref:"input",attrs:{type:e.type,messages:e.messages,size:e.size,"icon-size":e.iconSize,label:e.label,"messages-child-props":e.messagesChildProps,name:e.name,disabled:e.disabled,"show-messages":e.showMessages,"messages-class":e.messagesClass,placeholder:e.placeholder,"input-class":e.inputClass,"retain-warning":e.retainWarning,"input-wrapper-class":e.inputWrapperClass,"current-length":e.currentLength,validate:e.validationConfig},on:{blur:e.onBlur,input:e.onInput,clear:e.onClear,focus:e.onFocus,focusin:e.onFocusIn,focusout:e.onFocusOut,"update:length":e.updateLength,"update:invalid":e.onUpdateIsInvalid},model:{value:e.inputValue,callback:function(b){e.inputValue=b},expression:"inputValue"}},[e.labelSlot?t("template",{slot:"labelSlot"},[t("span",{domProps:{innerHTML:e._s(e.labelSlot)}})]):e._e(),e.description?t("template",{slot:"description"},[t("span",{domProps:{innerHTML:e._s(e.description)}})]):e._e(),e.leftIcon?t("template",{slot:"leftIcon"},[t("dt-icon",{attrs:{name:e.leftIcon}})],1):e._e(),e.rightIcon?t("template",{slot:"rightIcon"},[t("dt-icon",{attrs:{name:e.rightIcon}})],1):e._e()],2)},Ie=[],ue=ye(be,ve,Ie,!1,null,null,null,null);const Se=ue.exports;ue.exports.__docgenInfo={displayName:"InputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue"]};const S=de(),pe={type:I.props.type.default,size:v.DEFAULT,placeholder:"placeholder",label:"Label",iconSize:null,onBlur:r("blur"),onInput:r("input"),onClear:r("clear"),onFocus:r("focus"),onFocusIn:r("focusin"),onFocusOut:r("focusout"),onUpdateLength:r("update:length"),onUpdateIsInvalid:r("update:invalid")},me={description:{description:"slot for description, defaults to description prop",table:{type:{summary:"VNode"}},control:{type:"text"}},leftIcon:{options:S,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightIcon:{options:S,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},labelSlot:{table:{type:{summary:"VNode"}},control:{type:"text"}},value:{control:"text"},type:{options:[null,...Object.values(he)],control:{type:"select"},table:{defaultValue:{summary:I.props.type.default}}},messages:{control:"object"},size:{options:Object.values(v),control:{type:"select"},table:{defaultValue:{summary:v.DEFAULT}}},iconSize:{options:[null,...Object.values(v)],control:{type:"select"},table:{defaultValue:{summary:"null"}}},inputClass:{control:"text"},messagesChildProps:{control:null},label:{control:{type:"text"}},currentLength:{table:{defaultValue:{summary:"null"}}},validate:{table:{defaultValue:{summary:"null"}}},placeholder:{description:"HTML input placeholder attribute",table:{category:"html attributes"},control:"text"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onClear:{table:{disable:!0}},onFocus:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},onUpdateLength:{table:{disable:!0}},onUpdateIsInvalid:{table:{disable:!0}},blur:{description:"Native input blur event",table:{type:{summary:"event"}}},input:{description:"Native input event",table:{type:{summary:"event"}}},clear:{description:"Native input clear event",table:{type:{summary:"event"}}},focus:{description:"Native input focus event",table:{type:{summary:"event"}}},focusin:{description:"Native input focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native input focusout event",table:{type:{summary:"event"}}},"update:length":{description:"Length of the input when currentLength prop is not passed",table:{type:{summary:"event"}}},"update:invalid":{description:"Result of the input validation",table:{type:{summary:"event"}}}},De=()=>({template:'<div style="width: 500px"><story /></div>'}),Le={title:"Components/Input",component:I,decorators:[De],excludeStories:/.*Data$/,argTypes:me,args:pe},s={render:(a,{argTypes:e})=>ge(a,e,Se)},n={...s,args:{label:"Label",description:"Description"}},o={...s,args:{leftIcon:"send"}},i={...s,args:{rightIcon:"lock-filled"}},l={...s,args:{leftIcon:"send",rightIcon:"lock-filled"},parameters:{a11y:{config:{rules:[{id:"duplicate-id",enabled:!1}]}}}},c={...s,args:{messages:[{message:"This is a warning message",type:"warning"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},u={...s,args:{messages:[{message:"This is an error message",type:"error"}]}},p={...s,args:{messages:[{message:"This is a success message",type:"success"}]}},m={...s,args:{messages:[{message:"This is the first message",type:"error"},{message:"This is the second message",type:"error"},{message:"This is the third message",type:"error"}]}},d={...s,args:{size:"xs"}},g={...s,args:{size:"sm"}},h={...s,args:{size:"lg"}},f={...s,args:{size:"xl"}},y={...s,args:{validate:{length:{description:"Max 25 characters.",max:25,warn:15,limitMaxLength:!1}}}};var D,L,_;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => {
    return createTemplateFromVueFile(args, argTypes, InputDefault);
  }
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var x,T,W;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(W=(T=n.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var z,V,F;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Default,
  args: {
    leftIcon: 'send'
  }
}`,...(F=(V=o.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var N,M,C;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  args: {
    rightIcon: 'lock-filled'
  }
}`,...(C=(M=i.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var w,E,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var U,P,j;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var k,B,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is an error message',
      type: 'error'
    }]
  }
}`,...(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,A,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is a success message',
      type: 'success'
    }]
  }
}`,...(J=(A=p.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var $,Y,Z;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var q,G,K;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xs'
  }
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'sm'
  }
}`,...(ee=(X=g.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var se,te,ae;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'lg'
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xl'
  }
}`,...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,le,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const _e=["argsData","argTypesData","Default","WithDescription","WithLeftIcon","WithRightIcon","WithBothIcons","WithWarning","WithError","WithSuccess","WithMultipleMessages","ExtraSmall","Small","Large","ExtraLarge","WithLengthValidation"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ExtraLarge:f,ExtraSmall:d,Large:h,Small:g,WithBothIcons:l,WithDescription:n,WithError:u,WithLeftIcon:o,WithLengthValidation:y,WithMultipleMessages:m,WithRightIcon:i,WithSuccess:p,WithWarning:c,__namedExportsOrder:_e,argTypesData:me,argsData:pe,default:Le},Symbol.toStringTag,{value:"Module"}));export{s as D,d as E,Fe as I,h as L,g as S,n as W,o as a,i as b,l as c,c as d,u as e,p as f,y as g,f as h};
//# sourceMappingURL=input.stories-5aa03b71.js.map
