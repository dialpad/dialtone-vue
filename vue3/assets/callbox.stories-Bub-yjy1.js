import{c as L}from"./storybook_utils-dy5aucTw.js";import{D as F}from"./avatar-Rnq9lpvE.js";import{D as A}from"./badge-KUh0pHqR.js";import{s as d,k as m,f,g,e as o,b as k,w as a,I as P,p as $,o as s,x as y,y as E,u as e,B as j,N as X,O as G}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as C}from"./_plugin-vue_export-helper-x3n3nnut.js";import{D as K}from"./button-QSbPABQk.js";import{D as U}from"./icon-z49A8j_D.js";import{D as Q}from"./item_layout-8xOedta4.js";import{D as W}from"./stack-Wrr-eqs0.js";import{a as Y}from"./chunk-AY7I2SME-4UylTnhF.js";const D={warning:"dt-recipe-callbox-badge--warning"},N={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"},O={name:"DtRecipeCallbox",components:{DtBadge:A,DtAvatar:F},inheritAttrs:!1,props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:t=>t===null||Object.keys(D).includes(t)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:t=>Object.keys(N).includes(t)},clickable:{type:Boolean,default:!1},isOnHold:{type:Boolean,default:!1}},emits:["click"],computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return D[this.badgeColor]},borderClass(){return N[this.borderColor]}},methods:{handleClick(t){this.clickable&&this.$emit("click",t)}}},Z={"data-qa":"dt-recipe-callbox",class:"dt-recipe-callbox"},ee={key:0,"data-qa":"dt-recipe-callbox--video-wrapper",class:"dt-recipe-callbox--video"},ae={class:"dt-recipe-callbox--main-content-top"},te={class:"dt-recipe-callbox--content"},le={key:0,"data-qa":"dt-recipe-callbox--badge-wrapper",class:"dt-recipe-callbox--content-badge"},ie={key:1,"data-qa":"dt-recipe-callbox--subtitle-wrapper",class:"dt-recipe-callbox--content-subtitle"},oe={key:1,"data-qa":"dt-recipe-callbox--right-wrapper",class:"dt-recipe-callbox--right"},ne={key:0,"data-qa":"dt-recipe-callbox--bottom-wrapper",class:"dt-recipe-callbox--main-content-bottom"};function re(t,b,n,S,v,u){const l=d("dt-avatar"),i=d("dt-badge");return s(),m("div",Z,[t.$slots.video?(s(),m("div",ee,[f(t.$slots,"video",{},void 0,!0)])):g("",!0),o("div",{"data-qa":"dt-recipe-callbox--main-content",class:$(["dt-recipe-callbox--main-content",u.borderClass,{"dt-recipe-callbox--clickable":n.clickable}])},[o("div",ae,[u.shouldShowAvatar?(s(),k(l,{key:0,"avatar-class":"dt-recipe-callbox--avatar","image-src":n.avatarSrc,"full-name":n.avatarFullName,seed:n.avatarSeed,clickable:n.clickable,"overlay-icon":n.isOnHold?"pause":null,size:"sm",onClick:u.handleClick},null,8,["image-src","full-name","seed","clickable","overlay-icon","onClick"])):g("",!0),o("div",te,[(s(),k(P(n.clickable?"button":"span"),{"data-qa":"dt-recipe-callbox--title",class:"dt-recipe-callbox--content-title",onClick:u.handleClick},{default:a(()=>[y(E(n.title),1)]),_:1},8,["onClick"])),t.$slots.badge||n.badgeText?(s(),m("div",le,[f(t.$slots,"badge",{},()=>[e(i,{class:$(u.badgeClass),text:n.badgeText},null,8,["class","text"])],!0)])):g("",!0),t.$slots.subtitle?(s(),m("div",ie,[f(t.$slots,"subtitle",{},void 0,!0)])):g("",!0)]),t.$slots.right?(s(),m("div",oe,[f(t.$slots,"right",{},void 0,!0)])):g("",!0)]),t.$slots.bottom?(s(),m("div",ne,[f(t.$slots,"bottom",{},void 0,!0)])):g("",!0)],2)])}const x=C(O,[["render",re],["__scopeId","data-v-66800ae7"]]);O.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"clickable",description:`Makes the callbox avatar and title clickable,
emits a click event when clicked.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isOnHold",description:"Controls the avatars overlay icon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Callbox click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};const R={name:"DtRecipeCallboxDefault",components:{DtRecipeCallbox:x}},se=["innerHTML"],ce=["innerHTML"],de=["innerHTML"],ue=["innerHTML"],pe=["innerHTML"];function me(t,b,n,S,v,u){const l=d("dt-recipe-callbox");return s(),k(l,{"badge-text":t.$attrs.badgeText,"badge-color":t.$attrs.badgeColor,"avatar-src":t.$attrs.avatarSrc,"avatar-full-name":t.$attrs.avatarFullName,"avatar-seed":t.$attrs.avatarSeed,title:t.$attrs.title,"border-color":t.$attrs.borderColor,clickable:t.$attrs.clickable,"is-on-hold":t.$attrs.isOnHold,onClick:t.$attrs.onClick},j({_:2},[t.$attrs.video?{name:"video",fn:a(()=>[o("div",{innerHTML:t.$attrs.video},null,8,se)]),key:"0"}:void 0,t.$attrs.badge?{name:"badge",fn:a(()=>[o("span",{innerHTML:t.$attrs.badge},null,8,ce)]),key:"1"}:void 0,t.$attrs.subtitle?{name:"subtitle",fn:a(()=>[o("span",{innerHTML:t.$attrs.subtitle},null,8,de)]),key:"2"}:void 0,t.$attrs.right?{name:"right",fn:a(()=>[o("div",{innerHTML:t.$attrs.right},null,8,ue)]),key:"3"}:void 0,t.$attrs.bottom?{name:"bottom",fn:a(()=>[o("div",{innerHTML:t.$attrs.bottom},null,8,pe)]),key:"4"}:void 0]),1032,["badge-text","badge-color","avatar-src","avatar-full-name","avatar-seed","title","border-color","clickable","is-on-hold","onClick"])}const be=C(R,[["render",me]]);R.__docgenInfo={displayName:"DtRecipeCallboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue"]};const ge=""+new URL("chatting-person-example-CMtbuhvi.png",import.meta.url).href,B={name:"DtRecipeCallboxVariants",components:{DtStack:W,DtItemLayout:Q,DtIcon:U,DtButton:K,DtRecipeCallbox:x},emits:["click"],data(){return{chattingPersonImage:ge}}},r=t=>(X("data-v-24dd7185"),t=t(),G(),t),fe={class:"d-stack16"},_e=r(()=>o("span",null,"06:01",-1)),he=r(()=>o("span",null,"06:01",-1)),ve=["src"],ke=r(()=>o("span",null,"06:01",-1)),ye=r(()=>o("span",null,"06:01",-1)),Ce=r(()=>o("span",null,"06:01",-1)),xe=r(()=>o("p",null,"Screenshare",-1)),Se=r(()=>o("span",null,"3",-1)),$e=r(()=>o("span",{class:"d-fs-300"}," • ",-1)),De=r(()=>o("p",{class:"d-to-ellipsis d-ws-nowrap d-of-hidden"}," Jaqueline Nackos Jaqueline Nackos ",-1)),Ne=r(()=>o("span",null,"06:01",-1)),we={class:"d-d-flex d-ai-center"},Te=r(()=>o("span",{class:"d-fs-100"},"Sharing screen",-1)),ze=r(()=>o("span",null,"06:01",-1));function qe(t,b,n,S,v,u){const l=d("dt-icon"),i=d("dt-button"),c=d("dt-recipe-callbox"),p=d("dt-stack"),M=d("dt-item-layout");return s(),m("div",fe,[e(c,{"avatar-full-name":"Jaqueline Nackos","avatar-seed":"Jaqueline Nackos",title:"Jaqueline Nackos","border-color":"ai"},{subtitle:a(()=>[_e]),right:a(()=>[e(i,{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"dialpad-ai-color",size:"400"})]),_:1}),e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),_:1}),e(c,{title:"1 Participant","avatar-seed":"1 Participant"},{subtitle:a(()=>[he]),right:a(()=>[e(i,{"aria-label":"toggle mic",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"mic",size:"400"})]),_:1}),e(i,{"aria-label":"toggle video",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"video",size:"400"})]),_:1}),e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),_:1}),e(c,{title:"1 Participant","avatar-seed":"1 Participant"},{video:a(()=>[o("img",{src:v.chattingPersonImage,alt:"person avatar",class:"callbox-image"},null,8,ve)]),subtitle:a(()=>[ke]),right:a(()=>[e(i,{"aria-label":"toggle mic",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"mic",size:"400"})]),_:1}),e(i,{"aria-label":"toggle video",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"video",size:"400"})]),_:1}),e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),_:1}),e(c,{"avatar-full-name":"Jaqueline Nackos","avatar-seed":"Jaqueline Nackos",title:"Jaqueline Nackos","badge-text":"Test_Call_Center","badge-color":"warning","border-color":"ai"},{subtitle:a(()=>[ye]),right:a(()=>[e(i,{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"dialpad-ai-color",size:"400"})]),_:1}),e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),_:1}),e(c,{"avatar-full-name":"Jaqueline Nackos","avatar-seed":"Jaqueline Nackos",title:"Jaqueline Nackos","border-color":"ai"},{subtitle:a(()=>[e(p,{direction:"row",gap:"300",class:"d-ai-center"},{default:a(()=>[e(l,{name:"share-screen",size:"100"}),Ce]),_:1})]),right:a(()=>[e(i,{"aria-label":"share screen",circle:"",importance:"clear",kind:"muted"},{icon:a(()=>[e(l,{name:"share-screen",size:"400"})]),_:1}),e(i,{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"dialpad-ai-color",size:"400"})]),_:1}),e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),_:1}),e(c,{"avatar-full-name":"Jaqueline Nackos",title:"Jaqueline Nackos","avatar-seed":"Jaqueline Nackos","border-color":"ai"},{subtitle:a(()=>[e(p,{direction:"row",gap:"300",class:"d-ai-center"},{default:a(()=>[e(l,{name:"share-screen",size:"100"}),xe]),_:1})]),right:a(()=>[e(i,{"aria-label":"stop call",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"stop-filled",size:"300"})]),default:a(()=>[y(" Stop ")]),_:1})]),_:1}),e(c,{"avatar-full-name":"design-product-lt-so","avatar-seed":"design-product-lt-so",title:"design-product-lt-so","border-color":"critical",clickable:""},{subtitle:a(()=>[e(p,{direction:"row",gap:"300"},{default:a(()=>[e(p,{direction:"row",class:"d-ai-center"},{default:a(()=>[e(l,{name:"users",size:"100",class:"d-mr2"}),Se]),_:1}),$e,e(p,{direction:"row",class:"d-ai-center d-of-x-hidden"},{default:a(()=>[e(l,{name:"activity",size:"100"}),De]),_:1})]),_:1})]),right:a(()=>[e(i,{"aria-label":"toggle mic",importance:"clear",kind:"muted",circle:""},{icon:a(()=>[e(l,{name:"mic",size:"300"})]),_:1}),e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),_:1}),e(c,{"avatar-full-name":"Jaqueline Nackos","avatar-seed":"Jaqueline Nackos",title:"Jaqueline Nackos","border-color":"ai"},{subtitle:a(()=>[e(p,{direction:"row",gap:"300",class:"d-ai-center"},{default:a(()=>[e(l,{name:"share-screen",size:"100"}),Ne]),_:1})]),right:a(()=>[e(i,{"aria-label":"toggle dialpad ai",circle:"",importance:"clear"},{icon:a(()=>[e(l,{name:"dialpad-ai-color",size:"400"})]),_:1}),e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),bottom:a(()=>[e(M,null,{default:a(()=>[o("div",we,[e(l,{class:"d-mr8",name:"share-screen",size:"400"}),Te])]),right:a(()=>[e(i,{"aria-label":"stop call",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"stop-filled",size:"300"})]),default:a(()=>[y(" Stop ")]),_:1})]),_:1})]),_:1}),e(c,{"avatar-full-name":"Jaqueline Nackos","avatar-seed":"Jaqueline Nackos",title:"Jaqueline Nackos","is-on-hold":""},{subtitle:a(()=>[e(p,{direction:"row",gap:"300",class:"d-ai-center"},{default:a(()=>[e(l,{name:"share-screen",size:"100"}),ze]),_:1})]),right:a(()=>[e(i,{"aria-label":"hang call",circle:"",importance:"clear",kind:"danger"},{icon:a(()=>[e(l,{name:"phone-hang-up",size:"400"})]),_:1})]),_:1})])}const Ve=C(B,[["render",qe],["__scopeId","data-v-24dd7185"]]);B.__docgenInfo={displayName:"DtRecipeCallboxVariants",exportName:"default",description:"",tags:{},events:[{name:"click",description:"Add click event here to prevent story from emitting clicks on Vue 3"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_variants.story.vue"]};const I={onClick:{table:{disable:!0}}},Je=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),H={onClick:Y("click"),title:"Title",avatarFullName:"Title",borderColor:"ai",clickable:!0},Le={title:"Recipes/Leftbar/Callbox",component:x,args:H,argTypes:I,decorators:[Je],excludeStories:/.*Data$/},Oe=(t,{argTypes:b})=>L(t,b,be),Re=(t,{argTypes:b})=>L(t,b,Ve),_={render:Oe,args:{video:"Video slot",badge:"Badge slot",subtitle:"Subtitle slot",right:"Right slot",bottom:"Bottom slot"},parameters:{percy:{args:{avatarSeed:"seed"}}}},h={render:Re,parameters:{options:{showPanel:!1},controls:{disable:!0}}};var w,T,z;_.parameters={..._.parameters,docs:{...(w=_.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(T=_.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var q,V,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: VariantsTemplate,
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(J=(V=h.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};const Be=["argTypesData","argsData","Default","Variants"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Default:_,Variants:h,__namedExportsOrder:Be,argTypesData:I,argsData:H,default:Le},Symbol.toStringTag,{value:"Module"}));export{Ke as D,h as V,_ as a};
//# sourceMappingURL=callbox.stories-Bub-yjy1.js.map
