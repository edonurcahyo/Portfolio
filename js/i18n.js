/* =========================================================
   Translations — ID (default) / EN
   Keys are grouped by page. Elements are matched via
   data-i18n="key" (textContent), data-i18n-html="key"
   (innerHTML, for text that contains markup like <br>/<span>),
   data-i18n-placeholder="key" (input/textarea placeholder),
   atau data-i18n-href="key" (atribut href).
   ========================================================= */
const translations = {
  id: {
    /* nav */
    "preloader.status": "Menyiapkan portofolio",
    "nav.home": "Beranda",
    "nav.projects": "Proyek",
    "nav.certificates": "Sertifikat",
    "nav.contact": "Kontak",
    "nav.aria": "Ganti bahasa",
    "nav.main": "Navigasi utama",
    "nav.open": "Buka menu",
    "nav.close": "Tutup menu",
    "a11y.skip": "Lewati ke konten",
    "lightbox.label": "Pratinjau gambar",
    "lightbox.close": "Tutup pratinjau gambar",
    "contact.error.required": "Harap isi semua kolom.",

    "home.new.name": "Membangun<br>web yang <span class=\"name-highlight\">bermakna.</span>",
    "home.new.role": "Hendrikus Christianto N. Olmedo · Pengembang Web Full-Stack",
    "home.new.lede": "Lulusan Teknik Informatika ITATS dengan minat pada produk digital yang mudah digunakan, didukung fondasi full-stack Laravel dan React.",
    "home.new.location": "Berbasis di Surabaya, Indonesia",
    "home.new.stat.projects": "PROYEK PILIHAN",
    "home.new.stat.gpa": "IPK",
    "home.new.stat.focus": "FOKUS",
    "home.new.stat.degree": "PENDIDIKAN",
    "home.new.degree": "Teknik Informatika · ITATS",
    "home.new.portrait": "Pengembang Software / Web",
    "home.new.summary": "Ringkasan profil",
    "home.new.techstack": "Teknologi yang digunakan",
    "home.new.portrait.alt": "Potret Hendrikus Christianto N. Olmedo",
    "home.new.about.alt": "Hendrikus Christianto N. Olmedo",
    "home.new.project.barbershop.alt": "Pratinjau sistem reservasi potong rambut",
    "home.new.project.wifi.alt": "Pratinjau sistem manajemen WiFi",
    "home.new.focus": "BIDANG",
    "home.new.tools": "TEKNOLOGI",
    "home.new.work.heading": "Beberapa hal yang telah saya bangun.",
    "home.new.work.all": "Semua proyek",
    "home.new.work.details": "Detail proyek",
    "home.project.publishflow.eyebrow": "Proyek lainnya · 03",
    "home.project.publishflow.title": "Publish Flow",
    "home.project.publishflow.desc": "Aplikasi Laravel yang berfokus pada alur publikasi konten yang lebih terstruktur.",
    "home.project.publishflow.action": "Tanya tentang proyek",
    "home.project.publishflow.code": "Contoh · ProfileController.php",
    "home.new.cert.heading": "Perjalanan belajar, selangkah demi selangkah.",
    "home.new.cert.description": "Lihat sertifikat dan rekam jejak pembelajaran saya.",

    "p1.category": "Proyek Skripsi",
    "p1.title": "Sistem Manajemen Reservasi Potong Rambut",
    "p1.feature.desc": "Aplikasi reservasi berbasis web dengan backend API dan frontend terpisah.",
    "p2.category": "Proyek Akademik",
    "p2.title": "Sistem Inventaris & Pencatatan Keuangan",
    "p3.category": "Proyek Mandiri",
    "p3.title": "Website Resep Makanan",
    "p4.category": "Proyek Mandiri",
    "p4.title": "Sistem Manajemen WiFi",
    "p4.feature.desc": "Sistem manajemen jaringan dan pengguna dengan dashboard analitik.",
    "projects.repo.backend": "Backend API",
    "projects.repo.frontend": "Aplikasi frontend",

    /* home */
    "home.title": "Hendrikus Christianto N. Olmedo — Software / Web Developer",
    "home.eyebrow": "Software / Web Developer — Surabaya, ID",
    "home.hero.h1": "Hendrikus Christianto<br>N. Olmedo",
    "home.hero.role": "Hendrikus Christianto N. Olmedo — Fresh Graduate, Informatika ITATS",
    "home.hero.lede": "Fresh graduate S1 Teknik Informatika dari Institut Teknologi Adhi Tama Surabaya (IPK 3.51) dengan fokus pada pengembangan web full-stack menggunakan Laravel dan React.",
    "home.hero.cta1": "Lihat Proyek",
    "home.hero.cta2": "Hubungi Saya",
    "home.hero.cv": "Download CV",
    "home.hero.cv.href": "assets/Hendrikus_WebDeveloper_CV-ID.pdf",
    "home.hero.scroll": "Gulir ke bawah",
    "home.hero.label": "FULL-STACK DEVELOPER · SURABAYA, INDONESIA",
    "home.hero.tagline": "Saya membangun produk digital yang bermakna, dari antarmuka yang mudah digunakan hingga sistem full-stack yang andal.",
    "home.hero.selected": "LIHAT PROYEK PILIHAN",
    "home.hero.profile": "Profil profesional",
    "home.hero.stat.role": "PERAN",
    "home.hero.stat.role.value": "Pengembang Full-stack",
    "home.hero.stat.focus": "FOKUS",
    "home.hero.stat.focus.value": "Web · Aplikasi · Laravel",
    "home.hero.stat.status": "STATUS",
    "home.hero.stat.status.value": "Tersedia untuk bekerja",
    "home.hero.stat.location": "BERLOKASI DI",
    "home.hero.stat.location.value": "Surabaya, Indonesia",
    "home.hero.side1": "PORTOFOLIO — 2026",
    "home.hero.side2": "GULIR KE PROYEK PILIHAN ↓",

    "home.spec1.tag": "◇ PENDIDIKAN",
    "home.spec1.sub": "S1 Teknik Informatika · 2022–2026 · IPK 3.51/4.00",
    "home.spec2.tag": "◇ FOKUS",
    "home.spec2.val": "Full-Stack Web",
    "home.spec2.sub": "Laravel (backend &amp; REST API) + React/TypeScript (frontend)",
    "home.spec3.tag": "◇ LOKASI",
    "home.spec3.sub": "Terbuka untuk kerja remote maupun on-site",
    "home.spec.role": "PERAN",
    "home.spec.focus.val": "Web · Laravel · React",
    "home.spec.status": "STATUS",
    "home.spec.status.val": "Terbuka untuk kerja",

    "home.about.eyebrow": "Tentang",
    "home.about.h2": "Teknologi yang terasa sederhana.",
    "home.about.p": "Saya <strong>Hendrikus</strong>, lulusan Teknik Informatika ITATS dengan IPK 3,51. Saya senang membangun aplikasi web dari analisis kebutuhan hingga pengujian, dengan pengalaman full-stack menggunakan Laravel, React, TypeScript, PHP, dan MySQL.",
    "home.about.p1.tag": "◇ PENDIDIKAN",
    "home.about.p1.li1": "S1 Teknik Informatika, Institut Teknologi Adhi Tama Surabaya (2022–2026)",
    "home.about.p1.li2": "IPK 3.51 / 4.00 — Cum Laude",

    "home.about.p2.tag": "◇ FOKUS",
    "home.about.p2.li1": "Full-Stack Web Development",
    "home.about.p2.li2": "Laravel (backend & REST API)",
    "home.about.p2.li3": "React + TypeScript (frontend)",

    "home.about.p3.tag": "◇ TOOLS & LAINNYA",

    "home.about.stats.ipk.tag": "◇ IPK",
    "home.about.stats.ipk.sub": "Cum Laude",
    "home.about.stats.grad.tag": "◇ LULUS",
    "home.about.stats.grad.sub": "S1 Teknik Informatika",

    "home.stack.eyebrow": "Spesifikasi Teknis",
    "home.stack.h2": "Tech Stack",
    "home.stack.k1": "Bahasa Pemrograman",
    "home.stack.k2": "Framework &amp; Library",
    "home.stack.k3": "Database",
    "home.stack.k4": "Tools &amp; Lainnya",

    "home.cta.h3": "Lihat proyek yang sudah dibangun",
    "home.cta.p": "Sheet proyek lengkap dengan detail teknis ada di halaman Projects.",
    "home.cta.btn": "Buka Projects",

    "tb.name.lbl": "Nama",
    "tb.sheet.lbl": "Sheet",
    "tb.role.lbl": "Peran",
    "tb.role.val": "Pengembang Software / Web",
    "tb.rev.lbl": "Rev.",
    "tb.contact.lbl": "Kontak",
    "tb.sheet.home": "01 / 03 — Beranda",
    "tb.sheet.projects": "02 / 03 — Proyek",
    "tb.sheet.contact": "03 / 03 — Kontak",

    /* projects page */
    "projects.title": "Proyek — Hendrikus Christianto N. Olmedo",
    "projects.eyebrow": "Karya terpilih",
    "projects.h1": "Membangun solusi, satu proyek dalam satu waktu.",
    "projects.lede": "Eksplorasi proyek akademik dan mandiri yang menggabungkan pengembangan web, API, dan pengalaman pengguna.",
    "projects.count.label": "PROYEK",
    "projects.filter.all": "Semua",
    "projects.filter.academic": "Akademik",
    "projects.filter.independent": "Mandiri",
    "projects.repo": "Lihat repositori",
    "projects.image.p1": "Perbesar pratinjau proyek reservasi potong rambut",
    "projects.image.p2": "Perbesar pratinjau sistem inventaris dan keuangan",
    "projects.image.p3": "Perbesar pratinjau website resep makanan",
    "projects.image.p4": "Perbesar pratinjau sistem manajemen WiFi",
    "projects.image.alt.p1": "Tampilan sistem manajemen reservasi potong rambut",
    "projects.image.alt.p2": "Tampilan sistem inventaris dan pencatatan keuangan",
    "projects.image.alt.p3": "Tampilan website resep makanan",
    "projects.image.alt.p4": "Tampilan sistem manajemen WiFi",
    "projects.p": "Proyek yang dirancang &amp; dibangun sendiri, dari desain database sampai antarmuka pengguna.",

    "screenshot.label": "↳ Klik untuk perbesar",

    "p1.subtitle": "Sistem Manajemen Reservasi Potong Rambut",
    "p1.desc": "Aplikasi reservasi jasa potong rambut berbasis web dengan arsitektur terpisah antara backend API dan frontend. Dibangun dari analisis kebutuhan, desain sistem, sampai pengujian menggunakan model Prototype.",
    "p1.li1": "Membangun REST API dengan Laravel (PHP) untuk mengelola data reservasi, jadwal, layanan, dan autentikasi pengguna.",
    "p1.li2": "Membangun antarmuka pengguna dengan React &amp; TypeScript yang responsif dan mudah digunakan untuk pelanggan.",
    "p1.li3": "Merancang skema database MySQL untuk reservasi yang efisien dengan perlindungan dari bentrok jadwal.",

    "p2.subtitle": "Sistem Pencatatan Keuangan &amp; Inventaris",
    "p2.desc": "Sistem berbasis web untuk mencatat transaksi keuangan harian, bulanan, dan tahunan, dilengkapi rekap laporan otomatis.",
    "p2.li1": "Membangun sistem pencatatan transaksi keuangan (harian/bulanan/tahunan) menggunakan Laravel.",
    "p2.li2": "Mengimplementasikan fitur pelaporan otomatis untuk mendukung rekapitulasi data keuangan secara berkala.",

    "p3.subtitle": "Platform Berbagi &amp; Eksplorasi Resep Makanan",
    "p3.desc": "Platform berbagi dan eksplorasi resep makanan dengan fitur pencarian, bookmark, dan manajemen resep (CRUD) yang dibangun dengan PHP Native dan MySQL.",
    "p3.li1": "Membangun sistem manajemen resep dengan operasi CRUD (Create, Read, Update, Delete) menggunakan PHP Native.",
    "p3.li2": "Mengimplementasikan fitur pencarian resep berdasarkan kategori dan kata kunci.",
    "p3.li3": "Membuat sistem bookmark untuk menyimpan resep favorit pengguna.",
    "p3.li4": "Merancang database MySQL untuk menyimpan data resep, kategori, dan bookmark pengguna.",
    "p3.stack": "Stack",

    "p4.subtitle": "Sistem Manajemen WiFi",
    "p4.desc": "Sistem manajemen WiFi berbasis web dengan fitur autentikasi, manajemen pengguna berbasis role, monitoring jaringan, dan dashboard analitik, dibangun dengan Laravel 10 dan Tailwind CSS.",
    "p4.li1": "Membangun sistem autentikasi dan manajemen pengguna dengan role (Admin, Operator, User) menggunakan Laravel Breeze.",
    "p4.li2": "Mengimplementasikan dashboard analitik dengan grafik interaktif untuk monitoring jaringan WiFi.",
    "p4.li3": "Membangun fitur manajemen titik akses WiFi dan pencatatan log koneksi pengguna.",
    "p4.li4": "Merancang database MySQL dengan Eloquent ORM untuk pengelolaan data yang efisien.",
    "p4.stack": "Stack",

    "projects.link": "↳ Lihat repositori di GitHub",

    "projects.cta.h3": "Tertarik berdiskusi lebih lanjut?",
    "projects.cta.p": "Saya terbuka untuk peluang Software/Web Developer, remote maupun on-site.",
    "projects.cta.btn": "Hubungi Saya",

    /* contact page */
    "contact.title": "Kontak — Hendrikus C. N. Olmedo",
    "contact.eyebrow": "Mari mulai percakapan",
    "contact.h1": "Mari terhubung.",
    "contact.p": "Terbuka untuk peluang Software/Web Developer remote maupun on-site. Silakan hubungi lewat form, email, atau GitHub.",

    "contact.card.cta": "Hubungi →",
    "contact.form.eyebrow": "KIRIM PESAN",
    "contact.form.h2": "Punya proyek atau peluang kerja?",

    "contact.lbl.email": "Email",
    "contact.lbl.phone": "Telepon",
    "contact.lbl.github": "GitHub",
    "contact.lbl.location": "Lokasi",
    "contact.val.location": "Surabaya, Jawa Timur, Indonesia",

    "contact.form.name": "Nama",
    "contact.form.email": "Email",
    "contact.form.message": "Pesan",
    "contact.form.ph.name": "Nama Anda",
    "contact.form.ph.email": "email@contoh.com",
    "contact.form.ph.message": "Tulis pesan Anda di sini...",
    "contact.form.btn": "Kirim Pesan",
    "contact.form.note": "Tombol ini akan membuka Gmail dengan pesan yang sudah terisi otomatis ke edonurcahyo25@gmail.com.",

    "certificates.title": "Sertifikat — Hendrikus Olmedo",
    "certificates.brand.aria": "Hendrikus Olmedo — Beranda",
    "certificates.meta.description": "Kumpulan sertifikat pelatihan industri, kompetensi teknis, pembicara seminar, dan kemahiran bahasa Hendrikus Christianto N. Olmedo.",
    "certificates.section": "SERTIFIKAT",
    "certificates.eyebrow": "Pembelajaran & pengembangan",
    "certificates.h1": "Sertifikat & pencapaian.",
    "certificates.lede": "Kumpulan sertifikat pelatihan, kursus, dan pencapaian profesional.",
    "certificates.count.label": "DOKUMEN",
    "certificates.filter.aria": "Filter kategori sertifikat",
    "certificates.grid.aria": "Daftar sertifikat dan pencapaian",
    "certificates.filter.all": "Semua",
    "certificates.filter.course": "Kursus & Sertifikasi",
    "certificates.filter.seminar": "Seminar & Pemateri",
    "certificates.filter.language": "Kemahiran Bahasa",
    "certificates.btn.view": "Buka PDF",
    "certificates.item1.category": "Sertifikasi Kursus",
    "certificates.item1.title": "Interaction Design: Flow",
    "certificates.item1.description": "Sertifikasi perancangan interaksi pengguna (interaction flow), menyelaraskan alur navigasi aplikasi, penyederhanaan task, dan kenyamanan antarmuka web modern.",
    "certificates.item1.preview": "Pratinjau sertifikat Interaction Design: Flow",
    "certificates.item1.download": "Unduh PDF Sertifikat Interaction Design Flow",
    "certificates.item2.category": "Kompetensi Basis Data",
    "certificates.item2.title": "Sertifikat Praktikan Basis Data IX",
    "certificates.item2.description": "Kelulusan praktikum intensif basis data relasional: perancangan ERD, normalisasi tabel, query DDL/DML, fungsi agregasi, subquery, indexing, serta optimasi query database MySQL.",
    "certificates.item2.preview": "Pratinjau sertifikat Praktikan Basis Data IX",
    "certificates.item2.download": "Unduh PDF Sertifikat Praktikan Basis Data IX",
    "certificates.item3.category": "Pemateri / Speaker",
    "certificates.item3.title": "Sertifikat Pemateri: Hasil Karya Pembelajaran",
    "certificates.item3.description": "Sertifikat apresiasi sebagai narasumber/pemateri seminar akademik, mempresentasikan implementasi solusi rekayasa perangkat lunak dan produk sistem informasi di hadapan audiens kampus.",
    "certificates.item3.preview": "Pratinjau sertifikat Pemateri Seminar Hasil Karya Pembelajaran",
    "certificates.item3.download": "Unduh PDF Sertifikat Pemateri Seminar",
    "certificates.item4.category": "Seminar Nasional",
    "certificates.item4.title": "Seminar Nasional SNESTIK",
    "certificates.item4.description": "Partisipasi dalam Seminar Nasional Teknik Elektro, Sistem Informasi, dan Teknik Informatika mengenai riset ilmiah terapan, AI, dan inovasi arsitektur komputasi modern.",
    "certificates.item4.preview": "Pratinjau sertifikat Seminar Nasional SNESTIK",
    "certificates.item4.download": "Unduh PDF Sertifikat Seminar Nasional SNESTIK",
    "certificates.item5.category": "Etika & Karir",
    "certificates.item5.title": "Seminar Professional Manner",
    "certificates.item5.description": "Pelatihan etika profesional dan kesiapan industri: tata cara komunikasi bisnis, etiket kerja tim, manajemen konflik, dan kesiapan adaptasi di lingkungan profesional teknologi.",
    "certificates.item5.preview": "Pratinjau sertifikat Seminar Professional Manner",
    "certificates.item5.download": "Unduh PDF Sertifikat Seminar Professional Manner",
    "certificates.item6.category": "Uji Kemahiran Bahasa",
    "certificates.item6.title": "Test of English as Foreign Language",
    "certificates.item6.description": "Sertifikasi kemahiran bahasa Inggris standar akademik dan profesional, meliputi Listening Comprehension, Structure & Written Expression, serta Reading Comprehension.",
    "certificates.item6.preview": "Pratinjau sertifikat Test of English as Foreign Language",
    "certificates.item6.download": "Unduh PDF Sertifikat TOEFL ITATS",
    "certificates.item7.category": "Pelatihan Bahasa",
    "certificates.item7.title": "The English Training for Freshmen",
    "certificates.item7.description": "Program intensif penguatan komunikasi bahasa Inggris dasar, tata bahasa fungsional, dan kecakapan akademik untuk presentasi dan interaksi di tingkat perguruan tinggi.",
    "certificates.item7.preview": "Pratinjau sertifikat The English Training for Freshmen",
    "certificates.item7.download": "Unduh PDF Sertifikat English Training",
    "certificates.cta.eyebrow": "Kolaborasi & Peluang",
    "certificates.cta.title": "Tertarik dengan kualifikasi dan pengalaman saya?",
    "certificates.cta.desc": "Saya siap berkontribusi pada pengembangan sistem dan aplikasi web tim Anda.",
    "certificates.cta.btn": "Hubungi Saya",
    "certificates.empty.eyebrow": "Ruang sertifikat",
    "certificates.empty.title": "Sertifikat akan ditampilkan di sini.",
    "certificates.empty.description": "Koleksi sertifikat belum tersedia. Silakan kembali lagi untuk melihat pembaruan.",
    "certificates.empty.contact": "Hubungi saya"
  },

  en: {
    "preloader.status": "Preparing portfolio",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "nav.aria": "Switch language",
    "nav.main": "Main navigation",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "a11y.skip": "Skip to content",
    "lightbox.label": "Image preview",
    "lightbox.close": "Close image preview",
    "contact.error.required": "Please fill in all fields.",

    "home.new.name": "Building<br>web that <span class=\"name-highlight\">matters.</span>",
    "home.new.role": "Hendrikus Christianto N. Olmedo · Full-Stack Web Developer",
    "home.new.lede": "An Informatics Engineering graduate from ITATS, focused on accessible digital products and full-stack development with Laravel and React.",
    "home.new.location": "Based in Surabaya, Indonesia",
    "home.new.stat.projects": "SELECTED PROJECTS",
    "home.new.stat.gpa": "GPA",
    "home.new.stat.focus": "FOCUS",
    "home.new.stat.degree": "EDUCATION",
    "home.new.degree": "Informatics Engineering · ITATS",
    "home.new.portrait": "Software / Web Developer",
    "home.new.summary": "Profile summary",
    "home.new.techstack": "Technologies used",
    "home.new.portrait.alt": "Portrait of Hendrikus Christianto N. Olmedo",
    "home.new.about.alt": "Hendrikus Christianto N. Olmedo",
    "home.new.project.barbershop.alt": "Haircut reservation system preview",
    "home.new.project.wifi.alt": "WiFi management system preview",
    "home.new.focus": "FOCUS",
    "home.new.tools": "TECHNOLOGY",
    "home.new.work.heading": "A few things I have built.",
    "home.new.work.all": "All projects",
    "home.new.work.details": "Project details",
    "home.project.publishflow.eyebrow": "Another project · 03",
    "home.project.publishflow.title": "Publish Flow",
    "home.project.publishflow.desc": "A Laravel application focused on making the content publishing process more structured.",
    "home.project.publishflow.action": "Ask about this project",
    "home.project.publishflow.code": "Example · ProfileController.php",
    "home.new.cert.heading": "Learning, one step at a time.",
    "home.new.cert.description": "Explore my certificates and learning journey.",

    "p1.category": "Thesis Project",
    "p1.title": "Haircut Reservation Management System",
    "p1.feature.desc": "A web-based booking application with a separate API backend and frontend.",
    "p2.category": "Academic Project",
    "p2.title": "Inventory & Financial Record-Keeping System",
    "p3.category": "Independent Project",
    "p3.title": "Food Recipe Website",
    "p4.category": "Independent Project",
    "p4.title": "WiFi Management System",
    "p4.feature.desc": "A network and user management system with an analytics dashboard.",
    "projects.repo.backend": "Backend API",
    "projects.repo.frontend": "Frontend app",

    "home.title": "Hendrikus C. N. Olmedo — Software / Web Developer",
    "home.eyebrow": "Software / Web Developer — Surabaya, ID",
    "home.hero.h1": "Hendrikus Christianto<br>N. Olmedo",
    "home.hero.role": "Hendrikus Christianto N. Olmedo — Fresh Graduate, Informatics Engineering, ITATS",
    "home.hero.lede": "Fresh graduate with a Bachelor's degree in Informatics Engineering from Institut Teknologi Adhi Tama Surabaya (GPA: 3.51), specializing in full-stack web development with Laravel and React.",
    "home.hero.cta1": "View Projects",
    "home.hero.cta2": "Contact Me",
    "home.hero.cv": "Download CV",
    "home.hero.cv.href": "assets/Hendrikus_WebDeveloper_CV-EN.pdf",
    "home.hero.scroll": "Scroll Down",
    "home.hero.label": "FULL-STACK DEVELOPER · SURABAYA, INDONESIA",
    "home.hero.tagline": "I build thoughtful digital products, from useful interfaces to dependable full-stack systems.",
    "home.hero.selected": "VIEW SELECTED WORK",
    "home.hero.profile": "Professional profile",
    "home.hero.stat.role": "ROLE",
    "home.hero.stat.role.value": "Full-stack Developer",
    "home.hero.stat.focus": "FOCUS",
    "home.hero.stat.focus.value": "Web · Apps · Laravel",
    "home.hero.stat.status": "STATUS",
    "home.hero.stat.status.value": "Available for work",
    "home.hero.stat.location": "BASED IN",
    "home.hero.stat.location.value": "Surabaya, Indonesia",
    "home.hero.side1": "PORTFOLIO — 2026",
    "home.hero.side2": "SCROLL TO SELECTED WORK ↓",

    "home.spec1.tag": "◇ EDUCATION",
    "home.spec1.sub": "B.Sc. Informatics Engineering · 2022–2026 · GPA 3.51/4.00",
    "home.spec2.tag": "◇ FOCUS",
    "home.spec2.val": "Full-Stack Web",
    "home.spec2.sub": "Laravel (backend &amp; REST API) + React/TypeScript (frontend)",
    "home.spec3.tag": "◇ LOCATION",
    "home.spec3.sub": "Open to remote or on-site opportunities",
    "home.spec.role": "ROLE",
    "home.spec.focus.val": "Web · Laravel · React",
    "home.spec.status": "STATUS",
    "home.spec.status.val": "Open for work",

    "home.about.eyebrow": "About",
    "home.about.h2": "Thoughtful technology, made simple.",
    "home.about.p": "I'm <strong>Hendrikus</strong>, an Informatics Engineering graduate from ITATS with a 3.51 GPA. I enjoy building web applications from requirements analysis through testing, with full-stack experience using Laravel, React, TypeScript, PHP, and MySQL.",
    "home.about.p1.tag": "◇ EDUCATION",
    "home.about.p1.li1": "B.Sc. Informatics Engineering, Institut Teknologi Adhi Tama Surabaya (2022–2026)",
    "home.about.p1.li2": "GPA 3.51 / 4.00 — Cum Laude",

    "home.about.p2.tag": "◇ FOCUS",
    "home.about.p2.li1": "Full-Stack Web Development",
    "home.about.p2.li2": "Laravel (backend & REST API)",
    "home.about.p2.li3": "React + TypeScript (frontend)",

    "home.about.p3.tag": "◇ TOOLS & OTHERS",

    "home.about.stats.ipk.tag": "◇ GPA",
    "home.about.stats.ipk.sub": "Cum Laude",
    "home.about.stats.grad.tag": "◇ GRADUATED",
    "home.about.stats.grad.sub": "B.Sc. Informatics Engineering",

    "home.stack.eyebrow": "Technical Specification",
    "home.stack.h2": "Tech Stack",
    "home.stack.k1": "Programming Languages",
    "home.stack.k2": "Frameworks &amp; Libraries",
    "home.stack.k3": "Database",
    "home.stack.k4": "Tools &amp; Other",

    "home.cta.h3": "See the projects I've built",
    "home.cta.p": "Full project sheets with technical detail live on the Projects page.",
    "home.cta.btn": "Open Projects",

    "tb.name.lbl": "Name",
    "tb.sheet.lbl": "Sheet",
    "tb.role.lbl": "Role",
    "tb.role.val": "Software / Web Dev",
    "tb.rev.lbl": "Rev.",
    "tb.contact.lbl": "Contact",
    "tb.sheet.home": "01 / 03 — Home",
    "tb.sheet.projects": "02 / 03 — Projects",
    "tb.sheet.contact": "03 / 03 — Contact",

    "projects.title": "Projects — Hendrikus Christianto N. Olmedo",
    "projects.eyebrow": "Selected work",
    "projects.h1": "Building solutions, one project at a time.",
    "projects.lede": "A selection of academic and independent projects combining web development, APIs, and user experience.",
    "projects.count.label": "PROJECTS",
    "projects.filter.all": "All",
    "projects.filter.academic": "Academic",
    "projects.filter.independent": "Independent",
    "projects.repo": "View repository",
    "projects.image.p1": "Enlarge haircut reservation project preview",
    "projects.image.p2": "Enlarge inventory and finance system preview",
    "projects.image.p3": "Enlarge food recipe website preview",
    "projects.image.p4": "Enlarge WiFi management system preview",
    "projects.image.alt.p1": "Haircut reservation management system screenshot",
    "projects.image.alt.p2": "Inventory and finance management system screenshot",
    "projects.image.alt.p3": "Food recipe website screenshot",
    "projects.image.alt.p4": "WiFi management system screenshot",
    "projects.p": "Projects designed &amp; built solo, from database design to the user interface.",

    "screenshot.label": "↳ Click to enlarge",

    "p1.subtitle": "Haircut Service Reservation Management System",
    "p1.desc": "A web-based haircut service reservation application with a separate backend API and frontend architecture. Built from requirements analysis and system design through to testing using the Prototype model.",
    "p1.li1": "Built a REST API with Laravel (PHP) to manage reservation data, schedules, services, and user authentication.",
    "p1.li2": "Built a responsive user interface with React &amp; TypeScript that is easy to use for customers.",
    "p1.li3": "Designed the MySQL database schema for an efficient reservation process with minimal schedule conflicts.",

    "p2.subtitle": "Inventory &amp; Financial Record-Keeping System",
    "p2.desc": "A web-based system for recording daily, monthly, and yearly financial transactions, with automated report recaps.",
    "p2.li1": "Built a system for recording financial transactions (daily/monthly/yearly) using Laravel.",
    "p2.li2": "Implemented automated reporting features to support periodic financial data recaps.",

    "p3.subtitle": "Food Recipe Sharing & Exploration Platform",
    "p3.desc": "A platform for sharing and exploring food recipes with search, bookmark, and recipe management (CRUD) features, built with PHP Native and MySQL.",
    "p3.li1": "Built a recipe management system with CRUD operations (Create, Read, Update, Delete) using PHP Native.",
    "p3.li2": "Implemented recipe search functionality based on categories and keywords.",
    "p3.li3": "Created a bookmark system for users to save their favorite recipes.",
    "p3.li4": "Designed a MySQL database to store recipe data, categories, and user bookmarks.",
    "p3.stack": "Stack",

    "p4.subtitle": "WiFi Management System",
    "p4.desc": "A web-based WiFi management system with authentication, role-based user management, network monitoring, and analytical dashboard, built with Laravel 10 and Tailwind CSS.",
    "p4.li1": "Built authentication and user management system with roles (Admin, Operator, User) using Laravel Breeze.",
    "p4.li2": "Implemented an analytical dashboard with interactive charts for WiFi network monitoring.",
    "p4.li3": "Built WiFi access point management and user connection log tracking features.",
    "p4.li4": "Designed a MySQL database with Eloquent ORM for efficient data management.",
    "p4.stack": "Stack",

    "projects.link": "↳ View repository on GitHub",

    "projects.cta.h3": "Interested in talking further?",
    "projects.cta.p": "I'm open to Software/Web Developer opportunities, remote or on-site.",
    "projects.cta.btn": "Contact Me",

    "contact.title": "Contact — Hendrikus C. N. Olmedo",
    "contact.eyebrow": "Let's start a conversation",
    "contact.h1": "Let's connect.",
    "contact.p": "Open to Software/Web Developer opportunities remote or on-site. Reach out via the form, email, or GitHub.",

    "contact.card.cta": "Reach out →",
    "contact.form.eyebrow": "SEND MESSAGE",
    "contact.form.h2": "Have a project or job opportunity?",

    "contact.lbl.email": "Email",
    "contact.lbl.phone": "Phone",
    "contact.lbl.github": "GitHub",
    "contact.lbl.location": "Location",
    "contact.val.location": "Surabaya, East Java, Indonesia",

    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.ph.name": "Your name",
    "contact.form.ph.email": "email@example.com",
    "contact.form.ph.message": "Write your message here...",
    "contact.form.btn": "Send Message",
    "contact.form.note": "This button opens Gmail with a pre-filled message to edonurcahyo25@gmail.com.",

    "certificates.title": "Certificates — Hendrikus Olmedo",
    "certificates.brand.aria": "Hendrikus Olmedo — Home",
    "certificates.meta.description": "A collection of industry training, technical competency, seminar speaker, and language proficiency certificates earned by Hendrikus Christianto N. Olmedo.",
    "certificates.section": "CERTIFICATES",
    "certificates.eyebrow": "Learning & development",
    "certificates.h1": "Certificates & achievements.",
    "certificates.lede": "A collection of training, course, and professional achievement certificates.",
    "certificates.count.label": "DOCUMENTS",
    "certificates.filter.aria": "Filter certificate categories",
    "certificates.grid.aria": "List of certificates and achievements",
    "certificates.filter.all": "All",
    "certificates.filter.course": "Courses & Certifications",
    "certificates.filter.seminar": "Seminars & Speaking",
    "certificates.filter.language": "Language Proficiency",
    "certificates.btn.view": "View PDF",
    "certificates.item1.category": "Course Certificate",
    "certificates.item1.title": "Interaction Design: Flow",
    "certificates.item1.description": "A user interaction design certificate covering application navigation flows, task simplification, and a more comfortable experience in modern web interfaces.",
    "certificates.item1.preview": "Preview of the Interaction Design: Flow certificate",
    "certificates.item1.download": "Download Interaction Design Flow certificate PDF",
    "certificates.item2.category": "Database Competency",
    "certificates.item2.title": "Database Practicum Certificate IX",
    "certificates.item2.description": "Completed an intensive relational database practicum covering ERD design, table normalization, DDL/DML queries, aggregate functions, subqueries, indexing, and MySQL query optimization.",
    "certificates.item2.preview": "Preview of the Database Practicum IX certificate",
    "certificates.item2.download": "Download Database Practicum Certificate IX PDF",
    "certificates.item3.category": "Speaker",
    "certificates.item3.title": "Learning Project Speaker Certificate",
    "certificates.item3.description": "Recognition for presenting as a speaker at an academic seminar, showcasing software engineering solutions and information systems to a campus audience.",
    "certificates.item3.preview": "Preview of the Learning Project Speaker certificate",
    "certificates.item3.download": "Download seminar speaker certificate PDF",
    "certificates.item4.category": "National Seminar",
    "certificates.item4.title": "SNESTIK National Seminar",
    "certificates.item4.description": "Participation in the National Seminar on Electrical Engineering, Information Systems, and Informatics, covering applied research, AI, and modern computing architecture innovations.",
    "certificates.item4.preview": "Preview of the SNESTIK National Seminar certificate",
    "certificates.item4.download": "Download SNESTIK National Seminar certificate PDF",
    "certificates.item5.category": "Professional Development",
    "certificates.item5.title": "Professional Manner Seminar",
    "certificates.item5.description": "Professional etiquette and industry-readiness training covering business communication, teamwork etiquette, conflict management, and adapting to technology workplaces.",
    "certificates.item5.preview": "Preview of the Professional Manner Seminar certificate",
    "certificates.item5.download": "Download Professional Manner Seminar certificate PDF",
    "certificates.item6.category": "Language Proficiency Test",
    "certificates.item6.title": "Test of English as a Foreign Language",
    "certificates.item6.description": "An academic and professional English proficiency certificate covering Listening Comprehension, Structure & Written Expression, and Reading Comprehension.",
    "certificates.item6.preview": "Preview of the Test of English as a Foreign Language certificate",
    "certificates.item6.download": "Download TOEFL ITATS certificate PDF",
    "certificates.item7.category": "Language Training",
    "certificates.item7.title": "The English Training for Freshmen",
    "certificates.item7.description": "An intensive program strengthening foundational English communication, functional grammar, and academic skills for presentations and university-level interaction.",
    "certificates.item7.preview": "Preview of the English Training for Freshmen certificate",
    "certificates.item7.download": "Download English Training certificate PDF",
    "certificates.cta.eyebrow": "Collaboration & Opportunities",
    "certificates.cta.title": "Interested in my qualifications and experience?",
    "certificates.cta.desc": "I am ready to contribute to your team's systems and web application development.",
    "certificates.cta.btn": "Get in touch",
    "certificates.empty.eyebrow": "Certificate collection",
    "certificates.empty.title": "Certificates will appear here.",
    "certificates.empty.description": "There are no certificates to display yet. Please check back for updates.",
    "certificates.empty.contact": "Get in touch"
  }
};

