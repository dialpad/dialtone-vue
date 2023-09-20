import{D as i}from"./general_row-19d892f8.js";import{D as u}from"./icon-a1336772.js";import{s as l}from"./utils-6614c5e4.js";import{k as t,l as d,m as c,t as p,o as m,p as f}from"./vue.esm-bundler-0b5a673d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const n={name:"DtRecipeGroupRow",components:{DtIcon:u,DtRecipeGeneralRow:i},inheritAttrs:!1,props:{groupCountText:{type:String,default:""},names:{type:String,required:!0},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1}},emits:["click"],computed:{ariaLabel(){return l([this.groupCountText,this.names])}}};function h(a,y,e,_,w,o){const r=t("dt-icon"),s=t("dt-recipe-general-row");return m(),d(s,p({description:e.names,"aria-label":o.ariaLabel,"unread-count":e.unreadCount,"has-unreads":e.hasUnreads,"unread-count-tooltip":e.unreadCountTooltip,selected:e.selected,"is-typing":e.isTyping},a.$attrs),{left:c(()=>[f(r,{name:"users",size:"300"})]),_:1},16,["description","aria-label","unread-count","has-unreads","unread-count-tooltip","selected","is-typing"])}const D=g(n,[["render",h],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]]);n.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"groupCountText",description:'Screen reader will read out the number of users in the group using this text. Ex: "2 users"',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"names",description:"Names of the group members",type:{name:"string"},required:!0},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",description:"Native click event on the row itself",type:{names:["PointerEvent | KeyboardEvent"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]};export{D};
//# sourceMappingURL=group_row-1d7ec43d.js.map
