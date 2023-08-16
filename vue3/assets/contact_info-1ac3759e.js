import{j as n}from"./jsx-runtime-9cd7a970.js";import{M as c,S as o,d as a,e as d,f as l}from"./index-dc8ded77.js";import{C as r,D as m,V as p}from"./contact_info.stories-26988036.js";import{u as s}from"./index-0b54e59b.js";import"./iframe-5f6a7236.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-4745f7b8.js";import"./index-356e4a49.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./storybook_utils-b0336152.js";import"./vue.esm-bundler-06a6c133.js";import"./utils-135fe08f.js";import"./list_item-0d494cf0.js";import"./icon-136e453c.js";import"./icon_constants-5440087a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./item_layout-923aabef.js";import"./avatar-81e2efde.js";import"./presence-c5756a69.js";import"./button-f19eb3b6.js";import"./link_constants-51338c78.js";function i(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",h3:"h3",pre:"pre"},s(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:r}),`
`,n.jsx(t.h1,{id:"dtrecipecontactinfo",children:"DtRecipeContactInfo"}),`
`,n.jsx(o,{children:n.jsx(t.p,{children:"A contact information is an component that can be used to represent individual or group contact."})}),`
`,n.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,n.jsxs(t.p,{children:[`The contact information component has 4 slots that can be used for the most common use cases,
`,n.jsx(t.strong,{children:"header"}),", ",n.jsx(t.strong,{children:"subtitle"}),", ",n.jsx(t.strong,{children:"right"})," and ",n.jsx(t.strong,{children:"bottom"})," slot."]}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.strong,{children:"header"})," slot can be used to display html content or Vue component at header area."]}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.strong,{children:"subtitle"}),` slot can be used to display content below the header slot. The slot has smaller
text size and lighter color than default slot.`]}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.strong,{children:"right"})," slot works the same way, but its contents are placed to the right of the main slot."]}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.strong,{children:"bottom"})," slot can be used to display content below the subtitle slot."]}),`
`,n.jsxs(t.p,{children:["Avatar is optional. When ",n.jsx(t.code,{children:"avatarSrc"}),` is specified, the avatar image will be displayed on the left and,
it is required to provide a value in `,n.jsx(t.code,{children:"avatarFullName"}),` to use in the alt attribute of the avatar image.
If `,n.jsx(t.code,{children:"avatarSrc"})," is empty, it will fall back to ",n.jsx(t.code,{children:"avatarFullName"}),`, and user initials will be displayed
in avatar.`]}),`
`,n.jsx(a,{children:n.jsx(d,{of:m})}),`
`,n.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(a,{children:n.jsx(d,{of:p})}),`
`,n.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,n.jsx(l,{}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.h3,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-jsx",children:`import { DtRecipeContactInfo } from '@dialpad/dialtone-vue';
`})}),`
`,n.jsx(t.h3,{id:"contact-with-avatar",children:"Contact with avatar"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-contact-info
  :avatar-src="avatarSrc"
  presence="active"
>
  <template #header>
    <div class="d-fs-200 d-fw-bold d-mr4">
      Joseph Lumaban
    </div>
  </template>
  <template #subtitle>
    <div class="d-d-flex d-ai-center">
      <div class="d-fs-100 d-mt2">
        +1 (415) 123-4567
      </div>
      <dt-icon name="check" size="100"
        class="d-fc-tertiary d-icon--size-100 d-va-text-bottom"
      />
    </div>
  </template>
  <template #bottom>
    <div class="d-d-flex d-ai-center d-mtn6">
      <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">
        &nbsp;
      </div>
      <div class="d-fs-100 d-mr4">
        Aerolabs Support
      </div>
    </div>
  </template>
</dt-recipe-contact-info>
`})}),`
`,n.jsx(t.h3,{id:"unknown-contact-phone-number-only-with-attestation",children:"Unknown contact (phone number only) with attestation"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-contact-info>
  <template #header>
    <div class="d-d-flex d-ai-center d-mb2">
      <div class="d-fs-200 d-fw-bold d-mr4">
        +1 (415) 123-4567
      </div>
      <dt-icon name="check" size="100"
        class="d-fc-tertiary d-icon--size-100"
      />
    </div>
  </template>
  <template #subtitle>
    San Francisco, California
  </template>
</dt-recipe-contact-info>
`})}),`
`,n.jsx(t.h3,{id:"unknown-contact-with-marked-as-spam-button",children:'Unknown contact with "marked as spam" button'}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-contact-info>
  <template #header>
    <div class="d-d-flex d-ai-center d-mb2">
      <div class="d-fs-200 d-fw-bold d-mr4">
        +1 (415) 123-4567
      </div>
    </div>
  </template>
  <template #subtitle>
    <div
      class="d-fc-critical"
      @click.stop="onMarkAsSpam"
    >
      Mark as spam
    </div>
  </template>
</dt-recipe-contact-info>
`})}),`
`,n.jsx(t.h3,{id:"clickable-group-contact",children:"Clickable group contact"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-button
  importance="clear"
  kind="muted"
  @click="onGroupContactClick"
>
  <dt-recipe-contact-info>
    <template #header>
      <div class="d-d-flex d-ai-center d-mb2">
        <div class="d-fs-200 d-fw-bold d-mr4">
          Joseph Lumaban
        </div>
      </div>
    </template>
    <template #subtitle>
      <div class="d-d-flex d-ai-center">
        <div class="d-fs-100 d-mt2">
          +1 (415) 123-4567
        </div>
        <dt-icon name="check" size="100"
          class="d-fc-tertiary d-icon--size-100 d-va-text-bottom"
        />
      </div>
    </template>
    <template #bottom>
      <div class="d-d-flex d-ai-center d-mtn6">
        <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">
          &nbsp;
        </div>
        <div class="d-fs-100 d-mr4">
          Aerolabs Support
        </div>
      </div>
    </template>
  </dt-recipe-contact-info>
</dt-button>
`})}),`
`,n.jsx(t.h3,{id:"group-contact-with-transfer-info",children:"Group contact with transfer info"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-contact-info>
  <template #header>
    <div class="d-d-flex d-ai-center d-mb2">
      <div class="d-fs-200 d-fw-bold d-mr4">
        Joseph Lumaban
      </div>
    </div>
  </template>
  <template #subtitle>
    <div class="d-d-flex d-ai-center">
      <div class="d-fs-100 d-mt2">
        +1 (415) 123-4567
      </div>
      <dt-icon name="check" size="100"
        class="d-fc-tertiary d-icon--size-100 d-va-text-bottom"
      />
    </div>
  </template>
  <template #bottom>
    <div class="d-d-flex d-ai-center d-mtn6">
      <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">
        &nbsp;
      </div>
      <div class="d-fs-100 d-mr4">
        Aerolabs Support
      </div>
      <div class="d-fw-bold d-fs-100">
        • Transfer from Billing Support
      </div>
    </div>
  </template>
</dt-recipe-contact-info>
`})}),`
`,n.jsx(t.h3,{id:"admin-view--listening-in",children:"Admin view / listening in"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-contact-info>
  <template #header>
    <div class="d-d-flex d-ai-center d-mb2">
      <div class="d-fw-bold d-fs-200">
        Joseph Lumaban & Justin H.
      </div>
      <div class="d-fs-200">
        (Agent)
      </div>
    </div>
  </template>
  <template #subtitle>
    <div class="d-d-flex d-ai-center">
      <div class="d-fs-100 d-mt2">
        +1 (415) 123-4567
      </div>
      <dt-icon name="check" size="100"
        class="d-fc-tertiary d-icon--size-100 d-va-text-bottom"
      />
    </div>
  </template>
  <template #bottom>
    <div class="d-d-flex d-ai-center d-mtn6">
      <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">
        &nbsp;
      </div>
      <div class="d-fs-100 d-mr4">
        Aerolabs Support
      </div>
    </div>
  </template>
</dt-recipe-contact-info>
`})}),`
`,n.jsx(t.h3,{id:"contact-with-items-in-right-slot",children:"Contact with items in right slot"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<dt-recipe-contact-info
  :avatar-full-name="avatarFullName"
  :avatar-seed="avatarSeed"
>
  <template #header>
    <div class="d-fw-bold d-fs-200">
      Natalie Woods
    </div>
  </template>
  <template #subtitle>
    +1 (415) 123-4567
  </template>
  <template #right>
    <div class="d-d-flex d-ai-center d-m16">
      <dt-icon name="webchat" class="d-m4" />
      <dt-icon name="more-horizontal" class="d-m4" />
      <div class="d-m4">
        0:32
      </div>
    </div>
  </template>
  <template #bottom>
    2 matches found.
    <dt-button
      link
      @click.stop="onConnectToARecord"
    >
      Connect to a record
    </dt-button>
  </template>
</dt-recipe-contact-info>
`})})]})}function V(e={}){const{wrapper:t}=Object.assign({},s(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(i,e)})):i(e)}export{V as default};
//# sourceMappingURL=contact_info-1ac3759e.js.map