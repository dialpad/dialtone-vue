import{a as b}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as g}from"./storybook_utils-3cb281bc.js";import{D as R}from"./general_row-65de3fd5.js";import{D as x}from"./icon-6ceed40f.js";import{n}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as S}from"./stack-dfcd045d.js";import{d as T}from"./person-13c0d6d2.js";const k={name:"DtRecipeGroupRow",components:{DtIcon:x,DtRecipeGeneralRow:R},inheritAttrs:!1,props:{groupCountText:{type:String,default:""},names:{type:String,required:!0},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1}},emits:["click"]};var v=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",e._g(e._b({attrs:{description:e.names,"aria-label":`${e.groupCountText} ${e.names}`,"unread-count":e.unreadCount,"has-unreads":e.hasUnreads,"unread-count-tooltip":e.unreadCountTooltip,selected:e.selected,"is-typing":e.isTyping},scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-icon",{attrs:{name:"users",size:"300"}})]},proxy:!0}])},"dt-recipe-general-row",e.$attrs,!1),e.$listeners))},C=[];v._withStripped=!0;var s=n(k,v,C,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue";const u=s.exports;s.exports.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"groupCountText",description:'Screen reader will read out the number of users in the group using this text. Ex: "2 users"',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"names",description:"Names of the group members",type:{name:"string"},required:!0},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]};const N={name:"DtRecipeGroupRowDefault",components:{DtRecipeGroupRow:u}};var h=function(){var e=this,t=e._self._c;return t("dt-recipe-group-row",{attrs:{"group-count-text":e.groupCountText,names:e.names,"unread-count":e.unreadCount,"unread-count-tooltip":e.unreadCountTooltip,"has-unreads":e.hasUnreads,selected:e.selected,"is-typing":e.isTyping},on:{click:e.onClick}})},V=[];h._withStripped=!0;var i=n(N,h,V,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue";const G=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeGroupRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]};const $={name:"DtRecipeGroupRowVariants",components:{DtRecipeGroupRow:u,DtStack:S},data(){return{defaultImage:T}}};var w=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v(" Default behavior ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith"}})],1),t("div",[t("h3",[e._v(" Ellipsed names ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"4 users",names:"Jaqueline Nackos, Lori Smith, Jaqueline Nackos, Lori Smith"}})],1),t("div",[t("h3",[e._v(" With unread count ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith","has-unreads":!0,"unread-count-tooltip":"1 unread message"}})],1),t("div",[t("h3",[e._v(" Selected ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith",selected:""}})],1)])},q=[];w._withStripped=!0;var l=n($,w,q,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue";const F=l.exports;l.exports.__docgenInfo={displayName:"DtRecipeGroupRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]};const y={onClick:b("click"),names:"Jaqueline Nackos, Lori Smith"},D={onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},L=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),J={title:"Recipes/Leftbar/Group Row",component:u,args:y,argTypes:D,decorators:[L],excludeStories:/.*Data$/},E=(r,{argTypes:e})=>g(r,e,G),I=(r,{argTypes:e})=>g(r,e,F),a={render:E,args:{}},o={render:I,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,f,_;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(_=(f=o.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const P=["argsData","argTypesData","Default","Variants"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:o,__namedExportsOrder:P,argTypesData:D,argsData:y,default:J},Symbol.toStringTag,{value:"Module"}));export{a as D,M as G,o as V};
//# sourceMappingURL=group_row.stories-2cbfb6c1.js.map
