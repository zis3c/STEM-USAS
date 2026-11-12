export type Lang = 'en' | 'ms'

const en = {
  nav: {
    about: 'About',
    programs: 'Programs',
    projects: 'Projects',
    discord: 'Discord',
    faq: 'FAQ',
    join: 'Join Us',
    cta: 'Join STEM',
  },
  hero: {
    badge: 'Universiti Sultan Azlan Shah · Kuala Kangsar, Perak',
    live: 'ACTIVE ON CAMPUS',
    titleA: 'STEM Association',
    titleB: 'USAS',
    sub: 'A student association at Universiti Sultan Azlan Shah connecting computing, multimedia, and science courses to build practical software tools for campus life.',
    ctaPrimary: 'Join the Club',
    ctaSecondary: 'Explore Projects',
    scroll: 'Scroll to explore',
  },
  stats: {
    members: 'Active Members',
    membersLoading: 'Syncing live count',
    membersUnavailable: 'Live count unavailable',
    products: 'Live Products',
    fee: 'Annual Fee',
    built: 'Student-Built',
  },
  about: {
    eyebrow: 'ABOUT US',
    title: 'One club. Three forces.',
    sub: 'We are the official Science, Technology & Multimedia association of USAS, a community of builders, thinkers and creators.',
    missionLabel: 'OUR MISSION',
    mission:
      'To bridge classroom theory with real-world practice, giving every USAS student the tools, community and confidence to build things that matter.',
    pillars: [
      {
        title: 'Science',
        desc: 'Curiosity first: talks, quizzes and outreach that make theory tangible.',
      },
      {
        title: 'Technology',
        desc: 'Student-built tools: Telegram bots, class timetable utilities, and open-source web apps used on campus.',
      },
      {
        title: 'Multimedia',
        desc: 'Creative media: design, video and digital content that tells our story.',
      },
    ],
  },
  programs: {
    eyebrow: 'FPTM & STEM COURSES',
    title: 'Academic tracks in our community',
    sub: 'Students across these degree and diploma programs connect, collaborate, and register through STEM USAS.',
    items: [
      {
        title: 'Computer Science',
        desc: 'Software engineering, algorithms, and systems development behind our campus bots and web utilities.',
        tags: ['BCS', 'Degree'],
      },
      {
        title: 'Creative Multimedia',
        desc: 'Visual design, interactive media, and digital storytelling supporting club graphics and interfaces.',
        tags: ['BCM', 'Degree'],
      },
      {
        title: 'Information Technology',
        desc: 'Applied IT fundamentals, web systems, and technical problem-solving shared across student peers.',
        tags: ['Dip. IT', 'Diploma'],
      },
      {
        title: 'Multimedia with Da’wah',
        desc: 'Digital content, video, and graphic craft pairing creative production with purposeful communication.',
        tags: ['Dip.MD', 'Diploma'],
      },
      {
        title: 'Agriculture',
        desc: 'Agricultural science and campus sustainability perspectives represented in our member registry.',
        tags: ['BAgr', 'Degree'],
      },
      {
        title: 'Landscape Architecture',
        desc: 'Environmental planning, spatial design, and visualization within our interdisciplinary community.',
        tags: ['BLA', 'Degree'],
      },
    ],
  },
  projects: {
    eyebrow: 'OUR PROJECTS',
    title: 'Built by us, used by everyone',
    sub: 'Real software running for the USAS community. Open source and free forever.',
    live: 'LIVE',
    currentBadge: "YOU'RE HERE",
    currentCta: 'Currently viewing',
    currentReactions: ['Right here', 'Live tab', 'Back up'],
    repo: 'Source',
    try: 'Try it',
    items: [
      {
        name: 'STEM Telebot',
        desc: 'Bilingual Telegram bot that verifies and manages student memberships against Google Sheets, complete with a full admin & broadcast suite.',
        tags: ['Python', 'Telegram Bot', 'Google Sheets'],
        repo: 'https://github.com/zis3c/STEM-Telebot',
        link: 'https://t.me/stemusasbot',
      },
      {
        name: 'USAS Assignment Notifier',
        desc: 'Secure async bot that watches the LMS and pings you 3 days, 2 days and 24 hours before every deadline, with credentials encrypted end-to-end.',
        tags: ['Python', 'Asyncio', 'Fernet'],
        repo: 'https://github.com/zis3c/USAS-Assignment-Notifier',
        link: 'https://t.me/usas_duebot',
      },
      {
        name: 'USAS Class Timetable',
        desc: 'Glassmorphic PWA timetable portal with live next-class tracking, clash detection, PDF/ICS exports and lockscreen wallpapers.',
        tags: ['React', 'TypeScript', 'PWA'],
        repo: 'https://github.com/zis3c/USAS-Class-Timetable',
        link: 'https://usas-class-timetable.pages.dev',
      },
      {
        name: 'STEM USAS Web',
        desc: 'Official STEM USAS portal you are browsing right now, synced with live membership stats and bilingual dark/light themes.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/zis3c/STEM-Web',
        link: '#top',
      },
    ],
  },
  join: {
    eyebrow: 'CONTACT & JOIN',
    title: 'Ready to build with us?',
    sub: 'Membership registration is open for all USAS students. Fill in the form below to get started.',
    form: 'Registration Form',
    github: 'GitHub',
    telegram: 'Telegram',
    locationLabel: 'FIND US',
    location: 'Universiti Sultan Azlan Shah, Kuala Kangsar, Perak',
    note: 'If you have any questions, reach out to us on Instagram.',
  },
  footer: {
    tagline: 'Built by students, powered by curiosity.',
    rights: 'All rights reserved.',
    made: 'Designed & built by the STEM Tech Team',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Got questions? We got answers.',
    items: [
      {
        q: 'Do I need to be an IT student to join?',
        a: 'Membership is open exclusively to students under the Faculty of Management & Information Technology (FPTM).',
      },
      {
        q: 'How much is the membership fee?',
        a: 'The membership fee is RM 10 per year.',
      },
      {
        q: 'How do I get my membership ID?',
        a: 'After registering through the form and receiving approval, verify with @stemusasbot on Telegram using your matric number and last 4 IC digits.',
      },
    ],
  },
  discord: {
    eyebrow: 'COMMUNITY',
    title: 'STEM USAS Discord',
    sub: 'Connect with members, ask for study help, and unlock STEM-only channels with your membership ID.',
    ctaDiscord: 'Join Discord Server',
    ctaBot: 'Get STEM ID (@stemusasbot)',
    cardLabel: 'OFFICIAL SERVER',
    cardDesc: 'Open to all USAS students, with locked channels verified by your STEM membership ID.',
    pillars: [
      {
        title: 'Join & Intro',
        desc: 'Enter the server, tick agree in #rules, and send one short intro in #pengenalan.',
      },
      {
        title: 'Verify STEM ID',
        desc: 'In #pengesahan-ahli, click Verify Membership and enter your ID from @stemusasbot.',
      },
      {
        title: 'Server Channels',
        desc: 'Hangout (#general, #memes, #art), STEM-only (#stem-chat, #projects, #study-help), Voice & #tiket.',
      },
    ],
  },
  notFound: {
    badge: 'PAGE_NOT_FOUND',
    desc: 'Oops! The page you\'re looking for doesn\'t exist or has been moved to another dimension.',
    cta: 'Return to Base',
  },
}

