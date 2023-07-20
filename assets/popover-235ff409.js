import{j as e}from"./jsx-runtime-15a6d800.js";import{M as l,S as a,C as o,a as i,b as c}from"./index-4517e7df.js";import{P as h,D as d,V as p}from"./popover.stories-2ec16b87.js";import{u as r}from"./index-983dc319.js";import"./iframe-2faeb3ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-aefc0af2.js";import"./index-356e4a49.js";import"./popover-6e0c8d6f.js";import"./tippy_utils-dcd4636d.js";import"./storybook_utils-6c24aced.js";import"./vue.esm-ba2ca387.js";import"./lazy_show-ac5fd1cd.js";import"./_plugin-vue2_normalizer-2bbd088e.js";import"./index.esm-8e1c03ab.js";import"./modal-600bd46a.js";import"./button-82727ed7.js";import"./link_constants-51338c78.js";import"./icon-b42420a4.js";import"./icon_constants-80dce3e6.js";import"./sr_only_close_button-71a6e5c4.js";import"./dropdown_separator-5a1105bf.js";import"./keyboard_list_navigation-8c116ee6.js";import"./list_item-afde18d7.js";import"./item_layout-173b62c3.js";import"./dropdown_constants-d0cadac9.js";import"./tooltip-525ed1d3.js";import"./chunk-OPEUWD42-a3b45fd8.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",a:"a",code:"code",strong:"strong",em:"em",pre:"pre",ol:"ol"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(n.h1,{id:"popovers",children:"Popovers"}),`
`,e.jsx(a,{children:e.jsx(n.p,{children:"A Popover displays a content overlay when its anchor element is activated."})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Activating the anchor will display a white content box with rounded corners, and a box shadow."}),`
`,e.jsxs(n.li,{children:["The popover may optionally have a header / footer.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Header / Footer is always placed at the top and bottom of the popover frame respectively and will remain in place as
the main content is scrolled.`}),`
`,e.jsx(n.li,{children:"Header / Footer will remain in place as the main content is scrolled."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`Setting the max height of the popover will make the content scrollable. Otherwise the popover will size to fit its
content`}),`
`]}),`
`,e.jsx(o,{children:e.jsx(i,{of:d})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"fallback-placements",children:"Fallback Placements"}),`
`,e.jsxs(n.p,{children:["The popover uses ",e.jsx(n.a,{href:"https://atomiks.github.io/tippyjs/v6/headless-tippy/",target:"_blank",rel:"nofollow noopener noreferrer",children:"headless-tippy"}),` and
`,e.jsx(n.a,{href:"https://popper.js.org/docs/v2/modifiers/flip/",target:"_blank",rel:"nofollow noopener noreferrer",children:"popper"}),`, if the popover opens in a placement where it will
be clipped, it will move to a new position. It will do this automatically by default, but if you want to
manually specify which position it will move to in what order you can do so via the fallbackPlacements prop.`]}),`
`,e.jsx(n.h3,{id:"padding",children:"Padding"}),`
`,e.jsxs(n.p,{children:["Padding options for the popover content are provided via size classes ",e.jsx(n.code,{children:"small"}),"/",e.jsx(n.code,{children:"medium"}),"/",e.jsx(n.code,{children:"large"}),` in order to standardize
the look of the popover content between usages. To remove the padding from the content, you can pass `,e.jsx(n.code,{children:"none"}),`. Setting
`,e.jsx(n.code,{children:"none"})," will also allow you to set custom padding via utility classes (Ex: you only want padding on the left.)."]}),`
`,e.jsx(n.h3,{id:"variants-1",children:"Variants"}),`
`,e.jsx(o,{children:e.jsx(i,{of:p})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:[`Popovers may be used standalone, or to create a dropdown menu or other complex control.
Setting the `,e.jsx(n.code,{children:"modal"}),` prop will set an invisible overlay which will prevent interaction with anything rendered outside
of the popover. Note we also have the `,e.jsx(n.a,{href:"/story/components-modal--default",children:"dt-modal"}),` component which should be used
for fullscreen modals that are not displayed relative to the anchor.`]}),`
`,e.jsxs(n.p,{children:["A popover has 2 main required slots: the ",e.jsx(n.strong,{children:"anchor"})," and the ",e.jsx(n.strong,{children:"content"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"anchor"}),` is the control that the content will be positioned relative to and triggers the visibility of the
content. Normally a button, the anchor can be any `,e.jsx(n.em,{children:"interactive"}),` element that could control the visibility of the popover
content. For example, the anchor could be an input element with a conditionally displayed `,e.jsx(n.code,{children:"listbox"}),` content element to
implement an auto-suggest form component.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"content"}),` slot will be rendered lazily when the popover is open. By default, the popover content will
be opened when the anchor is clicked, and closed when clicking outside the content or on `,e.jsx(n.code,{children:"ESC"}),` key press. You may
override this behaviour by using `,e.jsx(n.code,{children:".sync"})," on the open prop (or ",e.jsx(n.code,{children:"v-model:open"}),` in Vue 3) in which you can open or close
the content using whichever condition you wish.`]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtPopover } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"basic-usage-with-named-slots",children:"Basic usage with named slots"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<dt-popover>
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
    >
      Click to open
    </dt-button>
  </template>
  <template #content>
    <p>I will be displayed in the popover!</p>
  </template>
</dt-popover>
`})}),`
`,e.jsx(n.h3,{id:"force-close-all-opened-instances",children:"Force close all opened instances"}),`
`,e.jsxs(n.p,{children:[`When the popover is open, it will attach an event listener into the window object, so you can close the instances
dispatching the `,e.jsx(n.code,{children:"dt-popover-close"})," event in the window object:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const e = new Event('dt-popover-close');
window.dispatchEvent(e);
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`Popovers, in their current implementation, are accessible when used as interactive components.
Content will be read to screen reader users, and the popover markup by is appended to the `,e.jsx(n.code,{children:"<body>"})]}),`
`,e.jsx(n.p,{children:`There are a few important considerations to ensure popover controls are accessible.
The popover, by default:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:['the popover content will have a generic role of "dialog" ( ',e.jsx(n.code,{children:"menu"}),", ",e.jsx(n.code,{children:"listbox"})," also possible roles as well)."]}),`
`,e.jsx(n.li,{children:`on open, focus will be transferred to the first focusable element within the popover, after close the triggering
element will be focused.`}),`
`,e.jsxs(n.li,{children:["It is possible to include a screen reader visible only close button setting ",e.jsx(n.code,{children:"visually-hidden-close"}),`
and `,e.jsx(n.code,{children:"visually-hidden-close-label"})," props."]}),`
`]}),`
`,e.jsx(n.h3,{id:"anchor",children:"Anchor"}),`
`,e.jsxs(n.p,{children:[`The anchor element that activates the popover should be fully accessible by keyboard. The easiest way to do this is by
using an element like an `,e.jsx(n.code,{children:"DtButton"}),` that is already accessible. The user should also be able to close the popover
content using the `,e.jsx(n.code,{children:"ESC"})," key for most ARIA roles."]}),`
`,e.jsxs(n.p,{children:["There are some required ARIA attributes for the anchor element (such as ",e.jsx(n.code,{children:"aria-expanded"})," set based on ",e.jsx(n.code,{children:"open"}),` and
`,e.jsx(n.code,{children:"aria-haspopup"})," that matches the ",e.jsx(n.code,{children:"role"}),`). To make this as straightforward as possible, these ARIA attributes are passed
with the correct values as the `,e.jsx(n.code,{children:"attrs"})," slot-scope to the anchor slot. Applying them is as simple as using ",e.jsx(n.code,{children:"v-bind"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<template #anchor="{ attrs }">
  <dt-button v-bind="attrs">I'm accessible now!</dt-button>
</template>
`})}),`
`,e.jsx(n.p,{children:"By default, the dialog content will be labeled by the entire anchor element. To change this, you can do one of 2 things:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Pass ",e.jsx(n.code,{children:"aria-label"}),", which is the text label that will be applied to the dialog content."]}),`
`,e.jsxs(n.li,{children:["Pass ",e.jsx(n.code,{children:"aria-labelledby"}),", which is an ID of the element that should be used as the descriptive label."]}),`
`]}),`
`,e.jsx(n.h3,{id:"keyboard-support",children:"Keyboard support"}),`
`,e.jsx(n.p,{children:"The below keyboard functionality is automatically implemented when using the popover component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The user can dismiss the popover pressing the ",e.jsx(n.code,{children:"ESC"}),` key, after that the focus will be returned to the element
that launched it.`]}),`
`,e.jsxs(n.li,{children:["The user can traverse focusable elements using the ",e.jsx(n.code,{children:"TAB"}),` key. If the popover has a defined header, the focus will be
moved to the header buttons after the last focusable element inside content's container.`]}),`
`]}),`
`,e.jsx(n.p,{children:`Additionally you must use the "initialFocusElement" prop to set which element is initially focused when the popover
opens. You can set this to "first" to focus the first focusable element, "dialog" to focus the dialog itself, a string
starting with '#' to focus an element by id within the dialog or  you may pass in an HTMLElement directly.
If set to "none" the focus will remain on the anchor, however this is invalid behavior if the popover is modal.`}),`
`,e.jsx(n.h3,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://atomiks.github.io/tippyjs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"tippyjs"}),", ",e.jsx(n.a,{href:"https://popper.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"popper.js"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/popovers/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Apple. Human Interface Guidelines"}),`
, `,e.jsx(n.a,{href:"https://react-spectrum.adobe.com/react-aria/useOverlayTrigger.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Spectrum. Accessibility overlay trigger"}),`,
`,e.jsx(n.a,{href:"https://slack.design/articles/accessibility-a-powerful-design-tool/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slack Design. Accessibility, a powerful design tool"})]}),`
`]})]})}function Y(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{Y as default};
//# sourceMappingURL=popover-235ff409.js.map