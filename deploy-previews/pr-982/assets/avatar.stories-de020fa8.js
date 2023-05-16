import{h as $,g as F,c as i}from"./storybook_utils-d96e8b3b.js";import{D as c,A as N,a as R,b as O,c as V}from"./avatar-9122d3aa.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as E}from"./icon-408ae60c.js";import{d as l}from"./person-13c0d6d2.js";const k={name:"DtAvatarDefault",components:{DtAvatar:c,htmlFragment:$}};var I=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,initials:e.initials,seed:e.seed,group:e.group,color:e.color,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("html-fragment",{attrs:{html:e.defaultSlot}})],1)},q=[];I._withStripped=!0;var p=d(k,I,q,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue";const j=p.exports;p.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const L={name:"DtAvatarDefault",components:{DtAvatar:c,DtIcon:E},computed:{iconSize(){return N[this.size]}}};var b=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,color:e.color,seed:e.seed,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("dt-icon",{attrs:{name:e.defaultSlot,size:e.iconSize}})],1)},U=[];b._withStripped=!0;var u=d(L,b,U,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue";const M=u.exports;u.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const W={name:"DtAvatarWithPresence",components:{DtAvatar:c}};var z=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-d-flex"},[a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"lg"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1)])},Z=[];z._withStripped=!0;var m=d(W,z,Z,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue";const B=m.exports;m.exports.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const C=F(),G={size:"md",presence:null},w={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{control:{type:"select"},options:Object.keys(R)},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:O},presence:{defaultValue:null,control:{type:"select"},options:Object.values(V),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:C,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},H={title:"Components/Avatar",component:c,argTypes:w,excludeStories:/.*Data$/},J=(t,{argTypes:e})=>i(t,e,j),K=(t,{argTypes:e})=>i(t,e,M),Q=(t,{argTypes:e})=>i(t,e,B),s={render:J,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${l}" alt="Person Avatar">`,initials:"PS"}},r={...s,args:{default:"DP"}},n={render:K,args:{default:"user"},argTypes:{default:{options:C,control:{type:"select",labels:{undefined:"(empty)"}}}}},o={render:Q,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var v,_,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    default: \`<img data-qa="dt-avatar-image" src="\${defaultImage}" alt="Person Avatar">\`,
    initials: 'PS'
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var y,g,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    default: 'DP'
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var D,A,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,x,P;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const X=["argsData","argTypesData","Default","Initials","Icon","Presence"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Icon:n,Initials:r,Presence:o,__namedExportsOrder:X,argTypesData:w,argsData:G,default:H},Symbol.toStringTag,{value:"Module"}));export{re as A,s as D,n as I,o as P,r as a,G as b,w as c};
//# sourceMappingURL=avatar.stories-de020fa8.js.map
