import{a as w}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as N}from"./storybook_utils-79c013ce.js";import{D as x}from"./general_row-51892c04.js";import{D as E}from"./emoji_text_wrapper-1442f882.js";import{D as J,b as j}from"./avatar-6ae403c2.js";import{m as z,s as O}from"./utils-1ad0962e.js";import{k as o,v as m,m as l,p as U,z as F,o as u,l as r,q as g,t as f,e as a,d as G,n as W,j as b}from"./vue.esm-bundler-2457a580.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{D as L}from"./stack-48efdf96.js";import{d as M}from"./person-13c0d6d2.js";const R={name:"DtRecipeGroupRow",components:{DtAvatar:J,DtRecipeGeneralRow:x,DtEmojiTextWrapper:E},inheritAttrs:!1,props:{avatarSrc:{type:String,default:""},avatarAlt:{type:String,default:""},avatarPresence:{type:String,default:null},avatarSeed:{type:String,default:null},presenceText:{type:String,default:""},name:{type:String,required:!0},userStatus:{type:String,default:""},muted:{type:Boolean,default:!1},unreadCount:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},noInitials:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1},hasCallButton:{type:Boolean,default:!0},callButtonTooltip:{type:String,default:""},unreadCountTooltip:{type:String,default:""}},emits:["call"],computed:{presenceColorClass(){switch(this.avatarPresence){case"active":return"d-fc-success";case"busy":return"d-fc-critical";case"away":return"d-fc-warning";default:return}},contactRowListeners(){return z(this.$attrs)},contactDescription(){return O([this.name,this.presenceText,this.userStatus])},iconName(){return this.noInitials?"user":null}}},H={class:"dt-leftbar-row__status"};function K(e,d,t,_,y,s){const n=o("dt-avatar"),p=o("dt-emoji-text-wrapper"),P=o("dt-recipe-general-row");return u(),m(P,U({"unread-count":t.unreadCount,description:s.contactDescription,"has-unreads":t.hasUnreads,selected:t.selected,"has-call-button":t.hasCallButton,muted:t.muted,"is-typing":t.isTyping,"call-button-tooltip":t.callButtonTooltip,"unread-count-tooltip":t.unreadCountTooltip},e.$attrs,F(s.contactRowListeners),{onCall:d[0]||(d[0]=q=>e.$emit("call",q))}),{left:l(()=>[r(n,{"full-name":t.name,"image-src":t.avatarSrc,"image-alt":t.avatarAlt,"icon-name":s.iconName,"icon-size":"200",size:"sm",seed:t.avatarSeed,presence:t.avatarPresence},null,8,["full-name","image-src","image-alt","icon-name","seed","presence"])]),label:l(()=>[r(p,{class:"dt-leftbar-row__description","data-qa":"dt-leftbar-row-description",size:"200"},{default:l(()=>[g(f(t.name),1)]),_:1}),a("div",H,[t.presenceText?(u(),G("span",{key:0,"data-qa":"dt-leftbar-row-presence-text",class:W(["dt-leftbar-row__meta-context",s.presenceColorClass])},f(t.presenceText),3)):b("v-if",!0),t.userStatus?(u(),m(p,{key:1,size:"100","element-type":"span","data-qa":"dt-leftbar-row-user-status",class:"dt-leftbar-row__meta-custom"},{default:l(()=>[g(f(t.userStatus),1)]),_:1})):b("v-if",!0)])]),_:1},16,["unread-count","description","has-unreads","selected","has-call-button","muted","is-typing","call-button-tooltip","unread-count-tooltip"])}const h=v(R,[["render",K],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]]);R.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarAlt",description:`Optional avatar image alt text.
If not provided it will use the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarPresence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.
defer validation to avatar component.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"presenceText",description:`Text describing the user's presence, such as "in a meeting"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",description:"Name of the contact",type:{name:"string"},required:!0},{name:"userStatus",description:"Status as set by the user.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noInitials",description:'Initials will never be shown. Instead it will show a "User" icon.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCallButton",description:"Whether the contact row should display a call button when hovered.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]};const A={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:h}};function Q(e,d,t,_,y,s){const n=o("dt-recipe-contact-row");return u(),m(n,{name:e.$attrs.name,"avatar-src":e.$attrs.avatarSrc,"avatar-presence":e.$attrs.avatarPresence,"avatar-seed":e.$attrs.avatarSeed,"avatar-alt":e.$attrs.avatarAlt,"presence-text":e.$attrs.presenceText,"unread-count":e.$attrs.unreadCount,"unread-count-tooltip":e.$attrs.unreadCountTooltip,"user-status":e.$attrs.userStatus,"has-unreads":e.$attrs.hasUnreads,muted:e.$attrs.muted,selected:e.$attrs.selected,"no-initials":e.$attrs.noInitials,"is-typing":e.$attrs.isTyping,"has-call-button":e.$attrs.hasCallButton,"call-button-tooltip":e.$attrs.callButtonTooltip,onClick:e.$attrs.onClick,onCall:e.$attrs.onCall},null,8,["name","avatar-src","avatar-presence","avatar-seed","avatar-alt","presence-text","unread-count","unread-count-tooltip","user-status","has-unreads","muted","selected","no-initials","is-typing","has-call-button","call-button-tooltip","onClick","onCall"])}const X=v(A,[["render",Q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]]);A.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const B={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:h,DtStack:L}},Y=a("h3",null," With user status ",-1),Z=a("h3",null," with away presence ",-1),ee=a("h3",null," with busy presence ",-1),te=a("h3",null," With unread count ",-1),ae=a("h3",null," Selected ",-1),ne=a("h3",null," With initial ",-1);function re(e,d,t,_,y,s){const n=o("dt-recipe-contact-row"),p=o("dt-stack");return u(),m(p,{gap:"600"},{default:l(()=>[a("div",null,[Y,r(n,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","user-status":"Good Morning! :smile:","call-button-tooltip":"Call"})]),a("div",null,[Z,r(n,{name:"Jaqueline Nackos","avatar-presence":"away","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"Away","user-status":"Out for a bit","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"})]),a("div",null,[ee,r(n,{name:"Jaqueline Nackos","avatar-presence":"busy","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"})]),a("div",null,[te,r(n,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"})]),a("div",null,[ae,r(n,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png",selected:!0,"call-button-tooltip":"Call"})]),a("div",null,[ne,r(n,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","call-button-tooltip":"Call"})])]),_:1})}const se=v(B,[["render",re],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]]);B.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const $={name:"Jaqueline Nackos",avatarSrc:M,avatarAlt:"Avatar person",callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:w("click"),onCall:w("call")},I={avatarPresence:{options:Object.values(j),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{description:"Native click event for the entire row",table:{type:{summary:"event"},category:"events"}},call:{table:{type:{summary:"event"}}}},oe=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),le={title:"Recipes/Leftbar/Contact Row",component:h,args:$,argTypes:I,decorators:[oe],excludeStories:/.*Data$/},ie=e=>N(e,X),ce=e=>N(e,se),i={render:ie},c={render:ce,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var C,S,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var D,k,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const ue=["argsData","argTypesData","Default","Variants"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:c,__namedExportsOrder:ue,argTypesData:I,argsData:$,default:le},Symbol.toStringTag,{value:"Module"}));export{be as C,i as D,c as V};
//# sourceMappingURL=contact_row.stories-0f59956b.js.map
