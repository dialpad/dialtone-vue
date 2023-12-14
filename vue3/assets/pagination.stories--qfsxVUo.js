import{a as F}from"./chunk-AY7I2SME-4UylTnhF.js";import{c as D}from"./storybook_utils-dy5aucTw.js";import{D as $}from"./button-QSbPABQk.js";import{D as z}from"./icon-z49A8j_D.js";import{s as u,k as g,u as o,w as h,p as v,F as I,G as B,o as p,b as w,x as O,y as j,e as d}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";const V={name:"DtPagination",components:{DtButton:$,DtIcon:z},props:{ariaLabel:{type:String,required:!0},totalPages:{type:Number,required:!0},prevAriaLabel:{type:String,required:!0},nextAriaLabel:{type:String,required:!0},pageNumberAriaLabel:{type:Function,required:!0},activePage:{type:Number,default:1},maxVisible:{type:Number,default:5}},emits:["change"],data(){return{currentPage:this.activePage}},computed:{isFirstPage(){return this.currentPage===1},isLastPage(){return this.currentPage===this.totalPages},pages(){if(this.maxVisible===0)return[];if(this.totalPages<=this.maxVisible)return this.range(1,this.totalPages);const e=this.maxVisible-1,t=this.totalPages-e+1;if(this.currentPage<e)return[...this.range(1,e),"...",this.totalPages];if(this.currentPage>t)return[1,"...",...this.range(t,this.totalPages)];const n=this.maxVisible-(3-this.maxVisible%2),r=Math.floor(n/2),l=this.currentPage-r,a=this.currentPage+r;return[1,"...",...this.range(l,a),"...",this.totalPages]}},methods:{range(e,t){const n=[];e=e>0?e:1;for(let r=e;r<=t;r++)n.push(r);return n},changePage(e){this.currentPage=e,this.$emit("change",this.currentPage)}}},E=["aria-label"],M={key:0,class:"d-pagination__separator-icon","data-qa":"dt-pagination-separator"};function G(e,t,n,r,l,a){const s=u("dt-icon"),m=u("dt-button");return p(),g("nav",{"aria-label":n.ariaLabel,class:"d-pagination"},[o(m,{class:v(["d-pagination__button",a.isFirstPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-prev","aria-label":n.prevAriaLabel,kind:a.isFirstPage?"default":"muted",importance:a.isFirstPage?"primary":"clear",disabled:a.isFirstPage,onClick:t[0]||(t[0]=i=>a.changePage(l.currentPage-1))},{icon:h(()=>[o(s,{name:"chevron-left",size:"300"})]),_:1},8,["aria-label","kind","importance","disabled","class"]),(p(!0),g(I,null,B(a.pages,(i,q)=>(p(),g("div",{key:`page-${i}-${q}`,class:v({"d-pagination__separator":isNaN(Number(i))})},[isNaN(Number(i))?(p(),g("div",M,[o(s,{name:"more-horizontal",size:"300"})])):(p(),w(m,{key:1,"aria-label":n.pageNumberAriaLabel(i),kind:l.currentPage===i?"default":"muted",importance:l.currentPage===i?"primary":"clear","label-class":"",onClick:re=>a.changePage(i)},{default:h(()=>[O(j(i),1)]),_:2},1032,["aria-label","kind","importance","onClick"]))],2))),128)),o(m,{class:v(["d-pagination__button",a.isLastPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-next","aria-label":n.nextAriaLabel,disabled:a.isLastPage,kind:"muted",importance:a.isLastPage?"primary":"clear",onClick:t[1]||(t[1]=i=>a.changePage(l.currentPage+1))},{icon:h(()=>[o(s,{name:"chevron-right",size:"300"})]),_:1},8,["aria-label","disabled","importance","class"])],8,E)}const P=f(V,[["render",G]]);V.__docgenInfo={displayName:"DtPagination",description:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.",tags:{see:[{description:"https://dialpad.design/components/pagination.html",title:"see"}]},exportName:"default",props:[{name:"ariaLabel",description:"Descriptive label for the pagination content.",type:{name:"string"},required:!0},{name:"totalPages",description:"The total number of the pages",type:{name:"number"},required:!0},{name:"prevAriaLabel",description:"Descriptive label for the previous button.",type:{name:"string"},required:!0},{name:"nextAriaLabel",description:"Descriptive label for the next button.",type:{name:"string"},required:!0},{name:"pageNumberAriaLabel",description:"A method that will be called to get the aria label of each page.",type:{name:"func"},required:!0},{name:"activePage",description:"The active current page in the list of pages, defaults to the first page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"maxVisible",description:`Determines the max pages to be shown in the list. Using an odd number is recommended.
If an even number is given, then it will be rounded down to the nearest odd number to always
keep current page in the middle when current page is in the mid-range.`,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"change",description:"Page change event",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]};const k={name:"DtPaginationDefault",components:{DtPagination:P},methods:{getPageNumberAriaLabel(e){return e===this.totalPages?`Last page ${e}`:`Page ${e}`}}};function U(e,t,n,r,l,a){const s=u("dt-pagination");return p(),w(s,{"aria-label":e.$attrs.ariaLabel,"total-pages":e.$attrs.totalPages,"active-page":e.$attrs.activePage,"max-visible":e.$attrs.maxVisible,"prev-aria-label":e.$attrs.prevAriaLabel,"next-aria-label":e.$attrs.nextAriaLabel,"page-number-aria-label":a.getPageNumberAriaLabel,onChange:e.$attrs.onChange},null,8,["aria-label","total-pages","active-page","max-visible","prev-aria-label","next-aria-label","page-number-aria-label","onChange"])}const H=f(k,[["render",U]]);k.__docgenInfo={displayName:"DtPaginationDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_default.story.vue"]};const S={name:"DtPaginationVariants",components:{DtPagination:P},methods:{getPageNumberAriaLabel(e){return`Page ${e}`}}},J={class:"d-divide-y d-divide-purple-400"},K={class:"d-m32"},Q=d("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the end ",-1),R={class:"d-m32"},W=d("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator in the beginning ",-1),X={class:"d-m32"},Y=d("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Separator on both sides ",-1);function Z(e,t,n,r,l,a){const s=u("dt-pagination");return p(),g("div",J,[d("div",K,[Q,o(s,{"total-pages":10,"aria-label":"pagination with separator in the end","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),d("div",R,[W,o(s,{"total-pages":15,"active-page":13,"aria-label":"pagination with separator in the beginning","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])]),d("div",X,[Y,o(s,{"total-pages":10,"active-page":5,"aria-label":"pagination with separator on both sides","prev-aria-label":"previous","next-aria-label":"next","page-number-aria-label":a.getPageNumberAriaLabel},null,8,["page-number-aria-label"])])])}const ee=f(S,[["render",Z]]);S.__docgenInfo={displayName:"DtPaginationVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination_variants.story.vue"]};const C={totalPages:5,activePage:1,maxVisible:5,ariaLabel:"pagination",prevAriaLabel:"previous",nextAriaLabel:"next",onChange:F("change")},T={totalPages:{control:{type:"number"}},activePage:{control:{type:"number"}},maxVisible:{control:{type:"number"}},ariaLabel:{control:{type:"text"}},nextAriaLabel:{control:{type:"text"}},prevAriaLabel:{control:{type:"text"}},onChange:{table:{disable:!0}},change:{description:"Page Change event",table:{type:{summary:"event"}}}},ae={title:"Components/Pagination",component:P,args:C,argTypes:T,excludeStories:/.*Data$/},te=(e,{argTypes:t})=>D(e,t,H),ne=(e,{argTypes:t})=>D(e,t,ee),c={render:te,args:{},parameters:{docs:{source:{code:`
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
  `}}}};var _,x,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var L,N,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(N=b.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const ie=["argsData","argTypesData","Default","Variants"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:b,__namedExportsOrder:ie,argTypesData:T,argsData:C,default:ae},Symbol.toStringTag,{value:"Module"}));export{c as D,ce as P,b as V};
//# sourceMappingURL=pagination.stories--qfsxVUo.js.map
