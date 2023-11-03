import{a as v}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as O,c as $}from"./storybook_utils-43ef8c35.js";import{D as h,C as F,a as E}from"./chip-77cf8455.js";import{D as k}from"./icon-926a9c42.js";import{D as S}from"./avatar-986ed094.js";import{O as q,s as n,o as V,b as H,C as L,w as t,u as a,k as j,e as s,x as m}from"./vue.esm-bundler-4299d4fa.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const W=q({name:"VHtml",directives:{swap:{mounted(e,o){const c=o.value,p=document.createRange().createContextualFragment(c);e.replaceWith(p)}}},props:{html:{type:String,required:!0}},template:'<div v-swap="html"></div>'}),I={name:"DtChipDefault",components:{DtAvatar:S,DtChip:h,DtIcon:k,VHtml:W},computed:{iconSize(){return F[this.$attrs.size]}}};function A(e,o,c,p,P,f){const d=n("dt-icon"),r=n("dt-avatar"),u=n("v-html"),B=n("dt-chip");return V(),H(B,{id:e.$attrs.id,"hide-close":e.$attrs.hideClose,"close-button-props":e.$attrs.closeButtonProps,interactive:e.$attrs.interactive,size:e.$attrs.size,"aria-label":e.$attrs.ariaLabel,"content-class":e.$attrs.contentClass,onClick:e.$attrs.onClick,onClose:e.$attrs.onClose},L({default:t(()=>[a(u,{html:e.defaultSlot},null,8,["html"])]),_:2},[e.$attrs.icon?{name:"icon",fn:t(()=>[a(d,{name:e.$attrs.icon,size:f.iconSize},null,8,["name","size"])]),key:"0"}:e.$attrs.avatar?{name:"avatar",fn:t(()=>[a(r,{"full-name":e.$attrs.avatar,seed:e.$attrs.avatarSeed},null,8,["full-name","seed"])]),key:"1"}:void 0]),1032,["id","hide-close","close-button-props","interactive","size","aria-label","content-class","onClick","onClose"])}const J=N(I,[["render",A],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]]);I.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const z={name:"DtChipVariants",components:{DtAvatar:S,DtChip:h,DtIcon:k}},M={class:"d-d-flex d-fd-column d-stack8"},R=s("h4",null,"With Icon",-1),Z=s("h4",null,"With Avatar",-1),G=s("h4",null,"Non interactive",-1);function K(e,o,c,p,P,f){const d=n("dt-icon"),r=n("dt-chip"),u=n("dt-avatar");return V(),j("div",M,[s("div",null,[R,a(r,{"close-button-props":e.closeButtonProps},{icon:t(()=>[a(d,{name:"lock-filled",size:"200"})]),default:t(()=>[m(" Chip ")]),_:1},8,["close-button-props"])]),s("div",null,[Z,a(r,{"close-button-props":e.closeButtonProps},{avatar:t(()=>[a(u,{"full-name":"Jaqueline Nackos",seed:"Jaqueline Nackos"})]),default:t(()=>[m(" Chip ")]),_:1},8,["close-button-props"])]),s("div",null,[G,a(r,{interactive:!1,"hide-close":!0,"close-button-props":e.closeButtonProps},{default:t(()=>[m(" Chip ")]),_:1},8,["close-button-props"])])])}const Q=N(z,[["render",K],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue"]]);z.__docgenInfo={displayName:"DtChipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue"]};const U=O(),T={onClose:v("close"),onClick:v("click"),size:"md",closeButtonProps:{ariaLabel:"close"},avatarSeed:""},w={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:U,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(E),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},X={title:"Components/Chip",component:h,args:T,argTypes:w,excludeStories:/.*Data$/},Y=(e,{argTypes:o})=>$(e,o,J),x=(e,{argTypes:o})=>$(e,o,Q),l={render:Y,args:{default:"Chip"}},i={render:x,parameters:{percy:{args:{avatarSeed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var _,C,b;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Chip'
  }
}`,...(b=(C=l.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,D,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(D=i.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};const ee=["argsData","argTypesData","Default","Variants"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Variants:i,__namedExportsOrder:ee,argTypesData:w,argsData:T,default:X},Symbol.toStringTag,{value:"Module"}));export{ie as C,l as D,i as V};
//# sourceMappingURL=chip.stories-b89d784c.js.map
