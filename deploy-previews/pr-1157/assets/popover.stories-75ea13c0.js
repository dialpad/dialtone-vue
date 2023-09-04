import{D as C,P as R,a as F,b as q,c as A,d as B,e as U}from"./popover-9ff5d22a.js";import{D as V}from"./button-3250ad24.js";import{g as z}from"./utils-dd7e0c5a.js";import{k as u,o as y,v as K,J as G,m as t,e as a,l as o,E as p,G as c,q as s,d as $,F as J,t as d,j as Y,p as Q}from"./vue.esm-bundler-6a14dfd3.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{D as X}from"./dropdown_separator-6e7acfbd.js";import{D as Z}from"./list_item-5d806be9.js";import{D as x}from"./tooltip-5e121aa6.js";import{D as ee}from"./icon-bd60410b.js";import{c as S}from"./storybook_utils-255cd4a4.js";import{a as te}from"./chunk-AY7I2SME-c7b6cf8a.js";const L={name:"PopoverDefaultStory",components:{DtPopover:C,DtButton:V},data:function(){return{isOpen:this.open}},computed:{uniqueKey(){return z()}},watch:{open:function(e){this.isOpen=e}}},oe=["innerHTML"],ne=a("p",{class:"d-mb4"}," I will be displayed in the popover! ",-1),ae=["innerHTML"],se=["innerHTML"];function re(e,f,j,H,i,b){const r=u("dt-button"),l=u("dt-popover");return y(),K(l,{id:e.$attrs.id,key:e.$attrs.uniqueKey,open:e.isOpen,"onUpdate:open":f[0]||(f[0]=m=>e.isOpen=m),placement:e.$attrs.placement,"content-class":e.$attrs.contentClass,"fallback-placements":e.$attrs.fallbackPlacements,padding:e.$attrs.padding,"hide-on-click":e.$attrs.hideOnClick,role:e.$attrs.role,"element-type":e.$attrs.elementType,transition:e.$attrs.transition,"aria-labelledby":e.$attrs.ariaLabelledby,"aria-label":e.$attrs.ariaLabel,offset:e.$attrs.offset,modal:e.$attrs.modal,"initial-focus-element":e.$attrs.initialFocusElement,"content-width":e.$attrs.contentWidth,"show-close-button":e.$attrs.showCloseButton,"header-class":e.$attrs.headerClass,"footer-class":e.$attrs.footerClass,"max-height":e.$attrs.maxHeight,"max-width":e.$attrs.maxWidth,tether:e.$attrs.tether,sticky:e.$attrs.sticky,"open-with-arrow-keys":e.$attrs.openWithArrowKeys,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"append-to":e.$attrs.appendTo,onOpened:e.$attrs.onOpened},G({anchor:t(({attrs:m})=>[o(r,p(c(m)),{default:t(()=>[s(" Click to open ")]),_:2},1040)]),content:t(({close:m})=>[a("div",null,[e.$attrs.content?(y(),$("span",{key:0,innerHTML:e.$attrs.content},null,8,oe)):(y(),$(J,{key:1},[ne,o(r,{id:"content-close",onClick:m},{default:t(()=>[s(" Click to close ")]),_:2},1032,["onClick"])],64))])]),_:2},[e.$attrs.headerContent?{name:"headerContent",fn:t(()=>[a("span",{innerHTML:e.$attrs.headerContent},null,8,ae)]),key:"0"}:void 0,e.$attrs.footerContent?{name:"footerContent",fn:t(()=>[a("span",{innerHTML:e.$attrs.footerContent},null,8,se)]),key:"1"}:void 0]),1032,["id","open","placement","content-class","fallback-placements","padding","hide-on-click","role","element-type","transition","aria-labelledby","aria-label","offset","modal","initial-focus-element","content-width","show-close-button","header-class","footer-class","max-height","max-width","tether","sticky","open-with-arrow-keys","visually-hidden-close","visually-hidden-close-label","append-to","onOpened"])}const ie=I(L,[["render",re],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_default.story.vue"]]);L.__docgenInfo={displayName:"PopoverDefaultStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_default.story.vue"]};const N={name:"PopoverVariantsStory",components:{DtPopover:C,DtButton:V,DtDropdown:X,DtTooltip:x,DtIcon:ee,DtListItem:Z},data(){return{openPopoverWithTriggerOverride:this.$attrs.open,sampleText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur delectus distinctio id iure labore,
            maiores mollitia reprehenderit sunt tempore veritatis.
            Aliquam delectus earum ex, expedita ipsam nobis
            obcaecati quibusdam repudiandae.`}},methods:{onMouseEnter(){this.openPopoverWithTriggerOverride=!0},onMouseLeave(){this.openPopoverWithTriggerOverride=!1}}},le={class:"d-d-flex d-jc-space-between d-fw-wrap d-w100p d-flg12 d-fl-col2"},de=a("p",{class:"d-mb4"}," I will be displayed in the popover! ",-1),pe=a("p",{class:"d-mb4"}," I will be displayed in the popover! ",-1),ce={class:"d-fs-200 d-m0"},me=a("p",{class:"d-mb4"}," I will be displayed in the popover! ",-1),ue=a("div",null," Potential Title ",-1),he={class:"d-stack8"},fe={class:"d-stack8"},ve=a("div",null,"This is a footer",-1),ke={class:"d-stack8"},ye={class:"d-stack8"},be={class:"d-stack8"};function $e(e,f,j,H,i,b){const r=u("dt-button"),l=u("dt-popover"),m=u("dt-tooltip"),g=u("dt-icon"),h=u("dt-list-item"),W=u("dt-dropdown");return y(),$("div",le,[o(l,{open:e.$attrs.open,modal:e.$attrs.modal,"hide-on-click":e.$attrs.hideOnClick,transition:e.$attrs.transition,"width-content":"anchor",placement:"bottom-start","initial-focus-element":"first",class:"d-mb128"},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" bottom-end placement ")]),_:2},1040)]),content:t(({close:n})=>[a("div",null,[de,o(r,{onClick:n},{default:t(()=>[s(" Click to close ")]),_:2},1032,["onClick"])])]),_:1},8,["open","modal","hide-on-click","transition"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal,"hide-on-click":e.$attrs.hideOnClick,transition:e.$attrs.transition,"width-content":"anchor","initial-focus-element":"first",class:"d-mb128 d-jc-flex-end"},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" bottom-start placement ")]),_:2},1040)]),content:t(({close:n})=>[a("div",null,[pe,o(r,{onClick:n},{default:t(()=>[s(" Click to close ")]),_:2},1032,["onClick"])])]),_:1},8,["open","modal","hide-on-click","transition"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal,"hide-on-click":e.$attrs.hideOnClick,transition:e.$attrs.transition,padding:"none","width-content":"anchor","initial-focus-element":"first",class:"d-mb128"},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" No padding ")]),_:2},1040)]),content:t(({close:n})=>[a("div",ce,[a("div",null,[o(r,{onClick:n},{default:t(()=>[s(" Click to close ")]),_:2},1032,["onClick"])])])]),_:1},8,["open","modal","hide-on-click","transition"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal||!1,"hide-on-click":e.$attrs.hideOnClick,transition:e.$attrs.transition,"width-content":"anchor",class:"d-jc-flex-end"},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" Non-Modal ")]),_:2},1040)]),content:t(({close:n})=>[a("div",null,[me,o(r,{onClick:n},{default:t(()=>[s(" Click to close ")]),_:2},1032,["onClick"])])]),_:1},8,["open","modal","hide-on-click","transition"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal,"hide-on-click":e.$attrs.hideOnClick,transition:e.$attrs.transition,class:"d-mb128","show-close-button":!0,placement:"bottom-start","header-class":"d-d-flex d-ai-center d-jc-space-between","initial-focus-element":"first","max-height":"20rem","max-width":"50rem","close-button-props":{ariaLabel:"Close popover"}},{anchor:t(({attrs:n})=>[o(m,null,{anchor:t(()=>[o(r,p(c(n)),{default:t(()=>[s(" Popover with header and anchor tooltip ")]),_:2},1040)]),default:t(()=>[s(" This is a test tooltip ")]),_:2},1024)]),headerContent:t(()=>[ue,a("div",null,[o(r,{circle:"",class:"d-p6 d-bc-transparent",importance:"outlined"},{icon:t(()=>[o(g,{name:"external-link",size:"300"})]),_:1}),o(r,{circle:"",class:"d-p6 d-bc-transparent",importance:"outlined"},{icon:t(()=>[o(g,{name:"more-vertical",size:"300"})]),_:1})])]),content:t(()=>[a("div",he,[a("p",null,d(i.sampleText),1),a("p",null,d(i.sampleText),1),a("p",null,d(i.sampleText),1)])]),_:1},8,["open","modal","hide-on-click","transition"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal,"hide-on-click":e.$attrs.hideOnClick,transition:e.$attrs.transition,class:"d-mb128 d-jc-flex-end","show-close-button":!0,"max-height":"20rem","max-width":"50rem","initial-focus-element":"first","close-button-props":{ariaLabel:"Close popover"}},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" Popover with close ")]),_:2},1040)]),content:t(()=>[a("div",fe,[a("p",null,d(i.sampleText),1),a("p",null,d(i.sampleText),1),a("p",null,d(i.sampleText),1)])]),_:1},8,["open","modal","hide-on-click","transition"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal,transition:e.$attrs.transition,"hide-on-click":e.$attrs.hideOnClick,class:"d-my128","max-height":"20rem","max-width":"50rem","initial-focus-element":"first","close-button-props":{ariaLabel:"Close popover"}},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" Popover with footer ")]),_:2},1040)]),footerContent:t(()=>[ve]),content:t(()=>[a("div",ke,[a("p",null,d(i.sampleText),1),a("p",null,d(i.sampleText),1),a("p",null,d(i.sampleText),1)])]),_:1},8,["open","modal","transition","hide-on-click"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal,transition:e.$attrs.transition,"hide-on-click":e.$attrs.hideOnClick,"content-class":"d-pl12 d-pr16","initial-focus-element":"first",class:"d-my128 d-jc-flex-end","max-height":"15rem","max-width":"50rem"},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" Popover with dropdown ")]),_:2},1040)]),content:t(()=>[a("div",ye,[a("p",null,d(i.sampleText),1),o(W,{open:e.$attrs.open,"max-height":"13rem"},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" Open dropdown ")]),_:2},1040)]),list:t(({close:n})=>[o(h,{key:"pd-1","navigation-type":"arrow-keys",role:"menuitem",onClick:n},{default:t(()=>[s(" Item 1 ")]),_:2},1032,["onClick"]),o(h,{key:"pd-2","navigation-type":"arrow-keys",role:"menuitem",onClick:n},{default:t(()=>[s(" Item 2 Item 2 Item 2 ")]),_:2},1032,["onClick"]),o(h,{key:"pd-3","navigation-type":"arrow-keys",role:"menuitem",onClick:n},{default:t(()=>[s(" Item 3 ")]),_:2},1032,["onClick"]),o(h,{key:"pd-4","navigation-type":"arrow-keys",role:"menuitem",onClick:n},{default:t(()=>[s(" Item 4 ")]),_:2},1032,["onClick"]),o(h,{key:"pd-5","navigation-type":"arrow-keys",role:"menuitem",onClick:n},{default:t(()=>[s(" Item 5 ")]),_:2},1032,["onClick"]),o(h,{key:"pd-6","navigation-type":"arrow-keys",role:"menuitem",onClick:n},{default:t(()=>[s(" Item 6 ")]),_:2},1032,["onClick"])]),_:1},8,["open"])])]),_:1},8,["open","modal","transition","hide-on-click"]),o(l,{open:e.$attrs.open,modal:e.$attrs.modal,transition:e.$attrs.transition,"hide-on-click":e.$attrs.hideOnClick,"content-class":"d-pl12 d-pr16",class:"d-my128","initial-focus-element":"first","max-height":"20rem","max-width":"50rem"},{anchor:t(({attrs:n})=>[o(r,p(c(n)),{default:t(()=>[s(" Popover with tooltip ")]),_:2},1040)]),content:t(()=>[a("div",be,[a("p",null,d(i.sampleText),1),o(m,{show:e.$attrs.open},{anchor:t(()=>[o(r,null,{default:t(()=>[s(" Hover me ")]),_:1})]),default:t(()=>[s(" This is the tooltip content ")]),_:1},8,["show"])])]),_:1},8,["open","modal","transition","hide-on-click"]),o(l,{open:i.openPopoverWithTriggerOverride,"onUpdate:open":f[0]||(f[0]=n=>i.openPopoverWithTriggerOverride=n),modal:e.$attrs.modal||!1,"hide-on-click":e.$attrs.hideOnClick,transition:e.$attrs.transition,"content-class":"d-pl12 d-pr16",class:"d-my128 d-jc-flex-end","max-height":"20rem","max-width":"50rem"},{anchor:t(({attrs:n})=>[Y(" eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events "),o(r,Q(n,{onMouseenter:b.onMouseEnter,onMouseleave:b.onMouseLeave}),{default:t(()=>[s(" Popover with mouseenter trigger ")]),_:2},1040,["onMouseenter","onMouseleave"])]),content:t(()=>[a("p",null,d(i.sampleText),1)]),_:1},8,["open","modal","hide-on-click","transition"])])}const Ce=I(N,[["render",$e],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_variants.story.vue"]]);N.__docgenInfo={displayName:"PopoverVariantsStory",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/popover/popover_variants.story.vue"]};const E={placement:"bottom-end",contentWidth:null,sticky:!1,offset:[0,4],appendTo:"body",onOpened:te("opened"),visuallyHiddenCloseLabel:"Close popover"},M={anchor:{table:{type:{summary:"VNode"}}},content:{control:"text",table:{type:{summary:"VNode"}}},headerContent:{name:"headerContent",description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footerContent:{name:"footerContent",description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},padding:{options:Object.keys(R),control:{type:"select"}},initialFocusElement:{options:[...Object.values(F),"#content-close"],control:{type:"select"}},role:{options:q,control:{type:"select"}},placement:{options:A,control:{type:"select"},table:{defaultValue:{summary:"bottom-end"}}},contentWidth:{options:B,control:{type:"select"}},sticky:{options:U,control:{type:"select"},table:{defaultValue:{summary:"false"}}},transition:{options:["","fade","pop","shake"],control:{type:"select"}},appendTo:{table:{defaultValue:{summary:"body"}}},onOpened:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when popover is shown or hidden.",table:{type:{summary:"event"}}}},ge={title:"Components/Popover",component:C,args:E,argTypes:M,excludeStories:/.Data$/},we=e=>S(e,ie),_e=e=>S(e,Ce),v={render:we,args:{},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h332"><story /></div>'})],parameters:{}},k={render:_e,args:{},parameters:{options:{showPanel:!1},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}},percy:{args:{open:!0}}}};var w,_,T;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {},
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center d-h332"><story /></div>\`
  })],
  parameters: {}
}`,...(T=(_=v.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var O,P,D;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(P=k.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const Te=["argsData","argTypesData","Default","Variants"],He=Object.freeze(Object.defineProperty({__proto__:null,Default:v,Variants:k,__namedExportsOrder:Te,argTypesData:M,argsData:E,default:ge},Symbol.toStringTag,{value:"Module"}));export{v as D,He as P,k as V};
//# sourceMappingURL=popover.stories-75ea13c0.js.map
