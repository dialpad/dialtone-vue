import{D as o}from"./avatar-LEqFnfCl.js";import{D as s}from"./badge-h19ahrZm.js";import{n}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const l={warning:"dt-recipe-callbox-badge--warning"},i={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"},c={name:"DtRecipeCallbox",components:{DtBadge:s,DtAvatar:o},inheritAttrs:!1,props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:t=>t===null||Object.keys(l).includes(t)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:t=>Object.keys(i).includes(t)},clickable:{type:Boolean,default:!1},isOnHold:{type:Boolean,default:!1}},emits:["click"],computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return l[this.badgeColor]},borderClass(){return i[this.borderColor]}},methods:{handleClick(t){this.clickable&&this.$emit("click",t)}}};var d=function(){var e=this,a=e._self._c;return a("div",{staticClass:"dt-recipe-callbox",attrs:{"data-qa":"dt-recipe-callbox"}},[e.$slots.video?a("div",{staticClass:"dt-recipe-callbox--video",attrs:{"data-qa":"dt-recipe-callbox--video-wrapper"}},[e._t("video")],2):e._e(),a("div",{class:["dt-recipe-callbox--main-content",e.borderClass,{"dt-recipe-callbox--clickable":e.clickable}],attrs:{"data-qa":"dt-recipe-callbox--main-content"}},[a("div",{staticClass:"dt-recipe-callbox--main-content-top"},[e.shouldShowAvatar?a("dt-avatar",{attrs:{"avatar-class":"dt-recipe-callbox--avatar","image-src":e.avatarSrc,"full-name":e.avatarFullName,seed:e.avatarSeed,clickable:e.clickable,"overlay-icon":e.isOnHold?"pause":null,size:"sm"},on:{click:e.handleClick}}):e._e(),a("div",{staticClass:"dt-recipe-callbox--content"},[a(e.clickable?"button":"span",{tag:"component",staticClass:"dt-recipe-callbox--content-title",attrs:{"data-qa":"dt-recipe-callbox--title"},on:{click:e.handleClick}},[e._v(" "+e._s(e.title)+" ")]),e.$slots.badge||e.badgeText?a("div",{staticClass:"dt-recipe-callbox--content-badge",attrs:{"data-qa":"dt-recipe-callbox--badge-wrapper"}},[e._t("badge",function(){return[a("dt-badge",{class:e.badgeClass,attrs:{text:e.badgeText}})]})],2):e._e(),e.$slots.subtitle?a("div",{staticClass:"dt-recipe-callbox--content-subtitle",attrs:{"data-qa":"dt-recipe-callbox--subtitle-wrapper"}},[e._t("subtitle")],2):e._e()],1),e.$slots.right?a("div",{staticClass:"dt-recipe-callbox--right",attrs:{"data-qa":"dt-recipe-callbox--right-wrapper"}},[e._t("right")],2):e._e()],1),e.$slots.bottom?a("div",{staticClass:"dt-recipe-callbox--main-content-bottom",attrs:{"data-qa":"dt-recipe-callbox--bottom-wrapper"}},[e._t("bottom")],2):e._e()])])},u=[],r=n(c,d,u,!1,null,"66800ae7",null,null);const f=r.exports;r.exports.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"clickable",description:`Makes the callbox avatar and title clickable,
emits a click event when clicked.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isOnHold",description:"Controls the avatars overlay icon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Callbox click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};export{f as D};
//# sourceMappingURL=callbox-5h15gVNI.js.map