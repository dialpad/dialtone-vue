import{D as s}from"./general_row-72e74014.js";import{D as r}from"./emoji_text_wrapper-d79ea48c.js";import{D as l}from"./avatar-2a773abc.js";import{s as o}from"./utils-c7895956.js";import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";const u={name:"DtRecipeContactRow",components:{DtAvatar:l,DtRecipeGeneralRow:s,DtEmojiTextWrapper:r},inheritAttrs:!1,props:{avatarSrc:{type:String,default:""},avatarAlt:{type:String,default:""},avatarPresence:{type:String,default:null},avatarSeed:{type:String,default:null},presenceText:{type:String,default:""},name:{type:String,required:!0},userStatus:{type:String,default:""},muted:{type:Boolean,default:!1},unreadCount:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},noInitials:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1},hasCallButton:{type:Boolean,default:!0},callButtonTooltip:{type:String,default:""},unreadCountTooltip:{type:String,default:""}},emits:["click","call"],computed:{presenceColorClass(){switch(this.avatarPresence){case"active":return"d-fc-success";case"busy":return"d-fc-critical";case"away":return"d-fc-warning";default:return}},contactDescription(){return o([this.name,this.presenceText,this.userStatus])},iconName(){return this.noInitials?"user":null}}};var n=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",e._g(e._b({attrs:{"unread-count":e.unreadCount,description:e.contactDescription,"has-unreads":e.hasUnreads,selected:e.selected,"has-call-button":e.hasCallButton,muted:e.muted,"is-typing":e.isTyping,"call-button-tooltip":e.callButtonTooltip,"unread-count-tooltip":e.unreadCountTooltip},scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-avatar",{attrs:{"full-name":e.name,"image-src":e.avatarSrc,"image-alt":e.avatarAlt,"icon-name":e.iconName,"icon-size":"200",size:"sm",seed:e.avatarSeed,presence:e.avatarPresence}})]},proxy:!0},{key:"label",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__description",attrs:{"data-qa":"dt-leftbar-row-description",size:"200"}},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"dt-leftbar-row__status"},[e.presenceText?t("span",{class:["dt-leftbar-row__meta-context",e.presenceColorClass],attrs:{"data-qa":"dt-leftbar-row-presence-text"}},[e._v(" "+e._s(e.presenceText)+" ")]):e._e(),e.userStatus?t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__meta-custom",attrs:{size:"100","element-type":"span","data-qa":"dt-leftbar-row-user-status"}},[e._v(" "+e._s(e.userStatus)+" ")]):e._e()],1)]},proxy:!0}])},"dt-recipe-general-row",e.$attrs,!1),e.$listeners))},c=[];n._withStripped=!0;var a=i(u,n,c,!1,null,null,null,null);a.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue";const y=a.exports;a.exports.__docgenInfo={displayName:"DtRecipeContactRow",exportName:"default",description:"",tags:{},props:[{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarAlt",description:`Optional avatar image alt text.
If not provided it will use the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarPresence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.
defer validation to avatar component.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"presenceText",description:`Text describing the user's presence, such as "in a meeting"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",description:"Name of the contact",type:{name:"string"},required:!0},{name:"userStatus",description:"Status as set by the user.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noInitials",description:'Initials will never be shown. Instead it will show a "User" icon.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCallButton",description:"Whether the contact row should display a call button when hovered.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]};export{y as D};
//# sourceMappingURL=contact_row-1e94d70d.js.map
