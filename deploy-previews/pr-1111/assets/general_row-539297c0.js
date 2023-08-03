import{D as y}from"./badge-183c30c8.js";import{D as b}from"./icon-34725557.js";import{D as w}from"./button-9102a84a.js";import{D as C}from"./tooltip-569d0e95.js";import{D as T}from"./emoji_text_wrapper-d4949bfa.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";import{s as E}from"./storybook_utils-6f4fc6ad.js";const a={INBOX:"inbox",CONTACTS:"contacts",CHANNELS:"channels",THREADS:"threads",LOCKED_CHANNEL:"locked channel",CONTACT_CENTER:"contact center",QUICK_START:"quick start",COACHING_GROUP:"coaching group",COACHING_CENTER:"coaching center",DIALBOT:"dialbot",ASSIGNED:"assigned",DIGITAL:"digital"},N={[a.INBOX]:"inbox",[a.CONTACTS]:"contacts",[a.CHANNELS]:"hash",[a.THREADS]:"thread",[a.LOCKED_CHANNEL]:"lock",[a.QUICK_START]:"sparkle",[a.COACHING_GROUP]:"users",[a.COACHING_CENTER]:"external-link","locked channel unread":"lock-filled","channel unread":"hash-bold",[a.ASSIGNED]:"at-sign",[a.DIGITAL]:"message"},r={"magenta-200":"d-bgc-magenta-200","green-200":"d-bgc-green-200","gold-300":"d-bgc-gold-300","purple-600":"d-bgc-purple-600","magenta-300":"d-bgc-magenta-300","purple-300":"d-bgc-purple-300","green-500":"d-bgc-green-500","purple-100":"d-bgc-purple-100","magenta-400":"d-bgc-magenta-400","magenta-100":"d-bgc-magenta-100"},R="If type is contact center, color must be oneof the following:"+Object.keys(r).join(", "),S=["300","200"],A={};var m=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"d-svg d-svg--native d-svg__dialbot",attrs:{"aria-hidden":"true",focusable:"false","aria-label":"Dialbot",width:"358",height:"358",viewBox:"0 0 358 358",fill:"none"}},[t("circle",{attrs:{cx:"179",cy:"179",r:"179",fill:"url(#paint0_linear_4_44)"}}),t("path",{attrs:{d:"M179 268.5v-11.933V268.5Zm86.517 0v11.933h19.308l-8.635-17.27-10.673 5.337Zm-16.73-33.459-9.3-7.478-4.797 5.967 3.424 6.848 10.673-5.337ZM179 101.433c42.839 0 77.567 34.728 77.567 77.567h23.866c0-56.02-45.413-101.433-101.433-101.433v23.866ZM101.433 179c0-42.839 34.728-77.567 77.567-77.567V77.567C122.98 77.567 77.567 122.98 77.567 179h23.866ZM179 256.567c-42.839 0-77.567-34.728-77.567-77.567H77.567c0 56.02 45.413 101.433 101.433 101.433v-23.866Zm86.517 0H179v23.866h86.517v-23.866Zm-27.403-16.189 16.729 33.459 21.347-10.674-16.729-33.459-21.347 10.674ZM256.567 179c0 18.396-6.39 35.268-17.08 48.563l18.6 14.955c13.975-17.38 22.346-39.488 22.346-63.518h-23.866Z",fill:"white"}}),t("path",{attrs:{d:"M226.733 202.867c-6.527 5.701-13.942 10.11-22.243 13.226-8.302 3.116-16.781 4.674-25.437 4.674-8.727 0-17.241-1.558-25.543-4.674-8.301-3.116-15.716-7.525-22.243-13.226v-11.934c4.399 2.652 9.365 4.939 14.9 6.862a112.163 112.163 0 0 0 16.815 4.674c5.748 1.127 11.105 1.69 16.071 1.69 5.038 0 10.395-.563 16.071-1.69a112.209 112.209 0 0 0 16.816-4.674c5.534-1.923 10.465-4.21 14.793-6.862v11.934Z",fill:"white"}}),t("defs",[t("linearGradient",{attrs:{id:"paint0_linear_4_44",x1:"0",y1:"0",x2:"358",y2:"358",gradientUnits:"userSpaceOnUse"}},[t("stop",{attrs:{"stop-color":"#7C52FF"}}),t("stop",{attrs:{offset:"1","stop-color":"#F9008E"}})],1)],1)])},x=[];m._withStripped=!0;var s=l(A,m,x,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue";const I=s.exports;s.exports.__docgenInfo={displayName:"IconDialbot",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/node_modules/@dialpad/dialtone/lib/dist/vue/icons/IconDialbot.vue"]};const D={name:"DtRecipeLeftbarGeneralRowIcon",components:{DtIcon:b,IconDialbot:I},props:{type:{type:String,default:null},color:{type:String,default:null},iconSize:{type:String,default:"300"}},computed:{isIconType(){return![a.DIALBOT,a.CONTACT_CENTER].includes(this.type)},isContactCenterType(){return this.type===a.CONTACT_CENTER},isDialbotType(){return this.type===a.DIALBOT},getIconName(){return N[this.type]},contactCenterIconClasses(){return["dt-leftbar-row__icon-cc",r[this.color]]},dialbotClasses(){return["d-w24","d-h24","d-d-flex","d-ai-center","d-jc-center"]}}};var v=function(){var e=this,t=e._self._c;return e.isIconType?t("dt-icon",{attrs:{name:e.getIconName,size:e.iconSize}}):e.isContactCenterType?t("div",{class:e.contactCenterIconClasses}):e.isDialbotType?t("div",{class:e.dialbotClasses,attrs:{"data-qa":"general-row-dialbot"}},[t("icon-dialbot",{staticClass:"d-svg--size24"})],1):e._e()},O=[];v._withStripped=!0;var i=l(D,v,O,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue";const L=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeLeftbarGeneralRowIcon",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]};const k={name:"DtRecipeGeneralRow",components:{DtEmojiTextWrapper:T,DtBadge:y,DtIcon:b,DtButton:w,DtTooltip:C,DtRecipeLeftbarGeneralRowIcon:L},inheritAttrs:!1,props:{type:{type:String,default:"inbox",validator:n=>Object.values(a).includes(n)},ariaLabel:{type:String,default:""},description:{type:String,required:!0},color:{type:String,default:null,validator:n=>Object.keys(r).includes(n)},hasUnreads:{type:Boolean,default:!1},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:""},selected:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},activeVoiceChat:{type:Boolean,default:!1},dndText:{type:String,default:""},dndTextTooltip:{type:String,default:""},hasCallButton:{type:Boolean,default:!1},callButtonTooltip:{type:String,default:""},isTyping:{type:Boolean,default:!1},iconSize:{type:String,default:"300",validator:n=>S.includes(n)}},emits:["click","call"],data(){return{actionFocused:!1,labelWidth:"100%"}},computed:{leftbarGeneralRowClasses(){return["dt-leftbar-row",{"dt-leftbar-row--no-action":!this.hasCallButton,"dt-leftbar-row--has-unread":this.hasUnreads,"dt-leftbar-row--unread-count":this.showUnreadCount,"dt-leftbar-row--selected":this.selected,"dt-leftbar-row--muted":this.muted,"dt-leftbar-row--action-focused":this.actionFocused}]},getIcon(){switch(this.type){case a.CHANNELS:if(this.hasUnreads)return"channel unread";break;case a.LOCKED_CHANNEL:if(this.hasUnreads)return"locked channel unread";break}return this.type},getAriaLabel(){return this.ariaLabel?this.ariaLabel:E([this.description,this.unreadCountTooltip,this.dndTextTooltip])},hasActions(){return this.dndText||this.activeVoiceChat||this.showUnreadCount||this.hasCallButton},showUnreadCount(){return!!this.unreadCount&&this.hasUnreads}},watch:{$props:{immediate:!0,deep:!0,async handler(){this.validateProps(),await this.$nextTick(),this.adjustLabelWidth()}}},mounted(){this.resizeObserver=new ResizeObserver(this.adjustLabelWidth),this.resizeObserver.observe(this.$el),this.adjustLabelWidth()},beforeDestroy:function(){this.resizeObserver.disconnect()},methods:{validateProps(){this.type===a.CONTACT_CENTER&&!Object.keys(r).includes(this.color)&&console.error(R)},adjustLabelWidth(){var c,u,p,f,h,_;const n=((u=(c=this.$el)==null?void 0:c.querySelector(".dt-leftbar-row__primary"))==null?void 0:u.clientWidth)||0,e=((f=(p=this.$el)==null?void 0:p.querySelector(".dt-leftbar-row__omega"))==null?void 0:f.clientWidth)||0,t=((_=(h=this.$el)==null?void 0:h.querySelector(".dt-leftbar-row__alpha"))==null?void 0:_.clientWidth)||0,o=16;this.labelWidth=n-(e+t+o)+"px"}}};var g=function(){var e=this,t=e._self._c;return t("div",{class:e.leftbarGeneralRowClasses,attrs:{"data-qa":"dt-leftbar-row"}},[t("a",e._g(e._b({staticClass:"dt-leftbar-row__primary",attrs:{"data-qa":"data-qa"in e.$attrs?e.$attrs["data-qa"]:"dt-leftbar-row-link","aria-label":e.getAriaLabel,title:e.description,href:"href"in e.$attrs?e.$attrs.href:"javascript:void(0)"}},"a",e.$attrs,!1),e.$listeners),[t("div",{staticClass:"dt-leftbar-row__alpha"},[e.isTyping?t("div",{staticClass:"dt-leftbar-row__is-typing"},[t("span"),t("span"),t("span")]):e._t("left",function(){return[t("dt-recipe-leftbar-general-row-icon",{attrs:{type:e.getIcon,color:e.color,"icon-size":e.iconSize,"data-qa":"dt-leftbar-row-icon"}})]})],2),t("div",{staticClass:"dt-leftbar-row__label",style:`flex-basis: ${e.labelWidth}`},[e._t("label",function(){return[t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__description",attrs:{"data-qa":"dt-leftbar-row-description",size:"200"}},[e._v(" "+e._s(e.description)+" ")])]})],2)]),e.hasActions?t("div",{staticClass:"dt-leftbar-row__omega"},[e.dndText?t("dt-tooltip",{attrs:{placement:"top",message:e.dndTextTooltip},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("div",{ref:"dt-leftbar-row-dnd",staticClass:"dt-leftbar-row__dnd",attrs:{"data-qa":"dt-leftbar-row-dnd"}},[e._v(" "+e._s(e.dndText)+" ")])]},proxy:!0}],null,!1,490758222)}):e._e(),e.activeVoiceChat?t("div",{staticClass:"dt-leftbar-row__active-voice"},[t("dt-icon",{attrs:{size:"300",name:"activity"}})],1):e.showUnreadCount?t("dt-tooltip",{attrs:{message:e.unreadCountTooltip,placement:"top"},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("dt-badge",{staticClass:"dt-leftbar-row__unread-badge",attrs:{kind:"count",type:"bulletin","data-qa":"dt-leftbar-row-unread-badge"}},[e._v(" "+e._s(e.unreadCount)+" ")])]},proxy:!0}],null,!1,462525554)}):e._e(),e.hasCallButton?t("div",{staticClass:"dt-leftbar-row__action",attrs:{"data-qa":"dt-leftbar-row-action"}},[t("dt-tooltip",{attrs:{message:e.callButtonTooltip,placement:"top"},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("dt-button",{staticClass:"dt-leftbar-row__action-button",attrs:{"data-qa":"dt-leftbar-row-action-call-button",circle:!0,size:"xs",kind:"inverted","aria-label":e.callButtonTooltip},on:{focus:function(o){e.actionFocused=!0},blur:function(o){e.actionFocused=!1},click:function(o){return o.stopPropagation(),e.$emit("call",o)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"phone",size:"200"}})]},proxy:!0}],null,!1,990728611)})]},proxy:!0}],null,!1,4239858356)})],1):e._e()],1):e._e()])},B=[];g._withStripped=!0;var d=l(k,g,B,!1,null,"6efc49a2",null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue";const U=d.exports;d.exports.__docgenInfo={displayName:"DtRecipeGeneralRow",exportName:"default",description:"",tags:{},props:[{name:"type",description:`Determines the icon to show.
If type is contact center, the color prop must be provided and will determine the color of the icon`,type:{name:"string"},defaultValue:{func:!1,value:"'inbox'"}},{name:"ariaLabel",description:'Will be read out by a screen reader upon focus of this row. If not defined "description" will be read.',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:`Text displayed next to the icon. Required. Even if you are overriding this field using the label slot
you still must input this as it will be displayed as the "title" attribute for the row.`,type:{name:"string"},required:!0},{name:"color",description:"Determines the color of the contact center icon",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeVoiceChat",description:"Shows styling to represent an active voice chat. This will display over unreadCount.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dndText",description:`Acronym used to represent "Do not Disturb" state. If entered will display the entered text alongside
unreadCount.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dndTextTooltip",description:"Text shown in tooltip when you hover the dndText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hasCallButton",description:"Whether the row should have a call button. Usually only applicable to individual contact rows.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconSize",description:"Sets the size of the icon.",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"left"},{name:"label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]};export{U as D,a as L,S as a,r as b};
//# sourceMappingURL=general_row-539297c0.js.map
