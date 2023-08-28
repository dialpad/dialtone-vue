import{c as p}from"./storybook_utils-6f4fc6ad.js";import{D as i}from"./callbox-ba2c4b12.js";import{n as m}from"./_plugin-vue2_normalizer-2bbd088e.js";const b={name:"DtRecipeCallboxDefault",components:{DtRecipeCallbox:i}};var d=function(){var e=this,t=e._self._c;return t("dt-recipe-callbox",{attrs:{"badge-text":e.badgeText,"badge-color":e.badgeColor,"avatar-src":e.avatarSrc,"avatar-full-name":e.avatarFullName,"avatar-seed":e.avatarSeed,title:e.title,"border-color":e.borderColor},scopedSlots:e._u([e.video?{key:"video",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.video)}})]},proxy:!0}:null,e.badge?{key:"badge",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.badge)}})]},proxy:!0}:null,e.subtitle?{key:"subtitle",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.subtitle)}})]},proxy:!0}:null,e.right?{key:"right",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.right)}})]},proxy:!0}:null,e.bottom?{key:"bottom",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.bottom)}})]},proxy:!0}:null],null,!0)})},f=[];d._withStripped=!0;var o=m(b,d,f,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue";const g=o.exports;o.exports.__docgenInfo={displayName:"DtRecipeCallboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue"]};const u={},_=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),c={title:"Title",avatarFullName:"Title",borderColor:"ai"},v={title:"Recipes/Leftbar/Callbox",component:i,args:c,argTypes:u,decorators:[_],excludeStories:/.*Data$/},x=(a,{argTypes:e})=>p(a,e,g),r={render:x,args:{video:"Video slot",badge:"Badge slot",subtitle:"Subtitle slot",right:"Right slot",bottom:"Bottom slot"},parameters:{percy:{args:{avatarSeed:"seed"}}}};var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    video: 'Video slot',
    badge: 'Badge slot',
    subtitle: 'Subtitle slot',
    right: 'Right slot',
    bottom: 'Bottom slot'
  },
  parameters: {
    percy: {
      args: {
        avatarSeed: 'seed'
      }
    }
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const y=["argTypesData","argsData","Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:y,argTypesData:u,argsData:c,default:v},Symbol.toStringTag,{value:"Module"}));export{h as D,r as a};
//# sourceMappingURL=callbox.stories-a62ea10a.js.map
