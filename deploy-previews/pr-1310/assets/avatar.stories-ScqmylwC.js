import{a as x,c as _}from"./storybook_utils-XrTpeJKJ.js";import{D as o,A as g,a as y,b as C}from"./avatar-x2znKDE8.js";import{n as $}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{a as b}from"./chunk-AY7I2SME-4UylTnhF.js";import{d as k}from"./avatar2-brBbnWbv.js";const D={name:"DtAvatarDefault",components:{DtAvatar:o}};var S=function(){var a=this,e=a._self._c;return e("dt-avatar",{attrs:{id:a.$attrs.id,"full-name":a.$attrs.fullName,"icon-name":a.$attrs.iconName,"image-src":a.$attrs.imageSrc,"image-alt":a.$attrs.imageAlt,"icon-size":a.$attrs.iconSize,size:a.$attrs.size,presence:a.$attrs.presence,"avatar-class":a.$attrs.avatarClass,"canvas-class":a.$attrs.canvasClass,"icon-class":a.$attrs.iconClass,seed:a.$attrs.seed,group:a.$attrs.group,color:a.$attrs.color,"overlay-icon":a.$attrs.overlayIcon,"overlay-text":a.$attrs.overlayText,"overlay-class":a.$attrs.overlayClass,clickable:a.$attrs.clickable},on:{click:a.$attrs.onClick}})},z=[];S._withStripped=!0;var l=$(D,S,z,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue";const I=l.exports;l.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const P={name:"DtAvatarVariants",components:{DtAvatar:o},data(){return{avatarSizes:Object.keys(g)}},computed:{AVATAR_PRESENCE_STATES(){return y}}};var A=function(){var a=this,e=a._self._c;return e("div",{staticClass:"d-stack16"},[e("div",[e("h2",[a._v("Image")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.avatarSizes,function(t){return e("dt-avatar",{key:`image-${t}`,attrs:{seed:a.$attrs.seed,size:t,"full-name":"Avatar Image","image-src":a.$attrs.imageSrc}})}),1)]),e("div",[e("h2",[a._v("Initials")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.avatarSizes,function(t){return e("dt-avatar",{key:`initials-${t}`,attrs:{seed:a.$attrs.seed,size:t,"full-name":"Avatar Icon"}})}),1)]),e("div",[e("h2",[a._v("Icon")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.avatarSizes,function(t){return e("dt-avatar",{key:`icon-${t}`,attrs:{seed:a.$attrs.seed,size:t,"full-name":"Avatar Icon","icon-name":"user"}})}),1)]),e("div",[e("h2",[a._v("Presence")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.AVATAR_PRESENCE_STATES,function(t){return e("dt-avatar",{key:`presence-${t}`,attrs:{seed:a.$attrs.seed,size:"md","full-name":"Person avatar","image-src":a.$attrs.imageSrc,presence:t}})}),1)]),e("div",[e("h2",[a._v("Overlay")]),e("div",{staticClass:"d-flow16 d-d-flex"},[e("dt-avatar",{attrs:{seed:a.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":a.$attrs.imageSrc,"overlay-icon":"hear"}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":a.$attrs.imageSrc,"overlay-text":"+3"}})],1)]),e("div",[e("h2",[a._v("Clickable")]),e("div",{staticClass:"d-flow16 d-d-flex"},[e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar",clickable:""}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"icon-name":"user","aria-label":"user icon avatar",clickable:""}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar","image-src":a.$attrs.imageSrc,clickable:""}})],1)]),e("div",[e("h2",[a._v("Group")]),e("div",{staticClass:"d-flow16 d-d-flex"},[e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar",group:3}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"icon-name":"user",group:10}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar","image-src":a.$attrs.imageSrc,group:100}})],1)])])},V=[];A._withStripped=!0;var i=$(P,A,V,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue";const w=i.exports;i.exports.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const c=x(),h={onClick:b("click"),size:"md",presence:null,fullName:"Jaqueline Nackos",imageAlt:"image-alt",imageSrc:k,seed:"",iconName:"accessibility",iconSize:"500"},T={avatarClass:{description:"Pass through classes. Used to customize the avatar container"},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:C},iconName:{options:c,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},overlayIcon:{options:c,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},presence:{defaultValue:null,control:{type:"select"},options:Object.values(y),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},size:{control:{type:"select"},options:Object.keys(g)},onClick:{table:{disable:!0}}},E={title:"Components/Avatar",component:o,args:h,argTypes:T,excludeStories:/.*Data$/},N=(s,{argTypes:a})=>_(s,a,I),R=(s,{argTypes:a})=>_(s,a,w),r={render:N,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})]},n={render:R,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var d,u,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })]
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const O=["argsData","argTypesData","Default","Variants"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:O,argTypesData:T,argsData:h,default:E},Symbol.toStringTag,{value:"Module"}));export{M as A,r as D,n as V};
//# sourceMappingURL=avatar.stories-ScqmylwC.js.map