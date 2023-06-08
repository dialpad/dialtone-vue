import{a as C}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as M,c as $}from"./storybook_utils-aefd525a.js";import{D as R}from"./button-6ea5d488.js";import{D as E,d as j,P as F}from"./popover-92335aed.js";import{D as f}from"./icon-6ea2a40b.js";import{a as i,f as h,d as n,w as t,b as V,m as x,k as L,o as b,l as d,n as q,z as U,g as s,s as o}from"./vue.esm-bundler-e62bdd6b.js";import{D as G,C as A}from"./callbar_button-f5253642.js";import{u as K}from"./utils-61960a91.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const O={name:"DtRecipeCallbarButtonWithPopover",components:{DtRecipeCallbarButton:G,DtPopover:E,DtButton:R,DtIcon:f},inheritAttrs:!1,props:{id:{type:String,default(){return K.getUniqueString()}},ariaLabel:{type:String,default:null,validator:e=>e||globalThis.$slots.default},arrowButtonLabel:{type:String,required:!0,validator:e=>!!e},placement:{type:String,default:"top"},initialFocusElement:{type:String,default:"first"},showCloseButton:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},forceShowArrow:{type:Boolean,default:!1},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},onClick:{type:Function,default:null},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:e=>A.includes(e)},contentClass:{type:[String,Array,Object],default:""}},emits:["arrowClick","click"],data(){return{open:!1}},computed:{showArrowButton(){return this.forceShowArrow||!this.disabled},isCompactMode(){return this.buttonWidthSize==="sm"||this.buttonWidthSize==="md"}},methods:{arrowClick(e){return this.$emit("arrowClick",e),this.open=!this.open},buttonClick(e){this.$props.onClick?this.$emit("click",e):this.arrowClick(e)},onModalIsOpened(e){this.open=e}}},Z={class:"d-d-flex d-ai-center"};function J(e,_,a,y,m,c){const r=i("dt-recipe-callbar-button"),l=i("dt-icon"),N=i("dt-button"),z=i("dt-popover");return b(),h("div",Z,[n(r,{"aria-label":a.ariaLabel,disabled:a.disabled,active:a.active,danger:a.danger,"button-class":a.buttonClass,"button-width-size":a.buttonWidthSize,"text-class":a.textClass,class:"dt-recipe--callbar-button-with-popover--main-button",onClick:c.buttonClick},{icon:t(()=>[d(e.$slots,"icon")]),tooltip:t(()=>[d(e.$slots,"tooltip")]),default:t(()=>[d(e.$slots,"default")]),_:3},8,["aria-label","disabled","active","danger","button-class","button-width-size","text-class","onClick"]),c.showArrowButton?(b(),V(z,x({key:0,id:a.id,open:m.open,placement:a.placement,"initial-focus-element":a.initialFocusElement,"show-close-button":a.showCloseButton,offset:[0,16],padding:"none",class:"dt-recipe--callbar-button-with-popover--popover-wrapper","dialog-class":["dt-recipe--callbar-button-with-popover--popover",a.contentClass],"header-class":"d-d-flex d-ai-center d-fw-normal d-px12"},e.$attrs,{onOpened:c.onModalIsOpened}),{anchor:t(()=>[n(N,{circle:"",importance:"clear",size:"lg",class:q(["dt-recipe--callbar-button-with-popover--arrow",{"d-mln24":!c.isCompactMode}]),width:"2rem","aria-label":a.arrowButtonLabel,active:m.open,onClick:c.arrowClick},{icon:t(()=>[n(l,{name:"chevron-up",size:"200"})]),_:1},8,["class","aria-label","active","onClick"])]),content:t(()=>[d(e.$slots,"content")]),headerContent:t(()=>[d(e.$slots,"headerContent")]),footerContent:t(()=>[d(e.$slots,"footerContent")]),_:3},16,["id","open","placement","initial-focus-element","show-close-button","dialog-class","onOpened"])):L("v-if",!0)])}const w=v(O,[["render",J],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue"]]);O.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopover",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
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
We're hacking it by adding an onClick prop: https://github.com/vuejs/core/issues/5220`,type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"contentClass",description:"Additional class name for the popover content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],events:[{name:"arrowClick",description:"Emitted when the arrow is clicked",type:{names:["undefined"]}},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"icon"},{name:"tooltip"},{name:"default"},{name:"content"},{name:"headerContent"},{name:"footerContent"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue"]};const I={name:"DtRecipeCallbarButtonWithPopoverDefault",components:{DtRecipeCallbarButtonWithPopover:w,DtIcon:f}},Q=["innerHTML"],X=["innerHTML"],Y=["innerHTML"],ee=["innerHTML"],te=["innerHTML"];function oe(e,_,a,y,m,c){const r=i("dt-icon"),l=i("dt-recipe-callbar-button-with-popover");return b(),V(l,{id:e.$attrs.id,"aria-label":e.$attrs.ariaLabel,"arrow-button-label":e.$attrs.arrowButtonLabel,placement:e.$attrs.placement,"initial-focus-element":e.$attrs.initialFocusElement,"show-close-button":e.$attrs.showCloseButton,disabled:e.$attrs.disabled,"force-show-arrow":e.$attrs.forceShowArrow,active:e.$attrs.active,danger:e.$attrs.danger,"button-class":e.$attrs.buttonClass,"button-width-size":e.$attrs.buttonWidthSize,"text-class":e.$attrs.textClass,"content-class":e.$attrs.contentClass,onArrowClick:e.$attrs.onClick,onClick:e.$attrs.onClick},U({content:t(()=>[s("span",{innerHTML:e.$attrs.content},null,8,Y)]),default:t(()=>[e.defaultSlot?(b(),h("span",{key:0,innerHTML:e.defaultSlot},null,8,Q)):L("v-if",!0)]),_:2},[e.$attrs.icon?{name:"icon",fn:t(()=>[n(r,{name:e.$attrs.icon},null,8,["name"])]),key:"0"}:void 0,e.$attrs.tooltip?{name:"tooltip",fn:t(()=>[s("span",{innerHTML:e.$attrs.tooltip},null,8,X)]),key:"1"}:void 0,e.$attrs.headerContent?{name:"headerContent",fn:t(()=>[s("span",{innerHTML:e.$attrs.headerContent},null,8,ee)]),key:"2"}:void 0,e.$attrs.footerContent?{name:"footerContent",fn:t(()=>[s("span",{innerHTML:e.$attrs.footerContent},null,8,te)]),key:"3"}:void 0]),1032,["id","aria-label","arrow-button-label","placement","initial-focus-element","show-close-button","disabled","force-show-arrow","active","danger","button-class","button-width-size","text-class","content-class","onArrowClick","onClick"])}const ne=v(I,[["render",oe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_default.story.vue"]]);I.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_default.story.vue"]};const P={name:"DtRecipeCallbarButtonWithPopoverVariants",components:{DtRecipeCallbarButtonWithPopover:w,DtIcon:f}},ae={class:"d-stack16"},re=s("h3",null," Call Bar Buttons ",-1),le={class:"d-d-flex d-flow16 d-fw-wrap"},ie=s("h3",null," Active Call Bar Buttons ",-1),se={class:"d-d-flex d-flow16 d-fw-wrap"};function ce(e,_,a,y,m,c){const r=i("dt-icon"),l=i("dt-recipe-callbar-button-with-popover");return b(),h("div",ae,[re,s("div",le,[n(l,{"arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"record"})]),tooltip:t(()=>[o(" Tooltip text ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Button ")]),_:1}),n(l,{"arrow-button-label":"Open popover","aria-label":"Icon only","button-width-size":"md"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Icon only ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),_:1}),n(l,{disabled:"","arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Tooltip ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Disabled ")]),_:1})]),ie,s("div",se,[n(l,{active:"","arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"record"})]),tooltip:t(()=>[o(" Tooltip text ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Button ")]),_:1}),n(l,{active:"","arrow-button-label":"Open popover","aria-label":"Icon only","button-width-size":"md"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Icon only ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),_:1}),n(l,{active:"",disabled:"","arrow-button-label":"Open popover"},{icon:t(()=>[n(r,{name:"mic"})]),tooltip:t(()=>[o(" Tooltip ")]),content:t(()=>[o(" Body ")]),headerContent:t(()=>[o(" Header Content ")]),default:t(()=>[o(" Disabled ")]),_:1})])])}const de=v(P,[["render",ce],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_variants.story.vue"]]);P.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopoverVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_variants.story.vue"]};const ue=M(),W={buttonWidthSize:"xl",onArrowClick:C("arrowClick"),onClick:C("click")},H={default:{name:"default",description:"Slot default content. This will be the button label",control:"text",table:{category:"slots",type:{summary:"text/html"}}},icon:{name:"icon",description:"Slot for button icon",options:ue,table:{category:"slots",type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},tooltip:{name:"tooltip",description:"Slot tooltip",control:"text",table:{category:"slots",type:{summary:"text/html"}}},active:{control:"boolean"},danger:{control:"boolean"},disabled:{control:"boolean"},buttonClass:{table:{type:{summary:["string","array","object"]}},control:"text"},buttonWidthSize:{options:A,control:{type:"select"}},textClass:{table:{type:{summary:["string","array","object"]}},control:"text"},contentClass:{table:{type:{summary:["string","array","object"]}},control:"text"},content:{description:"Slot for popover content",control:"text",table:{type:{summary:"VNode"}}},headerContent:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footerContent:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},arrowClick:{description:"Triggered when the arrow is clicked",table:{disable:!1,type:{summary:"event"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},initialFocusElement:{options:[...Object.values(j),"#content-close"],control:{type:"select"}},placement:{options:F,control:{type:"select"}},onArrowClick:{table:{disable:!0}},onClick:{table:{disable:!0}}},pe={title:"Recipes/Buttons/Callbar Button With Popover",component:w,args:W,argTypes:H,excludeStories:/.*Data$/},be=e=>$(e,ne),me=e=>$(e,de),u={render:be,args:{default:"Button",tooltip:"Tooltip Text",ariaLabel:"Button",arrowButtonLabel:"Open popover",content:"Popover body content",contentClass:["d-h464","d-w512"],headerContent:"Header content",showCloseButton:!0,forceShowArrow:!1,icon:"dialpad-ai"}},p={render:me,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var g,k,B;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    icon: 'dialpad-ai'
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var S,T,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const fe=["argsData","argTypesData","Default","Variants"],Se=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Variants:p,__namedExportsOrder:fe,argTypesData:H,argsData:W,default:pe},Symbol.toStringTag,{value:"Module"}));export{Se as C,u as D,p as V};
//# sourceMappingURL=callbar_button_with_popover.stories-67e6a094.js.map
