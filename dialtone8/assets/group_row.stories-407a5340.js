import{a as w}from"./chunk-OPEUWD42-a3b45fd8.js";import{s as y,c as m}from"./storybook_utils-31ede21d.js";import{D}from"./general_row-744cd440.js";import{D as b}from"./icon-8e5adfca.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as R}from"./stack-793861c1.js";import{d as x}from"./person-13c0d6d2.js";const T={name:"DtRecipeGroupRow",components:{DtIcon:b,DtRecipeGeneralRow:D},inheritAttrs:!1,props:{groupCountText:{type:String,default:""},names:{type:String,required:!0},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1}},emits:["click"],computed:{ariaLabel(){return y([this.groupCountText,this.names])}}};var S=function(){var e=this,t=e._self._c;return t("dt-recipe-general-row",e._g(e._b({attrs:{description:e.names,"aria-label":e.ariaLabel,"unread-count":e.unreadCount,"has-unreads":e.hasUnreads,"unread-count-tooltip":e.unreadCountTooltip,selected:e.selected,"is-typing":e.isTyping},scopedSlots:e._u([{key:"left",fn:function(){return[t("dt-icon",{attrs:{name:"users",size:"300"}})]},proxy:!0}])},"dt-recipe-general-row",e.$attrs,!1),e.$listeners))},k=[],f=o(T,S,k,!1,null,null,null,null);const s=f.exports;f.exports.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"groupCountText",description:'Screen reader will read out the number of users in the group using this text. Ex: "2 users"',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"names",description:"Names of the group members",type:{name:"string"},required:!0},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]};const C={name:"DtRecipeGroupRowDefault",components:{DtRecipeGroupRow:s}};var N=function(){var e=this,t=e._self._c;return t("dt-recipe-group-row",{attrs:{"group-count-text":e.groupCountText,names:e.names,"unread-count":e.unreadCount,"unread-count-tooltip":e.unreadCountTooltip,"has-unreads":e.hasUnreads,selected:e.selected,"is-typing":e.isTyping},on:{click:e.onClick}})},V=[],_=o(C,N,V,!1,null,null,null,null);const G=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeGroupRowDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_default.story.vue"]};const $={name:"DtRecipeGroupRowVariants",components:{DtRecipeGroupRow:s,DtStack:R},data(){return{defaultImage:x}}};var L=function(){var e=this,t=e._self._c;return t("dt-stack",{attrs:{gap:"600"}},[t("div",[t("h3",[e._v(" Default behavior ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith"}})],1),t("div",[t("h3",[e._v(" Ellipsed names ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"4 users",names:"Jaqueline Nackos, Lori Smith, Jaqueline Nackos, Lori Smith"}})],1),t("div",[t("h3",[e._v(" With unread count ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith","has-unreads":!0,"unread-count-tooltip":"1 unread message"}})],1),t("div",[t("h3",[e._v(" Selected ")]),t("dt-recipe-group-row",{attrs:{"group-count-text":"2 users",names:"Jaqueline Nackos, Lori Smith",selected:""}})],1)])},q=[],g=o($,L,q,!1,null,null,null,null);const F=g.exports;g.exports.__docgenInfo={displayName:"DtRecipeGroupRowVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row_variants.story.vue"]};const v={onClick:w("click"),names:"Jaqueline Nackos, Lori Smith"},h={onClick:{table:{disable:!0}},click:{table:{type:{summary:"event"}}}},J=()=>({template:'<div class="d-w264 d-theme-sidebar-bgc d-p8"><story /></div>'}),E={title:"Recipes/Leftbar/Group Row",component:s,args:v,argTypes:h,decorators:[J],excludeStories:/.*Data$/},I=(r,{argTypes:e})=>m(r,e,G),P=(r,{argTypes:e})=>m(r,e,F),a={render:I,args:{}},n={render:P,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var u,i,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const U=["argsData","argTypesData","Default","Variants"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:n,__namedExportsOrder:U,argTypesData:h,argsData:v,default:E},Symbol.toStringTag,{value:"Module"}));export{a as D,W as G,n as V};
//# sourceMappingURL=group_row.stories-407a5340.js.map
