import{j as e}from"./jsx-dev-runtime-f11fdc8c.js";import{M as a,S as o,C as i,a as l,b as t}from"./index-4a8f232a.js";import{S as m,D as d,V as c}from"./skeleton.stories-cd4c8c24.js";import{u}from"./index-81fd438a.js";import"./iframe-8a141fe9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./storybook_utils-ed5693eb.js";import"./vue.esm-eff6e72e.js";import"./skeleton-28563e4f.js";import"./_plugin-vue2_normalizer-2bbd088e.js";function r(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3",pre:"pre",a:"a"},u(),s.components);return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{of:m},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,e.jsxDEV(n.h1,{id:"skeleton",children:"Skeleton"},void 0,!1,{fileName:"<source.js>",lineNumber:7,columnNumber:1},this),`
`,e.jsxDEV(o,{children:e.jsxDEV(n.p,{children:`Skeleton loader is a non-interactive placeholder that displays a preview of the UI to visually communicate that
content is in the process of loading. Skeleton is used to provide a low fidelity representation of the user
interface (UI) before content appears on the page.`},void 0,!1,{fileName:"<source.js>",lineNumber:10,columnNumber:5},this)},void 0,!1,{fileName:"<source.js>",lineNumber:9,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"base-style",children:"Base Style"},void 0,!1,{fileName:"<source.js>",lineNumber:15,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:[`Skeleton loader are grey animated shapes that visually mimic the content. They use a pulsing wave effect motion to
indicate they are loading. Use 2px rounded corners apart from circles. For text, use height that matches multiples of
8px. For images, match the actual image size. Skeleton's default variant is `,e.jsxDEV(n.code,{children:"body"},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:77},this),"."]},void 0,!0,{fileName:"<source.js>",lineNumber:17,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:d},void 0,!1,{fileName:"<source.js>",lineNumber:22,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:21,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"variants",children:"Variants"},void 0,!1,{fileName:"<source.js>",lineNumber:25,columnNumber:1},this),`
`,e.jsxDEV(i,{children:e.jsxDEV(l,{of:c},void 0,!1,{fileName:"<source.js>",lineNumber:28,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:27,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"props",children:"Props"},void 0,!1,{fileName:"<source.js>",lineNumber:31,columnNumber:1},this),`
`,e.jsxDEV(t,{},void 0,!1,{fileName:"<source.js>",lineNumber:33,columnNumber:1},this),`
`,e.jsxDEV(n.h2,{id:"usage",children:"Usage"},void 0,!1,{fileName:"<source.js>",lineNumber:35,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:e.jsxDEV(n.strong,{children:"Do:"},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:37,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:"Use when data takes more than 300ms to load on an average connection for our user base."},void 0,!1,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Use to represent a general layout of what is being loaded."},void 0,!1,{fileName:"<source.js>",lineNumber:40,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:`For a repeating list, show 6 items maximum, since it’s enough to give an idea of a layout.
For conversations, limit to 3.`},void 0,!1,{fileName:"<source.js>",lineNumber:41,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:`Use skeleton loading for dynamic content, and use actual content for static content that doesn’t change e.g. page
title, headings, action components (button, toggles, checkboxes etc.).`},void 0,!1,{fileName:"<source.js>",lineNumber:43,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Dynamic content: Content that would change after loading, usually data-based text."},void 0,!1,{fileName:"<source.js>",lineNumber:45,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Static content: Content that can be loaded quickly and wouldn’t change, usually non-data-based text."},void 0,!1,{fileName:"<source.js>",lineNumber:46,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Always match the size of content that will load."},void 0,!1,{fileName:"<source.js>",lineNumber:47,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:`Always allow content to load gradually. Real content should replace skeleton objects immediately when the data
is available.`},void 0,!1,{fileName:"<source.js>",lineNumber:48,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:39,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:e.jsxDEV(n.strong,{children:"Don’t:"},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:51,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:"Use for fast loading less than 300ms."},void 0,!1,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Be super detailed trying to represent everything in an interface."},void 0,!1,{fileName:"<source.js>",lineNumber:54,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:"Use for user action feedback e.g. saving form."},void 0,!1,{fileName:"<source.js>",lineNumber:55,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:53,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"import",children:"Import"},void 0,!1,{fileName:"<source.js>",lineNumber:57,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-jsx",children:`import { DtSkeleton } from '@dialpad/dialtone-vue';
`},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:59,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"skeleton-text-body",children:"Skeleton text body"},void 0,!1,{fileName:"<source.js>",lineNumber:63,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-skeleton />
`},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:65,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"skeleton-text-heading",children:"Skeleton text heading"},void 0,!1,{fileName:"<source.js>",lineNumber:69,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :textOption="{
    type: 'heading'
  }"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:71,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"skeleton-paragraph",children:"Skeleton paragraph"},void 0,!1,{fileName:"<source.js>",lineNumber:80,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Random widths"},void 0,!1,{fileName:"<source.js>",lineNumber:82,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :paragraphOption="{
    rows: 5,
    minWidth: 50,
    maxWidth: 80,
    randomWidth: true,
    offset: 0.7,
  }
