import{a as m}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as E,c as y}from"./storybook_utils-c9ca045c.js";import{D as d,C as O,a as F}from"./chip-7fb88844.js";import{D}from"./icon-13392d5a.js";import{u as o,o as $,b as L,E as j,w as t,y as a,p as q,e as s,z as p}from"./vue.esm-bundler-a1916ad5.js";import{D as k}from"./avatar-5bcc3258.js";import{V as H}from"./v_html-8c3cf2ac.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const V={name:"DtChipDefault",components:{DtAvatar:k,DtChip:d,DtIcon:D,VHtml:H},computed:{iconSize(){return O[this.$attrs.size]}}};function A(e,I,T,P,B,u){const i=o("dt-icon"),n=o("dt-avatar"),c=o("v-html"),w=o("dt-chip");return $(),L(w,{id:e.$attrs.id,"hide-close":e.$attrs.hideClose,"close-button-props":e.$attrs.closeButtonProps,interactive:e.$attrs.interactive,size:e.$attrs.size,"aria-label":e.$attrs.ariaLabel,"content-class":e.$attrs.contentClass,onClick:e.$attrs.onClick,onClose:e.$attrs.onClose},j({default:t(()=>[a(c,{html:e.defaultSlot},null,8,["html"])]),_:2},[e.$attrs.icon?{name:"icon",fn:t(()=>[a(i,{name:e.$attrs.icon,size:u.iconSize},null,8,["name","size"])]),key:"0"}:e.$attrs.avatar?{name:"avatar",fn:t(()=>[a(n,{"full-name":e.$attrs.avatar,seed:e.$attrs.avatarSeed},null,8,["full-name","seed"])]),key:"1"}:void 0]),1032,["id","hide-close","close-button-props","interactive","size","aria-label","content-class","onClick","onClose"])}const J=g(V,[["render",A],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]]);V.__docgenInfo={displayName:"DtChipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_default.story.vue"]};const N={name:"DtChipVariants",components:{DtAvatar:k,DtChip:d,DtIcon:D}},M={class:"d-d-flex d-fd-column d-stack8"},W=s("h4",null,"With Icon",-1),Z=s("h4",null,"With Avatar",-1),R=s("h4",null,"Non interactive",-1);function G(e,I,T,P,B,u){const i=o("dt-icon"),n=o("dt-chip"),c=o("dt-avatar");return $(),q("div",M,[s("div",null,[W,a(n,{"close-button-props":e.closeButtonProps},{icon:t(()=>[a(i,{name:"lock-filled",size:"200"})]),default:t(()=>[p(" Chip ")]),_:1},8,["close-button-props"])]),s("div",null,[Z,a(n,{"close-button-props":e.closeButtonProps},{avatar:t(()=>[a(c,{"full-name":"Jaqueline Nackos",seed:"Jaqueline Nackos"})]),default:t(()=>[p(" Chip ")]),_:1},8,["close-button-props"])]),s("div",null,[R,a(n,{interactive:!1,"hide-close":!0,"close-button-props":e.closeButtonProps},{default:t(()=>[p(" Chip ")]),_:1},8,["close-button-props"])])])}const K=g(N,[["render",G],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue"]]);N.__docgenInfo={displayName:"DtChipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/chip/chip_variants.story.vue"]};const Q=E(),S={onClose:m("close"),onClick:m("click"),size:"md",closeButtonProps:{ariaLabel:"close"},avatarSeed:""},z={default:{control:"text",table:{type:{summary:"VNode"}}},icon:{options:Q,table:{type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},avatar:{control:"text",table:{type:{summary:"VNode"}}},hideClose:{control:"boolean"},interactive:{control:"boolean"},id:{table:{defaultValue:{summary:"generated unique ID"}}},size:{options:Object.keys(F),control:{type:"select"}},ariaLabel:{control:"text",table:{type:{summary:"VNode"}}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}},keyup:{table:{disable:!0}},close:{description:"Native chip close button event",table:{type:{summary:"event"}}},click:{description:"Native chip click event",table:{type:{summary:"event"}}}},U={title:"Components/Chip",component:d,args:S,argTypes:z,excludeStories:/.*Data$/},X=e=>y(e,J),Y=e=>y(e,K),r={render:X,args:{default:"Chip"}},l={render:Y,parameters:{percy:{args:{avatarSeed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var h,f,_;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Chip'
  }
}`,...(_=(f=r.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var v,b,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const x=["argsData","argTypesData","Default","Variants"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:l,__namedExportsOrder:x,argTypesData:z,argsData:S,default:U},Symbol.toStringTag,{value:"Module"}));export{ie as C,r as D,l as V};
//# sourceMappingURL=chip.stories-546be51f.js.map