const LANG_KEY = "site-lang";

function getLang() {
  return localStorage.getItem(LANG_KEY) || "id";
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.id;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    const key = el.getAttribute("data-i18n-content");
    if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
  });

  document.querySelectorAll("[data-i18n-href]").forEach(el => {
    const key = el.getAttribute("data-i18n-href");
    if (dict[key] !== undefined) el.setAttribute("href", dict[key]);
  });

  if (dict["__title__"]) document.title = dict["__title__"];
  const titleKeyEl = document.querySelector("[data-i18n-title]");
  if (titleKeyEl) {
    const key = titleKeyEl.getAttribute("data-i18n-title");
    if (dict[key]) document.title = dict[key];
  }

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-opt").forEach(opt => {
    const isActive = opt.getAttribute("data-lang") === lang;
    opt.classList.toggle("is-active", isActive);
    opt.setAttribute("aria-pressed", String(isActive));
  });
}

function initLangToggle() {
  const lang = getLang();
  applyTranslations(lang);

  document.querySelectorAll(".lang-opt").forEach(opt => {
    opt.addEventListener("click", () => {
      const chosen = opt.getAttribute("data-lang");
      localStorage.setItem(LANG_KEY, chosen);
      applyTranslations(chosen);
    });
  });
}

document.addEventListener("DOMContentLoaded", initLangToggle);