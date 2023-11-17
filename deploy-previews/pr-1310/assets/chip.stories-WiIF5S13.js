import{a as l}from"./chunk-AY7I2SME-4UylTnhF.js";import{a as S,c as f}from"./storybook_utils-XrTpeJKJ.js";import{D as s,C as k,a as g}from"./chip-zPShPxa_.js";import{D as v}from"./icon-pX31dgl5.js";import{D as h}from"./avatar-x2znKDE8.js";import{n as y}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const x={name:"DtChipDefault",components:{DtAvatar:h,DtChip:s,DtIcon:v},computed:{iconSize(){return k[this.size]}}};var b=function(){var e=this,t=e._self._c;return t("dt-chip",{attrs:{id:e.$attrs.id,"hide-close":e.$attrs.hideClose,"close-button-props":e.$attrs.closeButtonProps,"aria-label":e.$attrs.ariaLabel,interactive:e.$attrs.interactive,size:e.$attrs.size,"content-class":e.$attrs.contentClass},on:{click:e.$attrs.onClick,close:e.$attrs.onClose}},[e.$attrs.icon?t("template",{slot:"icon"},[t("dt-icon",{attrs:{name:e.$attrs.icon,size:e.iconSize}})],1):e.$attrs.avatar?t("template",{slot:"avatar"},[t("dt-avatar",{attrs:{"full-name":e.$attrs.avatar,seed:e.$attrs.avatarSeed}})],1):e._e(),e.$attrs.default?t("span",{domProps:{innerHTML:e._s(e.$attrs.default)}}):e._e()],2)},N=[];b._withStripped=!0;var n=y(x,b,N,!1,null,null,null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue";const V=n.exports;n.exports.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const I={name:"DtChipVariants",components:{DtAvatar:h,DtChip:s,DtIcon:v}};var C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-d-flex d-fd-column d-stack8"},[t("div",[t("h4",[e._v("With Icon")]),t("dt-chip",{attrs:{"close-button-props":e.$attrs.closeButtonProps},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"lock-filled",size:"200"}})]},proxy:!0},{key:"default",fn:function(){return[e._v(" Chip ")]},proxy:!0}])})],1),t("div",[t("h4",[e._v("With Avatar")]),t("dt-chip",{attrs:{"close-button-props":e.$attrs.closeButtonProps},scopedSlots:e._u([{key:"avatar",fn:function(){return[t("dt-avatar",{attrs:{"full-name":"Jaqueline Nackos",seed:e.$attrs.avatarSeed}})]},proxy:!0},{key:"default",fn:function(){return[e._v(" Chip ")]},proxy:!0}])})],1),t("div",[t("h4",[e._v("Non interactive")]),t("dt-chip",{attrs:{interactive:!1,"hide-close":!0,"close-button-props":e.$attrs.closeButtonProps},scopedSlots:e._u([{key:"default",fn:function(){return[e._v(" Chip ")]},proxy:!0}])})],1)])},T=[];C._withStripped=!0;var i=y(I,C,T,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue";const z=i.exports;i.exports.__docgenInfo={displayName:"DtChipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue"]};const P=S(),D={onClose:l("close"),onClick:l("click"),size:"md",closeButtonProps:{ariaLabel:"close"},avatarSeed:""},$={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:P,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(g),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},w={title:"Components/Chip",component:s,args:D,argTypes:$,excludeStories:/.*Data$/},F=(a,{argTypes:e})=>f(a,e,V),O=(a,{argTypes:e})=>f(a,e,z),r={render:F,args:{default:"Chip"}},o={render:O,parameters:{percy:{args:{avatarSeed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Chip'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,_;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(_=(m=o.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const B=["argsData","argTypesData","Default","Variants"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:B,argTypesData:$,argsData:D,default:w},Symbol.toStringTag,{value:"Module"}));export{q as C,r as D,o as V};
//# sourceMappingURL=chip.stories-WiIF5S13.js.map
