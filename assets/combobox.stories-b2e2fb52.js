import{a as n}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as v}from"./storybook_utils-d749c98e.js";import{D as f,L as r}from"./combobox-11c710f9.js";import{D}from"./avatar-384fc845.js";import{D as S}from"./input-9e7af633.js";import{D as L}from"./list_item-67cb2c5b.js";import{n as C}from"./_plugin-vue2_normalizer-2bbd088e.js";const I={name:"DtComboboxDefault",components:{DtAvatar:D,DtCombobox:f,DtInput:S,DtListItem:L},data(){return{value:"example"}},computed:{displayItems(){return this.items}},methods:{onComboboxSelect(o){this.value=this.items[o].name,this.onSelect(o)},onListItemSelect(o){this.value=this.items[o].name,this.onItemClick(o)},onComboboxEscape(){this.value="",this.onEscape()}}};var E=function(){var e=this,t=e._self._c;return t("dt-combobox",{attrs:{"empty-state-message":e.emptyStateMessage,loading:e.loading,"show-list":!!e.value&&e.showList,label:e.label,"label-visible":e.labelVisible,size:e.size,description:e.description,"empty-list":e.emptyList,"empty-state-class":e.emptyStateClass,"click-on-select":e.clickOnSelect},on:{escape:e.onComboboxEscape,highlight:e.onHighlight,select:e.onComboboxSelect,opened:e.onOpened},scopedSlots:e._u([{key:"input",fn:function({inputProps:i}){return[t("dt-input",e._b({attrs:{placeholder:"Type to show the items"},model:{value:e.value,callback:function(m){e.value=m},expression:"value"}},"dt-input",i,!1))]}},{key:"list",fn:function({listProps:i}){return[t("ol",e._b({staticClass:"d-p0 d-mt8 d-hmx332 d-of-y-auto"},"ol",i,!1),e._l(e.displayItems,function(m,l){return t("dt-list-item",{key:m.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(V){return e.onListItemSelect(l)}}},[t("template",{slot:"left"},[t("dt-avatar",{attrs:{seed:l.toString()}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v(e._s(l+1))])])],1),e._v(" "+e._s(m.name)+" ")],2)}),1)]}}])},[e.emptyListItem?t("template",{slot:"emptyListItem"},[t("span",{domProps:{innerHTML:e._s(e.emptyListItem)}})]):e._e()],2)},k=[],x=C(I,E,k,!1,null,null,null,null);const T=x.exports;x.exports.__docgenInfo={displayName:"DtComboboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]};const h={label:"Label Text",labelVisible:!0,showList:!0,size:r.DEFAULT,emptyList:!1,loading:!1,clickOnSelect:!1,onEscape:n("escape"),onHighlight:n("highlight"),onSelect:n("select"),onOpened:n("opened"),onItemClick:n("click")},g={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},emptyListItem:{description:"Slot for the empty list item. Defaults to emptyStateMessage prop. It's shown when `emptyList=true`",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(r),control:{type:"select"},table:{defaultValue:{summary:r.DEFAULT}}},description:{control:{type:"text"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},onItemClick:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},w={title:"Components/Combobox",component:f,args:h,argTypes:g,excludeStories:/.*Data$/},_=(o,{argTypes:e})=>v(o,e,T),a={render:_,args:{items:[{name:"combobox item 1",id:1},{name:"combobox item 2",id:2},{name:"combobox item 3",id:3},{name:"combobox item 4",id:4},{name:"combobox item 5",id:5},{name:"combobox item 6",id:6},{name:"combobox item 7",id:7},{name:"combobox item 8",id:8},{name:"combobox item 9",id:9},{name:"combobox item 10",id:10},{name:"combobox item 11",id:11},{name:"combobox item 12",id:12}]}},s={render:_,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0}};var c,p,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,u,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const O=["argsData","argTypesData","Default","Empty"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Empty:s,__namedExportsOrder:O,argTypesData:g,argsData:h,default:w},Symbol.toStringTag,{value:"Module"}));export{B as C,a as D};
//# sourceMappingURL=combobox.stories-b2e2fb52.js.map
