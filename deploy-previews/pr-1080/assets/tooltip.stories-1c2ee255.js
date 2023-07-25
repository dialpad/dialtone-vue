import{c as k}from"./storybook_utils-f3a25a1b.js";import{D as b,T as M,a as z}from"./tooltip-2d4c1c13.js";import{D}from"./button-6fc4376e.js";import{k as f,o as n,d as i,e as a,l as s,m as e,p as U,q as c,t as $,s as G,u as J,F as y,j as u,n as Q,g as I,v as W}from"./vue.esm-bundler-356a911e.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{a as X}from"./chunk-AY7I2SME-c7b6cf8a.js";const B={name:"TooltipFlip",components:{DtTooltip:b,DtButton:D},computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}},K=t=>(G("data-v-470263ff"),t=t(),J(),t),Z={class:"d-m64"},x={ref:"container",class:"container"},tt=K(()=>a("div",{class:"some-text"},null,-1)),et={class:"some-text"},ot=K(()=>a("div",{class:"some-text"},null,-1));function st(t,p,h,d,o,g){const r=f("dt-button"),l=f("dt-tooltip");return n(),i("div",Z,[a("div",x,[tt,a("div",et,[s(l,{id:t.$attrs.id,placement:t.$attrs.placement,class:"tooltip","fallback-placements":["right","bottom"],offset:t.$attrs.offset,show:!0},{anchor:e(({attrs:T})=>[s(r,U({importance:"outlined",kind:g.buttonKind},T),{default:e(()=>[c(" Click me to see a tooltip ")]),_:2},1040,["kind"])]),default:e(()=>[a("div",null,$(t.defaultSlot),1)]),_:1},8,["id","placement","offset"])]),ot],512)])}const at=S(B,[["render",st],["__scopeId","data-v-470263ff"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]]);B.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const A={name:"TooltipDefault",components:{DtTooltip:b,DtButton:D},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}}},nt={class:"d-pt16"};function rt(t,p,h,d,o,g){const r=f("dt-button"),l=f("dt-tooltip");return n(),i("div",{class:Q(["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}])},[a("div",nt,[s(l,{id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,delay:t.$attrs.delay,onShown:t.$attrs.onShown},{anchor:e(()=>[s(r,{importance:"outlined",kind:g.buttonKind},{default:e(()=>[c($(t.$attrs.anchor),1)]),_:1},8,["kind"])]),default:e(()=>[t.defaultSlot?(n(),i(y,{key:0},[c($(t.defaultSlot),1)],64)):u("v-if",!0)]),_:1},8,["id","placement","inverted","message","fallback-placements","offset","sticky","content-class","content-appear","transition","show","delay","onShown"])])],2)}const lt=S(A,[["render",rt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]]);A.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function it(t,p){const h=[];for(let d=0;d<t.length;d+=p){const o=t.slice(d,d+p);h.push(o)}return h}const R={name:"TooltipVariants",components:{DtTooltip:b,DtButton:D},data(){return{TOOLTIP_DIRECTIONS:it(this.$attrs.customDirections||M,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.$attrs.show??!1}}},pt={id:"forms-radio--variants-container",class:"d-pt128 d-px64"},dt={class:"d-d-flex d-jc-center d-w100p"},ct={class:"d-d-flex d-jc-center d-w100p"},mt={class:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},ut={class:"d-py64"};function ft(t,p,h,d,o,g){const r=f("dt-button"),l=f("dt-tooltip");return n(),i("div",pt,[u(" Arrow Description "),(n(!0),i(y,null,I(o.TOOLTIP_DIRECTIONS,(T,Y)=>(n(),i("div",{key:Y,class:"d-mb128 d-d-flex d-jc-center d-ai-center"},[(n(!0),i(y,null,I(T,w=>(n(),i("div",{key:w},[w!==null?(n(),W(l,{key:0,transition:t.$attrs.transition,placement:w,message:o.localMessage,show:t.$attrs.show,class:"d-mx64"},{anchor:e(()=>[s(r,{importance:"outlined",class:"d-w128"},{default:e(()=>[c($(w),1)]),_:2},1024)]),_:2},1032,["transition","placement","message","show"])):u("v-if",!0)]))),128))]))),128)),a("div",dt,[u(" Text "),s(l,{class:"d-mb64 d-mt64",transition:t.$attrs.transition,message:o.localMessage,show:t.$attrs.show},{anchor:e(()=>[s(r,{link:""},{default:e(()=>[c(" Link Tooltip ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",ct,[u(" Open state "),s(l,{class:"d-mb64 d-mt32",transition:t.$attrs.transition,message:o.localMessage,show:o.show1},{anchor:e(()=>[s(r,{importance:"outlined",onClick:p[0]||(p[0]=T=>o.show1=!o.show1)},{default:e(()=>[c(" Open on click ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",mt,[a("div",ut,[u(" Inverted state "),s(l,{inverted:!0,transition:t.$attrs.transition,message:o.localMessage,show:t.$attrs.show},{anchor:e(()=>[s(r,{kind:"inverted",importance:"outlined"},{default:e(()=>[c(" Inverted ")]),_:1})]),_:1},8,["transition","message","show"])])])])}const ht=S(R,[["render",ft],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]]);R.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const q={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:X("shown")},H={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:M,control:{type:"select"}},sticky:{options:z,control:{type:"select"},table:{defaultValue:{summary:"false"}}},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},_t={title:"Components/Tooltip",component:b,args:q,argTypes:H,excludeStories:/.*Data$/},vt=t=>k(t,at),gt=t=>k(t,lt),Tt=t=>k(t,ht),m={render:gt,args:{},parameters:{percy:{args:{show:!0}}}},_={render:Tt,args:{},parameters:{...m.parameters,options:{showPanel:!1},controls:{disable:!0}}},v={render:vt,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{...m.parameters,options:{showPanel:!1},controls:{disable:!0}}};var V,O,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var N,C,P;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: TooltipVariantsTemplate,
  args: {},
  parameters: {
    ...Default.parameters,
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(P=(C=_.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var j,L,E;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: TooltipFlipTemplate,
  args: {
    default: 'Scroll down to see how the tooltip changes based on the available space.'
  },
  parameters: {
    ...Default.parameters,
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(E=(L=v.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const wt=["argsData","argTypesData","Default","Variants","Flip"],It=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Flip:v,Variants:_,__namedExportsOrder:wt,argTypesData:H,argsData:q,default:_t},Symbol.toStringTag,{value:"Module"}));export{m as D,v as F,It as T,_ as V};
//# sourceMappingURL=tooltip.stories-1c2ee255.js.map
