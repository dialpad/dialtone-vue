import{a as g}from"./chunk-OPEUWD42-a3b45fd8.js";import{g as H,c as M}from"./storybook_utils-1da4daf3.js";import{D as B}from"./list_item-09689f2c.js";import{D as U,a as O}from"./avatar-3a4fc6cf.js";import{D as R}from"./icon-56173945.js";import{u as P}from"./utils-d94a3fa9.js";import{b as v,w as a,a as l,o as d,f as c,F as W,s as j,d as s,t as x,k as K,g as t,j as h,y as Z,q as _,z}from"./vue.esm-bundler-66d1e5de.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Q}from"./button-50d7f921.js";import{P as X}from"./presence-00841f78.js";const J={name:"DtRecipeContactInfo",components:{DtAvatar:U,DtIcon:R,DtListItem:B},props:{id:{type:String,default(){return P.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarInitials:{type:String,default:""},avatarIcon:{type:String,default:"user"},avatarSize:{type:String,default:"lg"},presence:{type:String,default:null},avatarList:{type:Array,default:null}}},Y={key:0,class:"d-ps-relative","data-qa":"contact-info-left"},tt={key:0,class:"d-mrn4 d-d-flex d-fd-row"},at=["src","alt"],et={key:1},nt=["src","initials","seed","alt"],st={key:1},dt={"data-qa":"contact-info-header"},it={"data-qa":"contact-info-subtitle"},ot={"data-qa":"contact-info-bottom"},rt={"data-qa":"contact-info-right"};function ct(e,u,n,S,b,C){const i=l("dt-icon"),r=l("dt-avatar"),m=l("dt-list-item");return d(),v(m,{id:n.id,role:n.role,"element-type":"div","data-qa":"contact-info"},{left:a(()=>[n.showAvatar?(d(),c("div",Y,[n.avatarList?(d(),c("div",tt,[(d(!0),c(W,null,j(n.avatarList,(o,I)=>(d(),c("div",{key:I},[s(r,{size:n.avatarSize,seed:o.seed,initials:o.initials,"overlay-icon":o.icon,"overlay-text":o.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-white d-box-unset","avatar-class":["d-ba d-baw4 d-bc-white d-bar-pill",{"d-mln24":I>0}]},{default:a(()=>[o.src?(d(),c("img",{key:0,"data-qa":"dt-contact-avatar",src:o.src,alt:o.initials},null,8,at)):o.initials?(d(),c("div",et,x(o.initials),1)):(d(),v(i,{key:2,name:n.avatarIcon},null,8,["name"]))]),_:2},1032,["size","seed","initials","overlay-icon","overlay-text","avatar-class"])]))),128))])):(d(),v(r,{key:1,size:n.avatarSize,initials:n.avatarInitials,seed:n.avatarSeed,presence:n.presence},{default:a(()=>[n.avatarSrc?(d(),c("img",{key:0,"data-qa":"dt-contact-avatar",src:n.avatarSrc,initials:n.avatarInitials,seed:n.avatarSeed,alt:n.avatarInitials},null,8,nt)):n.avatarInitials?(d(),c("div",st,x(n.avatarInitials),1)):(d(),v(i,{key:2,name:n.avatarIcon},null,8,["name"]))]),_:1},8,["size","initials","seed","presence"]))])):K("",!0)]),default:a(()=>[t("div",dt,[h(e.$slots,"header")])]),subtitle:a(()=>[t("div",it,[h(e.$slots,"subtitle")])]),bottom:a(()=>[t("div",ot,[h(e.$slots,"bottom")])]),right:a(()=>[t("div",rt,[h(e.$slots,"right")])]),_:3},8,["id","role"])}const k=w(J,[["render",ct]]);J.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.\nif provided, it's also required to provide a value in the `avatarInitials` prop to use\nin the alt attribute of the avatar.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarInitials",description:"Initial letters to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` and `avatarInitials` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"'user'"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`initials` - Initial letters to display in avatar (required if src is empty)<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional)",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const q={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:k}},lt=["innerHTML"],mt=["innerHTML"],pt=["innerHTML"],vt=["innerHTML"];function ft(e,u,n,S,b,C){const i=l("dt-recipe-contact-info");return d(),v(i,{"show-avatar":e.$attrs.showAvatar,"avatar-src":e.$attrs.avatarSrc,"avatar-initials":e.$attrs.avatarInitials,"avatar-icon":e.$attrs.avatarIcon,"avatar-size":e.$attrs.avatarSize,"avatar-color":e.$attrs.avatarColor,"avatar-seed":e.$attrs.avatarSeed,presence:e.$attrs.presence},Z({_:2},[e.$attrs.header?{name:"header",fn:a(()=>[t("span",{innerHTML:e.$attrs.header},null,8,lt)]),key:"0"}:void 0,e.$attrs.subtitle?{name:"subtitle",fn:a(()=>[t("span",{innerHTML:e.$attrs.subtitle},null,8,mt)]),key:"1"}:void 0,e.$attrs.right?{name:"right",fn:a(()=>[t("span",{innerHTML:e.$attrs.right},null,8,pt)]),key:"2"}:void 0,e.$attrs.bottom?{name:"bottom",fn:a(()=>[t("span",{innerHTML:e.$attrs.bottom},null,8,vt)]),key:"3"}:void 0]),1032,["show-avatar","avatar-src","avatar-initials","avatar-icon","avatar-size","avatar-color","avatar-seed","presence"])}const ut=w(q,[["render",ft]]);q.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const y=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,A=""+new URL("avatar2-388e1464.png",import.meta.url).href,G={name:"DtRecipeContactInfoVariants",components:{DtButton:Q,DtRecipeContactInfo:k,DtIcon:R},data(){return{adminListenInAvatars:[{src:y,initials:"KK"},{src:A,initials:"LL",icon:"hear"}],groupCallAvatars:[{initials:"JL"},{src:y,initials:"KK"},{src:A,initials:"LL",text:"+3"}]}}},bt={class:"d-divide-y d-divide-purple-400"},ht={class:"d-m32"},_t=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Unknown contact (phone number only) with attestation ",-1),gt={class:"d-d-flex d-ai-center d-mb2"},yt=t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ",-1),wt={class:"d-m32"},kt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"},' Unknown contact with "marked as spam" button ',-1),St=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ")],-1),Ct={class:"d-m32"},It=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Clickable Group contact ",-1),xt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),zt={class:"d-d-flex d-ai-center"},At=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Lt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Dt={class:"d-m32"},Tt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group contact with transfer info ",-1),$t=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),Vt={class:"d-d-flex d-ai-center"},Nt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Mt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support "),t("div",{class:"d-fw-bold d-fs-100"}," • Transfer from Billing Support ")],-1),Rt={class:"d-m32"},Jt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Admin view / listening in ",-1),qt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Joseph Lumaban & Justin H. "),t("div",{class:"d-fs-200"}," (Agent) ")],-1),Gt={class:"d-d-flex d-ai-center"},Et=t("div",{class:"d-fs-100 d-mr4"}," +1 (415) 123-4567 ",-1),Ft=t("div",{class:"d-d-flex d-ai-center d-mtn4"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Ht={class:"d-m32"},Bt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Contact with items in right slot ",-1),Ut=t("div",{class:"d-fw-bold d-fs-200"}," Natalie Woods ",-1),Ot={class:"d-d-flex d-ai-center d-m8"},Pt=t("div",{class:"d-m4"}," 0:32 ",-1),Wt={class:"d-m32"},jt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group call ",-1),Kt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Group Call ")],-1),Zt=t("div",{class:"d-d-flex d-ai-center"},[t("div",{class:"d-fs-100 d-mr4"}," Manage participants ")],-1);function Qt(e,u,n,S,b,C){const i=l("dt-icon"),r=l("dt-recipe-contact-info"),m=l("dt-button");return d(),c("div",bt,[t("div",ht,[_t,s(r,null,{header:a(()=>[t("div",gt,[yt,s(i,{name:"check-circle",size:"200"})])]),subtitle:a(()=>[_(" San Francisco, California ")]),_:1})]),t("div",wt,[kt,s(r,null,{header:a(()=>[St]),subtitle:a(()=>[t("div",{class:"d-fc-red-400",onClick:u[0]||(u[0]=z((...o)=>e.$attrs.onMarkAsSpam&&e.$attrs.onMarkAsSpam(...o),["stop"]))}," Mark as spam ")]),_:1})]),t("div",Ct,[It,s(m,{importance:"clear",kind:"muted",onClick:e.$attrs.onGroupContactClick},{default:a(()=>[s(r,null,{header:a(()=>[xt]),subtitle:a(()=>[t("div",zt,[At,s(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[Lt]),_:1})]),_:1},8,["onClick"])]),t("div",Dt,[Tt,s(r,null,{header:a(()=>[$t]),subtitle:a(()=>[t("div",Vt,[Nt,s(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[Mt]),_:1})]),t("div",Rt,[Jt,s(r,{"avatar-list":b.adminListenInAvatars},{header:a(()=>[qt]),subtitle:a(()=>[t("div",Gt,[Et,s(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[Ft]),_:1},8,["avatar-list"])]),t("div",Ht,[Bt,s(r,{"avatar-initials":e.$attrs.avatarInitials,"avatar-color":e.$attrs.avatarColor},{header:a(()=>[Ut]),subtitle:a(()=>[_(" +1 (415) 123-4567 ")]),right:a(()=>[t("div",Ot,[s(m,{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},{icon:a(()=>[s(i,{size:"400",name:"webchat"})]),_:1}),s(m,{size:"xs",circle:!0,importance:"clear","aria-label":"more"},{icon:a(()=>[s(i,{size:"400",name:"more-horizontal"})]),_:1}),Pt])]),bottom:a(()=>[_(" 2 matches found. "),s(m,{link:"",onClick:z(e.$attrs.onConnectToARecord,["stop"])},{default:a(()=>[_(" Connect to a record ")]),_:1},8,["onClick"])]),_:1},8,["avatar-initials","avatar-color"])]),t("div",Wt,[jt,s(r,{"avatar-list":b.groupCallAvatars},{header:a(()=>[Kt]),subtitle:a(()=>[Zt]),_:1},8,["avatar-list"])])])}const Xt=w(G,[["render",Qt]]);G.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const Yt=H(),E={presence:null},F={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(O)},avatarIcon:{options:Yt,control:{type:"select",labels:{undefined:"(empty)"}}},presence:{options:[...X],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}}},ta={title:"Recipes/List Items/Contact Info",component:k,args:E,argTypes:F,excludeStories:/.*Data$/},aa=e=>M(e,ut),ea=e=>M(e,Xt),p={render:aa,args:{avatarSrc:y,avatarSeed:"seed",avatarInitials:"JL",avatarColor:"base",avatarSize:"lg",presence:"active",header:`<div class="d-fs-200 d-fw-bold">
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
        `}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}},f={render:ea,args:{avatarInitials:"NW",avatarColor:"orange-500",avatarSize:"lg",presence:"busy",onGroupContactClick:g("click: clickable group contact"),onMarkAsSpam:g("click: mark this contact as spam"),onConnectToARecord:g("click: connect to a record")},parameters:{docs:{source:{code:`
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
  `}},controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1},a11y:p.parameters.a11y}};var L,D,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var $,V,N;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(V=f.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const na=["argsData","argTypesData","Default","Variants"],fa=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Variants:f,__namedExportsOrder:na,argTypesData:F,argsData:E,default:ta},Symbol.toStringTag,{value:"Module"}));export{fa as C,p as D,f as V};
//# sourceMappingURL=contact_info.stories-900e56e5.js.map
