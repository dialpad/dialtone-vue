import{a as s}from"./chunk-OPEUWD42-a3b45fd8.js";import{u as C,g as x,c as b}from"./storybook_utils-2a232650.js";import{D as k}from"./button-d61a4073.js";import{D as S,d as B,P as D}from"./popover-bd9e118c.js";import{D as r}from"./icon-80610cd9.js";import{D as T,C as h}from"./callbar_button-d2fe3ef1.js";import{n as l}from"./_plugin-vue2_normalizer-2bbd088e.js";const V={name:"DtRecipeCallbarButtonWithPopover",components:{DtRecipeCallbarButton:T,DtPopover:S,DtButton:k,DtIcon:r},inheritAttrs:!1,props:{id:{type:String,default(){return C.getUniqueString()}},ariaLabel:{type:String,default:null,validator:o=>o||globalThis.$slots.default},arrowButtonLabel:{type:String,required:!0,validator:o=>!!o},placement:{type:String,default:"top"},initialFocusElement:{type:String,default:"first"},showCloseButton:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},forceShowArrow:{type:Boolean,default:!1},active:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},buttonClass:{type:[String,Array,Object],default:""},textClass:{type:[String,Array,Object],default:""},buttonWidthSize:{type:String,default:"xl",validator:o=>h.includes(o)},contentClass:{type:[String,Array,Object],default:""}},emits:["arrowClick","click"],data(){return{open:!1}},computed:{showArrowButton(){return this.forceShowArrow||!this.disabled},isCompactMode(){return this.buttonWidthSize==="sm"||this.buttonWidthSize==="md"}},methods:{arrowClick(o){return this.$emit("arrowClick",o),this.open=!this.open},buttonClick(o){this.$listeners.click?this.$emit("click",o):this.arrowClick(o)},onModalIsOpened(o){this.open=o}}};var P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-d-flex d-ai-center"},[e("dt-recipe-callbar-button",{staticClass:"dt-recipe--callbar-button-with-popover--main-button",attrs:{"aria-label":t.ariaLabel,disabled:t.disabled,active:t.active,danger:t.danger,"button-class":t.buttonClass,"button-width-size":t.buttonWidthSize,"text-class":t.textClass},on:{click:t.buttonClick}},[t._t("icon",null,{slot:"icon"}),t._t("tooltip",null,{slot:"tooltip"}),t._t("default")],2),t.showArrowButton?e("dt-popover",t._b({staticClass:"dt-recipe--callbar-button-with-popover--popover-wrapper",attrs:{id:t.id,open:t.open,placement:t.placement,"initial-focus-element":t.initialFocusElement,"show-close-button":t.showCloseButton,offset:[0,16],padding:"none","dialog-class":["dt-recipe--callbar-button-with-popover--popover",t.contentClass],"header-class":"d-d-flex d-ai-center d-fw-normal d-px12"},on:{opened:t.onModalIsOpened},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{class:["dt-recipe--callbar-button-with-popover--arrow",{"d-mln24":!t.isCompactMode}],attrs:{circle:"",importance:"clear",size:"lg",width:"2rem","aria-label":t.arrowButtonLabel,active:t.open},on:{click:t.arrowClick},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"chevron-up",size:"200"}})]},proxy:!0}],null,!1,3340821372)})]},proxy:!0}],null,!1,384931042)},"dt-popover",t.$attrs,!1),[t._t("content",null,{slot:"content"}),t._t("headerContent",null,{slot:"headerContent"}),t._t("footerContent",null,{slot:"footerContent"})],2):t._e()],1)},I=[],y=l(V,P,I,!1,null,null,null,null);const i=y.exports;y.exports.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopover",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:`function() {
  return utils.getUniqueString();
}`}},{name:"ariaLabel",description:"Aria label for the button. If empty, it takes its value from the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"arrowButtonLabel",description:"Aria label for the arrow. Cannot be empty.",type:{name:"string"},required:!0},{name:"placement",description:"The direction the popover displays relative to the anchor.",tags:{default:[{description:"'top'",title:"default"}]},values:["'bottom'","'bottom-start'","'bottom-end'","'right'","'right-start'","'right-end'","'left'","'left-start'","'left-end'","'top'","'top-start'","'top-end'"],type:{name:"string"},defaultValue:{func:!1,value:"'top'"}},{name:"initialFocusElement",description:`The element that is focused when the popover is opened. This can be an
HTMLElement within the popover, a string starting with '#' which will
find the element by ID. 'first' which will automatically focus
the first element, or 'dialog' which will focus the dialog window itself.
If the dialog is modal this prop cannot be 'none'.`,type:{name:"string"},defaultValue:{func:!1,value:"'first'"}},{name:"showCloseButton",description:"Determines visibility for close button",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",description:`Determines whether the button should be disabled
default is false.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"forceShowArrow",description:`Forces showing the arrow, even if the button is disabled.
default is false`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:`Determines whether the button should have active styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:`Determines whether the button should have danger styling
default is false.`,tags:{see:[{description:"https://dialpad.design/components/button/",title:"see"}]},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"buttonClass",description:"Additional class name for the button wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"textClass",description:"Additional class name for the button text.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"buttonWidthSize",type:{name:"string"},defaultValue:{func:!1,value:"'xl'"},values:["sm","md","lg","xl"]},{name:"contentClass",description:"Additional class name for the popover content wrapper element.",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}}],events:[{name:"arrowClick",description:"Emitted when the arrow is clicked",type:{names:["undefined"]}},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}}],slots:[{name:"icon",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"tooltip",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"default"},{name:"content",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"headerContent",scoped:!0,bindings:[{name:"slot",title:"binding"}]},{name:"footerContent",scoped:!0,bindings:[{name:"slot",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover.vue"]};const A={name:"DtRecipeCallbarButtonWithPopoverDefault",components:{DtRecipeCallbarButtonWithPopover:i,DtIcon:r}};var O=function(){var t=this,e=t._self._c;return e("dt-recipe-callbar-button-with-popover",{attrs:{id:t.id,"aria-label":t.ariaLabel,"arrow-button-label":t.arrowButtonLabel,placement:t.placement,"initial-focus-element":t.initialFocusElement,"show-close-button":t.showCloseButton,disabled:t.disabled,"force-show-arrow":t.forceShowArrow,active:t.active,danger:t.danger,"button-class":t.buttonClass,"button-width-size":t.buttonWidthSize,"text-class":t.textClass,"content-class":t.contentClass},on:{"arrow-click":t.onClick,click:t.onClick},scopedSlots:t._u([{key:"content",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.content)}})]},proxy:!0},t.headerContent?{key:"headerContent",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.headerContent)}})]},proxy:!0}:null,t.footerContent?{key:"footerContent",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.footerContent)}})]},proxy:!0}:null],null,!0)},[t.defaultSlot?e("span",{domProps:{innerHTML:t._s(t.defaultSlot)}}):t._e(),t.icon?e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:t.icon}})],1):t._e(),t.tooltip?e("template",{slot:"tooltip"},[e("span",{domProps:{innerHTML:t._s(t.tooltip)}})]):t._e()],2)},L=[],v=l(A,O,L,!1,null,null,null,null);const W=v.exports;v.exports.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_default.story.vue"]};const R={name:"DtRecipeCallbarButtonWithPopoverVariants",components:{DtRecipeCallbarButtonWithPopover:i,DtIcon:r}};var z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-stack16"},[e("h3",[t._v(" Call Bar Buttons ")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap"},[e("dt-recipe-callbar-button-with-popover",{attrs:{"arrow-button-label":"Open popover"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip text ")]},proxy:!0},{key:"content",fn:function(){return[t._v(" Body ")]},proxy:!0},{key:"headerContent",fn:function(){return[t._v(" Header Content ")]},proxy:!0}])},[t._v(" Button ")]),e("dt-recipe-callbar-button-with-popover",{attrs:{"arrow-button-label":"Open popover","aria-label":"Icon only","button-width-size":"md"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Icon only ")]},proxy:!0},{key:"content",fn:function(){return[t._v(" Body ")]},proxy:!0},{key:"headerContent",fn:function(){return[t._v(" Header Content ")]},proxy:!0}])}),e("dt-recipe-callbar-button-with-popover",{attrs:{disabled:"","arrow-button-label":"Open popover"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0},{key:"content",fn:function(){return[t._v(" Body ")]},proxy:!0},{key:"headerContent",fn:function(){return[t._v(" Header Content ")]},proxy:!0}])},[t._v(" Disabled ")])],1),e("h3",[t._v(" Active Call Bar Buttons ")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap"},[e("dt-recipe-callbar-button-with-popover",{attrs:{active:"","arrow-button-label":"Open popover"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip text ")]},proxy:!0},{key:"content",fn:function(){return[t._v(" Body ")]},proxy:!0},{key:"headerContent",fn:function(){return[t._v(" Header Content ")]},proxy:!0}])},[t._v(" Button ")]),e("dt-recipe-callbar-button-with-popover",{attrs:{active:"","arrow-button-label":"Open popover","aria-label":"Icon only","button-width-size":"md"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Icon only ")]},proxy:!0},{key:"content",fn:function(){return[t._v(" Body ")]},proxy:!0},{key:"headerContent",fn:function(){return[t._v(" Header Content ")]},proxy:!0}])}),e("dt-recipe-callbar-button-with-popover",{attrs:{active:"",disabled:"","arrow-button-label":"Open popover"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0},{key:"content",fn:function(){return[t._v(" Body ")]},proxy:!0},{key:"headerContent",fn:function(){return[t._v(" Header Content ")]},proxy:!0}])},[t._v(" Disabled ")])],1)])},N=[],_=l(R,z,N,!1,null,null,null,null);const F=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeCallbarButtonWithPopoverVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button_with_popover/callbar_button_with_popover_variants.story.vue"]};const H=x(),w={buttonWidthSize:"xl",onArrowClick:s("arrowClick"),onClick:s("click")},g={default:{name:"default",description:"Slot default content. This will be the button label",control:"text",table:{category:"slots",type:{summary:"text/html"}}},icon:{name:"icon",description:"Slot for button icon",options:H,table:{category:"slots",type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},tooltip:{name:"tooltip",description:"Slot tooltip",control:"text",table:{category:"slots",type:{summary:"text/html"}}},active:{control:"boolean"},danger:{control:"boolean"},disabled:{control:"boolean"},buttonClass:{table:{type:{summary:["string","array","object"]}},control:"text"},buttonWidthSize:{options:h,control:{type:"select"}},textClass:{table:{type:{summary:["string","array","object"]}},control:"text"},contentClass:{table:{type:{summary:["string","array","object"]}},control:"text"},content:{description:"Slot for popover content",control:"text",table:{type:{summary:"VNode"}}},headerContent:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footerContent:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},arrowClick:{description:"Triggered when the arrow is clicked",table:{disable:!1,type:{summary:"event"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},initialFocusElement:{options:[...Object.values(B),"#content-close"],control:{type:"select"}},placement:{options:D,control:{type:"select"}},onArrowClick:{table:{disable:!0}},onClick:{table:{disable:!0}}},E={title:"Recipes/Buttons/Callbar Button With Popover",component:i,args:w,argTypes:g,excludeStories:/.*Data$/},$=(o,{argTypes:t})=>b(o,t,W),j=(o,{argTypes:t})=>b(o,t,F),n={render:$,args:{default:"Button",tooltip:"Tooltip Text",ariaLabel:"Button",arrowButtonLabel:"Open popover",content:"Popover body content",contentClass:["d-h464","d-w512"],headerContent:"Header content",showCloseButton:!0,forceShowArrow:!1,icon:"dialpad-ai"}},a={render:j,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,f,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const M=["argsData","argTypesData","Default","Variants"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:a,__namedExportsOrder:M,argTypesData:g,argsData:w,default:E},Symbol.toStringTag,{value:"Module"}));export{X as C,n as D,a as V};
//# sourceMappingURL=callbar_button_with_popover.stories-545366bb.js.map