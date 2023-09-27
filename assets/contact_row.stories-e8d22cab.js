import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{h as m}from"./storybook_utils-0b506883.js";import{D as n}from"./contact_row-28ae5ed8.js";import{n as v}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as w}from"./stack-793861c1.js";import{b as C}from"./avatar-6c480796.js";import{d as h}from"./person-13c0d6d2.js";const y={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:n}};var D=function(){var a=this,e=a._self._c;return e("dt-recipe-contact-row",{attrs:{name:a.name,"avatar-src":a.avatarSrc,"avatar-presence":a.avatarPresence,"avatar-seed":a.avatarSeed,"avatar-alt":a.avatarAlt,"presence-text":a.presenceText,"unread-count":a.unreadCount,"unread-count-tooltip":a.unreadCountTooltip,"user-status":a.userStatus,"has-unreads":a.hasUnreads,muted:a.muted,selected:a.selected,"no-initials":a.noInitials,"is-typing":a.isTyping,"has-call-button":a.hasCallButton,"call-button-tooltip":a.callButtonTooltip},on:{click:a.onClick,call:a.onCall}})},R=[],_=v(y,D,R,!1,null,null,null,null);const T=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const k={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:n,DtStack:w}};var N=function(){var a=this,e=a._self._c;return e("dt-stack",{attrs:{gap:"600"}},[e("div",[e("h3",[a._v(" With user status ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","user-status":"Good Morning! :smile:","call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" with away presence ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"away","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"Away","user-status":"Out for a bit","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" with busy presence ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"busy","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" With unread count ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" Selected ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png",selected:!0,"call-button-tooltip":"Call"}})],1),e("div",[e("h3",[a._v(" With initial ")]),e("dt-recipe-contact-row",{attrs:{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","call-button-tooltip":"Call"}})],1)])},S=[],f=v(k,N,S,!1,null,null,null,null);const x=f.exports;f.exports.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const g={name:"Jaqueline Nackos",avatarSrc:h,avatarAlt:"Avatar person",callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:s("click"),onCall:s("call")},b={avatarPresence:{options:Object.values(C),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{table:{type:{summary:"event"}}},call:{table:{type:{summary:"event"}}}},A=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),J={title:"Recipes/Leftbar/Contact Row",component:n,args:g,argTypes:b,decorators:[A],excludeStories:/.*Data$/},V=(t,{argTypes:a})=>m(t,a,T),q=(t,{argTypes:a})=>m(t,a,x),r={render:V},o={render:q,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const P=["argsData","argTypesData","Default","Variants"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:P,argTypesData:b,argsData:g,default:J},Symbol.toStringTag,{value:"Module"}));export{M as C,r as D,o as V};
//# sourceMappingURL=contact_row.stories-e8d22cab.js.map