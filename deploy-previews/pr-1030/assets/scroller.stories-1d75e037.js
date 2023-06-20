import{r as Te,I,K as J,M as Ue,J as ut,O as re,o as F,f as H,b as Z,w as P,F as ct,u as dt,p as le,m as Pe,B as mt,l as ae,x as Ne,N as Be,n as Q,S as ft,W as pt,h as ht,a as qe,d as oe,D as Ce,E as Oe,X as vt,g,s as se,t as ne,Y as Re,Z as He}from"./vue.esm-bundler-e62bdd6b.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{c as We}from"./storybook_utils-bdc1a785.js";import{a as ie}from"./chunk-OPEUWD42-a3b45fd8.js";const je={__name:"core_scroller",props:{items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},itemSize:{type:Number,default:null},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},buffer:{type:Number,default:200},skipHover:{type:Boolean,default:!1},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},listClass:{type:[String,Object,Array],default:""},itemClass:{type:[String,Object,Array],default:""}},emits:["user-position"],setup(e,{expose:i,emit:l}){const t=e,a=Te(new Map),_=Te(new Map),p=I([]),y=I(null),z=I(!1),f=I(null),d=I("top");let o=0,h=0,S=!1,j=0,E=null,de=null,me=0,Qe=0;const ee=J(()=>{if(t.itemSize===null){const r={"-1":{accumulator:0}},c=t.items,s=t.sizeField,k=t.minItemSize;let $=1e4,A=0,m;for(let D=0,B=c.length;D<B;D++)m=c[D][s]||k,m<$&&($=m),A+=m,r[D]={accumulator:A,size:m};return de=$,r}return[]}),et=J(()=>t.items.length&&typeof t.items[0]!="object"),tt=J(()=>{const r={};for(let c=0,s=t.items.length;c<s;c++)r[t.items[c][t.keyField]]=c;return r});Ue(ee,()=>{L(!1)},{deep:!0}),ut(()=>{re(()=>{L(!0),z.value=!0})});const fe=(r,c,s,k,$)=>{const A=ft({id:Qe++,index:c,used:!0,key:k,type:$}),m=pt({item:s,position:0,nr:A});return r.value.push(m),m},te=(r,c=!1)=>{const s=_,k=r.nr.type;let $=s.get(k);$||($=[],s.set(k,$)),$.push(r),c||(r.nr.used=!1,r.position=-9999)},it=()=>{const r=t.direction==="vertical";let c;return r?c={start:f.value.scrollTop,end:f.value.scrollTop+f.value.clientHeight}:c={start:f.value.scrollLeft,end:f.value.scrollLeft+f.value.clientWidth},c},lt=()=>{throw setTimeout(()=>{console.error("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",f),console.error("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},st=()=>{p.value.sort((r,c)=>r.nr.index-c.nr.index)},L=(r,c=!1)=>{var ve,ge,ye,_e,ze,be,Se,$e;const s=t.itemSize,k=de,$=et.value?null:t.keyField,A=t.items,m=A.length,D=ee.value,B=a,pe=_,Y=p,ot=tt;let T,b,K,x,M;if(!m)T=b=x=M=K=0;else{const u=it();if(c){let v=u.start-j.value;if(v<0&&(v=-v),s===null&&v<k.value||v<s)return{continuous:!0}}j=u.start;const q=t.buffer;if(u.start-=q,u.end+=q,s===null){let v,C=0,Ie=m-1,w=~~(m/2),De;do De=w,v=(ve=D[w])==null?void 0:ve.accumulator,v<u.start?C=w:w<m-1&&((ge=D[w+1])==null?void 0:ge.accumulator)>u.start&&(Ie=w),w=~~((C+Ie)/2);while(w!==De);for(w<0&&(w=0),T=w,K=(ye=D[m-1])==null?void 0:ye.accumulator,b=w;b<m&&((_e=D[b])==null?void 0:_e.accumulator)<u.end;b++);for(b===-1?b=A.length-1:(b++,b>m&&(b=m)),x=o;x<m&&((ze=D[x])==null?void 0:ze.accumulator)<u.start;x++);for(M=x;M<m&&((be=D[M])==null?void 0:be.accumulator)<u.end;M++);}else{T=~~(u.start/s);const v=T%1;T-=v,b=Math.ceil(u.end/s),x=Math.max(0,Math.floor(u.start/s)),M=Math.floor(u.end/s),T<0&&(T=0),b>m&&(b=m),x<0&&(x=0),M>m&&(M=m),K=Math.ceil(m/1)*s}}b-T>1e3&&lt(),me=K;let n;const G=T<=h&&b>=T;if(G)for(let u=0,q=Y.value.length;u<q;u++)n=Y.value[u],n!=null&&n.nr.used&&(r&&(n.nr.index=ot[n.item[$]]),(n.nr.index==null||n.nr.index<T||n.nr.index>=b)&&te(n));const he=G?null:new Map;let V,U,X;for(let u=T;u<b;u++){V=A[u];const q=$?V==null?void 0:V[$]:V;if(q==null)throw new Error(`Key is ${q} on item (keyField is '${$}')`);if(n=B.get(q),!s&&!((Se=D[u])!=null&&Se.size)){n&&te(n);continue}U=V.type;let v=pe.get(U);if(!n)G?v&&v.length?n=v.pop():n=fe(Y,u,V,q,U):(X=he.get(U)||0,(!v||X>=v.length)&&(n=fe(Y,u,V,q,U),te(n,!0),v=pe.get(U)),n=v[X],he.set(U,X+1)),B.delete(n.nr.key),n.nr.used=!0,n.nr.index=u,n.nr.key=q,n.nr.type=U,B.set(q,n);else if(!n.nr.used&&(n.nr.used=!0,v)){const C=v.indexOf(n);C!==-1&&v.splice(C,1)}n.item=V,s===null?(n.position=($e=D[u-1])==null?void 0:$e.accumulator,n.offset=0):(n.position=Math.floor(u)*s,n.offset=u%1*s)}return o=T,h=b,clearTimeout(E),E=setTimeout(st,300),{continuous:G}},nt=r=>{const c=t.direction==="vertical"?{scroll:"scrollTop",start:"top"}:{scroll:"scrollLeft",start:"left"},s=f.value,k=c.scroll;s[k]=r},rt=r=>{var s;let c;t.itemSize===null?c=r>0?(s=ee.value[r-1])==null?void 0:s.accumulator:0:c=Math.floor(r)*t.itemSize,nt(c)},at=()=>{const r=f.value;d.value!=="middle"&&(d.value="middle",l("user-position","middle")),r.scrollTop===0&&(d.value="top",l("user-position","top")),r.scrollTop+r.clientHeight===r.scrollHeight&&(d.value="bottom",l("user-position","bottom")),S||(S=!0,requestAnimationFrame(()=>{S=!1,L(!1,!0)}))};return i({scrollToItem:rt,_updateVisibleItems:L}),(r,c)=>(F(),H("div",{ref_key:"scroller",ref:f,class:Q(["vue-recycle-scroller",{ready:z.value,[`direction-${e.direction}`]:!0}]),onScrollPassive:at},[(F(),Z(le(e.listTag),{ref:"wrapper",style:Ne({[e.direction==="vertical"?"minHeight":"minWidth"]:`${Be(me)}px`}),class:Q(["vue-recycle-scroller__item-wrapper",e.listClass])},{default:P(()=>[(F(!0),H(ct,null,dt(p.value,s=>(F(),Z(le(e.itemTag),Pe({key:s.nr.id,style:z.value?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${s.position}px) translate${e.direction==="vertical"?"X":"Y"}(${s.offset}px)`,width:void 0,height:void 0}:null,class:["vue-recycle-scroller__item-view",[e.itemClass,{hover:!e.skipHover&&y.value===s.nr.key}]]},mt(e.skipHover?{}:{mouseenter:()=>{y.value=s.nr.key},mouseleave:()=>{y.value=null}})),{default:P(()=>[ae(r.$slots,"default",{item:s.item,index:s.nr.index,active:s.nr.used})]),_:2},1040,["style","class"]))),128))]),_:3},8,["style","class"]))],34))}},Ee=N(je,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/core_scroller.vue"]]);je.__docgenInfo={exportName:"default",displayName:"core_scroller",description:"",tags:{},expose:[{name:"scrollToItem"},{name:"_updateVisibleItems"}],props:[{name:"items",description:"List of items you want to display in the scroller.",type:{name:"array"},required:!0},{name:"keyField",description:"Field used to identify items and optimize managing rendered views",type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"direction",description:"Direction of the scroller. Can be either `vertical` or `horizontal`.",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"itemSize",description:`Size of the items in the list.
If it is set to null (the default value), it will use variable size mode.`,type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"minItemSize",description:"Minimum size used if the height (or width in horizontal mode) of an item is unknown.",type:{name:"number|string"},defaultValue:{func:!1,value:"null"}},{name:"sizeField",description:"Field used to get the item's size in variable size mode.",type:{name:"string"},defaultValue:{func:!1,value:"'size'"}},{name:"buffer",description:"Amount of pixel to add to edges of the scrolling visible area to start rendering items further away.",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"skipHover",description:`If true, the hover state will be skipped.
This can be useful if you want to use the hover state for other purposes.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listTag",description:"The element to render as the list's wrapper.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"itemTag",description:"The element to render as the list item.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"listClass",description:"The custom classes added to the item list wrapper.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"itemClass",description:"The custom classes added to each item.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}}],events:[{name:"user-position"}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/core_scroller.vue"]};const Le={name:"DtScrollerItem",inject:["vscrollData","vscrollParent","vscrollResizeObserver"],props:{item:{required:!0},watchData:{type:Boolean,default:!1},active:{type:Boolean,required:!0},index:{type:Number,default:void 0},sizeDependencies:{type:[Array,Object],default:null},tag:{type:String,default:"div"}},computed:{id(){if(this.vscrollData.simpleArray)return this.index;if(this.vscrollData.keyField in this.item)return this.item[this.vscrollData.keyField];throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`)},size(){return this.vscrollData.sizes[this.id]||0},finalActive(){return this.active&&this.vscrollData.active}},watch:{watchData:"updateWatchData",id(e,i){if(this.$el.$_vs_id=this.id,this.size||this.onDataUpdate(),this.$_sizeObserved){const l=this.vscrollData.sizes[i],t=this.vscrollData.sizes[e];l!=null&&l!==t&&this.applySize(l)}},finalActive(e){this.size||(e?this.vscrollParent.$_undefinedMap[this.id]||(this.vscrollParent.$_undefinedSizes++,this.vscrollParent.$_undefinedMap[this.id]=!0):this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=!1)),this.vscrollResizeObserver?e?this.observeSize():this.unobserveSize():e&&this.$_pendingVScrollUpdate===this.id&&this.updateSize()}},created(){if(!this.$isServer&&(this.$_forceNextVScrollUpdate=null,this.updateWatchData(),!this.vscrollResizeObserver))for(const e in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[e],this.onDataUpdate)},mounted(){this.finalActive&&(this.updateSize(),this.observeSize())},beforeUnmount(){this.unobserveSize()},methods:{updateSize(){this.finalActive?this.$_pendingSizeUpdate!==this.id&&(this.$_pendingSizeUpdate=this.id,this.$_forceNextVScrollUpdate=null,this.$_pendingVScrollUpdate=null,this.computeSize(this.id)):this.$_forceNextVScrollUpdate=this.id},updateWatchData(){this.watchData&&!this.vscrollResizeObserver?this.$_watchData=this.$watch("item",()=>{this.onDataUpdate()},{deep:!0}):this.$_watchData&&(this.$_watchData(),this.$_watchData=null)},onVscrollUpdate({force:e}){!this.finalActive&&e&&(this.$_pendingVScrollUpdate=this.id),(this.$_forceNextVScrollUpdate===this.id||e||!this.size)&&this.updateSize()},onDataUpdate(){this.updateSize()},computeSize(e){this.$nextTick(()=>{if(this.id===e){const i=this.$el.offsetWidth,l=this.$el.offsetHeight;this.applyWidthHeight(i,l)}this.$_pendingSizeUpdate=null})},applyWidthHeight(e,i){const l=~~(this.vscrollParent.direction==="vertical"?i:e);l&&this.size!==l&&this.applySize(l)},applySize(e){this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=void 0),this.vscrollData.sizes[this.id]=e},observeSize(){this.vscrollResizeObserver&&(this.$_sizeObserved||(this.vscrollResizeObserver.observe(this.$el),this.$el.$_vs_id=this.id,this.$el.$_vs_onResize=this.onResize,this.$_sizeObserved=!0))},unobserveSize(){this.vscrollResizeObserver&&this.$_sizeObserved&&(this.vscrollResizeObserver.unobserve(this.$el),this.$el.$_vs_onResize=void 0,this.$_sizeObserved=!1)},onResize(e,i,l){this.id===e&&this.applyWidthHeight(i,l)}},render(){return ht(this.tag,this.$slots.default())}},gt=N(Le,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/scroller_item.vue"]]);Le.__docgenInfo={displayName:"DtScrollerItem",exportName:"default",description:"",tags:{},props:[{name:"item",required:!0},{name:"watchData",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:"Indicates if the view is actively used to display an item.",type:{name:"boolean"},required:!0},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"sizeDependencies",type:{name:"array|object"},defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/scroller_item.vue"]};const Ye={name:"DynamicScroller",components:{CoreScroller:Ee,DtScrollerItem:gt},provide(){return typeof ResizeObserver<"u"&&(this.$_resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{if(Array.isArray(e)){for(const i of e)if(i.target&&i.target.$_vs_onResize){let l,t;if(i.borderBoxSize){const a=i.borderBoxSize[0];l=a.inlineSize,t=a.blockSize}else l=i.contentRect.width,t=i.contentRect.height;i.target.$_vs_onResize(i.target.$_vs_id,l,t)}}})})),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:this.$_resizeObserver}},inheritAttrs:!1,props:{items:{type:Array,required:!0},dynamic:{type:Boolean,default:!1},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},minItemSize:{type:[Number,String]}},data(){return{vscrollData:{active:!0,sizes:{},keyField:this.keyField,simpleArray:!1}}},computed:{simpleArray(){return this.items.length&&typeof this.items[0]!="object"},itemsWithSize(){const e=[],{items:i,keyField:l,simpleArray:t}=this,a=this.vscrollData.sizes,_=i.length;for(let p=0;p<_;p++){const y=i[p],z=t?p:y[l];let f=a[z];typeof f>"u"&&!this.$_undefinedMap[z]&&(f=0),e.push({item:y,[l]:z,size:f})}return e}},watch:{simpleArray:{handler(e){this.vscrollData.simpleArray=e},immediate:!0},itemsWithSize(e,i){const l=this.$el.scrollTop;let t=0,a=0;const _=Math.min(e.length,i.length);for(let y=0;y<_&&!(t>=l);y++)t+=i[y].size||this.minItemSize,a+=e[y].size||this.minItemSize;const p=a-t;p!==0&&(this.$el.scrollTop+=p)}},beforeCreate(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={}},activated(){this.vscrollData.active=!0},deactivated(){this.vscrollData.active=!1},methods:{dynamicScrollerUpdateItems(){const e=this.$refs.scroller;e&&e._updateVisibleItems(!0)},dynamicScrollerUpdateItemsFromBottom(){const e=this.$refs.scroller;e&&e._updateVisibleItems(!1,!0)},scrollToItem(e){const i=this.$refs.scroller;i&&i.scrollToItem(e)},scrollToBottom(){if(this.$_scrollingToBottom)return;this.$_scrollingToBottom=!0;const e=this.$el;this.$nextTick(()=>{e.scrollTop=e.scrollHeight+5e3;const i=()=>{e.scrollTop=e.scrollHeight+5e3,requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight+5e3,this.$_undefinedSizes===0?this.$_scrollingToBottom=!1:requestAnimationFrame(i)})};requestAnimationFrame(i)})}}};function yt(e,i,l,t,a,_){const p=qe("dt-scroller-item"),y=qe("core-scroller");return F(),Z(y,Pe({ref:"scroller",items:_.itemsWithSize,"min-item-size":l.minItemSize,direction:l.direction,"key-field":l.keyField,"list-tag":l.listTag,"item-tag":l.itemTag},e.$attrs),{default:P(({item:z,index:f,active:d})=>[oe(p,{item:z,active:d,"size-dependencies":[z.message],"data-index":f},{default:P(()=>[ae(e.$slots,"default",Ce(Oe({item:z.item,index:f,active:d,itemWithSize:z})))]),_:2},1032,["item","active","size-dependencies","data-index"])]),_:3},16,["items","min-item-size","direction","key-field","list-tag","item-tag"])}const _t=N(Ye,[["render",yt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/dynamic_scroller.vue"]]);Ye.__docgenInfo={displayName:"DynamicScroller",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0},{name:"dynamic",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"keyField",type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"listTag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"itemTag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"minItemSize",type:{name:"number|string"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"},{name:"itemWithSize",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/dynamic_scroller.vue"]};const Ke={__name:"scroller",props:{direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},dynamic:{type:Boolean,default:!1},itemSize:{type:Number,default:null},itemTag:{type:String,default:"div"},items:{type:Array,required:!0},keyField:{type:String,default:"id"},listTag:{type:String,default:"div"},minItemSize:{type:[Number,String],default:null},scrollerHeight:{type:[String,Number],default:"100%"},scrollerWidth:{type:[String,Number],default:"100%"}},emits:["user-position"],setup(e,{expose:i,emit:l}){const t=e;vt("emit",l);const a=I(null),_=J(()=>({width:typeof t.scrollerWidth=="number"?`${t.scrollerWidth}px`:t.scrollerWidth,height:typeof t.scrollerHeight=="number"?`${t.scrollerHeight}px`:t.scrollerHeight}));Ue(t,()=>{d()},{deep:!0,immediate:!0});function p(){a.value&&a.value.scrollToBottom()}function y(o){a.value&&a.value.scrollToItem(o)}function z(){a.value&&(t.dynamic?a.value.dynamicScrollerUpdateItems():a.value._updateVisibleItems(!0))}function f(){a.value&&(t.dynamic?a.value.dynamicScrollerUpdateItemsFromBottom():a.value._updateVisibleItems(!1,!0))}function d(){t.dynamic&&!t.minItemSize&&console.error("DtScroller error: 'minItemSize' is required on 'dynamic' mode."),!t.dynamic&&!t.itemSize&&console.error("DtScroller error: 'itemSize' is required.")}return i({scrollToBottom:p,scrollToItem:y,updateItems:z,updateItemsFromBottom:f}),(o,h)=>(F(),Z(le(e.dynamic?_t:Ee),{ref_key:"scroller",ref:a,"data-qa":"dt-scroller",items:e.items,"item-size":e.itemSize,"min-item-size":e.minItemSize,direction:e.direction,"key-field":e.keyField,"list-tag":e.listTag,"item-tag":e.itemTag,style:Ne(Be(_)),tabindex:"0",onUserPosition:h[0]||(h[0]=S=>o.$emit("user-position",S))},{default:P(({item:S,index:j,active:E})=>[ae(o.$slots,"default",Ce(Oe({item:S,index:j,active:E})))]),_:3},40,["items","item-size","min-item-size","direction","key-field","list-tag","item-tag","style"]))}},ue=N(Ke,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller.vue"]]);Ke.__docgenInfo={exportName:"default",displayName:"scroller",description:"",tags:{},expose:[{name:"scrollToBottom"},{name:"scrollToItem"},{name:"updateItems"},{name:"updateItemsFromBottom"}],props:[{name:"direction",description:"The direction of the scroller.",tags:{},values:["vertical","horizontal"],type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"}},{name:"dynamic",description:`Indicates if the items need to react to changes in their size.
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
Can be a number (in pixels) or a string (in CSS units).`,type:{name:"string|number"},defaultValue:{func:!1,value:"'100%'"}}],events:[{name:"user-position",description:"Describe when the scroller changes from start/middle/end",properties:[{type:{names:["string"]},name:"position",description:"The position of the scroller."}],tags:[{title:"param",type:{name:"string"},name:"position",description:"The position of the scroller."},{title:"values",content:"start, middle, end"}]}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller.vue"]};const ce=e=>(Re("data-v-619cde92"),e=e(),He(),e),zt=ce(()=>g("h3",null,"Scroller",-1)),bt=ce(()=>g("br",null,null,-1)),St=ce(()=>g("br",null,null,-1)),$t={class:"user"},Ge={__name:"scroller_default.story",setup(e){const i=I(Array.from({length:50},(d,o)=>({id:o,name:`User ${o}`}))),l=I("scroller"),t=I(!1),a=I(null);let _;function p(d){l.value.scrollToItem(d)}function y(){i.value.push({id:i.value.length,name:`User ${i.value.length}`})}function z(){const d=i.value.length;for(let o=1;o<=10;o++)i.value.unshift({id:d+o,name:`User ${d+o}`});l.value.scrollToItem(10),l.value.updateItems()}function f(){t.value=!t.value,l.value.scrollToItem(i.value.length-1),clearInterval(_),_=setInterval(function(){t.value&&(y(),re(()=>{a.value==="bottom"&&l.value.scrollToItem(i.value.length-1)}),l.value.updateItemsFromBottom())},1e3)}return(d,o)=>(F(),H("div",null,[zt,g("button",{onClick:o[0]||(o[0]=h=>p(25))}," Go to index 25 "),g("button",{onClick:o[1]||(o[1]=h=>p(0))}," Go to start "),g("button",{onClick:o[2]||(o[2]=h=>p(i.value.length-1))}," Go to end "),g("button",{onClick:z}," Add 10 items top "),bt,St,g("button",{class:"autoscrolling",onClick:f},[se(" Auto scrolling "),g("div",{class:Q({enabled:t.value})},null,2)]),oe(ue,{ref_key:"scroller",ref:l,class:"scroller",items:i.value,"item-size":d.$attrs.itemSize,"scroller-height":d.$attrs.scrollerHeight,"scroller-width":d.$attrs.scrollerWidth,"min-item-size":d.$attrs.minItemSize,"list-tag":d.$attrs.listTag,"item-tag":d.$attrs.itemTag,direction:d.$attrs.direction,onUserPosition:o[3]||(o[3]=h=>{d.$attrs.onUserPosition(h),a.value=h})},{default:P(({item:h})=>[g("div",$t,ne(h.name),1)]),_:1},8,["items","item-size","scroller-height","scroller-width","min-item-size","list-tag","item-tag","direction"])]))}},It=N(Ge,[["__scopeId","data-v-619cde92"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_default.story.vue"]]);Ge.__docgenInfo={exportName:"default",displayName:"scroller_default.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_default.story.vue"]};const we=""+new URL("person-32d5165c.png",import.meta.url).href;const W=e=>(Re("data-v-70b63223"),e=e(),He(),e),Dt=W(()=>g("h3",null,"Scroller with dynamic size",-1)),Tt=W(()=>g("br",null,null,-1)),qt=W(()=>g("br",null,null,-1)),wt=W(()=>g("br",null,null,-1)),kt=W(()=>g("br",null,null,-1)),xt={class:"avatar"},Vt=["src"],Ft={class:"text"},Xe={__name:"scroller_dynamic.story",setup(e){const i=["lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam,nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit.","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc, eget aliquam nisl ni loremlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nunc nisl aliquet nunc","lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam","lorem ipsum dolor sit amet"],l=I(Array.from({length:37},(o,h)=>({id:h,avatar:we,message:i[Math.floor(Math.random()*8)]})));function t(o){l.value[o].message=i[Math.floor(Math.random()*8)]}const a=I("scroller"),_=I(!1),p=I(null);let y;function z(){l.value.push({id:l.value.length,avatar:we,message:i[Math.floor(Math.random()*8)]})}function f(){_.value=!_.value,a.value.scrollToBottom(),clearInterval(y),y=setInterval(function(){_.value&&(z(),re(()=>{p.value==="bottom"&&a.value.scrollToBottom()}))},1e3)}function d(){l.value=[...l.value].reverse(),a.value.updateItems()}return(o,h)=>(F(),H("div",null,[Dt,g("button",{onClick:h[0]||(h[0]=S=>t(0))}," Update Element Message "),Tt,qt,g("button",{onClick:h[1]||(h[1]=S=>d())}," Replace Items "),wt,kt,g("button",{class:"autoscrolling",onClick:f},[se(" Auto scrolling "),g("div",{class:Q({enabled:_.value})},null,2)]),oe(ue,{ref_key:"scroller",ref:a,items:l.value,"min-item-size":54,"scroller-height":300,"scroller-width":500,class:"scroller",dynamic:!0,onUserPosition:h[2]||(h[2]=S=>p.value=S)},{default:P(({item:S})=>[g("div",xt,[se(ne(S.id)+" ",1),(F(),H("img",{key:S.avatar,src:S.avatar,alt:"avatar",class:"image"},null,8,Vt))]),g("div",Ft,ne(S.message),1)]),_:1},8,["items"])]))}},At=N(Xe,[["__scopeId","data-v-70b63223"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_dynamic.story.vue"]]);Xe.__docgenInfo={exportName:"default",displayName:"scroller_dynamic.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/scroller_dynamic.story.vue"]};const Je={listTag:"div",itemTag:"div",itemSize:32,scrollerWidth:300,scrollerHeight:200,onScrollStart:ie("scroll-start"),onScrollEnd:ie("scroll-end"),onUserPosition:ie("user-position")},Ze={default:{control:{type:null},description:`Markup to display each item from the items array.

item {*}: the item currently being rendered from within your items array.

index {number}: the index of this item in the items array.

active {boolean}: whether this item is currently visible to the user.`,table:{type:{summary:"VNode"}}},items:{control:{type:null}},dynamic:{control:{type:null}},keyField:{control:{type:null}},direction:{control:{type:"select"},options:["horizontal","vertical"]},listTag:{control:{type:"text"},defaultValue:"div"},itemTag:{control:{type:"text"},defaultValue:"div"},itemSize:{control:{type:"number"},defaultValue:32},minItemSize:{control:{type:null}},scrollerWidth:{control:{type:"number"},defaultValue:300},scrollerHeight:{control:{type:"number"},defaultValue:200},onScrollStart:{table:{disable:!0}},onScrollEnd:{table:{disable:!0}},onUserPosition:{table:{disable:!0}},"user-position":{description:"Emit the last user position.",table:{type:{summary:"event"}}}},Mt={title:"Components/Scroller",component:ue,argTypes:Ze,args:Je,excludeStories:/.*Data$/},Ut=e=>We(e,It),O={render:Ut,args:{default:"Scroller"}},Pt=e=>We(e,At),R={render:Pt,parameters:{controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var ke,xe,Ve;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
//# sourceMappingURL=scroller.stories-1d75e037.js.map
