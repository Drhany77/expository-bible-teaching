const storageKey = 'expository-bible-teaching-state';
const modeKeys = ['nt', 'puritan', 'all'];
const audienceKeys = ['adult', 'children', 'personal', 'advanced'];
const languageOrder = ['en', 'ar', 'fr', 'pt', 'sw', 'rw', 'zh', 'ko', 'ja', 'hi'];
const brandCredits = {
  en: 'Created and operated by NuruMed',
  ar: 'تم إنشاؤه وتشغيله بواسطة NuruMed',
  fr: 'Créé et exploité par NuruMed',
  pt: 'Criado e operado pela NuruMed',
  sw: 'Imeundwa na kuendeshwa na NuruMed',
  rw: 'Yakozwe kandi icungwa na NuruMed',
  zh: '由 NuruMed 创建并运营',
  ko: 'NuruMed가 개발하고 운영합니다',
  ja: 'NuruMed により開発・運営',
  hi: 'NuruMed द्वारा निर्मित और संचालित',
};

const translations = {
  en: {
    label: 'English',
    htmlLang: 'en',
    dir: 'ltr',
    brandEyebrow: 'Reformed Expositor',
    siteTitle: 'Expository Bible Teaching',
    lead:
      'A warm, mode-aware Bible study and teaching assistant shaped for conservative, expository, Reformed conversation.',
    modeSectionTitle: 'Teaching Mode',
    modeSectionIntro: 'Choose the stream that should steer the whole conversation.',
    setupSectionTitle: 'Conversation Setup',
    setupSectionIntro: 'Keep the tone fitted to your audience.',
    audienceLabel: 'Audience',
    profileEyebrow: 'Active Profile',
    languageLabel: 'Language',
    newConversation: 'New Conversation',
    placeholder:
      'Ask for a sermon, devotion, lecture, doctrinal study, or simple meaning of a verse...',
    helperText: 'The selected mode stays locked until you change it.',
    send: 'Send',
    thinking: 'Thinking...',
    requestDidNotFinish: 'The request did not finish cleanly.',
    requestFailed: 'The message could not be sent. Check the connection and try again.',
    youLabel: 'You',
    assistantLabel: 'Reformed Expositor',
    starterLabels: ['Sermon Outline', 'Verse Meaning', 'Devotion'],
    profileOnline:
      'Online conservative sources are searched live during the conversation when needed.',
    audiences: {
      adult: 'Sunday sermon / adult class',
      children: 'Children / family devotion',
      personal: 'Personal devotion',
      advanced: 'Advanced teacher / seminary',
    },
    modes: {
      nt: {
        label: 'New Testament Expository Teaching',
        summary: 'Conservative New Testament exposition with a clear, text-driven focus.',
      },
      puritan: {
        label: 'Puritan',
        summary:
          'Calvin, Luther, the Puritans, and Edwards with a focused classic Reformed voice.',
      },
      all: {
        label: 'All Expository Teaching',
        summary:
          'Integrated conservative expository teaching across classic and modern Reformed voices.',
      },
    },
    welcome: {
      nt:
        'New Testament mode is locked in. Ask for a verse meaning, sermon outline, lecture, or doctrinal summary and I will answer plainly and pastorally.',
      puritan:
        'Puritan mode is locked in. Ask for a text, doctrine, devotion, or pastoral issue and I will answer in that stream.',
      all:
        'All Expository Teaching is locked in. Ask for a sermon, devotion, doctrinal synthesis, or simple verse meaning and I will help directly.',
    },
    starterPrompts: {
      nt: [
        'Prepare a sermon outline for Romans 3:21-26.',
        'Give me the plain meaning of John 10:27-30.',
        'Build a New Testament devotion on Philippians 2:5-11.',
      ],
      puritan: [
        'Give me a Puritan-style explanation of Psalm 51.',
        'Show how Calvin and the Puritans handle assurance.',
        'Write a short family devotion on the fear of the Lord.',
      ],
      all: [
        'Prepare a sermon outline for Romans 3:21-26.',
        'Bring classic and modern Reformed voices on justification.',
        'Create a short family devotion on Psalm 23.',
      ],
    },
  },
  ar: {
    label: 'Arabic العربية',
    htmlLang: 'ar',
    dir: 'rtl',
    brandEyebrow: 'المفسر الإصلاحي',
    siteTitle: 'التعليم الكتابي التفسيري',
    lead:
      'مساعد دافئ لدراسة الكتاب المقدس والتعليم، يراعي النمط المطلوب ومصوغ بروح إصلاحية تفسيرية محافظة.',
    modeSectionTitle: 'مسار التعليم',
    modeSectionIntro: 'اختر المسار الذي يوجّه المحادثة كلها.',
    setupSectionTitle: 'إعداد المحادثة',
    setupSectionIntro: 'اضبط النبرة بحسب جمهورك.',
    audienceLabel: 'الجمهور',
    profileEyebrow: 'الملف النشط',
    languageLabel: 'اللغة',
    newConversation: 'محادثة جديدة',
    placeholder: 'اطلب عظة أو تأملًا أو محاضرة أو دراسة عقائدية أو شرحًا بسيطًا لآية...',
    helperText: 'يبقى المسار المختار ثابتًا حتى تغيّره.',
    send: 'إرسال',
    thinking: 'جارٍ التفكير...',
    requestDidNotFinish: 'لم يكتمل الطلب بصورة سليمة.',
    requestFailed: 'تعذر إرسال الرسالة. تحقّق من الاتصال ثم حاول مرة أخرى.',
    youLabel: 'أنت',
    assistantLabel: 'المفسر الإصلاحي',
    starterLabels: ['مخطط عظة', 'معنى الآية', 'تأمل'],
    profileOnline: 'يتم البحث في المصادر المحافظة الموثوقة أثناء المحادثة عند الحاجة.',
    audiences: {
      adult: 'عظة الأحد / درس للكبار',
      children: 'الأطفال / تأمل عائلي',
      personal: 'تأمل شخصي',
      advanced: 'معلّم متقدم / معهد لاهوتي',
    },
    modes: {
      nt: {
        label: 'التعليم التفسيري للعهد الجديد',
        summary: 'تفسير محافظ للعهد الجديد بتركيز واضح قائم على النص.',
      },
      puritan: {
        label: 'البيوريتان',
        summary: 'كالفن ولوثر والبيوريتانيون وإدواردز ضمن تيار إصلاحي كلاسيكي.',
      },
      all: {
        label: 'التعليم التفسيري الشامل',
        summary: 'عرض تفسيري محافظ يجمع بين الأصوات الإصلاحية الكلاسيكية والحديثة.',
      },
    },
    welcome: {
      nt:
        'تم تثبيت مسار العهد الجديد. اطلب معنى آية أو مخطط عظة أو محاضرة أو خلاصة عقائدية، وسأجيب بوضوح ورعاية.',
      puritan:
        'تم تثبيت مسار البيوريتان. اطلب نصًا أو عقيدة أو تأملًا أو قضية رعوية، وسأجيب من هذا التيار.',
      all:
        'تم تثبيت مسار التعليم التفسيري الشامل. اطلب عظة أو تأملًا أو خلاصة عقائدية أو معنى بسيطًا لآية، وسأساعدك مباشرة.',
    },
    starterPrompts: {
      nt: [
        'أعد مخطط عظة لرومية 3: 21-26.',
        'أعطني المعنى الواضح ليوحنا 10: 27-30.',
        'ابنِ تأملًا من العهد الجديد على فيلبي 2: 5-11.',
      ],
      puritan: [
        'قدّم شرحًا بيوريتانيًا للمزمور 51.',
        'أظهر كيف يعالج كالفن والبيوريتانيون موضوع اليقين.',
        'اكتب تأملًا عائليًا قصيرًا عن مخافة الرب.',
      ],
      all: [
        'أعد مخطط عظة لرومية 3: 21-26.',
        'اجمع بين الأصوات الإصلاحية الكلاسيكية والحديثة حول التبرير.',
        'أنشئ تأملًا عائليًا قصيرًا عن المزمور 23.',
      ],
    },
  },
  fr: {
    label: 'French Français',
    htmlLang: 'fr',
    dir: 'ltr',
    brandEyebrow: 'Expositeur réformé',
    siteTitle: 'Enseignement Biblique Expositif',
    lead:
      "Un assistant chaleureux d'étude biblique et d'enseignement, adapté au mode choisi, dans une ligne réformée, conservatrice et expositive.",
    modeSectionTitle: "Mode d'enseignement",
    modeSectionIntro: "Choisissez l'orientation qui doit guider toute la conversation.",
    setupSectionTitle: 'Configuration de la conversation',
    setupSectionIntro: 'Ajustez le ton selon votre public.',
    audienceLabel: 'Public',
    profileEyebrow: 'Profil actif',
    languageLabel: 'Langue',
    newConversation: 'Nouvelle conversation',
    placeholder:
      "Demandez un sermon, une méditation, un cours, une étude doctrinale ou le sens simple d'un verset...",
    helperText: 'Le mode choisi reste verrouillé jusqu’à ce que vous le changiez.',
    send: 'Envoyer',
    thinking: 'Réflexion...',
    requestDidNotFinish: "La demande ne s'est pas terminée correctement.",
    requestFailed: "Le message n'a pas pu être envoyé. Vérifiez la connexion puis réessayez.",
    youLabel: 'Vous',
    assistantLabel: 'Expositeur réformé',
    starterLabels: ['Plan de sermon', 'Sens du verset', 'Méditation'],
    profileOnline:
      'Des sources conservatrices fiables sont consultées en direct pendant la conversation si nécessaire.',
    audiences: {
      adult: 'Sermon du dimanche / classe adulte',
      children: 'Enfants / méditation familiale',
      personal: 'Méditation personnelle',
      advanced: 'Enseignant avancé / séminaire',
    },
    modes: {
      nt: {
        label: 'Enseignement expositif du Nouveau Testament',
        summary: 'Exposition conservatrice du Nouveau Testament avec une lecture claire et centrée sur le texte.',
      },
      puritan: {
        label: 'Puritain',
        summary:
          'Calvin, Luther, les Puritains et Edwards dans une ligne réformée classique.',
      },
      all: {
        label: 'Tout l’enseignement expositif',
        summary:
          'Enseignement expositif conservateur intégré à travers les voix réformées classiques et modernes.',
      },
    },
    welcome: {
      nt:
        'Le mode Nouveau Testament est activé. Demandez le sens d’un verset, un plan de sermon, un cours ou un résumé doctrinal, et je répondrai avec clarté et soin pastoral.',
      puritan:
        'Le mode puritain est activé. Demandez un texte, une doctrine, une méditation ou une question pastorale, et je répondrai dans cette ligne.',
      all:
        'Le mode Tout l’enseignement expositif est activé. Demandez un sermon, une méditation, une synthèse doctrinale ou le sens simple d’un verset, et je vous aiderai directement.',
    },
    starterPrompts: {
      nt: [
        'Prépare un plan de sermon pour Romains 3:21-26.',
        'Donne-moi le sens simple de Jean 10:27-30.',
        'Construis une méditation du Nouveau Testament sur Philippiens 2:5-11.',
      ],
      puritan: [
        'Donne-moi une explication puritaine du Psaume 51.',
        'Montre comment Calvin et les Puritains traitent l’assurance.',
        'Rédige une courte méditation familiale sur la crainte du Seigneur.',
      ],
      all: [
        'Prépare un plan de sermon pour Romains 3:21-26.',
        'Réunis les voix réformées classiques et modernes sur la justification.',
        'Crée une courte méditation familiale sur le Psaume 23.',
      ],
    },
  },
  zh: {
    label: 'Chinese 中文',
    htmlLang: 'zh-CN',
    dir: 'ltr',
    brandEyebrow: '改革宗释经助手',
    siteTitle: '解经式圣经教导',
    lead: '一个温和、会按模式调整的圣经学习与教导助手，立场保守、释经、改革宗。',
    modeSectionTitle: '教学模式',
    modeSectionIntro: '选择要引导整个对话的路线。',
    setupSectionTitle: '对话设置',
    setupSectionIntro: '让语气贴合你的受众。',
    audienceLabel: '受众',
    profileEyebrow: '当前配置',
    languageLabel: '语言',
    newConversation: '新建对话',
    placeholder: '请求讲章大纲、灵修、讲座、教义研究，或一节经文的简明意思……',
    helperText: '所选模式会保持不变，直到你手动更改。',
    send: '发送',
    thinking: '思考中...',
    requestDidNotFinish: '请求未能正常完成。',
    requestFailed: '消息无法发送。请检查连接后再试。',
    youLabel: '你',
    assistantLabel: '改革宗释经助手',
    starterLabels: ['讲章大纲', '经文意思', '灵修'],
    profileOnline: '对话中如有需要，会实时检索保守可靠的资料来源。',
    audiences: {
      adult: '主日讲道 / 成人课程',
      children: '儿童 / 家庭灵修',
      personal: '个人灵修',
      advanced: '高级教师 / 神学院',
    },
    modes: {
      nt: {
        label: '新约释经教导',
        summary: '以保守的新约释经为主，并带有时代论和前千禧年倾向。',
      },
      puritan: {
        label: '清教徒',
        summary: '加尔文、路德、清教徒与爱德华兹的经典改革宗路线。',
      },
      all: {
        label: '全部释经教导',
        summary: '整合经典与现代改革宗声音的保守释经教导。',
      },
    },
    welcome: {
      nt:
        '新约模式已锁定。你可以请求经文意思、讲章大纲、讲座或教义摘要，我会直接而牧养性地回答。',
      puritan:
        '清教徒模式已锁定。你可以请求经文、教义、灵修或牧养问题，我会按这一传统回答。',
      all:
        '全部释经教导模式已锁定。你可以请求讲章、灵修、教义综合，或经文的简明意思，我会直接帮助你。',
    },
    starterPrompts: {
      nt: [
        '请为罗马书 3:21-26 准备一个讲章大纲。',
        '请告诉我约翰福音 10:27-30 的直接意思。',
        '请根据腓立比书 2:5-11 写一篇新约灵修。',
      ],
      puritan: [
        '请用清教徒风格解释诗篇 51 篇。',
        '请说明加尔文和清教徒如何处理确据的问题。',
        '请写一篇关于敬畏主的简短家庭灵修。',
      ],
      all: [
        '请为罗马书 3:21-26 准备一个讲章大纲。',
        '请整合经典与现代改革宗声音来谈称义。',
        '请写一篇关于诗篇 23 篇的简短家庭灵修。',
      ],
    },
  },
  ko: {
    label: 'Korean 한국어',
    htmlLang: 'ko',
    dir: 'ltr',
    brandEyebrow: '개혁주의 강해자',
    siteTitle: '강해 성경 가르침',
    lead:
      '보수적이고 강해적이며 개혁주의적인 대화를 위해 조정되는 따뜻한 성경 연구 및 가르침 도우미입니다.',
    modeSectionTitle: '가르침 모드',
    modeSectionIntro: '전체 대화를 이끌 방향을 선택하세요.',
    setupSectionTitle: '대화 설정',
    setupSectionIntro: '청중에 맞게 어조를 조정하세요.',
    audienceLabel: '청중',
    profileEyebrow: '현재 프로필',
    languageLabel: '언어',
    newConversation: '새 대화',
    placeholder: '설교 개요, 묵상, 강의, 교리 연구, 또는 구절의 간단한 의미를 요청하세요...',
    helperText: '선택한 모드는 직접 바꾸기 전까지 유지됩니다.',
    send: '보내기',
    thinking: '생각 중...',
    requestDidNotFinish: '요청이 정상적으로 완료되지 않았습니다.',
    requestFailed: '메시지를 보낼 수 없습니다. 연결을 확인한 후 다시 시도하세요.',
    youLabel: '나',
    assistantLabel: '개혁주의 강해자',
    starterLabels: ['설교 개요', '구절 의미', '묵상'],
    profileOnline: '필요할 때 대화 중에 보수적이고 신뢰할 수 있는 자료를 실시간으로 찾습니다.',
    audiences: {
      adult: '주일 설교 / 성인 반',
      children: '어린이 / 가정 묵상',
      personal: '개인 묵상',
      advanced: '상급 교사 / 신학교',
    },
    modes: {
      nt: {
        label: '신약 강해 가르침',
        summary: '보수적인 신약 강해에 세대주의와 전천년설의 강조를 둡니다.',
      },
      puritan: {
        label: '청교도',
        summary: '칼빈, 루터, 청교도, 에드워즈를 따르는 고전적 개혁주의 흐름입니다.',
      },
      all: {
        label: '전체 강해 가르침',
        summary: '고전과 현대 개혁주의 음성을 아우르는 통합적 강해 가르침입니다.',
      },
    },
    welcome: {
      nt:
        '신약 모드가 고정되었습니다. 구절의 의미, 설교 개요, 강의, 교리 요약을 요청하시면 분명하고 목회적으로 답하겠습니다.',
      puritan:
        '청교도 모드가 고정되었습니다. 본문, 교리, 묵상, 목회적 문제를 요청하시면 그 전통 안에서 답하겠습니다.',
      all:
        '전체 강해 가르침 모드가 고정되었습니다. 설교, 묵상, 교리 종합, 또는 구절의 단순한 의미를 요청하시면 바로 도와드리겠습니다.',
    },
    starterPrompts: {
      nt: [
        '로마서 3:21-26 설교 개요를 준비해 주세요.',
        '요한복음 10:27-30의 분명한 의미를 알려 주세요.',
        '빌립보서 2:5-11을 바탕으로 신약 묵상을 만들어 주세요.',
      ],
      puritan: [
        '시편 51편을 청교도식으로 설명해 주세요.',
        '칼빈과 청교도들이 확신을 어떻게 다루는지 보여 주세요.',
        '여호와 경외에 대한 짧은 가정 묵상을 써 주세요.',
      ],
      all: [
        '로마서 3:21-26 설교 개요를 준비해 주세요.',
        '칭의에 대해 고전과 현대 개혁주의 음성을 함께 모아 주세요.',
        '시편 23편에 대한 짧은 가정 묵상을 만들어 주세요.',
      ],
    },
  },
  pt: {
    label: 'Portuguese Português',
    htmlLang: 'pt',
    dir: 'ltr',
    brandEyebrow: 'Expositor Reformado',
    siteTitle: 'Ensino Bíblico Expositivo',
    lead:
      'Um assistente acolhedor de estudo bíblico e ensino, ajustado ao modo escolhido, com conversa reformada, conservadora e expositiva.',
    modeSectionTitle: 'Modo de ensino',
    modeSectionIntro: 'Escolha a linha que deve conduzir toda a conversa.',
    setupSectionTitle: 'Configuração da conversa',
    setupSectionIntro: 'Ajuste o tom ao seu público.',
    audienceLabel: 'Público',
    profileEyebrow: 'Perfil ativo',
    languageLabel: 'Idioma',
    newConversation: 'Nova conversa',
    placeholder:
      'Peça um esboço de sermão, devoção, aula, estudo doutrinário ou o significado simples de um versículo...',
    helperText: 'O modo selecionado permanece fixo até você mudá-lo.',
    send: 'Enviar',
    thinking: 'Pensando...',
    requestDidNotFinish: 'A solicitação não terminou corretamente.',
    requestFailed: 'Não foi possível enviar a mensagem. Verifique a conexão e tente novamente.',
    youLabel: 'Você',
    assistantLabel: 'Expositor Reformado',
    starterLabels: ['Esboço de sermão', 'Significado do versículo', 'Devoção'],
    profileOnline:
      'Fontes conservadoras confiáveis são pesquisadas ao vivo durante a conversa quando necessário.',
    audiences: {
      adult: 'Sermão de domingo / classe de adultos',
      children: 'Crianças / devoção em família',
      personal: 'Devoção pessoal',
      advanced: 'Professor avançado / seminário',
    },
    modes: {
      nt: {
        label: 'Ensino Expositivo do Novo Testamento',
        summary:
          'Exposição conservadora do Novo Testamento com ênfase dispensacional e pré-milenista.',
      },
      puritan: {
        label: 'Puritano',
        summary:
          'Calvino, Lutero, os puritanos e Edwards em uma linha reformada clássica.',
      },
      all: {
        label: 'Todo o Ensino Expositivo',
        summary:
          'Ensino expositivo conservador integrado através de vozes reformadas clássicas e modernas.',
      },
    },
    welcome: {
      nt:
        'O modo Novo Testamento está fixado. Peça o significado de um versículo, um esboço de sermão, uma aula ou um resumo doutrinário, e eu responderei com clareza e cuidado pastoral.',
      puritan:
        'O modo puritano está fixado. Peça um texto, doutrina, devoção ou questão pastoral, e eu responderei nessa linha.',
      all:
        'O modo Todo o Ensino Expositivo está fixado. Peça um sermão, devoção, síntese doutrinária ou o significado simples de um versículo, e eu ajudarei diretamente.',
    },
    starterPrompts: {
      nt: [
        'Prepare um esboço de sermão para Romanos 3:21-26.',
        'Dê-me o significado simples de João 10:27-30.',
        'Monte uma devoção do Novo Testamento sobre Filipenses 2:5-11.',
      ],
      puritan: [
        'Dê-me uma explicação puritana do Salmo 51.',
        'Mostre como Calvino e os puritanos tratam a certeza da salvação.',
        'Escreva uma breve devoção em família sobre o temor do Senhor.',
      ],
      all: [
        'Prepare um esboço de sermão para Romanos 3:21-26.',
        'Reúna vozes reformadas clássicas e modernas sobre a justificação.',
        'Crie uma breve devoção em família sobre o Salmo 23.',
      ],
    },
  },
  sw: {
    label: 'Swahili Kiswahili',
    htmlLang: 'sw',
    dir: 'ltr',
    brandEyebrow: 'Mfasiri wa Kireformed',
    siteTitle: 'Mafundisho ya Biblia ya Ufafanuzi',
    lead:
      'Msaidizi wa joto wa kujifunza Biblia na kufundisha, unaoendana na hali uliyochagua, wenye mazungumzo ya Kireformed, kihafidhina, na ya ufafanuzi.',
    modeSectionTitle: 'Njia ya mafundisho',
    modeSectionIntro: 'Chagua mkondo utakaoongoza mazungumzo yote.',
    setupSectionTitle: 'Mpangilio wa mazungumzo',
    setupSectionIntro: 'Rekebisha sauti kulingana na hadhira yako.',
    audienceLabel: 'Hadhira',
    profileEyebrow: 'Wasifu amilifu',
    languageLabel: 'Lugha',
    newConversation: 'Mazungumzo mapya',
    placeholder:
      'Omba muhtasari wa mahubiri, ibada, mhadhara, somo la mafundisho, au maana rahisi ya aya...',
    helperText: 'Njia uliyochagua itabaki hadi uibadilishe.',
    send: 'Tuma',
    thinking: 'Inafikiri...',
    requestDidNotFinish: 'Ombi halikukamilika vizuri.',
    requestFailed: 'Ujumbe haukutumwa. Angalia muunganisho kisha ujaribu tena.',
    youLabel: 'Wewe',
    assistantLabel: 'Mfasiri wa Kireformed',
    starterLabels: ['Muhtasari wa mahubiri', 'Maana ya aya', 'Ibada'],
    profileOnline:
      'Vyanzo vya kihafidhina vinavyotegemewa hutafutwa moja kwa moja wakati wa mazungumzo inapohitajika.',
    audiences: {
      adult: 'Mahubiri ya Jumapili / darasa la watu wazima',
      children: 'Watoto / ibada ya familia',
      personal: 'Ibada binafsi',
      advanced: 'Mwalimu wa juu / seminari',
    },
    modes: {
      nt: {
        label: 'Mafundisho ya Ufafanuzi ya Agano Jipya',
        summary: 'Ufafanuzi wa kihafidhina wa Agano Jipya wenye mkazo wazi unaotokana na maandiko.',
      },
      puritan: {
        label: 'Puritan',
        summary:
          'Calvin, Luther, Wapuritani, na Edwards katika mkondo wa kale wa Kireformed.',
      },
      all: {
        label: 'Mafundisho Yote ya Ufafanuzi',
        summary:
          'Mafundisho ya kihafidhina ya ufafanuzi yanayounganisha sauti za kale na za kisasa za Kireformed.',
      },
    },
    welcome: {
      nt:
        'Njia ya Agano Jipya imefungwa. Omba maana ya aya, muhtasari wa mahubiri, mhadhara, au muhtasari wa mafundisho, nami nitajibu kwa uwazi na kwa moyo wa kichungaji.',
      puritan:
        'Njia ya Puritan imefungwa. Omba andiko, fundisho, ibada, au suala la kichungaji, nami nitajibu katika mkondo huo.',
      all:
        'Njia ya Mafundisho Yote ya Ufafanuzi imefungwa. Omba mahubiri, ibada, muhtasari wa mafundisho, au maana rahisi ya aya, nami nitakusaidia moja kwa moja.',
    },
    starterPrompts: {
      nt: [
        'Andaa muhtasari wa mahubiri kwa Warumi 3:21-26.',
        'Nipe maana ya wazi ya Yohana 10:27-30.',
        'Jenga ibada ya Agano Jipya juu ya Wafilipi 2:5-11.',
      ],
      puritan: [
        'Nipe maelezo ya Kipuritan ya Zaburi 51.',
        'Onyesha jinsi Calvin na Wapuritani wanavyoshughulikia uhakika wa wokovu.',
        'Andika ibada fupi ya familia juu ya kumcha Bwana.',
      ],
      all: [
        'Andaa muhtasari wa mahubiri kwa Warumi 3:21-26.',
        'Leta pamoja sauti za kale na za kisasa za Kireformed kuhusu kuhesabiwa haki.',
        'Tengeneza ibada fupi ya familia juu ya Zaburi 23.',
      ],
    },
  },
  rw: {
    label: 'Kinyarwanda Kinyarwanda',
    htmlLang: 'rw',
    dir: 'ltr',
    brandEyebrow: 'Umusobanuzi wa Reforme',
    siteTitle: 'Inyigisho ya Bibiliya Isobanura Ibyanditswe',
    lead:
      "Umufasha ushyushye wo kwiga Bibiliya no kwigisha, uhinduka bitewe n'uburyo wahisemo, ugendera ku biganiro by'Abareforme kandi byubahiriza insobanuro y'Ibyanditswe.",
    modeSectionTitle: "Uburyo bwo kwigisha",
    modeSectionIntro: "Hitamo umurongo ugomba kuyobora ikiganiro cyose.",
    setupSectionTitle: "Igenamiterere ry'ikiganiro",
    setupSectionIntro: "Hindura imvugo ijyane n'abakumva bawe.",
    audienceLabel: "Abumva",
    profileEyebrow: "Umwirondoro ukora",
    languageLabel: "Ururimi",
    newConversation: "Ikiganiro gishya",
    placeholder:
      "Saba gahunda y'inyigisho, devotion, inyigisho, amasomo y'inyigisho z'ukwizera, cyangwa igisobanuro cyoroshye cy'umurongo...",
    helperText: "Uburyo wahisemo buzaguma uko buri kugeza igihe ubuhinduriye.",
    send: "Ohereza",
    thinking: "Biratekerezwa...",
    requestDidNotFinish: "Icyo wasabye nticyarangiye neza.",
    requestFailed: "Ubutumwa ntibwoherejwe. Reba uko internet ihagaze wongere ugerageze.",
    youLabel: "Wowe",
    assistantLabel: "Umusobanuzi wa Reforme",
    starterLabels: ["Gahunda y'inyigisho", "Ibisobanuro by'umurongo", 'Devotion'],
    profileOnline:
      "Aho bikenewe, hifashishwa imbuga zizewe kandi zihamye mu gihe cy'ikiganiro.",
    audiences: {
      adult: "Inyigisho yo ku Cyumweru / ishuri ry'abakuru",
      children: "Abana / devotion y'umuryango",
      personal: "Devotion bwite",
      advanced: "Umwigisha wo hejuru / seminari",
    },
    modes: {
      nt: {
        label: "Inyigisho Isobanura Ibyanditswe byo mu Isezerano Rishya",
        summary:
          "Insobanuro zihamye z'Isezerano Rishya zifite umurongo usobanutse ushingiye ku nyandiko.",
      },
      puritan: {
        label: "Puritan",
        summary:
          "Kalivini, Luteri, Abapuritani, na Edwards mu murongo wa kera wa Reforme.",
      },
      all: {
        label: "Inyigisho Zose zisobanura Ibyanditswe",
        summary:
          "Inyigisho zihamye zihuza amajwi ya Reforme ya kera n'aya none.",
      },
    },
    welcome: {
      nt:
        "Uburyo bw'Isezerano Rishya bwamaze gufungwa. Saba ibisobanuro by'umurongo, gahunda y'inyigisho, lecture, cyangwa incamake y'inyigisho, nanjye ndasubiza mu buryo busobanutse kandi bw'ubushumba.",
      puritan:
        "Uburyo bwa Puritan bwamaze gufungwa. Saba umurongo, inyigisho, devotion, cyangwa ikibazo cy'ubushumba, nanjye ndasubiza muri uwo murongo.",
      all:
        "Uburyo bw'Inyigisho Zose zisobanura Ibyanditswe bwamaze gufungwa. Saba inyigisho, devotion, incamake y'inyigisho, cyangwa igisobanuro cyoroshye cy'umurongo, nanjye ndagufasha ako kanya.",
    },
    starterPrompts: {
      nt: [
        "Tegura gahunda y'inyigisho kuri Abaroma 3:21-26.",
        "Mpa igisobanuro gisobanutse cya Yohana 10:27-30.",
        "Tegura devotion yo mu Isezerano Rishya kuri Abafilipi 2:5-11.",
      ],
      puritan: [
        "Mpa ibisobanuro bya Puritan kuri Zaburi 51.",
        "Erekana uko Kalivini n'Abapuritani basobanura kwizera ko agakiza gahari.",
        "Andika devotion ngufi y'umuryango ku gutinya Uwiteka.",
      ],
      all: [
        "Tegura gahunda y'inyigisho kuri Abaroma 3:21-26.",
        "Huza amajwi ya Reforme ya kera n'aya none ku bijyanye no gutsindishirizwa.",
        "Tegura devotion ngufi y'umuryango kuri Zaburi 23.",
      ],
    },
  },
  ja: {
    label: 'Japanese 日本語',
    htmlLang: 'ja',
    dir: 'ltr',
    brandEyebrow: '改革派釈解者',
    siteTitle: '聖書釈解教導',
    lead:
      '保守的で釈解的、改革派的な対話のために調整される、温かい聖書学習と教育のアシスタントです。',
    modeSectionTitle: '教導モード',
    modeSectionIntro: '会話全体を導く流れを選んでください。',
    setupSectionTitle: '会話設定',
    setupSectionIntro: '聞き手に合う語り口に整えてください。',
    audienceLabel: '対象',
    profileEyebrow: '現在の設定',
    languageLabel: '言語',
    newConversation: '新しい会話',
    placeholder:
      '説教アウトライン、ディボーション、講義、教理研究、または節の簡明な意味を求めてください...',
    helperText: '選択したモードは、変更するまで固定されます。',
    send: '送信',
    thinking: '考え中...',
    requestDidNotFinish: 'リクエストは正常に完了しませんでした。',
    requestFailed: 'メッセージを送信できませんでした。接続を確認してもう一度お試しください。',
    youLabel: 'あなた',
    assistantLabel: '改革派釈解者',
    starterLabels: ['説教アウトライン', '節の意味', 'ディボーション'],
    profileOnline: '必要なときには、会話中に保守的で信頼できる資料をリアルタイムで探します。',
    audiences: {
      adult: '日曜説教 / 成人クラス',
      children: '子ども / 家庭ディボーション',
      personal: '個人ディボーション',
      advanced: '上級教師 / 神学校',
    },
    modes: {
      nt: {
        label: '新約釈解教導',
        summary: '保守的な新約釈解を中心に、ディスペンセーション主義と千年王国前再臨の傾向を持ちます。',
      },
      puritan: {
        label: 'ピューリタン',
        summary: 'カルヴァン、ルター、ピューリタン、エドワーズの古典的改革派の流れです。',
      },
      all: {
        label: '全釈解教導',
        summary: '古典と現代の改革派の声を統合した保守的な釈解教導です。',
      },
    },
    welcome: {
      nt:
        '新約モードが固定されました。節の意味、説教アウトライン、講義、教理要約を求めてください。明確で牧会的にお答えします。',
      puritan:
        'ピューリタンモードが固定されました。本文、教理、ディボーション、牧会的課題を求めてください。この流れに沿ってお答えします。',
      all:
        '全釈解教導モードが固定されました。説教、ディボーション、教理の総合、または節の簡明な意味を求めてください。すぐにお手伝いします。',
    },
    starterPrompts: {
      nt: [
        'ローマ 3:21-26 の説教アウトラインを準備してください。',
        'ヨハネ 10:27-30 の平易な意味を教えてください。',
        'ピリピ 2:5-11 に基づく新約のディボーションを作ってください。',
      ],
      puritan: [
        '詩篇 51 篇をピューリタン風に説明してください。',
        'カルヴァンとピューリタンが確信をどう扱うかを示してください。',
        '主を恐れることについて短い家庭ディボーションを書いてください。',
      ],
      all: [
        'ローマ 3:21-26 の説教アウトラインを準備してください。',
        '義認について古典と現代の改革派の声をまとめてください。',
        '詩篇 23 篇について短い家庭ディボーションを作ってください。',
      ],
    },
  },
  hi: {
    label: 'Hindi हिन्दी',
    htmlLang: 'hi',
    dir: 'ltr',
    brandEyebrow: 'सुधारित व्याख्याकार',
    siteTitle: 'व्याख्यात्मक बाइबिल शिक्षण',
    lead:
      'एक गर्मजोशीभरा बाइबिल अध्ययन और शिक्षण सहायक, जो आपके चुने हुए मोड के अनुसार काम करता है और संरक्षणवादी, व्याख्यात्मक, सुधारवादी संवाद रखता है।',
    modeSectionTitle: 'शिक्षण मोड',
    modeSectionIntro: 'वह धारा चुनें जो पूरी बातचीत को दिशा दे।',
    setupSectionTitle: 'बातचीत की सेटिंग',
    setupSectionIntro: 'अपने श्रोताओं के अनुसार शैली रखें।',
    audienceLabel: 'श्रोता',
    profileEyebrow: 'सक्रिय प्रोफ़ाइल',
    languageLabel: 'भाषा',
    newConversation: 'नई बातचीत',
    placeholder:
      'किसी उपदेश रूपरेखा, भक्ति, व्याख्यान, सिद्धांत अध्ययन, या किसी पद के सरल अर्थ के लिए पूछें...',
    helperText: 'चुना हुआ मोड तब तक स्थिर रहेगा जब तक आप उसे बदल नहीं देते।',
    send: 'भेजें',
    thinking: 'सोच रहा है...',
    requestDidNotFinish: 'अनुरोध सही ढंग से पूरा नहीं हुआ।',
    requestFailed: 'संदेश भेजा नहीं जा सका। कनेक्शन जांचें और फिर प्रयास करें।',
    youLabel: 'आप',
    assistantLabel: 'सुधारित व्याख्याकार',
    starterLabels: ['उपदेश रूपरेखा', 'पद का अर्थ', 'भक्ति'],
    profileOnline: 'जब आवश्यकता होती है, बातचीत के दौरान विश्वसनीय संरक्षणवादी स्रोतों को लाइव खोजा जाता है।',
    audiences: {
      adult: 'रविवार उपदेश / वयस्क कक्षा',
      children: 'बच्चे / पारिवारिक भक्ति',
      personal: 'व्यक्तिगत भक्ति',
      advanced: 'उन्नत शिक्षक / सेमिनरी',
    },
    modes: {
      nt: {
        label: 'नए नियम का व्याख्यात्मक शिक्षण',
        summary: 'संरक्षणवादी नए नियम की व्याख्या, जिसमें डिस्पेन्सेशनल और प्रीमिलेनियल बल है।',
      },
      puritan: {
        label: 'प्यूरिटन',
        summary: 'कैल्विन, लूथर, प्यूरिटन और एडवर्ड्स की शास्त्रीय सुधारवादी धारा।',
      },
      all: {
        label: 'संपूर्ण व्याख्यात्मक शिक्षण',
        summary: 'शास्त्रीय और आधुनिक सुधारवादी स्वरों को समेटने वाला संरक्षणवादी व्याख्यात्मक शिक्षण।',
      },
    },
    welcome: {
      nt:
        'नया नियम मोड स्थिर कर दिया गया है। पद का अर्थ, उपदेश रूपरेखा, व्याख्यान, या सिद्धांत का सार पूछिए, और मैं स्पष्ट तथा पास्टोरल ढंग से उत्तर दूँगा।',
      puritan:
        'प्यूरिटन मोड स्थिर कर दिया गया है। कोई पाठ, सिद्धांत, भक्ति, या पास्टोरल विषय पूछिए, और मैं उसी धारा में उत्तर दूँगा।',
      all:
        'संपूर्ण व्याख्यात्मक शिक्षण मोड स्थिर कर दिया गया है। उपदेश, भक्ति, सिद्धांत का समन्वय, या किसी पद का सरल अर्थ पूछिए, और मैं सीधे सहायता करूँगा।',
    },
    starterPrompts: {
      nt: [
        'रोमियों 3:21-26 के लिए एक उपदेश रूपरेखा तैयार कीजिए।',
        'यूहन्ना 10:27-30 का सीधा अर्थ बताइए।',
        'फिलिप्पियों 2:5-11 पर नए नियम की एक भक्ति तैयार कीजिए।',
      ],
      puritan: [
        'भजन संहिता 51 की एक प्यूरिटन शैली की व्याख्या दीजिए।',
        'दिखाइए कि कैल्विन और प्यूरिटन आश्वासन को कैसे समझते हैं।',
        'प्रभु के भय पर एक छोटी पारिवारिक भक्ति लिखिए।',
      ],
      all: [
        'रोमियों 3:21-26 के लिए एक उपदेश रूपरेखा तैयार कीजिए।',
        'धर्मी ठहराए जाने पर शास्त्रीय और आधुनिक सुधारवादी स्वरों को साथ लाइए।',
        'भजन संहिता 23 पर एक छोटी पारिवारिक भक्ति तैयार कीजिए।',
      ],
    },
  },
};

