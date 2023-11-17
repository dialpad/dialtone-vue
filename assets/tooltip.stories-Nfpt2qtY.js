import{c as p}from"./storybook_utils-XrTpeJKJ.js";import{D as i,T as D,a as P}from"./tooltip-sbb2qaRF.js";import{D as d}from"./button-5wqdSkdq.js";import{n as u}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as A}from"./icon-g9uTvgTG.js";import{r as j}from"./vue.esm-Wy6pS3yJ.js";import{a as R}from"./chunk-AY7I2SME-4UylTnhF.js";const K={name:"TooltipFlip",components:{DtTooltip:i,DtButton:d},computed:{buttonKind(){return this.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}};var M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-m64"},[e("div",{ref:"container",staticClass:"container"},[e("div",{staticClass:"some-text"}),e("div",{staticClass:"some-text"},[e("dt-tooltip",{staticClass:"tooltip",attrs:{id:t.$attrs.id,placement:t.$attrs.placement,"fallback-placements":["right","bottom"],offset:t.$attrs.offset,show:!0},scopedSlots:t._u([{key:"anchor",fn:function({attrs:s}){return[e("dt-button",t._b({attrs:{importance:"outlined",kind:t.buttonKind}},"dt-button",s,!1),[t._v(" Click me to see a tooltip ")])]}}])},[e("template",{slot:"default"},[e("div",[t._v(" "+t._s(t.$attrs.default)+" ")])])],2)],1),e("div",{staticClass:"some-text"})])])},E=[],S=u(K,M,E,!1,null,"4e622406",null,null);const L=S.exports;S.exports.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const B={name:"TooltipDefault",components:{DtTooltip:i,DtButton:d},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"},showTooltip(){return this.$attrs.globalShow??this.$attrs.show}}};var z=function(){var t=this,e=t._self._c;return e("div",{class:["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}]},[e("div",{staticClass:"d-pt16"},[e("dt-tooltip",t._b({attrs:{id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,transition:t.$attrs.transition,show:t.$attrs.showTooltip,enabled:t.$attrs.enabled,delay:t.$attrs.delay,"external-anchor":t.$attrs.externalAnchor},on:{shown:t.$attrs.onShown}},"dt-tooltip",t.$attrs,!1),[e("template",{slot:"anchor"},[e("dt-button",{attrs:{importance:"outlined",kind:t.$attrs.buttonKind}},[t._v(" "+t._s(t.$attrs.anchor)+" ")])],1),t.$attrs.default?[t._v(" "+t._s(t.$attrs.default)+" ")]:t._e()],2)],1)])},H=[],O=u(B,z,H,!1,null,null,null,null);const Y=O.exports;O.exports.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function q(o,t){const e=[];for(let s=0;s<o.length;s+=t){const m=o.slice(s,s+t);e.push(m)}return e}const U={name:"TooltipVariants",components:{DtTooltip:i,DtIcon:A,DtButton:d},data(){return{TOOLTIP_DIRECTIONS:q(this.customDirections||D,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.$attrs.showTooltip??!1}}};var G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-pt128 d-px64",attrs:{id:"forms-radio--variants-container"}},[e("div",{staticClass:"d-d-flex d-jc-center d-w100p d-mb64 d-mt32"},[e("dt-button",{attrs:{id:"external-tooltip-anchor",importance:"outlined"}},[t._v(" External anchor ")])],1),t._l(t.TOOLTIP_DIRECTIONS,function(s,m){return e("div",{key:m,staticClass:"d-mb128 d-d-flex d-jc-center d-ai-center"},t._l(s,function(c){return e("div",{key:c},[c!==null?e("dt-tooltip",{staticClass:"d-mx64",attrs:{transition:t.$attrs.transition,placement:c,message:t.localMessage,show:t.$attrs.showTooltip},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{staticClass:"d-w128",attrs:{importance:"outlined"}},[t._v(" "+t._s(c)+" ")])]},proxy:!0}],null,!0)}):t._e()],1)}),0)}),e("div",{staticClass:"d-d-flex d-jc-center d-ai-center d-w100p"},[e("div",{attrs:{id:"circle-button-tooltip-label"}},[t._v(" Circle button tooltip ")]),e("dt-tooltip",{staticClass:"d-ml4",attrs:{transition:t.$attrs.transition,message:t.localMessage,show:t.$attrs.showTooltip},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{"aria-labelledby":"circle-button-tooltip-label",circle:"",importance:"outlined"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dp-phone",size:"300"}})]},proxy:!0}])})]},proxy:!0}])})],1),e("div",{staticClass:"d-d-flex d-jc-center d-w100p"},[e("dt-tooltip",{staticClass:"d-mb64 d-mt64",attrs:{transition:t.$attrs.transition,message:t.localMessage,show:t.$attrs.showTooltip},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{link:""}},[t._v(" Link Tooltip ")])]},proxy:!0}])})],1),e("div",{staticClass:"d-d-flex d-jc-center d-w100p"},[e("dt-tooltip",{staticClass:"d-mb64 d-mt32",attrs:{transition:t.$attrs.transition,message:t.localMessage,show:t.show1},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{importance:"outlined"},on:{click:function(s){t.show1=!t.show1}}},[t._v(" Open on click ")])]},proxy:!0}])})],1),e("div",{staticClass:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},[e("div",{staticClass:"d-py64"},[e("dt-tooltip",{attrs:{inverted:!0,transition:t.$attrs.transition,message:t.localMessage,show:t.$attrs.showTooltip},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{kind:"inverted",importance:"outlined"}},[t._v(" Inverted ")])]},proxy:!0}])})],1)]),e("dt-tooltip",{attrs:{transition:t.$attrs.transition,"external-anchor":"#external-tooltip-anchor",show:t.$attrs.showTooltip}},[t._v(" This is a tooltip with external anchor, the actual dt-tooltip component is at the end of this page ")])],2)},J=[],I=u(U,G,J,!1,null,null,null,null);const Q=I.exports;I.exports.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const f=j(!1),W={name:"TooltipDefault",components:{DtTooltip:i,DtButton:d},inheritAttrs:!1,computed:{buttonKind(){return this.$attrs.inverted?"inverted":"default"},showTooltip(){return this.$attrs.globalShow??this.$attrs.show},isButtonActive(){return f.value}},methods:{handleClick(){f.value=!f.value}}};var X=function(){var t=this,e=t._self._c;return e("div",{class:["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.$attrs.inverted}]},[e("div",{staticClass:"d-pt16"},[e("dt-tooltip",t._b({attrs:{id:t.$attrs.id,placement:t.$attrs.placement,inverted:t.$attrs.inverted,message:t.$attrs.message,"fallback-placements":t.$attrs.fallbackPlacements,offset:t.$attrs.offset,sticky:t.$attrs.sticky,"content-class":t.$attrs.contentClass,"content-appear":t.$attrs.contentAppear,transition:t.$attrs.transition,show:t.$attrs.show,enabled:t.$attrs.enabled,delay:t.$attrs.delay,"external-anchor":t.$attrs.externalAnchor},on:{"update:show":function(s){return t.$set(t.$attrs,"show",s)},shown:t.$attrs.onShown},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{importance:"outlined",kind:t.buttonKind},on:{click:t.handleClick}},[t._v(" "+t._s(t.$attrs.anchor)+" ")])]},proxy:!0}])},"dt-tooltip",t.$attrs,!1),[t._v(" "+t._s(t.isButtonActive?"Remove from starred":"Add to starred")+" ")])],1)])},Z=[],F=u(W,X,Z,!1,null,null,null,null);const tt=F.exports;F.exports.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_change_on_click.story.vue"]};const V={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:R("shown"),showTooltip:null},N={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:D,control:{type:"select"}},sticky:{options:P,control:{type:"select"},table:{defaultValue:{summary:"false"}}},enabled:{type:"boolean"},show:{options:[null,!0,!1],type:"select"},inverted:{type:"boolean"},delay:{type:"boolean"},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},et={title:"Components/Tooltip",component:i,args:V,argTypes:N,excludeStories:/.*Data$/},ot=(o,{argTypes:t})=>p(o,t,L),st=(o,{argTypes:t})=>p(o,t,Y),at=(o,{argTypes:t})=>p(o,t,Q),nt=(o,{argTypes:t})=>p(o,t,tt),a={render:st,args:{}},n={render:at,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0},percy:{args:{showTooltip:!0}}}},r={render:ot,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{options:{showPanel:!1},controls:{disable:!0}}},l={render:nt,args:{anchor:"Click to see the tooltip content change",sticky:"popper"}};var h,_,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {}
}`,...(v=(_=a.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var $,b,T;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: TooltipVariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    },
    percy: {
      args: {
        showTooltip: true
      }
    }
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var g,w,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var k,C,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: TooltipChangeOnClick,
  args: {
    anchor: 'Click to see the tooltip content change',
    sticky: 'popper'
  }
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const rt=["argsData","argTypesData","Default","Variants","Flip","ChangeOnClick"],ft=Object.freeze(Object.defineProperty({__proto__:null,ChangeOnClick:l,Default:a,Flip:r,Variants:n,__namedExportsOrder:rt,argTypesData:N,argsData:V,default:et},Symbol.toStringTag,{value:"Module"}));export{l as C,a as D,r as F,ft as T,n as V};
//# sourceMappingURL=tooltip.stories-Nfpt2qtY.js.map
