import{d as x,c as _}from"./storybook_utils-7db28451.js";import{D as o,A as y,a as T,b as z}from"./avatar-1d7f7046.js";import{n as g}from"./_plugin-vue2_normalizer-2bbd088e.js";import{d as I}from"./person-13c0d6d2.js";const V={name:"DtAvatarDefault",components:{DtAvatar:o}};var h=function(){var e=this,a=e._self._c;return a("dt-avatar",{attrs:{id:e.id,"full-name":e.fullName,"icon-name":e.iconName,"image-src":e.imageSrc,"icon-size":e.iconSize,size:e.size,presence:e.presence,"avatar-class":e.avatarClass,"canvas-class":e.canvasClass,seed:e.seed,group:e.group,color:e.color,"overlay-icon":e.overlayIcon,"overlay-text":e.overlayText,"overlay-class":e.overlayClass}})},b=[];h._withStripped=!0;var l=g(V,h,b,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue";const C=l.exports;l.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const k={name:"DtAvatarVariants",components:{DtAvatar:o},data(){return{avatarSizes:Object.keys(y)}}};var S=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-stack16"},[a("div",[a("h2",[e._v("Image")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Image","image-src":"/common/assets/person.png"}})}),1)]),a("div",[a("h2",[e._v("Initials")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Icon"}})}),1)]),a("div",[a("h2",[e._v("Icon")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("dt-avatar",{key:`default-${t}`,attrs:{seed:e.seed,size:t,"full-name":"Avatar Icon","icon-name":"user"}})}),1)]),a("div",[a("h2",[e._v("Presence")]),a("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},e._l(e.avatarSizes,function(t){return a("div",{key:`default-${t}`,staticClass:"d-d-inline-flex"},[a("dt-avatar",{attrs:{seed:e.seed,size:t,"full-name":"Person avatar",presence:"busy","image-src":"/common/assets/person.png"}})],1)}),0)])])},w=[];S._withStripped=!0;var c=g(k,S,w,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue";const N=c.exports;c.exports.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const i=x(),A={size:"md",presence:null,fullName:"Jaqueline Nackos",seed:null,iconSize:"500"},D={size:{control:{type:"select"},options:Object.keys(y)},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:T},presence:{defaultValue:null,control:{type:"select"},options:Object.values(z),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},avatarClass:{description:"Pass through classes. Used to customize the avatar container"},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayIcon:{options:i,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},iconName:{options:i,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null}},P={title:"Components/Avatar",component:o,args:A,argTypes:D,excludeStories:/.*Data$/},O=(s,{argTypes:e})=>_(s,e,C),$=(s,{argTypes:e})=>_(s,e,N),r={render:O,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})],args:{imageSrc:I}},n={render:$,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })],
  args: {
    imageSrc: defaultImage
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,m,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const R=["argsData","argTypesData","Default","Variants"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:R,argTypesData:D,argsData:A,default:P},Symbol.toStringTag,{value:"Module"}));export{q as A,r as D,n as V};
//# sourceMappingURL=avatar.stories-050b7a41.js.map
