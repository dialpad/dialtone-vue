import{e as x,c as _}from"./storybook_utils-6f4fc6ad.js";import{D as o,A as y,a as T,b as z}from"./avatar-25a9a9f8.js";import{n as g}from"./_plugin-vue2_normalizer-2bbd088e.js";const I={name:"DtAvatarDefault",components:{DtAvatar:o}};var S=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,"full-name":e.fullName,"icon-name":e.iconName,"image-src":e.imageSrc,"image-alt":e.imageAlt,"icon-size":e.iconSize,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,seed:e.seed,group:e.group,color:e.color,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}})},b=[];S._withStripped=!0;var l=g(I,S,b,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue";const C=l.exports;l.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const V={name:"DtAvatarVariants",components:{DtAvatar:o},data(){return{avatarSizes:Object.keys(y)}}};var h=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-stack16"},[a("div",[a("h2",[e._v("Image")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Image","image-src":"/common/assets/person.png"}})}),1)]),a("div",[a("h2",[e._v("Initials")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Icon"}})}),1)]),a("div",[a("h2",[e._v("Icon")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Icon","icon-name":"user"}})}),1)]),a("div",[a("h2",[e._v("Presence")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("div",{key:`default-${t}`,staticClass:"d-d-inline-flex"},[a("dt-avatar",{attrs:{seed:e.seed,size:t,"full-name":"Person avatar",presence:"busy","image-src":"/common/assets/person.png"}})],1)}),0)])])},N=[];h._withStripped=!0;var i=g(V,h,N,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue";const k=i.exports;i.exports.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const c=x(),A={size:"md",presence:null,fullName:"Jaqueline Nackos",imageAlt:"image-alt",seed:"",iconName:"accessibility",iconSize:"500"},D={avatarClass:{description:"Pass through classes. Used to customize the avatar container"},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:T},iconName:{options:c,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},overlayIcon:{options:c,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},presence:{defaultValue:null,control:{type:"select"},options:Object.values(z),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},size:{control:{type:"select"},options:Object.keys(y)}},w={title:"Components/Avatar",component:o,args:A,argTypes:D,excludeStories:/.*Data$/},O=(s,{argTypes:e})=>_(s,e,C),P=(s,{argTypes:e})=>_(s,e,k),r={render:O,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{imageSrc:"/common/assets/person.png"}},n={render:P,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    imageSrc: '/common/assets/person.png'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,v,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const $=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:$,argTypesData:D,argsData:A,default:w},Symbol.toStringTag,{value:"Module"}));export{j as A,r as D,n as V};
//# sourceMappingURL=avatar.stories-237108da.js.map
