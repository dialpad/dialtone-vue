import{a as Z}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as me}from"./storybook_utils-1c9c66e9.js";import{I as k,J as pe,o as j,f as S,d as E,z as Pe,w as P,g as $,y as O,A as fe,K,L as Oe,M as B,F as z,u as W,b as oe,N as w,O as X,P as Ve,t as H,e as x,v as ee,k as te,n as he,Q as Be,s as be}from"./vue.esm-bundler-e62bdd6b.js";import{D as Ke}from"./input-d57cfa84.js";import{D as Y}from"./icon-ee68f285.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Ue}from"./tab_group-d6953c85.js";import{D as Me}from"./tab-6b695481.js";import{a as I}from"./index-40c4ee4c.js";import{D as ze}from"./tooltip-0cb6721b.js";import{D as We}from"./button-f0bff3c1.js";import{D as He}from"./popover-5caefdeb.js";const Je={class:"d-emoji-picker__search d-emoji-picker__alignment"},Ge=["onKeydown"],ye={__name:"emoji_search",props:{searchPlaceholderLabel:{type:String,required:!0},modelValue:{type:String,default:""}},emits:["update:modelValue","focus-emoji-selector","focus-tabset","select-first-emoji"],setup(n,{expose:d,emit:i}){const l=k(null);function u(){i("update:modelValue",""),c()}function c(){l.value.focus()}return pe(()=>{c()}),d({focusSearchInput:c}),(b,y)=>(j(),S("div",Je,[E(Ke,{id:"searchInput",ref_key:"searchInput",ref:l,placeholder:n.searchPlaceholderLabel,"model-value":n.modelValue,"onUpdate:modelValue":y[0]||(y[0]=p=>b.$emit("update:modelValue",p)),onKeydown:[y[1]||(y[1]=O(p=>b.$emit("focus-tabset"),["up"])),y[2]||(y[2]=O(fe(p=>b.$emit("focus-emoji-selector"),["prevent"]),["down"])),y[3]||(y[3]=O(p=>b.$emit("select-first-emoji"),["enter"]))]},Pe({leftIcon:P(()=>[E(Y,{name:"search"})]),_:2},[n.modelValue.length>0?{name:"rightIcon",fn:P(()=>[$("button",{class:"d-emoji-picker__search-button",onClick:u,onKeydown:O(u,["enter"])},[E(Y,{name:"close"})],40,Ge)]),key:"0"}:void 0]),1032,["placeholder","model-value"])]))}},Qe=V(ye,[["__scopeId","data-v-2a36ac5a"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]]);ye.__docgenInfo={exportName:"default",displayName:"emoji_search",description:"",tags:{},expose:[{name:"focusSearchInput"}],props:[{name:"searchPlaceholderLabel",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"focus-tabset"},{name:"focus-emoji-selector"},{name:"select-first-emoji"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]};const Xe={class:"d-emoji-picker__tabset"},ve={__name:"emoji_tabset",props:{showRecentlyUsedTab:{type:Boolean,default:!1},scrollIntoTab:{type:Number,required:!0},isScrolling:{type:Boolean,default:!1},emojiFilter:{type:String,default:""},tabsetLabels:{type:Array,required:!0}},emits:["selected-tabset","focus-search-input"],setup(n,{expose:d,emit:i}){const l=n,u=[{label:"Recently used",icon:"clock"},{label:"Smiley’s and people",icon:"satisfied"},{label:"Nature",icon:"living-thing"},{label:"Food",icon:"food"},{label:"Activity",icon:"object"},{label:"Travel",icon:"transportation"},{label:"Objects",icon:"lightbulb"},{label:"Symbols",icon:"heart"},{label:"Flags",icon:"flag"}],c=K(()=>(l.showRecentlyUsedTab?u:u.slice(1)).map((t,a)=>({...t,label:l.tabsetLabels[a],id:(a+1).toString(),panelId:(a+1).toString()}))),b=K(()=>l.emojiFilter.length>0),y=k("1"),{isScrolling:p}=Oe(l),N=k([]);B(()=>l.scrollIntoTab,()=>{!p.value&&!b.value&&(y.value=(l.scrollIntoTab+1).toString())}),B(b,()=>{b.value&&(y.value=null)});function D(e){p.value||(y.value=e),i("selected-tabset",e)}function f(e){N.value.push(e.$el)}function F(){N.value[0].focus()}function v(e,t){e.key==="Enter"&&(D(t),N.value[t-1].blur()),e.key==="Tab"&&(e.preventDefault(),i("focus-search-input")),e.key==="ArrowDown"&&i("focus-search-input")}return d({focusTabset:F}),(e,t)=>(j(),S("div",Xe,[E(Ue,{"tab-list-class":"d-emoji-picker__tabset-list",selected:y.value},{tabs:P(()=>[(j(!0),S(z,null,W(w(c),(a,T)=>(j(),oe(Me,{id:a.id,ref_for:!0,ref:g=>{g&&f(g)},key:a.id,"panel-id":a.panelId,label:a.label,"aria-controls":"d-emoji-picker-list",tabindex:T+1,onClickCapture:fe(g=>D(a.id),["stop"]),onKeydown:g=>v(g,a.id)},{default:P(()=>[E(Y,{size:"400",name:a.icon},null,8,["name"])]),_:2},1032,["id","panel-id","label","tabindex","onClickCapture","onKeydown"]))),128))]),_:1},8,["selected"])]))}},Ye=V(ve,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]]);ve.__docgenInfo={exportName:"default",displayName:"emoji_tabset",description:"",tags:{},expose:[{name:"focusTabset"}],props:[{name:"showRecentlyUsedTab",description:"Whether to show the recently used tab or not",tags:{type:[{title:"type",type:{name:"Boolean"}}],default:[{description:"false",title:"default"}]},type:{name:"Boolean"},defaultValue:{func:!1,value:"false"}},{name:"scrollIntoTab",type:{name:"number"},required:!0},{name:"isScrolling",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emojiFilter",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tabsetLabels",description:"The labels for the aria-label",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0}],events:[{name:"selected-tabset",description:"Emitted when a tab is selected",properties:[{type:{names:["String"]},name:"tabId",description:"The name of the tab that was selected"}],tags:[{title:"param",type:{name:"String"},name:"tabId",description:"The name of the tab that was selected"}]},{name:"focus-search-input"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]};const J="https://static.dialpadcdn.com/joypixels/png/unicode/32/",R=9;function Ze(n){const d=k([]),i=k([]),l=k(!1),u=k(!0);function c(e,t=!1){u.value=t,n("highlighted-emoji",e)}function b(e,t,a){d.value[t]||(d.value[t]=[]),d.value[t][a]=e}function y(e,t){i.value[t]=e}function p(e,t){var T,g,C;const a=l.value?(T=i.value)==null?void 0:T[t]:(C=(g=d.value)==null?void 0:g[e])==null?void 0:C[t];return a?(a.focus(),!0):!1}function N(e,t){p(e,t-1)||(d.value[e-1]?p(e-1,d.value[e-1].length-1):p(d.value.length-1,d.value[d.value.length-1].length-1))}function D(e,t){p(e,t+1)||p(e+1,0)||p(0,0)}function f(e,t){p(0,t-1)||p(0,i.value.length-1)}function F(e,t){p(0,t+1)||p(0,0)}function v(e,t,a){l.value?e==="left"?f(t,a):e==="right"&&F(t,a):e==="left"?N(t,a):e==="right"&&D(t,a)}return{emojiRefs:d,emojiFilteredRefs:i,isFiltering:l,hoverFirstEmoji:u,setEmojiRef:b,setFilteredRef:y,hoverEmoji:c,focusEmoji:p,handleHorizontalNavigation:v}}const xe={class:"d-emoji-picker__selector"},et={key:0,class:"d-emoji-picker__search-label d-emoji-picker__alignment"},tt={key:0},ot={class:"d-emoji-picker__tab"},st=["aria-label","onClick","onFocusin","onMouseover","onKeydown"],nt=["alt","aria-label","title","src"],lt={key:2,class:"d-emoji-picker__alignment"},it={class:"d-emoji-picker__tab","data-qa":"filtered-emojis"},at=["aria-label","onClick","onFocusin","onMouseover","onKeydown"],rt=["alt","aria-label","title","src"],ke={__name:"emoji_selector",props:{emojiFilter:{type:String,default:""},skinTone:{type:String,required:!0},tabsetLabels:{type:Array,required:!0},selectedTabset:{type:Object,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},recentlyUsedEmojis:{type:Array,default:()=>[]}},emits:["highlighted-emoji","selected-emoji","scroll-into-tab","is-scrolling","focus-skin-selector","focus-search-input"],setup(n,{expose:d,emit:i}){const l=n,{emojiRefs:u,emojiFilteredRefs:c,isFiltering:b,hoverFirstEmoji:y,setEmojiRef:p,setFilteredRef:N,hoverEmoji:D,focusEmoji:f,handleHorizontalNavigation:F}=Ze(i),v=k(null),e=k(null),t=k(null),a=["Recently used","People","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],T=K(()=>l.recentlyUsedEmojis.length?l.tabsetLabels.map(o=>({label:o,ref:k(null)})):l.tabsetLabels.slice(1).map(o=>({label:o,ref:k(null)}))),g=k(T.value[0].label),C=K(()=>l.recentlyUsedEmojis.length?a:a.slice(1)),G=k([]),ne=K(()=>[...I[`People${l.skinTone}`],...I.Nature,...I.Food,...I[`Activity${l.skinTone}`],...I.Travel,...I[`Objects${l.skinTone}`],...I.Symbols,...I.Flags]),Le=Re(()=>{c.value=[],le()});B(ne,()=>{le()},{immediate:!0}),B(()=>l.recentlyUsedEmojis,()=>{I["Recently used"]=l.recentlyUsedEmojis},{immediate:!0}),B(()=>l.emojiFilter,()=>{Fe(),l.emojiFilter?b.value=!0:(b.value=!1,i("highlighted-emoji",null)),Le()}),B(()=>l.selectedTabset,o=>{Q(o.tabId)},{deep:!0});function le(){const o=l.emojiFilter.toLowerCase();G.value=ne.value.filter(s=>{const m=s.name.toLowerCase().includes(o),h=s.keywords.some(r=>r.toLowerCase().includes(o));return m||h}),X(()=>{o&&D(G.value[0],!0)})}function Re(o,s=300){let m;return(...h)=>{clearTimeout(m),m=setTimeout(()=>o(...h),s)}}function Ee(o){return`${J+o}.png`}function De(o){o.target.parentNode.style.display="none"}function Q(o,s=!0){const h=T.value[o-1].ref.value[0];X(()=>{const r=e.value,L=o==="1"?0:h.offsetTop-20;let _=!0,A=r.scrollTop;i("is-scrolling",!0),r.addEventListener("scroll",()=>{if(_){const q=r.scrollTop;(A<q&&q>=L||A>q&&q<=L)&&(_=!1,i("is-scrolling",!1)),A=q}}),r.scrollTop=L,s&&f(o-1,0)})}function Fe(){const o=e.value;o.scrollTop=0}function qe(){t.value=new IntersectionObserver(o=>{o.forEach(s=>{var r,L,_,A,q;const{target:m}=s,h=parseInt(m.dataset.index);s.isIntersecting&&m.offsetTop<=v.value.offsetTop+50?(g.value=((r=T.value[h-1])==null?void 0:r.label)??((L=T.value[0])==null?void 0:L.label),i("scroll-into-tab",h-1)):s.boundingClientRect.bottom<=((_=v.value)==null?void 0:_.getBoundingClientRect().bottom)?(i("scroll-into-tab",h),g.value=(A=T.value[h])==null?void 0:A.label):h===1&&(i("scroll-into-tab",h),g.value=(q=T.value[0])==null?void 0:q.label)})}),t.value.observe(v.value),Array.from(e.value.children).forEach((o,s)=>{t.value.observe(o),o.dataset.index=s})}const Ie=(o,s,m)=>{var h;if(o.preventDefault(),y.value=!1,o.key==="ArrowUp"){const r=s%R;if(!f(0,s-R)){const L=c.value.length-c.value.length%R+r;f(0,L),f(0,L)||f(0,c.value.length-1)}}if(o.key==="ArrowDown"&&!f(0,s+R)){const r=s%R;(h=c.value)!=null&&h[s+(R-r)]?f(0,c.value.length-1):f(0,r)}o.key==="ArrowLeft"&&F("left",0,s),o.key==="ArrowRight"&&F("right",0,s),o.key==="Tab"&&i("focus-skin-selector"),o.key==="Enter"&&i("selected-emoji",m)},Ne=(o,s,m,h)=>{var r,L;if(o.preventDefault(),o.key==="ArrowUp"){const _=m%R;if(s===0){const A=R-u.value[u.value.length-1].length%R,q=u.value[u.value.length-1].length+A-(R-_);f(u.value.length-1,q)||f(u.value.length-1,u.value[u.value.length-1].length-1);return}if(!f(s,m-R)){const A=s-1<0?0:s-1,q=u.value[A].length,Ce=q-q%R+_;f(A,Ce)||f(s-1,u.value[s-1].length-1)}}if(o.key==="ArrowDown"&&!f(s,m+R)){const _=m%R;(L=(r=u.value)==null?void 0:r[s])!=null&&L[m+(R-_)]?f(s,u.value[s].length-1):f(s+1,_)||f(0,_)||f(0,u.value[0].length-1)}o.key==="ArrowLeft"&&F("left",s,m),o.key==="ArrowRight"&&F("right",s,m),o.key==="Tab"&&(f(s+1,0)?Q(s+1+1,!1):i("focus-skin-selector")),o.key==="Tab"&&o.shiftKey&&(f(s,0)&&s>0?Q(s,!0):(Q(1,!1),i("focus-search-input"))),o.key==="Enter"&&i("selected-emoji",h)};function Ae(){f(0,0)}return pe(()=>{qe()}),Ve(()=>{t.value.disconnect()}),d({focusEmojiSelector:Ae}),(o,s)=>(j(),S("div",xe,[$("div",{id:"d-emoji-picker-list",ref_key:"listRef",ref:e,class:"d-emoji-picker__list"},[n.emojiFilter?(j(),S("p",et,H(G.value.length>0?n.searchResultsLabel:n.searchNoResultsLabel),1)):(j(),S("div",{key:1,ref_key:"tabCategoryRef",ref:v,class:"d-emoji-picker__category d-emoji-picker__alignment"},[$("p",null,H(g.value),1)],512)),(j(!0),S(z,null,W(w(T),(m,h)=>x((j(),S("div",{key:h,ref_for:!0,ref:m.ref,class:"d-emoji-picker__alignment"},[h?(j(),S("p",tt,H(m.label),1)):te("v-if",!0),$("div",ot,[(j(!0),S(z,null,W(w(I)[w(C)[h]+n.skinTone]?w(I)[w(C)[h]+n.skinTone]:w(I)[w(C)[h]],(r,L)=>(j(),S("button",{key:r.shortname,ref_for:!0,ref:_=>{_&&w(p)(_,h,L)},type:"button","aria-label":r.name,onClick:_=>o.$emit("selected-emoji",r),onFocusin:_=>o.$emit("highlighted-emoji",r),onFocusout:s[0]||(s[0]=_=>o.$emit("highlighted-emoji",null)),onMouseover:_=>o.$emit("highlighted-emoji",r),onMouseleave:s[1]||(s[1]=_=>o.$emit("highlighted-emoji",null)),onKeydown:_=>Ne(_,h,L,r)},[$("img",{class:"d-icon d-icon--size-500",alt:r.name,"aria-label":r.name,title:r.name,src:Ee(r.unicode_character),onError:De},null,40,nt)],40,st))),128))])])),[[ee,!n.emojiFilter]])),128)),n.emojiFilter?(j(),S("div",lt,[$("div",it,[(j(!0),S(z,null,W(G.value,(m,h)=>(j(),S("button",{key:m.shortname,ref_for:!0,ref:r=>{r&&w(N)(r,h)},type:"button","aria-label":m.name,class:he({"hover-emoji":h===0&&w(y)}),onClick:r=>o.$emit("selected-emoji",m),onFocusin:r=>o.$emit("highlighted-emoji",m),onFocusout:s[2]||(s[2]=r=>o.$emit("highlighted-emoji",null)),onMouseover:r=>w(D)(m),onMouseleave:s[3]||(s[3]=r=>w(D)(null)),onKeydown:r=>Ie(r,h,m)},[$("img",{class:"d-icon d-icon--size-500",alt:m.name,"aria-label":m.name,title:m.name,src:`${w(J)+m.unicode_character}.png`},null,8,rt)],42,at))),128))])])):te("v-if",!0)],512)]))}},ut=V(ke,[["__scopeId","data-v-956ad05e"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]]);ke.__docgenInfo={exportName:"default",displayName:"emoji_selector",description:"",tags:{},expose:[{name:"focusEmojiSelector"}],props:[{name:"emojiFilter",description:"The filter to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"''",title:"default"}]},type:{name:"String"},defaultValue:{func:!1,value:"''"}},{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"tabsetLabels",description:"The labels for the tabset",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0},{name:"selectedTabset",type:{name:"object"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",type:{name:"string"},required:!0},{name:"recentlyUsedEmojis",description:"The list of recently used emojis",tags:{type:[{title:"type",type:{name:"Array"}}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"selected-emoji",description:"Emitted when the user select an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was selected"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was selected"}]},{name:"highlighted-emoji",description:"Emitted when the user hover over an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was hovered"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was hovered"}]},{name:"scroll-into-tab",description:"Emitted when the user scroll into an emoji tab",properties:[{type:{names:["Number"]},name:"tab-index",description:"The tab that was scrolled into"}],tags:[{title:"param",type:{name:"Number"},name:"tab-index",description:"The tab that was scrolled into"}]},{name:"is-scrolling",description:"Emitted when the scrollTo function starts scrolling and stops scrolling",properties:[{type:{names:["Boolean"]},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}],tags:[{title:"param",type:{name:"Boolean"},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}]},{name:"focus-skin-selector",description:"Emitted when the user reach the end of the emoji list"},{name:"focus-search-input",description:"Emitted when the user shift tab in first tab of emoji selector"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]};const ct={"data-qa":"skin-selector"},dt={class:"d-emoji-picker__skin-list"},mt=["onKeydown","onClick"],pt=["alt","aria-label","title","src"],ft={class:"d-emoji-picker__skin-selected"},ht=["aria-label"],bt=["alt","aria-label","title","src"],ge={__name:"emoji_skin_selector",props:{skinTone:{type:String,required:!0},isHovering:{type:Boolean,default:!1},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["skin-tone","focus-tabset"],setup(n,{expose:d,emit:i}){const l=n,u=[{name:":wave_tone1:",unicode_output:"1f44b-1f3fb",skinTone:"Light",skinCode:"_tone1"},{name:":wave_tone2:",unicode_output:"1f44b-1f3fc",skinTone:"MediumLight",skinCode:"_tone2"},{name:":wave_tone3:",unicode_output:"1f44b-1f3fd",skinTone:"Medium",skinCode:"_tone3"},{name:":wave_tone4:",unicode_output:"1f44b-1f3fe",skinTone:"MediumDark",skinCode:"_tone4"},{name:":wave_tone5:",unicode_output:"1f44b-1f3ff",skinTone:"Dark",skinCode:"_tone5"},{name:":wave:",unicode_output:"1f44b",skinTone:"Default",skinCode:""}],c=k(u.find(e=>e.skinTone===l.skinTone)),b=k(!1),y=k(null),p=k([]);Be(()=>l.isHovering&&(b.value=!1));function N(e){p.value.push(e)}function D(){y.value.focus()}function f(e){c.value=e,b.value=!1,i("skin-tone",e.skinTone),X(()=>D())}const F=(e,t,a)=>{var T,g,C;e.preventDefault(),e.key==="ArrowLeft"&&(a===0&&((T=p.value[p.value.length-1])==null||T.focus()),(g=p.value[a-1])==null||g.focus()),e.key==="ArrowRight"&&((C=p.value[a+1])==null||C.focus()),e.key==="Enter"&&(t?f(t):v()),e.key==="Tab"&&i("focus-tabset")};function v(){b.value=!b.value,X(()=>p.value[0].focus())}return d({focusSkinSelector:D}),(e,t)=>(j(),S("div",ct,[x($("div",dt,[(j(),S(z,null,W(u,(a,T)=>$("button",{ref_for:!0,ref:g=>{g&&N(g)},key:a.name,class:he({selected:c.value.skinCode===a.skinCode}),onKeydown:g=>F(g,a,T),onClick:g=>f(a)},[$("img",{class:"d-icon d-icon--size-500",alt:a.name,"aria-label":a.name,title:a.name,src:`${w(J)+a.unicode_output}.png`},null,8,pt)],42,mt)),64))],512),[[ee,b.value]]),x($("div",ft,[E(ze,{placement:"top-end"},{anchor:P(()=>[$("button",{ref_key:"skinSelectorRef",ref:y,"aria-label":n.skinSelectorButtonTooltipLabel,tabindex:"-1",onClick:v,onKeydown:t[0]||(t[0]=a=>F(a))},[$("img",{class:"d-icon d-icon--size-500",alt:c.value.name,"aria-label":c.value.name,title:c.value.name,src:`${w(J)+c.value.unicode_output}.png`},null,8,bt)],40,ht)]),default:P(()=>[be(H(n.skinSelectorButtonTooltipLabel)+" ",1)]),_:1})],512),[[ee,!b.value]])]))}},yt=V(ge,[["__scopeId","data-v-05df9544"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]]);ge.__docgenInfo={exportName:"default",displayName:"emoji_skin_selector",description:"",tags:{},expose:[{name:"focusSkinSelector"}],props:[{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"isHovering",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"skinSelectorButtonTooltipLabel",type:{name:"string"},required:!0}],events:[{name:"skin-tone",description:"The skin tone that was selected",type:{names:["Number"]}},{name:"focus-tabset"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]};const vt={class:"d-emoji-picker__data"},kt=["alt","aria-label","title","src"],_e={__name:"emoji_description",props:{emoji:{type:Object,default:null}},setup(n){return(d,i)=>{var l;return j(),S("div",vt,[n.emoji?(j(),S("img",{key:0,class:"d-icon d-icon--size-500",alt:n.emoji.name,"aria-label":n.emoji.name,title:n.emoji.name,src:`${w(J)+n.emoji.unicode_character}.png`},null,8,kt)):te("v-if",!0),be(" "+H((l=n.emoji)==null?void 0:l.name),1)])}}},gt=V(_e,[["__scopeId","data-v-74c93d63"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]]);_e.__docgenInfo={exportName:"default",displayName:"emoji_description",description:"",tags:{},props:[{name:"emoji",description:"Emoji data",tags:{type:[{title:"type",type:{name:"Object"}}],default:[{description:"null",title:"default"}]},type:{name:"Object"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]};const _t={class:"d-emoji-picker"},jt={class:"d-emoji-picker--header"},St={class:"d-emoji-picker--body"},wt={class:"d-emoji-picker--footer"},je={__name:"emoji_picker",props:{recentlyUsedEmojis:{type:Array,default:()=>[]},searchPlaceholderLabel:{type:String,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},tabSetLabels:{type:Array,required:!0},skinTone:{type:String,default:"Default"},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["selected-emoji","skin-tone","close"],setup(n,{emit:d}){const i=n,l=k(""),u=k(null),c=k({}),b=k(0),y=k(!1),p=K(()=>i.recentlyUsedEmojis.length>0);function N(v){l.value="",c.value=v,c.value={...c.value,tabId:v}}function D(v){b.value=v}function f(v){y.value=v}function F(v){u.value=v}return(v,e)=>(j(),S("div",_t,[$("div",jt,[E(Ye,{ref:"tabsetRef","emoji-filter":l.value,"show-recently-used-tab":w(p),"scroll-into-tab":b.value,"tabset-labels":n.tabSetLabels,"is-scrolling":y.value,onFocusSearchInput:e[0]||(e[0]=t=>v.$refs.searchInputRef.focusSearchInput()),onSelectedTabset:N,onKeydown:e[1]||(e[1]=O(t=>d("close"),["esc"]))},null,8,["emoji-filter","show-recently-used-tab","scroll-into-tab","tabset-labels","is-scrolling"])]),$("div",St,[E(Qe,{ref:"searchInputRef",modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),"search-placeholder-label":n.searchPlaceholderLabel,onSelectFirstEmoji:e[3]||(e[3]=t=>d("selected-emoji",u.value)),onFocusTabset:e[4]||(e[4]=t=>v.$refs.tabsetRef.focusTabset()),onFocusEmojiSelector:e[5]||(e[5]=t=>v.$refs.emojiSelectorRef.focusEmojiSelector()),onKeydown:e[6]||(e[6]=O(t=>d("close"),["esc"]))},null,8,["modelValue","search-placeholder-label"]),E(ut,{ref:"emojiSelectorRef","emoji-filter":l.value,"skin-tone":n.skinTone,"tabset-labels":n.tabSetLabels,"search-results-label":n.searchResultsLabel,"search-no-results-label":n.searchNoResultsLabel,"recently-used-emojis":n.recentlyUsedEmojis,"selected-tabset":c.value,onScrollIntoTab:D,onIsScrolling:f,onHighlightedEmoji:F,onSelectedEmoji:e[7]||(e[7]=t=>d("selected-emoji",t)),onFocusSkinSelector:e[8]||(e[8]=t=>v.$refs.skinSelectorRef.focusSkinSelector()),onFocusSearchInput:e[9]||(e[9]=t=>v.$refs.searchInputRef.focusSearchInput()),onKeydown:e[10]||(e[10]=O(t=>d("close"),["esc"]))},null,8,["emoji-filter","skin-tone","tabset-labels","search-results-label","search-no-results-label","recently-used-emojis","selected-tabset"])]),$("div",wt,[E(gt,{emoji:u.value},null,8,["emoji"]),E(yt,{ref:"skinSelectorRef","is-hovering":!!u.value,"skin-selector-button-tooltip-label":n.skinSelectorButtonTooltipLabel,"skin-tone":n.skinTone,onSkinTone:e[11]||(e[11]=t=>d("skin-tone",t)),onFocusTabset:e[12]||(e[12]=t=>v.$refs.tabsetRef.focusTabset()),onKeydown:e[13]||(e[13]=O(t=>d("close"),["esc"]))},null,8,["is-hovering","skin-selector-button-tooltip-label","skin-tone"])])]))}},se=V(je,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker.vue"]]);je.__docgenInfo={exportName:"default",displayName:"emoji_picker",description:"",tags:{},props:[{name:"recentlyUsedEmojis",description:`The array with recently used  emoji object
This list is necessary to fill the recently used tab`,tags:{type:[{title:"type",type:{name:"Array"}}],default:[{description:"[]",title:"default"}],example:[{description:'<dt-emoji-picker :recentlyUsedEmojis="[emojiObject, emojiObject]" />',title:"example"}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}},{name:"searchPlaceholderLabel",description:"The placeholder text for the search input",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchPlaceholderLabel="'Search...'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchResultsLabel="'Search results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",description:"The label for the search no results",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchNoResultsLabel="'No results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"tabSetLabels",description:`The list of tabsets to show, it is necessary to be updated with the correct language
It must respect the provided order.`,tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker
 :tabSetLabels="['Most recently used', 'Smileys and people', 'Nature',
   'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']" />`,title:"example"}]},type:{name:"Array"},required:!0},{name:"skinTone",description:`The skin tone to show the emojis
This prop gives the possibility to use the skin tone selected by the user previously`,tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"'Default'",title:"default"}],example:[{description:`<dt-emoji-picker :skinTone="'Default'" />`,title:"example"}]},values:["'Default'","'Light'","'MediumLight'","'Medium'","'MediumDark'","'Dark'"],type:{name:"String"},defaultValue:{func:!1,value:"'Default'"}},{name:"skinSelectorButtonTooltipLabel",description:"Tooltip shown when skin selector button is hovered.",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :skin-selector-button-tooltip-label="'Change default skin tone'" />`,title:"example"}]},type:{name:"String"},required:!0}],events:[{name:"selected-emoji",description:"It will emit the selected emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The selected emoji from the emoji selector"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The selected emoji from the emoji selector"}]},{name:"skin-tone",description:"It will emit the selected skin tone",properties:[{type:{names:["String"]},name:"skin",description:"The selected skin tone from the skin selector"}],tags:[{title:"param",type:{name:"String"},name:"skin",description:"The selected skin tone from the skin selector"}]},{name:"close",description:"Since the keyboard events are encapsulated, we emit this event to close the picker"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker.vue"]};const Se={__name:"emoji_picker_default.story",setup(n){const d=k("Default");return(i,l)=>(j(),oe(se,{"skin-tone":d.value,"skin-selector-button-tooltip-label":i.$attrs.skinSelectorButtonTooltipLabel,"tab-set-labels":i.$attrs.tabSetLabels,"recently-used-emojis":i.$attrs.recentlyUsedEmojis,"search-results-label":i.$attrs.searchResultsLabel,"search-no-results-label":i.$attrs.searchNoResultsLabel,"search-placeholder-label":i.$attrs.searchPlaceholderLabel,onSkinTone:l[0]||(l[0]=u=>d.value=u),onSelectedEmoji:i.$attrs.selectedEmoji},null,8,["skin-tone","skin-selector-button-tooltip-label","tab-set-labels","recently-used-emojis","search-results-label","search-no-results-label","search-placeholder-label","onSelectedEmoji"]))}},Tt=V(Se,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_default.story.vue"]]);Se.__docgenInfo={exportName:"default",displayName:"emoji_picker_default.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_default.story.vue"]};const we={__name:"emoji_picker_popover.story",setup(n){const d=k("Default"),i=k(!1),l=k(null),u=()=>{i.value=!i.value};return(c,b)=>(j(),oe(He,{open:i.value,"initial-focus-element":"#searchInput",padding:"none",onOpened:b[1]||(b[1]=y=>{i.value=y})},{anchor:P(()=>[E(We,{size:"sm",circle:"",importance:"clear",onClick:u},{icon:P(()=>[E(Y,{name:"satisfied",size:"300"})]),_:1})]),content:P(()=>[E(se,{ref_key:"emojiPickerRef",ref:l,"skin-tone":d.value,"skin-selector-button-tooltip-label":c.$attrs.skinSelectorButtonTooltipLabel,"tab-set-labels":c.$attrs.tabSetLabels,"recently-used-emojis":c.$attrs.recentlyUsedEmojis,"search-results-label":c.$attrs.searchResultsLabel,"search-no-results-label":c.$attrs.searchNoResultsLabel,"search-placeholder-label":c.$attrs.searchPlaceholderLabel,onSkinTone:b[0]||(b[0]=y=>d.value=y),onSelectedEmoji:c.$attrs.selectedEmoji},null,8,["skin-tone","skin-selector-button-tooltip-label","tab-set-labels","recently-used-emojis","search-results-label","search-no-results-label","search-placeholder-label","onSelectedEmoji"])]),_:1},8,["open"]))}},$t=V(we,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_popover.story.vue"]]);we.__docgenInfo={exportName:"default",displayName:"emoji_picker_popover.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_popover.story.vue"]};const Lt=[{name:"thumbs up",category:"people",shortname:":thumbsup:",shortname_alternates:[":+1:",":thumbup:"],keywords:["+1","hand","thumb","up","uc6"],unicode_output:"1f44d",unicode_character:"1f44d"},{name:"thumbs up: medium-light skin tone",category:"people",shortname:":thumbsup_tone2:",shortname_alternates:[":+1_tone2:",":thumbup_tone2:"],keywords:["+1","hand","medium-light skin tone","thumb","up","uc8"],unicode_output:"1f44d-1f3fc",unicode_character:"1f44d-1f3fc"},{name:"thumbs up: dark skin tone",category:"people",shortname:":thumbsup_tone5:",shortname_alternates:[":+1_tone5:",":thumbup_tone5:"],keywords:["+1","dark skin tone","hand","thumb","up","uc8"],unicode_output:"1f44d-1f3ff",unicode_character:"1f44d-1f3ff"},{name:"person: light skin tone",category:"people",shortname:":adult_tone1:",shortname_alternates:[":adult_light_skin_tone:"],keywords:["gender-neutral","light skin tone","uc10"],unicode_output:"1f9d1-1f3fb",unicode_character:"1f9d1-1f3fb"},{name:"woman with veil: dark skin tone",category:"people",shortname:":woman_with_veil_tone5:",shortname_alternates:[":woman_with_veil_dark_skin_tone:"],keywords:["uc13"],unicode_output:"1f470-1f3ff-200d-2640-fe0f",unicode_character:"1f470-1f3ff-2640"}],Te={onSkinTone:Z("skin-tone"),onSelectedEmoji:Z("selected-emoji"),onClose:Z("close"),tabSetLabels:["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],recentlyUsedEmojis:Lt,skinSelectorButtonTooltipLabel:"Change default skin tone",searchNoResultsLabel:"No results",searchResultsLabel:"Search results",searchPlaceholderLabel:"Search..."},$e={skinTone:{options:["Default","Light","MediumLight","Medium","MediumDark","Dark"],control:"select"},onSkinTone:{table:{disable:!0}},onSelectedEmoji:{table:{disable:!0}},onClose:{table:{disable:!0}}},Rt={title:"Components/Emoji Picker",component:se,args:Te,argTypes:$e,excludeStories:/.*Data$/,parameters:{a11y:{disable:!0}}},Et=n=>me(n,Tt),Dt=n=>me(n,$t),U={render:Et,args:{}},M={render:Dt,args:{},parameters:{options:{showPanel:!1},controls:{disable:!0}}};var ie,ae,re;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(re=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ue,ce,de;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: WithPopoverTemplate,
  args: {},
  parameters: {
    options: {
      showPanel: false
    },
    controls: {
      disable: true
    }
  }
}`,...(de=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Ft=["argsData","argTypesData","Default","WithPopover"],zt=Object.freeze(Object.defineProperty({__proto__:null,Default:U,WithPopover:M,__namedExportsOrder:Ft,argTypesData:$e,argsData:Te,default:Rt},Symbol.toStringTag,{value:"Module"}));export{U as D,zt as E};
//# sourceMappingURL=emoji_picker.stories-561dc83a.js.map
