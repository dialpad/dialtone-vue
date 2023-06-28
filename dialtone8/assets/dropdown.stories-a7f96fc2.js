import{a as l}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as f}from"./storybook_utils-31ede21d.js";import{D as r,a as C}from"./dropdown_separator-7239048e.js";import{D as v,L as _}from"./list_item-28b07f5d.js";import{D as h}from"./button-82727ed7.js";import{n as b}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as S}from"./list_item_group-ffa426ef.js";import{P as I,a as P}from"./popover-b07252c6.js";import{D as V}from"./dropdown_constants-d0cadac9.js";const D=[{name:"Menu item 1",id:1},{name:"Menu item 2",id:2},{name:"Another menu item 1",id:3},{name:"Menu item 3",id:4},{name:"Another menu item 2",id:5}],M={name:"DtDropdownDefault",components:{DtDropdown:r,DtListItem:v,DtButton:h},data(){return{LIST_ITEM_NAVIGATION_TYPES:_,isOpen:this.open}},computed:{items(){return D}},watch:{open(a){this.isOpen=a}}};var H=function(){var t=this,e=t._self._c;return e("dt-dropdown",{attrs:{open:t.isOpen,placement:t.placement,"fallback-placements":t.fallbackPlacements,"content-width":t.contentWidth,padding:t.padding,modal:t.modal,"max-height":t.maxHeight,"max-width":t.maxWidth,"list-class":t.listClass,"navigation-type":t.navigationType,"open-on-context":t.openOnContext,"visually-hidden-close":t.visuallyHiddenClose,"visually-hidden-close-label":t.visuallyHiddenCloseLabel,tether:t.tether,transition:t.transition},on:{"update:open":function(n){t.isOpen=n},highlight:t.onHighlight,opened:t.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[t.anchor?e("div",{domProps:{innerHTML:t._s(t.anchor)}}):e("dt-button",t._b({},"dt-button",n,!1),[t._v(" Click to open ")])]}},{key:"list",fn:function({close:n}){return[t.list?e("div",{domProps:{innerHTML:t._s(t.list)}}):t._l(t.items,function(o){return e("dt-list-item",{key:o.id,attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" "+t._s(o.name)+" ")])})]}}])})},N=[],w=b(M,H,N,!1,null,null,null,null);const L=w.exports;w.exports.__docgenInfo={displayName:"DtDropdownDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue"]};const E={name:"DtDropdownVariants",components:{DtDropdown:r,DtListItem:v,DtButton:h,DtListItemGroup:S,DtDropdownSeparator:C},data(){return{variants:{placement:["bottom-start","bottom","bottom-end"]}}},computed:{items(){return D}}};var R=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-d-flex d-mb12"},[t._l(t.variants.placement,function(n,o){return e("dt-dropdown",{key:o,staticClass:"d-mr8",attrs:{placement:n,padding:t.padding,"navigation-type":t.navigationType,transition:t.transition,open:t.open},scopedSlots:t._u([{key:"list",fn:function({close:O}){return t._l(t.items,function(d){return e("dt-list-item",{key:d.id,attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:O}},[t._v(" "+t._s(d.name)+" ")])})}}],null,!0)},[e("template",{slot:"anchor"},[e("dt-button",[t._v(" "+t._s(n)+" aligned dropdown ")])],1)],2)}),e("dt-dropdown",{staticClass:"d-mr8",attrs:{open:t.open,placement:t.placement,"fallback-placements":t.fallbackPlacements,padding:t.padding,modal:t.modal,"max-height":t.maxHeight,"max-width":t.maxWidth,"navigation-type":t.navigationType,transition:t.transition},on:{opened:t.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[t.anchor?e("div",{domProps:{innerHTML:t._s(t.anchor)}}):e("dt-button",t._b({},"dt-button",n,!1),[t._v(" with sections ")])]}},{key:"list",fn:function({close:n}){return[e("dt-list-item-group",{attrs:{"list-class":t.listClass}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu item 1 ")]),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 2 ")])],1),e("dt-dropdown-separator"),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 3 ")])]}}])}),e("dt-dropdown",{staticClass:"d-mr8",attrs:{open:t.open,placement:t.placement,"fallback-placements":t.fallbackPlacements,padding:t.padding,modal:t.modal,"max-height":t.maxHeight,"max-width":t.maxWidth,"navigation-type":t.navigationType,transition:t.transition},on:{opened:t.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[t.anchor?e("div",{domProps:{innerHTML:t._s(t.anchor)}}):e("dt-button",t._b({},"dt-button",n,!1),[t._v(" with sections and headings ")])]}},{key:"list",fn:function({close:n}){return[e("dt-list-item-group",{attrs:{"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default","list-class":t.listClass,heading:"Menu Heading A"}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 1 ")]),e("dt-dropdown-separator"),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 2 ")])],1),e("dt-dropdown-separator"),e("dt-list-item-group",{attrs:{"list-class":t.listClass,"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default",heading:"Menu Heading B"}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" Menu Item 3 ")])],1)]}}])})],2),e("div",{staticClass:"d-d-flex d-fd-column"},[e("p",{staticClass:"d-fw-bold d-mb2"},[t._v(" Context menu ")]),e("p",{staticClass:"d-mb8"},[t._v(" Displays the dropdown menu located at the pointer, triggered by a right-click ")]),e("div",{staticClass:"d-d-flex"},[e("dt-dropdown",{staticClass:"d-mr8",attrs:{padding:t.padding,"navigation-type":t.navigationType,open:t.open,"open-on-context":!0,transition:t.transition},scopedSlots:t._u([{key:"anchor",fn:function({attrs:n}){return[e("div",t._b({staticClass:"d-ba d-bas-dashed d-w264 d-py48 d-ta-center d-bgc-black-300"},"div",n,!1),[t._v(" Right click to open ")])]}},{key:"list",fn:function({close:n}){return t._l(t.items,function(o){return e("dt-list-item",{key:o.id,attrs:{role:"menuitem","navigation-type":t.navigationType},on:{click:n}},[t._v(" "+t._s(o.name)+" ")])})}}])})],1)])])},W=[],T=b(E,R,W,!1,null,null,null,null);const j=T.exports;T.exports.__docgenInfo={displayName:"DtDropdownVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue"]};const k={onHighlight:l("highlight"),onOpened:l("opened"),visuallyHiddenCloseLabel:"Close Dropdown",navigationType:"arrow-keys",placement:"bottom",appendTo:"body",padding:"none",contentWidth:"null"},x={anchor:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},list:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},navigationType:{table:{type:{summary:"string"},defaultValue:{summary:"arrow-keys"}},options:Object.values(_),control:{type:"select"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:I,control:{type:"select"},table:{defaultValue:{summary:"bottom"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(V),control:{type:"select"}},contentWidth:{table:{type:{summary:"string"},defaultValue:{summary:"null"}},options:P,control:{type:"select"}},onOpened:{table:{disable:!0}},onHighlight:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when dropdown is shown or hidden.",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}}},A={title:"Components/Dropdown",component:r,args:k,argTypes:x,excludeStories:/.*Data$/},F=(a,{argTypes:t})=>f(a,t,L),$=(a,{argTypes:t})=>f(a,t,j),i={render:F,args:{},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>'})]},s={render:$,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center"><story /></div>'})]};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>\`
  })]
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const G=["argsData","argTypesData","Default","Variants"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:s,__namedExportsOrder:G,argTypesData:x,argsData:k,default:A},Symbol.toStringTag,{value:"Module"}));export{Z as D,s as V,i as a,k as b,x as c};
//# sourceMappingURL=dropdown.stories-a7f96fc2.js.map