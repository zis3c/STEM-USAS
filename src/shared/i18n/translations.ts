export type Lang = 'en' | 'ms'

const en = {
  nav: {
    about: 'About',
    programs: 'Programs',
    projects: 'Projects',
    hosting: 'Hosting',
    team: 'Team',
    faq: 'FAQ',
    join: 'Join Us',
    cta: 'Join STEM',
  },
  hero: {
    badge: 'PERSATUAN SAINS TEKNOLOGI & MULTIMEDIA',
    live: 'ACTIVE ON CAMPUS',
    titleA: 'Where ideas become',
    titleB: 'innovation.',
    sub: 'STEM USAS is the student association for Science, Technology & Multimedia at Universiti Sultan Azlan Shah. We run events, ship real software, and host student projects for free.',
    ctaPrimary: 'Join the Club',
    ctaSecondary: 'Explore Projects',
    scroll: 'Scroll to explore',
  },
  stats: {
    members: 'Active Members',
    products: 'Live Products',
    events: 'Annual Events',
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
        desc: 'Hands-on builds: coding workshops, hackathons and products shipped to campus.',
      },
      {
        title: 'Multimedia',
        desc: 'Creative media: design, video and digital content that tells our story.',
      },
    ],
  },
  programs: {
    eyebrow: 'PROGRAMS & ACTIVITIES',
    title: 'What we do all year',
    sub: 'From your first “Hello, World” to full-blown competitions, there is a place for you here.',
    items: [
      {
        title: 'Coding Workshops',
        desc: 'Web dev, Python and Git fundamentals. Beginner friendly, laptop required.',
        tags: ['Beginner Friendly', 'Monthly'],
      },
      {
        title: 'Hackathons & Contests',
        desc: 'Team-based build sprints and science competitions with real prizes on the line.',
        tags: ['Semester', 'Team-based'],
      },
      {
        title: 'Tech Talks',
        desc: 'Industry speakers, alumni stories and career roadmaps, straight to the point.',
        tags: ['Talks', 'Networking'],
      },
      {
        title: 'STEM Outreach',
        desc: 'Bringing science demos and exhibitions to schools around Perak.',
        tags: ['Community', 'Outreach'],
      },
      {
        title: 'Media & Design',
        desc: 'Posters, aftermovies and campaign content produced by our creative crew.',
        tags: ['Creative', 'Portfolio'],
      },
      {
        title: 'Study & Mentorship',
        desc: 'Peer study groups and senior mentoring for the toughest courses on campus.',
        tags: ['Weekly', 'Peer-led'],
      },
    ],
  },
  projects: {
    eyebrow: 'OUR PROJECTS',
    title: 'Built by us, used by everyone',
    sub: 'Real software running for the USAS community. Open source and free forever.',
    live: 'LIVE',
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
    ],
  },
  hosting: {
    eyebrow: 'WEB SERVICE',
    title: 'Got an FYP? Host it here for free.',
    sub: 'The STEM server exists to serve students. Deploy your final year project or portfolio with HTTPS on our infrastructure, guided by our dev team.',
    features: [
      'Free HTTPS subdomain for every student project',
      'Static & SPA deployment on nginx',
      'Hands-on guidance from the STEM dev team',
      'Reliable uptime, monitored 24/7',
    ],
    steps: [
      {
        title: 'Prepare your build',
        desc: 'Finish your project and produce a production build (dist/ or static files).',
      },
      {
        title: 'Ping us on Telegram',
        desc: 'Send your request with the repo link to the STEM dev team.',
      },
      {
        title: 'Go live',
        desc: 'We deploy to the STEM server and hand you your URL.',
      },
    ],
    cta: 'Request Hosting',
    terminal: {
      line1: '$ git push stem main',
      line2: '→ building project…',
      line3: '✓ deployed to the STEM server',
      line4: '✓ your FYP is live, with HTTPS',
    },
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
  team: {
    eyebrow: 'OUR TEAM',
    title: 'Meet the minds behind STEM',
    sub: 'Passionate students building the tech ecosystem in USAS.',
    roles: {
      president: 'President',
      pa: 'PA President',
      secretary: 'Secretary',
    },
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
        q: 'How do I request FYP web hosting?',
        a: 'Reach out to our team directly on Telegram at <a href="https://t.me/STEMUSAS" target="_blank" class="text-stem-gold hover:underline">t.me/STEMUSAS</a> and provide your GitHub repository link. We will guide you through the rest.',
      },
      {
        q: 'When are your regular meetups?',
        a: 'We usually hold workshops and meetups twice a month.',
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
    hosting: 'Hosting',
    team: 'Pasukan',
    faq: 'FAQ',
    join: 'Sertai',
    cta: 'Sertai STEM',
  },
  hero: {
    badge: 'PERSATUAN SAINS TEKNOLOGI & MULTIMEDIA',
    live: 'AKTIF DI KAMPUS',
    titleA: 'Di sinilah idea menjadi',
    titleB: 'inovasi.',
    sub: 'STEM USAS ialah persatuan pelajar Sains, Teknologi & Multimedia Universiti Sultan Azlan Shah. Kami menganjurkan program, membangunkan perisian sebenar, dan menyediakan pengehosan percuma untuk projek pelajar.',
    ctaPrimary: 'Sertai Kami',
    ctaSecondary: 'Terokai Projek',
    scroll: 'Tatal untuk terokai',
  },
  stats: {
    members: 'Ahli Aktif',
    products: 'Produk Live',
    events: 'Acara Tahunan',
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
        desc: 'Pembinaan hands-on: bengkel pengaturcaraan, hackathon dan produk digital untuk kampus.',
      },
      {
        title: 'Multimedia',
        desc: 'Media kreatif: reka bentuk, video dan kandungan digital yang menceritakan kisah kami.',
      },
    ],
  },
  programs: {
    eyebrow: 'PROGRAM & AKTIVITI',
    title: 'Apa yang kami buat sepanjang tahun',
    sub: 'Dari “Hello, World” pertama sehinggalah ke pertandingan sebenar, ada tempat untuk anda di sini.',
    items: [
      {
        title: 'Bengkel Pengaturcaraan',
        desc: 'Asas pembangunan web, Python dan Git. Sesuai untuk pemula, bawa laptop sahaja.',
        tags: ['Mesra Pemula', 'Bulanan'],
      },
      {
        title: 'Hackathon & Pertandingan',
        desc: 'Sprint pembinaan secara berpasukan dan pertandingan sains dengan hadiah sebenar.',
        tags: ['Semester', 'Berpasukan'],
      },
      {
        title: 'Tech Talk',
        desc: 'Pembicara industri, kisah alumni dan peta kerjaya, terus kepada inti pati.',
        tags: ['Ceramah', 'Networking'],
      },
      {
        title: 'Outreach STEM',
        desc: 'Membawa demo sains dan pameran ke sekolah-sekolah sekitar Perak.',
        tags: ['Komuniti', 'Outreach'],
      },
      {
        title: 'Media & Reka Bentuk',
        desc: 'Poster, aftermovie dan kandungan kempen hasil karya krew kreatif kami.',
        tags: ['Kreatif', 'Portfolio'],
      },
      {
        title: 'Belajar & Mentoring',
        desc: 'Kumpulan belajar rakan sebaya dan bimbingan senior untuk kursus yang paling mencabar.',
        tags: ['Mingguan', 'Rakan Sebaya'],
      },
    ],
  },
  projects: {
    eyebrow: 'PROJEK KAMI',
    title: 'Dibina oleh kami, digunakan semua orang',
    sub: 'Perisian sebenar yang berjalan untuk komuniti USAS. Open source dan percuma selamanya.',
    live: 'LIVE',
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
    ],
  },
  hosting: {
    eyebrow: 'KHIDMAT WEB',
    title: 'Ada FYP? Hoskan di sini secara percuma.',
    sub: 'Pelayan STEM wujud untuk kemudahan pelajar. Sebarkan projek tahun akhir atau portfolio anda dengan HTTPS di infrastruktur kami, dibimbing oleh pasukan pembangunan STEM.',
    features: [
      'Subdomain HTTPS percuma untuk setiap projek pelajar',
      'Deploy statik & SPA di atas nginx',
      'Bimbingan langsung daripada pasukan dev STEM',
      'Uptime boleh dipercayai, dipantau 24/7',
    ],
    steps: [
      {
        title: 'Sediakan build anda',
        desc: 'Siapkan projek dan hasilkan build produksi (dist/ atau fail statik).',
      },
      {
        title: 'Hubungi kami di Telegram',
        desc: 'Hantar permohonan bersama pautan repo kepada pasukan dev STEM.',
      },
      {
        title: 'Terus live',
        desc: 'Kami deploy ke server STEM dan serahkan URL anda.',
      },
    ],
    cta: 'Mohon Hosting',
    terminal: {
      line1: '$ git push stem main',
      line2: '→ membina projek…',
      line3: '✓ siap di-deploy ke server STEM',
      line4: '✓ FYP anda sudah live dengan HTTPS',
    },
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
  team: {
    eyebrow: 'PASUKAN KAMI',
    title: 'Kenali barisan pimpinan STEM',
    sub: 'Pelajar bersemangat yang membina ekosistem teknologi di USAS.',
    roles: {
      president: 'Presiden',
      pa: 'PA Presiden',
      secretary: 'Setiausaha',
    },
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
        q: 'Macam mana nak mohon hosting FYP?',
        a: 'Hubungi pasukan kami secara terus melalui Telegram di <a href="https://t.me/STEMUSAS" target="_blank" class="text-stem-gold hover:underline">t.me/STEMUSAS</a> dan berikan pautan repositori GitHub anda. Kami akan bantu uruskan selebihnya.',
      },
      {
        q: 'Bila perjumpaan kelab diadakan?',
        a: 'Kami biasanya mengadakan bengkel dan perjumpaan sebanyak 2 kali setiap bulan.',
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
