import{a as l}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as _}from"./storybook_utils-82e80e48.js";import{D as n}from"./contact_row-dba35465.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as g}from"./stack-b8a925c0.js";import{a as y}from"./avatar-be006cea.js";import{d as D}from"./avatar2-e5d57aa6.js";const S={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:n}};var w=function(){var a=this,t=a._self._c;return t("dt-recipe-contact-row",{attrs:{name:a.name,"avatar-src":a.avatarSrc,"avatar-presence":a.avatarPresence,"avatar-seed":a.avatarSeed,"avatar-alt":a.avatarAlt,"presence-text":a.presenceText,"unread-count":a.unreadCount,"unread-count-tooltip":a.unreadCountTooltip,"user-status":a.userStatus,"has-unreads":a.hasUnreads,muted:a.muted,selected:a.selected,"no-initials":a.noInitials,"is-typing":a.isTyping,"has-call-button":a.hasCallButton,"call-button-tooltip":a.callButtonTooltip},on:{click:a.onClick,call:a.onCall}})},k=[];w._withStripped=!0;var s=f(S,w,k,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue";const R=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const T={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:n,DtStack:g}};var b=function(){var a=this,t=a._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[a._v(" With user status ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":a.avatarSrc,"user-status":"Good Morning! :smile:","call-button-tooltip":"Call"}})],1),t("div",[t("h3",[a._v(" with away presence ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"away","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"Away","user-status":"Out for a bit","avatar-src":a.avatarSrc,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[a._v(" with busy presence ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"busy","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":a.avatarSrc,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[a._v(" With unread count ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":a.avatarSrc,"unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[a._v(" Selected ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":a.avatarSrc,selected:!0,"call-button-tooltip":"Call"}})],1),t("div",[t("h3",[a._v(" With initial ")]),t("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","call-button-tooltip":"Call"}})],1)])},N=[];b._withStripped=!0;var c=f(T,b,N,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue";const x=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const C={name:"Jaqueline Nackos",avatarSrc:D,avatarAlt:"Avatar person",callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:l("click"),onCall:l("call")},h={avatarPresence:{options:Object.values(y),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},A=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),J={title:"Recipes/Leftbar/Contact Row",component:n,args:C,argTypes:h,decorators:[A],excludeStories:/.*Data$/},V=(e,{argTypes:a})=>_(e,a,R),q=(e,{argTypes:a})=>_(e,a,x),r={render:V},o={render:q,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var i,u,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,v,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const P=["argsData","argTypesData","Default","Variants"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:P,argTypesData:h,argsData:C,default:J},Symbol.toStringTag,{value:"Module"}));export{M as C,r as D,o as V};
//# sourceMappingURL=contact_row.stories-1b93f67f.js.map
