import{k as t,y as i,f as c,e as o,p as l,o as a}from"./vue.esm-bundler-81c53cfe.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const n={BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},u=[n.BUSY,n.AWAY,n.OFFLINE,n.ACTIVE],r={name:"DtPresence",props:{presence:{type:String,default:n.ACTIVE,validator:s=>u.includes(s)},srText:{type:String,default:null}}},p=["aria-live"],f={key:0,"data-qa":"dt-presence-sr-text",class:"sr-only"};function _(s,m,e,v,y,E){return a(),t("div",{class:"d-presence","data-qa":"dt-presence",role:"status","aria-live":s.$attrs.ariaLive||"off"},[e.srText?(a(),t("span",f,i(e.srText),1)):c("v-if",!0),o("div",{class:l(["d-presence__inner",{"d-presence__inner--active":e.presence==="active","d-presence__inner--away":e.presence==="away","d-presence__inner--busy":e.presence==="busy","d-presence__inner--offline":e.presence==="offline"}])},null,2)],8,p)}const h=d(r,[["render",_],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence.vue"]]);r.__docgenInfo={displayName:"DtPresence",description:"Presence is a user status visual indicator element.",tags:{see:[{description:"https://dialpad.design/components/presence.html",title:"see"}]},exportName:"default",props:[{name:"presence",description:`Determines the color of the inner presence circle, indicating status.
Accepts one of 4 values: 'busy', 'away', 'active', 'offline'`,tags:{},values:["busy","away","active","offline"],type:{name:"string"},defaultValue:{func:!1,value:"PRESENCE_STATES.ACTIVE"}},{name:"srText",description:`Since Presence is a visual element, we need SRs to read out any state changes
that occur.
Text entered here will be read by assistive technology. If null this component will be ignored by AT.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence.vue"]};export{h as D,u as P};
//# sourceMappingURL=presence-aa185dcc.js.map
