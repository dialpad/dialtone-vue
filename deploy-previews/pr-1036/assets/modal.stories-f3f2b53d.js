import{D as P}from"./button-9102a84a.js";import{D as R}from"./icon-ec2f9db3.js";import{M as U}from"./modal-600bd46a.js";import{a as Z,E as c,c as Y}from"./storybook_utils-7646992f.js";import{D as G}from"./lazy_show-0b3a0cf0.js";import{a as J,S as Q}from"./sr_only_close_button-a77d0cee.js";import{N as z}from"./notice-024f0d50.js";import{n as N}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as X}from"./chunk-OPEUWD42-a3b45fd8.js";const m={default:"",danger:"d-modal--danger"},p={default:"",full:"d-modal--full"},y={error:"d-modal__banner--critical",info:"d-modal__banner--info",success:"d-modal__banner--success",warning:"d-modal__banner--warning",base:"d-modal__banner--general"},ee={name:"DtModal",components:{DtLazyShow:G,DtButton:P,DtIcon:R,SrOnlyCloseButton:J},mixins:[U,Q],props:{closeButtonProps:{type:Object,required:!0,validator:t=>!!t.ariaLabel},copy:{type:String,default:""},describedById:{type:String,default:""},labelledById:{type:String,default:function(){return Z()}},show:{type:Boolean,default:!1},title:{type:String,default:""},bannerTitle:{type:String,default:""},kind:{type:String,default:"default",validator:t=>Object.keys(m).includes(t)},size:{type:String,default:"default",validator:t=>Object.keys(p).includes(t)},modalClass:{type:[String,Object,Array],default:""},dialogClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},bannerKind:{type:String,default:"warning",validate(t){return z.includes(t)}},bannerClass:{type:[String,Object,Array],default:""},hideClose:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},fixedHeaderFooter:{type:Boolean,default:!0},initialFocusElement:{type:[String,HTMLElement],default:"first",validator:t=>t==="first"||t instanceof HTMLElement||t.startsWith("#")}},emits:["update:show"],data(){return{MODAL_KIND_MODIFIERS:m,MODAL_SIZE_MODIFIERS:p,MODAL_BANNER_KINDS:y,EVENT_KEYNAMES:c}},computed:{modalListeners(){return{...this.$listeners,click:t=>{this.closeOnClick&&(t.target===t.currentTarget&&this.close(),this.$emit("click",t))},keydown:t=>{switch(t.code){case c.esc:case c.escape:this.close();break;case c.tab:this.trapFocus(t);break}this.$emit("keydown",t)},"after-enter":t=>{this.$emit("update:show",!0),t.target===t.currentTarget&&this.setFocusAfterTransition()}}},open(){return`${!this.show}`},hasFooterSlot(){return!!this.$slots.footer},bannerKindClass(){return y[this.bannerKind]}},watch:{show:{immediate:!0,handler(t){var e;t?this.previousActiveElement=document.activeElement:((e=this.previousActiveElement)==null||e.focus(),this.previousActiveElement=null)}},$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{close(){this.$emit("update:show",!1)},setFocusAfterTransition(){this.initialFocusElement==="first"?this.focusFirstElement():this.initialFocusElement.startsWith("#")?this.focusElementById(this.initialFocusElement):this.initialFocusElement instanceof HTMLElement&&this.initialFocusElement.focus()},trapFocus(t){this.show&&this.focusTrappedTabPress(t)},validateProps(){this.hideClose&&!this.visuallyHiddenClose&&console.error(`If hideClose prop is true, visuallyHiddenClose and visuallyHiddenCloseLabel props
        need to be set so the component always includes a close button`)}}};var q=function(){var e=this,a=e._self._c;return a("dt-lazy-show",e._g({class:["d-modal",e.MODAL_KIND_MODIFIERS[e.kind],e.MODAL_SIZE_MODIFIERS[e.size],e.modalClass],attrs:{transition:"d-zoom",show:e.show,"data-qa":"dt-modal","aria-hidden":e.open}},e.modalListeners),[e.show&&(e.$slots.banner||e.bannerTitle)?a("div",{class:["d-modal__banner",e.bannerClass,e.bannerKindClass],attrs:{"data-qa":"dt-modal-banner"}},[e._t("banner",function(){return[e._v(" "+e._s(e.bannerTitle)+" ")]})],2):e._e(),a("transition",{attrs:{appear:"",name:"d-modal__dialog"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:["d-modal__dialog",{"d-modal__dialog--scrollable":e.fixedHeaderFooter},e.dialogClass],attrs:{role:"dialog","aria-modal":"true","aria-describedby":e.describedById,"aria-labelledby":e.labelledById}},[e.$slots.header?a("div",{staticClass:"d-modal__header",attrs:{id:e.labelledById,"data-qa":"dt-modal-title"}},[e._t("header")],2):a("h2",{staticClass:"d-modal__header",attrs:{id:e.labelledById,"data-qa":"dt-modal-title"}},[e._v(" "+e._s(e.title)+" ")]),e.$slots.default?a("div",{class:["d-modal__content",e.contentClass],attrs:{"data-qa":"dt-modal-copy"}},[e._t("default")],2):a("p",{class:["d-modal__content",e.contentClass],attrs:{"data-qa":"dt-modal-copy"}},[e._v(" "+e._s(e.copy)+" ")]),e.hasFooterSlot?a("footer",{staticClass:"d-modal__footer"},[e._t("footer")],2):e._e(),e.hideClose?e._e():a("dt-button",e._b({staticClass:"d-modal__close",attrs:{circle:"",size:"lg",importance:"clear","aria-label":e.closeButtonProps.ariaLabel},on:{click:e.close},scopedSlots:e._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{name:"close",size:"400"}})]},proxy:!0}],null,!1,1709155279)},"dt-button",e.closeButtonProps,!1)),e.showVisuallyHiddenClose?a("sr-only-close-button",{attrs:{"visually-hidden-close-label":e.visuallyHiddenCloseLabel},on:{close:e.close}}):e._e()],1)])],1)},te=[];q._withStripped=!0;var f=N(ee,q,te,!1,null,null,null,null);f.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal.vue";const W=f.exports;f.exports.__docgenInfo={description:`Modals focus the user’s attention exclusively on one task or piece of information
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
Parent components can sync on this value to create a 2-way binding to control modal visibility.`,type:{names:["Boolean"]}},{name:"click",type:{names:["undefined"]}},{name:"keydown",type:{names:["undefined"]}}],slots:[{name:"banner",description:"Slot for the banner, defaults to bannerTitle prop"},{name:"header",description:'Slot for dialog header section, taking the place of any "title" text prop'},{name:"default",description:'Default slot for dialog body section, taking the place of any "copy" text prop'},{name:"footer",description:"Slot for dialog footer content, often containing cancel and confirm buttons."}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal.vue"]};const ae={name:"DtModalDefault",components:{DtModal:W,DtButton:P},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.show}},computed:{buttonCloseProps(){return{...this.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.show}}},methods:{updateShow(t){this.isOpen=t,this.toggleOpen(t)}}};var $=function(){var e=this,a=e._self._c;return a("div",[a("dt-modal",{attrs:{title:e.title,"banner-title":e.bannerTitle,"close-button-props":e.buttonCloseProps,show:e.isOpen,kind:e.kind,size:e.size,copy:e.copy,"modal-class":e.modalClass,"banner-class":e.bannerClass,"banner-kind":e.bannerKind,"dialog-class":e.dialogClass,"content-class":e.contentClass,"hide-close":e.hideClose,"labelled-by-id":e.labelledById,"fixed-header-footer":e.fixedHeaderFooter,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"close-on-click":e.closeOnClick,"initial-focus-element":e.initialFocusElement},on:{"update:show":e.updateShow}},[e.banner?a("template",{slot:"banner"},[a("span",{domProps:{innerHTML:e._s(e.banner)}})]):e._e(),e.header?a("template",{slot:"header"},[a("span",{domProps:{innerHTML:e._s(e.header)}})]):e._e(),e.defaultSlot?a("template",{slot:"default"},[a("span",{domProps:{innerHTML:e._s(e.defaultSlot)}})]):e._e(),e.showFooter?a("template",{slot:"footer"},[e.footer?a("span",{domProps:{innerHTML:e._s(e.footer)}}):a("div",[a("dt-button",{attrs:{id:"cancel-button",kind:e.secondaryButtonKind,importance:"clear"}},[e._v(" Cancel ")]),a("dt-button",{staticClass:"d-ml6",attrs:{id:"confirm-button",kind:e.kind,importance:"primary"}},[e._v(" Confirm ")])],1)]):e._e()],2),a("dt-button",{on:{click:function(re){e.isOpen=!e.isOpen}}},[e._v(" Click to open ")])],1)},ne=[];$._withStripped=!0;var h=N(ae,$,ne,!1,null,null,null,null);h.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue";const oe=h.exports;h.exports.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const b={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",toggleOpen:X("update:show"),visuallyHiddenCloseLabel:"Close Modal"},K={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(p),control:{type:"select"}},kind:{options:Object.keys(m),control:{type:"select"}},bannerKind:{options:z,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value when the user performs a modal-closing action      and a "true" boolean value after the modal is fully-shown.     Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},toggleOpen:{table:{disable:!0}}},se={title:"Components/Modal",component:W,args:b,argTypes:K,excludeStories:/.*Data$/},n=(t,{argTypes:e})=>Y(t,e,oe),o={render:n,args:{}},s={render:n,args:{showFooter:!0}},l={render:n,args:{showFooter:!0,fixedHeaderFooter:!0,copy:b.copy.repeat(4)}},r={render:n,args:{bannerTitle:"Example banner"}},i={render:n,args:{kind:"danger",showFooter:!0}},d={render:n,args:{size:"full",showFooter:!0}},u={render:n,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`}};var g,v,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var w,C,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var D,F,x;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  }
}`,...(x=(F=l.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var T,k,O;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  }
}`,...(O=(k=r.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var I,M,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  }
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var V,B,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  }
}`,...(A=(B=d.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var H,L,j;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
  }
}`,...(j=(L=u.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const le=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithBanner:r,WithCustomHeaderAndContent:u,WithDangerStyle:i,WithFixedHeaderFooter:l,WithFooter:s,WithFullSize:d,__namedExportsOrder:le,argTypesData:K,argsData:b,default:se},Symbol.toStringTag,{value:"Module"}));export{W as D,ye as M,s as W,l as a,r as b,i as c,d,u as e,b as f,K as g,o as h};
//# sourceMappingURL=modal.stories-f3f2b53d.js.map
