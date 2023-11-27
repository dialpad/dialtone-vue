import{D as g}from"./badge-JudhtHjL.js";import{D as h}from"./icon-SfO3AFzV.js";import{D as y}from"./button-ux2tnS3y.js";import{D as v}from"./tooltip-SkyY47iK.js";import{D as C}from"./emoji_text_wrapper-zG6v25Af.js";import{n as b}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{s as w}from"./utils-pRacJSLF.js";const a={INBOX:"inbox",CONTACTS:"contacts",CHANNELS:"channels",THREADS:"threads",LOCKED_CHANNEL:"locked channel",CONTACT_CENTER:"contact center",QUICK_START:"quick start",COACHING_GROUP:"coaching group",COACHING_CENTER:"coaching center",DIALBOT:"dialbot",ASSIGNED:"assigned",DIGITAL:"digital"},T={[a.INBOX]:"inbox",[a.CONTACTS]:"contacts",[a.CHANNELS]:"hash",[a.THREADS]:"thread",[a.LOCKED_CHANNEL]:"lock",[a.QUICK_START]:"sparkle",[a.COACHING_GROUP]:"users",[a.COACHING_CENTER]:"external-link","locked channel unread":"lock-filled","channel unread":"hash-bold",[a.ASSIGNED]:"at-sign",[a.DIGITAL]:"message"},o={"magenta-200":"d-bgc-magenta-200","green-200":"d-bgc-green-200","gold-300":"d-bgc-gold-300","purple-600":"d-bgc-purple-600","magenta-300":"d-bgc-magenta-300","purple-300":"d-bgc-purple-300","green-500":"d-bgc-green-500","purple-100":"d-bgc-purple-100","magenta-400":"d-bgc-magenta-400","magenta-100":"d-bgc-magenta-100","black-300":"d-bgc-black-300"},E="If type is contact center, color must be oneof the following:"+Object.keys(o).join(", "),N=["300","200"],R={name:"DtRecipeLeftbarGeneralRowIcon",components:{DtIcon:h},props:{type:{type:String,default:null},color:{type:String,default:null},iconSize:{type:String,default:"300"}},computed:{isIconType(){return![a.DIALBOT,a.CONTACT_CENTER].includes(this.type)},isContactCenterType(){return this.type===a.CONTACT_CENTER},isDialbotType(){return this.type===a.DIALBOT},getIconName(){return T[this.type]},contactCenterIconClasses(){return["dt-leftbar-row__icon-cc",o[this.color]]},dialbotClasses(){return["d-d-flex","d-ai-center","d-jc-center"]}}};var _=function(){var e=this,t=e._self._c;return e.isIconType?t("dt-icon",{attrs:{name:e.getIconName,size:e.iconSize}}):e.isContactCenterType?t("div",{class:e.contactCenterIconClasses}):e.isDialbotType?t("div",{class:e.dialbotClasses,attrs:{"data-qa":"general-row-dialbot"}},[t("dt-icon",{attrs:{name:"dialbot",size:"500"}})],1):e._e()},S=[];_._withStripped=!0;var l=b(R,_,S,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue";const A=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeLeftbarGeneralRowIcon",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"iconSize",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/leftbar_general_row_icon.vue"]};const I={name:"DtRecipeGeneralRow",components:{DtEmojiTextWrapper:C,DtBadge:g,DtIcon:h,DtButton:y,DtTooltip:v,DtRecipeLeftbarGeneralRowIcon:A},inheritAttrs:!1,props:{type:{type:String,default:"inbox",validator:n=>Object.values(a).includes(n)},ariaLabel:{type:String,default:""},description:{type:String,required:!0},color:{type:String,default:null,validator:n=>Object.keys(o).includes(n)},hasUnreads:{type:Boolean,default:!1},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:""},selected:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},activeVoiceChat:{type:Boolean,default:!1},dndText:{type:String,default:""},dndTextTooltip:{type:String,default:""},hasCallButton:{type:Boolean,default:!1},callButtonTooltip:{type:String,default:""},isTyping:{type:Boolean,default:!1},iconSize:{type:String,default:"300",validator:n=>N.includes(n)}},emits:["click","call"],data(){return{actionFocused:!1,labelWidth:"100%"}},computed:{leftbarGeneralRowClasses(){return["dt-leftbar-row",{"dt-leftbar-row--no-action":!this.hasCallButton,"dt-leftbar-row--has-unread":this.hasUnreads,"dt-leftbar-row--unread-count":this.showUnreadCount,"dt-leftbar-row--selected":this.selected,"dt-leftbar-row--muted":this.muted,"dt-leftbar-row--action-focused":this.actionFocused}]},getIcon(){switch(this.type){case a.CHANNELS:if(this.hasUnreads)return"channel unread";break;case a.LOCKED_CHANNEL:if(this.hasUnreads)return"locked channel unread";break}return this.type},getAriaLabel(){return this.ariaLabel?this.ariaLabel:w([this.description,this.unreadCountTooltip,this.dndTextTooltip])},hasActions(){return this.dndText||this.activeVoiceChat||this.showUnreadCount||this.hasCallButton},showUnreadCount(){return!!this.unreadCount&&this.hasUnreads}},watch:{$props:{immediate:!0,deep:!0,async handler(){this.validateProps(),await this.$nextTick(),this.adjustLabelWidth()}}},mounted(){this.resizeObserver=new ResizeObserver(this.adjustLabelWidth),this.resizeObserver.observe(this.$el),this.adjustLabelWidth()},beforeDestroy:function(){this.resizeObserver.disconnect()},methods:{validateProps(){this.type===a.CONTACT_CENTER&&!Object.keys(o).includes(this.color)&&console.error(E)},adjustLabelWidth(){var i,d,c,u,p,f;const n=((d=(i=this.$el)==null?void 0:i.querySelector(".dt-leftbar-row__primary"))==null?void 0:d.clientWidth)||0,e=((u=(c=this.$el)==null?void 0:c.querySelector(".dt-leftbar-row__omega"))==null?void 0:u.clientWidth)||0,t=((f=(p=this.$el)==null?void 0:p.querySelector(".dt-leftbar-row__alpha"))==null?void 0:f.clientWidth)||0,r=16;this.labelWidth=n-(e+t+r)+"px"}}};var m=function(){var e=this,t=e._self._c;return t("div",{class:e.leftbarGeneralRowClasses,attrs:{"data-qa":"dt-leftbar-row"}},[t("a",e._g(e._b({staticClass:"dt-leftbar-row__primary",attrs:{"data-qa":"data-qa"in e.$attrs?e.$attrs["data-qa"]:"dt-leftbar-row-link","aria-label":e.getAriaLabel,title:e.description,href:"href"in e.$attrs?e.$attrs.href:"javascript:void(0)"}},"a",e.$attrs,!1),e.$listeners),[t("div",{staticClass:"dt-leftbar-row__alpha"},[e.isTyping?t("div",{staticClass:"dt-leftbar-row__is-typing"},[t("span"),t("span"),t("span")]):e._t("left",function(){return[t("dt-recipe-leftbar-general-row-icon",{attrs:{type:e.getIcon,color:e.color,"icon-size":e.iconSize,"data-qa":"dt-leftbar-row-icon"}})]})],2),t("div",{staticClass:"dt-leftbar-row__label",style:`flex-basis: ${e.labelWidth}`},[e._t("label",function(){return[t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__description",attrs:{"data-qa":"dt-leftbar-row-description",size:"200"}},[e._v(" "+e._s(e.description)+" ")])]})],2)]),e.hasActions?t("div",{staticClass:"dt-leftbar-row__omega"},[e.dndText?t("dt-tooltip",{attrs:{placement:"top",message:e.dndTextTooltip},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("div",{ref:"dt-leftbar-row-dnd",staticClass:"dt-leftbar-row__dnd",attrs:{"data-qa":"dt-leftbar-row-dnd"}},[e._v(" "+e._s(e.dndText)+" ")])]},proxy:!0}],null,!1,490758222)}):e._e(),e.activeVoiceChat?t("div",{staticClass:"dt-leftbar-row__active-voice"},[t("dt-icon",{attrs:{size:"300",name:"waveform"}})],1):e.showUnreadCount?t("dt-tooltip",{attrs:{message:e.unreadCountTooltip,placement:"top"},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("dt-badge",{staticClass:"dt-leftbar-row__unread-badge",attrs:{kind:"count",type:"bulletin","data-qa":"dt-leftbar-row-unread-badge"}},[e._v(" "+e._s(e.unreadCount)+" ")])]},proxy:!0}],null,!1,462525554)}):e._e(),e.hasCallButton?t("div",{staticClass:"dt-leftbar-row__action",attrs:{"data-qa":"dt-leftbar-row-action"}},[t("dt-tooltip",{attrs:{message:e.callButtonTooltip,placement:"top"},scopedSlots:e._u([{key:"anchor",fn:function(){return[t("dt-button",{staticClass:"dt-leftbar-row__action-button",attrs:{"data-qa":"dt-leftbar-row-action-call-button",circle:!0,size:"xs",kind:"inverted","aria-label":e.callButtonTooltip},on:{focus:function(r){e.actionFocused=!0},blur:function(r){e.actionFocused=!1},click:function(r){return r.stopPropagation(),e.$emit("call",r)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("dt-icon",{attrs:{name:"phone",size:"200"}})]},proxy:!0}],null,!1,990728611)})]},proxy:!0}],null,!1,4239858356)})],1):e._e()],1):e._e()])},O=[];m._withStripped=!0;var s=b(I,m,O,!1,null,"6efc49a2",null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue";const W=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeGeneralRow",exportName:"default",description:"",tags:{},props:[{name:"type",description:`Determines the icon to show.
If type is contact center, the color prop must be provided and will determine the color of the icon`,type:{name:"string"},defaultValue:{func:!1,value:"'inbox'"}},{name:"ariaLabel",description:'Will be read out by a screen reader upon focus of this row. If not defined "description" will be read.',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:`Text displayed next to the icon. Required. Even if you are overriding this field using the label slot
you still must input this as it will be displayed as the "title" attribute for the row.`,type:{name:"string"},required:!0},{name:"color",description:"Determines the color of the contact center icon",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeVoiceChat",description:"Shows styling to represent an active voice chat. This will display over unreadCount.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dndText",description:`Acronym used to represent "Do not Disturb" state. If entered will display the entered text alongside
unreadCount.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dndTextTooltip",description:"Text shown in tooltip when you hover the dndText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hasCallButton",description:"Whether the row should have a call button. Usually only applicable to individual contact rows.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconSize",description:"Sets the size of the icon.",type:{name:"string"},defaultValue:{func:!1,value:"'300'"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"left"},{name:"label"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/general_row/general_row.vue"]};export{W as D,a as L,N as a,o as b};
//# sourceMappingURL=general_row-S6Kj5JqY.js.map
