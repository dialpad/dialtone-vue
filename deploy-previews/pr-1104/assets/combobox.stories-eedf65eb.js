import{a as o}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as N}from"./storybook_utils-79c013ce.js";import{D as C,L as b}from"./combobox-07c9fa1c.js";import{D as F}from"./avatar-def5de17.js";import{D as H}from"./input-add96ff9.js";import{D as M}from"./list_item-df8a3b5a.js";import{k as i,o as p,v as y,J as z,m as t,e as d,l as g,p as h,d as B,F as A,g as j,t as f,q as U}from"./vue.esm-bundler-2457a580.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const k={name:"DtComboboxDefault",components:{DtAvatar:F,DtCombobox:C,DtInput:H,DtListItem:M},data(){return{value:"example"}},computed:{displayItems(){return this.$attrs.items}},methods:{onComboboxSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onSelect(e)},onListItemSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onItemClick(e)},onComboboxEscape(){this.value="",this.$attrs.onEscape()}}},P={"aria-hidden":"true"},J=["innerHTML"];function Z(e,u,R,W,l,n){const T=i("dt-input"),V=i("dt-avatar"),w=i("dt-list-item"),O=i("dt-combobox");return p(),y(O,{"empty-state-message":e.$attrs.emptyStateMessage,loading:e.$attrs.loading,"show-list":!!l.value&&e.$attrs.showList,label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,size:e.$attrs.size,description:e.$attrs.description,"empty-list":e.$attrs.emptyList,"empty-state-class":e.$attrs.emptyStateClass,"click-on-select":e.$attrs.clickOnSelect,onEscape:n.onComboboxEscape,onHighlight:e.$attrs.onHighlight,onSelect:n.onComboboxSelect,onOpened:e.$attrs.onOpened},z({input:t(({inputProps:r})=>[g(T,h({modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=m=>l.value=m)},r,{placeholder:"Type to show the items"}),null,16,["modelValue"])]),list:t(({listProps:r})=>[d("ol",h(r,{class:"d-p0 d-mt8 d-hmx332 d-of-y-auto"}),[(p(!0),B(A,null,j(n.displayItems,(m,c)=>(p(),y(w,{key:m.id,role:"option","navigation-type":"arrow-keys",onClick:X=>n.onListItemSelect(c)},{left:t(()=>[g(V,{seed:c.toString()},{default:t(()=>[d("span",P,f(c+1),1)]),_:2},1032,["seed"])]),default:t(()=>[U(" "+f(m.name),1)]),_:2},1032,["onClick"]))),128))],16)]),_:2},[e.$attrs.emptyListItem?{name:"emptyListItem",fn:t(()=>[d("span",{innerHTML:e.$attrs.emptyListItem},null,8,J)]),key:"0"}:void 0]),1032,["empty-state-message","loading","show-list","label","label-visible","size","description","empty-list","empty-state-class","click-on-select","onEscape","onHighlight","onSelect","onOpened"])}const G=q(k,[["render",Z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]]);k.__docgenInfo={displayName:"DtComboboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]};const E={label:"Label Text",labelVisible:!0,showList:!0,size:b.DEFAULT,emptyList:!1,loading:!1,clickOnSelect:!1,onEscape:o("escape"),onHighlight:o("highlight"),onSelect:o("select"),onOpened:o("opened"),onItemClick:o("click")},$={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},emptyListItem:{description:"Slot for the empty list item. Defaults to emptyStateMessage prop. It's shown when `emptyList=true`",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(b),control:{type:"select"},table:{defaultValue:{summary:b.DEFAULT}}},description:{control:{type:"text"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},onItemClick:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},K={title:"Components/Combobox",component:C,args:E,argTypes:$,excludeStories:/.*Data$/},I=e=>N(e,G),a={render:I,args:{items:[{name:"combobox item 1",id:1},{name:"combobox item 2",id:2},{name:"combobox item 3",id:3},{name:"combobox item 4",id:4},{name:"combobox item 5",id:5},{name:"combobox item 6",id:6},{name:"combobox item 7",id:7},{name:"combobox item 8",id:8},{name:"combobox item 9",id:9},{name:"combobox item 10",id:10},{name:"combobox item 11",id:11},{name:"combobox item 12",id:12}]}},s={render:I,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0}};var x,v,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [{
      name: 'combobox item 1',
      id: 1
    }, {
      name: 'combobox item 2',
      id: 2
    }, {
      name: 'combobox item 3',
      id: 3
    }, {
      name: 'combobox item 4',
      id: 4
    }, {
      name: 'combobox item 5',
      id: 5
    }, {
      name: 'combobox item 6',
      id: 6
    }, {
      name: 'combobox item 7',
      id: 7
    }, {
      name: 'combobox item 8',
      id: 8
    }, {
      name: 'combobox item 9',
      id: 9
    }, {
      name: 'combobox item 10',
      id: 10
    }, {
      name: 'combobox item 11',
      id: 11
    }, {
      name: 'combobox item 12',
      id: 12
    }]
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var D,_,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  }
}`,...(L=(_=s.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const Q=["argsData","argTypesData","Default","Empty"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Empty:s,__namedExportsOrder:Q,argTypesData:$,argsData:E,default:K},Symbol.toStringTag,{value:"Module"}));export{ie as C,a as D};
//# sourceMappingURL=combobox.stories-eedf65eb.js.map
