import{c as k}from"./storybook_utils-1fcbdb2e.js";import{D as b,T as E,a as U}from"./tooltip-d084916b.js";import{D}from"./button-4346d584.js";import{u,o as i,p as l,e as a,x as o,w as e,m as G,z as d,A as T,N as J,O as Q,F as $,f,k as W,B as V,b as X}from"./vue.esm-bundler-735640fd.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Z}from"./icon-d93ddec9.js";import{a as x}from"./chunk-AY7I2SME-5eb1ab46.js";const A={name:"TooltipFlip",components:{DtTooltip:b,DtButton:D},computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}},K=t=>(J("data-v-470263ff"),t=t(),Q(),t),tt={class:"d-m64"},et={ref:"container",class:"container"},ot=K(()=>a("div",{class:"some-text"},null,-1)),st={class:"some-text"},at=K(()=>a("div",{class:"some-text"},null,-1));function nt(t,p,h,c,s,g){const n=u("dt-button"),r=u("dt-tooltip");return i(),l("div",tt,[a("div",et,[ot,a("div",st,[o(r,{id:t.$attrs.id,placement:t.$attrs.placement,class:"tooltip","fallback-placements":["right","bottom"],offset:t.$attrs.offset,show:!0},{anchor:e(({attrs:y})=>[o(n,G({importance:"outlined",kind:g.buttonKind},y),{default:e(()=>[d(" Click me to see a tooltip ")]),_:2},1040,["kind"])]),default:e(()=>[a("div",null,T(t.defaultSlot),1)]),_:1},8,["id","placement","offset"])]),at],512)])}const rt=S(A,[["render",nt],["__scopeId","data-v-470263ff"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]]);A.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const z={name:"TooltipDefault",components:{DtTooltip:b,DtButton:D},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}}},it={class:"d-pt16"};function lt(t,p,h,c,s,g){const n=u("dt-button"),r=u("dt-tooltip");return i(),l("div",{class:W(["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}])},[a("div",it,[o(r,{id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,delay:t.$attrs.delay,onShown:t.$attrs.onShown},{anchor:e(()=>[o(n,{importance:"outlined",kind:g.buttonKind},{default:e(()=>[d(T(t.$attrs.anchor),1)]),_:1},8,["kind"])]),default:e(()=>[t.defaultSlot?(i(),l($,{key:0},[d(T(t.defaultSlot),1)],64)):f("v-if",!0)]),_:1},8,["id","placement","inverted","message","fallback-placements","offset","sticky","content-class","content-appear","transition","show","delay","onShown"])])],2)}const pt=S(z,[["render",lt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]]);z.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function ct(t,p){const h=[];for(let c=0;c<t.length;c+=p){const s=t.slice(c,c+p);h.push(s)}return h}const R={name:"TooltipVariants",components:{DtTooltip:b,DtIcon:Z,DtButton:D},data(){return{TOOLTIP_DIRECTIONS:ct(this.$attrs.customDirections||E,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.$attrs.show??!1}}},dt={id:"forms-radio--variants-container",class:"d-pt128 d-px64"},mt={class:"d-d-flex d-jc-center d-ai-center d-w100p"},ut=a("div",{id:"circle-button-tooltip-label"}," Circle button tooltip ",-1),ft={class:"d-d-flex d-jc-center d-w100p"},ht={class:"d-d-flex d-jc-center d-w100p"},_t={class:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},vt={class:"d-py64"};function gt(t,p,h,c,s,g){const n=u("dt-button"),r=u("dt-tooltip"),y=u("dt-icon");return i(),l("div",dt,[f(" Arrow Description "),(i(!0),l($,null,V(s.TOOLTIP_DIRECTIONS,(I,q)=>(i(),l("div",{key:q,class:"d-mb128 d-d-flex d-jc-center d-ai-center"},[(i(!0),l($,null,V(I,w=>(i(),l("div",{key:w},[w!==null?(i(),X(r,{key:0,transition:t.$attrs.transition,placement:w,message:s.localMessage,show:t.$attrs.show,class:"d-mx64"},{anchor:e(()=>[o(n,{importance:"outlined",class:"d-w128"},{default:e(()=>[d(T(w),1)]),_:2},1024)]),_:2},1032,["transition","placement","message","show"])):f("v-if",!0)]))),128))]))),128)),a("div",mt,[ut,o(r,{class:"d-ml4",transition:t.transition,message:s.localMessage,show:t.show},{anchor:e(()=>[o(n,{"aria-labelledby":"circle-button-tooltip-label",circle:""},{icon:e(()=>[o(y,{name:"dp-phone",size:"300"})]),_:1})]),_:1},8,["transition","message","show"])]),a("div",ft,[f(" Text "),o(r,{class:"d-mb64 d-mt64",transition:t.$attrs.transition,message:s.localMessage,show:t.$attrs.show},{anchor:e(()=>[o(n,{link:""},{default:e(()=>[d(" Link Tooltip ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",ht,[f(" Open state "),o(r,{class:"d-mb64 d-mt32",transition:t.$attrs.transition,message:s.localMessage,show:s.show1},{anchor:e(()=>[o(n,{importance:"outlined",onClick:p[0]||(p[0]=I=>s.show1=!s.show1)},{default:e(()=>[d(" Open on click ")]),_:1})]),_:1},8,["transition","message","show"])]),a("div",_t,[a("div",vt,[f(" Inverted state "),o(r,{inverted:!0,transition:t.$attrs.transition,message:s.localMessage,show:t.$attrs.show},{anchor:e(()=>[o(n,{kind:"inverted",importance:"outlined"},{default:e(()=>[d(" Inverted ")]),_:1})]),_:1},8,["transition","message","show"])])])])}const wt=S(R,[["render",gt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]]);R.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const H={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:x("shown")},Y={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:E,control:{type:"select"}},sticky:{options:U,control:{type:"select"},table:{defaultValue:{summary:"false"}}},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},Tt={title:"Components/Tooltip",component:b,args:H,argTypes:Y,excludeStories:/.*Data$/},bt=t=>k(t,rt),yt=t=>k(t,pt),$t=t=>k(t,wt),m={render:yt,args:{},parameters:{percy:{args:{show:!0}}}},_={render:$t,args:{},parameters:{...m.parameters,options:{showPanel:!1},controls:{disable:!0}}},v={render:bt,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{...m.parameters,options:{showPanel:!1},controls:{disable:!0}}};var O,N,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        show: true
      }
    }
  }
}`,...(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var C,P,j;_.parameters={..._.parameters,docs:{...(C=_.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(P=_.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var L,M,B;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(M=v.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const kt=["argsData","argTypesData","Default","Variants","Flip"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Flip:v,Variants:_,__namedExportsOrder:kt,argTypesData:Y,argsData:H,default:Tt},Symbol.toStringTag,{value:"Module"}));export{m as D,v as F,Ct as T,_ as V};
//# sourceMappingURL=tooltip.stories-adcdeb57.js.map