"/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:84,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:"Fixed widths"},void 0,!1,{fileName:"<source.js>",lineNumber:97,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :paragraphOption="{
    rows: 5,
    offset: 0.7,
    width: ['50%', '40%']
  }"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:99,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"skeleton-list-item",children:"Skeleton list item"},void 0,!1,{fileName:"<source.js>",lineNumber:110,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-skeleton
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:112,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"skeleton-shape",children:"Skeleton shape"},void 0,!1,{fileName:"<source.js>",lineNumber:127,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-skeleton
  arial-label="Loading"
  :shapeOption="{
    shape: 'square'
  }"
/>
`},void 0,!1,{fileName:"<source.js>",lineNumber:129,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:129,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"accessibility",children:"Accessibility"},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:`For sighted users, they are able to see that there is loading content and no other action is needed until loading completes.
Likewise, there is nothing that needs to be added for keyboard users.
For users who rely on assistive technology, skeleton’s visual representation of a loading state won’t be accessible
without additional labeling.`},void 0,!1,{fileName:"<source.js>",lineNumber:140,columnNumber:1},this),`
`,e.jsxDEV(n.p,{children:["It's ",e.jsxDEV(n.code,{children:'role="status"'},void 0,!1,{fileName:"<source.js>",lineNumber:145,columnNumber:6},this)," on the skeleton component, keep in mind, that:"]},void 0,!0,{fileName:"<source.js>",lineNumber:145,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:[`
`,e.jsxDEV(n.p,{children:["The aria live region role of status has an implicit ",e.jsxDEV(n.code,{children:"aria-live"},void 0,!1,{fileName:"<source.js>",lineNumber:147,columnNumber:55},this)," value of ",e.jsxDEV(n.code,{children:"polite"},void 0,!1,{fileName:"<source.js>",lineNumber:147,columnNumber:76},this),`, which allows a user to be notified
via AT (such as a screen reader) when status messages are added. The `,e.jsxDEV(n.code,{children:"role"},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:70},this)," of ",e.jsxDEV(n.code,{children:"status"},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:80},this)," also has a default ",e.jsxDEV(n.code,{children:"aria-atomic"},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:108},this),`
value of `,e.jsxDEV(n.code,{children:"true"},void 0,!1,{fileName:"<source.js>",lineNumber:149,columnNumber:10},this),`, so that updates to the container marked with a role of status will result in the AT presenting the
entire contents of the container to the user, including any author-defined labels (or additional nested elements).`]},void 0,!0,{fileName:"<source.js>",lineNumber:147,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:147,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[`
`,e.jsxDEV(n.p,{children:[e.jsxDEV(n.code,{children:"aria-busy"},void 0,!1,{fileName:"<source.js>",lineNumber:152,columnNumber:3},this),` state indicates an element is being modified and that assistive technologies may want to wait until the
changes are complete before informing the user about the update.
When multiple parts of a live region need to be loaded before changes are announced to the user, set `,e.jsxDEV(n.code,{children:'aria-busy="true"'},void 0,!1,{fileName:"<source.js>",lineNumber:154,columnNumber:102},this),`
until loading is complete. Then set to aria-busy="false". This prevents assistive technologies from announcing changes
before updates are done.`]},void 0,!0,{fileName:"<source.js>",lineNumber:152,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:152,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[`
`,e.jsxDEV(n.p,{children:["If you need fully accessible skeleton and loading content, probably you will want to add ",e.jsxDEV(n.code,{children:'aria-live="polite"'},void 0,!1,{fileName:"<source.js>",lineNumber:158,columnNumber:92},this),`
and `,e.jsxDEV(n.code,{children:'aria-busy="false"'},void 0,!1,{fileName:"<source.js>",lineNumber:159,columnNumber:5},this)," to corresponding loaded html element content."]},void 0,!0,{fileName:"<source.js>",lineNumber:158,columnNumber:3},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:158,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:147,columnNumber:1},this),`
`,e.jsxDEV(n.pre,{children:e.jsxDEV(n.code,{className:"language-html",children:`<dt-skeleton
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
`},void 0,!1,{fileName:"<source.js>",lineNumber:161,columnNumber:1},this)},void 0,!1,{fileName:"<source.js>",lineNumber:161,columnNumber:1},this),`
`,e.jsxDEV(n.h3,{id:"references",children:"References"},void 0,!1,{fileName:"<source.js>",lineNumber:175,columnNumber:1},this),`
`,e.jsxDEV(n.ul,{children:[`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.a,{href:"https://accessibilityresources.org/aria-busy",target:"_blank",rel:"nofollow noopener noreferrer",children:"Aria-busy"},void 0,!1,{fileName:"<source.js>",lineNumber:177,columnNumber:3},this),`,
`,e.jsxDEV(n.a,{href:"https://www.digitala11y.com/status-role/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Status role"},void 0,!1,{fileName:"<source.js>",lineNumber:178,columnNumber:1},this),`,
`,e.jsxDEV(n.a,{href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22",target:"_blank",rel:"nofollow noopener noreferrer",children:"ARIA22"},void 0,!1,{fileName:"<source.js>",lineNumber:179,columnNumber:1},this),`,
`,e.jsxDEV(n.a,{href:"https://a11ysupport.io/tech/aria/status_role#support-table-1",target:"_blank",rel:"nofollow noopener noreferrer",children:"a11y support status_role"},void 0,!1,{fileName:"<source.js>",lineNumber:180,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:177,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.a,{href:"https://www.carbondesignsystem.com/patterns/loading-pattern/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Carbon DS Loading pattern"},void 0,!1,{fileName:"<source.js>",lineNumber:181,columnNumber:3},this),`,
`,e.jsxDEV(n.a,{href:"https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a",target:"_blank",rel:"nofollow noopener noreferrer",children:"Skeleton screens"},void 0,!1,{fileName:"<source.js>",lineNumber:182,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:181,columnNumber:1},this),`
`,e.jsxDEV(n.li,{children:[e.jsxDEV(n.a,{href:"https://www.tpgi.com/short-note-on-being-busy/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Short note on being busy"},void 0,!1,{fileName:"<source.js>",lineNumber:183,columnNumber:3},this),`,
`,e.jsxDEV(n.a,{href:"https://adrianroselli.com/2020/11/more-accessible-skeletons.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"More Accessible Skeletons"},void 0,!1,{fileName:"<source.js>",lineNumber:184,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:183,columnNumber:1},this),`
`]},void 0,!0,{fileName:"<source.js>",lineNumber:177,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function A(s={}){const{wrapper:n}=Object.assign({},u(),s.components);return n?e.jsxDEV(n,Object.assign({},s,{children:e.jsxDEV(r,s,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):r(s)}export{A as default};
//# sourceMappingURL=skeleton-f5306106.js.map
