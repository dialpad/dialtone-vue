import{g as O,c as b}from"./storybook_utils-98c88692.js";import{D as p,A as k,a as w,b as E}from"./avatar-5a9c331b.js";import{u as A,o as r,b as i,p as o,e as a,F as u,B as m,x as l}from"./vue.esm-bundler-24d82261.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{a as F}from"./chunk-AY7I2SME-5eb1ab46.js";const S={name:"DtAvatarDefault",components:{DtAvatar:p}};function R(e,C,I,N,n,P){const s=A("dt-avatar");return r(),i(s,{id:e.$attrs.id,"full-name":e.$attrs.fullName,"icon-name":e.$attrs.iconName,"image-src":e.$attrs.imageSrc,"image-alt":e.$attrs.imageAlt,"icon-size":e.$attrs.iconSize,size:e.$attrs.size,presence:e.$attrs.presence,"avatar-class":e.$attrs.avatarClass,"canvas-class":e.$attrs.canvasClass,"icon-class":e.$attrs.iconClass,seed:e.$attrs.seed,group:e.$attrs.group,color:e.$attrs.color,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass,clickable:e.$attrs.clickable,onClick:e.$attrs.onClick},null,8,["id","full-name","icon-name","image-src","image-alt","icon-size","size","presence","avatar-class","canvas-class","icon-class","seed","group","color","overlay-icon","overlay-text","overlay-class","clickable","onClick"])}const j=z(S,[["render",R]]);S.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const D={name:"DtAvatarVariants",components:{DtAvatar:p},data(){return{avatarSizes:Object.keys(k)}}},B={class:"d-stack16"},L=a("h2",null,"Image",-1),U={class:"d-flow16 d-d-flex d-ai-center"},q=a("h2",null,"Initials",-1),M={class:"d-flow16 d-d-flex d-ai-center"},J=a("h2",null,"Icon",-1),Z={class:"d-flow16 d-d-flex d-ai-center"},G=a("h2",null,"Presence",-1),H={class:"d-flow16 d-d-flex d-ai-center"},K=a("h2",null,"Overlay",-1),Q={class:"d-flow16 d-d-flex"},W=a("h2",null,"Clickable",-1),X={class:"d-flow16 d-d-flex"};function Y(e,C,I,N,n,P){const s=A("dt-avatar");return r(),o("div",B,[a("div",null,[L,a("div",U,[(r(!0),o(u,null,m(n.avatarSizes,t=>(r(),i(s,{key:`image-${t}`,seed:e.$attrs.seed,size:t,"full-name":"Avatar Image","image-src":"/common/assets/person.png"},null,8,["seed","size"]))),128))])]),a("div",null,[q,a("div",M,[(r(!0),o(u,null,m(n.avatarSizes,t=>(r(),i(s,{key:`initials-${t}`,seed:e.$attrs.seed,size:t,"full-name":"Avatar Icon"},null,8,["seed","size"]))),128))])]),a("div",null,[J,a("div",Z,[(r(!0),o(u,null,m(n.avatarSizes,t=>(r(),i(s,{key:`icon-${t}`,seed:e.$attrs.seed,size:t,"full-name":"Avatar Icon","icon-name":"user"},null,8,["seed","size"]))),128))])]),a("div",null,[G,a("div",H,[(r(!0),o(u,null,m(n.avatarSizes,t=>(r(),i(s,{key:`presence-${t}`,seed:e.$attrs.seed,size:t,"full-name":"Person avatar",presence:"busy","image-src":"/common/assets/person.png"},null,8,["seed","size"]))),128))])]),a("div",null,[K,a("div",Q,[l(s,{seed:e.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":"/common/assets/person.png","overlay-icon":"hear"},null,8,["seed"]),l(s,{seed:e.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":"/common/assets/person.png","overlay-text":"+3"},null,8,["seed"])])]),a("div",null,[W,a("div",X,[l(s,{seed:e.$attrs.seed,"full-name":"Person avatar","image-src":"/common/assets/person.png",clickable:""},null,8,["seed"]),l(s,{seed:e.$attrs.seed,"full-name":"Person avatar",clickable:""},null,8,["seed"]),l(s,{seed:e.$attrs.seed,"icon-name":"user","aria-label":"user icon avatar",clickable:""},null,8,["seed"])])])])}const x=z(D,[["render",Y]]);D.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const v=O(),T={onClick:F("click"),size:"md",presence:null,fullName:"Jaqueline Nackos",imageAlt:"image-alt",seed:"",iconName:"accessibility",iconSize:"500"},V={avatarClass:{description:"Pass through classes. Used to customize the avatar container"},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:w},iconName:{options:v,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},overlayIcon:{options:v,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},presence:{defaultValue:null,control:{type:"select"},options:Object.values(E),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},size:{control:{type:"select"},options:Object.keys(k)},onClick:{table:{disable:!0}}},ee={title:"Components/Avatar",component:p,args:T,argTypes:V,excludeStories:/.*Data$/},ae=e=>b(e,j),se=e=>b(e,x),c={render:ae,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{imageSrc:"/common/assets/person.png"}},d={render:se,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var f,g,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    imageSrc: '/common/assets/person.png'
  }
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var $,h,_;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: VariantsTemplate,
  parameters: {
    percy: {
      args: {
        seed: 'seed'
      }
    },
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(_=(h=d.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const te=["argsData","argTypesData","Default","Variants"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:d,__namedExportsOrder:te,argTypesData:V,argsData:T,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as A,c as D,d as V};
//# sourceMappingURL=avatar.stories-c6919892.js.map
