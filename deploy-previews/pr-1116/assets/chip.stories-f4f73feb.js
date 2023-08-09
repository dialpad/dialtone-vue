import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{g as O,c as P}from"./storybook_utils-79c013ce.js";import{D as _,C as B,a as L}from"./chip-9ad74730.js";import{D as W}from"./icon-1bcb5ec8.js";import{k as s,o as E,v as F,J as j,m as l,l as i}from"./vue.esm-bundler-2457a580.js";import{D as q}from"./avatar-0e5471bb.js";import{V as w}from"./v_html-71cbeb03.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const k={name:"DtChipDefault",components:{DtAvatar:q,DtChip:_,DtIcon:W,VHtml:w},computed:{iconSize(){return B[this.$attrs.size??"md"]}}};function H(e,G,K,Q,U,S){const I=s("dt-icon"),z=s("dt-avatar"),T=s("v-html"),V=s("dt-chip");return E(),F(V,{id:e.$attrs.id,"hide-close":e.$attrs.hideClose,"close-button-props":e.$attrs.closeButtonProps,interactive:e.$attrs.interactive,size:e.$attrs.size,"aria-label":e.$attrs.ariaLabel,"content-class":e.$attrs.contentClass,onClick:e.$attrs.onClick,onClose:e.$attrs.onClose},j({default:l(()=>[i(T,{html:e.defaultSlot},null,8,["html"])]),_:2},[e.$attrs.icon?{name:"icon",fn:l(()=>[i(I,{name:e.$attrs.icon,size:S.iconSize},null,8,["name","size"])]),key:"0"}:e.$attrs.avatar?{name:"avatar",fn:l(()=>[i(z,{"full-name":e.$attrs.avatar},null,8,["full-name"])]),key:"1"}:void 0]),1032,["id","hide-close","close-button-props","interactive","size","aria-label","content-class","onClick","onClose"])}const J=A(k,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]]);k.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const M=O(),$={onClose:c("close"),onClick:c("click"),size:"md"},N={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:M,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(L),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},Z={title:"Components/Chip",component:_,args:$,argTypes:N,excludeStories:/.*Data$/},n=e=>P(e,J),t={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},a={render:n,args:{...t.args,icon:"lock-filled"}},o={render:n,args:{...t.args,avatar:"Jaqueline Nackos"}},r={render:n,args:{...t.args,interactive:!1,hideClose:!0}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip',
    closeButtonProps: {
      ariaLabel: 'close'
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,f,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    icon: 'lock-filled'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,g,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    avatar: 'Jaqueline Nackos'
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,y,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(D=(y=r.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const R=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:t,NonInteractive:r,WithAvatar:o,WithIcon:a,__namedExportsOrder:R,argTypesData:N,argsData:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{se as C,t as D,r as N,a as W,o as a};
//# sourceMappingURL=chip.stories-f4f73feb.js.map
