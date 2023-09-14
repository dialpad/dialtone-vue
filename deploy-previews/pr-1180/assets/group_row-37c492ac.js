import{D as r}from"./general_row-0c53c4db.js";import{D as o}from"./icon-ff3a3d3b.js";import{s}from"./storybook_utils-7c63eced.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const i={name:"DtRecipeGroupRow",components:{DtIcon:o,DtRecipeGeneralRow:r},inheritAttrs:!1,props:{groupCountText:{type:String,default:""},names:{type:String,required:!0},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1}},emits:["click"],computed:{ariaLabel(){return s([this.groupCountText,this.names])}}};var a=function(){var e=this,n=e._self._c;return n("dt-recipe-general-row",e._g(e._b({attrs:{description:e.names,"aria-label":e.ariaLabel,"unread-count":e.unreadCount,"has-unreads":e.hasUnreads,"unread-count-tooltip":e.unreadCountTooltip,selected:e.selected,"is-typing":e.isTyping},scopedSlots:e._u([{key:"left",fn:function(){return[n("dt-icon",{attrs:{name:"users",size:"300"}})]},proxy:!0}])},"dt-recipe-general-row",e.$attrs,!1),e.$listeners))},l=[];a._withStripped=!0;var t=u(i,a,l,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue";const g=t.exports;t.exports.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"groupCountText",description:'Screen reader will read out the number of users in the group using this text. Ex: "2 users"',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"names",description:"Names of the group members",type:{name:"string"},required:!0},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]};export{g as D};
//# sourceMappingURL=group_row-37c492ac.js.map
