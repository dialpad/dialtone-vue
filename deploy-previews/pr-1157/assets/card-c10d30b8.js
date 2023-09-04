import{h as d}from"./utils-dd7e0c5a.js";import{d as o,n,j as a,x as r,e as i,L as f,o as s}from"./vue.esm-bundler-6a14dfd3.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const c={name:"DtCard",props:{maxHeight:{type:String,default:null},containerClass:{type:[String,Array,Object],default:""},contentClass:{type:[String,Array,Object],default:""},headerClass:{type:[String,Array,Object],default:""},footerClass:{type:[String,Array,Object],default:""}},data(){return{hasSlotContent:d}}};function m(e,p,t,h,l,y){return s(),o("div",{class:n(["d-card",t.containerClass]),"data-qa":"dt-card"},[l.hasSlotContent(e.$slots.header)?(s(),o("div",{key:0,class:n(["d-card__header",t.headerClass])},[a(" @slot slot for header content "),r(e.$slots,"header")],2)):a("v-if",!0),i("div",{class:n(["d-card__content",t.contentClass]),style:f({"max-height":t.maxHeight})},[a(" @slot slot for main content "),r(e.$slots,"content")],6),l.hasSlotContent(e.$slots.footer)?(s(),o("div",{key:1,class:n(["d-card__footer",t.footerClass])},[a(" @slot slot for footer content "),r(e.$slots,"footer")],2)):a("v-if",!0)],2)}const _=u(c,[["render",m],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/card/card.vue"]]);c.__docgenInfo={displayName:"DtCard",description:`A card contains summary content and actions about a single subject.
It can be used by itself or within a list, and is generally interactive.`,tags:{see:[{description:"https://dialpad.design/components/card.html",title:"see"}]},exportName:"default",props:[{name:"maxHeight",description:`The maximum height of the card content.
If given, makes content area scrollable.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"containerClass",description:"class for card container.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:"class for card content.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"headerClass",description:"class for card header.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"footerClass",description:"class for card footer.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"header",description:"slot for header content"},{name:"content",description:"slot for main content"},{name:"footer",description:"slot for footer content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/card/card.vue"]};export{_ as D};
//# sourceMappingURL=card-c10d30b8.js.map
