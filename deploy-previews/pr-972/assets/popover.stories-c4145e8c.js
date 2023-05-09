import{D as s,c as g,d as x,e as w,P as O,a as T,f as P}from"./popover-d2f2e292.js";import{D as v}from"./button-45d71d86.js";import{g as S}from"./utils-7a4c8be8.js";import{n as _}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D}from"./dropdown_separator-9af65d61.js";import{D as I}from"./list_item-d35ac9da.js";import{D as V}from"./tooltip-ce055ca7.js";import{D as L}from"./icon-8710e0b7.js";import{c as h}from"./storybook_utils-1ca8d93f.js";import{a as N}from"./chunk-OPEUWD42-a3b45fd8.js";const E={name:"PopoverDefaultStory",components:{DtPopover:s,DtButton:v},data:function(){return{isOpen:this.open}},computed:{uniqueKey(){return S()}},watch:{open:function(n){this.isOpen=n}}};var y=function(){var t=this,e=t._self._c;return e("dt-popover",{key:t.uniqueKey,attrs:{id:t.id,open:t.isOpen,placement:t.placement,"content-class":t.contentClass,"fallback-placements":t.fallbackPlacements,padding:t.padding,"hide-on-click":t.hideOnClick,role:t.role,"element-type":t.elementType,transition:t.transition,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,offset:t.offset,modal:t.modal,"initial-focus-element":t.initialFocusElement,"content-width":t.contentWidth,"show-close-button":t.showCloseButton,"header-class":t.headerClass,"footer-class":t.footerClass,"max-height":t.maxHeight,"max-width":t.maxWidth,tether:t.tether,sticky:t.sticky,"open-with-arrow-keys":t.openWithArrowKeys,"visually-hidden-close":t.visuallyHiddenClose,"visually-hidden-close-label":t.visuallyHiddenCloseLabel,"append-to":t.appendTo},on:{"update:open":function(o){t.isOpen=o},opened:t.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Click to open ")])]}},{key:"content",fn:function({close:o}){return[e("div",[t.content?e("span",{domProps:{innerHTML:t._s(t.content)}}):[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{attrs:{id:"content-close"},on:{click:o}},[t._v(" Click to close ")])]],2)]}}])},[t.headerContent?e("template",{slot:"headerContent"},[e("span",{domProps:{innerHTML:t._s(t.headerContent)}})]):t._e(),t.footerContent?e("template",{slot:"footerContent"},[e("span",{domProps:{innerHTML:t._s(t.footerContent)}})]):t._e()],2)},j=[];y._withStripped=!0;var i=_(E,y,j,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_default.story.vue";const R=i.exports;i.exports.__docgenInfo={displayName:"PopoverDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_default.story.vue"]};const W={name:"PopoverVariantsStory",components:{DtPopover:s,DtButton:v,DtDropdown:D,DtTooltip:V,DtIcon:L,DtListItem:I},data(){return{openPopoverWithTriggerOverride:this.open,sampleText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur delectus distinctio id iure labore,
            maiores mollitia reprehenderit sunt tempore veritatis.
            Aliquam delectus earum ex, expedita ipsam nobis
            obcaecati quibusdam repudiandae.`}},methods:{onMouseOver(){this.openPopoverWithTriggerOverride=!0},onMouseOut(){this.openPopoverWithTriggerOverride=!1}}};var b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-d-flex d-jc-space-between d-fw-wrap d-w100p d-flg12 d-fl-col2"},[e("dt-popover",{staticClass:"d-mb128",attrs:{open:t.open,modal:t.modal,"hide-on-click":t.hideOnClick,transition:t.transition,"width-content":"anchor",placement:"bottom-start","initial-focus-element":"first"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" bottom-end placement ")])]}},{key:"content",fn:function({close:o}){return[e("div",[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)]}}])}),e("dt-popover",{staticClass:"d-mb128 d-jc-flex-end",attrs:{open:t.open,modal:t.modal,"hide-on-click":t.hideOnClick,transition:t.transition,"width-content":"anchor","initial-focus-element":"first"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" bottom-start placement ")])]}},{key:"content",fn:function({close:o}){return[e("div",[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)]}}])}),e("dt-popover",{staticClass:"d-mb128",attrs:{open:t.open,modal:t.modal,"hide-on-click":t.hideOnClick,transition:t.transition,padding:"none","width-content":"anchor","initial-focus-element":"first"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" No padding ")])]}},{key:"content",fn:function({close:o}){return[e("div",{staticClass:"d-fs-200 d-m0"},[e("div",[e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)])]}}])}),e("dt-popover",{staticClass:"d-jc-flex-end",attrs:{open:t.open,modal:t.modal||!1,"hide-on-click":t.hideOnClick,transition:t.transition,"width-content":"anchor"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Non-Modal ")])]}},{key:"content",fn:function({close:o}){return[e("div",[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)]}}])}),e("dt-popover",{staticClass:"d-mb128",attrs:{open:t.open,modal:t.modal,"hide-on-click":t.hideOnClick,transition:t.transition,"show-close-button":!0,placement:"bottom-start","header-class":"d-d-flex d-ai-center d-jc-space-between","initial-focus-element":"first","max-height":"20rem","max-width":"50rem","close-button-props":{ariaLabel:"Close popover"}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-tooltip",{scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with header and anchor tooltip ")])]},proxy:!0}],null,!0)},[t._v(" This is a test tooltip ")])]}}])},[e("template",{slot:"headerContent"},[e("div",[t._v(" Potential Title ")]),e("div",[e("dt-button",{staticClass:"d-p6 d-bc-transparent",attrs:{circle:"",importance:"outlined"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"external-link",size:"300"}})],1)],2),e("dt-button",{staticClass:"d-p6 d-bc-transparent",attrs:{circle:"",importance:"outlined"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"more-vertical",size:"300"}})],1)],2)],1)]),e("template",{slot:"content"},[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")])])])],2),e("dt-popover",{staticClass:"d-mb128 d-jc-flex-end",attrs:{open:t.open,modal:t.modal,"hide-on-click":t.hideOnClick,transition:t.transition,"show-close-button":!0,"max-height":"20rem","max-width":"50rem","initial-focus-element":"first","close-button-props":{ariaLabel:"Close popover"}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with close ")])]}},{key:"content",fn:function(){return[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")])])]},proxy:!0}])}),e("dt-popover",{staticClass:"d-my128",attrs:{open:t.open,modal:t.modal,transition:t.transition,"hide-on-click":t.hideOnClick,"max-height":"20rem","max-width":"50rem","initial-focus-element":"first","close-button-props":{ariaLabel:"Close popover"}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with footer ")])]}}])},[e("template",{slot:"footerContent"},[e("div",[t._v("This is a footer")])]),e("template",{slot:"content"},[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")])])])],2),e("dt-popover",{staticClass:"d-my128 d-jc-flex-end",attrs:{open:t.open,modal:t.modal,transition:t.transition,"hide-on-click":t.hideOnClick,"content-class":"d-pl12 d-pr16","initial-focus-element":"first","max-height":"15rem","max-width":"50rem"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with dropdown ")])]}},{key:"content",fn:function(){return[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("dt-dropdown",{attrs:{open:t.open,"max-height":"13rem"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Open dropdown ")])]}},{key:"list",fn:function({close:o}){return[e("dt-list-item",{key:"pd-1",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 1 ")]),e("dt-list-item",{key:"pd-2",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 2 Item 2 Item 2 ")]),e("dt-list-item",{key:"pd-3",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 3 ")]),e("dt-list-item",{key:"pd-4",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 4 ")]),e("dt-list-item",{key:"pd-5",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 5 ")]),e("dt-list-item",{key:"pd-6",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 6 ")])]}}])})],1)]},proxy:!0}])}),e("dt-popover",{staticClass:"d-my128",attrs:{open:t.open,modal:t.modal,transition:t.transition,"hide-on-click":t.hideOnClick,"content-class":"d-pl12 d-pr16","initial-focus-element":"first","max-height":"20rem","max-width":"50rem"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with tooltip ")])]}},{key:"content",fn:function(){return[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("dt-tooltip",{attrs:{show:t.open},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",[t._v(" Hover me ")])]},proxy:!0}])},[t._v(" This is the tooltip content ")])],1)]},proxy:!0}])}),e("dt-popover",{staticClass:"d-my128 d-jc-flex-end",attrs:{modal:t.modal||!1,"hide-on-click":t.hideOnClick,transition:t.transition,"content-class":"d-pl12 d-pr16","max-height":"20rem","max-width":"50rem",open:t.openPopoverWithTriggerOverride},on:{"update:open":function(o){t.openPopoverWithTriggerOverride=o}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({on:{mouseover:t.onMouseOver,mouseout:t.onMouseOut}},"dt-button",o,!1),[t._v(" Popover with mouseover trigger ")])]}},{key:"content",fn:function(){return[e("p",[t._v(" "+t._s(t.sampleText)+" ")])]},proxy:!0}])})],1)},F=[];b._withStripped=!0;var l=_(W,b,F,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_variants.story.vue";const H=l.exports;l.exports.__docgenInfo={displayName:"PopoverVariantsStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_variants.story.vue"]};const k={placement:"bottom-end",contentWidth:null,sticky:!1,offset:[0,4],appendTo:"body",onOpened:N("opened"),visuallyHiddenCloseLabel:"Close popover"},C={anchor:{table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}},headerContent:{name:"headerContent",description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footerContent:{name:"footerContent",description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},padding:{options:Object.keys(g),control:{type:"select"}},initialFocusElement:{options:[...Object.values(x),"#content-close"],control:{type:"select"}},role:{options:w,control:{type:"select"}},placement:{options:O,control:{type:"select"},table:{defaultValue:{summary:"bottom-end"}}},contentWidth:{options:T,control:{type:"select"}},sticky:{options:P,control:{type:"select"},table:{defaultValue:{summary:"false"}}},transition:{options:["","fade","pop","shake"],control:{type:"select"}},appendTo:{table:{defaultValue:{summary:"body"}}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},M={title:"Components/Popover",component:s,args:k,argTypes:C,excludeStories:/.Data$/},q=(n,{argTypes:t})=>h(n,t,R),A=(n,{argTypes:t})=>h(n,t,H),a={render:q,args:{},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h332"><story /></div>'})],parameters:{}},r={render:A,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {},
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center d-h332"><story /></div>\`
  })],
  parameters: {}
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: TemplateVariants,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    a11y: {
      config: {
        rules: [{
          id: 'aria-allowed-attr',
          enabled: false
        }]
      }
    }
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const $=["argsData","argTypesData","Default","Variants"],tt=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:r,__namedExportsOrder:$,argTypesData:C,argsData:k,default:M},Symbol.toStringTag,{value:"Module"}));export{a as D,tt as P,r as V,k as a,C as b};
//# sourceMappingURL=popover.stories-c4145e8c.js.map
