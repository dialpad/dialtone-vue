import{a as $}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as w}from"./storybook_utils-ea1afa1b.js";import{D as F}from"./button-99271aa3.js";import{D as z}from"./icon-cde06ed8.js";import{e as g,d as o,w as h,n as v,F as I,s as B,a as u,o as d,b as D,q as O,t as j,f as p}from"./vue.esm-bundler-8a039e44.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const V={name:"DtPagination",components:{DtButton:F,DtIcon:z},props:{ariaLabel:{type:String,required:!0},totalPages:{type:Number,required:!0},prevAriaLabel:{type:String,required:!0},nextAriaLabel:{type:String,required:!0},pageNumberAriaLabel:{type:Function,required:!0},activePage:{type:Number,default:1},maxVisible:{type:Number,default:5}},emits:["change"],data(){return{currentPage:this.activePage}},computed:{isFirstPage(){return this.currentPage===1},isLastPage(){return this.currentPage===this.totalPages},pages(){if(this.maxVisible===0)return[];if(this.totalPages<=this.maxVisible)return this.range(1,this.totalPages);const e=this.maxVisible-1,t=this.totalPages-e+1;if(this.currentPage<e)return[...this.range(1,e),"...",this.totalPages];if(this.currentPage>t)return[1,"...",...this.range(t,this.totalPages)];const n=this.maxVisible-(3-this.maxVisible%2),i=Math.floor(n/2),l=this.currentPage-i,a=this.currentPage+i;return[1,"...",...this.range(l,a),"...",this.totalPages]}},methods:{range(e,t){const n=[];e=e>0?e:1;for(let i=e;i<=t;i++)n.push(i);return n},changePage(e){this.currentPage=e,this.$emit("change",this.currentPage)}}},E=["aria-label"],M={key:0,class:"d-fc-tertiary d-w24 d-ta-center","data-qa":"dt-pagination-separator"};function U(e,t,n,i,l,a){const s=u("dt-icon"),m=u("dt-button");return d(),g("nav",{"aria-label":n.ariaLabel,class:"d-d-flex d-fd-row d-gg4 d-ai-center"},[o(m,{class:v(["d-px8",a.isFirstPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-prev","aria-label":n.prevAriaLabel,kind:"muted",importance:a.isFirstPage?"primary":"clear",disabled:a.isFirstPage,onClick:t[0]||(t[0]=r=>a.changePage(l.currentPage-1))},{icon:h(()=>[o(s,{name:"chevron-left",size:"300"})]),_:1},8,["aria-label","importance","disabled","class"]),(d(!0),g(I,null,B(a.pages,(r,T)=>(d(),g("div",{key:`page-${r}-${T}`,class:v({"d-as-flex-end":isNaN(Number(r))})},[isNaN(Number(r))?(d(),g("div",M,[o(s,{name:"more-horizontal",size:"300"})])):(d(),D(m,{key:1,"aria-label":n.pageNumberAriaLabel(r),kind:l.currentPage===r?"default":"muted",importance:l.currentPage===r?"primary":"clear","label-class":"",onClick:ie=>a.changePage(r)},{default:h(()=>[O(j(r),1)]),_:2},1032,["aria-label","kind","importance","onClick"]))],2))),128)),o(m,{class:v(["d-px8",a.isLastPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-next","aria-label":n.nextAriaLabel,disabled:a.isLastPage,kind:"muted",importance:a.isLastPage?"primary":"clear",onClick:t[1]||(t[1]=r=>a.changePage(l.currentPage+1))},{icon:h(()=>[o(s,{name:"chevron-right",size:"300"})]),_:1},8,["aria-label","disabled","importance","class"])],8,E)}const P=f(V,[["render",U]]);V.__docgenInfo={displayName:"DtPagination",description:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.",tags:{see:[{description:"https://dialpad.design/components/pagination.html",title:"see"}]},exportName:"default",props:[{name:"ariaLabel",description:"Descriptive label for the pagination content.",type:{name:"string"},required:!0},{name:"totalPages",description:"The total number of the pages",type:{name:"number"},required:!0},{name:"prevAriaLabel",description:"Descriptive label for the previous button.",type:{name:"string"},required:!0},{name:"nextAriaLabel",description:"Descriptive label for the next button.",type:{name:"string"},required:!0},{name:"pageNumberAriaLabel",description:"A method that will be called to get the aria label of each page.",type:{name:"func"},required:!0},{name:"activePage",description:"The active current page in the list of pages, defaults to the first page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"maxVisible",description:`Determines the max pages to be shown in the list. Using an odd number is recommended.
If an even number is given, then it will be rounded down to the nearest odd number to always
keep current page in the middle when current page is in the mid-range.`,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"change",description:"Page change event",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]};const k={name:"DtPaginationDefault",components:{DtPagination:P},methods:{getPageNumberAriaLabel(e){return e===this.totalPages?`Last page ${e}`:`Page ${e}`}}};function G(e,t,n,i,l,a){const s=u("dt-pagination");return d(),D(s,{"aria-label":e.$attrs.ariaLabel,"total-pages":e.$attrs.totalPages,"active-page":e.$attrs.activePage,"max-visible":e.$attrs.maxVisible,"prev-aria-label":e.$attrs.prevAriaLabel,"next-aria-label":e.$attrs.nextAriaLabel,"page-number-aria-label":a.getPageNumberAriaLabel,onChange:e.$attrs.onChange},null,8,["aria-label","total-pages","active-page","max-visible","prev-aria-label","next-aria-label","page-number-aria-label","onChange"])}const H=f(k,[["render",G]]);k.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const S={name:"DtPaginationVariants",components:{DtPagination:P},methods:{getPageNumberAriaLabel(e){return`Page ${e}`}}},J={class:"d-divide-y d-divide-purple-400"},K={class:"d-m32"},Q=p("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the end ",-1),R={class:"d-m32"},W=p("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the beginning ",-1),X={class:"d-m32"},Y=p("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator on both sides ",-1);function Z(e,t,n,i,l,a){const s=u("dt-pagination");return d(),g("div",J,[p("div",K,[Q,o(s,{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),p("div",R,[W,o(s,{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),p("div",X,[Y,o(s,{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])])])}const ee=f(S,[["render",Z]]);S.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const C={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:$("change")},q={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},ae={title:"Components/Pagination",component:P,args:C,argTypes:q,excludeStories:/.*Data$/},te=e=>w(e,H),ne=e=>w(e,ee),c={render:te,args:{},parameters:{docs:{source:{code:`
  <dt-pagination
      :total-pages="totalPages"
      :active-page="activePage"
      :max-visible="maxVisible"
      :aria-label="ariaLabel"
      :prev-aria-label="prevAriaLabel"
      :next-aria-label="nextAriaLabel"
      :page-number-aria-label="getPageNumberAriaLabel"
      @change="onChange"
    />   `}}}},b={render:ne,args:{},parameters:{docs:{source:{code:`
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
  `}}}};var x,_,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(_=c.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var L,N,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(N=b.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const re=["argsData","argTypesData","Default","Variants"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:b,__namedExportsOrder:re,argTypesData:q,argsData:C,default:ae},Symbol.toStringTag,{value:"Module"}));export{c as D,ce as P,b as V};
//# sourceMappingURL=pagination.stories-4f0babf9.js.map
