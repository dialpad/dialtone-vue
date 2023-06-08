import{c as k}from"./storybook_utils-aefd525a.js";import{D as $,T as M,a as z}from"./tooltip-f05b4aae.js";import{D}from"./button-6ea5d488.js";import{a as m,o as n,f as l,g as a,d as s,w as e,m as U,s as c,t as b,Y as Z,Z as G,F as y,k as u,n as J,u as I,b as Q}from"./vue.esm-bundler-e62bdd6b.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{a as W}from"./chunk-OPEUWD42-a3b45fd8.js";const B={name:"TooltipFlip",components:{DtTooltip:$,DtButton:D},computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}},K=t=>(Z("data-v-470263ff"),t=t(),G(),t),X={class:"d-m64"},x={ref:"container",class:"container"},tt=K(()=>a("div",{class:"some-text"},null,-1)),et={class:"some-text"},ot=K(()=>a("div",{class:"some-text"},null,-1));function st(t,p,f,d,o,g){const r=m("dt-button"),i=m("dt-tooltip");return n(),l("div",X,[a("div",x,[tt,a("div",et,[s(i,{id:t.$attrs.id,placement:t.$attrs.placement,class:"tooltip","fallback-placements":["right","bottom"],offset:t.$attrs.offset,show:!0},{anchor:e(({attrs:T})=>[s(r,U({importance:"outlined",kind:g.buttonKind},T),{default:e(()=>[c(" Click me to see a tooltip ")]),_:2},1040,["kind"])]),default:e(()=>[a("div",null,b(t.defaultSlot),1)]),_:1},8,["id","placement","offset"])]),ot],512)])}const at=S(B,[["render",st],["__scopeId","data-v-470263ff"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]]);B.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const A={name:"TooltipDefault",components:{DtTooltip:$,DtButton:D},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}}},nt={class:"d-pt16"};function rt(t,p,f,d,o,g){const r=m("dt-button"),i=m("dt-tooltip");return n(),l("div",{class:J(["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}])},[a("div",nt,[s(i,{id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,delay:t.delay,onShown:t.$attrs.onShown},{anchor:e(()=>[s(r,{importance:"outlined",kind:g.buttonKind},{default:e(()=>[c(b(t.$attrs.anchor),1)]),_:1},8,["kind"])]),default:e(()=>[t.defaultSlot?(n(),l(y,{key:0},[c(b(t.defaultSlot),1)],64)):u("v-if",!0)]),_:1},8,["id","placement","inverted","message","fallback-placements","offset","sticky","content-class","content-appear","transition","show","delay","onShown"])])],2)}const it=S(A,[["render",rt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]]);A.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function lt(t,p){const f=[];for(let d=0;d<t.length;d+=p){const o=t.slice(d,d+p);f.push(o)}return f}const R={name:"TooltipVariants",components:{DtTooltip:$,DtButton:D},data(){return{TOOLTIP_DIRECTIONS:lt(this.$attrs.customDirections||M,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.$attrs.show??!1}}},pt={id:"forms-radio--variants-container",class:"d-pt128 d-px64"},dt={class:"d-d-flex d-jc-center d-w100p"},ct={class:"d-d-flex d-jc-center d-w100p"},ut={class:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},mt={class:"d-py64"};function ft(t,p,f,d,o,g){const r=m("dt-button"),i=m("dt-tooltip");return n(),l("div",pt,[u(" Arrow Description "),(n(!0),l(y,null,I(o.TOOLTIP_DIRECTIONS,(T,q)=>(n(),l("div",{key:q,class:"d-mb128 d-d-flex d-jc-center d-ai-center"},[(n(!0),l(y,null,I(T,w=>(n(),l("div",{key:w},[w!==null?(n(),Q(i,{key:0,transition:t.$attrs.transition,placement:w,message:o.localMessage,show:t.$attrs.show,class:"d-mx64"},{anchor:e(()=>[s(r,{importance:"outlined",class:"d-w128"},{default:e(()=>[c(b(w),1)]),_:2},1024)]),_:2},1032,["transition","placement","message","show"])):u("v-if",!0)]))),128))]))),128)),a("div",dt,[u(" Text "),s(i,{class:"d-mb64 d-mt64",transition:t.$attrs.transition,message:o.localMessage,show:t.$attrs.show},{anchor:e(()=>[s(r,{link:""},{default:e(()=>[c(" Link Tooltip ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",ct,[u(" Open state "),s(i,{class:"d-mb64 d-mt32",transition:t.$attrs.transition,message:o.localMessage,show:o.show1},{anchor:e(()=>[s(r,{importance:"outlined",onClick:p[0]||(p[0]=T=>o.show1=!o.show1)},{default:e(()=>[c(" Open on click ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",ut,[a("div",mt,[u(" Inverted state "),s(i,{inverted:!0,transition:t.$attrs.transition,message:o.localMessage,show:t.$attrs.show},{anchor:e(()=>[s(r,{kind:"inverted",importance:"outlined"},{default:e(()=>[c(" Inverted ")]),_:1})]),_:1},8,["transition","message","show"])])])])}const ht=S(R,[["render",ft],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]]);R.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const Y={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:W("shown")},H={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:M,control:{type:"select"}},sticky:{options:z,control:{type:"select"},table:{defaultValue:{summary:"false"}}},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},_t={title:"Components/Tooltip",component:$,args:Y,argTypes:H,excludeStories:/.*Data$/},vt=t=>k(t,at),gt=t=>k(t,it),Tt=t=>k(t,ht),h={render:gt,args:{}},_={render:Tt,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}},v={render:vt,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var V,O,F;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {}
}`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var N,C,P;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(C=_.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var L,j,E;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(j=v.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const wt=["argsData","argTypesData","Default","Variants","Flip"],It=Object.freeze(Object.defineProperty({__proto__:null,Default:h,Flip:v,Variants:_,__namedExportsOrder:wt,argTypesData:H,argsData:Y,default:_t},Symbol.toStringTag,{value:"Module"}));export{h as D,v as F,It as T,_ as V,Y as a,H as b};
//# sourceMappingURL=tooltip.stories-5289e833.js.map
