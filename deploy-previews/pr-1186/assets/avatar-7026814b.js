import{e as d,a as u,o as c}from"./storybook_utils-171189a5.js";import{D as m}from"./presence-d4f38341.js";import{D as f}from"./icon-9a6cc121.js";import{I as v}from"./icon_constants-70401a10.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";const s={xs:"d-avatar--xs",sm:"d-avatar--sm",md:"d-avatar--md",lg:"d-avatar--lg",xl:"d-avatar--xl"},g={default:"",icon:"d-avatar__icon",initials:"d-avatar__initials"},h={md:"d-avatar__presence--md",lg:"d-avatar__presence--lg"},i={NONE:"",BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},y={xs:"100",sm:"200",md:"300",lg:"500",xl:"600"},_=["100","200","300","400","500","600","700","800","900","1000","1100","1200","1300","1400","1500","1600","1700","1800"],l=a=>a>1,S=a=>{if(typeof a!="string"||!a.trim())return"";const e=a.trim().split(/\s+/g);return e.length===1?e.join("").substring(0,2):e.filter((t,n)=>n===0||n===e.length-1).map(t=>t.slice(0,1).toUpperCase()).join("")};const I=d(),A={name:"DtAvatar",components:{DtPresence:m,DtIcon:f},inheritAttrs:!1,props:{id:{type:String,default(){return u()}},seed:{type:String,default:void 0},color:{type:String,default:void 0},size:{type:String,default:"md",validator:a=>Object.keys(s).includes(a)},avatarClass:{type:[String,Array,Object],default:""},canvasClass:{type:[String,Array,Object],default:""},iconClass:{type:[String,Array,Object],default:""},presence:{type:String,default:i.NONE,validator:a=>Object.values(i).includes(a)},presenceProps:{type:Object,default:()=>({})},group:{type:Number,default:void 0,validator:a=>l(a)},overlayIcon:{type:String,default:""},overlayText:{type:String,default:""},overlayClass:{type:[String,Array,Object],default:""},imageSrc:{type:String,default:""},imageAlt:{type:String,default:""},iconName:{type:String,default:void 0,validator:a=>I.includes(a)},iconSize:{type:String,default:"",validator:a=>!a||Object.keys(v).includes(a)},fullName:{type:String,default:""}},data(){return{AVATAR_SIZE_MODIFIERS:s,AVATAR_KIND_MODIFIERS:g,AVATAR_PRESENCE_SIZE_MODIFIERS:h,AVATAR_ICON_SIZES:y,imageLoadedSuccessfully:null,formattedInitials:"",initializing:!1}},computed:{isNotIconType(){return!this.iconName},avatarClasses(){return["d-avatar",s[this.validatedSize],this.avatarClass,{"d-avatar--group":this.showGroup,[`d-avatar--color-${this.getColor()}`]:this.isNotIconType}]},overlayClasses(){return["d-avatar__overlay",this.overlayClass]},showGroup(){return l(this.group)},formattedGroup(){return this.group>99?"99+":this.group},validatedSize(){return this.group?"xs":this.size},showImage(){return this.imageLoadedSuccessfully!==!1&&this.imageSrc}},watch:{fullName:{immediate:!0,handler(a){this.formatInitials(a)}},imageSrc(a){this.imageLoadedSuccessfully=null,a&&(this.validateProps(),this.setImageListeners())}},mounted(){this.validateProps(),this.setImageListeners()},methods:{async setImageListeners(){await this.$nextTick();const a=this.$refs.avatarImage;a&&(a.addEventListener("load",()=>this._loadedImageEventHandler(a),{once:!0}),a.addEventListener("error",()=>this._erroredImageEventHandler(a),{once:!0}))},formatInitials(a){const e=S(a);this.validatedSize==="xs"?this.formattedInitials="":this.validatedSize==="sm"?this.formattedInitials=e[0]:this.formattedInitials=e},getColor(){return this.color??c(_,this.seed)},_loadedImageEventHandler(a){this.imageLoadedSuccessfully=!0,a.classList.remove("d-d-none")},_erroredImageEventHandler(a){this.imageLoadedSuccessfully=!1,a.classList.add("d-d-none")},validateProps(){if(this.imageSrc&&!(this.fullName||this.imageAlt))throw new Error("full-name or image-alt must be set if image-src is provided")}}};var o=function(){var e=this,t=e._self._c;return t("div",{class:e.avatarClasses,attrs:{id:e.id,"data-qa":"dt-avatar"}},[t("div",{ref:"canvas",class:[e.canvasClass,"d-avatar__canvas",{"d-avatar--image-loaded":e.imageLoadedSuccessfully}]},[e.showImage?t("img",{ref:"avatarImage",staticClass:"d-avatar__image",attrs:{"data-qa":"dt-avatar-image",src:e.imageSrc,alt:e.imageAlt||e.fullName}}):e.iconName?t("dt-icon",{class:[e.iconClass,e.AVATAR_KIND_MODIFIERS.icon],attrs:{name:e.iconName,size:e.iconSize||e.AVATAR_ICON_SIZES[e.size],"data-qa":"dt-avatar-icon"}}):t("span",{staticClass:"d-ps-absolute d-zi-base",class:e.AVATAR_KIND_MODIFIERS.initials},[e._v(" "+e._s(e.formattedInitials)+" ")])],1),e.overlayIcon||e.overlayText?t("div",{class:e.overlayClasses},[e.overlayIcon?t("dt-icon",{staticClass:"d-avatar__overlay-icon",attrs:{name:e.overlayIcon}}):e.overlayText?t("p",{staticClass:"d-avatar__overlay-text"},[e._v(" "+e._s(e.overlayText)+" ")]):e._e()],1):e._e(),e.showGroup?t("span",{staticClass:"d-avatar__count",attrs:{"data-qa":"dt-avatar-count"}},[e._v(e._s(e.formattedGroup))]):e._e(),e.presence&&!e.showGroup?t("dt-presence",e._b({class:["d-avatar__presence",e.AVATAR_PRESENCE_SIZE_MODIFIERS[e.size]],attrs:{presence:e.presence,"data-qa":"dt-presence"}},"dt-presence",e.presenceProps,!1)):e._e()],1)},E=[];o._withStripped=!0;var r=p(A,o,E,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue";const R=r.exports;r.exports.__docgenInfo={displayName:"DtAvatar",description:"An avatar is a visual representation of a user or object.",tags:{see:[{description:"https://dialpad.design/components/avatar.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the avatar content wrapper element",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"seed",description:`Pass in a seed to get the random color generation based on that string. For example if you pass in a
user ID as the string it will return the same randomly generated colors every time for that user.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"color",description:`Set the avatar background to a specific color. If undefined will randomize the color which can be deterministic
if the seed prop is set.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"avatarClass",description:"Used to customize the avatar container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"canvasClass",description:"Set classes on the avatar canvas. Wrapper around the core avatar image.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"iconClass",description:"Pass through classes. Used to customize the avatar icon",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"AVATAR_PRESENCE_STATES.NONE"}},{name:"presenceProps",description:"A set of props to be passed into the presence component.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"group",description:`Determines whether to show a group avatar.
Limit to 2 digits max, more than 99 will be rendered as “99+”.
if the number is 1 or less it would just show the regular avatar as if group had not been set.`,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"overlayIcon",description:"The icon that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayText",description:"The text that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayClass",description:"Used to customize the avatar overlay",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"imageSrc",description:"Source of the image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"imageAlt",description:`Alt attribute of the image, by default
it'd be the full name`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconName",description:"Icon name to be displayed on the avatar",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"iconSize",description:"Icon size to be displayed on the avatar",tags:{},values:["100","200","300","400","500","600","700","800"],type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"fullName",description:"Full name used to extract initials and set alt attribute.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]};export{s as A,R as D,_ as a,i as b};
//# sourceMappingURL=avatar-7026814b.js.map
