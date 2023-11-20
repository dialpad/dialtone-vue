import{a as _}from"./chunk-AY7I2SME-4UylTnhF.js";import{g as G,c as $}from"./storybook_utils-dy5aucTw.js";import{D as E}from"./list_item-8zDNiA2P.js";import{D as q,A as H}from"./avatar-Rnq9lpvE.js";import{u as B}from"./utils-uw-tjP-u.js";import{s as m,b as g,w as e,o as c,k as y,F as U,G as W,g as P,e as t,f as b,B as O,u as n,x as h,H as A}from"./vue.esm-bundler-pfnFGw-8.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";import{D as j}from"./button-QSbPABQk.js";import{D as Z}from"./icon-z49A8j_D.js";import{d as x}from"./avatar2-brBbnWbv.js";import{P as K}from"./presence-vy1D7RQM.js";const V={name:"DtRecipeContactInfo",components:{DtAvatar:q,DtListItem:E},props:{id:{type:String,default(){return B.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarFullName:{type:String,default:""},avatarIcon:{type:String,default:null},avatarSize:{type:String,default:"lg"},avatarAriaLabel:{type:String,default:""},presence:{type:String,default:null},avatarList:{type:Array,default:null}},emits:["avatar-click"],methods:{avatarClick(){this.$emit("avatar-click")}}},Q=["aria-labelledby"],X={key:0,class:"dt-contact-info--avatars d-mrn4 d-d-flex d-fd-row"},Y={"data-qa":"contact-info-header"},tt={"data-qa":"contact-info-subtitle"},at={"data-qa":"contact-info-bottom"},et={"data-qa":"contact-info-right"};function nt(a,o,d,C,v,f){const i=m("dt-avatar"),r=m("dt-list-item");return c(),g(r,{id:d.id,role:d.role,"element-type":"div","data-qa":"contact-info",class:"dt-contact-info"},{left:e(()=>[d.showAvatar?(c(),y("button",{key:0,class:"d-ps-relative d-bgc-transparent d-baw0 d-c-pointer","data-qa":"contact-info-left","aria-labelledby":d.avatarAriaLabel,onClick:o[0]||(o[0]=(...s)=>f.avatarClick&&f.avatarClick(...s))},[d.avatarList?(c(),y("span",X,[(c(!0),y(U,null,W(d.avatarList,(s,u)=>(c(),g(i,{key:u,size:d.avatarSize,seed:s.seed,"full-name":s.fullName,"image-src":s.src,"icon-name":d.avatarIcon,"overlay-icon":s.icon,"overlay-text":s.text,"avatar-class":[{"d-mln24":u>0,"d-bc-brand":!!s.halo}]},null,8,["size","seed","full-name","image-src","icon-name","overlay-icon","overlay-text","avatar-class"]))),128))])):(c(),g(i,{key:1,size:d.avatarSize,"full-name":d.avatarFullName,"image-src":d.avatarSrc,"icon-name":d.avatarIcon,seed:d.avatarSeed,presence:d.presence},null,8,["size","full-name","image-src","icon-name","seed","presence"]))],8,Q)):P("",!0)]),default:e(()=>[t("div",Y,[b(a.$slots,"header",{},void 0,!0)])]),subtitle:e(()=>[t("div",tt,[b(a.$slots,"subtitle",{},void 0,!0)])]),bottom:e(()=>[t("div",at,[b(a.$slots,"bottom",{},void 0,!0)])]),right:e(()=>[t("div",et,[b(a.$slots,"right",{},void 0,!0)])]),_:3},8,["id","role"])}const S=k(V,[["render",nt],["__scopeId","data-v-3d0f9d2e"]]);V.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` and `avatarIcon` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"avatarAriaLabel",description:"The aria label of the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`fullName` - full name, used as alt attribute for image and extract initials to display in avatar<br>\n if `avatarSrc` and `avatarIcon` are empty<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],events:[{name:"avatar-click"}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const J={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:S}},dt=["innerHTML"],st=["innerHTML"],it=["innerHTML"],ot=["innerHTML"];function rt(a,o,d,C,v,f){const i=m("dt-recipe-contact-info");return c(),g(i,{"show-avatar":a.$attrs.showAvatar,"avatar-src":a.$attrs.avatarSrc,"avatar-full-name":a.$attrs.avatarFullName,"avatar-icon":a.$attrs.avatarIcon,"avatar-size":a.$attrs.avatarSize,"avatar-seed":a.$attrs.avatarSeed,presence:a.$attrs.presence,onAvatarClick:a.$attrs.onAvatarClick},O({_:2},[a.$attrs.header?{name:"header",fn:e(()=>[t("span",{innerHTML:a.$attrs.header},null,8,dt)]),key:"0"}:void 0,a.$attrs.subtitle?{name:"subtitle",fn:e(()=>[t("span",{innerHTML:a.$attrs.subtitle},null,8,st)]),key:"1"}:void 0,a.$attrs.right?{name:"right",fn:e(()=>[t("span",{innerHTML:a.$attrs.right},null,8,it)]),key:"2"}:void 0,a.$attrs.bottom?{name:"bottom",fn:e(()=>[t("span",{innerHTML:a.$attrs.bottom},null,8,ot)]),key:"3"}:void 0]),1032,["show-avatar","avatar-src","avatar-full-name","avatar-icon","avatar-size","avatar-seed","presence","onAvatarClick"])}const ct=k(J,[["render",rt]]);J.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const w=""+new URL("avatar1-ESaPmMCN.png",import.meta.url).href,F={name:"DtRecipeContactInfoVariants",components:{DtButton:j,DtRecipeContactInfo:S,DtIcon:Z},data(){return{adminListenInAvatars:[{src:w,fullName:"Jaqueline Nackos",seed:"JN"},{src:x,fullName:"Joseph Lumaban",icon:"hear",seed:"JL"}],groupCallAvatars:[{fullName:"Joseph Lumaban",seed:"JL"},{src:w,fullName:"Jaqueline Nackos",seed:"JN"},{src:x,fullName:"Natalie Woods",text:"+3",seed:"NW"}]}}},lt={class:"d-divide-y d-divide-purple-400"},mt={class:"d-m32"},pt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Unknown contact (phone number only) with attestation ",-1),vt={class:"d-d-flex d-ai-center d-mb2"},ft=t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ",-1),ut={class:"d-m32"},bt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"},' Unknown contact with "marked as spam" button ',-1),ht=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ")],-1),_t={class:"d-m32"},gt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Clickable Group contact ",-1),yt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),wt={class:"d-d-flex d-ai-center"},kt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),St=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Ct={class:"d-m32"},At=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group contact with transfer info ",-1),xt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),Nt={class:"d-d-flex d-ai-center"},zt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Lt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support "),t("div",{class:"d-fw-bold d-fs-100"}," • Transfer from Billing Support ")],-1),It={class:"d-m32"},Tt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Admin view / listening in ",-1),Dt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Joseph Lumaban & Justin H. "),t("div",{class:"d-fs-200"}," (Agent) ")],-1),$t={class:"d-d-flex d-ai-center"},Vt=t("div",{class:"d-fs-100 d-mr4"}," +1 (415) 123-4567 ",-1),Jt=t("div",{class:"d-d-flex d-ai-center d-mtn4"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Ft={class:"d-m32"},Mt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Contact with items in right slot ",-1),Rt=t("div",{class:"d-fw-bold d-fs-200"}," Natalie Woods ",-1),Gt={class:"d-d-flex d-ai-center d-m8"},Et=t("div",{class:"d-m4"}," 0:32 ",-1),qt={class:"d-m32"},Ht=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group call ",-1),Bt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Group Call ")],-1),Ut=t("div",{class:"d-d-flex d-ai-center"},[t("div",{class:"d-fs-100 d-mr4"}," Manage participants ")],-1);function Wt(a,o,d,C,v,f){const i=m("dt-icon"),r=m("dt-recipe-contact-info"),s=m("dt-button");return c(),y("div",lt,[t("div",mt,[pt,n(r,{"avatar-icon":"user"},{header:e(()=>[t("div",vt,[ft,n(i,{name:"check-circle",size:"200"})])]),subtitle:e(()=>[h(" San Francisco, California ")]),_:1})]),t("div",ut,[bt,n(r,{"avatar-icon":"user"},{header:e(()=>[ht]),subtitle:e(()=>[t("div",{class:"d-fc-red-400",onClick:o[0]||(o[0]=A((...u)=>a.$attrs.onMarkAsSpam&&a.$attrs.onMarkAsSpam(...u),["stop"]))}," Mark as spam ")]),_:1})]),t("div",_t,[gt,n(s,{importance:"clear",kind:"muted",onClick:a.$attrs.onGroupContactClick},{default:e(()=>[n(r,{"avatar-icon":"user"},{header:e(()=>[yt]),subtitle:e(()=>[t("div",wt,[kt,n(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[St]),_:1})]),_:1},8,["onClick"])]),t("div",Ct,[At,n(r,{"avatar-icon":"user"},{header:e(()=>[xt]),subtitle:e(()=>[t("div",Nt,[zt,n(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Lt]),_:1})]),t("div",It,[Tt,n(r,{"avatar-list":v.adminListenInAvatars},{header:e(()=>[Dt]),subtitle:e(()=>[t("div",$t,[Vt,n(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:e(()=>[Jt]),_:1},8,["avatar-list"])]),t("div",Ft,[Mt,n(r,{"avatar-full-name":a.$attrs.avatarFullName,"avatar-seed":a.$attrs.avatarSeed},{header:e(()=>[Rt]),subtitle:e(()=>[h(" +1 (415) 123-4567 ")]),right:e(()=>[t("div",Gt,[n(s,{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},{icon:e(()=>[n(i,{size:"400",name:"webchat"})]),_:1}),n(s,{size:"xs",circle:!0,importance:"clear","aria-label":"more"},{icon:e(()=>[n(i,{size:"400",name:"more-horizontal"})]),_:1}),Et])]),bottom:e(()=>[h(" 2 matches found. "),n(s,{link:"",onClick:A(a.$attrs.onConnectToARecord,["stop"])},{default:e(()=>[h(" Connect to a record ")]),_:1},8,["onClick"])]),_:1},8,["avatar-full-name","avatar-seed"])]),t("div",qt,[Ht,n(r,{"avatar-list":v.groupCallAvatars},{header:e(()=>[Bt]),subtitle:e(()=>[Ut]),_:1},8,["avatar-list"])])])}const Pt=k(F,[["render",Wt]]);F.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const Ot=G(),M={onAvatarClick:_("avatar-click"),presence:null},R={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(H)},avatarIcon:{options:Ot,control:{type:"select",labels:{undefined:"(empty)"}}},avatarAriaLabel:{table:{type:{summary:"string"}}},presence:{options:[...K],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},"avatar-click":{description:"click on avatar event",table:{type:{summary:"event"}}},onAvatarClick:{table:{disable:!0}}},jt={title:"Recipes/List Items/Contact Info",component:S,args:M,argTypes:R,excludeStories:/.*Data$/},Zt=(a,{argTypes:o})=>$(a,o,ct),Kt=(a,{argTypes:o})=>$(a,o,Pt),l={render:Zt,args:{avatarSrc:w,avatarSeed:"JL",avatarFullName:"Joseph Lumaban",avatarSize:"lg",presence:"active",header:'<div class="d-fs-200 d-fw-bold"> Joseph Lumaban </div>',subtitle:'<div class="d-fs-100 d-mt2"> +1 (415) 123-4567 </div>',bottom:`<div class="d-d-flex d-ai-center d-mtn6">
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
        `}},a11y:{disable:!0,config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}},p={render:Kt,args:{avatarFullName:"Natalie Woods",avatarSeed:"NW",avatarSize:"lg",presence:"busy",onGroupContactClick:_("click: clickable group contact"),onMarkAsSpam:_("click: mark this contact as spam"),onConnectToARecord:_("click: connect to a record")},parameters:{docs:{source:{code:`
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
  `}},a11y:l.parameters.a11y,controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var N,z,L;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var I,T,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const Qt=["argsData","argTypesData","Default","Variants"],ca=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Variants:p,__namedExportsOrder:Qt,argTypesData:R,argsData:M,default:jt},Symbol.toStringTag,{value:"Module"}));export{ca as C,l as D,p as V};
//# sourceMappingURL=contact_info.stories-2wykfscx.js.map
