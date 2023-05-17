import{a as g}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as N}from"./storybook_utils-ea1afa1b.js";import{D as F}from"./list_item-50faabc4.js";import{D as H,a as U}from"./avatar-d98191d8.js";import{u as B}from"./utils-8607998d.js";import{b as r,w as e,a as p,o,f as t,e as _,F as O,s as P,q as l,t as x,j as z,i as h,y as W,d as s,z as I}from"./vue.esm-bundler-8a039e44.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{D as j}from"./button-99271aa3.js";import{D as K}from"./icon-cde06ed8.js";import{P as Z}from"./presence-c677e1cf.js";const R={name:"DtRecipeContactInfo",components:{DtAvatar:H,DtListItem:F},props:{id:{type:String,default(){return B.getUniqueString()}},role:{type:String,default:""},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarInitials:{type:String,default:""},avatarSize:{type:String,default:"lg"},presence:{type:String,default:null},avatarList:{type:Array,default:null}}},Q={class:"d-ps-relative","data-qa":"contact-info-left"},X={key:0,class:"d-mrn4 d-d-flex d-fd-row"},Y=["src","alt"],tt=["src","initials","seed","alt"],et={"data-qa":"contact-info-header"},at={"data-qa":"contact-info-subtitle"},nt={"data-qa":"contact-info-bottom"},dt={"data-qa":"contact-info-right"};function st(a,u,n,k,b,C){const i=p("dt-avatar"),c=p("dt-list-item");return o(),r(c,{id:n.id,role:n.role,"element-type":"div","data-qa":"contact-info"},{left:e(()=>[t("div",Q,[n.avatarList?(o(),_("div",X,[(o(!0),_(O,null,P(n.avatarList,(d,v)=>(o(),_("div",{key:v},[d.src?(o(),r(i,{key:0,size:n.avatarSize,seed:d.seed,initials:d.initials,"overlay-icon":d.icon,"overlay-text":d.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-white d-box-unset","avatar-class":["d-ba d-baw4 d-bc-white d-bar-pill",{"d-mln24":v>0}]},{default:e(()=>[t("img",{"data-qa":"dt-contact-avatar",src:d.src,alt:d.initials},null,8,Y)]),_:2},1032,["size","seed","initials","overlay-icon","overlay-text","avatar-class"])):d.initials?(o(),r(i,{key:1,size:n.avatarSize,seed:d.seed,initials:d.initials,"overlay-icon":d.icon,"overlay-text":d.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-white d-box-unset","avatar-class":["d-ba d-baw4 d-bc-white d-bar-pill",{"d-mln24":v>0}]},{default:e(()=>[l(x(d.initials),1)]),_:2},1032,["size","seed","initials","overlay-icon","overlay-text","avatar-class"])):z("",!0)]))),128))])):n.avatarSrc?(o(),r(i,{key:1,size:n.avatarSize,initials:n.avatarInitials,seed:n.avatarSeed,presence:n.presence},{default:e(()=>[t("img",{"data-qa":"dt-contact-avatar",src:n.avatarSrc,initials:n.avatarInitials,seed:n.avatarSeed,alt:n.avatarInitials},null,8,tt)]),_:1},8,["size","initials","seed","presence"])):n.avatarInitials?(o(),r(i,{key:2,size:n.avatarSize,initials:n.avatarInitials,seed:n.avatarSeed,presence:n.presence},{default:e(()=>[l(x(n.avatarInitials),1)]),_:1},8,["size","initials","seed","presence"])):z("",!0)])]),default:e(()=>[t("div",et,[h(a.$slots,"header")])]),subtitle:e(()=>[t("div",at,[h(a.$slots,"subtitle")])]),bottom:e(()=>[t("div",nt,[h(a.$slots,"bottom")])]),right:e(()=>[t("div",dt,[h(a.$slots,"right")])]),_:3},8,["id","role"])}const S=w(R,[["render",st]]);R.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSrc",description:"Optional avatar image url.\nif provided, it's also required to provide a value in the `avatarInitials` prop to use\nin the alt attribute of the avatar.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarInitials",description:"Initial letters to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSize",description:`Status color of user from contact.
The size of the avatar`,tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`initials` - Initial letters to display in avatar (required if src is empty)<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional)",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const J={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:S}},it=["innerHTML"],ot=["innerHTML"],ct=["innerHTML"],rt=["innerHTML"];function lt(a,u,n,k,b,C){const i=p("dt-recipe-contact-info");return o(),r(i,{"avatar-src":a.$attrs.avatarSrc,"avatar-initials":a.$attrs.avatarInitials,"avatar-size":a.$attrs.avatarSize,"avatar-color":a.$attrs.avatarColor,"avatar-seed":a.$attrs.avatarSeed,presence:a.$attrs.presence},W({_:2},[a.$attrs.header?{name:"header",fn:e(()=>[t("span",{innerHTML:a.$attrs.header},null,8,it)]),key:"0"}:void 0,a.$attrs.subtitle?{name:"subtitle",fn:e(()=>[t("span",{innerHTML:a.$attrs.subtitle},null,8,ot)]),key:"1"}:void 0,a.$attrs.right?{name:"right",fn:e(()=>[t("span",{innerHTML:a.$attrs.right},null,8,ct)]),key:"2"}:void 0,a.$attrs.bottom?{name:"bottom",fn:e(()=>[t("span",{innerHTML:a.$attrs.bottom},null,8,rt)]),key:"3"}:void 0]),1032,["avatar-src","avatar-initials","avatar-size","avatar-color","avatar-seed","presence"])}const mt=w(J,[["render",lt]]);J.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const y=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,A=""+new URL("avatar2-388e1464.png",import.meta.url).href,q={name:"DtRecipeContactInfoVariants",components:{DtButton:j,DtRecipeContactInfo:S,DtIcon:K},data(){return{adminListenInAvatars:[{src:y,initials:"KK"},{src:A,initials:"LL",icon:"hear"}],groupCallAvatars:[{initials:"JL"},{src:y,initials:"KK"},{src:A,initials:"LL",text:"+3"}]}}},pt={class:"d-divide-y d-divide-purple-400"},vt={class:"d-m32"},ft=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Unknown contact (phone number only) with attestation ",-1),ut={class:"d-d-flex d-ai-center d-mb2"},bt=t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ",-1),ht={class:"d-m32"},_t=t("p",{class:"d-my16 d-fs-200 d-fw-bold"},' Unknown contact with "marked as spam" button ',-1),gt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ")],-1),yt={class:"d-m32"},wt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Clickable Group contact ",-1),St=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),kt={class:"d-d-flex d-ai-center"},Ct=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),xt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),zt={class:"d-m32"},It=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group contact with transfer info ",-1),At=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),Lt={class:"d-d-flex d-ai-center"},Dt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Tt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support "),t("div",{class:"d-fw-bold d-fs-100"}," • Transfer from Billing Support ")],-1),$t={class:"d-m32"},Vt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Admin view / listening in ",-1),Mt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Joseph Lumaban & Justin H. "),t("div",{class:"d-fs-200"}," (Agent) ")],-1),Nt={class:"d-d-flex d-ai-center"},Rt=t("div",{class:"d-fs-100 d-mr4"}," +1 (415) 123-4567 ",-1),Jt=t("div",{class:"d-d-flex d-ai-center d-mtn4"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),qt={class:"d-m32"},Gt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Contact with items in right slot ",-1),Et=t("div",{class:"d-fw-bold d-fs-200"}," Natalie Woods ",-1),Ft={class:"d-d-flex d-ai-center d-m8"},Ht=t("div",{class:"d-m4"}," 0:32 ",-1),Ut={class:"d-m32"},Bt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group call ",-1),Ot=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Group Call ")],-1),Pt=t("div",{class:"d-d-flex d-ai-center"},[t("div",{class:"d-fs-100 d-mr4"}," Manage participants ")],-1);function Wt(a,u,n,k,b,C){const i=p("dt-icon"),c=p("dt-recipe-contact-info"),d=p("dt-button");return o(),_("div",pt,[t("div",vt,[ft,s(c,null,{header:e(()=>[t("div",ut,[bt,s(i,{name:"check-circle",size:"200"})])]),subtitle:e(()=>[l(" San Francisco, California ")]),_:1})]),t("div",ht,[_t,s(c,null,{header:e(()=>[gt]),subtitle:e(()=>[t("div",{class:"d-fc-red-400",onClick:u[0]||(u[0]=I((...v)=>a.$attrs.onMarkAsSpam&&a.$attrs.onMarkAsSpam(...v),["stop"]))}," Mark as spam ")]),_:1})]),t("div",yt,[wt,s(d,{importance:"clear",kind:"muted",onClick:a.$attrs.onGroupContactClick},{default:e(()=>[s(c,null,{header:e(()=>[St]),subtitle:e(()=>[t("div",kt,[Ct,s(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[xt]),_:1})]),_:1},8,["onClick"])]),t("div",zt,[It,s(c,null,{header:e(()=>[At]),subtitle:e(()=>[t("div",Lt,[Dt,s(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Tt]),_:1})]),t("div",$t,[Vt,s(c,{"avatar-list":b.adminListenInAvatars},{header:e(()=>[Mt]),subtitle:e(()=>[t("div",Nt,[Rt,s(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Jt]),_:1},8,["avatar-list"])]),t("div",qt,[Gt,s(c,{"avatar-initials":a.$attrs.avatarInitials,"avatar-color":a.$attrs.avatarColor},{header:e(()=>[Et]),subtitle:e(()=>[l(" +1 (415) 123-4567 ")]),right:e(()=>[t("div",Ft,[s(d,{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},{icon:e(()=>[s(i,{size:"400",name:"webchat"})]),_:1}),s(d,{size:"xs",circle:!0,importance:"clear","aria-label":"more"},{icon:e(()=>[s(i,{size:"400",name:"more-horizontal"})]),_:1}),Ht])]),bottom:e(()=>[l(" 2 matches found. "),s(d,{link:"",onClick:I(a.$attrs.onConnectToARecord,["stop"])},{default:e(()=>[l(" Connect to a record ")]),_:1},8,["onClick"])]),_:1},8,["avatar-initials","avatar-color"])]),t("div",Ut,[Bt,s(c,{"avatar-list":b.groupCallAvatars},{header:e(()=>[Ot]),subtitle:e(()=>[Pt]),_:1},8,["avatar-list"])])])}const jt=w(q,[["render",Wt]]);q.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const G={presence:null},E={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(U)},presence:{options:[...Z],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}}},Kt={title:"Recipes/List Items/Contact Info",component:S,args:G,argTypes:E,excludeStories:/.*Data$/},Zt=a=>N(a,mt),Qt=a=>N(a,jt),m={render:Zt,args:{avatarSrc:y,avatarSeed:"seed",avatarInitials:"JL",avatarColor:"base",avatarSize:"lg",presence:"active",header:`<div class="d-fs-200 d-fw-bold">
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
        `}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}},f={render:Qt,args:{avatarInitials:"NW",avatarColor:"orange-500",avatarSize:"lg",presence:"busy",onGroupContactClick:g("click: clickable group contact"),onMarkAsSpam:g("click: mark this contact as spam"),onConnectToARecord:g("click: connect to a record")},parameters:{docs:{source:{code:`
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
  `}},controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1},a11y:m.parameters.a11y}};var L,D,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var $,V,M;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(V=f.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const Xt=["argsData","argTypesData","Default","Variants"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Variants:f,__namedExportsOrder:Xt,argTypesData:E,argsData:G,default:Kt},Symbol.toStringTag,{value:"Module"}));export{re as C,m as D,f as V};
//# sourceMappingURL=contact_info.stories-ecbc479a.js.map
