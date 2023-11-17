import{a as h,c as p}from"./storybook_utils-XrTpeJKJ.js";import{D as o,A as f,a as _,b as T}from"./avatar-LEqFnfCl.js";import{n as g}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{a as x}from"./chunk-AY7I2SME-4UylTnhF.js";import{d as C}from"./avatar2-brBbnWbv.js";const b={name:"DtAvatarDefault",components:{DtAvatar:o}};var D=function(){var a=this,e=a._self._c;return e("dt-avatar",{attrs:{id:a.$attrs.id,"full-name":a.$attrs.fullName,"icon-name":a.$attrs.iconName,"image-src":a.$attrs.imageSrc,"image-alt":a.$attrs.imageAlt,"icon-size":a.$attrs.iconSize,size:a.$attrs.size,presence:a.$attrs.presence,"avatar-class":a.$attrs.avatarClass,"canvas-class":a.$attrs.canvasClass,"icon-class":a.$attrs.iconClass,seed:a.$attrs.seed,group:a.$attrs.group,color:a.$attrs.color,"overlay-icon":a.$attrs.overlayIcon,"overlay-text":a.$attrs.overlayText,"overlay-class":a.$attrs.overlayClass,clickable:a.$attrs.clickable},on:{click:a.$attrs.onClick}})},k=[],$=g(b,D,k,!1,null,null,null,null);const z=$.exports;$.exports.__docgenInfo={displayName:"DtAvatarDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_default.story.vue"]};const I={name:"DtAvatarVariants",components:{DtAvatar:o},data(){return{avatarSizes:Object.keys(f)}},computed:{AVATAR_PRESENCE_STATES(){return _}}};var P=function(){var a=this,e=a._self._c;return e("div",{staticClass:"d-stack16"},[e("div",[e("h2",[a._v("Image")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.avatarSizes,function(t){return e("dt-avatar",{key:`image-${t}`,attrs:{seed:a.$attrs.seed,size:t,"full-name":"Avatar Image","image-src":a.$attrs.imageSrc}})}),1)]),e("div",[e("h2",[a._v("Initials")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.avatarSizes,function(t){return e("dt-avatar",{key:`initials-${t}`,attrs:{seed:a.$attrs.seed,size:t,"full-name":"Avatar Icon"}})}),1)]),e("div",[e("h2",[a._v("Icon")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.avatarSizes,function(t){return e("dt-avatar",{key:`icon-${t}`,attrs:{seed:a.$attrs.seed,size:t,"full-name":"Avatar Icon","icon-name":"user"}})}),1)]),e("div",[e("h2",[a._v("Presence")]),e("div",{staticClass:"d-flow16 d-d-flex d-ai-center"},a._l(a.AVATAR_PRESENCE_STATES,function(t){return e("dt-avatar",{key:`presence-${t}`,attrs:{seed:a.$attrs.seed,size:"md","full-name":"Person avatar","image-src":a.$attrs.imageSrc,presence:t}})}),1)]),e("div",[e("h2",[a._v("Overlay")]),e("div",{staticClass:"d-flow16 d-d-flex"},[e("dt-avatar",{attrs:{seed:a.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":a.$attrs.imageSrc,"overlay-icon":"hear"}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,size:"xl","full-name":"Person avatar","image-src":a.$attrs.imageSrc,"overlay-text":"+3"}})],1)]),e("div",[e("h2",[a._v("Clickable")]),e("div",{staticClass:"d-flow16 d-d-flex"},[e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar",clickable:""}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"icon-name":"user","aria-label":"user icon avatar",clickable:""}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar","image-src":a.$attrs.imageSrc,clickable:""}})],1)]),e("div",[e("h2",[a._v("Group")]),e("div",{staticClass:"d-flow16 d-d-flex"},[e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar",group:3}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"icon-name":"user",group:10}}),e("dt-avatar",{attrs:{seed:a.$attrs.seed,"full-name":"Person avatar","image-src":a.$attrs.imageSrc,group:100}})],1)])])},V=[],y=g(I,P,V,!1,null,null,null,null);const E=y.exports;y.exports.__docgenInfo={displayName:"DtAvatarVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar_variants.story.vue"]};const l=h(),S={onClick:x("click"),size:"md",presence:null,fullName:"Jaqueline Nackos",imageAlt:"image-alt",imageSrc:C,seed:"",iconName:"accessibility",iconSize:"500"},A={avatarClass:{description:"Pass through classes. Used to customize the avatar container"},color:{control:{type:"select",labels:{undefined:"(empty)"}},options:T},iconName:{options:l,control:{type:"select",labels:{undefined:"(empty)"}}},iconSize:{defaultValue:null},id:{table:{defaultValue:{summary:"generated unique ID"}}},overlayClass:{description:"Pass through classes. Used to customize the avatar overlay"},overlayIcon:{options:l,control:{type:"select",labels:{undefined:"(empty)"}}},overlayText:{description:"The text that overlays the avatar"},presence:{defaultValue:null,control:{type:"select"},options:Object.values(_),table:{defaultValue:{summary:"null"}}},presenceProps:{description:"Pass through props. Used to customize the presence component"},size:{control:{type:"select"},options:Object.keys(f)},onClick:{table:{disable:!0}}},N={title:"Components/Avatar",component:o,args:S,argTypes:A,excludeStories:/.*Data$/},R=(s,{argTypes:a})=>p(s,a,z),w=(s,{argTypes:a})=>p(s,a,E),r={render:R,decorators:[()=>({template:'<div class="d-d-flex"><story /></div>'})]},n={render:w,parameters:{percy:{args:{seed:"seed"}},options:{showPanel:!1},controls:{disable:!0}}};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  decorators: [() => ({
    template: \`<div class="d-d-flex"><story /></div>\`
  })]
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const O=["argsData","argTypesData","Default","Variants"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:O,argTypesData:A,argsData:S,default:N},Symbol.toStringTag,{value:"Module"}));export{M as A,r as D,n as V};
//# sourceMappingURL=avatar.stories-VtuFE4qy.js.map