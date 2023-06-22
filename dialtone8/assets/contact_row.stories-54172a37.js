import{a as l}from"./chunk-OPEUWD42-a3b45fd8.js";import{s as b,c as f}from"./storybook_utils-31ede21d.js";import{D as C}from"./general_row-744cd440.js";import{D as S}from"./emoji_text_wrapper-dd199ae3.js";import{D as T,c as D}from"./avatar-568bcb41.js";import{D as x}from"./icon-8e5adfca.js";import{n as s}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as R}from"./stack-793861c1.js";import{d as v}from"./person-13c0d6d2.js";const k={name:"DtRecipeGroupRow",components:{DtAvatar:T,DtIcon:x,DtRecipeGeneralRow:C,DtEmojiTextWrapper:S},inheritAttrs:!1,props:{avatarSrc:{type:String,default:""},avatarPresence:{type:String,default:null},avatarSeed:{type:String,default:null},presenceText:{type:String,default:""},name:{type:String,required:!0},userStatus:{type:String,default:""},muted:{type:Boolean,default:!1},unreadCount:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},noInitials:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1},hasCallButton:{type:Boolean,default:!0},callButtonTooltip:{type:String,default:""},unreadCountTooltip:{type:String,default:""}},emits:["click","call"],computed:{presenceColorClass(){switch(this.avatarPresence){case"active":return"d-fc-success";case"busy":return"d-fc-critical";case"away":return"d-fc-warning";default:return}},avatarInitial(){var a;return((a=this.name)==null?void 0:a[0])??""},contactDescription(){return b([this.name,this.presenceText,this.userStatus])}}};var V=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",e._g(e._b({attrs:{"unread-count":e.unreadCount,description:e.contactDescription,"has-unreads":e.hasUnreads,selected:e.selected,"has-call-button":e.hasCallButton,muted:e.muted,"is-typing":e.isTyping,"call-button-tooltip":e.callButtonTooltip,"unread-count-tooltip":e.unreadCountTooltip},scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-avatar",{attrs:{size:"sm",seed:e.avatarSeed,presence:e.avatarPresence}},[e.avatarSrc?t("img",{attrs:{"data-qa":"dt-avatar-image",src:e.avatarSrc,alt:""}}):e.noInitials?[t("dt-icon",{attrs:{name:"user",size:"200"}})]:[e._v(" "+e._s(e.avatarInitial)+" ")]],2)]},proxy:!0},{key:"label",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__description",attrs:{"data-qa":"dt-leftbar-row-description",size:"200"}},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"dt-leftbar-row__status"},[e.presenceText?t("span",{class:["dt-leftbar-row__meta-context",e.presenceColorClass],attrs:{"data-qa":"dt-leftbar-row-presence-text"}},[e._v(" "+e._s(e.presenceText)+" ")]):e._e(),e.userStatus?t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__meta-custom",attrs:{size:"100","element-type":"span","data-qa":"dt-leftbar-row-user-status"}},[e._v(" "+e._s(e.userStatus)+" ")]):e._e()],1)]},proxy:!0}])},"dt-recipe-general-row",e.$attrs,!1),e.$listeners))},I=[],_=s(k,V,I,!1,null,null,null,null);const o=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarPresence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.
defer validation to avatar component.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"presenceText",description:`Text describing the user's presence, such as "in a meeting"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",description:"Name of the contact",type:{name:"string"},required:!0},{name:"userStatus",description:"Status as set by the user.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noInitials",description:'Initials will never be shown. Instead it will show a "User" icon.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCallButton",description:"Whether the contact row should display a call button when hovered.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]};const N={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:o}};var B=function(){var e=this,t=e._self._c;return t("dt-recipe-contact-row",{attrs:{name:e.name,"avatar-src":e.avatarSrc,"avatar-presence":e.avatarPresence,"avatar-seed":e.avatarSeed,"presence-text":e.presenceText,"unread-count":e.unreadCount,"unread-count-tooltip":e.unreadCountTooltip,"user-status":e.userStatus,"has-unreads":e.hasUnreads,muted:e.muted,selected:e.selected,"no-initials":e.noInitials,"is-typing":e.isTyping,"has-call-button":e.hasCallButton,"call-button-tooltip":e.callButtonTooltip},on:{click:e.onClick,call:e.onCall}})},E=[],h=s(N,B,E,!1,null,null,null,null);const P=h.exports;h.exports.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const q={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:o,DtStack:R},data(){return{defaultImage:v}}};var $=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v(" With user status ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-src":e.defaultImage,"user-status":"Good Morning! :smile:","call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" with away presence ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"away","presence-text":"Away","user-status":"Out for a bit","avatar-src":e.defaultImage,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" with busy presence ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"busy","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":e.defaultImage,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" With unread count ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-src":e.defaultImage,"unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" Selected ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-src":e.defaultImage,selected:!0,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" With initial ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","call-button-tooltip":"Call"}})],1)])},A=[],y=s(q,$,A,!1,null,null,null,null);const F=y.exports;y.exports.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const w={name:"Jaqueline Nackos",avatarSrc:v,callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:l("click"),onCall:l("call")},g={avatarPresence:{options:Object.values(D),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},J=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),j={title:"Recipes/Leftbar/Contact Row",component:o,args:w,argTypes:g,decorators:[J],excludeStories:/.*Data$/},z=(a,{argTypes:e})=>f(a,e,P),O=(a,{argTypes:e})=>f(a,e,F),n={render:z},r={render:O,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,i,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["argsData","argTypesData","Default","Variants"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:r,__namedExportsOrder:U,argTypesData:g,argsData:w,default:j},Symbol.toStringTag,{value:"Module"}));export{Z as C,n as D,r as V};
//# sourceMappingURL=contact_row.stories-54172a37.js.map
