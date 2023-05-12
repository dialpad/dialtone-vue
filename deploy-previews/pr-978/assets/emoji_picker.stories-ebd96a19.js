import{a as H}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as de}from"./storybook_utils-0a6e313e.js";import{o as s,e as p,d as T,z as me,w as F,f,I,J as b,K as pe,L as N,F as R,u as A,b as Q,A as he,M as y,N as be,O as fe,P as _e,t as V,x as B,y as M,j as U,Q as ye,n as ve,s as J}from"./vue.esm-bundler-a6507c57.js";import{D as ge}from"./input-15dc898d.js";import{D as P}from"./icon-986e0145.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{D as ke}from"./tab_group-5ac33c9d.js";import{D as je}from"./tab-1c02dc96.js";import{a as k}from"./index-40c4ee4c.js";import{D as Te}from"./tooltip-3c7cabab.js";const Se={class:"d-emoji-picker__search d-emoji-picker__alignment"},we={class:"d-emoji-picker__search-button"},X={__name:"emoji_search",props:{searchPlaceholderLabel:{type:String,required:!0},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e){return(r,t)=>(s(),p("div",Se,[T(ge,{placeholder:e.searchPlaceholderLabel,"model-value":e.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>r.$emit("update:modelValue",a))},me({leftIcon:F(()=>[T(P,{name:"search"})]),_:2},[e.modelValue.length>0?{name:"rightIcon",fn:F(()=>[f("button",we,[T(P,{name:"close",onClick:t[0]||(t[0]=a=>r.$emit("update:modelValue",""))})])]),key:"0"}:void 0]),1032,["placeholder","model-value"])]))}},Le=E(X,[["__scopeId","data-v-2a36ac5a"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]]);X.__docgenInfo={exportName:"default",displayName:"emoji_search",description:"",tags:{},props:[{name:"searchPlaceholderLabel",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_search.vue"]};const $e={class:"d-emoji-picker__tabset"},Y={__name:"emoji_tabset",props:{showRecentlyUsedTab:{type:Boolean,default:!1},scrollIntoTab:{type:Number,required:!0},isScrolling:{type:Boolean,default:!1},emojiFilter:{type:String,default:""},tabsetLabels:{type:Array,required:!0}},emits:["selected-tabset"],setup(e,{emit:r}){const t=e,a=[{label:"Recently used",icon:"clock"},{label:"Smiley’s and people",icon:"satisfied"},{label:"Nature",icon:"living-thing"},{label:"Food",icon:"food"},{label:"Activity",icon:"object"},{label:"Travel",icon:"transportation"},{label:"Objects",icon:"lightbulb"},{label:"Symbols",icon:"heart"},{label:"Flags",icon:"flag"}],c=I(()=>(t.showRecentlyUsedTab?a:a.slice(1)).map((w,_)=>({...w,label:t.tabsetLabels[_],id:(_+1).toString(),panelId:(_+1).toString()}))),u=I(()=>t.emojiFilter.length>0),v=b("1"),{isScrolling:d}=pe(t);N(()=>t.scrollIntoTab,()=>{!d.value&&!u.value&&(v.value=(t.scrollIntoTab+1).toString())}),N(u,()=>{u.value&&(v.value=null)});function j(m){d.value||(v.value=m),r("selected-tabset",m)}return(m,w)=>(s(),p("div",$e,[T(ke,{"tab-list-class":"d-emoji-picker__tabset-list",selected:v.value},{tabs:F(()=>[(s(!0),p(R,null,A(y(c),_=>(s(),Q(je,{id:_.id,key:_.id,"panel-id":_.panelId,label:_.label,"aria-controls":"d-emoji-picker-list",onClickCapture:he(x=>j(_.id),["stop"])},{default:F(()=>[T(P,{size:"400",name:_.icon},null,8,["name"])]),_:2},1032,["id","panel-id","label","onClickCapture"]))),128))]),_:1},8,["selected"])]))}},qe=E(Y,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]]);Y.__docgenInfo={exportName:"default",displayName:"emoji_tabset",description:"",tags:{},props:[{name:"showRecentlyUsedTab",description:"Whether to show the recently used tab or not",tags:{type:[{title:"type",type:{name:"Boolean"}}],default:[{description:"false",title:"default"}]},type:{name:"Boolean"},defaultValue:{func:!1,value:"false"}},{name:"scrollIntoTab",type:{name:"number"},required:!0},{name:"isScrolling",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emojiFilter",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tabsetLabels",description:"The labels for the aria-label",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0}],events:[{name:"selected-tabset",description:"Emitted when a tab is selected",properties:[{type:{names:["String"]},name:"tabId",description:"The name of the tab that was selected"}],tags:[{title:"param",type:{name:"String"},name:"tabId",description:"The name of the tab that was selected"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_tabset.vue"]};const O="https://static.dialpadcdn.com/joypixels/png/unicode/32/";const Ee={class:"d-emoji-picker__selector"},De={key:0,class:"d-emoji-picker__search-label d-emoji-picker__alignment"},Ne={key:0},Ie={class:"d-emoji-picker__tab"},Fe=["aria-label","onClick","onFocusin","onMouseover"],Ce=["alt","aria-label","title","src"],Re={key:2,class:"d-emoji-picker__alignment"},Ae={class:"d-emoji-picker__tab"},Ve=["aria-label","onClick","onFocusin","onMouseover"],Oe=["alt","aria-label","title","src"],Z={__name:"emoji_selector",props:{emojiFilter:{type:String,default:""},skinTone:{type:String,required:!0},tabsetLabels:{type:Array,required:!0},selectedTabset:{type:Object,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},recentlyUsedEmojis:{type:Array,default:()=>[]}},emits:["highlighted-emoji","selected-emoji","scroll-into-tab","is-scrolling"],setup(e,{emit:r}){const t=e,a=b(null),c=b(null),u=b(null),v=["Recently used","People","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],d=I(()=>t.recentlyUsedEmojis.length?t.tabsetLabels.map(o=>({label:o,ref:b(null)})):t.tabsetLabels.slice(1).map(o=>({label:o,ref:b(null)}))),j=b(d.value[0].label),m=I(()=>t.recentlyUsedEmojis.length?v:v.slice(1)),w=b([]),_=I(()=>[...k[`People${t.skinTone}`],...k.Nature,...k.Food,...k[`Activity${t.skinTone}`],...k.Travel,...k[`Objects${t.skinTone}`],...k.Symbols,...k.Flags]),x=L(()=>{g()});N(_,()=>{g()},{immediate:!0}),N(()=>t.recentlyUsedEmojis,()=>{k["Recently used"]=t.recentlyUsedEmojis},{immediate:!0}),N(()=>t.emojiFilter,()=>{ce(),x()}),N(()=>t.selectedTabset,o=>{re(o.tabId)},{deep:!0});function g(){const o=t.emojiFilter.toLowerCase();w.value=_.value.filter(l=>{const n=l.name.toLowerCase().includes(o),i=l.keywords.some(h=>h.toLowerCase().includes(o));return n||i})}function L(o,l=300){let n;return(...i)=>{clearTimeout(n),n=setTimeout(()=>o(...i),l)}}function q(o){return`${O+o}.png`}function le(o){o.target.parentNode.style.display="none"}function re(o){const n=d.value[o-1].ref.value[0];be(()=>{const i=c.value,h=o==="1"?0:n.offsetTop-20;let S=!0,D=i.scrollTop;r("is-scrolling",!0),i.addEventListener("scroll",()=>{if(S){const $=i.scrollTop;(D<$&&$>=h||D>$&&$<=h)&&(S=!1,r("is-scrolling",!1)),D=$}}),i.scrollTop=h})}function ce(){const o=c.value;o.scrollTop=0}function ue(){u.value=new IntersectionObserver(o=>{o.forEach(l=>{var h,S,D,$,z;const{target:n}=l,i=parseInt(n.dataset.index);l.isIntersecting&&n.offsetTop<=a.value.offsetTop+50?(j.value=((h=d.value[i-1])==null?void 0:h.label)??((S=d.value[0])==null?void 0:S.label),r("scroll-into-tab",i-1)):l.boundingClientRect.bottom<=((D=a.value)==null?void 0:D.getBoundingClientRect().bottom)?(r("scroll-into-tab",i),j.value=($=d.value[i])==null?void 0:$.label):i===1&&(r("scroll-into-tab",i),j.value=(z=d.value[0])==null?void 0:z.label)})}),u.value.observe(a.value),Array.from(c.value.children).forEach((o,l)=>{u.value.observe(o),o.dataset.index=l})}return fe(()=>{ue()}),_e(()=>{u.value.disconnect()}),(o,l)=>(s(),p("div",Ee,[f("div",{id:"d-emoji-picker-list",ref_key:"listRef",ref:c,class:"d-emoji-picker__list"},[e.emojiFilter?(s(),p("p",De,V(w.value.length>0?e.searchResultsLabel:e.searchNoResultsLabel),1)):(s(),p("div",{key:1,ref_key:"tabCategoryRef",ref:a,class:"d-emoji-picker__category d-emoji-picker__alignment"},[f("p",null,V(j.value),1)],512)),(s(!0),p(R,null,A(y(d),(n,i)=>B((s(),p("div",{key:i,ref_for:!0,ref:n.ref,class:"d-emoji-picker__alignment"},[i?(s(),p("p",Ne,V(n.label),1)):U("v-if",!0),f("div",Ie,[(s(!0),p(R,null,A(y(k)[y(m)[i]+e.skinTone]?y(k)[y(m)[i]+e.skinTone]:y(k)[y(m)[i]],h=>(s(),p("button",{key:h.shortname,type:"button","aria-label":h.name,onClick:S=>o.$emit("selected-emoji",h),onFocusin:S=>o.$emit("highlighted-emoji",h),onFocusout:l[0]||(l[0]=S=>o.$emit("highlighted-emoji",null)),onMouseover:S=>o.$emit("highlighted-emoji",h),onMouseleave:l[1]||(l[1]=S=>o.$emit("highlighted-emoji",null))},[f("img",{class:"d-icon d-icon--size-500",alt:h.name,"aria-label":h.name,title:h.name,src:q(h.unicode_character),onError:le},null,40,Ce)],40,Fe))),128))])])),[[M,!e.emojiFilter]])),128)),e.emojiFilter?(s(),p("div",Re,[f("div",Ae,[(s(!0),p(R,null,A(w.value,n=>(s(),p("button",{key:n.shortname,type:"button","aria-label":n.name,onClick:i=>o.$emit("selected-emoji",n),onFocusin:i=>o.$emit("highlighted-emoji",n),onFocusout:l[2]||(l[2]=i=>o.$emit("highlighted-emoji",null)),onMouseover:i=>o.$emit("highlighted-emoji",n),onMouseleave:l[3]||(l[3]=i=>o.$emit("highlighted-emoji",null))},[f("img",{class:"d-icon d-icon--size-500",alt:n.name,"aria-label":n.name,title:n.name,src:`${y(O)+n.unicode_character}.png`},null,8,Oe)],40,Ve))),128))])])):U("v-if",!0)],512)]))}},xe=E(Z,[["__scopeId","data-v-956ad05e"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]]);Z.__docgenInfo={exportName:"default",displayName:"emoji_selector",description:"",tags:{},props:[{name:"emojiFilter",description:"The filter to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"''",title:"default"}]},type:{name:"String"},defaultValue:{func:!1,value:"''"}},{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"tabsetLabels",description:"The labels for the tabset",tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}]},type:{name:"Array"},required:!0},{name:"selectedTabset",type:{name:"object"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",type:{name:"string"},required:!0},{name:"recentlyUsedEmojis",description:"The list of recently used emojis",tags:{type:[{title:"type",type:{name:"Array"}}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"selected-emoji",description:"Emitted when the user select an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was selected"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was selected"}]},{name:"highlighted-emoji",description:"Emitted when the user hover over an emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The emoji data that was hovered"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The emoji data that was hovered"}]},{name:"scroll-into-tab",description:"Emitted when the user scroll into an emoji tab",properties:[{type:{names:["Number"]},name:"tab-index",description:"The tab that was scrolled into"}],tags:[{title:"param",type:{name:"Number"},name:"tab-index",description:"The tab that was scrolled into"}]},{name:"is-scrolling",description:"Emitted when the scrollTo function starts scrolling and stops scrolling",properties:[{type:{names:["Boolean"]},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}],tags:[{title:"param",type:{name:"Boolean"},name:"is-scrolling",description:"Whether the user is scrolling with the scroll-to"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_selector.vue"]};const Be={class:"d-emoji-picker__skin-list"},Me=["onClick"],Ue=["alt","aria-label","title","src"],Pe={class:"d-emoji-picker__skin-selected"},ze=["alt","aria-label","title","src"],ee={__name:"emoji_skin_selector",props:{skinTone:{type:String,required:!0},isHovering:{type:Boolean,default:!1},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["skin-tone"],setup(e,{emit:r}){const t=e,a=[{name:":wave_tone1:",unicode_output:"1f44b-1f3fb",skinTone:"Light",skinCode:"_tone1"},{name:":wave_tone2:",unicode_output:"1f44b-1f3fc",skinTone:"MediumLight",skinCode:"_tone2"},{name:":wave_tone3:",unicode_output:"1f44b-1f3fd",skinTone:"Medium",skinCode:"_tone3"},{name:":wave_tone4:",unicode_output:"1f44b-1f3fe",skinTone:"MediumDark",skinCode:"_tone4"},{name:":wave_tone5:",unicode_output:"1f44b-1f3ff",skinTone:"Dark",skinCode:"_tone5"},{name:":wave:",unicode_output:"1f44b",skinTone:"Default",skinCode:""}],c=b(a.find(d=>d.skinTone===t.skinTone)),u=b(!1);ye(()=>t.isHovering&&(u.value=!1));function v(d){c.value=d,u.value=!1,r("skin-tone",d.skinTone)}return(d,j)=>(s(),p("div",null,[B(f("div",Be,[(s(),p(R,null,A(a,m=>f("button",{key:m.name,class:ve({selected:c.value.skinCode===m.skinCode}),onClick:w=>v(m)},[f("img",{class:"d-icon d-icon--size-500",alt:m.name,"aria-label":m.name,title:m.name,src:`${y(O)+m.unicode_output}.png`},null,8,Ue)],10,Me)),64))],512),[[M,u.value]]),B(f("div",Pe,[T(Te,{placement:"top-end"},{anchor:F(()=>[f("button",{onClick:j[0]||(j[0]=m=>u.value=!0)},[f("img",{class:"d-icon d-icon--size-500",alt:c.value.name,"aria-label":c.value.name,title:c.value.name,src:`${y(O)+c.value.unicode_output}.png`},null,8,ze)])]),default:F(()=>[J(V(e.skinSelectorButtonTooltipLabel)+" ",1)]),_:1})],512),[[M,!u.value]])]))}},He=E(ee,[["__scopeId","data-v-05df9544"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]]);ee.__docgenInfo={exportName:"default",displayName:"emoji_skin_selector",description:"",tags:{},props:[{name:"skinTone",description:"The skin tone to apply to the emoji list",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}]},type:{name:"String"},required:!0},{name:"isHovering",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"skinSelectorButtonTooltipLabel",type:{name:"string"},required:!0}],events:[{name:"skin-tone",description:"The skin tone that was selected",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_skin_selector.vue"]};const We={class:"d-emoji-picker__data"},Ge=["alt","aria-label","title","src"],te={__name:"emoji_description",props:{emoji:{type:Object,default:null}},setup(e){return(r,t)=>{var a;return s(),p("div",We,[e.emoji?(s(),p("img",{key:0,class:"d-icon d-icon--size-500",alt:e.emoji.name,"aria-label":e.emoji.name,title:e.emoji.name,src:`${y(O)+e.emoji.unicode_character}.png`},null,8,Ge)):U("v-if",!0),J(" "+V((a=e.emoji)==null?void 0:a.name),1)])}}},Ke=E(te,[["__scopeId","data-v-74c93d63"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]]);te.__docgenInfo={exportName:"default",displayName:"emoji_description",description:"",tags:{},props:[{name:"emoji",description:"Emoji data",tags:{type:[{title:"type",type:{name:"Object"}}],default:[{description:"null",title:"default"}]},type:{name:"Object"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/modules/emoji_description.vue"]};const Qe={class:"d-emoji-picker"},Je={class:"d-emoji-picker--header"},Xe={class:"d-emoji-picker--body"},Ye={class:"d-emoji-picker--footer"},oe={__name:"emoji_picker",props:{recentlyUsedEmojis:{type:Array,default:()=>[]},searchPlaceholderLabel:{type:String,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},tabSetLabels:{type:Array,required:!0},skinTone:{type:String,default:"Default"},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["selected-emoji","skin-tone"],setup(e,{emit:r}){const t=e,a=b(""),c=b(null),u=b({}),v=b(0),d=b(!1),j=I(()=>t.recentlyUsedEmojis.length>0);function m(g){a.value="",u.value=g,u.value={...u.value,tabId:g}}function w(g){v.value=g}function _(g){d.value=g}function x(g){c.value=g}return(g,L)=>(s(),p("div",Qe,[f("div",Je,[T(qe,{"emoji-filter":a.value,"show-recently-used-tab":y(j),"scroll-into-tab":v.value,"tabset-labels":e.tabSetLabels,"is-scrolling":d.value,onSelectedTabset:m},null,8,["emoji-filter","show-recently-used-tab","scroll-into-tab","tabset-labels","is-scrolling"])]),f("div",Xe,[T(Le,{modelValue:a.value,"onUpdate:modelValue":L[0]||(L[0]=q=>a.value=q),"search-placeholder-label":e.searchPlaceholderLabel},null,8,["modelValue","search-placeholder-label"]),T(xe,{"emoji-filter":a.value,"skin-tone":e.skinTone,"tabset-labels":e.tabSetLabels,"search-results-label":e.searchResultsLabel,"search-no-results-label":e.searchNoResultsLabel,"recently-used-emojis":e.recentlyUsedEmojis,"selected-tabset":u.value,onScrollIntoTab:w,onIsScrolling:_,onHighlightedEmoji:x,onSelectedEmoji:L[1]||(L[1]=q=>r("selected-emoji",q))},null,8,["emoji-filter","skin-tone","tabset-labels","search-results-label","search-no-results-label","recently-used-emojis","selected-tabset"])]),f("div",Ye,[T(Ke,{emoji:c.value},null,8,["emoji"]),T(He,{"is-hovering":!!c.value,"skin-selector-button-tooltip-label":e.skinSelectorButtonTooltipLabel,"skin-tone":e.skinTone,onSkinTone:L[2]||(L[2]=q=>r("skin-tone",q))},null,8,["is-hovering","skin-selector-button-tooltip-label","skin-tone"])])]))}},ie=E(oe,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker.vue"]]);oe.__docgenInfo={exportName:"default",displayName:"emoji_picker",description:"",tags:{},props:[{name:"recentlyUsedEmojis",description:`The array with recently used  emoji object
This list is necessary to fill the recently used tab`,tags:{type:[{title:"type",type:{name:"Array"}}],default:[{description:"[]",title:"default"}],example:[{description:'<dt-emoji-picker :recentlyUsedEmojis="[emojiObject, emojiObject]" />',title:"example"}]},type:{name:"Array"},defaultValue:{func:!1,value:"[]"}},{name:"searchPlaceholderLabel",description:"The placeholder text for the search input",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchPlaceholderLabel="'Search...'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchResultsLabel",description:"The label for the search results tab",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchResultsLabel="'Search results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"searchNoResultsLabel",description:"The label for the search no results",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :searchNoResultsLabel="'No results'" />`,title:"example"}]},type:{name:"String"},required:!0},{name:"tabSetLabels",description:`The list of tabsets to show, it is necessary to be updated with the correct language
It must respect the provided order.`,tags:{type:[{title:"type",type:{name:"Array"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker
 :tabSetLabels="['Most recently used', 'Smileys and people', 'Nature',
   'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']" />`,title:"example"}]},type:{name:"Array"},required:!0},{name:"skinTone",description:`The skin tone to show the emojis
This prop gives the possibility to use the skin tone selected by the user previously`,tags:{type:[{title:"type",type:{name:"String"}}],default:[{description:"'Default'",title:"default"}],example:[{description:`<dt-emoji-picker :skinTone="'Default'" />`,title:"example"}]},values:["'Default'","'Light'","'MediumLight'","'Medium'","'MediumDark'","'Dark'"],type:{name:"String"},defaultValue:{func:!1,value:"'Default'"}},{name:"skinSelectorButtonTooltipLabel",description:"Tooltip shown when skin selector button is hovered.",tags:{type:[{title:"type",type:{name:"String"}}],required:[{description:!0,title:"required"}],example:[{description:`<dt-emoji-picker :skin-selector-button-tooltip-label="'Change default skin tone'" />`,title:"example"}]},type:{name:"String"},required:!0}],events:[{name:"selected-emoji",description:"It will emit the selected emoji",properties:[{type:{names:["Object"]},name:"emoji",description:"The selected emoji from the emoji selector"}],tags:[{title:"param",type:{name:"Object"},name:"emoji",description:"The selected emoji from the emoji selector"}]},{name:"skin-tone",description:"It will emit the selected skin tone",properties:[{type:{names:["String"]},name:"skin",description:"The selected skin tone from the skin selector"}],tags:[{title:"param",type:{name:"String"},name:"skin",description:"The selected skin tone from the skin selector"}]}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker.vue"]};const ae={__name:"emoji_picker_default.story",setup(e){const r=b("Light");return(t,a)=>(s(),Q(ie,{"skin-tone":r.value,"skin-selector-button-tooltip-label":t.$attrs.skinSelectorButtonTooltipLabel,"tab-set-labels":t.$attrs.tabSetLabels,"recently-used-emojis":t.$attrs.recentlyUsedEmojis,"search-results-label":t.$attrs.searchResultsLabel,"search-no-results-label":t.$attrs.searchNoResultsLabel,"search-placeholder-label":t.$attrs.searchPlaceholderLabel,onSkinTone:a[0]||(a[0]=c=>r.value=c),onSelectedEmoji:t.$attrs.selectedEmoji},null,8,["skin-tone","skin-selector-button-tooltip-label","tab-set-labels","recently-used-emojis","search-results-label","search-no-results-label","search-placeholder-label","onSelectedEmoji"]))}},Ze=E(ae,[["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_default.story.vue"]]);ae.__docgenInfo={exportName:"default",displayName:"emoji_picker_default.story",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/emoji_picker/emoji_picker_default.story.vue"]};const et=[{name:"thumbs up",category:"people",shortname:":thumbsup:",shortname_alternates:[":+1:",":thumbup:"],keywords:["+1","hand","thumb","up","uc6"],unicode_output:"1f44d",unicode_character:"1f44d"},{name:"thumbs up: medium-light skin tone",category:"people",shortname:":thumbsup_tone2:",shortname_alternates:[":+1_tone2:",":thumbup_tone2:"],keywords:["+1","hand","medium-light skin tone","thumb","up","uc8"],unicode_output:"1f44d-1f3fc",unicode_character:"1f44d-1f3fc"},{name:"thumbs up: dark skin tone",category:"people",shortname:":thumbsup_tone5:",shortname_alternates:[":+1_tone5:",":thumbup_tone5:"],keywords:["+1","dark skin tone","hand","thumb","up","uc8"],unicode_output:"1f44d-1f3ff",unicode_character:"1f44d-1f3ff"},{name:"person: light skin tone",category:"people",shortname:":adult_tone1:",shortname_alternates:[":adult_light_skin_tone:"],keywords:["gender-neutral","light skin tone","uc10"],unicode_output:"1f9d1-1f3fb",unicode_character:"1f9d1-1f3fb"},{name:"woman with veil: dark skin tone",category:"people",shortname:":woman_with_veil_tone5:",shortname_alternates:[":woman_with_veil_dark_skin_tone:"],keywords:["uc13"],unicode_output:"1f470-1f3ff-200d-2640-fe0f",unicode_character:"1f470-1f3ff-2640"}],ne={onSkinTone:H("skin-tone"),onSelectedEmoji:H("selected-emoji"),tabSetLabels:["Most recently used","Smileys and people","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],skinTone:"Light",recentlyUsedEmojis:et,skinSelectorButtonTooltipLabel:"Change default skin tone",searchNoResultsLabel:"No results",searchResultsLabel:"Search results",searchPlaceholderLabel:"Search..."},se={skinTone:{options:["Default","Light","MediumLight","Medium","MediumDark","Dark"],control:"select"},onSkinTone:{table:{disable:!0}},onSelectedEmoji:{table:{disable:!0}}},tt={title:"Components/Emoji Picker",component:ie,args:ne,argTypes:se,excludeStories:/.*Data$/,parameters:{a11y:{disable:!0}}},ot=e=>de(e,Ze),C={render:ot,args:{}};var W,G,K;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {}
}`,...(K=(G=C.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const it=["argsData","argTypesData","Default"],ht=Object.freeze(Object.defineProperty({__proto__:null,Default:C,__namedExportsOrder:it,argTypesData:se,argsData:ne,default:tt},Symbol.toStringTag,{value:"Module"}));export{C as D,ht as E};
//# sourceMappingURL=emoji_picker.stories-ebd96a19.js.map
