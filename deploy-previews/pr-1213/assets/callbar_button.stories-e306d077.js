import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";import{e as B,h as c}from"./storybook_utils-3d298cfc.js";import{D as i,C as R}from"./callbar_button-0af98a27.js";import{D as l}from"./icon-82a08f84.js";import{n as s}from"./_plugin-vue2_normalizer-2bbd088e.js";const N={name:"DtRecipeCallbarButtonDefault",components:{DtRecipeCallbarButton:i,DtIcon:l}};var g=function(){var t=this,e=t._self._c;return e("dt-recipe-callbar-button",{attrs:{id:t.id,active:t.active,"aria-label":t.ariaLabel,circle:t.circle,importance:t.importance,disabled:t.disabled,danger:t.danger,"button-class":t.buttonClass,"text-class":t.textClass,"button-width-size":t.buttonWidthSize},on:{click:t.onClick}},[t.tooltip?e("template",{slot:"tooltip"},[e("span",{domProps:{innerHTML:t._s(t.tooltip)}})]):t._e(),t.defaultSlot?e("span",{domProps:{innerHTML:t._s(t.defaultSlot)}}):t._e(),t.icon?e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:t.icon}})],1):t._e()],2)},V=[];g._withStripped=!0;var u=s(N,g,V,!1,null,null,null,null);u.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button_default.story.vue";const I=u.exports;u.exports.__docgenInfo={displayName:"DtRecipeCallbarButtonDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button_default.story.vue"]};const L={name:"DtRecipeCallbarButtonVariants",components:{DtRecipeCallbarButton:i,DtIcon:l}};var h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-stack16"},[e("h3",[t._v(" Call Bar Buttons ")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap"},[e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Button ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"accessibility"}})]},proxy:!0}])},[t._v(" No tooltip ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Label only ")]),e("dt-recipe-callbar-button",{attrs:{"aria-label":"mic on"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Icon only ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{disabled:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Disabled ")])],1),e("h3",[t._v(" Active Call Bar Buttons ")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap"},[e("dt-recipe-callbar-button",{attrs:{active:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Button ")]),e("dt-recipe-callbar-button",{attrs:{active:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"accessibility"}})]},proxy:!0}])},[t._v(" No tooltip ")]),e("dt-recipe-callbar-button",{attrs:{active:""},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Label only ")]),e("dt-recipe-callbar-button",{attrs:{active:"","aria-label":"mic on"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Icon only ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{active:"",disabled:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Disabled ")])],1),e("h3",[t._v(" Danger Call Bar Buttons ")]),e("div",{staticClass:"d-fs12"},[t._v(" Danger Call Bar Buttons look the same as regular buttons; they only differ on their active state. ")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap"},[e("dt-recipe-callbar-button",{attrs:{danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Button ")]),e("dt-recipe-callbar-button",{attrs:{danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"accessibility"}})]},proxy:!0}])},[t._v(" No tooltip ")]),e("dt-recipe-callbar-button",{attrs:{danger:""},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Label only ")]),e("dt-recipe-callbar-button",{attrs:{danger:"","aria-label":"mic on"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Icon only ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{disabled:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Disabled ")])],1),e("h3",[t._v(" Danger Active Call Bar Buttons ")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap"},[e("dt-recipe-callbar-button",{attrs:{active:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Button ")]),e("dt-recipe-callbar-button",{attrs:{active:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"accessibility"}})]},proxy:!0}])},[t._v(" No tooltip ")]),e("dt-recipe-callbar-button",{attrs:{active:"",danger:""},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Label only ")]),e("dt-recipe-callbar-button",{attrs:{active:"",danger:"","aria-label":"mic on"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Icon only ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{active:"",disabled:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Tooltip ")]},proxy:!0}])},[t._v(" Disabled ")])],1),e("h3",[t._v(" Rounded ")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap"},[e("dt-recipe-callbar-button",{attrs:{circle:"","aria-label":"recording"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Rounded button ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{circle:"",active:"","aria-label":"person"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"user"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Rounded active ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{circle:"",danger:"","aria-label":"play"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"play"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Rounded danger ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{circle:"",active:"",danger:"","aria-label":"star"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"star"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Rounded danger active ")]},proxy:!0}])}),e("dt-recipe-callbar-button",{attrs:{circle:"",disabled:"","aria-label":"dialpad"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"accessibility"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Rounded button ")]},proxy:!0}])})],1)])},P=[];h._withStripped=!0;var p=s(L,h,P,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button_variants.story.vue";const A=p.exports;p.exports.__docgenInfo={displayName:"DtRecipeCallbarButtonVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button_variants.story.vue"]};const M={name:"DtRecipeCallbarButtonCallbar",components:{DtRecipeCallbarButton:i,DtIcon:l}};var C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-stack16"},[e("h3",[t._v("Normal")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap d-stack16"},[e("dt-recipe-callbar-button",{staticClass:"d-mt16",scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"share-screen"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Share screen ")]},proxy:!0}])},[t._v(" Screenshare ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"record"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Record ")]},proxy:!0}])},[t._v(" Record ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Mute mic ")]},proxy:!0}])},[t._v(" Mute ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"pause"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Place on hold ")]},proxy:!0}])},[t._v(" Hold ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dialpad-ai"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Enable Assistant ")]},proxy:!0}])},[t._v(" Assist ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"ai-notes"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" View transcript ")]},proxy:!0}])},[t._v(" Transcript ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"transfer"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Transfer call ")]},proxy:!0}])},[t._v(" Transfer ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"park"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Park call to mainline ")]},proxy:!0}])},[t._v(" Park ")]),e("dt-recipe-callbar-button",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"more-horizontal"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" More options ")]},proxy:!0}])},[t._v(" More ")])],1),e("h3",[t._v("Active")]),e("div",{staticClass:"d-d-flex d-flow16 d-fw-wrap d-stack16"},[e("dt-recipe-callbar-button",{staticClass:"d-mt16",attrs:{active:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"screen-share-off"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Stop sharing ")]},proxy:!0}])},[t._v(" Stop ")]),e("dt-recipe-callbar-button",{attrs:{active:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"stop-circle"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Stop recording ")]},proxy:!0}])},[t._v(" Stop Rec ")]),e("dt-recipe-callbar-button",{attrs:{active:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"mic-off"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Unmute mic ")]},proxy:!0}])},[t._v(" Unmute ")]),e("dt-recipe-callbar-button",{attrs:{active:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"pause"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Resume call ")]},proxy:!0}])},[t._v(" Unhold ")]),e("dt-recipe-callbar-button",{attrs:{active:"",danger:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"dialpad-ai"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Disable Assistant ")]},proxy:!0}])},[t._v(" Assist Off ")]),e("dt-recipe-callbar-button",{attrs:{active:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"ai-notes"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" View transcript ")]},proxy:!0}])},[t._v(" Transcript ")]),e("dt-recipe-callbar-button",{attrs:{active:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"transfer"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Transfer call ")]},proxy:!0}])},[t._v(" Transfer ")]),e("dt-recipe-callbar-button",{attrs:{active:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"park"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" Park call to mainline ")]},proxy:!0}])},[t._v(" Park ")]),e("dt-recipe-callbar-button",{attrs:{active:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{name:"more-horizontal"}})]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" More options ")]},proxy:!0}])},[t._v(" More ")])],1)])},$=[];C._withStripped=!0;var d=s(M,C,$,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button_callbar.story.vue";const z=d.exports;d.exports.__docgenInfo={displayName:"DtRecipeCallbarButtonCallbar",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/buttons/callbar_button/callbar_button_callbar.story.vue"]};const F=B(),T={buttonWidthSize:"xl",onClick:D("click")},w={id:{table:{defaultValue:{summary:"generated unique ID"}}},active:{control:"boolean"},circle:{control:"boolean"},danger:{control:"boolean"},disabled:{control:"boolean",description:"Button is disabled, shows the tooltip"},buttonClass:{table:{type:{summary:["string","array","object"]}},control:"text"},textClass:{table:{type:{summary:["string","array","object"]}},control:"text"},buttonWidthSize:{options:R,control:{type:"select"}},default:{name:"default",description:"Slot default content. This will be the button label",control:"text",table:{category:"slots",type:{summary:"text/html"}}},icon:{name:"icon",options:F,description:"Slot for button icon",table:{category:"slots",type:{summary:"VNode"}},control:{type:"select",labels:{undefined:"(empty)"}}},tooltip:{name:"tooltip",description:"Slot tooltip",control:"text",table:{category:"slots",type:{summary:"text/html"}}},click:{description:"Triggered when the button is clicked",table:{disable:!1,type:{summary:"event"}}},onClick:{table:{disable:!0}}},O={title:"Recipes/Buttons/Callbar Button",component:i,args:T,argTypes:w,excludeStories:/.*Data$/},j=(r,{argTypes:t})=>c(r,t,I),H=(r,{argTypes:t})=>c(r,t,A),U=(r,{argTypes:t})=>c(r,t,z),o={render:j,args:{default:"Button",tooltip:"Tooltip Text",ariaLabel:"Button",icon:"accessibility"}},n={render:H,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}},a={render:U,args:{},parameters:{a11y:{config:{rules:[{id:"duplicate-id",enabled:!1}]}},options:{showPanel:!1},controls:{disable:!0}}};var f,b,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Button',
    tooltip: 'Tooltip Text',
    ariaLabel: 'Button',
    icon: 'accessibility'
  }
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var y,m,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,k,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: CallbarTemplate,
  args: {},
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'duplicate-id',
          enabled: false
        }]
      }
    },
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const W=["argsData","argTypesData","Default","Variants","Callbar"],K=Object.freeze(Object.defineProperty({__proto__:null,Callbar:a,Default:o,Variants:n,__namedExportsOrder:W,argTypesData:w,argsData:T,default:O},Symbol.toStringTag,{value:"Module"}));export{K as C,o as D,n as V,a};
//# sourceMappingURL=callbar_button.stories-e306d077.js.map
