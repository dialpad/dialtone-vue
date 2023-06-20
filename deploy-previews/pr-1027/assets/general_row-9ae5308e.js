import{D as L}from"./badge-fb649191.js";import{D as E}from"./icon-ee68f285.js";import{o,f as r,i as O,a as s,b as v,n as y,d as i,k as u,g as d,l as T,m as x,w as c,s as N,t as g,A as B}from"./vue.esm-bundler-e62bdd6b.js";import{D as V}from"./button-f0bff3c1.js";import{D as G}from"./tooltip-0cb6721b.js";import{D as z}from"./emoji_text_wrapper-48d055c7.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{e as F,s as U}from"./utils-701363a2.js";const e={INBOX:"inbox",CONTACTS:"contacts",CHANNELS:"channels",THREADS:"threads",LOCKED_CHANNEL:"locked channel",CONTACT_CENTER:"contact center",QUICK_START:"quick start",COACHING_GROUP:"coaching group",COACHING_CENTER:"coaching center",DIALBOT:"dialbot",ASSIGNED:"assigned",DIGITAL:"digital"},q={[e.INBOX]:"inbox",[e.CONTACTS]:"contacts",[e.CHANNELS]:"hash",[e.THREADS]:"thread",[e.LOCKED_CHANNEL]:"lock",[e.QUICK_START]:"sparkle",[e.COACHING_GROUP]:"users",[e.COACHING_CENTER]:"external-link","locked channel unread":"lock-filled","channel unread":"hash-bold",[e.ASSIGNED]:"at-sign",[e.DIGITAL]:"message"},f={"magenta-200":"d-bgc-magenta-200","green-200":"d-bgc-green-200","gold-300":"d-bgc-gold-300","purple-600":"d-bgc-purple-600","magenta-300":"d-bgc-magenta-300","purple-300":"d-bgc-purple-300","green-500":"d-bgc-green-500","purple-100":"d-bgc-purple-100","magenta-400":"d-bgc-magenta-400","magenta-100":"d-bgc-magenta-100"},H="If type is contact center, color must be oneof the following:"+Object.keys(f).join(", "),Z=["300","200"],A={},j={"aria-hidden":"true",focusable:"false","aria-label":"Dialbot",class:"d-svg d-svg--native d-svg__dialbot",width:"358",height:"358",viewBox:"0 0 358 358",fill:"none"},P=O('<circle cx="179" cy="179" r="179" fill="url(#paint0_linear_4_44)"></circle><path d="M179 268.5v-11.933V268.5Zm86.517 0v11.933h19.308l-8.635-17.27-10.673 5.337Zm-16.73-33.459-9.3-7.478-4.797 5.967 3.424 6.848 10.673-5.337ZM179 101.433c42.839 0 77.567 34.728 77.567 77.567h23.866c0-56.02-45.413-101.433-101.433-101.433v23.866ZM101.433 179c0-42.839 34.728-77.567 77.567-77.567V77.567C122.98 77.567 77.567 122.98 77.567 179h23.866ZM179 256.567c-42.839 0-77.567-34.728-77.567-77.567H77.567c0 56.02 45.413 101.433 101.433 101.433v-23.866Zm86.517 0H179v23.866h86.517v-23.866Zm-27.403-16.189 16.729 33.459 21.347-10.674-16.729-33.459-21.347 10.674ZM256.567 179c0 18.396-6.39 35.268-17.08 48.563l18.6 14.955c13.975-17.38 22.346-39.488 22.346-63.518h-23.866Z" fill="white"></path><path d="M226.733 202.867c-6.527 5.701-13.942 10.11-22.243 13.226-8.302 3.116-16.781 4.674-25.437 4.674-8.727 0-17.241-1.558-25.543-4.674-8.301-3.116-15.716-7.525-22.243-13.226v-11.934c4.399 2.652 9.365 4.939 14.9 6.862a112.163 112.163 0 0 0 16.815 4.674c5.748 1.127 11.105 1.69 16.071 1.69 5.038 0 10.395-.563 16.071-1.69a112.209 112.209 0 0 0 16.816-4.674c5.534-1.923 10.465-4.21 14.793-6.862v11.934Z" fill="white"></path><defs><linearGradient id="paint0_linear_4_44" x1="0" y1="0" x2="358" y2="358" gradientUnits="userSpaceOnUse"><stop stop-color="#7C52FF"></stop><stop offset="1" stop-color="#F9008E"></stop></linearGradient></defs>',4),M=[P];function W(t,l){return o(),r("svg",j,M)}const K=w(A,[["render",W],["__file","/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue"]]);A.__docgenInfo={displayName:"IconDialbot",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue"]};const R={name:"DtRecipeLeftbarGeneralRowIcon",components:{DtIcon:E,IconDialbot:K},props:{type:{type:String,default:null},color:{type:String,default:null},iconSize:{type:String,default:"300"}},computed:{isIconType(){return![e.DIALBOT,e.CONTACT_CENTER].includes(this.type)},isContactCenterType(){return this.type===e.CONTACT_CENTER},isDialbotType(){return this.type===e.DIALBOT},getIconName(){return q[this.type]},contactCenterIconClasses(){return["dt-leftbar-row__icon-cc",f[this.color]]},dialbotClasses(){return["d-w24","d-h24","d-d-flex","d-ai-center","d-jc-center"]}}};function Q(t,l,a,S,p,n){const _=s("dt-icon"),h=s("icon-dialbot");return n.isIconType?(o(),v(_,{key:0,name:n.getIconName,size:a.iconSize},null,8,["name","size"])):n.isContactCenterType?(o(),r("div",{key:1,class:y(n.contactCenterIconClasses)},null,2)):n.isDialbotType?(o(),r("div",{key:2,class:y(n.dialbotClasses),"data-qa":"general-row-dialbot"},[i(h,{class:"d-svg--size24"})],2)):u("v-if",!0)}const X=w(R,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]]);R.__docgenInfo={displayName:"DtRecipeLeftbarGeneralRowIcon",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]};const I={name:"DtRecipeGeneralRow",components:{DtEmojiTextWrapper:z,DtBadge:L,DtIcon:E,DtButton:V,DtTooltip:G,DtRecipeLeftbarGeneralRowIcon:X},inheritAttrs:!1,props:{type:{type:String,default:"inbox",validator:t=>Object.values(e).includes(t)},ariaLabel:{type:String,default:""},description:{type:String,required:!0},color:{type:String,default:null,validator:t=>Object.keys(f).includes(t)},hasUnreads:{type:Boolean,default:!1},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:""},selected:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},activeVoiceChat:{type:Boolean,default:!1},dndText:{type:String,default:""},dndTextTooltip:{type:String,default:""},hasCallButton:{type:Boolean,default:!1},callButtonTooltip:{type:String,default:""},isTyping:{type:Boolean,default:!1},iconSize:{type:String,default:"300",validator:t=>Z.includes(t)}},emits:["call"],data(){return{actionFocused:!1}},computed:{leftbarGeneralRowClasses(){return["dt-leftbar-row",{"dt-leftbar-row--no-action":!this.hasCallButton,"dt-leftbar-row--has-unread":this.hasUnreads,"dt-leftbar-row--selected":this.selected,"dt-leftbar-row--muted":this.muted,"dt-leftbar-row--action-focused":this.actionFocused}]},getIcon(){switch(this.type){case e.CHANNELS:if(this.hasUnreads)return"channel unread";break;case e.LOCKED_CHANNEL:if(this.hasUnreads)return"locked channel unread";break}return this.type},generalRowListeners(){return F(this.$attrs)},getAriaLabel(){return this.ariaLabel?this.ariaLabel:U([this.description,this.unreadCountTooltip,this.dndTextTooltip])},hasActions(){return this.dndText||this.activeVoiceChat||this.showUnreadCount||this.hasCallButton},showUnreadCount(){return!!this.unreadCount&&this.hasUnreads}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{validateProps(){this.type===e.CONTACT_CENTER&&!Object.keys(f).includes(this.color)&&console.error(H)}}},Y=["data-qa","aria-label","title","href"],J={class:"dt-leftbar-row__alpha"},$={key:0,class:"dt-leftbar-row__is-typing"},ee=d("span",null,null,-1),te=d("span",null,null,-1),ae=d("span",null,null,-1),ne=[ee,te,ae],oe={class:"dt-leftbar-row__label"},le={key:0,class:"dt-leftbar-row__omega"},ie={class:"dt-leftbar-row__dnd"},se={key:1,class:"dt-leftbar-row__active-voice"},re={key:3,class:"dt-leftbar-row__action","data-qa":"dt-leftbar-row-action"};function de(t,l,a,S,p,n){const _=s("dt-recipe-leftbar-general-row-icon"),h=s("dt-emoji-text-wrapper"),m=s("dt-tooltip"),C=s("dt-icon"),D=s("dt-badge"),k=s("dt-button");return o(),r("div",{class:y(n.leftbarGeneralRowClasses),"data-qa":"dt-leftbar-row"},[d("a",x({class:"dt-leftbar-row__primary","data-qa":"data-qa"in t.$attrs?t.$attrs["data-qa"]:"dt-leftbar-row-link","aria-label":n.getAriaLabel,title:a.description,href:"href"in t.$attrs?t.$attrs.href:"javascript:void(0)"},t.$attrs),[d("div",J,[a.isTyping?(o(),r("div",$,ne)):T(t.$slots,"left",{key:1},()=>[i(_,{type:n.getIcon,color:a.color,"icon-size":a.iconSize,"data-qa":"dt-leftbar-row-icon"},null,8,["type","color","icon-size"])])]),d("div",oe,[T(t.$slots,"label",{},()=>[i(h,{class:"dt-leftbar-row__description","data-qa":"dt-leftbar-row-description",size:"200"},{default:c(()=>[N(g(a.description),1)]),_:1})])])],16,Y),n.hasActions?(o(),r("div",le,[a.dndText?(o(),v(m,{key:0,placement:"top",message:a.dndTextTooltip},{anchor:c(()=>[d("div",ie,g(a.dndText),1)]),_:1},8,["message"])):u("v-if",!0),a.activeVoiceChat?(o(),r("div",se,[i(C,{size:"300",name:"activity"})])):n.showUnreadCount?(o(),v(m,{key:2,message:a.unreadCountTooltip,placement:"top"},{anchor:c(()=>[i(D,{kind:"count",type:"bulletin","data-qa":"dt-leftbar-row-unread-badge",class:"dt-leftbar-row__unread-badge"},{default:c(()=>[N(g(a.unreadCount),1)]),_:1})]),_:1},8,["message"])):u("v-if",!0),a.hasCallButton?(o(),r("div",re,[i(m,{message:a.callButtonTooltip,placement:"top"},{anchor:c(()=>[i(k,{class:"dt-leftbar-row__action-button","data-qa":"dt-leftbar-row-action-call-button",circle:!0,size:"xs",kind:"inverted","aria-label":a.callButtonTooltip,onFocus:l[0]||(l[0]=b=>p.actionFocused=!0),onBlur:l[1]||(l[1]=b=>p.actionFocused=!1),onClick:l[2]||(l[2]=B(b=>t.$emit("call",b),["stop"]))},{icon:c(()=>[i(C,{name:"phone",size:"200"})]),_:1},8,["aria-label"])]),_:1},8,["message"])])):u("v-if",!0)])):u("v-if",!0)],2)}const ge=w(I,[["render",de],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]]);I.__docgenInfo={displayName:"DtRecipeGeneralRow",exportName:"default",description:"",tags:{},props:[{name:"type",description:`Determines the icon to show.
If type is contact center, the color prop must be provided and will determine the color of the icon`,type:{name:"string"},defaultValue:{func:!1,value:"'inbox'"}},{name:"ariaLabel",description:'Will be read out by a screen reader upon focus of this row. If not defined "description" will be read.',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:`Text displayed next to the icon. Required. Even if you are overriding this field using the label slot
you still must input this as it will be displayed as the "title" attribute for the row.`,type:{name:"string"},required:!0},{name:"color",description:"Determines the color of the contact center icon",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeVoiceChat",description:"Shows styling to represent an active voice chat. This will display over unreadCount.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dndText",description:`Acronym used to represent "Do not Disturb" state. If entered will display the entered text alongside
unreadCount.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dndTextTooltip",description:"Text shown in tooltip when you hover the dndText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hasCallButton",description:"Whether the row should have a call button. Usually only applicable to individual contact rows.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconSize",description:"Sets the size of the icon.",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"left"},{name:"label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]};export{ge as D,e as L,Z as a,f as b};
//# sourceMappingURL=general_row-9ae5308e.js.map