import{g as j,c as v}from"./storybook_utils-bfad7e03.js";import{D as p,A as B,a as x,b as L,c as U}from"./avatar-8c560cfe.js";import{V as M}from"./v_html-24231cab.js";import{a as d,o as f,b as k,w as l,d as c,e as W,v as Z,f as H,g as s}from"./vue.esm-bundler-15aa0fd7.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{D as G}from"./icon-9a3ea346.js";import{d as u}from"./person-13c0d6d2.js";const E={name:"DtAvatarDefault",components:{DtAvatar:p,VHtml:M}};function J(e,y,g,h,$,i){const a=d("v-html"),m=d("dt-avatar");return f(),k(m,{id:e.$attrs.id,size:e.$attrs.size,presence:e.$attrs.presence,"avatar-class":e.$attrs.avatarClass,"canvas-class":e.$attrs.canvasClass,initials:e.$attrs.initials,seed:e.$attrs.seed,gradient:e.$attrs.gradient,group:e.$attrs.group,color:e.$attrs.color,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass},{default:l(()=>[c(a,{html:e.defaultSlot},null,8,["html"])]),_:1},8,["id","size","presence","avatar-class","canvas-class","initials","seed","gradient","group","color","overlay-icon","overlay-text","overlay-class"])}const K=_(E,[["render",J],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]]);E.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const O={name:"DtAvatarDefaultIcon",components:{DtAvatar:p,DtIcon:G},computed:{iconSize(){return B[this.$attrs.size??"md"]}}};function Q(e,y,g,h,$,i){const a=d("dt-icon"),m=d("dt-avatar");return f(),k(m,{id:e.$attrs.id,size:e.$attrs.size,presence:e.$attrs.presence,color:e.color,seed:e.$attrs.seed,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass},{default:l(()=>[W(c(a,{name:e.defaultSlot,size:i.iconSize},null,8,["name","size"]),[[Z,i.iconSize]])]),_:1},8,["id","size","presence","color","seed","overlay-icon","overlay-text","overlay-class"])}const X=_(O,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]]);O.__docgenInfo={displayName:"DtAvatarDefaultIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const R={name:"DtAvatarWithPresence",components:{DtAvatar:p}},Y={class:"d-d-flex"},ee={class:"d-p8 d-d-flex d-ai-center"},ae=s("img",{"data-qa":"dt-avatar-image",src:u,alt:"Person Avatar"},null,-1),te={class:"d-p8 d-d-flex d-ai-center"},se=s("img",{"data-qa":"dt-avatar-image",src:u,alt:"Person Avatar"},null,-1),re={class:"d-p8 d-d-flex d-ai-center"},oe=s("img",{"data-qa":"dt-avatar-image",src:u,alt:"Person Avatar"},null,-1);function ne(e,y,g,h,$,i){const a=d("dt-avatar");return f(),H("div",Y,[s("div",ee,[c(a,{presence:"busy",seed:"seed",size:"sm"},{default:l(()=>[ae]),_:1})]),s("div",te,[c(a,{presence:"busy",seed:"seed"},{default:l(()=>[se]),_:1})]),s("div",re,[c(a,{presence:"busy",seed:"seed",size:"lg"},{default:l(()=>[oe]),_:1})])])}const le=_(R,[["render",ne],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]]);R.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const q=j(),ce={size:"md",presence:null},F={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{control:"select",options:Object.keys(x)},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:L},presence:{control:{type:"select"},options:Object.values(U),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:q,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},de={title:"Components/Avatar",component:p,argTypes:F,excludeStories:/.*Data$/},ie=e=>v(e,K),pe=e=>v(e,X),ue=e=>v(e,le),t={render:ie,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${u}" alt="Person Avatar">`,initials:"PS"}},r={...t,args:{default:"DP"}},o={render:pe,args:{default:"user"},argTypes:{default:{options:q,control:{type:"select",labels:{undefined:"(empty)"}}}}},n={render:ue,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var D,A,I;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var w,N,V;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const me=["argsData","argTypesData","Default","Initials","Icon","Presence"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Icon:o,Initials:r,Presence:n,__namedExportsOrder:me,argTypesData:F,argsData:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{De as A,t as D,o as I,n as P,r as a,ce as b,F as c};
//# sourceMappingURL=avatar.stories-16fb0f1c.js.map
