import{a as n}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as L}from"./storybook_utils-dy5aucTw.js";import{D as x,I as c,M as w}from"./combobox_multi_select-wmMf_tmK.js";import{D as k}from"./list_item-F9e21eYw.js";import{s as m,o as d,b as p,C as R,w as s,e as r,F as V,y as u,x as H,z as E,k as N}from"./vue.esm-bundler-k9jVJOu7.js";import{_ as z}from"./_plugin-vue_export-helper-x3n3nnut.js";const v={name:"DtRecipeComboboxMultiSelectDefault",components:{DtRecipeComboboxMultiSelect:x,DtListItem:k},data(){return{items:c}},methods:{onComboboxInput(e){this.items=c.filter(t=>t.value.includes(e)),this.$attrs.onInput(e)},onComboboxSelect(e){if(this.items[e]){this.$attrs.onSelect(e);const t=this.items[e].value;if(this.$attrs.selectedItems.includes(t))return;this.$attrs.selectedItems.push(t),this.$refs.comboboxMultiSelect.$data.value="",this.items=c}},onComboboxRemove(e){this.$attrs.onRemove(e);const t=this.$attrs.selectedItems.indexOf(e);t<0||this.$attrs.selectedItems.splice(t,1)}}},F=["innerHTML"],O={class:"d-ps-relative d-stack2 d-m4 d-px0"},B={class:"d-fc-secondary"},j=["innerHTML"];function A(e,t,Z,q,C,l){const I=m("dt-list-item"),T=m("dt-recipe-combobox-multi-select");return d(),p(T,{ref:"comboboxMultiSelect",label:e.$attrs.label,"label-visible":e.$attrs.labelVisible,description:e.$attrs.description,size:e.$attrs.size,placeholder:e.$attrs.placeholder,"input-messages":e.$attrs.inputMessages,"show-input-messages":e.$attrs.showInputMessages,loading:e.$attrs.loading,"loading-message":e.$attrs.loadingMessage,"show-list":e.$attrs.showList,"selected-items":e.$attrs.selectedItems,"max-selected":e.$attrs.maxSelected,"list-max-height":e.$attrs.listMaxHeight,"max-selected-message":e.$attrs.maxSelectedMessage,"has-suggestion-list":e.$attrs.hasSuggestionList,"visually-hidden-close":e.$attrs.visuallyHiddenClose,"visually-hidden-close-label":e.$attrs.visuallyHiddenCloseLabel,"append-to":e.$attrs.appendTo,transition:e.$attrs.transition,onInput:l.onComboboxInput,onSelect:l.onComboboxSelect,onRemove:l.onComboboxRemove,onMaxSelected:e.$attrs.onMaxSelected},R({list:s(()=>[r("ul",O,[(d(!0),N(V,null,E(C.items,(i,D)=>(d(),p(I,{key:i.id,role:"option","navigation-type":"arrow-keys",onClick:G=>l.onComboboxSelect(D)},{right:s(()=>[r("span",B,u(i.type),1)]),default:s(()=>[H(u(i.value)+" ",1)]),_:2},1032,["onClick"]))),128))])]),_:2},[e.$attrs.header?{name:"header",fn:s(()=>[r("span",{innerHTML:e.$attrs.header},null,8,F)]),key:"0"}:void 0,e.$attrs.footer?{name:"footer",fn:s(()=>[r("span",{innerHTML:e.$attrs.footer},null,8,j)]),key:"1"}:void 0]),1032,["label","label-visible","description","size","placeholder","input-messages","show-input-messages","loading","loading-message","show-list","selected-items","max-selected","list-max-height","max-selected-message","has-suggestion-list","visually-hidden-close","visually-hidden-close-label","append-to","transition","onInput","onSelect","onRemove","onMaxSelected"])}const W=z(v,[["render",A],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]]);v.__docgenInfo={displayName:"DtRecipeComboboxMultiSelectDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/comboboxes/combobox_multi_select/combobox_multi_select_default.story.vue"]};const M={label:"Label Text",labelVisible:!0,listMaxHeight:"300px",loading:!1,loadingMessage:"loading...",selectedItems:[],maxSelected:0,maxSelectedMessage:[],hasSuggestionList:!0,appendTo:"body",showList:null,onInput:n("input"),onSelect:n("select"),onRemove:n("remove"),onMaxSelected:n("maxSelected"),visuallyHiddenCloseLabel:"Close Combobox"},$={list:{description:"Slot for the list",control:"text",table:{category:"slots",type:{summary:"VNode"}}},header:{description:"Slot for popover header content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},footer:{description:"Slot for popover footer content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},label:{control:{type:"text"}},description:{control:{type:"text"}},appendTo:{table:{defaultValue:{summary:"body"}}},size:{control:{type:"select"},options:Object.values(w)},onEscape:{table:{disable:!0}},onHighlight:{table:{disable:!0}},onInput:{table:{disable:!0}},onSelect:{table:{disable:!0}},onMaxSelected:{table:{disable:!0}},onRemove:{table:{disable:!0}},select:{description:"Select item event",table:{type:{summary:"event"}}}},P={title:"Recipes/Comboboxes/Combobox Multi-Select",component:x,args:M,argTypes:$,excludeStories:/.*Data$/},_=(e,{argTypes:t})=>L(e,t,W),o={render:_},a={render:_,args:{description:"Select up to 2 options.",maxSelected:2,selectedItems:["item12","item13","item14"],maxSelectedMessage:[{message:"More than 2 selected",type:"error"}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1},{id:"label",enabled:!1}]}},percy:{args:{showList:!0}}}};var b,g,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,f,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const U=["argsData","argTypesData","Default","WithMaxSelectValidation"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithMaxSelectValidation:a,__namedExportsOrder:U,argTypesData:$,argsData:M,default:P},Symbol.toStringTag,{value:"Module"}));export{te as C,o as D};
//# sourceMappingURL=combobox_multi_select.stories-lttu9_oS.js.map