const state = loadState();
let isBusy = false;

const brandTitle = document.getElementById('brandTitle');
const brandLead = document.getElementById('brandLead');
const brandCredit = document.getElementById('brandCredit');
const modeSectionTitle = document.getElementById('modeSectionTitle');
const modeSectionIntro = document.getElementById('modeSectionIntro');
const setupSectionTitle = document.getElementById('setupSectionTitle');
const setupSectionIntro = document.getElementById('setupSectionIntro');
const audienceLabel = document.getElementById('audienceLabel');
const languageLabel = document.getElementById('languageLabel');
const profileEyebrow = document.getElementById('profileEyebrow');
const modeButtons = document.getElementById('modeButtons');
const audienceSelect = document.getElementById('audienceSelect');
const languageSelect = document.getElementById('languageSelect');
const profileTitle = document.getElementById('profileTitle');
const profileSummary = document.getElementById('profileSummary');
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const chatForm = document.getElementById('chatForm');
const newConversationButton = document.getElementById('newConversationButton');
const messageTemplate = document.getElementById('messageTemplate');
const starterRow = document.querySelector('.starter-row');
const sendButton = document.getElementById('sendButton');

init();

async function init() {
  state.language = normalizeLanguage(state.language);
  state.audience = normalizeAudience(state.audience);
  sanitizeStoredWelcomeMessage();
  applyInterfaceLanguage();
  attachEvents();
  saveState();
  await refreshStatus();
}

