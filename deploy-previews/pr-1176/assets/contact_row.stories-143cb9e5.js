import{a as l}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as _}from"./storybook_utils-7c63eced.js";import{D as n}from"./contact_row-102ccb4b.js";import{n as f}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as h}from"./stack-dfcd045d.js";import{b as y}from"./avatar-a541ac01.js";import{d as D}from"./person-13c0d6d2.js";const k={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:n}};var w=function(){var a=this,e=a._self._c;return e("dt-recipe-contact-row",{attrs:{name:a.name,"avatar-src":a.avatarSrc,"avatar-presence":a.avatarPresence,"avatar-seed":a.avatarSeed,"avatar-alt":a.avatarAlt,"presence-text":a.presenceText,"unread-count":a.unreadCount,"unread-count-tooltip":a.unreadCountTooltip,"user-status":a.userStatus,"has-unreads":a.hasUnreads,muted:a.muted,selected:a.selected,"no-initials":a.noInitials,"is-typing":a.isTyping,"has-call-button":a.hasCallButton,"call-button-tooltip":a.callButtonTooltip},on:{click:a.onClick,call:a.onCall}})},R=[];w._withStripped=!0;var s=f(k,w,R,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue";const T=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const N={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:n,DtStack:h}};var b=function(){var a=this,e=a._self._c;return e("dt-stack",{attrs:{gap:"600"}},[e("div",[e("h3",[a._v(" With user status ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","user-status":"Good Morning! :smile:","call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" with away presence ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"away","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"Away","user-status":"Out for a bit","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" with busy presence ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"busy","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" With unread count ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" Selected ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png",selected:!0,"call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" With initial ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","call-button-tooltip":"Call"}})],1)])},S=[];b._withStripped=!0;var c=f(N,b,S,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue";const x=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const g={name:"Jaqueline Nackos",avatarSrc:D,avatarAlt:"Avatar person",callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:l("click"),onCall:l("call")},C={avatarPresence:{options:Object.values(y),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},A=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),J={title:"Recipes/Leftbar/Contact Row",component:n,args:g,argTypes:C,decorators:[A],excludeStories:/.*Data$/},V=(t,{argTypes:a})=>_(t,a,T),q=(t,{argTypes:a})=>_(t,a,x),r={render:V},o={render:q,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var i,u,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,m,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const P=["argsData","argTypesData","Default","Variants"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:P,argTypesData:C,argsData:g,default:J},Symbol.toStringTag,{value:"Module"}));export{M as C,r as D,o as V};
//# sourceMappingURL=contact_row.stories-143cb9e5.js.map
