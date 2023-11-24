import{a as c}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as _}from"./storybook_utils-XrTpeJKJ.js";import{D as i,a as S}from"./dropdown_separator-XWFwc5uc.js";import{D as h,L as $}from"./list_item-ZlYihb_B.js";import{D as b}from"./button-ux2tnS3y.js";import{n as w}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as I}from"./list_item_group-7zryl713.js";import{e as P,P as V}from"./popover-ilao5Q5O.js";import{D as M}from"./dropdown_constants-IBYyKPOQ.js";const D=[{name:"Menu item 1",id:1},{name:"Menu item 2",id:2},{name:"Another menu item 1",id:3},{name:"Menu item 3",id:4},{name:"Another menu item 2",id:5}],H={name:"DtDropdownDefault",components:{DtDropdown:i,DtListItem:h,DtButton:b},data(){return{LIST_ITEM_NAVIGATION_TYPES:$,isOpen:this.$attrs.open}},computed:{items(){return D}},watch:{open(n){this.isOpen=n}}};var T=function(){var t=this,e=t._self._c;return e("dt-dropdown",{attrs:{open:t.isOpen,placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,"content-width":t.$attrs.contentWidth,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"list-class":t.$attrs.listClass,"navigation-type":t.$attrs.navigationType,"open-on-context":t.$attrs.openOnContext,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel,tether:t.$attrs.tether,transition:t.$attrs.transition},on:{"update:open":function(a){t.isOpen=a},highlight:t.$attrs.onHighlight,opened:t.$attrs.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:a}){return[t.$attrs.anchor?e("div",{domProps:{innerHTML:t._s(t.$attrs.anchor)}}):e("dt-button",t._b({},"dt-button",a,!1),[t._v(" Click to open ")])]}},{key:"list",fn:function({close:a}){return[t.$attrs.list?e("div",{domProps:{innerHTML:t._s(t.$attrs.list)}}):t._l(t.items,function(o){return e("dt-list-item",{key:o.id,attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" "+t._s(o.name)+" ")])})]}}])})},N=[];T._withStripped=!0;var d=w(H,T,N,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue";const L=d.exports;d.exports.__docgenInfo={displayName:"DtDropdownDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue"]};const E={name:"DtDropdownVariants",components:{DtDropdown:i,DtListItem:h,DtButton:b,DtListItemGroup:I,DtDropdownSeparator:S},data(){return{variants:{placement:["bottom-start","bottom","bottom-end"]}}},computed:{items(){return D}}};var k=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-d-flex d-mb12"},[t._l(t.variants.placement,function(a,o){return e("dt-dropdown",{key:o,staticClass:"d-mr8",attrs:{placement:a,padding:t.$attrs.padding,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition,open:t.$attrs.open},scopedSlots:t._u([{key:"list",fn:function({close:C}){return t._l(t.items,function(p){return e("dt-list-item",{key:p.id,attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:C}},[t._v(" "+t._s(p.name)+" ")])})}}],null,!0)},[e("template",{slot:"anchor"},[e("dt-button",[t._v(" "+t._s(a)+" aligned dropdown ")])],1)],2)}),e("dt-dropdown",{staticClass:"d-mr8",attrs:{open:t.$attrs.open,placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition},on:{opened:t.$attrs.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:a}){return[t.$attrs.anchor?e("div",{domProps:{innerHTML:t._s(t.$attrs.anchor)}}):e("dt-button",t._b({},"dt-button",a,!1),[t._v(" with sections ")])]}},{key:"list",fn:function({close:a}){return[e("dt-list-item-group",{attrs:{"list-class":t.$attrs.listClass}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" Menu item 1 ")]),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" Menu Item 2 ")])],1),e("dt-dropdown-separator"),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" Menu Item 3 ")])]}}])}),e("dt-dropdown",{staticClass:"d-mr8",attrs:{open:t.$attrs.open,placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition},on:{opened:t.$attrs.onOpened},scopedSlots:t._u([{key:"anchor",fn:function({attrs:a}){return[t.$attrs.anchor?e("div",{domProps:{innerHTML:t._s(t.$attrs.anchor)}}):e("dt-button",t._b({},"dt-button",a,!1),[t._v(" with sections and headings ")])]}},{key:"list",fn:function({close:a}){return[e("dt-list-item-group",{attrs:{"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default","list-class":t.$attrs.listClass,heading:"Menu Heading A"}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" Menu Item 1 ")]),e("dt-dropdown-separator"),e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" Menu Item 2 ")])],1),e("dt-dropdown-separator"),e("dt-list-item-group",{attrs:{"list-class":t.$attrs.listClass,"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default",heading:"Menu Heading B"}},[e("dt-list-item",{attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" Menu Item 3 ")])],1)]}}])})],2),e("div",{staticClass:"d-d-flex d-fd-column"},[e("p",{staticClass:"d-fw-bold d-mb2"},[t._v(" Context menu ")]),e("p",{staticClass:"d-mb8"},[t._v(" Displays the dropdown menu located at the pointer, triggered by a right-click ")]),e("div",{staticClass:"d-d-flex"},[e("dt-dropdown",{staticClass:"d-mr8",attrs:{padding:t.$attrs.padding,"navigation-type":t.$attrs.navigationType,open:t.$attrs.open,"open-on-context":!0,transition:t.$attrs.transition},scopedSlots:t._u([{key:"anchor",fn:function({attrs:a}){return[e("div",t._b({staticClass:"d-ba d-bas-dashed d-w264 d-py48 d-ta-center d-bgc-black-300"},"div",a,!1),[t._v(" Right click to open ")])]}},{key:"list",fn:function({close:a}){return t._l(t.items,function(o){return e("dt-list-item",{key:o.id,attrs:{role:"menuitem","navigation-type":t.$attrs.navigationType},on:{click:a}},[t._v(" "+t._s(o.name)+" ")])})}}])})],1)])])},R=[];k._withStripped=!0;var l=w(E,k,R,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue";const W=l.exports;l.exports.__docgenInfo={displayName:"DtDropdownVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue"]};const x={onHighlight:c("highlight"),onOpened:c("opened"),visuallyHiddenCloseLabel:"Close Dropdown",navigationType:"arrow-keys",placement:"bottom",appendTo:"body",padding:"none",contentWidth:"null"},O={anchor:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},list:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},navigationType:{table:{type:{summary:"string"},defaultValue:{summary:"arrow-keys"}},options:Object.values($),control:{type:"select"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:P,control:{type:"select"},table:{defaultValue:{summary:"bottom"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(M),control:{type:"select"}},contentWidth:{table:{type:{summary:"string"},defaultValue:{summary:"null"}},options:V,control:{type:"select"}},onOpened:{table:{disable:!0}},onHighlight:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when dropdown is shown or hidden.",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}}},j={title:"Components/Dropdown",component:i,args:x,argTypes:O,excludeStories:/.*Data$/},A=(n,{argTypes:t})=>_(n,t,L),F=(n,{argTypes:t})=>_(n,t,W),r={render:A,args:{},parameters:{percy:{args:{open:!0}}},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>'})]},s={render:F,args:{},parameters:{...r.parameters,options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center"><story /></div>'})]};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    percy: {
      args: {
        open: true
      }
    }
  },
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>\`
  })]
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,v,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    ...Default.parameters,
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
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const G=["argsData","argTypesData","Default","Variants"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:s,__namedExportsOrder:G,argTypesData:O,argsData:x,default:j},Symbol.toStringTag,{value:"Module"}));export{Z as D,s as V,r as a};
//# sourceMappingURL=dropdown.stories-4__jGsNj.js.map