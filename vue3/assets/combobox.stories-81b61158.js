import{a as o}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as N}from"./storybook_utils-ea1afa1b.js";import{D as C,L as b}from"./combobox-26c3d112.js";import{D as F}from"./avatar-d98191d8.js";import{D as H}from"./input-4646a0d3.js";import{D as M}from"./list_item-50faabc4.js";import{a as i,o as p,b as y,y as z,w as t,f as d,d as g,m as h,e as B,F as A,s as j,t as f,q as U}from"./vue.esm-bundler-8a039e44.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const E={name:"DtComboboxDefault",components:{DtAvatar:F,DtCombobox:C,DtInput:H,DtListItem:M},data(){return{value:"example"}},computed:{displayItems(){return this.$attrs.items}},methods:{onComboboxSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onSelect(e)},onListItemSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onItemClick(e)},onComboboxEscape(){this.value="",this.$attrs.onEscape()}}},P={"aria-hidden":"true"},Z=["innerHTML"];function G(e,u,R,W,r,n){const T=i("dt-input"),V=i("dt-avatar"),w=i("dt-list-item"),O=i("dt-combobox");return p(),y(O,{"empty-state-message":e.$attrs.emptyStateMessage,loading:e.$attrs.loading,"show-list":!!r.value&&e.$attrs.showList,label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,size:e.$attrs.size,description:e.$attrs.description,"empty-list":e.$attrs.emptyList,"empty-state-class":e.$attrs.emptyStateClass,"click-on-select":e.$attrs.clickOnSelect,onEscape:n.onComboboxEscape,onHighlight:e.$attrs.onHighlight,onSelect:n.onComboboxSelect,onOpened:e.$attrs.onOpened},z({input:t(({inputProps:l})=>[g(T,h({modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=m=>r.value=m)},l,{placeholder:"Type to show the items"}),null,16,["modelValue"])]),list:t(({listProps:l})=>[d("ol",h(l,{class:"d-p0 d-mt8 d-hmx332 d-of-y-auto"}),[(p(!0),B(A,null,j(n.displayItems,(m,c)=>(p(),y(w,{key:m.id,role:"option","navigation-type":"arrow-keys",onClick:X=>n.onListItemSelect(c)},{left:t(()=>[g(V,{seed:c.toString()},{default:t(()=>[d("span",P,f(c+1),1)]),_:2},1032,["seed"])]),default:t(()=>[U(" "+f(m.name),1)]),_:2},1032,["onClick"]))),128))],16)]),_:2},[e.$attrs.emptyListItem?{name:"emptyListItem",fn:t(()=>[d("span",{innerHTML:e.$attrs.emptyListItem},null,8,Z)]),key:"0"}:void 0]),1032,["empty-state-message","loading","show-list","label","label-visible","size","description","empty-list","empty-state-class","click-on-select","onEscape","onHighlight","onSelect","onOpened"])}const J=q(E,[["render",G]]);E.__docgenInfo={displayName:"DtComboboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]};const $={label:"Label Text",labelVisible:!0,showList:!0,size:b.DEFAULT,emptyList:!1,loading:!1,clickOnSelect:!1,onEscape:o("escape"),onHighlight:o("highlight"),onSelect:o("select"),onOpened:o("opened"),onItemClick:o("click")},I={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},emptyListItem:{description:"Slot for the empty list item. Defaults to emptyStateMessage prop. It's shown when `emptyList=true`",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(b),control:{type:"select"},table:{defaultValue:{summary:b.DEFAULT}}},description:{control:{type:"text"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},onItemClick:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},K={title:"Components/Combobox",component:C,args:$,argTypes:I,excludeStories:/.*Data$/},k=e=>N(e,J),a={render:k,args:{items:[{name:"combobox item 1",id:1},{name:"combobox item 2",id:2},{name:"combobox item 3",id:3},{name:"combobox item 4",id:4},{name:"combobox item 5",id:5},{name:"combobox item 6",id:6},{name:"combobox item 7",id:7},{name:"combobox item 8",id:8},{name:"combobox item 9",id:9},{name:"combobox item 10",id:10},{name:"combobox item 11",id:11},{name:"combobox item 12",id:12}]}},s={render:k,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0}};var x,S,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var v,L,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  }
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const Q=["argsData","argTypesData","Default","Empty"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Empty:s,__namedExportsOrder:Q,argTypesData:I,argsData:$,default:K},Symbol.toStringTag,{value:"Module"}));export{ie as C,a as D};
//# sourceMappingURL=combobox.stories-81b61158.js.map
