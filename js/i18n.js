/* =========================================================
   Translations — ID (default) / EN
   Keys are grouped by page. Elements are matched via
   data-i18n="key" (textContent), data-i18n-html="key"
   (innerHTML, for text that contains markup like <br>/<span>),
   or data-i18n-placeholder="key" (input/textarea placeholder).
   Technical "blueprint" labels (FIG., SCALE, PROJECT NO.,
   MODEL: PROTOTYPE) are kept in English in both languages on
   purpose — they read as drafting-sheet convention, not prose.
   ========================================================= */
const translations = {
  id: {
    /* nav */
    "nav.home": "Beranda",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    "nav.aria": "Ganti bahasa",

    /* home */
    "home.title": "Hendrikus Christianto N. Olmedo — Software / Web Developer",
    "home.eyebrow": "Software / Web Developer — Surabaya, ID",
    "home.hero.h1": "Merancang &amp; membangun<br>aplikasi web, <span class=\"accent\">dari cetak biru<br>sampai produksi.</span>",
    "home.hero.role": "Hendrikus Christianto N. Olmedo — Fresh Graduate, Informatika ITATS",
    "home.hero.lede": "Fresh graduate Teknik Informatika dari Institut Teknologi Adhi Tama Surabaya (IPK 3.50) dengan fondasi kuat di full-stack web development memakai Laravel &amp; React mulai dari desain sistem, REST API, hingga antarmuka yang siap dipakai pengguna.",
    "home.hero.cta1": "Lihat Proyek",
    "home.hero.cta2": "Hubungi Saya",

    "home.spec1.tag": "◇ PENDIDIKAN",
    "home.spec1.sub": "S1 Teknik Informatika · 2022–2026 · IPK 3.50/4.00",
    "home.spec2.tag": "◇ FOKUS",
    "home.spec2.val": "Full-Stack Web",
    "home.spec2.sub": "Laravel (backend &amp; REST API) + React/TypeScript (frontend)",
    "home.spec3.tag": "◇ LOKASI",
    "home.spec3.sub": "Terbuka untuk kerja remote maupun on-site",

    "home.about.eyebrow": "Tentang",
    "home.about.h2": "Profil Singkat",
    "home.about.p": "Saya seorang fresh graduate Informatika yang terbiasa membangun aplikasi web dari nol mulai dari analisis kebutuhan dan perancangan sistem, sampai implementasi backend dan antarmuka pengguna. Skripsi dan proyek mandiri saya dikembangkan dengan model <em>Prototype</em>: rancang, uji, dan revisi berulang sampai sistemnya benar-benar pas dengan kebutuhan pengguna. Terbiasa dengan PHP, TypeScript, dan JavaScript, dan cepat beradaptasi dengan bahasa lain seperti Python, Java, dan C++. Sekarang siap berkontribusi sebagai Software/Web Developer dan terus berkembang di lingkungan kerja profesional.",

    "home.stack.eyebrow": "Spesifikasi Teknis",
    "home.stack.h2": "Tech Stack",
    "home.stack.k1": "Bahasa Pemrograman",
    "home.stack.k2": "Framework &amp; Library",
    "home.stack.k3": "Database",
    "home.stack.k4": "Tools &amp; Lainnya",

    "home.cta.h3": "Lihat proyek yang sudah dibangun",
    "home.cta.p": "Dua sheet proyek lengkap dengan detail teknis ada di halaman Projects.",
    "home.cta.btn": "Buka Projects",

    "tb.name.lbl": "Nama",
    "tb.sheet.lbl": "Sheet",
    "tb.role.lbl": "Peran",
    "tb.role.val": "Software / Web Dev",
    "tb.rev.lbl": "Rev.",
    "tb.contact.lbl": "Kontak",
    "tb.sheet.home": "01 / 03 — Beranda",
    "tb.sheet.projects": "02 / 03 — Proyek",
    "tb.sheet.contact": "03 / 03 — Kontak",

    /* projects page */
    "projects.title": "Projects — Hendrikus Christianto N. Olmedo",
    "projects.eyebrow": "Sheet 02 — Proyek",
    "projects.h1": "Dua proyek, dua studi kasus.",
    "projects.p": "Skripsi dan proyek mandiri yang dirancang &amp; dibangun sendiri, dari desain database sampai antarmuka pengguna. Gambar di bawah adalah sketsa skematik pengganti tangkapan layar.",

    "p1.subtitle": "Seniman Barbershop",
    "p1.desc": "Aplikasi reservasi jasa potong rambut berbasis web, dirancang &amp; dibangun dari analisis kebutuhan, desain sistem, sampai pengujian menggunakan model Prototype.",
    "p1.li1": "Membangun backend dengan Laravel (PHP) &amp; REST API untuk mengelola data reservasi, jadwal, dan layanan barbershop.",
    "p1.li2": "Membangun antarmuka responsif dengan React &amp; TypeScript untuk pengalaman booking yang mudah dipakai pelanggan.",
    "p1.li3": "Merancang skema database MySQL agar proses reservasi efisien dan minim bentrok jadwal.",

    "p2.subtitle": "Sistem Pencatatan Keuangan &amp; Inventaris",
    "p2.desc": "Sistem berbasis web untuk mencatat transaksi keuangan harian, bulanan, dan tahunan, dilengkapi rekap laporan otomatis.",
    "p2.li1": "Membangun sistem pencatatan transaksi keuangan (harian/bulanan/tahunan) menggunakan Laravel.",
    "p2.li2": "Mengimplementasikan fitur pelaporan otomatis untuk mendukung rekapitulasi data keuangan secara berkala.",

    "projects.link": "↳ Lihat repositori di GitHub",

    "projects.cta.h3": "Tertarik berdiskusi lebih lanjut?",
    "projects.cta.p": "Saya terbuka untuk peluang Software/Web Developer, remote maupun on-site.",
    "projects.cta.btn": "Hubungi Saya",

    /* contact page */
    "contact.title": "Contact — Hendrikus C. N. Olmedo",
    "contact.eyebrow": "Sheet 03 — Kontak",
    "contact.h1": "Mari terhubung.",
    "contact.p": "Terbuka untuk peluang Software/Web Developer remote maupun on-site. Silakan hubungi lewat form, email, atau GitHub.",

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
    "contact.form.note": "Tombol ini akan membuka aplikasi email Anda dengan pesan yang sudah terisi otomatis ke edonurcahyo25@gmail.com."
  },

  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.aria": "Switch language",

    "home.title": "Hendrikus C. N. Olmedo — Software / Web Developer",
    "home.eyebrow": "Software / Web Developer — Surabaya, ID",
    "home.hero.h1": "Designing &amp; building<br>web applications, <span class=\"accent\">from blueprint<br>to production.</span>",
    "home.hero.role": "Hendrikus Christianto N. Olmedo — Fresh Graduate, Informatics Engineering, ITATS",
    "home.hero.lede": "Fresh graduate in Informatics Engineering from Institut Teknologi Adhi Tama Surabaya (GPA 3.50) with a strong foundation in full-stack web development using Laravel &amp; React from system design and REST APIs through to interfaces people can actually use.",
    "home.hero.cta1": "View Projects",
    "home.hero.cta2": "Contact Me",

    "home.spec1.tag": "◇ EDUCATION",
    "home.spec1.sub": "B.Sc. Informatics Engineering · 2022–2026 · GPA 3.50/4.00",
    "home.spec2.tag": "◇ FOCUS",
    "home.spec2.val": "Full-Stack Web",
    "home.spec2.sub": "Laravel (backend &amp; REST API) + React/TypeScript (frontend)",
    "home.spec3.tag": "◇ LOCATION",
    "home.spec3.sub": "Open to remote or on-site opportunities",

    "home.about.eyebrow": "About",
    "home.about.h2": "Short Profile",
    "home.about.p": "I'm a fresh Informatics graduate used to building web applications from the ground up from requirements analysis and system design through to backend implementation and user interfaces. My thesis and independent project were both developed with the <em>Prototype</em> model: draft, test, and revise repeatedly until the system truly fits the user's needs. Comfortable with PHP, TypeScript, and JavaScript, and quick to pick up other languages such as Python, Java, and C++. Ready to contribute as a Software/Web Developer and keep growing in a professional environment.",

    "home.stack.eyebrow": "Technical Specification",
    "home.stack.h2": "Tech Stack",
    "home.stack.k1": "Programming Languages",
    "home.stack.k2": "Frameworks &amp; Libraries",
    "home.stack.k3": "Database",
    "home.stack.k4": "Tools &amp; Other",

    "home.cta.h3": "See the projects I've built",
    "home.cta.p": "Two full project sheets with technical detail live on the Projects page.",
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
    "projects.eyebrow": "Sheet 02 — Projects",
    "projects.h1": "Two projects, two case studies.",
    "projects.p": "A thesis and an independent project, both designed &amp; built solo from database design to the user interface. The drawings below are schematic sketches standing in for real screenshots.",

    "p1.subtitle": "Seniman Barbershop",
    "p1.desc": "A web-based haircut service reservation application, designed &amp; built from requirements analysis and system design through to testing using the Prototype model.",
    "p1.li1": "Built the backend with Laravel (PHP) &amp; a REST API to manage reservation data, schedules, and barbershop services.",
    "p1.li2": "Built a responsive interface with React &amp; TypeScript for an easy-to-use customer booking experience.",
    "p1.li3": "Designed the MySQL database schema for an efficient reservation process with minimal schedule conflicts.",

    "p2.subtitle": "Inventory &amp; Financial Record-Keeping System",
    "p2.desc": "A web-based system for recording daily, monthly, and yearly financial transactions, with automated report recaps.",
    "p2.li1": "Built a system for recording financial transactions (daily/monthly/yearly) using Laravel.",
    "p2.li2": "Implemented automated reporting features to support periodic financial data recaps.",

    "projects.link": "↳ View repository on GitHub",

    "projects.cta.h3": "Interested in talking further?",
    "projects.cta.p": "I'm open to Software/Web Developer opportunities, remote or on-site.",
    "projects.cta.btn": "Contact Me",

    "contact.title": "Contact — Hendrikus C. N. Olmedo",
    "contact.eyebrow": "Sheet 03 — Contact",
    "contact.h1": "Let's connect.",
    "contact.p": "Open to Software/Web Developer opportunities remote or on-site. Reach out via the form, email, or GitHub.",

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
    "contact.form.note": "This button opens your email app with a pre-filled message to edonurcahyo25@gmail.com."
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

  if (dict["__title__"]) document.title = dict["__title__"];
  const titleKeyEl = document.querySelector("[data-i18n-title]");
  if (titleKeyEl) {
    const key = titleKeyEl.getAttribute("data-i18n-title");
    if (dict[key]) document.title = dict[key];
  }

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-opt").forEach(opt => {
    opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
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
