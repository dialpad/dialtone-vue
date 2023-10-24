import{c as k}from"./storybook_utils-7fd67d08.js";import{D as b,T as A,a as U}from"./tooltip-04ae195c.js";import{D}from"./button-1c0b010e.js";import{u as m,o as i,p as d,e as n,y as o,w as e,m as B,z as l,A as T,O as G,P as J,F as y,f as u,k as Q,B as V,b as W}from"./vue.esm-bundler-5f4c5b12.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{D as X}from"./icon-db87bd1c.js";import{a as Z}from"./chunk-AY7I2SME-5eb1ab46.js";const K={name:"TooltipFlip",components:{DtTooltip:b,DtButton:D},computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}},z=t=>(G("data-v-470263ff"),t=t(),J(),t),tt={class:"d-m64"},et={ref:"container",class:"container"},ot=z(()=>n("div",{class:"some-text"},null,-1)),st={class:"some-text"},nt=z(()=>n("div",{class:"some-text"},null,-1));function at(t,c,h,p,s,w){const a=m("dt-button"),r=m("dt-tooltip");return i(),d("div",tt,[n("div",et,[ot,n("div",st,[o(r,{id:t.$attrs.id,placement:t.$attrs.placement,class:"tooltip","fallback-placements":["right","bottom"],offset:t.$attrs.offset,show:!0},{anchor:e(({attrs:$})=>[o(a,B({importance:"outlined",kind:w.buttonKind},$),{default:e(()=>[l(" Click me to see a tooltip ")]),_:2},1040,["kind"])]),default:e(()=>[n("div",null,T(t.defaultSlot),1)]),_:1},8,["id","placement","offset"])]),nt],512)])}const rt=S(K,[["render",at],["__scopeId","data-v-470263ff"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]]);K.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const R={name:"TooltipDefault",components:{DtTooltip:b,DtButton:D},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"},showTooltip(){return this.$attrs.globalShow??this.$attrs.show}}},it={class:"d-pt16"};function lt(t,c,h,p,s,w){const a=m("dt-button"),r=m("dt-tooltip");return i(),d("div",{class:Q(["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}])},[n("div",it,[o(r,B({id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,delay:t.$attrs.delay,"external-anchor":t.$attrs.externalAnchor},t.$attrs,{onShown:t.$attrs.onShown}),{anchor:e(()=>[o(a,{importance:"outlined",kind:w.buttonKind},{default:e(()=>[l(T(t.$attrs.anchor),1)]),_:1},8,["kind"])]),default:e(()=>[t.defaultSlot?(i(),d(y,{key:0},[l(T(t.defaultSlot),1)],64)):u("v-if",!0)]),_:1},16,["id","placement","inverted","message","fallback-placements","offset","sticky","content-class","content-appear","transition","show","delay","external-anchor","onShown"])])],2)}const dt=S(R,[["render",lt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]]);R.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function ct(t,c){const h=[];for(let p=0;p<t.length;p+=c){const s=t.slice(p,p+c);h.push(s)}return h}const x={name:"TooltipVariants",components:{DtTooltip:b,DtIcon:X,DtButton:D},data(){return{TOOLTIP_DIRECTIONS:ct(this.$attrs.customDirections||A,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.$attrs.show??!1}}},pt={id:"forms-radio--variants-container",class:"d-pt128 d-px64"},mt={class:"d-d-flex d-jc-center d-w100p d-mb64 d-mt32"},ut={class:"d-d-flex d-jc-center d-ai-center d-w100p"},ht=n("div",{id:"circle-button-tooltip-label"}," Circle button tooltip ",-1),ft={class:"d-d-flex d-jc-center d-w100p"},_t={class:"d-d-flex d-jc-center d-w100p"},vt={class:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},wt={class:"d-py64"};function gt(t,c,h,p,s,w){const a=m("dt-button"),r=m("dt-tooltip"),$=m("dt-icon");return i(),d("div",pt,[n("div",mt,[o(a,{id:"external-tooltip-anchor",importance:"outlined"},{default:e(()=>[l(" External anchor ")]),_:1})]),u(" Arrow Description "),(i(!0),d(y,null,V(s.TOOLTIP_DIRECTIONS,(I,q)=>(i(),d("div",{key:q,class:"d-mb128 d-d-flex d-jc-center d-ai-center"},[(i(!0),d(y,null,V(I,g=>(i(),d("div",{key:g},[g!==null?(i(),W(r,{key:0,transition:t.$attrs.transition,placement:g,message:s.localMessage,show:t.$attrs.show,class:"d-mx64"},{anchor:e(()=>[o(a,{importance:"outlined",class:"d-w128"},{default:e(()=>[l(T(g),1)]),_:2},1024)]),_:2},1032,["transition","placement","message","show"])):u("v-if",!0)]))),128))]))),128)),n("div",ut,[ht,o(r,{class:"d-ml4",transition:t.transition,message:s.localMessage,show:t.show},{anchor:e(()=>[o(a,{"aria-labelledby":"circle-button-tooltip-label",circle:"",importance:"outlined"},{icon:e(()=>[o($,{name:"dp-phone",size:"300"})]),_:1})]),_:1},8,["transition","message","show"])]),n("div",ft,[u(" Text "),o(r,{class:"d-mb64 d-mt64",transition:t.$attrs.transition,message:s.localMessage,show:t.$attrs.show},{anchor:e(()=>[o(a,{link:""},{default:e(()=>[l(" Link Tooltip ")]),_:1})]),_:1},8,["transition","message","show"])]),n("div",_t,[u(" Open state "),o(r,{class:"d-mb64 d-mt32",transition:t.$attrs.transition,message:s.localMessage,show:s.show1},{anchor:e(()=>[o(a,{importance:"outlined",onClick:c[0]||(c[0]=I=>s.show1=!s.show1)},{default:e(()=>[l(" Open on click ")]),_:1})]),_:1},8,["transition","message","show"])]),n("div",vt,[n("div",wt,[u(" Inverted state "),o(r,{inverted:!0,transition:t.$attrs.transition,message:s.localMessage,show:t.$attrs.show},{anchor:e(()=>[o(a,{kind:"inverted",importance:"outlined"},{default:e(()=>[l(" Inverted ")]),_:1})]),_:1},8,["transition","message","show"])])]),o(r,{transition:t.transition,"external-anchor":"#external-tooltip-anchor"},{default:e(()=>[l(" This is a tooltip with external anchor, the actual dt-tooltip component is at the end of this page ")]),_:1},8,["transition"])])}const Tt=S(x,[["render",gt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]]);x.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const H={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:Z("shown")},Y={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:A,control:{type:"select"}},sticky:{options:U,control:{type:"select"},table:{defaultValue:{summary:"false"}}},show:{options:[null,!0,!1],type:"select"},inverted:{type:"boolean"},delay:{type:"boolean"},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},bt={title:"Components/Tooltip",component:b,args:H,argTypes:Y,excludeStories:/.*Data$/},$t=t=>k(t,rt),yt=t=>k(t,dt),kt=t=>k(t,Tt),f={render:yt,args:{}},_={render:kt,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}},v={render:$t,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var O,F,N;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {}
}`,...(N=(F=f.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var C,P,j;_.parameters={..._.parameters,docs:{...(C=_.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(P=_.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var E,L,M;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Dt=["argsData","argTypesData","Default","Variants","Flip"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Flip:v,Variants:_,__namedExportsOrder:Dt,argTypesData:Y,argsData:H,default:bt},Symbol.toStringTag,{value:"Module"}));export{f as D,v as F,Pt as T,_ as V};
//# sourceMappingURL=tooltip.stories-6b246173.js.map
