import{a as p}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as P,c as O}from"./storybook_utils-ea1afa1b.js";import{D as $,C as B,a as L}from"./chip-1eedd6c1.js";import{D as W}from"./avatar-d98191d8.js";import{D as E}from"./icon-cde06ed8.js";import{a as s,o as F,b as j,y as w,w as n,d as l}from"./vue.esm-bundler-8a039e44.js";import{V as A}from"./v_html-12fe00d1.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const k={name:"DtChipDefault",components:{DtChip:$,VHtml:A,DtAvatar:W,DtIcon:E},computed:{iconSize(){return B[this.$attrs.size??"md"]}}};function M(e,J,K,Q,U,z){const N=s("dt-icon"),c=s("v-html"),T=s("dt-avatar"),V=s("dt-chip");return F(),j(V,{id:e.$attrs.id,"hide-close":e.$attrs.hideClose,"close-button-props":e.$attrs.closeButtonProps,interactive:e.$attrs.interactive,size:e.$attrs.size,"aria-label":e.$attrs.ariaLabel,"content-class":e.$attrs.contentClass,onClick:e.$attrs.onClick,onClose:e.$attrs.onClose},w({default:n(()=>[l(c,{html:e.defaultSlot},null,8,["html"])]),_:2},[e.$attrs.icon?{name:"icon",fn:n(()=>[l(N,{name:e.$attrs.icon,size:z.iconSize},null,8,["name","size"])]),key:"0"}:e.$attrs.avatar?{name:"avatar",fn:n(()=>[l(T,{seed:"seed",size:e.$attrs.size},{default:n(()=>[l(c,{html:e.$attrs.avatar},null,8,["html"])]),_:1},8,["size"])]),key:"1"}:void 0]),1032,["id","hide-close","close-button-props","interactive","size","aria-label","content-class","onClick","onClose"])}const Z=H(k,[["render",M]]);k.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const q=P(),S={onClose:p("close"),onClick:p("click"),size:"md"},I={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:q,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(L),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},R={title:"Components/Chip",component:$,args:S,argTypes:I,excludeStories:/.*Data$/},i=e=>O(e,Z),t={render:i,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},a={render:i,args:{...t.args,icon:"lock-filled"}},o={render:i,args:{...t.args,avatar:"DP"}},r={render:i,args:{...t.args,interactive:!1,hideClose:!0}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip',
    closeButtonProps: {
      ariaLabel: 'close'
    }
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    icon: 'lock-filled'
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,C,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    avatar: 'DP'
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,D,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(_=(D=r.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const G=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:t,NonInteractive:r,WithAvatar:o,WithIcon:a,__namedExportsOrder:G,argTypesData:I,argsData:S,default:R},Symbol.toStringTag,{value:"Module"}));export{se as C,t as D,r as N,a as W,o as a};
//# sourceMappingURL=chip.stories-9c79dbc8.js.map
