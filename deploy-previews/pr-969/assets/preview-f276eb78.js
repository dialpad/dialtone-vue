import{_ as S}from"./iframe-6406cbec.js";import{s as p}from"./index-d475d2ea.js";import"../sb-preview/runtime.js";var o="storybook/a11y",N=`${o}/result`,T=`${o}/request`,f=`${o}/running`,w=`${o}/error`,y=`${o}/manual`,a={RESULT:N,REQUEST:T,RUNNING:f,ERROR:w,MANUAL:y};const{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:d,window:g}=p,r=U.getChannel(),n=!1,l,A=async t=>{let{manual:e}=await u(t);e||await _(t)},_=async t=>{l=t;try{let e=await u(t);if(!n){n=!0,r.emit(a.RUNNING);let i=(await S(()=>import("./axe-065a2762.js").then(O=>O.a),["./axe-065a2762.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url)).default,{element:s="#storybook-root",config:m,options:E={}}=e,R=d.querySelector(s);if(!R)return;i.reset(),m&&i.configure(m);let c=await i.run(R,E);l===t?r.emit(a.RESULT,c):(n=!1,_(l))}}catch(e){r.emit(a.ERROR,e)}finally{n=!1}},u=async t=>{let{parameters:e}=await g.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,_);
//# sourceMappingURL=preview-f276eb78.js.map
