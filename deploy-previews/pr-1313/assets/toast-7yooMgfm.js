import{D as p,a as y,b as v,N as b}from"./notice-K88yuljk.js";import{u as d}from"./utils-OzGu16i0.js";import{S as g}from"./sr_only_close_button-OsGPuedM.js";import{s,k as _,e as S,u as i,w as o,p as w,f as n,o as k,g as a,x as T,y as C}from"./vue.esm-bundler-pH9C34oL.js";import{_ as I}from"./_plugin-vue_export-helper-x3n3nnut.js";const V=["status","alert"],u=6e3,c={name:"DtToast",components:{DtNoticeIcon:p,DtNoticeContent:y,DtNoticeAction:v},mixins:[g],props:{titleId:{type:String,default(){return d.getUniqueString()}},contentId:{type:String,default(){return d.getUniqueString()}},title:{type:String,default:""},message:{type:String,default:""},role:{type:String,default:"status",validator:e=>V.includes(e)},kind:{type:String,default:"base",validator:e=>b.includes(e)},important:{type:Boolean,default:!1},show:{type:Boolean,default:!1},closeButtonProps:{type:Object,default:()=>({})},hideClose:{type:Boolean,default:!1},duration:{type:Number,default:null,validator:e=>e>=u}},emits:["close","click","update:show"],data(){return{isShown:!1,minDuration:u}},computed:{kindClass(){return{error:"d-toast--error",info:"d-toast--info",success:"d-toast--success",warning:"d-toast--warning",base:"d-toast--base"}[this.kind]},shouldSetTimeout(){return!!this.duration&&this.duration>=this.minDuration}},watch:{show:{handler:function(e){this.isShown=e,e?this.setTimeout():clearTimeout(this.displayTimer)},immediate:!0}},unmounted(){clearTimeout(this.displayTimer)},methods:{closeToast(e){this.$emit("update:show",!1),this.$emit("close",e)},setTimeout(){this.shouldSetTimeout&&(this.displayTimer=setTimeout(()=>{this.isShown=!1,this.$emit("update:show",!1)},this.duration))}}},N=["aria-hidden"],D={class:"d-toast__dialog"};function O(e,x,t,B,l,r){const m=s("dt-notice-icon"),f=s("dt-notice-content"),h=s("dt-notice-action");return l.isShown?(k(),_("div",{key:0,class:w(["d-toast",r.kindClass,{"d-toast--important":t.important}]),"data-qa":"dt-toast","aria-hidden":(!l.isShown).toString()},[S("div",D,[i(m,{kind:t.kind},{default:o(()=>[n(" @slot Slot for custom icon "),a(e.$slots,"icon")]),_:3},8,["kind"]),i(f,{"title-id":t.titleId,"content-id":t.contentId,title:t.title,role:t.role},{titleOverride:o(()=>[n(` @slot Allows you to override the title, only use this if you need to override
          with something other than text. Otherwise use the "title" prop. `),a(e.$slots,"titleOverride")]),default:o(()=>[a(e.$slots,"default",{},()=>[T(C(t.message),1)])]),_:3},8,["title-id","content-id","title","role"]),i(h,{"hide-close":t.hideClose,"close-button-props":t.closeButtonProps,"visually-hidden-close":e.visuallyHiddenClose,"visually-hidden-close-label":e.visuallyHiddenCloseLabel,onClose:r.closeToast},{default:o(()=>[n(" @slot Enter a possible action for the user to take, such as a link to another page "),a(e.$slots,"action")]),_:3},8,["hide-close","close-button-props","visually-hidden-close","visually-hidden-close-label","onClose"])])],10,N)):n("v-if",!0)}const P=I(c,[["render",O],["__file","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast.vue"]]);c.__docgenInfo={description:`A toast notice, sometimes called a snackbar, is a time-based message that appears based on users' actions.
It contains at-a-glance information about outcomes and can be paired with actions.`,displayName:"DtToast",tags:{see:[{description:"https://dialpad.design/components/toast.html",title:"see"}]},exportName:"default",props:[{name:"visuallyHiddenClose",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"If true, a hidden close button is included for screen readers",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"visuallyHiddenCloseLabel",mixin:{name:"Sr-Only close button mixin",path:"../../common/mixins/sr_only_close_button.js"},description:"Label for the visually hidden close button\nRequired if visuallyHiddenClose is set to `true`",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleId",description:`Sets an ID on the title element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the title.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"contentId",description:`Sets an ID on the content element of the component. Useful for aria-describedby
or aria-labelledby or any other reason you may need an id to refer to the content.`,type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"title",description:"Title header of the toast. This can be left blank to remove the title from the toast entirely.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"message",description:"Message of the toast. Overridden by default slot.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"role",description:`Provides a role for the toast. 'status' is used by default to communicate a message. 'alert' is used to
communicate an important message like an error that does not contain any interactive elements.`,tags:{},values:["status","alert"],type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"kind",description:"Severity level of the toast, sets the icon and background",tags:{},values:["base","error","info","success","warning"],type:{name:"string"},defaultValue:{func:!1,value:"'base'"}},{name:"important",description:"Used in scenarios where the message needs to visually dominate the screen.",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"show",description:`Controls whether the toast is shown. If a valid duration is provided, the toast will disappear
after reaching the duration time, so it's convenient to use \`v-model\` with this prop to update
the data in your component.
Supports v-model`,tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeButtonProps",description:"Props for the toast close button.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"hideClose",description:"Hides the close button from the toast",tags:{},values:["true","false"],type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"duration",description:`The duration in ms the toast will display before disappearing.
The toast won't disappear if the duration is not provided.
If it's provided, it should be equal to or greater than 6000.`,type:{name:"number"},defaultValue:{func:!1,value:"null"}}],events:[{name:"close",description:"Close button click event",type:{names:["undefined"]}},{name:"click",description:"Native click event",type:{names:["PointerEvent | KeyboardEvent"]}},{name:"update:show",description:"Sync show value",type:{names:["undefined"]}}],slots:[{name:"icon",description:"Slot for custom icon"},{name:"titleOverride",description:"Allows you to override the title, only use this if you need to override"},{name:"default",description:"the main textual content of the toast"},{name:"action",description:"Enter a possible action for the user to take, such as a link to another page"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/common/mixins/sr_only_close_button.js","/home/runner/work/dialtone-vue/dialtone-vue/components/toast/toast.vue"]};export{P as D};
//# sourceMappingURL=toast-7yooMgfm.js.map
