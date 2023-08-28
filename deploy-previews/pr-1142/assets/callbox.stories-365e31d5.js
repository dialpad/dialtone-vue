import{c as V}from"./storybook_utils-79c013ce.js";import{D as w}from"./item_layout-3b6a14fd.js";import{D as M}from"./avatar-6ae403c2.js";import{D as O}from"./badge-2159b23d.js";import{k as u,v as b,J as s,m as t,o as f,e as a,j as l,x as r,l as c,t as B,n as p}from"./vue.esm-bundler-2457a580.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const g={warning:"dt-recipe-callbox-badge--warning"},v={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"};const x={name:"DtRecipeCallbox",components:{DtBadge:O,DtAvatar:M,DtItemLayout:w},props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:e=>!!e||Object.keys(g).includes(e)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:e=>Object.keys(v).includes(e)}},computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return g[this.badgeColor]},borderClass(){return v[this.borderColor]}}},F={class:"dt-recipe-callbox--video"},H=["textContent"],A={class:"dt-recipe-callbox--subtitle-badge"},I={class:"dt-recipe-callbox--subtitle-content"},j={class:"dt-recipe-callbox--right"},z={class:"dt-recipe-callbox--bottom-content"};function E(e,k,o,L,R,i){const m=u("dt-avatar"),N=u("dt-badge"),d=u("dt-item-layout");return f(),b(d,{class:"dt-recipe-callbox"},s({bottom:t(()=>[c(d,{class:p(["dt-recipe-callbox--main-content",i.borderClass])},s({default:t(()=>[c(d,{class:"dt-recipe-callbox--top-content"},s({default:t(()=>[a("span",{class:"dt-recipe-callbox--title",textContent:B(o.title)},null,8,H)]),subtitle:t(()=>[c(d,{class:"dt-recipe-callbox--subtitle"},s({default:t(()=>[a("div",A,[l(" @slot Slot for call center badge "),r(e.$slots,"badge",{},()=>[o.badgeText?(f(),b(N,{key:0,class:p(i.badgeClass),text:o.badgeText},null,8,["class","text"])):l("v-if",!0)],!0)])]),_:2},[e.$slots.subtitle?{name:"bottom",fn:t(()=>[a("div",I,[l(" @slot Slot for subtitle "),r(e.$slots,"subtitle",{},void 0,!0)])]),key:"0"}:void 0]),1024)]),_:2},[i.shouldShowAvatar?{name:"left",fn:t(()=>[c(m,{"image-src":o.avatarSrc,"full-name":o.avatarFullName,seed:o.avatarSeed,size:"sm"},null,8,["image-src","full-name","seed"])]),key:"0"}:void 0,e.$slots.right?{name:"right",fn:t(()=>[a("div",j,[l(" @slot Slot for right icons "),r(e.$slots,"right",{},void 0,!0)])]),key:"1"}:void 0]),1024)]),_:2},[e.$slots.bottom?{name:"bottom",fn:t(()=>[a("div",z,[r(e.$slots,"bottom",{},void 0,!0)])]),key:"0"}:void 0]),1032,["class"])]),_:2},[e.$slots.video?{name:"default",fn:t(()=>[a("div",F,[l(" @slot Slot for video stream "),r(e.$slots,"video",{},void 0,!0)])]),key:"0"}:void 0]),1024)}const $=S(x,[["render",E],["__scopeId","data-v-78aa2aef"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]]);x.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};const C={name:"DtRecipeCallboxDefault",components:{DtRecipeCallbox:$}},G=["innerHTML"],J=["innerHTML"],P=["innerHTML"],q=["innerHTML"],K=["innerHTML"];function Q(e,k,o,L,R,i){const m=u("dt-recipe-callbox");return f(),b(m,{"badge-text":e.$attrs.badgeText,"badge-color":e.$attrs.badgeColor,"avatar-src":e.$attrs.avatarSrc,"avatar-full-name":e.$attrs.avatarFullName,"avatar-seed":e.$attrs.avatarSeed,title:e.$attrs.title,"border-color":e.$attrs.borderColor},s({_:2},[e.$attrs.video?{name:"video",fn:t(()=>[a("div",{innerHTML:e.$attrs.video},null,8,G)]),key:"0"}:void 0,e.$attrs.badge?{name:"badge",fn:t(()=>[a("span",{innerHTML:e.$attrs.badge},null,8,J)]),key:"1"}:void 0,e.$attrs.subtitle?{name:"subtitle",fn:t(()=>[a("span",{innerHTML:e.$attrs.subtitle},null,8,P)]),key:"2"}:void 0,e.$attrs.right?{name:"right",fn:t(()=>[a("div",{innerHTML:e.$attrs.right},null,8,q)]),key:"3"}:void 0,e.$attrs.bottom?{name:"bottom",fn:t(()=>[a("div",{innerHTML:e.$attrs.bottom},null,8,K)]),key:"4"}:void 0]),1032,["badge-text","badge-color","avatar-src","avatar-full-name","avatar-seed","title","border-color"])}const U=S(C,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue"]]);C.__docgenInfo={displayName:"DtRecipeCallboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox_default.story.vue"]};const D={},W=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),T={title:"Title",avatarFullName:"Title",borderColor:"ai"},X={title:"Recipes/Leftbar/Callbox",component:$,args:T,argTypes:D,decorators:[W],excludeStories:/.*Data$/},Y=e=>V(e,U),n={render:Y,args:{video:"Video slot",badge:"Badge slot",subtitle:"Subtitle slot",right:"Right slot",bottom:"Bottom slot"},parameters:{percy:{args:{avatarSeed:"seed"}}}};var _,h,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Z=["argTypesData","argsData","Default"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:Z,argTypesData:D,argsData:T,default:X},Symbol.toStringTag,{value:"Module"}));export{se as D,n as a};
//# sourceMappingURL=callbox.stories-365e31d5.js.map