export type Dict = typeof en

const ms: Dict = {
  nav: {
    about: 'Tentang',
    programs: 'Program',
    projects: 'Projek',
    discord: 'Discord',
    faq: 'FAQ',
    join: 'Sertai',
    cta: 'Sertai STEM',
  },
  hero: {
    badge: 'Universiti Sultan Azlan Shah · Kuala Kangsar, Perak',
    live: 'AKTIF DI KAMPUS',
    titleA: 'Persatuan STEM',
    titleB: 'USAS',
    sub: 'Persatuan pelajar di Universiti Sultan Azlan Shah yang menghimpunkan kursus pengkomputeran, multimedia kreatif dan sains untuk membina projek perisian bagi komuniti kampus.',
    ctaPrimary: 'Sertai Kami',
    ctaSecondary: 'Terokai Projek',
    scroll: 'Tatal untuk terokai',
  },
  stats: {
    members: 'Ahli Aktif',
    membersLoading: 'Mengemas kini kiraan',
    membersUnavailable: 'Kiraan langsung tidak tersedia',
    products: 'Produk Live',
    fee: 'Yuran Tahunan',
    built: 'Dibina Pelajar',
  },
  about: {
    eyebrow: 'TENTANG KAMI',
    title: 'Satu persatuan. Tiga bidang.',
    sub: 'Kami ialah persatuan rasmi Sains, Teknologi & Multimedia USAS, sebuah komuniti pembina, pemikir dan kreatif.',
    missionLabel: 'MISI KAMI',
    mission:
      'Menjambatani teori kelas dengan amalan dunia sebenar, memberi setiap pelajar USAS alat, komuniti dan keyakinan untuk membina sesuatu yang bermakna.',
    pillars: [
      {
        title: 'Sains',
        desc: 'Rasa ingin tahu diutamakan: ceramah, kuiz dan program kemasyarakatan yang menjadikan teori lebih nyata.',
      },
      {
        title: 'Teknologi',
        desc: 'Alatan dibina pelajar: bot Telegram, utiliti jadual kelas dan aplikasi web open source untuk kegunaan kampus.',
      },
      {
        title: 'Multimedia',
        desc: 'Media kreatif: reka bentuk, video dan kandungan digital yang menceritakan kisah kami.',
      },
    ],
  },
  programs: {
    eyebrow: 'KURSUS FPTM & STEM',
    title: 'Aliran pengajian dalam komuniti kami',
    sub: 'Pelajar daripada program ijazah dan diploma berikut berdaftar serta saling berhubung melalui STEM USAS.',
    items: [
      {
        title: 'Sains Komputer',
        desc: 'Kejuruteraan perisian, algoritma dan pembangunan sistem di sebalik bot serta utiliti web kampus kami.',
        tags: ['BCS', 'Ijazah'],
      },
      {
        title: 'Multimedia Kreatif',
        desc: 'Reka bentuk visual, media interaktif dan penceritaan digital untuk grafik serta antara muka kelab.',
        tags: ['BCM', 'Ijazah'],
      },
      {
        title: 'Teknologi Maklumat',
        desc: 'Asas IT gunaan, sistem web dan penyelesaian masalah teknikal yang dikongsi sesama rakan pelajar.',
        tags: ['Dip. IT', 'Diploma'],
      },
      {
        title: 'Multimedia Dengan Dakwah',
        desc: 'Penghasilan kandungan digital, video dan grafik yang menggabungkan seni media dengan mesej bermakna.',
        tags: ['Dip.MD', 'Diploma'],
      },
      {
        title: 'Pertanian',
        desc: 'Sains pertanian dan perspektif kelestarian kampus yang turut diwakili dalam rekod keahlian kami.',
        tags: ['BAgr', 'Ijazah'],
      },
      {
        title: 'Seni Bina Landskap',
        desc: 'Perancangan ruang, reka bentuk persekitaran dan visualisasi dalam komuniti pelajar rentas bidang.',
        tags: ['BLA', 'Ijazah'],
      },
    ],
  },
  projects: {
    eyebrow: 'PROJEK KAMI',
    title: 'Dibina oleh kami, digunakan semua orang',
    sub: 'Perisian sebenar yang berjalan untuk komuniti USAS. Open source dan percuma selamanya.',
    live: 'LIVE',
    currentBadge: 'DI SINI',
    currentCta: 'Sedang dilayari',
    currentReactions: ['Inilah dia', 'Aktif kini', 'Ke atas'],
    repo: 'Kod Sumber',
    try: 'Cuba',
    items: [
      {
        name: 'STEM Telebot',
        desc: 'Bot Telegram dwibahasa yang mengesahkan dan mengurus keahlian pelajar melalui Google Sheets, lengkap dengan suite admin & broadcast.',
        tags: ['Python', 'Bot Telegram', 'Google Sheets'],
        repo: 'https://github.com/zis3c/STEM-Telebot',
        link: 'https://t.me/stemusasbot',
      },
      {
        name: 'USAS Assignment Notifier',
        desc: 'Bot async selamat yang memantau LMS dan memberi amaran 3 hari, 2 hari dan 24 jam sebelum tarikh akhir, dengan kredensial yang disulitkan sepenuhnya.',
        tags: ['Python', 'Asyncio', 'Fernet'],
        repo: 'https://github.com/zis3c/USAS-Assignment-Notifier',
        link: 'https://t.me/usas_duebot',
      },
      {
        name: 'USAS Class Timetable',
        desc: 'Portal jadual waktu PWA bergaya glassmorphic dengan penjejakan kelas seterusnya secara langsung, pengesanan clash, eksport PDF/ICS dan wallpaper skrin lock.',
        tags: ['React', 'TypeScript', 'PWA'],
        repo: 'https://github.com/zis3c/USAS-Class-Timetable',
        link: 'https://usas-class-timetable.pages.dev',
      },
      {
        name: 'STEM USAS Web',
        desc: 'Portal rasmi STEM USAS yang anda sedang layari sekarang, disambung ke kiraan ahli langsung serta mod gelap dan cerah dwibahasa.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        repo: 'https://github.com/zis3c/STEM-Web',
        link: '#top',
      },
    ],
  },
  join: {
    eyebrow: 'KONTAK & SERTAI',
    title: 'Sedia untuk membina bersama kami?',
    sub: 'Pendaftaran keahlian kini dibuka untuk semua pelajar USAS. Isi borang di bawah untuk bermula.',
    form: 'Borang Pendaftaran',
    github: 'GitHub',
    telegram: 'Telegram',
    locationLabel: 'TEMUI KAMI',
    location: 'Universiti Sultan Azlan Shah, Kuala Kangsar, Perak',
    note: 'Jika anda ada sebarang pertanyaan, DM kami di Instagram.',
  },
  footer: {
    tagline: 'Dibina oleh pelajar, dipacu sifat ingin tahu.',
    rights: 'Hak cipta terpelihara.',
    made: 'Direka & dibina oleh Pasukan Teknologi STEM',
  },
  faq: {
    eyebrow: 'SOALAN LAZIM',
    title: 'Ada soalan? Kami ada jawapan.',
    items: [
      {
        q: 'Kena ambil kos IT ke baru boleh join?',
        a: 'Keahlian kelab hanya dibuka untuk pelajar di bawah Fakulti Pengurusan dan Teknologi Maklumat (FPTM) sahaja.',
      },
      {
        q: 'Berapa yuran pendaftaran kelab?',
        a: 'Yuran keahlian adalah sebanyak RM 10 untuk setahun.',
      },
      {
        q: 'Macam mana nak dapatkan ID keahlian?',
        a: 'Selepas mendaftar melalui borang dan permohonan diluluskan, sahkan nombor matrik serta 4 digit terakhir IC di bot Telegram @stemusasbot.',
      },
    ],
  },
  discord: {
    eyebrow: 'KOMUNITI',
    title: 'Discord Rasmi STEM USAS',
    sub: 'Berhubung dengan ahli lain, tanya soalan study, dan buka saluran khas ahli STEM menggunakan ID keahlian.',
    ctaDiscord: 'Masuk Server Discord',
    ctaBot: 'Dapatkan ID (@stemusasbot)',
    cardLabel: 'SERVER RASMI',
    cardDesc: 'Terbuka untuk pelajar USAS, dengan saluran khas yang disahkan melalui ID keahlian STEM.',
    pillars: [
      {
        title: 'Masuk & Intro',
        desc: 'Sertai server, tekan setuju di #rules, dan hantar satu intro ringkas di #pengenalan.',
      },
      {
        title: 'Sahkan ID STEM',
        desc: 'Di #pengesahan-ahli, klik Verify Membership dan masukkan ID daripada @stemusasbot.',
      },
      {
        title: 'Saluran Server',
        desc: 'Lepak (#general, #memes, #art), khas STEM (#stem-chat, #projects, #study-help), Voice & #tiket.',
      },
    ],
  },
  notFound: {
    badge: 'HALAMAN_TIDAK_DIJUMPAI',
    desc: 'Alamak! Halaman yang anda cari tidak wujud atau telah dipindahkan ke dimensi lain.',
    cta: 'Kembali ke Laman Utama',
  },
}

export const translations: Record<Lang, Dict> = { en, ms }
