import{g as j,c as v}from"./storybook_utils-b6841212.js";import{D as i,A as x,a as B,b as U}from"./avatar-bfaf9977.js";import{V as L}from"./v_html-12fe00d1.js";import{a as d,o as f,b as k,w as l,d as c,e as M,f as s}from"./vue.esm-bundler-8a039e44.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{D as W}from"./icon-42e3648b.js";import{d as p}from"./person-13c0d6d2.js";const w={name:"DtAvatarDefault",components:{DtAvatar:i,VHtml:L}};function Z(e,g,y,$,h,m){const a=d("v-html"),u=d("dt-avatar");return f(),k(u,{id:e.$attrs.id,size:e.$attrs.size,presence:e.$attrs.presence,"avatar-class":e.$attrs.avatarClass,"canvas-class":e.$attrs.canvasClass,initials:e.$attrs.initials,seed:e.$attrs.seed,gradient:e.$attrs.gradient,group:e.$attrs.group,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass},{default:l(()=>[c(a,{html:e.defaultSlot},null,8,["html"])]),_:1},8,["id","size","presence","avatar-class","canvas-class","initials","seed","gradient","group","overlay-icon","overlay-text","overlay-class"])}const H=_(w,[["render",Z]]);w.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const O={name:"DtAvatarDefaultIcon",components:{DtAvatar:i,DtIcon:W},computed:{iconSize(){return x[this.$attrs.size]}}};function G(e,g,y,$,h,m){const a=d("dt-icon"),u=d("dt-avatar");return f(),k(u,{id:e.$attrs.id,size:e.$attrs.size,presence:e.$attrs.presence,seed:e.$attrs.seed,gradient:e.$attrs.gradient,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass},{default:l(()=>[c(a,{name:e.defaultSlot,size:m.iconSize},null,8,["name","size"])]),_:1},8,["id","size","presence","seed","gradient","overlay-icon","overlay-text","overlay-class"])}const J=_(O,[["render",G]]);O.__docgenInfo={displayName:"DtAvatarDefaultIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const q={name:"DtAvatarWithPresence",components:{DtAvatar:i}},K={class:"d-d-flex"},Q={class:"d-p8 d-d-flex d-ai-center"},X=s("img",{"data-qa":"dt-avatar-image",src:p,alt:"Person Avatar"},null,-1),Y={class:"d-p8 d-d-flex d-ai-center"},ee=s("img",{"data-qa":"dt-avatar-image",src:p,alt:"Person Avatar"},null,-1),ae={class:"d-p8 d-d-flex d-ai-center"},te=s("img",{"data-qa":"dt-avatar-image",src:p,alt:"Person Avatar"},null,-1);function se(e,g,y,$,h,m){const a=d("dt-avatar");return f(),M("div",K,[s("div",Q,[c(a,{presence:"busy",seed:"seed",size:"sm"},{default:l(()=>[X]),_:1})]),s("div",Y,[c(a,{presence:"busy",seed:"seed"},{default:l(()=>[ee]),_:1})]),s("div",ae,[c(a,{presence:"busy",seed:"seed",size:"lg"},{default:l(()=>[te]),_:1})])])}const re=_(q,[["render",se]]);q.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const F=j(),oe={size:"md",presence:null},R={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{defaultValue:"md",options:Object.keys(B),control:"select"},presence:{defaultValue:null,options:Object.values(U),control:"select",table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:F,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},ne={title:"Components/Avatar",component:i,argTypes:R,excludeStories:/.*Data$/},le=e=>v(e,H),ce=e=>v(e,J),de=e=>v(e,re),t={render:le,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${p}" alt="Person Avatar">`,initials:"PS"}},r={...t,args:{default:"DP"}},o={render:ce,args:{default:"accessibility"},argTypes:{default:{options:F,control:{type:"select",labels:{undefined:"(empty)"}}}}},n={render:de,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var D,A,I;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    default: \`<img data-qa="dt-avatar-image" src="\${defaultImage}" alt="Person Avatar">\`,
    initials: 'PS'
  }
}`,...(I=(A=t.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var P,T,S;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Default,
  args: {
    default: 'DP'
  }
}`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var b,z,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: IconTemplate,
  args: {
    default: 'accessibility'
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
}`,...(V=(z=o.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var C,N,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const ie=["argsData","argTypesData","Default","Initials","Icon","Presence"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Icon:o,Initials:r,Presence:n,__namedExportsOrder:ie,argTypesData:R,argsData:oe,default:ne},Symbol.toStringTag,{value:"Module"}));export{ye as A,t as D,o as I,n as P,r as a,oe as b,R as c};
//# sourceMappingURL=avatar.stories-56c6f0b0.js.map
