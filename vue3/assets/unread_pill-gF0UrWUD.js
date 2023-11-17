import{D as i}from"./icon-XBQwdgf_.js";import{s,k as o,u as d,e as l,f as c,m as p,t as u,o as m}from"./vue.esm-bundler-qY5SvxH_.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";const f=["up","down"],k=["mentions","messages"],n={name:"DtRecipeUnreadPill",components:{DtIcon:i},props:{kind:{type:String,required:!0,validator:e=>k.includes(e)},direction:{type:String,required:!0,validator:e=>f.includes(e)}},emits:["click"],computed:{unreadChipListeners(){return{click:e=>this.$emit("click",e)}}}},v={"data-qa":"dt-leftbar-unread-pill__label"};function g(e,h,t,D,b,r){const a=s("dt-icon");return m(),o("button",p({class:["dt-leftbar-unread-pill",`dt-leftbar-unread-pill--${t.kind}`],type:"button","data-qa":"dt-leftbar-unread-pill"},u(r.unreadChipListeners,!0)),[d(a,{name:`arrow-${t.direction}`,size:"300"},null,8,["name"]),l("span",v,[c(e.$slots,"default")])],16)}const P=_(n,[["render",g]]);n.__docgenInfo={displayName:"DtRecipeUnreadPill",exportName:"default",description:"",tags:{},props:[{name:"kind",description:"The kind of unread pill which determines the styling",tags:{},values:["'mentions'","'messages'"],type:{name:"string"},required:!0},{name:"direction",description:"The direction of the arrow icon",tags:{},values:["'up'","'down'"],type:{name:"string"},required:!0}],events:[{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/leftbar/unread_pill/unread_pill.vue"]};export{P as D,k as U,f as a};
//# sourceMappingURL=unread_pill-gF0UrWUD.js.map
