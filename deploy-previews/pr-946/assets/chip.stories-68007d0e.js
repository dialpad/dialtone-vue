import{a as c}from"./chunk-OPEUWD42-0dc0813d.js";import{n as z,h as N,g as T,c as x}from"./_plugin-vue2_normalizer-bbedbd26.js";import{D,C as P,a as F}from"./chip-db5ca67b.js";import{D as L}from"./avatar-28d5b320.js";import{D as O}from"./icon-e129d5a5.js";const V={name:"DtChipDefault",components:{DtChip:D,DtAvatar:L,DtIcon:O,htmlFragment:N},computed:{iconSize(){return P[this.size??"md"]}}};var S=function(){var e=this,a=e._self._c;return a("dt-chip",{attrs:{id:e.id,"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"aria-label":e.ariaLabel,interactive:e.interactive,size:e.size,"content-class":e.contentClass},on:{click:e.onClick,close:e.onClose}},[e.icon?a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:e.icon,size:e.iconSize}})],1):e.avatar?a("template",{slot:"avatar"},[a("dt-avatar",{attrs:{seed:"seed",size:e.size}},[a("html-fragment",{attrs:{html:e.avatar}})],1)],1):e._e(),e.defaultSlot?a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()],2)},E=[];S._withStripped=!0;var l=z(V,S,E,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue";const W=l.exports;l.exports.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const j=T(),I={onClose:c("close"),onClick:c("click"),size:"md"},k={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:j,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(F),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},w={title:"Components/Chip",component:D,args:I,argTypes:k,excludeStories:/.*Data$/},n=(i,{argTypes:e})=>x(i,e,W),t={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},r={render:n,args:{...t.args,icon:"lock-filled"}},o={render:n,args:{...t.args,avatar:"DP"}},s={render:n,args:{...t.args,interactive:!1,hideClose:!0}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,y,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const A=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,NonInteractive:s,WithAvatar:o,WithIcon:r,__namedExportsOrder:A,argTypesData:k,argsData:I,default:w},Symbol.toStringTag,{value:"Module"}));export{q as C};
//# sourceMappingURL=chip.stories-68007d0e.js.map
