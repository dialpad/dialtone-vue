import{h as $,d as N,c as i}from"./storybook_utils-7db28451.js";import{D as c,A as F,a as R,b as O,c as V}from"./avatar-0a77ba26.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as E}from"./icon-09f7d334.js";import{_ as l}from"./person-dcb8b062.js";const k={name:"DtAvatarDefault",components:{DtAvatar:c,htmlFragment:$}};var I=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,initials:e.initials,seed:e.seed,group:e.group,color:e.color,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("html-fragment",{attrs:{html:e.defaultSlot}})],1)},q=[];I._withStripped=!0;var p=d(k,I,q,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue";const j=p.exports;p.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const L={name:"DtAvatarDefault",components:{DtAvatar:c,DtIcon:E},computed:{iconSize(){return F[this.size??"md"]}}};var z=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,color:e.color,seed:e.seed,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("dt-icon",{directives:[{name:"show",rawName:"v-show",value:e.iconSize,expression:"iconSize"}],attrs:{name:e.defaultSlot,size:e.iconSize}})],1)},U=[];z._withStripped=!0;var u=d(L,z,U,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue";const M=u.exports;u.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const W={name:"DtAvatarWithPresence",components:{DtAvatar:c}};var b=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-d-flex"},[a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"lg"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1)])},Z=[];b._withStripped=!0;var m=d(W,b,Z,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue";const B=m.exports;m.exports.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const C=N(),G={size:"md",presence:null},w={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{control:{type:"select"},options:Object.keys(R)},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:O},presence:{defaultValue:null,control:{type:"select"},options:Object.values(V),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:C,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},H={title:"Components/Avatar",component:c,argTypes:w,excludeStories:/.*Data$/},J=(t,{argTypes:e})=>i(t,e,j),K=(t,{argTypes:e})=>i(t,e,M),Q=(t,{argTypes:e})=>i(t,e,B),r={render:J,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${l}" alt="Person Avatar">`,initials:"PS"},parameters:{percy:{args:{seed:"seed"}}}},s={...r,args:{default:"DP"}},n={render:K,args:{default:"user"},argTypes:{default:{options:C,control:{type:"select",labels:{undefined:"(empty)"}}}}},o={render:Q,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var v,_,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    default: \`<img data-qa="dt-avatar-image" src="\${defaultImage}" alt="Person Avatar">\`,
    initials: 'PS'
  },
  parameters: {
    percy: {
      args: {
        seed: 'seed'
      }
    }
  }
}`,...(f=(_=r.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var y,g,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    default: 'DP'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var D,A,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var x,T,P;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const X=["argsData","argTypesData","Default","Initials","Icon","Presence"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Icon:n,Initials:s,Presence:o,__namedExportsOrder:X,argTypesData:w,argsData:G,default:H},Symbol.toStringTag,{value:"Module"}));export{se as A,r as D,n as I,o as P,s as a};
//# sourceMappingURL=avatar.stories-aa1b2d2b.js.map
