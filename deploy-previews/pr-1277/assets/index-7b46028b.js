import{R as o}from"./index-1cfdaffb.js";const u=o.createContext({});function c(t){return e;function e(r){const n=a(r.components);return o.createElement(t,{...r,allComponents:n})}}function a(t){const e=o.useContext(u);return o.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const i={};function f({components:t,children:e,disableParentContext:r}){let n;return r?n=typeof t=="function"?t({}):t||i:n=a(t),o.createElement(u.Provider,{value:n},e)}export{u as M,f as a,a as u,c as w};
//# sourceMappingURL=index-7b46028b.js.map
