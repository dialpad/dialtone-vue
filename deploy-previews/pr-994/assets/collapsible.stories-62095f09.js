import{a as r,c as y}from"./storybook_utils-adf429e4.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as g}from"./button-9102a84a.js";import{D as _}from"./lazy_show-0b3a0cf0.js";import{D as x}from"./icon-f34d44a2.js";const w={name:"DtCollapsibleLazyShow",props:{show:{type:Boolean,default:null},appear:{type:Boolean,default:!1},elementType:{type:String,default:"div"}},data(){return{initialized:!!this.show}},computed:{isCSSEnabled(){return!0}},watch:{show:function(t){!t||this.initialized||(this.initialized=!0)}},methods:{beforeEnter(t){requestAnimationFrame(()=>{t.style.height||(t.style.height="0px"),t.style.display=null})},enter(t){requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.style.height=`${t.scrollHeight}px`})})},afterEnter(t){t.style.height=null},beforeLeave(t){requestAnimationFrame(()=>{t.style.height||(t.style.height=`${t.offsetHeight}px`)})},leave(t){requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.style.height="0px"})})},afterLeave(t){t.style.height=null}}};var d=function(){var e=this,a=e._self._c;return a("transition",e._g({attrs:{appear:e.appear,"enter-active-class":"enter-active","leave-active-class":"leave-active",css:e.isCSSEnabled},on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},e.$listeners),[a(e.elementType,e._g({directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],tag:"component"},e.$listeners),[e.initialized?e._t("default"):e._e()],2)],1)},S=[];d._withStripped=!0;var i=l(w,d,S,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue";const T=i.exports;i.exports.__docgenInfo={displayName:"DtCollapsibleLazyShow",exportName:"default",description:"",tags:{},props:[{name:"show",description:"Whether the child slot is shown.",type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"appear",description:"Enable/Disable transition animation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"elementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default",description:"slot for Content within collapsible"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_lazy_show.vue"]};const C={name:"DtCollapsible",components:{DtButton:g,DtCollapsibleLazyShow:T,DtLazyShow:_,DtIcon:x},props:{anchorText:{type:String,default:null},open:{type:Boolean,default:null},id:{type:String,default(){return r()}},elementType:{type:String,default:"div"},contentElementType:{type:String,default:"div"},anchorClass:{type:[String,Array,Object],default:null},contentClass:{type:[String,Array,Object],default:null},maxWidth:{type:String,default:null},maxHeight:{type:String,default:null},ariaLabel:{type:String,default:null},ariaLabelledBy:{type:String,default:null}},emits:["update:open","opened"],data(){return{isOpen:!0}},computed:{labelledBy(){return this.ariaLabelledBy||!this.ariaLabel&&r("DtCollapsible__anchor")}},watch:{open:{handler:function(t){t!==null&&(this.isOpen=t)},immediate:!0}},mounted(){this.validateProperAnchor()},methods:{onLeaveTransitionComplete(){this.$emit("opened",!1),this.open!==null&&this.$emit("update:open",!1)},onEnterTransitionComplete(){this.$emit("opened",!0,this.$refs.content),this.open!==null&&this.$emit("update:open",!0)},defaultToggleOpen(){this.open===null&&this.toggleOpen()},toggleOpen(){this.isOpen=!this.isOpen},validateProperAnchor(){!this.anchorText&&!this.$scopedSlots.anchor&&console.error("anchor text and anchor slot content cannot both be falsy")}}};var m=function(){var e=this,a=e._self._c;return a(e.elementType,e._g({ref:"collapsible",tag:"component"},e.$listeners),[a("div",{ref:"anchor",class:["d-dt-collapsibe__anchor",e.anchorClass],attrs:{id:!e.ariaLabelledBy&&e.labelledBy}},[e._t("anchor",function(){return[a("dt-button",{style:{width:e.maxWidth},attrs:{importance:"clear",kind:"muted","aria-controls":e.id,"aria-expanded":`${e.isOpen}`},on:{click:e.defaultToggleOpen}},[a("dt-icon",{staticClass:"d-icon d-icon--size-300 d-mr8 d-fl-shrink0",attrs:{name:e.isOpen?"chevron-down":"chevron-right"}}),a("span",{staticClass:"d-mr-auto d-truncate",attrs:{title:e.anchorText}},[e._v(" "+e._s(e.anchorText)+" ")])],1)]},{attrs:{"aria-controls":e.id,"aria-expanded":e.isOpen.toString(),role:"button"}})],2),a("dt-collapsible-lazy-show",e._g({ref:"contentWrapper",class:["d-dt-collapsible__content",e.contentClass],style:{"max-height":e.maxHeight,"max-width":e.maxWidth},attrs:{id:e.id,"aria-hidden":`${!e.isOpen}`,"aria-labelledby":e.labelledBy,"aria-label":e.ariaLabel,show:e.isOpen,"element-type":e.contentElementType,tabindex:"-1",appear:""},on:{"after-leave":e.onLeaveTransitionComplete,"after-enter":e.onEnterTransitionComplete}},e.$listeners),[e._t("content")],2)],1)},D=[];m._withStripped=!0;var s=l(C,m,D,!1,null,null,null,null);s.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue";const h=s.exports;s.exports.__docgenInfo={displayName:"DtCollapsible",description:"A collapsible is a component consisting of an interactive anchor that toggled the expandable/collapsible element.",tags:{see:[{description:"https://dialpad.design/components/collapsible.html",title:"see"}]},exportName:"default",props:[{name:"anchorText",description:`Text that is displayed on the anchor if nothing is passed in the slot.
Ignored if the anchor slot is used.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"open",description:`Controls whether the collapsible is shown. Leaving this null will have the collapsible start
expanded and trigger on click by default. If you set this value, the default trigger
behavior will be disabled, and you can control it as you need.
Supports .sync modifier`,tags:{},values:["null","true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"null"}},{name:"id",description:"The id of the content wrapper.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return getUniqueString(); }"}},{name:"elementType",description:"HTML element type (tag name) of the root element of the component.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"contentElementType",description:"HTML element type (tag name) of the content wrapper element.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"anchorClass",description:"Additional class name for the anchor wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"contentClass",description:"Additional class name for the content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}},{name:"maxWidth",description:`The maximum width of the anchor and collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",description:`The maximum height of the collapsible element.
Possible units rem|px|%|em`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",description:"Label on the collapsible content. Should provide this or ariaLabelledBy but not both.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabelledBy",description:`Id of the element that labels the collapsible content. Defaults to the anchor element.
Should provide this or ariaLabel but not both.`,type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:open",description:"Event fired to sync the open prop with the parent component",type:{names:["undefined"]}},{name:"opened",description:"Event fired when the content is shown or hidden",type:{names:["Boolean"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]}],slots:[{name:"anchor",scoped:!0,description:"Slot for the anchor element that toggles the collapsible content",bindings:[{name:"attrs",title:"binding"}]},{name:"content",description:"Slot for the collapsible element that is expanded by the anchor"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible.vue"]};const L={name:"DtCollapsibleDefaultStory",components:{DtCollapsible:h},data(){return{isOpen:this.open}},watch:{open(t){this.isOpen=t}}};var f=function(){var e=this,a=e._self._c;return a("dt-collapsible",{attrs:{id:e.id,"anchor-text":e.anchorText,"max-height":e.maxHeight,"max-width":e.maxWidth,open:e.isOpen,"initial-focus-element":"first","element-type":e.elementType,"content-element-type":e.contentElementType,"anchor-class":e.anchorClass,"content-class":e.contentClass,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledBy},scopedSlots:e._u([{key:"anchor",fn:function({attrs:v}){return e.anchor?[a("div",e._b({domProps:{innerHTML:e._s(e.anchor)}},"div",v,!1))]:void 0}}],null,!0)},[a("template",{slot:"content"},[e.content?a("div",{domProps:{innerHTML:e._s(e.content)}}):a("div",{staticClass:"d-ai-center d-fs-16"},[a("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ex risus. In id pellentesque tellus. In hac habitasse platea dictumst. Suspendisse nec egestas nulla. Nam fermentum nisi sit amet arcu fringilla, in porta libero volutpat. Proin ac odio egestas, luctus magna a, luctus leo. Maecenas eget orci vel nibh sollicitudin maximus quis at quam. Curabitur imperdiet lacus nec malesuada pharetra. Nullam leo mi, suscipit at arcu vitae, vestibulum rutrum eros. ")]),a("p",[e._v(" Mauris convallis, elit quis imperdiet aliquet, elit elit tincidunt dui, at tincidunt ligula metus ac tortor. Vestibulum vehicula, nibh pulvinar consequat faucibus, turpis metus tempus dui, eu facilisis risus risus at ipsum. Praesent feugiat nibh non ipsum facilisis, volutpat ullamcorper dui vehicula. Nunc mollis dui porta purus tristique aliquam sed at turpis. Phasellus in aliquet sem, sed consequat turpis. Suspendisse potenti. Aenean vitae leo quam. Fusce ipsum nulla, egestas at eros sit amet, consectetur consectetur turpis. Fusce sit amet tellus rutrum, sollicitudin ante porta, consequat dolor. Quisque ut nulla iaculis, eleifend neque in, euismod massa. Sed pulvinar erat nec interdum porttitor. Pellentesque interdum tincidunt nisl, nec finibus augue faucibus sit amet. Morbi vestibulum rhoncus tristique. Duis at vehicula nulla. Sed hendrerit est id lacus placerat cursus. Cras in lacus sit amet ligula ullamcorper vehicula vitae porttitor est. ")])])])],2)},q=[];f._withStripped=!0;var o=l(L,f,q,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_default.story.vue";const $=o.exports;o.exports.__docgenInfo={displayName:"DtCollapsibleDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/collapsible/collapsible_default.story.vue"]};const b={anchorText:"Click me to toggle Content"},O={anchor:{control:"text",table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}},anchorText:{description:"Text on the anchor if slot is unused.",table:{type:{summary:"string"}},control:{type:"text"}},id:{table:{defaultValue:{summary:"generated unique ID"}}},opened:{description:"Emitted whenever the content is collapsed or expanded.",table:{type:{summary:"event"}}},"update:open":{table:{disable:!0}}},V={title:"Components/Collapsible",component:h,argTypes:O,args:b,excludeStories:/.Data$/},E=(t,{argTypes:e})=>y(t,e,$),n={render:E,args:{maxWidth:"512px"}};var u,p,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    maxWidth: '512px'
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const F=["argsData","Default"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:F,argsData:b,default:V},Symbol.toStringTag,{value:"Module"}));export{H as C,n as D};
//# sourceMappingURL=collapsible.stories-62095f09.js.map
