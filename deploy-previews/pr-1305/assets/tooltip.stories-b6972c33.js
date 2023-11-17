import{c as k}from"./storybook_utils-182ea7b7.js";import{D as w,T as Y,a as tt}from"./tooltip-69357138.js";import{D as y}from"./button-d6d7aa5d.js";import{s as p,o as c,k as d,e as a,u as o,w as e,m as O,x as i,y as _,V as et,W as ot,F as I,f,p as q,z as N,b as nt,L as st}from"./vue.esm-bundler-3a36b22d.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{D as at}from"./icon-f1465796.js";import{a as rt}from"./chunk-AY7I2SME-5eb1ab46.js";const U={name:"TooltipFlip",components:{DtTooltip:w,DtButton:y},computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}},W=t=>(et("data-v-470263ff"),t=t(),ot(),t),lt={class:"d-m64"},it={ref:"container",class:"container"},ct=W(()=>a("div",{class:"some-text"},null,-1)),dt={class:"some-text"},pt=W(()=>a("div",{class:"some-text"},null,-1));function ut(t,n,h,u,s,m){const r=p("dt-button"),l=p("dt-tooltip");return c(),d("div",lt,[a("div",it,[ct,a("div",dt,[o(l,{id:t.$attrs.id,placement:t.$attrs.placement,class:"tooltip","fallback-placements":["right","bottom"],offset:t.$attrs.offset,show:!0},{anchor:e(({attrs:D})=>[o(r,O({importance:"outlined",kind:m.buttonKind},D),{default:e(()=>[i(" Click me to see a tooltip ")]),_:2},1040,["kind"])]),default:e(()=>[a("div",null,_(t.defaultSlot),1)]),_:1},8,["id","placement","offset"])]),pt],512)])}const mt=C(U,[["render",ut],["__scopeId","data-v-470263ff"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]]);U.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const G={name:"TooltipDefault",components:{DtTooltip:w,DtButton:y},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"},showTooltip(){return this.$attrs.globalShow??this.$attrs.show}}},ht={class:"d-pt16"};function ft(t,n,h,u,s,m){const r=p("dt-button"),l=p("dt-tooltip");return c(),d("div",{class:q(["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}])},[a("div",ht,[o(l,O({id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,enabled:t.$attrs.enabled,delay:t.$attrs.delay,"external-anchor":t.$attrs.externalAnchor},t.$attrs,{onShown:t.$attrs.onShown}),{anchor:e(()=>[o(r,{importance:"outlined",kind:m.buttonKind},{default:e(()=>[i(_(t.$attrs.anchor),1)]),_:1},8,["kind"])]),default:e(()=>[t.defaultSlot?(c(),d(I,{key:0},[i(_(t.defaultSlot),1)],64)):f("v-if",!0)]),_:1},16,["id","placement","inverted","message","fallback-placements","offset","sticky","content-class","content-appear","transition","show","enabled","delay","external-anchor","onShown"])])],2)}const _t=C(G,[["render",ft],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]]);G.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function vt(t,n){const h=[];for(let u=0;u<t.length;u+=n){const s=t.slice(u,u+n);h.push(s)}return h}const J={name:"TooltipVariants",components:{DtTooltip:w,DtIcon:at,DtButton:y},data(){return{TOOLTIP_DIRECTIONS:vt(this.$attrs.customDirections||Y,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.$attrs.show??!1}}},gt={id:"forms-radio--variants-container",class:"d-pt128 d-px64"},bt={class:"d-d-flex d-jc-center d-w100p d-mb64 d-mt32"},$t={class:"d-d-flex d-jc-center d-ai-center d-w100p"},wt=a("div",{id:"circle-button-tooltip-label"}," Circle button tooltip ",-1),Tt={class:"d-d-flex d-jc-center d-w100p"},kt={class:"d-d-flex d-jc-center d-w100p"},yt={class:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},Ct={class:"d-py64"};function Dt(t,n,h,u,s,m){const r=p("dt-button"),l=p("dt-tooltip"),D=p("dt-icon");return c(),d("div",gt,[a("div",bt,[o(r,{id:"external-tooltip-anchor",importance:"outlined"},{default:e(()=>[i(" External anchor ")]),_:1})]),f(" Arrow Description "),(c(!0),d(I,null,N(s.TOOLTIP_DIRECTIONS,(V,x)=>(c(),d("div",{key:x,class:"d-mb128 d-d-flex d-jc-center d-ai-center"},[(c(!0),d(I,null,N(V,T=>(c(),d("div",{key:T},[T!==null?(c(),nt(l,{key:0,transition:t.$attrs.transition,placement:T,message:s.localMessage,show:t.$attrs.show,class:"d-mx64"},{anchor:e(()=>[o(r,{importance:"outlined",class:"d-w128"},{default:e(()=>[i(_(T),1)]),_:2},1024)]),_:2},1032,["transition","placement","message","show"])):f("v-if",!0)]))),128))]))),128)),a("div",$t,[wt,o(l,{class:"d-ml4",transition:t.transition,message:s.localMessage,show:t.show},{anchor:e(()=>[o(r,{"aria-labelledby":"circle-button-tooltip-label",circle:"",importance:"outlined"},{icon:e(()=>[o(D,{name:"dp-phone",size:"300"})]),_:1})]),_:1},8,["transition","message","show"])]),a("div",Tt,[f(" Text "),o(l,{class:"d-mb64 d-mt64",transition:t.$attrs.transition,message:s.localMessage,show:t.$attrs.show},{anchor:e(()=>[o(r,{link:""},{default:e(()=>[i(" Link Tooltip ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",kt,[f(" Open state "),o(l,{class:"d-mb64 d-mt32",transition:t.$attrs.transition,message:s.localMessage,show:s.show1},{anchor:e(()=>[o(r,{importance:"outlined",onClick:n[0]||(n[0]=V=>s.show1=!s.show1)},{default:e(()=>[i(" Open on click ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",yt,[a("div",Ct,[f(" Inverted state "),o(l,{inverted:!0,transition:t.$attrs.transition,message:s.localMessage,show:t.$attrs.show},{anchor:e(()=>[o(r,{kind:"inverted",importance:"outlined"},{default:e(()=>[i(" Inverted ")]),_:1})]),_:1},8,["transition","message","show"])])]),o(l,{transition:t.transition,"external-anchor":"#external-tooltip-anchor"},{default:e(()=>[i(" This is a tooltip with external anchor, the actual dt-tooltip component is at the end of this page ")]),_:1},8,["transition"])])}const St=C(J,[["render",Dt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]]);J.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const S=st(!1),Q={name:"TooltipDefault",components:{DtTooltip:w,DtButton:y},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"},showTooltip(){return this.$attrs.globalShow??this.$attrs.show},isButtonActive(){return S.value}},methods:{handleClick(){S.value=!S.value}}},It={class:"d-pt16"};function Ot(t,n,h,u,s,m){const r=p("dt-button"),l=p("dt-tooltip");return c(),d("div",{class:q(["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}])},[a("div",It,[o(l,O({id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,enabled:t.$attrs.enabled,delay:t.$attrs.delay,"external-anchor":t.$attrs.externalAnchor},t.$attrs,{onShown:t.$attrs.onShown}),{anchor:e(()=>[o(r,{importance:"outlined",kind:m.buttonKind,onClick:m.handleClick},{default:e(()=>[i(_(t.$attrs.anchor),1)]),_:1},8,["kind","onClick"])]),default:e(()=>[i(" "+_(m.isButtonActive?"Remove from starred":"Add to starred"),1)]),_:1},16,["id","placement","inverted","message","fallback-placements","offset","sticky","content-class","content-appear","transition","show","enabled","delay","external-anchor","onShown"])])],2)}const Vt=C(Q,[["render",Ot],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_change_on_click.story.vue"]]);Q.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_change_on_click.story.vue"]};const X={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:rt("shown")},Z={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:Y,control:{type:"select"}},sticky:{options:tt,control:{type:"select"},table:{defaultValue:{summary:"false"}}},enabled:{type:"boolean"},show:{options:[null,!0,!1],type:"select"},inverted:{type:"boolean"},delay:{type:"boolean"},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},Nt={title:"Components/Tooltip",component:w,args:X,argTypes:Z,excludeStories:/.*Data$/},Ft=(t,{argTypes:n})=>k(t,n,mt),At=(t,{argTypes:n})=>k(t,n,_t),Pt=(t,{argTypes:n})=>k(t,n,St),jt=(t,{argTypes:n})=>k(t,n,Vt),v={render:At,args:{}},g={render:Pt,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}},b={render:Ft,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{options:{showPanel:!1},controls:{disable:!0}}},$={render:jt,args:{anchor:"Click to see the tooltip content change",sticky:"popper"}};var F,A,P;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {}
}`,...(P=(A=v.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var j,L,B;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: TooltipVariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(B=(L=g.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var E,K,M;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: TooltipFlipTemplate,
  args: {
    default: 'Scroll down to see how the tooltip changes based on the available space.'
  },
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var R,z,H;$.parameters={...$.parameters,docs:{...(R=$.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: TooltipChangeOnClick,
  args: {
    anchor: 'Click to see the tooltip content change',
    sticky: 'popper'
  }
}`,...(H=(z=$.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const Lt=["argsData","argTypesData","Default","Variants","Flip","ChangeOnClick"],Yt=Object.freeze(Object.defineProperty({__proto__:null,ChangeOnClick:$,Default:v,Flip:b,Variants:g,__namedExportsOrder:Lt,argTypesData:Z,argsData:X,default:Nt},Symbol.toStringTag,{value:"Module"}));export{$ as C,v as D,b as F,Yt as T,g as V};
//# sourceMappingURL=tooltip.stories-b6972c33.js.map