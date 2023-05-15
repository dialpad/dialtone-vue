import{a as p,b as s,s as v}from"./storybook_utils-58c64c5e.js";import{V as f}from"./vue.esm-eff6e72e.js";import{P as m}from"./presence-8bac0262.js";import{D as h}from"./icon-525487a4.js";import{n as g}from"./_plugin-vue2_normalizer-2bbd088e.js";const i={xs:"d-avatar--xs",sm:"d-avatar--sm",md:"d-avatar--md",lg:"d-avatar--lg",xl:"d-avatar--xl"},o={default:"",icon:"d-avatar__icon",initials:"d-avatar__initials"},_={md:"d-avatar__presence--md",lg:"d-avatar__presence--lg"},d={NONE:"",BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},x={xs:"100",sm:"200",md:"400",lg:"500",xl:"600"},y=[45,-45,90,-90,135,-135,180,-180],l={with100:["dt-color-purple-100","dt-color-magenta-100","dt-color-gold-100","dt-color-blue-100"],with200:["dt-color-purple-200","dt-color-magenta-200","dt-color-gold-200","dt-color-blue-200"]},A=3,S=2,u=e=>e>1;const I={name:"DtAvatar",components:{DtPresence:m,DtIcon:h},inheritAttrs:!1,props:{id:{type:String,default(){return p()}},seed:{type:String,default:void 0},size:{type:String,default:"md",validator:e=>Object.keys(i).includes(e)},avatarClass:{type:[String,Array,Object],default:""},canvasClass:{type:[String,Array,Object],default:""},presence:{type:String,default:d.NONE,validator:e=>Object.values(d).includes(e)},presenceProps:{type:Object,default:()=>({})},initials:{type:String,default:""},gradient:{type:Boolean,default:!0},group:{type:Number,default:void 0,validator:e=>u(e)},overlayIcon:{type:String,default:""},overlayText:{type:String,default:""},overlayClass:{type:[String,Array,Object],default:""}},data(){return{kind:null,AVATAR_SIZE_MODIFIERS:i,AVATAR_KIND_MODIFIERS:o,AVATAR_PRESENCE_SIZE_MODIFIERS:_,imageLoadedSuccessfully:null,slottedInitials:"",formattedInitials:"",initializing:!1}},computed:{avatarClasses(){return["d-avatar",i[this.validatedSize],this.avatarClass,{"d-avatar--no-gradient":!this.gradient,"d-avatar--group":this.showGroup}]},overlayClasses(){return["d-bgc-black-900 d-o70 d-ps-absolute d-w100p d-h100p d-d-flex d-ai-center d-bar-circle d-zi-base",this.overlayClass]},showDefaultSlot(){return this.kind!=="initials"||this.kind==="image"&&this.imageLoadedSuccessfully===!0},showInitials(){return this.kind==="initials"||this.kind==="image"&&this.initials&&this.imageLoadedSuccessfully!==!0},showGroup(){return u(this.group)},initialKindStyle(){const e=this.randomizeGradientColorStops();return{"--avatar-gradient-angle":`${this.randomizeGradientAngle()}deg`,"--avatar-gradient-stop-1":`var(--${e[0]})`,"--avatar-gradient-stop-2":`var(--${e[1]})`,"--avatar-gradient-stop-3":`var(--${e[2]})`}},formattedGroup(){return this.group>99?"99+":this.group},validatedSize(){return this.group?"xs":this.size}},mounted(){this.init()},updated(){this.init()},methods:{async init(){var a;if(this.initializing)return;this.kind=null,await this.$nextTick();const e=((a=this.$refs.canvas)==null?void 0:a.firstElementChild)||this.$refs.canvas;this.formatInitials(this.initials),e&&(this.setKind(e),this.kindHandler(e)),this.initializing=!0,await this.$nextTick(),this.initializing=!1},kindHandler(e){switch(this.kind){case"image":e.classList.add("d-avatar__image"),this.validateImageAttrsPresence(),this.setImageListeners(e);break;case"icon":e.classList.add(o.icon);break;case"initials":this.slottedInitials=e.text||e.textContent,this.formatInitials(this.slottedInitials.trim()||this.initials);break}},setImageListeners(e){e.addEventListener("load",()=>this._loadedImageEventHandler(e),{once:!0}),e.addEventListener("error",()=>this._erroredImageEventHandler(e),{once:!0})},formatInitials(e){!e||this.validatedSize==="xs"?this.formattedInitials="":this.validatedSize==="sm"?this.formattedInitials=e.trim()[0]:this.formattedInitials=e.trim().slice(0,2)},setKind(e){if(this.isIconType(e)){this.kind="icon";return}if(this.isImageType(e)){this.kind="image";return}this.kind="initials"},isIconType(e){var a;return((a=e==null?void 0:e.tagName)==null?void 0:a.toUpperCase())==="SVG"},isImageType(e){var a;return((a=e==null?void 0:e.tagName)==null?void 0:a.toUpperCase())==="IMG"},randomizeGradientAngle(){return s(y,this.seed)},randomizeGradientColorStops(){const e=new Set;let a=0;for(;e.size<A;){const n=this.seed===void 0?void 0:this.seed+a.toString();e.size===S?e.add(s(l.with200,n)):e.add(s(l.with100,n)),a++}const t=v(this.seed);return Array.from(e).sort(()=>.5-t())},validateImageAttrsPresence(){const e=!this.$refs.canvas.firstChild.getAttribute("src"),a=this.$refs.canvas.firstChild.getAttribute("alt")===null;(e||a)&&f.util.warn("src and alt attributes are required for image avatars",this)},_loadedImageEventHandler(e){this.imageLoadedSuccessfully=!0,e.classList.remove("d-d-none"),e.classList.add("d-avatar--image-loaded")},_erroredImageEventHandler(e){this.imageLoadedSuccessfully=!1,e.classList.remove("d-avatar--image-loaded"),e.classList.add("d-d-none")}}};var c=function(){var a=this,t=a._self._c;return t("div",{class:a.avatarClasses,style:a.initialKindStyle,attrs:{id:a.id,"data-qa":"dt-avatar"}},[t("div",{ref:"canvas",class:[a.canvasClass,"d-avatar__canvas"]},[a.showDefaultSlot?a._t("default"):a._e(),a.showInitials?t("span",{staticClass:"d-ps-absolute d-zi-base",class:a.AVATAR_KIND_MODIFIERS.initials},[a._v(" "+a._s(a.formattedInitials)+" ")]):a._e()],2),a.overlayIcon||a.overlayText?t("div",{class:a.overlayClasses},[a.overlayIcon?t("dt-icon",{staticClass:"d-fc-white d-w100p",attrs:{name:a.overlayIcon}}):a.overlayText?t("p",{staticClass:"d-fs-200 d-fw-bold d-fc-white d-w100p d-ta-center"},[a._v(" "+a._s(a.overlayText)+" ")]):a._e()],1):a._e(),a.showGroup?t("span",{staticClass:"d-avatar__count d-zi-base",attrs:{"data-qa":"dt-avatar-count"}},[a._v(a._s(a.formattedGroup))]):a._e(),a.presence&&!a.showGroup?t("dt-presence",a._b({staticClass:"d-zi-base",class:["d-avatar__presence",a.AVATAR_PRESENCE_SIZE_MODIFIERS[a.size]],attrs:{presence:a.presence,"data-qa":"dt-presence"}},"dt-presence",a.presenceProps,!1)):a._e()],1)},b=[];c._withStripped=!0;var r=g(I,c,b,!1,null,null,null,null);r.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue";const V=r.exports;r.exports.__docgenInfo={displayName:"DtAvatar",description:"An avatar is a visual representation of a user or object.",tags:{see:[{description:"https://dialpad.design/components/avatar.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the avatar content wrapper element",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"seed",description:`Pass in a seed to get the random color generation based on that string. For example if you pass in a
user ID as the string it will return the same randomly generated colors every time for that user.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"avatarClass",description:"Used to customize the avatar container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"canvasClass",description:"Set classes on the avatar canvas. Wrapper around the core avatar image.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"AVATAR_PRESENCE_STATES.NONE"}},{name:"presenceProps",description:"A set of props to be passed into the presence component.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"initials",description:"Initials to be shown in the avatar. Used as fallback if image fails to load.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"gradient",description:"Determines whether to show a gradient background for the avatar.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"group",description:`Determines whether to show a group avatar.
Limit to 2 digits max, more than 99 will be rendered as “99+”.
if the number is 1 or less it would just show the regular avatar as if group had not been set.`,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"overlayIcon",description:"The icon that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayText",description:"The text that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayClass",description:"Used to customize the avatar overlay",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for avatar content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]};export{x as A,V as D,i as a,d as b};
//# sourceMappingURL=avatar-f0d8c991.js.map
