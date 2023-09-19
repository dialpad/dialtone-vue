import{D as g}from"./list_item-bad41710.js";import{D as y}from"./avatar-c869b32b.js";import{u as _}from"./utils-5c53e9f9.js";import{k as v,v as s,m as n,o as t,d as c,F as b,g as S,j as r,e as o,x as l}from"./vue.esm-bundler-a9a971fb.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const p={name:"DtRecipeContactInfo",components:{DtAvatar:y,DtListItem:g},props:{id:{type:String,default(){return _.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarFullName:{type:String,default:""},avatarIcon:{type:String,default:null},avatarSize:{type:String,default:"lg"},avatarAriaLabel:{type:String,default:""},presence:{type:String,default:null},avatarList:{type:Array,default:null}},emits:["avatar-click"],methods:{avatarClick(){this.$emit("avatar-click")}}},w=["aria-labelledby"],A={key:0,class:"dt-contact-info--avatars d-mrn4 d-d-flex d-fd-row"},I={"data-qa":"contact-info-header"},V={"data-qa":"contact-info-subtitle"},x={"data-qa":"contact-info-bottom"},C={"data-qa":"contact-info-right"};function D(i,u,a,N,q,d){const f=v("dt-avatar"),h=v("dt-list-item");return t(),s(h,{id:a.id,role:a.role,"element-type":"div","data-qa":"contact-info",class:"dt-contact-info"},{left:n(()=>[a.showAvatar?(t(),c("button",{key:0,class:"d-ps-relative d-bgc-transparent d-baw0 d-c-pointer","data-qa":"contact-info-left","aria-labelledby":a.avatarAriaLabel,onClick:u[0]||(u[0]=(...e)=>d.avatarClick&&d.avatarClick(...e))},[a.avatarList?(t(),c("span",A,[(t(!0),c(b,null,S(a.avatarList,(e,m)=>(t(),s(f,{key:m,size:a.avatarSize,seed:e.seed,"full-name":e.fullName,"image-src":e.src,"icon-name":a.avatarIcon,"overlay-icon":e.icon,"overlay-text":e.text,"avatar-class":[{"d-mln24":m>0,"d-bc-brand":!!e.halo}]},null,8,["size","seed","full-name","image-src","icon-name","overlay-icon","overlay-text","avatar-class"]))),128))])):(t(),s(f,{key:1,size:a.avatarSize,"full-name":a.avatarFullName,"image-src":a.avatarSrc,"icon-name":a.avatarIcon,seed:a.avatarSeed,presence:a.presence},null,8,["size","full-name","image-src","icon-name","seed","presence"]))],8,w)):r("v-if",!0)]),default:n(()=>[o("div",I,[r(" @slot Slot for header information "),l(i.$slots,"header",{},void 0,!0)])]),subtitle:n(()=>[o("div",V,[r(" @slot Slot for subtitle information "),l(i.$slots,"subtitle",{},void 0,!0)])]),bottom:n(()=>[o("div",x,[r(" @slot Slot for information at the bottom "),l(i.$slots,"bottom",{},void 0,!0)])]),right:n(()=>[o("div",C,[r(" @slot Slot for the right content "),l(i.$slots,"right",{},void 0,!0)])]),_:3},8,["id","role"])}const T=k(p,[["render",D],["__scopeId","data-v-489bf75b"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]]);p.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` and `avatarIcon` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"avatarAriaLabel",description:"The aria label of the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`fullName` - full name, used as alt attribute for image and extract initials to display in avatar<br>\n if `avatarSrc` and `avatarIcon` are empty<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],events:[{name:"avatar-click"}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};export{T as D};
//# sourceMappingURL=contact_info-ba97b522.js.map
