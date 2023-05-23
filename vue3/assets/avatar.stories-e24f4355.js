import{g as j,c as v}from"./storybook_utils-06870cb8.js";import{D as p,A as B,a as x,b as L,c as U}from"./avatar-d9495eed.js";import{V as M}from"./v_html-78a1e6fa.js";import{a as d,o as f,b as E,w as l,d as c,e as W,v as Z,f as H,g as s}from"./vue.esm-bundler-7a4a8caf.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{D as G}from"./icon-46b606c5.js";import{d as m}from"./person-13c0d6d2.js";const O={name:"DtAvatarDefault",components:{DtAvatar:p,VHtml:M}};function J(e,_,g,$,h,i){const a=d("v-html"),u=d("dt-avatar");return f(),E(u,{id:e.$attrs.id,size:e.$attrs.size,presence:e.$attrs.presence,"avatar-class":e.$attrs.avatarClass,"canvas-class":e.$attrs.canvasClass,initials:e.$attrs.initials,seed:e.$attrs.seed,gradient:e.$attrs.gradient,group:e.$attrs.group,color:e.$attrs.color,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass},{default:l(()=>[c(a,{html:e.defaultSlot},null,8,["html"])]),_:1},8,["id","size","presence","avatar-class","canvas-class","initials","seed","gradient","group","color","overlay-icon","overlay-text","overlay-class"])}const K=y(O,[["render",J]]);O.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const k={name:"DtAvatarDefaultIcon",components:{DtAvatar:p,DtIcon:G},computed:{iconSize(){return B[this.$attrs.size??"md"]}}};function Q(e,_,g,$,h,i){const a=d("dt-icon"),u=d("dt-avatar");return f(),E(u,{id:e.$attrs.id,size:e.$attrs.size,presence:e.$attrs.presence,color:e.color,seed:e.$attrs.seed,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass},{default:l(()=>[W(c(a,{name:e.defaultSlot,size:i.iconSize},null,8,["name","size"]),[[Z,i.iconSize]])]),_:1},8,["id","size","presence","color","seed","overlay-icon","overlay-text","overlay-class"])}const X=y(k,[["render",Q]]);k.__docgenInfo={displayName:"DtAvatarDefaultIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const R={name:"DtAvatarWithPresence",components:{DtAvatar:p}},Y={class:"d-d-flex"},ee={class:"d-p8 d-d-flex d-ai-center"},ae=s("img",{"data-qa":"dt-avatar-image",src:m,alt:"Person Avatar"},null,-1),te={class:"d-p8 d-d-flex d-ai-center"},se=s("img",{"data-qa":"dt-avatar-image",src:m,alt:"Person Avatar"},null,-1),re={class:"d-p8 d-d-flex d-ai-center"},oe=s("img",{"data-qa":"dt-avatar-image",src:m,alt:"Person Avatar"},null,-1);function ne(e,_,g,$,h,i){const a=d("dt-avatar");return f(),H("div",Y,[s("div",ee,[c(a,{presence:"busy",seed:"seed",size:"sm"},{default:l(()=>[ae]),_:1})]),s("div",te,[c(a,{presence:"busy",seed:"seed"},{default:l(()=>[se]),_:1})]),s("div",re,[c(a,{presence:"busy",seed:"seed",size:"lg"},{default:l(()=>[oe]),_:1})])])}const le=y(R,[["render",ne]]);R.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const q=j(),ce={size:"md",presence:null},F={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{control:"select",options:Object.keys(x)},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:L},presence:{control:{type:"select"},options:Object.values(U),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:q,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},de={title:"Components/Avatar",component:p,argTypes:F,excludeStories:/.*Data$/},ie=e=>v(e,K),pe=e=>v(e,X),me=e=>v(e,le),t={render:ie,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${m}" alt="Person Avatar">`,initials:"PS"}},r={...t,args:{default:"DP"}},o={render:pe,args:{default:"user"},argTypes:{default:{options:q,control:{type:"select",labels:{undefined:"(empty)"}}}}},n={render:me,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var D,A,I;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    default: \`<img data-qa="dt-avatar-image" src="\${defaultImage}" alt="Person Avatar">\`,
    initials: 'PS'
  }
}`,...(I=(A=t.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var T,P,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Default,
  args: {
    default: 'DP'
  }
}`,...(S=(P=r.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var b,z,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: IconTemplate,
  args: {
    default: 'user'
  },
  argTypes: {
    default: {
      options: iconsList,
      control: {
        type: 'select',
        labels: {
          undefined: '(empty)'
        }
      }
    }
  }
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var N,V,w;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(w=(V=n.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const ue=["argsData","argTypesData","Default","Initials","Icon","Presence"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Icon:o,Initials:r,Presence:n,__namedExportsOrder:ue,argTypesData:F,argsData:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{De as A,t as D,o as I,n as P,r as a,ce as b,F as c};
//# sourceMappingURL=avatar.stories-e24f4355.js.map
