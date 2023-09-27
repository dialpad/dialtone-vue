import{a as n}from"./chunk-AY7I2SME-5eb1ab46.js";import{h as S}from"./storybook_utils-3d298cfc.js";import{D as x,L as r}from"./combobox-96d35a8f.js";import{D}from"./avatar-a01e14cf.js";import{D as L}from"./input-35b7a717.js";import{D as C}from"./list_item-4fbae74d.js";import{n as I}from"./_plugin-vue2_normalizer-2bbd088e.js";const E={name:"DtComboboxDefault",components:{DtAvatar:D,DtCombobox:x,DtInput:L,DtListItem:C},data(){return{value:"example"}},computed:{displayItems(){return this.items}},methods:{onComboboxSelect(t){this.value=this.items[t].name,this.onSelect(t)},onListItemSelect(t){this.value=this.items[t].name,this.onItemClick(t)},onComboboxEscape(){this.value="",this.onEscape()}}};var h=function(){var e=this,o=e._self._c;return o("dt-combobox",{attrs:{"empty-state-message":e.emptyStateMessage,loading:e.loading,"show-list":!!e.value&&e.showList,label:e.label,"label-visible":e.labelVisible,size:e.size,description:e.description,"empty-list":e.emptyList,"empty-state-class":e.emptyStateClass,"click-on-select":e.clickOnSelect},on:{escape:e.onComboboxEscape,highlight:e.onHighlight,select:e.onComboboxSelect,opened:e.onOpened},scopedSlots:e._u([{key:"input",fn:function({inputProps:i}){return[o("dt-input",e._b({attrs:{placeholder:"Type to show the items"},model:{value:e.value,callback:function(m){e.value=m},expression:"value"}},"dt-input",i,!1))]}},{key:"list",fn:function({listProps:i}){return[o("ol",e._b({staticClass:"d-p0 d-mt8 d-hmx332 d-of-y-auto"},"ol",i,!1),e._l(e.displayItems,function(m,l){return o("dt-list-item",{key:m.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(V){return e.onListItemSelect(l)}}},[o("template",{slot:"left"},[o("dt-avatar",{attrs:{"full-name":(l+1).toString(),seed:l.toString()}})],1),e._v(" "+e._s(m.name)+" ")],2)}),1)]}}])},[e.emptyListItem?o("template",{slot:"emptyListItem"},[o("span",{domProps:{innerHTML:e._s(e.emptyListItem)}})]):e._e()],2)},k=[];h._withStripped=!0;var c=I(E,h,k,!1,null,null,null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue";const w=c.exports;c.exports.__docgenInfo={displayName:"DtComboboxDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/combobox/combobox_default.story.vue"]};const g={label:"Label Text",labelVisible:!0,showList:!0,size:r.DEFAULT,emptyList:!1,loading:!1,clickOnSelect:!1,onEscape:n("escape"),onHighlight:n("highlight"),onSelect:n("select"),onOpened:n("opened"),onItemClick:n("click")},_={input:{description:"Slot for the input component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},list:{description:"Slot for the list component",control:"text",table:{category:"slots",type:{summary:"VNode"}}},emptyListItem:{description:"Slot for the empty list item. Defaults to emptyStateMessage prop. It's shown when `emptyList=true`",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},size:{options:Object.values(r),control:{type:"select"},table:{defaultValue:{summary:r.DEFAULT}}},description:{control:{type:"text"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},onBeginningOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEndOfList:{table:{category:"props",type:{summary:"function"},defaultValue:{summary:"null"}}},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onSelect:{table:{disable:!0}},onOpened:{table:{disable:!0}},onItemClick:{table:{disable:!0}},escape:{description:"Event fired when pressing escape",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}},select:{description:"Select item event",table:{type:{summary:"event"}}},opened:{description:"Event fired when list is shown or hidden.",table:{type:{summary:"event"}}},items:{table:{disable:!0}}},T={title:"Components/Combobox",component:x,args:g,argTypes:_,excludeStories:/.*Data$/},v=(t,{argTypes:e})=>S(t,e,w),a={render:v,args:{items:[{name:"combobox item 1",id:1},{name:"combobox item 2",id:2},{name:"combobox item 3",id:3},{name:"combobox item 4",id:4},{name:"combobox item 5",id:5},{name:"combobox item 6",id:6},{name:"combobox item 7",id:7},{name:"combobox item 8",id:8},{name:"combobox item 9",id:9},{name:"combobox item 10",id:10},{name:"combobox item 11",id:11},{name:"combobox item 12",id:12}]}},s={render:v,args:{items:[],emptyStateMessage:"No matches found.",emptyList:!0}};var p,b,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(b=a.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var u,y,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    items: [],
    emptyStateMessage: 'No matches found.',
    emptyList: true
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const O=["argsData","argTypesData","Default","Empty"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Empty:s,__namedExportsOrder:O,argTypesData:_,argsData:g,default:T},Symbol.toStringTag,{value:"Module"}));export{B as C,a as D};
//# sourceMappingURL=combobox.stories-593797b3.js.map
