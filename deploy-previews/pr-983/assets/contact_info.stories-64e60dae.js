import{a as w}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as R}from"./storybook_utils-0a6e313e.js";import{D as B}from"./list_item-eb22f7d9.js";import{D as U,a as O}from"./avatar-fc6b06db.js";import{D as J}from"./icon-986e0145.js";import{u as P}from"./utils-40a24902.js";import{a as l,b as c,w as a,o,e as u,F as W,u as j,f as t,s as v,t as x,d as s,j as f,k as g,z as K,A}from"./vue.esm-bundler-a6507c57.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{D as Z}from"./button-40978538.js";import{P as Q}from"./presence-6ddee5fd.js";const q={name:"DtRecipeContactInfo",components:{DtAvatar:U,DtIcon:J,DtListItem:B},props:{id:{type:String,default(){return P.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarInitials:{type:String,default:""},avatarIcon:{type:String,default:"user"},avatarSize:{type:String,default:"lg"},presence:{type:String,default:null},avatarList:{type:Array,default:null}}},X={key:0,class:"d-ps-relative","data-qa":"contact-info-left"},Y={key:0,class:"d-mrn4 d-d-flex d-fd-row"},tt=["src","alt"],at=["src","initials","seed","alt"],et={"data-qa":"contact-info-header"},nt={"data-qa":"contact-info-subtitle"},st={"data-qa":"contact-info-bottom"},it={"data-qa":"contact-info-right"};function dt(e,h,n,C,_,I){const d=l("dt-avatar"),r=l("dt-icon"),m=l("dt-list-item");return o(),c(m,{id:n.id,role:n.role,"element-type":"div","data-qa":"contact-info"},{left:a(()=>[n.showAvatar?(o(),u("div",X,[n.avatarList?(o(),u("div",Y,[(o(!0),u(W,null,j(n.avatarList,(i,y)=>(o(),u("div",{key:y},[i.src?(o(),c(d,{key:0,size:n.avatarSize,seed:i.seed,initials:i.initials,"overlay-icon":i.icon,"overlay-text":i.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-white d-box-unset","avatar-class":["d-ba d-baw4 d-bc-white d-bar-pill",{"d-mln24":y>0}]},{default:a(()=>[t("img",{"data-qa":"dt-contact-avatar",src:i.src,alt:i.initials},null,8,tt)]),_:2},1032,["size","seed","initials","overlay-icon","overlay-text","avatar-class"])):i.initials?(o(),c(d,{key:1,size:n.avatarSize,seed:i.seed,initials:i.initials,"overlay-icon":i.icon,"overlay-text":i.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-white d-box-unset","avatar-class":["d-ba d-baw4 d-bc-white d-bar-pill",{"d-mln24":y>0}]},{default:a(()=>[v(x(i.initials),1)]),_:2},1032,["size","seed","initials","overlay-icon","overlay-text","avatar-class"])):(o(),c(d,{key:2,size:n.avatarSize,seed:i.seed,"overlay-icon":i.icon,"overlay-text":i.text,"overlay-class":"d-mn4 d-ba d-baw4 d-bc-white d-box-unset","avatar-class":["d-ba d-baw4 d-bc-white d-bar-pill",{"d-mln24":y>0}]},{default:a(()=>[s(r,{name:n.avatarIcon},null,8,["name"])]),_:2},1032,["size","seed","overlay-icon","overlay-text","avatar-class"]))]))),128))])):n.avatarSrc?(o(),c(d,{key:1,size:n.avatarSize,initials:n.avatarInitials,seed:n.avatarSeed,presence:n.presence},{default:a(()=>[t("img",{"data-qa":"dt-contact-avatar",src:n.avatarSrc,initials:n.avatarInitials,seed:n.avatarSeed,alt:n.avatarInitials},null,8,at)]),_:1},8,["size","initials","seed","presence"])):n.avatarInitials?(o(),c(d,{key:2,size:n.avatarSize,initials:n.avatarInitials,seed:n.avatarSeed,presence:n.presence},{default:a(()=>[v(x(n.avatarInitials),1)]),_:1},8,["size","initials","seed","presence"])):(o(),c(d,{key:3,size:n.avatarSize,seed:n.avatarSeed,presence:n.presence},{default:a(()=>[s(r,{name:n.avatarIcon},null,8,["name"])]),_:1},8,["size","seed","presence"]))])):f("v-if",!0)]),default:a(()=>[t("div",et,[f(" @slot Slot for header information "),g(e.$slots,"header")])]),subtitle:a(()=>[t("div",nt,[f(" @slot Slot for subtitle information "),g(e.$slots,"subtitle")])]),bottom:a(()=>[t("div",st,[f(" @slot Slot for information at the bottom "),g(e.$slots,"bottom")])]),right:a(()=>[t("div",it,[f(" @slot Slot for the right content "),g(e.$slots,"right")])]),_:3},8,["id","role"])}const z=k(q,[["render",dt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]]);q.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.\nif provided, it's also required to provide a value in the `avatarInitials` prop to use\nin the alt attribute of the avatar.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarInitials",description:"Initial letters to display in avatar if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` and `avatarInitials` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"'user'"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`initials` - Initial letters to display in avatar (required if src is empty)<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional)",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const G={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:z}},ot=["innerHTML"],rt=["innerHTML"],ct=["innerHTML"],lt=["innerHTML"];function mt(e,h,n,C,_,I){const d=l("dt-recipe-contact-info");return o(),c(d,{"show-avatar":e.$attrs.showAvatar,"avatar-src":e.$attrs.avatarSrc,"avatar-initials":e.$attrs.avatarInitials,"avatar-icon":e.$attrs.avatarIcon,"avatar-size":e.$attrs.avatarSize,"avatar-color":e.$attrs.avatarColor,"avatar-seed":e.$attrs.avatarSeed,presence:e.$attrs.presence},K({_:2},[e.$attrs.header?{name:"header",fn:a(()=>[t("span",{innerHTML:e.$attrs.header},null,8,ot)]),key:"0"}:void 0,e.$attrs.subtitle?{name:"subtitle",fn:a(()=>[t("span",{innerHTML:e.$attrs.subtitle},null,8,rt)]),key:"1"}:void 0,e.$attrs.right?{name:"right",fn:a(()=>[t("span",{innerHTML:e.$attrs.right},null,8,ct)]),key:"2"}:void 0,e.$attrs.bottom?{name:"bottom",fn:a(()=>[t("span",{innerHTML:e.$attrs.bottom},null,8,lt)]),key:"3"}:void 0]),1032,["show-avatar","avatar-src","avatar-initials","avatar-icon","avatar-size","avatar-color","avatar-seed","presence"])}const vt=k(G,[["render",mt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]]);G.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const S=""+new URL("avatar-ed3a0c8e.png",import.meta.url).href,L=""+new URL("avatar2-388e1464.png",import.meta.url).href,E={name:"DtRecipeContactInfoVariants",components:{DtButton:Z,DtRecipeContactInfo:z,DtIcon:J},data(){return{adminListenInAvatars:[{src:S,initials:"KK"},{src:L,initials:"LL",icon:"hear"}],groupCallAvatars:[{initials:"JL"},{src:S,initials:"KK"},{src:L,initials:"LL",text:"+3"}]}}},pt={class:"d-divide-y d-divide-purple-400"},ft={class:"d-m32"},ut=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Unknown contact (phone number only) with attestation ",-1),bt={class:"d-d-flex d-ai-center d-mb2"},ht=t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ",-1),_t={class:"d-m32"},yt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"},' Unknown contact with "marked as spam" button ',-1),gt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ")],-1),wt={class:"d-m32"},St=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Clickable Group contact ",-1),kt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),zt={class:"d-d-flex d-ai-center"},Ct=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),It=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),xt={class:"d-m32"},At=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group contact with transfer info ",-1),Lt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),Dt={class:"d-d-flex d-ai-center"},Tt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Vt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support "),t("div",{class:"d-fw-bold d-fs-100"}," • Transfer from Billing Support ")],-1),$t={class:"d-m32"},Mt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Admin view / listening in ",-1),Nt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Joseph Lumaban & Justin H. "),t("div",{class:"d-fs-200"}," (Agent) ")],-1),Rt={class:"d-d-flex d-ai-center"},Jt=t("div",{class:"d-fs-100 d-mr4"}," +1 (415) 123-4567 ",-1),qt=t("div",{class:"d-d-flex d-ai-center d-mtn4"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Gt={class:"d-m32"},Et=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Contact with items in right slot ",-1),Ft=t("div",{class:"d-fw-bold d-fs-200"}," Natalie Woods ",-1),Ht={class:"d-d-flex d-ai-center d-m8"},Bt=t("div",{class:"d-m4"}," 0:32 ",-1),Ut={class:"d-m32"},Ot=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group call ",-1),Pt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Group Call ")],-1),Wt=t("div",{class:"d-d-flex d-ai-center"},[t("div",{class:"d-fs-100 d-mr4"}," Manage participants ")],-1);function jt(e,h,n,C,_,I){const d=l("dt-icon"),r=l("dt-recipe-contact-info"),m=l("dt-button");return o(),u("div",pt,[t("div",ft,[ut,s(r,null,{header:a(()=>[t("div",bt,[ht,s(d,{name:"check-circle",size:"200"})])]),subtitle:a(()=>[v(" San Francisco, California ")]),_:1})]),t("div",_t,[yt,s(r,null,{header:a(()=>[gt]),subtitle:a(()=>[t("div",{class:"d-fc-red-400",onClick:h[0]||(h[0]=A((...i)=>e.$attrs.onMarkAsSpam&&e.$attrs.onMarkAsSpam(...i),["stop"]))}," Mark as spam ")]),_:1})]),t("div",wt,[St,s(m,{importance:"clear",kind:"muted",onClick:e.$attrs.onGroupContactClick},{default:a(()=>[s(r,null,{header:a(()=>[kt]),subtitle:a(()=>[t("div",zt,[Ct,s(d,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[It]),_:1})]),_:1},8,["onClick"])]),t("div",xt,[At,s(r,null,{header:a(()=>[Lt]),subtitle:a(()=>[t("div",Dt,[Tt,s(d,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[Vt]),_:1})]),t("div",$t,[Mt,s(r,{"avatar-list":_.adminListenInAvatars},{header:a(()=>[Nt]),subtitle:a(()=>[t("div",Rt,[Jt,s(d,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[qt]),_:1},8,["avatar-list"])]),t("div",Gt,[Et,s(r,{"avatar-initials":e.$attrs.avatarInitials,"avatar-color":e.$attrs.avatarColor},{header:a(()=>[Ft]),subtitle:a(()=>[v(" +1 (415) 123-4567 ")]),right:a(()=>[t("div",Ht,[s(m,{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},{icon:a(()=>[s(d,{size:"400",name:"webchat"})]),_:1}),s(m,{size:"xs",circle:!0,importance:"clear","aria-label":"more"},{icon:a(()=>[s(d,{size:"400",name:"more-horizontal"})]),_:1}),Bt])]),bottom:a(()=>[v(" 2 matches found. "),s(m,{link:"",onClick:A(e.$attrs.onConnectToARecord,["stop"])},{default:a(()=>[v(" Connect to a record ")]),_:1},8,["onClick"])]),_:1},8,["avatar-initials","avatar-color"])]),t("div",Ut,[Ot,s(r,{"avatar-list":_.groupCallAvatars},{header:a(()=>[Pt]),subtitle:a(()=>[Wt]),_:1},8,["avatar-list"])])])}const Kt=k(E,[["render",jt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]]);E.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const F={presence:null},H={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(O)},presence:{options:[...Q],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}}},Zt={title:"Recipes/List Items/Contact Info",component:z,args:F,argTypes:H,excludeStories:/.*Data$/},Qt=e=>R(e,vt),Xt=e=>R(e,Kt),p={render:Qt,args:{showAvatar:!0,avatarSrc:S,avatarSeed:"seed",avatarInitials:"JL",avatarIcon:"user",avatarColor:"base",avatarSize:"lg",presence:"active",header:`<div class="d-fs-200 d-fw-bold">
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
        `}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!1},{id:"duplicate-id",enabled:!1}]}}}},b={render:Xt,args:{avatarInitials:"NW",avatarColor:"orange-500",avatarSize:"lg",avatarIcon:"user",presence:"busy",onGroupContactClick:w("click: clickable group contact"),onMarkAsSpam:w("click: mark this contact as spam"),onConnectToARecord:w("click: connect to a record")},parameters:{docs:{source:{code:`
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
  `}},controls:{disable:!0},actions:{disable:!0},options:{showPanel:!1},a11y:p.parameters.a11y}};var D,T,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    showAvatar: true,
    avatarSrc: avatarImage,
    avatarSeed: 'seed',
    avatarInitials: 'JL',
    avatarIcon: 'user',
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
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var $,M,N;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: VariantsTemplate,
  args: {
    avatarInitials: 'NW',
    avatarColor: 'orange-500',
    avatarSize: 'lg',
    avatarIcon: 'user',
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
}`,...(N=(M=b.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Yt=["argsData","argTypesData","Default","Variants"],la=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Variants:b,__namedExportsOrder:Yt,argTypesData:H,argsData:F,default:Zt},Symbol.toStringTag,{value:"Module"}));export{la as C,p as D,b as V};
//# sourceMappingURL=contact_info.stories-64e60dae.js.map
