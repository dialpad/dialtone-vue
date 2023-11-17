import{D as u}from"./general_row-aVHOEQUk.js";import{D as i}from"./icon-NXLZM33A.js";import{s as l,e as d}from"./utils-bRhhDdxK.js";import{s as n,b as c,w as p,m as f,t as m,o as g,u as h}from"./vue.esm-bundler-k9jVJOu7.js";import{_ as w}from"./_plugin-vue_export-helper-x3n3nnut.js";const a={name:"DtRecipeGroupRow",components:{DtIcon:i,DtRecipeGeneralRow:u},inheritAttrs:!1,props:{groupCountText:{type:String,default:""},names:{type:String,required:!0},unreadCount:{type:String,default:null},unreadCountTooltip:{type:String,default:null},hasUnreads:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},isTyping:{type:Boolean,default:!1}},emits:[],computed:{ariaLabel(){return l([this.groupCountText,this.names])},contactRowListeners(){return d(this.$attrs)}}};function _(r,y,e,v,b,t){const o=n("dt-icon"),s=n("dt-recipe-general-row");return g(),c(s,f({description:e.names,"aria-label":t.ariaLabel,"unread-count":e.unreadCount,"has-unreads":e.hasUnreads,"unread-count-tooltip":e.unreadCountTooltip,selected:e.selected,"is-typing":e.isTyping},r.$attrs,m(t.contactRowListeners)),{left:p(()=>[h(o,{name:"users",size:"300"})]),_:1},16,["description","aria-label","unread-count","has-unreads","unread-count-tooltip","selected","is-typing"])}const S=w(a,[["render",_],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]]);a.__docgenInfo={displayName:"DtRecipeGroupRow",exportName:"default",description:"",tags:{},props:[{name:"groupCountText",description:'Screen reader will read out the number of users in the group using this text. Ex: "2 users"',type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"names",description:"Names of the group members",type:{name:"string"},required:!0},{name:"unreadCount",description:"Number of unread messages",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"unreadCountTooltip",description:"Text shown when the unread count is hovered.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasUnreads",description:`Styles the row with an increased font weight to convey it has unreads. This must be true to see
the unread count badge.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Determines if the row is selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTyping",description:'Shows an "is typing" animation over the avatar when true.',type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/group_row/group_row.vue"]};export{S as D};
//# sourceMappingURL=group_row-7znMXy5D.js.map
