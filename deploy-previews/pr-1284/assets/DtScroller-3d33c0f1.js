import{r as fe,N as A,Q as L,L as ye,R as Ue,S as qe,o as M,p as he,b as E,w as U,F as Oe,B as Pe,l as Q,m as ge,x as He,g as G,D as ze,U as Ce,k as pe,V as We,W as je,h as Le,u as ve,y as Ee,n as Se,j as be,X as Ye}from"./vue.esm-bundler-5f4c5b12.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";const _e={__name:"core_scroller",props:{items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},itemSize:{type:Number,default:null},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},buffer:{type:Number,default:200},skipHover:{type:Boolean,default:!1},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},listClass:{type:[String,Object,Array],default:""},itemClass:{type:[String,Object,Array],default:""}},emits:["user-position"],setup(e,{expose:s,emit:r}){const t=e,u=fe(new Map),_=fe(new Map),h=A([]),p=A(null),y=A(!1),m=A(null),w=A("top");let V=0,B=0,F=!1,q=0,O=null,J=null,Z=0,ke=0;const K=L(()=>{if(t.itemSize===null){const n={"-1":{accumulator:0}},o=t.items,i=t.sizeField,$=t.minItemSize;let v=1e4,k=0,d;for(let g=0,N=o.length;g<N;g++)d=o[g][i]||$,d<v&&(v=d),k+=d,n[g]={accumulator:k,size:d};return J=v,n}return[]}),xe=L(()=>t.items.length&&typeof t.items[0]!="object"),De=L(()=>{const n={};for(let o=0,i=t.items.length;o<i;o++)n[t.items[o][t.keyField]]=o;return n});ye(K,()=>{P(!1)},{deep:!0}),Ue(()=>{qe(()=>{P(!0),y.value=!0})});const ee=(n,o,i,$,v)=>{const k=We({id:ke++,index:o,used:!0,key:$,type:v}),d=je({item:i,position:0,nr:k});return n.value.push(d),d},X=(n,o=!1)=>{const i=_,$=n.nr.type;let v=i.get($);v||(v=[],i.set($,v)),v.push(n),o||(n.nr.used=!1,n.position=-9999)},Ve=()=>{const n=t.direction==="vertical";let o;return n?o={start:m.value.scrollTop,end:m.value.scrollTop+m.value.clientHeight}:o={start:m.value.scrollLeft,end:m.value.scrollLeft+m.value.clientWidth},o},Fe=()=>{throw setTimeout(()=>{console.error("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",m),console.error("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},Ae=()=>{h.value.sort((n,o)=>n.nr.index-o.nr.index)},P=(n,o=!1)=>{var se,le,re,ne,ae,oe,de,ue;const i=t.itemSize,$=J,v=xe.value?null:t.keyField,k=t.items,d=k.length,g=K.value,N=u,te=_,H=h,Re=De;let z,f,C,I,x;if(!d)z=f=I=x=C=0;else{const a=Ve();if(o){let c=a.start-q.value;if(c<0&&(c=-c),i===null&&c<$.value||c<i)return{continuous:!0}}q=a.start;const S=t.buffer;if(a.start-=S,a.end+=S,i===null){let c,R=0,ce=d-1,b=~~(d/2),me;do me=b,c=(se=g[b])==null?void 0:se.accumulator,c<a.start?R=b:b<d-1&&((le=g[b+1])==null?void 0:le.accumulator)>a.start&&(ce=b),b=~~((R+ce)/2);while(b!==me);for(b<0&&(b=0),z=b,C=(re=g[d-1])==null?void 0:re.accumulator,f=b;f<d&&((ne=g[f])==null?void 0:ne.accumulator)<a.end;f++);for(f===-1?f=k.length-1:(f++,f>d&&(f=d)),I=V;I<d&&((ae=g[I])==null?void 0:ae.accumulator)<a.start;I++);for(x=I;x<d&&((oe=g[x])==null?void 0:oe.accumulator)<a.end;x++);}else{z=~~(a.start/i);const c=z%1;z-=c,f=Math.ceil(a.end/i),I=Math.max(0,Math.floor(a.start/i)),x=Math.floor(a.end/i),z<0&&(z=0),f>d&&(f=d),I<0&&(I=0),x>d&&(x=d),C=Math.ceil(d/1)*i}}f-z>1e3&&Fe(),Z=C;let l;const W=z<=B&&f>=z;if(W)for(let a=0,S=H.value.length;a<S;a++)l=H.value[a],l!=null&&l.nr.used&&(n&&(l.nr.index=Re[l.item[v]]),(l.nr.index==null||l.nr.index<z||l.nr.index>=f)&&X(l));const ie=W?null:new Map;let T,D,j;for(let a=z;a<f;a++){T=k[a];const S=v?T==null?void 0:T[v]:T;if(S==null)throw new Error(`Key is ${S} on item (keyField is '${v}')`);if(l=N.get(S),!i&&!((de=g[a])!=null&&de.size)){l&&X(l);continue}D=T.type;let c=te.get(D);if(!l)W?c&&c.length?l=c.pop():l=ee(H,a,T,S,D):(j=ie.get(D)||0,(!c||j>=c.length)&&(l=ee(H,a,T,S,D),X(l,!0),c=te.get(D)),l=c[j],ie.set(D,j+1)),N.delete(l.nr.key),l.nr.used=!0,l.nr.index=a,l.nr.key=S,l.nr.type=D,N.set(S,l);else if(!l.nr.used&&(l.nr.used=!0,c)){const R=c.indexOf(l);R!==-1&&c.splice(R,1)}l.item=T,i===null?(l.position=(ue=g[a-1])==null?void 0:ue.accumulator,l.offset=0):(l.position=Math.floor(a)*i,l.offset=a%1*i)}return V=z,B=f,clearTimeout(O),O=setTimeout(Ae,300),{continuous:W}},Me=n=>{const o=t.direction==="vertical"?{scroll:"scrollTop",start:"top"}:{scroll:"scrollLeft",start:"left"},i=m.value,$=o.scroll;i[$]=n},Be=n=>{var i;let o;t.itemSize===null?o=n>0?(i=K.value[n-1])==null?void 0:i.accumulator:0:o=Math.floor(n)*t.itemSize,Me(o)},Ne=()=>{const n=m.value;w.value!=="middle"&&(w.value="middle",r("user-position","middle")),n.scrollTop===0&&(w.value="top",r("user-position","top")),n.scrollTop+n.clientHeight===n.scrollHeight&&(w.value="bottom",r("user-position","bottom")),F||(F=!0,requestAnimationFrame(()=>{F=!1,P(!1,!0)}))};return s({scrollToItem:Be,_updateVisibleItems:P}),(n,o)=>(M(),he("div",{ref_key:"scroller",ref:m,class:pe(["vue-recycle-scroller",{ready:y.value,[`direction-${e.direction}`]:!0}]),onScrollPassive:Ne},[(M(),E(Q(e.listTag),{ref:"wrapper",style:ze({[e.direction==="vertical"?"minHeight":"minWidth"]:`${Ce(Z)}px`}),class:pe(["vue-recycle-scroller__item-wrapper",e.listClass])},{default:U(()=>[(M(!0),he(Oe,null,Pe(h.value,i=>(M(),E(Q(e.itemTag),ge({key:i.nr.id,style:y.value?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${i.position}px) translate${e.direction==="vertical"?"X":"Y"}(${i.offset}px)`,width:void 0,height:void 0}:null,class:["vue-recycle-scroller__item-view",[e.itemClass,{hover:!e.skipHover&&p.value===i.nr.key}]]},He(e.skipHover?{}:{mouseenter:()=>{p.value=i.nr.key},mouseleave:()=>{p.value=null}})),{default:U(()=>[G(n.$slots,"default",{item:i.item,index:i.nr.index,active:i.nr.used})]),_:2},1040,["style","class"]))),128))]),_:3},8,["style","class"]))],34))}},$e=Y(_e,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/core_scroller.vue"]]);_e.__docgenInfo={exportName:"default",displayName:"core_scroller",description:"",tags:{},expose:[{name:"scrollToItem"},{name:"_updateVisibleItems"}],props:[{name:"items",description:"List of items you want to display in the scroller.",type:{name:"array"},required:!0},{name:"keyField",description:"Field used to identify items and optimize managing rendered views",type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"direction",description:"Direction of the scroller. Can be either `vertical` or `horizontal`.",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"itemSize",description:`Size of the items in the list.
If it is set to null (the default value), it will use variable size mode.`,type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"minItemSize",description:"Minimum size used if the height (or width in horizontal mode) of an item is unknown.",type:{name:"number|string"},defaultValue:{func:!1,value:"null"}},{name:"sizeField",description:"Field used to get the item's size in variable size mode.",type:{name:"string"},defaultValue:{func:!1,value:"'size'"}},{name:"buffer",description:"Amount of pixel to add to edges of the scrolling visible area to start rendering items further away.",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"skipHover",description:`If true, the hover state will be skipped.
This can be useful if you want to use the hover state for other purposes.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listTag",description:"The element to render as the list's wrapper.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"itemTag",description:"The element to render as the list item.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"listClass",description:"The custom classes added to the item list wrapper.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}},{name:"itemClass",description:"The custom classes added to each item.",type:{name:"string|object|array"},defaultValue:{func:!1,value:"''"}}],events:[{name:"user-position"}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/core_scroller.vue"]};const we={name:"DtScrollerItem",inject:["vscrollData","vscrollParent","vscrollResizeObserver"],props:{item:{required:!0},watchData:{type:Boolean,default:!1},active:{type:Boolean,required:!0},index:{type:Number,default:void 0},sizeDependencies:{type:[Array,Object],default:null},tag:{type:String,default:"div"}},computed:{id(){if(this.vscrollData.simpleArray)return this.index;if(this.vscrollData.keyField in this.item)return this.item[this.vscrollData.keyField];throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`)},size(){return this.vscrollData.sizes[this.id]||0},finalActive(){return this.active&&this.vscrollData.active}},watch:{watchData:"updateWatchData",id(e,s){if(this.$el.$_vs_id=this.id,this.size||this.onDataUpdate(),this.$_sizeObserved){const r=this.vscrollData.sizes[s],t=this.vscrollData.sizes[e];r!=null&&r!==t&&this.applySize(r)}},finalActive(e){this.size||(e?this.vscrollParent.$_undefinedMap[this.id]||(this.vscrollParent.$_undefinedSizes++,this.vscrollParent.$_undefinedMap[this.id]=!0):this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=!1)),this.vscrollResizeObserver?e?this.observeSize():this.unobserveSize():e&&this.$_pendingVScrollUpdate===this.id&&this.updateSize()}},created(){if(!this.$isServer&&(this.$_forceNextVScrollUpdate=null,this.updateWatchData(),!this.vscrollResizeObserver))for(const e in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[e],this.onDataUpdate)},mounted(){this.finalActive&&(this.updateSize(),this.observeSize())},beforeUnmount(){this.unobserveSize()},methods:{updateSize(){this.finalActive?this.$_pendingSizeUpdate!==this.id&&(this.$_pendingSizeUpdate=this.id,this.$_forceNextVScrollUpdate=null,this.$_pendingVScrollUpdate=null,this.computeSize(this.id)):this.$_forceNextVScrollUpdate=this.id},updateWatchData(){this.watchData&&!this.vscrollResizeObserver?this.$_watchData=this.$watch("item",()=>{this.onDataUpdate()},{deep:!0}):this.$_watchData&&(this.$_watchData(),this.$_watchData=null)},onVscrollUpdate({force:e}){!this.finalActive&&e&&(this.$_pendingVScrollUpdate=this.id),(this.$_forceNextVScrollUpdate===this.id||e||!this.size)&&this.updateSize()},onDataUpdate(){this.updateSize()},computeSize(e){this.$nextTick(()=>{if(this.id===e){const s=this.$el.offsetWidth,r=this.$el.offsetHeight;this.applyWidthHeight(s,r)}this.$_pendingSizeUpdate=null})},applyWidthHeight(e,s){const r=~~(this.vscrollParent.direction==="vertical"?s:e);r&&this.size!==r&&this.applySize(r)},applySize(e){this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=void 0),this.vscrollData.sizes[this.id]=e},observeSize(){this.vscrollResizeObserver&&(this.$_sizeObserved||(this.vscrollResizeObserver.observe(this.$el),this.$el.$_vs_id=this.id,this.$el.$_vs_onResize=this.onResize,this.$_sizeObserved=!0))},unobserveSize(){this.vscrollResizeObserver&&this.$_sizeObserved&&(this.vscrollResizeObserver.unobserve(this.$el),this.$el.$_vs_onResize=void 0,this.$_sizeObserved=!1)},onResize(e,s,r){this.id===e&&this.applyWidthHeight(s,r)}},render(){return Le(this.tag,this.$slots.default())}},Ke=Y(we,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/scroller_item.vue"]]);we.__docgenInfo={displayName:"DtScrollerItem",exportName:"default",description:"",tags:{},props:[{name:"item",required:!0},{name:"watchData",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",description:"Indicates if the view is actively used to display an item.",type:{name:"boolean"},required:!0},{name:"index",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"sizeDependencies",type:{name:"array|object"},defaultValue:{func:!1,value:"null"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/scroller_item.vue"]};const Ie={name:"DynamicScroller",components:{CoreScroller:$e,DtScrollerItem:Ke},provide(){return typeof ResizeObserver<"u"&&(this.$_resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{if(Array.isArray(e)){for(const s of e)if(s.target&&s.target.$_vs_onResize){let r,t;if(s.borderBoxSize){const u=s.borderBoxSize[0];r=u.inlineSize,t=u.blockSize}else r=s.contentRect.width,t=s.contentRect.height;s.target.$_vs_onResize(s.target.$_vs_id,r,t)}}})})),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:this.$_resizeObserver}},inheritAttrs:!1,props:{items:{type:Array,required:!0},dynamic:{type:Boolean,default:!1},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},minItemSize:{type:[Number,String]}},data(){return{vscrollData:{active:!0,sizes:{},keyField:this.keyField,simpleArray:!1}}},computed:{simpleArray(){return this.items.length&&typeof this.items[0]!="object"},itemsWithSize(){const e=[],{items:s,keyField:r,simpleArray:t}=this,u=this.vscrollData.sizes,_=s.length;for(let h=0;h<_;h++){const p=s[h],y=t?h:p[r];let m=u[y];typeof m>"u"&&!this.$_undefinedMap[y]&&(m=0),e.push({item:p,[r]:y,size:m})}return e}},watch:{simpleArray:{handler(e){this.vscrollData.simpleArray=e},immediate:!0},itemsWithSize(e,s){const r=this.$el.scrollTop;let t=0,u=0;const _=Math.min(e.length,s.length);for(let p=0;p<_&&!(t>=r);p++)t+=s[p].size||this.minItemSize,u+=e[p].size||this.minItemSize;const h=u-t;h!==0&&(this.$el.scrollTop+=h)}},beforeCreate(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={}},activated(){this.vscrollData.active=!0},deactivated(){this.vscrollData.active=!1},methods:{dynamicScrollerUpdateItems(){const e=this.$refs.scroller;e&&e._updateVisibleItems(!0)},dynamicScrollerUpdateItemsFromBottom(){const e=this.$refs.scroller;e&&e._updateVisibleItems(!1,!0)},scrollToItem(e){const s=this.$refs.scroller;s&&s.scrollToItem(e)},scrollToBottom(){if(this.$_scrollingToBottom)return;this.$_scrollingToBottom=!0;const e=this.$el;this.$nextTick(()=>{e.scrollTop=e.scrollHeight+5e3;const s=()=>{e.scrollTop=e.scrollHeight+5e3,requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight+5e3,this.$_undefinedSizes===0?this.$_scrollingToBottom=!1:requestAnimationFrame(s)})};requestAnimationFrame(s)})}}};function Xe(e,s,r,t,u,_){const h=ve("dt-scroller-item"),p=ve("core-scroller");return M(),E(p,ge({ref:"scroller",items:_.itemsWithSize,"min-item-size":r.minItemSize,direction:r.direction,"key-field":r.keyField,"list-tag":r.listTag,"item-tag":r.itemTag},e.$attrs),{default:U(({item:y,index:m,active:w})=>[Ee(h,{item:y,active:w,"size-dependencies":[y.message],"data-index":m},{default:U(()=>[G(e.$slots,"default",Se(be({item:y.item,index:m,active:w,itemWithSize:y})))]),_:2},1032,["item","active","size-dependencies","data-index"])]),_:3},16,["items","min-item-size","direction","key-field","list-tag","item-tag"])}const Qe=Y(Ie,[["render",Xe],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/dynamic_scroller.vue"]]);Ie.__docgenInfo={displayName:"DynamicScroller",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0},{name:"dynamic",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"keyField",type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"},values:["vertical","horizontal"]},{name:"listTag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"itemTag",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"minItemSize",type:{name:"number|string"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"},{name:"itemWithSize",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/modules/dynamic_scroller.vue"]};const Te={__name:"DtScroller",props:{direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},dynamic:{type:Boolean,default:!1},itemSize:{type:Number,default:null},itemTag:{type:String,default:"div"},items:{type:Array,required:!0},keyField:{type:String,default:"id"},listTag:{type:String,default:"div"},minItemSize:{type:[Number,String],default:null},scrollerHeight:{type:[String,Number],default:"100%"},scrollerWidth:{type:[String,Number],default:"100%"}},emits:["user-position"],setup(e,{expose:s,emit:r}){const t=e;Ye("emit",r);const u=A(null),_=L(()=>({width:typeof t.scrollerWidth=="number"?`${t.scrollerWidth}px`:t.scrollerWidth,height:typeof t.scrollerHeight=="number"?`${t.scrollerHeight}px`:t.scrollerHeight}));ye(t,()=>{w()},{deep:!0,immediate:!0});function h(){u.value&&u.value.scrollToBottom()}function p(V){u.value&&u.value.scrollToItem(V)}function y(){u.value&&(t.dynamic?u.value.dynamicScrollerUpdateItems():u.value._updateVisibleItems(!0))}function m(){u.value&&(t.dynamic?u.value.dynamicScrollerUpdateItemsFromBottom():u.value._updateVisibleItems(!1,!0))}function w(){t.dynamic&&!t.minItemSize&&console.error("scroller error: 'minItemSize' is required on 'dynamic' mode."),!t.dynamic&&!t.itemSize&&console.error("scroller error: 'itemSize' is required.")}return s({scrollToBottom:h,scrollToItem:p,updateItems:y,updateItemsFromBottom:m}),(V,B)=>(M(),E(Q(e.dynamic?Qe:$e),{ref_key:"scroller",ref:u,"data-qa":"dt-scroller",items:e.items,"item-size":e.itemSize,"min-item-size":e.minItemSize,direction:e.direction,"key-field":e.keyField,"list-tag":e.listTag,"item-tag":e.itemTag,style:ze(_.value),tabindex:"0",onUserPosition:B[0]||(B[0]=F=>V.$emit("user-position",F))},{default:U(({item:F,index:q,active:O})=>[G(V.$slots,"default",Se(be({item:F,index:q,active:O})))]),_:3},40,["items","item-size","min-item-size","direction","key-field","list-tag","item-tag","style"]))}},Ze=Y(Te,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/DtScroller.vue"]]);Te.__docgenInfo={exportName:"default",displayName:"DtScroller",description:"",tags:{},expose:[{name:"scrollToBottom"},{name:"scrollToItem"},{name:"updateItems"},{name:"updateItemsFromBottom"}],props:[{name:"direction",description:"The direction of the scroller.",tags:{},values:["vertical","horizontal"],type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"}},{name:"dynamic",description:`Indicates if the items need to react to changes in their size.
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
Can be a number (in pixels) or a string (in CSS units).`,type:{name:"string|number"},defaultValue:{func:!1,value:"'100%'"}}],events:[{name:"user-position",description:"Describe when the scroller changes from start/middle/end",properties:[{type:{names:["string"]},name:"position",description:"The position of the scroller."}],tags:[{title:"param",type:{name:"string"},name:"position",description:"The position of the scroller."},{title:"values",content:"start, middle, end"}]}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/scroller/DtScroller.vue"]};export{Ze as D};
//# sourceMappingURL=DtScroller-3d33c0f1.js.map
