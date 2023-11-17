import{a as r}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as _}from"./storybook_utils-XrTpeJKJ.js";import{D as b,I as n,M as h}from"./combobox_multi_select-VQtft7-u.js";import{D as v}from"./list_item-1VXvjlTC.js";import{n as $}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const M={name:"DtRecipeComboboxMultiSelectDefault",components:{DtRecipeComboboxMultiSelect:b,DtListItem:v},data(){return{items:n}},methods:{onComboboxInput(t){this.items=n.filter(e=>e.value.includes(t)),this.$attrs.onInput(t)},onComboboxSelect(t){if(this.items[t]){this.$attrs.onSelect(t);const e=this.items[t].value;if(this.$attrs.selectedItems.includes(e))return;this.$attrs.selectedItems.push(e),this.$refs.comboboxMultiSelect.$data.value="",this.items=n}},onComboboxRemove(t){this.$attrs.onRemove(t);const e=this.$attrs.selectedItems.indexOf(t);e<0||this.$attrs.selectedItems.splice(e,1)}}};var C=function(){var e=this,o=e._self._c;return o("dt-recipe-combobox-multi-select",{ref:"comboboxMultiSelect",attrs:{label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,description:e.$attrs.description,size:e.$attrs.size,loading:e.$attrs.loading,"loading-message":e.$attrs.loadingMessage,"show-list":e.$attrs.showList,"selected-items":e.$attrs.selectedItems,"max-selected":e.$attrs.maxSelected,"list-max-height":e.$attrs.listMaxHeight,"max-selected-message":e.$attrs.maxSelectedMessage,"has-suggestion-list":e.$attrs.hasSuggestionList,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"append-to":e.$attrs.appendTo,transition:e.$attrs.transition},on:{input:e.onComboboxInput,select:e.onComboboxSelect,remove:e.onComboboxRemove,"max-selected":e.$attrs.onMaxSelected},scopedSlots:e._u([e.$attrs.header?{key:"header",fn:function(){return[o("span",{domProps:{innerHTML:e._s(e.$attrs.header)}})]},proxy:!0}:null,{key:"list",fn:function(){return[o("ul",{staticClass:"d-ps-relative d-stack2 d-m4 d-px0"},e._l(e.items,function(l,y){return o("dt-list-item",{key:l.id,attrs:{role:"option","navigation-type":"arrow-keys"},on:{click:function(R){return e.onComboboxSelect(y)}},scopedSlots:e._u([{key:"right",fn:function(){return[o("span",{staticClass:"d-fc-secondary"},[e._v(e._s(l.type))])]},proxy:!0}],null,!0)},[e._v(" "+e._s(l.value)+" ")])}),1)]},proxy:!0},e.$attrs.footer?{key:"footer",fn:function(){return[o("span",{domProps:{innerHTML:e._s(e.$attrs.footer)}})]},proxy:!0}:null],null,!0)})},I=[],x=$(M,C,I,!1,null,null,null,null);const T=x.exports;x.exports.__docgenInfo={displayName:"DtRecipeComboboxMultiSelectDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]};const f={label:"Label Text",labelVisible:!0,listMaxHeight:"300px",loading:!1,loadingMessage:"loading...",selectedItems:[],maxSelected:0,maxSelectedMessage:[],hasSuggestionList:!0,appendTo:"body",showList:null,onInput:r("input"),onSelect:r("select"),onRemove:r("remove"),onMaxSelected:r("maxSelected"),visuallyHiddenCloseLabel:"Close Combobox"},g={list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},description:{control:{type:"text"}},appendTo:{table:{defaultValue:{summary:"body"}}},size:{control:{type:"select"},options:Object.values(h)},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onInput:{table:{disable:!0}},onSelect:{table:{disable:!0}},onMaxSelected:{table:{disable:!0}},onRemove:{table:{disable:!0}},select:{description:"Select item event",table:{type:{summary:"event"}}}},D={title:"Recipes/Comboboxes/Combobox Multi-Select",component:b,args:f,argTypes:g,excludeStories:/.*Data$/},S=(t,{argTypes:e})=>_(t,e,T),s={render:S},a={render:S,args:{description:"Select up to 2 options.",maxSelected:2,selectedItems:["item12","item13","item14"],maxSelectedMessage:[{message:"More than 2 selected",type:"error"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"label",enabled:!1}]}},percy:{args:{showList:!0}}}};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    },
    percy: {
      args: {
        showList: true
      }
    }
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const L=["argsData","argTypesData","Default","WithMaxSelectValidation"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithMaxSelectValidation:a,__namedExportsOrder:L,argTypesData:g,argsData:f,default:D},Symbol.toStringTag,{value:"Module"}));export{z as C,s as D};
//# sourceMappingURL=combobox_multi_select.stories-qhs_tRhP.js.map
