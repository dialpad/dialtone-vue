import{c as p}from"./storybook_utils-3f71f290.js";import{D as i,T as S,a as $}from"./tooltip-9d43b8db.js";import{D as d}from"./button-6471bfba.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as V}from"./icon-8e9c060c.js";import{a as N}from"./chunk-AY7I2SME-5eb1ab46.js";const A={name:"TooltipFlip",components:{DtTooltip:i,DtButton:d},computed:{buttonKind(){return this.inverted?"inverted":"default"}},mounted(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight/3)}};var C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-m64"},[e("div",{ref:"container",staticClass:"container"},[e("div",{staticClass:"some-text"}),e("div",{staticClass:"some-text"},[e("dt-tooltip",{staticClass:"tooltip",attrs:{id:t.id,placement:t.placement,"fallback-placements":["right","bottom"],offset:t.offset,show:!0},scopedSlots:t._u([{key:"anchor",fn:function({attrs:o}){return[e("dt-button",t._b({attrs:{importance:"outlined",kind:t.buttonKind}},"dt-button",o,!1),[t._v(" Click me to see a tooltip ")])]}}])},[e("template",{slot:"default"},[e("div",[t._v(" "+t._s(t.defaultSlot)+" ")])])],2)],1),e("div",{staticClass:"some-text"})])])},P=[];C._withStripped=!0;var m=u(A,C,P,!1,null,"470263ff",null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue";const j=m.exports;m.exports.__docgenInfo={displayName:"TooltipFlip",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_flip.story.vue"]};const E={name:"TooltipDefault",components:{DtTooltip:i,DtButton:d},inheritAttrs:!1,computed:{buttonKind(){return this.inverted?"inverted":"default"},showTooltip(){return this.globalShow??this.show}}};var D=function(){var t=this,e=t._self._c;return e("div",{class:["d-fl-center d-fd-column d-pt64",{"d-bgc-purple-600 d-pb64":t.inverted}]},[e("div",{staticClass:"d-pt16"},[e("dt-tooltip",t._b({attrs:{id:t.id,placement:t.placement,inverted:t.inverted,message:t.message,"fallback-placements":t.fallbackPlacements,offset:t.offset,sticky:t.sticky,"content-class":t.contentClass,transition:t.transition,show:t.showTooltip,delay:t.delay,"external-anchor":t.externalAnchor},on:{shown:t.onShown}},"dt-tooltip",t.$attrs,!1),[e("template",{slot:"anchor"},[e("dt-button",{attrs:{importance:"outlined",kind:t.buttonKind}},[t._v(" "+t._s(t.anchor)+" ")])],1),t.defaultSlot?[t._v(" "+t._s(t.defaultSlot)+" ")]:t._e()],2)],1)])},M=[];D._withStripped=!0;var f=u(E,D,M,!1,null,null,null,null);f.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue";const L=f.exports;f.exports.__docgenInfo={displayName:"TooltipDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_default.story.vue"]};function R(n,t){const e=[];for(let o=0;o<n.length;o+=t){const c=n.slice(o,o+t);e.push(c)}return e}const K={name:"TooltipVariants",components:{DtTooltip:i,DtIcon:V,DtButton:d},data(){return{TOOLTIP_DIRECTIONS:R(this.customDirections||S,3),localMessage:"This is a simple tooltip. The tooltip can be positioned in multiple areas too!",show1:this.show??!1,externalAnchorShow:!1}}};var I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-pt128 d-px64",attrs:{id:"forms-radio--variants-container"}},[e("div",{staticClass:"d-d-flex d-jc-center d-w100p d-mb64 d-mt32"},[e("dt-button",{attrs:{id:"external-tooltip-anchor",importance:"outlined"},on:{focusin:function(o){t.externalAnchorShow=!0},mouseenter:function(o){t.externalAnchorShow=!0},focusout:function(o){t.externalAnchorShow=!1},mouseleave:function(o){t.externalAnchorShow=!1},keydown:function(o){if(!o.type.indexOf("key")&&t._k(o.keyCode,"esc",27,o.key,["Esc","Escape"]))return null;t.externalAnchorShow=!1}}},[t._v(" External anchor ")])],1),t._l(t.TOOLTIP_DIRECTIONS,function(o,c){return e("div",{key:c,staticClass:"d-mb128 d-d-flex d-jc-center d-ai-center"},t._l(o,function(l){return e("div",{key:l},[l!==null?e("dt-tooltip",{staticClass:"d-mx64",attrs:{transition:t.transition,placement:l,message:t.localMessage,show:t.show},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{staticClass:"d-w128",attrs:{importance:"outlined"}},[t._v(" "+t._s(l)+" ")])]},proxy:!0}],null,!0)}):t._e()],1)}),0)}),e("div",{staticClass:"d-d-flex d-jc-center d-ai-center d-w100p"},[e("div",{attrs:{id:"circle-button-tooltip-label"}},[t._v(" Circle button tooltip ")]),e("dt-tooltip",{staticClass:"d-ml4",attrs:{transition:t.transition,message:t.localMessage,show:t.show},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{"aria-labelledby":"circle-button-tooltip-label",circle:"",importance:"outlined"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dp-phone",size:"300"}})]},proxy:!0}])})]},proxy:!0}])})],1),e("div",{staticClass:"d-d-flex d-jc-center d-w100p"},[e("dt-tooltip",{staticClass:"d-mb64 d-mt64",attrs:{transition:t.transition,message:t.localMessage,show:t.show},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{link:""}},[t._v(" Link Tooltip ")])]},proxy:!0}])})],1),e("div",{staticClass:"d-d-flex d-jc-center d-w100p"},[e("dt-tooltip",{staticClass:"d-mb64 d-mt32",attrs:{transition:t.transition,message:t.localMessage,show:t.show1},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{importance:"outlined"},on:{click:function(o){t.show1=!t.show1}}},[t._v(" Open on click ")])]},proxy:!0}])})],1),e("div",{staticClass:"d-bgc-purple-600 d-pt64 d-d-flex d-jc-center"},[e("div",{staticClass:"d-py64"},[e("dt-tooltip",{attrs:{inverted:!0,transition:t.transition,message:t.localMessage,show:t.show},scopedSlots:t._u([{key:"anchor",fn:function(){return[e("dt-button",{attrs:{kind:"inverted",importance:"outlined"}},[t._v(" Inverted ")])]},proxy:!0}])})],1)]),e("dt-tooltip",{attrs:{transition:t.transition,show:t.externalAnchorShow,"external-anchor":"#external-tooltip-anchor"}},[t._v(" This is a tooltip with external anchor, the actual dt-tooltip component is at the end of this page ")])],2)},z=[];I._withStripped=!0;var h=u(K,I,z,!1,null,null,null,null);h.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue";const H=h.exports;h.exports.__docgenInfo={displayName:"TooltipVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/tooltip/tooltip_variants.vue"]};const F={message:"This is a Tooltip",anchor:"Hover over me to see a tooltip",default:"This is a simple tooltip. You can set the position of the tooltip using the placement prop!",sticky:!1,onShown:N("shown")},O={default:{control:"text",table:{type:{summary:"VNode"}}},anchor:{name:"anchor",control:"text",table:{category:"slots",type:{summary:"VNode"}}},id:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:S,control:{type:"select"}},sticky:{options:$,control:{type:"select"},table:{defaultValue:{summary:"false"}}},show:{options:[null,!0,!1],type:"select"},inverted:{type:"boolean"},delay:{type:"boolean"},transition:{options:["","fade","pop","shake"],control:{type:"select"}},onShown:{table:{disable:!0}},"update:show":{table:{disable:!0}},shown:{description:"emitted when tooltip is shown or hidden",table:{type:{summary:"boolean"}}}},Y={title:"Components/Tooltip",component:i,args:F,argTypes:O,excludeStories:/.*Data$/},q=(n,{argTypes:t})=>p(n,t,j),B=(n,{argTypes:t})=>p(n,t,L),U=(n,{argTypes:t})=>p(n,t,H),s={render:B,args:{}},a={render:U,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}},r={render:q,args:{default:"Scroll down to see how the tooltip changes based on the available space."},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var _,v,w;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: TooltipDefaultTemplate,
  args: {}
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,b,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var g,x,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const G=["argsData","argTypesData","Default","Variants","Flip"],et=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Flip:r,Variants:a,__namedExportsOrder:G,argTypesData:O,argsData:F,default:Y},Symbol.toStringTag,{value:"Module"}));export{s as D,r as F,et as T,a as V};
//# sourceMappingURL=tooltip.stories-53524957.js.map
