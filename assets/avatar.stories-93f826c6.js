import{h as z,g as C,c as i}from"./storybook_utils-d749c98e.js";import{D as c,A as $,a as F,b as N}from"./avatar-384fc845.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as V}from"./icon-86313b55.js";import{d as l}from"./person-13c0d6d2.js";const E={name:"DtAvatarDefault",components:{DtAvatar:c,htmlFragment:z}};var R=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,initials:e.initials,seed:e.seed,gradient:e.gradient,group:e.group,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("html-fragment",{attrs:{html:e.defaultSlot}})],1)},O=[],P=d(E,R,O,!1,null,null,null,null);const q=P.exports;P.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const w={name:"DtAvatarDefault",components:{DtAvatar:c,DtIcon:V},computed:{iconSize(){return $[this.size]}}};var j=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,seed:e.seed,gradient:e.gradient,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("dt-icon",{attrs:{name:e.defaultSlot,size:e.iconSize}})],1)},k=[],T=d(w,j,k,!1,null,null,null,null);const U=T.exports;T.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const L={name:"DtAvatarWithPresence",components:{DtAvatar:c}};var M=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-d-flex"},[a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"lg"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1)])},W=[],I=d(L,M,W,!1,null,null,null,null);const Z=I.exports;I.exports.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const S=C(),B={size:"md",presence:null},b={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{defaultValue:"md",control:{type:"select",options:Object.keys(F)}},presence:{defaultValue:null,control:{type:"select",options:Object.values(N)},table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:S,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},G={title:"Components/Avatar",component:c,argTypes:b,excludeStories:/.*Data$/},H=(t,{argTypes:e})=>i(t,e,q),J=(t,{argTypes:e})=>i(t,e,U),K=(t,{argTypes:e})=>i(t,e,Z),s={render:H,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${l}" alt="Person Avatar">`,initials:"PS"}},r={...s,args:{default:"DP"}},n={render:J,args:{default:"accessibility"},argTypes:{default:{options:S,control:{type:"select",labels:{undefined:"(empty)"}}}}},o={render:K,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    default: \`<img data-qa="dt-avatar-image" src="\${defaultImage}" alt="Person Avatar">\`,
    initials: 'PS'
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,f,_;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Default,
  args: {
    default: 'DP'
  }
}`,...(_=(f=r.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var g,y,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var A,h,x;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Q=["argsData","argTypesData","Default","Initials","Icon","Presence"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Icon:n,Initials:r,Presence:o,__namedExportsOrder:Q,argTypesData:b,argsData:B,default:G},Symbol.toStringTag,{value:"Module"}));export{se as A,s as D,n as I,o as P,r as a,B as b,b as c};
//# sourceMappingURL=avatar.stories-93f826c6.js.map
