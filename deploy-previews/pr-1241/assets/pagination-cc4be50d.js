import{D as v}from"./button-1213897c.js";import{D as y}from"./icon-13392d5a.js";import{u as b,p as o,y as l,w as g,k as m,F as h,B as x,o as c,f as p,z as _,A as k}from"./vue.esm-bundler-a1916ad5.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const f={name:"DtPagination",components:{DtButton:v,DtIcon:y},props:{ariaLabel:{type:String,required:!0},totalPages:{type:Number,required:!0},prevAriaLabel:{type:String,required:!0},nextAriaLabel:{type:String,required:!0},pageNumberAriaLabel:{type:Function,required:!0},activePage:{type:Number,default:1},maxVisible:{type:Number,default:5}},emits:["change"],data(){return{currentPage:this.activePage}},computed:{isFirstPage(){return this.currentPage===1},isLastPage(){return this.currentPage===this.totalPages},pages(){if(this.maxVisible===0)return[];if(this.totalPages<=this.maxVisible)return this.range(1,this.totalPages);const t=this.maxVisible-1,n=this.totalPages-t+1;if(this.currentPage<t)return[...this.range(1,t),"...",this.totalPages];if(this.currentPage>n)return[1,"...",...this.range(n,this.totalPages)];const r=this.maxVisible-(3-this.maxVisible%2),i=Math.floor(r/2),s=this.currentPage-i,e=this.currentPage+i;return[1,"...",...this.range(s,e),"...",this.totalPages]}},methods:{range(t,n){const r=[];t=t>0?t:1;for(let i=t;i<=n;i++)r.push(i);return r},changePage(t){this.currentPage=t,this.$emit("change",this.currentPage)}}},L=["aria-label"],q={key:0,class:"d-fc-tertiary d-w24 d-ta-center","data-qa":"dt-pagination-separator"};function w(t,n,r,i,s,e){const d=b("dt-icon"),u=b("dt-button");return c(),o("nav",{"aria-label":r.ariaLabel,class:"d-d-flex d-fd-row d-gg4 d-ai-center"},[l(u,{class:m(["d-px8",e.isFirstPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-prev","aria-label":r.prevAriaLabel,kind:e.isFirstPage?"default":"muted",importance:e.isFirstPage?"primary":"clear",disabled:e.isFirstPage,onClick:n[0]||(n[0]=a=>e.changePage(s.currentPage-1))},{icon:g(()=>[l(d,{name:"chevron-left",size:"300"})]),_:1},8,["aria-label","kind","importance","disabled","class"]),(c(!0),o(h,null,x(e.pages,(a,P)=>(c(),o("div",{key:`page-${a}-${P}`,class:m({"d-as-flex-end":isNaN(Number(a))})},[p(" eslint-disable vue/no-bare-strings-in-template "),isNaN(Number(a))?(c(),o("div",q,[l(d,{name:"more-horizontal",size:"300"}),p(" … ")])):(c(),o(h,{key:1},[p(" eslint-enable vue/no-bare-strings-in-template "),l(u,{"aria-label":r.pageNumberAriaLabel(a),kind:s.currentPage===a?"default":"muted",importance:s.currentPage===a?"primary":"clear","label-class":"",onClick:D=>e.changePage(a)},{default:g(()=>[_(k(a),1)]),_:2},1032,["aria-label","kind","importance","onClick"])],2112))],2))),128)),l(u,{class:m(["d-px8",e.isLastPage?"d-fc-black-300 d-bgc-transparent":"d-fc-tertiary"]),"data-qa":"dt-pagination-next","aria-label":r.nextAriaLabel,disabled:e.isLastPage,kind:"muted",importance:e.isLastPage?"primary":"clear",onClick:n[1]||(n[1]=a=>e.changePage(s.currentPage+1))},{icon:g(()=>[l(d,{name:"chevron-right",size:"300"})]),_:1},8,["aria-label","disabled","importance","class"])],8,L)}const z=N(f,[["render",w],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]]);f.__docgenInfo={displayName:"DtPagination",description:"Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.",tags:{see:[{description:"https://dialpad.design/components/pagination.html",title:"see"}]},exportName:"default",props:[{name:"ariaLabel",description:"Descriptive label for the pagination content.",type:{name:"string"},required:!0},{name:"totalPages",description:"The total number of the pages",type:{name:"number"},required:!0},{name:"prevAriaLabel",description:"Descriptive label for the previous button.",type:{name:"string"},required:!0},{name:"nextAriaLabel",description:"Descriptive label for the next button.",type:{name:"string"},required:!0},{name:"pageNumberAriaLabel",description:"A method that will be called to get the aria label of each page.",type:{name:"func"},required:!0},{name:"activePage",description:"The active current page in the list of pages, defaults to the first page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"maxVisible",description:`Determines the max pages to be shown in the list. Using an odd number is recommended.
If an even number is given, then it will be rounded down to the nearest odd number to always
keep current page in the middle when current page is in the mid-range.`,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"change",description:"Page change event",type:{names:["Number"]}}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/components/pagination/pagination.vue"]};export{z as D};
//# sourceMappingURL=pagination-cc4be50d.js.map
