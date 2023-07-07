import{c as y}from"./storybook_utils-2d5d1f9a.js";import{D as b,T as E,a as z}from"./tooltip-7faa8d1f.js";import{D as k}from"./button-6f7eb085.js";import{a as m,o as n,f as i,g as a,d as s,w as e,m as U,s as c,l as w,Z,_ as G,F as $,k as M,n as J,u as S,b as Q}from"./vue.esm-bundler-88154bf9.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{a as W}from"./chunk-OPEUWD42-a3b45fd8.js";const B={name:"TooltipFlip",components:{DtTooltip:b,DtButton:k},computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}},K=t=>(Z("data-v-3a881114"),t=t(),G(),t),X={class:"d-m64"},x={ref:"container",class:"container"},tt=K(()=>a("div",{class:"some-text"},null,-1)),et={class:"some-text"},ot=K(()=>a("div",{class:"some-text"},null,-1));function st(t,d,u,p,o,g){const r=m("dt-button"),l=m("dt-tooltip");return n(),i("div",X,[a("div",x,[tt,a("div",et,[s(l,{id:t.$attrs.id,placement:t.$attrs.placement,class:"tooltip","fallback-placements":["right","bottom"],offset:t.$attrs.offset,show:!0},{anchor:e(({attrs:T})=>[s(r,U({importance:"outlined",kind:g.buttonKind},T),{default:e(()=>[c(" Click me to see a tooltip ")]),_:2},1040,["kind"])]),default:e(()=>[a("div",null,w(t.defaultSlot),1)]),_:1},8,["id","placement","offset"])]),ot],512)])}const at=D(B,[["render",st],["__scopeId","data-v-3a881114"]]);B.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const A={name:"TooltipDefault",components:{DtTooltip:b,DtButton:k},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}}},nt={class:"d-pt16"};function rt(t,d,u,p,o,g){const r=m("dt-button"),l=m("dt-tooltip");return n(),i("div",{class:J(["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}])},[a("div",nt,[s(l,{id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,delay:t.delay,onShown:t.$attrs.onShown},{anchor:e(()=>[s(r,{importance:"outlined",kind:g.buttonKind},{default:e(()=>[c(w(t.$attrs.anchor),1)]),_:1},8,["kind"])]),default:e(()=>[t.defaultSlot?(n(),i($,{key:0},[c(w(t.defaultSlot),1)],64)):M("",!0)]),_:1},8,["id","placement","inverted","message","fallback-placements","offset","sticky","content-class","content-appear","transition","show","delay","onShown"])])],2)}const lt=D(A,[["render",rt]]);A.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function it(t,d){const u=[];for(let p=0;p<t.length;p+=d){const o=t.slice(p,p+d);u.push(o)}return u}const R={name:"TooltipVariants",components:{DtTooltip:b,DtButton:k},data(){return{TOOLTIP_DIRECTIONS:it(this.$attrs.customDirections||E,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.$attrs.show??!1}}},dt={id:"forms-radio--variants-container",class:"d-pt128 d-px64"},pt={class:"d-d-flex d-jc-center d-w100p"},ct={class:"d-d-flex d-jc-center d-w100p"},mt={class:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},ut={class:"d-py64"};function ft(t,d,u,p,o,g){const r=m("dt-button"),l=m("dt-tooltip");return n(),i("div",dt,[(n(!0),i($,null,S(o.TOOLTIP_DIRECTIONS,(T,q)=>(n(),i("div",{key:q,class:"d-mb128 d-d-flex d-jc-center d-ai-center"},[(n(!0),i($,null,S(T,v=>(n(),i("div",{key:v},[v!==null?(n(),Q(l,{key:0,transition:t.$attrs.transition,placement:v,message:o.localMessage,show:t.$attrs.show,class:"d-mx64"},{anchor:e(()=>[s(r,{importance:"outlined",class:"d-w128"},{default:e(()=>[c(w(v),1)]),_:2},1024)]),_:2},1032,["transition","placement","message","show"])):M("",!0)]))),128))]))),128)),a("div",pt,[s(l,{class:"d-mb64 d-mt64",transition:t.$attrs.transition,message:o.localMessage,show:t.$attrs.show},{anchor:e(()=>[s(r,{link:""},{default:e(()=>[c(" Link Tooltip ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",ct,[s(l,{class:"d-mb64 d-mt32",transition:t.$attrs.transition,message:o.localMessage,show:o.show1},{anchor:e(()=>[s(r,{importance:"outlined",onClick:d[0]||(d[0]=T=>o.show1=!o.show1)},{default:e(()=>[c(" Open on click ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",mt,[a("div",ut,[s(l,{inverted:!0,transition:t.$attrs.transition,message:o.localMessage,show:t.$attrs.show},{anchor:e(()=>[s(r,{kind:"inverted",importance:"outlined"},{default:e(()=>[c(" Inverted ")]),_:1})]),_:1},8,["transition","message","show"])])])])}const ht=D(R,[["render",ft]]);R.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const H={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:W("shown")},Y={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:E,control:{type:"select"}},sticky:{options:z,control:{type:"select"},table:{defaultValue:{summary:"false"}}},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},_t={title:"Components/Tooltip",component:b,args:H,argTypes:Y,excludeStories:/.*Data$/},gt=t=>y(t,at),Tt=t=>y(t,lt),vt=t=>y(t,ht),f={render:Tt,args:{}},h={render:vt,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}},_={render:gt,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var I,V,F;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {}
}`,...(F=(V=f.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var N,O,C;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(O=h.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var P,L,j;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(L=_.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const wt=["argsData","argTypesData","Default","Variants","Flip"],It=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Flip:_,Variants:h,__namedExportsOrder:wt,argTypesData:Y,argsData:H,default:_t},Symbol.toStringTag,{value:"Module"}));export{f as D,_ as F,It as T,h as V,H as a,Y as b};
//# sourceMappingURL=tooltip.stories-08067302.js.map
