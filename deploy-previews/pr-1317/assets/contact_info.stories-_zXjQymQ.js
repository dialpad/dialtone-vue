import{a as g}from"./chunk-AY7I2SME-4UylTnhF.js";import{g as E,c as V}from"./storybook_utils-dy5aucTw.js";import{D as q}from"./list_item-e4_v3xkq.js";import{D as H,A as B}from"./avatar-DSnVDm-f.js";import{u as U}from"./utils-r35NyHdW.js";import{s as m,b as y,w as a,o as l,k as w,F as W,G as P,f as v,e as t,g as h,B as O,u as n,x as _,H as x}from"./vue.esm-bundler-PY0rQjII.js";import{_ as S}from"./_plugin-vue_export-helper-x3n3nnut.js";import{D as j}from"./button-SQvTdlhI.js";import{D as Z}from"./icon-34MKq-Bw.js";import{d as N}from"./avatar2-brBbnWbv.js";import{P as K}from"./presence-ypnOiPCE.js";const J={name:"DtRecipeContactInfo",components:{DtAvatar:H,DtListItem:q},props:{id:{type:String,default(){return U.getUniqueString()}},role:{type:String,default:""},showAvatar:{type:Boolean,default:!0},avatarSrc:{type:String,default:""},avatarSeed:{type:String,default:null},avatarFullName:{type:String,default:""},avatarIcon:{type:String,default:null},avatarSize:{type:String,default:"lg"},avatarAriaLabel:{type:String,default:""},presence:{type:String,default:null},avatarList:{type:Array,default:null}},emits:["avatar-click"],methods:{avatarClick(){this.$emit("avatar-click")}}},Q=["aria-labelledby"],X={key:0,class:"dt-contact-info--avatars d-mrn4 d-d-flex d-fd-row"},Y={"data-qa":"contact-info-header"},tt={"data-qa":"contact-info-subtitle"},et={"data-qa":"contact-info-bottom"},at={"data-qa":"contact-info-right"};function nt(e,o,d,A,f,u){const i=m("dt-avatar"),r=m("dt-list-item");return l(),y(r,{id:d.id,role:d.role,"element-type":"div","data-qa":"contact-info",class:"dt-contact-info"},{left:a(()=>[d.showAvatar?(l(),w("button",{key:0,class:"d-ps-relative d-bgc-transparent d-baw0 d-c-pointer","data-qa":"contact-info-left","aria-labelledby":d.avatarAriaLabel,onClick:o[0]||(o[0]=(...s)=>u.avatarClick&&u.avatarClick(...s))},[d.avatarList?(l(),w("span",X,[(l(!0),w(W,null,P(d.avatarList,(s,b)=>(l(),y(i,{key:b,size:d.avatarSize,seed:s.seed,"full-name":s.fullName,"image-src":s.src,"icon-name":d.avatarIcon,"overlay-icon":s.icon,"overlay-text":s.text,"avatar-class":[{"d-mln24":b>0,"d-bc-brand":!!s.halo}]},null,8,["size","seed","full-name","image-src","icon-name","overlay-icon","overlay-text","avatar-class"]))),128))])):(l(),y(i,{key:1,size:d.avatarSize,"full-name":d.avatarFullName,"image-src":d.avatarSrc,"icon-name":d.avatarIcon,seed:d.avatarSeed,presence:d.presence},null,8,["size","full-name","image-src","icon-name","seed","presence"]))],8,Q)):v("v-if",!0)]),default:a(()=>[t("div",Y,[v(" @slot Slot for header information "),h(e.$slots,"header",{},void 0,!0)])]),subtitle:a(()=>[t("div",tt,[v(" @slot Slot for subtitle information "),h(e.$slots,"subtitle",{},void 0,!0)])]),bottom:a(()=>[t("div",et,[v(" @slot Slot for information at the bottom "),h(e.$slots,"bottom",{},void 0,!0)])]),right:a(()=>[t("div",at,[v(" @slot Slot for the right content "),h(e.$slots,"right",{},void 0,!0)])]),_:3},8,["id","role"])}const C=S(J,[["render",nt],["__scopeId","data-v-489bf75b"],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]]);J.__docgenInfo={displayName:"DtRecipeContactInfo",exportName:"default",description:"",tags:{},props:[{name:"id",description:"Id for the item.",type:{name:"string"},defaultValue:{func:!0,value:"function() { return utils.getUniqueString(); }"}},{name:"role",description:"String to use for the item's role.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAvatar",description:"Display avatar if `showAvatar` property is true.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"avatarSrc",description:"Optional avatar image url.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarSeed",description:"Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarFullName",description:"Avatar's full name, used as alt attribute for image and\nto extract initials to display in avatar if `avatarSrc` and `avatarIcon` are empty.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarIcon",description:"Avatar icon to display if `avatarSrc` is empty.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarSize",description:"The size of the avatar",tags:{},values:["xs","sm","md","lg","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"avatarAriaLabel",description:"The aria label of the avatar",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"presence",description:`Determines whether to show the presence indicator for
Avatar - accepts PRESENCE_STATES values: 'busy', 'away', 'offline',
or 'active'. By default, it's null and nothing is shown.`,tags:{},values:["null","busy","away","offline","active"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"avatarList",description:"Showing multiple avatars in contact info.\nThe props of array items are: <br>\n`src` - avatar image url (optional) <br>\n`fullName` - full name, used as alt attribute for image and extract initials to display in avatar<br>\n if `avatarSrc` and `avatarIcon` are empty<br>\n`seed` - determines uniqueness of avatar background <br>\n`text` - text that overlays the avatar (optional) <br>\n`icon` - icon that overlays the avatar (optional) <br>\n`halo` - halo highlight around the avatar. boolean true/false",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],events:[{name:"avatar-click"}],slots:[{name:"header",description:"Slot for header information"},{name:"subtitle",description:"Slot for subtitle information"},{name:"bottom",description:"Slot for information at the bottom"},{name:"right",description:"Slot for the right content"}],sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info.vue"]};const F={name:"DtRecipeContactInfoDefault",components:{DtRecipeContactInfo:C}},dt=["innerHTML"],st=["innerHTML"],it=["innerHTML"],ot=["innerHTML"];function rt(e,o,d,A,f,u){const i=m("dt-recipe-contact-info");return l(),y(i,{"show-avatar":e.$attrs.showAvatar,"avatar-src":e.$attrs.avatarSrc,"avatar-full-name":e.$attrs.avatarFullName,"avatar-icon":e.$attrs.avatarIcon,"avatar-size":e.$attrs.avatarSize,"avatar-seed":e.$attrs.avatarSeed,presence:e.$attrs.presence,onAvatarClick:e.$attrs.onAvatarClick},O({_:2},[e.$attrs.header?{name:"header",fn:a(()=>[t("span",{innerHTML:e.$attrs.header},null,8,dt)]),key:"0"}:void 0,e.$attrs.subtitle?{name:"subtitle",fn:a(()=>[t("span",{innerHTML:e.$attrs.subtitle},null,8,st)]),key:"1"}:void 0,e.$attrs.right?{name:"right",fn:a(()=>[t("span",{innerHTML:e.$attrs.right},null,8,it)]),key:"2"}:void 0,e.$attrs.bottom?{name:"bottom",fn:a(()=>[t("span",{innerHTML:e.$attrs.bottom},null,8,ot)]),key:"3"}:void 0]),1032,["show-avatar","avatar-src","avatar-full-name","avatar-icon","avatar-size","avatar-seed","presence","onAvatarClick"])}const lt=S(F,[["render",rt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]]);F.__docgenInfo={displayName:"DtRecipeContactInfoDefault",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_default.story.vue"]};const k=""+new URL("avatar1-ESaPmMCN.png",import.meta.url).href,M={name:"DtRecipeContactInfoVariants",components:{DtButton:j,DtRecipeContactInfo:C,DtIcon:Z},data(){return{adminListenInAvatars:[{src:k,fullName:"Jaqueline Nackos",seed:"JN"},{src:N,fullName:"Joseph Lumaban",icon:"hear",seed:"JL"}],groupCallAvatars:[{fullName:"Joseph Lumaban",seed:"JL"},{src:k,fullName:"Jaqueline Nackos",seed:"JN"},{src:N,fullName:"Natalie Woods",text:"+3",seed:"NW"}]}}},ct={class:"d-divide-y d-divide-purple-400"},mt={class:"d-m32"},vt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Unknown contact (phone number only) with attestation ",-1),pt={class:"d-d-flex d-ai-center d-mb2"},ft=t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ",-1),ut={class:"d-m32"},bt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"},' Unknown contact with "marked as spam" button ',-1),ht=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," +1 (415) 123-4567 ")],-1),_t={class:"d-m32"},gt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Clickable Group contact ",-1),yt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),wt={class:"d-d-flex d-ai-center"},kt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),St=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Ct={class:"d-m32"},At=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group contact with transfer info ",-1),xt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fs-200 d-fw-bold d-mr4"}," Joseph Lumaban ")],-1),Nt={class:"d-d-flex d-ai-center"},zt=t("div",{class:"d-fs-100 d-mt2 d-mr4"}," +1 (415) 123-4567 ",-1),Lt=t("div",{class:"d-d-flex d-ai-center d-mtn6"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support "),t("div",{class:"d-fw-bold d-fs-100"}," • Transfer from Billing Support ")],-1),It={class:"d-m32"},Tt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Admin view / listening in ",-1),Dt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Joseph Lumaban & Justin H. "),t("div",{class:"d-fs-200"}," (Agent) ")],-1),$t={class:"d-d-flex d-ai-center"},Vt=t("div",{class:"d-fs-100 d-mr4"}," +1 (415) 123-4567 ",-1),Jt=t("div",{class:"d-d-flex d-ai-center d-mtn4"},[t("div",{class:"d-w8 d-h8 d-mr4 d-bgc-magenta-200"},"   "),t("div",{class:"d-fs-100 d-mr4"}," Aerolabs Support ")],-1),Ft={class:"d-m32"},Mt=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Contact with items in right slot ",-1),Rt=t("div",{class:"d-fw-bold d-fs-200"}," Natalie Woods ",-1),Gt={class:"d-d-flex d-ai-center d-m8"},Et=t("div",{class:"d-m4"}," 0:32 ",-1),qt={class:"d-m32"},Ht=t("p",{class:"d-my16 d-fs-200 d-fw-bold"}," Group call ",-1),Bt=t("div",{class:"d-d-flex d-ai-center d-mb2"},[t("div",{class:"d-fw-bold d-fs-200"}," Group Call ")],-1),Ut=t("div",{class:"d-d-flex d-ai-center"},[t("div",{class:"d-fs-100 d-mr4"}," Manage participants ")],-1);function Wt(e,o,d,A,f,u){const i=m("dt-icon"),r=m("dt-recipe-contact-info"),s=m("dt-button");return l(),w("div",ct,[t("div",mt,[vt,n(r,{"avatar-icon":"user"},{header:a(()=>[t("div",pt,[ft,n(i,{name:"check-circle",size:"200"})])]),subtitle:a(()=>[_(" San Francisco, California ")]),_:1})]),t("div",ut,[bt,n(r,{"avatar-icon":"user"},{header:a(()=>[ht]),subtitle:a(()=>[t("div",{class:"d-fc-red-400",onClick:o[0]||(o[0]=x((...b)=>e.$attrs.onMarkAsSpam&&e.$attrs.onMarkAsSpam(...b),["stop"]))}," Mark as spam ")]),_:1})]),t("div",_t,[gt,n(s,{importance:"clear",kind:"muted",onClick:e.$attrs.onGroupContactClick},{default:a(()=>[n(r,{"avatar-icon":"user"},{header:a(()=>[yt]),subtitle:a(()=>[t("div",wt,[kt,n(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[St]),_:1})]),_:1},8,["onClick"])]),t("div",Ct,[At,n(r,{"avatar-icon":"user"},{header:a(()=>[xt]),subtitle:a(()=>[t("div",Nt,[zt,n(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[Lt]),_:1})]),t("div",It,[Tt,n(r,{"avatar-list":f.adminListenInAvatars},{header:a(()=>[Dt]),subtitle:a(()=>[t("div",$t,[Vt,n(i,{name:"check-circle",size:"200",class:"d-va-text-bottom"})])]),bottom:a(()=>[Jt]),_:1},8,["avatar-list"])]),t("div",Ft,[Mt,n(r,{"avatar-full-name":e.$attrs.avatarFullName,"avatar-seed":e.$attrs.avatarSeed},{header:a(()=>[Rt]),subtitle:a(()=>[_(" +1 (415) 123-4567 ")]),right:a(()=>[t("div",Gt,[n(s,{size:"xs",circle:!0,importance:"clear","aria-label":"chat"},{icon:a(()=>[n(i,{size:"400",name:"webchat"})]),_:1}),n(s,{size:"xs",circle:!0,importance:"clear","aria-label":"more"},{icon:a(()=>[n(i,{size:"400",name:"more-horizontal"})]),_:1}),Et])]),bottom:a(()=>[_(" 2 matches found. "),n(s,{link:"",onClick:x(e.$attrs.onConnectToARecord,["stop"])},{default:a(()=>[_(" Connect to a record ")]),_:1},8,["onClick"])]),_:1},8,["avatar-full-name","avatar-seed"])]),t("div",qt,[Ht,n(r,{"avatar-list":f.groupCallAvatars},{header:a(()=>[Bt]),subtitle:a(()=>[Ut]),_:1},8,["avatar-list"])])])}const Pt=S(M,[["render",Wt],["__file","/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]]);M.__docgenInfo={displayName:"DtRecipeContactInfoVariants",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/dialtone-vue/dialtone-vue/recipes/list_items/contact_info/contact_info_variants.story.vue"]};const Ot=E(),R={onAvatarClick:g("avatar-click"),presence:null},G={id:{table:{type:{summary:"string"},defaultValue:{summary:"generated unique ID"}}},role:{table:{type:{summary:"string"}}},avatarSize:{control:{type:"select"},options:Object.keys(B)},avatarIcon:{options:Ot,control:{type:"select",labels:{undefined:"(empty)"}}},avatarAriaLabel:{table:{type:{summary:"string"}}},presence:{options:[...K],control:{type:"select"}},header:{description:"Slot for header information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},subtitle:{description:"Slot for subtitle information",control:"text",table:{category:"slots",type:{summary:"VNode"}}},bottom:{description:"Slot for information at the bottom",control:"text",table:{category:"slots",type:{summary:"VNode"}}},right:{description:"Slot for the right content",control:"text",table:{category:"slots",type:{summary:"VNode"}}},"avatar-click":{description:"click on avatar event",table:{type:{summary:"event"}}},onAvatarClick:{table:{disable:!0}}},jt={title:"Recipes/List Items/Contact Info",component:C,args:R,argTypes:G,excludeStories:/.*Data$/},Zt=(e,{argTypes:o})=>V(e,o,lt),Kt=(e,{argTypes:o})=>V(e,o,Pt),c={render:Zt,args:{avatarSrc:k,avatarSeed:"JL",avatarFullName:"Joseph Lumaban",avatarSize:"lg",presence:"active",header:'<div class="d-fs-200 d-fw-bold"> Joseph Lumaban </div>',subtitle:'<div class="d-fs-100 d-mt2"> +1 (415) 123-4567 </div>',bottom:`<div class="d-d-flex d-ai-center d-mtn6">
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
        `}},a11y:{disable:!0,config:{rules:[{id:"aria-allowed-attr",enabled:!1}]}}}},p={render:Kt,args:{avatarFullName:"Natalie Woods",avatarSeed:"NW",avatarSize:"lg",presence:"busy",onGroupContactClick:g("click: clickable group contact"),onMarkAsSpam:g("click: mark this contact as spam"),onConnectToARecord:g("click: connect to a record")},parameters:{docs:{source:{code:`
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
      disable: true,
      config: {
        rules: [{
          id: 'aria-allowed-attr',
          enabled: false
        }]
      }
    }
  }
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var T,D,$;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(D=p.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const Qt=["argsData","argTypesData","Default","Variants"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Variants:p,__namedExportsOrder:Qt,argTypesData:G,argsData:R,default:jt},Symbol.toStringTag,{value:"Module"}));export{le as C,c as D,p as V};
//# sourceMappingURL=contact_info.stories-_zXjQymQ.js.map
