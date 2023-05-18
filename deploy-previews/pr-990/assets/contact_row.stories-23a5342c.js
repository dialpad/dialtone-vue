import{a as S}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as B}from"./storybook_utils-7e0be7f9.js";import{D as J}from"./general_row-ceda456c.js";import{D as j}from"./emoji_text_wrapper-cdf05c6e.js";import{D as z,c as O}from"./avatar-8ed15274.js";import{D as U}from"./icon-7ed6ee34.js";import{e as G}from"./utils-e3897dda.js";import{a as l,b as p,w as i,m as W,B as L,o as r,d as s,k as h,f as _,s as y,t as f,F as M,g as a,n as H}from"./vue.esm-bundler-15aa0fd7.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{D as K}from"./stack-3a7e8b91.js";import{d as I}from"./person-13c0d6d2.js";const q={name:"DtRecipeGroupRow",components:{DtAvatar:z,DtIcon:U,DtRecipeGeneralRow:J,DtEmojiTextWrapper:j},inheritAttrs:!1,props:{avatarSrc:{type:String,default:""},avatarPresence:{type:String,default:null},avatarSeed:{type:String,default:null},presenceText:{type:String,default:""},name:{type:String,required:!0},userStatus:{type:String,default:""},muted:{type:Boolean,default:!1},unreadCount:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},noInitials:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1},hasCallButton:{type:Boolean,default:!0},callButtonTooltip:{type:String,default:""},unreadCountTooltip:{type:String,default:""}},emits:["call"],computed:{presenceColorClass(){switch(this.avatarPresence){case"active":return"d-fc-success";case"busy":return"d-fc-critical";case"away":return"d-fc-warning";default:return}},contactRowListeners(){return G(this.$attrs)},avatarInitial(){var e;return((e=this.name)==null?void 0:e[0])??""}}},Q=["src"],X={class:"dt-leftbar-row__status"};function Y(e,m,t,b,o,c){const n=l("dt-icon"),v=l("dt-avatar"),C=l("dt-emoji-text-wrapper"),A=l("dt-recipe-general-row");return r(),p(A,W({"unread-count":t.unreadCount,description:`${t.name} ${t.presenceText} ${t.userStatus}`,"has-unreads":t.hasUnreads,selected:t.selected,"has-call-button":t.hasCallButton,muted:t.muted,"is-typing":t.isTyping,"call-button-tooltip":t.callButtonTooltip,"unread-count-tooltip":t.unreadCountTooltip},e.$attrs,L(c.contactRowListeners),{onCall:m[0]||(m[0]=F=>e.$emit("call",F))}),{left:i(()=>[s(v,{size:"sm",seed:t.avatarSeed,presence:t.avatarPresence},{default:i(()=>[h(` No alt needed as the name is already mentioned in the description
          https://dequeuniversity.com/rules/axe/4.4/image-redundant-alt?application=axe-puppeteer `),t.avatarSrc?(r(),_("img",{key:0,"data-qa":"dt-avatar-image",src:t.avatarSrc,alt:""},null,8,Q)):t.noInitials?(r(),p(n,{key:1,name:"user",size:"200"})):(r(),_(M,{key:2},[y(f(c.avatarInitial),1)],64))]),_:1},8,["seed","presence"])]),label:i(()=>[s(C,{class:"dt-leftbar-row__description","data-qa":"dt-leftbar-row-description",size:"200"},{default:i(()=>[y(f(t.name),1)]),_:1}),a("div",X,[t.presenceText?(r(),_("span",{key:0,"data-qa":"dt-leftbar-row-presence-text",class:H(["dt-leftbar-row__meta-context",c.presenceColorClass])},f(t.presenceText),3)):h("v-if",!0),t.userStatus?(r(),p(C,{key:1,size:"100","element-type":"span","data-qa":"dt-leftbar-row-user-status",class:"dt-leftbar-row__meta-custom"},{default:i(()=>[y(f(t.userStatus),1)]),_:1})):h("v-if",!0)])]),_:1},16,["unread-count","description","has-unreads","selected","has-call-button","muted","is-typing","call-button-tooltip","unread-count-tooltip"])}const g=w(q,[["render",Y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]]);q.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"avatarSrc",description:`Optional avatar image url.
