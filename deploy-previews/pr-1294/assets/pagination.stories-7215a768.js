import{a as x}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as m}from"./storybook_utils-996a989f.js";import{D as r}from"./pagination-7b133d25.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const P={name:"DtPaginationDefault",components:{DtPagination:r},methods:{getPageNumberAriaLabel(t){return t===this.$attrs.totalPages?`Last page ${t}`:`Page ${t}`}}};var v=function(){var a=this,e=a._self._c;return e("dt-pagination",{attrs:{"total-pages":a.$attrs.totalPages,"active-page":a.$attrs.activePage,"max-visible":a.$attrs.maxVisible,"aria-label":a.$attrs.ariaLabel,"prev-aria-label":a.$attrs.prevAriaLabel,"next-aria-label":a.$attrs.nextAriaLabel,"page-number-aria-label":a.getPageNumberAriaLabel},on:{change:a.$attrs.onChange}})},y=[];v._withStripped=!0;var l=u(P,v,y,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue";const L=l.exports;l.exports.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const w={name:"DtPaginationVariants",components:{DtPagination:r},methods:{getPageNumberAriaLabel(t){return`Page ${t}`}}};var f=function(){var a=this,e=a._self._c;return e("div",{staticClass:"d-divide-y d-divide-purple-400"},[e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[a._v(" Separator in the end ")]),e("dt-pagination",{attrs:{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel}})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[a._v(" Separator in the beginning ")]),e("dt-pagination",{attrs:{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel}})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[a._v(" Separator on both sides ")]),e("dt-pagination",{attrs:{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel}})],1)])},A=[];f._withStripped=!0;var o=u(w,f,A,!1,null,null,null,null);o.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue";const D=o.exports;o.exports.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const _={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:x("change")},h={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},N={title:"Components/Pagination",component:r,args:_,argTypes:h,excludeStories:/.*Data$/},S=(t,{argTypes:a})=>m(t,a,L),$=(t,{argTypes:a})=>m(t,a,D),n={render:S,args:{},parameters:{docs:{source:{code:`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   `}}}},i={render:$,args:{},parameters:{docs:{source:{code:`
   <div class="d-divide-y d-divide-purple-400">
      <div class="d-m32">
        <p class="d-my16 d-fs-200 d-fw-bold">
          Separator in the end
        </p>
        <dt-pagination
          :total-pages="10"
          :aria-label="'pagination with separator in the end'"
          :prev-aria-label="'previous'"
          :next-aria-label="'next'"
          :page-number-aria-label="getPageNumberAriaLabel"
        />
      </div>
      <div class="d-m32">
        <p class="d-my16 d-fs-200 d-fw-bold">
          Separator in the beginning
        </p>
        <dt-pagination
          :total-pages="15"
          :active-page="13"
          :aria-label="'pagination with separator in the beginning'"
          :prev-aria-label="'previous'"
          :next-aria-label="'next'"
          :page-number-aria-label="getPageNumberAriaLabel"
        />
      </div>
      <div class="d-m32">
        <p class="d-my16 d-fs-200 d-fw-bold">
          Separator on both sides
        </p>
        <dt-pagination
          :total-pages="10"
          :active-page="5"
          :aria-label="'pagination with separator on both sides'"
          :prev-aria-label="'previous'"
          :next-aria-label="'next'"
          :page-number-aria-label="getPageNumberAriaLabel"
        />
      </div>
    </div>
  `}}}};var s,p,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   \`
      }
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,b,c;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
   <div class="d-divide-y d-divide-purple-400">
      <div class="d-m32">
        <p class="d-my16 d-fs-200 d-fw-bold">
          Separator in the end
        </p>
        <dt-pagination
          :total-pages="10"
          :aria-label="'pagination with separator in the end'"
          :prev-aria-label="'previous'"
          :next-aria-label="'next'"
          :page-number-aria-label="getPageNumberAriaLabel"
        />
      </div>
      <div class="d-m32">
        <p class="d-my16 d-fs-200 d-fw-bold">
          Separator in the beginning
        </p>
        <dt-pagination
          :total-pages="15"
          :active-page="13"
          :aria-label="'pagination with separator in the beginning'"
          :prev-aria-label="'previous'"
          :next-aria-label="'next'"
          :page-number-aria-label="getPageNumberAriaLabel"
        />
      </div>
      <div class="d-m32">
        <p class="d-my16 d-fs-200 d-fw-bold">
          Separator on both sides
        </p>
        <dt-pagination
          :total-pages="10"
          :active-page="5"
          :aria-label="'pagination with separator on both sides'"
          :prev-aria-label="'previous'"
          :next-aria-label="'next'"
          :page-number-aria-label="getPageNumberAriaLabel"
        />
      </div>
    </div>
  \`
      }
    }
  }
}`,...(c=(b=i.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const C=["argsData","argTypesData","Default","Variants"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Variants:i,__namedExportsOrder:C,argTypesData:h,argsData:_,default:N},Symbol.toStringTag,{value:"Module"}));export{n as D,O as P,i as V};
//# sourceMappingURL=pagination.stories-7215a768.js.map
