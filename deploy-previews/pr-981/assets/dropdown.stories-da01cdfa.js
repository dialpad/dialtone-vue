import{a as c}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as _}from"./storybook_utils-58c64c5e.js";import{D as r,a as I}from"./dropdown_separator-df16d694.js";import{D as h,L as b}from"./list_item-9b6a7e3e.js";import{D as w}from"./button-b421fc95.js";import{n as D}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as P}from"./list_item_group-8f35d4c7.js";import{P as V,a as M}from"./popover-c600b865.js";import{D as H}from"./dropdown_constants-d0cadac9.js";const T=[{name:"Menu item 1",id:1},{name:"Menu item 2",id:2},{name:"Another menu item 1",id:3},{name:"Menu item 3",id:4},{name:"Another menu item 2",id:5}],N={name:"DtDropdownDefault",components:{DtDropdown:r,DtListItem:h,DtButton:w},data(){return{LIST_ITEM_NAVIGATION_TYPES:b,isOpen:this.open}},computed:{items(){return T}},watch:{open(a){this.isOpen=a}}};var k=function(){var t=this,e=t._self._c;return e("dt-dropdown",{attrs:{open:t.isOpen,placement:t.placement,"fallback-placements":t.fallbackPlacements,"content-width":t.contentWidth,padding:t.padding,modal:t.modal,"max-height":t.maxHeight,"max-width":t.maxWidth,"list-class":t.listClass,"navigation-type":t.navigationType,"open-on-context":t.openOnContext,"visually-hidden-close":t.visuallyHiddenClose,"visually-hidden-close-label":t.visuallyHiddenCloseLabel,tether:t.tether,transition:t.transition},on:{"update:open":function(n){t.isOpen=n},highlight:t.onHighlight,opened:t.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[t.anchor?e("div",{domProps:{innerHTML:t._s(t.anchor)}}):e("dt-button",t._b({},"dt-button",n,!1),[t._v(" Click to open ")])]}},{key:"list",fn:function({close:n}){return[t.list?e("div",{domProps:{innerHTML:t._s(t.list)}}):t._l(t.items,function(o){return e("dt-list-item",{key:o.id,attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" "+t._s(o.name)+" ")])})]}}])})},L=[];k._withStripped=!0;var d=D(N,k,L,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue";const E=d.exports;d.exports.__docgenInfo={displayName:"DtDropdownDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue"]};const R={name:"DtDropdownVariants",components:{DtDropdown:r,DtListItem:h,DtButton:w,DtListItemGroup:P,DtDropdownSeparator:I},data(){return{variants:{placement:["bottom-start","bottom","bottom-end"]}}},computed:{items(){return T}}};var x=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-d-flex d-mb12"},[t._l(t.variants.placement,function(n,o){return e("dt-dropdown",{key:o,staticClass:"d-mr8",attrs:{placement:n,padding:t.padding,"navigation-type":t.navigationType,transition:t.transition,open:t.open},scopedSlots:t._u([{key:"list",fn:function({close:S}){return t._l(t.items,function(p){return e("dt-list-item",{key:p.id,attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:S}},[t._v(" "+t._s(p.name)+" ")])})}}],null,!0)},[e("template",{slot:"anchor"},[e("dt-button",[t._v(" "+t._s(n)+" aligned dropdown ")])],1)],2)}),e("dt-dropdown",{staticClass:"d-mr8",attrs:{open:t.open,placement:t.placement,"fallback-placements":t.fallbackPlacements,padding:t.padding,modal:t.modal,"max-height":t.maxHeight,"max-width":t.maxWidth,"navigation-type":t.navigationType,transition:t.transition},on:{opened:t.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[t.anchor?e("div",{domProps:{innerHTML:t._s(t.anchor)}}):e("dt-button",t._b({},"dt-button",n,!1),[t._v(" with sections ")])]}},{key:"list",fn:function({close:n}){return[e("dt-list-item-group",{attrs:{"list-class":t.listClass}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu item 1 ")]),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 2 ")])],1),e("dt-dropdown-separator"),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 3 ")])]}}])}),e("dt-dropdown",{staticClass:"d-mr8",attrs:{open:t.open,placement:t.placement,"fallback-placements":t.fallbackPlacements,padding:t.padding,modal:t.modal,"max-height":t.maxHeight,"max-width":t.maxWidth,"navigation-type":t.navigationType,transition:t.transition},on:{opened:t.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[t.anchor?e("div",{domProps:{innerHTML:t._s(t.anchor)}}):e("dt-button",t._b({},"dt-button",n,!1),[t._v(" with sections and headings ")])]}},{key:"list",fn:function({close:n}){return[e("dt-list-item-group",{attrs:{"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default","list-class":t.listClass,heading:"Menu Heading A"}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 1 ")]),e("dt-dropdown-separator"),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 2 ")])],1),e("dt-dropdown-separator"),e("dt-list-item-group",{attrs:{"list-class":t.listClass,"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default",heading:"Menu Heading B"}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 3 ")])],1)]}}])})],2),e("div",{staticClass:"d-d-flex d-fd-column"},[e("p",{staticClass:"d-fw-bold d-mb2"},[t._v(" Context menu ")]),e("p",{staticClass:"d-mb8"},[t._v(" Displays the dropdown menu located at the pointer, triggered by a right-click ")]),e("div",{staticClass:"d-d-flex"},[e("dt-dropdown",{staticClass:"d-mr8",attrs:{padding:t.padding,"navigation-type":t.navigationType,open:t.open,"open-on-context":!0,transition:t.transition},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[e("div",t._b({staticClass:"d-ba d-bas-dashed d-w264 d-py48 d-ta-center d-bgc-black-300"},"div",n,!1),[t._v(" Right click to open ")])]}},{key:"list",fn:function({close:n}){return t._l(t.items,function(o){return e("dt-list-item",{key:o.id,attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" "+t._s(o.name)+" ")])})}}])})],1)])])},W=[];x._withStripped=!0;var l=D(R,x,W,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue";const j=l.exports;l.exports.__docgenInfo={displayName:"DtDropdownVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue"]};const O={onHighlight:c("highlight"),onOpened:c("opened"),visuallyHiddenCloseLabel:"Close Dropdown",navigationType:"arrow-keys",placement:"bottom",appendTo:"body",padding:"none",contentWidth:"null"},C={anchor:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},list:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},navigationType:{table:{type:{summary:"string"},defaultValue:{summary:"arrow-keys"}},options:Object.values(b),control:{type:"select"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:V,control:{type:"select"},table:{defaultValue:{summary:"bottom"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(H),control:{type:"select"}},contentWidth:{table:{type:{summary:"string"},defaultValue:{summary:"null"}},options:M,control:{type:"select"}},onOpened:{table:{disable:!0}},onHighlight:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when dropdown is shown or hidden.",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}}},A={title:"Components/Dropdown",component:r,args:O,argTypes:C,excludeStories:/.*Data$/},F=(a,{argTypes:t})=>_(a,t,E),$=(a,{argTypes:t})=>_(a,t,j),i={render:F,args:{},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>'})]},s={render:$,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center"><story /></div>'})]};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>\`
  })]
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,v,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    },
    a11y: {
      config: {
        rules: [{
          id: 'aria-allowed-attr',
          enabled: false
        }]
      }
    }
  },
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center"><story /></div>\`
  })]
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const G=["argsData","argTypesData","Default","Variants"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:s,__namedExportsOrder:G,argTypesData:C,argsData:O,default:A},Symbol.toStringTag,{value:"Module"}));export{Z as D,s as V,i as a,O as b,C as c};
//# sourceMappingURL=dropdown.stories-da01cdfa.js.map