function attachEvents() {
  audienceSelect.addEventListener('change', () => {
    state.audience = normalizeAudience(audienceSelect.value);
    saveState();
    renderProfile();
  });

  languageSelect.addEventListener('change', () => {
    state.language = normalizeLanguage(languageSelect.value);
    updateWelcomeMessage();
    applyInterfaceLanguage();
    saveState();
  });

  chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = messageInput.value.trim();

    if (!message) {
      return;
    }

    appendMessage({ role: 'user', content: message, citations: [] });
    messageInput.value = '';
    renderMessages();

    const history = state.messages
      .slice(0, -1)
      .map(({ role, content }) => ({ role, content }));

    setBusy(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: state.sessionId,
          message,
          mode: state.mode,
          audience: state.audience,
          language: state.language,
          history,
        }),
      });

      const payload = await response.json();
      const copy = getCopy();

      if (!response.ok) {
        appendMessage({
          role: 'assistant',
          content: payload.reply || copy.requestDidNotFinish,
          citations: [],
        });
      } else {
        appendMessage({
          role: 'assistant',
          content: payload.reply,
          citations: payload.citations || [],
        });
      }
    } catch (_error) {
      appendMessage({
        role: 'assistant',
        content: getCopy().requestFailed,
        citations: [],
      });
    } finally {
      setBusy(false);
      renderMessages();
      saveState();
    }
  });

  newConversationButton.addEventListener('click', () => {
    state.messages = [makeWelcomeMessage(state.mode, state.language)];
    saveState();
    renderMessages();
  });
}

