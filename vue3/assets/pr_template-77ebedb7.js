import{j as e}from"./jsx-runtime-58662196.js";import{M as o}from"./index-16583901.js";import{u as s}from"./index-e7913bfb.js";import"./iframe-cd33a050.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";function a(n){const t=Object.assign({h1:"h1",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Templates/Pull Request"}),`
`,e.jsx(t.h1,{id:"pull-request-template",children:"Pull Request Template"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-md",children:`<!--- IMPORTANT NOTE: set the visual-test-ready label on your PR if you would like to run visual tests.
 If not set label no-visual-test -->
# PR Title

<!--- Feel free to remove any unused sections -->

## :hammer_and_wrench: Type Of Change

<!--- Tick or place an \`x\` in all of the checkboxes that apply -->

- [ ] Fix
- [ ] Feature
- [ ] Refactoring
- [ ] Documentation

## :book: Description

<!--- Describe the changes -->

## :bulb: Context

<!--- Describe the purpose of the changes -->
<!--- Why did we make these changes? -->
<!--- What problem(s) do they solve? -->

## :pencil: Checklist

<!--- Tick or place an \`x\` in all of the checkboxes that apply -->
<!--- Remove checkboxes that do not apply -->

- [ ] I have updated library exports
- [ ] I have reviewed my changes
- [ ] I have added tests
- [ ] I have added all relevant documentation
- [ ] All tests are passing
- [ ] All linters are passing
- [ ] No accessibility issues reported
- [ ] I have validated components with a screen reader
- [ ] I have validated components keyboard navigation

## :crystal_ball: Next Steps

<!--- Describe any future changes that need to be made after merging the PR -->

## :camera: Screenshots / GIFs

<!--- If your PR contains visual UI changes to an existing component, please add BEFORE and AFTER images so it is
clear to see what changed. Also add steps to reproduce if it is necessary. -->

## :link: Sources

<!--- Add any links to external reference material -->
`})})]})}function g(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(a,n)})):a(n)}export{g as default};
//# sourceMappingURL=pr_template-77ebedb7.js.map
