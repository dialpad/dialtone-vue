import{a as A}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as P}from"./storybook_utils-b781ced2.js";import{D as N}from"./button-b421fc95.js";import{D}from"./icon-64b3bee5.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";const V={name:"DtPagination",components:{DtButton:N,DtIcon:D},props:{ariaLabel:{type:String,required:!0},totalPages:{type:Number,required:!0},prevAriaLabel:{type:String,required:!0},nextAriaLabel:{type:String,required:!0},pageNumberAriaLabel:{type:Function,required:!0},activePage:{type:Number,default:1},maxVisible:{type:Number,default:5}},emits:["change"],data(){return{currentPage:this.activePage}},computed:{isFirstPage(){return this.currentPage===1},isLastPage(){return this.currentPage===this.totalPages},pages(){if(this.maxVisible===0)return[];if(this.totalPages<=this.maxVisible)return this.range(1,this.totalPages);const t=this.maxVisible-1,e=this.totalPages-t+1;if(this.currentPage<t)return[...this.range(1,t),"...",this.totalPages];if(this.currentPage>e)return[1,"...",...this.range(e,this.totalPages)];const a=this.maxVisible-(3-this.maxVisible%2),n=Math.floor(a/2),s=this.currentPage-n,c=this.currentPage+n;return[1,"...",...this.range(s,c),"...",this.totalPages]}},methods:{range(t,e){const a=[];t=t>0?t:1;for(let n=t;n<=e;n++)a.push(n);return a},changePage(t){this.currentPage=t,this.$emit("change",this.currentPage)}}};var _=function(){var e=this,a=e._self._c;return a("nav",{staticClass:"d-d-flex d-fd-row d-gg4 d-ai-center",attrs:{"aria-label":e.ariaLabel}},[a("dt-button",{staticClass:"d-px8",class:e.isFirstPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary",attrs:{"data-qa":"dt-pagination-prev","aria-label":e.prevAriaLabel,kind:"muted",importance:e.isFirstPage?"primary":"clear",disabled:e.isFirstPage},on:{click:function(n){return e.changePage(e.currentPage-1)}}},[a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:"chevron-left",size:"300"}})],1)],2),e._l(e.pages,function(n,s){return a("div",{key:`page-${n}-${s}`,class:{"d-as-flex-end":isNaN(Number(n))}},[isNaN(Number(n))?a("div",{staticClass:"d-fc-tertiary d-w24 d-ta-center",attrs:{"data-qa":"dt-pagination-separator"}},[a("dt-icon",{attrs:{name:"more-horizontal",size:"300"}})],1):a("dt-button",{attrs:{"aria-label":e.pageNumberAriaLabel(n),kind:e.currentPage===n?"default":"muted",importance:e.currentPage===n?"primary":"clear","label-class":""},on:{click:function(c){return e.changePage(n)}}},[e._v(" "+e._s(n)+" ")])],1)}),a("dt-button",{staticClass:"d-px8",class:e.isLastPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary",attrs:{"data-qa":"dt-pagination-next","aria-label":e.nextAriaLabel,disabled:e.isLastPage,kind:"muted",importance:e.isLastPage?"primary":"clear"},on:{click:function(n){return e.changePage(e.currentPage+1)}}},[a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:"chevron-right",size:"300"}})],1)],2)],2)},S=[];_._withStripped=!0;var l=o(V,_,S,!1,null,null,null,null);l.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue";const p=l.exports;l.exports.__docgenInfo={displayName:"DtPagination",description:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.",tags:{see:[{description:"https://dialpad.design/components/pagination.html",title:"see"}]},exportName:"default",props:[{name:"ariaLabel",description:"Descriptive label for the pagination content.",type:{name:"string"},required:!0},{name:"totalPages",description:"The total number of the pages",type:{name:"number"},required:!0},{name:"prevAriaLabel",description:"Descriptive label for the previous button.",type:{name:"string"},required:!0},{name:"nextAriaLabel",description:"Descriptive label for the next button.",type:{name:"string"},required:!0},{name:"pageNumberAriaLabel",description:"A method that will be called to get the aria label of each page.",type:{name:"func"},required:!0},{name:"activePage",description:"The active current page in the list of pages, defaults to the first page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"maxVisible",description:`Determines the max pages to be shown in the list. Using an odd number is recommended.
If an even number is given, then it will be rounded down to the nearest odd number to always
keep current page in the middle when current page is in the mid-range.`,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"change",description:"Page change event",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]};const C={name:"DtPaginationDefault",components:{DtPagination:p},methods:{getPageNumberAriaLabel(t){return t===this.totalPages?`Last page ${t}`:`Page ${t}`}}};var x=function(){var e=this,a=e._self._c;return a("dt-pagination",{attrs:{"total-pages":e.totalPages,"active-page":e.activePage,"max-visible":e.maxVisible,"aria-label":e.ariaLabel,"prev-aria-label":e.prevAriaLabel,"next-aria-label":e.nextAriaLabel,"page-number-aria-label":e.getPageNumberAriaLabel},on:{change:e.onChange}})},$=[];x._withStripped=!0;var d=o(C,x,$,!1,null,null,null,null);d.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue";const k=d.exports;d.exports.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const q={name:"DtPaginationVariants",components:{DtPagination:p},methods:{getPageNumberAriaLabel(t){return`Page ${t}`}}};var y=function(){var e=this,a=e._self._c;return a("div",{staticClass:"d-divide-y d-divide-purple-400"},[a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[e._v(" Separator in the end ")]),a("dt-pagination",{attrs:{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":e.getPageNumberAriaLabel}})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[e._v(" Separator in the beginning ")]),a("dt-pagination",{attrs:{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":e.getPageNumberAriaLabel}})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[e._v(" Separator on both sides ")]),a("dt-pagination",{attrs:{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":e.getPageNumberAriaLabel}})],1)])},F=[];y._withStripped=!0;var g=o(q,y,F,!1,null,null,null,null);g.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue";const T=g.exports;g.exports.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const L={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:A("change")},w={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},z={title:"Components/Pagination",component:p,args:L,argTypes:w,excludeStories:/.*Data$/},I=(t,{argTypes:e})=>P(t,e,k),O=(t,{argTypes:e})=>P(t,e,T),i={render:I,args:{},parameters:{docs:{source:{code:`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   `}}}},r={render:O,args:{},parameters:{docs:{source:{code:`
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
  `}}}};var u,b,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(b=i.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const R=["argsData","argTypesData","Default","Variants"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:r,__namedExportsOrder:R,argTypesData:w,argsData:L,default:z},Symbol.toStringTag,{value:"Module"}));export{i as D,G as P,r as V};
//# sourceMappingURL=pagination.stories-4a3b17e1.js.map
