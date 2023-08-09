import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{e as N,c as k}from"./storybook_utils-010d0d6a.js";import{D as C,C as T,a as z}from"./chip-eb7a93d8.js";import{D as x}from"./icon-555c67be.js";import{D as P}from"./avatar-0f24ab76.js";import{n as L}from"./_plugin-vue2_normalizer-2bbd088e.js";const O={name:"DtChipDefault",components:{DtAvatar:P,DtChip:C,DtIcon:x},computed:{iconSize(){return T[this.size??"md"]}}};var V=function(){var e=this,t=e._self._c;return t("dt-chip",{attrs:{id:e.id,"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"aria-label":e.ariaLabel,interactive:e.interactive,size:e.size,"content-class":e.contentClass},on:{click:e.onClick,close:e.onClose}},[e.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.icon,size:e.iconSize}})],1):e.avatar?t("template",{slot:"avatar"},[t("dt-avatar",{attrs:{"full-name":e.avatar,seed:e.avatarSeed}})],1):e._e(),e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()],2)},F=[],D=L(O,V,F,!1,null,null,null,null);const W=D.exports;D.exports.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const E=N(),S={onClose:c("close"),onClick:c("click"),size:"md"},I={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:E,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(z),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},j={title:"Components/Chip",component:C,args:S,argTypes:I,excludeStories:/.*Data$/},n=(l,{argTypes:e})=>k(l,e,W),a={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},r={render:n,args:{...a.args,icon:"lock-filled"}},o={render:n,parameters:{percy:{args:{avatarSeed:"seed"}}},args:{...a.args,avatar:"Jaqueline Nackos"}},s={render:n,args:{...a.args,interactive:!1,hideClose:!0}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip',
    closeButtonProps: {
      ariaLabel: 'close'
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    icon: 'lock-filled'
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,g,_;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var b,y,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const q=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:a,NonInteractive:s,WithAvatar:o,WithIcon:r,__namedExportsOrder:q,argTypesData:I,argsData:S,default:j},Symbol.toStringTag,{value:"Module"}));export{Z as C,a as D,s as N,r as W,o as a};
//# sourceMappingURL=chip.stories-aeb8aa72.js.map
