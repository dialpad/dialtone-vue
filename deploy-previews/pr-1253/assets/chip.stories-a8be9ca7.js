import{a as l}from"./chunk-AY7I2SME-5eb1ab46.js";import{e as k,h as f}from"./storybook_utils-1aebbd64.js";import{D as r,C as g,a as x}from"./chip-bf671c25.js";import{D as v}from"./icon-8e6c79ec.js";import{D as h}from"./avatar-0487eddb.js";import{n as y}from"./_plugin-vue2_normalizer-2bbd088e.js";const N={name:"DtChipDefault",components:{DtAvatar:h,DtChip:r,DtIcon:v},computed:{iconSize(){return g[this.size]}}};var b=function(){var e=this,t=e._self._c;return t("dt-chip",{attrs:{id:e.id,"hide-close":e.hideClose,"close-button-props":e.closeButtonProps,"aria-label":e.ariaLabel,interactive:e.interactive,size:e.size,"content-class":e.contentClass},on:{click:e.onClick,close:e.onClose}},[e.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.icon,size:e.iconSize}})],1):e.avatar?t("template",{slot:"avatar"},[t("dt-avatar",{attrs:{"full-name":e.avatar,seed:e.avatarSeed}})],1):e._e(),e.defaultSlot?t("span",{domProps:{innerHTML:e._s(e.defaultSlot)}}):e._e()],2)},V=[];b._withStripped=!0;var s=y(N,b,V,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue";const I=s.exports;s.exports.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const T={name:"DtChipVariants",components:{DtAvatar:h,DtChip:r,DtIcon:v}};var C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-d-flex d-fd-column d-stack8"},[t("div",[t("h4",[e._v("With Icon")]),t("dt-chip",{attrs:{"close-button-props":e.closeButtonProps},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"lock-filled",size:"200"}})]},proxy:!0},{key:"default",fn:function(){return[e._v(" Chip ")]},proxy:!0}])})],1),t("div",[t("h4",[e._v("With Avatar")]),t("dt-chip",{attrs:{"close-button-props":e.closeButtonProps},scopedSlots:e._u([{key:"avatar",fn:function(){return[t("dt-avatar",{attrs:{"full-name":"Jaqueline Nackos",seed:e.avatarSeed}})]},proxy:!0},{key:"default",fn:function(){return[e._v(" Chip ")]},proxy:!0}])})],1),t("div",[t("h4",[e._v("Non interactive")]),t("dt-chip",{attrs:{interactive:!1,"hide-close":!0,"close-button-props":e.closeButtonProps},scopedSlots:e._u([{key:"default",fn:function(){return[e._v(" Chip ")]},proxy:!0}])})],1)])},z=[];C._withStripped=!0;var i=y(T,C,z,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue";const P=i.exports;i.exports.__docgenInfo={displayName:"DtChipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue"]};const w=k(),D={onClose:l("close"),onClick:l("click"),size:"md",closeButtonProps:{ariaLabel:"close"},avatarSeed:""},S={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:w,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(x),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},F={title:"Components/Chip",component:r,args:D,argTypes:S,excludeStories:/.*Data$/},O=(a,{argTypes:e})=>f(a,e,I),B=(a,{argTypes:e})=>f(a,e,P),o={render:O,args:{default:"Chip"}},n={render:B,parameters:{percy:{args:{avatarSeed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Chip'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,_;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: VariantsTemplate,
  parameters: {
    percy: {
      args: {
        avatarSeed: 'seed'
      }
    },
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(_=(m=n.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const L=["argsData","argTypesData","Default","Variants"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:n,__namedExportsOrder:L,argTypesData:S,argsData:D,default:F},Symbol.toStringTag,{value:"Module"}));export{q as C,o as D,n as V};
//# sourceMappingURL=chip.stories-a8be9ca7.js.map