function applyInterfaceLanguage() {
  const copy = getCopy();

  document.documentElement.lang = copy.htmlLang;
  document.documentElement.dir = copy.dir;
  document.title = copy.siteTitle;

  brandTitle.textContent = copy.siteTitle;
  brandLead.textContent = copy.lead;
  brandCredit.textContent = brandCredits[state.language] || brandCredits.en;
  modeSectionTitle.textContent = copy.modeSectionTitle;
  modeSectionIntro.textContent = copy.modeSectionIntro;
  setupSectionTitle.textContent = copy.setupSectionTitle;
  setupSectionIntro.textContent = copy.setupSectionIntro;
  audienceLabel.textContent = copy.audienceLabel;
  languageLabel.textContent = copy.languageLabel;
  profileEyebrow.textContent = copy.profileEyebrow;
  newConversationButton.textContent = copy.newConversation;
  messageInput.placeholder = copy.placeholder;

  populateLanguageOptions();
  populateAudienceOptions();
  renderModeButtons();
  renderStarterButtons();
  renderProfile();
  renderMessages();
  setBusy(isBusy);
}

function populateLanguageOptions() {
  languageSelect.innerHTML = '';

  languageOrder.forEach((key) => {
    const copy = translations[key];
    const option = document.createElement('option');
    option.value = key;
    option.textContent = copy.label;
    languageSelect.appendChild(option);
  });

  languageSelect.value = state.language;
}

