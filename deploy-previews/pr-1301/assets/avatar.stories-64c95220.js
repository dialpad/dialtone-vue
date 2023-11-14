import{g as w,c as k}from"./storybook_utils-182ea7b7.js";import{D as v,A as b,a as T,b as O}from"./avatar-ae34e090.js";import{s as z,o as r,b as i,k as l,e as a,F as m,z as p,u as o}from"./vue.esm-bundler-3a36b22d.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{a as R}from"./chunk-AY7I2SME-5eb1ab46.js";import{d as F}from"./avatar2-e5d57aa6.js";const V={name:"DtAvatarDefault",components:{DtAvatar:v}};function j(e,n,N,E,u,f){const s=z("dt-avatar");return r(),i(s,{id:e.$attrs.id,"full-name":e.$attrs.fullName,"icon-name":e.$attrs.iconName,"image-src":e.$attrs.imageSrc,"image-alt":e.$attrs.imageAlt,"icon-size":e.$attrs.iconSize,size:e.$attrs.size,presence:e.$attrs.presence,"avatar-class":e.$attrs.avatarClass,"canvas-class":e.$attrs.canvasClass,"icon-class":e.$attrs.iconClass,seed:e.$attrs.seed,group:e.$attrs.group,color:e.$attrs.color,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass,clickable:e.$attrs.clickable,onClick:e.$attrs.onClick},null,8,["id","full-name","icon-name","image-src","image-alt","icon-size","size","presence","avatar-class","canvas-class","icon-class","seed","group","color","overlay-icon","overlay-text","overlay-class","clickable","onClick"])}const B=D(V,[["render",j],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]]);V.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const C={name:"DtAvatarVariants",components:{DtAvatar:v},data(){return{avatarSizes:Object.keys(b)}},computed:{AVATAR_PRESENCE_STATES(){return T}}},L={class:"d-stack16"},U=a("h2",null,"Image",-1),q={class:"d-flow16 d-d-flex d-ai-center"},M=a("h2",null,"Initials",-1),G={class:"d-flow16 d-d-flex d-ai-center"},J=a("h2",null,"Icon",-1),Z={class:"d-flow16 d-d-flex d-ai-center"},H=a("h2",null,"Presence",-1),K={class:"d-flow16 d-d-flex d-ai-center"},Q=a("h2",null,"Overlay",-1),W={class:"d-flow16 d-d-flex"},X=a("h2",null,"Clickable",-1),Y={class:"d-flow16 d-d-flex"},x=a("h2",null,"Group",-1),ee={class:"d-flow16 d-d-flex"};function ae(e,n,N,E,u,f){const s=z("dt-avatar");return r(),l("div",L,[a("div",null,[U,a("div",q,[(r(!0),l(m,null,p(u.avatarSizes,t=>(r(),i(s,{key:`image-${t}`,seed:e.$attrs.seed,size:t,"full-name":"Avatar Image","image-src":e.$attrs.imageSrc},null,8,["seed","size","image-src"]))),128))])]),a("div",null,[M,a("div",G,[(r(!0),l(m,null,p(u.avatarSizes,t=>(r(),i(s,{key:`initials-${t}`,seed:e.$attrs.seed,size:t,"full-name":"Avatar Icon"},null,8,["seed","size"]))),128))])]),a("div",null,[J,a("div",Z,[(r(!0),l(m,null,p(u.avatarSizes,t=>(r(),i(s,{key:`icon-${t}`,seed:e.$attrs.seed,size:t,"full-name":"Avatar Icon","icon-name":"user"},null,8,["seed","size"]))),128))])]),a("div",null,[H,a("div",K,[(r(!0),l(m,null,p(f.AVATAR_PRESENCE_STATES,t=>(r(),i(s,{key:`presence-${t}`,seed:e.$attrs.seed,size:"md","full-name":"Person avatar","image-src":e.$attrs.imageSrc,presence:t},null,8,["seed","image-src","presence"]))),128))])]),a("div",null,[Q,a("div",W,[o(s,{seed:e.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":e.$attrs.imageSrc,"overlay-icon":"hear"},null,8,["seed","image-src"]),o(s,{seed:e.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":e.$attrs.imageSrc,"overlay-text":"+3"},null,8,["seed","image-src"])])]),a("div",null,[X,a("div",Y,[o(s,{seed:e.$attrs.seed,"full-name":"Person avatar",clickable:""},null,8,["seed"]),o(s,{seed:e.$attrs.seed,"icon-name":"user","aria-label":"user icon avatar",clickable:""},null,8,["seed"]),o(s,{seed:e.$attrs.seed,"full-name":"Person avatar","image-src":e.$attrs.imageSrc,clickable:""},null,8,["seed","image-src"])])]),a("div",null,[x,a("div",ee,[o(s,{seed:e.$attrs.seed,"full-name":"Person avatar",group:"3"},null,8,["seed"]),o(s,{seed:e.$attrs.seed,"icon-name":"user",group:"10"},null,8,["seed"]),o(s,{seed:e.$attrs.seed,"full-name":"Person avatar","image-src":e.$attrs.imageSrc,group:"100"},null,8,["seed","image-src"])])])])}const se=D(C,[["render",ae],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]]);C.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const g=w(),I={onClick:R("click"),size:"md",presence:null,fullName:"Jaqueline Nackos",imageAlt:"image-alt",imageSrc:F,seed:"",iconName:"accessibility",iconSize:"500"},P={avatarClass:{description:"Pass through classes. Used to customize the avatar container"},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:O},iconName:{options:g,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},overlayIcon:{options:g,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},presence:{defaultValue:null,control:{type:"select"},options:Object.values(T),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},size:{control:{type:"select"},options:Object.keys(b)},onClick:{table:{disable:!0}}},te={title:"Components/Avatar",component:v,args:I,argTypes:P,excludeStories:/.*Data$/},re=(e,{argTypes:n})=>k(e,n,B),oe=(e,{argTypes:n})=>k(e,n,se),c={render:re,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})]},d={render:oe,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var y,$,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })]
}`,...(h=($=c.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var _,S,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const ne=["argsData","argTypesData","Default","Variants"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:d,__namedExportsOrder:ne,argTypesData:P,argsData:I,default:te},Symbol.toStringTag,{value:"Module"}));export{pe as A,c as D,d as V};
//# sourceMappingURL=avatar.stories-64c95220.js.map
