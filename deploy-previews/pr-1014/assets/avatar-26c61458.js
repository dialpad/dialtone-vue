import{j as _,a as u,f as r,g as I,k as i,l as S,n as l,t as d,b as f,m as A,o as n}from"./vue.esm-bundler-e62bdd6b.js";import{g as b,a as E}from"./utils-61960a91.js";import{D as w}from"./presence-4a8587f4.js";import{D as k}from"./icon-6ea2a40b.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const c={xs:"d-avatar--xs",sm:"d-avatar--sm",md:"d-avatar--md",lg:"d-avatar--lg",xl:"d-avatar--xl"},v={default:"",icon:"d-avatar__icon",initials:"d-avatar__initials"},C={md:"d-avatar__presence--md",lg:"d-avatar__presence--lg"},m={NONE:"",BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},G={xs:void 0,sm:"200",md:"300",lg:"500",xl:"600"},V=[void 0,"100","200","300","400","500","600","700","800","900","1000","1100","1200","1300","1400","1500","1600","1700","1800"],h=e=>e>1;const p={name:"DtAvatar",components:{DtPresence:w,DtIcon:k},inheritAttrs:!1,props:{id:{type:String,default(){return b()}},seed:{type:String,default:void 0},color:{type:String,default:void 0},size:{type:String,default:"md",validator:e=>Object.keys(c).includes(e)},avatarClass:{type:[String,Array,Object],default:""},canvasClass:{type:[String,Array,Object],default:""},presence:{type:String,default:m.NONE,validator:e=>Object.values(m).includes(e)},presenceProps:{type:Object,default:()=>({})},initials:{type:String,default:""},group:{type:Number,default:void 0,validator:e=>h(e)},overlayIcon:{type:String,default:""},overlayText:{type:String,default:""},overlayClass:{type:[String,Array,Object],default:""}},data(){return{kind:null,AVATAR_SIZE_MODIFIERS:c,AVATAR_KIND_MODIFIERS:v,AVATAR_PRESENCE_SIZE_MODIFIERS:C,imageLoadedSuccessfully:null,slottedInitials:"",formattedInitials:"",initializing:!1}},computed:{avatarClasses(){return["d-avatar",c[this.validatedSize],this.avatarClass,{"d-avatar--group":this.showGroup,[`d-avatar--color-${this.getColor()}`]:this.kind!=="icon"}]},overlayClasses(){return["d-bgc-black-900 d-o70 d-ps-absolute d-w100p d-h100p d-d-flex d-ai-center d-bar-circle d-zi-base",this.overlayClass]},showDefaultSlot(){return this.kind!=="initials"||this.kind==="image"&&this.imageLoadedSuccessfully===!0},showInitials(){return this.kind==="initials"||this.kind==="image"&&this.initials&&this.imageLoadedSuccessfully!==!0},showGroup(){return h(this.group)},formattedGroup(){return this.group>99?"99+":this.group},validatedSize(){return this.group?"xs":this.size}},mounted(){this.init()},updated(){this.init()},methods:{async init(){var t;if(this.initializing)return;this.kind=null,await this.$nextTick();const e=((t=this.$refs.canvas)==null?void 0:t.children[0])||this.$refs.canvas;this.formatInitials(this.initials),e&&(this.setKind(e),this.kindHandler(e)),this.initializing=!0,await this.$nextTick(),this.initializing=!1},kindHandler(e){switch(this.kind){case"image":e.classList.add("d-avatar__image"),this.validateImageAttrsPresence(),this.setImageListeners(e);break;case"icon":e.classList.add(v.icon);break;case"initials":if(!e.textContent)return;this.slottedInitials=e.textContent,this.formatInitials(this.slottedInitials.trim()||this.initials);break}},setImageListeners(e){e.addEventListener("load",()=>this._loadedImageEventHandler(e),{once:!0}),e.addEventListener("error",()=>this._erroredImageEventHandler(e),{once:!0})},formatInitials(e){!e||this.validatedSize==="xs"?this.formattedInitials="":this.validatedSize==="sm"?this.formattedInitials=e.trim()[0]:this.formattedInitials=e.trim().slice(0,2)},setKind(e){if(this.isIconType(e)){this.kind="icon";return}if(this.isImageType(e)){this.kind="image";return}this.kind="initials"},isIconType(e){var t;return((t=e==null?void 0:e.tagName)==null?void 0:t.toUpperCase())==="SVG"},isImageType(e){var t;return((t=e==null?void 0:e.tagName)==null?void 0:t.toUpperCase())==="IMG"},getColor(){return this.color??E(V,this.seed)},validateImageAttrsPresence(){const e=!this.$refs.canvas.children[0].getAttribute("src"),t=this.$refs.canvas.children[0].getAttribute("alt")===null;(e||t)&&_("src and alt attributes are required for image avatars",this)},_loadedImageEventHandler(e){this.imageLoadedSuccessfully=!0,e.classList.remove("d-d-none"),e.classList.add("d-avatar--image-loaded")},_erroredImageEventHandler(e){this.imageLoadedSuccessfully=!1,e.classList.remove("d-avatar--image-loaded"),e.classList.add("d-d-none")}}},x=["id"],R={key:1,class:"d-fs-200 d-fw-bold d-fc-white d-w100p d-ta-center"},D={key:1,class:"d-avatar__count d-zi-base","data-qa":"dt-avatar-count"};function N(e,t,a,z,o,s){const g=u("dt-icon"),y=u("dt-presence");return n(),r("div",{id:a.id,class:l(s.avatarClasses),"data-qa":"dt-avatar"},[I("div",{ref:"canvas",class:l([a.canvasClass,"d-avatar__canvas"])},[i(" @slot Slot for avatar content "),s.showDefaultSlot?S(e.$slots,"default",{key:0}):i("v-if",!0),s.showInitials?(n(),r("span",{key:1,class:l(["d-ps-absolute d-zi-base",o.AVATAR_KIND_MODIFIERS.initials])},d(o.formattedInitials),3)):i("v-if",!0)],2),a.overlayIcon||a.overlayText?(n(),r("div",{key:0,class:l(s.overlayClasses)},[a.overlayIcon?(n(),f(g,{key:0,class:"d-fc-white d-w100p",name:a.overlayIcon},null,8,["name"])):a.overlayText?(n(),r("p",R,d(a.overlayText),1)):i("v-if",!0)],2)):i("v-if",!0),s.showGroup?(n(),r("span",D,d(s.formattedGroup),1)):i("v-if",!0),a.presence&&!s.showGroup?(n(),f(y,A({key:2,presence:a.presence,class:["d-zi-base",["d-avatar__presence",o.AVATAR_PRESENCE_SIZE_MODIFIERS[a.size]]]},a.presenceProps,{"data-qa":"dt-presence"}),null,16,["presence","class"])):i("v-if",!0)],10,x)}const U=T(p,[["render",N],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]]);p.__docgenInfo={displayName:"DtAvatar",description:"An avatar is a visual representation of a user or object.",tags:{see:[{description:"https://dialpad.design/components/avatar.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the avatar content wrapper element",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"seed",description:`Pass in a seed to get the random color generation based on that string. For example if you pass in a
user ID as the string it will return the same randomly generated colors every time for that user.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"color",description:`Set the avatar background to a specific color. If undefined will randomize the color which can be deterministic
if the seed prop is set.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"avatarClass",description:"Used to customize the avatar container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"canvasClass",description:"Set classes on the avatar canvas. Wrapper around the core avatar image.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"AVATAR_PRESENCE_STATES.NONE"}},{name:"presenceProps",description:"A set of props to be passed into the presence component.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"initials",description:"Initials to be shown in the avatar. Used as fallback if image fails to load.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"group",description:`Determines whether to show a group avatar.
Limit to 2 digits max, more than 99 will be rendered as “99+”.
if the number is 1 or less it would just show the regular avatar as if group had not been set.`,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"overlayIcon",description:"The icon that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayText",description:"The text that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayClass",description:"Used to customize the avatar overlay",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for avatar content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]};export{G as A,U as D,c as a,V as b,m as c};
//# sourceMappingURL=avatar-26c61458.js.map
