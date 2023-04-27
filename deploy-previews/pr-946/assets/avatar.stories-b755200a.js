import{n as i,h as $,g as F,c as d}from"./_plugin-vue2_normalizer-bbedbd26.js";import{D as c,A as N,a as V,b as E}from"./avatar-28d5b320.js";import{D as R}from"./icon-e129d5a5.js";import{d as l}from"./person-13c0d6d2.js";const k={name:"DtAvatarDefault",components:{DtAvatar:c,htmlFragment:$}};var I=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,initials:e.initials,seed:e.seed,gradient:e.gradient,group:e.group,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("html-fragment",{attrs:{html:e.defaultSlot}})],1)},O=[];I._withStripped=!0;var u=i(k,I,O,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue";const q=u.exports;u.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const j={name:"DtAvatarDefault",components:{DtAvatar:c,DtIcon:R},computed:{iconSize(){return N[this.size]}}};var b=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,seed:e.seed,gradient:e.gradient,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("dt-icon",{attrs:{name:e.defaultSlot,size:e.iconSize}})],1)},U=[];b._withStripped=!0;var p=i(j,b,U,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue";const L=p.exports;p.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const M={name:"DtAvatarWithPresence",components:{DtAvatar:c}};var z=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-d-flex"},[a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"lg"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1)])},W=[];z._withStripped=!0;var m=i(M,z,W,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue";const Z=m.exports;m.exports.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const C=F(),B={size:"md",presence:null},w={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{defaultValue:"md",control:{type:"select",options:Object.keys(V)}},presence:{defaultValue:null,control:{type:"select",options:Object.values(E)},table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:C,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},G={title:"Components/Avatar",component:c,argTypes:w,excludeStories:/.*Data$/},H=(t,{argTypes:e})=>d(t,e,q),J=(t,{argTypes:e})=>d(t,e,L),K=(t,{argTypes:e})=>d(t,e,Z),s={render:H,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${l}" alt="Person Avatar">`,initials:"PS"}},r={...s,args:{default:"DP"}},n={render:J,args:{default:"accessibility"},argTypes:{default:{options:C,control:{type:"select",labels:{undefined:"(empty)"}}}}},o={render:K,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var v,_,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    default: \`<img data-qa="dt-avatar-image" src="\${defaultImage}" alt="Person Avatar">\`,
    initials: 'PS'
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Default,
  args: {
    default: 'DP'
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var D,A,x;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(A=n.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var P,S,T;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const Q=["argsData","argTypesData","Default","Initials","Icon","Presence"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Icon:n,Initials:r,Presence:o,__namedExportsOrder:Q,argTypesData:w,argsData:B,default:G},Symbol.toStringTag,{value:"Module"}));export{te as A,s as D,n as I,o as P,r as a,B as b,w as c};
//# sourceMappingURL=avatar.stories-b755200a.js.map
