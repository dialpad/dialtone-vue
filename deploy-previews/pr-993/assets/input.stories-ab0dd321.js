import{a as r}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as ge,c as he}from"./storybook_utils-605a9b8f.js";import{D as I,I as v,a as fe}from"./input-14768f9c.js";import{D as ye}from"./icon-c7116d11.js";import{n as be}from"./_plugin-vue2_normalizer-2bbd088e.js";const ve={name:"InputDefault",components:{DtInput:I,DtIcon:ye},data(){return{inputValue:"",inputLength:0}},computed:{validationMessage(){var e,t;const a=((t=(e=this.validate)==null?void 0:e.length)==null?void 0:t.max)-this.inputLength;return a<0?`${Math.abs(a)} characters over limit`:`${a} characters left`},validationConfig(){var e,t,b;if(!((e=this==null?void 0:this.validate)!=null&&e.length))return null;const a=JSON.parse(JSON.stringify(this.validate));return a.length.message=(b=(t=this==null?void 0:this.validate)==null?void 0:t.length)!=null&&b.message?this.validate.length.message:this.validationMessage,a}},watch:{value(a){this.inputValue=a}},methods:{updateLength(a){this.inputLength=a,this.onUpdateLength(a)}}};var pe=function(){var e=this,t=e._self._c;return t("dt-input",{ref:"input",attrs:{type:e.type,messages:e.messages,size:e.size,"icon-size":e.iconSize,label:e.label,"messages-child-props":e.messagesChildProps,name:e.name,disabled:e.disabled,"show-messages":e.showMessages,"messages-class":e.messagesClass,placeholder:e.placeholder,"input-class":e.inputClass,"retain-warning":e.retainWarning,"input-wrapper-class":e.inputWrapperClass,"current-length":e.currentLength,validate:e.validationConfig},on:{blur:e.onBlur,input:e.onInput,clear:e.onClear,focus:e.onFocus,focusin:e.onFocusIn,focusout:e.onFocusOut,"update:length":e.updateLength,"update:invalid":e.onUpdateIsInvalid},model:{value:e.inputValue,callback:function(b){e.inputValue=b},expression:"inputValue"}},[e.labelSlot?t("template",{slot:"labelSlot"},[t("span",{domProps:{innerHTML:e._s(e.labelSlot)}})]):e._e(),e.description?t("template",{slot:"description"},[t("span",{domProps:{innerHTML:e._s(e.description)}})]):e._e(),e.leftIcon?t("template",{slot:"leftIcon"},[t("dt-icon",{attrs:{name:e.leftIcon}})],1):e._e(),e.rightIcon?t("template",{slot:"rightIcon"},[t("dt-icon",{attrs:{name:e.rightIcon}})],1):e._e()],2)},Ie=[];pe._withStripped=!0;var S=be(ve,pe,Ie,!1,null,null,null,null);S.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue";const Se=S.exports;S.exports.__docgenInfo={displayName:"InputDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/input/input_default.story.vue"]};const D=ge(),de={type:I.props.type.default,size:v.DEFAULT,placeholder:"placeholder",label:"Label",iconSize:null,onBlur:r("blur"),onInput:r("input"),onClear:r("clear"),onFocus:r("focus"),onFocusIn:r("focusin"),onFocusOut:r("focusout"),onUpdateLength:r("update:length"),onUpdateIsInvalid:r("update:invalid")},me={description:{description:"slot for description, defaults to description prop",table:{type:{summary:"VNode"}},control:{type:"text"}},leftIcon:{options:D,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},rightIcon:{options:D,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},labelSlot:{table:{type:{summary:"VNode"}},control:{type:"text"}},value:{control:"text"},type:{options:[null,...Object.values(fe)],control:{type:"select"},table:{defaultValue:{summary:I.props.type.default}}},messages:{control:"object"},size:{options:Object.values(v),control:{type:"select"},table:{defaultValue:{summary:v.DEFAULT}}},iconSize:{options:[null,...Object.values(v)],control:{type:"select"},table:{defaultValue:{summary:"null"}}},inputClass:{control:"text"},messagesChildProps:{control:null},label:{control:{type:"text"}},currentLength:{table:{defaultValue:{summary:"null"}}},validate:{table:{defaultValue:{summary:"null"}}},placeholder:{description:"HTML input placeholder attribute",table:{category:"html attributes"},control:"text"},"v-model":{description:"Supported by this component",control:null,table:{category:"directives"}},onBlur:{table:{disable:!0}},onInput:{table:{disable:!0}},onClear:{table:{disable:!0}},onFocus:{table:{disable:!0}},onFocusIn:{table:{disable:!0}},onFocusOut:{table:{disable:!0}},onUpdateLength:{table:{disable:!0}},onUpdateIsInvalid:{table:{disable:!0}},blur:{description:"Native input blur event",table:{type:{summary:"event"}}},input:{description:"Native input event",table:{type:{summary:"event"}}},clear:{description:"Native input clear event",table:{type:{summary:"event"}}},focus:{description:"Native input focus event",table:{type:{summary:"event"}}},focusin:{description:"Native input focusin event",table:{type:{summary:"event"}}},focusout:{description:"Native input focusout event",table:{type:{summary:"event"}}},"update:length":{description:"Length of the input when currentLength prop is not passed",table:{type:{summary:"event"}}},"update:invalid":{description:"Result of the input validation",table:{type:{summary:"event"}}}},De=()=>({template:'<div style="width: 500px"><story /></div>'}),_e={title:"Components/Input",component:I,decorators:[De],excludeStories:/.*Data$/,argTypes:me,args:de},s={render:(a,{argTypes:e})=>he(a,e,Se)},n={...s,args:{label:"Label",description:"Description"}},o={...s,args:{leftIcon:"send"}},i={...s,args:{rightIcon:"lock-filled"}},l={...s,args:{leftIcon:"send",rightIcon:"lock-filled"},parameters:{a11y:{config:{rules:[{id:"duplicate-id",enabled:!1}]}}}},c={...s,args:{messages:[{message:"This is a warning message",type:"warning"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},u={...s,args:{messages:[{message:"This is an error message",type:"error"}]}},p={...s,args:{messages:[{message:"This is a success message",type:"success"}]}},d={...s,args:{messages:[{message:"This is the first message",type:"error"},{message:"This is the second message",type:"error"},{message:"This is the third message",type:"error"}]}},m={...s,args:{size:"xs"}},g={...s,args:{size:"sm"}},h={...s,args:{size:"lg"}},f={...s,args:{size:"xl"}},y={...s,args:{validate:{length:{description:"Max 25 characters.",max:25,warn:15,limitMaxLength:!1}}}};var _,L,x;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => {
    return createTemplateFromVueFile(args, argTypes, InputDefault);
  }
}`,...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var T,W,z;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(z=(W=n.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var V,F,N;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    leftIcon: 'send'
  }
}`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var w,M,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Default,
  args: {
    rightIcon: 'lock-filled'
  }
}`,...(C=(M=i.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var E,O,U;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var P,k,j;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var B,R,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is an error message',
      type: 'error'
    }]
  }
}`,...(H=(R=u.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var A,J,$;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Default,
  args: {
    messages: [{
      message: 'This is a success message',
      type: 'success'
    }]
  }
}`,...($=(J=p.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var Y,Z,q;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(q=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var G,K,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xs'
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,se;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'sm'
  }
}`,...(se=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ae,re;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'lg'
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,oe,ie;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'xl'
  }
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const Le=["argsData","argTypesData","Default","WithDescription","WithLeftIcon","WithRightIcon","WithBothIcons","WithWarning","WithError","WithSuccess","WithMultipleMessages","ExtraSmall","Small","Large","ExtraLarge","WithLengthValidation"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ExtraLarge:f,ExtraSmall:m,Large:h,Small:g,WithBothIcons:l,WithDescription:n,WithError:u,WithLeftIcon:o,WithLengthValidation:y,WithMultipleMessages:d,WithRightIcon:i,WithSuccess:p,WithWarning:c,__namedExportsOrder:Le,argTypesData:me,argsData:de,default:_e},Symbol.toStringTag,{value:"Module"}));export{s as D,m as E,Fe as I,h as L,g as S,n as W,o as a,i as b,l as c,c as d,u as e,p as f,y as g,f as h};
//# sourceMappingURL=input.stories-ab0dd321.js.map
