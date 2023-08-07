import{g as w,c as A}from"./storybook_utils-79c013ce.js";import{D as m,A as S,a as O,b as P}from"./avatar-9e7e1f9d.js";import{k as z,o as t,v as u,d as o,e as a,F as c,g as d,l as E}from"./vue.esm-bundler-2457a580.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const T={name:"DtAvatarDefault",components:{DtAvatar:m}};function F(e,p,k,N,n,C){const r=z("dt-avatar");return t(),u(r,{id:e.$attrs.id,"full-name":e.$attrs.fullName,"icon-name":e.$attrs.iconName,"image-src":e.$attrs.imageSrc,"image-alt":e.$attrs.imageAlt,"icon-size":e.$attrs.iconSize,size:e.$attrs.size,presence:e.$attrs.presence,"avatar-class":e.$attrs.avatarClass,"canvas-class":e.$attrs.canvasClass,"icon-class":e.$attrs.iconClass,seed:e.$attrs.seed,group:e.$attrs.group,color:e.$attrs.color,"overlay-icon":e.$attrs.overlayIcon,"overlay-text":e.$attrs.overlayText,"overlay-class":e.$attrs.overlayClass},null,8,["id","full-name","icon-name","image-src","image-alt","icon-size","size","presence","avatar-class","canvas-class","icon-class","seed","group","color","overlay-icon","overlay-text","overlay-class"])}const R=D(T,[["render",F],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]]);T.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const V={name:"DtAvatarVariants",components:{DtAvatar:m},data(){return{avatarSizes:Object.keys(S)}}},j={class:"d-stack16"},B=a("h2",null,"Image",-1),L={class:"d-flow16 d-d-flex d-ai-center"},U=a("h2",null,"Initials",-1),q={class:"d-flow16 d-d-flex d-ai-center"},M=a("h2",null,"Icon",-1),J={class:"d-flow16 d-d-flex d-ai-center"},Z=a("h2",null,"Presence",-1),G={class:"d-flow16 d-d-flex d-ai-center"};function H(e,p,k,N,n,C){const r=z("dt-avatar");return t(),o("div",j,[a("div",null,[B,a("div",L,[(t(!0),o(c,null,d(n.avatarSizes,s=>(t(),u(r,{key:`default-${s}`,seed:e.$attrs.seed,size:s,"full-name":"Avatar Image","image-src":"/common/assets/person.png"},null,8,["seed","size"]))),128))])]),a("div",null,[U,a("div",q,[(t(!0),o(c,null,d(n.avatarSizes,s=>(t(),u(r,{key:`default-${s}`,seed:e.$attrs.seed,size:s,"full-name":"Avatar Icon"},null,8,["seed","size"]))),128))])]),a("div",null,[M,a("div",J,[(t(!0),o(c,null,d(n.avatarSizes,s=>(t(),u(r,{key:`default-${s}`,seed:e.$attrs.seed,size:s,"full-name":"Avatar Icon","icon-name":"user"},null,8,["seed","size"]))),128))])]),a("div",null,[Z,a("div",G,[(t(!0),o(c,null,d(n.avatarSizes,s=>(t(),o("div",{key:`default-${s}`,class:"d-d-inline-flex"},[E(r,{seed:e.$attrs.seed,size:s,"full-name":"Person avatar",presence:"busy","image-src":"/common/assets/person.png"},null,8,["seed","size"])]))),128))])])])}const K=D(V,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]]);V.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const v=w(),I={size:"md",presence:null,fullName:"Jaqueline Nackos",imageAlt:"image-alt",seed:"",iconName:"accessibility",iconSize:"500"},b={avatarClass:{description:"Pass through classes. Used to customize the avatar container"},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:O},iconName:{options:v,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},overlayIcon:{options:v,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},presence:{defaultValue:null,control:{type:"select"},options:Object.values(P),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},size:{control:{type:"select"},options:Object.keys(S)}},Q={title:"Components/Avatar",component:m,args:I,argTypes:b,excludeStories:/.*Data$/},W=e=>A(e,R),X=(e,{argTypes:p})=>A(e,K),l={render:W,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{imageSrc:"/common/assets/person.png"}},i={render:X,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var f,g,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    imageSrc: '/common/assets/person.png'
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var _,h,$;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(h=i.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};const Y=["argsData","argTypesData","Default","Variants"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Variants:i,__namedExportsOrder:Y,argTypesData:b,argsData:I,default:Q},Symbol.toStringTag,{value:"Module"}));export{te as A,l as D,i as V};
//# sourceMappingURL=avatar.stories-1563c932.js.map
