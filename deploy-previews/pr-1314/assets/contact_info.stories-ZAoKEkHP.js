import{a as i}from"./chunk-AY7I2SME-4UylTnhF.js";import{a as z,c as k}from"./storybook_utils-XrTpeJKJ.js";import{D as N}from"./list_item-U0nUZvs3.js";import{D as L,A as D}from"./avatar-HOfHQVrQ.js";import{u as I}from"./utils-pRacJSLF.js";import{n as o}from"./_plugin-vue2_normalizer-XBmYDgEh.js";import{D as T}from"./button-ux2tnS3y.js";import{D as $}from"./icon-SfO3AFzV.js";import{D as J}from"./link-O6Lp8_bp.js";import{d as f}from"./avatar2-brBbnWbv.js";import{P as V}from"./presence-KYZwZYmA.js";const F={name:"DtRecipeContactInfo",components:{DtAvatar:L,DtListItem:N},props:{id:{type:String,default(){return I.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarFullName:{type:String,default:""},avatarIcon:{type:String,default:null},avatarSize:{type:String,default:"lg"},avatarAriaLabel:{type:String,default:""},presence:{type:String,default:null},avatarList:{type:Array,default:null}},emits:["avatar-click"],methods:{avatarClick(){this.$emit("avatar-click")}}};var S=function(){var t=this,a=t._self._c;return a("dt-list-item",{staticClass:"dt-contact-info",attrs:{id:t.id,role:t.role,"element-type":"div","data-qa":"contact-info"},scopedSlots:t._u([{key:"left",fn:function(){return[t.showAvatar?a("button",{staticClass:"dt-contact-info__left",attrs:{"data-qa":"contact-info-left","aria-labelledby":t.avatarAriaLabel},on:{click:t.avatarClick}},[t.avatarList?a("span",{staticClass:"dt-contact-info--avatars"},t._l(t.avatarList,function(e,u){return a("dt-avatar",{key:u,attrs:{size:t.avatarSize,seed:e.seed,"full-name":e.fullName,"image-src":e.src,"icon-name":t.avatarIcon,"overlay-icon":e.icon,"overlay-text":e.text,"avatar-class":[{"d-mln24":u>0,"d-bc-brand":!!e.halo}]}})}),1):a("dt-avatar",{attrs:{size:t.avatarSize,"full-name":t.avatarFullName,"image-src":t.avatarSrc,"icon-name":t.avatarIcon,seed:t.avatarSeed,presence:t.presence}})],1):t._e()]},proxy:!0},{key:"default",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-header"}},[t._t("header")],2)]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-subtitle"}},[t._t("subtitle")],2)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-bottom"}},[t._t("bottom")],2)]},proxy:!0},{key:"right",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-right"}},[t._t("right")],2)]},proxy:!0}],null,!0)})},R=[];S._withStripped=!0;var c=o(F,S,R,!1,null,"489bf75b",null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue";const l=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` and `avatarIcon` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"avatarAriaLabel",description:"The aria label of the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`fullName` - full name, used as alt attribute for image and extract initials to display in avatar<br>\n if `avatarSrc` and `avatarIcon` are empty<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],events:[{name:"avatar-click"}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const M={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:l}};var w=function(){var t=this,a=t._self._c;return a("dt-recipe-contact-info",{attrs:{"show-avatar":t.$attrs.showAvatar,"avatar-src":t.$attrs.avatarSrc,"avatar-full-name":t.$attrs.avatarFullName,"avatar-icon":t.$attrs.avatarIcon,"avatar-size":t.$attrs.avatarSize,"avatar-seed":t.$attrs.avatarSeed,presence:t.$attrs.presence},on:{"avatar-click":t.$attrs.onAvatarClick},scopedSlots:t._u([t.$attrs.header?{key:"header",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.header)}})]},proxy:!0}:null,t.$attrs.subtitle?{key:"subtitle",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.subtitle)}})]},proxy:!0}:null,t.$attrs.right?{key:"right",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.right)}})]},proxy:!0}:null,t.$attrs.bottom?{key:"bottom",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.bottom)}})]},proxy:!0}:null],null,!0)})},G=[];w._withStripped=!0;var m=o(M,w,G,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue";const P=m.exports;m.exports.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const r=""+new URL("avatar1-ESaPmMCN.png",import.meta.url).href,q={name:"DtRecipeContactInfoVariants",components:{DtButton:T,DtRecipeContactInfo:l,DtIcon:$,DtLink:J},data(){return{adminListenInAvatars:[{src:r,fullName:"Jaqueline Nackos",seed:"JN"},{src:f,fullName:"Joseph Lumaban",icon:"hear",seed:"JL"}],groupCallAvatars:[{fullName:"Joseph Lumaban",seed:"JL"},{src:r,fullName:"Jaqueline Nackos",seed:"JN"},{src:f,fullName:"Natalie Woods",text:"+3",seed:"NW"}]}}};var x=function(){var t=this,a=t._self._c;return a("div",{staticClass:"d-divide-y d-divide-purple-400"},[a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Unknown contact (phone number only) with attestation ")]),a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" San Francisco, California ")]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(' Unknown contact with "marked as spam" button ')]),a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("dt-link",{attrs:{kind:"danger"},on:{click:function(e){return e.stopPropagation(),t.$attrs.onMarkAsSpam.apply(null,arguments)}}},[t._v(" Mark as spam ")])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Clickable Group contact ")]),a("dt-button",{attrs:{importance:"clear",kind:"muted"},on:{click:t.$attrs.onGroupContactClick}},[a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1)],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group contact with transfer info ")]),a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")]),a("div",{staticClass:"d-fw-bold d-fs-100"},[t._v(" • Transfer from Billing Support ")])])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Admin view / listening in ")]),a("dt-recipe-contact-info",{attrs:{"avatar-list":t.adminListenInAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Joseph Lumaban & Justin H. ")]),a("div",{staticClass:"d-fs-200"},[t._v(" (Agent) ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn4"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Contact with items in right slot ")]),a("dt-recipe-contact-info",{attrs:{"avatar-full-name":t.$attrs.avatarFullName,"avatar-seed":t.$attrs.avatarSeed},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Natalie Woods ")])]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" +1 (415) 123-4567 ")]},proxy:!0},{key:"right",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-m8"},[a("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{size:"400",name:"webchat"}})]},proxy:!0}])}),a("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"more"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{size:"400",name:"more-horizontal"}})]},proxy:!0}])}),a("div",{staticClass:"d-m4"},[t._v(" 0:32 ")])],1)]},proxy:!0},{key:"bottom",fn:function(){return[t._v(" 2 matches found. "),a("dt-button",{attrs:{link:""},on:{click:function(e){return e.stopPropagation(),t.$attrs.onConnectToARecord.apply(null,arguments)}}},[t._v(" Connect to a record ")])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group call ")]),a("dt-recipe-contact-info",{attrs:{"avatar-list":t.groupCallAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Group Call ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Manage participants ")])])]},proxy:!0}])})],1)])},E=[];x._withStripped=!0;var p=o(q,x,E,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue";const U=p.exports;p.exports.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const W=z(),C={onAvatarClick:i("avatar-click"),presence:null},A={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(D)},avatarIcon:{options:W,control:{type:"select",labels:{undefined:"(empty)"}}},avatarAriaLabel:{table:{type:{summary:"string"}}},presence:{options:[...V],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},"avatar-click":{description:"click on avatar event",table:{type:{summary:"event"}}},onAvatarClick:{table:{disable:!0}}},H={title:"Recipes/List Items/Contact Info",component:l,args:C,argTypes:A,excludeStories:/.*Data$/},B=(n,{argTypes:t})=>k(n,t,P),O=(n,{argTypes:t})=>k(n,t,U),s={render:B,args:{avatarSrc:r,avatarSeed:"JL",avatarFullName:"Joseph Lumaban",avatarSize:"lg",presence:"active",header:'<div class="d-fs-200 d-fw-bold"> Joseph Lumaban </div>',subtitle:'<div class="d-fs-100 d-mt2"> +1 (415) 123-4567 </div>',bottom:`<div class="d-d-flex d-ai-center d-mtn6">
    <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">
      &nbsp;
    </div>
    <div class="d-fs-100 d-mr4">
      Aerolabs Support
    </div>
  </div>`},parameters:{docs:{source:{code:`
  <dt-recipe-contact-info
    :avatar-src="avatarSrc"
    :avatar-full-name="avatarFullName"
    :avatar-seed="avatarSeed"
    :avatar-size="avatarSize"
    :presence="presence"
  >
    <template #header>
      <div class="d-fs-200 d-fw-bold d-mr4">Joseph Lumaban</div>
    </template>
    <template #subtitle>
      <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
    </template>
    <template #bottom>
      <div class="d-d-flex d-ai-center d-mtn6">
        <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
        <div class="d-fs-100 d-mr4">Aerolabs Support</div>
      </div>
    </template>
  </dt-recipe-contact-info>
        `}},a11y:{disable:!0,config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}},d={render:O,args:{avatarFullName:"Natalie Woods",avatarSeed:"NW",avatarSize:"lg",presence:"busy",onGroupContactClick:i("click: clickable group contact"),onMarkAsSpam:i("click: mark this contact as spam"),onConnectToARecord:i("click: connect to a record")},parameters:{docs:{source:{code:`
  <div class="d-divide-y d-divide-purple-400">
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Unknown contact (phone number only) with attestation</p>
      <dt-recipe-contact-info>
        <template #header>
          <div class="d-d-flex d-ai-center d-mb2">
            <div class="d-fs-200 d-fw-bold d-mr4">+1 (415) 123-4567</div>
            <dt-icon name="check-circle" size="200" class="d-fc-tertiary" />
          </div>
        </template>
        <template #subtitle>San Francisco, California</template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Unknown contact with "marked as spam" button</p>
      <dt-recipe-contact-info>
        <template #header>
          <div class="d-d-flex d-ai-center d-mb2">
            <div class="d-fs-200 d-fw-bold d-mr4">+1 (415) 123-4567</div>
          </div>
        </template>
        <template #subtitle>
          <dt-link kind="danger" @click.stop="onMarkAsSpam">Mark as spam</dt-link>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Clickable Group contact</p>
      <dt-button
        importance="clear"
        kind="muted"
        @click="onGroupContactClick"
      >
        <dt-recipe-contact-info>
          <template #header>
            <div class="d-fs-200 d-fw-bold d-mr4">Joseph Lumaban</div>
          </template>
          <template #subtitle>
            <div class="d-d-flex d-ai-center">
              <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
              <dt-icon name="check-circle" size="200" class="d-fc-tertiary d-va-text-bottom" />
            </div>
          </template>
          <template #bottom>
            <div class="d-d-flex d-ai-center d-mtn6">
              <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
              <div class="d-fs-100 d-mr4">Aerolabs Support</div>
            </div>
          </template>
        </dt-recipe-contact-info>
      </dt-button>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Group contact with transfer info</p>
      <dt-recipe-contact-info>
        <template #header><div class="d-fs-200 d-fw-bold d-mr4">Joseph Lumaban</div></template>
        <template #subtitle>
          <div class="d-d-flex d-ai-center">
            <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
            <dt-icon name="check-circle" size="200" class="d-fc-tertiary d-va-text-bottom" />
          </div>
        </template>
        <template #bottom>
          <div class="d-d-flex d-ai-center d-mtn6">
            <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
            <div class="d-fs-100 d-mr4">Aerolabs Support</div>
            <div class="d-fw-bold d-fs-100">• Transfer from Billing Support</div>
          </div>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Admin view / listening in</p>
      <dt-recipe-contact-info>
        <template #header>
          <div class="d-d-flex d-ai-center d-mb2">
            <div class="d-fw-bold d-fs-200">Joseph Lumaban & Justin H.</div>
            <div class="d-fs-200">(Agent)</div>
          </div>
        </template>
        <template #subtitle>
          <div class="d-d-flex d-ai-center">
            <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
            <dt-icon name="check-circle" size="200" class="d-fc-tertiary d-va-text-bottom" />
          </div>
        </template>
        <template #bottom>
          <div class="d-d-flex d-ai-center d-mtn6">
            <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
            <div class="d-fs-100 d-mr4">Aerolabs Support</div>
          </div>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Contact with items in right slot</p>
      <dt-recipe-contact-info
        :avatar-full-name="avatarFullName"
        :avatar-seed="avatarSeed"
      >
        <template #header><div class="d-fw-bold d-fs-200">Natalie Woods</div></template>
        <template #subtitle>+1 (415) 123-4567</template>
        <template #right>
          <div class="d-d-flex d-ai-center d-m8">
            <dt-button size="xs" :circle="true" importance="clear" aria-label="chat">
              <template #icon>
                <dt-icon size="400" name="webchat" />
              </template>
            </dt-button>
            <dt-button size="xs" :circle="true" importance="clear" aria-label="more">
              <template #icon>
                <dt-icon size="400" name="more-horizontal" />
              </template>
            </dt-button>
            <div class="d-m4">0:32</div>
          </div>
        </template>
        <template #bottom>
          2 matches found.
          <dt-button link @click.stop="onConnectToARecord">Connect to a record</dt-button>
        </template>
      </dt-recipe-contact-info>
    </div>
  </div>
  `}},a11y:s.parameters.a11y,controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var v,b,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    avatarSrc: avatarImage,
    avatarSeed: 'JL',
    avatarFullName: 'Joseph Lumaban',
    avatarSize: 'lg',
    presence: 'active',
    header: \`<div class="d-fs-200 d-fw-bold"> Joseph Lumaban </div>\`,
    subtitle: \`<div class="d-fs-100 d-mt2"> +1 (415) 123-4567 </div>\`,
    bottom: \`<div class="d-d-flex d-ai-center d-mtn6">
    <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">
      &nbsp;
    </div>
    <div class="d-fs-100 d-mr4">
      Aerolabs Support
    </div>
  </div>\`
  },
  parameters: {
    docs: {
      source: {
        code: \`
  <dt-recipe-contact-info
    :avatar-src="avatarSrc"
    :avatar-full-name="avatarFullName"
    :avatar-seed="avatarSeed"
    :avatar-size="avatarSize"
    :presence="presence"
  >
    <template #header>
      <div class="d-fs-200 d-fw-bold d-mr4">Joseph Lumaban</div>
    </template>
    <template #subtitle>
      <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
    </template>
    <template #bottom>
      <div class="d-d-flex d-ai-center d-mtn6">
        <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
        <div class="d-fs-100 d-mr4">Aerolabs Support</div>
      </div>
    </template>
  </dt-recipe-contact-info>
        \`
      }
    },
    a11y: {
      disable: true,
      config: {
        rules: [{
          id: 'aria-allowed-attr',
          enabled: false
        }]
      }
    }
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,_,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {
    avatarFullName: 'Natalie Woods',
    avatarSeed: 'NW',
    avatarSize: 'lg',
    presence: 'busy',
    onGroupContactClick: action('click: clickable group contact'),
    onMarkAsSpam: action('click: mark this contact as spam'),
    onConnectToARecord: action('click: connect to a record')
  },
  parameters: {
    docs: {
      source: {
        code: \`
  <div class="d-divide-y d-divide-purple-400">
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Unknown contact (phone number only) with attestation</p>
      <dt-recipe-contact-info>
        <template #header>
          <div class="d-d-flex d-ai-center d-mb2">
            <div class="d-fs-200 d-fw-bold d-mr4">+1 (415) 123-4567</div>
            <dt-icon name="check-circle" size="200" class="d-fc-tertiary" />
          </div>
        </template>
        <template #subtitle>San Francisco, California</template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Unknown contact with "marked as spam" button</p>
      <dt-recipe-contact-info>
        <template #header>
          <div class="d-d-flex d-ai-center d-mb2">
            <div class="d-fs-200 d-fw-bold d-mr4">+1 (415) 123-4567</div>
          </div>
        </template>
        <template #subtitle>
          <dt-link kind="danger" @click.stop="onMarkAsSpam">Mark as spam</dt-link>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Clickable Group contact</p>
      <dt-button
        importance="clear"
        kind="muted"
        @click="onGroupContactClick"
      >
        <dt-recipe-contact-info>
          <template #header>
            <div class="d-fs-200 d-fw-bold d-mr4">Joseph Lumaban</div>
          </template>
          <template #subtitle>
            <div class="d-d-flex d-ai-center">
              <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
              <dt-icon name="check-circle" size="200" class="d-fc-tertiary d-va-text-bottom" />
            </div>
          </template>
          <template #bottom>
            <div class="d-d-flex d-ai-center d-mtn6">
              <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
              <div class="d-fs-100 d-mr4">Aerolabs Support</div>
            </div>
          </template>
        </dt-recipe-contact-info>
      </dt-button>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Group contact with transfer info</p>
      <dt-recipe-contact-info>
        <template #header><div class="d-fs-200 d-fw-bold d-mr4">Joseph Lumaban</div></template>
        <template #subtitle>
          <div class="d-d-flex d-ai-center">
            <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
            <dt-icon name="check-circle" size="200" class="d-fc-tertiary d-va-text-bottom" />
          </div>
        </template>
        <template #bottom>
          <div class="d-d-flex d-ai-center d-mtn6">
            <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
            <div class="d-fs-100 d-mr4">Aerolabs Support</div>
            <div class="d-fw-bold d-fs-100">• Transfer from Billing Support</div>
          </div>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Admin view / listening in</p>
      <dt-recipe-contact-info>
        <template #header>
          <div class="d-d-flex d-ai-center d-mb2">
            <div class="d-fw-bold d-fs-200">Joseph Lumaban & Justin H.</div>
            <div class="d-fs-200">(Agent)</div>
          </div>
        </template>
        <template #subtitle>
          <div class="d-d-flex d-ai-center">
            <div class="d-fs-100 d-mt2">+1 (415) 123-4567</div>
            <dt-icon name="check-circle" size="200" class="d-fc-tertiary d-va-text-bottom" />
          </div>
        </template>
        <template #bottom>
          <div class="d-d-flex d-ai-center d-mtn6">
            <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">&nbsp;</div>
            <div class="d-fs-100 d-mr4">Aerolabs Support</div>
          </div>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs-200 d-fw-bold">Contact with items in right slot</p>
      <dt-recipe-contact-info
        :avatar-full-name="avatarFullName"
        :avatar-seed="avatarSeed"
      >
        <template #header><div class="d-fw-bold d-fs-200">Natalie Woods</div></template>
        <template #subtitle>+1 (415) 123-4567</template>
        <template #right>
          <div class="d-d-flex d-ai-center d-m8">
            <dt-button size="xs" :circle="true" importance="clear" aria-label="chat">
              <template #icon>
                <dt-icon size="400" name="webchat" />
              </template>
            </dt-button>
            <dt-button size="xs" :circle="true" importance="clear" aria-label="more">
              <template #icon>
                <dt-icon size="400" name="more-horizontal" />
              </template>
            </dt-button>
            <div class="d-m4">0:32</div>
          </div>
        </template>
        <template #bottom>
          2 matches found.
          <dt-button link @click.stop="onConnectToARecord">Connect to a record</dt-button>
        </template>
      </dt-recipe-contact-info>
    </div>
  </div>
  \`
      }
    },
    a11y: Default.parameters.a11y,
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    options: {
      showPanel: false
    }
  }
}`,...(g=(_=d.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const j=["argsData","argTypesData","Default","Variants"],it=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Variants:d,__namedExportsOrder:j,argTypesData:A,argsData:C,default:H},Symbol.toStringTag,{value:"Module"}));export{it as C,s as D,d as V};
//# sourceMappingURL=contact_info.stories-ZAoKEkHP.js.map
