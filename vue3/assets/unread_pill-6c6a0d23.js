import{D as i}from"./icon-a0437632.js";import{u as s,p as o,y as d,e as l,f as c,m as p,x as u,o as m}from"./vue.esm-bundler-3a08a304.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const f=["up","down"],v=["mentions","messages"];const n={name:"DtRecipeUnreadPill",components:{DtIcon:i},props:{kind:{type:String,required:!0,validator:e=>v.includes(e)},direction:{type:String,required:!0,validator:e=>f.includes(e)}},emits:["click"],computed:{unreadChipListeners(){return{click:e=>this.$emit("click",e)}}}},g={"data-qa":"dt-leftbar-unread-pill__label"};function h(e,k,t,y,D,r){const a=s("dt-icon");return m(),o("button",p({class:["dt-leftbar-unread-pill",`dt-leftbar-unread-pill--${t.kind}`],type:"button","data-qa":"dt-leftbar-unread-pill"},u(r.unreadChipListeners,!0)),[d(a,{name:`arrow-${t.direction}`,size:"300"},null,8,["name"]),l("span",g,[c(e.$slots,"default")])],16)}const P=_(n,[["render",h]]);n.__docgenInfo={displayName:"DtRecipeUnreadPill",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"The kind of unread pill which determines the styling",tags:{},values:["'mentions'","'messages'"],type:{name:"string"},required:!0},{name:"direction",description:"The direction of the arrow icon",tags:{},values:["'up'","'down'"],type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]};export{P as D,v as U,f as a};
//# sourceMappingURL=unread_pill-6c6a0d23.js.map