import{g as _,e as V,h as k}from"./utils-b704f328.js";import{o as i,f as h,k as s,d as u,w as l,e as O,v as z,b,l as f,D as F,E as N,p as T,m as d,G as H,F as $,a as c,B as w,g as r,t as P,x as M,n as I,z as W}from"./vue.esm-bundler-3bf5edd9.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{D as j}from"./button-59f99281.js";import{D as U}from"./lazy_show-30f95b43.js";import{D as G}from"./icon-28829c6f.js";import{c as Q}from"./storybook_utils-a2047fb2.js";const C={name:"DtCollapsibleLazyShow",inheritAttrs:!1,props:{show:{type:Boolean,default:null},appear:{type:Boolean,default:!1},elementType:{type:String,default:"div"}},data(){return{initialized:!!this.show}},computed:{isCSSEnabled(){return!0}},watch:{show:function(e){!e||this.initialized||(this.initialized=!0)}},methods:{beforeEnter(e){requestAnimationFrame(()=>{e.style.height||(e.style.height="0px"),e.style.display=null})},enter(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.height=`${e.scrollHeight}px`})})},afterEnter(e){e.style.height=null},beforeLeave(e){requestAnimationFrame(()=>{e.style.height||(e.style.height=`${e.offsetHeight}px`)})},leave(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.height="0px"})})},afterLeave(e){e.style.height=null}}};function R(e,g,t,v,n,a){return i(),h($,null,[s(" applies the transition on initial render "),u(H,d({appear:t.appear,"enter-active-class":"enter-active","leave-active-class":"leave-active"},e.$attrs,{css:a.isCSSEnabled,onBeforeEnter:a.beforeEnter,onEnter:a.enter,onAfterEnter:a.afterEnter,onBeforeLeave:a.beforeLeave,onLeave:a.leave,onAfterLeave:a.afterLeave,persisted:""}),{default:l(()=>[O((i(),b(T(t.elementType),F(N(e.$attrs)),{default:l(()=>[s(" @slot slot for Content within collapsible "),n.initialized?f(e.$slots,"default",{key:0}):s("v-if",!0)]),_:3},16)),[[z,t.show]])]),_:3},16,["appear","css","onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],2112)}const J=y(C,[["render",R],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue"]]);C.__docgenInfo={displayName:"DtCollapsibleLazyShow",exportName:"default",description:"",tags:{},props:[{name:"show",description:"Whether the child slot is shown.",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"appear",description:"Enable/Disable transition animation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default",description:"slot for Content within collapsible"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue"]};const D={name:"DtCollapsible",components:{DtButton:j,DtCollapsibleLazyShow:J,DtLazyShow:U,DtIcon:G},props:{anchorText:{type:String,default:null},open:{type:Boolean,default:null},id:{type:String,default(){return _()}},elementType:{type:String,default:"div"},contentElementType:{type:String,default:"div"},anchorClass:{type:[String,Array,Object],default:null},contentClass:{type:[String,Array,Object],default:null},maxWidth:{type:String,default:null},maxHeight:{type:String,default:null},ariaLabel:{type:String,default:null},ariaLabelledBy:{type:String,default:null}},emits:["update:open","opened"],data(){return{isOpen:!0}},computed:{labelledBy(){return this.ariaLabelledBy||!this.ariaLabel&&_("DtCollapsible__anchor")},collapsibleListeners(){return V(this.$attrs)}},watch:{open:{handler:function(e){e!==null&&(this.isOpen=e)},immediate:!0}},created(){this.validateProperAnchor()},methods:{onLeaveTransitionComplete(){this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},onEnterTransitionComplete(){this.$emit("opened",!0,this.$refs.content),this.open!==null&&this.$emit("update:open",!0)},defaultToggleOpen(){this.open===null&&this.toggleOpen()},toggleOpen(){this.isOpen=!this.isOpen},validateProperAnchor(){!this.anchorText&&!k(this.$slots.anchor)&&console.error("anchor text and anchor slot content cannot both be falsy")}}},K=["id"],X=["title"];function Y(e,g,t,v,n,a){const p=c("dt-icon"),m=c("dt-button"),B=c("dt-collapsible-lazy-show");return i(),b(T(t.elementType),d({ref:"collapsible"},w(a.collapsibleListeners)),{default:l(()=>[s(" Element for capturing keypress events "),r("div",{id:!t.ariaLabelledBy&&a.labelledBy,ref:"anchor",class:I(["d-dt-collapsibe__anchor",t.anchorClass])},[s(" @slot Slot for the anchor element that toggles the collapsible content "),f(e.$slots,"anchor",{attrs:{"aria-controls":t.id,"aria-expanded":n.isOpen.toString(),role:"button"}},()=>[u(m,{importance:"clear",kind:"muted","aria-controls":t.id,"aria-expanded":`${n.isOpen}`,style:M({width:t.maxWidth}),onClick:a.defaultToggleOpen},{default:l(()=>[u(p,{name:n.isOpen?"chevron-down":"chevron-right",class:"d-icon d-icon--size-300 d-mr8 d-fl-shrink0"},null,8,["name"]),r("span",{class:"d-mr-auto d-truncate",title:t.anchorText},P(t.anchorText),9,X)]),_:1},8,["aria-controls","aria-expanded","style","onClick"])])],10,K),u(B,d({id:t.id,ref:"contentWrapper","aria-hidden":`${!n.isOpen}`,"aria-labelledby":a.labelledBy,"aria-label":t.ariaLabel,show:n.isOpen,"element-type":t.contentElementType,class:["d-dt-collapsible__content",t.contentClass],style:{"max-height":t.maxHeight,"max-width":t.maxWidth},tabindex:"-1",appear:""},w(a.collapsibleListeners),{onAfterLeave:a.onLeaveTransitionComplete,onAfterEnter:a.onEnterTransitionComplete}),{default:l(()=>[s(" @slot Slot for the collapsible element that is expanded by the anchor "),f(e.$slots,"content")]),_:3},16,["id","aria-hidden","aria-labelledby","aria-label","show","element-type","class","style","onAfterLeave","onAfterEnter"])]),_:3},16)}const E=y(D,[["render",Y],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue"]]);D.__docgenInfo={displayName:"DtCollapsible",description:"A collapsible is a component consisting of an interactive anchor that toggled the expandable/collapsible element.",tags:{see:[{description:"https://dialpad.design/components/collapsible.html",title:"see"}]},exportName:"default",props:[{name:"anchorText",description:`Text that is displayed on the anchor if nothing is passed in the slot.
Ignored if the anchor slot is used.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the collapsible is shown. Leaving this null will have the collapsible start
expanded and trigger on click by default. If you set this value, the default trigger
behavior will be disabled, and you can control it as you need.
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"id",description:"The id of the content wrapper.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"elementType",description:"HTML element type (tag name) of the root element of the component.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"contentElementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"anchorClass",description:"Additional class name for the anchor wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",description:`The maximum width of the anchor and collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",description:`The maximum height of the collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",description:"Label on the collapsible content. Should provide this or ariaLabelledBy but not both.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabelledBy",description:`Id of the element that labels the collapsible content. Defaults to the anchor element.
Should provide this or ariaLabel but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}},{name:"opened",description:"Event fired when the content is shown or hidden",type:{names:["Boolean"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"anchor",scoped:!0,description:"Slot for the anchor element that toggles the collapsible content",bindings:[{name:"attrs",title:"binding"}]},{name:"content",description:"Slot for the collapsible element that is expanded by the anchor"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue"]};const q={name:"DtCollapsibleDefaultStory",components:{DtCollapsible:E},data(){return{isOpen:this.open}},watch:{open(e){this.isOpen=e}}},Z=["innerHTML"],ee=["innerHTML"],te={key:1,class:"d-ai-center d-fs-16"},ae=r("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ex risus. In id pellentesque tellus. In hac habitasse platea dictumst. Suspendisse nec egestas nulla. Nam fermentum nisi sit amet arcu fringilla, in porta libero volutpat. Proin ac odio egestas, luctus magna a, luctus leo. Maecenas eget orci vel nibh sollicitudin maximus quis at quam. Curabitur imperdiet lacus nec malesuada pharetra. Nullam leo mi, suscipit at arcu vitae, vestibulum rutrum eros. ",-1),ne=r("p",null," Mauris convallis, elit quis imperdiet aliquet, elit elit tincidunt dui, at tincidunt ligula metus ac tortor. Vestibulum vehicula, nibh pulvinar consequat faucibus, turpis metus tempus dui, eu facilisis risus risus at ipsum. Praesent feugiat nibh non ipsum facilisis, volutpat ullamcorper dui vehicula. Nunc mollis dui porta purus tristique aliquam sed at turpis. Phasellus in aliquet sem, sed consequat turpis. Suspendisse potenti. Aenean vitae leo quam. Fusce ipsum nulla, egestas at eros sit amet, consectetur consectetur turpis. Fusce sit amet tellus rutrum, sollicitudin ante porta, consequat dolor. Quisque ut nulla iaculis, eleifend neque in, euismod massa. Sed pulvinar erat nec interdum porttitor. Pellentesque interdum tincidunt nisl, nec finibus augue faucibus sit amet. Morbi vestibulum rhoncus tristique. Duis at vehicula nulla. Sed hendrerit est id lacus placerat cursus. Cras in lacus sit amet ligula ullamcorper vehicula vitae porttitor est. ",-1),le=[ae,ne];function ie(e,g,t,v,n,a){const p=c("dt-collapsible");return i(),b(p,{id:e.$attrs.id,"anchor-text":e.$attrs.anchorText,"max-height":e.$attrs.maxHeight,"max-width":e.$attrs.maxWidth,open:e.$attrs.isOpen,"initial-focus-element":"first","element-type":e.$attrs.elementType,"content-element-type":e.$attrs.contentElementType,"anchor-class":e.$attrs.anchorClass,"content-class":e.$attrs.contentClass,"aria-label":e.$attrs.ariaLabel,"aria-labelledby":e.$attrs.ariaLabelledBy},W({content:l(()=>[e.$attrs.content?(i(),h("div",{key:0,innerHTML:e.$attrs.content},null,8,ee)):(i(),h("div",te,le))]),_:2},[e.$attrs.anchor?{name:"anchor",fn:l(({attrs:m})=>[r("div",d(m,{innerHTML:e.$attrs.anchor}),null,16,Z)]),key:"0"}:void 0]),1032,["id","anchor-text","max-height","max-width","open","element-type","content-element-type","anchor-class","content-class","aria-label","aria-labelledby"])}const se=y(q,[["render",ie],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_default.story.vue"]]);q.__docgenInfo={displayName:"DtCollapsibleDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_default.story.vue"]};const A={anchorText:"Click me to toggle Content"},oe={anchor:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}},anchorText:{description:"Text on the anchor if slot is unused.",table:{type:{summary:"string"}},control:{type:"text"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},opened:{description:"Emitted whenever the content is collapsed or expanded.",table:{type:{summary:"event"}}},"update:open":{table:{disable:!0}}},re={title:"Components/Collapsible",component:E,argTypes:oe,args:A,excludeStories:/.Data$/},ue=e=>Q(e,se),o={render:ue,args:{maxWidth:"512px"}};var x,S,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    maxWidth: '512px'
  }
}`,...(L=(S=o.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const ce=["argsData","Default"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:ce,argsData:A,default:re},Symbol.toStringTag,{value:"Module"}));export{ge as C,o as D};
//# sourceMappingURL=collapsible.stories-48d9b790.js.map
