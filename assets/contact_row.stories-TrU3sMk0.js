import{a as l}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as f}from"./storybook_utils-XrTpeJKJ.js";import{D as g}from"./general_row-RpMcPkcR.js";import{D as b}from"./emoji_text_wrapper-jZzSeEXy.js";import{D as C,a as S}from"./avatar-TNIlCJsh.js";import{s as T}from"./utils-E69eXbJV.js";import{n as s}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D}from"./stack-JDcL8RhQ.js";import{d as $}from"./avatar2-brBbnWbv.js";const x={name:"DtRecipeContactRow",components:{DtAvatar:C,DtRecipeGeneralRow:g,DtEmojiTextWrapper:b},inheritAttrs:!1,props:{avatarSrc:{type:String,default:""},avatarAlt:{type:String,default:""},avatarPresence:{type:String,default:null},avatarSeed:{type:String,default:null},presenceText:{type:String,default:""},name:{type:String,required:!0},userStatus:{type:String,default:""},muted:{type:Boolean,default:!1},unreadCount:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},noInitials:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1},hasCallButton:{type:Boolean,default:!0},callButtonTooltip:{type:String,default:""},unreadCountTooltip:{type:String,default:""}},emits:["click","call"],computed:{presenceColorClass(){switch(this.avatarPresence){case"active":return"d-fc-success";case"busy":return"d-fc-critical";case"away":return"d-fc-warning";default:return}},contactDescription(){return T([this.name,this.presenceText,this.userStatus])},iconName(){return this.noInitials?"user":null}}};var R=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",e._g(e._b({attrs:{"unread-count":e.unreadCount,description:e.contactDescription,"has-unreads":e.hasUnreads,selected:e.selected,"has-call-button":e.hasCallButton,muted:e.muted,"is-typing":e.isTyping,"call-button-tooltip":e.callButtonTooltip,"unread-count-tooltip":e.unreadCountTooltip},scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-avatar",{attrs:{"full-name":e.name,"image-src":e.avatarSrc,"image-alt":e.avatarAlt,"icon-name":e.iconName,"icon-size":"200",size:"sm",seed:e.avatarSeed,presence:e.avatarPresence}})]},proxy:!0},{key:"label",fn:function(){return[t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__description",attrs:{"data-qa":"dt-leftbar-row-description",size:"200"}},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"dt-leftbar-row__status"},[e.presenceText?t("span",{class:["dt-leftbar-row__meta-context",e.presenceColorClass],attrs:{"data-qa":"dt-leftbar-row-presence-text"}},[e._v(" "+e._s(e.presenceText)+" ")]):e._e(),e.userStatus?t("dt-emoji-text-wrapper",{staticClass:"dt-leftbar-row__meta-custom",attrs:{size:"100","element-type":"span","data-qa":"dt-leftbar-row-user-status"}},[e._v(" "+e._s(e.userStatus)+" ")]):e._e()],1)]},proxy:!0}])},"dt-recipe-general-row",e.$attrs,!1),e.$listeners))},k=[],v=s(x,R,k,!1,null,null,null,null);const o=v.exports;v.exports.__docgenInfo={displayName:"DtRecipeContactRow",exportName:"default",description:"",tags:{},props:[{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarAlt",description:`Optional avatar image alt text.
If not provided it will use the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarPresence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.
defer validation to avatar component.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"presenceText",description:`Text describing the user's presence, such as "in a meeting"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",description:"Name of the contact",type:{name:"string"},required:!0},{name:"userStatus",description:"Status as set by the user.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noInitials",description:'Initials will never be shown. Instead it will show a "User" icon.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCallButton",description:"Whether the contact row should display a call button when hovered.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]};const N={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:o}};var V=function(){var e=this,t=e._self._c;return t("dt-recipe-contact-row",{attrs:{name:e.$attrs.name,"avatar-src":e.$attrs.avatarSrc,"avatar-presence":e.$attrs.avatarPresence,"avatar-seed":e.$attrs.avatarSeed,"avatar-alt":e.$attrs.avatarAlt,"presence-text":e.$attrs.presenceText,"unread-count":e.$attrs.unreadCount,"unread-count-tooltip":e.$attrs.unreadCountTooltip,"user-status":e.$attrs.userStatus,"has-unreads":e.$attrs.hasUnreads,muted:e.$attrs.muted,selected:e.$attrs.selected,"no-initials":e.$attrs.noInitials,"is-typing":e.$attrs.isTyping,"has-call-button":e.$attrs.hasCallButton,"call-button-tooltip":e.$attrs.callButtonTooltip},on:{click:e.$attrs.onClick,call:e.$attrs.onCall}})},A=[],_=s(N,V,A,!1,null,null,null,null);const B=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const E={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:o,DtStack:D}};var I=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v(" With user status ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":e.$attrs.avatarSrc,"user-status":"Good Morning! :smile:","call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" with away presence ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"away","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"Away","user-status":"Out for a bit","avatar-src":e.$attrs.avatarSrc,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" with busy presence ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"busy","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":e.$attrs.avatarSrc,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" With unread count ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":e.$attrs.avatarSrc,"unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" Selected ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":e.$attrs.avatarSrc,selected:!0,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[e._v(" With initial ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","call-button-tooltip":"Call"}})],1)])},P=[],h=s(E,I,P,!1,null,null,null,null);const J=h.exports;h.exports.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const y={name:"Jaqueline Nackos",avatarSrc:$,avatarAlt:"Avatar person",callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:l("click"),onCall:l("call")},w={avatarPresence:{options:Object.values(S),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},q=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),F={title:"Recipes/Leftbar/Contact Row",component:o,args:y,argTypes:w,decorators:[q],excludeStories:/.*Data$/},O=(a,{argTypes:e})=>f(a,e,B),j=(a,{argTypes:e})=>f(a,e,J),r={render:O},n={render:j,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,i,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const z=["argsData","argTypesData","Default","Variants"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:n,__namedExportsOrder:z,argTypesData:w,argsData:y,default:F},Symbol.toStringTag,{value:"Module"}));export{Y as C,r as D,n as V};
//# sourceMappingURL=contact_row.stories-TrU3sMk0.js.map