If not provided it will use the initial of the name.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarPresence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.
defer validation to avatar component.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"presenceText",description:`Text describing the user's presence, such as "in a meeting"`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",description:"Name of the contact",type:{name:"string"},required:!0},{name:"userStatus",description:"Status as set by the user.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"muted",description:"Gives a faded style to be used when muted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noInitials",description:'Initials will never be shown. Instead it will show a "User" icon.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasCallButton",description:"Whether the contact row should display a call button when hovered.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"callButtonTooltip",description:"Text shown when the call button is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"call",description:"Call button clicked",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row.vue"]};const x={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:g}};function Z(e,m,t,b,o,c){const n=l("dt-recipe-contact-row");return r(),p(n,{name:e.$attrs.name,"avatar-src":e.$attrs.avatarSrc,"avatar-presence":e.$attrs.avatarPresence,"avatar-seed":e.$attrs.avatarSeed,"presence-text":e.$attrs.presenceText,"unread-count":e.$attrs.unreadCount,"unread-count-tooltip":e.$attrs.unreadCountTooltip,"user-status":e.$attrs.userStatus,"has-unreads":e.$attrs.hasUnreads,muted:e.$attrs.muted,selected:e.$attrs.selected,"no-initials":e.$attrs.noInitials,"is-typing":e.$attrs.isTyping,"has-call-button":e.$attrs.hasCallButton,"call-button-tooltip":e.$attrs.callButtonTooltip,onClick:e.$attrs.onClick,onCall:e.$attrs.onCall},null,8,["name","avatar-src","avatar-presence","avatar-seed","presence-text","unread-count","unread-count-tooltip","user-status","has-unreads","muted","selected","no-initials","is-typing","has-call-button","call-button-tooltip","onClick","onCall"])}const ee=w(x,[["render",Z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]]);x.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const P={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:g,DtStack:K},data(){return{defaultImage:I}}},te=a("h3",null," With user status ",-1),ae=a("h3",null," with away presence ",-1),ne=a("h3",null," with busy presence ",-1),re=a("h3",null," With unread count ",-1),se=a("h3",null," Selected ",-1),oe=a("h3",null," With initial ",-1);function le(e,m,t,b,o,c){const n=l("dt-recipe-contact-row"),v=l("dt-stack");return r(),p(v,{gap:"600"},{default:i(()=>[a("div",null,[te,s(n,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-src":o.defaultImage,"user-status":"Good Morning! :smile:","call-button-tooltip":"Call"},null,8,["avatar-src"])]),a("div",null,[ae,s(n,{name:"Jaqueline Nackos","avatar-presence":"away","presence-text":"Away","user-status":"Out for a bit","avatar-src":o.defaultImage,"call-button-tooltip":"Call"},null,8,["avatar-src"])]),a("div",null,[ne,s(n,{name:"Jaqueline Nackos","avatar-presence":"busy","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":o.defaultImage,"call-button-tooltip":"Call"},null,8,["avatar-src"])]),a("div",null,[re,s(n,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-src":o.defaultImage,"unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"},null,8,["avatar-src"])]),a("div",null,[se,s(n,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-src":o.defaultImage,selected:!0,"call-button-tooltip":"Call"},null,8,["avatar-src"])]),a("div",null,[oe,s(n,{name:"Jaqueline Nackos","avatar-presence":"active","call-button-tooltip":"Call"})])]),_:1})}const ie=w(P,[["render",le],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]]);P.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const E={name:"Jaqueline Nackos",avatarSrc:I,callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:S("click"),onCall:S("call")},$={avatarPresence:{options:Object.values(O),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{description:"Native click event for the entire row",table:{type:{summary:"event"},category:"events"}},call:{table:{type:{summary:"event"}}}},ce=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),ue={title:"Recipes/Leftbar/Contact Row",component:g,args:E,argTypes:$,decorators:[ce],excludeStories:/.*Data$/},de=e=>B(e,ee),pe=e=>B(e,ie),u={render:de},d={render:pe,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var T,D,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(k=(D=u.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var V,R,N;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const me=["argsData","argTypesData","Default","Variants"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Variants:d,__namedExportsOrder:me,argTypesData:$,argsData:E,default:ue},Symbol.toStringTag,{value:"Module"}));export{De as C,u as D,d as V};
//# sourceMappingURL=contact_row.stories-23a5342c.js.map
