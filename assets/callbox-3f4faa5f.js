import{D as n}from"./item_layout-173b62c3.js";import{D as i}from"./avatar-fba09582.js";import{D as s}from"./badge-8cf1d91e.js";import{n as d}from"./_plugin-vue2_normalizer-2bbd088e.js";const l={warning:"dt-recipe-callbox-badge--warning"},r={default:"dt-recipe-callbox--border-default",ai:"dt-recipe-callbox--border-ai",critical:"dt-recipe-callbox--border-critical"};const u={name:"DtRecipeCallbox",components:{DtBadge:s,DtAvatar:i,DtItemLayout:n},props:{badgeText:{type:String,default:""},badgeColor:{type:String,default:null,validator:a=>a===null||Object.keys(l).includes(a)},avatarSrc:{type:String,default:""},avatarFullName:{type:String,default:""},avatarSeed:{type:String,default:""},title:{type:String,default:""},borderColor:{type:String,default:"default",validator:a=>Object.keys(r).includes(a)}},computed:{shouldShowAvatar(){return this.avatarFullName||this.avatarSrc},badgeClass(){return l[this.badgeColor]},borderClass(){return r[this.borderColor]}}};var c=function(){var t=this,e=t._self._c;return e("dt-item-layout",{staticClass:"dt-recipe-callbox",attrs:{"data-qa":"dt-recipe-callbox"},scopedSlots:t._u([t.$slots.video?{key:"default",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--video",attrs:{"data-qa":"dt-recipe-callbox--video-wrapper"}},[t._t("video")],2)]},proxy:!0}:null,{key:"bottom",fn:function(){return[e("dt-item-layout",{class:["dt-recipe-callbox--main-content",t.borderClass],attrs:{"data-qa":"dt-recipe-callbox--main-content"},scopedSlots:t._u([{key:"default",fn:function(){return[e("dt-item-layout",{staticClass:"dt-recipe-callbox--top-content",scopedSlots:t._u([t.shouldShowAvatar?{key:"left",fn:function(){return[e("dt-avatar",{attrs:{"image-src":t.avatarSrc,"full-name":t.avatarFullName,seed:t.avatarSeed,size:"sm"}})]},proxy:!0}:null,{key:"default",fn:function(){return[e("span",{staticClass:"dt-recipe-callbox--title",attrs:{"data-qa":"dt-recipe-callbox--title"},domProps:{textContent:t._s(t.title)}})]},proxy:!0},{key:"subtitle",fn:function(){return[e("dt-item-layout",{staticClass:"dt-recipe-callbox--subtitle",scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--subtitle-badge",attrs:{"data-qa":"dt-recipe-callbox--badge-wrapper"}},[t._t("badge",function(){return[t.badgeText?e("dt-badge",{class:t.badgeClass,attrs:{text:t.badgeText}}):t._e()]})],2)]},proxy:!0},t.$slots.subtitle?{key:"bottom",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--subtitle-content",attrs:{"data-qa":"dt-recipe-callbox--subtitle-wrapper"}},[t._t("subtitle")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0},t.$slots.right?{key:"right",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--right",attrs:{"data-qa":"dt-recipe-callbox--right-wrapper"}},[t._t("right")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0},t.$slots.bottom?{key:"bottom",fn:function(){return[e("div",{staticClass:"dt-recipe-callbox--bottom-content",attrs:{"data-qa":"dt-recipe-callbox--bottom-wrapper"}},[t._t("bottom")],2)]},proxy:!0}:null],null,!0)})]},proxy:!0}],null,!0)})},p=[],o=d(u,c,p,!1,null,"470fa483",null,null);const v=o.exports;o.exports.__docgenInfo={displayName:"DtRecipeCallbox",exportName:"default",description:"",tags:{},props:[{name:"badgeText",description:"Text for the badge element",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badgeColor",description:"Color for the badge element",tags:{},values:["null","warning"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",description:"Callbox title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"borderColor",description:"Callbox border color",tags:{},values:["default","ai","critical"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"video",description:"Slot for video stream"},{name:"badge",description:"Slot for call center badge"},{name:"subtitle",description:"Slot for subtitle"},{name:"right",description:"Slot for right icons"},{name:"bottom"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/callbox/callbox.vue"]};export{v as D};
//# sourceMappingURL=callbox-3f4faa5f.js.map