function populateAudienceOptions() {
  const copy = getCopy();
  audienceSelect.innerHTML = '';

  audienceKeys.forEach((key) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = copy.audiences[key];
    audienceSelect.appendChild(option);
  });

  audienceSelect.value = state.audience;
}

function renderModeButtons() {
  const copy = getCopy();
  modeButtons.innerHTML = '';

  modeKeys.forEach((key) => {
    const mode = copy.modes[key];
    const button = document.createElement('button');
    button.className = `mode-button${state.mode === key ? ' active' : ''}`;
    button.type = 'button';
    button.innerHTML = `<strong>${mode.label}</strong><span>${mode.summary}</span>`;
    button.addEventListener('click', () => {
      state.mode = key;
      updateWelcomeMessage();
      saveState();
      renderModeButtons();
      renderStarterButtons();
      renderProfile();
      renderMessages();
    });
    modeButtons.appendChild(button);
  });
}

function renderProfile() {
  const copy = getCopy();
  profileTitle.textContent = copy.modes[state.mode].label;
  profileSummary.textContent = profileSummaryText(state.mode);
}

function renderStarterButtons() {
  const copy = getCopy();
  starterRow.innerHTML = '';

  copy.starterPrompts[state.mode].forEach((starterText, index) => {
    const button = document.createElement('button');
    button.className = 'starter';
    button.type = 'button';
    button.dataset.starter = starterText;
    button.textContent = starterLabelForIndex(index);
    button.addEventListener('click', () => {
      messageInput.value = starterText;
      messageInput.focus();
    });
    starterRow.appendChild(button);
  });
}

