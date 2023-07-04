import{H as g,K as te,o as S,f as _,d as N,z as je,w as B,g as $,y as V,A as oe,I as O,N as Se,J as K,F as P,u as M,b as _e,L as w,O as G,P as we,t as z,e as Q,v as X,k as Y,n as ie,Q as Te,s as se}from"./vue.esm-bundler-3bf5edd9.js";import{D as $e}from"./input-b75357f1.js";import{D as Z}from"./icon-28829c6f.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Le}from"./tab_group-5f3d33fe.js";import{D as Re}from"./tab-78b36387.js";import{a as D}from"./index-40c4ee4c.js";import{D as qe}from"./tooltip-925118bf.js";const Fe={class:"d-emoji-picker__search d-emoji-picker__alignment"},Ee=["onKeydown"],ne={__name:"emoji_search",props:{searchPlaceholderLabel:{type:String,required:!0},modelValue:{type:String,default:""}},emits:["update:modelValue","focus-emoji-selector","focus-tabset","select-first-emoji"],setup(l,{expose:f,emit:m}){const s=g(null);function u(){m("update:modelValue",""),y()}function y(){s.value.focus()}return te(()=>{y()}),f({focusSearchInput:y}),(b,v)=>(S(),_("div",Fe,[N($e,{id:"searchInput",ref_key:"searchInput",ref:s,placeholder:l.searchPlaceholderLabel,"model-value":l.modelValue,"onUpdate:modelValue":v[0]||(v[0]=c=>b.$emit("update:modelValue",c)),onKeydown:[v[1]||(v[1]=V(c=>b.$emit("focus-tabset"),["up"])),v[2]||(v[2]=V(oe(c=>b.$emit("focus-emoji-selector"),["prevent"]),["down"])),v[3]||(v[3]=V(c=>b.$emit("select-first-emoji"),["enter"]))]},je({leftIcon:B(()=>[N(Z,{name:"search"})]),_:2},[l.modelValue.length>0?{name:"rightIcon",fn:B(()=>[$("button",{class:"d-emoji-picker__search-button",onClick:u,onKeydown:V(u,["enter"])},[N(Z,{name:"close"})],40,Ee)]),key:"0"}:void 0]),1032,["placeholder","model-value"])]))}},De=U(ne,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]]);ne.__docgenInfo={exportName:"default",displayName:"emoji_search",description:"",tags:{},expose:[{name:"focusSearchInput"}],props:[{name:"searchPlaceholderLabel",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"focus-tabset"},{name:"focus-emoji-selector"},{name:"select-first-emoji"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]};const Ie={class:"d-emoji-picker__tabset"},le={__name:"emoji_tabset",props:{showRecentlyUsedTab:{type:Boolean,default:!1},scrollIntoTab:{type:Number,required:!0},isScrolling:{type:Boolean,default:!1},emojiFilter:{type:String,default:""},tabsetLabels:{type:Array,required:!0}},emits:["selected-tabset","focus-search-input"],setup(l,{expose:f,emit:m}){const s=l,u=[{label:"Recently used",icon:"clock"},{label:"Smiley’s and people",icon:"satisfied"},{label:"Nature",icon:"living-thing"},{label:"Food",icon:"food"},{label:"Activity",icon:"object"},{label:"Travel",icon:"transportation"},{label:"Objects",icon:"lightbulb"},{label:"Symbols",icon:"heart"},{label:"Flags",icon:"flag"}],y=O(()=>(s.showRecentlyUsedTab?u:u.slice(1)).map((t,n)=>({...t,label:s.tabsetLabels[n],id:(n+1).toString(),panelId:(n+1).toString()}))),b=O(()=>s.emojiFilter.length>0),v=g("1"),{isScrolling:c}=Se(s),I=g([]);K(()=>s.scrollIntoTab,()=>{!c.value&&!b.value&&(v.value=(s.scrollIntoTab+1).toString())}),K(b,()=>{b.value&&(v.value=null)});function q(e){c.value||(v.value=e),m("selected-tabset",e)}function d(e){I.value.push(e.$el)}function F(){I.value[0].focus()}function h(e,t){e.key==="Enter"&&(q(t),I.value[t-1].blur()),e.key==="Tab"&&(e.preventDefault(),m("focus-search-input")),e.key==="ArrowDown"&&m("focus-search-input")}return f({focusTabset:F}),(e,t)=>(S(),_("div",Ie,[N(Le,{"tab-list-class":"d-emoji-picker__tabset-list",selected:v.value},{tabs:B(()=>[(S(!0),_(P,null,M(w(y),(n,T)=>(S(),_e(Re,{id:n.id,ref_for:!0,ref:k=>{k&&d(k)},key:n.id,"panel-id":n.panelId,label:n.label,"aria-controls":"d-emoji-picker-list",tabindex:T+1,onClickCapture:oe(k=>q(n.id),["stop"]),onKeydown:k=>h(k,n.id)},{default:B(()=>[N(Z,{size:"400",name:n.icon},null,8,["name"])]),_:2},1032,["id","panel-id","label","tabindex","onClickCapture","onKeydown"]))),128))]),_:1},8,["selected"])]))}},Ae=U(le,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]]);le.__docgenInfo={exportName:"default",displayName:"emoji_tabset",description:"",tags:{},expose:[{name:"focusTabset"}],props:[{name:"showRecentlyUsedTab",description:"Whether to show the recently used tab or not",tags:{type:[{title:"type",type:{name:"Boolean"}}],default:[{description:"false",title:"default"}]},type:{name:"Boolean"},defaultValue:{func:!1,value:"false"}},{name:"scrollIntoTab",type:{name:"number"},required:!0},{name:"isScrolling",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emojiFilter",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tabsetLabels",description:"The labels for the aria-label",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0}],events:[{name:"selected-tabset",description:"Emitted when a tab is selected",properties:[{type:{names:["String"]},name:"tabId",description:"The name of the tab that was selected"}],tags:[{title:"param",type:{name:"String"},name:"tabId",description:"The name of the tab that was selected"}]},{name:"focus-search-input"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]};const H="https://static.dialpadcdn.com/joypixels/png/unicode/32/",R=9;function Ne(l){const f=g([]),m=g([]),s=g(!1),u=g(!0);function y(e,t=!1){u.value=t,l("highlighted-emoji",e)}function b(e,t,n){f.value[t]||(f.value[t]=[]),f.value[t][n]=e}function v(e,t){m.value[t]=e}function c(e,t){var T,k,C;const n=s.value?(T=m.value)==null?void 0:T[t]:(C=(k=f.value)==null?void 0:k[e])==null?void 0:C[t];return n?(n.focus(),!0):!1}function I(e,t){c(e,t-1)||(f.value[e-1]?c(e-1,f.value[e-1].length-1):c(f.value.length-1,f.value[f.value.length-1].length-1))}function q(e,t){c(e,t+1)||c(e+1,0)||c(0,0)}function d(e,t){c(0,t-1)||c(0,m.value.length-1)}function F(e,t){c(0,t+1)||c(0,0)}function h(e,t,n){s.value?e==="left"?d(t,n):e==="right"&&F(t,n):e==="left"?I(t,n):e==="right"&&q(t,n)}return{emojiRefs:f,emojiFilteredRefs:m,isFiltering:s,hoverFirstEmoji:u,setEmojiRef:b,setFilteredRef:v,hoverEmoji:y,focusEmoji:c,handleHorizontalNavigation:h}}const Ce={class:"d-emoji-picker__selector"},Ve={key:0,class:"d-emoji-picker__search-label d-emoji-picker__alignment"},Ke={key:0},Oe={class:"d-emoji-picker__tab"},Be=["aria-label","onClick","onFocusin","onMouseover","onKeydown"],Ue=["alt","aria-label","title","src"],Pe={key:2,class:"d-emoji-picker__alignment"},Me={class:"d-emoji-picker__tab","data-qa":"filtered-emojis"},ze=["aria-label","onClick","onFocusin","onMouseover","onKeydown"],He=["alt","aria-label","title","src"],ae={__name:"emoji_selector",props:{emojiFilter:{type:String,default:""},skinTone:{type:String,required:!0},tabsetLabels:{type:Array,required:!0},selectedTabset:{type:Object,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},recentlyUsedEmojis:{type:Array,default:()=>[]}},emits:["highlighted-emoji","selected-emoji","scroll-into-tab","is-scrolling","focus-skin-selector","focus-search-input"],setup(l,{expose:f,emit:m}){const s=l,{emojiRefs:u,emojiFilteredRefs:y,isFiltering:b,hoverFirstEmoji:v,setEmojiRef:c,setFilteredRef:I,hoverEmoji:q,focusEmoji:d,handleHorizontalNavigation:F}=Ne(m),h=g(null),e=g(null),t=g(null),n=["Recently used","People","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],T=O(()=>s.recentlyUsedEmojis.length?s.tabsetLabels.map(o=>({label:o,ref:g(null)})):s.tabsetLabels.slice(1).map(o=>({label:o,ref:g(null)}))),k=g(T.value[0].label),C=O(()=>s.recentlyUsedEmojis.length?n:n.slice(1)),W=g([]),x=O(()=>[...D[`People${s.skinTone}`],...D.Nature,...D.Food,...D[`Activity${s.skinTone}`],...D.Travel,...D[`Objects${s.skinTone}`],...D.Symbols,...D.Flags]),de=me(()=>{y.value=[],ee()});K(x,()=>{ee()},{immediate:!0}),K(()=>s.recentlyUsedEmojis,()=>{D["Recently used"]=s.recentlyUsedEmojis},{immediate:!0}),K(()=>s.emojiFilter,()=>{he(),s.emojiFilter?b.value=!0:(b.value=!1,m("highlighted-emoji",null)),de()}),K(()=>s.selectedTabset,o=>{J(o.tabId)},{deep:!0});function ee(){const o=s.emojiFilter.toLowerCase();W.value=x.value.filter(i=>{const r=i.name.toLowerCase().includes(o),p=i.keywords.some(a=>a.toLowerCase().includes(o));return r||p}),G(()=>{o&&q(W.value[0],!0)})}function me(o,i=300){let r;return(...p)=>{clearTimeout(r),r=setTimeout(()=>o(...p),i)}}function pe(o){return`${H+o}.png`}function fe(o){o.target.parentNode.style.display="none"}function J(o,i=!0){const p=T.value[o-1].ref.value[0];G(()=>{const a=e.value,L=o==="1"?0:p.offsetTop-20;let j=!0,A=a.scrollTop;m("is-scrolling",!0),a.addEventListener("scroll",()=>{if(j){const E=a.scrollTop;(A<E&&E>=L||A>E&&E<=L)&&(j=!1,m("is-scrolling",!1)),A=E}}),a.scrollTop=L,i&&d(o-1,0)})}function he(){const o=e.value;o.scrollTop=0}function ye(){t.value=new IntersectionObserver(o=>{o.forEach(i=>{var a,L,j,A,E;const{target:r}=i,p=parseInt(r.dataset.index);i.isIntersecting&&r.offsetTop<=h.value.offsetTop+50?(k.value=((a=T.value[p-1])==null?void 0:a.label)??((L=T.value[0])==null?void 0:L.label),m("scroll-into-tab",p-1)):i.boundingClientRect.bottom<=((j=h.value)==null?void 0:j.getBoundingClientRect().bottom)?(m("scroll-into-tab",p),k.value=(A=T.value[p])==null?void 0:A.label):p===1&&(m("scroll-into-tab",p),k.value=(E=T.value[0])==null?void 0:E.label)})}),t.value.observe(h.value),Array.from(e.value.children).forEach((o,i)=>{t.value.observe(o),o.dataset.index=i})}const ve=(o,i,r)=>{var p;if(o.preventDefault(),v.value=!1,o.key==="ArrowUp"){const a=i%R;if(!d(0,i-R)){const L=y.value.length-y.value.length%R+a;d(0,L),d(0,L)||d(0,y.value.length-1)}}if(o.key==="ArrowDown"&&!d(0,i+R)){const a=i%R;(p=y.value)!=null&&p[i+(R-a)]?d(0,y.value.length-1):d(0,a)}o.key==="ArrowLeft"&&F("left",0,i),o.key==="ArrowRight"&&F("right",0,i),o.key==="Tab"&&m("focus-skin-selector"),o.key==="Enter"&&m("selected-emoji",r)},be=(o,i,r,p)=>{var a,L;if(o.preventDefault(),o.key==="ArrowUp"){const j=r%R;if(i===0){const A=R-u.value[u.value.length-1].length%R,E=u.value[u.value.length-1].length+A-(R-j);d(u.value.length-1,E)||d(u.value.length-1,u.value[u.value.length-1].length-1);return}if(!d(i,r-R)){const A=i-1<0?0:i-1,E=u.value[A].length,ke=E-E%R+j;d(A,ke)||d(i-1,u.value[i-1].length-1)}}if(o.key==="ArrowDown"&&!d(i,r+R)){const j=r%R;(L=(a=u.value)==null?void 0:a[i])!=null&&L[r+(R-j)]?d(i,u.value[i].length-1):d(i+1,j)||d(0,j)||d(0,u.value[0].length-1)}o.key==="ArrowLeft"&&F("left",i,r),o.key==="ArrowRight"&&F("right",i,r),o.key==="Tab"&&(d(i+1,0)?J(i+1+1,!1):m("focus-skin-selector")),o.key==="Tab"&&o.shiftKey&&(d(i,0)&&i>0?J(i,!0):(J(1,!1),m("focus-search-input"))),o.key==="Enter"&&m("selected-emoji",p)};function ge(){d(0,0)}return te(()=>{ye()}),we(()=>{t.value.disconnect()}),f({focusEmojiSelector:ge}),(o,i)=>(S(),_("div",Ce,[$("div",{id:"d-emoji-picker-list",ref_key:"listRef",ref:e,class:"d-emoji-picker__list"},[l.emojiFilter?(S(),_("p",Ve,z(W.value.length>0?l.searchResultsLabel:l.searchNoResultsLabel),1)):(S(),_("div",{key:1,ref_key:"tabCategoryRef",ref:h,class:"d-emoji-picker__category d-emoji-picker__alignment"},[$("p",null,z(k.value),1)],512)),(S(!0),_(P,null,M(w(T),(r,p)=>Q((S(),_("div",{key:p,ref_for:!0,ref:r.ref,class:"d-emoji-picker__alignment"},[p?(S(),_("p",Ke,z(r.label),1)):Y("v-if",!0),$("div",Oe,[(S(!0),_(P,null,M(w(D)[w(C)[p]+l.skinTone]?w(D)[w(C)[p]+l.skinTone]:w(D)[w(C)[p]],(a,L)=>(S(),_("button",{key:a.shortname,ref_for:!0,ref:j=>{j&&w(c)(j,p,L)},type:"button","aria-label":a.name,onClick:j=>o.$emit("selected-emoji",a),onFocusin:j=>o.$emit("highlighted-emoji",a),onFocusout:i[0]||(i[0]=j=>o.$emit("highlighted-emoji",null)),onMouseover:j=>o.$emit("highlighted-emoji",a),onMouseleave:i[1]||(i[1]=j=>o.$emit("highlighted-emoji",null)),onKeydown:j=>be(j,p,L,a)},[$("img",{class:"d-icon d-icon--size-500",alt:a.name,"aria-label":a.name,title:a.name,src:pe(a.unicode_character),onError:fe},null,40,Ue)],40,Be))),128))])])),[[X,!l.emojiFilter]])),128)),l.emojiFilter?(S(),_("div",Pe,[$("div",Me,[(S(!0),_(P,null,M(W.value,(r,p)=>(S(),_("button",{key:r.shortname,ref_for:!0,ref:a=>{a&&w(I)(a,p)},type:"button","aria-label":r.name,class:ie({"hover-emoji":p===0&&w(v)}),onClick:a=>o.$emit("selected-emoji",r),onFocusin:a=>o.$emit("highlighted-emoji",r),onFocusout:i[2]||(i[2]=a=>o.$emit("highlighted-emoji",null)),onMouseover:a=>w(q)(r),onMouseleave:i[3]||(i[3]=a=>w(q)(null)),onKeydown:a=>ve(a,p,r)},[$("img",{class:"d-icon d-icon--size-500",alt:r.name,"aria-label":r.name,title:r.name,src:`${w(H)+r.unicode_character}.png`},null,8,He)],42,ze))),128))])])):Y("v-if",!0)],512)]))}},We=U(ae,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]]);ae.__docgenInfo={exportName:"default",displayName:"emoji_selector",description:"",tags:{},expose:[{name:"focusEmojiSelector"}],props:[{name:"emojiFilter",description:"The filter to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"''",title:"default"}]},type:{name:"String"},defaultValue:{func:!1,value:"''"}},{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"tabsetLabels",description:"The labels for the tabset",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0},{name:"selectedTabset",type:{name:"object"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",type:{name:"string"},required:!0},{name:"recentlyUsedEmojis",description:"The list of recently used emojis",tags:{type:[{title:"type",type:{name:"Array"}}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"selected-emoji",description:"Emitted when the user select an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was selected"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was selected"}]},{name:"highlighted-emoji",description:"Emitted when the user hover over an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was hovered"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was hovered"}]},{name:"scroll-into-tab",description:"Emitted when the user scroll into an emoji tab",properties:[{type:{names:["Number"]},name:"tab-index",description:"The tab that was scrolled into"}],tags:[{title:"param",type:{name:"Number"},name:"tab-index",description:"The tab that was scrolled into"}]},{name:"is-scrolling",description:"Emitted when the scrollTo function starts scrolling and stops scrolling",properties:[{type:{names:["Boolean"]},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}],tags:[{title:"param",type:{name:"Boolean"},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}]},{name:"focus-skin-selector",description:"Emitted when the user reach the end of the emoji list"},{name:"focus-search-input",description:"Emitted when the user shift tab in first tab of emoji selector"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]};const Je={"data-qa":"skin-selector"},Ge={class:"d-emoji-picker__skin-list"},Qe=["onKeydown","onClick"],Xe=["alt","aria-label","title","src"],Ye={class:"d-emoji-picker__skin-selected"},Ze=["aria-label"],xe=["alt","aria-label","title","src"],re={__name:"emoji_skin_selector",props:{skinTone:{type:String,required:!0},isHovering:{type:Boolean,default:!1},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["skin-tone","focus-tabset"],setup(l,{expose:f,emit:m}){const s=l,u=[{name:":wave_tone1:",unicode_output:"1f44b-1f3fb",skinTone:"Light",skinCode:"_tone1"},{name:":wave_tone2:",unicode_output:"1f44b-1f3fc",skinTone:"MediumLight",skinCode:"_tone2"},{name:":wave_tone3:",unicode_output:"1f44b-1f3fd",skinTone:"Medium",skinCode:"_tone3"},{name:":wave_tone4:",unicode_output:"1f44b-1f3fe",skinTone:"MediumDark",skinCode:"_tone4"},{name:":wave_tone5:",unicode_output:"1f44b-1f3ff",skinTone:"Dark",skinCode:"_tone5"},{name:":wave:",unicode_output:"1f44b",skinTone:"Default",skinCode:""}],y=g(u.find(e=>e.skinTone===s.skinTone)),b=g(!1),v=g(null),c=g([]);Te(()=>s.isHovering&&(b.value=!1));function I(e){c.value.push(e)}function q(){v.value.focus()}function d(e){y.value=e,b.value=!1,m("skin-tone",e.skinTone),G(()=>q())}const F=(e,t,n)=>{var T,k,C;e.preventDefault(),e.key==="ArrowLeft"&&(n===0&&((T=c.value[c.value.length-1])==null||T.focus()),(k=c.value[n-1])==null||k.focus()),e.key==="ArrowRight"&&((C=c.value[n+1])==null||C.focus()),e.key==="Enter"&&(t?d(t):h()),e.key==="Tab"&&m("focus-tabset")};function h(){b.value=!b.value,G(()=>c.value[0].focus())}return f({focusSkinSelector:q}),(e,t)=>(S(),_("div",Je,[Q($("div",Ge,[(S(),_(P,null,M(u,(n,T)=>$("button",{ref_for:!0,ref:k=>{k&&I(k)},key:n.name,class:ie({selected:y.value.skinCode===n.skinCode}),onKeydown:k=>F(k,n,T),onClick:k=>d(n)},[$("img",{class:"d-icon d-icon--size-500",alt:n.name,"aria-label":n.name,title:n.name,src:`${w(H)+n.unicode_output}.png`},null,8,Xe)],42,Qe)),64))],512),[[X,b.value]]),Q($("div",Ye,[N(qe,{placement:"top-end"},{anchor:B(()=>[$("button",{ref_key:"skinSelectorRef",ref:v,"aria-label":l.skinSelectorButtonTooltipLabel,tabindex:"-1",onClick:h,onKeydown:t[0]||(t[0]=n=>F(n))},[$("img",{class:"d-icon d-icon--size-500",alt:y.value.name,"aria-label":y.value.name,title:y.value.name,src:`${w(H)+y.value.unicode_output}.png`},null,8,xe)],40,Ze)]),default:B(()=>[se(z(l.skinSelectorButtonTooltipLabel)+" ",1)]),_:1})],512),[[X,!b.value]])]))}},et=U(re,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]]);re.__docgenInfo={exportName:"default",displayName:"emoji_skin_selector",description:"",tags:{},expose:[{name:"focusSkinSelector"}],props:[{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"isHovering",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"skinSelectorButtonTooltipLabel",type:{name:"string"},required:!0}],events:[{name:"skin-tone",description:"The skin tone that was selected",type:{names:["Number"]}},{name:"focus-tabset"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]};const tt={class:"d-emoji-picker__data"},ot=["alt","aria-label","title","src"],ue={__name:"emoji_description",props:{emoji:{type:Object,default:null}},setup(l){return(f,m)=>{var s;return S(),_("div",tt,[l.emoji?(S(),_("img",{key:0,class:"d-icon d-icon--size-500",alt:l.emoji.name,"aria-label":l.emoji.name,title:l.emoji.name,src:`${w(H)+l.emoji.unicode_character}.png`},null,8,ot)):Y("v-if",!0),se(" "+z((s=l.emoji)==null?void 0:s.name),1)])}}},it=U(ue,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]]);ue.__docgenInfo={exportName:"default",displayName:"emoji_description",description:"",tags:{},props:[{name:"emoji",description:"Emoji data",tags:{type:[{title:"type",type:{name:"Object"}}],default:[{description:"null",title:"default"}]},type:{name:"Object"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]};const st={class:"d-emoji-picker"},nt={class:"d-emoji-picker--header"},lt={class:"d-emoji-picker--body"},at={class:"d-emoji-picker--footer"},ce={__name:"DtEmojiPicker",props:{recentlyUsedEmojis:{type:Array,default:()=>[]},searchPlaceholderLabel:{type:String,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},tabSetLabels:{type:Array,required:!0},skinTone:{type:String,default:"Default"},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["selected-emoji","skin-tone","close"],setup(l,{emit:f}){const m=l,s=g(""),u=g(null),y=g({}),b=g(0),v=g(!1),c=O(()=>m.recentlyUsedEmojis.length>0);function I(h){s.value="",y.value=h,y.value={...y.value,tabId:h}}function q(h){b.value=h}function d(h){v.value=h}function F(h){u.value=h}return(h,e)=>(S(),_("div",st,[$("div",nt,[N(Ae,{ref:"tabsetRef","emoji-filter":s.value,"show-recently-used-tab":w(c),"scroll-into-tab":b.value,"tabset-labels":l.tabSetLabels,"is-scrolling":v.value,onFocusSearchInput:e[0]||(e[0]=t=>h.$refs.searchInputRef.focusSearchInput()),onSelectedTabset:I,onKeydown:e[1]||(e[1]=V(t=>f("close"),["esc"]))},null,8,["emoji-filter","show-recently-used-tab","scroll-into-tab","tabset-labels","is-scrolling"])]),$("div",lt,[N(De,{ref:"searchInputRef",modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value=t),"search-placeholder-label":l.searchPlaceholderLabel,onSelectFirstEmoji:e[3]||(e[3]=t=>f("selected-emoji",u.value)),onFocusTabset:e[4]||(e[4]=t=>h.$refs.tabsetRef.focusTabset()),onFocusEmojiSelector:e[5]||(e[5]=t=>h.$refs.emojiSelectorRef.focusEmojiSelector()),onKeydown:e[6]||(e[6]=V(t=>f("close"),["esc"]))},null,8,["modelValue","search-placeholder-label"]),N(We,{ref:"emojiSelectorRef","emoji-filter":s.value,"skin-tone":l.skinTone,"tabset-labels":l.tabSetLabels,"search-results-label":l.searchResultsLabel,"search-no-results-label":l.searchNoResultsLabel,"recently-used-emojis":l.recentlyUsedEmojis,"selected-tabset":y.value,onScrollIntoTab:q,onIsScrolling:d,onHighlightedEmoji:F,onSelectedEmoji:e[7]||(e[7]=t=>f("selected-emoji",t)),onFocusSkinSelector:e[8]||(e[8]=t=>h.$refs.skinSelectorRef.focusSkinSelector()),onFocusSearchInput:e[9]||(e[9]=t=>h.$refs.searchInputRef.focusSearchInput()),onKeydown:e[10]||(e[10]=V(t=>f("close"),["esc"]))},null,8,["emoji-filter","skin-tone","tabset-labels","search-results-label","search-no-results-label","recently-used-emojis","selected-tabset"])]),$("div",at,[N(it,{emoji:u.value},null,8,["emoji"]),N(et,{ref:"skinSelectorRef","is-hovering":!!u.value,"skin-selector-button-tooltip-label":l.skinSelectorButtonTooltipLabel,"skin-tone":l.skinTone,onSkinTone:e[11]||(e[11]=t=>f("skin-tone",t)),onFocusTabset:e[12]||(e[12]=t=>h.$refs.tabsetRef.focusTabset()),onKeydown:e[13]||(e[13]=V(t=>f("close"),["esc"]))},null,8,["is-hovering","skin-selector-button-tooltip-label","skin-tone"])])]))}},yt=U(ce,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/DtEmojiPicker.vue"]]);ce.__docgenInfo={exportName:"default",displayName:"DtEmojiPicker",description:"",tags:{},props:[{name:"recentlyUsedEmojis",description:`The array with recently used  emoji object
This list is necessary to fill the recently used tab`,tags:{type:[{title:"type",type:{name:"Array"}}],default:[{description:"[]",title:"default"}],example:[{description:'<dt-emoji-picker :recentlyUsedEmojis="[emojiObject, emojiObject]" />',title:"example"}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}},{name:"searchPlaceholderLabel",description:"The placeholder text for the search input",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchPlaceholderLabel="'Search...'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchResultsLabel="'Search results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",description:"The label for the search no results",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchNoResultsLabel="'No results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"tabSetLabels",description:`The list of tabsets to show, it is necessary to be updated with the correct language
It must respect the provided order.`,tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker
 :tabSetLabels="['Most recently used', 'Smileys and people', 'Nature',
   'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']" />`,title:"example"}]},type:{name:"Array"},required:!0},{name:"skinTone",description:`The skin tone to show the emojis
This prop gives the possibility to use the skin tone selected by the user previously`,tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"'Default'",title:"default"}],example:[{description:`<dt-emoji-picker :skinTone="'Default'" />`,title:"example"}]},values:["'Default'","'Light'","'MediumLight'","'Medium'","'MediumDark'","'Dark'"],type:{name:"String"},defaultValue:{func:!1,value:"'Default'"}},{name:"skinSelectorButtonTooltipLabel",description:"Tooltip shown when skin selector button is hovered.",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :skin-selector-button-tooltip-label="'Change default skin tone'" />`,title:"example"}]},type:{name:"String"},required:!0}],events:[{name:"selected-emoji",description:"It will emit the selected emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The selected emoji from the emoji selector"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The selected emoji from the emoji selector"}]},{name:"skin-tone",description:"It will emit the selected skin tone",properties:[{type:{names:["String"]},name:"skin",description:"The selected skin tone from the skin selector"}],tags:[{title:"param",type:{name:"String"},name:"skin",description:"The selected skin tone from the skin selector"}]},{name:"close",description:"Since the keyboard events are encapsulated, we emit this event to close the picker"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/DtEmojiPicker.vue"]};export{yt as D};
//# sourceMappingURL=DtEmojiPicker-e45e450f.js.map