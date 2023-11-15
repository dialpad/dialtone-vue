import{D as i}from"./icon-8dfe7109.js";import{s,k as o,u as l,e as d,g as c,m as u,t as p,o as m}from"./vue.esm-bundler-81c53cfe.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const f=["up","down"],v=["mentions","messages"];const n={name:"DtRecipeUnreadPill",components:{DtIcon:i},props:{kind:{type:String,required:!0,validator:e=>v.includes(e)},direction:{type:String,required:!0,validator:e=>f.includes(e)}},emits:["click"],computed:{unreadChipListeners(){return{click:e=>this.$emit("click",e)}}}},g={"data-qa":"dt-leftbar-unread-pill__label"};function k(e,h,t,y,b,r){const a=s("dt-icon");return m(),o("button",u({class:["dt-leftbar-unread-pill",`dt-leftbar-unread-pill--${t.kind}`],type:"button","data-qa":"dt-leftbar-unread-pill"},p(r.unreadChipListeners,!0)),[l(a,{name:`arrow-${t.direction}`,size:"300"},null,8,["name"]),d("span",g,[c(e.$slots,"default")])],16)}const I=_(n,[["render",k],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]]);n.__docgenInfo={displayName:"DtRecipeUnreadPill",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"The kind of unread pill which determines the styling",tags:{},values:["'mentions'","'messages'"],type:{name:"string"},required:!0},{name:"direction",description:"The direction of the arrow icon",tags:{},values:["'up'","'down'"],type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]};export{I as D,v as U,f as a};
//# sourceMappingURL=unread_pill-cc0870cc.js.map
