import{_ as S}from"./iframe-e6a86fbc.js";import"../sb-preview/runtime.js";var n="storybook/a11y",T=`${n}/result`,N=`${n}/request`,U=`${n}/running`,w=`${n}/error`,y=`${n}/manual`,a={RESULT:T,REQUEST:N,RUNNING:U,ERROR:w,MANUAL:y};const{global:L}=__STORYBOOK_MODULE_GLOBAL__,{addons:d}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:f,window:g}=L,r=d.getChannel(),o=!1,_,p=async t=>{let{manual:e}=await E(t);e||await l(t)},l=async t=>{_=t;try{let e=await E(t);if(!o){o=!0,r.emit(a.RUNNING);let i=(await S(()=>import("./axe-115644bd.js").then(s=>s.a),["./axe-115644bd.js","./_commonjsHelpers-725317a4.js"],import.meta.url)).default,{element:O="#storybook-root",config:R,options:m={}}=e,u=f.querySelector(O);if(!u)return;i.reset(),R&&i.configure(R);let c=await i.run(u,m);_===t?r.emit(a.RESULT,c):(o=!1,l(_))}}catch(e){r.emit(a.ERROR,e)}finally{o=!1}},E=async t=>{let{parameters:e}=await g.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,p);r.on(a.MANUAL,l);
//# sourceMappingURL=preview-1b5e784f.js.map
