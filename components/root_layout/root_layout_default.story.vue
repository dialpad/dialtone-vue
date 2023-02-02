<template>
  <dt-root-layout
    :body-class="bodyClass"
    :header-class="headerClass"
    :header-sticky="headerSticky"
    :header-height="headerHeight"
    :content-class="contentClass"
    :content-wrap-width-percent="contentWrapWidthPercent"
    :sidebar-class="sidebarClass"
    :sidebar-position="sidebarPosition"
    :sidebar-width="sidebarWidth"
    :footer-class="footerClass"
    :footer-height="footerHeight"
    :fixed="fixed"
  >
    <template
      v-if="header"
      #header
    >
      <span v-html="header" />
    </template>
    <template
      v-if="sidebar"
      #sidebar
    >
      <span v-html="sidebar" />
    </template>
    <template v-if="defaultSlot">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim eleifend condimentum. Vestibulum
      euismod leo at finibus mattis. Integer ut dui id ligula tincidunt pellentesque. Vestibulum a ullamcorper risus.
      Ut tristique sapien eget magna lacinia, non interdum lacus malesuada. Proin augue lacus, finibus eget aliquam eu,
      efficitur sit amet magna. Suspendisse a nunc volutpat, maximus enim vitae, pretium dui. Suspendisse pretium
      faucibus posuere. Aenean consequat imperdiet laoreet. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Aliquam elit lacus, venenatis ac risus at, ullamcorper tempor tortor. Ut sed
      pulvinar mi, vitae vehicula odio. Fusce ornare vestibulum rhoncus. In vel ante arcu. Nunc pharetra libero non
      enim dapibus efficitur. Suspendisse dolor ante, pulvinar et faucibus quis, condimentum at dui.      Ut mattis
      volutpat massa, ac pretium dui lobortis vitae. Duis tellus nunc, blandit eget ipsum non, porttitor euismod quam.
      Ut eget nulla non ex laoreet finibus. Ut consectetur et tortor eget faucibus. Donec id facilisis ligula. Praesent
      non nisl massa. Quisque porttitor dapibus elit, ut fringilla mi iaculis quis. Sed viverra consequat ipsum.
      Maecenas sit amet massa bibendum, molestie massa id, varius mauris. Nunc semper ligula venenatis dolor dignissim,
      ac condimentum ex faucibus. Sed efficitur risus vel arcu placerat gravida.      Suspendisse imperdiet nulla et
      accumsan porttitor. Sed pharetra sodales diam, sed lobortis turpis mattis a. Ut est sem, pretium a dui id,
      hendrerit ultrices velit. Duis eu nisi ut leo venenatis faucibus. Donec aliquet varius interdum. Aliquam
      ullamcorper, odio feugiat tincidunt vulputate, augue leo sodales velit, non interdum enim tellus eleifend enim.
      Suspendisse sagittis feugiat felis, ut efficitur risus vestibulum nec. Proin feugiat turpis congue lacus
      scelerisque malesuada. Vivamus varius magna eget libero convallis, non dapibus ex feugiat.      Duis nec magna
      nibh. Proin libero metus, interdum sit amet blandit a, congue id diam. Proin feugiat porttitor purus, in ultrices
      nulla finibus vitae. Etiam sagittis dignissim nibh aliquet laoreet. Proin quis risus euismod, sagittis erat sit
      amet, porttitor metus. Nulla eget purus lacinia, tincidunt leo et, feugiat eros. Nullam eu aliquet metus. Nullam
      vitae ex eros. Integer blandit eget sem interdum egestas. Maecenas blandit eget velit vitae pellentesque.
      Curabitur in diam leo. Mauris quam erat, venenatis vitae purus mattis, elementum lobortis diam. Fusce in elit
      vulputate, imperdiet libero consectetur, imperdiet nisl. In metus ex, dignissim id venenatis sit amet, posuere
      vel ex. Aliquam tellus ante, molestie vitae mollis nec, pharetra non nisl.      Pellentesque vitae odio sed augue
      suscipit sollicitudin. Vivamus tincidunt augue cursus, dapibus ipsum a, mollis purus. Aenean nisi risus,
      sollicitudin vitae sollicitudin id, elementum ac lorem. Nullam finibus enim in cursus malesuada. Nulla et auctor
      neque. Sed quis ullamcorper quam, vitae facilisis turpis. Donec hendrerit nisi dapibus imperdiet tempus.
      Suspendisse ultricies dui vel risus dictum tempor. Proin sollicitudin erat est, a viverra lectus euismod eget.
      Aliquam accumsan diam justo, a auctor enim egestas eget.      Nam interdum, lacus porttitor egestas scelerisque,
      lacus orci facilisis purus, sodales lacinia quam justo eu est. Phasellus cursus finibus nunc nec volutpat. Ut
      molestie ligula eros, sed pharetra urna mattis et. Vestibulum vel ullamcorper massa. Vivamus fermentum vitae elit
      in rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
      est lectus, condimentum sed quam at, malesuada vulputate massa. In et ex blandit, porttitor velit quis, maximus
      metus. Maecenas sollicitudin neque eget tristique dignissim. Phasellus non ante nec nisi varius semper id ut
      augue. Fusce nunc sem, iaculis sed felis vulputate, ullamcorper imperdiet elit. Praesent convallis volutpat
      dignissim. Phasellus facilisis eget turpis et auctor. Quisque rutrum ultrices dui id dignissim.      Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Donec rhoncus, tellus at porttitor condimentum, nibh arcu hendrerit
      lacus, eget tempor mauris dolor eu odio. Sed eu accumsan tortor. Aliquam in nulla sed eros blandit fermentum.
      Pellentesque vel tortor justo. Sed nec nulla orci. Mauris eros dui, tristique sed faucibus ac, pulvinar eu est.
      Morbi nec lectus et augue commodo rhoncus. Maecenas vitae felis et orci placerat consequat. Sed dignissim
      fermentum aliquam.      Phasellus vel commodo leo, sed auctor mi. Suspendisse potenti. Integer nec neque eu metus
      fringilla maximus. In hac habitasse platea dictumst. Cras eleifend libero at mi venenatis eleifend. Aenean semper
      ex a lacus commodo accumsan. Integer a volutpat quam, vel vulputate nibh. Donec tristique ultricies metus, a
      varius sapien consequat quis. Mauris tempor, urna et faucibus condimentum, mi ante lobortis elit, in vulputate
      orci felis sed risus. Sed a urna hendrerit, tincidunt urna a, finibus massa. In fermentum sollicitudin urna sed
      varius. Aenean dapibus dignissim nunc, pretium iaculis elit pharetra ut.      Ut consequat neque sit amet ipsum
      pharetra, feugiat suscipit metus porttitor. Vestibulum luctus eros ac urna ultrices eleifend. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sodales et leo vel ornare. Sed
      enim urna, sagittis in justo ac, consectetur dictum orci. Sed semper tincidunt quam a posuere. Pellentesque
      consectetur pharetra dui, vitae tincidunt magna vestibulum ut. Proin cursus quis orci nec mattis. Suspendisse et
      viverra eros. Nunc mi ex, egestas ut auctor et, varius in eros.      Mauris rhoncus risus at mi sodales congue.
      Cras laoreet velit nisi, in bibendum lorem tincidunt vel. Suspendisse at ante efficitur lorem rhoncus
      condimentum. Suspendisse nibh erat, pharetra sit amet pretium ut, auctor ut sapien. Morbi rutrum magna eu metus
      fermentum, sed accumsan erat tincidunt. Vivamus mattis porta ullamcorper. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Nunc in diam hendrerit, suscipit purus eget, malesuada
      nunc. Pellentesque nibh orci, ullamcorper id tincidunt eget, pretium quis tortor. Quisque euismod eros in mauris
      consequat consectetur. Praesent non tincidunt lorem.      Duis ut porta ex, quis mollis lacus. Proin venenatis
      eleifend ultrices. Aenean id mollis libero. Quisque volutpat egestas massa vel vestibulum. Vivamus congue urna
      vel nisl maximus molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Aenean a semper neque. Donec feugiat at nulla in maximus. Aliquam sed pharetra enim.      Quisque
      pulvinar nulla vel faucibus dictum. Aliquam erat volutpat. Ut felis lorem, rutrum sit amet est non, rutrum
      iaculis lacus. Praesent tristique dui viverra, venenatis tellus vitae, pulvinar erat. Sed porttitor felis eu
      viverra commodo. Suspendisse ut dui eget neque aliquam eleifend. In eget nulla quis ante vehicula finibus. Aenean
      cursus nibh enim. Vestibulum sit amet vestibulum diam. Phasellus dictum urna nulla, et placerat massa feugiat eu.
      Suspendisse potenti. Vivamus ultrices pretium ligula, a tristique massa vulputate sit amet. Donec ornare mauris
      dolor, fermentum fringilla est condimentum vulputate.      Aliquam a efficitur felis. Nunc luctus ullamcorper
      velit, vel molestie magna facilisis ut. Curabitur auctor tellus vel interdum efficitur. Curabitur iaculis varius
      tortor id congue. Praesent porta sapien turpis, et aliquet nunc tempus et. Donec erat libero, viverra et mauris
      non, iaculis vulputate nisi. Vestibulum at quam id ligula mattis sagittis eu ut dolor. Curabitur vel auctor diam.
      Aliquam pharetra justo in ipsum imperdiet, lobortis hendrerit mauris pulvinar. Donec finibus mi ut eros dapibus,
      at facilisis magna consequat. Morbi a pulvinar odio. Aenean placerat placerat scelerisque. Sed tristique molestie
      posuere.      Donec rhoncus eleifend ante ac tristique. Donec rhoncus sapien sed consectetur dignissim. Donec
      gravida sapien libero, malesuada volutpat dolor aliquet nec. Suspendisse a ligula faucibus, aliquam velit ac,
      egestas tortor. Donec vehicula felis elementum odio laoreet, vel viverra nibh lacinia. Vestibulum non ligula vel
      diam luctus vestibulum vitae at ex. Etiam quis porta justo. Phasellus semper ex vitae est faucibus, et pulvinar
      augue sollicitudin. Donec euismod imperdiet fermentum. Praesent ut auctor leo. Sed quam risus, venenatis eu justo
      a, imperdiet iaculis quam. Donec ac sem congue odio semper mollis ac vel libero. Praesent in tempor massa.
      Phasellus faucibus interdum urna, ut aliquet ante dictum in.      Nullam pretium aliquet risus non dignissim.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris et lacus sit amet magna sollicitudin commodo
      sit amet hendrerit nisl. Curabitur laoreet tincidunt dapibus. Donec ac nisi vel felis tincidunt semper eleifend
      ac tortor. Cras id ipsum ac magna auctor luctus nec ac justo. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Proin sed posuere mi, id sollicitudin lacus. Morbi dolor libero,
      dignissim sed est at, tempus tincidunt mi.      Fusce porta tempus vulputate. Quisque pellentesque dictum odio,
      eget feugiat neque sodales sed. Quisque pretium augue sed risus semper, sit amet vestibulum erat tincidunt. Etiam
      velit lectus, consequat in sapien non, condimentum convallis nulla. Morbi id iaculis dui, ac sollicitudin ligula.
      Praesent lacinia accumsan auctor. Etiam justo est, iaculis vel egestas quis, finibus quis est. Donec et auctor
      arcu.      Nulla facilisi. Pellentesque bibendum magna non convallis egestas. Nunc orci ex, mollis eu massa
      vitae, sodales tristique nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Curabitur ut dui aliquet, molestie mi non, vehicula nibh. Nullam vestibulum, sem ac vestibulum pharetra,
      massa erat egestas mauris, eget bibendum lacus tortor in erat. Praesent ultrices massa in elit pellentesque, at
      dignissim urna molestie. Duis vel massa quis ante laoreet fringilla ac id velit. Sed faucibus est ut quam blandit
      eleifend. Cras eu malesuada massa, eget posuere eros. Nunc magna nibh, dapibus sed ante in, scelerisque facilisis
      sapien.      Pellentesque massa eros, finibus eget leo nec, maximus rhoncus nunc. Donec fringilla erat non leo
      mattis convallis. Maecenas placerat justo sit amet fermentum tristique. Pellentesque nec metus nibh. Integer
      vitae arcu at lorem fringilla feugiat eget eu mi. Donec ultrices tortor ac sem consectetur finibus. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Sed et ex tincidunt, vulputate augue sed, sollicitudin arcu.
      Quisque ac tempor ipsum. Suspendisse potenti.      Sed consequat, ipsum sit amet rhoncus viverra, ex lorem
      tristique metus, sed eleifend elit ipsum sed magna. Nunc in turpis tempor, sodales odio nec, ultrices metus.
      Praesent malesuada, enim non vestibulum euismod, quam dolor egestas magna, ac tincidunt enim ante semper elit.
      Aliquam quis dui velit. Quisque eleifend vel velit eu faucibus. Nunc ultrices est hendrerit blandit fermentum.
      Etiam varius augue non urna mollis facilisis. Nam semper ac elit eget semper. Praesent tristique at sapien a
      pretium. Donec vitae urna ac diam luctus iaculis non vel eros. Donec feugiat est id efficitur vestibulum. Donec
      mi nisi, imperdiet vel blandit et, ornare vel neque. Vivamus eget venenatis ex. Sed pretium est turpis, vel
      egestas lorem pulvinar quis.      Donec fermentum augue a vestibulum rhoncus. Aenean efficitur vitae ex quis
      malesuada. Pellentesque ut dui eu tellus facilisis sodales. Morbi hendrerit diam euismod nisi aliquet facilisis.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra erat et orci scelerisque pretium. Aenean
      volutpat laoreet ligula, quis laoreet eros condimentum et. Mauris placerat, diam quis molestie pharetra, neque
      leo malesuada urna, eu euismod quam diam euismod ante. Curabitur ac mattis libero, ut gravida libero. In libero
      risus, congue sit amet lorem ac, sollicitudin pharetra orci. Suspendisse at viverra tortor, id vehicula
      tortor.      Quisque ut ex a odio congue feugiat pellentesque id tellus. Sed a euismod ligula, in egestas elit.
      Nam eget lobortis magna. Nullam est ligula, iaculis cursus ex sit amet, rhoncus varius nunc. Duis rutrum volutpat
      aliquet. Maecenas dictum auctor accumsan. Nam eu elementum velit. Vivamus egestas urna metus. Proin ac venenatis
      eros. Pellentesque eget suscipit lacus, sollicitudin pulvinar dui. Vestibulum in vestibulum dui, nec efficitur
      est. Phasellus rutrum ultrices dolor quis congue. Nulla sem magna, convallis vel hendrerit vel, interdum non
      nunc. Nam gravida eleifend augue. Sed vestibulum elementum lobortis. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus.      In turpis nulla, hendrerit sit amet ex sit amet, auctor accumsan
      est. Pellentesque rutrum enim non ante porta, sed semper velit facilisis. Ut blandit, massa sit amet eleifend
      viverra, nunc nisi convallis erat, ac pretium metus urna at magna. Duis sit amet turpis urna. Donec tincidunt
      elementum nisl, feugiat rutrum mauris interdum id. Donec mollis diam erat, a bibendum diam euismod at. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales augue non arcu posuere ultrices.      Donec
      ut placerat magna. Nunc posuere, metus eu sollicitudin gravida, velit erat imperdiet est, ut venenatis ligula
      tortor nec orci. Praesent pharetra enim ut erat ullamcorper, eget semper metus pulvinar. Maecenas vitae varius
      purus. Vestibulum pellentesque convallis purus. Nam placerat laoreet sapien. Nulla eleifend nibh sed diam luctus,
      non ullamcorper ex blandit. Integer eu lorem arcu.      Integer fringilla purus in mauris vestibulum pretium.
      Curabitur aliquet metus hendrerit lectus elementum convallis. Phasellus sed imperdiet purus. Donec elementum
      scelerisque suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum massa a
      nunc cursus auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare porta arcu, a cursus
      turpis tempus in. Aenean tempor leo in scelerisque accumsan. Suspendisse potenti. Donec nisl lectus, pulvinar
      vitae metus quis, rutrum blandit nunc. Etiam et laoreet ex.      Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Etiam vel pharetra libero, et accumsan purus. Aenean rutrum arcu
      egestas semper sodales. Nam consequat lectus neque, sed aliquam tellus iaculis sed. Suspendisse erat enim,
      venenatis vitae tristique et, mattis fermentum neque. Phasellus in tempus diam. Pellentesque id pretium nunc. Sed
      lacinia sagittis tristique. Phasellus nec quam fermentum magna facilisis mattis. Ut condimentum ultricies libero,
      sed feugiat turpis fermentum vitae. Nam consectetur magna vel neque tincidunt molestie. Mauris laoreet tincidunt
      enim id pretium. Ut tempor libero ut sapien vulputate, sed rutrum nisl malesuada.      Praesent tincidunt
      imperdiet massa, suscipit efficitur lorem faucibus vel. Nulla facilisi. Morbi suscipit turpis efficitur metus
      eleifend, sit amet auctor sem porttitor. Nulla non dictum nulla. Vestibulum efficitur nisl at aliquet lobortis.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent commodo
      libero at magna ultrices, in luctus metus bibendum. Nulla consequat ex quis porttitor lacinia. Aenean blandit
      diam quis arcu pellentesque tincidunt. Donec facilisis tempus erat ut laoreet. Phasellus rhoncus efficitur augue,
      quis accumsan ligula consequat in. Aliquam vestibulum, ipsum vel malesuada dignissim, turpis lorem malesuada
      mauris, ut cursus tellus dolor in neque.      Fusce rutrum augue sed neque tristique, sed sagittis erat porta.
      Praesent metus nisl, ultricies in pulvinar ac, ultrices in nunc. Etiam ut felis pharetra, sollicitudin purus sit
      amet, tempus nulla. Praesent tempus lorem vitae elit varius sagittis. Nunc mauris erat, aliquam ut velit ut,
      sollicitudin mollis erat. Aliquam et tellus a velit tincidunt pretium vel a ante. Donec enim est, luctus et quam
      vel, sodales ornare nulla. Nunc venenatis lacinia ante consectetur egestas. Cras tempus metus ut eros
      scelerisque, quis maximus leo consectetur. In vitae purus dapibus, faucibus turpis ut, dapibus erat. Donec
      gravida porta urna, vitae elementum dui lacinia ac.      Nullam sed maximus odio, id commodo turpis. Sed mauris
      mi, facilisis non vulputate ut, aliquet vitae risus. Vivamus iaculis, nulla in feugiat laoreet, lacus nisl
      vestibulum velit, ac cursus enim felis nec ex. Duis vehicula scelerisque risus, vitae placerat eros ultricies
      vitae. Nunc laoreet eleifend tellus auctor euismod. Donec quis consequat dui. Praesent convallis nibh vitae
      sodales eleifend. Sed rhoncus urna vitae dui faucibus bibendum. Cras consectetur viverra magna. Pellentesque
      varius, quam id pretium facilisis, nulla dolor fermentum ipsum, sed pharetra risus ligula sed massa. Donec
      convallis egestas lacus nec efficitur. Quisque a tincidunt urna, a commodo purus. Nunc sit amet varius dolor.
      Mauris tristique ullamcorper lobortis. Integer est tellus, pharetra sed congue id, posuere ut elit. Mauris
      bibendum tincidunt quam, hendrerit finibus ipsum dapibus at.      Curabitur viverra cursus ipsum id consectetur.
      Sed pellentesque ornare neque. Nulla non lorem non quam ultrices mollis et in leo. Nullam egestas purus justo.
      Phasellus sed diam non eros mollis condimentum. Nam eu sapien arcu. In ante velit, sollicitudin sagittis
      convallis blandit, sodales porta nisl. Quisque vel est ex. Donec tellus massa, vestibulum quis consequat non,
      cursus a lorem. Integer scelerisque a nisi vitae consectetur. Phasellus laoreet rhoncus tellus, sed porta lorem
      vulputate vel. Vivamus non sem sed nunc rutrum euismod ac eu nisl. Sed volutpat venenatis semper.      Sed
      pulvinar tellus vel nunc auctor tempor. Donec ut rhoncus sem, nec ullamcorper est. Class aptent taciti sociosqu
      ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis
      in faucibus. Nulla nec ultrices metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Nunc nec magna pulvinar, scelerisque leo nec, consectetur enim. Phasellus quis porttitor
      metus. Morbi quis interdum nisi. Etiam porta libero et orci volutpat malesuada. Pellentesque eleifend eleifend
      magna, ut luctus dolor. Sed imperdiet malesuada turpis vitae vulputate. Nulla eu ultrices purus, vitae feugiat
      mauris. Curabitur blandit dui feugiat risus semper, non vestibulum dolor rutrum. Nulla facilisi.      Maecenas
      consequat libero non risus maximus fermentum. Nullam molestie laoreet tristique. Nam consequat erat non enim
      ultrices, ac pretium urna finibus. Nulla facilisi. Donec ultricies urna neque, nec viverra lacus placerat nec.
      Quisque sit amet nunc nec lectus sodales accumsan. Pellentesque ultrices pulvinar mauris, a feugiat sapien
      rhoncus eu. Integer luctus finibus libero. Curabitur tincidunt augue nisl, non scelerisque nisl molestie vitae.
      Morbi ipsum eros, ultrices et tristique laoreet, fermentum at lorem. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Integer eget ex tortor. Curabitur id est massa. Praesent nec risus sed nulla tempor cursus eu
      non lacus. Sed vitae scelerisque ex, at gravida mi. Nunc turpis ligula, bibendum non nibh quis, fringilla
      tincidunt lorem.      Nulla eget felis sit amet ante aliquet aliquam. Suspendisse luctus, orci in placerat
      pharetra, nisi mi eleifend odio, semper volutpat urna mauris in magna. Duis quis leo ac nisi scelerisque finibus.
      Cras egestas, elit rhoncus dapibus suscipit, enim ipsum semper nunc, ac consequat risus massa sit amet metus.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel dui rutrum
      metus lobortis imperdiet rutrum in eros. Fusce scelerisque a elit at rhoncus. Maecenas blandit efficitur
      vestibulum. Proin pellentesque ac felis sit amet sollicitudin. Nullam vulputate nec augue ut commodo.      Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim ullamcorper risus, sit amet sollicitudin eros
      laoreet non. Cras ut bibendum nisl, eget placerat metus. Donec accumsan efficitur ex, rutrum rutrum neque
      interdum et. Proin condimentum pellentesque nibh eget bibendum. Ut felis justo, laoreet pretium ante eget,
      tristique ultrices purus. Nam nec arcu eu tortor commodo elementum. Fusce bibendum lacinia dolor nec pharetra.
      Nullam ac finibus est. Nullam accumsan elit non diam vehicula suscipit. Nulla id ornare justo. Interdum et
      malesuada fames ac ante ipsum primis in faucibus.      Pellentesque dictum, nunc nec pretium aliquam, lorem
      mauris fringilla nunc, ac accumsan turpis diam quis neque. Curabitur bibendum aliquam erat, vel sollicitudin
      ipsum ultricies ac. Proin varius enim enim, in varius purus gravida non. Aenean laoreet, massa a rhoncus finibus,
      arcu velit finibus enim, eget placerat risus risus et risus. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Morbi id ligula eu justo mollis faucibus at et justo. Vestibulum massa
      lacus, sagittis vitae sem ut, vehicula vehicula diam. Vestibulum interdum nunc leo, eget congue dui efficitur
      quis. Nulla rutrum nisi vitae magna molestie, eget blandit tellus pulvinar. Etiam facilisis pulvinar metus, ac
      vehicula enim. Maecenas hendrerit ligula nisl, et maximus elit semper eget. Fusce tempus mi eget enim elementum,
      a efficitur mi pharetra. Sed ornare dignissim efficitur. Morbi quis purus ligula.      Sed tincidunt ultrices
      purus at facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel mauris ante. Phasellus
      hendrerit velit vitae fringilla venenatis. Pellentesque posuere accumsan lectus a ultricies. Sed dictum arcu sed
      nulla ultrices sollicitudin. Maecenas fermentum ex ac commodo consectetur. Donec libero nunc, bibendum eu
      ultricies sed, tempor in elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Nulla venenatis neque at sem varius efficitur. Nullam auctor, nibh dapibus placerat semper, leo tortor
      hendrerit urna, vel imperdiet eros libero at odio.      Nulla malesuada magna risus. Morbi lobortis velit ac
      ultrices auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Vestibulum at ligula orci. In ut aliquet metus, ut mattis diam. Nullam rhoncus nisi euismod faucibus elementum.
      Sed nec neque at lectus tempus tristique. Morbi quis aliquet libero. Duis blandit suscipit erat, sit amet
      placerat est luctus id. Sed elementum, eros in pulvinar aliquet, ipsum libero lacinia massa, sit amet blandit
      nunc enim ut est. Nunc congue nisi dui, ac porta magna aliquam sed. Mauris nibh sapien, pulvinar sed quam id,
      convallis facilisis mauris.      Fusce ante lacus, blandit sed tempor ut, ornare et dui. Nunc mollis dictum
      aliquet. Nulla euismod massa sed tellus interdum tincidunt. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Sed cursus turpis et odio porttitor, ut pulvinar turpis placerat.
      Nullam id facilisis lacus. Vestibulum non fermentum ex, vel condimentum eros. Proin non nibh cursus, mattis velit
      at, dignissim nibh.      Cras non turpis sit amet tellus lacinia malesuada. In aliquet, ex ac bibendum lacinia,
      ipsum nisi efficitur ipsum, non blandit nunc justo vitae nulla. Integer viverra porttitor elit in semper. Donec
      mattis nisl lacus, ac convallis diam euismod vitae. Donec convallis, eros sit amet semper mattis, lectus ex
      maximus sem, dapibus posuere arcu orci nec quam. Ut eleifend id neque sed euismod. Curabitur sit amet neque sed
      magna lobortis luctus. Aliquam interdum rutrum libero, nec aliquet lacus posuere eu. In cursus ipsum lacus, vel
      rhoncus massa laoreet at. Sed ullamcorper magna ac arcu vulputate euismod. Sed dignissim lacus quis porttitor
      lobortis.      Mauris maximus posuere urna et sagittis. Morbi auctor gravida interdum. Fusce egestas mauris at
      vulputate elementum. Etiam eu nibh quam. Ut consectetur et nibh ac pharetra. Integer rhoncus urna elementum
      accumsan accumsan. Ut blandit aliquam tincidunt. Nam cursus tortor hendrerit ex commodo, vel posuere massa
      mollis. Proin leo sapien, hendrerit sed malesuada vitae, egestas id tellus. Maecenas blandit laoreet magna et
      volutpat. Sed convallis, diam vitae placerat volutpat, sem eros lacinia velit, eget rutrum metus dui ut sapien.
      Proin vitae arcu in quam tristique lobortis non vel tortor. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Nullam interdum nibh eros, ac accumsan justo tincidunt ac. Ut nisl
      dui, malesuada nec rutrum vel, pretium vitae turpis. Mauris nec cursus libero.      Maecenas finibus neque non
      consectetur posuere. Proin vitae elit ut quam tempus consectetur vitae vitae neque. Donec placerat nisi quis leo
      pulvinar pharetra. Sed vitae nisi quis turpis interdum porta a quis arcu. Nunc bibendum elit in lectus egestas,
      non hendrerit dolor pellentesque. Suspendisse fermentum rhoncus fermentum. Morbi lacinia mi vitae ornare
      tincidunt. Nam ultrices consectetur diam a rutrum. Vestibulum ut scelerisque massa. Cras feugiat arcu in sem
      dapibus lacinia.
    </template>
    <template
      v-if="footer"
      #footer
    >
      <span v-html="footer" />
    </template>
  </dt-root-layout>
</template>

<script>
import DtRootLayout from './root_layout';

export default {
  name: 'DtRootLayoutDefault',
  components: { DtRootLayout },
};
</script>
