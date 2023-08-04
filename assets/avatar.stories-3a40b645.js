import{e as D,c as v}from"./storybook_utils-010d0d6a.js";import{D as o,A as f,a as h,b as x}from"./avatar-5214a47e.js";import{n as _}from"./_plugin-vue2_normalizer-2bbd088e.js";const T={name:"DtAvatarDefault",components:{DtAvatar:o}};var z=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,"full-name":e.fullName,"icon-name":e.iconName,"image-src":e.imageSrc,"image-alt":e.imageAlt,"icon-size":e.iconSize,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,"icon-class":e.iconClass,seed:e.seed,group:e.group,color:e.color,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}})},C=[],y=_(T,z,C,!1,null,null,null,null);const I=y.exports;y.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const b={name:"DtAvatarVariants",components:{DtAvatar:o},data(){return{avatarSizes:Object.keys(f)}}};var V=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-stack16"},[a("div",[a("h2",[e._v("Image")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Image","image-src":"/common/assets/person.png"}})}),1)]),a("div",[a("h2",[e._v("Initials")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Icon"}})}),1)]),a("div",[a("h2",[e._v("Icon")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Icon","icon-name":"user"}})}),1)]),a("div",[a("h2",[e._v("Presence")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("div",{key:`default-${t}`,staticClass:"d-d-inline-flex"},[a("dt-avatar",{attrs:{seed:e.seed,size:t,"full-name":"Person avatar",presence:"busy","image-src":"/common/assets/person.png"}})],1)}),0)])])},N=[],g=_(b,V,N,!1,null,null,null,null);const k=g.exports;g.exports.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const l=D(),A={size:"md",presence:null,fullName:"Jaqueline Nackos",imageAlt:"image-alt",seed:"",iconName:"accessibility",iconSize:"500"},S={avatarClass:{description:"Pass through classes. Used to customize the avatar container"},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:h},iconName:{options:l,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},overlayIcon:{options:l,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},presence:{defaultValue:null,control:{type:"select"},options:Object.values(x),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},size:{control:{type:"select"},options:Object.keys(f)}},O={title:"Components/Avatar",component:o,args:A,argTypes:S,excludeStories:/.*Data$/},P=(s,{argTypes:e})=>v(s,e,I),$=(s,{argTypes:e})=>v(s,e,k),r={render:P,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{imageSrc:"/common/assets/person.png"}},n={render:$,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    imageSrc: '/common/assets/person.png'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["argsData","argTypesData","Default","Variants"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:w,argTypesData:S,argsData:A,default:O},Symbol.toStringTag,{value:"Module"}));export{j as A,r as D,n as V};
//# sourceMappingURL=avatar.stories-3a40b645.js.map
