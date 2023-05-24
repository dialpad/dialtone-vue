import{a as F}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as V}from"./storybook_utils-cf9b483a.js";import{D as z}from"./button-586a189e.js";import{D as I}from"./icon-2be5d650.js";import{a as u,f as p,d as l,w as v,n as h,F as x,u as B,o as d,k as f,s as O,t as j,b as E,g}from"./vue.esm-bundler-15aa0fd7.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const k={name:"DtPagination",components:{DtButton:z,DtIcon:I},props:{ariaLabel:{type:String,required:!0},totalPages:{type:Number,required:!0},prevAriaLabel:{type:String,required:!0},nextAriaLabel:{type:String,required:!0},pageNumberAriaLabel:{type:Function,required:!0},activePage:{type:Number,default:1},maxVisible:{type:Number,default:5}},emits:["change"],data(){return{currentPage:this.activePage}},computed:{isFirstPage(){return this.currentPage===1},isLastPage(){return this.currentPage===this.totalPages},pages(){if(this.maxVisible===0)return[];if(this.totalPages<=this.maxVisible)return this.range(1,this.totalPages);const e=this.maxVisible-1,t=this.totalPages-e+1;if(this.currentPage<e)return[...this.range(1,e),"...",this.totalPages];if(this.currentPage>t)return[1,"...",...this.range(t,this.totalPages)];const n=this.maxVisible-(3-this.maxVisible%2),r=Math.floor(n/2),o=this.currentPage-r,a=this.currentPage+r;return[1,"...",...this.range(o,a),"...",this.totalPages]}},methods:{range(e,t){const n=[];e=e>0?e:1;for(let r=e;r<=t;r++)n.push(r);return n},changePage(e){this.currentPage=e,this.$emit("change",this.currentPage)}}},M=["aria-label"],U={key:0,class:"d-fc-tertiary d-w24 d-ta-center","data-qa":"dt-pagination-separator"};function G(e,t,n,r,o,a){const s=u("dt-icon"),m=u("dt-button");return d(),p("nav",{"aria-label":n.ariaLabel,class:"d-d-flex d-fd-row d-gg4 d-ai-center"},[l(m,{class:h(["d-px8",a.isFirstPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-prev","aria-label":n.prevAriaLabel,kind:"muted",importance:a.isFirstPage?"primary":"clear",disabled:a.isFirstPage,onClick:t[0]||(t[0]=i=>a.changePage(o.currentPage-1))},{icon:v(()=>[l(s,{name:"chevron-left",size:"300"})]),_:1},8,["aria-label","importance","disabled","class"]),(d(!0),p(x,null,B(a.pages,(i,$)=>(d(),p("div",{key:`page-${i}-${$}`,class:h({"d-as-flex-end":isNaN(Number(i))})},[f(" eslint-disable vue/no-bare-strings-in-template "),isNaN(Number(i))?(d(),p("div",U,[l(s,{name:"more-horizontal",size:"300"}),f(" … ")])):(d(),p(x,{key:1},[f(" eslint-enable vue/no-bare-strings-in-template "),l(m,{"aria-label":n.pageNumberAriaLabel(i),kind:o.currentPage===i?"default":"muted",importance:o.currentPage===i?"primary":"clear","label-class":"",onClick:se=>a.changePage(i)},{default:v(()=>[O(j(i),1)]),_:2},1032,["aria-label","kind","importance","onClick"])],2112))],2))),128)),l(m,{class:h(["d-px8",a.isLastPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-next","aria-label":n.nextAriaLabel,disabled:a.isLastPage,kind:"muted",importance:a.isLastPage?"primary":"clear",onClick:t[1]||(t[1]=i=>a.changePage(o.currentPage+1))},{icon:v(()=>[l(s,{name:"chevron-right",size:"300"})]),_:1},8,["aria-label","disabled","importance","class"])],8,M)}const _=P(k,[["render",G],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]]);k.__docgenInfo={displayName:"DtPagination",description:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.",tags:{see:[{description:"https://dialpad.design/components/pagination.html",title:"see"}]},exportName:"default",props:[{name:"ariaLabel",description:"Descriptive label for the pagination content.",type:{name:"string"},required:!0},{name:"totalPages",description:"The total number of the pages",type:{name:"number"},required:!0},{name:"prevAriaLabel",description:"Descriptive label for the previous button.",type:{name:"string"},required:!0},{name:"nextAriaLabel",description:"Descriptive label for the next button.",type:{name:"string"},required:!0},{name:"pageNumberAriaLabel",description:"A method that will be called to get the aria label of each page.",type:{name:"func"},required:!0},{name:"activePage",description:"The active current page in the list of pages, defaults to the first page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"maxVisible",description:`Determines the max pages to be shown in the list. Using an odd number is recommended.
If an even number is given, then it will be rounded down to the nearest odd number to always
keep current page in the middle when current page is in the mid-range.`,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"change",description:"Page change event",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]};const S={name:"DtPaginationDefault",components:{DtPagination:_},methods:{getPageNumberAriaLabel(e){return e===this.totalPages?`Last page ${e}`:`Page ${e}`}}};function H(e,t,n,r,o,a){const s=u("dt-pagination");return d(),E(s,{"aria-label":e.$attrs.ariaLabel,"total-pages":e.$attrs.totalPages,"active-page":e.$attrs.activePage,"max-visible":e.$attrs.maxVisible,"prev-aria-label":e.$attrs.prevAriaLabel,"next-aria-label":e.$attrs.nextAriaLabel,"page-number-aria-label":a.getPageNumberAriaLabel,onChange:e.$attrs.onChange},null,8,["aria-label","total-pages","active-page","max-visible","prev-aria-label","next-aria-label","page-number-aria-label","onChange"])}const J=P(S,[["render",H],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]]);S.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const C={name:"DtPaginationVariants",components:{DtPagination:_},methods:{getPageNumberAriaLabel(e){return`Page ${e}`}}},K={class:"d-divide-y d-divide-purple-400"},Q={class:"d-m32"},R=g("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the end ",-1),W={class:"d-m32"},X=g("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the beginning ",-1),Y={class:"d-m32"},Z=g("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator on both sides ",-1);function ee(e,t,n,r,o,a){const s=u("dt-pagination");return d(),p("div",K,[g("div",Q,[R,l(s,{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),g("div",W,[X,l(s,{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),g("div",Y,[Z,l(s,{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])])])}const ae=P(C,[["render",ee],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]]);C.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const T={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:F("change")},q={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},te={title:"Components/Pagination",component:_,args:T,argTypes:q,excludeStories:/.*Data$/},ne=e=>V(e,J),ie=e=>V(e,ae),c={render:ne,args:{},parameters:{docs:{source:{code:`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   `}}}},b={render:ie,args:{},parameters:{docs:{source:{code:`
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
  `}}}};var y,L,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var w,A,D;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(A=b.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const re=["argsData","argTypesData","Default","Variants"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:b,__namedExportsOrder:re,argTypesData:q,argsData:T,default:te},Symbol.toStringTag,{value:"Module"}));export{c as D,be as P,b as V};
//# sourceMappingURL=pagination.stories-f7a48e50.js.map
