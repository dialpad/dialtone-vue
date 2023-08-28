import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{g as O,c as P}from"./storybook_utils-79c013ce.js";import{D as _,C as B,a as L}from"./chip-9ad74730.js";import{D as W}from"./icon-1bcb5ec8.js";import{k as s,o as E,v as F,J as j,m as l,l as i}from"./vue.esm-bundler-2457a580.js";import{D as q}from"./avatar-6ae403c2.js";import{V as w}from"./v_html-71cbeb03.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const k={name:"DtChipDefault",components:{DtAvatar:q,DtChip:_,DtIcon:W,VHtml:w},computed:{iconSize(){return B[this.$attrs.size??"md"]}}};function H(e,G,K,Q,U,N){const I=s("dt-icon"),z=s("dt-avatar"),T=s("v-html"),V=s("dt-chip");return E(),F(V,{id:e.$attrs.id,"hide-close":e.$attrs.hideClose,"close-button-props":e.$attrs.closeButtonProps,interactive:e.$attrs.interactive,size:e.$attrs.size,"aria-label":e.$attrs.ariaLabel,"content-class":e.$attrs.contentClass,onClick:e.$attrs.onClick,onClose:e.$attrs.onClose},j({default:l(()=>[i(T,{html:e.defaultSlot},null,8,["html"])]),_:2},[e.$attrs.icon?{name:"icon",fn:l(()=>[i(I,{name:e.$attrs.icon,size:N.iconSize},null,8,["name","size"])]),key:"0"}:e.$attrs.avatar?{name:"avatar",fn:l(()=>[i(z,{"full-name":e.$attrs.avatar,seed:e.$attrs.avatarSeed},null,8,["full-name","seed"])]),key:"1"}:void 0]),1032,["id","hide-close","close-button-props","interactive","size","aria-label","content-class","onClick","onClose"])}const J=A(k,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]]);k.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const M=O(),S={onClose:c("close"),onClick:c("click"),size:"md"},$={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:M,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(L),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},Z={title:"Components/Chip",component:_,args:S,argTypes:$,excludeStories:/.*Data$/},n=e=>P(e,J),a={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},t={render:n,args:{...a.args,icon:"lock-filled"}},r={render:n,parameters:{percy:{args:{avatarSeed:"seed"}}},args:{...a.args,avatar:"Jaqueline Nackos"}},o={render:n,args:{...a.args,interactive:!1,hideClose:!0}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip',
    closeButtonProps: {
      ariaLabel: 'close'
    }
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,f,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    icon: 'lock-filled'
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,g,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    percy: {
      args: {
        avatarSeed: 'seed'
      }
    }
  },
  args: {
    ...Default.args,
    avatar: 'Jaqueline Nackos'
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,b,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const R=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:a,NonInteractive:o,WithAvatar:r,WithIcon:t,__namedExportsOrder:R,argTypesData:$,argsData:S,default:Z},Symbol.toStringTag,{value:"Module"}));export{se as C,a as D,o as N,t as W,r as a};
//# sourceMappingURL=chip.stories-2246a13f.js.map
