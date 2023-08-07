import{a as g}from"./chunk-AY7I2SME-c7b6cf8a.js";import{g as G,c as V}from"./storybook_utils-79c013ce.js";import{D as E}from"./list_item-f9b1a247.js";import{D as H,A as B}from"./avatar-9e7e1f9d.js";import{u as U}from"./utils-1ad0962e.js";import{k as l,v as y,m as e,o as r,d as p,F as W,g as O,l as n,j as m,e as t,x as h,J as P,q as _,K as A}from"./vue.esm-bundler-2457a580.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{D as j}from"./button-ebe757f5.js";import{D as K}from"./icon-1bcb5ec8.js";import{P as Z}from"./presence-ef811dc8.js";const J={name:"DtRecipeContactInfo",components:{DtAvatar:H,DtListItem:E},props:{id:{type:String,default(){return U.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarFullName:{type:String,default:""},avatarIcon:{type:String,default:null},avatarSize:{type:String,default:"lg"},presence:{type:String,default:null},avatarList:{type:Array,default:null}}},Q={key:0,class:"d-ps-relative","data-qa":"contact-info-left"},X={key:0,class:"d-mrn4 d-d-flex d-fd-row"},Y={"data-qa":"contact-info-header"},tt={"data-qa":"contact-info-subtitle"},et={"data-qa":"contact-info-bottom"},at={"data-qa":"contact-info-right"};function nt(a,v,d,x,u,C){const s=l("dt-avatar"),o=l("dt-list-item");return r(),y(o,{id:d.id,role:d.role,"element-type":"div","data-qa":"contact-info",class:"dt-contact-info"},{left:e(()=>[d.showAvatar?(r(),p("div",Q,[d.avatarList?(r(),p("div",X,[(r(!0),p(W,null,O(d.avatarList,(i,b)=>(r(),p("div",{key:b},[n(s,{"overlay-class":"d-ac-center",size:d.avatarSize,seed:i.seed,"full-name":i.fullName,"image-src":i.src,"icon-name":d.avatarIcon,"overlay-icon":i.icon,"overlay-text":i.text,"avatar-class":[{"d-mln24":b>0,"d-bc-brand":!!i.halo}]},null,8,["size","seed","full-name","image-src","icon-name","overlay-icon","overlay-text","avatar-class"])]))),128))])):(r(),y(s,{key:1,size:d.avatarSize,"full-name":d.avatarFullName,"image-src":d.avatarSrc,"icon-name":d.avatarIcon,seed:d.avatarSeed,presence:d.presence},null,8,["size","full-name","image-src","icon-name","seed","presence"]))])):m("v-if",!0)]),default:e(()=>[t("div",Y,[m(" @slot Slot for header information "),h(a.$slots,"header",{},void 0,!0)])]),subtitle:e(()=>[t("div",tt,[m(" @slot Slot for subtitle information "),h(a.$slots,"subtitle",{},void 0,!0)])]),bottom:e(()=>[t("div",et,[m(" @slot Slot for information at the bottom "),h(a.$slots,"bottom",{},void 0,!0)])]),right:e(()=>[t("div",at,[m(" @slot Slot for the right content "),h(a.$slots,"right",{},void 0,!0)])]),_:3},8,["id","role"])}const k=S(J,[["render",nt],["__scopeId","data-v-489bf75b"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]]);J.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` and `avatarIcon` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`fullName` - full name, used as alt attribute for image and extract initials to display in avatar<br>\n if `avatarSrc` and `avatarIcon` are empty<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const F={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:k}},dt=["innerHTML"],st=["innerHTML"],it=["innerHTML"],ot=["innerHTML"];function rt(a,v,d,x,u,C){const s=l("dt-recipe-contact-info");return r(),y(s,{"show-avatar":a.$attrs.showAvatar,"avatar-src":a.$attrs.avatarSrc,"avatar-full-name":a.$attrs.avatarFullName,"avatar-icon":a.$attrs.avatarIcon,"avatar-size":a.$attrs.avatarSize,"avatar-seed":a.$attrs.avatarSeed,presence:a.$attrs.presence},P({_:2},[a.$attrs.header?{name:"header",fn:e(()=>[t("span",{innerHTML:a.$attrs.header},null,8,dt)]),key:"0"}:void 0,a.$attrs.subtitle?{name:"subtitle",fn:e(()=>[t("span",{innerHTML:a.$attrs.subtitle},null,8,st)]),key:"1"}:void 0,a.$attrs.right?{name:"right",fn:e(()=>[t("span",{innerHTML:a.$attrs.right},null,8,it)]),key:"2"}:void 0,a.$attrs.bottom?{name:"bottom",fn:e(()=>[t("span",{innerHTML:a.$attrs.bottom},null,8,ot)]),key:"3"}:void 0]),1032,["show-avatar","avatar-src","avatar-full-name","avatar-icon","avatar-size","avatar-seed","presence"])}const ct=S(F,[["render",rt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]]);F.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const w=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,N=""+new URL("avatar2-388e1464.png",import.meta.url).href,M={name:"DtRecipeContactInfoVariants",components:{DtButton:j,DtRecipeContactInfo:k,DtIcon:K},data(){return{adminListenInAvatars:[{src:w,fullName:"Jaqueline Nackos",seed:"JN"},{src:N,fullName:"Joseph Lumaban",icon:"hear",seed:"JL"}],groupCallAvatars:[{fullName:"Joseph Lumaban",seed:"JL"},{src:w,fullName:"Jaqueline Nackos",seed:"JN"},{src:N,fullName:"Natalie Woods",text:"+3",seed:"NW"}]}}},lt={class:"d-divide-y d-divide-purple-400"},mt={class:"d-m32"},pt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Unknown contact (phone number only) with attestation ",-1),ft={class:"d-d-flex d-ai-center d-mb2"},vt=t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ",-1),ut={class:"d-m32"},bt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"},' Unknown contact with "marked as spam" button ',-1),ht=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ")],-1),_t={class:"d-m32"},gt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Clickable Group contact ",-1),yt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),wt={class:"d-d-flex d-ai-center"},St=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),kt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),xt={class:"d-m32"},Ct=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group contact with transfer info ",-1),At=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),Nt={class:"d-d-flex d-ai-center"},zt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Lt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support "),t("div",{class:"d-fw-bold d-fs-100"}," • Transfer from Billing Support ")],-1),It={class:"d-m32"},Dt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Admin view / listening in ",-1),$t=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Joseph Lumaban & Justin H. "),t("div",{class:"d-fs-200"}," (Agent) ")],-1),Tt={class:"d-d-flex d-ai-center"},Vt=t("div",{class:"d-fs-100 d-mr4"}," +1 (415) 123-4567 ",-1),Jt=t("div",{class:"d-d-flex d-ai-center d-mtn4"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Ft={class:"d-m32"},Mt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Contact with items in right slot ",-1),Rt=t("div",{class:"d-fw-bold d-fs-200"}," Natalie Woods ",-1),qt={class:"d-d-flex d-ai-center d-m8"},Gt=t("div",{class:"d-m4"}," 0:32 ",-1),Et={class:"d-m32"},Ht=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group call ",-1),Bt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Group Call ")],-1),Ut=t("div",{class:"d-d-flex d-ai-center"},[t("div",{class:"d-fs-100 d-mr4"}," Manage participants ")],-1);function Wt(a,v,d,x,u,C){const s=l("dt-icon"),o=l("dt-recipe-contact-info"),i=l("dt-button");return r(),p("div",lt,[t("div",mt,[pt,n(o,{"avatar-icon":"user"},{header:e(()=>[t("div",ft,[vt,n(s,{name:"check-circle",size:"200"})])]),subtitle:e(()=>[_(" San Francisco, California ")]),_:1})]),t("div",ut,[bt,n(o,{"avatar-icon":"user"},{header:e(()=>[ht]),subtitle:e(()=>[t("div",{class:"d-fc-red-400",onClick:v[0]||(v[0]=A((...b)=>a.$attrs.onMarkAsSpam&&a.$attrs.onMarkAsSpam(...b),["stop"]))}," Mark as spam ")]),_:1})]),t("div",_t,[gt,n(i,{importance:"clear",kind:"muted",onClick:a.$attrs.onGroupContactClick},{default:e(()=>[n(o,{"avatar-icon":"user"},{header:e(()=>[yt]),subtitle:e(()=>[t("div",wt,[St,n(s,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[kt]),_:1})]),_:1},8,["onClick"])]),t("div",xt,[Ct,n(o,{"avatar-icon":"user"},{header:e(()=>[At]),subtitle:e(()=>[t("div",Nt,[zt,n(s,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Lt]),_:1})]),t("div",It,[Dt,n(o,{"avatar-list":u.adminListenInAvatars},{header:e(()=>[$t]),subtitle:e(()=>[t("div",Tt,[Vt,n(s,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Jt]),_:1},8,["avatar-list"])]),t("div",Ft,[Mt,n(o,{"avatar-full-name":a.$attrs.avatarFullName,"avatar-seed":a.$attrs.avatarSeed},{header:e(()=>[Rt]),subtitle:e(()=>[_(" +1 (415) 123-4567 ")]),right:e(()=>[t("div",qt,[n(i,{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},{icon:e(()=>[n(s,{size:"400",name:"webchat"})]),_:1}),n(i,{size:"xs",circle:!0,importance:"clear","aria-label":"more"},{icon:e(()=>[n(s,{size:"400",name:"more-horizontal"})]),_:1}),Gt])]),bottom:e(()=>[_(" 2 matches found. "),n(i,{link:"",onClick:A(a.$attrs.onConnectToARecord,["stop"])},{default:e(()=>[_(" Connect to a record ")]),_:1},8,["onClick"])]),_:1},8,["avatar-full-name","avatar-seed"])]),t("div",Et,[Ht,n(o,{"avatar-list":u.groupCallAvatars},{header:e(()=>[Bt]),subtitle:e(()=>[Ut]),_:1},8,["avatar-list"])])])}const Ot=S(M,[["render",Wt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]]);M.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const Pt=G(),R={presence:null},q={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(B)},avatarIcon:{options:Pt,control:{type:"select",labels:{undefined:"(empty)"}}},presence:{options:[...Z],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}}},jt={title:"Recipes/List Items/Contact Info",component:k,args:R,argTypes:q,excludeStories:/.*Data$/},Kt=a=>V(a,ct),Zt=a=>V(a,Ot),c={render:Kt,args:{avatarSrc:w,avatarSeed:"JL",avatarFullName:"Joseph Lumaban",avatarSize:"lg",presence:"active",header:'<div class="d-fs-200 d-fw-bold"> Joseph Lumaban </div>',subtitle:'<div class="d-fs-100 d-mt2"> +1 (415) 123-4567 </div>',bottom:`<div class="d-d-flex d-ai-center d-mtn6">
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
        `}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}},f={render:Zt,args:{avatarFullName:"Natalie Woods",avatarSeed:"NW",avatarSize:"lg",presence:"busy",onGroupContactClick:g("click: clickable group contact"),onMarkAsSpam:g("click: mark this contact as spam"),onConnectToARecord:g("click: connect to a record")},parameters:{docs:{source:{code:`
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
  `}},a11y:c.parameters.a11y,controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var z,L,I;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var D,$,T;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=($=f.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};const Qt=["argsData","argTypesData","Default","Variants"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:f,__namedExportsOrder:Qt,argTypesData:q,argsData:R,default:jt},Symbol.toStringTag,{value:"Module"}));export{re as C,c as D,f as V};
//# sourceMappingURL=contact_info.stories-af371f41.js.map
