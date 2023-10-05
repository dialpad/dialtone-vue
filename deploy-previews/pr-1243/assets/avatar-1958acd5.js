import{g as _,j as S}from"./utils-2ce43813.js";import{D as A}from"./presence-ec402143.js";import{D as I}from"./icon-13392d5a.js";import{I as b}from"./icon_constants-88e1a1e6.js";import{g as E}from"./storybook_utils-c9ca045c.js";import{u as v,b as o,w as C,k as r,l as k,o as t,e as N,p as l,A as u,f as c,m as V}from"./vue.esm-bundler-a1916ad5.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const m={xs:"d-avatar--xs",sm:"d-avatar--sm",md:"d-avatar--md",lg:"d-avatar--lg",xl:"d-avatar--xl"},w={default:"",icon:"d-avatar__icon",initials:"d-avatar__initials"},R={md:"d-avatar__presence--md",lg:"d-avatar__presence--lg"},g={NONE:"",BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},x={xs:"100",sm:"200",md:"300",lg:"500",xl:"600"},O=["100","200","300","400","500","600","700","800","900","1000","1100","1200","1300","1400","1500","1600","1700","1800"],h=e=>e>1,D=e=>{if(typeof e!="string"||!e.trim())return"";const s=e.trim().split(/\s+/g);return s.length===1?s.join("").substring(0,2):s.filter((a,d)=>d===0||d===s.length-1).map(a=>a.slice(0,1).toUpperCase()).join("")};const z=E(),p={name:"DtAvatar",components:{DtPresence:A,DtIcon:I},inheritAttrs:!1,props:{id:{type:String,default(){return _()}},seed:{type:String,default:void 0},color:{type:String,default:void 0},size:{type:String,default:"md",validator:e=>Object.keys(m).includes(e)},avatarClass:{type:[String,Array,Object],default:""},canvasClass:{type:[String,Array,Object],default:""},iconClass:{type:[String,Array,Object],default:""},presence:{type:String,default:g.NONE,validator:e=>Object.values(g).includes(e)},presenceProps:{type:Object,default:()=>({})},group:{type:Number,default:void 0,validator:e=>h(e)},overlayIcon:{type:String,default:""},overlayText:{type:String,default:""},overlayClass:{type:[String,Array,Object],default:""},imageSrc:{type:String,default:""},imageAlt:{type:String,default:""},iconName:{type:String,default:void 0,validator:e=>z.includes(e)},iconSize:{type:String,default:"",validator:e=>!e||Object.keys(b).includes(e)},fullName:{type:String,default:""},clickable:{type:Boolean,default:!1}},emits:["click"],data(){return{AVATAR_SIZE_MODIFIERS:m,AVATAR_KIND_MODIFIERS:w,AVATAR_PRESENCE_SIZE_MODIFIERS:R,AVATAR_ICON_SIZES:x,imageLoadedSuccessfully:null,formattedInitials:"",initializing:!1}},computed:{isNotIconType(){return!this.iconName},avatarClasses(){return["d-avatar",m[this.validatedSize],this.avatarClass,{"d-avatar--group":this.showGroup,[`d-avatar--color-${this.getColor()}`]:this.isNotIconType,"d-avatar--clickable":this.clickable}]},overlayClasses(){return["d-avatar__overlay",this.overlayClass]},showGroup(){return h(this.group)},formattedGroup(){return this.group>99?"99+":this.group},validatedSize(){return this.group?"xs":this.size},showImage(){return this.imageLoadedSuccessfully!==!1&&this.imageSrc},buttonAriaLabel(){if(this.clickable)return this.fullName||this.imageAlt||this.$attrs["aria-label"]}},watch:{fullName:{immediate:!0,handler(e){this.formatInitials(e)}},imageSrc(e){this.imageLoadedSuccessfully=null,e&&(this.validateProps(),this.setImageListeners())}},mounted(){this.validateProps(),this.setImageListeners()},methods:{async setImageListeners(){await this.$nextTick();const e=this.$refs.avatarImage;e&&(e.addEventListener("load",()=>this._loadedImageEventHandler(e),{once:!0}),e.addEventListener("error",()=>this._erroredImageEventHandler(e),{once:!0}))},formatInitials(e){const s=D(e);this.validatedSize==="xs"?this.formattedInitials="":this.validatedSize==="sm"?this.formattedInitials=s[0]:this.formattedInitials=s},getColor(){return this.color??S(O,this.seed)},_loadedImageEventHandler(e){this.imageLoadedSuccessfully=!0,e.classList.remove("d-d-none")},_erroredImageEventHandler(e){this.imageLoadedSuccessfully=!1,e.classList.add("d-d-none")},validateProps(){if(this.imageSrc&&!(this.fullName||this.imageAlt))throw new Error("full-name or image-alt must be set if image-src is provided")},handleClick(e){this.clickable&&this.$emit("click",e)}}},L=["src","alt"],j={key:1,class:"d-avatar__overlay-text"},P={key:1,class:"d-avatar__count","data-qa":"dt-avatar-count"};function F(e,s,a,d,i,n){const f=v("dt-icon"),y=v("dt-presence");return t(),o(k(a.clickable?"button":"div"),{id:a.id,class:r(n.avatarClasses),"data-qa":"dt-avatar","aria-label":n.buttonAriaLabel,onClick:n.handleClick},{default:C(()=>[N("div",{ref:"canvas",class:r([a.canvasClass,"d-avatar__canvas",{"d-avatar--image-loaded":i.imageLoadedSuccessfully}])},[n.showImage?(t(),l("img",{key:0,ref:"avatarImage",class:"d-avatar__image","data-qa":"dt-avatar-image",src:a.imageSrc,alt:a.imageAlt||a.fullName},null,8,L)):a.iconName?(t(),o(f,{key:1,name:a.iconName,size:a.iconSize||i.AVATAR_ICON_SIZES[a.size],class:r([a.iconClass,i.AVATAR_KIND_MODIFIERS.icon]),"data-qa":"dt-avatar-icon"},null,8,["name","size","class"])):(t(),l("span",{key:2,class:r([i.AVATAR_KIND_MODIFIERS.initials,"d-ps-absolute d-zi-base d-us-none"])},u(i.formattedInitials),3))],2),a.overlayIcon||a.overlayText?(t(),l("div",{key:0,class:r(n.overlayClasses)},[a.overlayIcon?(t(),o(f,{key:0,class:"d-avatar__overlay-icon",name:a.overlayIcon},null,8,["name"])):a.overlayText?(t(),l("p",j,u(a.overlayText),1)):c("v-if",!0)],2)):c("v-if",!0),n.showGroup?(t(),l("span",P,u(n.formattedGroup),1)):c("v-if",!0),a.presence&&!n.showGroup?(t(),o(y,V({key:2,presence:a.presence,class:["d-avatar__presence",i.AVATAR_PRESENCE_SIZE_MODIFIERS[a.size]]},a.presenceProps,{"data-qa":"dt-presence"}),null,16,["presence","class"])):c("v-if",!0)]),_:1},8,["id","class","aria-label","onClick"])}const K=T(p,[["render",F],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]]);p.__docgenInfo={displayName:"DtAvatar",description:"An avatar is a visual representation of a user or object.",tags:{see:[{description:"https://dialpad.design/components/avatar.html",title:"see"}]},exportName:"default",props:[{name:"id",description:"Id of the avatar content wrapper element",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"seed",description:`Pass in a seed to get the random color generation based on that string. For example if you pass in a
user ID as the string it will return the same randomly generated colors every time for that user.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"color",description:`Set the avatar background to a specific color. If undefined will randomize the color which can be deterministic
if the seed prop is set.`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"avatarClass",description:"Used to customize the avatar container",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"canvasClass",description:"Set classes on the avatar canvas. Wrapper around the core avatar image.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"iconClass",description:"Pass through classes. Used to customize the avatar icon",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"AVATAR_PRESENCE_STATES.NONE"}},{name:"presenceProps",description:"A set of props to be passed into the presence component.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"group",description:`Determines whether to show a group avatar.
Limit to 2 digits max, more than 99 will be rendered as “99+”.
if the number is 1 or less it would just show the regular avatar as if group had not been set.`,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"overlayIcon",description:"The icon that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayText",description:"The text that overlays the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlayClass",description:"Used to customize the avatar overlay",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"imageSrc",description:"Source of the image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"imageAlt",description:`Alt attribute of the image, by default
it'd be the full name`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconName",description:"Icon name to be displayed on the avatar",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"iconSize",description:"Icon size to be displayed on the avatar",tags:{},values:["100","200","300","400","500","600","700","800"],type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"fullName",description:"Full name used to extract initials and set alt attribute.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"clickable",description:`Makes the avatar focusable and clickable,
emits a click event when clicked.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Avatar click event",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/avatar/avatar.vue"]};export{m as A,K as D,O as a,g as b};
//# sourceMappingURL=avatar-1958acd5.js.map
