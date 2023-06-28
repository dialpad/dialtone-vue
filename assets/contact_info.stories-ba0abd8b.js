import{a as d}from"./chunk-OPEUWD42-a3b45fd8.js";import{u as S,g as I,c as h}from"./storybook_utils-31ede21d.js";import{D as A}from"./list_item-28b07f5d.js";import{D as z,a as D}from"./avatar-d0e0144b.js";import{D as g}from"./icon-8e5adfca.js";import{n as o}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as L}from"./button-82727ed7.js";import{D as T}from"./link-ea758f3d.js";import{a as V}from"./presence-16e0b832.js";const R={name:"DtRecipeContactInfo",components:{DtAvatar:z,DtIcon:g,DtListItem:A},props:{id:{type:String,default(){return S.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarInitials:{type:String,default:""},avatarIcon:{type:String,default:"user"},avatarSize:{type:String,default:"lg"},presence:{type:String,default:null},avatarList:{type:Array,default:null}}};var J=function(){var t=this,a=t._self._c;return a("dt-list-item",{attrs:{id:t.id,role:t.role,"element-type":"div","data-qa":"contact-info"},scopedSlots:t._u([{key:"left",fn:function(){return[t.showAvatar?a("div",{staticClass:"d-ps-relative",attrs:{"data-qa":"contact-info-left"}},[t.avatarList?a("div",{staticClass:"d-mrn4 d-d-flex d-fd-row"},t._l(t.avatarList,function(e,l){return a("div",{key:l},[a("dt-avatar",{attrs:{size:t.avatarSize,seed:e.seed,initials:e.initials,"overlay-icon":e.icon,"overlay-text":e.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-white d-box-unset","avatar-class":["d-ba d-baw4 d-bc-white d-bar-pill",{"d-mln24":l>0}]}},[e.src?a("img",{attrs:{"data-qa":"dt-contact-avatar",src:e.src,alt:e.initials}}):e.initials?a("div",[t._v(" "+t._s(e.initials)+" ")]):a("dt-icon",{attrs:{name:t.avatarIcon}})],1)],1)}),0):a("dt-avatar",{attrs:{size:t.avatarSize,initials:t.avatarInitials,seed:t.avatarSeed,presence:t.presence}},[t.avatarSrc?a("img",{attrs:{"data-qa":"dt-contact-avatar",src:t.avatarSrc,initials:t.avatarInitials,seed:t.avatarSeed,alt:t.avatarInitials}}):t.avatarInitials?a("div",[t._v(" "+t._s(t.avatarInitials)+" ")]):a("dt-icon",{attrs:{name:t.avatarIcon}})],1)],1):t._e()]},proxy:!0},{key:"default",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-header"}},[t._t("header")],2)]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-subtitle"}},[t._t("subtitle")],2)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-bottom"}},[t._t("bottom")],2)]},proxy:!0},{key:"right",fn:function(){return[a("div",{attrs:{"data-qa":"contact-info-right"}},[t._t("right")],2)]},proxy:!0}],null,!0)})},N=[],_=o(R,J,N,!1,null,null,null,null);const c=_.exports;_.exports.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.\nif provided, it's also required to provide a value in the `avatarInitials` prop to use\nin the alt attribute of the avatar.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarInitials",description:"Initial letters to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` and `avatarInitials` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"'user'"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`initials` - Initial letters to display in avatar (required if src is empty)<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional)",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const q={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:c}};var M=function(){var t=this,a=t._self._c;return a("dt-recipe-contact-info",{attrs:{"show-avatar":t.showAvatar,"avatar-src":t.avatarSrc,"avatar-initials":t.avatarInitials,"avatar-icon":t.avatarIcon,"avatar-size":t.avatarSize,"avatar-color":t.avatarColor,"avatar-seed":t.avatarSeed,presence:t.presence},scopedSlots:t._u([t.header?{key:"header",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.header)}})]},proxy:!0}:null,t.subtitle?{key:"subtitle",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.subtitle)}})]},proxy:!0}:null,t.right?{key:"right",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.right)}})]},proxy:!0}:null,t.bottom?{key:"bottom",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.bottom)}})]},proxy:!0}:null],null,!0)})},G=[],w=o(q,M,G,!1,null,null,null,null);const F=w.exports;w.exports.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const r=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,m=""+new URL("avatar2-388e1464.png",import.meta.url).href,E={name:"DtRecipeContactInfoVariants",components:{DtButton:L,DtRecipeContactInfo:c,DtIcon:g,DtLink:T},data(){return{adminListenInAvatars:[{src:r,initials:"KK"},{src:m,initials:"LL",icon:"hear"}],groupCallAvatars:[{initials:"JL"},{src:r,initials:"KK"},{src:m,initials:"LL",text:"+3"}]}}};var P=function(){var t=this,a=t._self._c;return a("div",{staticClass:"d-divide-y d-divide-purple-400"},[a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Unknown contact (phone number only) with attestation ")]),a("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" San Francisco, California ")]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(' Unknown contact with "marked as spam" button ')]),a("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("dt-link",{attrs:{kind:"danger"},on:{click:function(e){return e.stopPropagation(),t.onMarkAsSpam.apply(null,arguments)}}},[t._v(" Mark as spam ")])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Clickable Group contact ")]),a("dt-button",{attrs:{importance:"clear",kind:"muted"},on:{click:t.onGroupContactClick}},[a("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1)],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group contact with transfer info ")]),a("dt-recipe-contact-info",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")]),a("div",{staticClass:"d-fw-bold d-fs-100"},[t._v(" • Transfer from Billing Support ")])])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Admin view / listening in ")]),a("dt-recipe-contact-info",{attrs:{"avatar-list":t.adminListenInAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Joseph Lumaban & Justin H. ")]),a("div",{staticClass:"d-fs-200"},[t._v(" (Agent) ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn4"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Contact with items in right slot ")]),a("dt-recipe-contact-info",{attrs:{"avatar-initials":t.avatarInitials,"avatar-color":t.avatarColor},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Natalie Woods ")])]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" +1 (415) 123-4567 ")]},proxy:!0},{key:"right",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-m8"},[a("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{size:"400",name:"webchat"}})]},proxy:!0}])}),a("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"more"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{size:"400",name:"more-horizontal"}})]},proxy:!0}])}),a("div",{staticClass:"d-m4"},[t._v(" 0:32 ")])],1)]},proxy:!0},{key:"bottom",fn:function(){return[t._v(" 2 matches found. "),a("dt-button",{attrs:{link:""},on:{click:function(e){return e.stopPropagation(),t.onConnectToARecord.apply(null,arguments)}}},[t._v(" Connect to a record ")])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group call ")]),a("dt-recipe-contact-info",{attrs:{"avatar-list":t.groupCallAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Group Call ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Manage participants ")])])]},proxy:!0}])})],1)])},U=[],C=o(E,P,U,!1,null,null,null,null);const $=C.exports;C.exports.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const H=I(),k={presence:null},x={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(D)},avatarIcon:{options:H,control:{type:"select",labels:{undefined:"(empty)"}}},presence:{options:[...V],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}}},B={title:"Recipes/List Items/Contact Info",component:c,args:k,argTypes:x,excludeStories:/.*Data$/},O=(n,{argTypes:t})=>h(n,t,F),W=(n,{argTypes:t})=>h(n,t,$),i={render:O,args:{avatarSrc:r,avatarSeed:"seed",avatarInitials:"JL",avatarColor:"base",avatarSize:"lg",presence:"active",header:`<div class="d-fs-200 d-fw-bold">
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
    :avatar-color="avatarColor"
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
        `}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}},s={render:W,args:{avatarInitials:"NW",avatarColor:"orange-500",avatarSize:"lg",presence:"busy",onGroupContactClick:d("click: clickable group contact"),onMarkAsSpam:d("click: mark this contact as spam"),onConnectToARecord:d("click: connect to a record")},parameters:{docs:{source:{code:`
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
        :avatar-color="avatarColor"
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
  `}},controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1},a11y:i.parameters.a11y}};var p,v,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    avatarSrc: avatarImage,
    avatarSeed: 'seed',
    avatarInitials: 'JL',
    avatarColor: 'base',
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
    :avatar-color="avatarColor"
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
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var u,b,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {
    avatarInitials: 'NW',
    avatarColor: 'orange-500',
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
        :avatar-color="avatarColor"
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const K=["argsData","argTypesData","Default","Variants"],it=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Variants:s,__namedExportsOrder:K,argTypesData:x,argsData:k,default:B},Symbol.toStringTag,{value:"Module"}));export{it as C,i as D,s as V};
//# sourceMappingURL=contact_info.stories-ba0abd8b.js.map