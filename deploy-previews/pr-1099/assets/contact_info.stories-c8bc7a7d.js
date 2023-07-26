import{a as y}from"./chunk-AY7I2SME-c7b6cf8a.js";import{g as B,c as M}from"./storybook_utils-f3a25a1b.js";import{D as U}from"./list_item-f2bb0dbd.js";import{D as K,a as W}from"./avatar-ccacfeab.js";import{D as R}from"./icon-fe5f3947.js";import{u as O}from"./utils-401150e1.js";import{k as l,v as f,m as e,o as s,d as r,F as P,g as j,l as d,t as z,j as p,e as t,x as _,I as Z,q as g,J as A}from"./vue.esm-bundler-356a911e.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Q}from"./button-6fc4376e.js";import{P as X}from"./presence-ec98de6a.js";const q={name:"DtRecipeContactInfo",components:{DtAvatar:K,DtIcon:R,DtListItem:U},props:{id:{type:String,default(){return O.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarInitials:{type:String,default:""},avatarIcon:{type:String,default:"user"},avatarSize:{type:String,default:"lg"},presence:{type:String,default:null},avatarList:{type:Array,default:null}}},Y={key:0,class:"d-ps-relative","data-qa":"contact-info-left"},tt={key:0,class:"d-mrn4 d-d-flex d-fd-row"},et=["src","alt"],at={key:1},nt=["src","initials","seed","alt"],dt={key:1},st={"data-qa":"contact-info-header"},it={"data-qa":"contact-info-subtitle"},ot={"data-qa":"contact-info-bottom"},ct={"data-qa":"contact-info-right"};function rt(a,b,n,I,h,x){const o=l("dt-icon"),c=l("dt-avatar"),m=l("dt-list-item");return s(),f(m,{id:n.id,role:n.role,"element-type":"div","data-qa":"contact-info",class:"dt-contact-info"},{left:e(()=>[n.showAvatar?(s(),r("div",Y,[n.avatarList?(s(),r("div",tt,[(s(!0),r(P,null,j(n.avatarList,(i,C)=>(s(),r("div",{key:C},[d(c,{size:n.avatarSize,seed:i.seed,initials:i.initials,"overlay-icon":i.icon,"overlay-text":i.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-black-100 d-box-unset","avatar-class":["d-baw4 d-bar-pill d-ba d-bc-black-100",{"d-mln24":C>0,"d-bc-brand":!!i.halo}]},{default:e(()=>[i.src?(s(),r("img",{key:0,"data-qa":"dt-contact-avatar",src:i.src,alt:i.initials},null,8,et)):i.initials?(s(),r("div",at,z(i.initials),1)):(s(),f(o,{key:2,name:n.avatarIcon},null,8,["name"]))]),_:2},1032,["size","seed","initials","overlay-icon","overlay-text","avatar-class"])]))),128))])):(s(),f(c,{key:1,size:n.avatarSize,initials:n.avatarInitials,seed:n.avatarSeed,presence:n.presence},{default:e(()=>[n.avatarSrc?(s(),r("img",{key:0,"data-qa":"dt-contact-avatar",src:n.avatarSrc,initials:n.avatarInitials,seed:n.avatarSeed,alt:n.avatarInitials},null,8,nt)):n.avatarInitials?(s(),r("div",dt,z(n.avatarInitials),1)):(s(),f(o,{key:2,name:n.avatarIcon},null,8,["name"]))]),_:1},8,["size","initials","seed","presence"]))])):p("v-if",!0)]),default:e(()=>[t("div",st,[p(" @slot Slot for header information "),_(a.$slots,"header",{},void 0,!0)])]),subtitle:e(()=>[t("div",it,[p(" @slot Slot for subtitle information "),_(a.$slots,"subtitle",{},void 0,!0)])]),bottom:e(()=>[t("div",ot,[p(" @slot Slot for information at the bottom "),_(a.$slots,"bottom",{},void 0,!0)])]),right:e(()=>[t("div",ct,[p(" @slot Slot for the right content "),_(a.$slots,"right",{},void 0,!0)])]),_:3},8,["id","role"])}const k=S(q,[["render",rt],["__scopeId","data-v-489bf75b"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]]);q.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.\nif provided, it's also required to provide a value in the `avatarInitials` prop to use\nin the alt attribute of the avatar.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarInitials",description:"Initial letters to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` and `avatarInitials` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"'user'"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`initials` - Initial letters to display in avatar (required if src is empty)<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const G={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:k}},lt=["innerHTML"],mt=["innerHTML"],vt=["innerHTML"],pt=["innerHTML"];function ft(a,b,n,I,h,x){const o=l("dt-recipe-contact-info");return s(),f(o,{"show-avatar":a.$attrs.showAvatar,"avatar-src":a.$attrs.avatarSrc,"avatar-initials":a.$attrs.avatarInitials,"avatar-icon":a.$attrs.avatarIcon,"avatar-size":a.$attrs.avatarSize,"avatar-seed":a.$attrs.avatarSeed,presence:a.$attrs.presence},Z({_:2},[a.$attrs.header?{name:"header",fn:e(()=>[t("span",{innerHTML:a.$attrs.header},null,8,lt)]),key:"0"}:void 0,a.$attrs.subtitle?{name:"subtitle",fn:e(()=>[t("span",{innerHTML:a.$attrs.subtitle},null,8,mt)]),key:"1"}:void 0,a.$attrs.right?{name:"right",fn:e(()=>[t("span",{innerHTML:a.$attrs.right},null,8,vt)]),key:"2"}:void 0,a.$attrs.bottom?{name:"bottom",fn:e(()=>[t("span",{innerHTML:a.$attrs.bottom},null,8,pt)]),key:"3"}:void 0]),1032,["show-avatar","avatar-src","avatar-initials","avatar-icon","avatar-size","avatar-seed","presence"])}const ut=S(G,[["render",ft],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]]);G.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const w=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,L=""+new URL("avatar2-388e1464.png",import.meta.url).href,E={name:"DtRecipeContactInfoVariants",components:{DtButton:Q,DtRecipeContactInfo:k,DtIcon:R},data(){return{adminListenInAvatars:[{src:w,initials:"KK",seed:"KK"},{src:L,initials:"LL",icon:"hear",seed:"LL"}],groupCallAvatars:[{initials:"JL",seed:"JL"},{src:w,initials:"KK",seed:"KK"},{src:L,initials:"LL",text:"+3",seed:"LL"}]}}},bt={class:"d-divide-y d-divide-purple-400"},ht={class:"d-m32"},_t=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Unknown contact (phone number only) with attestation ",-1),gt={class:"d-d-flex d-ai-center d-mb2"},yt=t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ",-1),wt={class:"d-m32"},St=t("p",{class:"d-my16 d-fs-200 d-fw-bold"},' Unknown contact with "marked as spam" button ',-1),kt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ")],-1),It={class:"d-m32"},xt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Clickable Group contact ",-1),Ct=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),zt={class:"d-d-flex d-ai-center"},At=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Lt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Dt={class:"d-m32"},Tt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group contact with transfer info ",-1),$t=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),Vt={class:"d-d-flex d-ai-center"},Nt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Jt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support "),t("div",{class:"d-fw-bold d-fs-100"}," • Transfer from Billing Support ")],-1),Mt={class:"d-m32"},Rt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Admin view / listening in ",-1),qt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Joseph Lumaban & Justin H. "),t("div",{class:"d-fs-200"}," (Agent) ")],-1),Gt={class:"d-d-flex d-ai-center"},Et=t("div",{class:"d-fs-100 d-mr4"}," +1 (415) 123-4567 ",-1),Ft=t("div",{class:"d-d-flex d-ai-center d-mtn4"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Ht={class:"d-m32"},Bt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Contact with items in right slot ",-1),Ut=t("div",{class:"d-fw-bold d-fs-200"}," Natalie Woods ",-1),Kt={class:"d-d-flex d-ai-center d-m8"},Wt=t("div",{class:"d-m4"}," 0:32 ",-1),Ot={class:"d-m32"},Pt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group call ",-1),jt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Group Call ")],-1),Zt=t("div",{class:"d-d-flex d-ai-center"},[t("div",{class:"d-fs-100 d-mr4"}," Manage participants ")],-1);function Qt(a,b,n,I,h,x){const o=l("dt-icon"),c=l("dt-recipe-contact-info"),m=l("dt-button");return s(),r("div",bt,[t("div",ht,[_t,d(c,null,{header:e(()=>[t("div",gt,[yt,d(o,{name:"check-circle",size:"200"})])]),subtitle:e(()=>[g(" San Francisco, California ")]),_:1})]),t("div",wt,[St,d(c,null,{header:e(()=>[kt]),subtitle:e(()=>[t("div",{class:"d-fc-red-400",onClick:b[0]||(b[0]=A((...i)=>a.$attrs.onMarkAsSpam&&a.$attrs.onMarkAsSpam(...i),["stop"]))}," Mark as spam ")]),_:1})]),t("div",It,[xt,d(m,{importance:"clear",kind:"muted",onClick:a.$attrs.onGroupContactClick},{default:e(()=>[d(c,null,{header:e(()=>[Ct]),subtitle:e(()=>[t("div",zt,[At,d(o,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Lt]),_:1})]),_:1},8,["onClick"])]),t("div",Dt,[Tt,d(c,null,{header:e(()=>[$t]),subtitle:e(()=>[t("div",Vt,[Nt,d(o,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Jt]),_:1})]),t("div",Mt,[Rt,d(c,{"avatar-list":h.adminListenInAvatars},{header:e(()=>[qt]),subtitle:e(()=>[t("div",Gt,[Et,d(o,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Ft]),_:1},8,["avatar-list"])]),t("div",Ht,[Bt,d(c,{"avatar-initials":a.$attrs.avatarInitials,"avatar-seed":a.$attrs.avatarSeed},{header:e(()=>[Ut]),subtitle:e(()=>[g(" +1 (415) 123-4567 ")]),right:e(()=>[t("div",Kt,[d(m,{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},{icon:e(()=>[d(o,{size:"400",name:"webchat"})]),_:1}),d(m,{size:"xs",circle:!0,importance:"clear","aria-label":"more"},{icon:e(()=>[d(o,{size:"400",name:"more-horizontal"})]),_:1}),Wt])]),bottom:e(()=>[g(" 2 matches found. "),d(m,{link:"",onClick:A(a.$attrs.onConnectToARecord,["stop"])},{default:e(()=>[g(" Connect to a record ")]),_:1},8,["onClick"])]),_:1},8,["avatar-initials","avatar-seed"])]),t("div",Ot,[Pt,d(c,{"avatar-list":h.groupCallAvatars},{header:e(()=>[jt]),subtitle:e(()=>[Zt]),_:1},8,["avatar-list"])])])}const Xt=S(E,[["render",Qt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]]);E.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const Yt=B(),F={presence:null},H={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(W)},avatarIcon:{options:Yt,control:{type:"select",labels:{undefined:"(empty)"}}},presence:{options:[...X],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}}},te={title:"Recipes/List Items/Contact Info",component:k,args:F,argTypes:H,excludeStories:/.*Data$/},ee=a=>M(a,ut),ae=a=>M(a,Xt),v={render:ee,args:{avatarSrc:w,avatarSeed:"JL",avatarInitials:"JL",avatarSize:"lg",presence:"active",header:`<div class="d-fs-200 d-fw-bold">
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
        `}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}},u={render:ae,args:{avatarInitials:"NW",avatarSeed:"NW",avatarSize:"lg",presence:"busy",onGroupContactClick:y("click: clickable group contact"),onMarkAsSpam:y("click: mark this contact as spam"),onConnectToARecord:y("click: connect to a record")},parameters:{docs:{source:{code:`
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
  `}},controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1},a11y:v.parameters.a11y}};var D,T,$;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(T=v.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var V,N,J;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(N=u.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};const ne=["argsData","argTypesData","Default","Variants"],fe=Object.freeze(Object.defineProperty({__proto__:null,Default:v,Variants:u,__namedExportsOrder:ne,argTypesData:H,argsData:F,default:te},Symbol.toStringTag,{value:"Module"}));export{fe as C,v as D,u as V};
//# sourceMappingURL=contact_info.stories-c8bc7a7d.js.map
