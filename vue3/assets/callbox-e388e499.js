import{D as _}from"./item_layout-c5e0af6b.js";import{D as x}from"./avatar-33d3be23.js";import{D as h}from"./badge-728433a9.js";import{k as d,v as c,I as i,m as t,o as u,e as l,x as o,l as s,t as y,n as p,j as C}from"./vue.esm-bundler-400586b0.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const m={warning:"dt-recipe-callbox-badge--warning"},b={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"};const f={name:"DtRecipeCallbox",components:{DtBadge:h,DtAvatar:x,DtItemLayout:_},props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:e=>e===null||Object.keys(m).includes(e)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:e=>Object.keys(b).includes(e)}},computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return m[this.badgeColor]},borderClass(){return b[this.borderColor]}}},D={"data-qa":"dt-recipe-callbox--video-wrapper",class:"dt-recipe-callbox--video"},k=["textContent"],w={"data-qa":"dt-recipe-callbox--badge-wrapper",class:"dt-recipe-callbox--subtitle-badge"},O={"data-qa":"dt-recipe-callbox--subtitle-wrapper",class:"dt-recipe-callbox--subtitle-content"},V={"data-qa":"dt-recipe-callbox--right-wrapper",class:"dt-recipe-callbox--right"},N={"data-qa":"dt-recipe-callbox--bottom-wrapper",class:"dt-recipe-callbox--bottom-content"};function q(e,A,a,B,L,n){const g=d("dt-avatar"),v=d("dt-badge"),r=d("dt-item-layout");return u(),c(r,{"data-qa":"dt-recipe-callbox",class:"dt-recipe-callbox"},i({bottom:t(()=>[s(r,{"data-qa":"dt-recipe-callbox--main-content",class:p(["dt-recipe-callbox--main-content",n.borderClass])},i({default:t(()=>[s(r,{class:"dt-recipe-callbox--top-content"},i({default:t(()=>[l("span",{"data-qa":"dt-recipe-callbox--title",class:"dt-recipe-callbox--title",textContent:y(a.title)},null,8,k)]),subtitle:t(()=>[s(r,{class:"dt-recipe-callbox--subtitle"},i({default:t(()=>[l("div",w,[o(e.$slots,"badge",{},()=>[a.badgeText?(u(),c(v,{key:0,class:p(n.badgeClass),text:a.badgeText},null,8,["class","text"])):C("",!0)],!0)])]),_:2},[e.$slots.subtitle?{name:"bottom",fn:t(()=>[l("div",O,[o(e.$slots,"subtitle",{},void 0,!0)])]),key:"0"}:void 0]),1024)]),_:2},[n.shouldShowAvatar?{name:"left",fn:t(()=>[s(g,{"image-src":a.avatarSrc,"full-name":a.avatarFullName,seed:a.avatarSeed,size:"sm"},null,8,["image-src","full-name","seed"])]),key:"0"}:void 0,e.$slots.right?{name:"right",fn:t(()=>[l("div",V,[o(e.$slots,"right",{},void 0,!0)])]),key:"1"}:void 0]),1024)]),_:2},[e.$slots.bottom?{name:"bottom",fn:t(()=>[l("div",N,[o(e.$slots,"bottom",{},void 0,!0)])]),key:"0"}:void 0]),1032,["class"])]),_:2},[e.$slots.video?{name:"default",fn:t(()=>[l("div",D,[o(e.$slots,"video",{},void 0,!0)])]),key:"0"}:void 0]),1024)}const j=S(f,[["render",q],["__scopeId","data-v-470fa483"]]);f.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};export{j as D};
//# sourceMappingURL=callbox-e388e499.js.map
