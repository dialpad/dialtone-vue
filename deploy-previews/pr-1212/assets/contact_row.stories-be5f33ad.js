import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as _}from"./storybook_utils-f3611d2a.js";import{D as l}from"./contact_row-bfa4f690.js";import{k as n,o as f,v as h,m as S,e as t,l as r}from"./vue.esm-bundler-a9a971fb.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{D as A}from"./stack-9775095b.js";import{b as J}from"./avatar-ad4fd178.js";import{d as V}from"./person-13c0d6d2.js";const b={name:"DtRecipeContactRowDefault",components:{DtRecipeContactRow:l}};function q(a,$,k,D,N,T){const e=n("dt-recipe-contact-row");return f(),h(e,{name:a.$attrs.name,"avatar-src":a.$attrs.avatarSrc,"avatar-presence":a.$attrs.avatarPresence,"avatar-seed":a.$attrs.avatarSeed,"avatar-alt":a.$attrs.avatarAlt,"presence-text":a.$attrs.presenceText,"unread-count":a.$attrs.unreadCount,"unread-count-tooltip":a.$attrs.unreadCountTooltip,"user-status":a.$attrs.userStatus,"has-unreads":a.$attrs.hasUnreads,muted:a.$attrs.muted,selected:a.$attrs.selected,"no-initials":a.$attrs.noInitials,"is-typing":a.$attrs.isTyping,"has-call-button":a.$attrs.hasCallButton,"call-button-tooltip":a.$attrs.callButtonTooltip,onClick:a.$attrs.onClick,onCall:a.$attrs.onCall},null,8,["name","avatar-src","avatar-presence","avatar-seed","avatar-alt","presence-text","unread-count","unread-count-tooltip","user-status","has-unreads","muted","selected","no-initials","is-typing","has-call-button","call-button-tooltip","onClick","onCall"])}const P=w(b,[["render",q],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]]);b.__docgenInfo={displayName:"DtRecipeContactRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_default.story.vue"]};const C={name:"DtRecipeContactRowVariants",components:{DtRecipeContactRow:l,DtStack:A}},B=t("h3",null," With user status ",-1),E=t("h3",null," with away presence ",-1),I=t("h3",null," with busy presence ",-1),O=t("h3",null," With unread count ",-1),F=t("h3",null," Selected ",-1),j=t("h3",null," With initial ",-1);function M(a,$,k,D,N,T){const e=n("dt-recipe-contact-row"),R=n("dt-stack");return f(),h(R,{gap:"600"},{default:S(()=>[t("div",null,[B,r(e,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","user-status":"Good Morning! :smile:","call-button-tooltip":"Call"})]),t("div",null,[E,r(e,{name:"Jaqueline Nackos","avatar-presence":"away","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"Away","user-status":"Out for a bit","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"})]),t("div",null,[I,r(e,{name:"Jaqueline Nackos","avatar-presence":"busy","avatar-seed":"JN","avatar-alt":"Avatar person","presence-text":"In a meeting","user-status":"Meetings all day","avatar-src":"/common/assets/person.png","call-button-tooltip":"Call"})]),t("div",null,[O,r(e,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png","unread-count":"5","unread-count-tooltip":"55 unread messages","has-unreads":!0,"call-button-tooltip":"Call"})]),t("div",null,[F,r(e,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","avatar-src":"/common/assets/person.png",selected:!0,"call-button-tooltip":"Call"})]),t("div",null,[j,r(e,{name:"Jaqueline Nackos","avatar-presence":"active","avatar-seed":"JN","avatar-alt":"Avatar person","call-button-tooltip":"Call"})])]),_:1})}const W=w(C,[["render",M],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]]);C.__docgenInfo={displayName:"DtRecipeContactRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/contact_row/contact_row_variants.story.vue"]};const g={name:"Jaqueline Nackos",avatarSrc:V,avatarAlt:"Avatar person",callButtonTooltip:"Call",hasUnreads:!0,unreadCount:"55",avatarPresence:"active",unreadCountTooltip:"55 unread messages",onClick:c("click"),onCall:c("call")},y={avatarPresence:{options:Object.values(J),control:{type:"select"},table:{defaultValue:{summary:"null"}}},onClick:{table:{disable:!0}},onCall:{table:{disable:!0}},click:{description:"Native click event for the entire row",table:{type:{summary:"event"},category:"events"}},call:{table:{type:{summary:"event"}}}},U=()=>({template:`<div style="background-color: var(--dt-theme-sidebar-color-background)" class="d-wmx264 d-p8"><story />
  </div>`}),z={title:"Recipes/Leftbar/Contact Row",component:l,args:g,argTypes:y,decorators:[U],excludeStories:/.*Data$/},G=a=>_(a,P),L=a=>_(a,W),o={render:G},s={render:L,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var i,u,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: DefaultTemplate
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,m,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const H=["argsData","argTypesData","Default","Variants"],ea=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:s,__namedExportsOrder:H,argTypesData:y,argsData:g,default:z},Symbol.toStringTag,{value:"Module"}));export{ea as C,o as D,s as V};
//# sourceMappingURL=contact_row.stories-be5f33ad.js.map
