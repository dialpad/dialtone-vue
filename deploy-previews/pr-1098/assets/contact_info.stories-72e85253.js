import{a as d}from"./chunk-AY7I2SME-c7b6cf8a.js";import{u as z,d as L,c as k}from"./storybook_utils-7db28451.js";import{D}from"./list_item-66102f5b.js";import{D as T,a as V}from"./avatar-0a77ba26.js";import{D as w}from"./icon-09f7d334.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as R}from"./button-9102a84a.js";import{D as J}from"./link-4fdbe64c.js";import{P as N}from"./presence-d4f38341.js";const q={name:"DtRecipeContactInfo",components:{DtAvatar:T,DtIcon:w,DtListItem:D},props:{id:{type:String,default(){return z.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarInitials:{type:String,default:""},avatarIcon:{type:String,default:"user"},avatarSize:{type:String,default:"lg"},presence:{type:String,default:null},avatarList:{type:Array,default:null}}};var S=function(){var t=this,e=t._self._c;return e("dt-list-item",{staticClass:"dt-contact-info",attrs:{id:t.id,role:t.role,"element-type":"div","data-qa":"contact-info"},scopedSlots:t._u([{key:"left",fn:function(){return[t.showAvatar?e("div",{staticClass:"d-ps-relative",attrs:{"data-qa":"contact-info-left"}},[t.avatarList?e("div",{staticClass:"d-mrn4 d-d-flex d-fd-row"},t._l(t.avatarList,function(a,v){return e("div",{key:v},[e("dt-avatar",{attrs:{size:t.avatarSize,seed:a.seed,initials:a.initials,"overlay-icon":a.icon,"overlay-text":a.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-black-100 d-box-unset","avatar-class":["d-baw4 d-bar-pill d-ba d-bc-black-100",{"d-mln24":v>0,"d-bc-brand":!!a.halo}]}},[a.src?e("img",{attrs:{"data-qa":"dt-contact-avatar",src:a.src,alt:a.initials}}):a.initials?e("div",[t._v(" "+t._s(a.initials)+" ")]):e("dt-icon",{attrs:{name:t.avatarIcon}})],1)],1)}),0):e("dt-avatar",{attrs:{size:t.avatarSize,initials:t.avatarInitials,seed:t.avatarSeed,presence:t.presence}},[t.avatarSrc?e("img",{attrs:{"data-qa":"dt-contact-avatar",src:t.avatarSrc,initials:t.avatarInitials,seed:t.avatarSeed,alt:t.avatarInitials}}):t.avatarInitials?e("div",[t._v(" "+t._s(t.avatarInitials)+" ")]):e("dt-icon",{attrs:{name:t.avatarIcon}})],1)],1):t._e()]},proxy:!0},{key:"default",fn:function(){return[e("div",{attrs:{"data-qa":"contact-info-header"}},[t._t("header")],2)]},proxy:!0},{key:"subtitle",fn:function(){return[e("div",{attrs:{"data-qa":"contact-info-subtitle"}},[t._t("subtitle")],2)]},proxy:!0},{key:"bottom",fn:function(){return[e("div",{attrs:{"data-qa":"contact-info-bottom"}},[t._t("bottom")],2)]},proxy:!0},{key:"right",fn:function(){return[e("div",{attrs:{"data-qa":"contact-info-right"}},[t._t("right")],2)]},proxy:!0}],null,!0)})},M=[];S._withStripped=!0;var c=o(q,S,M,!1,null,"489bf75b",null,null);c.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue";const l=c.exports;c.exports.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.\nif provided, it's also required to provide a value in the `avatarInitials` prop to use\nin the alt attribute of the avatar.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarInitials",description:"Initial letters to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` and `avatarInitials` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"'user'"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`initials` - Initial letters to display in avatar (required if src is empty)<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const G={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:l}};var x=function(){var t=this,e=t._self._c;return e("dt-recipe-contact-info",{attrs:{"show-avatar":t.showAvatar,"avatar-src":t.avatarSrc,"avatar-initials":t.avatarInitials,"avatar-icon":t.avatarIcon,"avatar-size":t.avatarSize,"avatar-seed":t.avatarSeed,presence:t.presence},scopedSlots:t._u([t.header?{key:"header",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.header)}})]},proxy:!0}:null,t.subtitle?{key:"subtitle",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.subtitle)}})]},proxy:!0}:null,t.right?{key:"right",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.right)}})]},proxy:!0}:null,t.bottom?{key:"bottom",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.bottom)}})]},proxy:!0}:null],null,!0)})},F=[];x._withStripped=!0;var p=o(G,x,F,!1,null,null,null,null);p.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue";const P=p.exports;p.exports.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const r=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,f=""+new URL("avatar2-388e1464.png",import.meta.url).href,E={name:"DtRecipeContactInfoVariants",components:{DtButton:R,DtRecipeContactInfo:l,DtIcon:w,DtLink:J},data(){return{adminListenInAvatars:[{src:r,initials:"KK",seed:"KK"},{src:f,initials:"LL",icon:"hear",seed:"LL"}],groupCallAvatars:[{initials:"JL",seed:"JL"},{src:r,initials:"KK",seed:"KK"},{src:f,initials:"LL",text:"+3",seed:"LL"}]}}};var C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-divide-y d-divide-purple-400"},[e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Unknown contact (phone number only) with attestation ")]),e("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[e("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")]),e("dt-icon",{attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" San Francisco, California ")]},proxy:!0}])})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(' Unknown contact with "marked as spam" button ')]),e("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[e("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[e("dt-link",{attrs:{kind:"danger"},on:{click:function(a){return a.stopPropagation(),t.onMarkAsSpam.apply(null,arguments)}}},[t._v(" Mark as spam ")])]},proxy:!0}])})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Clickable Group contact ")]),e("dt-button",{attrs:{importance:"clear",kind:"muted"},on:{click:t.onGroupContactClick}},[e("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[e("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center"},[e("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),e("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[e("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),e("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1)],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group contact with transfer info ")]),e("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[e("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center"},[e("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),e("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[e("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),e("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")]),e("div",{staticClass:"d-fw-bold d-fs-100"},[t._v(" • Transfer from Billing Support ")])])]},proxy:!0}])})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Admin view / listening in ")]),e("dt-recipe-contact-info",{attrs:{"avatar-list":t.adminListenInAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[e("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Joseph Lumaban & Justin H. ")]),e("div",{staticClass:"d-fs-200"},[t._v(" (Agent) ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center"},[e("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),e("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mtn4"},[e("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),e("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Contact with items in right slot ")]),e("dt-recipe-contact-info",{attrs:{"avatar-initials":t.avatarInitials,"avatar-seed":t.avatarSeed},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Natalie Woods ")])]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" +1 (415) 123-4567 ")]},proxy:!0},{key:"right",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-m8"},[e("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{size:"400",name:"webchat"}})]},proxy:!0}])}),e("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"more"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("dt-icon",{attrs:{size:"400",name:"more-horizontal"}})]},proxy:!0}])}),e("div",{staticClass:"d-m4"},[t._v(" 0:32 ")])],1)]},proxy:!0},{key:"bottom",fn:function(){return[t._v(" 2 matches found. "),e("dt-button",{attrs:{link:""},on:{click:function(a){return a.stopPropagation(),t.onConnectToARecord.apply(null,arguments)}}},[t._v(" Connect to a record ")])]},proxy:!0}])})],1),e("div",{staticClass:"d-m32"},[e("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group call ")]),e("dt-recipe-contact-info",{attrs:{"avatar-list":t.groupCallAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[e("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Group Call ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[e("div",{staticClass:"d-d-flex d-ai-center"},[e("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Manage participants ")])])]},proxy:!0}])})],1)])},U=[];C._withStripped=!0;var m=o(E,C,U,!1,null,null,null,null);m.options.__file="/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue";const $=m.exports;m.exports.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const K=L(),I={presence:null},A={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(V)},avatarIcon:{options:K,control:{type:"select",labels:{undefined:"(empty)"}}},presence:{options:[...N],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}}},H={title:"Recipes/List Items/Contact Info",component:l,args:I,argTypes:A,excludeStories:/.*Data$/},W=(n,{argTypes:t})=>k(n,t,P),B=(n,{argTypes:t})=>k(n,t,$),i={render:W,args:{avatarSrc:r,avatarSeed:"JL",avatarInitials:"JL",avatarSize:"lg",presence:"active",header:`<div class="d-fs-200 d-fw-bold">
    Joseph Lumaban
  </div>`,subtitle:`<div class="d-fs-100 d-mt2">
    +1 (415) 123-4567
  </div>`,bottom:`<div class="d-d-flex d-ai-center d-mtn6">
    <div class="d-w8 d-h8 d-mr4 d-bgc-magenta-200">
      &nbsp;
    </div>
    <div class="d-fs-100 d-mr4">
      Aerolabs Support
    </div>
  </div>`},parameters:{docs:{source:{code:`
  <dt-recipe-contact-info
    :avatar-src="avatarSrc"
    :avatar-initials="avatarInitials"
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
        `}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}},s={render:B,args:{avatarInitials:"NW",avatarSeed:"NW",avatarSize:"lg",presence:"busy",onGroupContactClick:d("click: clickable group contact"),onMarkAsSpam:d("click: mark this contact as spam"),onConnectToARecord:d("click: connect to a record")},parameters:{docs:{source:{code:`
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
        :avatar-initials="avatarInitials"
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
  `}},controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1},a11y:i.parameters.a11y}};var u,b,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    avatarSrc: avatarImage,
    avatarSeed: 'JL',
    avatarInitials: 'JL',
    avatarSize: 'lg',
    presence: 'active',
    header: \`<div class="d-fs-200 d-fw-bold">
    Joseph Lumaban
  </div>\`,
    subtitle: \`<div class="d-fs-100 d-mt2">
    +1 (415) 123-4567
  </div>\`,
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
    :avatar-initials="avatarInitials"
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
      config: {
        rules: [{
          id: 'aria-allowed-attr',
          enabled: false
        },
        // Verify why contact info and avatar aren't getting unique IDs
        {
          id: 'duplicate-id',
          enabled: false
        }]
      }
    }
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,_,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {
    avatarInitials: 'NW',
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
        :avatar-initials="avatarInitials"
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
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    options: {
      showPanel: false
    },
    a11y: Default.parameters.a11y
  }
}`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const O=["argsData","argTypesData","Default","Variants"],it=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:s,__namedExportsOrder:O,argTypesData:A,argsData:I,default:H},Symbol.toStringTag,{value:"Module"}));export{it as C,i as D,s as V};
//# sourceMappingURL=contact_info.stories-72e85253.js.map
