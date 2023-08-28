import{a as i}from"./chunk-AY7I2SME-c7b6cf8a.js";import{e as N,c as T}from"./storybook_utils-6f4fc6ad.js";import{D,C as z,a as x}from"./chip-a40379a8.js";import{D as P}from"./icon-34725557.js";import{D as L}from"./avatar-5baf9f04.js";import{n as O}from"./_plugin-vue2_normalizer-2bbd088e.js";const V={name:"DtChipDefault",components:{DtAvatar:L,DtChip:D,DtIcon:P},computed:{iconSize(){return z[this.size??"md"]}}};var S=function(){var e=this,t=e._self._c;return t("dt-chip",{attrs:{id:e.id,"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"aria-label":e.ariaLabel,interactive:e.interactive,size:e.size,"content-class":e.contentClass},on:{click:e.onClick,close:e.onClose}},[e.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.icon,size:e.iconSize}})],1):e.avatar?t("template",{slot:"avatar"},[t("dt-avatar",{attrs:{"full-name":e.avatar,seed:e.avatarSeed}})],1):e._e(),e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()],2)},F=[];S._withStripped=!0;var l=O(V,S,F,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue";const W=l.exports;l.exports.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const E=N(),k={onClose:i("close"),onClick:i("click"),size:"md"},I={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:E,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(x),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},j={title:"Components/Chip",component:D,args:k,argTypes:I,excludeStories:/.*Data$/},n=(c,{argTypes:e})=>T(c,e,W),a={render:n,args:{default:"Chip",closeButtonProps:{ariaLabel:"close"}}},r={render:n,args:{...a.args,icon:"lock-filled"}},o={render:n,parameters:{percy:{args:{avatarSeed:"seed"}}},args:{...a.args,avatar:"Jaqueline Nackos"}},s={render:n,args:{...a.args,interactive:!1,hideClose:!0}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    default: 'Chip',
    closeButtonProps: {
      ariaLabel: 'close'
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    icon: 'lock-filled'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var _,g,h;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,b,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    interactive: false,
    hideClose: true
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const q=["argsData","argTypesData","Default","WithIcon","WithAvatar","NonInteractive"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:a,NonInteractive:s,WithAvatar:o,WithIcon:r,__namedExportsOrder:q,argTypesData:I,argsData:k,default:j},Symbol.toStringTag,{value:"Module"}));export{R as C,a as D,s as N,r as W,o as a};
//# sourceMappingURL=chip.stories-3d4bcd49.js.map
