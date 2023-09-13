import{D as o}from"./list_item-24b0a78f.js";import{D as l}from"./avatar-a541ac01.js";import{u as s}from"./storybook_utils-7c63eced.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const c={name:"DtRecipeContactInfo",components:{DtAvatar:l,DtListItem:o},props:{id:{type:String,default(){return s.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarFullName:{type:String,default:""},avatarIcon:{type:String,default:null},avatarSize:{type:String,default:"lg"},avatarAriaLabel:{type:String,default:""},presence:{type:String,default:null},avatarList:{type:Array,default:null}},emits:["avatar-click"],methods:{avatarClick(){this.$emit("avatar-click")}}};var i=function(){var a=this,t=a._self._c;return t("dt-list-item",{staticClass:"dt-contact-info",attrs:{id:a.id,role:a.role,"element-type":"div","data-qa":"contact-info"},scopedSlots:a._u([{key:"left",fn:function(){return[a.showAvatar?t("button",{staticClass:"d-ps-relative d-bgc-transparent d-baw0 d-c-pointer",attrs:{"data-qa":"contact-info-left","aria-labelledby":a.avatarAriaLabel},on:{click:a.avatarClick}},[a.avatarList?t("span",{staticClass:"dt-contact-info--avatars d-mrn4 d-d-flex d-fd-row"},a._l(a.avatarList,function(e,r){return t("dt-avatar",{key:r,attrs:{size:a.avatarSize,seed:e.seed,"full-name":e.fullName,"image-src":e.src,"icon-name":a.avatarIcon,"overlay-icon":e.icon,"overlay-text":e.text,"avatar-class":[{"d-mln24":r>0,"d-bc-brand":!!e.halo}]}})}),1):t("dt-avatar",{attrs:{size:a.avatarSize,"full-name":a.avatarFullName,"image-src":a.avatarSrc,"icon-name":a.avatarIcon,seed:a.avatarSeed,presence:a.presence}})],1):a._e()]},proxy:!0},{key:"default",fn:function(){return[t("div",{attrs:{"data-qa":"contact-info-header"}},[a._t("header")],2)]},proxy:!0},{key:"subtitle",fn:function(){return[t("div",{attrs:{"data-qa":"contact-info-subtitle"}},[a._t("subtitle")],2)]},proxy:!0},{key:"bottom",fn:function(){return[t("div",{attrs:{"data-qa":"contact-info-bottom"}},[a._t("bottom")],2)]},proxy:!0},{key:"right",fn:function(){return[t("div",{attrs:{"data-qa":"contact-info-right"}},[a._t("right")],2)]},proxy:!0}],null,!0)})},f=[];i._withStripped=!0;var n=u(c,i,f,!1,null,"489bf75b",null,null);n.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue";const g=n.exports;n.exports.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` and `avatarIcon` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"avatarAriaLabel",description:"The aria label of the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`fullName` - full name, used as alt attribute for image and extract initials to display in avatar<br>\n if `avatarSrc` and `avatarIcon` are empty<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],events:[{name:"avatar-click"}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};export{g as D};
//# sourceMappingURL=contact_info-1b68d998.js.map
