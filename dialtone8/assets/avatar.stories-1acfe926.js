import{h as z,g as C,c as i}from"./storybook_utils-5c71a000.js";import{D as c,A as N,a as $,b as F,c as R}from"./avatar-8512ad5d.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as O}from"./icon-405b7e51.js";import{d as l}from"./person-13c0d6d2.js";const V={name:"DtAvatarDefault",components:{DtAvatar:c,htmlFragment:z}};var w=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,initials:e.initials,seed:e.seed,group:e.group,color:e.color,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("html-fragment",{attrs:{html:e.defaultSlot}})],1)},E=[],T=d(V,w,E,!1,null,null,null,null);const q=T.exports;T.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const j={name:"DtAvatarDefault",components:{DtAvatar:c,DtIcon:O},computed:{iconSize(){return N[this.size??"md"]}}};var k=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,size:e.size,presence:e.presence,color:e.color,seed:e.seed,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}},[a("dt-icon",{directives:[{name:"show",rawName:"v-show",value:e.iconSize,expression:"iconSize"}],attrs:{name:e.defaultSlot,size:e.iconSize}})],1)},L=[],P=d(j,k,L,!1,null,null,null,null);const U=P.exports;P.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_icon.story.vue"]};const M={name:"DtAvatarWithPresence",components:{DtAvatar:c}};var W=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-d-flex"},[a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"sm"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1),a("div",{staticClass:"d-p8 d-d-flex d-ai-center"},[a("dt-avatar",{attrs:{presence:"busy",seed:"seed",size:"lg"}},[a("img",{attrs:{"data-qa":"dt-avatar-image",src:l,alt:"Person Avatar"}})])],1)])},Z=[],S=d(M,W,Z,!1,null,null,null,null);const B=S.exports;S.exports.__docgenInfo={displayName:"DtAvatarWithPresence",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_presence.story.vue"]};const I=C(),G={size:"md",presence:null},b={default:{control:"text",table:{type:{summary:"VNode|String|Component"}}},size:{control:{type:"select"},options:Object.keys($)},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:F},presence:{defaultValue:null,control:{type:"select"},options:Object.values(R),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:I,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"}},H={title:"Components/Avatar",component:c,argTypes:b,excludeStories:/.*Data$/},J=(t,{argTypes:e})=>i(t,e,q),K=(t,{argTypes:e})=>i(t,e,U),Q=(t,{argTypes:e})=>i(t,e,B),s={render:J,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{default:`<img data-qa="dt-avatar-image" src="${l}" alt="Person Avatar">`,initials:"PS"}},r={...s,args:{default:"DP"}},n={render:K,args:{default:"user"},argTypes:{default:{options:I,control:{type:"select",labels:{undefined:"(empty)"}}}}},o={render:Q,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(_=(f=r.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var y,g,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(g=n.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var A,h,x;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: PresenceTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const X=["argsData","argTypesData","Default","Initials","Icon","Presence"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Icon:n,Initials:r,Presence:o,__namedExportsOrder:X,argTypesData:b,argsData:G,default:H},Symbol.toStringTag,{value:"Module"}));export{re as A,s as D,n as I,o as P,r as a,G as b,b as c};
//# sourceMappingURL=avatar.stories-1acfe926.js.map
