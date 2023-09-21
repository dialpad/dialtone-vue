import{a as H}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as L}from"./storybook_utils-98c88692.js";import{D as C,a as J}from"./dropdown_separator-86333acb.js";import{D as E,L as W}from"./list_item-c40a9f8c.js";import{D as j}from"./button-59161dae.js";import{u as l,o as n,b as p,w as e,p as d,n as _,m as b,z as s,F as w,B as D,A as k,e as u,x as o}from"./vue.esm-bundler-24d82261.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{D as K}from"./list_item_group-8190b61e.js";import{e as Q,P as X}from"./popover-594a9f92.js";import{D as Z}from"./dropdown_constants-d0cadac9.js";const B=[{name:"Menu item 1",id:1},{name:"Menu item 2",id:2},{name:"Another menu item 1",id:3},{name:"Menu item 3",id:4},{name:"Another menu item 2",id:5}],R={name:"DtDropdownDefault",components:{DtDropdown:C,DtListItem:E,DtButton:j},data(){return{LIST_ITEM_NAVIGATION_TYPES:W,isOpen:this.$attrs.open}},computed:{items(){return B}},watch:{open(t){this.isOpen=t}}},x=["innerHTML"],tt=["innerHTML"];function et(t,T,Y,q,f,v){const y=l("dt-button"),i=l("dt-list-item"),m=l("dt-dropdown");return n(),p(m,{open:f.isOpen,"onUpdate:open":T[0]||(T[0]=r=>f.isOpen=r),placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,"content-width":t.$attrs.contentWidth,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"list-class":t.$attrs.listClass,"navigation-type":t.$attrs.navigationType,"open-on-context":t.$attrs.openOnContext,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel,tether:t.$attrs.tether,transition:t.$attrs.transition,onHighlight:t.$attrs.onHighlight,onOpened:t.$attrs.onOpened},{anchor:e(({attrs:r})=>[t.$attrs.anchor?(n(),d("div",{key:0,innerHTML:t.$attrs.anchor},null,8,x)):(n(),p(y,_(b({key:1},r)),{default:e(()=>[s(" Click to open ")]),_:2},1040))]),list:e(({close:r})=>[t.$attrs.list?(n(),d("div",{key:0,innerHTML:t.$attrs.list},null,8,tt)):(n(!0),d(w,{key:1},D(v.items,c=>(n(),p(i,{key:c.id,role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:r},{default:e(()=>[s(k(c.name),1)]),_:2},1032,["navigation-type","onClick"]))),128))]),_:1},8,["open","placement","fallback-placements","content-width","padding","modal","max-height","max-width","list-class","navigation-type","open-on-context","visually-hidden-close","visually-hidden-close-label","tether","transition","onHighlight","onOpened"])}const at=A(R,[["render",et]]);R.__docgenInfo={displayName:"DtDropdownDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue"]};const F={name:"DtDropdownVariants",components:{DtDropdown:C,DtListItem:E,DtButton:j,DtListItemGroup:K,DtDropdownSeparator:J},data(){return{variants:{placement:["bottom-start","bottom","bottom-end"]}}},computed:{items(){return B}}},nt={class:"d-d-flex d-mb12"},ot=["innerHTML"],st=["innerHTML"],it={class:"d-d-flex d-fd-column"},rt=u("p",{class:"d-fw-bold d-mb2"}," Context menu ",-1),dt=u("p",{class:"d-mb8"}," Displays the dropdown menu located at the pointer, triggered by a right-click ",-1),lt={class:"d-d-flex"};function pt(t,T,Y,q,f,v){const y=l("dt-button"),i=l("dt-list-item"),m=l("dt-dropdown"),r=l("dt-list-item-group"),c=l("dt-dropdown-separator");return n(),d("div",null,[u("div",nt,[(n(!0),d(w,null,D(f.variants.placement,(a,$)=>(n(),p(m,{key:$,class:"d-mr8",placement:a,padding:t.$attrs.padding,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition,open:t.$attrs.open,onHighlight:t.$attrs.onHighlight},{anchor:e(()=>[o(y,null,{default:e(()=>[s(k(a)+" aligned dropdown ",1)]),_:2},1024)]),list:e(({close:U})=>[(n(!0),d(w,null,D(v.items,O=>(n(),p(i,{key:O.id,role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:U},{default:e(()=>[s(k(O.name),1)]),_:2},1032,["navigation-type","onClick"]))),128))]),_:2},1032,["placement","padding","navigation-type","transition","open","onHighlight"]))),128)),o(m,{open:t.$attrs.open,class:"d-mr8",placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition,onOpened:t.$attrs.onOpened},{anchor:e(({attrs:a})=>[t.$attrs.anchor?(n(),d("div",{key:0,innerHTML:t.$attrs.anchor},null,8,ot)):(n(),p(y,_(b({key:1},a)),{default:e(()=>[s(" with sections ")]),_:2},1040))]),list:e(({close:a})=>[o(r,{"list-class":t.$attrs.listClass},{default:e(()=>[o(i,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:a},{default:e(()=>[s(" Menu item 1 ")]),_:2},1032,["navigation-type","onClick"]),o(i,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:a},{default:e(()=>[s(" Menu Item 2 ")]),_:2},1032,["navigation-type","onClick"])]),_:2},1032,["list-class"]),o(c),o(i,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:a},{default:e(()=>[s(" Menu Item 3 ")]),_:2},1032,["navigation-type","onClick"])]),_:1},8,["open","placement","fallback-placements","padding","modal","max-height","max-width","navigation-type","transition","onOpened"]),o(m,{class:"d-mr8",open:t.$attrs.open,placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition,onOpened:t.$attrs.onOpened},{anchor:e(({attrs:a})=>[t.$attrs.anchor?(n(),d("div",{key:0,innerHTML:t.$attrs.anchor},null,8,st)):(n(),p(y,_(b({key:1},a)),{default:e(()=>[s(" with sections and headings ")]),_:2},1040))]),list:e(({close:a})=>[o(r,{"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default","list-class":t.$attrs.listClass,heading:"Menu Heading A"},{default:e(()=>[o(i,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:a},{default:e(()=>[s(" Menu Item 1 ")]),_:2},1032,["navigation-type","onClick"]),o(c),o(i,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:a},{default:e(()=>[s(" Menu Item 2 ")]),_:2},1032,["navigation-type","onClick"])]),_:2},1032,["list-class"]),o(c),o(r,{"list-class":t.$attrs.listClass,"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default",heading:"Menu Heading B"},{default:e(()=>[o(i,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:a},{default:e(()=>[s(" Menu Item 3 ")]),_:2},1032,["navigation-type","onClick"])]),_:2},1032,["list-class"])]),_:1},8,["open","placement","fallback-placements","padding","modal","max-height","max-width","navigation-type","transition","onOpened"])]),u("div",it,[rt,dt,u("div",lt,[o(m,{class:"d-mr8",padding:t.$attrs.padding,"navigation-type":t.$attrs.navigationType,open:t.$attrs.open,"open-on-context":!0,transition:t.$attrs.transition},{anchor:e(({attrs:a})=>[u("div",b(a,{class:"d-ba d-bas-dashed d-w264 d-py48 d-ta-center d-bgc-black-300"})," Right click to open ",16)]),list:e(({close:a})=>[(n(!0),d(w,null,D(v.items,$=>(n(),p(i,{key:$.id,role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:a},{default:e(()=>[s(k($.name),1)]),_:2},1032,["navigation-type","onClick"]))),128))]),_:1},8,["padding","navigation-type","open","transition"])])])])}const mt=A(F,[["render",pt]]);F.__docgenInfo={displayName:"DtDropdownVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue"]};const z={onHighlight:H("highlight"),onOpened:H("opened"),visuallyHiddenCloseLabel:"Close Dropdown",navigationType:"arrow-keys",placement:"bottom",appendTo:"body",padding:"none",contentWidth:"null"},G={anchor:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},list:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},navigationType:{table:{type:{summary:"string"},defaultValue:{summary:"arrow-keys"}},options:Object.values(W),control:{type:"select"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:Q,control:{type:"select"},table:{defaultValue:{summary:"bottom"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(Z),control:{type:"select"}},contentWidth:{table:{type:{summary:"string"},defaultValue:{summary:"null"}},options:X,control:{type:"select"}},onOpened:{table:{disable:!0}},onHighlight:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when dropdown is shown or hidden.",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}}},ct={title:"Components/Dropdown",component:C,args:z,argTypes:G,excludeStories:/.*Data$/},ut=t=>L(t,at),gt=t=>L(t,mt),g={render:ut,args:{},parameters:{percy:{args:{open:!0}}},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>'})]},h={render:gt,args:{},parameters:{...g.parameters,options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center"><story /></div>'})]};var M,V,I;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(V=g.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var N,P,S;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(P=h.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const yt=["argsData","argTypesData","Default","Variants"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Default:g,Variants:h,__namedExportsOrder:yt,argTypesData:G,argsData:z,default:ct},Symbol.toStringTag,{value:"Module"}));export{Ct as D,h as V,g as a};
//# sourceMappingURL=dropdown.stories-21fd1c23.js.map
