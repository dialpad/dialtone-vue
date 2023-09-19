import{D as x}from"./item_layout-1d3e99ec.js";import{D as h}from"./avatar-ad4fd178.js";import{D as y}from"./badge-9528d512.js";import{k as c,v as u,J as s,m as t,o as f,e as l,j as o,x as r,l as n,t as S,n as b}from"./vue.esm-bundler-a9a971fb.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const m={warning:"dt-recipe-callbox-badge--warning"},p={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"};const g={name:"DtRecipeCallbox",components:{DtBadge:y,DtAvatar:h,DtItemLayout:x},props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:e=>e===null||Object.keys(m).includes(e)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:e=>Object.keys(p).includes(e)}},computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return m[this.badgeColor]},borderClass(){return p[this.borderColor]}}},k={"data-qa":"dt-recipe-callbox--video-wrapper",class:"dt-recipe-callbox--video"},w=["textContent"],D={"data-qa":"dt-recipe-callbox--badge-wrapper",class:"dt-recipe-callbox--subtitle-badge"},O={"data-qa":"dt-recipe-callbox--subtitle-wrapper",class:"dt-recipe-callbox--subtitle-content"},V={"data-qa":"dt-recipe-callbox--right-wrapper",class:"dt-recipe-callbox--right"},N={"data-qa":"dt-recipe-callbox--bottom-wrapper",class:"dt-recipe-callbox--bottom-content"};function q(e,A,a,B,L,d){const v=c("dt-avatar"),_=c("dt-badge"),i=c("dt-item-layout");return f(),u(i,{"data-qa":"dt-recipe-callbox",class:"dt-recipe-callbox"},s({bottom:t(()=>[n(i,{"data-qa":"dt-recipe-callbox--main-content",class:b(["dt-recipe-callbox--main-content",d.borderClass])},s({default:t(()=>[n(i,{class:"dt-recipe-callbox--top-content"},s({default:t(()=>[l("span",{"data-qa":"dt-recipe-callbox--title",class:"dt-recipe-callbox--title",textContent:S(a.title)},null,8,w)]),subtitle:t(()=>[n(i,{class:"dt-recipe-callbox--subtitle"},s({default:t(()=>[l("div",D,[o(" @slot Slot for call center badge "),r(e.$slots,"badge",{},()=>[a.badgeText?(f(),u(_,{key:0,class:b(d.badgeClass),text:a.badgeText},null,8,["class","text"])):o("v-if",!0)],!0)])]),_:2},[e.$slots.subtitle?{name:"bottom",fn:t(()=>[l("div",O,[o(" @slot Slot for subtitle "),r(e.$slots,"subtitle",{},void 0,!0)])]),key:"0"}:void 0]),1024)]),_:2},[d.shouldShowAvatar?{name:"left",fn:t(()=>[n(v,{"image-src":a.avatarSrc,"full-name":a.avatarFullName,seed:a.avatarSeed,size:"sm"},null,8,["image-src","full-name","seed"])]),key:"0"}:void 0,e.$slots.right?{name:"right",fn:t(()=>[l("div",V,[o(" @slot Slot for right icons "),r(e.$slots,"right",{},void 0,!0)])]),key:"1"}:void 0]),1024)]),_:2},[e.$slots.bottom?{name:"bottom",fn:t(()=>[l("div",N,[r(e.$slots,"bottom",{},void 0,!0)])]),key:"0"}:void 0]),1032,["class"])]),_:2},[e.$slots.video?{name:"default",fn:t(()=>[l("div",k,[o(" @slot Slot for video stream "),r(e.$slots,"video",{},void 0,!0)])]),key:"0"}:void 0]),1024)}const j=C(g,[["render",q],["__scopeId","data-v-78aa2aef"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]]);g.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};export{j as D};
//# sourceMappingURL=callbox-435a794a.js.map
