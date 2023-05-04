import{a as i}from"./chunk-OPEUWD42-0dc0813d.js";import{c as I}from"./storybook_utils-1ef620d9.js";import{D as h}from"./combobox_with_popover-ffdb40ee.js";import{D as x}from"./input-d07ffd9f.js";import{D as L}from"./list_item-b135a23a.js";import{D as E}from"./checkbox-526f85e3.js";import{n as D}from"./_plugin-vue2_normalizer-2bbd088e.js";import{a as S}from"./popover-5699aa5e.js";import{D as A}from"./dropdown_constants-d0cadac9.js";import{L as p}from"./combobox-62f71060.js";const C={name:"DtRecipeComboboxWithPopoverDefault",components:{DtRecipeComboboxWithPopover:h,DtInput:x,DtListItem:L,DtCheckbox:E},data(){return{value:""}},methods:{onComboboxSelect(o){this.onSelect(o),this.value=this.items[o].number},onComboboxEscape(){this.onEscape()}}};var g=function(){var e=this,t=e._self._c;return t("dt-recipe-combobox-with-popover",{ref:"comboboxWithPopover",attrs:{label:e.label,"label-visible":e.labelVisible,description:e.description,size:e.size,loading:e.loading,"max-height":e.maxHeight,"content-width":e.contentWidth,"has-suggestion-list":e.hasSuggestionList,"show-list":e.showList,padding:e.padding,"list-id":e.listId,"empty-list":e.emptyList,"empty-state-message":e.emptyStateMessage,"append-to":e.appendTo,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,transition:e.transition},on:{escape:e.onComboboxEscape,highlight:e.onHighlight,select:e.onComboboxSelect,opened:e.onOpened},scopedSlots:e._u([e.header?{key:"header",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0}:null,{key:"input",fn:function({inputProps:s,onInput:n}){return[t("dt-input",e._b({attrs:{placeholder:"Select one or start typing"},on:{input:n},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},"dt-input",s,!1))]}},{key:"list",fn:function({listProps:s}){return[t("ul",e._b({staticClass:"d-p4"},"ul",s,!1),e._l(e.items,function(n,l){return t("dt-list-item",{key:n.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(k){return e.onComboboxSelect(l)}},scopedSlots:e._u([{key:"right",fn:function(){return[e._v(" "+e._s(n.type)+" ")]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.number)+" ")])}),1)]}},e.footer?{key:"footer",fn:function(){return[t("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}:e.emptyList?null:{key:"footer",fn:function(){return[t("div",{staticClass:"d-d-flex d-ai-center d-px12"},[t("dt-checkbox",{attrs:{label:"Apply primary number to assigned Contact Centers"}})],1)]},proxy:!0}],null,!0)})},M=[];g._withStripped=!0;var m=D(C,g,M,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover_default.story.vue";const T=m.exports;m.exports.__docgenInfo={displayName:"DtRecipeComboboxWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover_default.story.vue"]};const v={label:"Label Text",labelVisible:!0,size:p.DEFAULT,contentWidth:"anchor",appendTo:"body",padding:"small",maxHeight:"300px",emptyList:!1,loading:!1,onEscape:i("escape"),onHighlight:i("highlight"),onSelect:i("select"),onOpened:i("opened"),visuallyHiddenCloseLabel:"Close Combobox"},_={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(p),control:{type:"select"},table:{defaultValue:{summary:p.DEFAULT}}},description:{control:{type:"text"}},showList:{table:{defaultValue:{summary:"null"}}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},contentWidth:{options:S,control:{type:"select"},table:{defaultValue:{summary:"null"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(A),control:{type:"select"}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},O={title:"Recipes/Comboboxes/Combobox With Popover",component:h,args:v,argTypes:_,excludeStories:/.*Data$/},N=(o,{argTypes:e})=>I(o,e,T),r={render:N,args:{items:[{id:"item1",number:"(732) 338-2720",type:"MAINLINE"},{id:"item2",number:"(732) 338-2722",type:"MAINLINE"},{id:"item3",number:"(732) 338-2725",type:"MAINLINE"},{id:"item4",number:"(732) 338-2764",type:"MAINLINE"},{id:"item5",number:"(732) 338-2784",type:"MAINLINE"},{id:"item6",number:"(732) 338-2743",type:"MAINLINE"},{id:"item7",number:"(732) 338-2728",type:"MAINLINE"},{id:"item8",number:"(732) 338-2769",type:"Other"},{id:"item9",number:"(732) 338-2723",type:"MAINLINE"},{id:"item10",number:"(732) 338-2729",type:"MAINLINE"},{id:"item11",number:"(732) 338-2489",type:"MAINLINE"},{id:"item12",number:"(732) 338-2756",type:"Other"}]},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}},a={render:N,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const w=["argsData","argTypesData","Default","Empty"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Empty:a,__namedExportsOrder:w,argTypesData:_,argsData:v,default:O},Symbol.toStringTag,{value:"Module"}));export{$ as C,r as D,v as a,_ as b};
//# sourceMappingURL=combobox_with_popover.stories-de18f267.js.map
