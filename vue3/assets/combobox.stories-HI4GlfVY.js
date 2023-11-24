import{a as t}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as O}from"./storybook_utils-dy5aucTw.js";import{D as _,L as b}from"./combobox-6ht2vb2v.js";import{D as N}from"./avatar-Rnq9lpvE.js";import{D as B}from"./input-ivLChdgg.js";import{D as F}from"./list_item-8zDNiA2P.js";import{s as l,o as d,b as u,B as H,w as o,e as y,m as g,u as f,F as M,y as z,x as A,G as j,k as U}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as P}from"./_plugin-vue_export-helper-x3n3nnut.js";const C={name:"DtComboboxDefault",components:{DtAvatar:N,DtCombobox:_,DtInput:B,DtListItem:F},data(){return{value:"example"}},computed:{displayItems(){return this.$attrs.items}},methods:{onComboboxSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onSelect(e)},onListItemSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onItemClick(e)},onComboboxEscape(){this.value="",this.$attrs.onEscape()}}},q=["innerHTML"];function G(e,n,Q,R,r,m){const I=l("dt-input"),T=l("dt-avatar"),V=l("dt-list-item"),w=l("dt-combobox");return d(),u(w,{"empty-state-message":e.$attrs.emptyStateMessage,loading:e.$attrs.loading,"show-list":!!r.value&&e.$attrs.showList,label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,size:e.$attrs.size,description:e.$attrs.description,"empty-list":e.$attrs.emptyList,"empty-state-class":e.$attrs.emptyStateClass,"click-on-select":e.$attrs.clickOnSelect,onEscape:m.onComboboxEscape,onHighlight:e.$attrs.onHighlight,onSelect:m.onComboboxSelect,onOpened:e.$attrs.onOpened},H({input:o(({inputProps:c})=>[f(I,g({modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=i=>r.value=i)},c,{placeholder:"Type to show the items"}),null,16,["modelValue"])]),list:o(({listProps:c})=>[y("ol",g(c,{class:"d-p0 d-mt8 d-hmx332 d-of-y-auto"}),[(d(!0),U(M,null,j(m.displayItems,(i,p)=>(d(),u(V,{key:i.id,role:"option","navigation-type":"arrow-keys",onClick:W=>m.onListItemSelect(p)},{left:o(()=>[f(T,{"full-name":(p+1).toString(),seed:p.toString()},null,8,["full-name","seed"])]),default:o(()=>[A(" "+z(i.name),1)]),_:2},1032,["onClick"]))),128))],16)]),_:2},[e.$attrs.emptyListItem?{name:"emptyListItem",fn:o(()=>[y("span",{innerHTML:e.$attrs.emptyListItem},null,8,q)]),key:"0"}:void 0]),1032,["empty-state-message","loading","show-list","label","label-visible","size","description","empty-list","empty-state-class","click-on-select","onEscape","onHighlight","onSelect","onOpened"])}const Z=P(C,[["render",G]]);C.__docgenInfo={displayName:"DtComboboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]};const E={label:"Label Text",labelVisible:!0,showList:!0,size:b.DEFAULT,emptyList:!1,loading:!1,clickOnSelect:!1,onEscape:t("escape"),onHighlight:t("highlight"),onSelect:t("select"),onOpened:t("opened"),onItemClick:t("click")},$={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},emptyListItem:{description:"Slot for the empty list item. Defaults to emptyStateMessage prop. It's shown when `emptyList=true`",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(b),control:{type:"select"},table:{defaultValue:{summary:b.DEFAULT}}},description:{control:{type:"text"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},onItemClick:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},J={title:"Components/Combobox",component:_,args:E,argTypes:$,excludeStories:/.*Data$/},k=(e,{argTypes:n})=>O(e,n,Z),a={render:k,args:{items:[{name:"combobox item 1",id:1},{name:"combobox item 2",id:2},{name:"combobox item 3",id:3},{name:"combobox item 4",id:4},{name:"combobox item 5",id:5},{name:"combobox item 6",id:6},{name:"combobox item 7",id:7},{name:"combobox item 8",id:8},{name:"combobox item 9",id:9},{name:"combobox item 10",id:10},{name:"combobox item 11",id:11},{name:"combobox item 12",id:12}]}},s={render:k,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0}};var h,x,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var D,v,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  }
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const K=["argsData","argTypesData","Default","Empty"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Empty:s,__namedExportsOrder:K,argTypesData:$,argsData:E,default:J},Symbol.toStringTag,{value:"Module"}));export{me as C,a as D};
//# sourceMappingURL=combobox.stories-HI4GlfVY.js.map