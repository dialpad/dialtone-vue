import{a as l}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as h}from"./storybook_utils-996a989f.js";import{D as x,I as n,M as v}from"./combobox_multi_select-bfcd9568.js";import{D as M}from"./list_item-fc4592f3.js";import{n as C}from"./_plugin-vue2_normalizer-2bbd088e.js";const $={name:"DtRecipeComboboxMultiSelectDefault",components:{DtRecipeComboboxMultiSelect:x,DtListItem:M},data(){return{items:n}},methods:{onComboboxInput(t){this.items=n.filter(e=>e.value.includes(t)),this.onInput(t)},onComboboxSelect(t){if(this.items[t]){this.onSelect(t);const e=this.items[t].value;if(this.selectedItems.includes(e))return;this.selectedItems.push(e),this.$refs.comboboxMultiSelect.$data.value="",this.items=n}},onComboboxMaxSelected(){this.$attrs.onMaxSelected()},onComboboxRemove(t){this.onRemove(t);const e=this.selectedItems.indexOf(t);e<0||this.selectedItems.splice(e,1)}}};var f=function(){var e=this,o=e._self._c;return o("dt-recipe-combobox-multi-select",{ref:"comboboxMultiSelect",attrs:{label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,description:e.$attrs.description,size:e.$attrs.size,loading:e.$attrs.loading,"loading-message":e.$attrs.loadingMessage,"show-list":e.$attrs.showList,"selected-items":e.$attrs.selectedItems,"max-selected":e.$attrs.maxSelected,"list-max-height":e.$attrs.listMaxHeight,"max-selected-message":e.$attrs.maxSelectedMessage,"has-suggestion-list":e.$attrs.hasSuggestionList,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"append-to":e.$attrs.appendTo,transition:e.$attrs.transition},on:{input:e.onComboboxInput,select:e.onComboboxSelect,remove:e.onComboboxRemove,"max-selected":e.onComboboxMaxSelected},scopedSlots:e._u([e.$attrs.header?{key:"header",fn:function(){return[o("span",{domProps:{innerHTML:e._s(e.$attrs.header)}})]},proxy:!0}:null,{key:"list",fn:function(){return[o("ul",{staticClass:"d-ps-relative d-stack2 d-m4 d-px0"},e._l(e.items,function(r,y){return o("dt-list-item",{key:r.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(R){return e.onComboboxSelect(y)}},scopedSlots:e._u([{key:"right",fn:function(){return[o("span",{staticClass:"d-fc-secondary"},[e._v(e._s(r.type))])]},proxy:!0}],null,!0)},[e._v(" "+e._s(r.value)+" ")])}),1)]},proxy:!0},e.$attrs.footer?{key:"footer",fn:function(){return[o("span",{domProps:{innerHTML:e._s(e.$attrs.footer)}})]},proxy:!0}:null],null,!0)})},I=[];f._withStripped=!0;var i=C($,f,I,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue";const T=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeComboboxMultiSelectDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]};const S={label:"Label Text",labelVisible:!0,listMaxHeight:"300px",loading:!1,loadingMessage:"loading...",selectedItems:[],maxSelected:0,maxSelectedMessage:[],hasSuggestionList:!0,appendTo:"body",showList:null,onInput:l("input"),onSelect:l("select"),onRemove:l("remove"),onMaxSelected:l("maxSelected"),visuallyHiddenCloseLabel:"Close Combobox"},_={list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},description:{control:{type:"text"}},appendTo:{table:{defaultValue:{summary:"body"}}},size:{control:{type:"select"},options:Object.values(v)},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onInput:{table:{disable:!0}},onSelect:{table:{disable:!0}},onMaxSelected:{table:{disable:!0}},onRemove:{table:{disable:!0}},select:{description:"Select item event",table:{type:{summary:"event"}}}},D={title:"Recipes/Comboboxes/Combobox Multi-Select",component:x,args:S,argTypes:_,excludeStories:/.*Data$/},g=(t,{argTypes:e})=>h(t,e,T),s={render:g},a={render:g,args:{description:"Select up to 2 options.",maxSelected:2,selectedItems:["item12","item13","item14"],maxSelectedMessage:[{message:"More than 2 selected",type:"error"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"label",enabled:!1}]}}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    description: 'Select up to 2 options.',
    maxSelected: 2,
    selectedItems: ['item12', 'item13', 'item14'],
    maxSelectedMessage: [{
      message: 'More than 2 selected',
      type: 'error'
    }]
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }, {
          id: 'label',
          enabled: false
        }]
      }
    }
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const L=["argsData","argTypesData","Default","WithMaxSelectValidation"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithMaxSelectValidation:a,__namedExportsOrder:L,argTypesData:_,argsData:S,default:D},Symbol.toStringTag,{value:"Module"}));export{z as C,s as D};
//# sourceMappingURL=combobox_multi_select.stories-ff837791.js.map
