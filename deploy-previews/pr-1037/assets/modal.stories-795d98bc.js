import{D as te}from"./button-803947a5.js";import{D as ue}from"./icon-c1bc1987.js";import{a as u,b as T,w as o,m as M,B as ce,o as a,f as l,k as r,l as _,s as k,t as F,n as w,d as c,e as me,v as fe,g as S,G as pe,z as he}from"./vue.esm-bundler-e62bdd6b.js";import{M as ye}from"./modal-f96ddab9.js";import{g as be,E as C,h as ge}from"./utils-46af4dbd.js";import{D as ve}from"./lazy_show-aad08efa.js";import{a as _e,S as we}from"./sr_only_close_button-87d5dd11.js";import{N as ae}from"./notice-5e1eb6b8.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{c as Ce}from"./storybook_utils-bdc1a785.js";import{a as ke}from"./chunk-OPEUWD42-a3b45fd8.js";const O={default:"",danger:"d-modal--danger"},I={default:"",full:"d-modal--full"},A={error:"d-modal__banner--critical",info:"d-modal__banner--info",success:"d-modal__banner--success",warning:"d-modal__banner--warning",base:"d-modal__banner--general"},oe={name:"DtModal",components:{DtLazyShow:ve,DtButton:te,DtIcon:ue,SrOnlyCloseButton:_e},mixins:[ye,we],props:{closeButtonProps:{type:Object,required:!0,validator:e=>!!e.ariaLabel},copy:{type:String,default:""},describedById:{type:String,default:""},labelledById:{type:String,default:function(){return be()}},show:{type:Boolean,default:!1},title:{type:String,default:""},bannerTitle:{type:String,default:""},kind:{type:String,default:"default",validator:e=>Object.keys(O).includes(e)},size:{type:String,default:"default",validator:e=>Object.keys(I).includes(e)},modalClass:{type:[String,Object,Array],default:""},dialogClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},bannerKind:{type:String,default:"warning",validate(e){return ae.includes(e)}},bannerClass:{type:[String,Object,Array],default:""},hideClose:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},fixedHeaderFooter:{type:Boolean,default:!0}},emits:["click","keydown","update:show"],data(){return{MODAL_KIND_MODIFIERS:O,MODAL_SIZE_MODIFIERS:I,MODAL_BANNER_KINDS:A,EVENT_KEYNAMES:C,hasSlotContent:ge}},computed:{modalListeners(){return{click:e=>{this.closeOnClick&&(e.target===e.currentTarget&&this.close(),this.$emit("click",e))},keydown:e=>{switch(e.code){case C.esc:case C.escape:this.close();break;case C.tab:this.trapFocus(e);break}this.$emit("keydown",e)},"after-enter":e=>{e.target===e.currentTarget&&this.setFocusAfterTransition()}}},open(){return`${!this.show}`},hasFooterSlot(){return!!this.$slots.footer},bannerKindClass(){return A[this.bannerKind]}},watch:{show:{immediate:!0,handler(e){var d;e?this.previousActiveElement=document.activeElement:((d=this.previousActiveElement)==null||d.focus(),this.previousActiveElement=null)}},$props:{immediate:!0,deep:!0,handler(){this.validateProps()}}},methods:{close(){this.$emit("update:show",!1)},setFocusAfterTransition(){this.focusFirstElement()},trapFocus(e){this.show&&this.focusTrappedTabPress(e)},validateProps(){this.hideClose&&!this.visuallyHiddenClose&&console.error(`If hideClose prop is true, visuallyHiddenClose and visuallyHiddenCloseLabel props
        need to be set so the component always includes a close button`)}}},Se=["aria-describedby","aria-labelledby"],De=["id"],Te=["id"],Fe={key:4,class:"d-modal__footer"};function Oe(e,d,t,ie,s,n){const m=u("dt-icon"),D=u("dt-button"),V=u("sr-only-close-button"),de=u("dt-lazy-show");return a(),T(de,M({transition:"d-zoom",show:t.show,class:["d-modal",s.MODAL_KIND_MODIFIERS[t.kind],s.MODAL_SIZE_MODIFIERS[t.size],t.modalClass],"data-qa":"dt-modal","aria-hidden":n.open},ce(n.modalListeners)),{default:o(()=>[t.show&&(s.hasSlotContent(e.$slots.banner)||t.bannerTitle)?(a(),l("div",{key:0,"data-qa":"dt-modal-banner",class:w(["d-modal__banner",t.bannerClass,n.bannerKindClass])},[r(" @slot Slot for the banner, defaults to bannerTitle prop "),_(e.$slots,"banner",{},()=>[k(F(t.bannerTitle),1)])],2)):r("v-if",!0),c(pe,{appear:"",name:"d-modal__dialog",persisted:""},{default:o(()=>[me(S("div",{class:w(["d-modal__dialog",{"d-modal__dialog--scrollable":t.fixedHeaderFooter},t.dialogClass]),role:"dialog","aria-modal":"true","aria-describedby":t.describedById,"aria-labelledby":t.labelledById},[s.hasSlotContent(e.$slots.header)?(a(),l("div",{key:0,id:t.labelledById,class:"d-modal__header","data-qa":"dt-modal-title"},[r(' @slot Slot for dialog header section, taking the place of any "title" text prop '),_(e.$slots,"header")],8,De)):(a(),l("h2",{key:1,id:t.labelledById,class:"d-modal__header","data-qa":"dt-modal-title"},F(t.title),9,Te)),s.hasSlotContent(e.$slots.default)?(a(),l("div",{key:2,class:w(["d-modal__content",t.contentClass]),"data-qa":"dt-modal-copy"},[r(' @slot Default slot for dialog body section, taking the place of any "copy" text prop '),_(e.$slots,"default")],2)):(a(),l("p",{key:3,class:w(["d-modal__content",t.contentClass]),"data-qa":"dt-modal-copy"},F(t.copy),3)),n.hasFooterSlot?(a(),l("footer",Fe,[r(" @slot Slot for dialog footer content, often containing cancel and confirm buttons. "),_(e.$slots,"footer")])):r("v-if",!0),t.hideClose?r("v-if",!0):(a(),T(D,M({key:5,class:"d-modal__close",circle:"",size:"lg",importance:"clear","aria-label":t.closeButtonProps.ariaLabel},t.closeButtonProps,{onClick:n.close}),{icon:o(()=>[c(m,{name:"close",size:"400"})]),_:1},16,["aria-label","onClick"])),e.showVisuallyHiddenClose?(a(),T(V,{key:6,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:n.close},null,8,["visually-hidden-close-label","onClose"])):r("v-if",!0)],10,Se),[[fe,t.show]])]),_:3})]),_:3},16,["show","class","aria-hidden"])}const se=ne(oe,[["render",Oe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal.vue"]]);oe.__docgenInfo={description:`Modals focus the user’s attention exclusively on one task or piece of information
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
same API as Vue's built-in handling of the class attribute.`,type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"hideClose",description:"Hides the close button on the modal",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeOnClick",description:"Whether the modal will close when you click outside of the dialog on the overlay.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fixedHeaderFooter",description:"Scrollable modal that allows scroll the modal content keeping the header and footer fixed",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"click",description:"Native button click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"keydown",description:"Native keydown event",type:{names:["KeyboardEvent"]}},{name:"update:show",description:`The modal will emit a "false" boolean value for this event when the user performs a modal-closing action.
Parent components can sync on this value to create a 2-way binding to control modal visibility.`,type:{names:["Boolean"]}}],slots:[{name:"banner",description:"Slot for the banner, defaults to bannerTitle prop"},{name:"header",description:'Slot for dialog header section, taking the place of any "title" text prop'},{name:"default",description:'Default slot for dialog body section, taking the place of any "copy" text prop'},{name:"footer",description:"Slot for dialog footer content, often containing cancel and confirm buttons."}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/modal.js","/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal.vue"]};const le={name:"DtModalDefault",components:{DtModal:se,DtButton:te},props:{showFooter:{type:Boolean,default:!1}},data(){return{isOpen:this.$attrs.show}},computed:{buttonCloseProps(){return{...this.$attrs.closeButtonProps,ariaLabel:"Close"}},secondaryButtonKind(){return this.$attrs.kind==="danger"?"muted":"default"}},watch:{show:{handler(){this.isOpen=this.$attrs.show}}},methods:{close(e){this.isOpen=!this.isOpen,this.$attrs.onClose(e)}}},Ie=["innerHTML"],Be=["innerHTML"],Ve=["innerHTML"],Me=["innerHTML"],Ae={key:1};function He(e,d,t,ie,s,n){const m=u("dt-button"),D=u("dt-modal");return a(),l("div",null,[c(D,{title:e.$attrs.title,"banner-title":e.$attrs.bannerTitle,"close-button-props":n.buttonCloseProps,show:s.isOpen,kind:e.$attrs.kind,size:e.$attrs.size,copy:e.$attrs.copy,"modal-class":e.$attrs.modalClass,"banner-class":e.$attrs.bannerClass,"banner-kind":e.$attrs.bannerKind,"dialog-class":e.$attrs.dialogClass,"content-class":e.$attrs.contentClass,"hide-close":e.$attrs.hideClose,"labelled-by-id":e.$attrs.labelledById,"fixed-header-footer":e.$attrs.fixedHeaderFooter,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"close-on-click":e.$attrs.closeOnClick,"onUpdate:show":n.close},he({_:2},[e.$attrs.banner?{name:"banner",fn:o(()=>[S("span",{innerHTML:e.$attrs.banner},null,8,Ie)]),key:"0"}:void 0,e.$attrs.header?{name:"header",fn:o(()=>[S("span",{innerHTML:e.$attrs.header},null,8,Be)]),key:"1"}:void 0,e.defaultSlot?{name:"default",fn:o(()=>[S("span",{innerHTML:e.defaultSlot},null,8,Ve)]),key:"2"}:void 0,t.showFooter?{name:"footer",fn:o(()=>[e.$attrs.footer?(a(),l("span",{key:0,innerHTML:e.$attrs.footer},null,8,Me)):(a(),l("div",Ae,[c(m,{kind:n.secondaryButtonKind,importance:"clear"},{default:o(()=>[k(" Cancel ")]),_:1},8,["kind"]),c(m,{kind:e.$attrs.kind,importance:"primary",class:"d-ml6"},{default:o(()=>[k(" Confirm ")]),_:1},8,["kind"])]))]),key:"3"}:void 0]),1032,["title","banner-title","close-button-props","show","kind","size","copy","modal-class","banner-class","banner-kind","dialog-class","content-class","hide-close","labelled-by-id","fixed-header-footer","visually-hidden-close","visually-hidden-close-label","close-on-click","onUpdate:show"]),c(m,{onClick:d[0]||(d[0]=V=>s.isOpen=!s.isOpen)},{default:o(()=>[k(" Click to open ")]),_:1})])}const Le=ne(le,[["render",He],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]]);le.__docgenInfo={displayName:"DtModalDefault",exportName:"default",description:"",tags:{},props:[{name:"showFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/modal/modal_default.story.vue"]};const B={size:"default",kind:"default",bannerKind:"warning",closeButtonProps:{ariaLabel:"Close"},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit.",title:"Example Title",onClose:ke("update:show"),visuallyHiddenCloseLabel:"Close Modal"},re={default:{control:"text",table:{type:{summary:"VNode"}}},banner:{control:"text",table:{type:{summary:"VNode"}}},footer:{control:"text",table:{type:{summary:"VNode"}}},header:{control:"text",table:{type:{summary:"VNode"}}},size:{options:Object.keys(I),control:{type:"select"}},kind:{options:Object.keys(O),control:{type:"select"}},bannerKind:{options:ae,control:{type:"select"}},showFooter:{table:{disable:!0}},labelledById:{table:{defaultValue:{summary:"generated unique ID"}}},"update:show":{description:'The modal will emit a "false" boolean value for this event when the user performs a modal-closing action.  Parent components can sync on this value to create a 2-way binding to control modal visibility.',table:{type:{summary:"boolean"}}},onClose:{table:{disable:!0}}},Ee={title:"Components/Modal",component:se,args:B,argTypes:re,excludeStories:/.*Data$/},i=e=>Ce(e,Le),f={render:i,args:{}},p={render:i,args:{showFooter:!0}},h={render:i,args:{showFooter:!0,fixedHeaderFooter:!0,copy:B.copy.repeat(4)}},y={render:i,args:{bannerTitle:"Example banner"}},b={render:i,args:{kind:"danger",showFooter:!0}},g={render:i,args:{size:"full",showFooter:!0}},v={render:i,args:{header:`
      <div class="d-fl-center d-p12 d-bgc-purple-100">
        <div>[custom header]</div>
      </div>`,default:`
      <div class="d-fl-center d-p32 d-bgc-gold-200">
        <h2>[custom body]</h2>
      </div>`}};var H,L,E;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(E=(L=f.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var j,N,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true
  }
}`,...(z=(N=p.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var P,q,K;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showFooter: true,
    fixedHeaderFooter: true,
    copy: argsData.copy.repeat(4)
  }
}`,...(K=(q=h.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var $,x,W;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    bannerTitle: 'Example banner'
  }
}`,...(W=(x=y.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var R,U,Z;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    kind: 'danger',
    showFooter: true
  }
}`,...(Z=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var G,Y,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    size: 'full',
    showFooter: true
  }
}`,...(J=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(X=v.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};const je=["argsData","argTypesData","Default","WithFooter","WithFixedHeaderFooter","WithBanner","WithDangerStyle","WithFullSize","WithCustomHeaderAndContent"],Ge=Object.freeze(Object.defineProperty({__proto__:null,Default:f,WithBanner:y,WithCustomHeaderAndContent:v,WithDangerStyle:b,WithFixedHeaderFooter:h,WithFooter:p,WithFullSize:g,__namedExportsOrder:je,argTypesData:re,argsData:B,default:Ee},Symbol.toStringTag,{value:"Module"}));export{se as D,Ge as M,p as W,h as a,y as b,b as c,g as d,v as e,B as f,re as g,f as h};
//# sourceMappingURL=modal.stories-795d98bc.js.map
