import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{a as g,c as b}from"./storybook_utils-cf049d2e.js";import{D as c}from"./contact_info-baec12c8.js";import{n as y}from"./_plugin-vue2_normalizer-2bbd088e.js";import{D as x}from"./button-d2753bc0.js";import{D as w}from"./icon-666860e3.js";import{D as S}from"./link-fde1f7cd.js";import{d as o}from"./avatar2-e5d57aa6.js";import{A}from"./avatar-b2b5b11a.js";import{P as z}from"./presence-7999d7f0.js";const N={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:c}};var L=function(){var t=this,a=t._self._c;return a("dt-recipe-contact-info",{attrs:{"show-avatar":t.$attrs.showAvatar,"avatar-src":t.$attrs.avatarSrc,"avatar-full-name":t.$attrs.avatarFullName,"avatar-icon":t.$attrs.avatarIcon,"avatar-size":t.$attrs.avatarSize,"avatar-seed":t.$attrs.avatarSeed,presence:t.$attrs.presence},on:{"avatar-click":t.$attrs.onAvatarClick},scopedSlots:t._u([t.$attrs.header?{key:"header",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.header)}})]},proxy:!0}:null,t.$attrs.subtitle?{key:"subtitle",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.subtitle)}})]},proxy:!0}:null,t.$attrs.right?{key:"right",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.right)}})]},proxy:!0}:null,t.$attrs.bottom?{key:"bottom",fn:function(){return[a("span",{domProps:{innerHTML:t._s(t.$attrs.bottom)}})]},proxy:!0}:null],null,!0)})},D=[],h=y(N,L,D,!1,null,null,null,null);const J=h.exports;h.exports.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const r=""+new URL("avatar1-ed3a0c8e.png",import.meta.url).href,T={name:"DtRecipeContactInfoVariants",components:{DtButton:x,DtRecipeContactInfo:c,DtIcon:w,DtLink:S},data(){return{adminListenInAvatars:[{src:r,fullName:"Jaqueline Nackos",seed:"JN"},{src:o,fullName:"Joseph Lumaban",icon:"hear",seed:"JL"}],groupCallAvatars:[{fullName:"Joseph Lumaban",seed:"JL"},{src:r,fullName:"Jaqueline Nackos",seed:"JN"},{src:o,fullName:"Natalie Woods",text:"+3",seed:"NW"}]}}};var I=function(){var t=this,a=t._self._c;return a("div",{staticClass:"d-divide-y d-divide-purple-400"},[a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Unknown contact (phone number only) with attestation ")]),a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" San Francisco, California ")]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(' Unknown contact with "marked as spam" button ')]),a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" +1 (415) 123-4567 ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("dt-link",{attrs:{kind:"danger"},on:{click:function(i){return i.stopPropagation(),t.$attrs.onMarkAsSpam.apply(null,arguments)}}},[t._v(" Mark as spam ")])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Clickable Group contact ")]),a("dt-button",{attrs:{importance:"clear",kind:"muted"},on:{click:t.$attrs.onGroupContactClick}},[a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1)],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group contact with transfer info ")]),a("dt-recipe-contact-info",{attrs:{"avatar-icon":"user"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fs-200 d-fw-bold d-mr4"},[t._v(" Joseph Lumaban ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mt2 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn6"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")]),a("div",{staticClass:"d-fw-bold d-fs-100"},[t._v(" • Transfer from Billing Support ")])])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Admin view / listening in ")]),a("dt-recipe-contact-info",{attrs:{"avatar-list":t.adminListenInAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Joseph Lumaban & Justin H. ")]),a("div",{staticClass:"d-fs-200"},[t._v(" (Agent) ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" +1 (415) 123-4567 ")]),a("dt-icon",{staticClass:"d-va-text-bottom",attrs:{name:"check-circle",size:"200"}})],1)]},proxy:!0},{key:"bottom",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mtn4"},[a("div",{staticClass:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},[t._v("   ")]),a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Aerolabs Support ")])])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Contact with items in right slot ")]),a("dt-recipe-contact-info",{attrs:{"avatar-full-name":t.$attrs.avatarFullName,"avatar-seed":t.$attrs.avatarSeed},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Natalie Woods ")])]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" +1 (415) 123-4567 ")]},proxy:!0},{key:"right",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-m8"},[a("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{size:"400",name:"webchat"}})]},proxy:!0}])}),a("dt-button",{attrs:{size:"xs",circle:!0,importance:"clear","aria-label":"more"},scopedSlots:t._u([{key:"icon",fn:function(){return[a("dt-icon",{attrs:{size:"400",name:"more-horizontal"}})]},proxy:!0}])}),a("div",{staticClass:"d-m4"},[t._v(" 0:32 ")])],1)]},proxy:!0},{key:"bottom",fn:function(){return[t._v(" 2 matches found. "),a("dt-button",{attrs:{link:""},on:{click:function(i){return i.stopPropagation(),t.$attrs.onConnectToARecord.apply(null,arguments)}}},[t._v(" Connect to a record ")])]},proxy:!0}])})],1),a("div",{staticClass:"d-m32"},[a("p",{staticClass:"d-my16 d-fs-200 d-fw-bold"},[t._v(" Group call ")]),a("dt-recipe-contact-info",{attrs:{"avatar-list":t.groupCallAvatars},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center d-mb2"},[a("div",{staticClass:"d-fw-bold d-fs-200"},[t._v(" Group Call ")])])]},proxy:!0},{key:"subtitle",fn:function(){return[a("div",{staticClass:"d-d-flex d-ai-center"},[a("div",{staticClass:"d-fs-100 d-mr4"},[t._v(" Manage participants ")])])]},proxy:!0}])})],1)])},$=[],k=y(T,I,$,!1,null,null,null,null);const F=k.exports;k.exports.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const R=g(),_={onAvatarClick:s("avatar-click"),presence:null},C={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(A)},avatarIcon:{options:R,control:{type:"select",labels:{undefined:"(empty)"}}},avatarAriaLabel:{table:{type:{summary:"string"}}},presence:{options:[...z],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},"avatar-click":{description:"click on avatar event",table:{type:{summary:"event"}}},onAvatarClick:{table:{disable:!0}}},M={title:"Recipes/List Items/Contact Info",component:c,args:_,argTypes:C,excludeStories:/.*Data$/},V=(d,{argTypes:t})=>b(d,t,J),G=(d,{argTypes:t})=>b(d,t,F),e={render:V,args:{avatarSrc:r,avatarSeed:"JL",avatarFullName:"Joseph Lumaban",avatarSize:"lg",presence:"active",header:'<div class="d-fs-200 d-fw-bold"> Joseph Lumaban </div>',subtitle:'<div class="d-fs-100 d-mt2"> +1 (415) 123-4567 </div>',bottom:`<div class="d-d-flex d-ai-center d-mtn6">
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
        `}},a11y:{disable:!0,config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}},n={render:G,args:{avatarFullName:"Natalie Woods",avatarSeed:"NW",avatarSize:"lg",presence:"busy",onGroupContactClick:s("click: clickable group contact"),onMarkAsSpam:s("click: mark this contact as spam"),onConnectToARecord:s("click: connect to a record")},parameters:{docs:{source:{code:`
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
  `}},a11y:e.parameters.a11y,controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,f,u;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const P=["argsData","argTypesData","Default","Variants"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:n,__namedExportsOrder:P,argTypesData:C,argsData:_,default:M},Symbol.toStringTag,{value:"Module"}));export{Q as C,e as D,n as V};
//# sourceMappingURL=contact_info.stories-a0e4128f.js.map
