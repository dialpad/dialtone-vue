import{a as b}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as E,c as $}from"./storybook_utils-521815dd.js";import{D as M}from"./button-47493803.js";import{D as R,d as j,P as F}from"./popover-2bba58d1.js";import{D as h}from"./icon-0d2949f0.js";import{f as v,d as n,w as t,b as V,m as x,k as P,a as i,o as m,j as d,n as q,y as U,g as c,q as o}from"./vue.esm-bundler-66d1e5de.js";import{D as G,C as O}from"./callbar_button-5111f02f.js";import{u as K}from"./utils-8eac0b7f.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const L={name:"DtRecipeCallbarButtonWithPopover",components:{DtRecipeCallbarButton:G,DtPopover:R,DtButton:M,DtIcon:h},inheritAttrs:!1,props:{id:{type:String,default(){return K.getUniqueString()}},ariaLabel:{type:String,default:null,validator:e=>e||globalThis.$slots.default},arrowButtonLabel:{type:String,required:!0,validator:e=>!!e},placement:{type:String,default:"top"},initialFocusElement:{type:String,default:"first"},showCloseButton:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},forceShowArrow:{type:Boolean,default:!1},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},onClick:{type:Function,default:null},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:e=>O.includes(e)},contentClass:{type:[String,Array,Object],default:""},openPopover:{type:Boolean,default:!1}},emits:["arrowClick","click","opened"],data(){return{open:!1}},computed:{showArrowButton(){return this.forceShowArrow||!this.disabled},isCompactMode(){return this.buttonWidthSize==="sm"||this.buttonWidthSize==="md"},showPopover(){return!this.openPopover||this.open?!1:this.arrowClick()}},methods:{arrowClick(e){return this.$emit("arrowClick",e),this.open=!this.open},buttonClick(e){this.$props.onClick?this.$emit("click",e):this.arrowClick(e)},onModalIsOpened(e){this.open=e,this.$emit("opened",e)}}},Z={class:"d-d-flex d-ai-center"};function J(e,C,a,_,f,s){const r=i("dt-recipe-callbar-button"),l=i("dt-icon"),N=i("dt-button"),z=i("dt-popover");return m(),v("div",Z,[n(r,{"aria-label":a.ariaLabel,disabled:a.disabled,active:a.active,danger:a.danger,"button-class":a.buttonClass,"button-width-size":a.buttonWidthSize,"text-class":a.textClass,class:"dt-recipe--callbar-button-with-popover--main-button",onClick:s.buttonClick},{icon:t(()=>[d(e.$slots,"icon")]),tooltip:t(()=>[d(e.$slots,"tooltip")]),default:t(()=>[d(e.$slots,"default")]),_:3},8,["aria-label","disabled","active","danger","button-class","button-width-size","text-class","onClick"]),s.showArrowButton?(m(),V(z,x({key:0,id:a.id,open:f.open,placement:a.placement,"initial-focus-element":a.initialFocusElement,"show-close-button":a.showCloseButton,offset:[0,16],padding:"none",class:"dt-recipe--callbar-button-with-popover--popover-wrapper","dialog-class":["dt-recipe--callbar-button-with-popover--popover",a.contentClass],"header-class":"d-d-flex d-ai-center d-fw-normal d-px12"},e.$attrs,{"open-popover":s.showPopover,onOpened:s.onModalIsOpened}),{anchor:t(()=>[n(N,{circle:"",importance:"clear",size:"lg",class:q(["dt-recipe--callbar-button-with-popover--arrow",{"d-mln24":!s.isCompactMode}]),width:"2rem","aria-label":a.arrowButtonLabel,active:f.open,onClick:s.arrowClick},{icon:t(()=>[n(l,{name:"chevron-up",class:"d-fc-black-800",size:"200"})]),_:1},8,["class","aria-label","active","onClick"])]),content:t(()=>[d(e.$slots,"content")]),headerContent:t(()=>[d(e.$slots,"headerContent")]),footerContent:t(()=>[d(e.$slots,"footerContent")]),_:3},16,["id","open","placement","initial-focus-element","show-close-button","dialog-class","open-popover","onOpened"])):P("",!0)])}const y=w(L,[["render",J]]);L.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopover",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return utils.getUniqueString();
}`}},{name:"ariaLabel",description:"Aria label for the button. If empty, it takes its value from the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"arrowButtonLabel",description:"Aria label for the arrow. Cannot be empty.",type:{name:"string"},required:!0},{name:"placement",description:"The direction the popover displays relative to the anchor.",tags:{default:[{description:"'top'",title:"default"}]},values:["'bottom'","'bottom-start'","'bottom-end'","'right'","'right-start'","'right-end'","'left'","'left-start'","'left-end'","'top'","'top-start'","'top-end'"],type:{name:"string"},defaultValue:{func:!1,value:"'top'"}},{name:"initialFocusElement",description:`The element that is focused when the popover is opened. This can be an
HTMLElement within the popover, a string starting with '#' which will
find the element by ID. 'first' which will automatically focus
the first element, or 'dialog' which will focus the dialog window itself.
If the dialog is modal this prop cannot be 'none'.`,type:{name:"string"},defaultValue:{func:!1,value:"'first'"}},{name:"showCloseButton",description:"Determines visibility for close button",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",description:`Determines whether the button should be disabled
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"forceShowArrow",description:`Forces showing the arrow, even if the button is disabled.
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:`Determines whether the button should have danger styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",description:`We need this declaration because of how Vue3 informs the component about a listener.
Spoiler alert: it doesn't.
Vue3 intends to work as a real pub-sub, meaning the publisher has not a clue of who the subscribers are.
This makes it impossible from the regular declaration (emits: ['click']) to check whether
we actually have a click handler or not.
We're hacking it by adding an onClick prop: https://github.com/vuejs/core/issues/5220`,type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"contentClass",description:"Additional class name for the popover content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"openPopover",description:"To auto open the modal popover.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"arrowClick",description:"Emitted when the arrow is clicked",type:{names:["undefined"]}},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"opened",description:"Emitted when modal popover is opened or closed.",type:{names:["undefined"]}}],slots:[{name:"icon"},{name:"tooltip"},{name:"default"},{name:"content"},{name:"headerContent"},{name:"footerContent"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue"]};const A={name:"DtRecipeCallbarButtonWithPopoverDefault",components:{DtRecipeCallbarButtonWithPopover:y,DtIcon:h}},Q=["innerHTML"],X=["innerHTML"],Y=["innerHTML"],ee=["innerHTML"],te=["innerHTML"];function oe(e,C,a,_,f,s){const r=i("dt-icon"),l=i("dt-recipe-callbar-button-with-popover");return m(),V(l,{id:e.$attrs.id,"aria-label":e.$attrs.ariaLabel,"arrow-button-label":e.$attrs.arrowButtonLabel,placement:e.$attrs.placement,"initial-focus-element":e.$attrs.initialFocusElement,"show-close-button":e.$attrs.showCloseButton,disabled:e.$attrs.disabled,"force-show-arrow":e.$attrs.forceShowArrow,active:e.$attrs.active,danger:e.$attrs.danger,"button-class":e.$attrs.buttonClass,"button-width-size":e.$attrs.buttonWidthSize,"text-class":e.$attrs.textClass,"content-class":e.$attrs.contentClass,"open-popover":e.$attrs.openPopover,onArrowClick:e.$attrs.onClick,onClick:e.$attrs.onClick,onOpened:e.$attrs.onOpened},U({content:t(()=>[c("span",{innerHTML:e.$attrs.content},null,8,Y)]),default:t(()=>[e.defaultSlot?(m(),v("span",{key:0,innerHTML:e.defaultSlot},null,8,Q)):P("",!0)]),_:2},[e.$attrs.icon?{name:"icon",fn:t(()=>[n(r,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.tooltip?{name:"tooltip",fn:t(()=>[c("span",{innerHTML:e.$attrs.tooltip},null,8,X)]),key:"1"}:void 0,e.$attrs.headerContent?{name:"headerContent",fn:t(()=>[c("span",{innerHTML:e.$attrs.headerContent},null,8,ee)]),key:"2"}:void 0,e.$attrs.footerContent?{name:"footerContent",fn:t(()=>[c("span",{innerHTML:e.$attrs.footerContent},null,8,te)]),key:"3"}:void 0]),1032,["id","aria-label","arrow-button-label","placement","initial-focus-element","show-close-button","disabled","force-show-arrow","active","danger","button-class","button-width-size","text-class","content-class","open-popover","onArrowClick","onClick","onOpened"])}const ne=w(A,[["render",oe]]);A.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_default.story.vue"]};const I={name:"DtRecipeCallbarButtonWithPopoverVariants",components:{DtRecipeCallbarButtonWithPopover:y,DtIcon:h}},ae={class:"d-stack16"},re=c("h3",null," Call Bar Buttons ",-1),le={class:"d-d-flex d-flow16 d-fw-wrap"},se=c("h3",null," Active Call Bar Buttons ",-1),ie={class:"d-d-flex d-flow16 d-fw-wrap"};function ce(e,C,a,_,f,s){const r=i("dt-icon"),l=i("dt-recipe-callbar-button-with-popover");return m(),v("div",ae,[re,c("div",le,[n(l,{"arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"record"})]),tooltip:t(()=>[o(" Tooltip text ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Button ")]),_:1}),n(l,{"arrow-button-label":"Open popover","aria-label":"Icon only","button-width-size":"md"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Icon only ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),_:1}),n(l,{disabled:"","arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Tooltip ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Disabled ")]),_:1})]),se,c("div",ie,[n(l,{active:"","arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"record"})]),tooltip:t(()=>[o(" Tooltip text ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Button ")]),_:1}),n(l,{active:"","arrow-button-label":"Open popover","aria-label":"Icon only","button-width-size":"md"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Icon only ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),_:1}),n(l,{active:"",disabled:"","arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Tooltip ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Disabled ")]),_:1})])])}const de=w(I,[["render",ce]]);I.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopoverVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_variants.story.vue"]};const pe=E(),W={buttonWidthSize:"xl",openPopover:!1,onArrowClick:b("arrowClick"),onClick:b("click"),onOpened:b("opened")},H={default:{name:"default",description:"Slot default content. This will be the button label",control:"text",table:{category:"slots",type:{summary:"text/html"}}},icon:{name:"icon",description:"Slot for button icon",options:pe,table:{category:"slots",type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},tooltip:{name:"tooltip",description:"Slot tooltip",control:"text",table:{category:"slots",type:{summary:"text/html"}}},active:{control:"boolean"},danger:{control:"boolean"},disabled:{control:"boolean"},buttonClass:{table:{type:{summary:["string","array","object"]}},control:"text"},buttonWidthSize:{options:O,control:{type:"select"}},textClass:{table:{type:{summary:["string","array","object"]}},control:"text"},contentClass:{table:{type:{summary:["string","array","object"]}},control:"text"},openPopover:{control:"boolean"},content:{description:"Slot for popover content",control:"text",table:{type:{summary:"VNode"}}},headerContent:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footerContent:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},arrowClick:{description:"Triggered when the arrow is clicked",table:{disable:!1,type:{summary:"event"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}},opened:{table:{disable:!1,type:{summary:"event"}}},onOpened:{table:{disable:!0}},id:{table:{defaultValue:{summary:"generated unique ID"}}},initialFocusElement:{options:[...Object.values(j),"#content-close"],control:{type:"select"}},placement:{options:F,control:{type:"select"}}},ue={title:"Recipes/Buttons/Callbar Button With Popover",component:y,args:W,argTypes:H,excludeStories:/.*Data$/},me=e=>$(e,ne),fe=e=>$(e,de),p={render:me,args:{default:"Button",tooltip:"Tooltip Text",ariaLabel:"Button",arrowButtonLabel:"Open popover",content:"Popover body content",contentClass:["d-h464","d-w512"],headerContent:"Header content",showCloseButton:!0,forceShowArrow:!1,openPopover:!1,icon:"dialpad-ai"}},u={render:fe,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var g,k,B;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Button',
    tooltip: 'Tooltip Text',
    ariaLabel: 'Button',
    arrowButtonLabel: 'Open popover',
    content: 'Popover body content',
    contentClass: ['d-h464', 'd-w512'],
    headerContent: 'Header content',
    showCloseButton: true,
    forceShowArrow: false,
    openPopover: false,
    icon: 'dialpad-ai'
  }
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var S,T,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const be=["argsData","argTypesData","Default","Variants"],Se=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Variants:u,__namedExportsOrder:be,argTypesData:H,argsData:W,default:ue},Symbol.toStringTag,{value:"Module"}));export{Se as C,p as D,u as V};
//# sourceMappingURL=callbar_button_with_popover.stories-82dbd2f7.js.map
