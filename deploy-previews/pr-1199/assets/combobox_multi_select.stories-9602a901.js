import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{h}from"./storybook_utils-8047579d.js";import{D as x,I as r,M as v}from"./combobox_multi_select-f9a40dfc.js";import{D as M}from"./list_item-6aa7a04c.js";import{n as C}from"./_plugin-vue2_normalizer-2bbd088e.js";const I={name:"DtRecipeComboboxMultiSelectDefault",components:{DtRecipeComboboxMultiSelect:x,DtListItem:M},data(){return{items:r}},methods:{onComboboxInput(t){this.items=r.filter(e=>e.value.includes(t)),this.onInput(t)},onComboboxSelect(t){if(this.items[t]){this.onSelect(t);const e=this.items[t].value;if(this.selectedItems.includes(e))return;this.selectedItems.push(e),this.$refs.comboboxMultiSelect.$data.value="",this.items=r}},onComboboxMaxSelected(){this.onMaxSelected()},onComboboxRemove(t){this.onRemove(t);const e=this.selectedItems.indexOf(t);e<0||this.selectedItems.splice(e,1)}}};var f=function(){var e=this,o=e._self._c;return o("dt-recipe-combobox-multi-select",{ref:"comboboxMultiSelect",attrs:{label:e.label,"label-visible":e.labelVisible,description:e.description,size:e.size,loading:e.loading,"loading-message":e.loadingMessage,"show-list":e.showList,"selected-items":e.selectedItems,"max-selected":e.maxSelected,"list-max-height":e.listMaxHeight,"max-selected-message":e.maxSelectedMessage,"has-suggestion-list":e.hasSuggestionList,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,"append-to":e.appendTo,transition:e.transition},on:{input:e.onComboboxInput,select:e.onComboboxSelect,remove:e.onComboboxRemove,"max-selected":e.onComboboxMaxSelected},scopedSlots:e._u([e.header?{key:"header",fn:function(){return[o("span",{domProps:{innerHTML:e._s(e.header)}})]},proxy:!0}:null,{key:"list",fn:function(){return[o("ul",{staticClass:"d-ps-relative d-stack2 d-m4 d-px0"},e._l(e.items,function(n,y){return o("dt-list-item",{key:n.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(k){return e.onComboboxSelect(y)}},scopedSlots:e._u([{key:"right",fn:function(){return[o("span",{staticClass:"d-fc-secondary"},[e._v(e._s(n.type))])]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.value)+" ")])}),1)]},proxy:!0},e.footer?{key:"footer",fn:function(){return[o("span",{domProps:{innerHTML:e._s(e.footer)}})]},proxy:!0}:null],null,!0)})},T=[];f._withStripped=!0;var i=C(I,f,T,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue";const D=i.exports;i.exports.__docgenInfo={displayName:"DtRecipeComboboxMultiSelectDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]};const S={label:"Label Text",labelVisible:!0,listMaxHeight:"300px",loading:!1,loadingMessage:"loading...",selectedItems:[],maxSelected:0,maxSelectedMessage:[],hasSuggestionList:!0,appendTo:"body",showList:null,onInput:a("input"),onSelect:a("select"),onRemove:a("remove"),onMaxSelected:a("maxSelected"),visuallyHiddenCloseLabel:"Close Combobox"},_={list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},description:{control:{type:"text"}},appendTo:{table:{defaultValue:{summary:"body"}}},size:{control:{type:"select"},options:Object.values(v)},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onInput:{table:{disable:!0}},onSelect:{table:{disable:!0}},onMaxSelected:{table:{disable:!0}},onRemove:{table:{disable:!0}},select:{description:"Select item event",table:{type:{summary:"event"}}}},L={title:"Recipes/Comboboxes/Combobox Multi-Select",component:x,args:S,argTypes:_,excludeStories:/.*Data$/},g=(t,{argTypes:e})=>h(t,e,D),s={render:g},l={render:g,args:{description:"Select up to 2 options.",maxSelected:2,selectedItems:["item12","item13","item14"],maxSelectedMessage:[{message:"More than 2 selected",type:"error"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"label",enabled:!1}]}}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const R=["argsData","argTypesData","Default","WithMaxSelectValidation"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithMaxSelectValidation:l,__namedExportsOrder:R,argTypesData:_,argsData:S,default:L},Symbol.toStringTag,{value:"Module"}));export{N as C,s as D};
//# sourceMappingURL=combobox_multi_select.stories-9602a901.js.map
