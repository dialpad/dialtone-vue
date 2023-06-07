import{j as e}from"./jsx-runtime-464eaee6.js";import{M as l,S as d,C as o,a as i,b as h}from"./index-d7ef5f07.js";import{S as c,D as p,V as u}from"./skeleton.stories-a643418b.js";import{u as r}from"./index-3f537166.js";import"./iframe-54c52dd2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./storybook_utils-aefd525a.js";import"./vue.esm-bundler-e62bdd6b.js";import"./utils-61960a91.js";import"./skeleton-f74d1612.js";import"./_plugin-vue_export-helper-c27b6911.js";function U(t={}){const{wrapper:s}=Object.assign({},r(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3",pre:"pre",a:"a"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(d,{children:e.jsx(n.p,{children:`Skeleton loader is a non-interactive placeholder that displays a preview of the UI to visually communicate that
content is in the process of loading. Skeleton is used to provide a low fidelity representation of the user
interface (UI) before content appears on the page.`})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.p,{children:[`Skeleton loader are grey animated shapes that visually mimic the content. They use a pulsing wave effect motion to
indicate they are loading. Use 2px rounded corners apart from circles. For text, use height that matches multiples of
8px. For images, match the actual image size. Skeleton's default variant is `,e.jsx(n.code,{children:"body"}),"."]}),`
`,e.jsx(o,{children:e.jsx(i,{of:p})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(i,{of:u})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Do:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use when data takes more than 300ms to load on an average connection for our user base."}),`
`,e.jsx(n.li,{children:"Use to represent a general layout of what is being loaded."}),`
`,e.jsx(n.li,{children:`For a repeating list, show 6 items maximum, since it’s enough to give an idea of a layout.
For conversations, limit to 3.`}),`
`,e.jsx(n.li,{children:`Use skeleton loading for dynamic content, and use actual content for static content that doesn’t change e.g. page
title, headings, action components (button, toggles, checkboxes etc.).`}),`
`,e.jsx(n.li,{children:"Dynamic content: Content that would change after loading, usually data-based text."}),`
`,e.jsx(n.li,{children:"Static content: Content that can be loaded quickly and wouldn’t change, usually non-data-based text."}),`
`,e.jsx(n.li,{children:"Always match the size of content that will load."}),`
`,e.jsx(n.li,{children:`Always allow content to load gradually. Real content should replace skeleton objects immediately when the data
is available.`}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Don’t:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for fast loading less than 300ms."}),`
`,e.jsx(n.li,{children:"Be super detailed trying to represent everything in an interface."}),`
`,e.jsx(n.li,{children:"Use for user action feedback e.g. saving form."}),`
`]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtSkeleton } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"skeleton-text-body",children:"Skeleton text body"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-skeleton />
`})}),`
`,e.jsx(n.h3,{id:"skeleton-text-heading",children:"Skeleton text heading"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :textOption="{
    type: 'heading'
  }"
/>
`})}),`
`,e.jsx(n.h3,{id:"skeleton-paragraph",children:"Skeleton paragraph"}),`
`,e.jsx(n.p,{children:"Random widths"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :paragraphOption="{
    rows: 5,
    minWidth: 50,
    maxWidth: 80,
    randomWidth: true,
    offset: 0.7,
  }
"/>
`})}),`
`,e.jsx(n.p,{children:"Fixed widths"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :paragraphOption="{
    rows: 5,
    offset: 0.7,
    width: ['50%', '40%']
  }"
/>
`})}),`
`,e.jsx(n.h3,{id:"skeleton-list-item",children:"Skeleton list item"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :listItemOption="{
    paragraphs: {
      rows: 5,
      minWidth: 50,
      maxWidth: 80,
      randomWidth: true,
      offset: 0.7,
    }
  }"
/>
`})}),`
`,e.jsx(n.h3,{id:"skeleton-shape",children:"Skeleton shape"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :shapeOption="{
    shape: 'square'
  }"
/>
`})}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:`For sighted users, they are able to see that there is loading content and no other action is needed until loading completes.
Likewise, there is nothing that needs to be added for keyboard users.
For users who rely on assistive technology, skeleton’s visual representation of a loading state won’t be accessible
without additional labeling.`}),`
`,e.jsxs(n.p,{children:["It's ",e.jsx(n.code,{children:'role="status"'})," on the skeleton component, keep in mind, that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The aria live region role of status has an implicit ",e.jsx(n.code,{children:"aria-live"})," value of ",e.jsx(n.code,{children:"polite"}),`, which allows a user to be notified
via AT (such as a screen reader) when status messages are added. The `,e.jsx(n.code,{children:"role"})," of ",e.jsx(n.code,{children:"status"})," also has a default ",e.jsx(n.code,{children:"aria-atomic"}),`
value of `,e.jsx(n.code,{children:"true"}),`, so that updates to the container marked with a role of status will result in the AT presenting the
entire contents of the container to the user, including any author-defined labels (or additional nested elements).`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-busy"}),` state indicates an element is being modified and that assistive technologies may want to wait until the
changes are complete before informing the user about the update.
When multiple parts of a live region need to be loaded before changes are announced to the user, set `,e.jsx(n.code,{children:'aria-busy="true"'}),`
until loading is complete. Then set to aria-busy="false". This prevents assistive technologies from announcing changes
before updates are done.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If you need fully accessible skeleton and loading content, probably you will want to add ",e.jsx(n.code,{children:'aria-live="polite"'}),`
and `,e.jsx(n.code,{children:'aria-busy="false"'})," to corresponding loaded html element content."]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-skeleton
  v-if="loading"
  :aria-label="$i18n('Loading')"
/>
<p
  v-else
  aria-live="polite"
  aria-busy="false"
>
  Loaded content.
</p>
`})}),`
`,e.jsx(n.h3,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://accessibilityresources.org/aria-busy",target:"_blank",rel:"nofollow noopener noreferrer",children:"Aria-busy"}),`,
`,e.jsx(n.a,{href:"https://www.digitala11y.com/status-role/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Status role"}),`,
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22",target:"_blank",rel:"nofollow noopener noreferrer",children:"ARIA22"}),`,
`,e.jsx(n.a,{href:"https://a11ysupport.io/tech/aria/status_role#support-table-1",target:"_blank",rel:"nofollow noopener noreferrer",children:"a11y support status_role"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.carbondesignsystem.com/patterns/loading-pattern/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Carbon DS Loading pattern"}),`,
`,e.jsx(n.a,{href:"https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a",target:"_blank",rel:"nofollow noopener noreferrer",children:"Skeleton screens"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.tpgi.com/short-note-on-being-busy/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Short note on being busy"}),`,
`,e.jsx(n.a,{href:"https://adrianroselli.com/2020/11/more-accessible-skeletons.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"More Accessible Skeletons"})]}),`
`]})]})}}export{U as default};
//# sourceMappingURL=skeleton-10ef6660.js.map
