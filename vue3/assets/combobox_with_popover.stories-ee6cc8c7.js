import{a as r}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as V}from"./storybook_utils-182ea7b7.js";import{D as $}from"./combobox_with_popover-45555096.js";import{D as k}from"./input-51336c9c.js";import{D as H}from"./list_item-08ce5296.js";import{D as P}from"./checkbox-971150ae.js";import{s as i,o as u,b as y,C as W,w as t,e as l,u as h,m as g,k as z,F,z as R,x as f,y as N}from"./vue.esm-bundler-2fc8d911.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{P as j}from"./popover-b06d308e.js";import{D as U}from"./dropdown_constants-d0cadac9.js";import{L as c}from"./combobox-bd14cb27.js";const C={name:"DtRecipeComboboxWithPopoverDefault",components:{DtRecipeComboboxWithPopover:$,DtInput:k,DtListItem:H,DtCheckbox:P},data(){return{value:""}},methods:{onComboboxSelect(e){this.$attrs.onSelect(e),this.value=this.$attrs.items[e].number},onComboboxEscape(){this.$attrs.onEscape()}}},q=["innerHTML"],G=["innerHTML"];function K(e,s,X,Y,b,p){const T=i("dt-input"),_=i("dt-list-item"),x=i("dt-checkbox"),O=i("dt-recipe-combobox-with-popover");return u(),y(O,{ref:"comboboxWithPopover",label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,description:e.$attrs.description,size:e.$attrs.size,loading:e.$attrs.loading,"max-height":e.$attrs.maxHeight,"content-width":e.$attrs.contentWidth,"has-suggestion-list":e.$attrs.hasSuggestionList,"max-width":e.$attrs.maxWidth,"show-list":e.$attrs.showList,padding:e.$attrs.padding,"list-id":e.$attrs.listId,"list-class":e.$attrs.listClass,"open-with-arrow-keys":e.$attrs.openWithArrowKeys,"empty-list":e.$attrs.emptyList,"empty-state-message":e.$attrs.emptyStateMessage,"append-to":e.$attrs.appendTo,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,transition:e.$attrs.transition,onEscape:p.onComboboxEscape,onHighlight:e.$attrs.onHighlight,onSelect:p.onComboboxSelect,onOpened:e.$attrs.onOpened},W({input:t(({inputProps:m,onInput:o})=>[h(T,g({modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=d=>b.value=d),placeholder:"Select one or start typing"},m,{onInput:o}),null,16,["modelValue","onInput"])]),list:t(({listProps:m})=>[l("ul",g(m,{class:"d-p4"}),[(u(!0),z(F,null,R(e.$attrs.items,(o,d)=>(u(),y(_,{key:o.id,role:"option","navigation-type":"arrow-keys",onClick:ee=>p.onComboboxSelect(d)},{right:t(()=>[f(N(o.type),1)]),default:t(()=>[f(N(o.number)+" ",1)]),_:2},1032,["onClick"]))),128))],16)]),_:2},[e.$attrs.header?{name:"header",fn:t(()=>[l("span",{innerHTML:e.$attrs.header},null,8,q)]),key:"0"}:void 0,e.$attrs.footer?{name:"footer",fn:t(()=>[l("span",{innerHTML:e.$attrs.footer},null,8,G)]),key:"1"}:e.emptyList?void 0:{name:"footer",fn:t(()=>[l("div",{class:"d-d-flex d-ai-center d-px12"},[h(x,{label:"Apply primary number to assigned Contact Centers"})])]),key:"2"}]),1032,["label","label-visible","description","size","loading","max-height","content-width","has-suggestion-list","max-width","show-list","padding","list-id","list-class","open-with-arrow-keys","empty-list","empty-state-message","append-to","visually-hidden-close","visually-hidden-close-label","transition","onEscape","onHighlight","onSelect","onOpened"])}const Z=B(C,[["render",K]]);C.__docgenInfo={displayName:"DtRecipeComboboxWithPopoverDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_with_popover/combobox_with_popover_default.story.vue"]};const M={label:"Label Text",labelVisible:!0,size:c.DEFAULT,contentWidth:"anchor",appendTo:"body",padding:"small",maxHeight:"300px",emptyList:!1,loading:!1,onEscape:r("escape"),onHighlight:r("highlight"),onSelect:r("select"),onOpened:r("opened"),visuallyHiddenCloseLabel:"Close Combobox"},A={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(c),control:{type:"select"},table:{defaultValue:{summary:c.DEFAULT}}},description:{control:{type:"text"}},showList:{table:{defaultValue:{summary:"null"}}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},contentWidth:{options:j,control:{type:"select"},table:{defaultValue:{summary:"null"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(U),control:{type:"select"}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},J={title:"Recipes/Comboboxes/Combobox With Popover",component:$,args:M,argTypes:A,excludeStories:/.*Data$/},w=(e,{argTypes:s})=>V(e,s,Z),n={render:w,args:{items:[{id:"item1",number:"(732) 338-2720",type:"MAINLINE"},{id:"item2",number:"(732) 338-2722",type:"MAINLINE"},{id:"item3",number:"(732) 338-2725",type:"MAINLINE"},{id:"item4",number:"(732) 338-2764",type:"MAINLINE"},{id:"item5",number:"(732) 338-2784",type:"MAINLINE"},{id:"item6",number:"(732) 338-2743",type:"MAINLINE"},{id:"item7",number:"(732) 338-2728",type:"MAINLINE"},{id:"item8",number:"(732) 338-2769",type:"Other"},{id:"item9",number:"(732) 338-2723",type:"MAINLINE"},{id:"item10",number:"(732) 338-2729",type:"MAINLINE"},{id:"item11",number:"(732) 338-2489",type:"MAINLINE"},{id:"item12",number:"(732) 338-2756",type:"Other"}]},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}},a={render:w,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0},parameters:{a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}}};var v,I,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const Q=["argsData","argTypesData","Default","Empty"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Empty:a,__namedExportsOrder:Q,argTypesData:A,argsData:M,default:J},Symbol.toStringTag,{value:"Module"}));export{ue as C,n as D};
//# sourceMappingURL=combobox_with_popover.stories-ee6cc8c7.js.map