function renderMessages() {
  const copy = getCopy();
  messageList.innerHTML = '';

  state.messages.forEach((message) => {
    const fragment = messageTemplate.content.cloneNode(true);
    const article = fragment.querySelector('.message');
    const role = fragment.querySelector('.message-role');
    const body = fragment.querySelector('.message-body');
    const citations = fragment.querySelector('.message-citations');

    article.classList.add(message.role);
    role.textContent = message.role === 'assistant' ? copy.assistantLabel : copy.youLabel;
    body.textContent = message.content;

    if (message.citations?.length) {
      message.citations.forEach((citation) => {
        const chip = citation.url ? document.createElement('a') : document.createElement('span');
        chip.className = 'message-citation';
        chip.textContent = citation.label || citation.filename || citation.url;

        if (citation.url) {
          chip.href = citation.url;
          chip.target = '_blank';
          chip.rel = 'noreferrer';
        }

        citations.appendChild(chip);
      });
    }

    messageList.appendChild(fragment);
  });

  messageList.scrollTop = messageList.scrollHeight;
}

async function refreshStatus() {
  try {
    const response = await fetch(`/api/status?sessionId=${encodeURIComponent(state.sessionId)}`);
    const payload = await response.json();
    state.session = payload.session;
    state.apiConfigured = payload.apiConfigured;
    saveState();
    renderProfile();
  } catch (_error) {}
}

