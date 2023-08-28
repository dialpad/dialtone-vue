import{c as g}from"./storybook_utils-6f4fc6ad.js";import{D as _}from"./item_layout-14d63a9a.js";import{D as x}from"./avatar-3d64ae22.js";import{D as y}from"./badge-183c30c8.js";import{n as c}from"./_plugin-vue2_normalizer-2bbd088e.js";const n={warning:"dt-recipe-callbox-badge--warning"},s={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"};const S={name:"DtRecipeCallbox",components:{DtBadge:y,DtAvatar:x,DtItemLayout:_},props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:a=>!!a||Object.keys(n).includes(a)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:a=>Object.keys(s).includes(a)}},computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return n[this.badgeColor]},borderClass(){return s[this.borderColor]}}};var p=function(){var e=this,t=e._self._c;return t("dt-item-layout",{staticClass:"dt-recipe-callbox",scopedSlots:e._u([e.$slots.video?{key:"default",fn:function(){return[t("div",{staticClass:"dt-recipe-callbox--video"},[e._t("video")],2)]},proxy:!0}:null,{key:"bottom",fn:function(){return[t("dt-item-layout",{class:["dt-recipe-callbox--main-content",e.borderClass],scopedSlots:e._u([{key:"default",fn:function(){return[t("dt-item-layout",{staticClass:"dt-recipe-callbox--top-content",scopedSlots:e._u([e.shouldShowAvatar?{key:"left",fn:function(){return[t("dt-avatar",{attrs:{"image-src":e.avatarSrc,"full-name":e.avatarFullName,seed:e.avatarSeed,size:"sm"}})]},proxy:!0}:null,{key:"default",fn:function(){return[t("span",{staticClass:"dt-recipe-callbox--title",domProps:{textContent:e._s(e.title)}})]},proxy:!0},{key:"subtitle",fn:function(){return[t("dt-item-layout",{staticClass:"dt-recipe-callbox--subtitle",scopedSlots:e._u([{key:"default",fn:function(){return[t("div",{staticClass:"dt-recipe-callbox--subtitle-badge"},[e._t("badge",function(){return[e.badgeText?t("dt-badge",{class:e.badgeClass,attrs:{text:e.badgeText}}):e._e()]})],2)]},proxy:!0},e.$slots.subtitle?{key:"bottom",fn:function(){return[t("div",{staticClass:"dt-recipe-callbox--subtitle-content"},[e._t("subtitle")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0},e.$slots.right?{key:"right",fn:function(){return[t("div",{staticClass:"dt-recipe-callbox--right"},[e._t("right")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0},e.$slots.bottom?{key:"bottom",fn:function(){return[t("div",{staticClass:"dt-recipe-callbox--bottom-content"},[e._t("bottom")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0}],null,!0)})},h=[];p._withStripped=!0;var l=c(S,p,h,!1,null,"78aa2aef",null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue";const f=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};const C={name:"DtRecipeCallboxDefault",components:{DtRecipeCallbox:f}};var b=function(){var e=this,t=e._self._c;return t("dt-recipe-callbox",{attrs:{"badge-text":e.badgeText,"badge-color":e.badgeColor,"avatar-src":e.avatarSrc,"avatar-full-name":e.avatarFullName,"avatar-seed":e.avatarSeed,title:e.title,"border-color":e.borderColor},scopedSlots:e._u([e.video?{key:"video",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.video)}})]},proxy:!0}:null,e.badge?{key:"badge",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.badge)}})]},proxy:!0}:null,e.subtitle?{key:"subtitle",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.subtitle)}})]},proxy:!0}:null,e.right?{key:"right",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.right)}})]},proxy:!0}:null,e.bottom?{key:"bottom",fn:function(){return[t("div",{domProps:{innerHTML:e._s(e.bottom)}})]},proxy:!0}:null],null,!0)})},D=[];b._withStripped=!0;var o=c(C,b,D,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue";const k=o.exports;o.exports.__docgenInfo={displayName:"DtRecipeCallboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue"]};const m={},T=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),v={title:"Title",avatarFullName:"Title",borderColor:"ai"},R={title:"Recipes/Leftbar/Callbox",component:f,args:v,argTypes:m,decorators:[T],excludeStories:/.*Data$/},w=(a,{argTypes:e})=>g(a,e,k),r={render:w,args:{video:"Video slot",badge:"Badge slot",subtitle:"Subtitle slot",right:"Right slot",bottom:"Bottom slot"},parameters:{percy:{args:{avatarSeed:"seed"}}}};var i,u,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const F=["argTypesData","argsData","Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:F,argTypesData:m,argsData:v,default:R},Symbol.toStringTag,{value:"Module"}));export{B as D,r as a};
//# sourceMappingURL=callbox.stories-7dd06bbe.js.map
