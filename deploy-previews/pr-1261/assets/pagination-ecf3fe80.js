import{D as l}from"./button-6471bfba.js";import{D as c}from"./icon-8e6c79ec.js";import{n as u}from"./_plugin-vue2_normalizer-2bbd088e.js";const d={name:"DtPagination",components:{DtButton:l,DtIcon:c},props:{ariaLabel:{type:String,required:!0},totalPages:{type:Number,required:!0},prevAriaLabel:{type:String,required:!0},nextAriaLabel:{type:String,required:!0},pageNumberAriaLabel:{type:Function,required:!0},activePage:{type:Number,default:1},maxVisible:{type:Number,default:5}},emits:["change"],data(){return{currentPage:this.activePage}},computed:{isFirstPage(){return this.currentPage===1},isLastPage(){return this.currentPage===this.totalPages},pages(){if(this.maxVisible===0)return[];if(this.totalPages<=this.maxVisible)return this.range(1,this.totalPages);const n=this.maxVisible-1,e=this.totalPages-n+1;if(this.currentPage<n)return[...this.range(1,n),"...",this.totalPages];if(this.currentPage>e)return[1,"...",...this.range(e,this.totalPages)];const a=this.maxVisible-(3-this.maxVisible%2),t=Math.floor(a/2),r=this.currentPage-t,s=this.currentPage+t;return[1,"...",...this.range(r,s),"...",this.totalPages]}},methods:{range(n,e){const a=[];n=n>0?n:1;for(let t=n;t<=e;t++)a.push(t);return a},changePage(n){this.currentPage=n,this.$emit("change",this.currentPage)}}};var o=function(){var e=this,a=e._self._c;return a("nav",{staticClass:"d-d-flex d-fd-row d-gg4 d-ai-center",attrs:{"aria-label":e.ariaLabel}},[a("dt-button",{staticClass:"d-px8",class:e.isFirstPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary",attrs:{"data-qa":"dt-pagination-prev","aria-label":e.prevAriaLabel,kind:e.isFirstPage?"default":"muted",importance:e.isFirstPage?"primary":"clear",disabled:e.isFirstPage},on:{click:function(t){return e.changePage(e.currentPage-1)}}},[a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:"chevron-left",size:"300"}})],1)],2),e._l(e.pages,function(t,r){return a("div",{key:`page-${t}-${r}`,class:{"d-as-flex-end":isNaN(Number(t))}},[isNaN(Number(t))?a("div",{staticClass:"d-fc-tertiary d-w24 d-ta-center",attrs:{"data-qa":"dt-pagination-separator"}},[a("dt-icon",{attrs:{name:"more-horizontal",size:"300"}})],1):a("dt-button",{attrs:{"aria-label":e.pageNumberAriaLabel(t),kind:e.currentPage===t?"default":"muted",importance:e.currentPage===t?"primary":"clear","label-class":""},on:{click:function(s){return e.changePage(t)}}},[e._v(" "+e._s(t)+" ")])],1)}),a("dt-button",{staticClass:"d-px8",class:e.isLastPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary",attrs:{"data-qa":"dt-pagination-next","aria-label":e.nextAriaLabel,disabled:e.isLastPage,kind:"muted",importance:e.isLastPage?"primary":"clear"},on:{click:function(t){return e.changePage(e.currentPage+1)}}},[a("template",{slot:"icon"},[a("dt-icon",{attrs:{name:"chevron-right",size:"300"}})],1)],2)],2)},g=[];o._withStripped=!0;var i=u(d,o,g,!1,null,null,null,null);i.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue";const b=i.exports;i.exports.__docgenInfo={displayName:"DtPagination",description:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.",tags:{see:[{description:"https://dialpad.design/components/pagination.html",title:"see"}]},exportName:"default",props:[{name:"ariaLabel",description:"Descriptive label for the pagination content.",type:{name:"string"},required:!0},{name:"totalPages",description:"The total number of the pages",type:{name:"number"},required:!0},{name:"prevAriaLabel",description:"Descriptive label for the previous button.",type:{name:"string"},required:!0},{name:"nextAriaLabel",description:"Descriptive label for the next button.",type:{name:"string"},required:!0},{name:"pageNumberAriaLabel",description:"A method that will be called to get the aria label of each page.",type:{name:"func"},required:!0},{name:"activePage",description:"The active current page in the list of pages, defaults to the first page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"maxVisible",description:`Determines the max pages to be shown in the list. Using an odd number is recommended.
If an even number is given, then it will be rounded down to the nearest odd number to always
keep current page in the middle when current page is in the mid-range.`,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"change",description:"Page change event",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]};export{b as D};
//# sourceMappingURL=pagination-ecf3fe80.js.map
