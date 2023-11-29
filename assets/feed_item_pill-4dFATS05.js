import{j as e}from"./jsx-runtime-TS445EDF.js";import{M as a,b as l,C as i,d as s,e as p}from"./index-TvqPTTjW.js";import{F as m,D as d,V as c}from"./feed_item_pill.stories-Gieh8Ddr.js";import{u as o}from"./index-1w0FGI03.js";import"./iframe-SDD29zDs.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-aKxH7ZY0.js";import"./index-1QZrJT68.js";import"./index-PPLHz8o0.js";import"./storybook_utils-XrTpeJKJ.js";import"./icon-GkF47-VR.js";import"./icon_constants-spQP7USY.js";import"./utils-E69eXbJV.js";import"./vue.esm-Wy6pS3yJ.js";import"./_plugin-vue2_normalizer-XBmYDgEh.js";import"./item_layout-gbZkhYu9.js";import"./collapsible-ZCWVtMkX.js";import"./button-5wqdSkdq.js";import"./link_constants-Igh3f6J8.js";import"./lazy_show-qFWx7ZlG.js";function r(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(t.h1,{id:"feed-item-pill",children:"Feed Item Pill"}),`
`,e.jsx(l,{children:e.jsx(t.p,{children:"A generic layout for different Feed Items"})}),`
`,e.jsx(t.h2,{id:"base-style",children:"Base Style"}),`
`,e.jsx(i,{children:e.jsx(s,{of:d})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i,{children:e.jsx(s,{of:c})}),`
`,e.jsx(t.h2,{id:"slots-props--events",children:"Slots, Props & Events"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { DtRecipeFeedItemPill } from '@dialpad/dialtone-vue';
`})}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-vue",children:`  <dt-recipe-feed-item-pill
    :icon-name="iconName"
    :title="title"
    :wrapper-class="wrapperClass"
    :button-class="buttonClass"
    :border-color="borderColor"
    :aria-label="ariaLabel"
    :toggleable="toggleable"
  >
    <template #subtitle>
      Subtitle
    </template>
    <template #bottom>
      <span class="d-fc-tertiary d-fs-100">Bottom</span>
    </template>
    <template #right>
      <div class="d-pr16">
        <dt-button
          kind="muted"
          importance="clear"
          @click.stop=""
        >
          <template slot="icon">
            <dt-icon
              name="external-link"
              size="200"
            />
          </template>
        </dt-button>
      </div>
    </template>
    <template #content>
      <span class="d-p16">
        Content
      </span>
    </template>
  </dt-recipe-feed-item-pill>
`})})]})}function V(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{V as default};
//# sourceMappingURL=feed_item_pill-4dFATS05.js.map
