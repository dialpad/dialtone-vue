import{a as s}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as I}from"./storybook_utils-XrTpeJKJ.js";import{D as h}from"./combobox_with_popover-6FxLlFbQ.js";import{D as x}from"./input-oNO6Vom0.js";import{D as L}from"./list_item-U0nUZvs3.js";import{D as E}from"./checkbox-Opa1IFsV.js";import{n as D}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{P as S}from"./popover-WPxv5rPX.js";import{D as $}from"./dropdown_constants-IBYyKPOQ.js";import{L as p}from"./combobox-hpHyUcRX.js";const A={name:"DtRecipeComboboxWithPopoverDefault",components:{DtRecipeComboboxWithPopover:h,DtInput:x,DtListItem:L,DtCheckbox:E},data(){return{value:""}},methods:{onComboboxSelect(n){this.$attrs.onSelect(n),this.value=this.$attrs.items[n].number}}};var g=function(){var e=this,t=e._self._c;return t("dt-recipe-combobox-with-popover",{ref:"comboboxWithPopover",attrs:{label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,description:e.$attrs.description,size:e.$attrs.size,loading:e.$attrs.loading,"max-height":e.$attrs.maxHeight,"content-width":e.$attrs.contentWidth,"has-suggestion-list":e.$attrs.hasSuggestionList,"show-list":e.$attrs.showList,padding:e.$attrs.padding,"list-id":e.$attrs.listId,"empty-list":e.$attrs.emptyList,"empty-state-message":e.$attrs.emptyStateMessage,"append-to":e.$attrs.appendTo,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,transition:e.$attrs.transition},on:{escape:e.$attrs.onEscape,highlight:e.$attrs.onHighlight,select:e.onComboboxSelect,opened:e.$attrs.onOpened},scopedSlots:e._u([e.$attrs.header?{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.header)}})]},proxy:!0}:null,{key:"input",fn:function({inputProps:i,onInput:o}){return[t("dt-input",e._b({attrs:{placeholder:"Select one or start typing"},on:{input:o},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},"dt-input",i,!1))]}},{key:"list",fn:function({listProps:i}){return[t("ul",e._b({staticClass:"d-p4"},"ul",i,!1),e._l(e.$attrs.items,function(o,l){return t("dt-list-item",{key:o.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(O){return e.onComboboxSelect(l)}},scopedSlots:e._u([{key:"right",fn:function(){return[e._v(" "+e._s(o.type)+" ")]},proxy:!0}],null,!0)},[e._v(" "+e._s(o.number)+" ")])}),1)]}},e.$attrs.footer?{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.$attrs.footer)}})]},proxy:!0}:e.emptyList?null:{key:"footer",fn:function(){return[t("div",{staticClass:"d-d-flex d-ai-center d-px12"},[t("dt-checkbox",{attrs:{label:"Apply primary number to assigned Contact Centers"}})],1)]},proxy:!0}],null,!0)})},M=[];g._withStripped=!0;var m=D(A,g,M,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover_default.story.vue";const C=m.exports;m.exports.__docgenInfo={displayName:"DtRecipeComboboxWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover_default.story.vue"]};const v={label:"Label Text",labelVisible:!0,size:p.DEFAULT,contentWidth:"anchor",appendTo:"body",padding:"small",maxHeight:"300px",emptyList:!1,loading:!1,onEscape:s("escape"),onHighlight:s("highlight"),onSelect:s("select"),onOpened:s("opened"),visuallyHiddenCloseLabel:"Close Combobox"},_={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(p),control:{type:"select"},table:{defaultValue:{summary:p.DEFAULT}}},description:{control:{type:"text"}},showList:{table:{defaultValue:{summary:"null"}}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},contentWidth:{options:S,control:{type:"select"},table:{defaultValue:{summary:"null"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys($),control:{type:"select"}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},w={title:"Recipes/Comboboxes/Combobox With Popover",component:h,args:v,argTypes:_,excludeStories:/.*Data$/},N=(n,{argTypes:e})=>I(n,e,C),r={render:N,args:{items:[{id:"item1",number:"(732) 338-2720",type:"MAINLINE"},{id:"item2",number:"(732) 338-2722",type:"MAINLINE"},{id:"item3",number:"(732) 338-2725",type:"MAINLINE"},{id:"item4",number:"(732) 338-2764",type:"MAINLINE"},{id:"item5",number:"(732) 338-2784",type:"MAINLINE"},{id:"item6",number:"(732) 338-2743",type:"MAINLINE"},{id:"item7",number:"(732) 338-2728",type:"MAINLINE"},{id:"item8",number:"(732) 338-2769",type:"Other"},{id:"item9",number:"(732) 338-2723",type:"MAINLINE"},{id:"item10",number:"(732) 338-2729",type:"MAINLINE"},{id:"item11",number:"(732) 338-2489",type:"MAINLINE"},{id:"item12",number:"(732) 338-2756",type:"Other"}]},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}},percy:{args:{showList:!0}}}},a={render:N,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [{
      id: 'item1',
      number: '(732) 338-2720',
      type: 'MAINLINE'
    }, {
      id: 'item2',
      number: '(732) 338-2722',
      type: 'MAINLINE'
    }, {
      id: 'item3',
      number: '(732) 338-2725',
      type: 'MAINLINE'
    }, {
      id: 'item4',
      number: '(732) 338-2764',
      type: 'MAINLINE'
    }, {
      id: 'item5',
      number: '(732) 338-2784',
      type: 'MAINLINE'
    }, {
      id: 'item6',
      number: '(732) 338-2743',
      type: 'MAINLINE'
    }, {
      id: 'item7',
      number: '(732) 338-2728',
      type: 'MAINLINE'
    }, {
      id: 'item8',
      number: '(732) 338-2769',
      type: 'Other'
    }, {
      id: 'item9',
      number: '(732) 338-2723',
      type: 'MAINLINE'
    }, {
      id: 'item10',
      number: '(732) 338-2729',
      type: 'MAINLINE'
    }, {
      id: 'item11',
      number: '(732) 338-2489',
      type: 'MAINLINE'
    }, {
      id: 'item12',
      number: '(732) 338-2756',
      type: 'Other'
    }]
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'aria-valid-attr-value',
          enabled: false
        }]
      }
    },
    percy: {
      args: {
        showList: true
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var b,y,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'aria-valid-attr-value',
          enabled: false
        }]
      }
    }
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const T=["argsData","argTypesData","Default","Empty"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Empty:a,__namedExportsOrder:T,argTypesData:_,argsData:v,default:w},Symbol.toStringTag,{value:"Module"}));export{U as C,r as D};
//# sourceMappingURL=combobox_with_popover.stories-TMp3MZqx.js.map
