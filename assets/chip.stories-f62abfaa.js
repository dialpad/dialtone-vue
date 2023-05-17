import{a as c}from"./chunk-OPEUWD42-a3b45fd8.js";import{h as N,g as k,c as z}from"./storybook_utils-d749c98e.js";import{D as C,C as T,a as x}from"./chip-241b39cf.js";import{D as P}from"./avatar-384fc845.js";import{D as F}from"./icon-86313b55.js";import{n as L}from"./_plugin-vue2_normalizer-2bbd088e.js";const O={name:"DtChipDefault",components:{DtChip:C,DtAvatar:P,DtIcon:F,htmlFragment:N},computed:{iconSize(){return T[this.size??"md"]}}};var V=function(){var e=this,a=e._self._c;return a("dt-chip",{attrs:{id:e.id,"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"aria-label":e.ariaLabel,interactive:e.interactive,size:e.size,"content-class":e.contentClass},on:{click:e.onClick,close:e.onClose}},[e.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:e.icon,size:e.iconSize}})],1):e.avatar?a("template",{slot:"avatar"},[a("dt-avatar",{attrs:{seed:"seed",size:e.size}},[a("html-fragment",{attrs:{html:e.avatar}})],1)],1):e._e(),e.defaultSlot?a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()],2)},W=[],y=L(O,V,W,!1,null,null,null,null);const E=y.exports;y.exports.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const j=k(),S={onClose:c("close"),onClick:c("click"),size:"md"},I={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:j,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(x),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},A={title:"Components/Chip",component:C,args:S,argTypes:I,excludeStories:/.*Data$/},n=(l,{argTypes:e})=>z(l,e,E),t={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},r={render:n,args:{...t.args,icon:"lock-filled"}},o={render:n,args:{...t.args,avatar:"DP"}},s={render:n,args:{...t.args,interactive:!1,hideClose:!0}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip',
    closeButtonProps: {
      ariaLabel: 'close'
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    icon: 'lock-filled'
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,v,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    avatar: 'DP'
  }
}`,...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var h,b,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const B=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:t,NonInteractive:s,WithAvatar:o,WithIcon:r,__namedExportsOrder:B,argTypesData:I,argsData:S,default:A},Symbol.toStringTag,{value:"Module"}));export{$ as C,t as D,s as N,r as W,o as a};
//# sourceMappingURL=chip.stories-f62abfaa.js.map
