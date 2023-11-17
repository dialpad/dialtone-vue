import{D as s,b as C,c as g,d as x,e as w,P as O,f as T}from"./popover-xcqjvT-t.js";import{D as v}from"./button-ux2tnS3y.js";import{g as P}from"./utils-QzhcKpbP.js";import{n as _}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as S}from"./dropdown_separator-V-l5IsDV.js";import{D}from"./list_item-avvYmJ7K.js";import{D as I}from"./tooltip-TcCHGaXG.js";import{D as V}from"./icon-pX31dgl5.js";import{c as h}from"./storybook_utils-XrTpeJKJ.js";import{a as L}from"./chunk-AY7I2SME-4UylTnhF.js";const N={name:"PopoverDefaultStory",components:{DtPopover:s,DtButton:v},data:function(){return{isOpen:this.$attrs.open}},computed:{uniqueKey(){return P()}},watch:{open:function(n){this.isOpen=n}}};var y=function(){var t=this,e=t._self._c;return e("dt-popover",{key:t.uniqueKey,attrs:{id:t.$attrs.id,open:t.isOpen,placement:t.$attrs.placement,"content-class":t.$attrs.contentClass,"fallback-placements":t.$attrs.fallbackPlacements,padding:t.$attrs.padding,"hide-on-click":t.$attrs.hideOnClick,role:t.$attrs.role,"element-type":t.$attrs.elementType,transition:t.$attrs.transition,"aria-labelledby":t.$attrs.ariaLabelledby,"aria-label":t.$attrs.ariaLabel,offset:t.$attrs.offset,modal:t.$attrs.modal,"initial-focus-element":t.$attrs.initialFocusElement,"content-width":t.$attrs.contentWidth,"show-close-button":t.$attrs.showCloseButton,"header-class":t.$attrs.headerClass,"footer-class":t.$attrs.footerClass,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,tether:t.$attrs.tether,sticky:t.$attrs.sticky,"open-with-arrow-keys":t.$attrs.openWithArrowKeys,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel,"append-to":t.$attrs.appendTo},on:{"update:open":function(o){t.isOpen=o},opened:t.$attrs.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Click to open ")])]}},{key:"content",fn:function({close:o}){return[e("div",[t.$attrs.content?e("span",{domProps:{innerHTML:t._s(t.$attrs.content)}}):[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{attrs:{id:"content-close"},on:{click:o}},[t._v(" Click to close ")])]],2)]}}])},[t.$attrs.headerContent?e("template",{slot:"headerContent"},[e("span",{domProps:{innerHTML:t._s(t.$attrs.headerContent)}})]):t._e(),t.$attrs.footerContent?e("template",{slot:"footerContent"},[e("span",{domProps:{innerHTML:t._s(t.$attrs.footerContent)}})]):t._e()],2)},E=[];y._withStripped=!0;var i=_(N,y,E,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_default.story.vue";const j=i.exports;i.exports.__docgenInfo={displayName:"PopoverDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_default.story.vue"]};const R={name:"PopoverVariantsStory",components:{DtPopover:s,DtButton:v,DtDropdown:S,DtTooltip:I,DtIcon:V,DtListItem:D},data(){return{openPopoverWithTriggerOverride:this.$attrs.open,sampleText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur delectus distinctio id iure labore,
            maiores mollitia reprehenderit sunt tempore veritatis.
            Aliquam delectus earum ex, expedita ipsam nobis
            obcaecati quibusdam repudiandae.`}},methods:{onMouseOver(){this.openPopoverWithTriggerOverride=!0},onMouseOut(){this.openPopoverWithTriggerOverride=!1}}};var b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-d-flex d-jc-space-between d-fw-wrap d-w100p d-flg12 d-fl-col2"},[e("dt-popover",{staticClass:"d-mb128",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,"hide-on-click":t.$attrs.hideOnClick,transition:t.$attrs.transition,"width-content":"anchor",placement:"bottom-start","initial-focus-element":"first"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" bottom-end placement ")])]}},{key:"content",fn:function({close:o}){return[e("div",[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)]}}])}),e("dt-popover",{staticClass:"d-mb128 d-jc-flex-end",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,"hide-on-click":t.$attrs.hideOnClick,transition:t.$attrs.transition,"width-content":"anchor","initial-focus-element":"first"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" bottom-start placement ")])]}},{key:"content",fn:function({close:o}){return[e("div",[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)]}}])}),e("dt-popover",{staticClass:"d-mb128",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,"hide-on-click":t.$attrs.hideOnClick,transition:t.$attrs.transition,padding:"none","width-content":"anchor","initial-focus-element":"first"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" No padding ")])]}},{key:"content",fn:function({close:o}){return[e("div",{staticClass:"d-fs-200 d-m0"},[e("div",[e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)])]}}])}),e("dt-popover",{staticClass:"d-jc-flex-end",attrs:{open:t.$attrs.open,modal:t.modal||!1,"hide-on-click":t.$attrs.hideOnClick,transition:t.$attrs.transition,"width-content":"anchor"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Non-Modal ")])]}},{key:"content",fn:function({close:o}){return[e("div",[e("p",{staticClass:"d-mb4"},[t._v(" I will be displayed in the popover! ")]),e("dt-button",{on:{click:o}},[t._v(" Click to close ")])],1)]}}])}),e("dt-popover",{staticClass:"d-mb128",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,"hide-on-click":t.$attrs.hideOnClick,transition:t.$attrs.transition,"show-close-button":!0,placement:"bottom-start","header-class":"d-d-flex d-ai-center d-jc-space-between","initial-focus-element":"first","max-height":"20rem","max-width":"50rem","close-button-props":{ariaLabel:"Close popover"}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-tooltip",{scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with header and anchor tooltip ")])]},proxy:!0}],null,!0)},[t._v(" This is a test tooltip ")])]}}])},[e("template",{slot:"headerContent"},[e("div",[t._v(" Potential Title ")]),e("div",[e("dt-button",{staticClass:"d-p6 d-bc-transparent",attrs:{circle:"",importance:"outlined"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"external-link",size:"300"}})],1)],2),e("dt-button",{staticClass:"d-p6 d-bc-transparent",attrs:{circle:"",importance:"outlined"}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"more-vertical",size:"300"}})],1)],2)],1)]),e("template",{slot:"content"},[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")])])])],2),e("dt-popover",{staticClass:"d-mb128 d-jc-flex-end",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,"hide-on-click":t.$attrs.hideOnClick,transition:t.$attrs.transition,"show-close-button":!0,"max-height":"20rem","max-width":"50rem","initial-focus-element":"first","close-button-props":{ariaLabel:"Close popover"}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with close ")])]}},{key:"content",fn:function(){return[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")])])]},proxy:!0}])}),e("dt-popover",{staticClass:"d-my128",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,transition:t.$attrs.transition,"hide-on-click":t.$attrs.hideOnClick,"max-height":"20rem","max-width":"50rem","initial-focus-element":"first","close-button-props":{ariaLabel:"Close popover"}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with footer ")])]}}])},[e("template",{slot:"footerContent"},[e("div",[t._v("This is a footer")])]),e("template",{slot:"content"},[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("p",[t._v(" "+t._s(t.sampleText)+" ")])])])],2),e("dt-popover",{staticClass:"d-my128 d-jc-flex-end",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,transition:t.$attrs.transition,"hide-on-click":t.$attrs.hideOnClick,"content-class":"d-pl12 d-pr16","initial-focus-element":"first","max-height":"15rem","max-width":"50rem"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with dropdown ")])]}},{key:"content",fn:function(){return[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("dt-dropdown",{attrs:{open:t.$attrs.open,"max-height":"13rem"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Open dropdown ")])]}},{key:"list",fn:function({close:o}){return[e("dt-list-item",{key:"pd-1",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 1 ")]),e("dt-list-item",{key:"pd-2",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 2 Item 2 Item 2 ")]),e("dt-list-item",{key:"pd-3",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 3 ")]),e("dt-list-item",{key:"pd-4",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 4 ")]),e("dt-list-item",{key:"pd-5",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 5 ")]),e("dt-list-item",{key:"pd-6",attrs:{"navigation-type":"arrow-keys",role:"menuitem"},on:{click:o}},[t._v(" Item 6 ")])]}}])})],1)]},proxy:!0}])}),e("dt-popover",{staticClass:"d-my128",attrs:{open:t.$attrs.open,modal:t.$attrs.modal,transition:t.$attrs.transition,"hide-on-click":t.$attrs.hideOnClick,"content-class":"d-pl12 d-pr16","initial-focus-element":"first","max-height":"20rem","max-width":"50rem"},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({},"dt-button",o,!1),[t._v(" Popover with tooltip ")])]}},{key:"content",fn:function(){return[e("div",{staticClass:"d-stack8"},[e("p",[t._v(" "+t._s(t.sampleText)+" ")]),e("dt-tooltip",{attrs:{show:t.$attrs.open},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",[t._v(" Hover me ")])]},proxy:!0}])},[t._v(" This is the tooltip content ")])],1)]},proxy:!0}])}),e("dt-popover",{staticClass:"d-my128 d-jc-flex-end",attrs:{modal:t.modal||!1,"hide-on-click":t.$attrs.hideOnClick,transition:t.$attrs.transition,"content-class":"d-pl12 d-pr16","max-height":"20rem","max-width":"50rem",open:t.openPopoverWithTriggerOverride},on:{"update:open":function(o){t.openPopoverWithTriggerOverride=o}},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({on:{mouseover:t.onMouseOver,mouseout:t.onMouseOut}},"dt-button",o,!1),[t._v(" Popover with mouseover trigger ")])]}},{key:"content",fn:function(){return[e("p",[t._v(" "+t._s(t.sampleText)+" ")])]},proxy:!0}])})],1)},W=[];b._withStripped=!0;var l=_(R,b,W,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_variants.story.vue";const F=l.exports;l.exports.__docgenInfo={displayName:"PopoverVariantsStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_variants.story.vue"]};const k={placement:"bottom-end",contentWidth:null,sticky:!1,offset:[0,4],appendTo:"body",onOpened:L("opened"),visuallyHiddenCloseLabel:"Close popover"},$={anchor:{table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}},headerContent:{name:"headerContent",description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footerContent:{name:"footerContent",description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},padding:{options:Object.keys(C),control:{type:"select"}},initialFocusElement:{options:[...Object.values(g),"#content-close"],control:{type:"select"}},role:{options:x,control:{type:"select"}},placement:{options:w,control:{type:"select"},table:{defaultValue:{summary:"bottom-end"}}},contentWidth:{options:O,control:{type:"select"}},sticky:{options:T,control:{type:"select"},table:{defaultValue:{summary:"false"}}},transition:{options:["","fade","pop","shake"],control:{type:"select"}},appendTo:{table:{defaultValue:{summary:"body"}}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},H={title:"Components/Popover",component:s,args:k,argTypes:$,excludeStories:/.Data$/},M=(n,{argTypes:t})=>h(n,t,j),q=(n,{argTypes:t})=>h(n,t,F),a={render:M,args:{},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h332"><story /></div>'})],parameters:{}},r={render:q,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}},percy:{args:{open:!0}}}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {},
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center d-h332"><story /></div>\`
  })],
  parameters: {}
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    },
    percy: {
      args: {
        open: true
      }
    }
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const A=["argsData","argTypesData","Default","Variants"],tt=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Variants:r,__namedExportsOrder:A,argTypesData:$,argsData:k,default:H},Symbol.toStringTag,{value:"Module"}));export{a as D,tt as P,r as V};
//# sourceMappingURL=popover.stories-jv_nOSc3.js.map
