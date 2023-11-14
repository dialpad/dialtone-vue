import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as S}from"./storybook_utils-cf049d2e.js";import{D as x,L as l}from"./combobox-11432eb2.js";import{D}from"./avatar-12012baa.js";import{D as L}from"./input-b177d5a3.js";import{D as $}from"./list_item-8fa4cee4.js";import{n as C}from"./_plugin-vue2_normalizer-2bbd088e.js";const I={name:"DtComboboxDefault",components:{DtAvatar:D,DtCombobox:x,DtInput:L,DtListItem:$},data(){return{value:"example"}},computed:{displayItems(){return this.$attrs.items}},methods:{onComboboxSelect(t){this.value=this.$attrs.items[t].name,this.$attrs.onSelect(t)},onListItemSelect(t){this.value=this.$attrs.items[t].name,this.$attrs.onItemClick(t)},onComboboxEscape(){this.value="",this.$attrs.onEscape()}}};var h=function(){var e=this,o=e._self._c;return o("dt-combobox",{attrs:{"empty-state-message":e.$attrs.emptyStateMessage,loading:e.$attrs.loading,"show-list":!!e.value&&e.$attrs.showList,label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,size:e.$attrs.size,description:e.$attrs.description,"empty-list":e.$attrs.emptyList,"empty-state-class":e.$attrs.emptyStateClass,"click-on-select":e.$attrs.clickOnSelect},on:{escape:e.onComboboxEscape,highlight:e.$attrs.onHighlight,select:e.onComboboxSelect,opened:e.$attrs.onOpened},scopedSlots:e._u([{key:"input",fn:function({inputProps:i}){return[o("dt-input",e._b({attrs:{placeholder:"Type to show the items"},model:{value:e.value,callback:function(m){e.value=m},expression:"value"}},"dt-input",i,!1))]}},{key:"list",fn:function({listProps:i}){return[o("ol",e._b({staticClass:"d-p0 d-mt8 d-hmx332 d-of-y-auto"},"ol",i,!1),e._l(e.displayItems,function(m,r){return o("dt-list-item",{key:m.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(O){return e.onListItemSelect(r)}}},[o("template",{slot:"left"},[o("dt-avatar",{attrs:{"full-name":(r+1).toString(),seed:r.toString()}})],1),e._v(" "+e._s(m.name)+" ")],2)}),1)]}}])},[e.$attrs.emptyListItem?o("template",{slot:"emptyListItem"},[o("span",{domProps:{innerHTML:e._s(e.$attrs.emptyListItem)}})]):e._e()],2)},E=[];h._withStripped=!0;var c=C(I,h,E,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue";const k=c.exports;c.exports.__docgenInfo={displayName:"DtComboboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]};const g={label:"Label Text",labelVisible:!0,showList:!0,size:l.DEFAULT,emptyList:!1,loading:!1,clickOnSelect:!1,onEscape:a("escape"),onHighlight:a("highlight"),onSelect:a("select"),onOpened:a("opened"),onItemClick:a("click")},_={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},emptyListItem:{description:"Slot for the empty list item. Defaults to emptyStateMessage prop. It's shown when `emptyList=true`",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(l),control:{type:"select"},table:{defaultValue:{summary:l.DEFAULT}}},description:{control:{type:"text"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},onItemClick:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},w={title:"Components/Combobox",component:x,args:g,argTypes:_,excludeStories:/.*Data$/},v=(t,{argTypes:e})=>S(t,e,k),n={render:v,args:{items:[{name:"combobox item 1",id:1},{name:"combobox item 2",id:2},{name:"combobox item 3",id:3},{name:"combobox item 4",id:4},{name:"combobox item 5",id:5},{name:"combobox item 6",id:6},{name:"combobox item 7",id:7},{name:"combobox item 8",id:8},{name:"combobox item 9",id:9},{name:"combobox item 10",id:10},{name:"combobox item 11",id:11},{name:"combobox item 12",id:12}]}},s={render:v,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0}};var p,b,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(b=n.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var u,y,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const T=["argsData","argTypesData","Default","Empty"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Empty:s,__namedExportsOrder:T,argTypesData:_,argsData:g,default:w},Symbol.toStringTag,{value:"Module"}));export{j as C,n as D};
//# sourceMappingURL=combobox.stories-65197c7f.js.map
