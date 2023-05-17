import{a as s}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as x}from"./storybook_utils-ea1afa1b.js";import{D as $}from"./combobox_with_popover-5a465b43.js";import{D as k}from"./input-4646a0d3.js";import{D as H}from"./list_item-50faabc4.js";import{D as W}from"./checkbox-080ff3da.js";import{a as r,o as d,b as y,y as P,w as t,f as i,d as h,m as g,e as F,F as R,s as z,q as f,t as N}from"./vue.esm-bundler-8a039e44.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{a as j}from"./popover-aa326855.js";import{D as U}from"./dropdown_constants-d0cadac9.js";import{L as u}from"./combobox-26c3d112.js";const C={name:"DtRecipeComboboxWithPopoverDefault",components:{DtRecipeComboboxWithPopover:$,DtInput:k,DtListItem:H,DtCheckbox:W},data(){return{value:""}},methods:{onComboboxSelect(e){this.$attrs.onSelect(e),this.value=this.$attrs.items[e].number},onComboboxEscape(){this.$attrs.onEscape()}}},q=["innerHTML"],G=["innerHTML"];function K(e,c,X,Y,b,l){const T=r("dt-input"),_=r("dt-list-item"),O=r("dt-checkbox"),V=r("dt-recipe-combobox-with-popover");return d(),y(V,{ref:"comboboxWithPopover",label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,description:e.$attrs.description,size:e.$attrs.size,loading:e.$attrs.loading,"max-height":e.$attrs.maxHeight,"content-width":e.$attrs.contentWidth,"has-suggestion-list":e.$attrs.hasSuggestionList,"max-width":e.$attrs.maxWidth,"show-list":e.$attrs.showList,padding:e.$attrs.padding,"list-id":e.$attrs.listId,"list-class":e.$attrs.listClass,"open-with-arrow-keys":e.$attrs.openWithArrowKeys,"empty-list":e.$attrs.emptyList,"empty-state-message":e.$attrs.emptyStateMessage,"append-to":e.$attrs.appendTo,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,transition:e.$attrs.transition,onEscape:l.onComboboxEscape,onHighlight:e.$attrs.onHighlight,onSelect:l.onComboboxSelect,onOpened:e.$attrs.onOpened},P({input:t(({inputProps:p,onInput:o})=>[h(T,g({modelValue:b.value,"onUpdate:modelValue":c[0]||(c[0]=m=>b.value=m),placeholder:"Select one or start typing"},p,{onInput:o}),null,16,["modelValue","onInput"])]),list:t(({listProps:p})=>[i("ul",g(p,{class:"d-p4"}),[(d(!0),F(R,null,z(e.$attrs.items,(o,m)=>(d(),y(_,{key:o.id,role:"option","navigation-type":"arrow-keys",onClick:ee=>l.onComboboxSelect(m)},{right:t(()=>[f(N(o.type),1)]),default:t(()=>[f(N(o.number)+" ",1)]),_:2},1032,["onClick"]))),128))],16)]),_:2},[e.$attrs.header?{name:"header",fn:t(()=>[i("span",{innerHTML:e.$attrs.header},null,8,q)]),key:"0"}:void 0,e.$attrs.footer?{name:"footer",fn:t(()=>[i("span",{innerHTML:e.$attrs.footer},null,8,G)]),key:"1"}:e.emptyList?void 0:{name:"footer",fn:t(()=>[i("div",{class:"d-d-flex d-ai-center d-px12"},[h(O,{label:"Apply primary number to assigned Contact Centers"})])]),key:"2"}]),1032,["label","label-visible","description","size","loading","max-height","content-width","has-suggestion-list","max-width","show-list","padding","list-id","list-class","open-with-arrow-keys","empty-list","empty-state-message","append-to","visually-hidden-close","visually-hidden-close-label","transition","onEscape","onHighlight","onSelect","onOpened"])}const Z=B(C,[["render",K]]);C.__docgenInfo={displayName:"DtRecipeComboboxWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover_default.story.vue"]};const M={label:"Label Text",labelVisible:!0,size:u.DEFAULT,contentWidth:"anchor",appendTo:"body",padding:"small",maxHeight:"300px",emptyList:!1,loading:!1,onEscape:s("escape"),onHighlight:s("highlight"),onSelect:s("select"),onOpened:s("opened"),visuallyHiddenCloseLabel:"Close Combobox"},A={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(u),control:{type:"select"},table:{defaultValue:{summary:u.DEFAULT}}},description:{control:{type:"text"}},showList:{table:{defaultValue:{summary:"null"}}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},contentWidth:{options:j,control:{type:"select"},table:{defaultValue:{summary:"null"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(U),control:{type:"select"}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},J={title:"Recipes/Comboboxes/Combobox With Popover",component:$,args:M,argTypes:A,excludeStories:/.*Data$/},w=e=>x(e,Z),n={render:w,args:{items:[{id:"item1",number:"(732) 338-2720",type:"MAINLINE"},{id:"item2",number:"(732) 338-2722",type:"MAINLINE"},{id:"item3",number:"(732) 338-2725",type:"MAINLINE"},{id:"item4",number:"(732) 338-2764",type:"MAINLINE"},{id:"item5",number:"(732) 338-2784",type:"MAINLINE"},{id:"item6",number:"(732) 338-2743",type:"MAINLINE"},{id:"item7",number:"(732) 338-2728",type:"MAINLINE"},{id:"item8",number:"(732) 338-2769",type:"Other"},{id:"item9",number:"(732) 338-2723",type:"MAINLINE"},{id:"item10",number:"(732) 338-2729",type:"MAINLINE"},{id:"item11",number:"(732) 338-2489",type:"MAINLINE"},{id:"item12",number:"(732) 338-2756",type:"Other"}]},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}},a={render:w,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}};var v,I,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const Q=["argsData","argTypesData","Default","Empty"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Empty:a,__namedExportsOrder:Q,argTypesData:A,argsData:M,default:J},Symbol.toStringTag,{value:"Module"}));export{ue as C,n as D,M as a,A as b};
//# sourceMappingURL=combobox_with_popover.stories-e37be19b.js.map
