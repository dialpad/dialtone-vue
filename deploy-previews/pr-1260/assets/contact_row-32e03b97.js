import{D as y}from"./general_row-ed42e596.js";import{D as w}from"./emoji_text_wrapper-79a3395d.js";import{D as g}from"./avatar-315b52f9.js";import{e as _,s as b}from"./utils-3a75643c.js";import{u as n,b as u,w as a,m as S,x as C,o as s,y as c,z as d,A as l,e as T,p as x,k as V,f}from"./vue.esm-bundler-a1916ad5.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const m={name:"DtRecipeContactRow",components:{DtAvatar:g,DtRecipeGeneralRow:y,DtEmojiTextWrapper:w},inheritAttrs:!1,props:{avatarSrc:{type:String,default:""},avatarAlt:{type:String,default:""},avatarPresence:{type:String,default:null},avatarSeed:{type:String,default:null},presenceText:{type:String,default:""},name:{type:String,required:!0},userStatus:{type:String,default:""},muted:{type:Boolean,default:!1},unreadCount:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},noInitials:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1},hasCallButton:{type:Boolean,default:!0},callButtonTooltip:{type:String,default:""},unreadCountTooltip:{type:String,default:""}},emits:["call"],computed:{presenceColorClass(){switch(this.avatarPresence){case"active":return"d-fc-success";case"busy":return"d-fc-critical";case"away":return"d-fc-warning";default:return}},contactRowListeners(){return _(this.$attrs)},contactDescription(){return b([this.name,this.presenceText,this.userStatus])},iconName(){return this.noInitials?"user":null}}},D={class:"dt-leftbar-row__status"};function N(r,o,e,R,k,t){const p=n("dt-avatar"),i=n("dt-emoji-text-wrapper"),v=n("dt-recipe-general-row");return s(),u(v,S({"unread-count":e.unreadCount,description:t.contactDescription,"has-unreads":e.hasUnreads,selected:e.selected,"has-call-button":e.hasCallButton,muted:e.muted,"is-typing":e.isTyping,"call-button-tooltip":e.callButtonTooltip,"unread-count-tooltip":e.unreadCountTooltip},r.$attrs,C(t.contactRowListeners),{onCall:o[0]||(o[0]=h=>r.$emit("call",h))}),{left:a(()=>[c(p,{"full-name":e.name,"image-src":e.avatarSrc,"image-alt":e.avatarAlt,"icon-name":t.iconName,"icon-size":"200",size:"sm",seed:e.avatarSeed,presence:e.avatarPresence},null,8,["full-name","image-src","image-alt","icon-name","seed","presence"])]),label:a(()=>[c(i,{class:"dt-leftbar-row__description","data-qa":"dt-leftbar-row-description",size:"200"},{default:a(()=>[d(l(e.name),1)]),_:1}),T("div",D,[e.presenceText?(s(),x("span",{key:0,"data-qa":"dt-leftbar-row-presence-text",class:V(["dt-leftbar-row__meta-context",t.presenceColorClass])},l(e.presenceText),3)):f("v-if",!0),e.userStatus?(s(),u(i,{key:1,size:"100","element-type":"span","data-qa":"dt-leftbar-row-user-status",class:"dt-leftbar-row__meta-custom"},{default:a(()=>[d(l(e.userStatus),1)]),_:1})):f("v-if",!0)])]),_:1},16,["unread-count","description","has-unreads","selected","has-call-button","muted","is-typing","call-button-tooltip","unread-count-tooltip"])}const U=B(m,[["render",N],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]]);m.__docgenInfo={displayName:"DtRecipeContactRow",exportName:"default",description:"",tags:{},props:[{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarAlt",description:`Optional avatar image alt text.
If not provided it will use the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarPresence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.
defer validation to avatar component.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"presenceText",description:`Text describing the user's presence, such as "in a meeting"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",description:"Name of the contact",type:{name:"string"},required:!0},{name:"userStatus",description:"Status as set by the user.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noInitials",description:'Initials will never be shown. Instead it will show a "User" icon.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCallButton",description:"Whether the contact row should display a call button when hovered.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]};export{U as D};
//# sourceMappingURL=contact_row-32e03b97.js.map
