import{a as r}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as k}from"./storybook_utils-dy5aucTw.js";import{D as $}from"./combobox_with_popover-KGL8AU2s.js";import{D as x}from"./input-NsX5GCC2.js";import{D as H}from"./list_item-epInwBgn.js";import{D as P}from"./checkbox-5XYjIIc2.js";import{s as i,o as d,b as y,B as W,w as t,e as l,u as h,m as g,F as B,y as f,x as N,G as F,k as R}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as z}from"./_plugin-vue_export-helper-x3n3nnut.js";import{P as j}from"./popover-m4btvvwT.js";import{D as U}from"./dropdown_constants-IBYyKPOQ.js";import{L as u}from"./combobox-kBdPHxb0.js";const w={name:"DtRecipeComboboxWithPopoverDefault",components:{DtRecipeComboboxWithPopover:$,DtInput:x,DtListItem:H,DtCheckbox:P},data(){return{value:""}},methods:{onComboboxSelect(e){this.$attrs.onSelect(e),this.value=this.$attrs.items[e].number}}},G=["innerHTML"],q=["innerHTML"];function K(e,s,X,Y,c,b){const T=i("dt-input"),O=i("dt-list-item"),V=i("dt-checkbox"),_=i("dt-recipe-combobox-with-popover");return d(),y(_,{ref:"comboboxWithPopover",label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,description:e.$attrs.description,size:e.$attrs.size,loading:e.$attrs.loading,"max-height":e.$attrs.maxHeight,"content-width":e.$attrs.contentWidth,"has-suggestion-list":e.$attrs.hasSuggestionList,"max-width":e.$attrs.maxWidth,"show-list":e.$attrs.showList,padding:e.$attrs.padding,"list-id":e.$attrs.listId,"list-class":e.$attrs.listClass,"open-with-arrow-keys":e.$attrs.openWithArrowKeys,"empty-list":e.$attrs.emptyList,"empty-state-message":e.$attrs.emptyStateMessage,"append-to":e.$attrs.appendTo,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,transition:e.$attrs.transition,onEscape:e.$attrs.onEscape,onHighlight:e.$attrs.onHighlight,onSelect:b.onComboboxSelect,onOpened:e.$attrs.onOpened},W({input:t(({inputProps:p,onInput:o})=>[h(T,g({modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=m=>c.value=m),placeholder:"Select one or start typing"},p,{onInput:o}),null,16,["modelValue","onInput"])]),list:t(({listProps:p})=>[l("ul",g(p,{class:"d-p4"}),[(d(!0),R(B,null,F(e.$attrs.items,(o,m)=>(d(),y(O,{key:o.id,role:"option","navigation-type":"arrow-keys",onClick:ee=>b.onComboboxSelect(m)},{right:t(()=>[N(f(o.type),1)]),default:t(()=>[N(f(o.number)+" ",1)]),_:2},1032,["onClick"]))),128))],16)]),_:2},[e.$attrs.header?{name:"header",fn:t(()=>[l("span",{innerHTML:e.$attrs.header},null,8,G)]),key:"0"}:void 0,e.$attrs.footer?{name:"footer",fn:t(()=>[l("span",{innerHTML:e.$attrs.footer},null,8,q)]),key:"1"}:e.emptyList?void 0:{name:"footer",fn:t(()=>[l("div",{class:"d-d-flex d-ai-center d-px12"},[h(V,{label:"Apply primary number to assigned Contact Centers"})])]),key:"2"}]),1032,["label","label-visible","description","size","loading","max-height","content-width","has-suggestion-list","max-width","show-list","padding","list-id","list-class","open-with-arrow-keys","empty-list","empty-state-message","append-to","visually-hidden-close","visually-hidden-close-label","transition","onEscape","onHighlight","onSelect","onOpened"])}const Z=z(w,[["render",K]]);w.__docgenInfo={displayName:"DtRecipeComboboxWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover_default.story.vue"]};const M={label:"Label Text",labelVisible:!0,size:u.DEFAULT,contentWidth:"anchor",appendTo:"body",padding:"small",maxHeight:"300px",emptyList:!1,loading:!1,onEscape:r("escape"),onHighlight:r("highlight"),onSelect:r("select"),onOpened:r("opened"),visuallyHiddenCloseLabel:"Close Combobox"},A={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(u),control:{type:"select"},table:{defaultValue:{summary:u.DEFAULT}}},description:{control:{type:"text"}},showList:{table:{defaultValue:{summary:"null"}}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},contentWidth:{options:j,control:{type:"select"},table:{defaultValue:{summary:"null"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(U),control:{type:"select"}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},J={title:"Recipes/Comboboxes/Combobox With Popover",component:$,args:M,argTypes:A,excludeStories:/.*Data$/},C=(e,{argTypes:s})=>k(e,s,Z),n={render:C,args:{items:[{id:"item1",number:"(732) 338-2720",type:"MAINLINE"},{id:"item2",number:"(732) 338-2722",type:"MAINLINE"},{id:"item3",number:"(732) 338-2725",type:"MAINLINE"},{id:"item4",number:"(732) 338-2764",type:"MAINLINE"},{id:"item5",number:"(732) 338-2784",type:"MAINLINE"},{id:"item6",number:"(732) 338-2743",type:"MAINLINE"},{id:"item7",number:"(732) 338-2728",type:"MAINLINE"},{id:"item8",number:"(732) 338-2769",type:"Other"},{id:"item9",number:"(732) 338-2723",type:"MAINLINE"},{id:"item10",number:"(732) 338-2729",type:"MAINLINE"},{id:"item11",number:"(732) 338-2489",type:"MAINLINE"},{id:"item12",number:"(732) 338-2756",type:"Other"}]},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}},percy:{args:{showList:!0}}}},a={render:C,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}};var v,I,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var E,D,S;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const Q=["argsData","argTypesData","Default","Empty"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Empty:a,__namedExportsOrder:Q,argTypesData:A,argsData:M,default:J},Symbol.toStringTag,{value:"Module"}));export{ue as C,n as D};
//# sourceMappingURL=combobox_with_popover.stories-aMaNlyqh.js.map
