import{D as H}from"./button-5wqdSkdq.js";import{D as W}from"./icon-GkF47-VR.js";import{M as K}from"./modal-g8UESVSL.js";import{g as R,E as c}from"./utils-E69eXbJV.js";import{D as U}from"./lazy_show-qFWx7ZlG.js";import{a as Z,S as Y}from"./sr_only_close_button-nb9fjC62.js";import{N as L}from"./notice-U1f5tNf2.js";import{n as j}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{c as G}from"./storybook_utils-XrTpeJKJ.js";import{a as J}from"./chunk-AY7I2SME-4UylTnhF.js";const m={default:"",danger:"d-modal--danger"},p={default:"",full:"d-modal--full"},h={error:"d-modal__banner--critical",info:"d-modal__banner--info",success:"d-modal__banner--success",warning:"d-modal__banner--warning",base:"d-modal__banner--general"},Q={name:"DtModal",components:{DtLazyShow:U,DtButton:H,DtIcon:W,SrOnlyCloseButton:Z},mixins:[K,Y],props:{closeButtonProps:{type:Object,required:!0,validator:t=>!!t.ariaLabel},copy:{type:String,default:""},describedById:{type:String,default:""},labelledById:{type:String,default:function(){return R()}},show:{type:Boolean,default:!1},title:{type:String,default:""},bannerTitle:{type:String,default:""},kind:{type:String,default:"default",validator:t=>Object.keys(m).includes(t)},size:{type:String,default:"default",validator:t=>Object.keys(p).includes(t)},modalClass:{type:[String,Object,Array],default:""},dialogClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},bannerKind:{type:String,default:"warning",validate(t){return L.includes(t)}},bannerClass:{type:[String,Object,Array],default:""},hideClose:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},fixedHeaderFooter:{type:Boolean,default:!0},initialFocusElement:{type:[String,HTMLElement],default:"first",validator:t=>t==="first"||t instanceof HTMLElement||t.startsWith("#")}},emits:["update:show"],data(){return{MODAL_KIND_MODIFIERS:m,MODAL_SIZE_MODIFIERS:p,MODAL_BANNER_KINDS:h,EVENT_KEYNAMES:c}},computed:{modalListeners(){return{...this.$listeners,click:t=>{this.closeOnClick&&(t.target===t.currentTarget&&this.close(),this.$emit("click",t))},keydown:t=>{switch(t.code){case c.esc:case c.escape:this.close();break;case c.tab:this.trapFocus(t);break}this.$emit("keydown",t)},"after-enter":t=>{this.$emit("update:show",!0),t.target===t.currentTarget&&this.setFocusAfterTransition()}}},open(){return`${!this.show}`},hasFooterSlot(){return!!this.$slots.footer},bannerKindClass(){return h[this.bannerKind]}},watch:{show:{immediate:!0,handler(t){var e;t?this.previousActiveElement=document.activeElement:((e=this.previousActiveElement)==null||e.focus(),this.previousActiveElement=null)}},$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{close(){this.$emit("update:show",!1)},setFocusAfterTransition(){this.initialFocusElement==="first"?this.focusFirstElement():this.initialFocusElement.startsWith("#")?this.focusElementById(this.initialFocusElement):this.initialFocusElement instanceof HTMLElement&&this.initialFocusElement.focus()},trapFocus(t){this.show&&this.focusTrappedTabPress(t)},validateProps(){this.hideClose&&!this.visuallyHiddenClose&&console.error(`If hideClose prop is true, visuallyHiddenClose and visuallyHiddenCloseLabel props
        need to be set so the component always includes a close button`)}}};var X=function(){var e=this,a=e._self._c;return a("dt-lazy-show",e._g({class:["d-modal",e.MODAL_KIND_MODIFIERS[e.kind],e.MODAL_SIZE_MODIFIERS[e.size],e.modalClass],attrs:{transition:"d-zoom",show:e.show,"data-qa":"dt-modal","aria-hidden":e.open}},e.modalListeners),[e.show&&(e.$slots.banner||e.bannerTitle)?a("div",{class:["d-modal__banner",e.bannerClass,e.bannerKindClass],attrs:{"data-qa":"dt-modal-banner"}},[e._t("banner",function(){return[e._v(" "+e._s(e.bannerTitle)+" ")]})],2):e._e(),a("transition",{attrs:{appear:"",name:"d-modal__dialog"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:["d-modal__dialog",{"d-modal__dialog--scrollable":e.fixedHeaderFooter},e.dialogClass],attrs:{role:"dialog","aria-modal":"true","aria-describedby":e.describedById,"aria-labelledby":e.labelledById}},[e.$slots.header?a("div",{staticClass:"d-modal__header",attrs:{id:e.labelledById,"data-qa":"dt-modal-title"}},[e._t("header")],2):a("h2",{staticClass:"d-modal__header",attrs:{id:e.labelledById,"data-qa":"dt-modal-title"}},[e._v(" "+e._s(e.title)+" ")]),e.$slots.default?a("div",{class:["d-modal__content",e.contentClass],attrs:{"data-qa":"dt-modal-copy"}},[e._t("default")],2):a("p",{class:["d-modal__content",e.contentClass],attrs:{"data-qa":"dt-modal-copy"}},[e._v(" "+e._s(e.copy)+" ")]),e.hasFooterSlot?a("footer",{staticClass:"d-modal__footer"},[e._t("footer")],2):e._e(),e.hideClose?e._e():a("dt-button",e._b({staticClass:"d-modal__close",attrs:{circle:"",size:"lg",importance:"clear","aria-label":e.closeButtonProps.ariaLabel},on:{click:e.close},scopedSlots:e._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{name:"close",size:"400"}})]},proxy:!0}],null,!1,1709155279)},"dt-button",e.closeButtonProps,!1)),e.showVisuallyHiddenClose?a("sr-only-close-button",{attrs:{"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:e.close}}):e._e()],1)])],1)},ee=[],P=j(Q,X,ee,!1,null,null,null,null);const z=P.exports;P.exports.__docgenInfo={description:`Modals focus the user’s attention exclusively on one task or piece of information
via a window that sits on top of the page content.`,displayName:"DtModal",tags:{see:[{description:"https://dialpad.design/components/modal.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"closeButtonProps",description:`A set of props to be passed into the modal's close button.
Requires an 'ariaLabel' property.`,type:{name:"object"},required:!0},{name:"copy",description:"Body text to display as the modal's main content.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"describedById",description:`Id to use for the dialog's aria-describedby.
Recommended only if the dialog content itself isn't enough to give full context,
as screen readers should recite the dialog contents by default before any aria-description.`,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelledById",description:"Id to use for the dialog's aria-labelledby.",type:{name:"string"},defaultValue:{func:!0,value:"function () { return getUniqueString(); }"}},{name:"show",description:`Whether the modal should be shown.
Parent component can sync on this value to control the modal's visibility.`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",description:"Title text to display in the modal header.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"bannerTitle",description:"Title text to display in the modal banner.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"kind",description:"The theme of the modal. kind - default or danger,",tags:{},values:["default","danger"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"size",description:"The size of the modal. size - default or full,",tags:{},values:["default","full"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"modalClass",description:`Additional class name for the root modal element.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"dialogClass",description:`Additional class name for the dialog element within the modal.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"contentClass",description:`Additional class name for the content element within the modal.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"bannerKind",description:"Sets the color of the banner.",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'warning'"}},{name:"bannerClass",description:`Additional class name for the banner element within the modal.
Can accept String, Object, and Array, i.e. has the
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"hideClose",description:"Hides the close button on the modal",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeOnClick",description:"Whether the modal will close when you click outside of the dialog on the overlay.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fixedHeaderFooter",description:"Scrollable modal that allows scroll the modal content keeping the header and footer fixed",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"initialFocusElement",description:`The element that is focused when the modal is opened. This can be an
HTMLElement within the modal, a string starting with '#' which will
find the element by ID. 'first' which will automatically focus
the first element, or 'dialog' which will focus the dialog window itself.
If the dialog is modal this prop cannot be 'none'.`,type:{name:"string|HTMLElement"},defaultValue:{func:!1,value:"'first'"}}],events:[{name:"update:show",description:`The modal will emit a "false" boolean value for this event when the user performs a modal-closing action.
Parent components can sync on this value to create a 2-way binding to control modal visibility.`,type:{names:["Boolean"]}},{name:"click",type:{names:["undefined"]}},{name:"keydown",type:{names:["undefined"]}}],slots:[{name:"banner",description:"Slot for the banner, defaults to bannerTitle prop"},{name:"header",description:'Slot for dialog header section, taking the place of any "title" text prop'},{name:"default",description:'Default slot for dialog body section, taking the place of any "copy" text prop'},{name:"footer",description:"Slot for dialog footer content, often containing cancel and confirm buttons."}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal.vue"]};const te={name:"DtModalDefault",components:{DtModal:z,DtButton:H},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.$attrs.show}},computed:{buttonCloseProps(){return{...this.$attrs.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.$attrs.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.$attrs.show}}},methods:{updateShow(t){this.isOpen=t,this.$attrs.toggleOpen(t)}}};var ae=function(){var e=this,a=e._self._c;return a("div",[a("dt-modal",{attrs:{title:e.$attrs.title,"banner-title":e.$attrs.bannerTitle,"close-button-props":e.buttonCloseProps,show:e.isOpen,kind:e.$attrs.kind,size:e.$attrs.size,copy:e.$attrs.copy,"modal-class":e.$attrs.modalClass,"banner-class":e.$attrs.bannerClass,"banner-kind":e.$attrs.bannerKind,"dialog-class":e.$attrs.dialogClass,"content-class":e.$attrs.contentClass,"hide-close":e.$attrs.hideClose,"labelled-by-id":e.$attrs.labelledById,"fixed-header-footer":e.$attrs.fixedHeaderFooter,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"close-on-click":e.$attrs.closeOnClick,"initial-focus-element":e.$attrs.initialFocusElement},on:{"update:show":e.updateShow}},[e.$attrs.banner?a("template",{slot:"banner"},[a("span",{domProps:{innerHTML:e._s(e.$attrs.banner)}})]):e._e(),e.$attrs.header?a("template",{slot:"header"},[a("span",{domProps:{innerHTML:e._s(e.$attrs.header)}})]):e._e(),e.$attrs.default?a("template",{slot:"default"},[a("span",{domProps:{innerHTML:e._s(e.$attrs.default)}})]):e._e(),e.showFooter?a("template",{slot:"footer"},[e.$attrs.footer?a("span",{domProps:{innerHTML:e._s(e.$attrs.footer)}}):a("div",[a("dt-button",{attrs:{id:"cancel-button",kind:e.secondaryButtonKind,importance:"clear"}},[e._v(" Cancel ")]),a("dt-button",{staticClass:"d-ml6",attrs:{id:"confirm-button",kind:e.$attrs.kind,importance:"primary"}},[e._v(" Confirm ")])],1)]):e._e()],2),a("dt-button",{on:{click:function(le){e.isOpen=!e.isOpen}}},[e._v(" Click to open ")])],1)},se=[],N=j(te,ae,se,!1,null,null,null,null);const ne=N.exports;N.exports.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const f={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",toggleOpen:J("update:show"),visuallyHiddenCloseLabel:"Close Modal"},q={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(p),control:{type:"select"}},kind:{options:Object.keys(m),control:{type:"select"}},bannerKind:{options:L,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value when the user performs a modal-closing action      and a "true" boolean value after the modal is fully-shown.     Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},toggleOpen:{table:{disable:!0}}},oe={title:"Components/Modal",component:z,args:f,argTypes:q,excludeStories:/.*Data$/},n=(t,{argTypes:e})=>G(t,e,ne),s={render:n,args:{},parameters:{percy:{args:{show:!0}}}},o={render:n,args:{showFooter:!0},parameters:{...s.parameters}},r={render:n,args:{showFooter:!0,fixedHeaderFooter:!0,copy:f.copy.repeat(4)},parameters:{...s.parameters}},l={render:n,args:{bannerTitle:"Example banner"},parameters:{...s.parameters}},i={render:n,args:{kind:"danger",showFooter:!0},parameters:{...s.parameters}},d={render:n,args:{size:"full",showFooter:!0},parameters:{...s.parameters}},u={render:n,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`},parameters:{...s.parameters}};var b,y,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,_,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var C,S,D;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  },
  parameters: {
    ...Default.parameters
  }
}`,...(D=(S=r.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var F,x,T;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  },
  parameters: {
    ...Default.parameters
  }
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var $,k,O;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(O=(k=i.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var I,M,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  },
  parameters: {
    ...Default.parameters
  }
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var V,B,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    header: \`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>\`,
    default: \`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>\`
  },
  parameters: {
    ...Default.parameters
  }
}`,...(A=(B=u.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const re=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithBanner:l,WithCustomHeaderAndContent:u,WithDangerStyle:i,WithFixedHeaderFooter:r,WithFooter:o,WithFullSize:d,__namedExportsOrder:re,argTypesData:q,argsData:f,default:oe},Symbol.toStringTag,{value:"Module"}));export{ge as M,o as W,r as a,l as b,i as c,d,u as e};
//# sourceMappingURL=modal.stories-AWfnEid2.js.map