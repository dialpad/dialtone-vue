import{N as g,R as se,o as j,p as _,y as O,E as Te,w as P,e as E,q as M,J as le,Q as V,Y as we,L as B,F as z,B as G,b as Ee,S as Q,Z as Le,A as Y,d as Z,v as X,f as x,U as q,k as ne,_ as ie,z as ae}from"./vue.esm-bundler-5f4c5b12.js";import{D as $e}from"./input-a5f62605.js";import{D as ee}from"./icon-db87bd1c.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Re}from"./tab_group-669ecc9d.js";import{D as Ie}from"./tab-c1b4a58d.js";import{a as F}from"./index-40c4ee4c.js";import{D as De}from"./tooltip-04ae195c.js";const Ae={class:"d-emoji-picker__search d-emoji-picker__alignment"},Fe=["onKeydown"],re={__name:"emoji_search",props:{searchPlaceholderLabel:{type:String,required:!0},modelValue:{type:String,default:""}},emits:["update:modelValue","focus-emoji-selector","focus-tabset","select-first-emoji"],setup(l,{expose:f,emit:d}){const s=g(null);function r(){d("update:modelValue",""),b()}function b(){s.value.focus()}return se(()=>{b()}),f({focusSearchInput:b}),(S,p)=>(j(),_("div",Ae,[O($e,{id:"searchInput",ref_key:"searchInput",ref:s,placeholder:l.searchPlaceholderLabel,"model-value":l.modelValue,"onUpdate:modelValue":p[0]||(p[0]=h=>S.$emit("update:modelValue",h)),onKeydown:[p[1]||(p[1]=M(h=>S.$emit("focus-tabset"),["up"])),p[2]||(p[2]=M(le(h=>S.$emit("focus-emoji-selector"),["prevent"]),["down"])),p[3]||(p[3]=M(h=>S.$emit("select-first-emoji"),["enter"]))]},Te({leftIcon:P(()=>[O(ee,{name:"search"})]),_:2},[l.modelValue.length>0?{name:"rightIcon",fn:P(()=>[E("button",{class:"d-emoji-picker__search-button",onClick:r,onKeydown:M(r,["enter"])},[O(ee,{name:"close"})],40,Fe)]),key:"0"}:void 0]),1032,["placeholder","model-value"])]))}},qe=H(re,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]]);re.__docgenInfo={exportName:"default",displayName:"emoji_search",description:"",tags:{},expose:[{name:"focusSearchInput"}],props:[{name:"searchPlaceholderLabel",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"focus-tabset"},{name:"focus-emoji-selector"},{name:"select-first-emoji"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]};const J="https://static.dialpadcdn.com/joypixels/png/unicode/32/",R=9,K={DEFAULT:"Default",LIGHT:"Light",MEDIUM_LIGHT:"MediumLight",MEDIUM:"Medium",MEDIUM_DARK:"MediumDark",DARK:"Dark"},C={MOST_RECENTLY_USED:"Most recently used",SMILEYS_AND_PEOPLE:"Smileys and people",NATURE:"Nature",FOOD:"Food",ACTIVITY:"Activity",TRAVEL:"Travel",OBJECTS:"Objects",SYMBOLS:"Symbols",FLAGS:"Flags"},Ne={class:"d-emoji-picker__tabset"},ue={__name:"emoji_tabset",props:{showRecentlyUsedTab:{type:Boolean,default:!1},scrollIntoTab:{type:Number,required:!0},isScrolling:{type:Boolean,default:!1},emojiFilter:{type:String,default:""},tabsetLabels:{type:Array,required:!0}},emits:["selected-tabset","focus-search-input"],setup(l,{expose:f,emit:d}){const s=l,r=[{label:C.MOST_RECENTLY_USED,icon:"clock"},{label:C.SMILEYS_AND_PEOPLE,icon:"satisfied"},{label:C.NATURE,icon:"living-thing"},{label:C.FOOD,icon:"food"},{label:C.ACTIVITY,icon:"object"},{label:C.TRAVEL,icon:"transportation"},{label:C.OBJECTS,icon:"lightbulb"},{label:C.SYMBOLS,icon:"heart"},{label:C.FLAGS,icon:"flag"}],b=V(()=>(s.showRecentlyUsedTab?r:r.slice(1)).map((t,c)=>({...t,label:s.tabsetLabels[c],id:(c+1).toString(),panelId:(c+1).toString()}))),S=V(()=>s.emojiFilter.length>0),p=g("1"),{isScrolling:h}=we(s),w=g([]);B(()=>s.scrollIntoTab,()=>{!h.value&&!S.value&&(p.value=(s.scrollIntoTab+1).toString())}),B(S,()=>{S.value&&(p.value=null)});function A(e){h.value||(p.value=e),d("selected-tabset",e)}function u(e){w.value.push(e.$el)}function I(){w.value[0].focus()}function v(e,t){e.key==="Enter"&&(A(t),w.value[t-1].blur()),e.key==="Tab"&&(e.preventDefault(),d("focus-search-input")),e.key==="ArrowDown"&&d("focus-search-input")}return f({focusTabset:I}),(e,t)=>(j(),_("div",Ne,[O(Re,{"tab-list-class":"d-emoji-picker__tabset-list",selected:p.value},{tabs:P(()=>[(j(!0),_(z,null,G(b.value,(c,y)=>(j(),Ee(Ie,{id:c.id,ref_for:!0,ref:T=>{T&&u(T)},key:c.id,"panel-id":c.panelId,label:c.label,"aria-controls":"d-emoji-picker-list",tabindex:y+1,onClickCapture:le(T=>A(c.id),["stop"]),onKeydown:T=>v(T,c.id)},{default:P(()=>[O(ee,{size:"400",name:c.icon},null,8,["name"])]),_:2},1032,["id","panel-id","label","tabindex","onClickCapture","onKeydown"]))),128))]),_:1},8,["selected"])]))}},Oe=H(ue,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]]);ue.__docgenInfo={exportName:"default",displayName:"emoji_tabset",description:"",tags:{},expose:[{name:"focusTabset"}],props:[{name:"showRecentlyUsedTab",description:"Whether to show the recently used tab or not",tags:{type:[{title:"type",type:{name:"Boolean"}}],default:[{description:"false",title:"default"}]},type:{name:"Boolean"},defaultValue:{func:!1,value:"false"}},{name:"scrollIntoTab",type:{name:"number"},required:!0},{name:"isScrolling",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emojiFilter",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tabsetLabels",description:"The labels for the aria-label",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0}],events:[{name:"selected-tabset",description:"Emitted when a tab is selected",properties:[{type:{names:["String"]},name:"tabId",description:"The name of the tab that was selected"}],tags:[{title:"param",type:{name:"String"},name:"tabId",description:"The name of the tab that was selected"}]},{name:"focus-search-input"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]};function Ce(l){const f=g([]),d=g([]),s=g(!1),r=g(!0);function b(e,t=!1){r.value=t,l("highlighted-emoji",e)}function S(e,t,c){f.value[t]||(f.value[t]=[]),f.value[t][c]=e}function p(e,t){d.value[t]=e}function h(e,t){var y,T,L;const c=s.value?(y=d.value)==null?void 0:y[t]:(L=(T=f.value)==null?void 0:T[e])==null?void 0:L[t];return c?(c.focus(),!0):!1}function w(e,t){h(e,t-1)||(f.value[e-1]?h(e-1,f.value[e-1].length-1):h(f.value.length-1,f.value[f.value.length-1].length-1))}function A(e,t){h(e,t+1)||h(e+1,0)||h(0,0)}function u(e,t){h(0,t-1)||h(0,d.value.length-1)}function I(e,t){h(0,t+1)||h(0,0)}function v(e,t,c){s.value?e==="left"?u(t,c):e==="right"&&I(t,c):e==="left"?w(t,c):e==="right"&&A(t,c)}return{emojiRefs:f,emojiFilteredRefs:d,isFiltering:s,hoverFirstEmoji:r,setEmojiRef:S,setFilteredRef:p,hoverEmoji:b,focusEmoji:h,handleHorizontalNavigation:v}}const Me={class:"d-emoji-picker__selector"},Ue={key:0,class:"d-emoji-picker__search-label d-emoji-picker__alignment"},Ve={key:0},Ke={class:"d-emoji-picker__tab"},Be=["aria-label","onClick","onFocusin","onMouseover","onKeydown"],Pe=["alt","aria-label","title","src"],He={key:2,class:"d-emoji-picker__alignment"},ze={class:"d-emoji-picker__tab","data-qa":"filtered-emojis"},Ge=["aria-label","onClick","onFocusin","onMouseover","onKeydown"],Ye=["alt","aria-label","title","src"],ce={__name:"emoji_selector",props:{emojiFilter:{type:String,default:""},skinTone:{type:String,required:!0},tabsetLabels:{type:Array,required:!0},selectedTabset:{type:Object,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},recentlyUsedEmojis:{type:Array,default:()=>[]}},emits:["highlighted-emoji","selected-emoji","scroll-into-tab","is-scrolling","focus-skin-selector","focus-search-input"],setup(l,{expose:f,emit:d}){const s=l,{emojiRefs:r,emojiFilteredRefs:b,isFiltering:S,hoverFirstEmoji:p,setEmojiRef:h,setFilteredRef:w,hoverEmoji:A,focusEmoji:u,handleHorizontalNavigation:I}=Ce(d),v=g(null),e=g(null),t=g(null),c=["Recently used","People","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],y=V(()=>s.recentlyUsedEmojis.length?s.tabsetLabels.map(o=>({label:o,ref:g(null)})):s.tabsetLabels.slice(1).map(o=>({label:o,ref:g(null)}))),T=g(y.value[0].label),L=V(()=>s.recentlyUsedEmojis.length?c:c.slice(1)),U=g([]),te=V(()=>[...F[`People${s.skinTone}`],...F.Nature,...F.Food,...F[`Activity${s.skinTone}`],...F.Travel,...F[`Objects${s.skinTone}`],...F.Symbols,...F.Flags]),fe=he(()=>{b.value=[],oe()});B(te,()=>{oe()},{immediate:!0}),B(()=>s.recentlyUsedEmojis,()=>{F["Recently used"]=s.recentlyUsedEmojis},{immediate:!0}),B(()=>s.emojiFilter,()=>{be(),s.emojiFilter?S.value=!0:(S.value=!1,d("highlighted-emoji",null)),fe()}),B(()=>s.selectedTabset,o=>{W(o.tabId)},{deep:!0});function oe(){const o=s.emojiFilter.toLowerCase();U.value=te.value.filter(i=>{const a=i.name.toLowerCase().includes(o),m=i.keywords.some(n=>n.toLowerCase().includes(o));return a||m}),Q(()=>{o&&A(U.value[0],!0)})}function he(o,i=300){let a;return(...m)=>{clearTimeout(a),a=setTimeout(()=>o(...m),i)}}function ve(o){return`${J+o}.png`}function ye(o){o.target.parentNode.style.display="none"}function W(o,i=!0){const m=y.value[o-1].ref.value[0];Q(()=>{const n=e.value,$=o==="1"?0:m.offsetTop-20;let k=!0,N=n.scrollTop;d("is-scrolling",!0),n.addEventListener("scroll",()=>{if(k){const D=n.scrollTop;(N<D&&D>=$||N>D&&D<=$)&&(k=!1,d("is-scrolling",!1)),N=D}}),n.scrollTop=$,i&&u(o-1,0)})}function be(){const o=e.value;o.scrollTop=0}function ge(){t.value=new IntersectionObserver(o=>{o.forEach(i=>{var n,$,k,N,D;const{target:a}=i,m=parseInt(a.dataset.index);i.isIntersecting&&a.offsetTop<=v.value.offsetTop+50?(T.value=((n=y.value[m-1])==null?void 0:n.label)??(($=y.value[0])==null?void 0:$.label),d("scroll-into-tab",m-1)):i.boundingClientRect.bottom<=((k=v.value)==null?void 0:k.getBoundingClientRect().bottom)?(d("scroll-into-tab",m),T.value=(N=y.value[m])==null?void 0:N.label):m===1&&(d("scroll-into-tab",m),T.value=(D=y.value[0])==null?void 0:D.label)})}),t.value.observe(v.value),Array.from(e.value.children).forEach((o,i)=>{t.value.observe(o),o.dataset.index=i})}const ke=(o,i,a)=>{var m;if(o.preventDefault(),p.value=!1,o.key==="ArrowUp"){const n=i%R;if(!u(0,i-R)){const $=b.value.length-b.value.length%R+n;u(0,$),u(0,$)||u(0,b.value.length-1)}}if(o.key==="ArrowDown"&&!u(0,i+R)){const n=i%R;(m=b.value)!=null&&m[i+(R-n)]?u(0,b.value.length-1):u(0,n)}o.key==="ArrowLeft"&&I("left",0,i),o.key==="ArrowRight"&&I("right",0,i),o.key==="Tab"&&d("focus-skin-selector"),o.key==="Enter"&&d("selected-emoji",a)},je=(o,i,a,m)=>{var n,$;if(o.preventDefault(),o.key==="ArrowUp"){const k=a%R;if(i===0){const N=R-r.value[r.value.length-1].length%R,D=r.value[r.value.length-1].length+N-(R-k);u(r.value.length-1,D)||u(r.value.length-1,r.value[r.value.length-1].length-1);return}if(!u(i,a-R)){const N=i-1<0?0:i-1,D=r.value[N].length,_e=D-D%R+k;u(N,_e)||u(i-1,r.value[i-1].length-1)}}if(o.key==="ArrowDown"&&!u(i,a+R)){const k=a%R;($=(n=r.value)==null?void 0:n[i])!=null&&$[a+(R-k)]?u(i,r.value[i].length-1):u(i+1,k)||u(0,k)||u(0,r.value[0].length-1)}o.key==="ArrowLeft"&&I("left",i,a),o.key==="ArrowRight"&&I("right",i,a),o.key==="Tab"&&(u(i+1,0)?W(i+1+1,!1):d("focus-skin-selector")),o.key==="Tab"&&o.shiftKey&&(u(i,0)&&i>0?W(i,!0):(W(1,!1),d("focus-search-input"))),o.key==="Enter"&&d("selected-emoji",m)};function Se(){u(0,0)}return se(()=>{ge()}),Le(()=>{t.value.disconnect()}),f({focusEmojiSelector:Se}),(o,i)=>(j(),_("div",Me,[E("div",{id:"d-emoji-picker-list",ref_key:"listRef",ref:e,class:"d-emoji-picker__list"},[l.emojiFilter?(j(),_("p",Ue,Y(U.value.length>0?l.searchResultsLabel:l.searchNoResultsLabel),1)):(j(),_("div",{key:1,ref_key:"tabCategoryRef",ref:v,class:"d-emoji-picker__category d-emoji-picker__alignment"},[E("p",null,Y(T.value),1)],512)),(j(!0),_(z,null,G(y.value,(a,m)=>Z((j(),_("div",{key:m,ref_for:!0,ref:a.ref,class:"d-emoji-picker__alignment"},[m?(j(),_("p",Ve,Y(a.label),1)):x("v-if",!0),E("div",Ke,[(j(!0),_(z,null,G(q(F)[L.value[m]+l.skinTone]?q(F)[L.value[m]+l.skinTone]:q(F)[L.value[m]],(n,$)=>(j(),_("button",{key:n.shortname,ref_for:!0,ref:k=>{k&&q(h)(k,m,$)},type:"button","aria-label":n.name,onClick:k=>o.$emit("selected-emoji",n),onFocusin:k=>o.$emit("highlighted-emoji",n),onFocusout:i[0]||(i[0]=k=>o.$emit("highlighted-emoji",null)),onMouseover:k=>o.$emit("highlighted-emoji",n),onMouseleave:i[1]||(i[1]=k=>o.$emit("highlighted-emoji",null)),onKeydown:k=>je(k,m,$,n)},[E("img",{class:"d-icon d-icon--size-500",alt:n.name,"aria-label":n.name,title:n.name,src:ve(n.unicode_character),onError:ye},null,40,Pe)],40,Be))),128))])])),[[X,!l.emojiFilter]])),128)),l.emojiFilter?(j(),_("div",He,[E("div",ze,[(j(!0),_(z,null,G(U.value,(a,m)=>(j(),_("button",{key:a.shortname,ref_for:!0,ref:n=>{n&&q(w)(n,m)},type:"button","aria-label":a.name,class:ne({"hover-emoji":m===0&&q(p)}),onClick:n=>o.$emit("selected-emoji",a),onFocusin:n=>o.$emit("highlighted-emoji",a),onFocusout:i[2]||(i[2]=n=>o.$emit("highlighted-emoji",null)),onMouseover:n=>q(A)(a),onMouseleave:i[3]||(i[3]=n=>q(A)(null)),onKeydown:n=>ke(n,m,a)},[E("img",{class:"d-icon d-icon--size-500",alt:a.name,"aria-label":a.name,title:a.name,src:`${q(J)+a.unicode_character}.png`},null,8,Ye)],42,Ge))),128))])])):x("v-if",!0)],512)]))}},Je=H(ce,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]]);ce.__docgenInfo={exportName:"default",displayName:"emoji_selector",description:"",tags:{},expose:[{name:"focusEmojiSelector"}],props:[{name:"emojiFilter",description:"The filter to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"''",title:"default"}]},type:{name:"String"},defaultValue:{func:!1,value:"''"}},{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"tabsetLabels",description:"The labels for the tabset",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0},{name:"selectedTabset",type:{name:"object"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",type:{name:"string"},required:!0},{name:"recentlyUsedEmojis",description:"The list of recently used emojis",tags:{type:[{title:"type",type:{name:"Array"}}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"selected-emoji",description:"Emitted when the user select an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was selected"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was selected"}]},{name:"highlighted-emoji",description:"Emitted when the user hover over an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was hovered"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was hovered"}]},{name:"scroll-into-tab",description:"Emitted when the user scroll into an emoji tab",properties:[{type:{names:["Number"]},name:"tab-index",description:"The tab that was scrolled into"}],tags:[{title:"param",type:{name:"Number"},name:"tab-index",description:"The tab that was scrolled into"}]},{name:"is-scrolling",description:"Emitted when the scrollTo function starts scrolling and stops scrolling",properties:[{type:{names:["Boolean"]},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}],tags:[{title:"param",type:{name:"Boolean"},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}]},{name:"focus-skin-selector",description:"Emitted when the user reach the end of the emoji list"},{name:"focus-search-input",description:"Emitted when the user shift tab in first tab of emoji selector"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]};const We={"data-qa":"skin-selector"},Qe={class:"d-emoji-picker__skin-list"},Ze=["onKeydown","onClick"],Xe=["alt","aria-label","title","src"],xe={class:"d-emoji-picker__skin-selected"},et=["aria-label"],tt=["alt","aria-label","title","src"],de={__name:"emoji_skin_selector",props:{skinTone:{type:String,required:!0},isHovering:{type:Boolean,default:!1},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["skin-tone","focus-tabset"],setup(l,{expose:f,emit:d}){const s=l,r=[{name:":wave_tone1:",unicode_output:"1f44b-1f3fb",skinTone:K.LIGHT,skinCode:"_tone1"},{name:":wave_tone2:",unicode_output:"1f44b-1f3fc",skinTone:K.MEDIUM_LIGHT,skinCode:"_tone2"},{name:":wave_tone3:",unicode_output:"1f44b-1f3fd",skinTone:K.MEDIUM,skinCode:"_tone3"},{name:":wave_tone4:",unicode_output:"1f44b-1f3fe",skinTone:K.MEDIUM_DARK,skinCode:"_tone4"},{name:":wave_tone5:",unicode_output:"1f44b-1f3ff",skinTone:K.DARK,skinCode:"_tone5"},{name:":wave:",unicode_output:"1f44b",skinTone:K.DEFAULT,skinCode:""}],b=g(!1),S=g(null),p=g([]);ie(()=>s.isHovering&&(b.value=!1));const h=V(()=>r.find(t=>t.skinTone===s.skinTone)),w=g(h.value);ie(()=>h.value&&(w.value=h.value));function A(t){p.value.push(t)}function u(){S.value.focus()}function I(t){w.value=t,b.value=!1,d("skin-tone",t.skinTone),Q(()=>u())}const v=(t,c,y)=>{var T,L,U;t.preventDefault(),t.key==="ArrowLeft"&&(y===0&&((T=p.value[p.value.length-1])==null||T.focus()),(L=p.value[y-1])==null||L.focus()),t.key==="ArrowRight"&&((U=p.value[y+1])==null||U.focus()),t.key==="Enter"&&(c?I(c):e()),t.key==="Tab"&&d("focus-tabset")};function e(){b.value=!b.value,Q(()=>p.value[0].focus())}return f({focusSkinSelector:u}),(t,c)=>(j(),_("div",We,[Z(E("div",Qe,[(j(),_(z,null,G(r,(y,T)=>E("button",{ref_for:!0,ref:L=>{L&&A(L)},key:y.name,class:ne({selected:w.value.skinCode===y.skinCode}),onKeydown:L=>v(L,y,T),onClick:L=>I(y)},[E("img",{class:"d-icon d-icon--size-500",alt:y.name,"aria-label":y.name,title:y.name,src:`${q(J)+y.unicode_output}.png`},null,8,Xe)],42,Ze)),64))],512),[[X,b.value]]),Z(E("div",xe,[O(De,{placement:"top-end"},{anchor:P(()=>[E("button",{ref_key:"skinSelectorRef",ref:S,"aria-label":l.skinSelectorButtonTooltipLabel,tabindex:"-1",onClick:e,onKeydown:c[0]||(c[0]=y=>v(y))},[E("img",{class:"d-icon d-icon--size-500",alt:w.value.name,"aria-label":w.value.name,title:w.value.name,src:`${q(J)+w.value.unicode_output}.png`},null,8,tt)],40,et)]),default:P(()=>[ae(Y(l.skinSelectorButtonTooltipLabel)+" ",1)]),_:1})],512),[[X,!b.value]])]))}},ot=H(de,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]]);de.__docgenInfo={exportName:"default",displayName:"emoji_skin_selector",description:"",tags:{},expose:[{name:"focusSkinSelector"}],props:[{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"isHovering",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"skinSelectorButtonTooltipLabel",type:{name:"string"},required:!0}],events:[{name:"skin-tone",description:"The skin tone that was selected",type:{names:["Number"]}},{name:"focus-tabset"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]};const it={class:"d-emoji-picker__data"},st=["alt","aria-label","title","src"],me={__name:"emoji_description",props:{emoji:{type:Object,default:null}},setup(l){return(f,d)=>{var s;return j(),_("div",it,[l.emoji?(j(),_("img",{key:0,class:"d-icon d-icon--size-500",alt:l.emoji.name,"aria-label":l.emoji.name,title:l.emoji.name,src:`${q(J)+l.emoji.unicode_character}.png`},null,8,st)):x("v-if",!0),ae(" "+Y((s=l.emoji)==null?void 0:s.name),1)])}}},lt=H(me,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]]);me.__docgenInfo={exportName:"default",displayName:"emoji_description",description:"",tags:{},props:[{name:"emoji",description:"Emoji data",tags:{type:[{title:"type",type:{name:"Object"}}],default:[{description:"null",title:"default"}]},type:{name:"Object"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]};const nt={class:"d-emoji-picker"},at={class:"d-emoji-picker--header"},rt={class:"d-emoji-picker--body"},ut={class:"d-emoji-picker--footer"},pe={__name:"DtEmojiPicker",props:{recentlyUsedEmojis:{type:Array,default:()=>[]},searchPlaceholderLabel:{type:String,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},tabSetLabels:{type:Array,required:!0},skinTone:{type:String,default:"Default"},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["selected-emoji","skin-tone","close"],setup(l,{emit:f}){const d=l,s=g(""),r=g(null),b=g({}),S=g(0),p=g(!1),h=V(()=>d.recentlyUsedEmojis.length>0);function w(v){s.value="",b.value=v,b.value={...b.value,tabId:v}}function A(v){S.value=v}function u(v){p.value=v}function I(v){r.value=v}return(v,e)=>(j(),_("div",nt,[E("div",at,[O(Oe,{ref:"tabsetRef","emoji-filter":s.value,"show-recently-used-tab":h.value,"scroll-into-tab":S.value,"tabset-labels":l.tabSetLabels,"is-scrolling":p.value,onFocusSearchInput:e[0]||(e[0]=t=>v.$refs.searchInputRef.focusSearchInput()),onSelectedTabset:w,onKeydown:e[1]||(e[1]=M(t=>f("close"),["esc"]))},null,8,["emoji-filter","show-recently-used-tab","scroll-into-tab","tabset-labels","is-scrolling"])]),E("div",rt,[O(qe,{ref:"searchInputRef",modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value=t),"search-placeholder-label":l.searchPlaceholderLabel,onSelectFirstEmoji:e[3]||(e[3]=t=>f("selected-emoji",r.value)),onFocusTabset:e[4]||(e[4]=t=>v.$refs.tabsetRef.focusTabset()),onFocusEmojiSelector:e[5]||(e[5]=t=>v.$refs.emojiSelectorRef.focusEmojiSelector()),onKeydown:e[6]||(e[6]=M(t=>f("close"),["esc"]))},null,8,["modelValue","search-placeholder-label"]),O(Je,{ref:"emojiSelectorRef","emoji-filter":s.value,"skin-tone":l.skinTone,"tabset-labels":l.tabSetLabels,"search-results-label":l.searchResultsLabel,"search-no-results-label":l.searchNoResultsLabel,"recently-used-emojis":l.recentlyUsedEmojis,"selected-tabset":b.value,onScrollIntoTab:A,onIsScrolling:u,onHighlightedEmoji:I,onSelectedEmoji:e[7]||(e[7]=t=>f("selected-emoji",t)),onFocusSkinSelector:e[8]||(e[8]=t=>v.$refs.skinSelectorRef.focusSkinSelector()),onFocusSearchInput:e[9]||(e[9]=t=>v.$refs.searchInputRef.focusSearchInput()),onKeydown:e[10]||(e[10]=M(t=>f("close"),["esc"]))},null,8,["emoji-filter","skin-tone","tabset-labels","search-results-label","search-no-results-label","recently-used-emojis","selected-tabset"])]),E("div",ut,[O(lt,{emoji:r.value},null,8,["emoji"]),O(ot,{ref:"skinSelectorRef","is-hovering":!!r.value,"skin-selector-button-tooltip-label":l.skinSelectorButtonTooltipLabel,"skin-tone":l.skinTone,onSkinTone:e[11]||(e[11]=t=>f("skin-tone",t)),onFocusTabset:e[12]||(e[12]=t=>v.$refs.tabsetRef.focusTabset()),onKeydown:e[13]||(e[13]=M(t=>f("close"),["esc"]))},null,8,["is-hovering","skin-selector-button-tooltip-label","skin-tone"])])]))}},bt=H(pe,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/DtEmojiPicker.vue"]]);pe.__docgenInfo={exportName:"default",displayName:"DtEmojiPicker",description:"",tags:{},props:[{name:"recentlyUsedEmojis",description:`The array with recently used  emoji object
This list is necessary to fill the recently used tab`,tags:{type:[{title:"type",type:{name:"Array"}}],default:[{description:"[]",title:"default"}],example:[{description:'<dt-emoji-picker :recentlyUsedEmojis="[emojiObject, emojiObject]" />',title:"example"}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}},{name:"searchPlaceholderLabel",description:"The placeholder text for the search input",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchPlaceholderLabel="'Search...'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchResultsLabel="'Search results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",description:"The label for the search no results",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchNoResultsLabel="'No results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"tabSetLabels",description:`The list of tabsets to show, it is necessary to be updated with the correct language
It must respect the provided order.`,tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker
 :tabSetLabels="['Most recently used', 'Smileys and people', 'Nature',
   'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']" />`,title:"example"}]},type:{name:"Array"},required:!0},{name:"skinTone",description:`The skin tone to show the emojis
This prop gives the possibility to use the skin tone selected by the user previously`,tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"'Default'",title:"default"}],example:[{description:`<dt-emoji-picker :skinTone="'Default'" />`,title:"example"}]},values:["'Default'","'Light'","'MediumLight'","'Medium'","'MediumDark'","'Dark'"],type:{name:"String"},defaultValue:{func:!1,value:"'Default'"}},{name:"skinSelectorButtonTooltipLabel",description:"Tooltip shown when skin selector button is hovered.",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :skin-selector-button-tooltip-label="'Change default skin tone'" />`,title:"example"}]},type:{name:"String"},required:!0}],events:[{name:"selected-emoji",description:"It will emit the selected emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The selected emoji from the emoji selector"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The selected emoji from the emoji selector"}]},{name:"skin-tone",description:"It will emit the selected skin tone",properties:[{type:{names:["String"]},name:"skin",description:"The selected skin tone from the skin selector"}],tags:[{title:"param",type:{name:"String"},name:"skin",description:"The selected skin tone from the skin selector"}]},{name:"close",description:"Since the keyboard events are encapsulated, we emit this event to close the picker"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/DtEmojiPicker.vue"]};export{bt as D};
//# sourceMappingURL=DtEmojiPicker-2493d63c.js.map
