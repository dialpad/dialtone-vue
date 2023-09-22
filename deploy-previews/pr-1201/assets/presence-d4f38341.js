import{n as i}from"./_plugin-vue2_normalizer-2bbd088e.js";const n={BUSY:"busy",AWAY:"away",OFFLINE:"offline",ACTIVE:"active"},c=[n.BUSY,n.AWAY,n.OFFLINE,n.ACTIVE],l={name:"DtPresence",props:{presence:{type:String,default:n.ACTIVE,validator:a=>c.includes(a)},srText:{type:String,default:null}}};var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"d-presence",attrs:{"data-qa":"dt-presence",role:"status","aria-live":e.$attrs.ariaLive||"off"}},[e.srText?s("span",{staticClass:"sr-only",attrs:{"data-qa":"dt-presence-sr-text"}},[e._v(e._s(e.srText)+" ")]):e._e(),s("div",{staticClass:"d-presence__inner",class:{"d-presence__inner--active":e.presence==="active","d-presence__inner--away":e.presence==="away","d-presence__inner--busy":e.presence==="busy","d-presence__inner--offline":e.presence==="offline"}})])},o=[];r._withStripped=!0;var t=i(l,r,o,!1,null,null,null,null);t.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence.vue";const u=t.exports;t.exports.__docgenInfo={displayName:"DtPresence",description:"Presence is a user status visual indicator element.",tags:{see:[{description:"https://dialpad.design/components/presence.html",title:"see"}]},exportName:"default",props:[{name:"presence",description:`Determines the color of the inner presence circle, indicating status.
Accepts one of 4 values: 'busy', 'away', 'active', 'offline'`,tags:{},values:["busy","away","active","offline"],type:{name:"string"},defaultValue:{func:!1,value:"PRESENCE_STATES.ACTIVE"}},{name:"srText",description:`Since Presence is a visual element, we need SRs to read out any state changes
that occur.
Text entered here will be read by assistive technology. If null this component will be ignored by AT.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/presence/presence.vue"]};export{u as D,c as P};
//# sourceMappingURL=presence-d4f38341.js.map
