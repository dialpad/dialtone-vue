import{a as i}from"./chunk-AY7I2SME-c7b6cf8a.js";import{g as O,c as P}from"./storybook_utils-b0336152.js";import{D as _,C as B,a as L}from"./chip-00273ea4.js";import{D as W}from"./icon-136e453c.js";import{k as s,o as E,v as F,I as j,m as l,l as c}from"./vue.esm-bundler-06a6c133.js";import{D as q}from"./avatar-81e2efde.js";import{V as A}from"./v_html-ded372da.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const k={name:"DtChipDefault",components:{DtAvatar:q,DtChip:_,DtIcon:W,VHtml:A},computed:{iconSize(){return B[this.$attrs.size??"md"]}}};function w(e,G,K,Q,U,I){const N=s("dt-icon"),z=s("dt-avatar"),T=s("v-html"),V=s("dt-chip");return E(),F(V,{id:e.$attrs.id,"hide-close":e.$attrs.hideClose,"close-button-props":e.$attrs.closeButtonProps,interactive:e.$attrs.interactive,size:e.$attrs.size,"aria-label":e.$attrs.ariaLabel,"content-class":e.$attrs.contentClass,onClick:e.$attrs.onClick,onClose:e.$attrs.onClose},j({default:l(()=>[c(T,{html:e.defaultSlot},null,8,["html"])]),_:2},[e.$attrs.icon?{name:"icon",fn:l(()=>[c(N,{name:e.$attrs.icon,size:I.iconSize},null,8,["name","size"])]),key:"0"}:e.$attrs.avatar?{name:"avatar",fn:l(()=>[c(z,{"full-name":e.$attrs.avatar,seed:e.$attrs.avatarSeed},null,8,["full-name","seed"])]),key:"1"}:void 0]),1032,["id","hide-close","close-button-props","interactive","size","aria-label","content-class","onClick","onClose"])}const J=H(k,[["render",w]]);k.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const M=O(),S={onClose:i("close"),onClick:i("click"),size:"md"},$={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:M,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(L),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},Z={title:"Components/Chip",component:_,args:S,argTypes:$,excludeStories:/.*Data$/},n=e=>P(e,J),a={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},t={render:n,args:{...a.args,icon:"lock-filled"}},r={render:n,parameters:{percy:{args:{avatarSeed:"seed"}}},args:{...a.args,avatar:"Jaqueline Nackos"}},o={render:n,args:{...a.args,interactive:!1,hideClose:!0}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,h,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var b,y,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const R=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:a,NonInteractive:o,WithAvatar:r,WithIcon:t,__namedExportsOrder:R,argTypesData:$,argsData:S,default:Z},Symbol.toStringTag,{value:"Module"}));export{se as C,a as D,o as N,t as W,r as a};
//# sourceMappingURL=chip.stories-53c9e82c.js.map