function appendMessage(message) {
  state.messages.push(message);
}

function setBusy(nextBusy) {
  isBusy = nextBusy;
  sendButton.disabled = nextBusy;
  sendButton.textContent = nextBusy ? getCopy().thinking : getCopy().send;
}

function loadState() {
  const raw = localStorage.getItem(storageKey);

  if (!raw) {
    return defaultState();
  }

  try {
    const parsed = JSON.parse(raw);
    const mode = modeKeys.includes(parsed.mode) ? parsed.mode : 'all';
    const language = normalizeLanguage(parsed.language);

    return {
      sessionId: parsed.sessionId || crypto.randomUUID(),
      mode,
      audience: normalizeAudience(parsed.audience),
      language,
      messages: Array.isArray(parsed.messages) && parsed.messages.length
        ? sanitizeInitialAssistantMessage(parsed.messages, mode, language)
        : [makeWelcomeMessage(mode, language)],
      session: parsed.session || null,
      apiConfigured: Boolean(parsed.apiConfigured),
    };
  } catch (_error) {
    return defaultState();
  }
}

function defaultState() {
  return {
    sessionId: crypto.randomUUID(),
    mode: 'all',
    audience: 'adult',
    language: 'en',
    messages: [makeWelcomeMessage('all', 'en')],
    session: null,
    apiConfigured: false,
  };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function sanitizeStoredWelcomeMessage() {
  state.messages = sanitizeInitialAssistantMessage(state.messages, state.mode, state.language);
}

function makeWelcomeMessage(mode, language = 'en') {
  return {
    role: 'assistant',
    content: getCopy(language).welcome[mode],
    citations: [],
  };
}

function updateWelcomeMessage() {
  if (state.messages.length !== 1 || state.messages[0].role !== 'assistant') {
    return;
  }

  state.messages[0] = makeWelcomeMessage(state.mode, state.language);
}

function sanitizeInitialAssistantMessage(messages, mode, language = 'en') {
  if (!Array.isArray(messages) || !messages.length) {
    return [makeWelcomeMessage(mode, language)];
  }

  const sanitized = [...messages];
  const first = sanitized[0];

  if (
    first?.role === 'assistant' &&
    /(macarthur library|grace to you|gty|local and live online conservative sources|search calvin, luther, the puritans, and edwards online)/i.test(
      first.content || '',
    )
  ) {
    sanitized[0] = makeWelcomeMessage(mode, language);
  }

  return sanitized;
}

function starterLabelForIndex(index) {
  return getCopy().starterLabels[index] || getCopy().starterLabels[0];
}

function profileSummaryText(mode) {
  const copy = getCopy();
  return `${copy.modes[mode].summary} ${copy.profileOnline}`;
}

function getCopy(language = state.language) {
  return translations[normalizeLanguage(language)] || translations.en;
}

function normalizeLanguage(value) {
  const key = String(value || '').trim().toLowerCase();
  return translations[key] ? key : 'en';
}

function normalizeAudience(value) {
  const raw = String(value || '').trim();

  if (audienceKeys.includes(raw)) {
    return raw;
  }

  for (const copy of Object.values(translations)) {
    for (const key of audienceKeys) {
      if (copy.audiences[key] === raw) {
        return key;
      }
    }
  }

  return 'adult';
}
