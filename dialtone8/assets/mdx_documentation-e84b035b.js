import{j as n}from"./jsx-runtime-76e11f71.js";import{M as i}from"./index-d8b51c44.js";import{u as s}from"./index-90bdd5f9.js";import"./iframe-9bd39358.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";function f(e={}){const{wrapper:o}=Object.assign({},s(),e.components);return o?n.jsx(o,Object.assign({},e,{children:n.jsx(a,{})})):a();function a(){const t=Object.assign({h1:"h1",pre:"pre",code:"code",h3:"h3"},s(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Docs/Templates/MDX Documentation"}),`
`,n.jsx(t.h1,{id:"mdx-documentation-template",children:"MDX Documentation Template"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`    // MDX Documentation Template
    import { Canvas, Story, Subtitle, Controls, Meta } from '@storybook/blocks';

    # My Component

    <Subtitle>
      Some description of the component functionality.
    </Subtitle>

    ## Base Style

    Some description of how to use the base component, potential gotchas and limitations.

    <Canvas>
      <Story of={ComponentStories.Default} />
    </Canvas>

    ## Variants

    <Canvas>
      <Story of={ComponentStories.Variants} />
    </Canvas>

    ## Slots, Props & Events

    <Controls />

    ## Usage

    ### Import

    \`\`\`jsx
    import { DtMyComponent } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(t.h3,{id:"with-some-variant",children:"With Some Variant"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-vue",children:`<dt-my-component
  some="variant"
/>
`})}),`
`,n.jsx(t.h3,{id:"with-some-other-variant",children:"With Some Other Variant"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-vue",children:`<dt-my-component
  some-other="variant"
/>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{})})]})}}export{f as default};
//# sourceMappingURL=mdx_documentation-e84b035b.js.map