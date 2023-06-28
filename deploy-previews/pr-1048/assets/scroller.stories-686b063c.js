import{r as Te,H as $,I as J,J as Ue,K as ut,O as re,o as F,f as H,b as Z,w as P,F as ct,u as dt,p as le,m as Pe,B as mt,l as oe,x as Ne,L as Be,n as Q,S as ft,W as pt,h as ht,a as qe,d as ae,D as Ce,E as Oe,X as vt,g as v,s as se,t as ne,Y as Re,Z as He}from"./vue.esm-bundler-3bf5edd9.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{c as We}from"./storybook_utils-a2047fb2.js";import{a as ie}from"./chunk-OPEUWD42-a3b45fd8.js";const je={__name:"core_scroller",props:{items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},itemSize:{type:Number,default:null},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},buffer:{type:Number,default:200},skipHover:{type:Boolean,default:!1},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},listClass:{type:[String,Object,Array],default:""},itemClass:{type:[String,Object,Array],default:""}},emits:["user-position"],setup(e,{expose:i,emit:l}){const t=e,g=Te(new Map),_=Te(new Map),f=$([]),y=$(null),S=$(!1),m=$(null),c=$("top");let o=0,p=0,b=!1,j=0,E=null,de=null,me=0,Qe=0;const ee=J(()=>{if(t.itemSize===null){const r={"-1":{accumulator:0}},u=t.items,s=t.sizeField,k=t.minItemSize;let D=1e4,A=0,d;for(let I=0,B=u.length;I<B;I++)d=u[I][s]||k,d<D&&(D=d),A+=d,r[I]={accumulator:A,size:d};return de=D,r}return[]}),et=J(()=>t.items.length&&typeof t.items[0]!="object"),tt=J(()=>{const r={};for(let u=0,s=t.items.length;u<s;u++)r[t.items[u][t.keyField]]=u;return r});Ue(ee,()=>{L(!1)},{deep:!0}),ut(()=>{re(()=>{L(!0),S.value=!0})});const fe=(r,u,s,k,D)=>{const A=ft({id:Qe++,index:u,used:!0,key:k,type:D}),d=pt({item:s,position:0,nr:A});return r.value.push(d),d},te=(r,u=!1)=>{const s=_,k=r.nr.type;let D=s.get(k);D||(D=[],s.set(k,D)),D.push(r),u||(r.nr.used=!1,r.position=-9999)},it=()=>{const r=t.direction==="vertical";let u;return r?u={start:m.value.scrollTop,end:m.value.scrollTop+m.value.clientHeight}:u={start:m.value.scrollLeft,end:m.value.scrollLeft+m.value.clientWidth},u},lt=()=>{throw setTimeout(()=>{console.error("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",m),console.error("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},st=()=>{f.value.sort((r,u)=>r.nr.index-u.nr.index)},L=(r,u=!1)=>{var ve,ge,ye,_e,Se,ze,be,De;const s=t.itemSize,k=de,D=et.value?null:t.keyField,A=t.items,d=A.length,I=ee.value,B=g,pe=_,Y=f,at=tt;let T,z,K,x,M;if(!d)T=z=x=M=K=0;else{const a=it();if(u){let h=a.start-j.value;if(h<0&&(h=-h),s===null&&h<k.value||h<s)return{continuous:!0}}j=a.start;const q=t.buffer;if(a.start-=q,a.end+=q,s===null){let h,C=0,$e=d-1,w=~~(d/2),Ie;do Ie=w,h=(ve=I[w])==null?void 0:ve.accumulator,h<a.start?C=w:w<d-1&&((ge=I[w+1])==null?void 0:ge.accumulator)>a.start&&($e=w),w=~~((C+$e)/2);while(w!==Ie);for(w<0&&(w=0),T=w,K=(ye=I[d-1])==null?void 0:ye.accumulator,z=w;z<d&&((_e=I[z])==null?void 0:_e.accumulator)<a.end;z++);for(z===-1?z=A.length-1:(z++,z>d&&(z=d)),x=o;x<d&&((Se=I[x])==null?void 0:Se.accumulator)<a.start;x++);for(M=x;M<d&&((ze=I[M])==null?void 0:ze.accumulator)<a.end;M++);}else{T=~~(a.start/s);const h=T%1;T-=h,z=Math.ceil(a.end/s),x=Math.max(0,Math.floor(a.start/s)),M=Math.floor(a.end/s),T<0&&(T=0),z>d&&(z=d),x<0&&(x=0),M>d&&(M=d),K=Math.ceil(d/1)*s}}z-T>1e3&&lt(),me=K;let n;const G=T<=p&&z>=T;if(G)for(let a=0,q=Y.value.length;a<q;a++)n=Y.value[a],n!=null&&n.nr.used&&(r&&(n.nr.index=at[n.item[D]]),(n.nr.index==null||n.nr.index<T||n.nr.index>=z)&&te(n));const he=G?null:new Map;let V,U,X;for(let a=T;a<z;a++){V=A[a];const q=D?V==null?void 0:V[D]:V;if(q==null)throw new Error(`Key is ${q} on item (keyField is '${D}')`);if(n=B.get(q),!s&&!((be=I[a])!=null&&be.size)){n&&te(n);continue}U=V.type;let h=pe.get(U);if(!n)G?h&&h.length?n=h.pop():n=fe(Y,a,V,q,U):(X=he.get(U)||0,(!h||X>=h.length)&&(n=fe(Y,a,V,q,U),te(n,!0),h=pe.get(U)),n=h[X],he.set(U,X+1)),B.delete(n.nr.key),n.nr.used=!0,n.nr.index=a,n.nr.key=q,n.nr.type=U,B.set(q,n);else if(!n.nr.used&&(n.nr.used=!0,h)){const C=h.indexOf(n);C!==-1&&h.splice(C,1)}n.item=V,s===null?(n.position=(De=I[a-1])==null?void 0:De.accumulator,n.offset=0):(n.position=Math.floor(a)*s,n.offset=a%1*s)}return o=T,p=z,clearTimeout(E),E=setTimeout(st,300),{continuous:G}},nt=r=>{const u=t.direction==="vertical"?{scroll:"scrollTop",start:"top"}:{scroll:"scrollLeft",start:"left"},s=m.value,k=u.scroll;s[k]=r},rt=r=>{var s;let u;t.itemSize===null?u=r>0?(s=ee.value[r-1])==null?void 0:s.accumulator:0:u=Math.floor(r)*t.itemSize,nt(u)},ot=()=>{const r=m.value;c.value!=="middle"&&(c.value="middle",l("user-position","middle")),r.scrollTop===0&&(c.value="top",l("user-position","top")),r.scrollTop+r.clientHeight===r.scrollHeight&&(c.value="bottom",l("user-position","bottom")),b||(b=!0,requestAnimationFrame(()=>{b=!1,L(!1,!0)}))};return i({scrollToItem:rt,_updateVisibleItems:L}),(r,u)=>(F(),H("div",{ref_key:"scroller",ref:m,class:Q(["vue-recycle-scroller",{ready:S.value,[`direction-${e.direction}`]:!0}]),onScrollPassive:ot},[(F(),Z(le(e.listTag),{ref:"wrapper",style:Ne({[e.direction==="vertical"?"minHeight":"minWidth"]:`${Be(me)}px`}),class:Q(["vue-recycle-scroller__item-wrapper",e.listClass])},{default:P(()=>[(F(!0),H(ct,null,dt(f.value,s=>(F(),Z(le(e.itemTag),Pe({key:s.nr.id,style:S.value?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${s.position}px) translate${e.direction==="vertical"?"X":"Y"}(${s.offset}px)`,width:void 0,height:void 0}:null,class:["vue-recycle-scroller__item-view",[e.itemClass,{hover:!e.skipHover&&y.value===s.nr.key}]]},mt(e.skipHover?{}:{mouseenter:()=>{y.value=s.nr.key},mouseleave:()=>{y.value=null}})),{default:P(()=>[oe(r.$slots,"default",{item:s.item,index:s.nr.index,active:s.nr.used})]),_:2},1040,["style","class"]))),128))]),_:3},8,["style","class"]))],34))}},Ee=N(je,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/core_scroller.vue"]]);je.__docgenInfo={exportName:"default",displayName:"core_scroller",description:"",tags:{},expose:[{name:"scrollToItem"},{name:"_updateVisibleItems"}],props:[{name:"items",description:"List of items you want to display in the scroller.",type:{name:"array"},required:!0},{name:"keyField",description:"Field used to identify items and optimize managing rendered views",type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"direction",description:"Direction of the scroller. Can be either `vertical` or `horizontal`.",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"itemSize",description:`Size of the items in the list.
If it is set to null (the default value), it will use variable size mode.`,type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"minItemSize",description:"Minimum size used if the height (or width in horizontal mode) of an item is unknown.",type:{name:"number|string"},defaultValue:{func:!1,value:"null"}},{name:"sizeField",description:"Field used to get the item's size in variable size mode.",type:{name:"string"},defaultValue:{func:!1,value:"'size'"}},{name:"buffer",description:"Amount of pixel to add to edges of the scrolling visible area to start rendering items further away.",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"skipHover",description:`If true, the hover state will be skipped.
This can be useful if you want to use the hover state for other purposes.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listTag",description:"The element to render as the list's wrapper.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"itemTag",description:"The element to render as the list item.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"listClass",description:"The custom classes added to the item list wrapper.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"itemClass",description:"The custom classes added to each item.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}}],events:[{name:"user-position"}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/core_scroller.vue"]};const Le={name:"DtScrollerItem",inject:["vscrollData","vscrollParent","vscrollResizeObserver"],props:{item:{required:!0},watchData:{type:Boolean,default:!1},active:{type:Boolean,required:!0},index:{type:Number,default:void 0},sizeDependencies:{type:[Array,Object],default:null},tag:{type:String,default:"div"}},computed:{id(){if(this.vscrollData.simpleArray)return this.index;if(this.vscrollData.keyField in this.item)return this.item[this.vscrollData.keyField];throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`)},size(){return this.vscrollData.sizes[this.id]||0},finalActive(){return this.active&&this.vscrollData.active}},watch:{watchData:"updateWatchData",id(e,i){if(this.$el.$_vs_id=this.id,this.size||this.onDataUpdate(),this.$_sizeObserved){const l=this.vscrollData.sizes[i],t=this.vscrollData.sizes[e];l!=null&&l!==t&&this.applySize(l)}},finalActive(e){this.size||(e?this.vscrollParent.$_undefinedMap[this.id]||(this.vscrollParent.$_undefinedSizes++,this.vscrollParent.$_undefinedMap[this.id]=!0):this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=!1)),this.vscrollResizeObserver?e?this.observeSize():this.unobserveSize():e&&this.$_pendingVScrollUpdate===this.id&&this.updateSize()}},created(){if(!this.$isServer&&(this.$_forceNextVScrollUpdate=null,this.updateWatchData(),!this.vscrollResizeObserver))for(const e in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[e],this.onDataUpdate)},mounted(){this.finalActive&&(this.updateSize(),this.observeSize())},beforeUnmount(){this.unobserveSize()},methods:{updateSize(){this.finalActive?this.$_pendingSizeUpdate!==this.id&&(this.$_pendingSizeUpdate=this.id,this.$_forceNextVScrollUpdate=null,this.$_pendingVScrollUpdate=null,this.computeSize(this.id)):this.$_forceNextVScrollUpdate=this.id},updateWatchData(){this.watchData&&!this.vscrollResizeObserver?this.$_watchData=this.$watch("item",()=>{this.onDataUpdate()},{deep:!0}):this.$_watchData&&(this.$_watchData(),this.$_watchData=null)},onVscrollUpdate({force:e}){!this.finalActive&&e&&(this.$_pendingVScrollUpdate=this.id),(this.$_forceNextVScrollUpdate===this.id||e||!this.size)&&this.updateSize()},onDataUpdate(){this.updateSize()},computeSize(e){this.$nextTick(()=>{if(this.id===e){const i=this.$el.offsetWidth,l=this.$el.offsetHeight;this.applyWidthHeight(i,l)}this.$_pendingSizeUpdate=null})},applyWidthHeight(e,i){const l=~~(this.vscrollParent.direction==="vertical"?i:e);l&&this.size!==l&&this.applySize(l)},applySize(e){this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=void 0),this.vscrollData.sizes[this.id]=e},observeSize(){this.vscrollResizeObserver&&(this.$_sizeObserved||(this.vscrollResizeObserver.observe(this.$el),this.$el.$_vs_id=this.id,this.$el.$_vs_onResize=this.onResize,this.$_sizeObserved=!0))},unobserveSize(){this.vscrollResizeObserver&&this.$_sizeObserved&&(this.vscrollResizeObserver.unobserve(this.$el),this.$el.$_vs_onResize=void 0,this.$_sizeObserved=!1)},onResize(e,i,l){this.id===e&&this.applyWidthHeight(i,l)}},render(){return ht(this.tag,this.$slots.default())}},gt=N(Le,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/scroller_item.vue"]]);Le.__docgenInfo={displayName:"DtScrollerItem",exportName:"default",description:"",tags:{},props:[{name:"item",required:!0},{name:"watchData",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:"Indicates if the view is actively used to display an item.",type:{name:"boolean"},required:!0},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"sizeDependencies",type:{name:"array|object"},defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/scroller_item.vue"]};const Ye={name:"DynamicScroller",components:{CoreScroller:Ee,DtScrollerItem:gt},provide(){return typeof ResizeObserver<"u"&&(this.$_resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{if(Array.isArray(e)){for(const i of e)if(i.target&&i.target.$_vs_onResize){let l,t;if(i.borderBoxSize){const g=i.borderBoxSize[0];l=g.inlineSize,t=g.blockSize}else l=i.contentRect.width,t=i.contentRect.height;i.target.$_vs_onResize(i.target.$_vs_id,l,t)}}})})),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:this.$_resizeObserver}},inheritAttrs:!1,props:{items:{type:Array,required:!0},dynamic:{type:Boolean,default:!1},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},minItemSize:{type:[Number,String]}},data(){return{vscrollData:{active:!0,sizes:{},keyField:this.keyField,simpleArray:!1}}},computed:{simpleArray(){return this.items.length&&typeof this.items[0]!="object"},itemsWithSize(){const e=[],{items:i,keyField:l,simpleArray:t}=this,g=this.vscrollData.sizes,_=i.length;for(let f=0;f<_;f++){const y=i[f],S=t?f:y[l];let m=g[S];typeof m>"u"&&!this.$_undefinedMap[S]&&(m=0),e.push({item:y,[l]:S,size:m})}return e}},watch:{simpleArray:{handler(e){this.vscrollData.simpleArray=e},immediate:!0},itemsWithSize(e,i){const l=this.$el.scrollTop;let t=0,g=0;const _=Math.min(e.length,i.length);for(let y=0;y<_&&!(t>=l);y++)t+=i[y].size||this.minItemSize,g+=e[y].size||this.minItemSize;const f=g-t;f!==0&&(this.$el.scrollTop+=f)}},beforeCreate(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={}},activated(){this.vscrollData.active=!0},deactivated(){this.vscrollData.active=!1},methods:{dynamicScrollerUpdateItems(){const e=this.$refs.scroller;e&&e._updateVisibleItems(!0)},dynamicScrollerUpdateItemsFromBottom(){const e=this.$refs.scroller;e&&e._updateVisibleItems(!1,!0)},scrollToItem(e){const i=this.$refs.scroller;i&&i.scrollToItem(e)},scrollToBottom(){if(this.$_scrollingToBottom)return;this.$_scrollingToBottom=!0;const e=this.$el;this.$nextTick(()=>{e.scrollTop=e.scrollHeight+5e3;const i=()=>{e.scrollTop=e.scrollHeight+5e3,requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight+5e3,this.$_undefinedSizes===0?this.$_scrollingToBottom=!1:requestAnimationFrame(i)})};requestAnimationFrame(i)})}}};function yt(e,i,l,t,g,_){const f=qe("dt-scroller-item"),y=qe("core-scroller");return F(),Z(y,Pe({ref:"scroller",items:_.itemsWithSize,"min-item-size":l.minItemSize,direction:l.direction,"key-field":l.keyField,"list-tag":l.listTag,"item-tag":l.itemTag},e.$attrs),{default:P(({item:S,index:m,active:c})=>[ae(f,{item:S,active:c,"size-dependencies":[S.message],"data-index":m},{default:P(()=>[oe(e.$slots,"default",Ce(Oe({item:S.item,index:m,active:c,itemWithSize:S})))]),_:2},1032,["item","active","size-dependencies","data-index"])]),_:3},16,["items","min-item-size","direction","key-field","list-tag","item-tag"])}const _t=N(Ye,[["render",yt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/dynamic_scroller.vue"]]);Ye.__docgenInfo={displayName:"DynamicScroller",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0},{name:"dynamic",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"keyField",type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"listTag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"itemTag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"minItemSize",type:{name:"number|string"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"},{name:"itemWithSize",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/dynamic_scroller.vue"]};const Ke={__name:"DtScroller",props:{direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},dynamic:{type:Boolean,default:!1},itemSize:{type:Number,default:null},itemTag:{type:String,default:"div"},items:{type:Array,required:!0},keyField:{type:String,default:"id"},listTag:{type:String,default:"div"},minItemSize:{type:[Number,String],default:null},scrollerHeight:{type:[String,Number],default:"100%"},scrollerWidth:{type:[String,Number],default:"100%"}},emits:["user-position"],setup(e,{expose:i,emit:l}){const t=e;vt("emit",l);const g=$(null),_=J(()=>({width:typeof t.scrollerWidth=="number"?`${t.scrollerWidth}px`:t.scrollerWidth,height:typeof t.scrollerHeight=="number"?`${t.scrollerHeight}px`:t.scrollerHeight}));Ue(t,()=>{c()},{deep:!0,immediate:!0});function f(){DtScroller.value&&DtScroller.value.scrollToBottom()}function y(o){DtScroller.value&&DtScroller.value.scrollToItem(o)}function S(){DtScroller.value&&(t.dynamic?DtScroller.value.dynamicScrollerUpdateItems():DtScroller.value._updateVisibleItems(!0))}function m(){DtScroller.value&&(t.dynamic?DtScroller.value.dynamicScrollerUpdateItemsFromBottom():DtScroller.value._updateVisibleItems(!1,!0))}function c(){t.dynamic&&!t.minItemSize&&console.error("DtScroller error: 'minItemSize' is required on 'dynamic' mode."),!t.dynamic&&!t.itemSize&&console.error("DtScroller error: 'itemSize' is required.")}return i({scrollToBottom:f,scrollToItem:y,updateItems:S,updateItemsFromBottom:m}),(o,p)=>(F(),Z(le(e.dynamic?_t:Ee),{ref_key:"scroller",ref:g,"data-qa":"dt-scroller",items:e.items,"item-size":e.itemSize,"min-item-size":e.minItemSize,direction:e.direction,"key-field":e.keyField,"list-tag":e.listTag,"item-tag":e.itemTag,style:Ne(Be(_)),tabindex:"0",onUserPosition:p[0]||(p[0]=b=>o.$emit("user-position",b))},{default:P(({item:b,index:j,active:E})=>[oe(o.$slots,"default",Ce(Oe({item:b,index:j,active:E})))]),_:3},40,["items","item-size","min-item-size","direction","key-field","list-tag","item-tag","style"]))}},ue=N(Ke,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/DtScroller.vue"]]);Ke.__docgenInfo={exportName:"default",displayName:"DtScroller",description:"",tags:{},expose:[{name:"scrollToBottom"},{name:"scrollToItem"},{name:"updateItems"},{name:"updateItemsFromBottom"}],props:[{name:"direction",description:"The direction of the scroller.",tags:{},values:["vertical","horizontal"],type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"}},{name:"dynamic",description:`Indicates if the items need to react to changes in their size.
If disabled the itemSize prop is required and you will get improved performance.
If enabled the minItemSize prop is required and you
will have reduced performance but the ability to reactively size list items`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"itemSize",description:`Display height (or width in horizontal mode) of the items in pixels
used to calculate the scroll size and position.
 Required if DYNAMIC is false`,type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"itemTag",description:"The tag to use for the items.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"items",description:`The items to render.
If the items are simple arrays, the index will be used as the key.
If the items are objects, the keyField will be used as the key.`,tags:{example:[{description:"items: [ 'item1', 'item2', 'item3' ]",title:"example"},{description:"items: [ { id: 1, name: 'item1' }, { id: 2, name: 'item2' }, { id: 3, name: 'item3' } ]",title:"example"}]},type:{name:"array"},required:!0},{name:"keyField",description:`The key field to use for the items.
If the items are objects, the scroller needs to be able to identify them.
By default it will look for an id field on the items.
This can be configured with this prop if you are using another field name.`,type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"listTag",description:"The tag to use for the list.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"minItemSize",description:`Minimum size used if the height (or width in horizontal mode) of a item is unknown.
Is required for the initial render of items in DYNAMIC size mode.`,type:{name:"number|string"},defaultValue:{func:!1,value:"null"}},{name:"scrollerHeight",description:`The height of the scroller.
Can be a number (in pixels) or a string (in CSS units).`,type:{name:"string|number"},defaultValue:{func:!1,value:"'100%'"}},{name:"scrollerWidth",description:`The width of the scroller.
Can be a number (in pixels) or a string (in CSS units).`,type:{name:"string|number"},defaultValue:{func:!1,value:"'100%'"}}],events:[{name:"user-position",description:"Describe when the scroller changes from start/middle/end",properties:[{type:{names:["string"]},name:"position",description:"The position of the scroller."}],tags:[{title:"param",type:{name:"string"},name:"position",description:"The position of the scroller."},{title:"values",content:"start, middle, end"}]}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/DtScroller.vue"]};const ce=e=>(Re("data-v-619cde92"),e=e(),He(),e),St=ce(()=>v("h3",null,"Scroller",-1)),zt=ce(()=>v("br",null,null,-1)),bt=ce(()=>v("br",null,null,-1)),Dt={class:"user"},Ge={__name:"scroller_default.story",setup(e){const i=$(Array.from({length:50},(c,o)=>({id:o,name:`User ${o}`}))),l=$("scroller"),t=$(!1),g=$(null);let _;function f(c){l.value.scrollToItem(c)}function y(){i.value.push({id:i.value.length,name:`User ${i.value.length}`})}function S(){const c=i.value.length;for(let o=1;o<=10;o++)i.value.unshift({id:c+o,name:`User ${c+o}`});l.value.scrollToItem(10),l.value.updateItems()}function m(){t.value=!t.value,l.value.scrollToItem(i.value.length-1),clearInterval(_),_=setInterval(function(){t.value&&(y(),re(()=>{g.value==="bottom"&&l.value.scrollToItem(i.value.length-1)}),l.value.updateItemsFromBottom())},1e3)}return(c,o)=>(F(),H("div",null,[St,v("button",{onClick:o[0]||(o[0]=p=>f(25))}," Go to index 25 "),v("button",{onClick:o[1]||(o[1]=p=>f(0))}," Go to start "),v("button",{onClick:o[2]||(o[2]=p=>f(i.value.length-1))}," Go to end "),v("button",{onClick:S}," Add 10 items top "),zt,bt,v("button",{class:"autoscrolling",onClick:m},[se(" Auto scrolling "),v("div",{class:Q({enabled:t.value})},null,2)]),ae(ue,{ref_key:"scroller",ref:l,class:"scroller",items:i.value,"item-size":c.$attrs.itemSize,"scroller-height":c.$attrs.scrollerHeight,"scroller-width":c.$attrs.scrollerWidth,"min-item-size":c.$attrs.minItemSize,"list-tag":c.$attrs.listTag,"item-tag":c.$attrs.itemTag,direction:c.$attrs.direction,onUserPosition:o[3]||(o[3]=p=>{c.$attrs.onUserPosition(p),g.value=p})},{default:P(({item:p})=>[v("div",Dt,ne(p.name),1)]),_:1},8,["items","item-size","scroller-height","scroller-width","min-item-size","list-tag","item-tag","direction"])]))}},$t=N(Ge,[["__scopeId","data-v-619cde92"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_default.story.vue"]]);Ge.__docgenInfo={exportName:"default",displayName:"scroller_default.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_default.story.vue"]};const we=""+new URL("person-32d5165c.png",import.meta.url).href;const W=e=>(Re("data-v-70b63223"),e=e(),He(),e),It=W(()=>v("h3",null,"Scroller with dynamic size",-1)),Tt=W(()=>v("br",null,null,-1)),qt=W(()=>v("br",null,null,-1)),wt=W(()=>v("br",null,null,-1)),kt=W(()=>v("br",null,null,-1)),xt={class:"avatar"},Vt=["src"],Ft={class:"text"},Xe={__name:"scroller_dynamic.story",setup(e){const i=["lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam,nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit.","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam","lorem ipsum dolor sit amet"],l=$(Array.from({length:37},(o,p)=>({id:p,avatar:we,message:i[Math.floor(Math.random()*8)]})));function t(o){l.value[o].message=i[Math.floor(Math.random()*8)]}const g=$("scroller"),_=$(!1),f=$(null);let y;function S(){l.value.push({id:l.value.length,avatar:we,message:i[Math.floor(Math.random()*8)]})}function m(){_.value=!_.value,g.value.scrollToBottom(),clearInterval(y),y=setInterval(function(){_.value&&(S(),re(()=>{f.value==="bottom"&&g.value.scrollToBottom()}))},1e3)}function c(){l.value=[...l.value].reverse(),g.value.updateItems()}return(o,p)=>(F(),H("div",null,[It,v("button",{onClick:p[0]||(p[0]=b=>t(0))}," Update Element Message "),Tt,qt,v("button",{onClick:p[1]||(p[1]=b=>c())}," Replace Items "),wt,kt,v("button",{class:"autoscrolling",onClick:m},[se(" Auto scrolling "),v("div",{class:Q({enabled:_.value})},null,2)]),ae(ue,{ref_key:"scroller",ref:g,items:l.value,"min-item-size":54,"scroller-height":300,"scroller-width":500,class:"scroller",dynamic:!0,onUserPosition:p[2]||(p[2]=b=>f.value=b)},{default:P(({item:b})=>[v("div",xt,[se(ne(b.id)+" ",1),(F(),H("img",{key:b.avatar,src:b.avatar,alt:"avatar",class:"image"},null,8,Vt))]),v("div",Ft,ne(b.message),1)]),_:1},8,["items"])]))}},At=N(Xe,[["__scopeId","data-v-70b63223"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_dynamic.story.vue"]]);Xe.__docgenInfo={exportName:"default",displayName:"scroller_dynamic.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_dynamic.story.vue"]};const Je={listTag:"div",itemTag:"div",itemSize:32,scrollerWidth:300,scrollerHeight:200,onScrollStart:ie("scroll-start"),onScrollEnd:ie("scroll-end"),onUserPosition:ie("user-position")},Ze={default:{control:{type:null},description:`Markup to display each item from the items array.

item {*}: the item currently being rendered from within your items array.

index {number}: the index of this item in the items array.

active {boolean}: whether this item is currently visible to the user.`,table:{type:{summary:"VNode"}}},items:{control:{type:null}},dynamic:{control:{type:null}},keyField:{control:{type:null}},direction:{control:{type:"select"},options:["horizontal","vertical"]},listTag:{control:{type:"text"},defaultValue:"div"},itemTag:{control:{type:"text"},defaultValue:"div"},itemSize:{control:{type:"number"},defaultValue:32},minItemSize:{control:{type:null}},scrollerWidth:{control:{type:"number"},defaultValue:300},scrollerHeight:{control:{type:"number"},defaultValue:200},onScrollStart:{table:{disable:!0}},onScrollEnd:{table:{disable:!0}},onUserPosition:{table:{disable:!0}},"user-position":{description:"Emit the last user position.",table:{type:{summary:"event"}}}},Mt={title:"Components/Scroller",component:ue,argTypes:Ze,args:Je,excludeStories:/.*Data$/},Ut=e=>We(e,$t),O={render:Ut,args:{default:"Scroller"}},Pt=e=>We(e,At),R={render:Pt,parameters:{controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var ke,xe,Ve;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    default: 'Scroller'
  }
}`,...(Ve=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var Fe,Ae,Me;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};const Nt=["argsData","argTypesData","Default","Dynamic"],Ht=Object.freeze(Object.defineProperty({__proto__:null,Default:O,Dynamic:R,__namedExportsOrder:Nt,argTypesData:Ze,argsData:Je,default:Mt},Symbol.toStringTag,{value:"Module"}));export{Ht as S};
//# sourceMappingURL=scroller.stories-686b063c.js.map
