try{
var m=__STORYBOOKADDONS__,{addons:s,types:r,mockChannel:u}=__STORYBOOKADDONS__;var d=`
#visual-testing,
*[data-parent-id*="visual-testing"],
*[title*="Visual Testing"] {
  display: none !important;
}
`;{let a=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");a.appendChild(e),e.appendChild(document.createTextNode(d))}s.setConfig({showRoots:!0});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
