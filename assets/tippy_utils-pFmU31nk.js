var N="top",z="bottom",X="right",H="left",mt="auto",Ve=[N,z,X,H],Ee="start",Ie="end",dr="clippingParents",Ft="viewport",Me="popper",vr="reference",At=Ve.reduce(function(e,t){return e.concat([t+"-"+Ee,t+"-"+Ie])},[]),qt=[].concat(Ve,[mt]).reduce(function(e,t){return e.concat([t,t+"-"+Ee,t+"-"+Ie])},[]),mr="beforeRead",hr="read",gr="afterRead",yr="beforeMain",br="main",wr="afterMain",Or="beforeWrite",xr="write",Er="afterWrite",Ar=[mr,hr,gr,yr,br,wr,Or,xr,Er];function te(e){return e?(e.nodeName||"").toLowerCase():null}function F(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function Y(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ht(e){if(typeof ShadowRoot>"u")return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Tr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},s=t.elements[r];!Y(s)||!te(s)||(Object.assign(s.style,n),Object.keys(o).forEach(function(f){var c=o[f];c===!1?s.removeAttribute(f):s.setAttribute(f,c===!0?"":c)}))})}function Dr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],s=t.attributes[n]||{},f=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),c=f.reduce(function(u,l){return u[l]="",u},{});!Y(o)||!te(o)||(Object.assign(o.style,c),Object.keys(s).forEach(function(u){o.removeAttribute(u)}))})}}const Yt={name:"applyStyles",enabled:!0,phase:"write",fn:Tr,effect:Dr,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var me=Math.max,tt=Math.min,Ae=Math.round;function pt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function zt(){return!/^((?!chrome|android).)*safari/i.test(pt())}function Te(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,s=1;t&&Y(e)&&(o=e.offsetWidth>0&&Ae(n.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Ae(n.height)/e.offsetHeight||1);var f=he(e)?F(e):window,c=f.visualViewport,u=!zt()&&r,l=(n.left+(u&&c?c.offsetLeft:0))/o,p=(n.top+(u&&c?c.offsetTop:0))/s,b=n.width/o,x=n.height/s;return{width:b,height:x,top:p,right:l+b,bottom:p+x,left:l,x:l,y:p}}function gt(e){var t=Te(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Xt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ht(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ae(e){return F(e).getComputedStyle(e)}function Cr(e){return["table","td","th"].indexOf(te(e))>=0}function fe(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return te(e)==="html"?e:e.assignedSlot||e.parentNode||(ht(e)?e.host:null)||fe(e)}function Tt(e){return!Y(e)||ae(e).position==="fixed"?null:e.offsetParent}function Lr(e){var t=/firefox/i.test(pt()),r=/Trident/i.test(pt());if(r&&Y(e)){var n=ae(e);if(n.position==="fixed")return null}var o=nt(e);for(ht(o)&&(o=o.host);Y(o)&&["html","body"].indexOf(te(o))<0;){var s=ae(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function Ne(e){for(var t=F(e),r=Tt(e);r&&Cr(r)&&ae(r).position==="static";)r=Tt(r);return r&&(te(r)==="html"||te(r)==="body"&&ae(r).position==="static")?t:r||Lr(e)||t}function yt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Be(e,t,r){return me(e,tt(t,r))}function Sr(e,t,r){var n=Be(e,t,r);return n>r?r:n}function _t(){return{top:0,right:0,bottom:0,left:0}}function Kt(e){return Object.assign({},_t(),e)}function Gt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Rr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Kt(typeof t!="number"?t:Gt(t,Ve))};function Pr(e){var t,r=e.state,n=e.name,o=e.options,s=r.elements.arrow,f=r.modifiersData.popperOffsets,c=ee(r.placement),u=yt(c),l=[H,X].indexOf(c)>=0,p=l?"height":"width";if(!(!s||!f)){var b=Rr(o.padding,r),x=gt(s),h=u==="y"?N:H,w=u==="y"?z:X,g=r.rects.reference[p]+r.rects.reference[u]-f[u]-r.rects.popper[p],y=f[u]-r.rects.reference[u],A=Ne(s),D=A?u==="y"?A.clientHeight||0:A.clientWidth||0:0,L=g/2-y/2,i=b[h],E=D-x[p]-b[w],v=D/2-x[p]/2+L,C=Be(i,v,E),B=u;r.modifiersData[n]=(t={},t[B]=C,t.centerOffset=C-v,t)}}function Mr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Xt(t.elements.popper,o)&&(t.elements.arrow=o))}const Br={name:"arrow",enabled:!0,phase:"main",fn:Pr,effect:Mr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function De(e){return e.split("-")[1]}var jr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $r(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:Ae(r*o)/o||0,y:Ae(n*o)/o||0}}function Dt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,s=e.variation,f=e.offsets,c=e.position,u=e.gpuAcceleration,l=e.adaptive,p=e.roundOffsets,b=e.isFixed,x=f.x,h=x===void 0?0:x,w=f.y,g=w===void 0?0:w,y=typeof p=="function"?p({x:h,y:g}):{x:h,y:g};h=y.x,g=y.y;var A=f.hasOwnProperty("x"),D=f.hasOwnProperty("y"),L=H,i=N,E=window;if(l){var v=Ne(r),C="clientHeight",B="clientWidth";if(v===F(r)&&(v=fe(r),ae(v).position!=="static"&&c==="absolute"&&(C="scrollHeight",B="scrollWidth")),v=v,o===N||(o===H||o===X)&&s===Ie){i=z;var M=b&&v===E&&E.visualViewport?E.visualViewport.height:v[C];g-=M-n.height,g*=u?1:-1}if(o===H||(o===N||o===z)&&s===Ie){L=X;var R=b&&v===E&&E.visualViewport?E.visualViewport.width:v[B];h-=R-n.width,h*=u?1:-1}}var j=Object.assign({position:c},l&&jr),P=p===!0?$r({x:h,y:g},F(r)):{x:h,y:g};if(h=P.x,g=P.y,u){var S;return Object.assign({},j,(S={},S[i]=D?"0":"",S[L]=A?"0":"",S.transform=(E.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",S))}return Object.assign({},j,(t={},t[i]=D?g+"px":"",t[L]=A?h+"px":"",t.transform="",t))}function Ir(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,s=r.adaptive,f=s===void 0?!0:s,c=r.roundOffsets,u=c===void 0?!0:c,l={placement:ee(t.placement),variation:De(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Dt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Dt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const kr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ir,data:{}};var Qe={passive:!0};function Vr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,s=o===void 0?!0:o,f=n.resize,c=f===void 0?!0:f,u=F(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach(function(p){p.addEventListener("scroll",r.update,Qe)}),c&&u.addEventListener("resize",r.update,Qe),function(){s&&l.forEach(function(p){p.removeEventListener("scroll",r.update,Qe)}),c&&u.removeEventListener("resize",r.update,Qe)}}const Nr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vr,data:{}};var Hr={left:"right",right:"left",bottom:"top",top:"bottom"};function et(e){return e.replace(/left|right|bottom|top/g,function(t){return Hr[t]})}var Wr={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return Wr[t]})}function bt(e){var t=F(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function wt(e){return Te(fe(e)).left+bt(e).scrollLeft}function Ur(e,t){var r=F(e),n=fe(e),o=r.visualViewport,s=n.clientWidth,f=n.clientHeight,c=0,u=0;if(o){s=o.width,f=o.height;var l=zt();(l||!l&&t==="fixed")&&(c=o.offsetLeft,u=o.offsetTop)}return{width:s,height:f,x:c+wt(e),y:u}}function Fr(e){var t,r=fe(e),n=bt(e),o=(t=e.ownerDocument)==null?void 0:t.body,s=me(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=me(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+wt(e),u=-n.scrollTop;return ae(o||r).direction==="rtl"&&(c+=me(r.clientWidth,o?o.clientWidth:0)-s),{width:s,height:f,x:c,y:u}}function Ot(e){var t=ae(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Jt(e){return["html","body","#document"].indexOf(te(e))>=0?e.ownerDocument.body:Y(e)&&Ot(e)?e:Jt(nt(e))}function je(e,t){var r;t===void 0&&(t=[]);var n=Jt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),s=F(n),f=o?[s].concat(s.visualViewport||[],Ot(n)?n:[]):n,c=t.concat(f);return o?c:c.concat(je(nt(f)))}function lt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function qr(e,t){var r=Te(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Lt(e,t,r){return t===Ft?lt(Ur(e,r)):he(t)?qr(t,r):lt(Fr(fe(e)))}function Yr(e){var t=je(nt(e)),r=["absolute","fixed"].indexOf(ae(e).position)>=0,n=r&&Y(e)?Ne(e):e;return he(n)?t.filter(function(o){return he(o)&&Xt(o,n)&&te(o)!=="body"}):[]}function zr(e,t,r,n){var o=t==="clippingParents"?Yr(e):[].concat(t),s=[].concat(o,[r]),f=s[0],c=s.reduce(function(u,l){var p=Lt(e,l,n);return u.top=me(p.top,u.top),u.right=tt(p.right,u.right),u.bottom=tt(p.bottom,u.bottom),u.left=me(p.left,u.left),u},Lt(e,f,n));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function Qt(e){var t=e.reference,r=e.element,n=e.placement,o=n?ee(n):null,s=n?De(n):null,f=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,u;switch(o){case N:u={x:f,y:t.y-r.height};break;case z:u={x:f,y:t.y+t.height};break;case X:u={x:t.x+t.width,y:c};break;case H:u={x:t.x-r.width,y:c};break;default:u={x:t.x,y:t.y}}var l=o?yt(o):null;if(l!=null){var p=l==="y"?"height":"width";switch(s){case Ee:u[l]=u[l]-(t[p]/2-r[p]/2);break;case Ie:u[l]=u[l]+(t[p]/2-r[p]/2);break}}return u}function ke(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,s=r.strategy,f=s===void 0?e.strategy:s,c=r.boundary,u=c===void 0?dr:c,l=r.rootBoundary,p=l===void 0?Ft:l,b=r.elementContext,x=b===void 0?Me:b,h=r.altBoundary,w=h===void 0?!1:h,g=r.padding,y=g===void 0?0:g,A=Kt(typeof y!="number"?y:Gt(y,Ve)),D=x===Me?vr:Me,L=e.rects.popper,i=e.elements[w?D:x],E=zr(he(i)?i:i.contextElement||fe(e.elements.popper),u,p,f),v=Te(e.elements.reference),C=Qt({reference:v,element:L,strategy:"absolute",placement:o}),B=lt(Object.assign({},L,C)),M=x===Me?B:v,R={top:E.top-M.top+A.top,bottom:M.bottom-E.bottom+A.bottom,left:E.left-M.left+A.left,right:M.right-E.right+A.right},j=e.modifiersData.offset;if(x===Me&&j){var P=j[o];Object.keys(R).forEach(function(S){var W=[X,z].indexOf(S)>=0?1:-1,U=[N,z].indexOf(S)>=0?"y":"x";R[S]+=P[U]*W})}return R}function Xr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,s=r.rootBoundary,f=r.padding,c=r.flipVariations,u=r.allowedAutoPlacements,l=u===void 0?qt:u,p=De(n),b=p?c?At:At.filter(function(w){return De(w)===p}):Ve,x=b.filter(function(w){return l.indexOf(w)>=0});x.length===0&&(x=b);var h=x.reduce(function(w,g){return w[g]=ke(e,{placement:g,boundary:o,rootBoundary:s,padding:f})[ee(g)],w},{});return Object.keys(h).sort(function(w,g){return h[w]-h[g]})}function _r(e){if(ee(e)===mt)return[];var t=et(e);return[Ct(e),t,Ct(t)]}function Kr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,s=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!0:f,u=r.fallbackPlacements,l=r.padding,p=r.boundary,b=r.rootBoundary,x=r.altBoundary,h=r.flipVariations,w=h===void 0?!0:h,g=r.allowedAutoPlacements,y=t.options.placement,A=ee(y),D=A===y,L=u||(D||!w?[et(y)]:_r(y)),i=[y].concat(L).reduce(function(re,_){return re.concat(ee(_)===mt?Xr(t,{placement:_,boundary:p,rootBoundary:b,padding:l,flipVariations:w,allowedAutoPlacements:g}):_)},[]),E=t.rects.reference,v=t.rects.popper,C=new Map,B=!0,M=i[0],R=0;R<i.length;R++){var j=i[R],P=ee(j),S=De(j)===Ee,W=[N,z].indexOf(P)>=0,U=W?"width":"height",I=ke(t,{placement:j,boundary:p,rootBoundary:b,altBoundary:x,padding:l}),k=W?S?X:H:S?z:N;E[U]>v[U]&&(k=et(k));var $=et(k),G=[];if(s&&G.push(I[P]<=0),c&&G.push(I[k]<=0,I[$]<=0),G.every(function(re){return re})){M=j,B=!1;break}C.set(j,G)}if(B)for(var J=w?3:1,ce=function(_){var ne=i.find(function(ge){var ie=C.get(ge);if(ie)return ie.slice(0,_).every(function(ye){return ye})});if(ne)return M=ne,"break"},Q=J;Q>0;Q--){var pe=ce(Q);if(pe==="break")break}t.placement!==M&&(t.modifiersData[n]._skip=!0,t.placement=M,t.reset=!0)}}const Gr={name:"flip",enabled:!0,phase:"main",fn:Kr,requiresIfExists:["offset"],data:{_skip:!1}};function St(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Rt(e){return[N,X,z,H].some(function(t){return e[t]>=0})}function Jr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,s=t.modifiersData.preventOverflow,f=ke(t,{elementContext:"reference"}),c=ke(t,{altBoundary:!0}),u=St(f,n),l=St(c,o,s),p=Rt(u),b=Rt(l);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:b},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":b})}const Qr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Jr};function Zr(e,t,r){var n=ee(e),o=[H,N].indexOf(n)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=s[0],c=s[1];return f=f||0,c=(c||0)*o,[H,X].indexOf(n)>=0?{x:c,y:f}:{x:f,y:c}}function en(e){var t=e.state,r=e.options,n=e.name,o=r.offset,s=o===void 0?[0,0]:o,f=qt.reduce(function(p,b){return p[b]=Zr(b,t.rects,s),p},{}),c=f[t.placement],u=c.x,l=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=f}const tn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:en};function rn(e){var t=e.state,r=e.name;t.modifiersData[r]=Qt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const nn={name:"popperOffsets",enabled:!0,phase:"read",fn:rn,data:{}};function on(e){return e==="x"?"y":"x"}function an(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,s=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!1:f,u=r.boundary,l=r.rootBoundary,p=r.altBoundary,b=r.padding,x=r.tether,h=x===void 0?!0:x,w=r.tetherOffset,g=w===void 0?0:w,y=ke(t,{boundary:u,rootBoundary:l,padding:b,altBoundary:p}),A=ee(t.placement),D=De(t.placement),L=!D,i=yt(A),E=on(i),v=t.modifiersData.popperOffsets,C=t.rects.reference,B=t.rects.popper,M=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,R=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(v){if(s){var S,W=i==="y"?N:H,U=i==="y"?z:X,I=i==="y"?"height":"width",k=v[i],$=k+y[W],G=k-y[U],J=h?-B[I]/2:0,ce=D===Ee?C[I]:B[I],Q=D===Ee?-B[I]:-C[I],pe=t.elements.arrow,re=h&&pe?gt(pe):{width:0,height:0},_=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:_t(),ne=_[W],ge=_[U],ie=Be(0,C[I],re[I]),ye=L?C[I]/2-J-ie-ne-R.mainAxis:ce-ie-ne-R.mainAxis,se=L?-C[I]/2+J+ie+ge+R.mainAxis:Q+ie+ge+R.mainAxis,be=t.elements.arrow&&Ne(t.elements.arrow),We=be?i==="y"?be.clientTop||0:be.clientLeft||0:0,Ce=(S=j==null?void 0:j[i])!=null?S:0,Ue=k+ye-Ce-We,Fe=k+se-Ce,Le=Be(h?tt($,Ue):$,k,h?me(G,Fe):G);v[i]=Le,P[i]=Le-k}if(c){var Se,qe=i==="x"?N:H,Ye=i==="x"?z:X,oe=v[E],ue=E==="y"?"height":"width",Re=oe+y[qe],le=oe-y[Ye],Pe=[N,H].indexOf(A)!==-1,ze=(Se=j==null?void 0:j[E])!=null?Se:0,Xe=Pe?Re:oe-C[ue]-B[ue]-ze+R.altAxis,_e=Pe?oe+C[ue]+B[ue]-ze-R.altAxis:le,Ke=h&&Pe?Sr(Xe,oe,_e):Be(h?Xe:Re,oe,h?_e:le);v[E]=Ke,P[E]=Ke-oe}t.modifiersData[n]=P}}const sn={name:"preventOverflow",enabled:!0,phase:"main",fn:an,requiresIfExists:["offset"]};function un(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function fn(e){return e===F(e)||!Y(e)?bt(e):un(e)}function cn(e){var t=e.getBoundingClientRect(),r=Ae(t.width)/e.offsetWidth||1,n=Ae(t.height)/e.offsetHeight||1;return r!==1||n!==1}function pn(e,t,r){r===void 0&&(r=!1);var n=Y(t),o=Y(t)&&cn(t),s=fe(t),f=Te(e,o,r),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(n||!n&&!r)&&((te(t)!=="body"||Ot(s))&&(c=fn(t)),Y(t)?(u=Te(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=wt(s))),{x:f.left+c.scrollLeft-u.x,y:f.top+c.scrollTop-u.y,width:f.width,height:f.height}}function ln(e){var t=new Map,r=new Set,n=[];e.forEach(function(s){t.set(s.name,s)});function o(s){r.add(s.name);var f=[].concat(s.requires||[],s.requiresIfExists||[]);f.forEach(function(c){if(!r.has(c)){var u=t.get(c);u&&o(u)}}),n.push(s)}return e.forEach(function(s){r.has(s.name)||o(s)}),n}function dn(e){var t=ln(e);return Ar.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function vn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function mn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function Mt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function hn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,s=o===void 0?Pt:o;return function(c,u,l){l===void 0&&(l=s);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,s),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},b=[],x=!1,h={state:p,setOptions:function(A){var D=typeof A=="function"?A(p.options):A;g(),p.options=Object.assign({},s,p.options,D),p.scrollParents={reference:he(c)?je(c):c.contextElement?je(c.contextElement):[],popper:je(u)};var L=dn(mn([].concat(n,p.options.modifiers)));return p.orderedModifiers=L.filter(function(i){return i.enabled}),w(),h.update()},forceUpdate:function(){if(!x){var A=p.elements,D=A.reference,L=A.popper;if(Mt(D,L)){p.rects={reference:pn(D,Ne(L),p.options.strategy==="fixed"),popper:gt(L)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(R){return p.modifiersData[R.name]=Object.assign({},R.data)});for(var i=0;i<p.orderedModifiers.length;i++){if(p.reset===!0){p.reset=!1,i=-1;continue}var E=p.orderedModifiers[i],v=E.fn,C=E.options,B=C===void 0?{}:C,M=E.name;typeof v=="function"&&(p=v({state:p,options:B,name:M,instance:h})||p)}}}},update:vn(function(){return new Promise(function(y){h.forceUpdate(),y(p)})}),destroy:function(){g(),x=!0}};if(!Mt(c,u))return h;h.setOptions(l).then(function(y){!x&&l.onFirstUpdate&&l.onFirstUpdate(y)});function w(){p.orderedModifiers.forEach(function(y){var A=y.name,D=y.options,L=D===void 0?{}:D,i=y.effect;if(typeof i=="function"){var E=i({state:p,name:A,instance:h,options:L}),v=function(){};b.push(E||v)}})}function g(){b.forEach(function(y){return y()}),b=[]}return h}}var gn=[Nr,nn,kr,Yt,tn,Gr,sn,Br,Qr],yn=hn({defaultModifiers:gn}),bn="tippy-box",Zt="tippy-content",wn="tippy-backdrop",er="tippy-arrow",tr="tippy-svg-arrow",ve={passive:!0,capture:!0},rr=function(){return document.body};function st(e,t,r){if(Array.isArray(e)){var n=e[t];return n??(Array.isArray(r)?r[t]:r)}return e}function xt(e,t){var r={}.toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function nr(e,t){return typeof e=="function"?e.apply(void 0,t):e}function Bt(e,t){if(t===0)return e;var r;return function(n){clearTimeout(r),r=setTimeout(function(){e(n)},t)}}function On(e){return e.split(/\s+/).filter(Boolean)}function xe(e){return[].concat(e)}function jt(e,t){e.indexOf(t)===-1&&e.push(t)}function xn(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function En(e){return e.split("-")[0]}function rt(e){return[].slice.call(e)}function $t(e){return Object.keys(e).reduce(function(t,r){return e[r]!==void 0&&(t[r]=e[r]),t},{})}function $e(){return document.createElement("div")}function it(e){return["Element","Fragment"].some(function(t){return xt(e,t)})}function An(e){return xt(e,"NodeList")}function Tn(e){return xt(e,"MouseEvent")}function Dn(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Cn(e){return it(e)?[e]:An(e)?rt(e):Array.isArray(e)?e:rt(document.querySelectorAll(e))}function ut(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function It(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function Ln(e){var t,r=xe(e),n=r[0];return n!=null&&(t=n.ownerDocument)!=null&&t.body?n.ownerDocument:document}function Sn(e,t){var r=t.clientX,n=t.clientY;return e.every(function(o){var s=o.popperRect,f=o.popperState,c=o.props,u=c.interactiveBorder,l=En(f.placement),p=f.modifiersData.offset;if(!p)return!0;var b=l==="bottom"?p.top.y:0,x=l==="top"?p.bottom.y:0,h=l==="right"?p.left.x:0,w=l==="left"?p.right.x:0,g=s.top-n+b>u,y=n-s.bottom-x>u,A=s.left-r+h>u,D=r-s.right-w>u;return g||y||A||D})}function ft(e,t,r){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(o){e[n](o,r)})}function kt(e,t){for(var r=t;r;){var n;if(e.contains(r))return!0;r=r.getRootNode==null||(n=r.getRootNode())==null?void 0:n.host}return!1}var Z={isTouch:!1},Vt=0;function Rn(){Z.isTouch||(Z.isTouch=!0,window.performance&&document.addEventListener("mousemove",ir))}function ir(){var e=performance.now();e-Vt<20&&(Z.isTouch=!1,document.removeEventListener("mousemove",ir)),Vt=e}function Pn(){var e=document.activeElement;if(Dn(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function Mn(){document.addEventListener("touchstart",Rn,ve),window.addEventListener("blur",Pn)}var Bn=typeof window<"u"&&typeof document<"u",jn=Bn?!!window.msCrypto:!1,$n={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},In={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},K=Object.assign({appendTo:rr,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},$n,In),kn=Object.keys(K),Vn=function(t){var r=Object.keys(t);r.forEach(function(n){K[n]=t[n]})};function or(e){var t=e.plugins||[],r=t.reduce(function(n,o){var s=o.name,f=o.defaultValue;if(s){var c;n[s]=e[s]!==void 0?e[s]:(c=K[s])!=null?c:f}return n},{});return Object.assign({},e,r)}function Nn(e,t){var r=t?Object.keys(or(Object.assign({},K,{plugins:t}))):kn,n=r.reduce(function(o,s){var f=(e.getAttribute("data-tippy-"+s)||"").trim();if(!f)return o;if(s==="content")o[s]=f;else try{o[s]=JSON.parse(f)}catch{o[s]=f}return o},{});return n}function Nt(e,t){var r=Object.assign({},t,{content:nr(t.content,[e])},t.ignoreAttributes?{}:Nn(e,t.plugins));return r.aria=Object.assign({},K.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content},r}var Hn=function(){return"innerHTML"};function dt(e,t){e[Hn()]=t}function Ht(e){var t=$e();return e===!0?t.className=er:(t.className=tr,it(e)?t.appendChild(e):dt(t,e)),t}function Wt(e,t){it(t.content)?(dt(e,""),e.appendChild(t.content)):typeof t.content!="function"&&(t.allowHTML?dt(e,t.content):e.textContent=t.content)}function vt(e){var t=e.firstElementChild,r=rt(t.children);return{box:t,content:r.find(function(n){return n.classList.contains(Zt)}),arrow:r.find(function(n){return n.classList.contains(er)||n.classList.contains(tr)}),backdrop:r.find(function(n){return n.classList.contains(wn)})}}function ar(e){var t=$e(),r=$e();r.className=bn,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var n=$e();n.className=Zt,n.setAttribute("data-state","hidden"),Wt(n,e.props),t.appendChild(r),r.appendChild(n),o(e.props,e.props);function o(s,f){var c=vt(t),u=c.box,l=c.content,p=c.arrow;f.theme?u.setAttribute("data-theme",f.theme):u.removeAttribute("data-theme"),typeof f.animation=="string"?u.setAttribute("data-animation",f.animation):u.removeAttribute("data-animation"),f.inertia?u.setAttribute("data-inertia",""):u.removeAttribute("data-inertia"),u.style.maxWidth=typeof f.maxWidth=="number"?f.maxWidth+"px":f.maxWidth,f.role?u.setAttribute("role",f.role):u.removeAttribute("role"),(s.content!==f.content||s.allowHTML!==f.allowHTML)&&Wt(l,e.props),f.arrow?p?s.arrow!==f.arrow&&(u.removeChild(p),u.appendChild(Ht(f.arrow))):u.appendChild(Ht(f.arrow)):p&&u.removeChild(p)}return{popper:t,onUpdate:o}}ar.$$tippy=!0;var Wn=1,Ze=[],ct=[];function Un(e,t){var r=Nt(e,Object.assign({},K,or($t(t)))),n,o,s,f=!1,c=!1,u=!1,l=!1,p,b,x,h=[],w=Bt(Ue,r.interactiveDebounce),g,y=Wn++,A=null,D=xn(r.plugins),L={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},i={id:y,reference:e,popper:$e(),popperInstance:A,props:r,state:L,plugins:D,clearDelayTimeouts:Xe,setProps:_e,setContent:Ke,show:sr,hide:ur,hideWithInteractivity:fr,enable:Pe,disable:ze,unmount:cr,destroy:pr};if(!r.render)return i;var E=r.render(i),v=E.popper,C=E.onUpdate;v.setAttribute("data-tippy-root",""),v.id="tippy-"+i.id,i.popper=v,e._tippy=i,v._tippy=i;var B=D.map(function(a){return a.fn(i)}),M=e.hasAttribute("aria-expanded");return be(),J(),k(),$("onCreate",[i]),r.showOnCreate&&Re(),v.addEventListener("mouseenter",function(){i.props.interactive&&i.state.isVisible&&i.clearDelayTimeouts()}),v.addEventListener("mouseleave",function(){i.props.interactive&&i.props.trigger.indexOf("mouseenter")>=0&&W().addEventListener("mousemove",w)}),i;function R(){var a=i.props.touch;return Array.isArray(a)?a:[a,0]}function j(){return R()[0]==="hold"}function P(){var a;return!!((a=i.props.render)!=null&&a.$$tippy)}function S(){return g||e}function W(){var a=S().parentNode;return a?Ln(a):document}function U(){return vt(v)}function I(a){return i.state.isMounted&&!i.state.isVisible||Z.isTouch||p&&p.type==="focus"?0:st(i.props.delay,a?0:1,K.delay)}function k(a){a===void 0&&(a=!1),v.style.pointerEvents=i.props.interactive&&!a?"":"none",v.style.zIndex=""+i.props.zIndex}function $(a,d,m){if(m===void 0&&(m=!0),B.forEach(function(O){O[a]&&O[a].apply(O,d)}),m){var T;(T=i.props)[a].apply(T,d)}}function G(){var a=i.props.aria;if(a.content){var d="aria-"+a.content,m=v.id,T=xe(i.props.triggerTarget||e);T.forEach(function(O){var V=O.getAttribute(d);if(i.state.isVisible)O.setAttribute(d,V?V+" "+m:m);else{var q=V&&V.replace(m,"").trim();q?O.setAttribute(d,q):O.removeAttribute(d)}})}}function J(){if(!(M||!i.props.aria.expanded)){var a=xe(i.props.triggerTarget||e);a.forEach(function(d){i.props.interactive?d.setAttribute("aria-expanded",i.state.isVisible&&d===S()?"true":"false"):d.removeAttribute("aria-expanded")})}}function ce(){W().removeEventListener("mousemove",w),Ze=Ze.filter(function(a){return a!==w})}function Q(a){if(!(Z.isTouch&&(u||a.type==="mousedown"))){var d=a.composedPath&&a.composedPath()[0]||a.target;if(!(i.props.interactive&&kt(v,d))){if(xe(i.props.triggerTarget||e).some(function(m){return kt(m,d)})){if(Z.isTouch||i.state.isVisible&&i.props.trigger.indexOf("click")>=0)return}else $("onClickOutside",[i,a]);i.props.hideOnClick===!0&&(i.clearDelayTimeouts(),i.hide(),c=!0,setTimeout(function(){c=!1}),i.state.isMounted||ne())}}}function pe(){u=!0}function re(){u=!1}function _(){var a=W();a.addEventListener("mousedown",Q,!0),a.addEventListener("touchend",Q,ve),a.addEventListener("touchstart",re,ve),a.addEventListener("touchmove",pe,ve)}function ne(){var a=W();a.removeEventListener("mousedown",Q,!0),a.removeEventListener("touchend",Q,ve),a.removeEventListener("touchstart",re,ve),a.removeEventListener("touchmove",pe,ve)}function ge(a,d){ye(a,function(){!i.state.isVisible&&v.parentNode&&v.parentNode.contains(v)&&d()})}function ie(a,d){ye(a,d)}function ye(a,d){var m=U().box;function T(O){O.target===m&&(ft(m,"remove",T),d())}if(a===0)return d();ft(m,"remove",b),ft(m,"add",T),b=T}function se(a,d,m){m===void 0&&(m=!1);var T=xe(i.props.triggerTarget||e);T.forEach(function(O){O.addEventListener(a,d,m),h.push({node:O,eventType:a,handler:d,options:m})})}function be(){j()&&(se("touchstart",Ce,{passive:!0}),se("touchend",Fe,{passive:!0})),On(i.props.trigger).forEach(function(a){if(a!=="manual")switch(se(a,Ce),a){case"mouseenter":se("mouseleave",Fe);break;case"focus":se(jn?"focusout":"blur",Le);break;case"focusin":se("focusout",Le);break}})}function We(){h.forEach(function(a){var d=a.node,m=a.eventType,T=a.handler,O=a.options;d.removeEventListener(m,T,O)}),h=[]}function Ce(a){var d,m=!1;if(!(!i.state.isEnabled||Se(a)||c)){var T=((d=p)==null?void 0:d.type)==="focus";p=a,g=a.currentTarget,J(),!i.state.isVisible&&Tn(a)&&Ze.forEach(function(O){return O(a)}),a.type==="click"&&(i.props.trigger.indexOf("mouseenter")<0||f)&&i.props.hideOnClick!==!1&&i.state.isVisible?m=!0:Re(a),a.type==="click"&&(f=!m),m&&!T&&le(a)}}function Ue(a){var d=a.target,m=S().contains(d)||v.contains(d);if(!(a.type==="mousemove"&&m)){var T=ue().concat(v).map(function(O){var V,q=O._tippy,we=(V=q.popperInstance)==null?void 0:V.state;return we?{popperRect:O.getBoundingClientRect(),popperState:we,props:r}:null}).filter(Boolean);Sn(T,a)&&(ce(),le(a))}}function Fe(a){var d=Se(a)||i.props.trigger.indexOf("click")>=0&&f;if(!d){if(i.props.interactive){i.hideWithInteractivity(a);return}le(a)}}function Le(a){i.props.trigger.indexOf("focusin")<0&&a.target!==S()||i.props.interactive&&a.relatedTarget&&v.contains(a.relatedTarget)||le(a)}function Se(a){return Z.isTouch?j()!==a.type.indexOf("touch")>=0:!1}function qe(){Ye();var a=i.props,d=a.popperOptions,m=a.placement,T=a.offset,O=a.getReferenceClientRect,V=a.moveTransition,q=P()?vt(v).arrow:null,we=O?{getBoundingClientRect:O,contextElement:O.contextElement||S()}:e,Et={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(Ge){var Oe=Ge.state;if(P()){var lr=U(),at=lr.box;["placement","reference-hidden","escaped"].forEach(function(Je){Je==="placement"?at.setAttribute("data-placement",Oe.placement):Oe.attributes.popper["data-popper-"+Je]?at.setAttribute("data-"+Je,""):at.removeAttribute("data-"+Je)}),Oe.attributes.popper={}}}},de=[{name:"offset",options:{offset:T}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!V}},Et];P()&&q&&de.push({name:"arrow",options:{element:q,padding:3}}),de.push.apply(de,(d==null?void 0:d.modifiers)||[]),i.popperInstance=yn(we,v,Object.assign({},d,{placement:m,onFirstUpdate:x,modifiers:de}))}function Ye(){i.popperInstance&&(i.popperInstance.destroy(),i.popperInstance=null)}function oe(){var a=i.props.appendTo,d,m=S();i.props.interactive&&a===rr||a==="parent"?d=m.parentNode:d=nr(a,[m]),d.contains(v)||d.appendChild(v),i.state.isMounted=!0,qe()}function ue(){return rt(v.querySelectorAll("[data-tippy-root]"))}function Re(a){i.clearDelayTimeouts(),a&&$("onTrigger",[i,a]),_();var d=I(!0),m=R(),T=m[0],O=m[1];Z.isTouch&&T==="hold"&&O&&(d=O),d?n=setTimeout(function(){i.show()},d):i.show()}function le(a){if(i.clearDelayTimeouts(),$("onUntrigger",[i,a]),!i.state.isVisible){ne();return}if(!(i.props.trigger.indexOf("mouseenter")>=0&&i.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(a.type)>=0&&f)){var d=I(!1);d?o=setTimeout(function(){i.state.isVisible&&i.hide()},d):s=requestAnimationFrame(function(){i.hide()})}}function Pe(){i.state.isEnabled=!0}function ze(){i.hide(),i.state.isEnabled=!1}function Xe(){clearTimeout(n),clearTimeout(o),cancelAnimationFrame(s)}function _e(a){if(!i.state.isDestroyed){$("onBeforeUpdate",[i,a]),We();var d=i.props,m=Nt(e,Object.assign({},d,$t(a),{ignoreAttributes:!0}));i.props=m,be(),d.interactiveDebounce!==m.interactiveDebounce&&(ce(),w=Bt(Ue,m.interactiveDebounce)),d.triggerTarget&&!m.triggerTarget?xe(d.triggerTarget).forEach(function(T){T.removeAttribute("aria-expanded")}):m.triggerTarget&&e.removeAttribute("aria-expanded"),J(),k(),C&&C(d,m),i.popperInstance&&(qe(),ue().forEach(function(T){requestAnimationFrame(T._tippy.popperInstance.forceUpdate)})),$("onAfterUpdate",[i,a])}}function Ke(a){i.setProps({content:a})}function sr(){var a=i.state.isVisible,d=i.state.isDestroyed,m=!i.state.isEnabled,T=Z.isTouch&&!i.props.touch,O=st(i.props.duration,0,K.duration);if(!(a||d||m||T)&&!S().hasAttribute("disabled")&&($("onShow",[i],!1),i.props.onShow(i)!==!1)){if(i.state.isVisible=!0,P()&&(v.style.visibility="visible"),k(),_(),i.state.isMounted||(v.style.transition="none"),P()){var V=U(),q=V.box,we=V.content;ut([q,we],0)}x=function(){var de;if(!(!i.state.isVisible||l)){if(l=!0,v.offsetHeight,v.style.transition=i.props.moveTransition,P()&&i.props.animation){var ot=U(),Ge=ot.box,Oe=ot.content;ut([Ge,Oe],O),It([Ge,Oe],"visible")}G(),J(),jt(ct,i),(de=i.popperInstance)==null||de.forceUpdate(),$("onMount",[i]),i.props.animation&&P()&&ie(O,function(){i.state.isShown=!0,$("onShown",[i])})}},oe()}}function ur(){var a=!i.state.isVisible,d=i.state.isDestroyed,m=!i.state.isEnabled,T=st(i.props.duration,1,K.duration);if(!(a||d||m)&&($("onHide",[i],!1),i.props.onHide(i)!==!1)){if(i.state.isVisible=!1,i.state.isShown=!1,l=!1,f=!1,P()&&(v.style.visibility="hidden"),ce(),ne(),k(!0),P()){var O=U(),V=O.box,q=O.content;i.props.animation&&(ut([V,q],T),It([V,q],"hidden"))}G(),J(),i.props.animation?P()&&ge(T,i.unmount):i.unmount()}}function fr(a){W().addEventListener("mousemove",w),jt(Ze,w),w(a)}function cr(){i.state.isVisible&&i.hide(),i.state.isMounted&&(Ye(),ue().forEach(function(a){a._tippy.unmount()}),v.parentNode&&v.parentNode.removeChild(v),ct=ct.filter(function(a){return a!==i}),i.state.isMounted=!1,$("onHidden",[i]))}function pr(){i.state.isDestroyed||(i.clearDelayTimeouts(),i.unmount(),We(),delete e._tippy,i.state.isDestroyed=!0,$("onDestroy",[i]))}}function He(e,t){t===void 0&&(t={});var r=K.plugins.concat(t.plugins||[]);Mn();var n=Object.assign({},t,{plugins:r}),o=Cn(e),s=o.reduce(function(f,c){var u=c&&Un(c,n);return u&&f.push(u),f},[]);return it(e)?s[0]:s}He.defaultProps=K;He.setDefaultProps=Vn;He.currentInput=Z;Object.assign({},Yt,{effect:function(t){var r=t.state,n={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,n.popper),r.styles=n,r.elements.arrow&&Object.assign(r.elements.arrow.style,n.arrow)}});var Fn={name:"sticky",defaultValue:!1,fn:function(t){var r=t.reference,n=t.popper;function o(){return t.popperInstance?t.popperInstance.state.elements.reference:r}function s(l){return t.props.sticky===!0||t.props.sticky===l}var f=null,c=null;function u(){var l=s("reference")?o().getBoundingClientRect():null,p=s("popper")?n.getBoundingClientRect():null;(l&&Ut(f,l)||p&&Ut(c,p))&&t.popperInstance&&t.popperInstance.update(),f=l,c=p,t.state.isMounted&&requestAnimationFrame(u)}return{onMount:function(){t.props.sticky&&u()}}}};function Ut(e,t){return e&&t?e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left:!0}He.setDefaultProps({render:ar});const qn=e=>({name:"arrowDetected",enabled:!0,phase:"main",fn:e,requiresIfExists:["offset"]}),Xn=["bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end","top","top-start","top-end"],_n=[!0,!1,"reference","popper"],Kn=(e,t)=>{const{contentElement:r}={...t};return delete t.contentElement,He(e,{...t,plugins:[Fn],render:()=>zn(r)})},Gn=({boundary:e="clippingParents",fallbackPlacements:t=[],onChangePlacement:r=()=>{},hasHideModifierEnabled:n=!1,tether:o=!0}={})=>({modifiers:[{name:"flip",options:{fallbackPlacements:t,boundary:e}},{name:"hide",enabled:n},{name:"preventOverflow",options:{altAxis:!o,tether:o}},qn(({state:s})=>{r(s.placement)})]}),Yn=e=>{const t=document.createElement("span");return t.innerText=e.innerText||"",e.innerText="",e.appendChild(t),t},Jn=e=>{const t=e==null?void 0:e.children[0];return t||Yn(e)},zn=e=>{const t=document.createElement("div");return t.className="tippy-box d-ps-absolute",t.appendChild(e),{popper:t}};export{Xn as B,_n as T,Jn as a,Kn as c,Gn as g};
//# sourceMappingURL=tippy_utils-pFmU31nk.js.map