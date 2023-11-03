import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as u}from"./storybook_utils-43ef8c35.js";import{D as s}from"./pagination-68bc4087.js";import{s as v,o as h,b as N,k as $,e,u as l}from"./vue.esm-bundler-4299d4fa.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const _={name:"DtPaginationDefault",components:{DtPagination:s},methods:{getPageNumberAriaLabel(a){return a===this.totalPages?`Last page ${a}`:`Page ${a}`}}};function V(a,n,L,A,w,t){const i=v("dt-pagination");return h(),N(i,{"aria-label":a.$attrs.ariaLabel,"total-pages":a.$attrs.totalPages,"active-page":a.$attrs.activePage,"max-visible":a.$attrs.maxVisible,"prev-aria-label":a.$attrs.prevAriaLabel,"next-aria-label":a.$attrs.nextAriaLabel,"page-number-aria-label":t.getPageNumberAriaLabel,onChange:a.$attrs.onChange},null,8,["aria-label","total-pages","active-page","max-visible","prev-aria-label","next-aria-label","page-number-aria-label","onChange"])}const S=f(_,[["render",V],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]]);_.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const x={name:"DtPaginationVariants",components:{DtPagination:s},methods:{getPageNumberAriaLabel(a){return`Page ${a}`}}},T={class:"d-divide-y d-divide-purple-400"},C={class:"d-m32"},k=e("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the end ",-1),B={class:"d-m32"},F=e("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the beginning ",-1),O={class:"d-m32"},j=e("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator on both sides ",-1);function E(a,n,L,A,w,t){const i=v("dt-pagination");return h(),$("div",T,[e("div",C,[k,l(i,{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":t.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),e("div",B,[F,l(i,{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":t.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),e("div",O,[j,l(i,{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":t.getPageNumberAriaLabel},null,8,["page-number-aria-label"])])])}const I=f(x,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]]);x.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const P={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:D("change")},y={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},z={title:"Components/Pagination",component:s,args:P,argTypes:y,excludeStories:/.*Data$/},M=(a,{argTypes:n})=>u(a,n,S),q=(a,{argTypes:n})=>u(a,n,I),r={render:M,args:{},parameters:{docs:{source:{code:`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   `}}}},o={render:q,args:{},parameters:{docs:{source:{code:`
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
  `}}}};var p,d,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,c,m;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const G=["argsData","argTypesData","Default","Variants"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:o,__namedExportsOrder:G,argTypesData:y,argsData:P,default:z},Symbol.toStringTag,{value:"Module"}));export{r as D,U as P,o as V};
//# sourceMappingURL=pagination.stories-61cf8c1b.js.map
