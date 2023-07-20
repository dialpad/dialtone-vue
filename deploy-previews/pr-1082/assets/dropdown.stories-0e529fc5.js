import{a as H}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as P}from"./storybook_utils-f3a25a1b.js";import{D as C,a as J}from"./dropdown_separator-637d2983.js";import{D as E,L as W}from"./list_item-9b7a02cd.js";import{D as j}from"./button-6fc4376e.js";import{k as l,o as a,v as p,m as e,d,E as _,p as b,q as i,F as w,g as k,t as D,e as u,l as o}from"./vue.esm-bundler-356a911e.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{D as K}from"./list_item_group-de6f238c.js";import{c as Q,d as X}from"./popover-63fee96d.js";import{D as Z}from"./dropdown_constants-d0cadac9.js";const R=[{name:"Menu item 1",id:1},{name:"Menu item 2",id:2},{name:"Another menu item 1",id:3},{name:"Menu item 3",id:4},{name:"Another menu item 2",id:5}],B={name:"DtDropdownDefault",components:{DtDropdown:C,DtListItem:E,DtButton:j},data(){return{LIST_ITEM_NAVIGATION_TYPES:W,isOpen:this.$attrs.open}},computed:{items(){return R}},watch:{open(t){this.isOpen=t}}},x=["innerHTML"],tt=["innerHTML"];function et(t,T,z,Y,v,f){const g=l("dt-button"),s=l("dt-list-item"),m=l("dt-dropdown");return a(),p(m,{open:v.isOpen,"onUpdate:open":T[0]||(T[0]=r=>v.isOpen=r),placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,"content-width":t.$attrs.contentWidth,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"list-class":t.$attrs.listClass,"navigation-type":t.$attrs.navigationType,"open-on-context":t.$attrs.openOnContext,"visually-hidden-close":t.$attrs.visuallyHiddenClose,"visually-hidden-close-label":t.$attrs.visuallyHiddenCloseLabel,tether:t.$attrs.tether,transition:t.$attrs.transition,onHighlight:t.$attrs.onHighlight,onOpened:t.$attrs.onOpened},{anchor:e(({attrs:r})=>[t.$attrs.anchor?(a(),d("div",{key:0,innerHTML:t.$attrs.anchor},null,8,x)):(a(),p(g,_(b({key:1},r)),{default:e(()=>[i(" Click to open ")]),_:2},1040))]),list:e(({close:r})=>[t.$attrs.list?(a(),d("div",{key:0,innerHTML:t.$attrs.list},null,8,tt)):(a(!0),d(w,{key:1},k(f.items,c=>(a(),p(s,{key:c.id,role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:r},{default:e(()=>[i(D(c.name),1)]),_:2},1032,["navigation-type","onClick"]))),128))]),_:1},8,["open","placement","fallback-placements","content-width","padding","modal","max-height","max-width","list-class","navigation-type","open-on-context","visually-hidden-close","visually-hidden-close-label","tether","transition","onHighlight","onOpened"])}const nt=A(B,[["render",et],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue"]]);B.__docgenInfo={displayName:"DtDropdownDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_default.story.vue"]};const F={name:"DtDropdownVariants",components:{DtDropdown:C,DtListItem:E,DtButton:j,DtListItemGroup:K,DtDropdownSeparator:J},data(){return{variants:{placement:["bottom-start","bottom","bottom-end"]}}},computed:{items(){return R}}},at={class:"d-d-flex d-mb12"},ot=["innerHTML"],it=["innerHTML"],st={class:"d-d-flex d-fd-column"},rt=u("p",{class:"d-fw-bold d-mb2"}," Context menu ",-1),dt=u("p",{class:"d-mb8"}," Displays the dropdown menu located at the pointer, triggered by a right-click ",-1),lt={class:"d-d-flex"};function pt(t,T,z,Y,v,f){const g=l("dt-button"),s=l("dt-list-item"),m=l("dt-dropdown"),r=l("dt-list-item-group"),c=l("dt-dropdown-separator");return a(),d("div",null,[u("div",at,[(a(!0),d(w,null,k(v.variants.placement,(n,$)=>(a(),p(m,{key:$,class:"d-mr8",placement:n,padding:t.$attrs.padding,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition,open:t.$attrs.open,onHighlight:t.$attrs.onHighlight},{anchor:e(()=>[o(g,null,{default:e(()=>[i(D(n)+" aligned dropdown ",1)]),_:2},1024)]),list:e(({close:U})=>[(a(!0),d(w,null,k(f.items,O=>(a(),p(s,{key:O.id,role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:U},{default:e(()=>[i(D(O.name),1)]),_:2},1032,["navigation-type","onClick"]))),128))]),_:2},1032,["placement","padding","navigation-type","transition","open","onHighlight"]))),128)),o(m,{open:t.$attrs.open,class:"d-mr8",placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition,onOpened:t.$attrs.onOpened},{anchor:e(({attrs:n})=>[t.$attrs.anchor?(a(),d("div",{key:0,innerHTML:t.$attrs.anchor},null,8,ot)):(a(),p(g,_(b({key:1},n)),{default:e(()=>[i(" with sections ")]),_:2},1040))]),list:e(({close:n})=>[o(r,{"list-class":t.$attrs.listClass},{default:e(()=>[o(s,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:n},{default:e(()=>[i(" Menu item 1 ")]),_:2},1032,["navigation-type","onClick"]),o(s,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:n},{default:e(()=>[i(" Menu Item 2 ")]),_:2},1032,["navigation-type","onClick"])]),_:2},1032,["list-class"]),o(c),o(s,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:n},{default:e(()=>[i(" Menu Item 3 ")]),_:2},1032,["navigation-type","onClick"])]),_:1},8,["open","placement","fallback-placements","padding","modal","max-height","max-width","navigation-type","transition","onOpened"]),o(m,{class:"d-mr8",open:t.$attrs.open,placement:t.$attrs.placement,"fallback-placements":t.$attrs.fallbackPlacements,padding:t.$attrs.padding,modal:t.$attrs.modal,"max-height":t.$attrs.maxHeight,"max-width":t.$attrs.maxWidth,"navigation-type":t.$attrs.navigationType,transition:t.$attrs.transition,onOpened:t.$attrs.onOpened},{anchor:e(({attrs:n})=>[t.$attrs.anchor?(a(),d("div",{key:0,innerHTML:t.$attrs.anchor},null,8,it)):(a(),p(g,_(b({key:1},n)),{default:e(()=>[i(" with sections and headings ")]),_:2},1040))]),list:e(({close:n})=>[o(r,{"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default","list-class":t.$attrs.listClass,heading:"Menu Heading A"},{default:e(()=>[o(s,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:n},{default:e(()=>[i(" Menu Item 1 ")]),_:2},1032,["navigation-type","onClick"]),o(c),o(s,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:n},{default:e(()=>[i(" Menu Item 2 ")]),_:2},1032,["navigation-type","onClick"])]),_:2},1032,["list-class"]),o(c),o(r,{"list-class":t.$attrs.listClass,"heading-class":"d-py4 d-px8 d-fw-semibold d-c-default",heading:"Menu Heading B"},{default:e(()=>[o(s,{role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:n},{default:e(()=>[i(" Menu Item 3 ")]),_:2},1032,["navigation-type","onClick"])]),_:2},1032,["list-class"])]),_:1},8,["open","placement","fallback-placements","padding","modal","max-height","max-width","navigation-type","transition","onOpened"])]),u("div",st,[rt,dt,u("div",lt,[o(m,{class:"d-mr8",padding:t.$attrs.padding,"navigation-type":t.$attrs.navigationType,open:t.$attrs.open,"open-on-context":!0,transition:t.transition},{anchor:e(({attrs:n})=>[u("div",b(n,{class:"d-ba d-bas-dashed d-w264 d-py48 d-ta-center d-bgc-black-300"})," Right click to open ",16)]),list:e(({close:n})=>[(a(!0),d(w,null,k(f.items,$=>(a(),p(s,{key:$.id,role:"menuitem","navigation-type":t.$attrs.navigationType,onClick:n},{default:e(()=>[i(D($.name),1)]),_:2},1032,["navigation-type","onClick"]))),128))]),_:1},8,["padding","navigation-type","open","transition"])])])])}const mt=A(F,[["render",pt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue"]]);F.__docgenInfo={displayName:"DtDropdownVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/dropdown/dropdown_variants.story.vue"]};const G={onHighlight:H("highlight"),onOpened:H("opened"),visuallyHiddenCloseLabel:"Close Dropdown",navigationType:"arrow-keys",placement:"bottom",appendTo:"body",padding:"none",contentWidth:"null"},q={anchor:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},list:{table:{category:"slots",type:{summary:"VNode"}},control:{type:"text"}},navigationType:{table:{type:{summary:"string"},defaultValue:{summary:"arrow-keys"}},options:Object.values(W),control:{type:"select"}},listId:{table:{defaultValue:{summary:"generated unique ID"}}},placement:{options:Q,control:{type:"select"},table:{defaultValue:{summary:"bottom"}}},appendTo:{table:{defaultValue:{summary:"body"}}},padding:{options:Object.keys(Z),control:{type:"select"}},contentWidth:{table:{type:{summary:"string"},defaultValue:{summary:"null"}},options:X,control:{type:"select"}},onOpened:{table:{disable:!0}},onHighlight:{table:{disable:!0}},"update:open":{table:{disable:!0}},opened:{description:"emitted when dropdown is shown or hidden.",table:{type:{summary:"event"}}},highlight:{description:"Event fired when the highlight changes",table:{type:{summary:"event"}}}},ct={title:"Components/Dropdown",component:C,args:G,argTypes:q,excludeStories:/.*Data$/},ut=t=>P(t,nt),gt=t=>P(t,mt),y={render:ut,args:{},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>'})]},h={render:gt,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}},decorators:[()=>({template:'<div class="d-d-flex d-jc-center d-ai-center"><story /></div>'})]};var M,V,I;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  decorators: [() => ({
    template: \`<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>\`
  })]
}`,...(I=(V=y.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var N,S,L;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(S=h.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const yt=["argsData","argTypesData","Default","Variants"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Default:y,Variants:h,__namedExportsOrder:yt,argTypesData:q,argsData:G,default:ct},Symbol.toStringTag,{value:"Module"}));export{Ct as D,h as V,y as a,G as b,q as c};
//# sourceMappingURL=dropdown.stories-0e529fc5.js.map
