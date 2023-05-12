import{j as e}from"./jsx-runtime-9f834b2c.js";import{M as d,S as r,C as t,a as o,b as h}from"./index-9d8bbb03.js";import{M as c,W as p,a as m,b as x,c as u,d as j,e as g}from"./modal.stories-36ffa53f.js";import{u as l}from"./index-08ba305e.js";import"./iframe-c879d1e0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-4NMOSTKD-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-ac12cf05.js";import"./index-356e4a49.js";import"./button-452c58cd.js";import"./vue.esm-bundler-a6507c57.js";import"./utils-40a24902.js";import"./link_constants-51338c78.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./icon-986e0145.js";import"./icon_constants-f3ff1f59.js";import"./storybook_utils-0a6e313e.js";import"./modal-f96ddab9.js";import"./lazy_show-5040fc92.js";import"./sr_only_close_button-2ea09f93.js";import"./notice-ed11ef00.js";import"./chunk-OPEUWD42-a3b45fd8.js";function E(s={}){const{wrapper:i}=Object.assign({},l(),s.components);return i?e.jsx(i,Object.assign({},s,{children:e.jsx(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",em:"em",code:"code",h2:"h2",blockquote:"blockquote",strong:"strong",h3:"h3",pre:"pre",h4:"h4"},l(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"modals",children:"Modals"}),`
`,e.jsx(r,{children:e.jsx(n.p,{children:`Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the
page content.`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: in Dialpad, you should use the ",e.jsx(n.code,{children:"BaseModal"})," component, which is a wrapper around ",e.jsx(n.code,{children:"DtModal"}),` and integrates with the
existing Backbone overlays and provides the translated `,e.jsx(n.code,{children:"closeButtonProps.ariaLabel"}),` prop automatically. The rest of the
API is the same.`]})}),`
`,e.jsx(n.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(n.p,{children:`The typical modal will have a title and copy text to provide context to the user, often followed by a footer presenting
available actions.`}),`
`,e.jsx(t,{children:e.jsx(o,{of:p})}),`
`,e.jsx(n.h2,{id:"with-fixed-header-and-footer",children:"With fixed header and footer"}),`
`,e.jsx(n.p,{children:`This is the default behavior that adds the scroll automatically in the modal content and leaves the header and footer
fixed.`}),`
`,e.jsx(t,{children:e.jsx(o,{of:m})}),`
`,e.jsx(n.h2,{id:"with-banner",children:"With banner"}),`
`,e.jsx(n.p,{children:"A modal with the banner at the top."}),`
`,e.jsx(t,{children:e.jsx(o,{of:x})}),`
`,e.jsx(n.h2,{id:"danger-style",children:"Danger Style"}),`
`,e.jsx(n.p,{children:"A modal style for destructive or irreversible actions."}),`
`,e.jsx(t,{children:e.jsx(o,{of:u})}),`
`,e.jsx(n.h2,{id:"full-size",children:"Full Size"}),`
`,e.jsx(n.p,{children:"To make this modal take up as much of the screen as possible."}),`
`,e.jsx(t,{children:e.jsx(o,{of:j})}),`
`,e.jsx(n.h2,{id:"custom-header-and-body-content",children:"Custom Header and Body Content"}),`
`,e.jsx(n.p,{children:"You're not limited to using plain title and copy text."}),`
`,e.jsx(n.p,{children:"In addition to the footer, custom elements can be inserted into the header and body sections of the dialog via slots."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Please note:"}),' supplied header or body slots will take the place of any provided "title" or "copy" text, respectively.']}),`
`]}),`
`,e.jsx(t,{children:e.jsx(o,{of:g})}),`
`,e.jsx(n.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Modal uses ARIA ",e.jsx(n.code,{children:'role="dialog"'})," so make sure to provide a recognizable name for the dialog using ",e.jsx(n.code,{children:"labelledById"}),` prop.
When the modal is open, it will trap the focus and will return to the button that triggered it when it closes.`]}),`
`,e.jsxs(n.p,{children:["It is possible to include a screen reader visible only close button setting ",e.jsx(n.code,{children:"visually-hidden-close"}),`
and `,e.jsx(n.code,{children:"visually-hidden-close-label"})," props."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DtModal } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(n.h3,{id:"with-props",children:"With Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-modal
  copy="Main dialog text, such as a description of available options or actions."
  title="Title for the dialog's header"
  :close-button-props="{ ariaLabel: 'Close the dialog' }"
  :show.sync="showModal"
/>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-content-default-slot",children:"With Slotted Content (Default Slot)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-modal
  title="Title for the dialog's header"
  :close-button-props="{ ariaLabel: 'Close the dialog' }"
  :show.sync="showModal"
>
  <div>Custom content</div>
</dt-modal>
`})}),`
`,e.jsx(n.h3,{id:"with-banner-1",children:"With Banner"}),`
`,e.jsx(n.h4,{id:"using-prop",children:"Using prop"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-modal
  title="Title for the dialog's header"
  banner-title="text to display in the modal's banner"
  copy="Main dialog text, such as a description of available options or actions."
  :close-button-props="{ ariaLabel: 'Close the dialog' }"
  :show.sync="showModal"
>
</dt-modal>
`})}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"banner-title"}),` prop if you need to pass raw text, otherwise use the slotted version, for example for adding
an icon in the message.`]}),`
`,e.jsx(n.h4,{id:"using-slot",children:"Using slot"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-modal
  title="Title for the dialog's header"
  copy="Main dialog text, such as a description of available options or actions."
  :close-button-props="{ ariaLabel: 'Close the dialog' }"
  :show.sync="showModal"
>
  <template #banner>
    <div>
      <dt-icon name="clock" />
      <span>Time</span>
    </div>
  </template>
</dt-modal>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-content-and-danger-style",children:"With Slotted Content and Danger Style"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-modal
  title="Title for the dialog's header"
  kind="danger"
  :close-button-props="{ ariaLabel: 'Close the dialog' }"
  :show.sync="showModal"
>
  <div>Custom content</div>
</dt-modal>
`})}),`
`,e.jsx(n.h3,{id:"with-slotted-content-and-full-size",children:"With Slotted Content and Full Size"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-modal
  title="Title for the dialog's header"
  size="full"
  :close-button-props="{ ariaLabel: 'Close the dialog' }"
  :show.sync="showModal"
>
  <div>Custom content</div>
</dt-modal>
`})}),`
`,e.jsx(n.h3,{id:"with-default-copy-text-slotted-header-and-footer",children:"With Default Copy Text, Slotted Header and Footer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<dt-modal
  copy="Main dialog text, such as a description of available options or actions."
  :close-button-props="{ ariaLabel: 'Close the dialog' }"
  :show.sync="showModal"
>
  <template #header>
    <div>Custom header</div>
  </template>
  <template #footer>
    <div>Confirm</div>
    <div>Cancel</div>
  </template>
</dt-modal>
`})})]})}}export{E as default};
//# sourceMappingURL=modal-ce05994b.js.map
