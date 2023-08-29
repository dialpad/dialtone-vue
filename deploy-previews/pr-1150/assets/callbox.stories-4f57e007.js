import{c as g}from"./storybook_utils-6f4fc6ad.js";import{D as x}from"./item_layout-14d63a9a.js";import{D}from"./avatar-5baf9f04.js";import{D as z}from"./badge-183c30c8.js";import{n}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as T}from"./button-9102a84a.js";import{D as N}from"./icon-34725557.js";const u={warning:"dt-recipe-callbox-badge--warning"},d={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"};const w={name:"DtRecipeCallbox",components:{DtBadge:z,DtAvatar:D,DtItemLayout:x},props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:a=>!!a||Object.keys(u).includes(a)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:a=>Object.keys(d).includes(a)}},computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return u[this.badgeColor]},borderClass(){return d[this.borderColor]}}};var v=function(){var t=this,e=t._self._c;return e("dt-item-layout",{staticClass:"dt-recipe-callbox",scopedSlots:t._u([t.$slots.video?{key:"default",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--video"},[t._t("video")],2)]},proxy:!0}:null,{key:"bottom",fn:function(){return[e("dt-item-layout",{class:["dt-recipe-callbox--main-content",t.borderClass],scopedSlots:t._u([{key:"default",fn:function(){return[e("dt-item-layout",{staticClass:"dt-recipe-callbox--top-content",scopedSlots:t._u([t.shouldShowAvatar?{key:"left",fn:function(){return[e("dt-avatar",{attrs:{"image-src":t.avatarSrc,"full-name":t.avatarFullName,seed:t.avatarSeed,size:"sm"}})]},proxy:!0}:null,{key:"default",fn:function(){return[e("span",{staticClass:"dt-recipe-callbox--title",domProps:{textContent:t._s(t.title)}})]},proxy:!0},{key:"subtitle",fn:function(){return[e("dt-item-layout",{staticClass:"dt-recipe-callbox--subtitle",scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--subtitle-badge"},[t._t("badge",function(){return[t.badgeText?e("dt-badge",{class:t.badgeClass,attrs:{text:t.badgeText}}):t._e()]})],2)]},proxy:!0},t.$slots.subtitle?{key:"bottom",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--subtitle-content"},[t._t("subtitle")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0},t.$slots.right?{key:"right",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--right"},[t._t("right")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0},t.$slots.bottom?{key:"bottom",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--bottom-content"},[t._t("bottom")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0}],null,!0)})},R=[];v._withStripped=!0;var l=n(w,v,R,!1,null,"78aa2aef",null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue";const i=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};const V={name:"DtRecipeCallboxDefault",components:{DtRecipeCallbox:i}};var h=function(){var t=this,e=t._self._c;return e("dt-recipe-callbox",{attrs:{"badge-text":t.badgeText,"badge-color":t.badgeColor,"avatar-src":t.avatarSrc,"avatar-full-name":t.avatarFullName,"avatar-seed":t.avatarSeed,title:t.title,"border-color":t.borderColor},scopedSlots:t._u([t.video?{key:"video",fn:function(){return[e("div",{domProps:{innerHTML:t._s(t.video)}})]},proxy:!0}:null,t.badge?{key:"badge",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.badge)}})]},proxy:!0}:null,t.subtitle?{key:"subtitle",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.subtitle)}})]},proxy:!0}:null,t.right?{key:"right",fn:function(){return[e("div",{domProps:{innerHTML:t._s(t.right)}})]},proxy:!0}:null,t.bottom?{key:"bottom",fn:function(){return[e("div",{domProps:{innerHTML:t._s(t.bottom)}})]},proxy:!0}:null],null,!0)})},F=[];h._withStripped=!0;var s=n(V,h,F,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue";const $=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeCallboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue"]};const q=""+new URL("chatting-person-example-feb79bbc.png",import.meta.url).href,J={name:"DtRecipeCallboxVariants",components:{DtItemLayout:x,DtIcon:N,DtButton:T,DtRecipeCallbox:i}};var k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-stack16"},[e("dt-recipe-callbox",{attrs:{"avatar-full-name":"Jaqueline Nackos",title:"Jaqueline Nackos","border-color":"ai"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("span",[t._v("06:01")])]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{attrs:{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dialpad-ai-color",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"hang call",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{staticClass:"d-fc-critical",attrs:{name:"phone-hang-up",size:"400"}})]},proxy:!0}])})]},proxy:!0}])}),e("dt-recipe-callbox",{attrs:{title:"1 Participant"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("span",[t._v("06:01")])]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{attrs:{"aria-label":"toggle mic",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"toggle video",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"video",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"hang call",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{staticClass:"d-fc-critical",attrs:{name:"phone-hang-up",size:"400"}})]},proxy:!0}])})]},proxy:!0}])}),e("dt-recipe-callbox",{attrs:{title:"1 Participant"},scopedSlots:t._u([{key:"video",fn:function(){return[e("img",{attrs:{src:q,alt:"person avatar"}})]},proxy:!0},{key:"subtitle",fn:function(){return[e("span",[t._v("06:01")])]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{attrs:{"aria-label":"toggle mic",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"toggle video",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"video",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"hang call",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{staticClass:"d-fc-critical",attrs:{name:"phone-hang-up",size:"400"}})]},proxy:!0}])})]},proxy:!0}])}),e("dt-recipe-callbox",{attrs:{"avatar-full-name":"Jaqueline Nackos",title:"Jaqueline Nackos","badge-text":"Test_Call_Center","badge-color":"warning","border-color":"ai"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("span",[t._v("06:01")])]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{attrs:{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dialpad-ai-color",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"hang call",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{staticClass:"d-fc-critical",attrs:{name:"phone-hang-up",size:"400"}})]},proxy:!0}])})]},proxy:!0}])}),e("dt-recipe-callbox",{attrs:{"avatar-full-name":"Jaqueline Nackos",title:"Jaqueline Nackos","border-color":"ai"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center"},[e("dt-icon",{staticClass:"d-mr4",attrs:{name:"share-screen",size:"100"}}),e("span",[t._v("06:01")])],1)]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{attrs:{"aria-label":"share screen",circle:"",importance:"clear",kind:"muted"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"share-screen",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dialpad-ai-color",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"hang call",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{staticClass:"d-fc-critical",attrs:{name:"phone-hang-up",size:"400"}})]},proxy:!0}])})]},proxy:!0}])}),e("dt-recipe-callbox",{attrs:{"avatar-full-name":"Jaqueline Nackos",title:"Jaqueline Nackos","border-color":"ai"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center"},[e("dt-icon",{staticClass:"d-mr4",attrs:{name:"share-screen",size:"100"}}),e("span",[t._v("Screenshare")])],1)]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{staticClass:"d-fc-critical",attrs:{"aria-label":"stop call",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"stop-filled",size:"300"}})]},proxy:!0}])},[t._v(" Stop ")])]},proxy:!0}])}),e("dt-recipe-callbox",{attrs:{"avatar-full-name":"design-product-lt-so",title:"design-product-lt-so","border-color":"critical"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-flow4"},[e("div",{staticClass:"d-d-flex d-ai-center"},[e("dt-icon",{staticClass:"d-mr2",attrs:{name:"users",size:"100"}}),e("span",[t._v("3")])],1),e("span",{staticClass:"d-fs-300"},[t._v("•")]),e("div",{staticClass:"d-d-flex d-ai-center"},[e("dt-icon",{attrs:{name:"activity",size:"100"}}),e("span",[t._v("Jaqueline Nackos")])],1)])]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{attrs:{"aria-label":"toggle mic",importance:"clear",kind:"muted",circle:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic",size:"300"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"hang call",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{staticClass:"d-fc-critical",attrs:{name:"phone-hang-up",size:"400"}})]},proxy:!0}])})]},proxy:!0}])}),e("dt-recipe-callbox",{attrs:{"avatar-full-name":"Jaqueline Nackos",title:"Jaqueline Nackos","border-color":"ai"},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center"},[e("dt-icon",{staticClass:"d-mr4",attrs:{name:"share-screen",size:"100"}}),e("span",[t._v("06:01")])],1)]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{attrs:{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dialpad-ai-color",size:"400"}})]},proxy:!0}])}),e("dt-button",{attrs:{"aria-label":"hang call",circle:"",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{staticClass:"d-fc-critical",attrs:{name:"phone-hang-up",size:"400"}})]},proxy:!0}])})]},proxy:!0},{key:"bottom",fn:function(){return[e("dt-item-layout",{scopedSlots:t._u([{key:"left",fn:function(){return[e("dt-icon",{attrs:{name:"share-screen",size:"400"}})]},proxy:!0},{key:"default",fn:function(){return[e("span",{staticClass:"d-fs-100"},[t._v("Sharing screen")])]},proxy:!0},{key:"right",fn:function(){return[e("dt-button",{staticClass:"d-fc-critical",attrs:{"aria-label":"stop call",importance:"clear"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"stop-filled",size:"300"}})]},proxy:!0}])},[t._v(" Stop ")])]},proxy:!0}])})]},proxy:!0}])})],1)},O=[];k._withStripped=!0;var c=n(J,k,O,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_variants.story.vue";const P=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeCallboxVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_variants.story.vue"]};const S={},L=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),C={title:"Title",avatarFullName:"Title",borderColor:"ai"},B={title:"Recipes/Leftbar/Callbox",component:i,args:C,argTypes:S,decorators:[L],excludeStories:/.*Data$/},I=(a,{argTypes:t})=>g(a,t,$),A=(a,{argTypes:t})=>g(a,t,P),r={render:I,args:{video:"Video slot",badge:"Badge slot",subtitle:"Subtitle slot",right:"Right slot",bottom:"Bottom slot"},parameters:{percy:{args:{avatarSeed:"seed"}}}},o={render:A,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var p,f,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var b,y,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: VariantsTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const M=["argTypesData","argsData","Default","Variants"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:M,argTypesData:S,argsData:C,default:B},Symbol.toStringTag,{value:"Module"}));export{W as D,o as V,r as a};
//# sourceMappingURL=callbox.stories-4f57e007.js.map
