import{a as D}from"./chunk-AY7I2SME-5eb1ab46.js";import{c as m}from"./storybook_utils-5e2f75ca.js";import{D as l}from"./pagination-531fe485.js";import{t as u,o as v,b as N,p as $,e,x as o}from"./vue.esm-bundler-807df745.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const f={name:"DtPaginationDefault",components:{DtPagination:l},methods:{getPageNumberAriaLabel(a){return a===this.totalPages?`Last page ${a}`:`Page ${a}`}}};function V(a,y,L,A,w,t){const n=u("dt-pagination");return v(),N(n,{"aria-label":a.$attrs.ariaLabel,"total-pages":a.$attrs.totalPages,"active-page":a.$attrs.activePage,"max-visible":a.$attrs.maxVisible,"prev-aria-label":a.$attrs.prevAriaLabel,"next-aria-label":a.$attrs.nextAriaLabel,"page-number-aria-label":t.getPageNumberAriaLabel,onChange:a.$attrs.onChange},null,8,["aria-label","total-pages","active-page","max-visible","prev-aria-label","next-aria-label","page-number-aria-label","onChange"])}const S=h(f,[["render",V],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]]);f.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const _={name:"DtPaginationVariants",components:{DtPagination:l},methods:{getPageNumberAriaLabel(a){return`Page ${a}`}}},T={class:"d-divide-y d-divide-purple-400"},C={class:"d-m32"},k=e("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the end ",-1),B={class:"d-m32"},F=e("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the beginning ",-1),O={class:"d-m32"},j=e("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator on both sides ",-1);function E(a,y,L,A,w,t){const n=u("dt-pagination");return v(),$("div",T,[e("div",C,[k,o(n,{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":t.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),e("div",B,[F,o(n,{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":t.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),e("div",O,[j,o(n,{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":t.getPageNumberAriaLabel},null,8,["page-number-aria-label"])])])}const I=h(_,[["render",E],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]]);_.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const x={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:D("change")},P={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},z={title:"Components/Pagination",component:l,args:x,argTypes:P,excludeStories:/.*Data$/},M=a=>m(a,S),q=a=>m(a,I),i={render:M,args:{},parameters:{docs:{source:{code:`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   `}}}},r={render:q,args:{},parameters:{docs:{source:{code:`
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
  `}}}};var s,p,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,b,c;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(c=(b=r.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const G=["argsData","argTypesData","Default","Variants"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:r,__namedExportsOrder:G,argTypesData:P,argsData:x,default:z},Symbol.toStringTag,{value:"Module"}));export{i as D,U as P,r as V};
//# sourceMappingURL=pagination.stories-aaf1ecf9.js.map
