import{g as I,a as v,e as r,f as b,i,j as E,n as o,t as c,b as m,m as w,k as C,o as n}from"./vue.esm-bundler-2e3b72e0.js";import{g as T,a as u,s as k}from"./utils-9325de8f.js";import{D as R}from"./presence-b91bbd1c.js";import{D as V}from"./icon-0f76b30a.js";import"./storybook_utils-35e0d11d.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const f={xs:"d-avatar--xs",sm:"d-avatar--sm",md:"d-avatar--md",lg:"d-avatar--lg",xl:"d-avatar--xl"},h={default:"",icon:"d-avatar__icon",initials:"d-avatar__initials"},z={md:"d-avatar__presence--md",lg:"d-avatar__presence--lg"},p={NONE:"",BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},K={xs:"100",sm:"200",md:"400",lg:"500",xl:"600"},D=[45,-45,90,-90,135,-135,180,-180],g={with100:["purple-100","magenta-100","gold-100","blue-100"],with200:["purple-200","magenta-200","gold-200","blue-200"]},N=3,O=2,y=e=>e>1;const _={name:"DtAvatar",components:{DtPresence:R,DtIcon:V},inheritAttrs:!1,props:{id:{type:String,default(){return T()}},seed:{type:String,default:void 0},size:{type:String,default:"md",validator:e=>Object.keys(f).includes(e)},avatarClass:{type:[String,Array,Object],default:""},canvasClass:{type:[String,Array,Object],default:""},presence:{type:String,default:p.NONE,validator:e=>Object.values(p).includes(e)},presenceProps:{type:Object,default:()=>({})},initials:{type:String,default:""},gradient:{type:Boolean,default:!0},group:{type:Number,default:void 0,validator:e=>y(e)},overlayIcon:{type:String,default:""},overlayText:{type:String,default:""},overlayClass:{type:[String,Array,Object],default:""}},data(){return{kind:null,AVATAR_SIZE_MODIFIERS:f,AVATAR_KIND_MODIFIERS:h,AVATAR_PRESENCE_SIZE_MODIFIERS:z,imageLoadedSuccessfully:null,slottedInitials:"",formattedInitials:"",initializing:!1}},computed:{avatarClasses(){return["d-avatar",f[this.validatedSize],this.avatarClass,{"d-avatar--no-gradient":!this.gradient,"d-avatar--group":this.showGroup}]},overlayClasses(){return["d-bgc-black-900 d-o70 d-ps-absolute d-w100p d-h100p d-d-flex d-ai-center d-bar-circle d-zi-base",this.overlayClass]},showDefaultSlot(){return this.kind!=="initials"||this.kind==="image"&&this.imageLoadedSuccessfully===!0},showInitials(){return this.kind==="initials"||this.kind==="image"&&this.initials&&this.imageLoadedSuccessfully!==!0},showGroup(){return y(this.group)},initialKindStyle(){const e=this.randomizeGradientColorStops();return{"--avatar-gradient-angle":`${this.randomizeGradientAngle()}deg`,"--avatar-gradient-stop-1":`var(--${e[0]})`,"--avatar-gradient-stop-2":`var(--${e[1]})`,"--avatar-gradient-stop-3":`var(--${e[2]})`}},formattedGroup(){return this.group>99?"99+":this.group},validatedSize(){return this.group?"xs":this.size}},mounted(){this.init()},updated(){this.init()},methods:{async init(){var a;if(this.initializing)return;this.kind=null,await this.$nextTick();const e=((a=this.$refs.canvas)==null?void 0:a.children[0])||this.$refs.canvas;this.formatInitials(this.initials),e&&(this.setKind(e),this.kindHandler(e)),this.initializing=!0,await this.$nextTick(),this.initializing=!1},kindHandler(e){switch(this.kind){case"image":e.classList.add("d-avatar__image"),this.validateImageAttrsPresence(),this.setImageListeners(e);break;case"icon":e.classList.add(h.icon);break;case"initials":if(!e.textContent)return;this.slottedInitials=e.textContent,this.formatInitials(this.slottedInitials.trim()||this.initials);break}},setImageListeners(e){e.addEventListener("load",()=>this._loadedImageEventHandler(e),{once:!0}),e.addEventListener("error",()=>this._erroredImageEventHandler(e),{once:!0})},formatInitials(e){!e||this.validatedSize==="xs"?this.formattedInitials="":this.validatedSize==="sm"?this.formattedInitials=e.trim()[0]:this.formattedInitials=e.trim().slice(0,2)},setKind(e){if(this.isIconType(e)){this.kind="icon";return}if(this.isImageType(e)){this.kind="image";return}this.kind="initials"},isIconType(e){var a;return((a=e==null?void 0:e.tagName)==null?void 0:a.toUpperCase())==="SVG"},isImageType(e){var a;return((a=e==null?void 0:e.tagName)==null?void 0:a.toUpperCase())==="IMG"},randomizeGradientAngle(){return u(D,this.seed)},randomizeGradientColorStops(){const e=new Set;let a=0;for(;e.size<N;){const d=this.seed===void 0?void 0:this.seed+a.toString();e.size===O?e.add(u(g.with200,d)):e.add(u(g.with100,d)),a++}const t=k(this.seed);return Array.from(e).sort(()=>.5-t())},validateImageAttrsPresence(){const e=!this.$refs.canvas.children[0].getAttribute("src"),a=this.$refs.canvas.children[0].getAttribute("alt")===null;(e||a)&&I("src and alt attributes are required for image avatars",this)},_loadedImageEventHandler(e){this.imageLoadedSuccessfully=!0,e.classList.remove("d-d-none"),e.classList.add("d-avatar--image-loaded")},_erroredImageEventHandler(e){this.imageLoadedSuccessfully=!1,e.classList.remove("d-avatar--image-loaded"),e.classList.add("d-d-none")}}},L=["id"],G={key:1,class:"d-fs-200 d-fw-bold d-fc-white d-w100p d-ta-center"},P={key:1,class:"d-avatar__count d-zi-base","data-qa":"dt-avatar-count"};function j(e,a,t,d,l,s){const S=v("dt-icon"),A=v("dt-presence");return n(),r("div",{id:t.id,class:o(s.avatarClasses),style:C(s.initialKindStyle),"data-qa":"dt-avatar"},[b("div",{ref:"canvas",class:o([t.canvasClass,"d-avatar__canvas"])},[i(" @slot Slot for avatar content "),s.showDefaultSlot?E(e.$slots,"default",{key:0}):i("v-if",!0),s.showInitials?(n(),r("span",{key:1,class:o(["d-ps-absolute d-zi-base",l.AVATAR_KIND_MODIFIERS.initials])},c(l.formattedInitials),3)):i("v-if",!0)],2),t.overlayIcon||t.overlayText?(n(),r("div",{key:0,class:o(s.overlayClasses)},[t.overlayIcon?(n(),m(S,{key:0,class:"d-fc-white d-w100p",name:t.overlayIcon},null,8,["name"])):t.overlayText?(n(),r("p",G,c(t.overlayText),1)):i("v-if",!0)],2)):i("v-if",!0),s.showGroup?(n(),r("span",P,c(s.formattedGroup),1)):i("v-if",!0),t.presence&&!s.showGroup?(n(),m(A,w({key:2,presence:t.presence,class:["d-zi-base",["d-avatar__presence",l.AVATAR_PRESENCE_SIZE_MODIFIERS[t.size]]]},t.presenceProps,{"data-qa":"dt-presence"}),null,16,["presence","class"])):i("v-if",!0)],14,L)}const Z=x(_,[["render",j],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]]);_.__docgenInfo={displayName:"DtAvatar",description:"An avatar is a visual representation of a user or object.",tags:{see:[{description:"https://dialpad.design/components/avatar.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the avatar content wrapper element",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"seed",description:`Pass in a seed to get the random color generation based on that string. For example if you pass in a
user ID as the string it will return the same randomly generated colors every time for that user.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"avatarClass",description:"Used to customize the avatar container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"canvasClass",description:"Set classes on the avatar canvas. Wrapper around the core avatar image.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"AVATAR_PRESENCE_STATES.NONE"}},{name:"presenceProps",description:"A set of props to be passed into the presence component.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"initials",description:"Initials to be shown in the avatar. Used as fallback if image fails to load.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"gradient",description:"Determines whether to show a gradient background for the avatar.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"group",description:`Determines whether to show a group avatar.
Limit to 2 digits max, more than 99 will be rendered as “99+”.
if the number is 1 or less it would just show the regular avatar as if group had not been set.`,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"overlayIcon",description:"The icon that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayText",description:"The text that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayClass",description:"Used to customize the avatar overlay",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Slot for avatar content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]};export{K as A,Z as D,f as a,p as b};
//# sourceMappingURL=avatar-bf6d0cca.js.map
