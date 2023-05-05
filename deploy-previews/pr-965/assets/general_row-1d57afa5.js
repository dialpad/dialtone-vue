import{D as O}from"./badge-3fa28522.js";import{D as E}from"./icon-0f76b30a.js";import"./storybook_utils-35e0d11d.js";import{D as k}from"./button-fa62dafe.js";import{D as x}from"./tooltip-e285f790.js";import{D as B}from"./emoji_text_wrapper-a6160a46.js";import{o as l,e as d,_ as V,a as s,b as v,n as y,d as i,i as p,f as r,j as T,w as c,m as G,q as N,t as g,A as z}from"./vue.esm-bundler-2e3b72e0.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{e as F}from"./utils-9325de8f.js";const t={INBOX:"inbox",CONTACTS:"contacts",CHANNELS:"channels",THREADS:"threads",LOCKED_CHANNEL:"locked channel",CONTACT_CENTER:"contact center",QUICK_START:"quick start",COACHING_GROUP:"coaching group",COACHING_CENTER:"coaching center",DIALBOT:"dialbot",ASSIGNED:"assigned",DIGITAL:"digital"},q={[t.INBOX]:"inbox",[t.CONTACTS]:"contacts",[t.CHANNELS]:"hash",[t.THREADS]:"thread",[t.LOCKED_CHANNEL]:"lock",[t.QUICK_START]:"sparkle",[t.COACHING_GROUP]:"users",[t.COACHING_CENTER]:"external-link","locked channel unread":"lock-filled","channel unread":"hash-bold",[t.ASSIGNED]:"at-sign",[t.DIGITAL]:"message"},_={"magenta-200":"d-bgc-magenta-200","green-200":"d-bgc-green-200","gold-300":"d-bgc-gold-300","purple-600":"d-bgc-purple-600","magenta-300":"d-bgc-magenta-300","purple-300":"d-bgc-purple-300","green-500":"d-bgc-green-500","purple-100":"d-bgc-purple-100","magenta-400":"d-bgc-magenta-400","magenta-100":"d-bgc-magenta-100"},H="If type is contact center, color must be oneof the following:"+Object.keys(_).join(", "),U=["300","200"],R={},Z={"aria-hidden":"true",focusable:"false","aria-label":"Dialbot",class:"d-svg d-svg--native d-svg__dialbot",width:"358",height:"358",viewBox:"0 0 358 358",fill:"none"},j=V('<circle cx="179" cy="179" r="179" fill="url(#paint0_linear_4_44)"></circle><path d="M179 268.5v-11.933V268.5Zm86.517 0v11.933h19.308l-8.635-17.27-10.673 5.337Zm-16.73-33.459-9.3-7.478-4.797 5.967 3.424 6.848 10.673-5.337ZM179 101.433c42.839 0 77.567 34.728 77.567 77.567h23.866c0-56.02-45.413-101.433-101.433-101.433v23.866ZM101.433 179c0-42.839 34.728-77.567 77.567-77.567V77.567C122.98 77.567 77.567 122.98 77.567 179h23.866ZM179 256.567c-42.839 0-77.567-34.728-77.567-77.567H77.567c0 56.02 45.413 101.433 101.433 101.433v-23.866Zm86.517 0H179v23.866h86.517v-23.866Zm-27.403-16.189 16.729 33.459 21.347-10.674-16.729-33.459-21.347 10.674ZM256.567 179c0 18.396-6.39 35.268-17.08 48.563l18.6 14.955c13.975-17.38 22.346-39.488 22.346-63.518h-23.866Z" fill="white"></path><path d="M226.733 202.867c-6.527 5.701-13.942 10.11-22.243 13.226-8.302 3.116-16.781 4.674-25.437 4.674-8.727 0-17.241-1.558-25.543-4.674-8.301-3.116-15.716-7.525-22.243-13.226v-11.934c4.399 2.652 9.365 4.939 14.9 6.862a112.163 112.163 0 0 0 16.815 4.674c5.748 1.127 11.105 1.69 16.071 1.69 5.038 0 10.395-.563 16.071-1.69a112.209 112.209 0 0 0 16.816-4.674c5.534-1.923 10.465-4.21 14.793-6.862v11.934Z" fill="white"></path><defs><linearGradient id="paint0_linear_4_44" x1="0" y1="0" x2="358" y2="358" gradientUnits="userSpaceOnUse"><stop stop-color="#7C52FF"></stop><stop offset="1" stop-color="#F9008E"></stop></linearGradient></defs>',4),M=[j];function P(a,n){return l(),d("svg",Z,M)}const W=w(R,[["render",P],["__file","/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue"]]);R.__docgenInfo={displayName:"IconDialbot",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue"]};const A={name:"DtRecipeLeftbarGeneralRowIcon",components:{DtIcon:E,IconDialbot:W},props:{type:{type:String,default:null},color:{type:String,default:null},iconSize:{type:String,default:"300"}},computed:{isIconType(){return![t.DIALBOT,t.CONTACT_CENTER].includes(this.type)},isContactCenterType(){return this.type===t.CONTACT_CENTER},isDialbotType(){return this.type===t.DIALBOT},getIconName(){return q[this.type]},contactCenterIconClasses(){return["dt-leftbar-row__icon-cc",_[this.color]]},dialbotClasses(){return["d-w24","d-h24","d-d-flex","d-ai-center","d-jc-center"]}}};function K(a,n,e,S,u,o){const m=s("dt-icon"),h=s("icon-dialbot");return o.isIconType?(l(),v(m,{key:0,name:o.getIconName,size:e.iconSize},null,8,["name","size"])):o.isContactCenterType?(l(),d("div",{key:1,class:y(o.contactCenterIconClasses)},null,2)):o.isDialbotType?(l(),d("div",{key:2,class:y(o.dialbotClasses),"data-qa":"general-row-dialbot"},[i(h,{class:"d-svg--size24"})],2)):p("v-if",!0)}const Q=w(A,[["render",K],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]]);A.__docgenInfo={displayName:"DtRecipeLeftbarGeneralRowIcon",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]};const I={name:"DtRecipeGeneralRow",components:{DtEmojiTextWrapper:B,DtBadge:O,DtIcon:E,DtButton:k,DtTooltip:x,DtRecipeLeftbarGeneralRowIcon:Q},inheritAttrs:!1,props:{type:{type:String,default:"inbox",validator:a=>Object.values(t).includes(a)},ariaLabel:{type:String,default:""},description:{type:String,required:!0},color:{type:String,default:null,validator:a=>Object.keys(_).includes(a)},hasUnreads:{type:Boolean,default:!1},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:""},selected:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},activeVoiceChat:{type:Boolean,default:!1},dndText:{type:String,default:""},dndTextTooltip:{type:String,default:""},hasCallButton:{type:Boolean,default:!1},callButtonTooltip:{type:String,default:""},isTyping:{type:Boolean,default:!1},iconSize:{type:String,default:"300",validator:a=>U.includes(a)}},emits:["call"],data(){return{actionFocused:!1}},computed:{leftbarGeneralRowClasses(){return["dt-leftbar-row",{"dt-leftbar-row--no-action":!this.hasCallButton,"dt-leftbar-row--has-unread":this.hasUnreads,"dt-leftbar-row--selected":this.selected,"dt-leftbar-row--muted":this.muted,"dt-leftbar-row--action-focused":this.actionFocused}]},getIcon(){switch(this.type){case t.CHANNELS:if(this.hasUnreads)return"channel unread";break;case t.LOCKED_CHANNEL:if(this.hasUnreads)return"locked channel unread";break}return this.type},generalRowListeners(){return F(this.$attrs)},getAriaLabel(){return this.ariaLabel?this.ariaLabel:`${this.description} ${this.unreadCountTooltip} ${this.dndTextTooltip}`}},watch:{$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{validateProps(){this.type===t.CONTACT_CENTER&&!Object.keys(_).includes(this.color)&&console.error(H)}}},X=["data-qa","aria-label","title"],Y={class:"dt-leftbar-row__alpha"},J={key:0,class:"dt-leftbar-row__is-typing"},$=r("span",null,null,-1),ee=r("span",null,null,-1),te=r("span",null,null,-1),ae=[$,ee,te],ne={class:"dt-leftbar-row__label"},oe={class:"dt-leftbar-row__omega"},le={class:"dt-leftbar-row__dnd"},ie={key:1,class:"dt-leftbar-row__active-voice"},se={key:0,class:"dt-leftbar-row__action","data-qa":"dt-leftbar-row-action"};function re(a,n,e,S,u,o){const m=s("dt-recipe-leftbar-general-row-icon"),h=s("dt-emoji-text-wrapper"),b=s("dt-tooltip"),C=s("dt-icon"),D=s("dt-badge"),L=s("dt-button");return l(),d("div",{class:y(o.leftbarGeneralRowClasses),"data-qa":"dt-leftbar-row"},[r("a",G({class:"dt-leftbar-row__primary","data-qa":"data-qa"in a.$attrs?a.$attrs["data-qa"]:"dt-leftbar-row-link","aria-label":o.getAriaLabel,title:e.description},a.$attrs),[r("div",Y,[e.isTyping?(l(),d("div",J,ae)):T(a.$slots,"left",{key:1},()=>[i(m,{type:o.getIcon,color:e.color,"icon-size":e.iconSize,"data-qa":"dt-leftbar-row-icon"},null,8,["type","color","icon-size"])])]),r("div",ne,[T(a.$slots,"label",{},()=>[i(h,{class:"dt-leftbar-row__description","data-qa":"dt-leftbar-row-description",size:"200"},{default:c(()=>[N(g(e.description),1)]),_:1})])]),r("div",oe,[e.dndText?(l(),v(b,{key:0,placement:"top",message:e.dndTextTooltip},{anchor:c(()=>[r("div",le,g(e.dndText),1)]),_:1},8,["message"])):p("v-if",!0),e.activeVoiceChat?(l(),d("div",ie,[i(C,{size:"300",name:"activity"})])):e.unreadCount&&e.hasUnreads?(l(),v(b,{key:2,message:e.unreadCountTooltip,placement:"top"},{anchor:c(()=>[i(D,{kind:"count",type:"bulletin","data-qa":"dt-leftbar-row-unread-badge"},{default:c(()=>[N(g(e.unreadCount),1)]),_:1})]),_:1},8,["message"])):p("v-if",!0)])],16,X),e.hasCallButton?(l(),d("div",se,[i(b,{message:e.callButtonTooltip,placement:"top"},{anchor:c(()=>[i(L,{class:"dt-leftbar-row__action-button","data-qa":"dt-leftbar-row-action-call-button",circle:"",size:"xs",kind:"inverted","aria-label":e.callButtonTooltip,onFocus:n[0]||(n[0]=f=>u.actionFocused=!0),onBlur:n[1]||(n[1]=f=>u.actionFocused=!1),onMouseleave:n[2]||(n[2]=f=>u.actionFocused=!1),onClick:n[3]||(n[3]=z(f=>a.$emit("call",f),["stop"]))},{icon:c(()=>[i(C,{name:"phone",size:"200"})]),_:1},8,["aria-label"])]),_:1},8,["message"])])):p("v-if",!0)],2)}const ge=w(I,[["render",re],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]]);I.__docgenInfo={displayName:"DtRecipeGeneralRow",exportName:"default",description:"",tags:{},props:[{name:"type",description:`Determines the icon to show.
If type is contact center, the color prop must be provided and will determine the color of the icon`,type:{name:"string"},defaultValue:{func:!1,value:"'inbox'"}},{name:"ariaLabel",description:'Will be read out by a screen reader upon focus of this row. If not defined "description" will be read.',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:`Text displayed next to the icon. Required. Even if you are overriding this field using the label slot
you still must input this as it will be displayed as the "title" attribute for the row.`,type:{name:"string"},required:!0},{name:"color",description:"Determines the color of the contact center icon",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeVoiceChat",description:"Shows styling to represent an active voice chat. This will display over unreadCount.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dndText",description:`Acronym used to represent "Do not Disturb" state. If entered will display the entered text alongside
unreadCount.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dndTextTooltip",description:"Text shown in tooltip when you hover the dndText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hasCallButton",description:"Whether the row should have a call button. Usually only applicable to individual contact rows.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconSize",description:"Sets the size of the icon.",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"left"},{name:"label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]};export{ge as D,t as L,U as a,_ as b};
//# sourceMappingURL=general_row-1d57afa5.js.map
