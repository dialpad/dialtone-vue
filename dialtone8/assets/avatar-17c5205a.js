import{a as d,o}from"./storybook_utils-44732a3b.js";import{V as c}from"./vue.esm-ba2ca387.js";import{D as u}from"./presence-7999d7f0.js";import{D as f}from"./icon-90e7bf10.js";import{n as p}from"./_plugin-vue2_normalizer-2bbd088e.js";const s={xs:"d-avatar--xs",sm:"d-avatar--sm",md:"d-avatar--md",lg:"d-avatar--lg",xl:"d-avatar--xl"},i={default:"",icon:"d-avatar__icon",initials:"d-avatar__initials"},v={md:"d-avatar__presence--md",lg:"d-avatar__presence--lg"},r={NONE:"",BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},E={xs:void 0,sm:"200",md:"300",lg:"500",xl:"600"},m=[void 0,"100","200","300","400","500","600","700","800","900","1000","1100","1200","1300","1400","1500","1600","1700","1800"],n=a=>a>1;const h={name:"DtAvatar",components:{DtPresence:u,DtIcon:f},inheritAttrs:!1,props:{id:{type:String,default(){return d()}},seed:{type:String,default:void 0},color:{type:String,default:void 0},size:{type:String,default:"md",validator:a=>Object.keys(s).includes(a)},avatarClass:{type:[String,Array,Object],default:""},canvasClass:{type:[String,Array,Object],default:""},presence:{type:String,default:r.NONE,validator:a=>Object.values(r).includes(a)},presenceProps:{type:Object,default:()=>({})},initials:{type:String,default:""},group:{type:Number,default:void 0,validator:a=>n(a)},overlayIcon:{type:String,default:""},overlayText:{type:String,default:""},overlayClass:{type:[String,Array,Object],default:""}},data(){return{kind:null,AVATAR_SIZE_MODIFIERS:s,AVATAR_KIND_MODIFIERS:i,AVATAR_PRESENCE_SIZE_MODIFIERS:v,imageLoadedSuccessfully:null,slottedInitials:"",formattedInitials:"",initializing:!1}},computed:{avatarClasses(){return["d-avatar",s[this.validatedSize],this.avatarClass,{"d-avatar--group":this.showGroup,[`d-avatar--color-${this.getColor()}`]:this.kind!=="icon"}]},overlayClasses(){return["d-bgc-neutral-black d-o70 d-ps-absolute d-w100p d-h100p d-d-flex d-ai-center d-bar-circle d-zi-base",this.overlayClass]},showDefaultSlot(){return this.kind!=="initials"||this.kind==="image"&&this.imageLoadedSuccessfully===!0},showInitials(){return this.kind==="initials"||this.kind==="image"&&this.initials&&this.imageLoadedSuccessfully!==!0},showGroup(){return n(this.group)},formattedGroup(){return this.group>99?"99+":this.group},validatedSize(){return this.group?"xs":this.size}},mounted(){this.init()},updated(){this.init()},methods:{async init(){var e;if(this.initializing)return;this.kind=null,await this.$nextTick();const a=((e=this.$refs.canvas)==null?void 0:e.firstElementChild)||this.$refs.canvas;this.formatInitials(this.initials),a&&(this.setKind(a),this.kindHandler(a)),this.initializing=!0,await this.$nextTick(),this.initializing=!1},kindHandler(a){switch(this.kind){case"image":a.classList.add("d-avatar__image"),this.validateImageAttrsPresence(),this.setImageListeners(a);break;case"icon":a.classList.add(i.icon);break;case"initials":this.slottedInitials=a.text||a.textContent,this.formatInitials(this.slottedInitials.trim()||this.initials);break}},setImageListeners(a){a.addEventListener("load",()=>this._loadedImageEventHandler(a),{once:!0}),a.addEventListener("error",()=>this._erroredImageEventHandler(a),{once:!0})},formatInitials(a){!a||this.validatedSize==="xs"?this.formattedInitials="":this.validatedSize==="sm"?this.formattedInitials=a.trim()[0]:this.formattedInitials=a.trim().slice(0,2)},setKind(a){if(this.isIconType(a)){this.kind="icon";return}if(this.isImageType(a)){this.kind="image";return}this.kind="initials"},isIconType(a){var e;return((e=a==null?void 0:a.tagName)==null?void 0:e.toUpperCase())==="SVG"},isImageType(a){var e;return((e=a==null?void 0:a.tagName)==null?void 0:e.toUpperCase())==="IMG"},getColor(){return this.color??o(m,this.seed)},validateImageAttrsPresence(){const a=!this.$refs.canvas.firstChild.getAttribute("src"),e=this.$refs.canvas.firstChild.getAttribute("alt")===null;(a||e)&&c.util.warn("src and alt attributes are required for image avatars",this)},_loadedImageEventHandler(a){this.imageLoadedSuccessfully=!0,a.classList.remove("d-d-none"),a.classList.add("d-avatar--image-loaded")},_erroredImageEventHandler(a){this.imageLoadedSuccessfully=!1,a.classList.remove("d-avatar--image-loaded"),a.classList.add("d-d-none")}}};var g=function(){var e=this,t=e._self._c;return t("div",{class:e.avatarClasses,attrs:{id:e.id,"data-qa":"dt-avatar"}},[t("div",{ref:"canvas",class:[e.canvasClass,"d-avatar__canvas"]},[e.showDefaultSlot?e._t("default"):e._e(),e.showInitials?t("span",{staticClass:"d-ps-absolute d-zi-base",class:e.AVATAR_KIND_MODIFIERS.initials},[e._v(" "+e._s(e.formattedInitials)+" ")]):e._e()],2),e.overlayIcon||e.overlayText?t("div",{class:e.overlayClasses},[e.overlayIcon?t("dt-icon",{staticClass:"d-fc-neutral-white d-w100p",attrs:{name:e.overlayIcon}}):e.overlayText?t("p",{staticClass:"d-fs-200 d-fw-bold d-fc-neutral-white d-w100p d-ta-center"},[e._v(" "+e._s(e.overlayText)+" ")]):e._e()],1):e._e(),e.showGroup?t("span",{staticClass:"d-avatar__count d-zi-base",attrs:{"data-qa":"dt-avatar-count"}},[e._v(e._s(e.formattedGroup))]):e._e(),e.presence&&!e.showGroup?t("dt-presence",e._b({staticClass:"d-zi-base",class:["d-avatar__presence",e.AVATAR_PRESENCE_SIZE_MODIFIERS[e.size]],attrs:{presence:e.presence,"data-qa":"dt-presence"}},"dt-presence",e.presenceProps,!1)):e._e()],1)},_=[],l=p(h,g,_,!1,null,null,null,null);const C=l.exports;l.exports.__docgenInfo={displayName:"DtAvatar",description:"An avatar is a visual representation of a user or object.",tags:{see:[{description:"https://dialpad.design/components/avatar.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the avatar content wrapper element",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"seed",description:`Pass in a seed to get the random color generation based on that string. For example if you pass in a
user ID as the string it will return the same randomly generated colors every time for that user.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"color",description:`Set the avatar background to a specific color. If undefined will randomize the color which can be deterministic
if the seed prop is set.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"avatarClass",description:"Used to customize the avatar container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"canvasClass",description:"Set classes on the avatar canvas. Wrapper around the core avatar image.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"AVATAR_PRESENCE_STATES.NONE"}},{name:"presenceProps",description:"A set of props to be passed into the presence component.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"initials",description:"Initials to be shown in the avatar. Used as fallback if image fails to load.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"group",description:`Determines whether to show a group avatar.
Limit to 2 digits max, more than 99 will be rendered as “99+”.
if the number is 1 or less it would just show the regular avatar as if group had not been set.`,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"overlayIcon",description:"The icon that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayText",description:"The text that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayClass",description:"Used to customize the avatar overlay",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for avatar content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]};export{E as A,C as D,s as a,m as b,r as c};
//# sourceMappingURL=avatar-17c5205a.js.map
