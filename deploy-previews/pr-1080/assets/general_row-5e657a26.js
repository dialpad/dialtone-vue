import{D as k}from"./badge-8197e136.js";import{D as S}from"./icon-c1e0a491.js";import{o,f as s,i as x,a as i,b as w,n as C,d as r,k as m,g as c,l as E,y as B,p as V,D as G,w as h,u as R,m as y,B as z,N as q,O as U}from"./vue.esm-bundler-acd771f7.js";import{D as W}from"./button-c3fe4851.js";import{D as F}from"./tooltip-3d2b96d0.js";import{D as H}from"./emoji_text_wrapper-01ecc15c.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{e as Z,s as j}from"./utils-22e648ba.js";const a={INBOX:"inbox",CONTACTS:"contacts",CHANNELS:"channels",THREADS:"threads",LOCKED_CHANNEL:"locked channel",CONTACT_CENTER:"contact center",QUICK_START:"quick start",COACHING_GROUP:"coaching group",COACHING_CENTER:"coaching center",DIALBOT:"dialbot",ASSIGNED:"assigned",DIGITAL:"digital"},P={[a.INBOX]:"inbox",[a.CONTACTS]:"contacts",[a.CHANNELS]:"hash",[a.THREADS]:"thread",[a.LOCKED_CHANNEL]:"lock",[a.QUICK_START]:"sparkle",[a.COACHING_GROUP]:"users",[a.COACHING_CENTER]:"external-link","locked channel unread":"lock-filled","channel unread":"hash-bold",[a.ASSIGNED]:"at-sign",[a.DIGITAL]:"message"},b={"magenta-200":"d-bgc-magenta-200","green-200":"d-bgc-green-200","gold-300":"d-bgc-gold-300","purple-600":"d-bgc-purple-600","magenta-300":"d-bgc-magenta-300","purple-300":"d-bgc-purple-300","green-500":"d-bgc-green-500","purple-100":"d-bgc-purple-100","magenta-400":"d-bgc-magenta-400","magenta-100":"d-bgc-magenta-100"},M="If type is contact center, color must be oneof the following:"+Object.keys(b).join(", "),K=["300","200"],I={},Q={"aria-hidden":"true",focusable:"false","aria-label":"Dialbot",class:"d-svg d-svg--native d-svg__dialbot",width:"358",height:"358",viewBox:"0 0 358 358",fill:"none"},X=x('<circle cx="179" cy="179" r="179" fill="url(#paint0_linear_4_44)"></circle><path d="M179 268.5v-11.933V268.5Zm86.517 0v11.933h19.308l-8.635-17.27-10.673 5.337Zm-16.73-33.459-9.3-7.478-4.797 5.967 3.424 6.848 10.673-5.337ZM179 101.433c42.839 0 77.567 34.728 77.567 77.567h23.866c0-56.02-45.413-101.433-101.433-101.433v23.866ZM101.433 179c0-42.839 34.728-77.567 77.567-77.567V77.567C122.98 77.567 77.567 122.98 77.567 179h23.866ZM179 256.567c-42.839 0-77.567-34.728-77.567-77.567H77.567c0 56.02 45.413 101.433 101.433 101.433v-23.866Zm86.517 0H179v23.866h86.517v-23.866Zm-27.403-16.189 16.729 33.459 21.347-10.674-16.729-33.459-21.347 10.674ZM256.567 179c0 18.396-6.39 35.268-17.08 48.563l18.6 14.955c13.975-17.38 22.346-39.488 22.346-63.518h-23.866Z" fill="white"></path><path d="M226.733 202.867c-6.527 5.701-13.942 10.11-22.243 13.226-8.302 3.116-16.781 4.674-25.437 4.674-8.727 0-17.241-1.558-25.543-4.674-8.301-3.116-15.716-7.525-22.243-13.226v-11.934c4.399 2.652 9.365 4.939 14.9 6.862a112.163 112.163 0 0 0 16.815 4.674c5.748 1.127 11.105 1.69 16.071 1.69 5.038 0 10.395-.563 16.071-1.69a112.209 112.209 0 0 0 16.816-4.674c5.534-1.923 10.465-4.21 14.793-6.862v11.934Z" fill="white"></path><defs><linearGradient id="paint0_linear_4_44" x1="0" y1="0" x2="358" y2="358" gradientUnits="userSpaceOnUse"><stop stop-color="#7C52FF"></stop><stop offset="1" stop-color="#F9008E"></stop></linearGradient></defs>',4),$=[X];function Y(e,l){return o(),s("svg",Q,$)}const J=T(I,[["render",Y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue"]]);I.__docgenInfo={displayName:"IconDialbot",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue"]};const A={name:"DtRecipeLeftbarGeneralRowIcon",components:{DtIcon:S,IconDialbot:J},props:{type:{type:String,default:null},color:{type:String,default:null},iconSize:{type:String,default:"300"}},computed:{isIconType(){return![a.DIALBOT,a.CONTACT_CENTER].includes(this.type)},isContactCenterType(){return this.type===a.CONTACT_CENTER},isDialbotType(){return this.type===a.DIALBOT},getIconName(){return P[this.type]},contactCenterIconClasses(){return["dt-leftbar-row__icon-cc",b[this.color]]},dialbotClasses(){return["d-w24","d-h24","d-d-flex","d-ai-center","d-jc-center"]}}};function ee(e,l,t,g,d,n){const u=i("dt-icon"),f=i("icon-dialbot");return n.isIconType?(o(),w(u,{key:0,name:n.getIconName,size:t.iconSize},null,8,["name","size"])):n.isContactCenterType?(o(),s("div",{key:1,class:C(n.contactCenterIconClasses)},null,2)):n.isDialbotType?(o(),s("div",{key:2,class:C(n.dialbotClasses),"data-qa":"general-row-dialbot"},[r(f,{class:"d-svg--size24"})],2)):m("v-if",!0)}const te=T(A,[["render",ee],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]]);A.__docgenInfo={displayName:"DtRecipeLeftbarGeneralRowIcon",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]};const D={name:"DtRecipeGeneralRow",components:{DtEmojiTextWrapper:H,DtBadge:k,DtIcon:S,DtButton:W,DtTooltip:F,DtRecipeLeftbarGeneralRowIcon:te},inheritAttrs:!1,props:{type:{type:String,default:"inbox",validator:e=>Object.values(a).includes(e)},ariaLabel:{type:String,default:""},description:{type:String,required:!0},color:{type:String,default:null,validator:e=>Object.keys(b).includes(e)},hasUnreads:{type:Boolean,default:!1},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:""},selected:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},activeVoiceChat:{type:Boolean,default:!1},dndText:{type:String,default:""},dndTextTooltip:{type:String,default:""},hasCallButton:{type:Boolean,default:!1},callButtonTooltip:{type:String,default:""},isTyping:{type:Boolean,default:!1},iconSize:{type:String,default:"300",validator:e=>K.includes(e)}},emits:["call"],data(){return{actionFocused:!1,labelWidth:"100%"}},computed:{leftbarGeneralRowClasses(){return["dt-leftbar-row",{"dt-leftbar-row--no-action":!this.hasCallButton,"dt-leftbar-row--has-unread":this.hasUnreads,"dt-leftbar-row--selected":this.selected,"dt-leftbar-row--muted":this.muted,"dt-leftbar-row--action-focused":this.actionFocused}]},getIcon(){switch(this.type){case a.CHANNELS:if(this.hasUnreads)return"channel unread";break;case a.LOCKED_CHANNEL:if(this.hasUnreads)return"locked channel unread";break}return this.type},generalRowListeners(){return Z(this.$attrs)},getAriaLabel(){return this.ariaLabel?this.ariaLabel:j([this.description,this.unreadCountTooltip,this.dndTextTooltip])},hasActions(){return this.dndText||this.activeVoiceChat||this.showUnreadCount||this.hasCallButton},showUnreadCount(){return!!this.unreadCount&&this.hasUnreads}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},mounted(){this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.$el)},beforeUnmount:function(){this.resizeObserver.disconnect()},methods:{validateProps(){this.type===a.CONTACT_CENTER&&!Object.keys(b).includes(this.color)&&console.error(M)},async handleResize(){var d,n,u,f,p,_;const e=((n=(d=this.$el)==null?void 0:d.querySelector(".dt-leftbar-row__primary"))==null?void 0:n.clientWidth)||0,l=((f=(u=this.$el)==null?void 0:u.querySelector(".dt-leftbar-row__omega"))==null?void 0:f.clientWidth)||0,t=((_=(p=this.$el)==null?void 0:p.querySelector(".dt-leftbar-row__alpha"))==null?void 0:_.clientWidth)||0,g=16;this.labelWidth=e-(l+t+g)+"px"}}},N=e=>(q("data-v-6efc49a2"),e=e(),U(),e),ae=["data-qa","aria-label","title","href"],ne={class:"dt-leftbar-row__alpha"},oe={key:0,class:"dt-leftbar-row__is-typing"},le=N(()=>c("span",null,null,-1)),re=N(()=>c("span",null,null,-1)),ie=N(()=>c("span",null,null,-1)),se=[le,re,ie],de={key:0,class:"dt-leftbar-row__omega"},ce={key:1,class:"dt-leftbar-row__active-voice"},ue={key:3,class:"dt-leftbar-row__action","data-qa":"dt-leftbar-row-action"};function fe(e,l,t,g,d,n){const u=i("dt-recipe-leftbar-general-row-icon"),f=i("dt-emoji-text-wrapper"),p=i("dt-tooltip"),_=i("dt-icon"),O=i("dt-badge"),L=i("dt-button");return o(),s("div",{class:C(n.leftbarGeneralRowClasses),"data-qa":"dt-leftbar-row"},[c("a",V({class:"dt-leftbar-row__primary","data-qa":"data-qa"in e.$attrs?e.$attrs["data-qa"]:"dt-leftbar-row-link","aria-label":n.getAriaLabel,title:t.description,href:"href"in e.$attrs?e.$attrs.href:"javascript:void(0)"},e.$attrs,G(n.generalRowListeners,!0)),[c("div",ne,[t.isTyping?(o(),s("div",oe,se)):E(e.$slots,"left",{key:1},()=>[r(u,{type:n.getIcon,color:t.color,"icon-size":t.iconSize,"data-qa":"dt-leftbar-row-icon"},null,8,["type","color","icon-size"])],!0)]),c("div",{class:"dt-leftbar-row__label",style:B(`flex-basis: ${d.labelWidth}`)},[E(e.$slots,"label",{},()=>[r(f,{class:"dt-leftbar-row__description","data-qa":"dt-leftbar-row-description",size:"200"},{default:h(()=>[R(y(t.description),1)]),_:1})],!0)],4)],16,ae),n.hasActions?(o(),s("div",de,[t.dndText?(o(),w(p,{key:0,placement:"top",message:t.dndTextTooltip},{anchor:h(()=>[c("div",{ref:"dt-leftbar-row-dnd",class:"dt-leftbar-row__dnd","data-qa":"dt-leftbar-row-dnd"},y(t.dndText),513)]),_:1},8,["message"])):m("v-if",!0),t.activeVoiceChat?(o(),s("div",ce,[r(_,{size:"300",name:"activity"})])):n.showUnreadCount?(o(),w(p,{key:2,message:t.unreadCountTooltip,placement:"top"},{anchor:h(()=>[r(O,{kind:"count",type:"bulletin","data-qa":"dt-leftbar-row-unread-badge",class:"dt-leftbar-row__unread-badge"},{default:h(()=>[R(y(t.unreadCount),1)]),_:1})]),_:1},8,["message"])):m("v-if",!0),t.hasCallButton?(o(),s("div",ue,[r(p,{message:t.callButtonTooltip,placement:"top"},{anchor:h(()=>[r(L,{class:"dt-leftbar-row__action-button","data-qa":"dt-leftbar-row-action-call-button",circle:!0,size:"xs",kind:"inverted","aria-label":t.callButtonTooltip,onFocus:l[0]||(l[0]=v=>d.actionFocused=!0),onBlur:l[1]||(l[1]=v=>d.actionFocused=!1),onClick:l[2]||(l[2]=z(v=>e.$emit("call",v),["stop"]))},{icon:h(()=>[r(_,{name:"phone",size:"200"})]),_:1},8,["aria-label"])]),_:1},8,["message"])])):m("v-if",!0)])):m("v-if",!0)],2)}const we=T(D,[["render",fe],["__scopeId","data-v-6efc49a2"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]]);D.__docgenInfo={displayName:"DtRecipeGeneralRow",exportName:"default",description:"",tags:{},props:[{name:"type",description:`Determines the icon to show.
If type is contact center, the color prop must be provided and will determine the color of the icon`,type:{name:"string"},defaultValue:{func:!1,value:"'inbox'"}},{name:"ariaLabel",description:'Will be read out by a screen reader upon focus of this row. If not defined "description" will be read.',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:`Text displayed next to the icon. Required. Even if you are overriding this field using the label slot
you still must input this as it will be displayed as the "title" attribute for the row.`,type:{name:"string"},required:!0},{name:"color",description:"Determines the color of the contact center icon",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeVoiceChat",description:"Shows styling to represent an active voice chat. This will display over unreadCount.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dndText",description:`Acronym used to represent "Do not Disturb" state. If entered will display the entered text alongside
unreadCount.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dndTextTooltip",description:"Text shown in tooltip when you hover the dndText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hasCallButton",description:"Whether the row should have a call button. Usually only applicable to individual contact rows.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconSize",description:"Sets the size of the icon.",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"left"},{name:"label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]};export{we as D,a as L,K as a,b};
//# sourceMappingURL=general_row-5e657a26.js.map
