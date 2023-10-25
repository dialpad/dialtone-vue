import{D as I}from"./DtScroller-3d33c0f1.js";import{N as a,o as q,p as b,e,z as D,k as U,y as V,w as A,A as S,S as M,O as N,P as B}from"./vue.esm-bundler-5f4c5b12.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{c as F}from"./storybook_utils-fb032280.js";import{a as h}from"./chunk-AY7I2SME-5eb1ab46.js";const T=n=>(N("data-v-619cde92"),n=n(),B(),n),j=T(()=>e("h3",null,"Scroller",-1)),R=T(()=>e("br",null,null,-1)),L=T(()=>e("br",null,null,-1)),J={class:"user"},O={__name:"scroller_default.story",setup(n){const s=a(Array.from({length:50},(l,t)=>({id:t,name:`User ${t}`}))),o=a("scroller"),m=a(!1),u=a(null);let c;function d(l){o.value.scrollToItem(l)}function _(){s.value.push({id:s.value.length,name:`User ${s.value.length}`})}function f(){const l=s.value.length;for(let t=1;t<=10;t++)s.value.unshift({id:l+t,name:`User ${l+t}`});o.value.scrollToItem(10),o.value.updateItems()}function y(){m.value=!m.value,o.value.scrollToItem(s.value.length-1),clearInterval(c),c=setInterval(function(){m.value&&(_(),M(()=>{u.value==="bottom"&&o.value.scrollToItem(s.value.length-1)}),o.value.updateItemsFromBottom())},1e3)}return(l,t)=>(q(),b("div",null,[j,e("button",{onClick:t[0]||(t[0]=i=>d(25))}," Go to index 25 "),e("button",{onClick:t[1]||(t[1]=i=>d(0))}," Go to start "),e("button",{onClick:t[2]||(t[2]=i=>d(s.value.length-1))}," Go to end "),e("button",{onClick:f}," Add 10 items top "),R,L,e("button",{class:"autoscrolling",onClick:y},[D(" Auto scrolling "),e("div",{class:U({enabled:m.value})},null,2)]),V(I,{ref_key:"scroller",ref:o,class:"scroller",items:s.value,"item-size":l.$attrs.itemSize,"scroller-height":l.$attrs.scrollerHeight,"scroller-width":l.$attrs.scrollerWidth,"min-item-size":l.$attrs.minItemSize,"list-tag":l.$attrs.listTag,"item-tag":l.$attrs.itemTag,direction:l.$attrs.direction,onUserPosition:t[3]||(t[3]=i=>{l.$attrs.onUserPosition(i),u.value=i})},{default:A(({item:i})=>[e("div",J,S(i.name),1)]),_:1},8,["items","item-size","scroller-height","scroller-width","min-item-size","list-tag","item-tag","direction"])]))}},K=E(O,[["__scopeId","data-v-619cde92"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_default.story.vue"]]);O.__docgenInfo={exportName:"default",displayName:"scroller_default.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_default.story.vue"]};const $=""+new URL("person-32d5165c.png",import.meta.url).href;const v=n=>(N("data-v-70b63223"),n=n(),B(),n),Q=v(()=>e("h3",null,"Scroller with dynamic size",-1)),X=v(()=>e("br",null,null,-1)),Y=v(()=>e("br",null,null,-1)),Z=v(()=>e("br",null,null,-1)),ee=v(()=>e("br",null,null,-1)),te={class:"avatar"},le=["src"],ie={class:"text"},G={__name:"scroller_dynamic.story",setup(n){const s=["lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam,nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit.","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam","lorem ipsum dolor sit amet"],o=a(Array.from({length:37},(t,i)=>({id:i,avatar:$,message:s[Math.floor(Math.random()*8)]})));function m(t){o.value[t].message=s[Math.floor(Math.random()*8)]}const u=a("scroller"),c=a(!1),d=a(null);let _;function f(){o.value.push({id:o.value.length,avatar:$,message:s[Math.floor(Math.random()*8)]})}function y(){c.value=!c.value,u.value.scrollToBottom(),clearInterval(_),_=setInterval(function(){c.value&&(f(),M(()=>{d.value==="bottom"&&u.value.scrollToBottom()}))},1e3)}function l(){o.value=[...o.value].reverse(),u.value.updateItems()}return(t,i)=>(q(),b("div",null,[Q,e("button",{onClick:i[0]||(i[0]=r=>m(0))}," Update Element Message "),X,Y,e("button",{onClick:i[1]||(i[1]=r=>l())}," Replace Items "),Z,ee,e("button",{class:"autoscrolling",onClick:y},[D(" Auto scrolling "),e("div",{class:U({enabled:c.value})},null,2)]),V(I,{ref_key:"scroller",ref:u,items:o.value,"min-item-size":54,"scroller-height":300,"scroller-width":500,class:"scroller",dynamic:!0,onUserPosition:i[2]||(i[2]=r=>d.value=r)},{default:A(({item:r})=>[e("div",te,[D(S(r.id)+" ",1),(q(),b("img",{key:r.avatar,src:r.avatar,alt:"avatar",class:"image"},null,8,le))]),e("div",ie,S(r.message),1)]),_:1},8,["items"])]))}},oe=E(G,[["__scopeId","data-v-70b63223"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_dynamic.story.vue"]]);G.__docgenInfo={exportName:"default",displayName:"scroller_dynamic.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_dynamic.story.vue"]};const H={listTag:"div",itemTag:"div",itemSize:32,scrollerWidth:300,scrollerHeight:200,onScrollStart:h("scroll-start"),onScrollEnd:h("scroll-end"),onUserPosition:h("user-position")},W={default:{control:{type:null},description:`Markup to display each item from the items array.

item {*}: the item currently being rendered from within your items array.

index {number}: the index of this item in the items array.

active {boolean}: whether this item is currently visible to the user.`,table:{type:{summary:"VNode"}}},items:{control:{type:null}},dynamic:{control:{type:null}},keyField:{control:{type:null}},direction:{control:{type:"select"},options:["horizontal","vertical"]},listTag:{control:{type:"text"},defaultValue:"div"},itemTag:{control:{type:"text"},defaultValue:"div"},itemSize:{control:{type:"number"},defaultValue:32},minItemSize:{control:{type:null}},scrollerWidth:{control:{type:"number"},defaultValue:300},scrollerHeight:{control:{type:"number"},defaultValue:200},onScrollStart:{table:{disable:!0}},onScrollEnd:{table:{disable:!0}},onUserPosition:{table:{disable:!0}},"user-position":{description:"Emit the last user position.",table:{type:{summary:"event"}}}},ne={title:"Components/Scroller",component:I,argTypes:W,args:H,excludeStories:/.*Data$/},se=n=>F(n,K),p={render:se,args:{default:"Scroller"}},re=n=>F(n,oe),g={render:re,parameters:{controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var k,w,z;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Scroller'
  }
}`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var x,C,P;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: DynamicTemplate,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    options: {
      showPanel: false
    }
  }
}`,...(P=(C=g.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const ae=["argsData","argTypesData","Default","Dynamic"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Dynamic:g,__namedExportsOrder:ae,argTypesData:W,argsData:H,default:ne},Symbol.toStringTag,{value:"Module"}));export{ge as S};
//# sourceMappingURL=scroller.stories-76b6f4ce.js.map
