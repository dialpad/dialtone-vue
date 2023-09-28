import{a as t}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as O}from"./storybook_utils-1fcbdb2e.js";import{D as _,L as d}from"./combobox-c33ab68d.js";import{D as N}from"./avatar-892227d2.js";import{D as z}from"./input-32357f8c.js";import{D as B}from"./list_item-c45d2a6c.js";import{u as i,o as p,b as u,E as F,w as o,e as y,x as g,m as f,p as H,F as M,B as A,z as j,A as U}from"./vue.esm-bundler-735640fd.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const C={name:"DtComboboxDefault",components:{DtAvatar:N,DtCombobox:_,DtInput:z,DtListItem:B},data(){return{value:"example"}},computed:{displayItems(){return this.$attrs.items}},methods:{onComboboxSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onSelect(e)},onListItemSelect(e){this.value=this.$attrs.items[e].name,this.$attrs.onItemClick(e)},onComboboxEscape(){this.value="",this.$attrs.onEscape()}}},q=["innerHTML"];function Z(e,b,Q,R,l,s){const I=i("dt-input"),w=i("dt-avatar"),T=i("dt-list-item"),V=i("dt-combobox");return p(),u(V,{"empty-state-message":e.$attrs.emptyStateMessage,loading:e.$attrs.loading,"show-list":!!l.value&&e.$attrs.showList,label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,size:e.$attrs.size,description:e.$attrs.description,"empty-list":e.$attrs.emptyList,"empty-state-class":e.$attrs.emptyStateClass,"click-on-select":e.$attrs.clickOnSelect,onEscape:s.onComboboxEscape,onHighlight:e.$attrs.onHighlight,onSelect:s.onComboboxSelect,onOpened:e.$attrs.onOpened},F({input:o(({inputProps:r})=>[g(I,f({modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=m=>l.value=m)},r,{placeholder:"Type to show the items"}),null,16,["modelValue"])]),list:o(({listProps:r})=>[y("ol",f(r,{class:"d-p0 d-mt8 d-hmx332 d-of-y-auto"}),[(p(!0),H(M,null,A(s.displayItems,(m,c)=>(p(),u(T,{key:m.id,role:"option","navigation-type":"arrow-keys",onClick:W=>s.onListItemSelect(c)},{left:o(()=>[g(w,{"full-name":(c+1).toString(),seed:c.toString()},null,8,["full-name","seed"])]),default:o(()=>[j(" "+U(m.name),1)]),_:2},1032,["onClick"]))),128))],16)]),_:2},[e.$attrs.emptyListItem?{name:"emptyListItem",fn:o(()=>[y("span",{innerHTML:e.$attrs.emptyListItem},null,8,q)]),key:"0"}:void 0]),1032,["empty-state-message","loading","show-list","label","label-visible","size","description","empty-list","empty-state-class","click-on-select","onEscape","onHighlight","onSelect","onOpened"])}const G=P(C,[["render",Z],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]]);C.__docgenInfo={displayName:"DtComboboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]};const E={label:"Label Text",labelVisible:!0,showList:!0,size:d.DEFAULT,emptyList:!1,loading:!1,clickOnSelect:!1,onEscape:t("escape"),onHighlight:t("highlight"),onSelect:t("select"),onOpened:t("opened"),onItemClick:t("click")},$={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},emptyListItem:{description:"Slot for the empty list item. Defaults to emptyStateMessage prop. It's shown when `emptyList=true`",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(d),control:{type:"select"},table:{defaultValue:{summary:d.DEFAULT}}},description:{control:{type:"text"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},onItemClick:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},J={title:"Components/Combobox",component:_,args:E,argTypes:$,excludeStories:/.*Data$/},k=e=>O(e,G),a={render:k,args:{items:[{name:"combobox item 1",id:1},{name:"combobox item 2",id:2},{name:"combobox item 3",id:3},{name:"combobox item 4",id:4},{name:"combobox item 5",id:5},{name:"combobox item 6",id:6},{name:"combobox item 7",id:7},{name:"combobox item 8",id:8},{name:"combobox item 9",id:9},{name:"combobox item 10",id:10},{name:"combobox item 11",id:11},{name:"combobox item 12",id:12}]}},n={render:k,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0}};var h,x,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,D,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const K=["argsData","argTypesData","Default","Empty"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Empty:n,__namedExportsOrder:K,argTypesData:$,argsData:E,default:J},Symbol.toStringTag,{value:"Module"}));export{me as C,a as D};
//# sourceMappingURL=combobox.stories-7f40eb45.js.map
