import{a as y}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as v}from"./storybook_utils-XrTpeJKJ.js";import{D as L}from"./button-5wqdSkdq.js";import{D as A}from"./icon-GkF47-VR.js";import{n as l}from"./_plugin-vue2_normalizer-XBmYDgEh.js";const N={name:"DtPagination",components:{DtButton:L,DtIcon:A},props:{ariaLabel:{type:String,required:!0},totalPages:{type:Number,required:!0},prevAriaLabel:{type:String,required:!0},nextAriaLabel:{type:String,required:!0},pageNumberAriaLabel:{type:Function,required:!0},activePage:{type:Number,default:1},maxVisible:{type:Number,default:5}},emits:["change"],data(){return{currentPage:this.activePage}},computed:{isFirstPage(){return this.currentPage===1},isLastPage(){return this.currentPage===this.totalPages},pages(){if(this.maxVisible===0)return[];if(this.totalPages<=this.maxVisible)return this.range(1,this.totalPages);const t=this.maxVisible-1,a=this.totalPages-t+1;if(this.currentPage<t)return[...this.range(1,t),"...",this.totalPages];if(this.currentPage>a)return[1,"...",...this.range(a,this.totalPages)];const e=this.maxVisible-(3-this.maxVisible%2),n=Math.floor(e/2),s=this.currentPage-n,p=this.currentPage+n;return[1,"...",...this.range(s,p),"...",this.totalPages]}},methods:{range(t,a){const e=[];t=t>0?t:1;for(let n=t;n<=a;n++)e.push(n);return e},changePage(t){this.currentPage=t,this.$emit("change",this.currentPage)}}};var D=function(){var a=this,e=a._self._c;return e("nav",{staticClass:"d-pagination",attrs:{"aria-label":a.ariaLabel}},[e("dt-button",{staticClass:"d-pagination__button",class:a.isFirstPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary",attrs:{"data-qa":"dt-pagination-prev","aria-label":a.prevAriaLabel,kind:a.isFirstPage?"default":"muted",importance:a.isFirstPage?"primary":"clear",disabled:a.isFirstPage},on:{click:function(n){return a.changePage(a.currentPage-1)}}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"chevron-left",size:"300"}})],1)],2),a._l(a.pages,function(n,s){return e("div",{key:`page-${n}-${s}`,class:{"d-pagination__separator":isNaN(Number(n))}},[isNaN(Number(n))?e("div",{staticClass:"d-pagination__separator-icon",attrs:{"data-qa":"dt-pagination-separator"}},[e("dt-icon",{attrs:{name:"more-horizontal",size:"300"}})],1):e("dt-button",{attrs:{"aria-label":a.pageNumberAriaLabel(n),kind:a.currentPage===n?"default":"muted",importance:a.currentPage===n?"primary":"clear","label-class":""},on:{click:function(p){return a.changePage(n)}}},[a._v(" "+a._s(n)+" ")])],1)}),e("dt-button",{staticClass:"d-pagination__button",class:a.isLastPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary",attrs:{"data-qa":"dt-pagination-next","aria-label":a.nextAriaLabel,disabled:a.isLastPage,kind:"muted",importance:a.isLastPage?"primary":"clear"},on:{click:function(n){return a.changePage(a.currentPage+1)}}},[e("template",{slot:"icon"},[e("dt-icon",{attrs:{name:"chevron-right",size:"300"}})],1)],2)],2)},w=[],h=l(N,D,w,!1,null,null,null,null);const o=h.exports;h.exports.__docgenInfo={displayName:"DtPagination",description:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.",tags:{see:[{description:"https://dialpad.design/components/pagination.html",title:"see"}]},exportName:"default",props:[{name:"ariaLabel",description:"Descriptive label for the pagination content.",type:{name:"string"},required:!0},{name:"totalPages",description:"The total number of the pages",type:{name:"number"},required:!0},{name:"prevAriaLabel",description:"Descriptive label for the previous button.",type:{name:"string"},required:!0},{name:"nextAriaLabel",description:"Descriptive label for the next button.",type:{name:"string"},required:!0},{name:"pageNumberAriaLabel",description:"A method that will be called to get the aria label of each page.",type:{name:"func"},required:!0},{name:"activePage",description:"The active current page in the list of pages, defaults to the first page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"maxVisible",description:`Determines the max pages to be shown in the list. Using an odd number is recommended.
If an even number is given, then it will be rounded down to the nearest odd number to always
keep current page in the middle when current page is in the mid-range.`,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"change",description:"Page change event",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]};const $={name:"DtPaginationDefault",components:{DtPagination:o},methods:{getPageNumberAriaLabel(t){return t===this.$attrs.totalPages?`Last page ${t}`:`Page ${t}`}}};var V=function(){var a=this,e=a._self._c;return e("dt-pagination",{attrs:{"total-pages":a.$attrs.totalPages,"active-page":a.$attrs.activePage,"max-visible":a.$attrs.maxVisible,"aria-label":a.$attrs.ariaLabel,"prev-aria-label":a.$attrs.prevAriaLabel,"next-aria-label":a.$attrs.nextAriaLabel,"page-number-aria-label":a.getPageNumberAriaLabel},on:{change:a.$attrs.onChange}})},C=[],f=l($,V,C,!1,null,null,null,null);const S=f.exports;f.exports.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const k={name:"DtPaginationVariants",components:{DtPagination:o},methods:{getPageNumberAriaLabel(t){return`Page ${t}`}}};var F=function(){var a=this,e=a._self._c;return e("div",{staticClass:"d-divide-y d-divide-purple-400"},[e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[a._v(" Separator in the end ")]),e("dt-pagination",{attrs:{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel}})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[a._v(" Separator in the beginning ")]),e("dt-pagination",{attrs:{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel}})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[a._v(" Separator on both sides ")]),e("dt-pagination",{attrs:{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel}})],1)])},q=[],P=l(k,F,q,!1,null,null,null,null);const T=P.exports;P.exports.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const _={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:y("change")},x={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},z={title:"Components/Pagination",component:o,args:_,argTypes:x,excludeStories:/.*Data$/},I=(t,{argTypes:a})=>v(t,a,S),O=(t,{argTypes:a})=>v(t,a,T),r={render:I,args:{},parameters:{docs:{source:{code:`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   `}}}},i={render:O,args:{},parameters:{docs:{source:{code:`
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
  `}}}};var d,g,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var u,b,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(b=i.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const R=["argsData","argTypesData","Default","Variants"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:i,__namedExportsOrder:R,argTypesData:x,argsData:_,default:z},Symbol.toStringTag,{value:"Module"}));export{r as D,G as P,i as V};
//# sourceMappingURL=pagination.stories-1dfUjj_t.js.map
