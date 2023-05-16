import{a as c}from"./chunk-OPEUWD42-a3b45fd8.js";import{h as N,g as z,c as T}from"./storybook_utils-d96e8b3b.js";import{D as C,C as x,a as P}from"./chip-c51ebdcc.js";import{D as F}from"./avatar-3692cb70.js";import{D as L}from"./icon-408ae60c.js";import{n as O}from"./_plugin-vue2_normalizer-2bbd088e.js";const V={name:"DtChipDefault",components:{DtChip:C,DtAvatar:F,DtIcon:L,htmlFragment:N},computed:{iconSize(){return x[this.size??"md"]}}};var S=function(){var e=this,a=e._self._c;return a("dt-chip",{attrs:{id:e.id,"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"aria-label":e.ariaLabel,interactive:e.interactive,size:e.size,"content-class":e.contentClass},on:{click:e.onClick,close:e.onClose}},[e.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:e.icon,size:e.iconSize}})],1):e.avatar?a("template",{slot:"avatar"},[a("dt-avatar",{attrs:{seed:"seed",size:e.size}},[a("html-fragment",{attrs:{html:e.avatar}})],1)],1):e._e(),e.defaultSlot?a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()],2)},W=[];S._withStripped=!0;var l=O(V,S,W,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue";const E=l.exports;l.exports.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const j=z(),I={onClose:c("close"),onClick:c("click"),size:"md"},k={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:j,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(P),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},w={title:"Components/Chip",component:C,args:I,argTypes:k,excludeStories:/.*Data$/},n=(i,{argTypes:e})=>T(i,e,E),t={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},r={render:n,args:{...t.args,icon:"lock-filled"}},o={render:n,args:{...t.args,avatar:"DP"}},s={render:n,args:{...t.args,interactive:!1,hideClose:!0}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip',
    closeButtonProps: {
      ariaLabel: 'close'
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    icon: 'lock-filled'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var _,h,g;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    avatar: 'DP'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,D,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const A=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:t,NonInteractive:s,WithAvatar:o,WithIcon:r,__namedExportsOrder:A,argTypesData:k,argsData:I,default:w},Symbol.toStringTag,{value:"Module"}));export{$ as C,t as D,s as N,r as W,o as a};
//# sourceMappingURL=chip.stories-7ce36b14.js.map
